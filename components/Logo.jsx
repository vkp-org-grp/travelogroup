import Image from 'next/image';

export default function Logo({ variant = 'dark' }) {
  const light = variant === 'light';

  return (
    <span className="flex items-center gap-3">
      <span className="relative h-10 w-10 shrink-0">
        <Image src={light ? '/logo-w.png' : '/logo.png'} alt="Travelo Group" fill sizes="40px" className="object-contain" />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[17px] font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
          Travelo Group
        </span>
        <span className={`mt-1 block font-mono text-[9px] uppercase tracking-[0.24em] ${light ? 'text-white/50' : 'text-navy/45'}`}>
          Seamless Solutions for Group Travel
        </span>
      </span>
    </span>
  );
}
