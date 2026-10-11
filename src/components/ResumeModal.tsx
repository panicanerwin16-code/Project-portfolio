import React, { useState, useEffect } from 'react';
import {
  FileText,
  X,
  Download,
  Copy,
  Check,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Wrench,
  Globe,
  Sparkles,
  Camera,
  Printer,
  FileCheck,
  Eye,
} from 'lucide-react';
import { downloadATSResumeFile, generateATSPdfDocument, RESUME_FILE_NAME } from '../utils/resumeDownloader';

const erwinHeadshotDefault = "https://i.im.ge/QMc34OT/ERN_1.png";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  headshot?: string;
  onUploadHeadshot?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  headshot = erwinHeadshotDefault,
  onUploadHeadshot,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'ats' | 'pdf'>('ats');
  const [pdfDataUrl, setPdfDataUrl] = useState<string | null>(null);
  const pdfFileName = RESUME_FILE_NAME;

  // Clean any stale overrides and generate authentic, immutable PDF preview
  useEffect(() => {
    try {
      localStorage.removeItem('erwin_resume_pdf_data');
      localStorage.removeItem('erwin_resume_filename');
    } catch {
      // ignore
    }
    try {
      const generatedDoc = generateATSPdfDocument();
      const dataUri = generatedDoc.output('datauristring');
      setPdfDataUrl(dataUri);
    } catch (err) {
      console.error('Failed to generate resume preview PDF:', err);
    }
  }, []);

  if (!isOpen) return null;

  const rawResumeText = `Erwin Panican
GoHighLevel CRM & AI Automation Specialist
Manila, Philippines | +63 915300090 | panicanerwin16@gmail.com
LinkedIn: https://linkedin.com/in/erwinpanican
OnlineJobsPh: https://v2.onlinejobs.ph/jobseekers/info/5106135
Upwork: https://www.upwork.com/freelancers/~01c544a89e40992a44

==================================================
PROFESSIONAL SUMMARY
==================================================
GoHighLevel CRM & AI Automation Specialist with deep expertise in designing and deploying intelligent workflow automations using GoHighLevel, n8n, Zapier, and Make.com. Experienced in connecting CRM architectures, lead qualification pipelines, and everyday business tools through intelligent automation. Skilled at building practical systems that eliminate manual data entry, accelerate lead conversion, improve operational visibility, and turn opportunities into long-term customers.

==================================================
CORE COMPETENCIES
==================================================
• GoHighLevel CRM Architecture & Pipelines
• Workflow Automation & Multi-Step Logic
• AI Agents & Intelligent Chatbots
• n8n, Zapier & Make.com Automation
• API Integrations, Webhooks & JSON Parsing
• Lead Qualification & Automated Routing
• Appointment Booking Funnels & Reminders
• SOP & Systems Documentation

==================================================
CERTIFICATIONS
==================================================
• GoHighLevel Certification
• n8n Workflow Automation Certification
• Zapier Automation Certification
• Make.com Automation Certification

==================================================
AUTOMATION PROJECTS
==================================================
1. AI-Powered Lead Qualification & Nurturing Automation
   Engineered an end-to-end AI lead qualification and nurturing system that automatically scores prospects based on submission data and intent signals, assigns priority tiers in the CRM, drafts personalized email nurture sequences, and dispatches real-time Slack alerts to sales reps for high-intent conversions.
   Technologies: n8n, Gemini, Google Sheets, Apollo.io, Gmail, Slack

2. AI-Powered Facebook Customer Support & Lead Response Automation
   Built an autonomous 24/7 Facebook Messenger AI support system that instantly answers client inquiries, resolves objections using dynamic knowledge retrieval, qualifies prospective leads, and routes booked sales conversations directly into the pipeline.
   Technologies: n8n, Gemini, Facebook Graph API, Webhooks

3. AI Receptionist & Automated Appointment Management
   Designed a voice-driven conversational AI receptionist that handles inbound call inquiries, cross-checks calendar availability in real time, schedules appointments, and sends instant automated SMS confirmations, reminders, cancellations, and rescheduling links.
   Technologies: n8n, Vapi, Airtable, Google Calendar, Twilio

4. Appointment Funnel & GoHighLevel CRM Lead Management Automation
   Built an automated appointment funnel and lead management infrastructure in GoHighLevel. Automatically tracks prospects across stages, sends multi-channel SMS and email reminders, and triggers automated reactivation sequences for cancellations and no-shows.
   Technologies: GoHighLevel, GHL Workflows, Twilio, Stripe

5. Asana CRM Lead Management & Automated Engagement
   Engineered a centralized Asana lead board with automated Zapier triggers. Automatically categorizes incoming leads, logs interaction history, drafts contextual follow-ups using OpenAI, and notifies sales account executives via Slack.
   Technologies: Zapier, Asana, OpenAI, Slack

6. Xero Financial Data Export & Asana Workflow Automation
   Architected an automated Make.com integration that pulls recurring transaction data from Xero, synchronizes financial status into Asana boards, and maintains structured audit logs in Google Sheets, eliminating repetitive manual data entry.
   Technologies: Make.com, Asana, Xero, Google Sheets

==================================================
PROFESSIONAL EXPERIENCE
==================================================
Freelance / Independent — GoHighLevel CRM & AI Automation Specialist (2024–Present)
• Designed and implemented full-funnel GoHighLevel CRM architectures, custom fields, and automated pipelines.
• Developed multi-step workflow automations using n8n, Zapier, and Make.com to replace manual business operations.
• Integrated LLMs (OpenAI, Gemini, Claude) and Voice AI (Vapi) for automated customer support and lead qualification.
• Built resilient REST API integrations, custom webhooks, and automated notifications connecting Airtable, Slack, and Google Workspace.
• Maintained 99% workflow uptime and reliability with robust fallback logic and error handling.

Performance Coach — SeidoPro Global Inc (2022 to 2026)
• Responsible for monitoring and evaluating employee performance, providing coaching and constructive feedback, identifying performance gaps, creating improvement plans, conducting regular coaching sessions, and supporting team members in achieving their performance and productivity goals.

Assistant Supervisor — SeidoPro Global Inc (2020 - 2022)
• Responsible for supporting daily operations, coordinating team activities, monitoring employee performance, assigning tasks, ensuring work quality and productivity, assisting with problem-solving, and providing guidance and support to team members to achieve operational goals.

Documentation Associate — SeidoPro Global Inc (2018–2020)
• Responsible for preparing and verifying shipping documents, coordinating with freight forwarders, shipping lines, and internal teams, maintaining accurate shipment records, monitoring documentation requirements, and ensuring timely and error-free processing of shipments.

==================================================
TOOLS AND TECHNOLOGIES
==================================================
• Automation & CRM Platforms: GoHighLevel, n8n, Zapier, Make.com
• AI / LLM & Voice Agents: OpenAI, Claude, Grok, Gemini, Vapi, LangChain, OpenRouter, Lovable
• Business, CRM & Productivity: Stripe, Airtable, Notion, Asana, Apollo.io, Slack, Telegram, WhatsApp
• Google Workspace Ecosystem: Google Workspace, Gmail, Google Calendar, Google Sheets
• Technical & Integration Skills: APIs & Webhooks, REST API Integrations, OAuth / Auth Flows, JSON Data Handling, LLM API Integration, CRM Integrations, Payment Gateway Integration, Workflow Logic & Error Handling

==================================================
EDUCATION & LANGUAGES
==================================================
Education:
• Bachelor in Business Management — Taguig City University (Graduated 2017)

Languages:
• English — Professional Working Proficiency
• Filipino — Native Proficiency`.trim();

  const handleCopyText = () => {
    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    downloadATSResumeFile();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl border rounded-3xl shadow-2xl my-6 max-h-[92vh] flex flex-col overflow-hidden transition-colors card-crimson-glow"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-primary)',
        }}
      >
        
        {/* Header Bar */}
        <div 
          className="px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4 shrink-0"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[#f59e0b] flex items-center justify-center font-bold shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 
                  className="text-base font-bold tracking-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Erwin Panican — Official Resume
                </h2>
                <span className="px-2 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-[10px] font-mono font-bold text-[#f59e0b]">
                  ATS Verified
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#f59e0b]">
                GoHighLevel CRM & AI Automation Specialist
              </span>
            </div>
          </div>

          {/* Navigation View Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10">
            <button
              onClick={() => setActiveTab('ats')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'ats'
                  ? 'bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>ATS Format</span>
            </button>

            <button
              onClick={() => setActiveTab('pdf')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'pdf'
                  ? 'bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>PDF Preview</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border transition-colors cursor-pointer hover:border-amber-500"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)',
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ================= TAB 1: ATS DOCUMENT VIEW ================= */}
        {activeTab === 'ats' && (
          <div 
            className="p-6 sm:p-8 overflow-y-auto space-y-8 text-xs sm:text-sm text-left print-resume-content"
            style={{ backgroundColor: 'var(--bg-primary)' }}
          >
            
            {/* Header Profile Info Banner */}
            <div 
              className="p-6 rounded-2xl border flex flex-col md:flex-row items-center md:items-start gap-6 shadow-lg"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div className="relative group w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-500/50 shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <img
                  src={headshot}
                  alt="Erwin Panican"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = 'true';
                      target.src = 'https://i.im.ge/QMc34OT/ERN_1-t600.webp';
                    }
                  }}
                  className="w-full h-full object-cover object-top"
                />

                {onUploadHeadshot && (
                  <label
                    htmlFor="resume-photo-upload"
                    className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-1 text-center cursor-pointer"
                    title="Upload new headshot"
                  >
                    <Camera className="w-5 h-5 text-[#f59e0b] mb-1" />
                    <span className="text-[10px] font-mono font-bold text-[#f59e0b] leading-tight">
                      Change Photo
                    </span>
                    <input
                      id="resume-photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={onUploadHeadshot}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <div className="flex-1 text-center md:text-left space-y-2">
                <h1 
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Erwin Panican
                </h1>
                <p className="text-[#f59e0b] font-bold text-xs sm:text-sm font-mono">
                  GoHighLevel CRM & AI Automation Specialist
                </p>

                <div 
                  className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs pt-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" /> Manila, Philippines
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#f59e0b]" /> +63 915300090
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#f59e0b]" /> panicanerwin16@gmail.com
                  </span>
                </div>

                {/* Profile Links */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                  <a
                    href="https://linkedin.com/in/erwinpanican"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg border hover:border-amber-500 text-[11px] font-mono flex items-center gap-1.5 transition-colors"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#f59e0b]" /> LinkedIn
                  </a>
                  <a
                    href="https://v2.onlinejobs.ph/jobseekers/info/5106135"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg border hover:border-amber-500 text-[11px] font-mono flex items-center gap-1.5 transition-colors"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#f59e0b]" /> OnlineJobsPh
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~01c544a89e40992a44"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg border hover:border-amber-500 text-[11px] font-mono flex items-center gap-1.5 transition-colors"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#f59e0b]" /> Upwork Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Section: Professional Summary */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <Sparkles className="w-4 h-4 text-[#f59e0b]" />
                <h3 className="text-xs font-mono uppercase font-bold text-[#f59e0b] tracking-wider">
                  Professional Summary
                </h3>
              </div>
              <p className="leading-relaxed text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                GoHighLevel CRM & AI Automation Specialist with deep expertise in designing and deploying intelligent workflow automations using <strong className="text-[#f59e0b]">GoHighLevel, n8n, Zapier, and Make.com</strong>. Experienced in connecting CRM architectures, lead qualification pipelines, and everyday business tools through intelligent automation. Skilled at building practical systems that eliminate manual data entry, accelerate lead conversion, improve operational visibility, and turn opportunities into long-term customers.
              </p>
            </div>

            {/* Section: Core Competencies */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <Wrench className="w-4 h-4 text-[#f59e0b]" />
                <h3 className="text-xs font-mono uppercase font-bold text-[#f59e0b] tracking-wider">
                  Core Competencies
                </h3>
              </div>
              <div 
                className="p-4 rounded-xl border flex flex-wrap gap-2 text-xs"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                {[
                  'GoHighLevel CRM Architecture',
                  'Workflow Automation',
                  'AI Agents & Chatbots',
                  'n8n & Zapier & Make.com',
                  'API Integrations & Webhooks',
                  'Lead Qualification & Routing',
                  'Appointment Booking Funnels',
                  'SOP & Systems Documentation',
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[#f59e0b] font-mono text-xs font-semibold"
                  >
                    • {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Section: Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <Award className="w-4 h-4 text-[#f59e0b]" />
                <h3 className="text-xs font-mono uppercase font-bold text-[#f59e0b] tracking-wider">
                  Certifications
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'GoHighLevel Certification',
                  'n8n Workflow Automation Certification',
                  'Zapier Automation Certification',
                  'Make.com Automation Certification',
                ].map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border flex items-center gap-2.5"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#f97316] shadow-[0_0_6px_#f97316] shrink-0" />
                    <span className="font-semibold text-xs">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Automation Projects */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <Briefcase className="w-4 h-4 text-[#f59e0b]" />
                <h3 className="text-xs font-mono uppercase font-bold text-[#f59e0b] tracking-wider">
                  Automation Projects
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: 'AI-Powered Lead Qualification & Nurturing Automation',
                    desc: 'Engineered an end-to-end AI lead qualification and nurturing system that automatically scores prospects based on submission data and intent signals, assigns priority tiers in the CRM, drafts personalized email nurture sequences, and dispatches real-time Slack alerts to sales reps for high-intent conversions.',
                    tech: 'n8n, Gemini, Google Sheets, Apollo.io, Gmail, Slack',
                  },
                  {
                    title: 'AI-Powered Facebook Customer Support & Lead Response Automation',
                    desc: 'Built an autonomous 24/7 Facebook Messenger AI support system that instantly answers client inquiries, resolves objections using dynamic knowledge retrieval, qualifies prospective leads, and routes booked sales conversations directly into the pipeline.',
                    tech: 'n8n, Gemini, Facebook Graph API, Webhooks',
                  },
                  {
                    title: 'AI Receptionist & Automated Appointment Management',
                    desc: 'Designed a voice-driven conversational AI receptionist that handles inbound call inquiries, cross-checks calendar availability in real time, schedules appointments, and sends instant automated SMS confirmations, reminders, cancellations, and rescheduling links.',
                    tech: 'n8n, Vapi, Airtable, Google Calendar, Twilio',
                  },
                  {
                    title: 'Appointment Funnel & GoHighLevel CRM Lead Management Automation',
                    desc: 'Built an automated appointment funnel and lead management infrastructure in GoHighLevel. Automatically tracks prospects across stages, sends multi-channel SMS and email reminders, and triggers automated reactivation sequences for cancellations and no-shows.',
                    tech: 'GoHighLevel, GHL Workflows, Twilio, Stripe',
                  },
                  {
                    title: 'Asana CRM Lead Management & Automated Engagement',
                    desc: 'Engineered a centralized Asana lead board with automated Zapier triggers. Automatically categorizes incoming leads, logs interaction history, drafts contextual follow-ups using OpenAI, and notifies sales account executives via Slack.',
                    tech: 'Zapier, Asana, OpenAI, Slack',
                  },
                  {
                    title: 'Xero Financial Data Export & Asana Workflow Automation',
                    desc: 'Architected an automated Make.com integration that pulls recurring transaction data from Xero, synchronizes financial status into Asana boards, and maintains structured audit logs in Google Sheets, eliminating repetitive manual data entry.',
                    tech: 'Make.com, Asana, Xero, Google Sheets',
                  },
                ].map((proj, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl border space-y-1.5"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-color)',
                    }}
                  >
                    <h4 className="font-bold text-[#f59e0b] text-xs sm:text-sm">
                      {idx + 1}. {proj.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{proj.desc}</p>
                    <p className="text-[11px] font-mono pt-1" style={{ color: 'var(--text-secondary)' }}>
                      <strong>Technologies:</strong> {proj.tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Professional Experience */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <Briefcase className="w-4 h-4 text-[#f59e0b]" />
                <h3 className="text-xs font-mono uppercase font-bold text-[#f59e0b] tracking-wider">
                  Professional Experience
                </h3>
              </div>

              <div className="space-y-4">
                <div 
                  className="p-4 rounded-xl border space-y-2"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-1 font-bold" style={{ color: 'var(--text-primary)' }}>
                    <span>Freelance / Independent — GoHighLevel CRM & AI Automation Specialist</span>
                    <span className="text-[#f59e0b] font-mono text-xs">(2024–Present)</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <li>Designed and implemented full-funnel GoHighLevel CRM architectures, custom fields, and automated pipelines.</li>
                    <li>Developed multi-step workflow automations using n8n, Zapier, and Make.com to replace manual business operations.</li>
                    <li>Integrated LLMs (OpenAI, Gemini, Claude) and Voice AI (Vapi) for automated customer support and lead qualification.</li>
                    <li>Built resilient REST API integrations, custom webhooks, and automated notifications connecting Airtable, Slack, and Google Workspace.</li>
                    <li>Maintained 99% workflow uptime and reliability with robust fallback logic and error handling.</li>
                  </ul>
                </div>

                <div 
                  className="p-4 rounded-xl border space-y-2"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-1 font-bold" style={{ color: 'var(--text-primary)' }}>
                    <span>Performance Coach — SeidoPro Global Inc</span>
                    <span className="text-[#f59e0b] font-mono text-xs">(2022 to 2026)</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Responsible for monitoring and evaluating employee performance, providing coaching and constructive feedback, identifying performance gaps, creating improvement plans, conducting regular coaching sessions, and supporting team members in achieving their performance and productivity goals.
                  </p>
                </div>

                <div 
                  className="p-4 rounded-xl border space-y-2"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-1 font-bold" style={{ color: 'var(--text-primary)' }}>
                    <span>Assistant Supervisor — SeidoPro Global Inc</span>
                    <span className="text-[#f59e0b] font-mono text-xs">(2020 - 2022)</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Responsible for supporting daily operations, coordinating team activities, monitoring employee performance, assigning tasks, ensuring work quality and productivity, assisting with problem-solving, and providing guidance and support to team members to achieve operational goals.
                  </p>
                </div>

                <div 
                  className="p-4 rounded-xl border space-y-2"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-1 font-bold" style={{ color: 'var(--text-primary)' }}>
                    <span>Documentation Associate — SeidoPro Global Inc</span>
                    <span className="text-[#f59e0b] font-mono text-xs">(2018–2020)</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Responsible for preparing and verifying shipping documents, coordinating with freight forwarders, shipping lines, and internal teams, maintaining accurate shipment records, monitoring documentation requirements, and ensuring timely and error-free processing of shipments.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Tools and Technologies */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <Wrench className="w-4 h-4 text-[#f59e0b]" />
                <h3 className="text-xs font-mono uppercase font-bold text-[#f59e0b] tracking-wider">
                  Tools and Technologies
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3.5 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <strong className="text-[#f59e0b] font-mono block mb-1">Automation & CRM Platforms:</strong>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>GoHighLevel | n8n | Zapier | Make.com</p>
                </div>
                <div className="p-3.5 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <strong className="text-[#f59e0b] font-mono block mb-1">AI / LLM & Voice Agents:</strong>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>OpenAI | Claude | Grok | Gemini | Vapi | LangChain | OpenRouter | Lovable</p>
                </div>
                <div className="p-3.5 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <strong className="text-[#f59e0b] font-mono block mb-1">Business, CRM & Productivity:</strong>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Stripe | Airtable | Notion | Asana | Apollo.io | Slack | Telegram | WhatsApp</p>
                </div>
                <div className="p-3.5 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <strong className="text-[#f59e0b] font-mono block mb-1">Google Workspace Ecosystem:</strong>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Google Workspace | Gmail | Google Calendar | Google Sheets</p>
                </div>
                <div className="p-3.5 rounded-xl border sm:col-span-2" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <strong className="text-[#f59e0b] font-mono block mb-1">Technical & Integration Skills:</strong>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>APIs & Webhooks | REST API Integrations | OAuth / Auth Flows | JSON Data Handling | LLM API Integration | CRM Integrations | Payment Gateway Integration | Workflow Logic & Error Handling</p>
                </div>
              </div>
            </div>

            {/* Section: Education & Language */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div 
                className="p-4 rounded-xl border space-y-1.5"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div className="flex items-center gap-2 text-[#f59e0b] font-mono text-xs font-bold uppercase">
                  <GraduationCap className="w-4 h-4" /> Education
                </div>
                <h4 className="font-bold text-xs sm:text-sm" style={{ color: 'var(--text-primary)' }}>Bachelor in Business Management</h4>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Taguig City University — Graduated 2017</p>
              </div>

              <div 
                className="p-4 rounded-xl border space-y-1.5"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div className="flex items-center gap-2 text-[#f59e0b] font-mono text-xs font-bold uppercase">
                  <Globe className="w-4 h-4" /> Languages
                </div>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>English:</strong> Professional Working Proficiency
                </p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Filipino:</strong> Native Proficiency
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ================= TAB 2: PDF DOCUMENT VIEWER ================= */}
        {activeTab === 'pdf' && (
          <div className="flex-1 p-6 overflow-y-auto flex flex-col items-center justify-center min-h-[500px]" style={{ backgroundColor: 'var(--bg-primary)' }}>
            {pdfDataUrl ? (
              <div className="w-full h-full min-h-[550px] flex flex-col items-center">
                <div className="w-full flex items-center justify-between pb-3 mb-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#f59e0b]" />
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--text-primary)' }}>
                      {pdfFileName}
                    </span>
                  </div>
                  <a
                    href={pdfDataUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-[#f59e0b] hover:underline flex items-center gap-1"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <object
                  data={pdfDataUrl}
                  type="application/pdf"
                  className="w-full h-[540px] rounded-2xl border"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  <iframe
                    src={pdfDataUrl}
                    className="w-full h-[540px] rounded-2xl border-0"
                    title="Resume PDF Viewer"
                  />
                </object>
              </div>
            ) : (
              <div className="max-w-md text-center space-y-4 p-8 rounded-3xl border card-crimson-glow" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[#f59e0b] flex items-center justify-center mx-auto shadow-lg">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    Generating PDF Preview...
                  </h3>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                    Loading formatted resume document preview for Erwin Panican.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('ats')}
                    className="text-xs font-mono text-[#f59e0b] hover:underline cursor-pointer"
                  >
                    View ATS document text & sections →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer Action Buttons */}
        <div 
          className="px-6 py-4 border-t flex flex-wrap items-center justify-between gap-3 shrink-0"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl border text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors hover:border-amber-500 cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)',
              }}
              title="Print ATS Formatted Resume or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="px-3.5 py-2 rounded-xl border text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors hover:border-amber-500 cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)',
              }}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#f59e0b]" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#ea580c] hover:brightness-110 text-white text-xs font-bold font-mono shadow-[0_0_20px_rgba(245,158,11,0.35)] flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume ({pdfFileName})</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
