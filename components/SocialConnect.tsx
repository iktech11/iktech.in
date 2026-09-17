'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Instagram, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  MessageSquare
} from 'lucide-react';

export default function SocialConnect() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('iktech.in@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section className="py-20 px-4 relative bg-[#060810]">
      <div className="max-w-4xl mx-auto">
        {/* Hub Header with Source Serif 4 */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal font-serif text-white tracking-tight mb-2">
            Reach Out Directly to <span className="text-gradient-blue font-medium italic">iktech.in</span>
          </h2>
          <p className="text-sm text-slate-400">
            Quick responses guaranteed within a few hours. Connect via Instagram DM or Email.
          </p>
        </div>

        {/* Dual Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1: Official Gmail */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-blue rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <Mail className="w-5 h-5" />
              </div>

              <span className="text-[11px] font-mono-code text-blue-400 uppercase tracking-wider font-semibold block mb-1">
                Official Inquiries
              </span>

              <h3 className="text-lg font-medium text-white font-serif mb-2">
                iktech.in@gmail.com
              </h3>

              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                Send your website briefs or requirements. We analyze your needs and provide custom estimates promptly.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=iktech.in@gmail.com&su=Hello%20iktech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-bold text-center flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/25 hover:brightness-105"
              >
                <Send className="w-3.5 h-3.5 text-white" />
                <span>Open Gmail</span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs flex items-center gap-1.5 transition-all"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Card 2: Official Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-blue rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-5">
                <Instagram className="w-5 h-5" />
              </div>

              <span className="text-[11px] font-mono-code text-pink-400 uppercase tracking-wider font-semibold block mb-1">
                Social &amp; Direct DM
              </span>

              <h3 className="text-lg font-medium text-white font-serif mb-2">
                @iktech.in
              </h3>

              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                Connect directly on Instagram for quick project chats, design discussions, or casual consultation.
              </p>
            </div>

            <div className="pt-3 border-t border-white/[0.06]">
              <a
                href="https://instagram.com/iktech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500 text-white text-xs font-bold text-center flex items-center justify-center gap-2 transition-all shadow-md shadow-pink-500/20"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Visit Instagram Profile (@iktech.in)</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
