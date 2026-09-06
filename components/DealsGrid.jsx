'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { deals } from '@/data/deals';
import { Reveal, Stagger, staggerItem } from '@/components/Motion';

export default function DealsGrid() {
  const featured = deals.slice(0, 6);

  return (
    <section id="deals" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Special deals</p>
          <h2 className="h-display mt-4 max-w-[20ch] text-[clamp(2rem,4.4vw,3.2rem)]">
            Save more with seasonal group airfare
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((d) => (
            <motion.div key={d.slug} variants={staggerItem} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 24 }}>
              <Link href={`/deals/${d.slug}`} className="group flex h-full flex-col rounded-2xl border border-navy/8 bg-paper p-6 transition-colors hover:border-gold/40 hover:bg-white hover:shadow-card">
                <span className="w-fit rounded-full bg-navy/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-navy/50">
                  {d.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold leading-snug">{d.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/55">{d.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-sky">
                  Explore
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10 text-center">
          <Link href="/deals" className="btn-ghost">
            View all special deals
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
