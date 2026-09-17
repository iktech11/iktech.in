'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, Send, Sparkles, MessageCircle } from 'lucide-react';

export default function MobileFloatingDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling down 120px
      setVisible(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex justify-center pointer-events-none"
        >
          <div className="w-full max-w-sm rounded-full bg-[#080d1a]/90 backdrop-blur-2xl border border-cyan-500/30 p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.9)] flex items-center justify-between gap-1.5 pointer-events-auto">
            {/* Instagram Quick Link */}
            <a
              href="https://instagram.com/iktech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-pink-300 active:scale-95 flex items-center justify-center gap-1.5 text-xs font-semibold transition-all"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>@iktech.in</span>
            </a>

            {/* Direct Hire / Quote Button */}
            <a
              href="#contact"
              className="flex-[1.4] py-2.5 px-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 active:scale-95 text-white flex items-center justify-center gap-1.5 text-xs font-bold shadow-md shadow-cyan-500/25 transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>Get Free Quote</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
