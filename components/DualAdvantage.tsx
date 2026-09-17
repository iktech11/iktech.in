'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  TrendingUp, 
  Check, 
  Sparkles, 
  Lightbulb
} from 'lucide-react';

export default function DualAdvantage() {
  const techPoints = [
    'Complete Full-Stack Architecture (React, Next.js, Node.js)',
    'Ultra-fast load times, clean semantic code, and SEO optimization',
    'Robust database engineering (PostgreSQL, MongoDB, Supabase)',
    'Flawless mobile responsiveness & dynamic GSAP/Framer animations',
  ];

  const businessPoints = [
    'MBA Finance Acumen: Maximizing your ROI and budget efficiency',
    'Conversion rate optimization (CRO) built directly into UI workflows',
    'Customer retention strategy & user journey mapping',
    'Actionable financial & business growth ideas tailored to your niche',
  ];

  return (
    <section id="advantage" className="py-24 px-4 relative overflow-hidden bg-[#090d18]/70">
      {/* Background accents */}
      <div className="orb-classic-blue top-1/2 left-0 -translate-y-1/2 opacity-35" />
      <div className="orb-sapphire bottom-0 right-0 opacity-30" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header with Source Serif 4 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>The iktech.in Strategic Edge</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal font-serif text-white tracking-tight mb-4">
            Technical Precision Meets{' '}
            <span className="text-gradient-blue font-medium italic">Business Growth Logic</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Most developers only write code without understanding business goals. At <strong className="text-white">iktech.in</strong>, we combine deep computer applications expertise (BCA) with business growth &amp; financial acumen (MBA Finance) so your platform actually scales your revenue.
          </p>
        </div>

        {/* Dual Cards Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Card 1: BCA Technical Powerhouse */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-blue rounded-3xl p-6 sm:p-8 relative overflow-hidden group"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono-code text-blue-400 uppercase tracking-wider font-semibold">Technical Foundation</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-950/70 text-[10px] text-blue-200 border border-blue-800/50">Graduation</span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white font-serif">BCA (Computer Applications)</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Clean architectural patterns, robust databases, scalable APIs, and pixel-perfect responsive user interfaces built to endure scale.
            </p>

            <div className="space-y-3">
              {techPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: MBA Finance Strategic Growth */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-blue rounded-3xl p-6 sm:p-8 relative overflow-hidden group"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono-code text-sky-400 uppercase tracking-wider font-semibold">Strategic Strategy</span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-900/70 text-[10px] text-slate-200 border border-slate-700/50">Post Graduation</span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white font-serif">MBA (Finance &amp; Strategy)</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Post-graduate business training ensures consultation on customer conversion pathways, cost-benefit optimization, and scalable monetization models.
            </p>

            <div className="space-y-3">
              {businessPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* The Resulting Synergy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 sm:p-7 bg-gradient-to-r from-blue-900/30 via-slate-900/40 to-sky-950/30 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 shrink-0">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-medium text-white font-serif mb-0.5">
                The Bottom Line for Your Venture
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                You get a technical partner who aligns directly with your revenue model, ROI expectations, and user acquisition funnels.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-md shadow-blue-500/30"
          >
            Consult With iktech.in
          </a>
        </motion.div>
      </div>
    </section>
  );
}
