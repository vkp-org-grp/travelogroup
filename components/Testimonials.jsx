'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
// import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/content';
import { Reveal } from '@/components/Motion';

const AUTOPLAY_INTERVAL = 6000;

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const t = testimonials[i];
  const dir = 1;

  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (reduce || paused) return undefined;
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [reduce, paused, i]);

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Customer reviews</p>
          <h2 className="h-display mt-4 text-[clamp(2rem,4.4vw,3rem)]">
            What our travelers
            <br />
            say about us
          </h2>
          <div className="mt-8 flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="grid h-11 w-11 place-items-center rounded-full border border-navy/12 text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="grid h-11 w-11 place-items-center rounded-full border border-navy/12 text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative min-h-[220px] rounded-2xl bg-paper p-8 sm:p-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <Quote className="text-gold/50" size={36} />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 * dir }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 * dir }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="mt-4 text-lg leading-relaxed text-navy/80">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  {/* <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
                    <Image src={t.avatar} alt={t.name} fill sizes="44px" className="object-cover" />
                  </span> */}
                  <span>
                    <p className="font-display text-base font-bold">{t.name}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-navy/40">{t.role}</p>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setI(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-7 bg-gold' : 'w-1.5 bg-navy/15'}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
