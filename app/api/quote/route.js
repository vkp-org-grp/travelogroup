import { NextResponse } from 'next/server';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { getTransporter, escapeHtml, autoReplyHtml } from '@/lib/mailer';
import { isValidEmail, isValidPassengerCount, MIN_PASSENGERS } from '@/lib/validators';
import { getNextRefNumber } from '@/lib/refNumber';
import { site } from '@/data/site';

const TRIP_LABELS = { round: 'Round Trip', oneway: 'One Way', multi: 'Multi-City' };

function routeRows(body) {
  if (body.tripType === 'multi') {
    return (body.legs || [])
      .map(
        (leg, i) =>
          `<p><strong>Leg ${i + 1}:</strong> ${escapeHtml(leg.from)} &rarr; ${escapeHtml(leg.to)} on ${escapeHtml(leg.date)}</p>`
      )
      .join('');
  }

  const rows = [`<p><strong>From:</strong> ${escapeHtml(body.from)}</p>`, `<p><strong>To:</strong> ${escapeHtml(body.to)}</p>`, `<p><strong>Departure:</strong> ${escapeHtml(body.depart)}</p>`];
  if (body.tripType === 'round') {
    rows.push(`<p><strong>Return:</strong> ${escapeHtml(body.ret)}</p>`);
  }
  return rows.join('');
}

export async function POST(request) {
  const body = await request.json();
  const { tripType, passengers, cabin, phone, email } = body;

  if (!phone || !email || !passengers) {
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
      subject: `New group quote request (${TRIP_LABELS[tripType] || tripType}) (Ref. No: ${refNo})`,
      html: `
        <p><strong>Ref. No:</strong> ${refNo}</p>
        <p><strong>Trip type:</strong> ${escapeHtml(TRIP_LABELS[tripType] || tripType)}</p>
        ${routeRows(body)}
        <p><strong>Cabin:</strong> ${escapeHtml(cabin)}</p>
        <p><strong>Passengers:</strong> ${escapeHtml(passengers)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
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
    console.error('Quote email failed:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
