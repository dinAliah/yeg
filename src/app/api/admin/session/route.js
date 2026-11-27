import { NextResponse } from 'next/server';
import {
  clearAdminSessionCookie,
  getCrmAccessToken,
  getSignedInAdmin,
  getZohoCrmUrl,
  verifyZohoAdmin,
} from '@/lib/zohoAdmin';

export const runtime = 'nodejs';

function jsonResponse(body, status = 200) {
  return NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
}

export async function GET() {
  const session = await getSignedInAdmin();
  if (!session) return jsonResponse({ error: 'Sign in required.' }, 401);

  try {
    const accessToken = await getCrmAccessToken();
    const admin = await verifyZohoAdmin(session, accessToken);
    if (!admin) {
      const response = jsonResponse({ error: 'An active Zoho CRM Administrator account is required.' }, 403);
      clearAdminSessionCookie(response);
      return response;
    }

    return jsonResponse({
      user: {
        id: session.id,
        email: session.email,
        fullName: admin.full_name || session.fullName,
        profile: admin.profile.name,
      },
      crmUrl: getZohoCrmUrl(),
    });
  } catch (error) {
    console.error('Could not verify the Zoho admin session.', error);
    return jsonResponse({ error: 'Could not verify your Zoho CRM administrator access.' }, 503);
  }
}
