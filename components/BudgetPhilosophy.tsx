'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Sparkles, 
  Coins, 
  HeartHandshake, 
  ArrowRight
} from 'lucide-react';

export default function BudgetPhilosophy() {
  const tiers = [
    {
      name: 'Starter / MVP Launch',
      tagline: 'Ideal for small businesses & fast rollouts',
      price: 'Low Budget Friendly',
      priceDetail: 'High-speed delivery without high costs',
      features: [
        'Modern Responsive Website (Mobile & Desktop)',
        'SEO Metadata & Fast Loading Speeds',
        'Direct Lead Form & Contact Integration',
        'Custom Design with Zero Overlays',
        '3–5 Days Turnaround',
      ],
      cta: 'Get Starter Quote',
      popular: false,
    },
    {
      name: 'Full-Stack Business Growth',
      tagline: 'BCA Tech Architecture + MBA Finance Strategy',
      price: 'High ROI Value',
      priceDetail: 'Best value-for-money package',
      features: [
        'Everything in Starter + Custom Web Application',
        'Backend APIs & Secure Database (Postgres/Mongo)',
        'Business Growth & Funnel Strategy Consultation',
        'Smooth GSAP & Framer Motion Animations',
        '1 Month Free Post-Launch Support',
      ],
      cta: 'Launch Growth Platform',
      popular: true,
    },
    {
      name: 'Custom Scalable Platform',
      tagline: 'Custom SaaS, Portals & Advanced Workflows',
      price: 'Flexible Milestone Billing',
      priceDetail: 'Tailored to your feature set',
      features: [
        'Full Custom Platform / PWA / SaaS Dashboards',
        'Payment Gateway & Invoicing Integration',
        'Scalable Database & Cloud Architecture',
        'Dedicated Technical & Business Partnership',
        'Continuous Evolution Support',
      ],
      cta: 'Request Custom Estimate',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 relative bg-[#070a13]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header with Source Serif 4 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300 mb-4">
            <Coins className="w-3.5 h-3.5 text-blue-400" />
            <span>Accessible Pricing Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal font-serif text-white tracking-tight mb-4">
            Enterprise Craftsmanship at{' '}
            <span className="text-gradient-blue font-medium italic">Very Affordable Rates</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We believe you shouldn&apos;t have to overpay for quality software. We deliver high-performing web platforms and financial logic at reasonable, startup-friendly prices.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`glass-blue rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden ${
                tier.popular
                  ? 'border-blue-500/50 ring-1 ring-blue-500/30 shadow-xl shadow-blue-500/15'
                  : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-0.5 rounded-full bg-blue-600 text-[10px] font-bold tracking-wider uppercase text-white shadow-sm">
                    Recommended
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-normal font-serif text-white mb-1">
                  {tier.name}
                </h3>
                <p className="text-xs text-slate-400 mb-5 font-normal">
                  {tier.tagline}
                </p>

                <div className="mb-5 pb-5 border-b border-white/[0.07]">
                  <span className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="block text-[11px] text-blue-300 mt-0.5 font-mono-code">
                    {tier.priceDetail}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-7">
                  {tier.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white hover:brightness-105 shadow-md shadow-blue-500/25'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Value & Trust Guarantee Banner */}
        <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-blue-950/30 via-[#0d1322] to-slate-900/40 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-normal font-serif text-white mb-0.5">
                Our Collaboration Mindset
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                &ldquo;I would truly love to partner with you. We respect your budget, communicate clearly at every milestone, and deliver apps you will be proud of.&rdquo;
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/30"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
