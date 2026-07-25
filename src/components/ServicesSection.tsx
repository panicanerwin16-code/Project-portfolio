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
    <section id="services" className="py-20 md:py-28 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow and Header */}
        <div className="mb-10">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
            SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
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
                className="bg-[#111827]/90 border border-slate-800 hover:border-slate-700 p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {item.checklist.map((point, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
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
