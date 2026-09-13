import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  ExternalLink,
  Maximize2,
  ZoomIn,
  ZoomOut,
  X,
  Calendar,
  ArrowUpRight,
  Sun,
  Wind,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface FunnelsSectionProps {
  onOpenBookingForProject: (projectTitle: string) => void;
}

interface FunnelProject {
  id: string;
  badge: string;
  badgeType: 'solar' | 'hvac';
  title: string;
  description: string;
  snapshotUrl: string;
  imageHostUrl?: string;
  liveDemoUrl?: string;
  linkLabel: string;
  linkBadge: string;
  linkButtonText: string;
  tags: string[];
  bookingTitle: string;
  problem: string;
  solution: string;
}

const funnelProjects: FunnelProject[] = [
  {
    id: 'solar-panel-funnel',
    badge: 'Solar Panel Funnel',
    badgeType: 'solar',
    title: 'Solar Panel: High-Converting GoHighLevel Landing Page & Appointment Funnel',
    description:
      'A conversion-engineered GoHighLevel landing page and appointment funnel custom-built for residential and commercial solar panel installation businesses. It transforms cold ad traffic from Facebook, Google Ads, and organic search into high-intent, pre-qualified appointments directly synced with the GoHighLevel CRM calendar.',
    snapshotUrl:
      'https://i.im.ge/QQQ4FiW/fullpage_snapshot_sites_leadconnectorhq_com_2026-09-04-15-00-53_1_.png',
    liveDemoUrl:
      'https://sites.leadconnectorhq.com/preview/FEorbibNCh0iAD3k1WxJ?notrack=true',
    linkLabel: 'Live Funnel Link',
    linkBadge: 'ACTIVE DEMO',
    linkButtonText: 'Open Funnel',
    tags: [
      'GoHighLevel',
      'Funnel Architecture',
      'Landing Page Design',
      'Calendar Booking',
      'Lead Pre-Qualification',
      'CRM Pipeline Sync',
      'SMS & Email Automations',
    ],
    bookingTitle: 'Solar Panel GoHighLevel Funnel Build',
    problem:
      'Solar companies lose expensive ad traffic when prospects hit generic websites without clear savings calculators or instant consultation booking.',
    solution:
      'Engineered a focused landing page with $0 down incentives, homeowner qualification steps, and direct GoHighLevel calendar integration with automated SMS reminders.',
  },
  {
    id: 'hvac-funnel',
    badge: 'HVAC Funnel',
    badgeType: 'hvac',
    title: 'HVAC: High-Converting GoHighLevel Lead & Appointment Funnel',
    description:
      'A conversion-engineered GoHighLevel landing page and automated appointment booking funnel designed specifically for heating, ventilation, and air conditioning (HVAC) service contractors. It captures urgent repair leads and seasonal tune-up requests, automates lead pre-qualification, and books appointments directly onto dispatch calendars with instant SMS workflows.',
    snapshotUrl:
      'https://i.im.ge/QQljqIp/fullpage_snapshot_sites_leadconnectorhq_com_2026-09-13-07-05-12.png',
    imageHostUrl: 'https://im.ge/i/QQljqIp',
    linkLabel: 'Full-Page Landing Page Snapshot Link',
    linkBadge: 'LIVE SNAPSHOT',
    linkButtonText: 'Open Snapshot',
    tags: [
      'GoHighLevel',
      'HVAC Service Funnel',
      'Landing Page Design',
      'Emergency Dispatch',
      'Lead Pre-Qualification',
      'CRM Pipeline Sync',
      'Instant SMS Confirmations',
    ],
    bookingTitle: 'HVAC GoHighLevel Funnel Build',
    problem:
      'HVAC companies lose urgent repair inquiries when phone lines are busy or forms do not allow immediate time slot selection.',
    solution:
      'Created a mobile-responsive GoHighLevel funnel with upfront emergency repair dispatch options, pre-qualification questions, and instant calendar booking.',
  },
];

