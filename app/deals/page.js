import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Reveal } from '@/components/Motion';
import { deals } from '@/data/deals';

export const metadata = {
  title: 'Special Deals — Seasonal Group Flight Discounts',
  description: 'Seasonal and route-specific group flight discounts — Christmas, Black Friday, last-minute, and more.',
};

export default function DealsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Special deals"
        title="Save more with seasonal group airfare"
        body="Seasonal windows, budget fare ranges, and route-specific programs — all built on the same 10+ passenger group rate."
      />
      <section className="bg-paper py-20">
        <div className="wrap">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {deals.map((d) => (
                <Link key={d.slug} href={`/deals/${d.slug}`} className="group flex h-full flex-col rounded-2xl border border-navy/8 bg-white p-6 transition-colors hover:border-gold/40 hover:shadow-card">
                  <span className="w-fit rounded-full bg-navy/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-navy/50">{d.tag}</span>
                  <h2 className="mt-4 font-display text-xl font-bold">{d.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/55">{d.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-sky">
                    Explore <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
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
