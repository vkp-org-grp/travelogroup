import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

// WordPress webhook target: on publish/update, WP calls this URL
// (e.g. via the "WP Webhooks" plugin) so the blog updates without
// waiting for the hourly ISR window or a redeploy.
//
// POST /api/revalidate?secret=YOUR_REVALIDATE_SECRET
export async function POST(request) {
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  revalidateTag('blog');
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
