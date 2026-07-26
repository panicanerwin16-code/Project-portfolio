import React, { useState, useEffect } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { DiscoveryCallModal } from './components/DiscoveryCallModal';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';
import { X, CheckCircle2, Calendar } from 'lucide-react';

const defaultHeadshot = "https://i.im.ge/QMc34OT/ERN_1.png";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState('');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [contactMessagePrefill, setContactMessagePrefill] = useState('');

  // Profile image state with localStorage persistence
  const [headshot, setHeadshot] = useState<string>(() => {
    const saved = localStorage.getItem('erwin_custom_headshot');
    if (saved && saved.startsWith('data:image')) {
      return saved;
    }
    return defaultHeadshot;
  });

  const isCustomHeadshot = headshot !== defaultHeadshot;

  const handleUploadHeadshot = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        const result = event.target.result as string;
        setHeadshot(result);
        try {
          localStorage.setItem('erwin_custom_headshot', result);
        } catch (err) {
          console.warn('LocalStorage quota reached for profile image', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetHeadshot = () => {
    setHeadshot(defaultHeadshot);
    localStorage.removeItem('erwin_custom_headshot');
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const handleOpenBooking = (topic = '') => {
    setBookingTopic(topic);
    setIsBookingOpen(true);
  };

  const handleOpenProjects = () => {
    const projElem = document.getElementById('projects');
    if (projElem) {
      projElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBookingWithSavings = (monthlySavings: number, hoursSaved: number) => {
    setBookingTopic(`Claim Automation Savings: $${monthlySavings.toLocaleString()}/mo (${hoursSaved} hrs saved)`);
    setIsBookingOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0B0F19] text-white' : 'bg-slate-50 text-slate-900 light'}`}>
      
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Header Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenBooking={() => handleOpenBooking('General Inquiry')}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Layout Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking('Hero Discovery Call')}
          onOpenProjects={handleOpenProjects}
          onOpenResume={() => setIsResumeOpen(true)}
          headshot={headshot}
          onUploadHeadshot={handleUploadHeadshot}
          onResetHeadshot={handleResetHeadshot}
          isCustomHeadshot={isCustomHeadshot}
        />

        {/* 1. Services Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 2. Experience Section */}
        <ExperienceSection />

        {/* 3. Work Section */}
        <ProjectsSection
          onOpenBookingForProject={(title) => handleOpenBooking(`Project Request: ${title}`)}
        />

        {/* 4. Testimonials Section */}
        <TestimonialsSection />

        {/* 5. Contact Section */}
        <ContactSection
          onOpenBooking={() => handleOpenBooking('Contact Form Booking')}
          onOpenResume={() => setIsResumeOpen(true)}
          prefilledMessage={contactMessagePrefill}
        />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking('Footer Booking')} />

      {/* Discovery Call Booking Modal */}
      <DiscoveryCallModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTopic={bookingTopic}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        headshot={headshot}
        onUploadHeadshot={handleUploadHeadshot}
      />

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-lg glass-panel p-6 rounded-3xl bg-slate-950 light:bg-white border border-white/10 light:border-slate-200 shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 light:bg-slate-100 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
              Service Details
            </span>
            <h3 className="text-2xl font-bold text-white light:text-slate-900 mt-1 mb-3">
              {selectedService.title}
            </h3>

            <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed mb-4">
              {selectedService.description}
            </p>

            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-bold text-slate-200 light:text-slate-800">Key Deliverables:</h4>
              {selectedService.deliverables.map((del, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-300 light:text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  handleOpenBooking(`Service Inquiry: ${serviceName}`);
                }}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Call for {selectedService.title}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
