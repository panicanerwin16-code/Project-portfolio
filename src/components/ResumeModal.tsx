import React, { useState } from 'react';
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
} from 'lucide-react';
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

  if (!isOpen) return null;

  const rawResumeText = `Erwin Panican
AI Automation Specialist | n8n • Zapier • Make • GoHighLevel
Manila, Philippines | +63 915305890 | panicanerwin16@gmail.com
LinkedIn: https://linkedin.com/in/erwinpanican
OnlineJobsPh: https://v2.onlinejobs.ph/jobseekers/info/5106135
Upwork: https://www.upwork.com/freelancers/~01c544a89e40992a44

==================================================
PROFESSIONAL SUMMARY
==================================================
AI Automation Specialist with expertise in designing and implementing intelligent workflow automation using n8n, Zapier, Make.com, and GoHighLevel. Experienced in API integrations, AI agents, CRM automation, webhooks, and business process optimization. Skilled at building scalable automation solutions that reduce manual work, improve operational efficiency, and support business growth through AI-powered workflows.

==================================================
TECHNICAL SKILLS
==================================================
• Automation Platforms: n8n, Make.com, Zapier, GoHighLevel
• AI & LLMs: OpenAI, Claude, Google Gemini, Anthropic
• Business: Workflow Design, CRM Automation, Lead Management, Process Improvement
• Technical: API Integrations, REST APIs, Webhooks

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
1. AI-Driven Booking & Appointment Automation
   Automated scheduling with AI, calendar sync, Gmail confirmations, reducing admin workload.
   Technologies: n8n, Conversational AI, Gmail, Google Calendar

2. Automated Lead Management & Sales Outreach
   AI lead scoring, outreach, Slack alerts, CRM updates.
   Technologies: n8n, Gemini, Google Sheets, Slack, HubSpot

3. ASANA CRM Lead Enrichment & Quotation Automation
   Automated quotations, Drive folders, follow-ups.
   Technologies: Zapier, Asana, OpenAI

4. AI Voice Receptionist
   Voice AI for booking and cancellations.
   Technologies: n8n, VAPI, Airtable

5. Landing Page & Appointment Booking
   Automated booking from landing page.
   Technologies: GoHighLevel

==================================================
PROFESSIONAL EXPERIENCE
==================================================
Freelance / Independent — AI Automation Specialist (2026–Present)
• Designed AI-powered workflow automations using n8n, Make.com, and Zapier.
• Integrated OpenAI and Anthropic models.
• Built API integrations and custom webhooks.
• Maintained 99% workflow uptime.

Documentation Associate — Seidopro Global Inc (2018–2026)
• Managed shipping documentation, compliance, coordination, and records.

==================================================
TOOLS AND TECHNOLOGIES
==================================================
• Automation: n8n, Zapier, Make.com, GoHighLevel, Pabbly Connect
• CRM: HubSpot, ActiveCampaign
• Development: JavaScript, SQL, Google Apps Script
• Integrations: REST APIs, Webhooks, API Integrations
• Productivity: Google Sheets, Airtable, Notion

==================================================
EDUCATION & LANGUAGE
==================================================
Education:
• Bachelor in Business Management - Taguig City University (2017)

Languages:
• English — Professional Working Proficiency
• Filipino — Native
`.trim();

  const handleCopyText = () => {
    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([rawResumeText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Erwin_Panican_AI_Automation_Specialist_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl border rounded-3xl shadow-2xl my-6 max-h-[90vh] flex flex-col overflow-hidden transition-colors card-crimson-glow"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-primary)',
        }}
      >
        
        {/* Header Bar */}
        <div 
          className="px-6 py-4 border-b flex items-center justify-between shrink-0"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 text-[#ff9000] flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 
                className="text-base font-bold tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                Erwin Panican — Official Resume
              </h2>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff9000]">
                AI Automation Specialist
              </span>
            </div>
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

        {/* Scrollable Document Body */}
        <div 
          className="p-6 sm:p-8 overflow-y-auto space-y-8 text-xs sm:text-sm text-left"
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
                  <Phone className="w-3.5 h-3.5 text-[#ff9000]" /> +63 915305890
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

          {/* Section: Technical Skills Grid */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
              <Wrench className="w-4 h-4 text-[#ff9000]" />
              <h3 className="text-xs font-mono uppercase font-bold text-[#ff9000] tracking-wider">
                Technical Skill
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div 
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <span className="text-[11px] font-mono uppercase font-bold block mb-1 text-[#ff9000]">
                  Automation Platforms
                </span>
                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>n8n, Make.com, Zapier, GoHighLevel</p>
              </div>
              <div 
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <span className="text-[11px] font-mono uppercase font-bold block mb-1 text-[#ff9000]">
                  AI & LLMs
                </span>
                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>OpenAI, Claude, Google Gemini, Anthropic</p>
              </div>
              <div 
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <span className="text-[11px] font-mono uppercase font-bold block mb-1 text-[#ff9000]">
                  Business
                </span>
                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>Workflow Design, CRM Automation, Lead Management, Process Improvement</p>
              </div>
              <div 
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <span className="text-[11px] font-mono uppercase font-bold block mb-1 text-[#ff9000]">
                  Technical
                </span>
                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>API Integrations, REST APIs, Webhooks</p>
              </div>
            </div>
          </div>

          {/* Section: Certification */}
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

          {/* Section: Automation Projects */}
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
                  title: 'AI-Driven Booking & Appointment Automation',
                  desc: 'Automated scheduling with AI, calendar sync, Gmail confirmations, reducing admin workload.',
                  tech: 'n8n, Conversational AI, Gmail, Google Calendar',
                },
                {
                  title: 'Automated Lead Management & Sales Outreach',
                  desc: 'AI lead scoring, outreach, Slack alerts, CRM updates.',
                  tech: 'n8n, Gemini, Google Sheets, Slack, HubSpot',
                },
                {
                  title: 'ASANA CRM Lead Enrichment & Quotation Automation',
                  desc: 'Automated quotations, Drive folders, follow-ups.',
                  tech: 'Zapier, Asana, OpenAI',
                },
                {
                  title: 'AI Voice Receptionist',
                  desc: 'Voice AI for booking and cancellations.',
                  tech: 'n8n, VAPI, Airtable',
                },
                {
                  title: 'Landing Page & Appointment Booking',
                  desc: 'Automated booking from landing page.',
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
                  <span>Documentation Associate — Seidopro Global Inc</span>
                  <span className="text-[#ff9000] font-mono text-xs">(2018–2026)</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <li>Managed shipping documentation, compliance, coordination, and records.</li>
                </ul>
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
              <div className="p-3 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                <strong className="text-[#ff9000] font-mono block mb-0.5">Automation:</strong> n8n, Zapier, Make.com, GoHighLevel, Pabbly Connect
              </div>
              <div className="p-3 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                <strong className="text-[#ff9000] font-mono block mb-0.5">CRM:</strong> HubSpot, ActiveCampaign
              </div>
              <div className="p-3 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                <strong className="text-[#ff9000] font-mono block mb-0.5">Development:</strong> JavaScript, SQL, Google Apps Script
              </div>
              <div className="p-3 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                <strong className="text-[#ff9000] font-mono block mb-0.5">Integrations:</strong> REST APIs, Webhooks, API Integrations
              </div>
              <div className="p-3 rounded-xl border sm:col-span-2" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                <strong className="text-[#ff9000] font-mono block mb-0.5">Productivity:</strong> Google Sheets, Airtable, Notion
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

        {/* Footer Buttons */}
        <div 
          className="px-6 py-4 border-t flex flex-wrap items-center justify-end gap-3 shrink-0"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <button
            onClick={handleCopyText}
            className="px-4 py-2.5 rounded-xl border text-xs font-bold font-mono flex items-center gap-2 cursor-pointer transition-colors hover:border-orange-500"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
          >
            {copied ? <Check className="w-4 h-4 text-[#ff9000]" /> : <Copy className="w-4 h-4 text-[#ff9000]" />}
            <span>{copied ? 'Copied Full Text!' : 'Copy Text'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff9000] to-[#ff3700] hover:brightness-110 text-white text-xs font-bold font-mono shadow-[0_0_20px_rgba(255,80,0,0.35)] flex items-center gap-2 cursor-pointer transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume (.txt)</span>
          </button>
        </div>

      </div>
    </div>
  );
};

