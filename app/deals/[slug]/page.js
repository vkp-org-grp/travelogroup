import { notFound } from 'next/navigation';
import { Check, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import SpecialOfferGuide from '@/components/SpecialOfferGuide';
import { Reveal } from '@/components/Motion';
import { deals, getDeal } from '@/data/deals';
import { site } from '@/data/site';

export function generateStaticParams() {
  return deals.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const d = getDeal(params.slug);
  if (!d) return {};
  return {
    title: `${d.name} — Group Fare Deals`,
    description: d.summary,
  };
}

export default function DealPage({ params }) {
  const d = getDeal(params.slug);
  if (!d) notFound();

  return (
    <>
      <PageHero eyebrow={d.tag} title={d.name} body={d.summary} />

      <section className="bg-white py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[1.265fr_0.765fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">The details</p>
            <h2 className="h-display mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)]">How it works</h2>
            <p className="mt-6 max-w-[60ch] text-[16px] leading-relaxed text-navy/70">{d.body}</p>

            <h3 className="mt-10 font-display text-lg font-bold">Booking tips</h3>
            <ul className="mt-5 space-y-4">
              {d.tips.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky/10 text-sky">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-navy/70">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-7">
              <h3 className="font-display text-xl font-bold">Check this deal for your route</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/55">
                Deal windows and price points vary by route and travel date. Call with your details and a specialist
                will confirm honestly what applies.
              </p>
              <a href={site.phoneHref} className="btn-gold mt-6 w-full py-4 text-base">
                <Phone size={17} strokeWidth={2.5} />
                Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SpecialOfferGuide eventName={d.name} />

      <CTASection heading={`Ready to book ${d.name.toLowerCase()}?`} />
    </>
  );
}
