import React from 'react';
import type { ProductRoadmapTimelineSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { RoadmapMilestoneCard } from './roadmap/RoadmapMilestoneCard';
import { getStepPhase, getStepPhaseStyle } from '../../utils/stepProgression';
import { Calendar, Flag, Sparkles } from 'lucide-react';

export const ProductRoadmapTimelineSlide: React.FC<{ slide: ProductRoadmapTimelineSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const milestones = slide.milestones || [];
  const hasQuarter = Boolean(slide.currentQuarter);
  const hasSubtitle = Boolean(slide.subtitle);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'STRATEGIC HORIZON'}
          </span>
          {hasQuarter && (
            <span className="font-mono text-xs text-violet-300 bg-violet-500/10 px-2.5 py-0.5 rounded-full border border-violet-500/20 flex items-center gap-1.5">
              <Calendar size={12} /> Active Horizon: {slide.currentQuarter}
            </span>
          )}
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Multi-Quarter Strategic Delivery Milestones'}
        </h1>
        {hasSubtitle && (
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm mt-2">
            {slide.subtitle}
          </p>
        )}
      </div>

      <div className="z-10 my-auto">
        <div className="relative mb-6">
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 via-violet-500 to-indigo-500 rounded-full w-3/4" />
          </div>
          <div className="flex justify-between items-center text-xs font-mono mt-2" style={{ color: 'var(--pres-text-muted)' }}>
            <span className="flex items-center gap-1"><Flag size={12} className="text-emerald-400" /> Foundations Complete</span>
            <span className="flex items-center gap-1 text-violet-400"><Sparkles size={12} /> Active Execution</span>
            <span>Target Governance & Scale</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {milestones.map((m, idx) => {
            const phase = getStepPhase(idx, activeStep);
            const phaseStyle = getStepPhaseStyle(phase, '#8b5cf6');
            return (
              <div key={m.id || idx} style={phaseStyle} className="flex flex-col">
                <RoadmapMilestoneCard milestone={m} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-violet-400 font-bold">
          <Calendar size={14} /> Deterministic Milestone Commitments with Live Delivery Gates
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Product Roadmap & Engineering Timeline</span>
      </div>
    </div>
  );
};
