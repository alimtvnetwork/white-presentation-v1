import React from 'react';
import type { TechStackGridSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Sparkles } from 'lucide-react';
import { TechTierRow } from './tech/TechTierRow';
import { getStepPhase, getStepPhaseStyle } from '../../utils/stepProgression';

const TechStackHeader: React.FC<{ kicker?: string; title?: string }> = ({ kicker, title }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  return (
    <div className="z-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-sky-500/10 text-sky-400 border border-sky-500/30">
          {kicker || 'ENTERPRISE TECH STACK'}
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Production Technology Portfolio</span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
      >
        {title || 'Modern Polyglot Enterprise Technology Stack'}
      </h1>
    </div>
  );
};

export const TechStackGridSlide: React.FC<{ slide: TechStackGridSlideData }> = ({ slide }) => {
  const activeStep = useDeckStore((s) => s.activeStep);
  const pillars = slide.stackPillars || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <TechStackHeader kicker={slide.kicker} title={slide.title} />

      <div className="z-10 my-auto flex gap-5 items-stretch">
        {pillars.map((pillar, idx) => {
          const phase = getStepPhase(idx, activeStep);
          const phaseStyle = getStepPhaseStyle(phase, '#0284c7');
          return (
            <div key={pillar.id || idx} style={phaseStyle} className="flex-1 flex flex-col">
              <TechTierRow pillar={pillar} idx={idx} />
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-sky-400 font-bold">
          <Sparkles size={14} /> 100% Deterministic & Audited Architecture Stacks
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Verified Production Dependencies</span>
      </div>
    </div>
  );
};
