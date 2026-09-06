import { notFound } from 'next/navigation';
import { Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Reveal } from '@/components/Motion';
import { destinations, getDestination } from '@/data/destinations';
import { site } from '@/data/site';

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const d = getDestination(params.slug);
  if (!d) return {};
  return {
    title: `${d.name} Group Flights — ${d.country}`,
    description: d.summary,
  };
}

export default function DestinationPage({ params }) {
  const d = getDestination(params.slug);
  if (!d) notFound();

  return (
    <>
      <PageHero
        eyebrow={d.country}
        title={`${d.name} group flights`}
        body={d.summary}
        img={d.img}
        meta={[['Airports', d.airports], ['Best for', d.bestFor]]}
      />

      <section className="bg-white py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[1.265fr_0.765fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Planning a group trip to {d.name}</p>
            <h2 className="h-display mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)]">What to know</h2>
            <p className="mt-6 max-w-[60ch] text-[16px] leading-relaxed text-navy/70">
              {d.summary} Group fares to {d.name} are quoted against live airline availability, so the exact price
              depends on your travel dates and how many of the {site.minGroupSize}+ passengers are confirmed at the
              time of booking.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-7">
              <h3 className="font-display text-xl font-bold">Get a {d.name} group quote</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/55">
                Call with your dates and headcount for a live fare check on this route.
              </p>
              <a href={site.phoneHref} className="btn-gold mt-6 w-full py-4 text-base">
                <Phone size={17} strokeWidth={2.5} />
                Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection heading={`Ready to book ${d.name}?`} />
    </>
  );
}
