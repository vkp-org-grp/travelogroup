import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Reveal } from '@/components/Motion';
import { businessClass } from '@/data/businessClass';

export const metadata = {
  title: 'Premium Class Group Booking — Premium Airline Partners',
  description: 'Negotiated Business and Premium cabin group fares across 12 airline partners for parties of 10 or more.',
};

export default function PremiumClassIndex() {
  return (
    <>
      <PageHero
        eyebrow="Premium flights"
        title="Premium class, booked as a group"
        body="Lie-flat seating, lounge access, and priority service — negotiated group rates on the cabin, not just the seat."
      />
      <section className="bg-paper py-20">
        <div className="wrap">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {businessClass.map((b) => (
                <Link key={b.slug} href={`/premium-class/${b.slug}`} className="group card flex flex-col">
                  <div className="relative h-36 overflow-hidden">
                    <Image src={b.img} alt={b.name} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-navy">
                      {b.cabin}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h2 className="font-display text-lg font-bold">{b.name}</h2>
                      <p className="mt-2 text-[13px] leading-relaxed text-navy/55">{b.highlight}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-sky">
                      Get quote <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
