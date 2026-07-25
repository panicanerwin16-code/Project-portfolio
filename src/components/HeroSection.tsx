import React from 'react';
import erwinHeadshotDefault from '../assets/images/erwin_studio_headshot_1784990012467.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenProjects: () => void;
  onOpenResume?: () => void;
  headshot?: string;
  onUploadHeadshot?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetHeadshot?: () => void;
  isCustomHeadshot?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenProjects,
  onOpenResume,
  headshot = erwinHeadshotDefault,
  onUploadHeadshot,
  onResetHeadshot,
  isCustomHeadshot = false,
}) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0B0F19]">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800/90 text-slate-300 text-xs font-mono mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse" />
              <span>Available for new automation projects</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              I build AI <br />
              Automations <br />
              <span className="text-amber-400 font-extrabold">Workflow</span> that <br />
              quietly run your <br />
              business.
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed mb-8">
              I'm Erwin Panican — a Workflow Automation Specialist connecting CRMs, spreadsheets, APIs and AI models into systems that save teams hours every single week.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  const workEl = document.getElementById('work');
                  if (workEl) {
                    workEl.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onOpenProjects();
                  }
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>See selected work</span>
                <span className="text-sm font-bold">↗</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center cursor-pointer"
              >
                Book a discovery call
              </button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto px-5 py-3.5 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-300 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>View Resume</span>
                </button>
              )}
            </div>

          </div>

          {/* Right Column - Profile Image */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0">
            <div className="relative flex items-center justify-center w-full max-w-sm sm:max-w-md">
              
              {/* Background Radial Glow */}
              <div className="absolute inset-0 bg-amber-500/15 rounded-3xl blur-3xl scale-105 pointer-events-none" />

              {/* Portrait Studio Frame with Image */}
              <div 
                className="relative w-64 h-80 sm:w-80 sm:h-[420px] lg:w-[340px] lg:h-[450px] rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-[0_0_50px_rgba(245,158,11,0.2)] bg-[#111827]"
              >
                <img
                  src={headshot}
                  alt="Erwin Panican"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Bottom Badge Tag */}
              <div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-[#0B0F19] border border-amber-400/50 rounded-full shadow-2xl backdrop-blur-md z-20"
              >
                <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-amber-400 whitespace-nowrap">
                  ERWIN PANICAN
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

