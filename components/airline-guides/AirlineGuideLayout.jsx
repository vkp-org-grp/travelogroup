import { site } from '@/data/site';
import { Reveal } from '@/components/Motion';

// Shared layout for airlines that have their own guide copy.
// The copy itself lives in <Airline>GroupGuide.jsx.

const steps = [
  [
    'Submit Your Enquiry',
    <>
      Fill out the form with your basic travel details, or you may also contact us at{' '}
      <a href={site.phoneHref}>{site.phone}</a>.
    </>,
  ],
  ['Receive a Call', 'Our group travel agents will contact you within 24 hours to discuss your requirements.'],
  ['Review Your Travel Proposal', 'Receive a proposal outlining the available flight options, fares and other necessary details.'],
  ['Finalize the Booking', 'Review the proposal and select the option that best matches your travel schedule and budget.'],
];

const H2 = 'h-display text-[clamp(1.8rem,3.4vw,2.6rem)] text-navy';
const BODY =
  'text-[16px] leading-relaxed text-navy/70 [&_a]:font-semibold [&_a]:text-navy [&_a]:underline [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-extrabold [&_h3]:text-navy [&_h3]:mb-2 [&_li]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_p+p]:mt-4';

// Wraps every match of `pattern` (a global regex with one capture group) in <strong>.
function emphasize(text, pattern) {
  if (!pattern || typeof text !== 'string') return text;
  return text.split(pattern).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

export default function AirlineGuideLayout({
  boldPattern,
  title,
  intro,
  facts,
  why,
  processHeading,
  audienceHeading,
  audiences,
  termsHeading,
  terms,
  faqHeading,
  faqs,
  closing,
}) {
  const b = (text) => emphasize(text, boldPattern);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-white py-20">
        <div className={`wrap ${BODY}`}>
          <Reveal>
            <p className="eyebrow">Group travel guide</p>
            <h2 className={`${H2} mt-4`}>{title}</h2>
            <p className="mt-6">{b(intro)}</p>
            <ul className="mt-4">
              {facts.map(([label, value]) => (
                <li key={label}>
                  <strong>{label}:</strong> {value}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className={H2}>{why.heading}</h2>
            <p className="mt-6">{b(why.intro)}</p>
            <ul className="mt-4">
              {why.benefits.map(([title, text]) => (
                <li key={title}>
                  <strong>{title}:</strong> {b(text)}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className={H2}>{processHeading}</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {steps.map(([title, text], i) => (
                <div key={title}>
                  <h3>
                    {i + 1}. {title}
                  </h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="wrap">
          <Reveal>
            <h2 className={H2}>{audienceHeading}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(([title, text], i) => (
              <Reveal key={title} delay={(i % 3) * 0.06}>
                <div className="card h-full p-6">
                  <h3 className="font-display text-base font-bold">{title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-navy/60">{b(text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className={`wrap ${BODY}`}>
          <Reveal>
            <h2 className={H2}>{termsHeading}</h2>
            <div className="mt-8 space-y-10">{terms}</div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className={`wrap ${BODY}`}>
          <Reveal>
            <h2 className={H2}>{faqHeading}</h2>
            <div className="mt-8 space-y-6">
              {faqs.map(([q, a]) => (
                <div key={q}>
                  <h3>{q}</h3>
                  <p>{b(a)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="wrap max-w-[700px] text-center">
          <Reveal>
            <h2 className={H2}>{closing.heading}</h2>
            {closing.paragraphs.map((text, i) => (
              <p key={text} className={`${i ? 'mt-4' : 'mt-5'} text-[16px] leading-relaxed text-navy/70`}>
                {b(text)}
              </p>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
