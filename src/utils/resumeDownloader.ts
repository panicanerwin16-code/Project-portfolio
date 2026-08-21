import { jsPDF } from 'jspdf';

/**
 * Erwin Panican ATS Resume PDF Generator & Instant Downloader
 * Generates genuine high-fidelity ATS-compliant PDF file 'Erwin_Panican_ATS_Resume.pdf'
 */

export const generateATSPdfDocument = (): jsPDF => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 38;
  const contentWidth = pageWidth - margin * 2;
  let y = margin + 4;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin + 10;
    }
  };

  const drawSectionHeader = (title: string) => {
    checkPageBreak(32);
    y += 8;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(217, 64, 0); // #d94000
    doc.text(title.toUpperCase(), margin, y);
    
    y += 4;
    doc.setDrawColor(229, 231, 235); // #e5e7eb
    doc.setLineWidth(1);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;
  };

  // --- HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42); // #0f172a
  doc.text('ERWIN PANICAN', pageWidth / 2, y, { align: 'center' });
  y += 16;

  doc.setFontSize(11);
  doc.setTextColor(217, 64, 0); // #d94000
  doc.text('AI Automation Specialist | n8n • Zapier • Make • GoHighLevel', pageWidth / 2, y, { align: 'center' });
  y += 14;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(75, 85, 99); // #4b5563
  doc.text('Manila, Philippines  |  +63 915300090  |  panicanerwin16@gmail.com', pageWidth / 2, y, { align: 'center' });
  y += 12;

  doc.text('LinkedIn: linkedin.com/in/erwinpanican   •   OnlineJobsPh: onlinejobs.ph/jobseekers/info/5106135', pageWidth / 2, y, { align: 'center' });
  y += 12;
  doc.text('Upwork: upwork.com/freelancers/~01c544a89e40992a44', pageWidth / 2, y, { align: 'center' });
  y += 6;

  // Header Divider
  doc.setDrawColor(255, 80, 0); // #ff5000
  doc.setLineWidth(2);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  // --- PROFESSIONAL SUMMARY ---
  drawSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(55, 65, 81); // #374151
  const summaryText =
    'AI Automation Specialist with expertise in designing and implementing intelligent workflow automation using n8n, Zapier, Make.com, and GoHighLevel. Experienced in API integrations, AI agents, CRM automation, webhooks, and business process optimization. Skilled at building scalable automation solutions that reduce manual work, improve operational efficiency, and support business growth through AI-powered workflows.';
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 11.5;

  // --- CORE COMPETENCIES ---
  drawSectionHeader('Core Competencies');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(31, 41, 55);
  const compText = '• Workflow Automation  • AI Agents  • CRM Architecture  • GoHighLevel  • n8n  • Zapier\n• Make.com  • API Integrations  • Webhooks  • Lead Routing  • SOP Documentation';
  const compLines = doc.splitTextToSize(compText, contentWidth);
  doc.text(compLines, margin, y);
  y += compLines.length * 11;

  // --- CERTIFICATION ---
  drawSectionHeader('Certification');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(31, 41, 55);
  
  const certs = [
    '• Zapier Automation Certification',
    '• Make.com Automation Certification',
    '• n8n Workflow Automation Certification',
    '• GoHighLevel Certification',
  ];
  
  const colWidth = contentWidth / 2;
  certs.forEach((cert, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    doc.text(cert, margin + col * colWidth, y + row * 12);
  });
  y += Math.ceil(certs.length / 2) * 12 + 2;

  // --- AUTOMATION PROJECTS ---
  drawSectionHeader('Automation Projects');
  
  const projects = [
    {
      title: '1. AI-Powered Facebook Customer Support & Lead Response Automation',
      desc: 'AI-powered Facebook Messenger automation system that instantly responds to customer inquiries, provides intelligent answers, qualifies potential leads, and sends qualified prospects to the sales team for follow-up—helping businesses improve response time, customer engagement, and lead conversion.',
      tech: 'Technologies: n8n, Gemini, Facebook',
    },
    {
      title: '2. AI-Powered Lead Qualification & Nurturing Automation',
      desc: 'AI-powered automation system that analyzes and qualifies leads based on their information and behavior, assigns lead priority, and automatically sends personalized follow-up messages to nurture prospects and improve conversion opportunities.',
      tech: 'Technologies: n8n, Gemini, Google Sheets, Apollo, Gmail, Slack',
    },
    {
      title: '3. AI Receptionist & Automated Appointment Management',
      desc: 'AI receptionist system that responds to customer inquiries, manages appointment scheduling, sends automated confirmations and reminders, and handles cancellations and rescheduling—reducing manual work and improving the overall customer experience.',
      tech: 'Technologies: n8n, Vapi, Airtable, Google Calendar',
    },
    {
      title: '4. Asana CRM Lead Management & Automated Engagement',
      desc: 'Automated lead management system that organizes prospects in Asana, tracks lead progress, triggers personalized follow-ups, and notifies the sales team of important lead activities—improving lead visibility, engagement, and follow-up efficiency.',
      tech: 'Technologies: Zapier, Asana, OpenAI, Slack',
    },
    {
      title: '5. Xero Financial Data Export & Asana Workflow Automation',
      desc: 'Automated workflow that exports financial transaction data from Xero and organizes it into Asana, enabling teams to track accounting-related tasks, streamline financial operations, and reduce manual data entry.',
      tech: 'Technologies: Make, Asana, Xero, Google Sheets',
    },
    {
      title: '6. Appointment Funnel & Lead Management Automation',
      desc: 'Automated appointment funnel that captures and manages leads, streamlines appointment booking, and triggers automated confirmations, reminders, cancellations, rescheduling, and no-show follow-ups—helping improve lead conversion and appointment management.',
      tech: 'Technologies: GoHighLevel',
    },
  ];

  projects.forEach((proj) => {
    checkPageBreak(44);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42); // #0f172a
    doc.text(proj.title, margin, y);
    y += 10.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(75, 85, 99);
    const descLines = doc.splitTextToSize(proj.desc, contentWidth);
    doc.text(descLines, margin, y);
    y += descLines.length * 10.5;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(217, 64, 0);
    doc.text(proj.tech, margin, y);
    y += 12;
  });

  // --- PROFESSIONAL EXPERIENCE ---
  drawSectionHeader('Professional Experience');

  const experiences = [
    {
      role: 'Freelance / Independent — AI Automation Specialist',
      date: '2026 – Present',
      bullets: [
        'Designed AI-powered workflow automations using n8n, Make.com, and Zapier.',
        'Integrated OpenAI and Anthropic models into client operations.',
        'Built API integrations and custom webhooks with 99% workflow uptime.',
      ],
    },
    {
      role: 'Performance Coach — Seidopro Global Inc',
      date: '2022 to 2026',
      desc: 'Responsible for monitoring and evaluating employee performance, providing coaching and constructive feedback, identifying performance gaps, creating improvement plans, conducting regular coaching sessions, and supporting team members in achieving their performance and productivity goals.',
    },
    {
      role: 'Assistant Supervisor — Seidopro Global Inc',
      date: '2020 - 2022',
      desc: 'Responsible for supporting daily operations, coordinating team activities, monitoring employee performance, assigning tasks, ensuring work quality and productivity, assisting with problem-solving, and providing guidance and support to team members to achieve operational goals.',
    },
    {
      role: 'Documentation Associate — Seidopro Global Inc',
      date: '2018 – 2020',
      desc: 'Responsible for preparing and verifying shipping documents, coordinating with freight forwarders, shipping lines, and internal teams, maintaining accurate shipment records, monitoring documentation requirements, and ensuring timely and error-free processing of shipments.',
    },
  ];

  experiences.forEach((exp) => {
    checkPageBreak(38);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(exp.role, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(107, 114, 128);
    doc.text(exp.date, pageWidth - margin, y, { align: 'right' });
    y += 10.5;

    if (exp.bullets) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(55, 65, 81);
      exp.bullets.forEach((b) => {
        doc.text(`•  ${b}`, margin + 6, y);
        y += 10;
      });
      y += 2;
    } else if (exp.desc) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(75, 85, 99);
      const descLines = doc.splitTextToSize(exp.desc, contentWidth);
      doc.text(descLines, margin, y);
      y += descLines.length * 10.5 + 4;
    }
  });

  // --- TOOLS AND TECHNOLOGIES ---
  drawSectionHeader('Tools and Technologies');
  
  const toolRows = [
    { label: 'Automation Platforms:', text: 'GoHighLevel | n8n | Zapier | Make.com' },
    { label: 'AI / LLM / AI Development:', text: 'OpenAI | Claude | Grok | Gemini | Vapi | LangChain | OpenRouter | Lovable' },
    { label: 'Business / CRM / Productivity:', text: 'Stripe | Airtable | Notion | Asana | Apollo.io | Slack | Telegram | WhatsApp' },
    { label: 'Google Workspace:', text: 'Google Workspace | Gmail | Google Calendar | Google Sheets' },
    { label: 'Technical / Integration Skills:', text: 'APIs & Webhooks | REST API Integrations | OAuth / Authentication | JSON Data Handling | LLM API Integration | CRM Integrations | Payment API Integration | Workflow Logic & Automation' },
  ];

  toolRows.forEach((row) => {
    checkPageBreak(22);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(217, 64, 0);
    doc.text(row.label, margin, y);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(31, 41, 55);
    const textLines = doc.splitTextToSize(row.text, contentWidth);
    y += 10;
    doc.text(textLines, margin + 8, y);
    y += textLines.length * 10.5 + 2;
  });

  // --- EDUCATION & LANGUAGE ---
  drawSectionHeader('Education & Language');
  checkPageBreak(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Bachelor in Business Management', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(75, 85, 99);
  doc.text('Taguig City University (2017)', margin + 160, y);
  y += 11;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('Languages:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(75, 85, 99);
  doc.text('English (Professional Working Proficiency), Filipino (Native)', margin + 60, y);

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
    link.download = 'Erwin_Panican_ATS_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  // Check localStorage for saved PDF
  try {
    const savedPdf = localStorage.getItem('erwin_resume_pdf_data');
    const savedName = localStorage.getItem('erwin_resume_filename') || 'Erwin_Panican_ATS_Resume.pdf';
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
    doc.save('Erwin_Panican_ATS_Resume.pdf');
  } catch (error) {
    console.error('Failed to generate PDF, fallback to download:', error);
  }
};
