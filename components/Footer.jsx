import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { footerLinks, site } from '@/data/site';
import Logo from '@/components/Logo';
import { airlines } from '@/data/airlines';

const socials = [
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Twitter, label: 'X' },
  { Icon: Linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-navy pb-28 pt-20 text-white sm:pb-12">
      <div className="mb-16 overflow-hidden border-y border-white/[0.07] py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...airlines, ...airlines].map((a, i) => (
            <span key={i} className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/25">
              {a.short} <span className="text-gold/60">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="wrap grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-6 max-w-[36ch] text-sm leading-relaxed text-white/50">
            At {site.name}, we specialize in simplifying air travel for groups of {site.minGroupSize} or more —
            corporate teams, student tours, weddings, and community trips, booked at the best possible fares.
          </p>
          <div className="mt-7 flex gap-2">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/60 transition-colors hover:border-gold hover:bg-gold hover:text-navy"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">Explore</h4>
          <ul className="mt-5 space-y-3">
            {footerLinks.company.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-white/55 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/group-booking" className="text-sm text-white/55 transition-colors hover:text-white">
                Group bookings
              </Link>
            </li>
            <li>
              <Link href="/deals" className="text-sm text-white/55 transition-colors hover:text-white">
                Special deals
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">Legal</h4>
          <ul className="mt-5 space-y-3">
            {footerLinks.legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-white/55 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/55">
            {site.address.map((l) => (
              <li key={l}>{l}</li>
            ))}
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap mt-16">
        <p className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 text-[12px] leading-relaxed text-white/35">
          California Seller of Travel <strong className="font-bold text-white/60">Reg. No. 2173867-50</strong>.
          Registration as a seller of travel does not constitute approval by the State of California. Participant in
          the Travel Consumer Restitution Corporation (<strong className="font-bold text-white/60">TCRC-710561</strong>).
        </p>

        <p className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 text-[12px] leading-relaxed text-white/35">
          {site.name} is a service of {site.legalName}, an independent travel agency. We are not an airline and are
          not affiliated with, endorsed by, or acting on behalf of any airline named on this site. Airline names and
          logos are the property of their respective owners and are used only to describe the group fares we can
          arrange. Fares are subject to availability and confirmed at the time of booking.
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-8 text-[12px] text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.16em]">{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
