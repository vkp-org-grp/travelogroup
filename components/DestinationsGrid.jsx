'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { destinations } from '@/data/destinations';
import { Reveal, Stagger, staggerItem } from '@/components/Motion';

export default function DestinationsGrid() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Choose your destination</p>
          <h2 className="h-display mt-4 max-w-[20ch] text-[clamp(2rem,4.4vw,3.2rem)]">
            Popular group destinations
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {destinations.map((d) => (
            <motion.div key={d.slug} variants={staggerItem} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }}>
              <Link href={`/destinations/${d.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                <span className="absolute inset-x-3 bottom-3 font-display text-base font-bold text-white">{d.name}</span>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
