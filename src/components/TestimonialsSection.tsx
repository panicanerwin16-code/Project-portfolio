import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 't1',
      quote:
        'Erwin rebuilt our lead-to-CRM flow in a week. What used to take our team hours every day now runs untouched. Genuinely a 10x hire.',
      name: 'Marcus L.',
      role: 'Founder, B2B SaaS',
    },
    {
      id: 't2',
      quote:
        'He doesn\'t just connect tools — he thinks about edge cases, retries and reporting. Our Make scenarios have been rock solid for months.',
      name: 'Priya S.',
      role: 'Head of Ops, Agency',
    },
    {
      id: 't3',
      quote:
        'The AI receptionist Erwin built for us books real calls. Fast, communicative and clearly knows the GHL ecosystem cold.',
      name: 'Daniel K.',
      role: 'GoHighLevel Agency Owner',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <div className="mb-12">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What clients say
          </h2>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#111827]/90 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
            >
              <div>
                {/* Gold Quote Icon */}
                <div className="text-amber-400 font-serif text-4xl font-bold mb-4 leading-none">
                  “
                </div>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-sm font-bold text-white tracking-tight">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
