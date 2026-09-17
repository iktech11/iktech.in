'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  TrendingUp, 
  Send, 
  HeartHandshake,
  Terminal
} from 'lucide-react';

export default function Hero() {
  const phrases = [
    'Welcome to iktech.in Portfolio',
    'Crafting Ultra-Premium Web Applications',
    'Engineering Full-Stack Precision & Scalability',
  ];

  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(75);

        if (text.length + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(40);

        if (text.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, typingSpeed, phrases]);

  const stats = [
    { number: '4+', label: 'Years Experience', sub: 'Production Development' },
    { number: '15+', label: 'Delivered Projects', sub: 'High Client Satisfaction' },
    { number: '100%', label: 'Dedicated Support', sub: 'Collaborative Partnership' },
    { number: 'Full-Stack', label: 'End-to-End Build', sub: 'Frontend, Backend & DB' },
  ];

  return (
    <section className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 sm:pb-20 flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center w-full">
        
        {/* Continuous Looping Typewriter Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 p-1.5 px-3.5 sm:px-4 rounded-full bg-cyan-950/50 border border-cyan-500/30 backdrop-blur-xl mb-6 sm:mb-8 shadow-lg shadow-cyan-500/10 min-h-[36px] max-w-full"
        >
          <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="text-[11px] sm:text-sm font-mono-code text-cyan-200 truncate">
            {text}
          </span>
          <span className="inline-block w-1.5 h-3.5 sm:h-4 bg-cyan-400 rounded-sm animate-pulse ml-0.5 shrink-0" />
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-3xl sm:text-6xl lg:text-7xl font-normal font-serif tracking-tight text-white leading-[1.18] sm:leading-[1.14] mb-5 sm:mb-6 max-w-4xl"
        >
          Crafting Ultra-Premium{' '}
          <span className="text-gradient-blue font-medium italic">Websites &amp; Applications</span>{' '}
          Tailored for You.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal px-1"
        >
          Welcome to my portfolio. I engineer bespoke, modern web and mobile applications with full-stack precision (<span className="text-white font-medium">BCA</span>) and strategic business growth logic (<span className="text-cyan-300 font-medium">MBA Finance</span>) to build high-impact digital products for your brand.
        </motion.p>

        {/* Dual Superpower Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto mb-8 sm:mb-10"
        >
          <div className="w-full sm:w-auto flex items-center justify-center gap-2 px-3.5 py-2 rounded-full bg-blue-950/60 border border-cyan-500/30 text-[11px] sm:text-xs text-cyan-200 backdrop-blur-md shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span><strong>BCA Graduate:</strong> Scalable Architecture &amp; Clean Code</span>
          </div>

          <div className="w-full sm:w-auto flex items-center justify-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/70 border border-slate-700/50 text-[11px] sm:text-xs text-slate-200 backdrop-blur-md shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span><strong>MBA Finance:</strong> Business Growth &amp; Financial Logic</span>
          </div>
        </motion.div>

        {/* Main CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-16"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 active:scale-95 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all group"
          >
            <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            <span>Start Your Project / Hire Me</span>
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 border border-white/10 text-slate-200 hover:text-white font-medium text-sm backdrop-blur-xl transition-all"
          >
            <span>Explore Services &amp; Stack</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </motion.div>

        {/* Stats Bar (2x2 on Mobile, 4x1 on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-4xl"
        >
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="glass-blue p-3.5 sm:p-5 rounded-2xl flex flex-col items-center justify-center text-center"
            >
              <span className="text-xl sm:text-3xl font-serif font-bold text-gradient-blue mb-0.5 sm:mb-1">
                {s.number}
              </span>
              <span className="text-[11px] sm:text-sm font-semibold text-white mb-0.5">
                {s.label}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-normal">
                {s.sub}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Collaboration Trust Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-10 inline-flex items-center gap-2 text-[11px] sm:text-xs text-slate-400 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-full text-center"
        >
          <HeartHandshake className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>&ldquo;I would love to collaborate with you and turn your ideas into a thriving digital asset.&rdquo;</span>
        </motion.div>
      </div>
    </section>
  );
}
