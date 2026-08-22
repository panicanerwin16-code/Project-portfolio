import React from 'react';
import { Zap, ArrowUp, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="border-t pt-16 pb-12 relative transition-colors duration-300 bg-crimson-grid"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Row */}
        <div 
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b"
          style={{ borderColor: 'var(--border-color)' }}
        >
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#ff9000] to-[#ff3700] flex items-center justify-center shadow-[0_0_15px_rgba(255,80,0,0.4)]">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span 
                className="font-bold text-lg tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                {personalInfo.name}
              </span>
            </div>

            <p 
              className="text-xs max-w-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {personalInfo.tagline} Building autonomous n8n, Zapier, and AI agent pipelines for global businesses.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-[#ff9000] text-[11px] font-mono border border-red-500/20">
              <span className="w-2 h-2 rounded-full bg-[#ff4500] animate-pulse shadow-[0_0_8px_#ff4500]" />
              <span>All Systems Operational (99.99% Uptime)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: 'var(--text-primary)' }}
            >
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
              <li><a href="#home" className="hover:text-[#ff9000] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#ff9000] transition-colors">Services</a></li>
              <li><a href="#experience" className="hover:text-[#ff9000] transition-colors">Experience</a></li>
              <li><a href="#work" className="hover:text-[#ff9000] transition-colors">Portfolio Work</a></li>
              <li><a href="#testimonials" className="hover:text-[#ff9000] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#ff9000] transition-colors">Work With Me</a></li>
              {onOpenResume && (
                <li>
                  <button
                    onClick={onOpenResume}
                    className="hover:text-[#ff9000] text-[#ff9000] font-semibold transition-colors cursor-pointer text-left"
                  >
                    ATS Resume (.PDF) ↓
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: 'var(--text-primary)' }}
            >
              Connect & Book
            </h4>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              Manila, Philippines • Global Remote Collaboration
            </p>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border hover:border-orange-500 hover:text-[#ff9000] transition-colors cursor-pointer"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl border hover:border-orange-500 hover:text-[#ff9000] transition-colors cursor-pointer"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ff9000] to-[#ff3700] hover:brightness-110 text-white text-xs font-extrabold shadow-[0_0_20px_rgba(255,80,0,0.35)] cursor-pointer"
            >
              Book a Call
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Back To Top */}
        <div 
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: 'var(--text-secondary)' }}
        >
          <div>
            © {new Date().getFullYear()} Erwin Panican. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors hover:border-orange-500 hover:text-[#ff9000]"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

