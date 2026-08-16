import React from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Calendar as CalendarIcon,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking?: () => void;
  onOpenResume?: () => void;
  prefilledMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const contactLinks = [
    {
      id: 'calendly',
      icon: CalendarIcon,
      label: 'BOOK 30-MIN DISCOVERY CALL',
      text: 'calendly.com/panicanerwin16/30min',
      href: 'https://calendly.com/panicanerwin16/30min',
      isPrimary: true,
    },
    {
      id: 'email',
      icon: Mail,
      label: 'EMAIL',
      text: 'panicanerwin16@gmail.com',
      href: 'mailto:panicanerwin16@gmail.com',
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'WHATSAPP / PHONE',
      text: '+63 915 305 890',
      href: 'https://wa.me/63915305890',
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LINKEDIN',
      text: 'linkedin.com/in/erwinpanican',
      href: 'https://linkedin.com/in/erwinpanican',
    },
    {
      id: 'upwork',
      icon: ExternalLink,
      label: 'UPWORK PROFILE',
      text: 'erwin-panican-upwork',
      href: 'https://www.upwork.com/freelancers/~01c544a89e40992a44',
    },
    {
      id: 'onlinejobs',
      icon: ExternalLink,
      label: 'ONLINEJOBS.PH',
      text: 'erwin-panican-onlinejobs',
      href: 'https://v2.onlinejobs.ph/jobseekers/info/5106135',
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 relative transition-colors duration-300 bg-crimson-grid"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* WORK WITH ME TEXT & CONTACT CARDS */}
        <div className="space-y-8 text-left">
          
          {/* Eyebrow Label */}
          <span className="text-[#ff9000] text-xs font-bold uppercase tracking-widest block font-mono">
            WORK WITH ME
          </span>

          {/* Headline */}
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15]"
            style={{ color: 'var(--text-primary)' }}
          >
            You've seen what I build. <br />
            <span className="gradient-fiery-text">Let's talk about yours.</span>
          </h2>

          {/* Paragraph Description */}
          <p 
            className="text-xs sm:text-sm leading-relaxed max-w-2xl font-normal"
            style={{ color: 'var(--text-secondary)' }}
          >
            30 minutes. You walk me through your stack, your current workflows, and where things are slipping — leads going cold, sequences not firing, manual tasks your team shouldn't be touching. I'll tell you exactly what I'd build, in what order, and what it would actually change for your business.
          </p>

          {/* Contact Link Cards Stacked */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
            {contactLinks.map((item) => {
              const IconComp = item.icon;
              const isPrimary = item.isPrimary;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-200 shadow-md ${
                    isPrimary
                      ? 'md:col-span-2 card-crimson-glow border-2 border-[#ff4500]/80 hover:border-[#ff9000] shadow-[0_0_30px_rgba(255,80,0,0.3)]'
                      : 'card-crimson-glow hover:border-orange-500/50'
                  }`}
                  style={{
                    backgroundColor: isPrimary ? 'var(--bg-card)' : 'var(--bg-secondary)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${
                      isPrimary 
                        ? 'bg-gradient-to-r from-[#ff9000] to-[#ff3700] text-white font-bold shadow-md shadow-orange-500/30' 
                        : 'bg-orange-500/10 border border-orange-500/30 text-[#ff9000]'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span 
                        className={`text-[10px] font-mono uppercase font-bold tracking-wider block mb-0.5 ${
                          isPrimary ? 'text-[#ff9000]' : ''
                        }`}
                        style={{ color: isPrimary ? '#ff9000' : 'var(--text-secondary)' }}
                      >
                        {item.label}
                      </span>
                      <span 
                        className="text-xs sm:text-sm font-semibold transition-colors group-hover:text-[#ff9000]"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.text}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isPrimary && (
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-[10px] font-mono font-bold text-[#ff9000]">
                        INSTANT BOOKING
                      </span>
                    )}
                    <span className="text-[#ff9000] font-bold text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};


