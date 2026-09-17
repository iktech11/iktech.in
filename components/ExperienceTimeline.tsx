'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  TrendingUp,
  Briefcase
} from 'lucide-react';

export default function ExperienceTimeline() {
  const milestones = [
    {
      year: '2023 - Present',
      title: 'Full-Stack Web & App Architect',
      organization: 'iktech.in (Client Engineering & Solutions)',
      description: 'Building modern web applications, e-commerce platforms, and dashboards with integrated business ROI logic, financial tracking modules, and ultra-fast GSAP/Framer animations.',
      skills: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'MBA Business Strategy'],
    },
    {
      year: '2021 - 2023',
      title: 'Senior Frontend & Database Specialist',
      organization: 'Full-Stack Web Projects',
      description: 'Engineered high-throughput relational and NoSQL database schemas, built lightning-speed APIs, and designed conversion-optimized web pages for businesses and startups.',
      skills: ['React', 'Express.js', 'MongoDB', 'REST APIs', 'UI/UX Design', 'Performance Tuning'],
    },
    {
      year: 'Academic Milestones',
      title: 'BCA (Graduation) & MBA Finance (Post Graduation)',
      organization: 'Dual Technical & Business Education',
      description: 'Built deep foundational mastery in software engineering and database systems (BCA), complemented with comprehensive corporate finance, unit economics, and business growth strategies (MBA).',
      skills: ['Software Architecture', 'Corporate Finance', 'Financial Modeling', 'Business Growth Logic'],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative bg-subtle-grid">
      <div className="max-w-4xl mx-auto">
        {/* Section Header with Source Serif 4 */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300 mb-4">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal font-serif text-white tracking-tight mb-4">
            <span className="text-gradient-blue font-medium italic">4+ Years Experience</span> &amp; Academic Foundation
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A consistent history of delivering 15+ successful applications with clean code, scalable architecture, and tangible client growth.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-[1px] before:-translate-x-1/2 before:bg-gradient-to-b before:from-blue-500 before:via-sky-400/40 before:to-transparent">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`relative flex flex-col ${
                idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              } items-center gap-6`}
            >
              {/* Central Timeline Dot */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#070a13] border-2 border-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/30 z-10">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
              </div>

              {/* Content Card */}
              <div className="w-full sm:w-[calc(50%-2rem)] pl-10 sm:pl-0">
                <div className="glass-blue rounded-3xl p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-xs font-mono-code text-blue-300 font-semibold">{item.year}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-normal font-serif text-white mb-0.5">
                    {item.title}
                  </h3>

                  <span className="text-xs text-slate-400 block mb-2.5">
                    {item.organization}
                  </span>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.05]">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono-code text-slate-300 bg-white/[0.03] border border-white/[0.07] px-2 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
