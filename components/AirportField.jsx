'use client';

import { useEffect, useRef, useState } from 'react';
import { loadAirports } from '@/lib/airportsCache';

// Busy airports, listed first among equally good matches. With only one or two
// letters typed there are hundreds of matches, so alphabetical order alone
// would bury the airports people are most likely looking for.
const POPULAR = new Set(
  ('DEL BOM BLR MAA HYD CCU AMD COK GOI PNQ ATQ JAI LKO ' +
    'JFK EWR LAX SFO ORD ATL DFW DEN IAH IAD BOS SEA MIA MCO LAS PHX CLT MSP DTW PHL SAN HNL AUS BNA ' +
    'YYZ YVR YUL MEX CUN GRU EZE BOG LIM SCL PTY ' +
    'LHR LGW MAN CDG ORY AMS FRA MUC BER MAD BCN FCO MXP VCE ZRH GVA VIE BRU CPH ARN OSL HEL DUB LIS ATH IST PRG WAW BUD ' +
    'DXB AUH DOH RUH JED TLV CAI JNB CPT NBO ADD ' +
    'SIN HKG BKK KUL CGK DPS MNL HND NRT KIX ICN PEK PVG CAN TPE SGN HAN KTM CMB DAC MLE SYD MEL BNE PER AKL').split(' ')
);

function rankMatches(airports, query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored = [];
  for (const a of airports) {
    const code = a.code.toLowerCase();
    const city = (a.city || '').toLowerCase();
    const name = a.name.toLowerCase();

    let score;
    if (code === q) score = 0;
    else if (code.startsWith(q)) score = 1;
    else if (city.startsWith(q)) score = 2;
    else if (name.startsWith(q)) score = 3;
    // match inside a word only from 2 letters; one letter matches nearly everything
    else if (q.length > 1 && (city.includes(q) || name.includes(q) || code.includes(q))) score = 4;
    else continue;

    scored.push({ ...a, score });
  }

  // exact code first, then popular airports, then match quality; entries without
  // a city go last
  const group = (a) => (a.score === 0 && q.length === 3 ? 0 : POPULAR.has(a.code) && a.score < 4 ? 1 : a.city ? 2 : 3);
  // for 1–2 letters, a city that starts with them beats a code that does
  const rank = (a) => (q.length < 3 && a.score === 1 ? 2.5 : a.score);

  scored.sort(
    (x, y) => group(x) - group(y) || rank(x) - rank(y) || (x.city || x.name).localeCompare(y.city || y.name)
  );
  return scored.slice(0, 8);
}

export default function AirportField({ id, label, placeholder, value, onChange, required }) {
  const [airports, setAirports] = useState(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef(null);

  useEffect(() => {
    loadAirports().then(setAirports);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const suggestions = airports ? rankMatches(airports, value) : [];

  const pick = (a) => {
    onChange(`${a.city ? `${a.city}, ` : ''}${a.country} (${a.code})`);
    setOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!open || suggestions.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      pick(suggestions[activeIndex]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div ref={wrapRef} className="relative">
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        required={required}
        autoComplete="off"
        className="field"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
          setActiveIndex(-1);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
      />

      {open && suggestions.length > 0 && (
        <ul className="absolute z-20 mt-1 w-full max-h-64 overflow-auto rounded-xl border border-navy/10 bg-white py-1.5 shadow-lg">
          {suggestions.map((a, i) => (
            <li key={a.code}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => pick(a)}
                className={`flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left text-sm transition-colors ${
                  i === activeIndex ? 'bg-paper' : 'hover:bg-paper'
                }`}
              >
                <span className="truncate">
                  <span className="font-semibold text-navy">{a.city || a.name}</span>
                  <span className="text-navy/50">, {a.country}</span>
                </span>
                <span className="shrink-0 font-mono text-[11px] font-bold text-gold">{a.code}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
