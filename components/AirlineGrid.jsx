'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { airlines } from '@/data/airlines';
import { Reveal, Stagger, staggerItem } from '@/components/Motion';

export default function AirlineGrid() {
  const featured = airlines.slice(0, 8);

  return (
    <section id="travel-in-groups" className="scroll-mt-24 bg-paper py-24 sm:py-28">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Travel in groups</p>
            <h2 className="h-display mt-4 max-w-[20ch] text-[clamp(2rem,4.4vw,3.2rem)]">
              Exclusive negotiated fares with multiple airlines
            </h2>
          </div>
          <p className="max-w-[38ch] text-sm leading-relaxed text-navy/55">
            Corporate team, student group, wedding party, or sports crew — pick a partner below or call the desk and
            we&apos;ll match the right airline to your route.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((a) => (
            <motion.div key={a.slug} variants={staggerItem} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 24 }}>
              <Link href={`/group-booking/${a.slug}`} className="card group flex h-full flex-col">
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={a.img}
                    alt={a.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold leading-snug">{a.name}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-navy/55">{a.bestFor}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-sky">
                    Get quote
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10 text-center">
          <Link href="/group-booking" className="btn-ghost">
            View other airlines
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
