import React from 'react';
import {
  PhoneCall,
  Search,
  Layout,
  Code,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  ArrowRight,
  Workflow,
} from 'lucide-react';
import { processSteps } from '../data/portfolioData';

const processIconMap: Record<string, React.FC<{ className?: string }>> = {
  PhoneCall,
  Search,
  Layout,
  Code,
  ShieldCheck,
  Rocket,
  LifeBuoy,
};

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="process" className="py-20 md:py-28 relative bg-slate-900/40 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            The 7-Step Automation Process
          </h2>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 mt-3">
            A structured, risk-free engineering framework that ensures every workflow is built for zero downtime and maximum business impact.
          </p>
        </div>

        {/* Process Steps Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((p, idx) => {
            const Icon = processIconMap[p.icon] || Workflow;

            return (
              <div
                key={p.step}
                className="glass-panel p-6 rounded-3xl border border-white/10 light:border-slate-200/80 bg-slate-950/80 light:bg-white/80 flex flex-col justify-between relative group hover:border-sky-400/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-extrabold font-mono text-slate-700 light:text-slate-300 group-hover:text-sky-400 transition-colors">
                      {p.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white light:text-slate-900 tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                {idx < processSteps.length - 1 && (
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-end text-slate-500">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-sky-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Call CTA Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">Ready to start Step 1: Discovery Call?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Let's map your operational bottlenecks and build your custom automation roadmap in 30 minutes.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-xs shadow-lg shadow-blue-500/25 shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Book Discovery Call Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
