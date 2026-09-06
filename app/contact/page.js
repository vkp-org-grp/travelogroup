'use client';

import { useState } from 'react';
import { Check, Mail, MapPin, Phone } from 'lucide-react';
import { isValidPhoneNumber } from 'react-phone-number-input';
import PageHero from '@/components/PageHero';
import { Reveal } from '@/components/Motion';
import PhoneField from '@/components/PhoneField';
import ThankYouModal from '@/components/ThankYouModal';
import { site } from '@/data/site';
import { isValidEmail, isValidPassengerCount, MIN_PASSENGERS } from '@/lib/validators';

const emptyForm = { first: '', last: '', email: '', phone: '', passengers: '', message: '' };

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [refNo, setRefNo] = useState(null);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const closeModal = () => {
    setSent(false);
    setForm(emptyForm);
    setEmailTouched(false);
    setRefNo(null);
  };

  const submit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isValidEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!isValidPhoneNumber(form.phone || '')) {
      setError('Please enter a valid phone number for the selected country.');
      return;
    }
    if (!isValidPassengerCount(form.passengers)) {
      setError(`Please enter at least ${MIN_PASSENGERS} passengers.`);
      return;
    }

    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      const data = await res.json();
      setRefNo(data.refNo ?? null);
      setSent(true);
    } catch {
      setError('Something went wrong. Please call us instead.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch" body="Fastest route is the phone — group inventory shifts while a form sits in an inbox. Prefer to write? Send the details and the desk will call you back." />

      <section className="bg-white py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="space-y-5">
              <a href={site.phoneHref} className="group flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold text-navy">
                  <Phone size={17} strokeWidth={2.5} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-navy/40">Group fare desk</span>
                  <span className="mt-1 block font-display text-lg font-bold group-hover:underline">{site.phone}</span>
                </span>
              </a>

              <a href={`mailto:${site.email}`} className="group flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy/5 text-navy">
                  <Mail size={17} strokeWidth={2.2} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-navy/40">Email</span>
                  <span className="mt-1 block text-[15px] font-semibold group-hover:underline">{site.email}</span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy/5 text-navy">
                  <MapPin size={17} strokeWidth={2.2} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-navy/40">Office</span>
                  <span className="mt-1 block text-[15px] leading-relaxed text-navy/70">
                    {site.address.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-9">
              <form onSubmit={submit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="field-label" htmlFor="first">First name</label>
                    <input id="first" required className="field" value={form.first} onChange={set('first')} />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="last">Last name</label>
                    <input id="last" required className="field" value={form.last} onChange={set('last')} />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={`field ${emailTouched && form.email && !isValidEmail(form.email) ? 'border-red-400' : ''}`}
                      value={form.email}
                      onChange={set('email')}
                      onBlur={() => setEmailTouched(true)}
                    />
                    {emailTouched && form.email && !isValidEmail(form.email) && (
                      <p className="mt-1.5 text-xs text-red-600">Enter a valid email address.</p>
                    )}
                  </div>
                  <PhoneField id="phone" label="Phone" required value={form.phone} onChange={(val) => set('phone')({ target: { value: val } })} />
                  <div className="sm:col-span-2">
                    <label className="field-label" htmlFor="passengers">Group size</label>
                    <input id="passengers" type="number" min={MIN_PASSENGERS} required className="field" placeholder={`At least ${MIN_PASSENGERS} required`} value={form.passengers} onChange={set('passengers')} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="field-label" htmlFor="message">Where are you flying, and when?</label>
                    <textarea id="message" rows={5} className="field resize-none" placeholder="e.g. JFK to Rome, 42 passengers, school trip in April, dates flexible" value={form.message} onChange={set('message')} />
                  </div>
                </div>
                {error && <p className="mt-4 text-center text-sm text-red-600">{error}</p>}
                <button type="submit" disabled={sending} className="btn-navy mt-6 w-full py-4 text-base disabled:opacity-60">
                  {sending ? 'Sending…' : 'Send message'}
                </button>
                <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-navy/35">
                  We only use these details to answer your enquiry.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <ThankYouModal open={sent} onClose={closeModal}>
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success text-white">
          <Check size={24} strokeWidth={3} />
        </span>
        <h3 className="mt-5 font-display text-xl font-extrabold">Message received</h3>
        {refNo && (
          <p className="mt-2 inline-block rounded-full bg-paper px-3 py-1 font-mono text-xs font-bold tracking-wide text-navy/70">
            Ref. No: {refNo}
          </p>
        )}
        <p className="mt-3 text-sm font-semibold leading-relaxed text-navy/85">Thank you for your enquiry.</p>
        <p className="mt-2 text-sm leading-relaxed text-navy/60">
          We&apos;ve received your request for a group booking. One of our specialised travel consultants will
          contact you within 24 business hours.
        </p>
        <a href={site.phoneHref} className="btn-gold mt-5 w-full">
          <Phone size={16} strokeWidth={2.5} />
          Call {site.phone}
        </a>
        <button type="button" onClick={closeModal} className="btn-navy mt-3 w-full py-3 text-sm">
          OK
        </button>
      </ThankYouModal>
    </>
  );
}
