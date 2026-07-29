import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, X, CheckCircle2, Sparkles, User, Mail, Building2 } from 'lucide-react';
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
  const [clientCompany, setClientCompany] = useState('');
  const [notes, setNotes] = useState('');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl glass-panel p-6 sm:p-8 rounded-3xl bg-slate-950 light:bg-white border border-white/10 light:border-slate-200 my-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 light:bg-slate-100 text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white light:text-slate-900">
              Discovery Call Confirmed!
            </h3>
            <p className="text-xs text-slate-300 light:text-slate-600 max-w-md mx-auto">
              We have scheduled your 30-minute consultation for <strong className="text-sky-400">{selectedDate} at {selectedTime}</strong>. Calendar invite & Google Meet link sent to <strong className="text-white">{clientEmail}</strong>.
            </p>
            <div className="p-4 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-white/10 text-xs text-slate-400 text-left max-w-md mx-auto">
              <div><strong>Topic:</strong> {selectedFocus}</div>
              <div><strong>Host:</strong> Erwin Panican (AI Automation Specialist)</div>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/25"
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
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold hover:bg-amber-500/20 transition-all"
                >
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>Calendly Direct Booking</span>
                  <span>↗</span>
                </a>
              </div>
              <h3 className="text-2xl font-bold text-white light:text-slate-900 tracking-tight">
                Schedule Your Automation Call
              </h3>
              <p className="text-xs text-slate-300 light:text-slate-600 mt-1">
                Book a 30-minute discovery session with Erwin Panican.
              </p>
            </div>

            {/* Direct Calendly Banner CTA */}
            <a
              href="https://calendly.com/panicanerwin16/30min"
              target="_blank"
              rel="noreferrer"
              className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-400/50 hover:border-amber-300 text-amber-300 hover:text-white font-bold text-xs transition-all flex items-center justify-between gap-2 shadow-lg shadow-amber-500/10 group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs shrink-0">
                  <CalendarIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-white font-bold text-xs">Book Directly on Calendly</span>
                  <span className="block text-[10px] text-amber-400 font-mono">calendly.com/panicanerwin16/30min</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-lg bg-amber-400 text-slate-950 text-xs font-extrabold group-hover:scale-105 transition-transform">
                Open Calendly ↗
              </span>
            </a>

            {/* Select Focus Area */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-2">
                Select Automation Focus
              </label>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <button
                    type="button"
                    key={area}
                    onClick={() => setSelectedFocus(area)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                      selectedFocus === area
                        ? 'bg-blue-600 text-white border border-sky-400'
                        : 'bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-white/10'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Picker */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-2">
                Preferred Date
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {dates.map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => setSelectedDate(d)}
                    className={`p-2.5 rounded-xl text-xs font-medium cursor-pointer transition-all ${
                      selectedDate === d
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-400'
                        : 'bg-slate-900 light:bg-slate-100 text-slate-400 border border-white/5'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Picker */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-2 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>Available Time Slots</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {times.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-all ${
                      selectedTime === t
                        ? 'bg-blue-600 text-white border border-sky-400'
                        : 'bg-slate-900 light:bg-slate-100 text-slate-400 border border-white/5'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Info Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-[11px] font-medium text-slate-300 light:text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Erwin Panican"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 light:bg-slate-100 border border-white/10 text-xs text-white light:text-slate-900 focus:outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 light:text-slate-700 mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 light:bg-slate-100 border border-white/10 text-xs text-white light:text-slate-900 focus:outline-none focus:border-sky-400"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isBooking}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-white font-semibold text-xs shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isBooking ? (
                <span>Confirming Appointment...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-sky-200" />
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
