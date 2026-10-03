import React from 'react';
import type { TalentCompetencyRadarSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { LevelMilestoneRail } from './radar/LevelMilestoneRail';
import { CompetencyPolygonRadar } from './radar/CompetencyPolygonRadar';
import { CompetencyScorecardDetails } from './radar/CompetencyScorecardDetails';
import { Award, ShieldCheck, Terminal } from 'lucide-react';

export const TalentCompetencyRadarSlide: React.FC<{ slide: TalentCompetencyRadarSlideData }> = ({
  slide,
}) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const milestones = slide.levelMilestones || [];
  const currentMilestone = milestones[Math.min(activeStep, Math.max(0, milestones.length - 1))] || milestones[0];
  const axes = currentMilestone?.competencyAxes || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center gap-1.5">
            <Award size={12} /> {slide.kicker || 'TALENT ARCHITECTURE'}
          </span>
          <span className="font-mono text-xs text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
            {slide.frameworkName || 'Universal Engineering Ladder v4'} | Level {activeStep + 1} of {Math.max(milestones.length, 1)}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Engineering Competency Framework & Executive Seniority Ladder'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Multidimensional Technical Evaluation from Software Engineer to Chief Engineer'}
        </p>
      </div>

      <div className="z-10 grid grid-cols-12 gap-6 my-auto items-stretch h-[540px]">
        <div className="col-span-4 h-full">
          <LevelMilestoneRail milestones={milestones} activeStep={activeStep} />
        </div>
        <div className="col-span-4 h-full">
          <CompetencyPolygonRadar axes={axes} />
        </div>
        <div className="col-span-4 h-full">
          <CompetencyScorecardDetails
            axes={axes}
            hasPromotionalRecommendation={slide.hasPromotionalRecommendation ?? true}
            evaluatorName={slide.evaluatorName || 'Alim Ul Karim'}
            evaluatorRole={slide.evaluatorRole || 'Chief Software Engineer'}
          />
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-purple-400 font-bold">
          <ShieldCheck size={14} className="text-emerald-400" />
          Track: {slide.targetRoleTrack || 'Systems & Presentation Architecture'} | Objective Rubric Validated
        </span>
        <span className="flex items-center gap-1.5 text-slate-400">
          <Terminal size={12} />
          Evaluator: {slide.evaluatorName || 'Alim Ul Karim'} ({slide.evaluatorRole || 'Chief Software Engineer'})
        </span>
      </div>
    </div>
  );
};
