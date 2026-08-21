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
  Upload,
  Printer,
  FileCheck,
  Eye,
  Info,
} from 'lucide-react';
import { downloadATSResumeFile } from '../utils/resumeDownloader';

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
  const [activeTab, setActiveTab] = useState<'ats' | 'pdf' | 'upload'>('ats');
  const [pdfDataUrl, setPdfDataUrl] = useState<string | null>(null);
  const [pdfFileName, setPdfFileName] = useState<string>('Erwin_Panican_ATS_Resume.docx (1).pdf');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Load saved PDF from localStorage on mount
  useEffect(() => {
    try {
      const savedPdf = localStorage.getItem('erwin_resume_pdf_data');
      const savedName = localStorage.getItem('erwin_resume_filename');
      if (savedPdf) {
        setPdfDataUrl(savedPdf);
      }
      if (savedName) {
        setPdfFileName(savedName);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  if (!isOpen) return null;

  const rawResumeText = `Erwin Panican
AI Automation Specialist | n8n • Zapier • Make • GoHighLevel
Manila, Philippines | +63 915300090 | panicanerwin16@gmail.com
LinkedIn: https://linkedin.com/in/erwinpanican
OnlineJobsPh: https://v2.onlinejobs.ph/jobseekers/info/5106135
Upwork: https://www.upwork.com/freelancers/~01c544a89e40992a44

==================================================
PROFESSIONAL SUMMARY
==================================================
AI Automation Specialist with expertise in designing and implementing intelligent workflow automation using n8n, Zapier, Make.com, and GoHighLevel. Experienced in API integrations, AI agents, CRM automation, webhooks, and business process optimization. Skilled at building scalable automation solutions that reduce manual work, improve operational efficiency, and support business growth through AI-powered workflows.

==================================================
CORE COMPETENCIES
==================================================
• Workflow Automation • AI Agents • CRM Architecture • GoHighLevel • n8n • Zapier • Make.com • API Integrations • Webhooks • Lead Routing • SOP Documentation

==================================================
CERTIFICATIONS
==================================================
• Zapier Automation Certification
• Make.com Automation Certification
• n8n Workflow Automation Certification
• GoHighLevel Certification

==================================================
AUTOMATION PROJECTS
==================================================
1. AI-Powered Facebook Customer Support & Lead Response Automation
   AI-powered Facebook Messenger automation system that instantly responds to customer inquiries, provides intelligent answers, qualifies potential leads, and sends qualified prospects to the sales team for follow-up—helping businesses improve response time, customer engagement, and lead conversion.
   Technologies: n8n, Gemini, Facebook

2. AI-Powered Lead Qualification & Nurturing Automation
   AI-powered automation system that analyzes and qualifies leads based on their information and behavior, assigns lead priority, and automatically sends personalized follow-up messages to nurture prospects and improve conversion opportunities.
   Technologies: n8n, Gemini, Google Sheets, Apollo, Gmail, Slack

3. AI Receptionist & Automated Appointment Management
   AI receptionist system that responds to customer inquiries, manages appointment scheduling, sends automated confirmations and reminders, and handles cancellations and rescheduling—reducing manual work and improving the overall customer experience.
   Technologies: n8n, Vapi, Airtable, Google Calendar

4. Asana CRM Lead Management & Automated Engagement
   Automated lead management system that organizes prospects in Asana, tracks lead progress, triggers personalized follow-ups, and notifies the sales team of important lead activities—improving lead visibility, engagement, and follow-up efficiency.
   Technologies: Zapier, Asana, OpenAI, Slack

5. Xero Financial Data Export & Asana Workflow Automation
   Automated workflow that exports financial transaction data from Xero and organizes it into Asana, enabling teams to track accounting-related tasks, streamline financial operations, and reduce manual data entry.
   Technologies: Make, Asana, Xero, Google Sheets

6. Appointment Funnel & Lead Management Automation
   Automated appointment funnel that captures and manages leads, streamlines appointment booking, and triggers automated confirmations, reminders, cancellations, rescheduling, and no-show follow-ups—helping improve lead conversion and appointment management.
   Technologies: GoHighLevel

==================================================
PROFESSIONAL EXPERIENCE
==================================================
Freelance / Independent — AI Automation Specialist (2026–Present)
• Designed AI-powered workflow automations using n8n, Make.com, and Zapier.
• Integrated OpenAI and Anthropic models.
• Built API integrations and custom webhooks.
• Maintained 99% workflow uptime.

Performance Coach — Seidopro Global Inc (2022 to 2026)
• Responsible for monitoring and evaluating employee performance, providing coaching and constructive feedback, identifying performance gaps, creating improvement plans, conducting regular coaching sessions, and supporting team members in achieving their performance and productivity goals.

Assistant Supervisor — Seidopro Global Inc (2020 - 2022)
• Responsible for supporting daily operations, coordinating team activities, monitoring employee performance, assigning tasks, ensuring work quality and productivity, assisting with problem-solving, and providing guidance and support to team members to achieve operational goals.

Documentation Associate — Seidopro Global Inc (2018–2020)
• Responsible for preparing and verifying shipping documents, coordinating with freight forwarders, shipping lines, and internal teams, maintaining accurate shipment records, monitoring documentation requirements, and ensuring timely and error-free processing of shipments.

==================================================
TOOLS AND TECHNOLOGIES
==================================================
• Automation Platforms: GoHighLevel | n8n | Zapier | Make.com
• AI / LLM / AI Development: OpenAI | Claude | Grok | Gemini | Vapi | LangChain | OpenRouter | Lovable
• Business / CRM / Productivity Tools: Stripe | Airtable | Notion | Asana | Apollo.io | Slack | Telegram | WhatsApp
• Google Workspace / Productivity: Google Workspace | Gmail | Google Calendar | Google Sheets
• Technical / Integration Skills: APIs & Webhooks | REST API Integrations | OAuth / Authentication | JSON Data Handling | LLM API Integration | CRM Integrations | Payment API Integration | Workflow Logic & Automation

==================================================
EDUCATION & LANGUAGE
==================================================
Education:
• Bachelor in Business Management — Taguig City University (2017)

Languages:
• English — Professional Working Proficiency
• Filipino — Native
`.trim();

  const handleCopyText = () => {
    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPdfDataUrl(result);
        setPdfFileName(file.name);
        setUploadSuccess(true);
        try {
          localStorage.setItem('erwin_resume_pdf_data', result);
          localStorage.setItem('erwin_resume_filename', file.name);
        } catch {
          // localStorage size limit fallback
        }
        setTimeout(() => {
          setUploadSuccess(false);
          setActiveTab('pdf');
        }, 1200);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    downloadATSResumeFile(pdfDataUrl);
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
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 text-[#ff9000] flex items-center justify-center font-bold shadow-md">
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
                <span className="px-2 py-0.5 rounded-md bg-orange-500/15 border border-orange-500/30 text-[10px] font-mono font-bold text-[#ff9000]">
                  ATS Verified
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff9000]">
                AI & Workflow Automation Specialist
              </span>
            </div>
          </div>

          {/* Navigation View Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10">
            <button
              onClick={() => setActiveTab('ats')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'ats'
                  ? 'bg-gradient-to-r from-[#ff9000] to-[#ff3700] text-white shadow-md'
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
                  ? 'bg-gradient-to-r from-[#ff9000] to-[#ff3700] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>PDF Preview</span>
            </button>

            <button
              onClick={() => setActiveTab('upload')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'upload'
                  ? 'bg-gradient-to-r from-[#ff9000] to-[#ff3700] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload PDF</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border transition-colors cursor-pointer hover:border-red-500"
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
              <div className="relative group w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-orange-500/50 shrink-0 shadow-[0_0_20px_rgba(255,80,0,0.2)]">
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
                    <Camera className="w-5 h-5 text-[#ff9000] mb-1" />
                    <span className="text-[10px] font-mono font-bold text-[#ff9000] leading-tight">
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
                <p className="text-[#ff9000] font-bold text-xs sm:text-sm font-mono">
                  AI Automation Specialist | n8n • Zapier • Make • GoHighLevel
                </p>

                <div 
                  className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs pt-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#ff9000]" /> Manila, Philippines
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#ff9000]" /> +63 915300090
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#ff9000]" /> panicanerwin16@gmail.com
                  </span>
                </div>

                {/* Profile Links */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                  <a
                    href="https://linkedin.com/in/erwinpanican"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg border hover:border-orange-500 text-[11px] font-mono flex items-center gap-1.5 transition-colors"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#ff9000]" /> LinkedIn
                  </a>
                  <a
                    href="https://v2.onlinejobs.ph/jobseekers/info/5106135"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg border hover:border-orange-500 text-[11px] font-mono flex items-center gap-1.5 transition-colors"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#ff9000]" /> OnlineJobsPh
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~01c544a89e40992a44"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg border hover:border-orange-500 text-[11px] font-mono flex items-center gap-1.5 transition-colors"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#ff9000]" /> Upwork Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Section: Professional Summary */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <Sparkles className="w-4 h-4 text-[#ff9000]" />
                <h3 className="text-xs font-mono uppercase font-bold text-[#ff9000] tracking-wider">
                  Professional Summary
                </h3>
              </div>
              <p className="leading-relaxed text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                AI Automation Specialist with expertise in designing and implementing intelligent workflow automation using <strong className="text-[#ff9000]">n8n, Zapier, Make.com, and GoHighLevel</strong>. Experienced in API integrations, AI agents, CRM automation, webhooks, and business process optimization. Skilled at building scalable automation solutions that reduce manual work, improve operational efficiency, and support business growth through AI-powered workflows.
              </p>
            </div>

            {/* Section: Core Competencies */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <Wrench className="w-4 h-4 text-[#ff9000]" />
                <h3 className="text-xs font-mono uppercase font-bold text-[#ff9000] tracking-wider">
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
                  'Workflow Automation',
                  'AI Agents',
                  'CRM Architecture',
                  'GoHighLevel',
                  'n8n',
                  'Zapier',
                  'Make.com',
                  'API Integrations',
                  'Webhooks',
                  'Lead Routing',
                  'SOP Documentation',
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/30 text-[#ff9000] font-mono text-xs font-semibold"
                  >
                    • {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Section: Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <Award className="w-4 h-4 text-[#ff9000]" />
                <h3 className="text-xs font-mono uppercase font-bold text-[#ff9000] tracking-wider">
                  Certification
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Zapier Automation Certification',
                  'Make.com Automation Certification',
                  'n8n Workflow Automation Certification',
                  'GoHighLevel Certification',
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
                    <span className="w-2 h-2 rounded-full bg-[#ff4500] shadow-[0_0_6px_#ff4500] shrink-0" />
                    <span className="font-semibold text-xs">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Automation Projects (6 Projects) */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                <Briefcase className="w-4 h-4 text-[#ff9000]" />
                <h3 className="text-xs font-mono uppercase font-bold text-[#ff9000] tracking-wider">
                  Automation Projects
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: 'AI-Powered Facebook Customer Support & Lead Response Automation',
                    desc: 'AI-powered Facebook Messenger automation system that instantly responds to customer inquiries, provides intelligent answers, qualifies potential leads, and sends qualified prospects to the sales team for follow-up—helping businesses improve response time, customer engagement, and lead conversion.',
                    tech: 'n8n, Gemini, Facebook',
                  },
                  {
                    title: 'AI-Powered Lead Qualification & Nurturing Automation',
                    desc: 'AI-powered automation system that analyzes and qualifies leads based on their information and behavior, assigns lead priority, and automatically sends personalized follow-up messages to nurture prospects and improve conversion opportunities.',
                    tech: 'n8n, Gemini, Google Sheets, Apollo, Gmail, Slack',
                  },
                  {
                    title: 'AI Receptionist & Automated Appointment Management',
                    desc: 'AI receptionist system that responds to customer inquiries, manages appointment scheduling, sends automated confirmations and reminders, and handles cancellations and rescheduling—reducing manual work and improving the overall customer experience.',
                    tech: 'n8n, Vapi, Airtable, Google Calendar',
                  },
                  {
                    title: 'Asana CRM Lead Management & Automated Engagement',
                    desc: 'Automated lead management system that organizes prospects in Asana, tracks lead progress, triggers personalized follow-ups, and notifies the sales team of important lead activities—improving lead visibility, engagement, and follow-up efficiency.',
                    tech: 'Zapier, Asana, OpenAI, Slack',
                  },
                  {
                    title: 'Xero Financial Data Export & Asana Workflow Automation',
                    desc: 'Automated workflow that exports financial transaction data from Xero and organizes it into Asana, enabling teams to track accounting-related tasks, streamline financial operations, and reduce manual data entry.',
                    tech: 'Make, Asana, Xero, Google Sheets',
                  },
                  {
                    title: 'Appointment Funnel & Lead Management Automation',
                    desc: 'Automated appointment funnel that captures and manages leads, streamlines appointment booking, and triggers automated confirmations, reminders, cancellations, rescheduling, and no-show follow-ups—helping improve lead conversion and appointment management.',
                    tech: 'GoHighLevel',
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
                    <h4 className="font-bold text-[#ff9000] text-xs sm:text-sm">
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
                <Briefcase className="w-4 h-4 text-[#ff9000]" />
                <h3 className="text-xs font-mono uppercase font-bold text-[#ff9000] tracking-wider">
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
                    <span>Freelance / Independent — AI Automation Specialist</span>
                    <span className="text-[#ff9000] font-mono text-xs">(2026–Present)</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <li>Designed AI-powered workflow automations using n8n, Make.com, and Zapier.</li>
                    <li>Integrated OpenAI and Anthropic models.</li>
                    <li>Built API integrations and custom webhooks.</li>
                    <li>Maintained 99% workflow uptime.</li>
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
                    <span>Performance Coach — Seidopro Global Inc</span>
                    <span className="text-[#ff9000] font-mono text-xs">(2022 to 2026)</span>
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
                    <span>Assistant Supervisor — Seidopro Global Inc</span>
                    <span className="text-[#ff9000] font-mono text-xs">(2020 - 2022)</span>
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
                    <span>Documentation Associate — Seidopro Global Inc</span>
                    <span className="text-[#ff9000] font-mono text-xs">(2018–2020)</span>
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
                <Wrench className="w-4 h-4 text-[#ff9000]" />
                <h3 className="text-xs font-mono uppercase font-bold text-[#ff9000] tracking-wider">
                  Tools and Technologies
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3.5 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <strong className="text-[#ff9000] font-mono block mb-1">Automation Platforms:</strong>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>GoHighLevel | n8n | Zapier | Make.com</p>
                </div>
                <div className="p-3.5 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <strong className="text-[#ff9000] font-mono block mb-1">AI / LLM / AI Development:</strong>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>OpenAI | Claude | Grok | Gemini | Vapi | LangChain | OpenRouter | Lovable</p>
                </div>
                <div className="p-3.5 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <strong className="text-[#ff9000] font-mono block mb-1">Business / CRM / Productivity Tools:</strong>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Stripe | Airtable | Notion | Asana | Apollo.io | Slack | Telegram | WhatsApp</p>
                </div>
                <div className="p-3.5 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <strong className="text-[#ff9000] font-mono block mb-1">Google Workspace / Productivity:</strong>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Google Workspace | Gmail | Google Calendar | Google Sheets</p>
                </div>
                <div className="p-3.5 rounded-xl border sm:col-span-2" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <strong className="text-[#ff9000] font-mono block mb-1">Technical / Integration Skills:</strong>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>APIs & Webhooks | REST API Integrations | OAuth / Authentication | JSON Data Handling | LLM API Integration | CRM Integrations | Payment API Integration | Workflow Logic & Automation</p>
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
                <div className="flex items-center gap-2 text-[#ff9000] font-mono text-xs font-bold uppercase">
                  <GraduationCap className="w-4 h-4" /> Education
                </div>
                <h4 className="font-bold text-xs sm:text-sm" style={{ color: 'var(--text-primary)' }}>Bachelor in Business Management</h4>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Taguig City University (2017)</p>
              </div>

              <div 
                className="p-4 rounded-xl border space-y-1.5"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div className="flex items-center gap-2 text-[#ff9000] font-mono text-xs font-bold uppercase">
                  <Globe className="w-4 h-4" /> Languages
                </div>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>English:</strong> Professional Working Proficiency
                </p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Filipino:</strong> Native
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
                    <FileText className="w-4 h-4 text-[#ff9000]" />
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--text-primary)' }}>
                      {pdfFileName}
                    </span>
                  </div>
                  <a
                    href={pdfDataUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-[#ff9000] hover:underline flex items-center gap-1"
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
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-[#ff9000] flex items-center justify-center mx-auto shadow-lg">
                  <Upload className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    Upload Your PDF Resume
                  </h3>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                    Attach <code className="text-[#ff9000] bg-black/40 px-1.5 py-0.5 rounded">Erwin_Panican_ATS_Resume.docx (1).pdf</code> to enable interactive PDF document preview and 1-click downloads.
                  </p>
                </div>

                <label
                  htmlFor="pdf-file-picker-tab"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff9000] to-[#ff3700] text-white font-bold text-xs font-mono shadow-[0_0_20px_rgba(255,80,0,0.35)] inline-flex items-center gap-2 cursor-pointer hover:scale-105 transition-all"
                >
                  <Upload className="w-4 h-4" />
                  <span>Choose PDF File from Downloads</span>
                  <input
                    id="pdf-file-picker-tab"
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('ats')}
                    className="text-xs font-mono text-gray-400 hover:text-white underline cursor-pointer"
                  >
                    Or view full ATS document text & sections
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3: UPLOAD RESUME PDF ================= */}
        {activeTab === 'upload' && (
          <div className="p-8 overflow-y-auto flex flex-col items-center justify-center text-center space-y-6 min-h-[480px]" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="max-w-lg w-full space-y-6">
              
              {/* Notice Box */}
              <div className="p-4 rounded-2xl border flex items-start gap-3 text-left" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                <Info className="w-5 h-5 text-[#ff9000] shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <p className="font-bold text-white mb-0.5">Resume File Attachment:</p>
                  To attach your local file <code className="text-[#ff9000] bg-black/40 px-1 py-0.5 rounded">Erwin_Panican_ATS_Resume.docx (1).pdf</code> from your Downloads folder, simply select it below. It will be stored and linked directly to every "View Resume" & "Download Resume" button on your portfolio!
                </div>
              </div>

              {/* Upload Drop Zone */}
              <label
                htmlFor="pdf-file-dropzone"
                className={`p-10 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group ${
                  uploadSuccess
                    ? 'border-emerald-500 bg-emerald-500/10'
                    : 'border-orange-500/40 hover:border-orange-500 bg-black/30 hover:bg-black/50'
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-[#ff9000] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {uploadSuccess ? <Check className="w-8 h-8 text-emerald-400" /> : <Upload className="w-8 h-8 text-[#ff9000]" />}
                </div>

                <h4 className="text-base font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {uploadSuccess ? 'Resume Attached Successfully!' : 'Click to Browse or Drag & Drop'}
                </h4>
                <p className="text-xs mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Select <strong className="text-[#ff9000]">Erwin_Panican_ATS_Resume.docx (1).pdf</strong>
                </p>

                <span className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff9000] to-[#ff3700] text-white font-bold text-xs font-mono shadow-md">
                  Select File (.pdf)
                </span>

                <input
                  id="pdf-file-dropzone"
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              {pdfDataUrl && (
                <div className="p-4 rounded-xl border flex items-center justify-between" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                  <div className="flex items-center gap-2.5">
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-bold text-emerald-400 truncate">
                      Active: {pdfFileName}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveTab('pdf')}
                    className="text-xs font-mono text-[#ff9000] hover:underline cursor-pointer"
                  >
                    View Document →
                  </button>
                </div>
              )}

            </div>
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
              className="px-3.5 py-2 rounded-xl border text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors hover:border-orange-500 cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)',
              }}
              title="Print ATS Formatted Resume or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#ff9000]" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="px-3.5 py-2 rounded-xl border text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors hover:border-orange-500 cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)',
              }}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#ff9000]" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff9000] via-[#ff4500] to-[#ff2244] hover:brightness-110 text-white text-xs font-bold font-mono shadow-[0_0_20px_rgba(255,80,0,0.35)] flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (.pdf)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};


