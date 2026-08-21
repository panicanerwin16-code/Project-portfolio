/**
 * Erwin Panican ATS Resume PDF Generator / Downloader Utility
 * Generates and triggers instant browser download of 'Erwin_Panican_ATS_Resume.pdf'
 */

export const downloadATSResumeFile = (customPdfDataUrl?: string | null) => {
  // If user has uploaded a custom PDF, download it directly
  if (customPdfDataUrl) {
    const link = document.createElement('a');
    link.href = customPdfDataUrl;
    link.download = 'Erwin_Panican_ATS_Resume.docx (1).pdf';
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
      link.download = savedName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
  } catch {
    // ignore
  }

  // Generate ATS PDF via HTML Document Download
  const atsHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Erwin Panican - AI Automation Specialist Resume</title>
<style>
  @page {
    size: letter portrait;
    margin: 14mm 14mm 14mm 14mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #111827;
    background: #ffffff;
    line-height: 1.42;
    font-size: 10pt;
  }
  .header {
    text-align: center;
    border-bottom: 2pt solid #ff5000;
    padding-bottom: 8px;
    margin-bottom: 12px;
  }
  .name {
    font-size: 20pt;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #0f172a;
    text-transform: uppercase;
  }
  .title {
    font-size: 10.5pt;
    font-weight: 700;
    color: #d94000;
    margin-top: 2px;
    letter-spacing: 0.3px;
  }
  .contact-bar {
    font-size: 8.5pt;
    color: #4b5563;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .contact-bar a {
    color: #4b5563;
    text-decoration: none;
  }
  .section-title {
    font-size: 10.5pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #d94000;
    border-bottom: 1pt solid #e5e7eb;
    padding-bottom: 2px;
    margin-top: 11px;
    margin-bottom: 6px;
  }
  .summary {
    font-size: 9.2pt;
    color: #374151;
    line-height: 1.4;
    text-align: justify;
  }
  .competencies-box {
    font-size: 8.8pt;
    color: #1f2937;
    font-weight: 600;
    background: #fef3c7;
    padding: 6px 10px;
    border-radius: 4px;
    border-left: 3px solid #f59e0b;
    margin-top: 4px;
  }
  .cert-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3px 12px;
    font-size: 8.8pt;
  }
  .cert-item {
    color: #1f2937;
    font-weight: 600;
  }
  .project-card, .job-card {
    margin-bottom: 7px;
  }
  .project-head, .job-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 9.2pt;
  }
  .project-title, .job-title {
    font-weight: 700;
    color: #0f172a;
  }
  .job-date {
    font-size: 8.2pt;
    color: #6b7280;
    font-family: monospace;
    font-weight: 600;
  }
  .project-desc, .job-desc {
    font-size: 8.8pt;
    color: #4b5563;
    margin-top: 1px;
  }
  .project-tech {
    font-size: 8.2pt;
    color: #d94000;
    font-family: monospace;
    font-weight: 600;
    margin-top: 1px;
  }
  ul.bullets {
    padding-left: 16px;
    margin-top: 2px;
    font-size: 8.8pt;
    color: #374151;
  }
  ul.bullets li {
    margin-bottom: 1.5px;
  }
  .tools-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 12px;
    font-size: 8.5pt;
  }
  .tool-row strong {
    color: #111827;
  }
  .tool-row span {
    color: #4b5563;
  }
  .edu-row {
    display: flex;
    justify-content: space-between;
    font-size: 8.8pt;
  }
