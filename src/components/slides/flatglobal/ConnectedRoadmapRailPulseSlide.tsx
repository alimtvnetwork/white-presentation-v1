import React from 'react';
import type { ConnectedRoadmapRailPulseSlideData } from '../../../types/flatGlobalSuiteTypes';
import { useDeckStore } from '../../../stores/deckStore';
import { RoadmapPhaseCard } from './RoadmapPhaseCard';
import { Activity, Gauge } from 'lucide-react';

export const ConnectedRoadmapRailPulseSlide: React.FC<{
  slide: ConnectedRoadmapRailPulseSlideData;
}> = ({ slide }) => {
  const activeStep = useDeckStore((s) => s.activeStep);
  const railNodes = slide.railNodes || [];
  const currentStep = Math.min(activeStep, Math.max(0, railNodes.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div>
          <span className="kicker-pill-badge mb-1">{slide.kicker || 'STRATEGIC EXECUTION HORIZON'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">
            {slide.title || 'Connected Engineering Roadmap & Active Pulse Rail'}
          </h1>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs text-slate-300">
          <span className="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-bold flex items-center gap-1.5">
            <Activity size={14} /> Active Quarter: {slide.currentActiveQuarter || 'Q3 2026'}
          </span>
          <span className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold flex items-center gap-1.5">
            <Gauge size={14} /> Velocity: {slide.overallVelocityScore || '98.4% On Schedule'}
          </span>
        </div>
      </div>

      <div className="z-10 relative my-auto">
        <div className="relative w-full h-8 mb-4 flex items-center">
          <svg className="w-full h-8" preserveAspectRatio="none">
            <line x1="4%" y1="50%" x2="96%" y2="50%" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="3" strokeDasharray="6 6" />
            <line x1="4%" y1="50%" x2={`${((currentStep + 1) / railNodes.length) * 100}%`} y2="50%" stroke="#6366f1" strokeWidth="4" />
          </svg>
          <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-400 shadow-[0_0_15px_#6366f1] rail-pulse-travel-anim" />
        </div>

        <div className="flex items-center justify-center gap-6">
          {railNodes.map((node, idx) => (
            <RoadmapPhaseCard
              key={node.id || idx}
              node={node}
              index={idx}
              isActive={currentStep === idx}
              isCompleted={currentStep > idx || node.operationalStatus === 'completed'}
            />
          ))}
        </div>
      </div>

      <div className="z-10 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="text-indigo-400 flex items-center gap-1.5">
          <Activity size={14} /> Real-time sprint telemetry synchronized across {railNodes.length} milestone tracks
        </span>
        <span>Traveling pulse indicator active (`.rail-pulse-travel-anim`)</span>
      </div>
    </div>
  );
};
