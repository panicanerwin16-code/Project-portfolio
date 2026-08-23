import React from 'react';
import {
  Link2,
  Bot,
  Plug,
  Database,
  CheckCircle2,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'workflow-ai-automation',
      title: 'Workflow and AI Automation',
      description:
        'End-to-end Zapier, Make, n8n and Pabbly automations that replace manual, repetitive work.',
      icon: Link2,
      checklist: [
        'Multi-step Zaps & scenarios',
        'Error handling & retries',
        'Cost-optimized builds',
      ],
    },
    {
      id: 'ai-agents-integrations',
      title: 'AI Agents & Integrations',
      description:
        'OpenAI and Anthropic integrations for enrichment, content, classification and chat agents.',
      icon: Bot,
      checklist: [
        'AI receptionists',
        'Content repurposing',
        'Lead enrichment pipelines',
      ],
    },
    {
      id: 'api-webhook-engineering',
      title: 'API & Webhook Engineering',
      description:
        'Custom webhooks, REST APIs and Google Apps Script glue code when no-code isn\'t enough.',
      icon: Plug,
      checklist: [
        'Custom REST connectors',
        'Webhooks & syncing',
        'Apps Script & JavaScript',
      ],
    },
    {
      id: 'crm-ops-systems',
      title: 'CRM & Ops Systems',
      description:
        'GoHighLevel, HubSpot and ActiveCampaign setups wired into your data and reporting.',
      icon: Database,
      checklist: [
        'GHL sub-account builds',
        'Pipeline automation',
        'Airtable / Notion ops hubs',
      ],
    },
  ];

  return (
    <section 
      id="services" 
      className="py-20 md:py-28 relative transition-colors duration-300 bg-crimson-grid"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow and Header */}
        <div className="mb-10 text-left">
          <span className="text-[#f59e0b] text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
            SERVICES
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            What I build for you
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => {
                  if (onSelectService) {
                    onSelectService({
                      id: item.id,
                      title: item.title,
                      description: item.description,
                      iconName: 'Zap',
                      deliverables: item.checklist,
                      tools: ['n8n', 'Zapier', 'Make', 'OpenAI'],
                      category: 'workflow',
                    });
                  }
                }}
                className="card-crimson-glow p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-xl"
                style={{
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[#f59e0b] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#f97316] transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold mb-3 tracking-tight group-hover:text-[#f59e0b] transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-xs sm:text-sm leading-relaxed mb-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Checklist */}
                <div className="space-y-2.5 pt-4 border-dotted-crimson">
                  {item.checklist.map((point, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                      <CheckCircle2 className="w-4 h-4 text-[#f59e0b] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

