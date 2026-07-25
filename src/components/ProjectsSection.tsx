import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

import n8nFbAgentImg from '../assets/images/n8n_fb_agent_1784974450524.jpg';
import n8nJobScraperImg from '../assets/images/n8n_job_scraper_1784974467707.jpg';
import n8nReceptionistImg from '../assets/images/n8n_receptionist_1784974481711.jpg';
import zapierLeadsImg from '../assets/images/zapier_leads_1784974497234.jpg';
import zapierContentImg from '../assets/images/zapier_content_1784974515788.jpg';
import zapierAsanaImg from '../assets/images/zapier_asana_1784974531023.jpg';
import makeGmailSortImg from '../assets/images/make_gmail_sort_1784974546586.jpg';
import makeXeroAsanaImg from '../assets/images/make_xero_asana_1784974562223.jpg';

interface ProjectsSectionProps {
  onOpenBookingForProject: (projectTitle: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenBookingForProject,
}) => {
  const [activeModal, setActiveModal] = useState<ProjectItem | null>(null);

  const projects: Array<{
    id: string;
    platform: string;
    title: string;
    description: string;
    image: string;
    tools: string[];
    problem: string;
    solution: string;
    impact: string;
    features: string[];
  }> = [
    {
      id: 'ai-agent-facebook',
      platform: 'N8N',
      title: 'AI Agent for Facebook',
      description:
        'n8n workflow connecting Facebook Messenger webhooks, Google Gemini Chat Model with Simple Memory, and document lookup to respond intelligently to user inquiries.',
      image: n8nFbAgentImg,
      tools: ['n8n', 'Google Gemini', 'Webhooks', 'Facebook API'],
      problem: 'High volume of Facebook Messenger customer inquiries leading to delayed responses and missed leads.',
      solution: 'Built an automated n8n agent using Google Gemini Chat Model and contextual memory to retrieve document data and deliver instant human-like responses.',
      impact: '100% instant response rate on social channels with zero manual agent overhead.',
      features: [
        'Facebook Messenger webhook integration',
        'Google Gemini chat model',
        'Simple Memory conversation state',
        'Document retrieval & response dispatch',
      ],
    },
    {
      id: 'ai-job-scraper',
      platform: 'N8N',
      title: 'AI Job Scraper + Resume Optimizer',
      description:
        'Slack-triggered n8n workflow that fetches relevant job listings, parses candidate resumes using OpenRouter LLMs with structured output, and drafts customized application emails.',
      image: n8nJobScraperImg,
      tools: ['n8n', 'Slack', 'OpenRouter', 'Google Drive', 'Gmail'],
      problem: 'Manually finding targeted job posts, tailoring resumes, and writing personalized cover letters took hours per application.',
      solution: 'Automated Slack bot workflow that parses job listings, optimizes resume copies via LLM, and creates ready-to-send Gmail drafts.',
      impact: 'Cut application preparation time from 45 minutes down to 30 seconds.',
      features: [
        'Slack command trigger & query validation',
        'RapidAPI job extraction & looping',
        'OpenRouter LLM structured output parser',
        'Google Drive template copy & Gmail draft dispatch',
      ],
    },
    {
      id: 'ai-voice-receptionist',
      platform: 'N8N',
      title: 'AI Voice Receptionist',
      description:
        'Voice AI receptionist built on n8n with modular branches for checking available slots, booking, updating, and cancelling appointments, synced with Google Calendar & Airtable.',
      image: n8nReceptionistImg,
      tools: ['n8n', 'VAPI', 'Google Calendar', 'Airtable', 'Webhooks'],
      problem: 'Service businesses lose up to 30% of calls after-hours and during peak operation times due to busy reception desks.',
      solution: 'Deployed a 24/7 autonomous VAPI voice receptionist connected to an n8n backend for real-time calendar slot lookup, instant booking, and Airtable call logging.',
      impact: 'Eliminated missed call revenue loss and automated 100% of routine appointment scheduling.',
      features: [
        'Modular slot lookup & time conversion',
        'Real-time Google Calendar event creation',
        'Rescheduling & cancellation handler',
        'Airtable call log & status records',
      ],
    },
    {
      id: 'leads-enrichment',
      platform: 'ZAPIER',
      title: 'AI Automation Leads Enrichment',
      description:
        'Auto-enriches inbound leads captured via Youform using Apollo webhooks, routes by priority, updates Google Sheets & Slack, and drafts personalized AI outreach in Gmail.',
      image: zapierLeadsImg,
      tools: ['Zapier', 'Youform', 'Apollo', 'AI by Zapier', 'Slack', 'Gmail'],
      problem: 'Inbound leads sat unresearched for hours before sales representatives could manually look up company details and compose outreach.',
      solution: 'Automated Zapier pipeline extracting company URLs, enriching firmographics via Apollo webhooks, routing priority tiers, and drafting personalized AI emails.',
      impact: 'Reduced lead research time to zero and boosted prospect reply rates by 35%.',
      features: [
        'Instant Youform submission capture',
        'Apollo firmographic enrichment webhook',
        'High/Low priority conditional paths',
        'AI outreach drafting & Slack alerts',
      ],
    },
    {
      id: 'content-repurposing',
      platform: 'ZAPIER',
      title: 'AI Content Repurposing',
      description:
        'Transcribes Google Drive video & audio assets, generates multi-angle blog posts, and automatically formats and schedules posts across Facebook Pages & LinkedIn.',
      image: zapierContentImg,
      tools: ['Zapier', 'Google Drive', 'AI by Zapier', 'Facebook Pages', 'LinkedIn'],
      problem: 'Repurposing long-form video or audio recordings into social posts and blogs required 10+ hours of manual writing per week.',
      solution: 'Built an automated Zapier workflow that transcribes media uploaded to Google Drive, generates structured blog & social posts via AI, and publishes to social channels.',
      impact: 'Saved 10+ hours weekly while doubling multi-platform publishing cadence.',
      features: [
        'Automated Google Drive media trigger',
        'AI audio-to-text transcription',
        'Structured social post formatting',
        'Automated Facebook Pages & LinkedIn posting',
      ],
    },
    {
      id: 'asana-crm-engagement',
      platform: 'ZAPIER',
      title: 'Asana CRM Lead Engagement Workflow',
      description:
        'Complex 26-step Zapier pipeline syncing Asana tasks across 5 deal stages (Ready to Start, No Response, Quoted, Approved, Paid) with automated Drive folders, AI quote summaries, and Gmail follow-ups.',
      image: zapierAsanaImg,
      tools: ['Zapier', 'Asana', 'Google Drive', 'AI by Zapier', 'Gmail'],
      problem: 'Sales and ops teams struggled with inconsistent follow-ups and manual documentation as deal stages changed in Asana.',
      solution: 'Engineered a 26-step multi-path Zapier automation handling lead folder creation, automated AI quote drafting, delay timers, and stage-based email dispatches.',
      impact: '100% adherence to lead follow-up schedules with zero manual administrative tracking.',
      features: [
        '26-step multi-path conditional logic',
        'Stage-based Google Drive folder setup',
        'AI-generated quote analysis & follow-ups',
        'Automated email sequence dispatch',
      ],
    },
    {
      id: 'make-gmail-sort',
      platform: 'MAKE.COM',
      title: 'Auto Sort Gmail Attachments on Drive',
      description:
        'Monitors incoming Gmail attachments, uses Google Gemini AI to analyze content and generate structured filenames, uploads to organized Drive folders, and logs rows in Google Sheets.',
      image: makeGmailSortImg,
      tools: ['Make.com', 'Gmail', 'Google Gemini AI', 'Google Drive', 'Google Sheets'],
      problem: 'Email attachments (invoices, receipts, contracts) were saved with messy filenames in random folders, making accounting searches tedious.',
      solution: 'Constructed a Make.com scenario using Gemini AI to read attachment contents, construct standardized file names, upload to specified Drive folders, and log records in Sheets.',
      impact: 'Organized 100% of incoming documents automatically with instant searchability.',
      features: [
        'Automated Gmail attachment watcher',
        'Gemini AI content & naming analysis',
        'Dynamic Drive folder routing',
        'Google Sheets audit logging & email notifications',
      ],
    },
    {
      id: 'make-xero-asana',
      platform: 'MAKE.COM',
      title: 'Export Xero Transactions to Asana',
      description:
        'Monitors completed Asana tasks, fetches financial transaction data via Xero API, formats and aggregates rows in Google Sheets, and uploads the generated CSV directly to Asana.',
      image: makeXeroAsanaImg,
      tools: ['Make.com', 'Asana', 'Xero API', 'Google Sheets', 'Tools Aggregator'],
      problem: 'Finance teams spent hours manually exporting transactions from Xero, cleaning CSV data, and attaching reports to Asana tasks.',
      solution: 'Built a multi-app Make.com scenario bridging Asana task completion triggers with Xero API queries, automated Sheets row aggregation, and instant CSV attachment uploads.',
      impact: 'Eliminated manual CSV manipulation and financial record transfer errors.',
      features: [
        'Asana completed task trigger',
        'Xero REST API transaction pull',
        'Google Sheets iterator & text aggregator',
        'Automated CSV attachment upload back to Asana',
      ],
    },
  ];

  return (
    <section id="work" className="py-20 md:py-28 relative bg-[#0B0F19]">
      <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <div className="mb-12">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Portfolio
          </h2>
        </div>

        {/* 8 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => {
                setActiveModal({
                  id: proj.id,
                  title: proj.title,
                  category: proj.platform,
                  image: proj.image,
                  tools: proj.tools,
                  problem: proj.problem,
                  solution: proj.solution,
                  impact: proj.impact,
                  metrics: [{ label: 'Impact', value: 'High ROI' }],
                  features: proj.features,
                  clientSector: 'Automation Build',
                  workflowDiagram: [
                    { id: '1', label: 'Trigger Event', sublabel: 'Lead or Webhook', icon: 'Webhook', type: 'trigger' },
                    { id: '2', label: 'AI Model / Logic', sublabel: 'Processing Payload', icon: 'Brain', type: 'ai' },
                    { id: '3', label: 'CRM / Action', sublabel: 'Data Sync & Dispatch', icon: 'Database', type: 'action' },
                  ],
                });
              }}
              className="bg-[#111827]/90 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Image Container - Displays full workflow image without cropping */}
                <div className="relative h-56 overflow-hidden bg-[#0a0d14] border-b border-slate-800/80 flex items-center justify-center p-2">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Platform Tag & Arrow */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-amber-400 tracking-wider">
                      {proj.platform}
                    </span>
                    <span className="text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-sm font-bold">
                      ↗
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-amber-300 transition-colors">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Tech Pills */}
              <div className="px-6 pb-6 pt-2 flex flex-wrap gap-1.5 border-t border-slate-800/60">
                {proj.tools.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono text-gray-300 bg-slate-900 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detail Blueprint Modal */}
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-2xl bg-[#111827] border border-slate-700 p-6 sm:p-8 rounded-2xl text-white shadow-2xl my-8">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-sm font-mono px-2 py-1 rounded bg-slate-800 cursor-pointer"
              >
                ✕ Close
              </button>

              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                {activeModal.category} PROJECT
              </span>
              <h3 className="text-2xl font-bold mb-4">{activeModal.title}</h3>

              {/* Large Image Preview in Modal */}
              <div className="mb-6 rounded-xl overflow-hidden border border-slate-800 bg-[#0a0d14] p-3 flex items-center justify-center max-h-[500px]">
                <img
                  src={activeModal.image}
                  alt={activeModal.title}
                  className="w-full h-auto max-h-[460px] object-contain rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs">
                  <span className="text-rose-400 font-bold block mb-1">The Problem</span>
                  <p className="text-gray-300 leading-relaxed">{activeModal.problem}</p>
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs">
                  <span className="text-emerald-400 font-bold block mb-1">The Solution</span>
                  <p className="text-gray-300 leading-relaxed">{activeModal.solution}</p>
                </div>
              </div>

              <div className="mb-6 p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="text-amber-400 text-xs font-bold font-mono block mb-2">
                  KEY FEATURES
                </span>
                <ul className="space-y-2 text-xs text-gray-300">
                  {activeModal.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => {
                    const title = activeModal.title;
                    setActiveModal(null);
                    onOpenBookingForProject(title);
                  }}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer"
                >
                  <span>Build This Workflow</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
