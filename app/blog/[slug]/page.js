import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';
import { Reveal } from '@/components/Motion';
import { getAllPosts, getPostBySlug, getPostSlugs } from '@/lib/wordpress';
import { site } from '@/data/site';

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.seo?.title || post.title,
    description: post.seo?.metaDesc || post.excerpt?.replace(/<[^>]+>/g, ''),
  };
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = await getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.modified,
    publisher: { '@type': 'Organization', name: site.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="bg-navy pb-16 pt-[132px] text-white">
        <div className="wrap">
          <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 hover:text-white">
            <ArrowLeft size={13} />
            All articles
          </Link>
          <h1 className="h-display mt-6 max-w-[28ch] text-[clamp(2rem,5vw,3.4rem)]" dangerouslySetInnerHTML={{ __html: post.title }} />
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">{formatDate(post.date)}</p>
        </div>
      </article>

      {post.featuredImage?.node?.sourceUrl && (
        <div className="wrap -mt-10 mb-10">
          <div className="relative h-[280px] overflow-hidden rounded-2xl shadow-card sm:h-[420px]">
            <Image src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText || post.title} fill unoptimized className="object-cover" />
          </div>
        </div>
      )}

      <section className="bg-white py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[1.265fr_0.765fr] lg:gap-20">
          <Reveal>
            <div
              className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-extrabold prose-a:text-sky"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card sticky top-28 p-7">
              <h3 className="font-display text-xl font-bold">Ready to book a group?</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/55">
                Call with your route, dates, and headcount for a live group fare.
              </p>
              <a href={site.phoneHref} className="btn-gold mt-6 w-full py-4 text-base">
                <Phone size={17} strokeWidth={2.5} />
                Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="wrap mt-16 border-t border-navy/10 pt-14">
            <h2 className="font-display text-2xl font-extrabold">More from the blog</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                  <div className="relative h-32 overflow-hidden rounded-xl">
                    <Image
                      src={p.featuredImage?.node?.sourceUrl || '/images/1436491865332-7a61a109cc05.jpg'}
                      alt={p.title}
                      fill
                      unoptimized
                      sizes="33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <p className="mt-3 font-display text-sm font-bold leading-snug" dangerouslySetInnerHTML={{ __html: p.title }} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
