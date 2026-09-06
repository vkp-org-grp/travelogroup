import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/wordpress';
import { Reveal } from '@/components/Motion';

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

const HOME_PREVIEW_IMAGES = [
  '/images/1499063078284-f78f7d89616a.jpg',
  '/images/1506973035872-a4ec16b8e8d9.jpg',
  '/images/1524231757912-21f4fe3a7200.jpg',
];

export default async function BlogPreview() {
  const posts = (await getAllPosts()).slice(0, 3);
  if (!posts.length) return null;

  return (
    <section className="bg-paper py-24 sm:py-28">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Our blog</p>
            <h2 className="h-display mt-4 max-w-[18ch] text-[clamp(2rem,4.4vw,3.2rem)]">
              Guides for smarter group travel
            </h2>
          </div>
          <Link href="/blog" className="btn-ghost">
            All articles
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group card flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={HOME_PREVIEW_IMAGES[i % HOME_PREVIEW_IMAGES.length]}
                  alt={p.featuredImage?.node?.altText || p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-navy/40">{formatDate(p.date)}</p>
                <h3
                  className="mt-3 font-display text-lg font-bold leading-snug"
                  dangerouslySetInnerHTML={{ __html: p.title }}
                />
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/55" dangerouslySetInnerHTML={{ __html: p.excerpt?.replace(/<[^>]+>/g, '') }} />
                <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-sky">
                  Read more
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
