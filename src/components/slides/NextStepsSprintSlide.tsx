import React from 'react';
import type { NextStepsSprintSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { SprintPhaseCard } from './sprint/SprintPhaseCard';

export const NextStepsSprintSlide: React.FC<{ slide: NextStepsSprintSlideData }> = ({ slide }) => {
  const { activeStep, jumpToStep } = useDeckStore();

  const handleStepSelect = (index: number) => {
    jumpToStep(index);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-16 select-none overflow-hidden">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            {slide.kicker || 'EXECUTION ROADMAP'}
          </span>
          <span className="text-xs font-mono text-slate-400">
            Phase: <strong className="text-slate-200">{slide.sprintTimelineTitle || 'Sprint Alignment'}</strong>
          </span>
        </div>
        <h2 className="font-ubuntu text-4xl font-extrabold tracking-tight text-white mb-2">
          {slide.title}
        </h2>
        {slide.subtitle ? (
          <p className="font-poppins text-lg text-slate-400 max-w-4xl">{slide.subtitle}</p>
        ) : null}
      </div>

      <div className="grid grid-cols-4 gap-5 my-auto">
        {(slide.sprints || []).map((sp, idx) => (
          <SprintPhaseCard
            key={idx}
            sp={sp}
            idx={idx}
            isActive={idx === activeStep}
            isCompleted={idx < activeStep}
            onSelect={handleStepSelect}
          />
        ))}
      </div>

      <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400">
          Delivery Governance: <strong className="text-indigo-300">Continuous Zero-Downtime</strong>
        </span>
        <span className="text-slate-500">
          Step-by-step kinetic progression active (Step {activeStep + 1} of {(slide.sprints || []).length})
        </span>
      </div>
    </div>
  );
};
