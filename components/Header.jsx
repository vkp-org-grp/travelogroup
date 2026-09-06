'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { site } from '@/data/site';
import { airlines } from '@/data/airlines';
import { businessClass } from '@/data/businessClass';
import { deals } from '@/data/deals';

const MENUS = {
  'group-booking': {
    label: 'Group Bookings',
    href: '/group-booking',
    items: airlines.map((a) => ({ label: a.name, href: `/group-booking/${a.slug}` })),
  },
  'premium-class': {
    label: 'Premium Class',
    href: '/premium-class',
    items: businessClass.map((b) => ({ label: b.name, href: `/premium-class/${b.slug}` })),
  },
  deals: {
    label: 'Special Offer',
    href: '/deals',
    items: deals.map((d) => ({ label: d.name, href: `/deals/${d.slug}` })),
  },
};

const SIMPLE_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-[0_1px_0_0_rgba(11,30,58,0.08)]' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="wrap flex h-[76px] items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} home`} className="relative block h-[55px] w-[145px] shrink-0">
          <Image src="/travelogroup-logo.png" alt={site.name} fill sizes="145px" className="object-contain" priority />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Main">
          <Link href="/" className="rounded-full px-4 py-2 text-sm font-medium text-navy/75 transition-colors hover:text-navy">
            Home
          </Link>
          <Link href="/about" className="rounded-full px-4 py-2 text-sm font-medium text-navy/75 transition-colors hover:text-navy">
            About
          </Link>

          {Object.entries(MENUS).map(([key, menu]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setHoverMenu(key)}
              onMouseLeave={() => setHoverMenu((h) => (h === key ? null : h))}
            >
              <Link
                href={menu.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-navy/75 transition-colors hover:text-navy"
              >
                {menu.label}
                <ChevronDown size={14} className={`transition-transform ${hoverMenu === key ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {hoverMenu === key && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                  >
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1 rounded-2xl border border-navy/8 bg-white p-5 shadow-card">
                      {menu.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="truncate rounded-lg px-3 py-2 text-sm text-navy/70 transition-colors hover:bg-paper hover:text-navy"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link href="/blog" className="rounded-full px-4 py-2 text-sm font-medium text-navy/75 transition-colors hover:text-navy">
            Blog
          </Link>
          <Link href="/contact" className="rounded-full px-4 py-2 text-sm font-medium text-navy/75 transition-colors hover:text-navy">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="btn-gold hidden py-3 text-[13px] sm:inline-flex">
            <Phone size={16} strokeWidth={2.5} />
            {site.phone}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-full border border-navy/15 text-navy lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-navy/8 bg-white lg:hidden"
          >
            <div className="wrap flex flex-col py-4">
              {SIMPLE_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-navy/5 py-4 font-display text-lg font-bold text-navy"
                >
                  {item.label}
                </Link>
              ))}

              {Object.entries(MENUS).map(([key, menu]) => (
                <div key={key} className="border-b border-navy/5">
                  <button
                    type="button"
                    onClick={() => setMobileSection((s) => (s === key ? null : key))}
                    className="flex w-full items-center justify-between py-4 font-display text-lg font-bold text-navy"
                  >
                    {menu.label}
                    <ChevronDown size={18} className={`transition-transform ${mobileSection === key ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileSection === key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-1 pb-4">
                          {menu.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="rounded-lg px-2 py-2 text-sm text-navy/65"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <a href={site.phoneHref} className="btn-gold mt-5">
                <Phone size={16} strokeWidth={2.5} />
                Call {site.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
