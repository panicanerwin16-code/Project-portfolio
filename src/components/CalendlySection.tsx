import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Video, Sparkles, ExternalLink, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const CalendlySection: React.FC = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const calendlyUrl = "https://calendly.com/panicanerwin16/30min?month=2026-07&hide_landing_page_details=0&hide_gdpr_banner=1&background_color=0a0f1d&text_color=ffffff&primary_color=f59e0b";

  useEffect(() => {
    // Check if Calendly script is already added
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }

    // Load Calendly CSS for popup/embed support if needed
    const existingCSS = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
    if (!existingCSS) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section id="book-call" className="py-20 md:py-28 bg-[#050505] text-white relative overflow-hidden border-t border-slate-900">
      {/* Background Radial Glow & Futuristic Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Calendar className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>FREE 30-MINUTE CONSULTATION</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">Business Automation</span>
          </h2>

          {/* Supporting Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a free 30-minute consultation to discuss your automation needs.
          </p>

          {/* Feature Highlight Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs font-mono text-slate-300">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>30-Min Strategy Call</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
              <Video className="w-3.5 h-3.5 text-sky-400" />
              <span>Google Meet / Zoom</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Free & No Commitment</span>
            </span>
          </div>
        </motion.div>

        {/* Embedded Calendly Scheduling Widget Container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-3xl bg-[#0A0F1D] border-2 border-slate-800/80 hover:border-amber-500/40 transition-colors shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Top Control Header Bar */}
          <div className="px-6 py-4 bg-[#0E1526] border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                calendly.com/panicanerwin16/30min
              </span>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Calendar Sync
              </span>

              <a
                href="https://calendly.com/panicanerwin16/30min?month=2026-07"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold transition-all flex items-center gap-1.5"
              >
                <span>Open in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Inline Calendly Widget Embed */}
          <div className="relative w-full min-h-[680px] sm:min-h-[720px] bg-[#0A0F1D] flex items-center justify-center">
            
            {/* Inline Widget using Calendly standard script container */}
            <div 
              className="calendly-inline-widget w-full h-[680px] sm:h-[720px]" 
              data-url={calendlyUrl}
              style={{ minWidth: '320px', height: '720px' }}
            />

            {/* Direct Iframe Fallback for instant load if script takes time or is blocked */}
            <iframe
              src={calendlyUrl}
              className="w-full h-[680px] sm:h-[720px] border-0 rounded-b-3xl absolute inset-0 bg-[#0A0F1D]"
              title="Select a Date & Time - Calendly"
              loading="lazy"
            />
          </div>

          {/* Footer Assistance Line */}
          <div className="p-4 bg-[#080C17] border-t border-slate-800/80 text-center text-xs text-slate-400 font-mono flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Need a custom time slot or urgent automation build?
            </span>
            <a 
              href="mailto:panicanerwin16@gmail.com" 
              className="text-amber-400 hover:underline font-bold"
            >
              Email me directly: panicanerwin16@gmail.com
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
