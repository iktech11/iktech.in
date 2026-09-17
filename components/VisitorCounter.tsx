'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Activity } from 'lucide-react';

export default function VisitorCounter() {
  return (
    <section className="py-12 px-4 relative z-10">
      <div className="max-w-4xl mx-auto flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group p-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-600/20 to-purple-600/30 shadow-[0_0_50px_-10px_rgba(6,182,212,0.25)] hover:shadow-[0_0_60px_-5px_rgba(6,182,212,0.4)] transition-all duration-500"
        >
          {/* Outer glowing blur */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500 -z-10" />

          {/* Inner distinct card */}
          <div className="px-6 sm:px-10 py-5 rounded-[22px] bg-[#070b16]/90 backdrop-blur-2xl border border-cyan-400/30 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-12">
            {/* Left side: Live indicator */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-inner">
                <Activity className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[11px] font-mono-code text-cyan-300 uppercase tracking-wider font-semibold">
                    Live Platform Telemetry
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-serif font-normal text-white">
                  Global Portfolio Traffic
                </h4>
              </div>
            </div>

            {/* Right side: 1K+ Static Stat */}
            <div className="flex items-baseline gap-2 bg-white/[0.03] border border-white/[0.08] px-6 py-2.5 rounded-2xl">
              <Eye className="w-4 h-4 text-cyan-400 self-center" />
              <span className="text-2xl sm:text-3xl font-serif font-bold text-gradient-blue tracking-tight">
                1K+
              </span>
              <span className="text-xs font-medium text-slate-300">
                Total Visitors
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
