import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Check, Phone, Users } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import GroupTravelGuide from '@/components/GroupTravelGuide';
import { Reveal } from '@/components/Motion';
import { airlines, getAirline } from '@/data/airlines';
import { site } from '@/data/site';

export function generateStaticParams() {
  return airlines.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const a = getAirline(params.slug);
  if (!a) return {};
  return {
    title: `${a.name} Group Booking — Fares for ${site.minGroupSize}+ Passengers`,
    description: `Book ${a.name} group tickets for ${site.minGroupSize} or more passengers. ${a.bestFor}. Get a free group quote by phone.`,
  };
}

export default function AirlinePage({ params }) {
  const a = getAirline(params.slug);
  if (!a) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `${a.name} Group Flight Booking`,
    provider: { '@type': 'TravelAgency', name: site.name, telephone: site.phone },
    areaServed: 'US',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Group booking"
        title={`${a.name} group flights`}
        body={a.bestFor}
        img={a.img}
        meta={[
          ['Alliance', a.alliance],
          ['Main hubs', a.hub],
          ['Fleet', a.fleet],
        ]}
      />

      <section className="bg-white py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[1.265fr_0.765fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Why book {a.short} as a group</p>
            <h2 className="h-display mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)]">Group perks on {a.short}</h2>
            <ul className="mt-8 space-y-4">
              {a.perks.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky/10 text-sky">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-navy/70">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-navy/8 bg-paper p-6">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-navy/45">
                <Users size={13} />
                Minimum group size
              </p>
              <p className="mt-2 font-display text-2xl font-extrabold">{site.minGroupSize}+ passengers</p>
              <p className="mt-2 text-sm text-navy/55">
                Below {site.minGroupSize} travelers, an individual fare on {a.short} is usually cheaper — the desk
                will tell you honestly if that applies to your trip.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image src={a.img} alt={a.name} fill unoptimized sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold">Get a {a.short} group quote</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/55">
                  Call with your route, dates, and headcount — a specialist checks live {a.short} group availability
                  while you&apos;re on the line.
                </p>
                <a href={site.phoneHref} className="btn-gold mt-6 w-full py-4 text-base">
                  <Phone size={17} strokeWidth={2.5} />
                  Call {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <GroupTravelGuide airlineName={a.name} />

      <CTASection heading={`Ready to book ${a.short}?`} body={`Confirm your ${a.short} group fare in minutes.`} />
    </>
  );
}