</style>
</head>
<body>
  <div class="header">
    <div class="name">Erwin Panican</div>
    <div class="title">AI Automation Specialist | n8n • Zapier • Make • GoHighLevel</div>
    <div class="contact-bar">
      <span>📍 Manila, Philippines</span>
      <span>📞 +63 915300090</span>
      <span>✉️ panicanerwin16@gmail.com</span>
      <span>🔗 linkedin.com/in/erwinpanican</span>
      <span>🌐 onlinejobs.ph/jobseekers/info/5106135</span>
      <span>⚡ upwork.com/freelancers/~01c544a89e40992a44</span>
    </div>
  </div>

  <div class="section-title">Professional Summary</div>
  <div class="summary">
    AI Automation Specialist with expertise in designing and implementing intelligent workflow automation using <strong>n8n, Zapier, Make.com, and GoHighLevel</strong>. Experienced in API integrations, AI agents, CRM automation, webhooks, and business process optimization. Skilled at building scalable automation solutions that reduce manual work, improve operational efficiency, and support business growth through AI-powered workflows.
  </div>

  <div class="section-title">Core Competencies</div>
  <div class="competencies-box">
    • Workflow Automation • AI Agents • CRM Architecture • GoHighLevel • n8n • Zapier • Make.com • API Integrations • Webhooks • Lead Routing • SOP Documentation
  </div>

  <div class="section-title">Certification</div>
  <div class="cert-list">
    <div class="cert-item">• Zapier Automation Certification</div>
    <div class="cert-item">• Make.com Automation Certification</div>
    <div class="cert-item">• n8n Workflow Automation Certification</div>
    <div class="cert-item">• GoHighLevel Certification</div>
  </div>

  <div class="section-title">Automation Projects</div>
  
  <div class="project-card">
    <div class="project-head">
      <div class="project-title">1. AI-Powered Facebook Customer Support & Lead Response Automation</div>
    </div>
    <div class="project-desc">AI-powered Facebook Messenger automation system that instantly responds to customer inquiries, provides intelligent answers, qualifies potential leads, and sends qualified prospects to the sales team for follow-up—helping businesses improve response time, customer engagement, and lead conversion.</div>
    <div class="project-tech">Technologies: n8n, Gemini, Facebook</div>
  </div>

  <div class="project-card">
    <div class="project-head">
      <div class="project-title">2. AI-Powered Lead Qualification & Nurturing Automation</div>
    </div>
    <div class="project-desc">AI-powered automation system that analyzes and qualifies leads based on their information and behavior, assigns lead priority, and automatically sends personalized follow-up messages to nurture prospects and improve conversion opportunities.</div>
    <div class="project-tech">Technologies: n8n, Gemini, Google Sheets, Apollo, Gmail, Slack</div>
  </div>

  <div class="project-card">
    <div class="project-head">
      <div class="project-title">3. AI Receptionist & Automated Appointment Management</div>
    </div>
    <div class="project-desc">AI receptionist system that responds to customer inquiries, manages appointment scheduling, sends automated confirmations and reminders, and handles cancellations and rescheduling—reducing manual work and improving the overall customer experience.</div>
    <div class="project-tech">Technologies: n8n, Vapi, Airtable, Google Calendar</div>
  </div>

  <div class="project-card">
    <div class="project-head">
      <div class="project-title">4. Asana CRM Lead Management & Automated Engagement</div>
    </div>
    <div class="project-desc">Automated lead management system that organizes prospects in Asana, tracks lead progress, triggers personalized follow-ups, and notifies the sales team of important lead activities—improving lead visibility, engagement, and follow-up efficiency.</div>
    <div class="project-tech">Technologies: Zapier, Asana, OpenAI, Slack</div>
  </div>

  <div class="project-card">
    <div class="project-head">
      <div class="project-title">5. Xero Financial Data Export & Asana Workflow Automation</div>
    </div>
    <div class="project-desc">Automated workflow that exports financial transaction data from Xero and organizes it into Asana, enabling teams to track accounting-related tasks, streamline financial operations, and reduce manual data entry.</div>
    <div class="project-tech">Technologies: Make, Asana, Xero, Google Sheets</div>
  </div>

  <div class="project-card">
    <div class="project-head">
      <div class="project-title">6. Appointment Funnel & Lead Management Automation</div>
    </div>
    <div class="project-desc">Automated appointment funnel that captures and manages leads, streamlines appointment booking, and triggers automated confirmations, reminders, cancellations, rescheduling, and no-show follow-ups—helping improve lead conversion and appointment management.</div>
    <div class="project-tech">Technologies: GoHighLevel</div>
  </div>

  <div class="section-title">Professional Experience</div>
  <div class="job-card">
    <div class="job-head">
      <div class="job-title">Freelance / Independent — AI Automation Specialist</div>
      <div class="job-date">2026 – Present</div>
    </div>
    <ul class="bullets">
      <li>Designed AI-powered workflow automations using n8n, Make.com, and Zapier.</li>
      <li>Integrated OpenAI and Anthropic models.</li>
      <li>Built API integrations and custom webhooks.</li>
      <li>Maintained 99% workflow uptime.</li>
    </ul>
  </div>

  <div class="job-card">
    <div class="job-head">
      <div class="job-title">Performance Coach — Seidopro Global Inc</div>
      <div class="job-date">2022 to 2026</div>
    </div>
    <div class="job-desc">Responsible for monitoring and evaluating employee performance, providing coaching and constructive feedback, identifying performance gaps, creating improvement plans, conducting regular coaching sessions, and supporting team members in achieving their performance and productivity goals.</div>
  </div>

  <div class="job-card">
    <div class="job-head">
      <div class="job-title">Assistant Supervisor — Seidopro Global Inc</div>
      <div class="job-date">2020 - 2022</div>
    </div>
    <div class="job-desc">Responsible for supporting daily operations, coordinating team activities, monitoring employee performance, assigning tasks, ensuring work quality and productivity, assisting with problem-solving, and providing guidance and support to team members to achieve operational goals.</div>
  </div>

  <div class="job-card">
    <div class="job-head">
      <div class="job-title">Documentation Associate — Seidopro Global Inc</div>
      <div class="job-date">2018 – 2020</div>
    </div>
    <div class="job-desc">Responsible for preparing and verifying shipping documents, coordinating with freight forwarders, shipping lines, and internal teams, maintaining accurate shipment records, monitoring documentation requirements, and ensuring timely and error-free processing of shipments.</div>
  </div>

  <div class="section-title">Tools and Technologies</div>
  <div class="tools-grid">
    <div class="tool-row"><strong>Automation Platforms:</strong> <span>GoHighLevel | n8n | Zapier | Make.com</span></div>
    <div class="tool-row"><strong>AI / LLM / AI Development:</strong> <span>OpenAI | Claude | Grok | Gemini | Vapi | LangChain | OpenRouter | Lovable</span></div>
    <div class="tool-row"><strong>Business / CRM / Productivity:</strong> <span>Stripe | Airtable | Notion | Asana | Apollo.io | Slack | Telegram | WhatsApp</span></div>
    <div class="tool-row"><strong>Google Workspace:</strong> <span>Google Workspace | Gmail | Google Calendar | Google Sheets</span></div>
    <div class="tool-row" style="grid-column: span 2;"><strong>Technical / Integration Skills:</strong> <span>APIs & Webhooks | REST API Integrations | OAuth / Authentication | JSON Data Handling | LLM API Integration | CRM Integrations | Payment API Integration | Workflow Logic & Automation</span></div>
  </div>

  <div class="section-title">Education & Language</div>
  <div class="edu-row">
    <div><strong>Bachelor in Business Management</strong> — Taguig City University (2017)</div>
    <div><strong>Languages:</strong> English (Professional Working), Filipino (Native)</div>
  </div>
</body>
</html>`;

  const blob = new Blob([atsHtmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  // Trigger download of the HTML/ATS document
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'Erwin_Panican_ATS_Resume.html';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
};
