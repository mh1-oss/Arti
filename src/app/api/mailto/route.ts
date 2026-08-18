import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const to = searchParams.get('to');
  const subject = searchParams.get('subject') || '';

  if (!to) {
    return new NextResponse('Missing email parameter', { status: 400 });
  }

  const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}`;
  return NextResponse.redirect(mailtoUrl);
}
