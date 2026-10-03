import React, { useState } from 'react';
import type { EsgDecarbonizationRoadmapSlideData } from '../../../types/nextGenArchetypes';
import { createEsgDecarbonizationRoadmapSlide } from '../../../utils/nextGenSlideFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { DecarbonizationMilestoneCard } from './DecarbonizationMilestoneCard';
import { EmissionsWedgeChart } from './EmissionsWedgeChart';
import { Leaf, Award } from 'lucide-react';

export const EsgDecarbonizationRoadmapSlide: React.FC<{ slide?: EsgDecarbonizationRoadmapSlideData; data?: EsgDecarbonizationRoadmapSlideData }> = ({ slide, data: pData }) => {
  const fallback = createEsgDecarbonizationRoadmapSlide('default-esg-decarb');
  const data = slide || pData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const milestones = data.milestoneYears?.length ? data.milestoneYears : fallback.milestoneYears;
  const wedges = data.reductionWedges?.length ? data.reductionWedges : fallback.reductionWedges;
  const energyMix = data.energyMix || fallback.energyMix;
  const scorecard = data.esgScorecard || fallback.esgScorecard;
  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 0);
  const currentStep = Math.min(Math.max(0, rawStep), milestones.length - 1);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Leaf size={15} className="text-emerald-500" />
              {data.kicker || 'ESG SUSTAINABILITY & NET-ZERO PATHWAY'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <Award size={13} className="text-emerald-500" /> MSCI Rating: {scorecard.msciEsgScore} | CDP: {scorecard.cdpRating} List
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Corporate Decarbonization Roadmap & Scope 1-3 Trajectory'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Science Based Targets initiative (SBTi) 1.5°C Paris Agreement pathway driving systematic carbon reduction across Scopes 1, 2, and 3 to achieve Net Zero by 2030.'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] block uppercase">Renewables</span><span className="text-xl font-bold text-slate-900 dark:text-emerald-400">{energyMix.renewablePercentage}% Mix</span></div>
          <div className="w-[1px] h-8 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] block uppercase">CSRD</span><span className="text-xl font-bold text-slate-900 dark:text-sky-400">{scorecard.isCompliantWithCsrd ? 'EU CSRD Ready' : 'Pending'}</span></div>
          <div className="w-[1px] h-8 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] block uppercase">Data Centers</span><span className="text-xl font-bold text-slate-900 dark:text-violet-400">{energyMix.isCarbonNeutralDataCenterAchieved ? 'Carbon Neutral' : 'Transition'}</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[490px] items-stretch">
        {milestones.map((ms, idx) => (
          <DecarbonizationMilestoneCard key={ms.year} milestone={ms} index={idx} currentStep={currentStep} onHover={setHoveredStep} />
        ))}
      </div>

      <EmissionsWedgeChart wedges={wedges} currentYear={milestones[currentStep]?.year || 2026} currentStep={currentStep} totalMilestones={milestones.length} />
    </div>
  );
};
