import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative bg-slate-900/40 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Knowledge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Certifications & Platform Credentials
          </h2>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 mt-3">
            Industry-certified mastery across leading low-code automation tools, CRM ecosystems, and prompt engineering protocols.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-6 rounded-3xl border border-white/10 light:border-slate-200/80 bg-slate-950/80 light:bg-white/80 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Header Icon Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.badgeColor} p-0.5 shadow-md flex items-center justify-center text-white`}>
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-slate-900 light:bg-slate-100 text-slate-400">
                    Verified {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white light:text-slate-900 tracking-tight mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-sky-400 font-medium mb-4">
                  {cert.issuer}
                </p>

                {/* Verified Skills */}
                <div className="space-y-1.5 mb-4">
                  {cert.skillsVerified.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 light:text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 light:border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Active Credential
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
