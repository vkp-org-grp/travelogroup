'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import { site } from '@/data/site';

export default function CallBar() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && !closed && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-navy/95 backdrop-blur-md sm:inset-x-auto sm:bottom-6 sm:right-6 sm:rounded-2xl sm:border sm:shadow-card"
        >
          <div className="flex items-center gap-4 px-4 py-3 sm:px-5">
            <div className="min-w-0 flex-1 sm:max-w-[220px]">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-gold">Group fare desk</p>
              <p className="mt-0.5 truncate text-[13px] font-semibold text-white">Book, change, or ask a question</p>
            </div>
            <a href={site.phoneHref} className="btn-gold shrink-0 px-5 py-3 text-[13px]">
              <Phone size={15} strokeWidth={2.5} />
              <span className="hidden sm:inline">{site.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <button
              type="button"
              onClick={() => setClosed(true)}
              aria-label="Dismiss"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white/40 hover:text-white"
            >
              <X size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
