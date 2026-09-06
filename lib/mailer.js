import nodemailer from 'nodemailer';

let transporter;

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c]));
}

export function autoReplyHtml(refNo) {
  return `
    <p><strong>Thank You!</strong> Your Enquiry Has Been Received Successfully</p>
    <p>We truly appreciate you taking the time to share your travel requirements with us.</p>
    <p>One of our specialized travel consultants will carefully review your requirements and contact you within 24
    working hours to understand your travel needs and assist you with suitable options.</p>
    <p>We value your time and look forward to assisting you in planning your journey.</p>
    <p>Thank you for choosing us for your travel needs. We look forward to serving you!</p>
    <p><strong>Ref. No:</strong> ${refNo}</p>
  `;
}

export function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  return transporter;
}
