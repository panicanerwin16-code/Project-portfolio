import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, X, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DiscoveryCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const DiscoveryCallModal: React.FC<DiscoveryCallModalProps> = ({
  isOpen,
  onClose,
  initialTopic = '',
}) => {
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM EST');
  const [selectedFocus, setSelectedFocus] = useState<string>(initialTopic || 'AI Workflow Automation');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const dates = ['Today (Urgent)', 'Tomorrow', 'Monday, Jul 28', 'Tuesday, Jul 29'];
  const times = ['09:00 AM EST', '10:00 AM EST', '01:30 PM EST', '03:00 PM EST', '04:30 PM EST'];
  const focusAreas = [
    'AI Workflow Automation',
    'AI Voice Receptionist',
    'GoHighLevel & CRM Setup',
    'Lead Qualification Engine',
    'Quotation & Doc Automation',
    'Custom API & Webhooks',
  ];

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;

    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl border my-8 shadow-2xl transition-colors card-crimson-glow"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
        }}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl border transition-colors cursor-pointer hover:border-red-500"
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
          }}
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 text-[#ff9000] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(255,80,0,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 
              className="text-2xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Discovery Call Confirmed!
            </h3>
            <p className="text-xs max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We have scheduled your 30-minute consultation for <strong className="text-[#ff9000]">{selectedDate} at {selectedTime}</strong>. Calendar invite & Google Meet link sent to <strong className="text-[#ff9000]">{clientEmail}</strong>.
            </p>
            <div 
              className="p-4 rounded-xl border text-xs text-left max-w-md mx-auto space-y-1"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)',
              }}
            >
              <div><strong>Topic:</strong> {selectedFocus}</div>
              <div><strong>Host:</strong> Erwin Panican (AI Automation Specialist)</div>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ff9000] to-[#ff3700] hover:brightness-110 text-white text-xs font-bold shadow-[0_0_20px_rgba(255,80,0,0.4)] cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleConfirmBooking} className="space-y-5">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <a 
                  href="https://calendly.com/panicanerwin16/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#ff9000] text-xs font-semibold hover:bg-red-500/20 transition-all"
                >
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>Calendly Direct Booking</span>
                  <span>→</span>
                </a>
              </div>
              <h3 
                className="text-2xl font-bold tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                Schedule Your Automation Call
              </h3>
              <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                Book a 30-minute discovery session with Erwin Panican.
              </p>
            </div>

            {/* Direct Calendly Banner CTA */}
            <a
              href="https://calendly.com/panicanerwin16/30min"
              target="_blank"
              rel="noreferrer"
              className="w-full p-3.5 rounded-2xl border-2 border-orange-500/60 hover:border-orange-500 text-[#ff9000] font-bold text-xs transition-all flex items-center justify-between gap-2 shadow-[0_0_20px_rgba(255,80,0,0.15)] group cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-primary)',
              }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#ff9000] to-[#ff3700] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-md">
                  <CalendarIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-xs" style={{ color: 'var(--text-primary)' }}>Book Directly on Calendly</span>
                  <span className="block text-[10px] text-[#ff9000] font-mono">calendly.com/panicanerwin16/30min</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#ff9000] to-[#ff3700] text-white text-xs font-extrabold group-hover:scale-105 transition-transform">
                Open Calendly →
              </span>
            </a>

            {/* Select Focus Area */}
            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Select Automation Focus
              </label>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <button
                    type="button"
                    key={area}
                    onClick={() => setSelectedFocus(area)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all border ${
                      selectedFocus === area
                        ? 'bg-gradient-to-r from-[#ff9000] to-[#ff3700] text-white border-transparent font-bold shadow-[0_0_12px_rgba(255,80,0,0.3)]'
                        : 'hover:border-orange-500/40'
                    }`}
                    style={{
                      backgroundColor: selectedFocus === area ? '#ff4500' : 'var(--bg-primary)',
                      borderColor: selectedFocus === area ? 'transparent' : 'var(--border-color)',
                      color: selectedFocus === area ? '#ffffff' : 'var(--text-secondary)',
                    }}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Picker */}
            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Preferred Date
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {dates.map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => setSelectedDate(d)}
                    className={`p-2.5 rounded-xl text-xs font-medium cursor-pointer transition-all border ${
                      selectedDate === d
                        ? 'bg-red-500/20 text-[#ff9000] border-[#ff4500]'
                        : ''
                    }`}
                    style={{
                      backgroundColor: selectedDate === d ? 'rgba(255,80,0,0.15)' : 'var(--bg-primary)',
                      borderColor: selectedDate === d ? '#ff4500' : 'var(--border-color)',
                      color: selectedDate === d ? '#ff9000' : 'var(--text-secondary)',
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Picker */}
            <div>
              <label className="block text-xs font-semibold mb-2 flex items-center gap-1" style={{ color: 'var(--text-primary)' }}>
                <Clock className="w-3.5 h-3.5 text-[#ff9000]" />
                <span>Available Time Slots</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {times.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-all border ${
                      selectedTime === t
                        ? 'bg-gradient-to-r from-[#ff9000] to-[#ff3700] text-white border-transparent font-bold'
                        : ''
                    }`}
                    style={{
                      backgroundColor: selectedTime === t ? '#ff4500' : 'var(--bg-primary)',
                      borderColor: selectedTime === t ? 'transparent' : 'var(--border-color)',
                      color: selectedTime === t ? '#ffffff' : 'var(--text-secondary)',
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Info Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-[11px] font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Erwin Panican"
                  className="w-full px-3 py-2 rounded-xl border text-xs focus:outline-none focus:border-[#ff9000]"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-3 py-2 rounded-xl border text-xs focus:outline-none focus:border-[#ff9000]"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isBooking}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff9000] to-[#ff3700] hover:brightness-110 text-white font-extrabold text-xs shadow-[0_0_20px_rgba(255,80,0,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isBooking ? (
                <span>Confirming Appointment...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Confirm & Lock Discovery Call ({selectedDate})</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

