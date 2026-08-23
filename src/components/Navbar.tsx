import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  Calendar,
  FileText,
  ChevronRight,
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenBooking: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenBooking,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'services', 'experience', 'work', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveNav(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'services', label: 'SERVICES', href: '#services' },
    { id: 'experience', label: 'EXPERIENCE', href: '#experience' },
    { id: 'work', label: 'PROJECTS', href: '#work' },
    { id: 'testimonials', label: 'TESTIMONIALS', href: '#testimonials' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string, id: string) => {
    setMobileMenuOpen(false);
    setActiveNav(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 backdrop-blur-xl bg-[#08080a]/90 border-b border-amber-500/20 shadow-lg shadow-black/60'
          : 'py-5 bg-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--bg-card)' : 'transparent',
        borderColor: scrolled ? 'var(--border-color)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm bg-[#14100c] text-[#f59e0b] border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]">
            E
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#f97316] shadow-[0_0_6px_#f97316]" />
          </div>
          <span className="font-extrabold text-base tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Erwin<span className="text-[#f59e0b]">.</span>Panican
          </span>
        </a>

        {/* Desktop Links with Reference-Style Uppercase & Amber Active Indicator */}
        <nav className="hidden lg:flex items-center gap-7 font-bold text-xs tracking-widest">
          {navLinks.map((link) => {
            const isActive = activeNav === link.id;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href, link.id)}
                className={`relative py-1 transition-all cursor-pointer select-none hover:text-[#f59e0b] ${
                  isActive
                    ? 'text-[#f59e0b] drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] font-black'
                    : ''
                }`}
                style={{
                  color: isActive ? '#f59e0b' : 'var(--text-secondary)',
                }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#f59e0b] rounded-full shadow-[0_0_8px_#f59e0b]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Dark / Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl transition-all cursor-pointer border hover:border-amber-500/50"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#f59e0b]" /> : <Moon className="w-4 h-4 text-amber-600" />}
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="hidden md:flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer hover:border-amber-500/50"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
          >
            <FileText className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Resume</span>
          </button>

          {/* Book Call CTA - Amber Gold Gradient */}
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#ea580c] hover:brightness-110 text-white font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105"
          >
            <span>Let's talk</span>
            <span className="text-sm font-bold">→</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg border transition-colors"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#f59e0b]" /> : <Moon className="w-4 h-4 text-amber-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border transition-colors"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-[65px] backdrop-blur-2xl border-b p-6 shadow-2xl transition-all"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href, link.id)}
                className="flex items-center justify-between p-3 rounded-xl text-sm font-bold tracking-wider transition-colors text-left"
                style={{ color: 'var(--text-primary)' }}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#f59e0b]" />
              </button>
            ))}

            <div className="pt-4 border-t flex flex-col gap-3" style={{ borderColor: 'var(--border-color)' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 p-3 rounded-xl border font-medium text-sm"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              >
                <FileText className="w-4 h-4 text-[#f59e0b]" />
                <span>View Resume</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-extrabold text-sm shadow-[0_0_20px_rgba(245,158,11,0.35)]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Discovery Call</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

