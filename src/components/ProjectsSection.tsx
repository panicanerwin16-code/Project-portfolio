import React, { useState, useEffect } from 'react';
import { CheckCircle2, Sparkles, Layers, ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';

import n8nFbAgentImg from '../assets/images/n8n_fb_agent_1784974450524.jpg';
import n8nJobScraperImg from '../assets/images/n8n_job_scraper_1784974467707.jpg';
import n8nReceptionistImg from '../assets/images/n8n_receptionist_1784974481711.jpg';
import zapierLeadsImg from '../assets/images/zapier_leads_1784974497234.jpg';
import zapierContentImg from '../assets/images/zapier_content_1784974515788.jpg';
import zapierAsanaImg from '../assets/images/zapier_asana_1784974531023.jpg';
import makeGmailSortImg from '../assets/images/make_gmail_sort_1784974546586.jpg';
import makeXeroAsanaImg from '../assets/images/make_xero_asana_1784974562223.jpg';
import ghlPipelineImg from '../assets/images/ghl_pipeline_flow_1786899273169.jpg';
import ghlNurtureImg from '../assets/images/ghl_lead_nurture_1786899297489.jpg';

interface ProjectsSectionProps {
  onOpenBookingForProject: (projectTitle: string) => void;
}

type FilterCategory = 'n8n' | 'zapier' | 'make' | 'gohighlevel';

interface FilterOption {
  id: FilterCategory;
  label: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenBookingForProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('n8n');
  const [activeModal, setActiveModal] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  const filterButtons: FilterOption[] = [
    { id: 'n8n', label: 'n8n' },
    { id: 'zapier', label: 'Zapier' },
    { id: 'make', label: 'Make' },
    { id: 'gohighlevel', label: 'Go High Level' },
  ];

  const projects: Array<{
    id: string;
    category: FilterCategory;
    platform: string;
    title: string;
    description: string;
    image: string;
    tools: string[];
    problem: string;
    solution: string;
    impact: string;
    result?: string;
    features: string[];
  }> = [
    {
      id: 'ai-agent-facebook',
      category: 'n8n',
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
      category: 'n8n',
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
      category: 'n8n',
      platform: 'N8N',
      title: 'AI Receptionist & Automated Appointment Management System',
      description:
        'I built an AI-powered receptionist using n8n that automates customer inquiries, appointment booking, confirmations, cancellations, rescheduling, no-show follow-ups, and CRM updates.',
      image: 'https://i.im.ge/QMJlyCP/AI_RECEPTIONIST.png',
      tools: ['n8n', 'VAPI', 'Google Calendar', 'Airtable', 'Webhooks', 'CRM'],
      problem: 'Businesses often manage appointments manually, leading to slow responses, missed follow-ups, cancellations, and no-shows that can result in lost opportunities and unnecessary administrative work.',
      solution: 'I built an AI-powered receptionist using n8n that automates customer inquiries, appointment booking, confirmations, cancellations, rescheduling, no-show follow-ups, and CRM updates.',
      result: 'The automation reduces manual work, improves response time, keeps appointment records organized, and provides a consistent customer experience while allowing the business to handle more appointments efficiently.',
      impact: 'The automation reduces manual work, improves response time, keeps appointment records organized, and provides a consistent customer experience while allowing the business to handle more appointments efficiently.',
      features: [
        'Automated customer inquiries & 24/7 AI answering',
        'Direct appointment booking & slot verification',
        'Automatic confirmations, cancellations & rescheduling',
        'No-show follow-ups & automated CRM/calendar updates',
      ],
    },
    {
      id: 'leads-enrichment',
      category: 'zapier',
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
      category: 'zapier',
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
      category: 'zapier',
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
      category: 'make',
      platform: 'MAKE',
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
      category: 'make',
      platform: 'MAKE',
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
    {
      id: 'ghl-lead-pipeline',
      category: 'gohighlevel',
      platform: 'GO HIGH LEVEL',
      title: 'GoHighLevel Lead Pipeline & Speed-to-Lead Automation',
      description:
        'Full GHL snapshot automation converting cold form leads into booked appointments using 2-minute instant SMS response, conditional AI qualification, and automated pipeline stage updates.',
      image: ghlPipelineImg,
      tools: ['GoHighLevel', 'Conversational AI', 'SMS Sequences', 'Calendar Sync', 'Stripe'],
      problem: 'Inbound leads waited over 4 hours for manual follow-ups, resulting in a 60% drop-off in appointment conversion.',
      solution: 'Built an end-to-end GoHighLevel automation pipeline triggering instant 2-way SMS AI conversations, calendar slot allocation, and automated missed-call text-backs.',
      impact: 'Increased booked sales appointments by 42% and achieved a sub-60-second lead response time.',
      features: [
        'Speed-to-lead under 60 seconds response',
        'Conversational SMS AI booking agent',
        'Automated pipeline stage tracking',
        'Missed-call text-back & calendar lock',
      ],
    },
    {
      id: 'ghl-review-nurture',
      category: 'gohighlevel',
      platform: 'GO HIGH LEVEL',
      title: 'GoHighLevel Omnichannel Nurture & Review Engine',
      description:
        'Multi-touch GHL workflow triggering automated post-purchase customer check-ins, automated 5-star Google review request routing, and reactivation email/SMS drips.',
      image: ghlNurtureImg,
      tools: ['GoHighLevel', 'Google Reviews', 'WhatsApp API', 'Email Sequences', 'Webhooks'],
      problem: 'Client had hundreds of past customer records with no structured retention strategy and low Google Business review volume.',
      solution: 'Engineered a smart GHL workflow with NPS condition branching, sending happy clients straight to Google Reviews while routing issues to support.',
      impact: 'Grew 5-star Google reviews by 210% and reactivated $18,500 in repeat sales within 90 days.',
      features: [
        'Conditional NPS review routing',
        'Automated WhatsApp & SMS follow-ups',
        'Win-back reactivation sequences',
        'Multi-location review monitoring',
      ],
    },
  ];

  const filteredProjects = projects.filter((p) => p.category === activeCategory);

  const getCategoryCount = (category: FilterCategory) => {
    return projects.filter((p) => p.category === category).length;
  };

  return (
    <section 
      id="work" 
      className="py-20 md:py-28 relative transition-colors duration-300 bg-crimson-grid"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#ff9000] text-xs font-mono font-semibold uppercase tracking-widest mb-3 shadow-[0_0_12px_rgba(255,80,0,0.2)]">
              <Layers className="w-3.5 h-3.5" />
              <span>SELECTED WORK</span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              My Portfolio
            </h2>
            <p 
              className="text-sm mt-2 max-w-xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              Explore production-tested automation workflows, AI bots, and CRM integrations built across leading platforms.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div 
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-mono"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)',
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ff9000]" />
            <span>Showing <strong className="text-[#ff9000]">{filteredProjects.length}</strong> {filterButtons.find((b) => b.id === activeCategory)?.label} Workflows</span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-10">
          <div 
            className="flex flex-wrap items-center gap-3 sm:gap-4 p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl border backdrop-blur-sm w-fit max-w-full overflow-x-auto shadow-lg"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
            }}
          >
            {filterButtons.map((btn) => {
              const isActive = activeCategory === btn.id;
              const count = getCategoryCount(btn.id);

              return (
                <button
                  key={btn.id}
                  onClick={() => setActiveCategory(btn.id)}
                  className={`relative px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-mono text-sm sm:text-base md:text-lg font-black tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2.5 sm:gap-3 select-none shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ff9000] to-[#ff3700] text-white shadow-[0_0_24px_rgba(255,80,0,0.45)] scale-[1.03]'
                      : 'hover:border-orange-500/50 hover:scale-[1.02]'
                  }`}
                  style={{
                    backgroundColor: isActive ? '#ff4500' : 'var(--bg-card)',
                    borderColor: isActive ? '#ff4500' : 'var(--border-color)',
                    color: isActive ? '#ffffff' : 'var(--text-primary)',
                    borderWidth: '1px',
                  }}
                >
                  <span>{btn.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-lg text-xs sm:text-sm font-bold ${
                      isActive
                        ? 'bg-black/30 text-white'
                        : 'bg-red-500/10 text-[#ff9000]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 15, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.97 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
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
                    result: proj.result,
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
                className="card-crimson-glow rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-xl"
                style={{
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <div>
                  {/* Image Container */}
                  <div 
                    className="relative h-56 overflow-hidden border-b flex items-center justify-center p-2 bg-[#090102]"
                    style={{
                      borderColor: 'var(--border-color)',
                    }}
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#ff9000] to-[#ff3700] text-white p-1.5 rounded-lg shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Platform Tag & Arrow */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono font-bold text-[#ff9000] tracking-wider px-2 py-0.5 rounded-md bg-red-500/10 border border-red-500/20">
                        {proj.platform}
                      </span>
                      <span className="text-[#ff9000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-sm font-bold">
                        →
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-lg font-bold mb-2 tracking-tight group-hover:text-[#ff9000] transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {proj.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-xs leading-relaxed mb-6"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {proj.description}
                    </p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div 
                  className="px-6 pb-6 pt-2 flex flex-wrap gap-1.5 border-dotted-crimson"
                >
                  {proj.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono border"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State if category has 0 items */}
        {filteredProjects.length === 0 && (
          <div 
            className="py-16 text-center rounded-2xl border"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
            }}
          >
            <p className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>No projects found in this category.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="mt-3 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff9000] to-[#ff3700] text-white font-mono text-xs font-bold"
            >
              Reset to All Projects
            </button>
          </div>
        )}

        {/* Detail Blueprint Modal */}
        <AnimatePresence>
          {activeModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-x-0 bottom-0 top-16 sm:top-20 z-40 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[calc(100vh-5.5rem)] sm:max-h-[calc(100vh-6.5rem)] flex flex-col border rounded-3xl shadow-2xl card-crimson-glow overflow-hidden my-auto"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border-color)',
                }}
              >
                {/* Fixed/Sticky Header with Dedicated Close Button */}
                <div 
                  className="p-5 sm:p-6 pb-4 border-b flex items-start justify-between gap-4 shrink-0 z-20"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <div>
                    <span className="text-xs font-mono text-[#ff9000] font-bold uppercase tracking-wider block mb-1">
                      {activeModal.category} WORKFLOW
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                      {activeModal.title}
                    </h3>
                  </div>

                  {/* Prominent High-Visibility Close Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModal(null);
                    }}
                    className="p-2 sm:px-3 sm:py-2 text-xs font-mono rounded-xl border transition-all cursor-pointer hover:border-red-500 hover:bg-red-500/10 flex items-center gap-1.5 shrink-0 select-none shadow-sm group"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                    aria-label="Close project modal"
                  >
                    <X className="w-4 h-4 text-[#ff9000] group-hover:rotate-90 transition-transform duration-200" />
                    <span className="hidden sm:inline font-bold text-xs">Close</span>
                  </button>
                </div>

                {/* Scrollable Content Body */}
                <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
                  {/* Large Image Preview in Modal */}
                  <div 
                    className="rounded-2xl overflow-hidden border p-3 flex items-center justify-center max-h-[440px] bg-[#080102]"
                    style={{
                      borderColor: 'var(--border-color)',
                    }}
                  >
                    <img
                      src={activeModal.image}
                      alt={activeModal.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto max-h-[400px] object-contain rounded-xl"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div 
                      className="p-4 border rounded-2xl text-xs"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-color)',
                      }}
                    >
                      <span className="text-rose-400 font-bold block mb-1 font-mono uppercase tracking-wide">The Problem</span>
                      <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">{activeModal.problem}</p>
                    </div>
                    <div 
                      className="p-4 border rounded-2xl text-xs"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-color)',
                      }}
                    >
                      <span className="text-[#ff9000] font-bold block mb-1 font-mono uppercase tracking-wide">The Solution</span>
                      <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">{activeModal.solution}</p>
                    </div>
                  </div>

                  {activeModal.result ? (
                    <div 
                      className="p-4 border rounded-2xl"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-color)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-[#ff9000]" />
                        <span className="text-[#ff9000] text-xs font-bold font-mono tracking-wider uppercase">
                          RESULT
                        </span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)' }} className="text-xs leading-relaxed">
                        {activeModal.result}
                      </p>
                    </div>
                  ) : (
                    <div 
                      className="p-4 border rounded-2xl"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-color)',
                      }}
                    >
                      <span className="text-[#ff9000] text-xs font-bold font-mono block mb-2 tracking-wider uppercase">
                        KEY FEATURES & DELIVERABLES
                      </span>
                      <ul className="space-y-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                        {activeModal.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff9000] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Sticky Modal Footer */}
                <div 
                  className="p-4 sm:p-5 border-t flex items-center justify-between gap-3 shrink-0"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2.5 rounded-xl border text-xs font-mono font-bold transition-colors hover:border-red-500/50 cursor-pointer"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    ← Back to Projects
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const title = activeModal.title;
                      setActiveModal(null);
                      onOpenBookingForProject(title);
                    }}
                    className="px-5 sm:px-6 py-2.5 bg-gradient-to-r from-[#ff9000] to-[#ff3700] hover:brightness-110 text-white font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,80,0,0.4)]"
                  >
                    <span>Build This Workflow</span>
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

