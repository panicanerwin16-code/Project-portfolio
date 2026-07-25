import React from 'react';
import {
  MapPin,
  Mail,
  Linkedin,
  CheckCircle2,
  Award,
  Zap,
  Cpu,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Camera,
} from 'lucide-react';
import erwinHeadshotDefault from '../assets/images/erwin_studio_headshot_1784990012467.jpg';
import { personalInfo } from '../data/portfolioData';

interface AboutSectionProps {
  headshot?: string;
  onUploadHeadshot?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  headshot = erwinHeadshotDefault,
  onUploadHeadshot,
}) => {
  return (
    <section id="about" className="py-20 md:py-28 relative glow-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Avatar / Highlight Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl relative border border-white/10 light:border-slate-200/80 bg-slate-950/80 light:bg-white/80 shadow-2xl overflow-hidden group">
              
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

              {/* Header Profile Photo / Avatar Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative group/avatar w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-0.5 shadow-xl shadow-amber-500/20 shrink-0 overflow-hidden">
                  <img
                    src={headshot}
                    alt="Erwin Panican"
                    className="w-full h-full object-cover object-top rounded-[14px]"
                  />
                  {onUploadHeadshot && (
                    <label
                      htmlFor="about-photo-upload"
                      className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex flex-col items-center justify-center text-center cursor-pointer rounded-[14px]"
                      title="Upload new photo"
                    >
                      <Camera className="w-4 h-4 text-amber-400 mb-0.5" />
                      <span className="text-[9px] font-mono font-bold text-amber-300">
                        Upload
                      </span>
                      <input
                        id="about-photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={onUploadHeadshot}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white light:text-slate-900 tracking-tight">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-sky-400 font-semibold mt-0.5">
                    {personalInfo.title}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-300 light:text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Bio Highlights */}
              <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                {personalInfo.bioSummary}
              </p>

              {/* Quick Contact Links */}
              <div className="pt-4 border-t border-white/10 light:border-slate-200 flex flex-wrap gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 light:bg-slate-100 hover:bg-slate-800 text-xs font-medium text-slate-200 light:text-slate-800 border border-white/10 light:border-slate-200 flex items-center gap-2 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>{personalInfo.email}</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 light:bg-slate-100 hover:bg-slate-800 text-xs font-medium text-slate-200 light:text-slate-800 border border-white/10 light:border-slate-200 flex items-center gap-2 transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-300" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Key Stats & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold mb-3">
                <Cpu className="w-3.5 h-3.5" />
                <span>About Erwin Panican</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
                Architecting High-Yield <br />
                <span className="gradient-text">AI Business Automations</span>
              </h2>
            </div>

            {/* Statistics Cards Grid (2x2) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-panel p-5 rounded-2xl border border-white/10 light:border-slate-200/80 bg-slate-950/70 light:bg-white/70 hover:border-sky-400/50 transition-all group"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 gradient-blue-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-300 light:text-slate-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Value Proposition Points */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white light:text-slate-900">
                    Custom AI & API Integration
                  </h4>
                  <p className="text-xs text-slate-300 light:text-slate-600">
                    Connecting OpenAI, Gemini, Claude, and custom REST APIs directly into your operational stack.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white light:text-slate-900">
                    Bulletproof Error-Handling & Logs
                  </h4>
                  <p className="text-xs text-slate-300 light:text-slate-600">
                    Every workflow includes fallback routes, error alerts, and 99%+ uptime reliability.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
