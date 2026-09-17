'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState('Initializing portfolio...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 350);
          return 100;
        }
        const next = prev + 5;
        if (next > 75) setStageText('Launching experience...');
        else if (next > 40) setStageText('Loading high-performance architecture...');
        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#04060d] text-white select-none overflow-hidden"
    >
      {/* Dynamic Ambient Silk Glows */}
      <div className="absolute w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
        {/* Brand Emblem using Official Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.55 }}
          className="relative mb-6"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 p-1 flex items-center justify-center shadow-2xl shadow-cyan-500/30 ring-1 ring-cyan-400/40">
            <img
              src="/logo.png"
              alt="iktech.in Logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div className="absolute -inset-2 rounded-full bg-cyan-400/25 blur-xl -z-10 animate-pulse" />
        </motion.div>

        {/* Welcome Headline */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-2 mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-normal font-serif tracking-tight text-white">
            Welcome to <span className="text-gradient-blue font-medium italic">iktech.in Portfolio</span>
          </h1>
        </motion.div>

        {/* Ultra-Sleek Progress Bar */}
        <div className="w-full max-w-xs space-y-2.5">
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 ring-1 ring-white/10 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-md shadow-cyan-400/50"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
          <div className="flex justify-between items-center text-xs font-mono-code text-slate-400 px-1">
            <span className="text-[11px] text-slate-400 truncate max-w-[200px] text-left">{stageText}</span>
            <span className="text-cyan-300 font-semibold">{progress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
