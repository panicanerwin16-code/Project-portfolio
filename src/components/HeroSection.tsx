import React from 'react';

const erwinHeadshotDefault = "https://i.im.ge/QMc34OT/ERN_1.png";

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
}) => {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden transition-colors duration-300 bg-crimson-grid"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Warm Golden Sand & Amber Atmospheric Spotlights matching reference images */}
      <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[550px] h-[550px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Hero Content & Typography matching the reference poster */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* Status Badge */}
            <div 
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-mono mb-6 backdrop-blur-md transition-colors"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)',
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#f97316] shadow-[0_0_10px_#f97316] animate-pulse" />
              <span>Available for new automation projects</span>
            </div>

            {/* Main Headline matching the requested image */}
            <h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              I build AI <br />
              Automations <br />
              <span className="text-[#f59e0b] drop-shadow-[0_0_25px_rgba(245,158,11,0.35)]">Workflow</span> that <br />
              quietly run your <br />
              business.
            </h1>

            {/* Subheadline Description matching the requested image */}
            <p 
              className="text-sm sm:text-base max-w-xl leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              I'm Erwin Panican — a Workflow Automation Specialist connecting CRMs, spreadsheets, APIs and AI models into systems that save teams hours every single week.
            </p>

            {/* CTA Buttons & Swipe Indicator */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-6">
              <button
                onClick={() => {
                  const workEl = document.getElementById('work');
                  if (workEl) {
                    workEl.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onOpenProjects();
                  }
                }}
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#ea580c] hover:brightness-110 text-white font-extrabold text-xs rounded-xl shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>See selected work</span>
                <span className="text-base font-bold">→</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3.5 border font-bold text-xs rounded-xl transition-all flex items-center justify-center cursor-pointer hover:border-[#f59e0b]/60"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              >
                Book a discovery call
              </button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto px-5 py-3.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-[#f59e0b] font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>View Resume</span>
                </button>
              )}
            </div>

            {/* Reference-style "Swipe →" Prompt */}
            <div 
              onClick={() => {
                const servicesEl = document.getElementById('services');
                if (servicesEl) servicesEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-[#f59e0b] hover:text-[#fbbf24] font-bold text-sm tracking-wide cursor-pointer group mt-2"
            >
              <span>Swipe</span>
              <span className="text-lg font-bold group-hover:translate-x-1 transition-transform">→</span>
            </div>

          </div>

          {/* Right Column - Profile Portrait matching Reference Studio Composition */}
          <div className="lg:col-span-5 flex items-center justify-center relative order-1 lg:order-2">
            <div className="relative flex items-center justify-center w-full max-w-sm sm:max-w-md">
              
              {/* Warm Golden Sand & Amber Glow Behind Headshot */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/25 via-orange-500/20 to-transparent rounded-3xl blur-3xl scale-110 pointer-events-none" />
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-amber-500/25 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Portrait Studio Frame */}
              <div 
                className="relative w-64 h-80 sm:w-80 sm:h-[430px] lg:w-[350px] lg:h-[470px] rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.25)] bg-[#0f0f13]"
              >
                <img
                  src={headshot}
                  alt="Erwin Panican"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = 'true';
                      target.src = 'https://i.im.ge/QMc34OT/ERN_1-t600.webp';
                    }
                  }}
                  className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-[0.98]"
                />
              </div>

              {/* Reference-style Bottom Tag Badge "@ERWINPANICAN" */}
              <div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 border border-amber-500/40 rounded-full shadow-2xl backdrop-blur-md z-20"
                style={{
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <span className="text-[11px] uppercase font-mono font-black tracking-widest text-[#f59e0b] whitespace-nowrap">
                  @ERWINPANICAN
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};




