import React from 'react';

interface BrandIconProps {
  name: string;
  className?: string;
  color?: string;
}

export const TechBrandIcon: React.FC<BrandIconProps> = ({ name, className = "w-5 h-5", color }) => {
  switch (name.toLowerCase()) {
    case 'n8n':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
          <circle cx="18" cy="6" r="3" fill="currentColor" fillOpacity="0.2" />
          <circle cx="18" cy="18" r="3" fill="currentColor" fillOpacity="0.2" />
          <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
          <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
        </svg>
      );

    case 'openai':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 0-7.38 16.75l1.42-1.42A8 8 0 1 1 20 12c0 2.21-.9 4.21-2.35 5.65l1.42 1.42A10 10 0 0 0 12 2z" />
          <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );

    case 'make':
    case 'make.com':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor" fillOpacity="0.3" />
          <rect x="14" y="3" width="7" height="7" rx="2" />
          <rect x="14" y="14" width="7" height="7" rx="2" fill="currentColor" fillOpacity="0.3" />
          <rect x="3" y="14" width="7" height="7" rx="2" />
        </svg>
      );

    case 'zapier':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );

    case 'gohighlevel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5L12 3l7.5 13.5H4.5z" fill="currentColor" fillOpacity="0.2" />
          <path d="M12 12v6" />
          <circle cx="12" cy="20" r="1" fill="currentColor" />
        </svg>
      );

    case 'gemini':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12 7.5 7.5 12 2 12c5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z" />
        </svg>
      );

    case 'hubspot':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
          <circle cx="19" cy="8" r="2" />
          <circle cx="5" cy="16" r="2" />
          <line x1="8.5" y1="14" x2="6.5" y2="15" />
          <line x1="15.5" y1="10" x2="17.5" y2="9" />
        </svg>
      );

    case 'twilio':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-3 7a2 2 0 110 4 2 2 0 010-4zm6 0a2 2 0 110 4 2 2 0 010-4zm-3 6a2 2 0 110 4 2 2 0 010-4z" />
        </svg>
      );

    case 'claude':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
        </svg>
      );

    case 'supabase':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.35 2.1a1 1 0 0 0-1.63.13L2.3 16.5A1 1 0 0 0 3.12 18h7.24L8.7 22.4a1 1 0 0 0 1.63-.13l9.42-14.27A1 1 0 0 0 18.93 6.5h-7.24l1.66-4.4z" />
        </svg>
      );

    case 'airtable':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6l9-3 9 3-9 3-9-3z" fill="currentColor" fillOpacity="0.2" />
          <path d="M3 6v10l9 5V11" />
          <path d="M21 6v10l-9 5" />
        </svg>
      );

    case 'notion':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M9 7v10l6-10v10" strokeWidth="2.5" />
        </svg>
      );

    case 'slack':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 15a2 2 0 012 2v2a2 2 0 11-4 0v-2a2 2 0 012-2zm0-2a2 2 0 01-2-2V9a2 2 0 114 0v2a2 2 0 01-2 2zm9-7a2 2 0 01-2-2V2a2 2 0 114 0v2a2 2 0 01-2 2zm2 0a2 2 0 012 2v2a2 2 0 11-4 0V8a2 2 0 012-2zm-2 9a2 2 0 012 2v2a2 2 0 11-4 0v-2a2 2 0 012-2zm2-2a2 2 0 012-2h2a2 2 0 110 4h-2a2 2 0 01-2-2zM9 6a2 2 0 012-2h2a2 2 0 110 4H11a2 2 0 01-2-2zm-2 9a2 2 0 012 2h2a2 2 0 110-4H9a2 2 0 01-2 2z" />
        </svg>
      );

    case 'vapi':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" fill="currentColor" fillOpacity="0.2" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
      );

    case 'google workspace':
    case 'google':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="10" y1="10" x2="10" y2="20" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      );
  }
};
