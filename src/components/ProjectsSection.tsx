import React, { useState, useEffect } from 'react';
import { CheckCircle2, Sparkles, Layers, ArrowUpRight, X, ZoomIn, ZoomOut, Maximize2, RotateCcw, Eye, Play } from 'lucide-react';
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
  const [zoomedImage, setZoomedImage] = useState<{
    src: string;
    title: string;
    category?: string;
  } | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
          setZoomScale(1);
        } else if (activeModal) {
          setActiveModal(null);
        }
      }
    };
    if (activeModal || zoomedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModal, zoomedImage]);

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
    gallery?: { url: string; title: string }[];
    videoUrl?: string;
    youtubeId?: string;
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
      title: 'AI-Powered Facebook Customer Support & Lead Response Automation',
      description:
        'I built an AI-powered Facebook Agent in n8n using Gemini, memory, webhooks, and HTTP requests to understand customer messages, generate intelligent responses, and automate communication.',
      image: 'https://i.im.ge/QMJl8ec/AI_AGENT_FOR_FACEBOOK.png',
      tools: ['n8n', 'Google Gemini', 'Memory', 'Webhooks', 'HTTP Requests', 'Facebook API'],
      problem: 'Businesses often struggle to respond quickly and consistently to Facebook messages, causing missed inquiries, slow customer service, and repetitive manual work.',
      solution: 'I built an AI-powered Facebook Agent in n8n using Gemini, memory, webhooks, and HTTP requests to understand customer messages, generate intelligent responses, and automate communication.',
      result: 'The automation provides faster and more consistent customer responses, reduces repetitive workload, and helps businesses engage with Facebook inquiries 24/7.',
      impact: 'The automation provides faster and more consistent customer responses, reduces repetitive workload, and helps businesses engage with Facebook inquiries 24/7.',
      features: [
        'Facebook Messenger webhook & HTTP triggers',
        'Google Gemini AI intelligent response generation',
        'Contextual conversational memory',
        'Automated 24/7 customer & lead engagement',
      ],
    },
    {
      id: 'ai-lead-nurturing-n8n',
      category: 'n8n',
      platform: 'N8N',
      title: 'AI-Powered Lead Qualification & Nurturing Automation',
      description:
        'I built an n8n AI lead nurturing workflow that captures new leads from Google Sheets, enriches company data using Apollo, uses AI to classify leads as high, medium, or low value, and automatically generates personalized outreach while updating the lead database and notifying the sales team.',
      image: 'https://i.im.ge/QMJwTrm/AI_LEAD_NURTURING_WITH_NO_CODE_IN_N8N.png',
      tools: ['n8n', 'Google Sheets', 'Apollo API', 'AI by Gemini / LLM', 'Gmail', 'Slack'],
      problem: 'Sales teams often lose potential customers because leads are not followed up consistently, while manually researching and qualifying prospects takes valuable time and effort.',
      solution: 'I built an n8n AI lead nurturing workflow that captures new leads from Google Sheets, enriches company data using Apollo, uses AI to classify leads as high, medium, or low value, and automatically generates personalized outreach while updating the lead database and notifying the sales team.',
      result: 'The automation reduces manual lead research and follow-up, helps sales teams prioritize high-value prospects, and ensures leads receive timely and personalized communication.',
      impact: 'The automation reduces manual lead research and follow-up, helps sales teams prioritize high-value prospects, and ensures leads receive timely and personalized communication.',
      features: [
        'Google Sheets automatic row update trigger',
        'JavaScript domain extraction & Apollo lead enrichment',
        'AI classification into High, Medium, and Low Value leads',
        'Multi-channel execution: Gmail outreach, Sheet logging, Slack notifications',
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
      title: 'AI-Powered Lead Enrichment & Sales Qualification Automation',
      description:
        'I built a Zapier automation that captures leads, enriches company data using Apollo, automatically qualifies and routes leads based on priority, then saves high-value leads to Google Sheets, alerts the sales team in Slack, and generates and sends personalized email outreach.',
      image: 'https://i.im.ge/QMJm67c/AI_AUTOMATION_LEADS_ENRICHMENT.png',
      tools: ['Zapier', 'Youform', 'Apollo', 'AI by Zapier', 'Slack', 'Gmail', 'Google Sheets'],
      problem: 'Sales teams often spend hours manually researching leads, enriching company information, prioritizing prospects, and sending follow-ups, resulting in wasted time and inconsistent lead management.',
      solution: 'I built a Zapier automation that captures leads, enriches company data using Apollo, automatically qualifies and routes leads based on priority, then saves high-value leads to Google Sheets, alerts the sales team in Slack, and generates and sends personalized email outreach.',
      result: 'The automation reduces manual lead research, helps sales teams focus on high-priority prospects, speeds up lead follow-up, and creates a more organized and consistent lead qualification process.',
      impact: 'The automation reduces manual lead research, helps sales teams focus on high-priority prospects, speeds up lead follow-up, and creates a more organized and consistent lead qualification process.',
      features: [
        'Instant lead capture & webhook triggers',
        'Automated Apollo firmographic company data enrichment',
        'Priority qualification routing & Google Sheets logging',
        'Instant Slack alerts & personalized AI email outreach',
      ],
    },
    {
      id: 'content-repurposing',
      category: 'zapier',
      platform: 'ZAPIER',
      title: 'AI-Powered Content Repurposing & Multi-Platform Automation',
      description:
        'I built a Zapier automation that detects new content, uses AI to generate transcripts and blog content, then automatically repurposes and publishes the content to Facebook and LinkedIn through automated workflows.',
      image: 'https://i.im.ge/QMJmJDC/AI_CONTENT_REPURPOSING.png',
      tools: ['Zapier', 'Google Drive', 'AI by Zapier', 'Facebook Pages', 'LinkedIn', 'Looping by Zapier'],
      problem: 'Creating content for multiple platforms is time-consuming, requiring businesses to manually transcribe, rewrite, format, and publish content across different social media channels.',
      solution: 'I built a Zapier automation that detects new content, uses AI to generate transcripts and blog content, then automatically repurposes and publishes the content to Facebook and LinkedIn through automated workflows.',
      result: 'The automation significantly reduces manual content creation and publishing work, allowing businesses to turn one piece of content into multiple platform-ready posts while maintaining a consistent content presence.',
      impact: 'The automation significantly reduces manual content creation and publishing work, allowing businesses to turn one piece of content into multiple platform-ready posts while maintaining a consistent content presence.',
      features: [
        'Automated Google Drive content detection trigger',
        'AI transcription & automated blog post generation',
        'Multi-path conditional routing & line-item looping',
        'Automated publishing to Facebook Pages and LinkedIn',
      ],
    },
    {
      id: 'asana-crm-engagement',
      category: 'zapier',
      platform: 'ZAPIER',
      title: 'Asana CRM Lead Management & Automated Engagement System',
      description:
        'I built a Zapier automation connected to Asana that detects lead stage changes and automatically triggers the appropriate actions, including lead folder creation, AI-powered analysis, personalized Gmail follow-ups, delays, filters, welcome emails, and post-sale communication.',
      image: 'https://i.im.ge/QMJmnEq/Asana_CRM_Lead_Engagement_Workflow.png',
      tools: ['Zapier', 'Asana', 'Google Drive', 'AI by Zapier', 'Gmail', 'Filters & Delays'],
      problem: 'Sales teams often struggle to keep leads organized and consistently follow up as prospects move through different CRM stages, resulting in missed opportunities, delayed responses, and manual administrative work.',
      solution: 'I built a Zapier automation connected to Asana that detects lead stage changes and automatically triggers the appropriate actions, including lead folder creation, AI-powered analysis, personalized Gmail follow-ups, delays, filters, welcome emails, and post-sale communication.',
      result: 'The automation creates a consistent lead engagement process, reduces manual follow-up tasks, keeps leads organized throughout the sales pipeline, and helps sales teams respond to prospects at the right stage with the right message.',
      impact: 'The automation creates a consistent lead engagement process, reduces manual follow-up tasks, keeps leads organized throughout the sales pipeline, and helps sales teams respond to prospects at the right stage with the right message.',
      features: [
        'Multi-stage Asana pipeline triggers',
        'Automated Google Drive lead folder generation',
        'AI-powered analysis & personalized Gmail follow-ups',
        'Delays, filters, welcome emails & post-sale workflows',
      ],
    },
    {
      id: 'make-gmail-sort',
      category: 'make',
      platform: 'MAKE',
      title: 'AI-Powered Gmail Attachment Management & Google Drive Automation',
      description:
        'I built a Make.com automation that monitors Gmail for incoming attachments, uses AI to analyze file content and generate descriptive filenames, automatically renames and uploads the files to Google Drive, logs the file details in Google Sheets, and sends a notification when processing is complete.',
      image: 'https://i.im.ge/QMJwXgW/Auto_Sort_Gmail_Attachment_on_Drive.png',
      tools: ['Make.com', 'Gmail', 'Google Gemini AI', 'Google Drive', 'Google Sheets'],
      problem: 'Managing incoming Gmail attachments manually requires downloading files, reviewing their contents, creating descriptive filenames, organizing them in Google Drive, and tracking each file, which can become repetitive, time-consuming, and prone to errors.',
      solution: 'I built a Make.com automation that monitors Gmail for incoming attachments, uses AI to analyze file content and generate descriptive filenames, automatically renames and uploads the files to Google Drive, logs the file details in Google Sheets, and sends a notification when processing is complete.',
      result: 'The automation eliminates repetitive file management tasks, keeps documents consistently named and organized, creates a searchable record of processed files, and helps the team manage incoming attachments faster and more efficiently.',
      impact: 'The automation eliminates repetitive file management tasks, keeps documents consistently named and organized, creates a searchable record of processed files, and helps the team manage incoming attachments faster and more efficiently.',
      features: [
        'Automated Gmail incoming attachment monitoring',
        'AI-driven content analysis & standardized file naming',
        'Automatic Google Drive file renaming & folder uploads',
        'Google Sheets audit logging & completion notifications',
      ],
    },
    {
      id: 'make-xero-asana',
      category: 'make',
      platform: 'MAKE',
      title: 'Xero Financial Data Export & Asana Workflow Automation',
      description:
        'I built a Make.com automation that connects Asana, Xero, and Google Sheets to retrieve account transaction data, process and organize the records, and automatically upload the required transaction file to the corresponding Asana task while maintaining supporting data in Google Sheets.',
      image: 'https://i.im.ge/QMJwFEc/Export_Account_Transaction_from_Xero_-_Upload_CSV_to_Asana.png',
      tools: ['Make.com', 'Asana', 'Xero API', 'Google Sheets', 'Tools Aggregator'],
      problem: 'Manually exporting financial transactions from Xero and transferring transaction data or files into Asana can be repetitive and time-consuming, making it difficult to keep financial records and project tasks synchronized.',
      solution: 'I built a Make.com automation that connects Asana, Xero, and Google Sheets to retrieve account transaction data, process and organize the records, and automatically upload the required transaction file to the corresponding Asana task while maintaining supporting data in Google Sheets.',
      result: 'The workflow reduces manual data transfer, keeps transaction records organized, improves consistency between Xero and Asana, and saves time by automating repetitive accounting and project-management tasks.',
      impact: 'The workflow reduces manual data transfer, keeps transaction records organized, improves consistency between Xero and Asana, and saves time by automating repetitive accounting and project-management tasks.',
      features: [
        'Asana trigger and task monitoring',
        'Xero account transaction data retrieval & API query',
        'Google Sheets record organization and aggregation',
        'Automated CSV transaction file upload directly to Asana task',
      ],
    },
    {
      id: 'ghl-lead-pipeline',
      category: 'gohighlevel',
      platform: 'GO HIGH LEVEL',
      title: 'GoHighLevel Appointment Funnel & Lead Management Automation',
      description:
        'A complete solar business appointment booking and pipeline automation built in GoHighLevel featuring automated multi-scenario workflows for confirmations, cancellations, reschedules, show-ups, and automated no-show recovery sequences.',
      image: 'https://img.youtube.com/vi/V8dSVjujF1A/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=V8dSVjujF1A',
      youtubeId: 'V8dSVjujF1A',
      gallery: [
        { url: 'https://i.im.ge/QMnOycS/1.png', title: 'Solar Funnel Overview & Appointment Calendar' },
        { url: 'https://i.im.ge/QMnOAGz/2.png', title: 'Solar Lead Booking Page & Funnel Steps' },
        { url: 'https://i.im.ge/QMnOE76/3.png', title: 'Pipeline Stage & Opportunity Manager' },
        { url: 'https://i.im.ge/QMnOxCF/4.png', title: 'Solar Lead Pipeline Opportunities View' },
        { url: 'https://i.im.ge/QMnOW0M/WF1.png', title: 'Workflow 1: Appointment Confirmation & Reminder Sequence' },
        { url: 'https://i.im.ge/QMnOKeD/WF2.png', title: 'Workflow 2: Appointment Cancellation Flow' },
        { url: 'https://i.im.ge/QMnOkCC/WF3.png', title: 'Workflow 3: Appointment Rescheduling Sequence' },
        { url: 'https://i.im.ge/QMnOb29/WF4.png', title: 'Workflow 4: Showed & No-Show Recovery Sequence' },
      ],
      tools: ['GoHighLevel', 'Sales Pipelines', 'Appointment Workflows', 'SMS & Email', 'Calendar Funnel'],
      problem: 'The solar business needed a more organized way to manage appointment leads, track opportunities through the sales pipeline, and handle confirmations, cancellations, rescheduling, and no-shows without relying on manual follow-ups.',
      solution: 'I built a complete appointment funnel in GoHighLevel with a structured sales pipeline and automated workflows for appointment confirmation, cancellation, rebooking, showed, and no-show scenarios. The system automatically updates opportunities and triggers the appropriate follow-up communication based on each appointment status.',
      result: 'The automation creates a more organized appointment management process, reduces manual follow-up, keeps the sales pipeline updated, and helps recover missed or cancelled appointments through automated rebooking and follow-up sequences.',
      impact: 'The automation creates a more organized appointment management process, reduces manual follow-up, keeps the sales pipeline updated, and helps recover missed or cancelled appointments through automated rebooking and follow-up sequences.',
      features: [
        'End-to-end solar appointment booking funnel & calendar sync',
        'Multi-scenario workflow triggers (Confirmed, Cancelled, Rescheduled, Showed, No-Show)',
        'Real-time automated opportunity pipeline stage updates',
        'Automated rebooking & multi-touch no-show recovery sequences',
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
      result: 'Grew 5-star Google reviews by 210% and reactivated $18,500 in repeat sales within 90 days.',
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
      <div id="projects" className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
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
              className="text-sm sm:text-base mt-2 max-w-2xl"
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

        {/* Filter Buttons - Centered */}
        <div className="mb-12 flex justify-center">
          <div 
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl border backdrop-blur-sm shadow-xl"
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
                  className={`relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-mono text-sm sm:text-base md:text-lg font-black tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2.5 sm:gap-3 select-none shrink-0 ${
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
                    className={`px-2.5 py-0.5 rounded-lg text-xs sm:text-sm font-bold ${
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
                    gallery: proj.gallery,
                    videoUrl: proj.videoUrl,
                    youtubeId: proj.youtubeId,
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
                  {/* Image Container with Dedicated Enlarge/Zoom Button / Video Indicator - Larger Height */}
                  <div 
                    className="relative h-72 sm:h-80 md:h-88 lg:h-80 xl:h-96 overflow-hidden border-b flex items-center justify-center p-2.5 sm:p-3 bg-[#090102] group/img"
                    style={{
                      borderColor: 'var(--border-color)',
                    }}
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-300"
                    />

                    {proj.youtubeId && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-600 transition-all">
                          <Play className="w-5 h-5 fill-white translate-x-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Gradient Overlay & Zoom / Watch Button on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 pointer-events-none">
                      <div className="pointer-events-auto flex items-center gap-2">
                        {proj.youtubeId ? (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveModal({
                                id: proj.id,
                                title: proj.title,
                                category: proj.platform,
                                image: proj.image,
                                videoUrl: proj.videoUrl,
                                youtubeId: proj.youtubeId,
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
                            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:brightness-110 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-lg transform hover:scale-105 transition-all cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span>Watch Walkthrough Video</span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setZoomedImage({
                                src: proj.image,
                                title: proj.title,
                                category: proj.platform,
                              });
                              setZoomScale(1);
                            }}
                            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#ff9000] to-[#ff3700] hover:brightness-110 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-lg transform hover:scale-105 transition-all cursor-pointer"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>Enlarge Diagram</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Corner Tag with Zoom / Video Icon */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (proj.youtubeId) {
                          setActiveModal({
                            id: proj.id,
                            title: proj.title,
                            category: proj.platform,
                            image: proj.image,
                            videoUrl: proj.videoUrl,
                            youtubeId: proj.youtubeId,
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
                        } else {
                          setZoomedImage({
                            src: proj.image,
                            title: proj.title,
                            category: proj.platform,
                          });
                          setZoomScale(1);
                        }
                      }}
                      title={proj.youtubeId ? "Watch video" : "Enlarge diagram"}
                      className="absolute top-3 right-3 bg-black/70 hover:bg-orange-600 text-white border border-white/20 p-2 rounded-xl backdrop-blur-md shadow-md transition-all hover:scale-110 cursor-pointer z-10"
                    >
                      {proj.youtubeId ? (
                        <Play className="w-4 h-4 text-red-400 group-hover:text-white fill-current" />
                      ) : (
                        <ZoomIn className="w-4 h-4 text-[#ff9000] group-hover:text-white" />
                      )}
                    </button>
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
                      className="text-xs leading-relaxed mb-4"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {proj.description}
                    </p>

                    {/* Problem, Solution & Result Overview */}
                    <div className="space-y-2.5 mb-4 text-xs">
                      {/* Problem */}
                      <div 
                        className="p-3 rounded-2xl border text-left"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: 'var(--border-color)',
                        }}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                          <span className="font-mono font-bold text-[10px] uppercase tracking-wider text-rose-400">
                            Problem
                          </span>
                        </div>
                        <p className="leading-relaxed text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                          {proj.problem}
                        </p>
                      </div>

                      {/* Solution */}
                      <div 
                        className="p-3 rounded-2xl border text-left"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: 'var(--border-color)',
                        }}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff9000] shrink-0" />
                          <span className="font-mono font-bold text-[10px] uppercase tracking-wider text-[#ff9000]">
                            Solution
                          </span>
                        </div>
                        <p className="leading-relaxed text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                          {proj.solution}
                        </p>
                      </div>

                      {/* Result */}
                      <div 
                        className="p-3 rounded-2xl border text-left bg-gradient-to-br from-amber-500/5 to-orange-500/5"
                        style={{
                          borderColor: 'var(--border-color)',
                        }}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#ff9000] shrink-0" />
                          <span className="font-mono font-bold text-[10px] uppercase tracking-wider text-[#ff9000]">
                            Result
                          </span>
                        </div>
                        <p className="leading-relaxed text-[11px] font-medium" style={{ color: 'var(--text-primary)' }}>
                          {proj.result || proj.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Pills & Quick Zoom Action */}
                <div 
                  className="px-6 pb-6 pt-2 flex items-center justify-between gap-2 border-dotted-crimson"
                >
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tools.slice(0, 4).map((t) => (
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
                    {proj.tools.length > 4 && (
                      <span
                        className="px-2 py-1 rounded-full text-[10px] font-mono border"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          borderColor: 'var(--border-color)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        +{proj.tools.length - 4}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomedImage({
                        src: proj.image,
                        title: proj.title,
                        category: proj.platform,
                      });
                      setZoomScale(1);
                    }}
                    className="p-1.5 rounded-lg border hover:border-orange-500/60 text-[#ff9000] transition-colors shrink-0 cursor-pointer"
                    title="View Enlarged Diagram"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                    }}
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
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
                  {/* Large Video Embed or Image Preview in Modal */}
                  {activeModal.youtubeId ? (
                    <div 
                      className="rounded-2xl overflow-hidden border shadow-lg bg-black"
                      style={{
                        borderColor: 'var(--border-color)',
                      }}
                    >
                      <div className="relative aspect-video w-full">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${activeModal.youtubeId}?autoplay=1&rel=0`}
                          title={activeModal.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full border-0"
                        />
                      </div>
                    </div>
                  ) : (
                    <div 
                      onClick={() => {
                        setZoomedImage({
                          src: activeModal.image,
                          title: activeModal.title,
                          category: activeModal.category,
                        });
                        setZoomScale(1.2);
                      }}
                      className="relative group/modalimg rounded-2xl overflow-hidden border p-3 flex items-center justify-center max-h-[440px] bg-[#080102] cursor-zoom-in"
                      style={{
                        borderColor: 'var(--border-color)',
                      }}
                    >
                      <img
                        src={activeModal.image}
                        alt={activeModal.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-auto max-h-[400px] object-contain rounded-xl group-hover/modalimg:scale-[1.02] transition-transform duration-200"
                      />

                      {/* Prominent Overlay Button to Enlarge */}
                      <div className="absolute bottom-4 right-4 bg-black/80 hover:bg-orange-600 border border-white/20 text-white px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all hover:scale-105">
                        <Maximize2 className="w-3.5 h-3.5 text-[#ff9000] group-hover:text-white" />
                        <span>Click to Enlarge / Full View</span>
                      </div>
                    </div>
                  )}

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

                  {/* Workflow Screenshots & Funnel Diagrams Gallery (if available) */}
                  {activeModal.gallery && activeModal.gallery.length > 0 && (
                    <div 
                      className="p-5 border rounded-2xl space-y-4"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-color)',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#ff9000]" />
                          <span className="text-[#ff9000] text-xs font-bold font-mono tracking-wider uppercase">
                            SYSTEM SCREENSHOTS & WORKFLOW BLUEPRINTS ({activeModal.gallery.length})
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-400">Click any image to enlarge</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {activeModal.gallery.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setZoomedImage({
                                src: item.url,
                                title: `${activeModal.title} - ${item.title}`,
                                category: activeModal.category,
                              });
                              setZoomScale(1.2);
                            }}
                            className="group/gal relative rounded-xl overflow-hidden border border-white/10 bg-[#090102] cursor-zoom-in hover:border-[#ff9000]/60 transition-all shadow-md flex flex-col"
                          >
                            <div className="h-32 w-full overflow-hidden flex items-center justify-center p-1.5 bg-black/50">
                              <img
                                src={item.url}
                                alt={item.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-contain group-hover/gal:scale-105 transition-transform duration-200"
                              />
                            </div>
                            <div className="p-2 bg-black/80 border-t border-white/5 flex items-center justify-between gap-1">
                              <span className="text-[11px] font-medium text-zinc-300 truncate" title={item.title}>
                                {item.title}
                              </span>
                              <Maximize2 className="w-3 h-3 text-[#ff9000] shrink-0 opacity-70 group-hover/gal:opacity-100" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

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

        {/* High-Resolution Fullscreen Image / Diagram Lightbox */}
        <AnimatePresence>
          {zoomedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                setZoomedImage(null);
                setZoomScale(1);
              }}
              className="fixed inset-0 z-50 flex flex-col bg-black/92 backdrop-blur-xl p-3 sm:p-6 select-none"
            >
              {/* Top Control Bar */}
              <div 
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-6xl mx-auto flex items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl border mb-3 shrink-0 shadow-2xl"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  {zoomedImage.category && (
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#ff9000] px-2 py-0.5 rounded-md bg-red-500/10 border border-red-500/20 shrink-0 uppercase">
                      {zoomedImage.category}
                    </span>
                  )}
                  <h4 className="text-xs sm:text-sm font-bold truncate text-white">
                    {zoomedImage.title}
                  </h4>
                </div>

                {/* Zoom & Close Toolbar */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setZoomScale((s) => Math.max(s - 0.25, 0.5))}
                    className="p-2 sm:px-3 sm:py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1 hover:border-orange-500 transition-colors cursor-pointer"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4 text-[#ff9000]" />
                    <span className="hidden sm:inline">Zoom Out</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setZoomScale(1)}
                    className="px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-mono font-bold hover:border-orange-500 transition-colors cursor-pointer"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                    title="Reset Zoom"
                  >
                    <span className="text-[#ff9000]">{Math.round(zoomScale * 100)}%</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setZoomScale((s) => Math.min(s + 0.25, 3))}
                    className="p-2 sm:px-3 sm:py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1 hover:border-orange-500 transition-colors cursor-pointer"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4 text-[#ff9000]" />
                    <span className="hidden sm:inline">Zoom In</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setZoomedImage(null);
                      setZoomScale(1);
                    }}
                    className="p-2 sm:px-3.5 sm:py-1.5 rounded-xl bg-red-500/20 border border-red-500/40 hover:bg-red-500 hover:text-white text-rose-300 font-mono text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-md ml-1 sm:ml-2"
                  >
                    <X className="w-4 h-4" />
                    <span>Close</span>
                  </button>
                </div>
              </div>

              {/* Main Interactive Zoom Viewport */}
              <div 
                className="flex-1 w-full max-w-6xl mx-auto overflow-auto rounded-3xl border flex items-center justify-center p-4 bg-[#050001] shadow-2xl relative"
                style={{
                  borderColor: 'var(--border-color)',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div 
                  className="transition-transform duration-200 ease-out origin-center flex items-center justify-center max-w-full max-h-full"
                  style={{
                    transform: `scale(${zoomScale})`,
                  }}
                >
                  <img
                    src={zoomedImage.src}
                    alt={zoomedImage.title}
                    referrerPolicy="no-referrer"
                    onClick={() => setZoomScale((prev) => (prev > 1.2 ? 1 : 1.6))}
                    className={`max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl select-none ${
                      zoomScale > 1.2 ? 'cursor-zoom-out' : 'cursor-zoom-in'
                    }`}
                  />
                </div>

                {/* Bottom hint pill */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 border border-white/10 px-4 py-1.5 rounded-full text-[11px] font-mono text-white/70 backdrop-blur-md pointer-events-none text-center">
                  Click image to toggle zoom • Drag / scroll to pan • Press <kbd className="text-[#ff9000] font-bold">ESC</kbd> to exit
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

