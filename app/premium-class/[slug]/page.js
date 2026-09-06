import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Check, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import PremiumClassGuide from '@/components/PremiumClassGuide';
import { Reveal } from '@/components/Motion';
import { businessClass, getBusinessClass } from '@/data/businessClass';
import { getAirline } from '@/data/airlines';
import { site } from '@/data/site';

export function generateStaticParams() {
  return businessClass.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }) {
  const b = getBusinessClass(params.slug);
  if (!b) return {};
  return {
    title: `${b.name} Premium Class Group Booking | ${b.cabin}`,
    description: `Group rates on ${b.name} ${b.cabin}. ${b.highlight}. Get a free group quote by phone.`,
  };
}

export default function PremiumClassPage({ params }) {
  const b = getBusinessClass(params.slug);
  if (!b) notFound();
  const airline = b.airlineSlug ? getAirline(b.airlineSlug) : null;

  return (
    <>
      <PageHero
        eyebrow="Premium flights"
        title={`${b.name} — ${b.cabin}`}
        body={b.highlight}
        img={b.img}
        meta={airline ? [['Alliance', airline.alliance], ['Main hubs', airline.hub]] : undefined}
      />

      <section className="bg-white py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[1.265fr_0.765fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">What&apos;s included</p>
            <h2 className="h-display mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)]">Cabin features</h2>
            <ul className="mt-8 space-y-4">
              {b.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-navy/70">{f}</span>
                </li>
              ))}
            </ul>
            {airline && (
              <p className="mt-8 text-sm text-navy/55">
                Looking for standard group Economy on {b.name} instead?{' '}
                <a href={`/group-booking/${airline.slug}`} className="font-semibold text-sky underline">
                  See {b.name} group booking
                </a>
                .
              </p>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image src={b.img} alt={b.name} fill unoptimized sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold">Get a {b.cabin} group quote</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/55">
                  Premium cabin group seats are limited in number — call ahead for the most route flexibility.
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

      <PremiumClassGuide />

      <CTASection heading={`Ready to book ${b.cabin}?`} body="Premium group seats move fast — call to confirm availability." />
    </>
  );
}
