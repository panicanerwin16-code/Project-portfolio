import React from 'react';
import { Zap, ArrowUp, Linkedin, Github, Mail, Globe, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 light:border-slate-200 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 light:border-slate-200">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white light:text-slate-900 tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 light:text-slate-600 max-w-sm leading-relaxed">
              {personalInfo.tagline} Building autonomous n8n, Zapier, and AI agent pipelines for global businesses.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-mono border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (99.99% Uptime)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-sky-400">About Erwin</a></li>
              <li><a href="#services" className="hover:text-sky-400">Services</a></li>
              <li><a href="#projects" className="hover:text-sky-400">Case Studies</a></li>
              <li><a href="#roi-calculator" className="hover:text-sky-400">ROI Calculator</a></li>
              <li><a href="#process" className="hover:text-sky-400">7-Step Process</a></li>
              <li><a href="#faq" className="hover:text-sky-400">FAQ</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Connect & Book</h4>
            <p className="text-xs text-slate-400">
              Manila, Philippines • Global Remote Collaboration
            </p>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-300 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 hover:bg-slate-800 text-slate-300 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 hover:bg-sky-500 hover:text-white text-slate-300 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20"
            >
              Book a Call
            </button>
          </div>

        </div>


        {/* Bottom Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 light:text-slate-600">
          <div>
            © {new Date().getFullYear()} Erwin Panican. All rights reserved. Built with React & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 flex items-center gap-2 cursor-pointer transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
