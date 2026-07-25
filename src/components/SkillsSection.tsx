import React from 'react';
import { Cpu, CheckCircle2, Sparkles, Code2, Database, Layers } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-900/30 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Skills & Technical Stack <br />
            <span className="gradient-text">Engineered for Automated Execution</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 mt-3">
            Deep hands-on capability across low-code workflow platforms, AI agent architectures, custom REST APIs, and enterprise CRMs.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 light:border-slate-200/80 bg-slate-950/80 light:bg-white/80 shadow-xl"
            >
              <h3 className="text-base font-bold text-white light:text-slate-900 tracking-tight mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>{category.title}</span>
              </h3>

              {/* Skills Badges Grid */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`px-3.5 py-2 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all hover:scale-105 ${
                      skill.highlighted
                        ? 'bg-blue-600/20 text-sky-300 border-sky-400/40 shadow-sm shadow-blue-500/10'
                        : 'bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-white/5 light:border-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{skill.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">({skill.level})</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
