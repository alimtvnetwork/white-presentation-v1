import React from 'react';
import type { Soc2LadderStep } from '../../../../types/nextGenArchetypes';
import { LadderStepCard } from './LadderStepCard';
import { ShieldCheck } from 'lucide-react';

interface LadderStepListProps {
  steps: Soc2LadderStep[];
  currentStep: number;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

export const LadderStepList: React.FC<LadderStepListProps> = ({
  steps,
  currentStep,
  onSelect,
  onHover,
}) => {
  return (
    <div className="col-span-5 flex flex-col justify-between gap-2.5 h-full">
      <div className="flex items-center justify-between px-1 mb-1">
        <span className="font-mono text-sm font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase flex items-center gap-2">
          <ShieldCheck size={15} className="text-emerald-400" />
          5-Stage Attestation Ladder
        </span>
        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
          Stage {currentStep + 1} of {steps.length}
        </span>
      </div>
      <div className="flex flex-col justify-between gap-2 flex-1">
        {steps.map((st, idx) => (
          <LadderStepCard
            key={st.title || idx}
            step={st}
            index={idx}
            isActive={idx === currentStep}
            isCompleted={idx < currentStep}
            onSelect={onSelect}
            onHover={onHover}
          />
        ))}
      </div>
    </div>
  );
};
