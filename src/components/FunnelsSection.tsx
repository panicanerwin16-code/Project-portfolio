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
} from 'lucide-react';

interface FunnelsSectionProps {
  onOpenBookingForProject: (projectTitle: string) => void;
}

export const FunnelsSection: React.FC<FunnelsSectionProps> = ({
  onOpenBookingForProject,
}) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [viewMode, setViewMode] = useState<'fit' | 'full'>('full');

  const snapshotUrl =
    'https://i.im.ge/QQQ4FiW/fullpage_snapshot_sites_leadconnectorhq_com_2026-09-04-15-00-53_1_.png';
  const liveDemoUrl =
    'https://sites.leadconnectorhq.com/preview/FEorbibNCh0iAD3k1WxJ?notrack=true';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isZoomOpen) {
        setIsZoomOpen(false);
        setZoomScale(1);
      }
    };
    if (isZoomOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isZoomOpen]);

  return (
    <section
      id="funnels"
      className="py-20 sm:py-24 md:py-32 relative overflow-hidden border-t"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-color)',
      }}
    >
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#f59e0b] text-xs font-mono font-semibold uppercase tracking-widest mb-4 shadow-[0_0_14px_rgba(245,158,11,0.2)]">
            <Layers className="w-3.5 h-3.5" />
            <span>FUNNELS & LANDING PAGES</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Funnels & Designs Landing Pages That Convert
          </h2>

          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            GoHighLevel landing pages designed to turn visitors into booked calls and qualified leads.
          </p>
        </div>

        {/* Featured Project Funnel Card */}
        <div
          className="rounded-3xl border overflow-hidden shadow-2xl transition-all duration-300 card-crimson-glow"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-color)',
          }}
        >
          {/* Single Unified Table / Card */}
          <div className="flex flex-col">
            {/* Top: Funnel Visual Snapshot Showcase */}
            <div
              className="relative border-b overflow-hidden flex flex-col justify-between bg-[#080706]"
              style={{ borderColor: 'var(--border-color)' }}
            >
              {/* Snapshot Preview Window */}
              <div
                className="relative h-[400px] sm:h-[480px] md:h-[560px] lg:h-[640px] overflow-hidden group/preview cursor-pointer"
                onClick={() => {
                  setIsZoomOpen(true);
                  setZoomScale(1);
                  setViewMode('full');
                }}
              >
                {/* Visual Snapshot Image */}
                <img
                  src={snapshotUrl}
                  alt="Solar Panel Business GoHighLevel Landing Page Snapshot"
                  referrerPolicy="no-referrer"
                  className="w-full object-cover object-top transition-transform duration-700 group-hover/preview:scale-[1.01]"
                />

                {/* Top Overlay Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Solar Panel Funnel</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-[#f59e0b] border border-amber-500/30 text-[11px] font-mono font-semibold backdrop-blur-md">
                    Full-Page Design
                  </span>
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080706] via-[#080706]/70 to-transparent pointer-events-none" />

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3 p-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsZoomOpen(true);
                      setZoomScale(1);
                      setViewMode('full');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-mono text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Inspect Full Landing Page</span>
                  </button>
                  <p className="text-xs font-mono text-zinc-300">Click anywhere to view full vertical page</p>
                </div>

                {/* Corner Enlarge Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomOpen(true);
                    setZoomScale(1);
                    setViewMode('full');
                  }}
                  title="Enlarge & Scroll Landing Page"
                  className="absolute bottom-4 right-4 bg-black/80 hover:bg-amber-600 text-white border border-white/20 p-2.5 rounded-xl backdrop-blur-md shadow-lg transition-all hover:scale-110 cursor-pointer z-10"
                >
                  <ZoomIn className="w-4 h-4 text-[#f59e0b] group-hover:text-white" />
                </button>
              </div>

              {/* Action Bar Below Image */}
              <div
                className="p-4 sm:p-5 border-t flex flex-wrap items-center justify-between gap-3 bg-[#0d0a07]"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-zinc-400">Production-Ready GoHighLevel Asset</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsZoomOpen(true);
                      setZoomScale(1);
                      setViewMode('full');
                    }}
                    className="px-3 py-1.5 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-[#f59e0b] font-mono text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Full Snapshot</span>
                  </button>

                  <a
                    href={liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-110 text-white font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Content: Link, Title, Description, and Tags */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* The Link: Prominently featured link banner */}
              <div className="mb-6">
                <a
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 p-4 sm:p-5 rounded-2xl border-2 border-amber-500/70 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/5 hover:from-amber-500/25 hover:to-orange-500/20 hover:border-amber-400 text-amber-400 font-mono text-xs transition-all shadow-[0_0_24px_rgba(245,158,11,0.2)] hover:shadow-[0_0_34px_rgba(245,158,11,0.35)] cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-[#f59e0b] border border-amber-500/40 flex items-center justify-center shrink-0 shadow-sm group-hover/link:scale-105 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-white text-xs sm:text-sm tracking-wide">
                          Live Funnel Link
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-amber-400 text-black text-[9px] font-black uppercase tracking-wider shrink-0">
                          ACTIVE DEMO
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-zinc-300 truncate">
                        {liveDemoUrl}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center justify-center gap-1.5 font-bold text-amber-300 bg-black/50 px-4 py-2 rounded-xl border border-amber-500/30 shrink-0 group-hover/link:bg-amber-500 group-hover/link:text-black transition-colors w-full sm:w-auto">
                    <span>Open Funnel</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>

              {/* Title */}
              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Solar Panel: High-Converting GoHighLevel Landing Page & Appointment Funnel
              </h3>

              {/* Description */}
              <p
                className="text-base sm:text-lg leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                A conversion-engineered GoHighLevel landing page and appointment funnel custom-built for residential and commercial solar panel installation businesses. It transforms cold ad traffic from Facebook, Google Ads, and organic search into high-intent, pre-qualified appointments directly synced with the GoHighLevel CRM calendar.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
                {[
                  'GoHighLevel',
                  'Funnel Architecture',
                  'Landing Page Design',
                  'Calendar Booking',
                  'Lead Pre-Qualification',
                  'CRM Pipeline Sync',
                  'SMS & Email Automations',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border"
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

              {/* Bottom CTA Row */}
              <div
                className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <div>
                  <p className="text-xs font-mono text-zinc-400">Looking for a high-converting funnel for your business?</p>
                  <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Custom GoHighLevel funnels tailored to your offer.</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <a
                    href={liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-amber-500/40 hover:bg-amber-500/10 text-[#f59e0b] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Live Funnel</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenBookingForProject('Solar Panel GoHighLevel Funnel Build')}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#f97316] hover:brightness-110 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request a Custom Funnel</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Page Interactive Snapshot Modal */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsZoomOpen(false)}
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
                  Solar Panel Funnel • Full Landing Page Snapshot
                </h4>
              </div>

              {/* View Controls & Close */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
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
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-110 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-md ml-1 cursor-pointer"
                >
                  <span>Open Live Funnel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsZoomOpen(false);
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
                  src={snapshotUrl}
                  alt="Solar Panel Business Full Page Landing Page Snapshot"
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
