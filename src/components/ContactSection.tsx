import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Calendar as CalendarIcon,
  Video,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking?: () => void;
  onOpenResume?: () => void;
  prefilledMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  // Calendar interactive state
  const [currentDate, setCurrentDate] = useState(new Date(2026, 6, 1)); // July 2026
  const [selectedDay, setSelectedDay] = useState<number | null>(27);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [step, setStep] = useState<'date' | 'time' | 'form' | 'confirmed'>('date');

  // Booking Form State
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    notes: '',
  });

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
  ];

  const contactLinks = [
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

  // Calendar calculations
  const year = currentDate.getFullYear();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, currentDate.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
    setSelectedDay(null);
    setStep('date');
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));
    setSelectedDay(null);
    setStep('date');
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.name || !bookingData.email) return;
    setStep('confirmed');
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#080C14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* LEFT COLUMN - WORK WITH ME TEXT & CONTACT CARDS */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Eyebrow Label */}
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block font-mono">
              WORK WITH ME
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              You've seen what I build. <br />
              <span className="text-amber-400">Let's talk about yours.</span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-normal">
              30 minutes. You walk me through your stack, your current workflows, and where things are slipping — leads going cold, sequences not firing, manual tasks your team shouldn't be touching. I'll tell you exactly what I'd build, in what order, and what it would actually change for your business.
            </p>

            {/* Contact Link Cards Stacked */}
            <div className="space-y-3.5 pt-2">
              {contactLinks.map((item) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-[#0E1526]/90 border border-slate-800/90 hover:border-amber-400/40 hover:bg-[#131C30]/80 transition-all duration-200 shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/25 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider block mb-0.5">
                          {item.label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                          {item.text}
                        </span>
                      </div>
                    </div>

                    <span className="text-amber-400 font-bold text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN - CALENDAR DISCOVERY CALL WIDGET */}
          <div className="lg:col-span-6">
            <div className="bg-[#0E1526] border border-slate-800/90 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Header Dark Bar */}
              <div className="p-5 sm:p-6 bg-[#131C2E] border-b border-slate-800/80 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-lg shadow-amber-400/20">
                  <CalendarIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 block mb-0.5">
                    BOOK A CALL
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Discovery Call with Erwin
                  </h3>
                </div>
              </div>

              {/* Subheader Call Overview Box */}
              <div className="p-5 bg-[#0A0F1D]/80 border-b border-slate-800/60 space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-amber-400">
                  <Video className="w-4 h-4 shrink-0" />
                  <span>Web conferencing details provided upon confirmation.</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Walk me through your setup — the tools, the gaps, what's still manual. I'll tell you exactly what I'd build and where I'd start.
                </p>
              </div>

              {/* Calendar / Booking Interactive View */}
              <div className="p-6 bg-[#080C17]">
                
                {step === 'confirmed' ? (
                  /* Confirmed Screen */
                  <div className="py-12 px-4 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-tight">
                      Discovery Call Requested!
                    </h4>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-amber-400">{bookingData.name}</strong>! Your call is scheduled for{' '}
                      <strong className="text-white">{monthName} {selectedDay}, {year}</strong> at{' '}
                      <strong className="text-white">{selectedTimeSlot}</strong>. Check your inbox ({bookingData.email}) for calendar invite details.
                    </p>
                    <button
                      onClick={() => {
                        setStep('date');
                        setSelectedTimeSlot(null);
                        setBookingData({ name: '', email: '', notes: '' });
                      }}
                      className="mt-4 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
                    >
                      Book Another Slot
                    </button>
                  </div>
                ) : (
                  <div>
                    {/* Header Controls */}
                    <div className="flex items-center justify-between mb-5">
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {step === 'date' && 'Select a Day'}
                        {step === 'time' && `Select Time (${monthName} ${selectedDay})`}
                        {step === 'form' && 'Your Contact Details'}
                      </h4>

                      {step !== 'date' && (
                        <button
                          onClick={() => setStep(step === 'form' ? 'time' : 'date')}
                          className="text-xs font-mono text-amber-400 hover:underline cursor-pointer"
                        >
                          ← Back
                        </button>
                      )}
                    </div>

                    {/* STEP 1: DATE PICKER */}
                    {step === 'date' && (
                      <div>
                        {/* Month Navigation */}
                        <div className="flex items-center justify-between mb-4 bg-[#111827] px-4 py-2.5 rounded-xl border border-slate-800">
                          <button
                            onClick={handlePrevMonth}
                            className="p-1 hover:text-amber-400 text-slate-400 transition-colors cursor-pointer"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <span className="text-xs font-bold font-mono text-amber-400 tracking-wider">
                            {monthName} {year}
                          </span>
                          <button
                            onClick={handleNextMonth}
                            className="p-1 hover:text-amber-400 text-slate-400 transition-colors cursor-pointer"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Weekday Header */}
                        <div className="grid grid-cols-7 text-center text-[11px] font-mono font-semibold text-slate-400 mb-2">
                          <span>Sun</span>
                          <span>Mon</span>
                          <span>Tue</span>
                          <span>Wed</span>
                          <span>Thu</span>
                          <span>Fri</span>
                          <span>Sat</span>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1 text-center text-xs">
                          {/* Blank cells before 1st of month */}
                          {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                            <div key={`blank-${i}`} className="h-9" />
                          ))}

                          {/* Days of Month */}
                          {Array.from({ length: daysInMonth }).map((_, i) => {
                            const dayNum = i + 1;
                            const isAvailable = dayNum >= 20; // highlight available days
                            const isSelected = selectedDay === dayNum;

                            return (
                              <button
                                key={dayNum}
                                disabled={!isAvailable}
                                onClick={() => {
                                  setSelectedDay(dayNum);
                                  setStep('time');
                                }}
                                className={`h-9 w-9 mx-auto rounded-full flex items-center justify-center font-mono font-bold transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30 scale-105'
                                    : isAvailable
                                    ? 'bg-slate-800/80 text-sky-300 hover:bg-amber-400 hover:text-slate-950 border border-sky-500/20'
                                    : 'text-slate-500 hover:text-slate-400 opacity-60 cursor-not-allowed'
                                }`}
                              >
                                {dayNum}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* STEP 2: TIME SLOT PICKER */}
                    {step === 'time' && (
                      <div className="space-y-3">
                        <p className="text-xs text-slate-300 mb-4">
                          Available time slots for <strong className="text-amber-400">{monthName} {selectedDay}, {year}</strong> (30-minute session):
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              onClick={() => {
                                setSelectedTimeSlot(slot);
                                setStep('form');
                              }}
                              className={`p-3 rounded-xl border text-xs font-mono font-bold flex items-center justify-between transition-all cursor-pointer ${
                                selectedTimeSlot === slot
                                  ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md shadow-amber-400/20'
                                  : 'bg-[#111827] text-white border-slate-800 hover:border-amber-400/50 hover:bg-[#1f293d]'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5 text-amber-400" />
                                <span>{slot}</span>
                              </div>
                              <span>→</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 3: CONTACT FORM */}
                    {step === 'form' && (
                      <form onSubmit={handleConfirmBooking} className="space-y-4">
                        <div className="p-3 bg-[#111827] border border-slate-800 rounded-xl text-xs space-y-1">
                          <span className="text-slate-400 font-mono">SELECTED TIME:</span>
                          <div className="text-amber-400 font-bold">
                            {monthName} {selectedDay}, {year} at {selectedTimeSlot}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Alex Mercer"
                            value={bookingData.name}
                            onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#111827] border border-slate-800 focus:border-amber-400 rounded-xl text-xs text-white outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1">
                            Your Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="alex@company.com"
                            value={bookingData.email}
                            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#111827] border border-slate-800 focus:border-amber-400 rounded-xl text-xs text-white outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1">
                            What workflow do you want to automate? (Optional)
                          </label>
                          <textarea
                            rows={2}
                            placeholder="Briefly describe your current tools or manual bottlenecks..."
                            value={bookingData.notes}
                            onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#111827] border border-slate-800 focus:border-amber-400 rounded-xl text-xs text-white outline-none resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-400/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Confirm Discovery Call</span>
                        </button>
                      </form>
                    )}

                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
