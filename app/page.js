import Hero from '@/components/Hero';
import AirlineGrid from '@/components/AirlineGrid';
import WhyUs from '@/components/WhyUs';
import DealsGrid from '@/components/DealsGrid';
import DestinationsGrid from '@/components/DestinationsGrid';
import BlogPreview from '@/components/BlogPreview';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import { site } from '@/data/site';
import { homeFaqs } from '@/data/content';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelAgency',
      name: site.name,
      url: site.url,
      telephone: site.phone,
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address[0],
        addressLocality: site.address[1],
      },
      openingHours: 'Mo-Su 00:00-23:59',
    },
    {
      '@type': 'FAQPage',
      mainEntity: homeFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <AirlineGrid />
      <WhyUs />
      <DealsGrid />
      <DestinationsGrid />
      <BlogPreview />
      <Testimonials />
      <Faq items={homeFaqs} eyebrow="Questions" heading="Group booking, answered" />
    </>
  );
}
