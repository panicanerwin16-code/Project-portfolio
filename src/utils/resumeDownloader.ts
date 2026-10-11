import { jsPDF } from 'jspdf';

/**
 * Erwin Panican Official Resume PDF Generator & Permanent Downloader
 * Faithful reproduction of 'ERN_Panican.pdf'
 * Generates an immutable, print-perfect, ATS-compliant 4-page PDF document.
 */

export const RESUME_FILE_NAME = 'ERN_Panican.pdf';

export const generateATSPdfDocument = (): jsPDF => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const leftMargin = 56;
  const rightMargin = 56;
  const contentWidth = pageWidth - leftMargin - rightMargin;

  // Professional typography palette
  const primaryNavy = [24, 43, 73] as const;    // #182b49
  const accentAmber = [217, 119, 6] as const;   // #d97706
  const textDark = [17, 24, 39] as const;       // #111827
  const textMuted = [55, 65, 81] as const;      // #374151
  const textSubtle = [107, 114, 128] as const;  // #6b7280
  const linkBlue = [29, 78, 216] as const;      // #1d4ed8
  const lineRule = [229, 231, 235] as const;    // #e5e7eb

  const addPageFooter = (pageNum: number, totalPages: number) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...textSubtle);
    doc.setDrawColor(...lineRule);
    doc.line(leftMargin, pageHeight - 34, pageWidth - rightMargin, pageHeight - 34);
    doc.text('Erwin Panican — GoHighLevel CRM & AI Automation Specialist', leftMargin, pageHeight - 22);
    doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - rightMargin, pageHeight - 22, { align: 'right' });
  };

  // ==========================================
  // PAGE 1: Header, Summary, Core Competencies, Certifications
  // ==========================================
  let y = 62;

  // Title: Erwin Panican
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(...primaryNavy);
  doc.text('Erwin Panican', pageWidth / 2, y, { align: 'center' });
  y += 24;

  // Subtitle
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...accentAmber);
  doc.text('GoHighLevel CRM & AI Automation Specialist', pageWidth / 2, y, { align: 'center' });
  y += 18;

  // Location & Contact
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...textDark);
  doc.text('Manila, Philippines  |  +63 915300090  |  panicanerwin16@gmail.com', pageWidth / 2, y, { align: 'center' });
  y += 18;

  // Clickable Links Bar
  doc.setFontSize(9);
  doc.setTextColor(...textMuted);
  const linksY = y;
  
  doc.text('LinkedIn: ', leftMargin + 20, linksY);
  doc.setTextColor(...linkBlue);
  doc.textWithLink('linkedin.com/in/erwinpanican', leftMargin + 65, linksY, { url: 'https://linkedin.com/in/erwinpanican' });

  doc.setTextColor(...textMuted);
  doc.text('OnlineJobsPh: ', leftMargin + 195, linksY);
  doc.setTextColor(...linkBlue);
  doc.textWithLink('onlinejobs.ph/jobseekers/info/5106135', leftMargin + 265, linksY, { url: 'https://v2.onlinejobs.ph/jobseekers/info/5106135' });

  doc.setTextColor(...textMuted);
  doc.text('Upwork: ', leftMargin + 420, linksY);
  doc.setTextColor(...linkBlue);
  doc.textWithLink('upwork.com/freelancers/~01c544a89e40992a44', leftMargin + 460, linksY, { url: 'https://www.upwork.com/freelancers/~01c544a89e40992a44' });

  y += 26;
  doc.setDrawColor(...lineRule);
  doc.line(leftMargin, y, pageWidth - rightMargin, y);
  y += 20;

  // Section 1: Professional Summary
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...primaryNavy);
  doc.text('PROFESSIONAL SUMMARY', leftMargin, y);
  y += 16;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...textDark);
  const summaryText =
    'GoHighLevel CRM & AI Automation Specialist with deep expertise in designing and deploying intelligent workflow automations using GoHighLevel, n8n, Zapier, and Make.com. Experienced in connecting CRM architectures, lead qualification pipelines, and everyday business tools through intelligent automation. Skilled at building practical systems that eliminate manual data entry, accelerate lead conversion, improve operational visibility, and turn opportunities into long-term customers.';
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, leftMargin, y);
  y += summaryLines.length * 13.5 + 20;

  // Section 2: Core Competencies
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...primaryNavy);
  doc.text('CORE COMPETENCIES', leftMargin, y);
  y += 16;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...textDark);
  const compItems = [
    '• GoHighLevel CRM Architecture & Pipelines',
    '• Workflow Automation & Multi-Step Logic',
    '• AI Agents & Intelligent Chatbots',
    '• n8n, Zapier & Make.com Automation',
    '• API Integrations, Webhooks & JSON Parsing',
    '• Lead Qualification & Automated Routing',
    '• Appointment Booking Funnels & Reminders',
    '• SOP & Systems Documentation',
  ];
  
  // Render in two clean balanced columns
  const colWidth = contentWidth / 2;
  const halfLen = Math.ceil(compItems.length / 2);
  const startCompY = y;
  for (let i = 0; i < halfLen; i++) {
    doc.text(compItems[i], leftMargin, startCompY + i * 16);
  }
  for (let i = halfLen; i < compItems.length; i++) {
    doc.text(compItems[i], leftMargin + colWidth, startCompY + (i - halfLen) * 16);
  }
  y = startCompY + halfLen * 16 + 20;

  // Section 3: Certifications
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...primaryNavy);
  doc.text('CERTIFICATIONS', leftMargin, y);
  y += 16;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...textDark);
  const certs = [
    '• GoHighLevel Certification',
    '• n8n Workflow Automation Certification',
    '• Zapier Automation Certification',
    '• Make.com Automation Certification',
  ];
  certs.forEach((cert) => {
    doc.text(cert, leftMargin, y);
    y += 15.5;
  });

  addPageFooter(1, 4);

  // ==========================================
  // PAGE 2: Automation Projects
  // ==========================================
  doc.addPage();
  y = 54;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...primaryNavy);
  doc.text('AUTOMATION PROJECTS', leftMargin, y);
  y += 18;

  const projects = [
    {
      title: '1. AI-Powered Lead Qualification & Nurturing Automation',
      desc: 'Engineered an end-to-end AI lead qualification and nurturing system that automatically scores prospects based on submission data and intent signals, assigns priority tiers in the CRM, drafts personalized email nurture sequences, and dispatches real-time Slack alerts to sales reps for high-intent conversions.',
      tech: 'n8n, Gemini, Google Sheets, Apollo.io, Gmail, Slack',
    },
    {
      title: '2. AI-Powered Facebook Customer Support & Lead Response Automation',
      desc: 'Built an autonomous 24/7 Facebook Messenger AI support system that instantly answers client inquiries, resolves objections using dynamic knowledge retrieval, qualifies prospective leads, and routes booked sales conversations directly into the pipeline.',
      tech: 'n8n, Gemini, Facebook Graph API, Webhooks',
    },
    {
      title: '3. AI Receptionist & Automated Appointment Management',
      desc: 'Designed a voice-driven conversational AI receptionist that handles inbound call inquiries, cross-checks calendar availability in real time, schedules appointments, and sends instant automated SMS confirmations, reminders, cancellations, and rescheduling links.',
      tech: 'n8n, Vapi, Airtable, Google Calendar, Twilio',
    },
    {
      title: '4. Appointment Funnel & GoHighLevel CRM Lead Management Automation',
      desc: 'Built an automated appointment funnel and lead management infrastructure in GoHighLevel. Automatically tracks prospects across stages, sends multi-channel SMS and email reminders, and triggers automated reactivation sequences for cancellations and no-shows.',
      tech: 'GoHighLevel, GHL Workflows, Twilio, Stripe',
    },
    {
      title: '5. Asana CRM Lead Management & Automated Engagement',
      desc: 'Engineered a centralized Asana lead board with automated Zapier triggers. Automatically categorizes incoming leads, logs interaction history, drafts contextual follow-ups using OpenAI, and notifies sales account executives via Slack.',
      tech: 'Zapier, Asana, OpenAI, Slack',
    },
    {
      title: '6. Xero Financial Data Export & Asana Workflow Automation',
      desc: 'Architected an automated Make.com integration that pulls recurring transaction data from Xero, synchronizes financial status into Asana boards, and maintains structured audit logs in Google Sheets, eliminating repetitive manual data entry.',
      tech: 'Make.com, Asana, Xero, Google Sheets',
    },
  ];

  projects.forEach((proj) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...primaryNavy);
    doc.text(proj.title, leftMargin, y);
    y += 13;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...textMuted);
    const descLines = doc.splitTextToSize(proj.desc, contentWidth);
    doc.text(descLines, leftMargin, y);
    y += descLines.length * 11.5 + 2;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...accentAmber);
    doc.text('Technologies: ', leftMargin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textDark);
    doc.text(proj.tech, leftMargin + 65, y);
    y += 16;
  });

  addPageFooter(2, 4);

  // ==========================================
  // PAGE 3: Professional Experience & Tools and Technologies
  // ==========================================
  doc.addPage();
  y = 54;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...primaryNavy);
  doc.text('PROFESSIONAL EXPERIENCE', leftMargin, y);
  y += 18;

  // Freelance Role
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...primaryNavy);
  doc.text('Freelance / Independent — GoHighLevel CRM & AI Automation Specialist', leftMargin, y);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...accentAmber);
  doc.text('(2024–Present)', pageWidth - rightMargin, y, { align: 'right' });
  y += 14;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textDark);
  const freelanceBullets = [
    '• Designed and implemented full-funnel GoHighLevel CRM architectures, custom fields, and automated pipelines.',
    '• Developed multi-step workflow automations using n8n, Zapier, and Make.com to replace manual business operations.',
    '• Integrated LLMs (OpenAI, Gemini, Claude) and Voice AI (Vapi) for automated customer support and lead qualification.',
    '• Built resilient REST API integrations, custom webhooks, and automated notifications connecting Airtable, Slack, and Google Workspace.',
    '• Maintained 99% workflow uptime and reliability with robust fallback logic and error handling.',
  ];
  freelanceBullets.forEach((bullet) => {
    const bLines = doc.splitTextToSize(bullet, contentWidth);
    doc.text(bLines, leftMargin, y);
    y += bLines.length * 12 + 2;
  });
  y += 6;

  // Performance Coach
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...primaryNavy);
  doc.text('Performance Coach — SeidoPro Global Inc', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textSubtle);
  doc.text('(2022 to 2026)', pageWidth - rightMargin, y, { align: 'right' });
  y += 13;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...textDark);
  const coachText =
    '• Responsible for monitoring and evaluating employee performance, providing coaching and constructive feedback, identifying performance gaps, creating improvement plans, conducting regular coaching sessions, and supporting team members in achieving their performance and productivity goals.';
  const coachLines = doc.splitTextToSize(coachText, contentWidth);
  doc.text(coachLines, leftMargin, y);
  y += coachLines.length * 11.5 + 8;

  // Assistant Supervisor
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...primaryNavy);
  doc.text('Assistant Supervisor — SeidoPro Global Inc', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textSubtle);
  doc.text('(2020 - 2022)', pageWidth - rightMargin, y, { align: 'right' });
  y += 13;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...textDark);
  const supText =
    '• Responsible for supporting daily operations, coordinating team activities, monitoring employee performance, assigning tasks, ensuring work quality and productivity, assisting with problem-solving, and providing guidance and support to team members to achieve operational goals.';
  const supLines = doc.splitTextToSize(supText, contentWidth);
  doc.text(supLines, leftMargin, y);
  y += supLines.length * 11.5 + 8;

  // Documentation Associate
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...primaryNavy);
  doc.text('Documentation Associate — SeidoPro Global Inc', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textSubtle);
  doc.text('(2018–2020)', pageWidth - rightMargin, y, { align: 'right' });
  y += 13;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...textDark);
  const docText =
    '• Responsible for preparing and verifying shipping documents, coordinating with freight forwarders, shipping lines, and internal teams, maintaining accurate shipment records, monitoring documentation requirements, and ensuring timely and error-free processing of shipments.';
  const docLines = doc.splitTextToSize(docText, contentWidth);
  doc.text(docLines, leftMargin, y);
  y += docLines.length * 11.5 + 18;

  // Section: Tools and Technologies
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...primaryNavy);
  doc.text('TOOLS AND TECHNOLOGIES', leftMargin, y);
  y += 16;

  const toolCategories = [
    { title: 'Automation & CRM Platforms:', items: 'GoHighLevel, n8n, Zapier, Make.com' },
    { title: 'AI / LLM & Voice Agents:', items: 'OpenAI, Claude, Grok, Gemini, Vapi, LangChain, OpenRouter, Lovable' },
    { title: 'Business, CRM & Productivity:', items: 'Stripe, Airtable, Notion, Asana, Apollo.io, Slack, Telegram, WhatsApp' },
    { title: 'Google Workspace Ecosystem:', items: 'Google Workspace, Gmail, Google Calendar, Google Sheets' },
    { title: 'Technical & Integration Skills:', items: 'APIs & Webhooks, REST API Integrations, OAuth / Auth Flows, JSON Data Handling, LLM API Integration, CRM Integrations, Payment Gateway Integration, Workflow Logic & Error Handling' },
  ];

  toolCategories.forEach((cat) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...primaryNavy);
    doc.text(cat.title, leftMargin, y);
    y += 11.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...textDark);
    const itemLines = doc.splitTextToSize(cat.items, contentWidth);
    doc.text(itemLines, leftMargin + 8, y);
    y += itemLines.length * 11 + 3;
  });

  addPageFooter(3, 4);

  // ==========================================
  // PAGE 4: Education & Language
  // ==========================================
  doc.addPage();
  y = 65;

  // Education
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...primaryNavy);
  doc.text('EDUCATION', leftMargin, y);
  y += 18;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...primaryNavy);
  doc.text('Bachelor in Business Management', leftMargin, y);
  y += 14;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...textDark);
  doc.text('Taguig City University — Graduated 2017', leftMargin, y);
  y += 34;

  // Language
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...primaryNavy);
  doc.text('LANGUAGES', leftMargin, y);
  y += 18;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...textDark);
  doc.text('• English — Professional Working Proficiency', leftMargin, y);
  y += 15;
  doc.text('• Filipino — Native Proficiency', leftMargin, y);

  addPageFooter(4, 4);

  return doc;
};

/**
 * Triggers the guaranteed, immutable browser download of ERN_Panican.pdf.
 * The content is statically generated from the authoritative single source of truth
 * to ensure the downloaded PDF content never changes.
 */
export const downloadATSResumeFile = (): void => {
  try {
    const doc = generateATSPdfDocument();
    doc.save(RESUME_FILE_NAME);
  } catch (error) {
    console.error('Failed to generate and download resume PDF:', error);
  }
};
