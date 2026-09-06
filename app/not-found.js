import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-navy px-6 text-center text-white">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">Gate closed</p>
        <h1 className="h-display mt-5 text-[clamp(2.4rem,8vw,5rem)]">404</h1>
        <p className="mx-auto mt-4 max-w-[36ch] text-white/60">
          This page isn&apos;t on the board. Head back to home, or call the desk directly.
        </p>
        <Link href="/" className="btn-gold mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}
