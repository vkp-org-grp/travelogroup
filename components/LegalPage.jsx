import { site } from '@/data/site';

export default function LegalPage({ title, updated, children }) {
  return (
    <>
      <section className="bg-navy pb-16 pt-[132px] text-white">
        <div className="wrap">
          <p className="eyebrow-dark">{site.name}</p>
          <h1 className="h-display mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">{title}</h1>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Last updated {updated}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="wrap max-w-[760px]">
          <div className="space-y-8 text-[16px] leading-relaxed text-navy/70 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-navy [&_h2]:mb-3 [&_li]:mb-2 [&_ul]:list-disc [&_ul]:pl-5">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
