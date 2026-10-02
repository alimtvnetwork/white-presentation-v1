import React, { useState } from 'react';
import type { CustomerJourneySlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Compass, User } from 'lucide-react';
import { JourneyStageCard } from './journey/JourneyStageCard';

const JourneyHeader: React.FC<{ kicker?: string; title?: string; persona?: string }> = ({ kicker, title, persona }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  return (
    <div className="z-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30">
          {kicker || 'CUSTOMER EXPERIENCE JOURNEY'}
        </span>
        {persona && (
          <span className="flex items-center gap-1 font-mono text-xs text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            <User size={12} /> Persona: {persona}
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
        {title || 'End-to-End Enterprise Experience Lifecycle'}
      </h1>
    </div>
  );
};

export const CustomerJourneyMapSlide: React.FC<{ slide: CustomerJourneySlideData }> = ({ slide }) => {
  const phases = slide.phases || [];
  const activeInitial = phases.find((p) => Boolean(p.isActivePhase))?.id || phases[0]?.id;
  const [selectedId, setSelectedId] = useState<string>(activeInitial || '');

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <JourneyHeader kicker={slide.kicker} title={slide.title} persona={slide.personaName} />

      <div className="z-10 my-auto flex gap-4 items-stretch">
        {phases.map((phase, idx) => (
          <JourneyStageCard
            key={phase.id || idx}
            phase={phase}
            phaseIdx={idx}
            isSelected={selectedId === phase.id}
            onSelect={() => setSelectedId(phase.id)}
          />
        ))}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-amber-400 font-bold">
          <Compass size={14} /> Multi-Touchpoint Satisfaction & Opportunity Pipeline
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Customer Experience Journey</span>
      </div>
    </div>
  );
};
