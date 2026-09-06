import { NextResponse } from 'next/server';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { getTransporter, escapeHtml, autoReplyHtml } from '@/lib/mailer';
import { isValidEmail, isValidPassengerCount, MIN_PASSENGERS } from '@/lib/validators';
import { getNextRefNumber } from '@/lib/refNumber';
import { site } from '@/data/site';

export async function POST(request) {
  const body = await request.json();
  const { first, last, email, phone, passengers, message } = body;

  if (!first || !last || !email || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }
  if (!isValidPhoneNumber(phone)) {
    return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 });
  }
  if (!isValidPassengerCount(passengers)) {
    return NextResponse.json({ error: `Minimum ${MIN_PASSENGERS} passengers required` }, { status: 400 });
  }

  const transporter = getTransporter();
  const from = `"${site.name} Website" <${process.env.SMTP_USER}>`;
  const refNo = await getNextRefNumber();

  try {
    await transporter.sendMail({
      from,
      to: process.env.SUPPORT_EMAIL,
      replyTo: email,
      subject: `New contact enquiry from ${first} ${last} (Ref. No: ${refNo})`,
      html: `
        <p><strong>Ref. No:</strong> ${refNo}</p>
        <p><strong>Name:</strong> ${escapeHtml(first)} ${escapeHtml(last)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Group size:</strong> ${escapeHtml(passengers || 'Not specified')}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      `,
    });

    await transporter.sendMail({
      from: `"${site.name}" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your message (Ref. No: ${refNo})`,
      html: autoReplyHtml(refNo),
    });

    return NextResponse.json({ ok: true, refNo });
  } catch (err) {
    console.error('Contact email failed:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
