import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Clock, TrendingUp, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenBookingWithSavings: (monthlySavings: number, hoursSaved: number) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenBookingWithSavings }) => {
  const [teamSize, setTeamSize] = useState<number>(5);
  const [hourlyRate, setHourlyRate] = useState<number>(45);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(12);

  // Math Calculations
  const totalWeeklyManualHours = teamSize * manualHoursPerWeek;
  const automatedHoursSavedWeekly = totalWeeklyManualHours * 0.85; // 85% average time reduction via AI
  const monthlyHoursSaved = Math.round(automatedHoursSavedWeekly * 4.33);
  const monthlyDollarSavings = Math.round(monthlyHoursSaved * hourlyRate);
  const annualDollarSavings = monthlyDollarSavings * 12;

  return (
    <section id="roi-calculator" className="py-20 md:py-28 relative glow-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Savings Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Calculate Your Business <br />
            <span className="gradient-text">Automation ROI & Time Saved</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 mt-3">
            Estimate how much capital and payroll hours your organization can reclaim each month by automating repetitive workflows.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl bg-slate-950/90 light:bg-white border border-white/10 light:border-slate-200 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Sliders Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Slider 1: Team Size */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-slate-300 light:text-slate-700">Team Size (People)</span>
                  <span className="text-sky-400 font-mono text-sm">{teamSize} members</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 light:bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>

              {/* Slider 2: Average Hourly Rate */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-slate-300 light:text-slate-700">Average Hourly Rate / Payroll</span>
                  <span className="text-sky-400 font-mono text-sm">${hourlyRate}/hr</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="150"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 light:bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>

              {/* Slider 3: Manual Hours Per Week per person */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-slate-300 light:text-slate-700">Repetitive Hours / Person / Week</span>
                  <span className="text-sky-400 font-mono text-sm">{manualHoursPerWeek} hrs/week</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="35"
                  value={manualHoursPerWeek}
                  onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 light:bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>

            </div>

            {/* Right Result Projection Card */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-br from-blue-950/80 via-slate-900 to-indigo-950/80 border border-sky-500/30 text-white space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold block mb-1">
                  PROJECTED MONTHLY SAVINGS
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight gradient-blue-text">
                  ${monthlyDollarSavings.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ mo</span>
                </div>
                <div className="text-xs text-emerald-400 mt-1 font-medium">
                  Annualized Savings: ${annualDollarSavings.toLocaleString()}/year
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>Monthly Hours Reclaimed</span>
                  </div>
                  <div className="text-xl font-bold text-white mt-1">
                    {monthlyHoursSaved} hrs
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Efficiency Lift</span>
                  </div>
                  <div className="text-xl font-bold text-emerald-400 mt-1">
                    +85% Speed
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenBookingWithSavings(monthlyDollarSavings, monthlyHoursSaved)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-xs shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-sky-200" />
                <span>Claim These Savings on a Discovery Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
