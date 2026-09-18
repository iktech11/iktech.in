'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Instagram, ArrowUp } from 'lucide-react';

const basePath = process.env.NODE_ENV === 'production' ? '/iktech.in' : '';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#040711] pt-14 pb-10 px-4 text-slate-400 text-xs relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Brand */}
          <div className="md:col-span-2 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <img
                  src={`${basePath}/logo.png`}
                  alt="iktech.in"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="font-serif font-normal text-lg tracking-tight text-white">
                iktech<span className="text-cyan-400 font-bold">.in</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Crafting ultra-premium websites &amp; full-stack applications with dual technical engineering (BCA) and strategic business growth acumen (MBA Finance).
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="mailto:iktech.in@gmail.com"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/10 flex items-center justify-center text-slate-300 transition-colors"
                title="Email iktech.in"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com/iktech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-pink-500/20 hover:text-pink-300 border border-white/10 flex items-center justify-center text-slate-300 transition-colors"
                title="Instagram @iktech.in"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-2.5">
            <h5 className="text-white font-serif font-medium text-xs uppercase tracking-wider">Navigation</h5>
            <ul className="space-y-1.5">
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">Services &amp; Stack</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-300 transition-colors">4+ Years Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">Get In Touch</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Connect */}
          <div className="space-y-2.5">
            <h5 className="text-white font-serif font-medium text-xs uppercase tracking-wider">Direct Connect</h5>
            <p className="text-slate-300 text-xs">
              <strong className="text-white">Email:</strong> iktech.in@gmail.com
            </p>
            <p className="text-slate-300 text-xs">
              <strong className="text-white">Instagram:</strong> @iktech.in
            </p>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} iktech.in &middot; All Rights Reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-1.5 px-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            title="Back to Top"
          >
            <ArrowUp className="w-3 h-3" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
