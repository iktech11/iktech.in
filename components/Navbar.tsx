'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-4xl rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-[#080d1a]/90 backdrop-blur-2xl border border-cyan-500/25 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8)] py-3 px-5 sm:px-7'
            : 'bg-[#0c1222]/60 backdrop-blur-xl border border-white/[0.08] py-3.5 px-5 sm:px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <img
                src="/logo.png"
                alt="iktech.in"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-serif font-normal text-xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                iktech<span className="text-cyan-400 font-bold">.in</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/[0.06] transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Instagram Link */}
            <a
              href="https://instagram.com/iktech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-200 hover:text-cyan-300 font-medium px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-cyan-400/40 transition-all group"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>@iktech.in</span>
            </a>

            {/* Direct Project Inquiry CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 hover:from-cyan-400 hover:to-blue-600 shadow-md shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              className="text-xs font-semibold text-white px-3 py-1.5 rounded-full bg-cyan-600 hover:bg-cyan-500"
            >
              Quote
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 pt-3 border-t border-white/10 space-y-2 pb-2"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-medium text-slate-300 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-white/5 flex flex-col gap-2">
                <a
                  href="https://instagram.com/iktech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/5 text-xs text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    Follow @iktech.in
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="mailto:iktech.in@gmail.com"
                  className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/5 text-xs text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    iktech.in@gmail.com
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
