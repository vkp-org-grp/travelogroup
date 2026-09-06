'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Users } from 'lucide-react';
import { site } from '@/data/site';
import SearchWidget from '@/components/SearchWidget';

const SLIDES = [
  '/images/1436491865332-7a61a109cc05.jpg',
  '/images/1544620347-c4fd4a3d5957.jpg',
  '/images/1569154941061-e231b4725ef1.jpg',
  '/images/1503437313881-503a91226402.jpg',
];

const SLIDE_INTERVAL = 7000; // slow autoplay

export default function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (reduce) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [reduce]);

  useEffect(() => {
    const section = sectionRef.current;
    const spotlight = spotlightRef.current;
    if (!section || !spotlight) return undefined;

    const handleMove = (e) => {
      const rect = section.getBoundingClientRect();
      spotlight.style.setProperty('--x', `${e.clientX - rect.left}px`);
      spotlight.style.setProperty('--y', `${e.clientY - rect.top}px`);
      spotlight.style.opacity = '1';
    };
    const handleLeave = () => {
      spotlight.style.opacity = '0';
    };

    section.addEventListener('mousemove', handleMove);
    section.addEventListener('mouseleave', handleLeave);
    return () => {
      section.removeEventListener('mousemove', handleMove);
      section.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-navy pb-20 pt-[124px] text-white sm:pb-28 sm:pt-[150px]"
    >
      {/* Background slider */}
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1 }}
              animate={reduce ? { scale: 1 } : { scale: 1.12 }}
              transition={{ duration: (SLIDE_INTERVAL + 1800) / 1000, ease: 'linear' }}
            >
              <Image
                src={SLIDES[index]}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/85 to-navy" />
        <div className="absolute inset-0 bg-navy/35" />
      </div>

      {/* Cursor torch / spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(360px circle at var(--x, 50%) var(--y, 50%), rgba(217,164,65,0.16), rgba(120,190,255,0.06) 45%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 z-[1] opacity-50" aria-hidden>
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-sky/20 blur-[130px]" />
        <div className="absolute -bottom-52 left-1/4 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="wrap relative z-10 grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow-dark inline-flex items-center gap-2"
          >
            <Users size={13} />
            {site.minGroupSize}+ passengers · negotiated fares
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="h-display mt-5 text-[clamp(2.6rem,6.4vw,4.6rem)]"
          >
            Let&apos;s travel the
            <br />
            world <span className="text-gold">together.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-white/70"
          >
            Organizing a trip for {site.minGroupSize} or more people? We simplify group air travel with negotiated
            fares, flexible terms, and a dedicated specialist for every itinerary — corporate teams, school tours,
            weddings, and sports crews alike.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href={site.phoneHref} className="btn-gold py-4 text-base">
              <Phone size={18} strokeWidth={2.5} />
              Call {site.phone}
            </a>
            <a href="#travel-in-groups" className="btn border border-white/15 text-white hover:border-white/45 hover:bg-white/5">
              See airline partners
            </a>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45"
          >
            <li>Special group-only fares</li>
            <li>Lock seats, add names later</li>
            <li>Dedicated agent support</li>
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <SearchWidget />
        </motion.div>
      </div>
    </section>
  );
}
