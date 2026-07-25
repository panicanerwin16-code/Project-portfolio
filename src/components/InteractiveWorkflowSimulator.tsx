import React, { useState } from 'react';
import {
  Play,
  Terminal,
  CheckCircle2,
  Sparkles,
  Bot,
  Database,
  Mail,
  Cpu,
  ArrowRight,
  RefreshCw,
  Code2,
  Sliders,
} from 'lucide-react';

export const InteractiveWorkflowSimulator: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<'lead' | 'booking' | 'quote'>('lead');
  const [leadName, setLeadName] = useState('Sarah Jenkins');
  const [leadCompany, setLeadCompany] = useState('Vanguard Tech Solutions');
  const [leadBudget, setLeadBudget] = useState('$5,000 - $10,000');
  const [isRunning, setIsRunning] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [logMessages, setLogMessages] = useState<string[]>([]);
  const [jsonResult, setJsonResult] = useState<any>(null);

  const presets = {
    lead: {
      title: 'AI Lead Qualification & Scoring',
      platform: 'n8n + Gemini AI + HubSpot',
      nodes: ['Webhook Intake', 'Gemini Sentiment Analysis', 'HubSpot CRM Push', 'Slack Hot Alert'],
    },
    booking: {
      title: 'AI Appointment Booking Agent',
      platform: 'n8n + OpenAI + Google Calendar',
      nodes: ['Email Intake', 'OpenAI Slot Extraction', 'Google Calendar Lock', 'SMS Confirmation'],
    },
    quote: {
      title: 'Instant AI Quotation & PDF Generator',
      platform: 'Zapier + Claude + Google Docs PDF',
      nodes: ['Form Submitted', 'Claude Scope Estimation', 'PDF Engine Compile', 'Client Auto Dispatch'],
    },
  };

  const handleRunSimulation = () => {
    setIsRunning(true);
    setActiveStepIndex(0);
    setLogMessages(['[00:00.01] Webhook payload received from form...']);
    setJsonResult(null);

    setTimeout(() => {
      setActiveStepIndex(1);
      setLogMessages((prev) => [
        ...prev,
        `[00:00.35] Invoking AI LLM Model for ${leadName} at ${leadCompany}...`,
        '[00:00.62] Extracted Intent: High-intent B2B prospect. Score: 94/100.',
      ]);
    }, 1000);

    setTimeout(() => {
      setActiveStepIndex(2);
      setLogMessages((prev) => [
        ...prev,
        '[00:01.10] Syncing record to CRM database via REST API...',
        '[00:01.40] HTTP 201 Created - Deal ID #GHL-88291.',
      ]);
    }, 2000);

    setTimeout(() => {
      setActiveStepIndex(3);
      setLogMessages((prev) => [
        ...prev,
        '[00:01.85] Dispatching notification webhook to Slack #sales-leads...',
        '[00:02.10] Automated email dispatched with calendar link.',
        '[00:02.25] Workflow executed successfully! 0 errors.',
      ]);
      setActiveStepIndex(4);
      setIsRunning(false);

      setJsonResult({
        status: 'SUCCESS',
        executionId: 'n8n-exec-' + Math.floor(100000 + Math.random() * 900000),
        leadProfile: {
          name: leadName,
          company: leadCompany,
          estimatedBudget: leadBudget,
          aiLeadScore: 94,
          qualification: 'HOT_PROSPECT',
          crmSynced: true,
          nextAction: 'Automated Calendar Invite Sent',
        },
        latencyMs: 240,
      });
    }, 3200);
  };

  return (
    <section className="py-16 bg-slate-900/60 light:bg-slate-50 border-y border-white/10 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Sandbox</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Test a Live AI Automation Workflow
          </h2>
          <p className="text-sm text-slate-300 light:text-slate-600 mt-2">
            Experience how my n8n, Zapier, and AI Agent workflows process raw lead data into structured business actions in real time.
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {(['lead', 'booking', 'quote'] as const).map((key) => (
            <button
              key={key}
              onClick={() => {
                setSelectedPreset(key);
                setActiveStepIndex(-1);
                setLogMessages([]);
                setJsonResult(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedPreset === key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-sky-400/40'
                  : 'bg-slate-950/80 light:bg-white text-slate-300 light:text-slate-700 hover:bg-slate-800 border border-white/10 light:border-slate-200'
              }`}
            >
              {presets[key].title}
            </button>
          ))}
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Input Column */}
          <div className="lg:col-span-5 glass-panel p-6 rounded-2xl bg-slate-950/80 light:bg-white border border-white/10 light:border-slate-200">
            <h3 className="text-base font-bold text-white light:text-slate-900 mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-sky-400" />
              <span>Simulated Webhook Payload</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 light:text-slate-700 mb-1 font-medium">Prospect Name</label>
                <input
                  type="text"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 light:bg-slate-100 border border-white/10 light:border-slate-300 text-white light:text-slate-900 focus:outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 light:text-slate-700 mb-1 font-medium">Company Name</label>
                <input
                  type="text"
                  value={leadCompany}
                  onChange={(e) => setLeadCompany(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 light:bg-slate-100 border border-white/10 light:border-slate-300 text-white light:text-slate-900 focus:outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 light:text-slate-700 mb-1 font-medium">Estimated Budget</label>
                <select
                  value={leadBudget}
                  onChange={(e) => setLeadBudget(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 light:bg-slate-100 border border-white/10 light:border-slate-300 text-white light:text-slate-900 focus:outline-none focus:border-sky-400"
                >
                  <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleRunSimulation}
                  disabled={isRunning}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-xs shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isRunning ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Executing Automation...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Run Live Simulation</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Execution & Logs Output */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Step Pipeline Visualization */}
            <div className="glass-panel p-5 rounded-2xl bg-slate-950/90 light:bg-white border border-white/10 light:border-slate-200">
              <h4 className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
                <span>WORKFLOW EXECUTION PATH</span>
                <span className="text-sky-400 font-semibold">{presets[selectedPreset].platform}</span>
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {presets[selectedPreset].nodes.map((nodeTitle, idx) => {
                  const isActive = activeStepIndex === idx;
                  const isDone = activeStepIndex > idx;

                  return (
                    <div
                      key={nodeTitle}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isActive
                          ? 'bg-sky-500/10 border-sky-400 text-white shadow-md shadow-sky-500/20 animate-pulse'
                          : isDone
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                          : 'bg-slate-900/40 border-white/5 text-slate-300'
                      }`}
                    >
                      <div className="text-[10px] font-mono text-slate-400 mb-1">Node 0{idx + 1}</div>
                      <div className="text-xs font-semibold line-clamp-1">{nodeTitle}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Terminal & JSON Output */}
            <div className="glass-panel p-5 rounded-2xl bg-slate-950/95 border border-white/10 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  Live Execution Console
                </span>
                <span className="text-[10px] text-emerald-400">99.9% Reliable</span>
              </div>

              {/* Logs */}
              <div className="space-y-1.5 min-h-[120px] text-[11px] text-slate-300">
                {logMessages.length === 0 ? (
                  <p className="text-slate-300 italic">Click "Run Live Simulation" to view real-time execution steps...</p>
                ) : (
                  logMessages.map((msg, i) => (
                    <p key={i} className="leading-tight text-sky-200">
                      {msg}
                    </p>
                  ))
                )}
              </div>

              {/* JSON Output */}
              {jsonResult && (
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="text-[10px] text-slate-400 mb-1 font-semibold text-emerald-400">
                    OUTPUT_PAYLOAD (200 OK)
                  </div>
                  <pre className="p-3 rounded-lg bg-slate-900 text-sky-300 text-[11px] overflow-x-auto border border-white/5">
                    {JSON.stringify(jsonResult, null, 2)}
                  </pre>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
