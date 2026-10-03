import React from 'react';
import type { GoldenPathTemplate } from '../../../../types/nextGenArchetypes';
import { IdpTemplateCard } from './IdpTemplateCard';
import { Terminal } from 'lucide-react';

interface IdpTemplateListProps {
  templates: GoldenPathTemplate[];
  currentStep: number;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

export const IdpTemplateList: React.FC<IdpTemplateListProps> = ({
  templates,
  currentStep,
  onSelect,
  onHover,
}) => {
  return (
    <div className="col-span-5 flex flex-col justify-between gap-3 h-full">
      <div className="flex items-center justify-between px-1 mb-1">
        <span className="font-mono text-sm font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase flex items-center gap-2">
          <Terminal size={15} className="text-violet-400" />
          Certified Golden Templates
        </span>
        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
          Step {currentStep + 1} of {templates.length}
        </span>
      </div>
      <div className="flex flex-col justify-between gap-3.5 flex-1">
        {templates.map((tpl, idx) => (
          <IdpTemplateCard
            key={tpl.templateId || idx}
            template={tpl}
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
