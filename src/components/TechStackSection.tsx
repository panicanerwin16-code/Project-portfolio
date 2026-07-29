import React, { useState } from 'react';
import { 
  Cpu, 
  Orbit, 
  ExternalLink, 
  Play, 
  Pause, 
  Compass, 
  Sparkles, 
  Grid, 
  Zap,
  Globe,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { techStackData } from '../data/portfolioData';
import { TechStackItem } from '../types';
import { TechBrandIcon } from './TechBrandIcons';

export const TechStackSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [hoveredItem, setHoveredItem] = useState<TechStackItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'orbit' | 'grid'>('orbit');

  // Categorize tech items into orbits
  const innerOrbitItems = techStackData.filter(i => i.orbit === 'inner');
  const middleOrbitItems = techStackData.filter(i => i.orbit === 'middle');
  const outerOrbitItems = techStackData.filter(i => i.orbit === 'outer');

  const categories = ['All', 'Automation Engine', 'AI Intelligence', 'CRM & Messaging', 'Databases & Hubs'];

  const filteredItems = techStackData.filter(item => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Automation Engine') return item.category.includes('Automation') || item.category.includes('Workflows') || item.category.includes('SaaS');
    if (activeCategory === 'AI Intelligence') return item.category.includes('AI') || item.category.includes('Multimodal') || item.category.includes('Reasoning');
    if (activeCategory === 'CRM & Messaging') return item.category.includes('CRM') || item.category.includes('Voice') || item.category.includes('SMS') || item.category.includes('Communication');
    if (activeCategory === 'Databases & Hubs') return item.category.includes('Database') || item.category.includes('Relational') || item.category.includes('Knowledge') || item.category.includes('Productivity');
    return true;
  });

  const isHighlighted = (item: TechStackItem) => {
    if (activeCategory === 'All') return true;
    return filteredItems.some(f => f.name === item.name);
  };

  // Base orbit speeds in seconds
  const innerSpeed = 20 / speedMultiplier;
  const middleSpeed = 35 / speedMultiplier;
  const outerSpeed = 50 / speedMultiplier;

  return (
    <section id="tech-stack" className="py-24 md:py-32 relative bg-[#050505] text-white overflow-hidden select-none border-y border-slate-900/80">
      
      {/* Background Cosmic Grid & Glowing Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Futuristic Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        
        {/* Core Orange/Amber Radial Glow behind center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

        {/* Outer Cyan Accent Glows */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Animated Particles Drifting Slowly */}
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-amber-400 rounded-full blur-[1px] animate-particle-1" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-sky-400 rounded-full blur-[1px] animate-particle-2" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400 rounded-full blur-[1px] animate-particle-3" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-rose-400 rounded-full blur-[1px] animate-particle-2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Orbit className="w-4 h-4 animate-spin-slow text-amber-400" />
            <span>Interactive Tech Stack System</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Interconnected <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">Neural Ecosystem</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore the specialized automation engines, multimodal AI models, CRMs, and relational databases that power my autonomous business workflows.
          </p>
        </div>

        {/* Controls & Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 max-w-5xl mx-auto mb-8 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar max-w-full">
            <Filter className="w-4 h-4 text-slate-500 ml-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* HUD Control Buttons (Pause, Speed, View Switch) */}
          <div className="flex items-center gap-2 ml-auto">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 bg-slate-950/80 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewMode('orbit')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'orbit' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400 hover:text-white'
                }`}
                title="Solar System Orbit View"
              >
                <Orbit className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Orbit View</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400 hover:text-white'
                }`}
                title="Tactical Grid View"
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tactical Grid</span>
              </button>
            </div>

            {/* Orbit Motion Play/Pause */}
            {viewMode === 'orbit' && (
              <>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                    isPaused
                      ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 shadow-[0_0_10px_rgba(244,63,94,0.3)]'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'
                  }`}
                  title={isPaused ? "Resume Motion" : "Pause Motion"}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
                  <span className="hidden md:inline">{isPaused ? "Resume" : "Pause"}</span>
                </button>

                {/* Speed Multiplier */}
                <button
                  onClick={() => {
                    if (speedMultiplier === 1) setSpeedMultiplier(1.5);
                    else if (speedMultiplier === 1.5) setSpeedMultiplier(0.5);
                    else setSpeedMultiplier(1);
                  }}
                  className="px-2.5 py-1.5 bg-slate-800/80 border border-slate-700 hover:border-slate-600 rounded-xl text-xs font-mono text-amber-400 flex items-center gap-1"
                  title="Toggle Orbit Rotation Speed"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>{speedMultiplier}x</span>
                </button>
              </>
            )}
          </div>

        </div>

        {/* MAIN SOLAR SYSTEM ORBIT CONTAINER */}
        {viewMode === 'orbit' ? (
          <div className="relative w-full max-w-[850px] aspect-square mx-auto flex items-center justify-center my-4 overflow-visible scale-90 sm:scale-100 transition-transform">
            
            {/* SVG Background Laser Lines & Radar Degree Ticks */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 800">
              <defs>
                <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Central Radar Glow Area */}
              <circle cx="400" cy="400" r="360" fill="url(#orbitGlow)" />

              {/* Orbit Path 1: Inner (Radius 150px) */}
              <circle 
                cx="400" 
                cy="400" 
                r="150" 
                fill="none" 
                stroke="#f59e0b" 
                strokeWidth="1.2" 
                strokeDasharray="4 6" 
                opacity="0.35" 
              />

              {/* Orbit Path 2: Middle (Radius 250px) */}
              <circle 
                cx="400" 
                cy="400" 
                r="250" 
                fill="none" 
                stroke="#38bdf8" 
                strokeWidth="1.2" 
                strokeDasharray="6 8" 
                opacity="0.3" 
              />

              {/* Orbit Path 3: Outer (Radius 350px) */}
              <circle 
                cx="400" 
                cy="400" 
                r="350" 
                fill="none" 
                stroke="#a855f7" 
                strokeWidth="1.2" 
                strokeDasharray="8 10" 
                opacity="0.25" 
              />

              {/* Cardinal Crosshair Rays */}
              <line x1="50" y1="400" x2="750" y2="400" stroke="#334155" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
              <line x1="400" y1="50" x2="400" y2="750" stroke="#334155" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />

              {/* Degree Text Labels for Sci-Fi HUD Vibe */}
              <text x="760" y="404" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="start">000°</text>
              <text x="400" y="35" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">090°</text>
              <text x="35" y="404" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="end">180°</text>
              <text x="400" y="775" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">270°</text>
            </svg>

            {/* CENTER CORE STACK REACTOR OBJECT */}
            <div className="absolute z-20 flex flex-col items-center justify-center">
              {/* Outer Core Pulsing Halo */}
              <div className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-rose-500/30 blur-md animate-core-pulse pointer-events-none" />
              
              {/* Core Disk Object */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-950/90 border-2 border-amber-500/80 shadow-[0_0_35px_rgba(245,158,11,0.5)] flex flex-col items-center justify-center p-3 text-center transition-transform hover:scale-105 duration-300 group cursor-pointer">
                {/* Rotating Tech HUD Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-amber-400/40 animate-spin-slow pointer-events-none" />
                
                {/* Center Core Chip Icon */}
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 mb-1 shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                  <Cpu className="w-5 h-5 animate-pulse" />
                </div>

                {/* Core Label */}
                <span className="text-[11px] font-black tracking-widest text-amber-400 uppercase drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]">
                  CORE STACK
                </span>
                
                <span className="text-[9px] font-mono text-slate-400 mt-0.5">
                  15 MODULES
                </span>

                {/* Status Dot */}
                <div className="mt-1 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[8px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>ONLINE</span>
                </div>
              </div>
            </div>

            {/* ORBIT 1: INNER ORBIT (Radius 150px) - Clockwise (20s) */}
            <div 
              className={`absolute w-[300px] h-[300px] rounded-full z-10 flex items-center justify-center ${
                isPaused ? '' : 'animate-orbit-cw'
              }`}
              style={{
                animationDuration: `${innerSpeed}s`,
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {innerOrbitItems.map((item, idx) => {
                const total = innerOrbitItems.length;
                const angleDeg = (360 / total) * idx;
                const highlight = isHighlighted(item);

                return (
                  <OrbitingPlanet
                    key={item.name}
                    item={item}
                    radius={150}
                    angleDeg={angleDeg}
                    orbitSpeed={innerSpeed}
                    direction="cw"
                    isPaused={isPaused}
                    isHighlighted={highlight}
                    onHover={setHoveredItem}
                  />
                );
              })}
            </div>

            {/* ORBIT 2: MIDDLE ORBIT (Radius 250px) - Counter-Clockwise (35s) */}
            <div 
              className={`absolute w-[500px] h-[500px] rounded-full z-10 flex items-center justify-center ${
                isPaused ? '' : 'animate-orbit-ccw'
              }`}
              style={{
                animationDuration: `${middleSpeed}s`,
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {middleOrbitItems.map((item, idx) => {
                const total = middleOrbitItems.length;
                const angleDeg = (360 / total) * idx;
                const highlight = isHighlighted(item);

                return (
                  <OrbitingPlanet
                    key={item.name}
                    item={item}
                    radius={250}
                    angleDeg={angleDeg}
                    orbitSpeed={middleSpeed}
                    direction="ccw"
                    isPaused={isPaused}
                    isHighlighted={highlight}
                    onHover={setHoveredItem}
                  />
                );
              })}
            </div>

            {/* ORBIT 3: OUTER ORBIT (Radius 350px) - Clockwise (50s) */}
            <div 
              className={`absolute w-[700px] h-[700px] rounded-full z-10 flex items-center justify-center ${
                isPaused ? '' : 'animate-orbit-cw'
              }`}
              style={{
                animationDuration: `${outerSpeed}s`,
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {outerOrbitItems.map((item, idx) => {
                const total = outerOrbitItems.length;
                const angleDeg = (360 / total) * idx;
                const highlight = isHighlighted(item);

                return (
                  <OrbitingPlanet
                    key={item.name}
                    item={item}
                    radius={350}
                    angleDeg={angleDeg}
                    orbitSpeed={outerSpeed}
                    direction="cw"
                    isPaused={isPaused}
                    isHighlighted={highlight}
                    onHover={setHoveredItem}
                  />
                );
              })}
            </div>

          </div>
        ) : (
          /* TACTICAL GRID VIEW (Alternative View Mode & Responsive Mobile Fallback) */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto my-8">
            {filteredItems.map((item) => (
              <a
                key={item.name}
                href={item.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white border shadow-inner transition-transform group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${item.accentColor || '#f59e0b'}15`,
                      borderColor: `${item.accentColor || '#f59e0b'}40`,
                      color: item.accentColor || '#f59e0b'
                    }}
                  >
                    <TechBrandIcon name={item.name} className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    {item.experience && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-amber-400 border border-amber-500/20">
                        {item.experience}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>{item.category}</span>
                  <span className="text-amber-400/80 group-hover:translate-x-0.5 transition-transform">Explore ↗</span>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* HOVER TOOLTIP SCI-FI HUD CARD (Displays when user hovers any planet) */}
        {hoveredItem && viewMode === 'orbit' && (
          <div className="max-w-md mx-auto mt-6 p-4 rounded-2xl bg-slate-900/90 border border-amber-500/50 backdrop-blur-xl shadow-[0_0_30px_rgba(245,158,11,0.25)] animate-in fade-in slide-in-from-bottom-2 duration-200 relative z-30">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-md"
                  style={{ 
                    backgroundColor: `${hoveredItem.accentColor || '#f59e0b'}20`,
                    borderColor: `${hoveredItem.accentColor || '#f59e0b'}50`,
                    color: hoveredItem.accentColor || '#f59e0b'
                  }}
                >
                  <TechBrandIcon name={hoveredItem.name} className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-white">{hoveredItem.name}</h4>
                    {hoveredItem.experience && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        {hoveredItem.experience}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 font-mono">{hoveredItem.category}</span>
                </div>
              </div>

              {hoveredItem.link && (
                <a
                  href={hoveredItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors flex items-center gap-1 text-xs"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <p className="text-xs text-slate-300 mt-3 leading-relaxed">
              {hoveredItem.description}
            </p>

            <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3 h-3" /> Fully Integrated in Workflows
              </span>
              <span>Click icon to view platform</span>
            </div>
          </div>
        )}

        {/* Bottom Legend & Tech Stats */}
        <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl font-black text-amber-400">100%</div>
            <div className="text-xs text-slate-400 font-mono mt-1">API & Webhook Native</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl font-black text-sky-400">15+</div>
            <div className="text-xs text-slate-400 font-mono mt-1">Core Tech Platforms</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl font-black text-rose-400">99.9%</div>
            <div className="text-xs text-slate-400 font-mono mt-1">Execution Uptime</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl font-black text-purple-400">Zero</div>
            <div className="text-xs text-slate-400 font-mono mt-1">Forced Vendor Lock-in</div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Sub-component for individual orbiting planets/icons
interface OrbitingPlanetProps {
  item: TechStackItem;
  radius: number;
  angleDeg: number;
  orbitSpeed: number;
  direction: 'cw' | 'ccw';
  isPaused: boolean;
  isHighlighted: boolean;
  onHover: (item: TechStackItem | null) => void;
}

const OrbitingPlanet: React.FC<OrbitingPlanetProps> = ({
  item,
  radius,
  angleDeg,
  orbitSpeed,
  direction,
  isPaused,
  isHighlighted,
  onHover,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Position on circle using trigonometric angles
  const angleRad = (angleDeg * Math.PI) / 180;
  const x = radius * Math.cos(angleRad);
  const y = radius * Math.sin(angleRad);

  const counterAnimClass = direction === 'cw' ? 'animate-counter-cw' : 'animate-counter-ccw';

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {/* Counter Rotation Wrapper to keep icon upright */}
      <div
        className={`${counterAnimClass} ${isPaused || isHovered ? '[animation-play-state:paused]' : ''}`}
        style={{
          animationDuration: `${orbitSpeed}s`,
          animationPlayState: isPaused || isHovered ? 'paused' : 'running',
        }}
      >
        {/* Subtle Float Animation Wrapper */}
        <div className="animate-float-subtle">
          
          <a
            href={item.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => {
              setIsHovered(true);
              onHover(item);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              onHover(null);
            }}
            className={`relative group block rounded-2xl p-2.5 sm:p-3 transition-all duration-300 cursor-pointer ${
              isHovered ? 'scale-125 z-50' : 'scale-100 hover:scale-110'
            } ${isHighlighted ? 'opacity-100' : 'opacity-30 blur-[0.5px]'}`}
            style={{
              backgroundColor: '#0a0d14',
              border: `1.5px solid ${isHovered ? item.accentColor || '#f59e0b' : `${item.accentColor || '#f59e0b'}40`}`,
              boxShadow: isHovered 
                ? `0 0 25px ${item.glowColor || 'rgba(245,158,11,0.6)'}` 
                : `0 0 10px ${item.glowColor || 'rgba(245,158,11,0.15)'}`,
            }}
          >
            {/* Tech Icon */}
            <div 
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ color: item.accentColor || '#f59e0b' }}
            >
              <TechBrandIcon name={item.name} className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Hover Tooltip Label */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-[10px] font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg z-50">
              {item.name}
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};
