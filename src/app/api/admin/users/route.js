import { NextResponse } from 'next/server';
import {
  clearAdminSessionCookie,
  getCrmAccessToken,
  getSignedInAdmin,
  getZohoCrmUsers,
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

    const users = await getZohoCrmUsers(accessToken);
    return jsonResponse({
      users: users.map((user) => ({
        id: String(user.id || ''),
        fullName: String(user.full_name || [user.first_name, user.last_name].filter(Boolean).join(' ') || 'Unnamed user'),
        email: String(user.email || ''),
        profile: String(user.profile?.name || '—'),
        role: String(user.role?.name || '—'),
        status: String(user.status || 'unknown'),
        confirmed: Boolean(user.confirm),
        type: String(user.type__s || 'Regular User'),
      })),
    });
  } catch (error) {
    console.error('Could not load Zoho CRM users for the admin dashboard.', error);
    return jsonResponse({ error: 'Could not load users from Zoho CRM.' }, 502);
  }
}
