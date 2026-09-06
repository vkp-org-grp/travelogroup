import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import Testimonials from '@/components/Testimonials';
import { Reveal, CountUp } from '@/components/Motion';
import { stats } from '@/data/content';
import { site } from '@/data/site';

export const metadata = {
  title: 'About Us',
  description: `About ${site.name} — a dedicated group flight specialist for parties of ${site.minGroupSize} or more.`,
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Group flights, handled by specialists"
        body="We are a dedicated group flight agency, not a general booking site — every itinerary on this site is built around one thing: getting 10 or more people on the same flight, seated together, at a negotiated rate."
      />

      <section className="bg-white py-20">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/1436491865332-7a61a109cc05.jpg"
                alt="Aircraft above the clouds"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Who we are</p>
              <h2 className="h-display mt-4 text-[clamp(2rem,4.4vw,3rem)]">Built for groups, not individuals</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-navy/65">
                <p>
                  {site.name} is a service of {site.legalName}. We specialize in one thing: negotiated group airfare
                  for parties of {site.minGroupSize} or more, across major partners.
                </p>
                <p>
                  Whether it&apos;s a corporate offsite, a student exchange, a wedding party, or a community
                  gathering, our team coordinates the fare, the seating, and the schedule so your group travels as
                  one — not as a dozen separate bookings.
                </p>
                <p>
                  A single group PNR means one point of contact for changes, one deposit to hold the whole block of
                  seats, and one call if an airline adjusts a schedule — instead of that falling on each traveler
                  individually.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-navy/10 pt-10 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dd>
                      <span className="block font-display text-3xl font-extrabold tracking-tight">
                        {s.text ? s.text : <CountUp to={s.value} suffix={s.suffix} />}
                      </span>
                      <span className="mt-2 block font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-navy/40">
                        {s.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
