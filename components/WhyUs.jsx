'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { whyUs, stats } from '@/data/content';
import { site } from '@/data/site';
import { CountUp, Reveal, Stagger, staggerItem } from '@/components/Motion';

export default function WhyUs() {
  return (
    <section id="why" className="scroll-mt-24 overflow-hidden bg-navy py-24 text-white sm:py-28">
      <div className="wrap">
        <Reveal className="max-w-[54ch]">
          <p className="eyebrow-dark">Why travel with us</p>
          <h2 className="h-display mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">
            Group flights, without the group chat chaos.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {whyUs.map((w, i) => (
            <motion.div key={w.title} variants={staggerItem} className="group relative bg-navy p-7 transition-colors hover:bg-navy2">
              <span className="font-mono text-[11px] tracking-[0.2em] text-gold/70">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug">{w.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-white/55">{w.body}</p>
              <span className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-extrabold tracking-tight">
                    {s.text ? s.text : <CountUp to={s.value} suffix={s.suffix} />}
                  </span>
                  <span className="mt-2 block font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-white/40">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap items-center gap-4">
          <a href={site.phoneHref} className="btn-gold">
            <Phone size={16} strokeWidth={2.5} />
            Call {site.phone}
          </a>
          <span className="text-sm text-white/50">Confirm your group fare in minutes.</span>
        </Reveal>
      </div>
    </section>
  );
}
