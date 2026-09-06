'use client';

import { Phone } from 'lucide-react';
import { site } from '@/data/site';
import { Reveal } from '@/components/Motion';

export default function CTASection({
  heading = 'Call now & book your flight',
  body = 'Speak with a group specialist and get a fare confirmed in minutes.',
}) {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="wrap text-center">
        <Reveal>
          <p className="eyebrow-dark">{site.minGroupSize}+ passengers, one call</p>
          <h2 className="h-display mx-auto mt-4 max-w-[24ch] text-[clamp(1.8rem,4vw,2.8rem)]">{heading}</h2>
          <p className="mx-auto mt-4 max-w-[50ch] text-white/60">{body}</p>
          <a href={site.phoneHref} className="btn-gold mx-auto mt-8 py-4 text-base">
            <Phone size={18} strokeWidth={2.5} />
            {site.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
