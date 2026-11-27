import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';

const SESSION_COOKIE = 'yeg_zoho_admin_session';
const STATE_COOKIE = 'yeg_zoho_admin_state';
const SESSION_TTL_SECONDS = 60 * 60 * 8;
const STATE_TTL_SECONDS = 60 * 10;
const OAUTH_SCOPE = 'AaaServer.profile.READ';
const KNOWN_ZOHO_REGIONS = ['com', 'eu', 'in', 'com.au', 'com.cn', 'com.sg', 'jp', 'sa', 'ae', 'ca'];

function getSecret() {
  const secret = process.env.ZOHO_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error('ZOHO_SESSION_SECRET must be set to a random value of at least 32 characters.');
  }
  return secret;
}

function parseZohoDomain(value, variableName, expectedHostPrefix) {
  if (!value) {
    throw new Error(`${variableName} is not configured.`);
  }

  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${variableName} must be a valid HTTPS URL.`);
  }

  if (url.protocol !== 'https:' || url.username || url.password || url.port || url.search || url.hash || url.pathname !== '/') {
    throw new Error(`${variableName} must be an HTTPS Zoho domain without credentials, port, path, or query.`);
  }

  const hostPattern = expectedHostPrefix === 'www.zohoapis'
    ? /^(?:www\.)?zohoapis\.(.+)$/
    : /^accounts\.zoho\.(.+)$/;
  const match = url.hostname.match(hostPattern);
  if (!match || !KNOWN_ZOHO_REGIONS.includes(match[1])) {
    throw new Error(`${variableName} must use a supported Zoho data-center domain.`);
  }

  return { url, region: match[1] };
}

export function getZohoConfig() {
  const api = parseZohoDomain(process.env.ZOHO_API_DOMAIN, 'ZOHO_API_DOMAIN', 'www.zohoapis');
  const accountsValue = process.env.ZOHO_ACCOUNTS_DOMAIN || `https://accounts.zoho.${api.region}`;
  const accounts = parseZohoDomain(accountsValue, 'ZOHO_ACCOUNTS_DOMAIN', 'accounts');
  const redirectUri = process.env.ZOHO_REDIRECT_URI;

  if (!redirectUri) {
    throw new Error('ZOHO_REDIRECT_URI is not configured.');
  }

  let redirectUrl;
  try {
    redirectUrl = new URL(redirectUri);
  } catch {
    throw new Error('ZOHO_REDIRECT_URI must be a valid callback URL.');
  }

  if (
    (redirectUrl.protocol !== 'https:' && redirectUrl.hostname !== 'localhost' && redirectUrl.hostname !== '127.0.0.1') ||
    redirectUrl.pathname !== '/api/admin/auth/callback' ||
    redirectUrl.search ||
    redirectUrl.hash
  ) {
    throw new Error('ZOHO_REDIRECT_URI must be HTTPS and point to /api/admin/auth/callback.');
  }

  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Zoho OAuth client credentials and refresh token must be configured.');
  }

  getSecret();
  return {
    apiBase: api.url.origin,
    accountsBase: accounts.url.origin,
    redirectUri,
    clientId,
    clientSecret,
    refreshToken,
  };
}

export function isZohoAdminConfigured() {
  try {
    getZohoConfig();
    return true;
  } catch {
    return false;
  }
}

function sign(value) {
  return createHmac('sha256', getSecret()).update(value).digest('base64url');
}

function encodeSignedPayload(payload) {
  const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return `${encoded}.${sign(encoded)}`;
}

