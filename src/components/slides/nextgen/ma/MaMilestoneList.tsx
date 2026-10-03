import React from 'react';
import type { SynergyMilestone } from '../../../../types/nextGenArchetypes';
import { MaMilestoneCard } from './MaMilestoneCard';
import { Layers } from 'lucide-react';

interface MaMilestoneListProps {
  milestones: SynergyMilestone[];
  currentStep: number;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

export const MaMilestoneList: React.FC<MaMilestoneListProps> = ({
  milestones,
  currentStep,
  onSelect,
  onHover,
}) => {
  return (
    <div className="col-span-5 flex flex-col justify-between gap-3 h-full">
      <div className="flex items-center justify-between px-1 mb-1">
        <span className="font-mono text-sm font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase flex items-center gap-2">
          <Layers size={15} className="text-emerald-400" />
          Synergy Realization Roadmap
        </span>
        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
          Phase {currentStep + 1} of {milestones.length}
        </span>
      </div>
      <div className="flex flex-col justify-between gap-3.5 flex-1">
        {milestones.map((m, idx) => (
          <MaMilestoneCard
            key={m.milestoneId || idx}
            milestone={m}
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
