import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Video, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

export const CalendlySection: React.FC = () => {
  const [, setScriptLoaded] = useState(false);
  const calendlyUrl = "https://calendly.com/panicanerwin16/30min?month=2026-07&hide_landing_page_details=0&hide_gdpr_banner=1&background_color=0a0103&text_color=ffffff&primary_color=ff4500";

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
    <section 
      id="book-call" 
      className="py-20 md:py-28 relative overflow-hidden transition-colors duration-300 bg-crimson-grid"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Radial Glow & Futuristic Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-[#ff9000] text-xs font-mono font-semibold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(255,80,0,0.2)]">
            <Calendar className="w-3.5 h-3.5 text-[#ff9000] animate-pulse" />
            <span>FREE 30-MINUTE CONSULTATION</span>
          </div>

          {/* Title */}
          <h2 
            className="text-3xl sm:text-5xl font-black tracking-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Let's Build Your <span className="gradient-fiery-text drop-shadow-[0_0_20px_rgba(255,80,0,0.3)]">Business Automation</span>
          </h2>

          {/* Supporting Subtitle */}
          <p 
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Schedule a free 30-minute consultation to discuss your automation needs.
          </p>

          {/* Feature Highlight Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs font-mono">
            <span 
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)',
              }}
            >
              <Clock className="w-3.5 h-3.5 text-[#ff9000]" />
              <span>30-Min Strategy Call</span>
            </span>
            <span 
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)',
              }}
            >
              <Video className="w-3.5 h-3.5 text-orange-400" />
              <span>Google Meet / Zoom</span>
            </span>
            <span 
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)',
              }}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff9000]" />
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
          className="relative rounded-3xl border-2 card-crimson-glow shadow-2xl overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-color)',
          }}
        >
          {/* Top Control Header Bar */}
          <div 
            className="px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-[#ff4500]" />
              <span className="text-xs font-mono ml-2 hidden sm:inline" style={{ color: 'var(--text-secondary)' }}>
                calendly.com/panicanerwin16/30min
              </span>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff9000] px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4500] animate-ping" />
                Live Calendar Sync
              </span>

              <a
                href="https://calendly.com/panicanerwin16/30min?month=2026-07"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-[#ff9000] text-xs font-mono font-semibold transition-all flex items-center gap-1.5"
              >
                <span>Open in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Inline Calendly Widget Embed */}
          <div 
            className="relative w-full min-h-[680px] sm:min-h-[720px] flex items-center justify-center"
            style={{ backgroundColor: 'var(--bg-primary)' }}
          >
            
            {/* Inline Widget using Calendly standard script container */}
            <div 
              className="calendly-inline-widget w-full h-[680px] sm:h-[720px]" 
              data-url={calendlyUrl}
              style={{ minWidth: '320px', height: '720px' }}
            />

            {/* Direct Iframe Fallback for instant load if script takes time or is blocked */}
            <iframe
              src={calendlyUrl}
              className="w-full h-[680px] sm:h-[720px] border-0 rounded-b-3xl absolute inset-0"
              style={{ backgroundColor: 'var(--bg-primary)' }}
              title="Select a Date & Time - Calendly"
              loading="lazy"
            />
          </div>

          {/* Footer Assistance Line */}
          <div 
            className="p-4 border-t text-center text-xs font-mono flex flex-wrap items-center justify-center gap-4"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
            }}
          >
            <span className="flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
              <Zap className="w-3.5 h-3.5 text-[#ff9000]" />
              Need a custom time slot or urgent automation build?
            </span>
            <a 
              href="mailto:panicanerwin16@gmail.com" 
              className="text-[#ff9000] hover:underline font-bold"
            >
              Email me directly: panicanerwin16@gmail.com
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

