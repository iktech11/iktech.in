'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  FolderGit2, 
  Sparkles, 
  ArrowUpRight, 
  Code2, 
  Layers, 
  CheckCircle, 
  X,
  TrendingUp,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  desc: string;
  longDesc: string;
  impact: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  stats: { label: string; value: string };
}

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack Apps', 'E-Commerce & SaaS', 'Business Portals', 'High-Converting Pages'];

  const projects: Project[] = [
    {
      id: '1',
      title: 'FinScale & Wealth Growth Dashboard',
      category: 'E-Commerce & SaaS',
      desc: 'Real-time financial analytics platform with cashflow projections, automated invoicing, and investor reporting for growing enterprises.',
      longDesc: 'Designed using MBA Finance principles to provide founders and CFOs with instant clarity on unit economics, MRR growth, burn rate, and profit margins. Built with Next.js, Tailwind, and PostgreSQL.',
      impact: 'Saved 14+ hours/week in financial reporting and increased recurring billing efficiency by 34%.',
      tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Finance Analytics', 'Recharts'],
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
      accentColor: 'text-amber-400',
      stats: { label: 'Query Latency', value: '< 120ms' },
    },
    {
      id: '2',
      title: 'OmniFlow Multi-Vendor E-Commerce Engine',
      category: 'Full-Stack Apps',
      desc: 'High-speed marketplace platform with lightning checkout, automated order fulfillment, inventory sync, and multi-currency support.',
      longDesc: 'Engineered for seamless transactions with custom cart management, integrated payment gateways, dynamic discount engines, and real-time inventory tracking.',
      impact: 'Boosted mobile checkout conversion rate by 42% with sub-second page loads.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'GSAP'],
      gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
      accentColor: 'text-blue-400',
      stats: { label: 'Conversion Boost', value: '+42%' },
    },
    {
      id: '3',
      title: 'ApexCare Medical & Appointment Booking PWA',
      category: 'Business Portals',
      desc: 'Healthcare booking and client management portal with automated WhatsApp/SMS reminders and interactive calendar scheduling.',
      longDesc: 'Full patient self-scheduling workflow with practitioner schedule matching, automated cancellation handling, and secure patient medical history storage.',
      impact: 'Reduced patient no-shows by 68% and automated 100% of calendar scheduling.',
      tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Twilio API', 'Framer Motion'],
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      accentColor: 'text-emerald-400',
      stats: { label: 'No-Show Reduction', value: '-68%' },
    },
    {
      id: '4',
      title: 'HyperCraft Creative Agency & Portfolio Web',
      category: 'High-Converting Pages',
      desc: 'Award-winning interactive brand portfolio with fluid GSAP scroll triggers, WebGL particle depth, and micro-interactions.',
      longDesc: 'A benchmark in modern digital aesthetics featuring bespoke typography, silky smooth physics-based animations, and zero performance lag.',
      impact: 'Ranked in top 5% on Google Lighthouse performance scores with 100/100 SEO.',
      tags: ['GSAP', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'SEO Pro'],
      gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
      accentColor: 'text-purple-400',
      stats: { label: 'Lighthouse Score', value: '99/100' },
    },
    {
      id: '5',
      title: 'FleetTrack Logistics & Dispatch Management',
      category: 'Full-Stack Apps',
      desc: 'Enterprise vehicle dispatch, live GPS telemetry dashboard, fuel consumption analytics, and driver management portal.',
      longDesc: 'Real-time WebSocket data feeds with interactive route mapping, automated toll cost calculations, and driver payout reconciliation.',
      impact: 'Decreased fuel discrepancies by 19% across 80+ commercial transport fleets.',
      tags: ['React', 'Express', 'PostgreSQL', 'WebSockets', 'Mapbox'],
      gradient: 'from-orange-500/20 via-red-500/10 to-transparent',
      accentColor: 'text-orange-400',
      stats: { label: 'Fleet Sync', value: 'Live Feed' },
    },
    {
      id: '6',
      title: 'PropVision Real Estate Lead Engine',
      category: 'Business Portals',
      desc: 'Dynamic property listing and virtual tour portal with automated buyer qualification and CRM lead routing.',
      longDesc: 'Designed to capture high-intent property inquiries through interactive EMI calculators, neighborhood scorecards, and instant consultation scheduling.',
      impact: 'Generated 3.8x more verified client inquiries within the first 60 days of deployment.',
      tags: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Lead CRM', 'Framer Motion'],
      gradient: 'from-teal-500/20 via-blue-500/10 to-transparent',
      accentColor: 'text-teal-400',
      stats: { label: 'Lead Growth', value: '3.8x' },
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 relative bg-[#090a0f]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-orange-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Selected <span className="text-gradient-orange">15+ Projects</span> &amp; Case Studies
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-xl">
              Real projects engineered with speed, bulletproof code, and high ROI business logic for our clients.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group cursor-pointer border border-white/10 hover:border-orange-500/40"
                onClick={() => setSelectedProject(project)}
              >
                {/* Background gradient */}
                <div className={`absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                <div>
                  {/* Top bar with category & stat */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono-code text-orange-400 uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                    <div className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-bold text-white flex items-center gap-1.5">
                      <span className="text-gray-400 font-normal">{project.stats.label}:</span>
                      <span className="text-orange-400">{project.stats.value}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2.5 group-hover:text-orange-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Tags & Impact */}
                <div>
                  <div className="mb-4 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-gray-300 flex items-start gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{project.impact}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono-code text-gray-400 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] font-mono-code text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/20">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#12141f] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative shadow-2xl overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${selectedProject.gradient} rounded-full blur-3xl pointer-events-none`} />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="text-xs font-mono-code text-orange-400 uppercase tracking-wider font-semibold block mb-1">
                  {selectedProject.category}
                </span>

                <h3 className="text-2xl font-bold text-white font-heading mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {selectedProject.longDesc}
                </p>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 mb-6 flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-0.5">Business & Growth Impact</h5>
                    <p className="text-xs sm:text-sm text-gray-200">{selectedProject.impact}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t, idx) => (
                      <span key={idx} className="text-xs font-mono-code text-white bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-gray-400">Want a similar high-performance build?</span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-md shadow-orange-500/25"
                  >
                    Get a Quote for Your App
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
