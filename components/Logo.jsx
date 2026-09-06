import Image from 'next/image';

export default function Logo({ variant = 'dark' }) {
  const light = variant === 'light';

  if (light) {
    return (
      <span className="relative block h-[55px] w-[145px]">
        <Image src="/travelogroup-logo-w.png" alt="TravelOgroup" fill sizes="145px" className="object-contain" />
      </span>
    );
  }

  return (
    <span className="flex items-center gap-3">
      <span className="relative h-10 w-10 shrink-0">
        <Image src="/logo.png" alt="TravelOgroup" fill sizes="40px" className="object-contain" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[17px] font-extrabold tracking-tight text-navy">TravelOgroup</span>
        <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.24em] text-navy/45">
          Seamless Solutions for Group Travel
        </span>
      </span>
    </span>
  );
}
