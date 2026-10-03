import React from 'react';
import type { LogisticsCorridorNode } from '../../../../types/nextGenArchetypes';
import { CorridorCard } from './CorridorCard';
import { Globe } from 'lucide-react';

interface CorridorListProps {
  corridors: LogisticsCorridorNode[];
  currentStep: number;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

export const CorridorList: React.FC<CorridorListProps> = ({
  corridors,
  currentStep,
  onSelect,
  onHover,
}) => {
  return (
    <div className="col-span-5 flex flex-col justify-between gap-3 h-full">
      <div className="flex items-center justify-between px-1 mb-1">
        <span className="font-mono text-sm font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase flex items-center gap-2">
          <Globe size={15} className="text-cyan-400" />
          Autonomous Logistics Corridors
        </span>
        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
          Corridor {currentStep + 1} of {corridors.length}
        </span>
      </div>
      <div className="flex flex-col justify-between gap-3.5 flex-1">
        {corridors.map((c, idx) => (
          <CorridorCard
            key={c.corridorId || idx}
            corridor={c}
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
