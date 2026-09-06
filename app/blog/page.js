import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Reveal } from '@/components/Motion';
import { getAllPosts } from '@/lib/wordpress';

export const revalidate = 3600; // ISR: refresh at most every hour; instant via /api/revalidate webhook

export const metadata = {
  title: 'Blog — Group Travel Guides & Airline Tips',
  description: 'Guides on group flight booking, airline group perks, and seasonal fare timing.',
};

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <>
      <PageHero eyebrow="Our blog" title="Guides for smarter group travel" />
      <section className="bg-paper py-20">
        <div className="wrap">
          <Reveal>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group card flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={p.featuredImage?.node?.sourceUrl || '/images/1436491865332-7a61a109cc05.jpg'}
                      alt={p.featuredImage?.node?.altText || p.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-navy/40">{formatDate(p.date)}</p>
                    <h2 className="mt-3 font-display text-lg font-bold leading-snug" dangerouslySetInnerHTML={{ __html: p.title }} />
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/55" dangerouslySetInnerHTML={{ __html: p.excerpt?.replace(/<[^>]+>/g, '') }} />
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
