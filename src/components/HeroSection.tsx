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
      {/* Intense Crimson / Burnt Orange Atmospheric Spotlights matching reference images */}
      <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-red-600/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[550px] h-[550px] bg-orange-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-red-700/15 rounded-full blur-[160px] pointer-events-none" />

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
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff3700] shadow-[0_0_10px_#ff3700] animate-pulse" />
              <span>Available for new automation projects</span>
            </div>

            {/* Main Headline matching the requested image */}
            <h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              I build AI <br />
              Automations <br />
              <span className="text-[#ff9000] drop-shadow-[0_0_25px_rgba(255,144,0,0.35)]">Workflow</span> that <br />
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
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#ff9000] via-[#ff4500] to-[#ff2244] hover:brightness-110 text-white font-extrabold text-xs rounded-xl shadow-[0_0_25px_rgba(255,80,0,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>See selected work</span>
                <span className="text-base font-bold">→</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3.5 border font-bold text-xs rounded-xl transition-all flex items-center justify-center cursor-pointer hover:border-[#ff9000]/60"
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
                  className="w-full sm:w-auto px-5 py-3.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-[#ff9000] font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4 text-[#ff9000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="inline-flex items-center gap-2 text-[#ff9000] hover:text-[#ffaa00] font-bold text-sm tracking-wide cursor-pointer group mt-2"
            >
              <span>Swipe</span>
              <span className="text-lg font-bold group-hover:translate-x-1 transition-transform">→</span>
            </div>

          </div>

          {/* Right Column - Profile Portrait matching Reference Studio Composition */}
          <div className="lg:col-span-5 flex items-center justify-center relative order-1 lg:order-2">
            <div className="relative flex items-center justify-center w-full max-w-sm sm:max-w-md">
              
              {/* Intense Crimson & Fiery Orange Glow Behind Headshot */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 via-orange-600/20 to-transparent rounded-3xl blur-3xl scale-110 pointer-events-none" />
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-red-600/35 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-orange-600/30 rounded-full blur-2xl pointer-events-none" />

              {/* Portrait Studio Frame */}
              <div 
                className="relative w-64 h-80 sm:w-80 sm:h-[430px] lg:w-[350px] lg:h-[470px] rounded-3xl overflow-hidden border-2 border-red-500/40 shadow-[0_0_50px_rgba(255,40,20,0.3)] bg-[#0d0103]"
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
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 border border-red-500/50 rounded-full shadow-2xl backdrop-blur-md z-20"
                style={{
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <span className="text-[11px] uppercase font-mono font-black tracking-widest text-[#ff9000] whitespace-nowrap">
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




