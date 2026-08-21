import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Calendar,
  Clock,
  Video,
  ShieldCheck,
  Zap,
  CheckCircle2,
  FileText,
  Copy,
  Check,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking?: () => void;
  onOpenResume?: () => void;
  prefilledMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenResume,
}) => {
  const [, setScriptLoaded] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const calendlyUrl = "https://calendly.com/panicanerwin16/30min?hide_landing_page_details=0&hide_gdpr_banner=1&background_color=0a0103&text_color=ffffff&primary_color=ff4500";

  useEffect(() => {
    // Check if Calendly script is already loaded
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

    // Load Calendly CSS for widget support
    const existingCSS = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
    if (!existingCSS) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('panicanerwin16@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const contactChannels = [
    {
      id: 'email',
      icon: Mail,
      label: 'DIRECT EMAIL',
      text: 'panicanerwin16@gmail.com',
      href: 'mailto:panicanerwin16@gmail.com',
      badge: 'Quickest Response',
      action: 'copy',
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'WHATSAPP / PHONE',
      text: '+63 915 300 090',
      href: 'https://wa.me/63915300090',
      badge: 'Instant Chat',
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LINKEDIN PROFILE',
      text: 'linkedin.com/in/erwinpanican',
      href: 'https://linkedin.com/in/erwinpanican',
    },
    {
      id: 'upwork',
      icon: ExternalLink,
      label: 'UPWORK PROFILE',
      text: 'Top Rated Automation Freelancer',
      href: 'https://www.upwork.com/freelancers/~01c544a89e40992a44',
    },
    {
      id: 'onlinejobs',
      icon: ExternalLink,
      label: 'ONLINEJOBS.PH',
      text: 'Verified Expert Profile',
      href: 'https://v2.onlinejobs.ph/jobseekers/info/5106135',
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 relative overflow-hidden transition-colors duration-300 bg-crimson-grid"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Target anchor for links navigating to book-call */}
      <div id="book-call" className="absolute -top-24 left-0" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-orange-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Unified 2-Column Grid: Left Side (Work With Me Details) & Right Side (Calendar Consultation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ================= LEFT SIDE: WORK WITH ME DETAILS ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-start text-left space-y-7"
          >
            {/* Eyebrow Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-[#ff9000] text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,80,0,0.2)]">
                <Zap className="w-3.5 h-3.5 text-[#ff9000] animate-pulse" />
                <span>WORK WITH ME</span>
              </span>
            </div>

            {/* Headline */}
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12]"
              style={{ color: 'var(--text-primary)' }}
            >
              You've seen what I build. <br />
              <span className="gradient-fiery-text drop-shadow-[0_0_25px_rgba(255,100,0,0.35)]">
                Let's talk about yours.
              </span>
            </h2>

            {/* Description */}
            <p 
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              30 minutes. You walk me through your current stack, your operations, and where things are slipping — leads going cold, sequences not firing, or manual tasks your team shouldn't be touching. I'll tell you exactly what I'd build, in what order, and what it would actually change for your business.
            </p>

            {/* Strategic Value Points */}
            <div 
              className="p-5 sm:p-6 rounded-2xl border space-y-3.5 backdrop-blur-md shadow-lg"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#ff9000]">
                What We Will Cover in 30 Minutes:
              </h3>
              
              <div className="space-y-2.5">
                {[
                  'Live audit of your existing bottlenecks in GoHighLevel, CRM, or spreadsheets.',
                  'Recommended automation architecture (n8n, Make, Zapier, Webhooks & AI).',
                  'Actionable timeline, implementation steps, and estimated hours saved per week.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff9000] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider font-bold block" style={{ color: 'var(--text-secondary)' }}>
                Direct Communication Channels:
              </span>

              <div className="space-y-2.5">
                {contactChannels.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 shadow-md hover:border-[#ff9000]/60 card-crimson-glow"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-color)',
                      }}
                    >
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3.5 flex-1 min-w-0"
                      >
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 text-[#ff9000] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono uppercase font-bold tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                              {item.label}
                            </span>
                            {item.badge && (
                              <span className="px-2 py-0.2 rounded-full bg-red-500/15 text-[#ff9000] text-[9px] font-mono font-bold">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <span 
                            className="text-xs sm:text-sm font-semibold truncate block transition-colors group-hover:text-[#ff9000]"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {item.text}
                          </span>
                        </div>
                      </a>

                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        {item.action === 'copy' && (
                          <button
                            onClick={handleCopyEmail}
                            title="Copy email address"
                            className="p-2 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 text-[#ff9000] transition-colors cursor-pointer"
                          >
                            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        )}
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg text-[#ff9000] hover:bg-orange-500/10 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Resume Button */}
            {onOpenResume && (
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-orange-500/40 bg-orange-500/10 hover:bg-orange-500/20 text-[#ff9000] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-[1.02]"
                >
                  <FileText className="w-4 h-4 text-[#ff9000]" />
                  <span>View & Download Resume (PDF)</span>
                </button>
              </div>
            )}
          </motion.div>

          {/* ================= RIGHT SIDE: CALENDLY FREE 30-MIN CONSULTATION ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            {/* Calendly Outer Frame Card */}
            <div 
              className="relative rounded-3xl border-2 card-crimson-glow shadow-2xl overflow-hidden backdrop-blur-xl transition-all"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
            >
              {/* Top Control Bar with URL & Live Sync */}
              <div 
                className="px-5 sm:px-6 py-4 border-b flex flex-wrap items-center justify-between gap-3"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-[#ff9000]" />
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--text-primary)' }}>
                      Free 30-Minute Consultation
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#ff9000] px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                    <span className="w-2 h-2 rounded-full bg-[#ff4500] animate-ping" />
                    Live Sync
                  </span>

                  <a
                    href="https://calendly.com/panicanerwin16/30min"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-[#ff9000] text-xs font-mono font-semibold transition-all flex items-center gap-1.5"
                  >
                    <span>Open Tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Consultation Highlight Chips */}
              <div 
                className="px-5 sm:px-6 py-3 border-b flex flex-wrap items-center justify-start gap-2.5 sm:gap-4 text-[11px] font-mono"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <span className="flex items-center gap-1.5 text-[#ff9000]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>30-Min Call</span>
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5 text-orange-400">
                  <Video className="w-3.5 h-3.5" />
                  <span>Google Meet / Zoom</span>
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% Free & No Pitch</span>
                </span>
              </div>

              {/* Calendly Interactive Embed Window */}
              <div 
                className="relative w-full h-[650px] sm:h-[690px] flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                {/* Inline Calendly Container */}
                <div 
                  className="calendly-inline-widget w-full h-[650px] sm:h-[690px]" 
                  data-url={calendlyUrl}
                  style={{ minWidth: '320px', height: '690px' }}
                />

                {/* Direct Iframe Fallback */}
                <iframe
                  src={calendlyUrl}
                  className="w-full h-[650px] sm:h-[690px] border-0 absolute inset-0"
                  style={{ backgroundColor: 'var(--bg-primary)' }}
                  title="Select a Date & Time - Calendly 30-Minute Consultation"
                  loading="lazy"
                />
              </div>

              {/* Bottom Support & Direct Inquiries Bar */}
              <div 
                className="p-4 border-t text-left sm:text-center text-xs font-mono flex flex-col sm:flex-row items-center justify-between gap-3"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <Zap className="w-3.5 h-3.5 text-[#ff9000] shrink-0" />
                  <span>Prefer sending project specs via email?</span>
                </div>
                <a 
                  href="mailto:panicanerwin16@gmail.com" 
                  className="text-[#ff9000] hover:underline font-bold transition-colors"
                >
                  panicanerwin16@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};



