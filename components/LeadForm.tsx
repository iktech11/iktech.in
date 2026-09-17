'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Instagram, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Full-Stack Web App',
    budgetRange: 'Growth Platform',
    timeline: 'Within 1-2 Weeks',
    description: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    'Custom Business Website',
    'Full-Stack Web App',
    'E-Commerce & Online Store',
    'Mobile Web App (PWA)',
    'SaaS Dashboard / CRM',
    'Website Redesign & Speed Optimization',
  ];

  const budgetOptions = [
    'Starter / MVP Build',
    'Growth Platform',
    'Comprehensive Enterprise Platform',
    'Flexible / Milestone Based',
  ];

  const buildFormattedEmail = () => {
    return `Hello iktech.in Team,

I would like to get a high-quality website/application built by you. Here are my project details:

---------------------------------------------
📋 PROJECT INQUIRY DETAILS
---------------------------------------------
👤 Name: ${formData.name || 'Not provided'}
📧 Email: ${formData.email || 'Not provided'}
📞 Phone/WhatsApp: ${formData.phone || 'Not provided'}
💻 Project Type: ${formData.projectType}
💰 Estimated Scope / Tier: ${formData.budgetRange}
⏱️ Timeline: ${formData.timeline}

📝 Business Idea & Requirements:
${formData.description || 'Looking forward to discussing the project and getting your business growth & tech recommendations.'}

---------------------------------------------
Sent from iktech.in portfolio website
`;
  };

  const handleGmailRedirect = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#38bdf8', '#2563eb', '#8b5cf6', '#ffffff'],
      });
    } catch (_) {}

    const subject = encodeURIComponent(`🚀 Project Inquiry from ${formData.name || 'Potential Client'} - iktech.in`);
    const body = encodeURIComponent(buildFormattedEmail());
    const recipient = 'iktech.in@gmail.com';

    // Direct Gmail Web / App link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    setSubmitted(true);
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`🚀 Project Inquiry from ${formData.name || 'Potential Client'} - iktech.in`);
    const body = encodeURIComponent(buildFormattedEmail());
    window.location.href = `mailto:iktech.in@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopyDetails = () => {
    navigator.clipboard.writeText(buildFormattedEmail());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10 w-full">
        {/* Section Header with Source Serif 4 */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Direct Project Inquiry</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-normal font-serif text-white tracking-tight mb-3 sm:mb-4">
            Let&apos;s Build Your{' '}
            <span className="text-gradient-blue font-medium italic">Next Digital Product</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto px-1">
            Fill in your project requirements below. Tapping <strong className="text-cyan-400">Launch in Gmail</strong> opens your Gmail compose with all details pre-filled so you only have to hit Send!
          </p>
        </div>

        {/* The Classic Blue & Cyan Interactive Form Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-blue rounded-3xl p-5 sm:p-9 border border-cyan-500/30 relative overflow-hidden shadow-2xl"
        >
          {/* Top highlight line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

          <form onSubmit={handleGmailRedirect} className="space-y-4 sm:space-y-6">
            {/* Client Info Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Your Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-900/70 border border-slate-700/60 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs sm:text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Email Address <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  inputMode="email"
                  required
                  placeholder="e.g. rahul@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-900/70 border border-slate-700/60 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs sm:text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  placeholder="e.g. +91 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-900/70 border border-slate-700/60 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs sm:text-sm transition-all"
                />
              </div>
            </div>

            {/* Project Type Chips */}
            <div>
              <label className="block text-[11px] sm:text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                What do you want to build?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {projectTypes.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={`text-[11px] sm:text-xs px-3 py-2.5 rounded-xl border text-left font-medium transition-all active:scale-95 ${
                      formData.projectType === type
                        ? 'bg-cyan-500/20 border-cyan-400 text-white ring-1 ring-cyan-400/40 shadow-sm'
                        : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Scope / Budget Options */}
            <div>
              <label className="block text-[11px] sm:text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                Project Scope &amp; Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {budgetOptions.map((budget) => (
                  <button
                    type="button"
                    key={budget}
                    onClick={() => setFormData({ ...formData, budgetRange: budget })}
                    className={`text-[11px] sm:text-xs px-3.5 py-2.5 rounded-xl border text-left font-medium transition-all active:scale-95 ${
                      formData.budgetRange === budget
                        ? 'bg-cyan-500/20 border-cyan-400 text-white ring-1 ring-cyan-400/40 shadow-sm'
                        : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* Business Idea Description */}
            <div>
              <label className="block text-[11px] sm:text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                Tell us about your business idea or website goals
              </label>
              <textarea
                rows={3}
                placeholder="Describe your vision, target audience, reference sites, or desired features..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3.5 py-3 rounded-xl bg-slate-900/70 border border-slate-700/60 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs sm:text-sm transition-all"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 hover:from-cyan-400 hover:to-blue-600 active:scale-98 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2.5 group"
              >
                <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                <span>Submit &amp; Open in Gmail (One-Click Send)</span>
              </button>
              <p className="text-center text-[10px] sm:text-xs text-slate-400 mt-2">
                Sends directly to <span className="text-cyan-400 font-medium">iktech.in@gmail.com</span> with pre-filled details.
              </p>
            </div>

            {/* Secondary Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 text-xs">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleMailtoFallback}
                  className="flex-1 sm:flex-initial px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-all text-[11px] sm:text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Email App</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="flex-1 sm:flex-initial px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-all text-[11px] sm:text-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href="https://instagram.com/iktech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 active:scale-95 border border-pink-500/30 text-pink-300 flex items-center justify-center gap-1.5 transition-all text-[11px] sm:text-xs"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram (@iktech.in)</span>
              </a>
            </div>
          </form>

          {submitted && (
            <div className="mt-4 p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-center">
              <p className="text-xs font-semibold text-white">
                🚀 Gmail compose window triggered!
              </p>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Review your details in Gmail and tap &ldquo;Send&rdquo;.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
