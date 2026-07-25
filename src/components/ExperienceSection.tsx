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

  const toolbox = [
    'Zapier',
    'Make',
    'n8n',
    'GoHighLevel',
    'Pabbly Connect',
    'Google Apps Script',
    'JavaScript',
    'SQL',
    'OpenAI',
    'Anthropic',
    'HubSpot',
    'ActiveCampaign',
    'Airtable',
    'Notion',
    'Google Sheets',
    'REST APIs',
    'Webhooks',
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <div className="mb-12">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
            EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Where I've worked
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column Label */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest sticky top-28">
              TIMELINE
            </span>
          </div>

          {/* Right Column Timeline Content */}
          <div className="md:col-span-9 space-y-12 relative border-l border-slate-800/80 pl-6 sm:pl-8 ml-2 sm:ml-0">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                
                {/* Yellow Circle Dot Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-amber-400 bg-[#0B0F19] group-hover:bg-amber-400 transition-colors" />

                {/* Period Badge */}
                <span className="text-amber-400 text-xs font-semibold font-mono mb-1 block">
                  {exp.period}
                </span>

                {/* Role Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {exp.role}
                </h3>

                {/* Company Name */}
                <p className="text-sm font-medium text-gray-400 mb-4">
                  {exp.company}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 max-w-2xl">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <span className="text-amber-400 font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Toolbox Section */}
        <div className="pt-10 border-t border-slate-800/80">
          <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest block mb-4">
            TOOLBOX
          </span>

          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {toolbox.map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono text-gray-300 bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 hover:text-white transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