function decodeSignedPayload(value) {
  if (!value || typeof value !== 'string') return null;

  const [encoded, suppliedSignature, extra] = value.split('.');
  if (!encoded || !suppliedSignature || extra) return null;

  const expectedSignature = sign(encoded);
  const supplied = Buffer.from(suppliedSignature);
  const expected = Buffer.from(expectedSignature);
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return null;

  try {
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8'));
    if (!payload.exp || payload.exp <= Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

function cookieOptions(maxAge, path = '/') {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path,
    maxAge,
  };
}

export function createOAuthState() {
  return randomBytes(32).toString('base64url');
}

export function createOAuthStateCookie(state) {
  return { name: STATE_COOKIE, value: encodeSignedPayload({ state, exp: Math.floor(Date.now() / 1000) + STATE_TTL_SECONDS }), options: cookieOptions(STATE_TTL_SECONDS, '/api/admin/auth/callback') };
}

export function verifyOAuthStateCookie(cookieValue, state) {
  const payload = decodeSignedPayload(cookieValue);
  if (!payload || !payload.state || !state) return false;
  const expected = Buffer.from(payload.state);
  const supplied = Buffer.from(state);
  return expected.length === supplied.length && timingSafeEqual(expected, supplied);
}

export function clearOAuthStateCookie(response) {
  response.cookies.set(STATE_COOKIE, '', cookieOptions(0, '/api/admin/auth/callback'));
}

export function getOAuthStateCookieName() {
  return STATE_COOKIE;
}

export async function exchangeZohoAuthorizationCode(code) {
  const config = getZohoConfig();
  let response;
  try {
    response = await fetch(`${config.accountsBase}/oauth/v2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: config.clientId,
        client_secret: config.clientSecret,
        redirect_uri: config.redirectUri,
        code,
      }),
      cache: 'no-store',
      redirect: 'error',
    });
  } catch (error) {
    console.error('Zoho admin authorization-code exchange failed.', error);
    throw new Error('Zoho sign-in is unavailable.');
  }

  const result = await response.json().catch(() => null);
  if (!response.ok || !result?.access_token) {
    console.error('Zoho admin authorization-code exchange was rejected.', {
      status: response.status,
      code: result?.error,
    });
    throw new Error('Zoho sign-in could not be verified.');
  }
  return result.access_token;
}

export async function getZohoAccountIdentity(accessToken) {
  const config = getZohoConfig();
  let response;
  try {
    response = await fetch(`${config.accountsBase}/oauth/user/info`, {
      headers: { Authorization: `Zoho-oauthtoken ${accessToken}` },
      cache: 'no-store',
      redirect: 'error',
    });
  } catch (error) {
    console.error('Zoho account identity request failed.', error);
    throw new Error('Zoho sign-in could not be verified.');
  }

  const identity = await response.json().catch(() => null);
  if (!response.ok || !identity || typeof identity.Email !== 'string') {
    console.error('Zoho account identity was rejected.', { status: response.status });
    throw new Error('Zoho sign-in could not be verified.');
  }
  return {
    email: identity.Email.trim().toLowerCase(),
    fullName: String(identity.Display_Name || identity.Name || identity.Email).trim(),
  };
}

export function setAdminSessionCookie(response, user) {
  const value = encodeSignedPayload({
    id: user.id,
    email: user.email,
    fullName: user.full_name || user.fullName || user.email,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  });
  response.cookies.set(SESSION_COOKIE, value, cookieOptions(SESSION_TTL_SECONDS));
}

export function clearAdminSessionCookie(response) {
  response.cookies.set(SESSION_COOKIE, '', cookieOptions(0));
}

export async function getSignedInAdmin() {
  const cookieStore = await cookies();
  const payload = decodeSignedPayload(cookieStore.get(SESSION_COOKIE)?.value);
  if (!payload || !payload.id || !payload.email) return null;
  return { id: String(payload.id), email: String(payload.email), fullName: String(payload.fullName || payload.email) };
}

export async function getCrmAccessToken() {
  const config = getZohoConfig();
  let response;
  try {
    response = await fetch(`${config.accountsBase}/oauth/v2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: config.clientId,
        client_secret: config.clientSecret,
        refresh_token: config.refreshToken,
      }),
      cache: 'no-store',
      redirect: 'error',
    });
  } catch (error) {
    console.error('Zoho CRM access-token request failed.', error);
    throw new Error('Zoho CRM is unavailable.');
  }

  const result = await response.json().catch(() => null);
  if (!response.ok || !result?.access_token) {
    console.error('Zoho CRM access-token refresh was rejected.', { status: response.status, code: result?.error });
    throw new Error('Zoho CRM authorization failed. Check the server-side OAuth configuration.');
  }
  return result.access_token;
}

export async function zohoCrmRequest(path, accessToken) {
  const config = getZohoConfig();
  const response = await fetch(`${config.apiBase}/crm/v8/${path.replace(/^\/+/, '')}`, {
    headers: { Authorization: `Zoho-oauthtoken ${accessToken}` },
    cache: 'no-store',
    redirect: 'error',
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || result?.code === 'INVALID_TOKEN') {
    console.error('Zoho CRM API request failed.', { status: response.status, code: result?.code });
    throw new Error('Could not read users from Zoho CRM. Verify the token has ZohoCRM.users.READ permission.');
  }
  return result;
}

export async function getZohoCrmUser(accessToken, id) {
  const result = await zohoCrmRequest(`users/${encodeURIComponent(id)}`, accessToken);
  const user = Array.isArray(result.users) ? result.users[0] : null;
  if (!user) throw new Error('The Zoho CRM user could not be verified.');
  return user;
}

export async function getZohoCrmUsers(accessToken) {
  const users = [];
  for (let page = 1; page <= 25; page += 1) {
    const result = await zohoCrmRequest(`users?type=AllUsers&per_page=200&page=${page}`, accessToken);
    if (!Array.isArray(result.users)) {
      throw new Error('Zoho CRM returned an invalid user list.');
    }
    users.push(...result.users);
    if (!result.info?.more_records) return users;
  }
  throw new Error('Zoho CRM has more than 5,000 users. Narrow the user list in Zoho CRM before retrying.');
}

export async function verifyZohoAdmin(session, accessToken) {
  const user = await getZohoCrmUser(accessToken, session.id);
  if (
    String(user.email || '').toLowerCase() !== session.email.toLowerCase() ||
    String(user.status || '').toLowerCase() !== 'active' ||
    String(user.profile?.name || '').toLowerCase() !== 'administrator'
  ) {
    return null;
  }
  return user;
}

export function getZohoCrmUrl() {
  const api = parseZohoDomain(process.env.ZOHO_API_DOMAIN, 'ZOHO_API_DOMAIN', 'www.zohoapis');
  return `https://crm.zoho.${api.region}`;
}

export function getOAuthEndpoints() {
  const config = getZohoConfig();
  return {
    authorizeUrl: `${config.accountsBase}/oauth/v2/auth`,
    tokenUrl: `${config.accountsBase}/oauth/v2/token`,
    userInfoUrl: `${config.accountsBase}/oauth/user/info`,
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    redirectUri: config.redirectUri,
    scope: OAUTH_SCOPE,
  };
}

export function isSameOriginRequest(request) {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}
