import { jsPDF } from 'jspdf';

/**
 * Erwin Panican ATS Resume PDF Generator & Instant Downloader
 * Accurately reproduces the exact 4-page PDF document attached by the user.
 * Generates and triggers instant browser download of 'Erwin_Panican_ATS_Resume.pdf'
 */

export const generateATSPdfDocument = (): jsPDF => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const leftMargin = 65;
  const rightMargin = 65;
  const contentWidth = pageWidth - leftMargin - rightMargin;

  // Colors based on the attached document
  const primaryNavy = [30, 58, 95] as const; // #1e3a5f
  const accentBlue = [45, 104, 196] as const; // #2d68c4
  const textDark = [17, 24, 39] as const; // #111827
  const textMuted = [55, 65, 81] as const; // #374151
  const linkBlue = [37, 99, 235] as const; // #2563eb

  // ==========================================
  // PAGE 1: Header, Summary, Core Competencies, Certifications
  // ==========================================
  let y = 100;

  // Title: Erwin Panican
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.setTextColor(...primaryNavy);
  doc.text('Erwin Panican', pageWidth / 2, y, { align: 'center' });
  y += 32;

  // Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(...textDark);
  doc.text('AI Automation Specialist | n8n • Zapier • Make • GoHighLevel', pageWidth / 2, y, { align: 'center' });
  y += 18;

  // Location & Contact
  doc.text('Manila, Philippines | +63 915300090 | panicanerwin16@gmail.com', pageWidth / 2, y, { align: 'center' });
  y += 18;

  // Links
  doc.text('LinkedIn: ', leftMargin + 8, y);
  doc.setTextColor(...linkBlue);
  doc.textWithLink('linkedin.com/in/erwinpanican', leftMargin + 56, y, { url: 'https://linkedin.com/in/erwinpanican' });
  y += 16;

  doc.setTextColor(...textDark);
  doc.text('OnlineJobsPh: ', leftMargin + 8, y);
  doc.setTextColor(...linkBlue);
  doc.textWithLink('https://v2.onlinejobs.ph/jobseekers/info/5106135', leftMargin + 84, y, { url: 'https://v2.onlinejobs.ph/jobseekers/info/5106135' });
  y += 16;

  doc.setTextColor(...textDark);
  doc.text('Upwork: ', leftMargin + 8, y);
  doc.setTextColor(...linkBlue);
  doc.textWithLink('https://www.upwork.com/freelancers/~01c544a89e40992a44', leftMargin + 54, y, { url: 'https://www.upwork.com/freelancers/~01c544a89e40992a44' });
  y += 38;

  // Professional Summary
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...primaryNavy);
  doc.text('Professional Summary', leftMargin, y);
  y += 18;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...textDark);
  const summaryText =
    'AI Automation Specialist with expertise in designing and implementing intelligent workflow automation using n8n, Zapier, Make.com, and GoHighLevel. Experienced in API integrations, AI agents, CRM automation, webhooks, and business process optimization. Skilled at building scalable automation solutions that reduce manual work, improve operational efficiency, and support business growth through AI-powered workflows.';
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, leftMargin, y);
  y += summaryLines.length * 14 + 28;

  // CORE COMPETENCIES
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...primaryNavy);
  doc.text('CORE COMPETENCIES', leftMargin, y);
  y += 18;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...textDark);
  const compText = '• Workflow Automation • AI Agents • CRM Architecture • GoHighLevel • n8n • Zapier •\nMake.com • API Integrations • Webhooks • Lead Routing • SOP Documentation';
  const compLines = doc.splitTextToSize(compText, contentWidth);
  doc.text(compLines, leftMargin, y);
  y += compLines.length * 14 + 28;

  // Certification
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...primaryNavy);
  doc.text('Certification', leftMargin, y);
  y += 18;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...textDark);
  const certs = [
    '• Zapier Automation Certification',
    '• Make.com Automation Certification',
    '• n8n Workflow Automation Certification',
    '• GoHighLevel Certification',
  ];
  certs.forEach((cert) => {
    doc.text(cert, leftMargin, y);
    y += 16;
  });

  // ==========================================
  // PAGE 2: Automation Projects:
  // ==========================================
  doc.addPage();
  y = 70;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...primaryNavy);
  doc.text('Automation Projects:', leftMargin, y);
  y += 22;

  const projects = [
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
  ];

  projects.forEach((proj) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(...accentBlue);
    const titleLines = doc.splitTextToSize(proj.title, contentWidth);
    doc.text(titleLines, leftMargin, y);
    y += titleLines.length * 13;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(...textMuted);
    const descLines = doc.splitTextToSize(proj.desc, contentWidth);
    doc.text(descLines, leftMargin, y);
    y += descLines.length * 12.5 + 2;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...textDark);
    doc.text('Technologies: ', leftMargin, y);
    doc.setFont('helvetica', 'normal');
    doc.text(proj.tech, leftMargin + 66, y);
    y += 18;
  });

  // ==========================================
  // PAGE 3: Professional Experience & Tools and Technologies
  // ==========================================
  doc.addPage();
  y = 70;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...primaryNavy);
  doc.text('Professional Experience', leftMargin, y);
  y += 20;

  // Freelance
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...accentBlue);
  doc.text('Freelance / Independent — AI Automation Specialist (2026–Present)', leftMargin, y);
  y += 15;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...textDark);
  const freelanceBullets = [
    '● Designed AI-powered workflow automations using n8n, Make.com, and Zapier.',
    '● Integrated OpenAI and Anthropic models.',
    '● Built API integrations and custom webhooks.',
    '● Maintained 99% workflow uptime.',
  ];
  freelanceBullets.forEach((b) => {
    doc.text(b, leftMargin, y);
    y += 13.5;
  });
  y += 6;

  // Documentation Associate
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...accentBlue);
  doc.text('Documentation Associate — Seidopro Global Inc (2018–2020)', leftMargin, y);
  y += 15;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...textDark);
  const docText =
    '● Responsible for preparing and verifying shipping documents, coordinating with freight forwarders, shipping lines, and internal teams, maintaining accurate shipment records, monitoring documentation requirements, and ensuring timely and error-free processing of shipments.';
  const docLines = doc.splitTextToSize(docText, contentWidth);
  doc.text(docLines, leftMargin, y);
  y += docLines.length * 13 + 6;

  // Assistant Supervisor
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...accentBlue);
  doc.text('Assistant Supervisor - Seidopro Global Inc (2020 - 2022)', leftMargin, y);
  y += 15;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...textDark);
  const supText =
    '● Responsible for supporting daily operations, coordinating team activities, monitoring employee performance, assigning tasks, ensuring work quality and productivity, assisting with problem-solving, and providing guidance and support to team members to achieve operational goals.';
  const supLines = doc.splitTextToSize(supText, contentWidth);
  doc.text(supLines, leftMargin, y);
  y += supLines.length * 13 + 6;

  // Performance Coach
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...accentBlue);
  doc.text('Performance Coach - Seidorpo Global Inc (2022 to 2026)', leftMargin, y);
  y += 15;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...textDark);
  const coachText =
    '● Responsible for monitoring and evaluating employee performance, providing coaching and constructive feedback, identifying performance gaps, creating improvement plans, conducting regular coaching sessions, and supporting team members in achieving their performance and productivity goals.';
  const coachLines = doc.splitTextToSize(coachText, contentWidth);
  doc.text(coachLines, leftMargin, y);
  y += coachLines.length * 13 + 14;

  // Tools and Technologies
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...primaryNavy);
  doc.text('Tools and Technologies', leftMargin, y);
  y += 18;

  const toolCategories = [
    {
      title: 'Automation Platforms :',
      items: '● GoHighLevel |n8n |Zapier |Make.com',
    },
    {
      title: 'AI / LLM / AI Development :',
      items: '● OpenAI |Claude |Grok |Gemini |Vapi |LangChain |OpenRouter |Lovable',
    },
    {
      title: 'Business / CRM / Productivity Tools :',
      items: '● Stripe |Airtable |Notion |Asana |Apollo.io |Slack |Telegram |WhatsApp',
    },
    {
      title: 'Google Workspace / Productivity:',
      items: '● Google Workspace |Gmail |Google Calendar |Google Sheets',
    },
    {
      title: 'Technical / Integration Skills:',
      items:
        '● APIs & Webhooks |REST API Integrations |OAuth / Authentication |JSON Data Handling |LLM API Integration |CRM Integrations |Payment API Integration |Workflow Logic & Automation',
    },
  ];

  toolCategories.forEach((cat) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...accentBlue);
    doc.text(cat.title, leftMargin, y);
    y += 13.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(...textDark);
    const itemLines = doc.splitTextToSize(cat.items, contentWidth);
    doc.text(itemLines, leftMargin + 10, y);
    y += itemLines.length * 13 + 4;
  });

  // ==========================================
  // PAGE 4: Education & Language
  // ==========================================
  doc.addPage();
  y = 70;

  // Education
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...primaryNavy);
  doc.text('Education', leftMargin, y);
  y += 18;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...textDark);
  doc.text('Bachelor in Business Management', leftMargin, y);
  y += 14;
  doc.text('Taguig City University (2017)', leftMargin, y);
  y += 28;

  // Language
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...primaryNavy);
  doc.text('Language', leftMargin, y);
  y += 18;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...textDark);
  doc.text('English — Professional Working Proficiency', leftMargin, y);
  y += 14;
  doc.text('Filipino — Native', leftMargin, y);

  return doc;
};

/**
 * Triggers the automatic instant browser download of the PDF file
 */
export const downloadATSResumeFile = (customPdfDataUrl?: string | null) => {
  // If user has uploaded a custom PDF, download it directly
  if (customPdfDataUrl) {
    const link = document.createElement('a');
    link.href = customPdfDataUrl;
    link.download = 'Erwin_Panican_resume (1).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  // Check localStorage for saved PDF
  try {
    const savedPdf = localStorage.getItem('erwin_resume_pdf_data');
    const savedName = localStorage.getItem('erwin_resume_filename') || 'Erwin_Panican_resume (1).pdf';
    if (savedPdf) {
      const link = document.createElement('a');
      link.href = savedPdf;
      link.download = savedName.endsWith('.pdf') ? savedName : `${savedName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
  } catch {
    // ignore
  }

  // Generate authentic PDF document via jsPDF and trigger browser download
  try {
    const doc = generateATSPdfDocument();
    doc.save('Erwin_Panican_resume (1).pdf');
  } catch (error) {
    console.error('Failed to generate PDF, fallback to download:', error);
  }
};
