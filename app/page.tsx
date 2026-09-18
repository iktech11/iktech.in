'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DualAdvantage from '@/components/DualAdvantage';
import ServicesBento from '@/components/ServicesBento';
import LeadForm from '@/components/LeadForm';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SocialConnect from '@/components/SocialConnect';
import VisitorCounter from '@/components/VisitorCounter';
import Footer from '@/components/Footer';
import SilkWavesBackground from '@/components/SilkWavesBackground';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Welcome to iktech.in Portfolio Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Shiny Animated Silk Waves / Liquid Oil Paint Background */}
      <SilkWavesBackground />

      {/* Main Website View */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="min-h-screen flex flex-col text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-white relative z-10 bg-transparent pb-0"
      >
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* BCA (Tech) + MBA Finance (Business Logic) Synergy */}
          <DualAdvantage />

          {/* Full-Stack Capabilities Bento (Frontend, Backend, Database, Mobile Apps) */}
          <ServicesBento />

          {/* Mid-Page Interactive Quote & Direct Gmail Compose Form */}
          <LeadForm />

          {/* 4+ Years Experience Timeline & Milestones */}
          <ExperienceTimeline />

          {/* Direct Social Channels (Gmail & Instagram) */}
          <SocialConnect />

          {/* Unique Live Total Visitors (1k+) Telemetry Widget */}
          <VisitorCounter />
        </main>

        <Footer />
      </motion.div>
    </>
  );
}
