import Image from 'next/image';
import { Phone } from 'lucide-react';
import { site } from '@/data/site';

export default function PageHero({ eyebrow, title, body, img, meta }) {
  return (
    <section className="relative overflow-hidden bg-navy pb-16 pt-[132px] text-white">
      {img && (
        <div className="absolute inset-0" aria-hidden>
          <Image src={img} alt="" fill unoptimized sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/70" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" aria-hidden />

      <div className="wrap relative">
        {eyebrow && <p className="eyebrow-dark">{eyebrow}</p>}
        <h1 className="h-display mt-4 max-w-[26ch] text-[clamp(2.2rem,5.4vw,3.8rem)]">{title}</h1>
        {body && <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-white/70">{body}</p>}
        {meta && (
          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
            {meta.map(([k, v]) => (
              <div key={k}>
                <dt className="text-white/35">{k}</dt>
                <dd className="mt-1 text-white/75">{v}</dd>
              </div>
            ))}
          </dl>
        )}
        <a href={site.phoneHref} className="btn-gold mt-8">
          <Phone size={16} strokeWidth={2.5} />
          Call {site.phone}
        </a>
      </div>
    </section>
  );
}