export const FunnelsSection: React.FC<FunnelsSectionProps> = ({
  onOpenBookingForProject,
}) => {
  const [activeZoomProject, setActiveZoomProject] = useState<FunnelProject | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [viewMode, setViewMode] = useState<'fit' | 'full'>('full');
  const [selectedSlide, setSelectedSlide] = useState<'both' | 'solar-panel-funnel' | 'hvac-funnel'>('both');

  const visibleProjects =
    selectedSlide === 'both'
      ? funnelProjects
      : funnelProjects.filter((p) => p.id === selectedSlide);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeZoomProject) {
        setActiveZoomProject(null);
        setZoomScale(1);
      } else if (activeZoomProject && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        const currentIdx = funnelProjects.findIndex((p) => p.id === activeZoomProject.id);
        if (currentIdx !== -1) {
          const nextIdx =
            e.key === 'ArrowLeft'
              ? (currentIdx - 1 + funnelProjects.length) % funnelProjects.length
              : (currentIdx + 1) % funnelProjects.length;
          setActiveZoomProject(funnelProjects[nextIdx]);
          setZoomScale(1);
        }
      }
    };
    if (activeZoomProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeZoomProject]);

  return (
    <section
      id="funnels"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden border-t"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-color)',
      }}
    >
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#f59e0b] text-xs font-mono font-semibold uppercase tracking-widest mb-3.5 shadow-[0_0_14px_rgba(245,158,11,0.2)]">
            <Layers className="w-3.5 h-3.5" />
            <span>FUNNELS & LANDING PAGES</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Funnels & Designs Landing Pages That Convert
          </h2>

          <p
            className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            High-converting GoHighLevel landing pages and automated appointment funnels designed to turn cold traffic into pre-qualified, scheduled bookings.
          </p>

          {/* Slide & View Controls Pill */}
          <div className="mt-6 inline-flex items-center p-1.5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-xl gap-1">
            <button
              type="button"
              onClick={() => setSelectedSlide('both')}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedSlide === 'both'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Side-by-Side (Both)</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/40 font-mono">2</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedSlide('solar-panel-funnel')}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedSlide === 'solar-panel-funnel'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Solar Panel</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedSlide('hvac-funnel')}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedSlide === 'hvac-funnel'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Wind className="w-3.5 h-3.5 text-amber-400" />
              <span>HVAC Service</span>
            </button>
          </div>
        </div>

        {/* Project Funnel Tables / Cards Displayed Equally in One Slide */}
        <div
          className={`grid gap-6 lg:gap-8 items-stretch ${
            selectedSlide === 'both'
              ? 'grid-cols-1 lg:grid-cols-2'
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}
        >
          {visibleProjects.map((project, index) => {
            const projectLink = project.liveDemoUrl || project.imageHostUrl || project.snapshotUrl;
            return (
              <div
                key={project.id}
                className="rounded-3xl border overflow-hidden shadow-2xl transition-all duration-300 card-crimson-glow flex flex-col h-full justify-between"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                }}
              >
                {/* Unified Card Container */}
                <div className="flex flex-col h-full justify-between">
                  {/* Top: Funnel Visual Snapshot Window */}
                  <div
                    className="relative border-b overflow-hidden flex flex-col justify-between bg-[#080706]"
                    style={{ borderColor: 'var(--border-color)' }}
                  >
                    {/* Snapshot Preview Window (Adjusted height to fit cleanly in one view) */}
                    <div
                      className="relative h-[240px] sm:h-[280px] md:h-[300px] overflow-hidden group/preview cursor-pointer"
                      onClick={() => {
                        setActiveZoomProject(project);
                        setZoomScale(1);
                        setViewMode('full');
                      }}
                    >
                      {/* Visual Snapshot Image */}
                      <img
                        src={project.snapshotUrl}
                        alt={`${project.title} Snapshot`}
                        referrerPolicy="no-referrer"
                        className="w-full object-cover object-top transition-transform duration-700 group-hover/preview:scale-[1.02]"
                      />

                      {/* Top Overlay Badge */}
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-black/80 border border-amber-500/40 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                          {project.badgeType === 'solar' ? (
                            <Sun className="w-3.5 h-3.5 text-amber-400" />
                          ) : (
                            <Wind className="w-3.5 h-3.5 text-amber-400" />
                          )}
                          <span>{project.badge}</span>
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-[#f59e0b] border border-amber-500/30 text-[10px] font-mono font-semibold backdrop-blur-md">
                          Full-Page Design
                        </span>
                      </div>

                      {/* Project Index Indicator */}
                      <div className="absolute top-3.5 right-3.5 z-10 pointer-events-none">
                        <span className="px-2 py-0.5 rounded-full bg-black/80 border border-white/10 text-zinc-300 text-[10px] font-mono font-semibold backdrop-blur-md">
                          {index + 1} of {funnelProjects.length}
                        </span>
                      </div>

                      {/* Bottom Gradient Fade */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080706] via-[#080706]/70 to-transparent pointer-events-none" />

                      {/* Hover Action Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2.5 p-4">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveZoomProject(project);
                            setZoomScale(1);
                            setViewMode('full');
                          }}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-xl hover:scale-105 transition-all cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Inspect Full Landing Page</span>
                        </button>
                        <p className="text-[11px] font-mono text-zinc-300">Click to view vertical scrollable preview</p>
                      </div>

                      {/* Corner Enlarge Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveZoomProject(project);
                          setZoomScale(1);
                          setViewMode('full');
                        }}
                        title="Enlarge & Scroll Landing Page"
                        className="absolute bottom-3 right-3 bg-black/80 hover:bg-amber-600 text-white border border-white/20 p-2 rounded-xl backdrop-blur-md shadow-lg transition-all hover:scale-110 cursor-pointer z-10"
                      >
                        <ZoomIn className="w-3.5 h-3.5 text-[#f59e0b] group-hover:text-white" />
                      </button>
                    </div>

                    {/* Action Bar Below Image */}
                    <div
                      className="px-4 py-3 border-t flex items-center justify-between gap-2 bg-[#0d0a07]"
                      style={{ borderColor: 'var(--border-color)' }}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-mono text-zinc-400">GoHighLevel Asset</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveZoomProject(project);
                            setZoomScale(1);
                            setViewMode('full');
                          }}
                          className="px-2.5 py-1 rounded-lg border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-[#f59e0b] font-mono text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>Full Page</span>
                        </button>

                        <a
                          href={projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-110 text-white font-mono text-[11px] font-bold flex items-center gap-1 transition-all shadow-sm cursor-pointer"
                        >
                          <span>{project.liveDemoUrl ? 'Live Funnel' : 'Open Link'}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Body: Content, Link, Tags, CTA */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Featured Link Banner (Compact & Sleek) */}
                      <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center justify-between gap-2.5 p-3 rounded-xl border border-amber-500/50 bg-amber-500/10 hover:bg-amber-500/20 hover:border-amber-400 text-amber-400 font-mono text-xs transition-all shadow-sm mb-4 cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-[#f59e0b] border border-amber-500/40 flex items-center justify-center shrink-0">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-white text-xs truncate">
                                {project.linkLabel}
                              </span>
                              <span className="px-1 py-0.2 rounded bg-amber-400 text-black text-[8px] font-black uppercase tracking-wider shrink-0">
                                {project.linkBadge}
                              </span>
                            </div>
                            <p className="text-[11px] font-mono text-zinc-300 truncate max-w-[200px] sm:max-w-[280px]">
                              {projectLink}
                            </p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 font-bold text-amber-300 bg-black/50 px-2.5 py-1 rounded-lg border border-amber-500/30 shrink-0 text-[11px] group-hover/link:bg-amber-500 group-hover/link:text-black transition-colors">
                          <span>{project.linkButtonText}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </a>

                      {/* Title with Balanced Height */}
                      <h3
                        className="text-lg sm:text-xl font-black tracking-tight mb-2.5 leading-snug min-h-[48px] flex items-center"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-xs sm:text-sm leading-relaxed mb-4 line-clamp-4 min-h-[72px]"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-medium border"
                            style={{
                              backgroundColor: 'var(--bg-primary)',
                              borderColor: 'var(--border-color)',
                              color: 'var(--text-secondary)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Row (Equalized at bottom of card) */}
                    <div
                      className="pt-4 border-t flex flex-wrap items-center justify-between gap-2.5 mt-auto"
                      style={{ borderColor: 'var(--border-color)' }}
                    >
                      <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl border border-amber-500/40 hover:bg-amber-500/10 text-[#f59e0b] font-mono text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{project.liveDemoUrl ? 'Open Funnel' : 'View Snapshot'}</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => onOpenBookingForProject(project.bookingTitle)}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#f97316] hover:brightness-110 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Build Similar Funnel</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Page Interactive Snapshot Modal */}
      <AnimatePresence>
        {activeZoomProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveZoomProject(null)}
            className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-xl p-3 sm:p-6"
          >
            {/* Top Toolbar */}
            <div
              className="max-w-7xl w-full mx-auto flex items-center justify-between gap-4 mb-3 px-4 py-3 rounded-2xl border backdrop-blur-md z-10 shrink-0"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                <h4
                  className="font-mono text-xs sm:text-sm font-bold truncate"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {activeZoomProject.badge} • Full Landing Page Snapshot
                </h4>
              </div>

              {/* View Controls & Close */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Previous / Next Funnel Switch */}
                <div className="hidden sm:flex items-center gap-1 mr-1 border-r border-white/10 pr-2">
                  <button
                    type="button"
                    onClick={() => {
                      const currentIdx = funnelProjects.findIndex((p) => p.id === activeZoomProject.id);
                      const prevIdx = (currentIdx - 1 + funnelProjects.length) % funnelProjects.length;
                      setActiveZoomProject(funnelProjects[prevIdx]);
                      setZoomScale(1);
                    }}
                    className="p-1.5 rounded-lg border border-white/10 hover:border-amber-500 hover:text-[#f59e0b] transition-colors cursor-pointer text-white"
                    style={{ backgroundColor: 'var(--bg-primary)' }}
                    title="Previous Funnel (Left Arrow)"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const currentIdx = funnelProjects.findIndex((p) => p.id === activeZoomProject.id);
                      const nextIdx = (currentIdx + 1) % funnelProjects.length;
                      setActiveZoomProject(funnelProjects[nextIdx]);
                      setZoomScale(1);
                    }}
                    className="p-1.5 rounded-lg border border-white/10 hover:border-amber-500 hover:text-[#f59e0b] transition-colors cursor-pointer text-white"
                    style={{ backgroundColor: 'var(--bg-primary)' }}
                    title="Next Funnel (Right Arrow)"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* View Mode: Fit vs Full Scroll */}
                <button
                  type="button"
                  onClick={() => {
                    setViewMode((m) => (m === 'full' ? 'fit' : 'full'));
                    setZoomScale(1);
                  }}
                  className="px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-mono font-bold hover:border-amber-500 transition-colors cursor-pointer"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                  title="Toggle Full Scroll vs Fit Screen"
                >
                  <span className="text-[#f59e0b]">
                    {viewMode === 'full' ? 'Full Page Scroll' : 'Fit to Screen'}
                  </span>
                </button>

                {/* Zoom Controls */}
                <button
                  type="button"
                  onClick={() => setZoomScale((s) => Math.max(s - 0.25, 0.5))}
                  className="p-2 sm:px-3 sm:py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1 hover:border-amber-500 transition-colors cursor-pointer"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4 text-[#f59e0b]" />
                  <span className="hidden sm:inline">Zoom Out</span>
                </button>

                <button
                  type="button"
                  onClick={() => setZoomScale(1)}
                  className="px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-mono font-bold hover:border-amber-500 transition-colors cursor-pointer"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                  title="Reset Zoom"
                >
                  <span className="text-[#f59e0b]">{Math.round(zoomScale * 100)}%</span>
                </button>

                <button
                  type="button"
                  onClick={() => setZoomScale((s) => Math.min(s + 0.25, 3))}
                  className="p-2 sm:px-3 sm:py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1 hover:border-amber-500 transition-colors cursor-pointer"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4 text-[#f59e0b]" />
                  <span className="hidden sm:inline">Zoom In</span>
                </button>

                <a
                  href={activeZoomProject.liveDemoUrl || activeZoomProject.imageHostUrl || activeZoomProject.snapshotUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-110 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-md ml-1 cursor-pointer"
                >
                  <span>{activeZoomProject.liveDemoUrl ? 'Open Live Funnel' : 'Open Link'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setActiveZoomProject(null);
                    setZoomScale(1);
                  }}
                  className="p-2 sm:px-3.5 sm:py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 hover:bg-amber-500 hover:text-black text-amber-200 font-mono text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-md ml-1"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </button>
              </div>
            </div>

            {/* Scrollable Main Viewport */}
            <div
              className="flex-1 w-full max-w-7xl mx-auto overflow-y-auto overflow-x-auto rounded-3xl border p-4 bg-[#08080a] shadow-2xl relative flex justify-center"
              style={{ borderColor: 'var(--border-color)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="transition-transform duration-200 ease-out origin-top flex flex-col items-center"
                style={{
                  transform: `scale(${zoomScale})`,
                  width: viewMode === 'full' ? '100%' : 'auto',
                }}
              >
                <img
                  src={activeZoomProject.snapshotUrl}
                  alt={`${activeZoomProject.title} Full Page Snapshot`}
                  referrerPolicy="no-referrer"
                  className={`rounded-2xl shadow-2xl transition-all select-none ${
                    viewMode === 'full'
                      ? 'w-full max-w-4xl h-auto object-contain'
                      : 'max-h-[75vh] w-auto object-contain'
                  }`}
                />
              </div>

              {/* Fixed Bottom Controls Hint */}
              <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/80 border border-white/10 px-5 py-2 rounded-full text-xs font-mono text-white/80 backdrop-blur-md pointer-events-none text-center shadow-xl">
                Scroll vertically to inspect every section of the funnel • Press <kbd className="text-[#f59e0b] font-bold">ESC</kbd> to exit
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

