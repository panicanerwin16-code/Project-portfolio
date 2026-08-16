import React from 'react';

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

  const toolboxItems = [
    {
      name: 'n8n',
      category: 'Workflow Engine',
      color: '#EA4B71',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="5" width="6" height="6" rx="2" fill="#FF6D5A" />
          <rect x="16" y="5" width="6" height="6" rx="2" fill="#EA4B71" />
          <rect x="9" y="13" width="6" height="6" rx="2" fill="#FF4F7A" />
          <path d="M8 8h8M5 11v3a2 2 0 002 2h2M19 11v3a2 2 0 01-2 2h-2" stroke="#EA4B71" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Zapier',
      category: 'Integration',
      color: '#FF4F00',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#FF4F00" fillOpacity="0.15" />
          <path d="M12 4v16M4 12h16M6.34 6.34l11.32 11.32M6.34 17.66L17.66 6.34" stroke="#FF4F00" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Make',
      category: 'Visual Automation',
      color: '#A855F7',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M4 8l4-4 4 4-4 4-4-4z" fill="#6D28D9" />
          <path d="M12 8l4-4 4 4-4 4-4-4z" fill="#9333EA" />
          <path d="M8 12l4-4 4 4-4 4-4-4z" fill="#A855F7" />
          <path d="M12 16l4-4 4 4-4 4-4-4z" fill="#C084FC" />
          <path d="M4 16l4-4 4 4-4 4-4-4z" fill="#7E22CE" />
        </svg>
      ),
    },
    {
      name: 'GoHighLevel',
      category: 'CRM & Marketing',
      color: '#0084FF',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#1877F2" fillOpacity="0.15" />
          <path d="M6 16l4-4-4-4h3l4 4-4 4H6zm7 0l4-4-4-4h3l4 4-4 4h-3z" fill="#0084FF" />
        </svg>
      ),
    },
    {
      name: 'OpenAI',
      category: 'LLM Intelligence',
      color: '#10A37F',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.5 10c0-1.7-.9-3.2-2.3-4-.4-1.5-1.7-2.6-3.2-2.8-1.5-.2-3 .4-4 1.5-1.4-.4-2.9 0-4 1-1 1-1.5 2.5-1.2 3.9C3.6 10.3 3 11.6 3 13c0 1.7.9 3.2 2.3 4 .4 1.5 1.7 2.6 3.2 2.8 1.5.2 3-.4 4-1.5 1.4.4 2.9 0 4-1 1-1 1.5-2.5 1.2-3.9 1.2-.7 1.8-2 1.8-3.4z"/>
          <path d="M12 8.5v7M9 10.5l6 3M9 13.5l6-3"/>
        </svg>
      ),
    },
    {
      name: 'Anthropic',
      category: 'Claude AI',
      color: '#D97706',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#D97706" fillOpacity="0.15" />
          <path d="M12 4l1.8 5.2L19 11l-5.2 1.8L12 18l-1.8-5.2L5 11l5.2-1.8L12 4z" fill="#D97706" />
        </svg>
      ),
    },
    {
      name: 'HubSpot',
      category: 'CRM Platform',
      color: '#FF7A59',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M17 11V8.5a2.5 2.5 0 10-2.5 2.5h.5V11a5 5 0 01-3 4.58V12a2 2 0 10-2 0v3.58A5 5 0 017 11v-.5H7.5A2.5 2.5 0 105 8v3a7 7 0 005 6.7V20a2 2 0 104 0v-2.3A7 7 0 0019 11h-2z" fill="#FF7A59"/>
        </svg>
      ),
    },
    {
      name: 'ActiveCampaign',
      category: 'Marketing Auto',
      color: '#356AE6',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#356AE6" fillOpacity="0.15" />
          <path d="M6 15l4-6h3l-4 6H6zm6 0l4-6h3l-4 6h-3z" fill="#356AE6" />
        </svg>
      ),
    },
    {
      name: 'Airtable',
      category: 'Relational DB',
      color: '#FCB400',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M11.5 3.5l9 4.5-8.5 4.5-9-4.5 8.5-4.5z" fill="#FCB400" />
          <path d="M11 13.5v7l-8-4v-7l8 4z" fill="#18BFFF" />
          <path d="M13 13.5l8-4v7l-8 4v-7z" fill="#F82B60" />
        </svg>
      ),
    },
    {
      name: 'Notion',
      category: 'Workspace',
      color: '#ffffff',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 7.5l7 1.5v7.5l-7-1.5V7.5z" fill="currentColor" fillOpacity="0.2" />
          <path d="M8 7v10l3.5-1v-8L16 17V7l-3.5 1v8L8 7z" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Google Sheets',
      category: 'Spreadsheets',
      color: '#0F9D58',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="2" width="16" height="20" rx="3" fill="#0F9D58" />
          <path d="M8 8h8v2H8V8zm0 3h8v2H8v-2zm0 3h8v2H8v-2z" fill="#FFFFFF" />
          <path d="M11 8v8M14 8v8" stroke="#0B8043" strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      name: 'Google Apps Script',
      category: 'Cloud Scripting',
      color: '#4285F4',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M7 8l-4 4 4 4M17 8l4 4-4 4" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 4l-4 16" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      category: 'Custom Logic',
      color: '#F7DF1E',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7.5 11v5c0 1.5-.8 2-2 2h-.5v-1.5h.3c.6 0 .7-.2.7-.8V11h1.5zm9 0c-1.5 0-2.3.8-2.3 2 0 1.5 1.2 1.8 2.3 2.1.8.2 1 .5 1 .9 0 .5-.4.8-1 .8-.8 0-1.2-.4-1.3-1.1h-1.5c.1 1.5 1.1 2.3 2.8 2.3 1.6 0 2.6-.8 2.6-2.1 0-1.4-1-1.8-2.2-2.1-.8-.2-1.1-.4-1.1-.9 0-.4.4-.7 1-.7.6 0 1 .3 1.1.9h1.4c-.1-1.3-1-2.2-2.8-2.2z" fill="#000000" />
        </svg>
      ),
    },
    {
      name: 'SQL & Databases',
      category: 'Database Querying',
      color: '#336791',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" fill="#336791" fillOpacity="0.2"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
    },
    {
      name: 'Pabbly Connect',
      category: 'App Integrator',
      color: '#00C49F',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="12" r="3" fill="#00C49F" />
          <circle cx="18" cy="6" r="3" fill="#00C49F" />
          <circle cx="18" cy="18" r="3" fill="#00C49F" />
          <path d="M8.5 10.5l7-3M8.5 13.5l7 3" stroke="#00C49F" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'REST APIs',
      category: 'API Protocols',
      color: '#F97316',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#F97316" fillOpacity="0.15" />
          <path d="M5 8l3-3 3 3M19 16l-3 3-3-3M8 5v8a3 3 0 003 3h5" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'Webhooks',
      category: 'Event Triggers',
      color: '#EC4899',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#EC4899" fillOpacity="0.15" />
          <path d="M12 4v4m0 0a4 4 0 014 4v4a4 4 0 01-8 0v-4a4 4 0 014-4zm0 0V4" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="16" r="1.5" fill="#EC4899" />
        </svg>
      ),
    },
  ];

  // Duplicate for seamless infinite rightward marquee
  const marqueeList = [...toolboxItems, ...toolboxItems];

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

        {/* Toolbox Section with Animated Marquee moving to the right */}
        <div 
          className="pt-12 border-t overflow-hidden"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest block text-[#ff9000]">
                TOOLBOX & TECH STACK
              </span>
              <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                Platforms, APIs, and AI models powering end-to-end autonomous workflows
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono" style={{ color: 'var(--text-secondary)' }}>
              <span className="w-2 h-2 rounded-full bg-[#ff4500] animate-ping" />
              <span>Moving Right • Hover to Pause</span>
            </div>
          </div>

          {/* Marquee Track with Edge Gradients */}
          <div className="relative w-full overflow-hidden py-3">
            {/* Left & Right Gradient Shadows for seamless edge fade */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, var(--bg-primary) 0%, transparent 100%)',
              }}
            />
            <div 
              className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to left, var(--bg-primary) 0%, transparent 100%)',
              }}
            />

            {/* Row 1 Moving Right */}
            <div className="animate-marquee-right flex gap-3 sm:gap-4 items-center">
              {marqueeList.map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl border transition-all duration-300 hover:scale-105 shrink-0 cursor-default select-none shadow-md"
                  style={{
                    backgroundColor: 'var(--bg-card)',
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
                  {/* Tool Perspective Logo Icon Container */}
                  <div 
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      backgroundColor: `${item.color}15`,
                      borderColor: `${item.color}40`,
                    }}
                  >
                    {item.logo}
                  </div>

                  {/* Tool Details */}
                  <div className="text-left">
                    <span 
                      className="block font-mono text-xs sm:text-sm font-black tracking-tight"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.name}
                    </span>
                    <span className="block text-[10px] font-mono tracking-wider text-[#ff9000] uppercase">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 Moving Right (Offset reversed list for visual depth) */}
            <div className="animate-marquee-right-fast flex gap-3 sm:gap-4 items-center mt-3 sm:mt-4">
              {[...marqueeList].reverse().map((item, idx) => (
                <div
                  key={`rev-${item.name}-${idx}`}
                  className="group flex items-center gap-3 px-4 py-2 rounded-2xl border transition-all duration-300 hover:scale-105 shrink-0 cursor-default select-none shadow-md"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
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
                  {/* Tool Perspective Logo Icon Container */}
                  <div 
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    style={{
                      backgroundColor: `${item.color}15`,
                      borderColor: `${item.color}40`,
                    }}
                  >
                    {item.logo}
                  </div>

                  {/* Tool Details */}
                  <div className="text-left">
                    <span 
                      className="block font-mono text-xs font-bold tracking-tight"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
