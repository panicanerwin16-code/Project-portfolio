import React, { useState, useEffect } from 'react';
import {
  Zap,
  Menu,
  X,
  Sun,
  Moon,
  Calendar,
  FileText,
  ChevronRight,
  Sparkles,
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 backdrop-blur-xl bg-slate-950/80 light:bg-white/80 border-b border-white/10 light:border-slate-200 shadow-lg shadow-black/10'
          : 'py-5 bg-transparent'
      }`}
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
          <div className="relative w-8 h-8 bg-slate-900 border border-slate-700/80 rounded-lg flex items-center justify-center font-bold text-sm text-amber-400">
            E
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400 ring-2 ring-slate-950" />
          </div>
          <span className="font-bold text-base tracking-tight text-white light:text-slate-900">
            Erwin<span className="text-amber-400">.</span>Panican
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-sm text-gray-400">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Dark / Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="hidden md:flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Resume</span>
          </button>

          {/* Book Call CTA */}
          <button
            onClick={onOpenBooking}
            className="px-5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Let's talk</span>
            <span className="text-sm">↗</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-slate-900 light:bg-slate-100 border border-white/10 light:border-slate-200 text-slate-300"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-white/10 light:border-slate-200 text-white light:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-slate-950/95 light:bg-white/95 backdrop-blur-2xl border-b border-white/10 light:border-slate-200 p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between p-3 rounded-xl text-sm font-medium text-slate-200 light:text-slate-800 hover:bg-slate-900 light:hover:bg-slate-100 transition-colors text-left"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}

            <div className="pt-4 border-t border-white/10 light:border-slate-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 light:bg-slate-100 border border-white/10 text-slate-200 light:text-slate-800 font-medium text-sm"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>View Resume</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25"
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
