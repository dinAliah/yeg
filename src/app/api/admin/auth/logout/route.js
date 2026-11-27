import { NextResponse } from 'next/server';
import { clearAdminSessionCookie, isSameOriginRequest } from '@/lib/zohoAdmin';

export const runtime = 'nodejs';

export async function POST(request) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json(
      { error: 'Invalid request origin.' },
      { status: 403, headers: { 'Cache-Control': 'no-store' } },
    );
  }

  const response = NextResponse.json({ success: true }, { headers: { 'Cache-Control': 'no-store' } });
  clearAdminSessionCookie(response);
  return response;
}
