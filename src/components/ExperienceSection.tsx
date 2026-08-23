import React from 'react';
import { TechBrandIcon } from './TechBrandIcons';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      period: '2026 — Present',
      role: 'AI Automation Specialist',
      company: 'Freelance / Independent',
      bullets: [
        'Designed AI-powered workflow automations using n8n, Make.com, and Zapier.',
        'Integrated OpenAI and Anthropic models.',
        'Built API integrations and custom webhooks.',
        'Maintained 99% workflow uptime.',
      ],
    },
    {
      period: '2022 — 2026',
      role: 'Performance Coach',
      company: 'SeidoPro Global Inc.',
      bullets: [
        'Responsible for monitoring and evaluating employee performance, providing coaching and constructive feedback, identifying performance gaps, creating improvement plans, conducting regular coaching sessions, and supporting team members in achieving their performance and productivity goals.',
      ],
    },
    {
      period: '2020 — 2022',
      role: 'Assistant Supervisor',
      company: 'SeidoPro Global Inc.',
      bullets: [
        'Responsible for supporting daily operations, coordinating team activities, monitoring employee performance, assigning tasks, ensuring work quality and productivity, assisting with problem-solving, and providing guidance and support to team members to achieve operational goals.',
      ],
    },
    {
      period: '2018 — 2020',
      role: 'Documentation Associate',
      company: 'SeidoPro Global Inc.',
      bullets: [
        'Responsible for preparing and verifying shipping documents, coordinating with freight forwarders, shipping lines, and internal teams, maintaining accurate shipment records, monitoring documentation requirements, and ensuring timely and error-free processing of shipments.',
      ],
    },
  ];

  // Row 1 Tools (Moving from Left to Right)
  const leftToRightTools = [
    { name: 'GoHighLevel', displayName: 'GoHighLevel', category: 'CRM & GROWTH', color: '#1877F2' },
    { name: 'n8n', displayName: 'n8n', category: 'WORKFLOW ENGINE', color: '#EA4B71' },
    { name: 'Zapier', displayName: 'Zapier', category: 'AUTOMATION', color: '#FF4F00' },
    { name: 'Make.com', displayName: 'Make.com', category: 'INTEGRATION', color: '#A855F7' },
    { name: 'Stripe', displayName: 'Stripe', category: 'PAYMENT GATEWAY', color: '#635BFF' },
    { name: 'OpenAI', displayName: 'OpenAI', category: 'AI & LLM', color: '#10A37F' },
    { name: 'Claude', displayName: 'Claude', category: 'AI & LLM', color: '#D97706' },
    { name: 'Grok', displayName: 'Grok', category: 'AI & LLM', color: '#FFFFFF' },
    { name: 'Gemini', displayName: 'Gemini', category: 'AI & LLM', color: '#4E8CFF' },
    { name: 'Lovable', displayName: 'Lovable', category: 'AI APP BUILDER', color: '#FF4F7A' },
    { name: 'Vapi', displayName: 'Vapi', category: 'VOICE AI', color: '#A855F7' },
    { name: 'LangChain', displayName: 'LangChain', category: 'AI FRAMEWORK', color: '#10B981' },
    { name: 'OpenRouter', displayName: 'OpenRouter', category: 'AI GATEWAY', color: '#14B8A6' },
  ];

  // Row 2 Tools (Moving from Right to Left)
  const rightToLeftTools = [
    { name: 'Canva', displayName: 'Canva', category: 'DESIGN & ASSETS', color: '#00C4CC' },
    { name: 'Gmail', displayName: 'Gmail', category: 'EMAIL DISPATCH', color: '#EA4335' },
    { name: 'Google Workspace', displayName: 'Google Workspace', category: 'ECOSYSTEM', color: '#4285F4' },
    { name: 'Google Docs', displayName: 'Google Docs', category: 'DOCUMENT GEN', color: '#4285F4' },
    { name: 'Google Sheets', displayName: 'Google Sheets', category: 'DATA & SYNC', color: '#0F9D58' },
    { name: 'Google Calendar', displayName: 'Google Calendar', category: 'SCHEDULING', color: '#4285F4' },
    { name: 'Slack', displayName: 'Slack', category: 'TEAM CHAT', color: '#E01E5A' },
    { name: 'Telegram', displayName: 'Telegram', category: 'BOT AUTOMATION', color: '#229ED9' },
    { name: 'WhatsApp', displayName: 'WhatsApp', category: 'MESSAGING API', color: '#25D366' },
    { name: 'Airtable', displayName: 'Airtable', category: 'RELATIONAL DB', color: '#FCB400' },
    { name: 'Notion', displayName: 'Notion', category: 'KNOWLEDGE BASE', color: '#FFFFFF' },
    { name: 'Asana', displayName: 'Asana', category: 'PROJECT MGMT', color: '#F06A6A' },
    { name: 'Apollo.io', displayName: 'Apollo.io', category: 'LEAD INTELLIGENCE', color: '#7C3AED' },
  ];

  // Duplicated arrays for seamless infinite marquee wrap
  const row1Marquee = [...leftToRightTools, ...leftToRightTools];
  const row2Marquee = [...rightToLeftTools, ...rightToLeftTools];

  return (
    <section 
      id="experience" 
      className="py-20 md:py-28 relative transition-colors duration-300 bg-crimson-grid"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow & Title */}
        <div className="mb-12 text-left">
          <span className="text-[#f59e0b] text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
            EXPERIENCE
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Where I've worked
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column Label */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest sticky top-28" style={{ color: 'var(--text-secondary)' }}>
              TIMELINE
            </span>
          </div>

          {/* Right Column Timeline Content */}
          <div 
            className="md:col-span-9 space-y-12 relative border-l pl-6 sm:pl-8 ml-2 sm:ml-0"
            style={{ borderColor: 'var(--border-color)' }}
          >
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                
                {/* Amber / Golden Sand Dot Node */}
                <div 
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#f97316] shadow-[0_0_8px_#f97316] group-hover:bg-[#f59e0b] transition-colors"
                  style={{ backgroundColor: 'var(--bg-primary)' }}
                />

                {/* Period Badge */}
                <span className="text-[#f59e0b] text-xs font-semibold font-mono mb-1 block">
                  {exp.period}
                </span>

                {/* Role Title */}
                <h3 
                  className="text-2xl font-bold tracking-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {exp.role}
                </h3>

                {/* Company Name */}
                <p 
                  className="text-sm font-medium mb-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {exp.company}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 max-w-2xl">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      <span className="text-[#f97316] font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Toolbox & Tech Stack Section with Bidirectional Animated Marquees */}
        <div 
          className="pt-14 border-t overflow-hidden"
          style={{ borderColor: 'var(--border-color)' }}
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest block text-[#f59e0b]">
                TOOLBOX & TECH STACK
              </span>
              <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                Platforms, APIs, AI models, and databases powering autonomous business pipelines
              </p>
            </div>
            <div className="flex items-center gap-3 text-[11px] sm:text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
              <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Bidirectional Marquee • Hover to Pause
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width / Ultra-Wide Production Stack Marquee Canvas */}
      <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div 
          className="rounded-3xl border overflow-hidden p-5 sm:p-7 md:p-8 relative shadow-2xl transition-colors duration-300 backdrop-blur-md"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          {/* Top Status Header */}
          <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b text-xs sm:text-sm font-mono" style={{ borderColor: 'var(--border-color)' }}>
            <div className="flex items-center gap-2.5 text-emerald-400 font-bold tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
              <span>PRODUCTION INTEGRATED STACK</span>
            </div>
            <div className="hidden sm:block text-xs tracking-wider uppercase font-semibold" style={{ color: 'var(--text-secondary)' }}>
              26+ CERTIFIED CONNECTORS • ENTERPRISE GRADE
            </div>
          </div>

          {/* Marquee Track Container with Fade Masks */}
          <div className="relative w-full overflow-hidden py-3 space-y-5">
            {/* Left & Right Gradient Shadows for seamless edge fade */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 lg:w-44 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, var(--bg-card) 0%, transparent 100%)',
              }}
            />
            <div 
              className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 lg:w-44 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to left, var(--bg-card) 0%, transparent 100%)',
              }}
            />

            {/* Row 1: Moving Left to Right */}
            <div className="animate-marquee-right flex gap-4 sm:gap-5 items-center">
              {row1Marquee.map((item, idx) => (
                <div
                  key={`r1-${item.name}-${idx}`}
                  className="group flex items-center gap-3.5 sm:gap-4 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl border transition-all duration-300 hover:scale-105 shrink-0 cursor-default select-none shadow-md"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.boxShadow = `0 0 24px ${item.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Brand Icon */}
                  <div 
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-inner"
                    style={{
                      backgroundColor: `${item.color}15`,
                      borderColor: `${item.color}35`,
                    }}
                  >
                    <TechBrandIcon name={item.name} className="w-6 h-6 sm:w-7 sm:h-7" color={item.color} />
                  </div>

                  {/* Details */}
                  <div className="text-left">
                    <span 
                      className="block font-mono text-sm sm:text-base font-extrabold tracking-tight"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.displayName}
                    </span>
                    <span className="block text-[10px] sm:text-xs font-mono tracking-wider text-[#ff9000] uppercase font-bold mt-0.5">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Moving Right to Left */}
            <div className="animate-marquee-left flex gap-4 sm:gap-5 items-center">
              {row2Marquee.map((item, idx) => (
                <div
                  key={`r2-${item.name}-${idx}`}
                  className="group flex items-center gap-3.5 sm:gap-4 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl border transition-all duration-300 hover:scale-105 shrink-0 cursor-default select-none shadow-md"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.boxShadow = `0 0 24px ${item.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Brand Icon */}
                  <div 
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-inner"
                    style={{
                      backgroundColor: `${item.color}15`,
                      borderColor: `${item.color}35`,
                    }}
                  >
                    <TechBrandIcon name={item.name} className="w-6 h-6 sm:w-7 sm:h-7" color={item.color} />
                  </div>

                  {/* Details */}
                  <div className="text-left">
                    <span 
                      className="block font-mono text-sm sm:text-base font-extrabold tracking-tight"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.displayName}
                    </span>
                    <span className="block text-[10px] sm:text-xs font-mono tracking-wider text-[#ff9000] uppercase font-bold mt-0.5">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Status Footer */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-5 mt-5 border-t text-xs sm:text-sm font-mono" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Custom Webhooks, REST API endpoints, OAuth 2.0 & LLM agent tool calling integrations.</span>
            </div>
            <div className="text-[#ff9000] font-bold shrink-0">
              99.9% Pipeline Uptime SLA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

