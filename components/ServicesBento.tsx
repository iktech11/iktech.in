'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Server, 
  Database, 
  Smartphone, 
  Sparkles, 
  Layers, 
  Zap,
  Boxes
} from 'lucide-react';

export default function ServicesBento() {
  const services = [
    {
      title: 'Frontend & Interactive UI/UX',
      desc: 'Mesmerizing, lightning-fast user interfaces built with React, Next.js, and GSAP micro-animations. Pixel-perfect on desktop, tablet, and mobile with zero layout shift.',
      icon: Monitor,
      tags: ['Next.js', 'React', 'GSAP Animations', 'Framer Motion', 'Tailwind CSS'],
      colSpan: 'lg:col-span-7',
      accentColor: 'text-blue-400',
    },
    {
      title: 'Backend & High-Throughput APIs',
      desc: 'Robust server architecture, RESTful & GraphQL endpoints, authentication systems, secure database interactions, and automated background jobs.',
      icon: Server,
      tags: ['Node.js', 'Express', 'Server Actions', 'REST APIs', 'Auth'],
      colSpan: 'lg:col-span-5',
      accentColor: 'text-sky-400',
    },
    {
      title: 'Database Architecture & Speed',
      desc: 'High-speed relational & NoSQL data modeling, schema indexing, real-time sync, data migrations, and rock-solid reliability.',
      icon: Database,
      tags: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'Redis'],
      colSpan: 'lg:col-span-5',
      accentColor: 'text-indigo-400',
    },
    {
      title: 'Custom Web & Mobile Applications',
      desc: 'Complete end-to-end platforms from architecture to live deployment. E-commerce platforms, SaaS dashboards, booking engines, and custom business workflow tools.',
      icon: Smartphone,
      tags: ['Full-Stack Web Apps', 'SaaS Engines', 'E-Commerce', 'Payment Gateways'],
      colSpan: 'lg:col-span-7',
      accentColor: 'text-blue-300',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 relative bg-subtle-grid">
      <div className="max-w-5xl mx-auto">
        {/* Section Header with Source Serif 4 */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300 mb-4">
            <Boxes className="w-3.5 h-3.5 text-blue-400" />
            <span>Full-Stack Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal font-serif text-white tracking-tight mb-4">
            Modern Tech Stack &amp; <span className="text-gradient-blue font-medium italic">Capabilities</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From intuitive user interfaces with smooth physics to bulletproof database systems and backend logic.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`glass-blue rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden ${svc.colSpan}`}
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-white mb-6">
                    <Icon className={`w-5 h-5 ${svc.accentColor}`} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal font-serif text-white mb-2.5">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {svc.desc}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {svc.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono-code text-slate-200 bg-white/[0.03] border border-white/[0.08] px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
