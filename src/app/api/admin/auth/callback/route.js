import { NextResponse } from 'next/server';
import {
  clearOAuthStateCookie,
  exchangeZohoAuthorizationCode,
  getOAuthStateCookieName,
  getZohoAccountIdentity,
  getCrmAccessToken,
  getZohoCrmUsers,
  setAdminSessionCookie,
  verifyOAuthStateCookie,
} from '@/lib/zohoAdmin';

export const runtime = 'nodejs';

function loginRedirect(request, reason) {
  return NextResponse.redirect(new URL(`/admin/login?error=${reason}`, request.url));
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const state = searchParams.get('state');
  const code = searchParams.get('code');
  const stateCookie = request.cookies.get(getOAuthStateCookieName())?.value;

  if (!verifyOAuthStateCookie(stateCookie, state)) {
    const response = loginRedirect(request, 'verification');
    clearOAuthStateCookie(response);
    return response;
  }

  if (searchParams.has('error')) {
    const response = loginRedirect(request, 'cancelled');
    clearOAuthStateCookie(response);
    return response;
  }

  if (!code) {
    const response = loginRedirect(request, 'verification');
    clearOAuthStateCookie(response);
    return response;
  }

  try {
    const identityToken = await exchangeZohoAuthorizationCode(code);
    const identity = await getZohoAccountIdentity(identityToken);
    const crmAccessToken = await getCrmAccessToken();
    const users = await getZohoCrmUsers(crmAccessToken);
    const matches = users.filter(
      (user) => String(user.email || '').trim().toLowerCase() === identity.email,
    );

    if (
      matches.length !== 1 ||
      String(matches[0].status || '').toLowerCase() !== 'active' ||
      String(matches[0].profile?.name || '').toLowerCase() !== 'administrator'
    ) {
      const response = loginRedirect(request, 'admin-only');
      clearOAuthStateCookie(response);
      return response;
    }

    const response = NextResponse.redirect(new URL('/admin', request.url));
    setAdminSessionCookie(response, {
      id: matches[0].id,
      email: identity.email,
      fullName: identity.fullName || matches[0].full_name,
    });
    clearOAuthStateCookie(response);
    return response;
  } catch (error) {
    console.error('Zoho administrator sign-in could not be completed.', error);
    const response = loginRedirect(request, 'unavailable');
    clearOAuthStateCookie(response);
    return response;
  }
}
