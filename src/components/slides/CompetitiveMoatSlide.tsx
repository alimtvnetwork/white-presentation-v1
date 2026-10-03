import React from 'react';
import type { CompetitiveMoatSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { MoatPillarCard } from './moat/MoatPillarCard';
import { ShieldAlert, Sparkles, Award } from 'lucide-react';

export const CompetitiveMoatSlide: React.FC<{ slide: CompetitiveMoatSlideData }> = ({ slide }) => {
  const currentStep = useDeckStore((s) => s.activeStep);
  const pillars = slide.moatPillars || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'STRATEGIC DEFENSE'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs flex items-center gap-1">
            <Award size={12} /> {slide.overallDefensibilityRating || 'Tier-1 Defensibility'}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
        >
          {slide.title || 'Multi-Dimensional Enterprise Competitive Moat'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Structural defensibility barriers providing decadal protection against commodity competition.'}
        </p>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-800 bg-slate-900/40 z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles size={18} className="text-amber-600 dark:text-amber-400 shrink-0" />
          <span className="font-poppins text-sm text-slate-200 font-medium">
            {slide.shimmerStatement}
          </span>
        </div>
        <div className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-mono text-xs font-bold shrink-0">
          Rating: {slide.overallDefensibilityRating}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[550px]">
        {pillars.map((pillar, idx) => (
          <MoatPillarCard
            key={pillar.id || idx}
            pillar={pillar}
            index={idx}
            currentStep={currentStep}
            accentColor="var(--pres-accent, #8b5cf6)"
          />
        ))}
      </div>

      <div className="plane-1-raised p-3.5 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-violet-400 font-bold">
          <ShieldAlert size={14} /> Structural Defense Invariant
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-xs">
          {slide.defensibilityNotes || 'Decadal switching costs enforced through sovereign architecture and proprietary weights.'}
        </span>
      </div>
    </div>
  );
};
