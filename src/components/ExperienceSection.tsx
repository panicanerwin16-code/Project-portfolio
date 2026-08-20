import React from 'react';
import { TechBrandIcon } from './TechBrandIcons';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      period: '2026 — Present',
      role: 'AI Automation Specialist',
      company: 'Freelance / Independent',
      bullets: [
        'Built automated workflows in Make, n8n and Zapier connecting CRMs, databases and APIs.',
        'Integrated OpenAI and Anthropic models for data extraction, content generation and analysis.',
        'Designed custom webhooks and API connections for complex multi-step data syncing.',
        'Monitored and optimized active workflows, maintaining 99% system uptime.',
      ],
    },
    {
      period: '2018 — 2026',
      role: 'Documentation Associate',
      company: 'Seidopro Global Inc.',
      bullets: [
        'Prepared shipping documents (bill of lading, invoices, packing lists) with high accuracy.',
        'Verified shipment details and ensured compliance with customs and logistics regulations.',
        'Coordinated with internal teams, clients and partners for end-to-end document handling.',
        'Maintained organized records and resolved documentation issues quickly.',
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
          <span className="text-[#ff9000] text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
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
                
                {/* Crimson / Orange Circle Dot Node */}
                <div 
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#ff4500] shadow-[0_0_8px_#ff4500] group-hover:bg-[#ff9000] transition-colors"
                  style={{ backgroundColor: 'var(--bg-primary)' }}
                />

                {/* Period Badge */}
                <span className="text-[#ff9000] text-xs font-semibold font-mono mb-1 block">
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
                      <span className="text-[#ff4500] font-bold mt-0.5">•</span>
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
          className="pt-12 border-t overflow-hidden"
          style={{ borderColor: 'var(--border-color)' }}
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest block text-[#ff9000]">
                TOOLBOX & TECH STACK
              </span>
              <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                Platforms, APIs, AI models, and databases powering autonomous business pipelines
              </p>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono" style={{ color: 'var(--text-secondary)' }}>
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Bidirectional Marquee • Hover to Pause
              </span>
            </div>
          </div>

          {/* Integrated Production Stack Container */}
          <div 
            className="rounded-3xl border overflow-hidden p-4 sm:p-6 relative shadow-2xl transition-colors duration-300"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
            }}
          >
            {/* Top Status Header */}
            <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b text-[11px] font-mono" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span>PRODUCTION INTEGRATED STACK</span>
              </div>
              <div className="hidden sm:block tracking-wider uppercase" style={{ color: 'var(--text-secondary)' }}>
                26+ CERTIFIED CONNECTORS • ENTERPRISE GRADE
              </div>
            </div>

            {/* Marquee Track Container with Fade Masks */}
            <div className="relative w-full overflow-hidden py-2 space-y-3.5">
              {/* Left & Right Gradient Shadows for seamless edge fade */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, var(--bg-card) 0%, transparent 100%)',
                }}
              />
              <div 
                className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to left, var(--bg-card) 0%, transparent 100%)',
                }}
              />

              {/* Row 1: Moving Left to Right */}
              <div className="animate-marquee-right flex gap-3 sm:gap-3.5 items-center">
                {row1Marquee.map((item, idx) => (
                  <div
                    key={`r1-${item.name}-${idx}`}
                    className="group flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border transition-all duration-300 hover:scale-105 shrink-0 cursor-default select-none shadow-sm"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = item.color;
                      e.currentTarget.style.boxShadow = `0 0 20px ${item.color}33`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Brand Icon */}
                    <div 
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-inner"
                      style={{
                        backgroundColor: `${item.color}15`,
                        borderColor: `${item.color}35`,
                      }}
                    >
                      <TechBrandIcon name={item.name} className="w-5 h-5" color={item.color} />
                    </div>

                    {/* Details */}
                    <div className="text-left">
                      <span 
                        className="block font-mono text-xs sm:text-sm font-bold tracking-tight"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.displayName}
                      </span>
                      <span className="block text-[9px] sm:text-[10px] font-mono tracking-wider text-[#ff9000] uppercase font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: Moving Right to Left */}
              <div className="animate-marquee-left flex gap-3 sm:gap-3.5 items-center">
                {row2Marquee.map((item, idx) => (
                  <div
                    key={`r2-${item.name}-${idx}`}
                    className="group flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border transition-all duration-300 hover:scale-105 shrink-0 cursor-default select-none shadow-sm"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = item.color;
                      e.currentTarget.style.boxShadow = `0 0 20px ${item.color}33`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Brand Icon */}
                    <div 
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-inner"
                      style={{
                        backgroundColor: `${item.color}15`,
                        borderColor: `${item.color}35`,
                      }}
                    >
                      <TechBrandIcon name={item.name} className="w-5 h-5" color={item.color} />
                    </div>

                    {/* Details */}
                    <div className="text-left">
                      <span 
                        className="block font-mono text-xs sm:text-sm font-bold tracking-tight"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.displayName}
                      </span>
                      <span className="block text-[9px] sm:text-[10px] font-mono tracking-wider text-[#ff9000] uppercase font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-4 mt-4 border-t text-[11px] font-mono" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Custom Webhooks, REST API endpoints, OAuth 2.0 & LLM agent tool calling integrations.</span>
              </div>
              <div className="text-[#ff9000] font-semibold shrink-0">
                99.9% Pipeline Uptime SLA
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

