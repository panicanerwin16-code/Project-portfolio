import React from 'react';
import { BookOpen, ArrowUpRight, Clock } from 'lucide-react';
import { articlesData } from '../data/portfolioData';

export const InsightsSection: React.FC = () => {
  return (
    <section id="insights" className="py-20 md:py-28 relative bg-slate-900/30 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Automation Insights & Articles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Engineering Logs & Case Studies
          </h2>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 mt-3">
            Deep-dive technical writeups on building zero-latency AI agents, optimizing n8n nodes, and structuring CRM Webhooks.
          </p>
        </div>

        {/* Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((art) => (
            <div
              key={art.id}
              className="glass-panel p-6 rounded-3xl border border-white/10 light:border-slate-200/80 bg-slate-950/80 light:bg-white/80 glass-panel-hover flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="font-mono">{art.date}</span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3 h-3 text-sky-400" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white light:text-slate-900 tracking-tight group-hover:text-sky-400 transition-colors mb-2">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 light:border-slate-200 mb-4">
                  {art.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 light:bg-slate-100 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-xs font-semibold text-sky-400 group-hover:text-sky-300 transition-colors gap-1">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
