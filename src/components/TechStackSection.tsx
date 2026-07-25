import React from 'react';
import { Cpu, Layers, Sparkles } from 'lucide-react';
import { techStackData } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 md:py-28 relative glow-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Integrations Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Supported Tech Stack & Platforms
          </h2>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 mt-3">
            I connect your existing software ecosystem into unified, self-running workflows without forcing you to switch platforms.
          </p>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {techStackData.map((item) => (
            <div
              key={item.name}
              className="glass-panel p-5 rounded-2xl border border-white/10 light:border-slate-200/80 bg-slate-950/80 light:bg-white/80 hover:border-sky-400/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${item.iconBg}`}>
                  {item.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-slate-300 light:text-slate-600 line-clamp-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
