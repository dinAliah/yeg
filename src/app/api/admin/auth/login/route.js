import { NextResponse } from 'next/server';
import {
  createOAuthState,
  createOAuthStateCookie,
  getOAuthEndpoints,
} from '@/lib/zohoAdmin';

export const runtime = 'nodejs';

export async function GET(request) {
  try {
    const oauth = getOAuthEndpoints();
    const state = createOAuthState();
    const authorizeUrl = new URL(oauth.authorizeUrl);
    authorizeUrl.search = new URLSearchParams({
      response_type: 'code',
      client_id: oauth.clientId,
      scope: oauth.scope,
      redirect_uri: oauth.redirectUri,
      state,
      access_type: 'online',
    }).toString();

    const response = NextResponse.redirect(authorizeUrl);
    const stateCookie = createOAuthStateCookie(state);
    response.cookies.set(stateCookie.name, stateCookie.value, stateCookie.options);
    return response;
  } catch (error) {
    console.error('Zoho admin sign-in is not configured.', error);
    return NextResponse.redirect(new URL('/admin/login?error=setup', request.url));
  }
}
