import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Reveal } from '@/components/Motion';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog — Group Travel Guides & Airline Tips',
  description: 'Guides on group flight booking, airline group perks, and seasonal fare timing.',
};

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function BlogIndex() {
  const posts = getAllPosts();

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
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-navy/40">{formatDate(p.date)}</p>
                    <h2 className="mt-3 font-display text-lg font-bold leading-snug">{p.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/55">{p.excerpt}</p>
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
