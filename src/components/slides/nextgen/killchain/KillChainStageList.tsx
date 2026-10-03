import React from 'react';
import type { KillChainStageDetail } from '../../../../types/nextGenArchetypes';
import { KillChainStageCard } from './KillChainStageCard';
import { ShieldAlert } from 'lucide-react';

interface KillChainStageListProps {
  stages: KillChainStageDetail[];
  currentStep: number;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

export const KillChainStageList: React.FC<KillChainStageListProps> = ({
  stages,
  currentStep,
  onSelect,
  onHover,
}) => {
  return (
    <div className="col-span-5 flex flex-col justify-between gap-3 h-full">
      <div className="flex items-center justify-between px-1 mb-1">
        <span className="font-mono text-sm font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase flex items-center gap-2">
          <ShieldAlert size={15} className="text-rose-400" />
          7-Stage Kill Chain Progression
        </span>
        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
          Stage {currentStep + 1} of {stages.length}
        </span>
      </div>
      <div className="flex flex-col justify-between gap-3.5 flex-1">
        {stages.map((stg, idx) => (
          <KillChainStageCard
            key={stg.stageName || idx}
            stage={stg}
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
