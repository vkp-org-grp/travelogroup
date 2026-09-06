'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Phone, Plus, PlaneLanding, PlaneTakeoff, Route, Send, X } from 'lucide-react';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { site } from '@/data/site';
import AirportField from '@/components/AirportField';
import PhoneField from '@/components/PhoneField';
import ThankYouModal from '@/components/ThankYouModal';
import { isValidEmail, isValidPassengerCount, MIN_PASSENGERS } from '@/lib/validators';

const TABS = [
  { id: 'round', label: 'Round Trip', Icon: PlaneLanding },
  { id: 'oneway', label: 'One Way', Icon: PlaneTakeoff },
  { id: 'multi', label: 'Multi-City', Icon: Route },
];

const emptyForm = { from: '', to: '', depart: '', ret: '', passengers: MIN_PASSENGERS, cabin: 'Economy', email: '', phone: '' };
const emptyLeg = { from: '', to: '', date: '' };
const MAX_LEGS = 5;

const toISODate = (d) => d.toISOString().split('T')[0];
const MIN_DATE = toISODate(new Date());
const MAX_DATE = toISODate(new Date(new Date().setMonth(new Date().getMonth() + 12)));

export default function SearchWidget() {
  const [tab, setTab] = useState('round');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState(emptyForm);
  const [legs, setLegs] = useState([{ ...emptyLeg }, { ...emptyLeg }]);
  const [emailTouched, setEmailTouched] = useState(false);
  const [refNo, setRefNo] = useState(null);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const closeModal = () => {
    setSent(false);
    setForm(emptyForm);
    setLegs([{ ...emptyLeg }, { ...emptyLeg }]);
    setEmailTouched(false);
    setRefNo(null);
  };

  const setDepart = (e) => {
    const depart = e.target.value;
    setForm((prev) => ({ ...prev, depart, ret: prev.ret && prev.ret < depart ? '' : prev.ret }));
  };

  const setLeg = (idx, key) => (e) =>
    setLegs((prev) => prev.map((leg, i) => (i === idx ? { ...leg, [key]: e.target.value } : leg)));

  const setLegDate = (idx) => (e) => {
    const date = e.target.value;
    setLegs((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], date };
      // Keep later legs chronological: clear any leg whose date now falls
      // before the (possibly just-changed) leg right before it.
      for (let i = idx + 1; i < next.length; i++) {
        const minAllowed = next[i - 1].date || MIN_DATE;
        if (next[i].date && next[i].date < minAllowed) {
          next[i] = { ...next[i], date: '' };
        }
      }
      return next;
    });
  };

  const addLeg = () => setLegs((prev) => (prev.length < MAX_LEGS ? [...prev, { ...emptyLeg }] : prev));
  const removeLeg = (idx) => setLegs((prev) => prev.filter((_, i) => i !== idx));

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

    const payload = {
      tripType: tab,
      passengers: form.passengers,
      cabin: form.cabin,
      phone: form.phone,
      email: form.email,
      ...(tab === 'multi' ? { legs } : { from: form.from, to: form.to, depart: form.depart, ret: form.ret }),
    };

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
    <div className="card p-5 sm:p-7">
      <div role="tablist" aria-label="Trip type" className="mb-6 inline-flex flex-wrap gap-1 rounded-full bg-paper p-1">
        {TABS.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={active}
              onClick={() => setTab(t.id)}
              className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active ? 'text-navy' : 'text-navy/45 hover:text-navy/70'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="tabPill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <t.Icon size={14} strokeWidth={2.4} className="relative" />
              <span className="relative">{t.label}</span>
            </button>
          );
        })}
      </div>

      <form onSubmit={submit}>
        <AnimatePresence mode="wait" initial={false}>
          {tab === 'multi' ? (
            <motion.div key="multi-legs" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="space-y-3">
              {legs.map((leg, idx) => (
                <div key={idx} className="grid gap-3 rounded-xl border border-navy/10 bg-paper/60 p-3 sm:grid-cols-[1fr_1fr_1fr_auto]">
                  <AirportField
                    id={`leg-from-${idx}`}
                    label={`Leg ${idx + 1} · From`}
                    placeholder="City or airport"
                    required
                    value={leg.from}
                    onChange={(val) => setLeg(idx, 'from')({ target: { value: val } })}
                  />
                  <AirportField
                    id={`leg-to-${idx}`}
                    label="To"
                    placeholder="City or airport"
                    required
                    value={leg.to}
                    onChange={(val) => setLeg(idx, 'to')({ target: { value: val } })}
                  />
                  <div>
                    <label className="field-label" htmlFor={`leg-date-${idx}`}>
                      Date
                    </label>
                    <input
                      id={`leg-date-${idx}`}
                      required
                      type="date"
                      min={legs[idx - 1]?.date || MIN_DATE}
                      max={MAX_DATE}
                      className="field"
                      value={leg.date}
                      onChange={setLegDate(idx)}
                    />
                  </div>
                  {legs.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeLeg(idx)}
                      aria-label={`Remove leg ${idx + 1}`}
                      className="grid h-9 w-9 place-items-center self-end rounded-lg border border-navy/12 text-navy/50 transition-colors hover:border-navy hover:text-navy sm:self-center"
                    >
                      <X size={15} />
                    </button>
                  )}
                </div>
              ))}

              {legs.length < MAX_LEGS && (
                <button
                  type="button"
                  onClick={addLeg}
                  className="flex items-center gap-1.5 text-sm font-semibold text-navy/60 transition-colors hover:text-navy"
                >
                  <Plus size={15} strokeWidth={2.5} />
                  Add another leg
                </button>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="field-label" htmlFor="cabin-multi">
                    Cabin
                  </label>
                  <select id="cabin-multi" className="field" value={form.cabin} onChange={set('cabin')}>
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business Class</option>
                    <option>First Class</option>
                  </select>
                </div>
                <div>
                  <label className="field-label" htmlFor="passengers-multi">
                    Passengers
                  </label>
                  <input
                    id="passengers-multi"
                    type="number"
                    min={MIN_PASSENGERS}
                    required
                    className="field"
                    placeholder={`At least ${MIN_PASSENGERS} required`}
                    value={form.passengers}
                    onChange={set('passengers')}
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="single-route" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="grid gap-4 sm:grid-cols-2">
              <AirportField
                id="from"
                label="Flying from"
                placeholder="City or airport"
                required
                value={form.from}
                onChange={(val) => set('from')({ target: { value: val } })}
              />
              <AirportField
                id="to"
                label="Flying to"
                placeholder="City or airport"
                required
                value={form.to}
                onChange={(val) => set('to')({ target: { value: val } })}
              />

              <div>
                <label className="field-label" htmlFor="depart">
                  Departure
                </label>
                <input id="depart" required type="date" min={MIN_DATE} max={MAX_DATE} className="field" value={form.depart} onChange={setDepart} />
              </div>

              {tab === 'round' ? (
                <div>
                  <label className="field-label" htmlFor="ret">
                    Return
                  </label>
                  <input id="ret" required type="date" min={form.depart || MIN_DATE} max={MAX_DATE} className="field" value={form.ret} onChange={set('ret')} />
                </div>
              ) : (
                <div>
                  <label className="field-label" htmlFor="cabin1">
                    Cabin
                  </label>
                  <select id="cabin1" className="field" value={form.cabin} onChange={set('cabin')}>
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business Class</option>
                    <option>First Class</option>
                  </select>
                </div>
              )}

              {tab === 'round' && (
                <div>
                  <label className="field-label" htmlFor="cabin2">
                    Cabin
                  </label>
                  <select id="cabin2" className="field" value={form.cabin} onChange={set('cabin')}>
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business Class</option>
                    <option>First Class</option>
                  </select>
                </div>
              )}

              <div>
                <label className="field-label" htmlFor="passengers">
                  Passengers
                </label>
                <input
                  id="passengers"
                  type="number"
                  min={MIN_PASSENGERS}
                  required
                  className="field"
                  placeholder={`At least ${MIN_PASSENGERS} required`}
                  value={form.passengers}
                  onChange={set('passengers')}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <PhoneField id="phone" label="Phone" required value={form.phone} onChange={(val) => set('phone')({ target: { value: val } })} />
          <div>
            <label className="field-label" htmlFor="email">
              Email
            </label>
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
        </div>

        <p className="mt-3 text-[11px] leading-relaxed text-navy/40">
          By submitting, you consent to receive calls/texts about your group quote from {site.legalName}. Reply STOP
          to opt out. See our{' '}
          <a href="/privacy-policy" className="underline">
            privacy policy
          </a>
          .
        </p>

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <button type="submit" disabled={sending} className="btn-navy mt-5 w-full py-4 text-base disabled:opacity-60">
          <Send size={17} strokeWidth={2.5} />
          {sending ? 'Sending…' : 'Get a free group quote'}
        </button>
      </form>

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
    </div>
  );
}
