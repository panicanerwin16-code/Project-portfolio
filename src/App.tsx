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
import { downloadATSResumeFile } from './utils/resumeDownloader';

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

  const handleOpenBooking = (_topic = '') => {
    const bookSection = document.getElementById('book-call');
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open('https://calendly.com/panicanerwin16/30min', '_blank', 'noopener,noreferrer');
    }
  };

  const handleOpenProjects = () => {
    const projElem = document.getElementById('projects');
    if (projElem) {
      projElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenResume = () => {
    // Automatically trigger instant download of resume file
    downloadATSResumeFile();
    // Open resume modal view
    setIsResumeOpen(true);
  };

  const handleOpenBookingWithSavings = (monthlySavings: number, hoursSaved: number) => {
    setBookingTopic(`Claim Automation Savings: $${monthlySavings.toLocaleString()}/mo (${hoursSaved} hrs saved)`);
    setIsBookingOpen(true);
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
      }}
    >
      
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Header Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenBooking={() => handleOpenBooking('General Inquiry')}
        onOpenResume={handleOpenResume}
      />

      {/* Main Page Layout Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking('Hero Discovery Call')}
          onOpenProjects={handleOpenProjects}
          onOpenResume={handleOpenResume}
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

        {/* 5. Contact & Calendly (Work With Me) Section */}
        <ContactSection
          onOpenBooking={() => handleOpenBooking('Contact Form Booking')}
          onOpenResume={handleOpenResume}
          prefilledMessage={contactMessagePrefill}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking('Footer Booking')} 
        onOpenResume={handleOpenResume}
      />

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div 
            className="relative w-full max-w-lg card-crimson-glow p-6 sm:p-8 rounded-3xl border shadow-2xl transition-colors"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-xl border transition-colors cursor-pointer hover:border-orange-500"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)',
              }}
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold text-[#ff9000] uppercase tracking-wider">
              Service Details
            </span>
            <h3 className="text-2xl font-bold mt-1 mb-3" style={{ color: 'var(--text-primary)' }}>
              {selectedService.title}
            </h3>

            <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {selectedService.description}
            </p>

            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Key Deliverables:</h4>
              {selectedService.deliverables.map((del, i) => (
                <div key={i} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff9000] shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  handleOpenBooking(`Service Inquiry: ${serviceName}`);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff9000] to-[#ff3700] hover:brightness-110 text-white font-semibold text-xs shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer"
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
