import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Reveal } from '@/components/Motion';
import { destinations } from '@/data/destinations';

export const metadata = {
  title: 'Popular Group Travel Destinations',
  description: 'Group flight destinations — London, Paris, Dubai, Singapore, and more, priced for parties of 10 or more.',
};

export default function DestinationsIndex() {
  return (
    <>
      <PageHero eyebrow="Choose your destination" title="Popular group destinations" />
      <section className="bg-paper py-20">
        <div className="wrap">
          <Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {destinations.map((d) => (
                <Link key={d.slug} href={`/destinations/${d.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image src={d.img} alt={d.name} fill unoptimized sizes="(max-width: 768px) 50vw, 20vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                  <span className="absolute inset-x-3 bottom-3 font-display text-base font-bold text-white">{d.name}</span>
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
