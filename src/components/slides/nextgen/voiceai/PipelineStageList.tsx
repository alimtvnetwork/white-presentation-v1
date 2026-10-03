import React from 'react';
import type { VoicePipelineStage } from '../../../../types/nextGenArchetypes';
import { PipelineStageCard } from './PipelineStageCard';
import { Mic } from 'lucide-react';

interface PipelineStageListProps {
  stages: VoicePipelineStage[];
  currentStep: number;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

export const PipelineStageList: React.FC<PipelineStageListProps> = ({
  stages,
  currentStep,
  onSelect,
  onHover,
}) => {
  return (
    <div className="col-span-5 flex flex-col justify-between gap-3 h-full">
      <div className="flex items-center justify-between px-1 mb-1">
        <span className="font-mono text-sm font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase flex items-center gap-2">
          <Mic size={15} className="text-indigo-400" />
          Full-Duplex Pipeline Stages
        </span>
        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          Stage {currentStep + 1} of {stages.length}
        </span>
      </div>
      <div className="flex flex-col justify-between gap-3.5 flex-1">
        {stages.map((stg, idx) => (
          <PipelineStageCard
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
