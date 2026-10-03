import React from 'react';
import type { FlywheelQuadrant } from '../../../../types/nextGenArchetypes';
import { FlywheelQuadrantCard } from './FlywheelQuadrantCard';
import { RotateCw } from 'lucide-react';

interface FlywheelQuadrantListProps {
  quadrants: FlywheelQuadrant[];
  currentStep: number;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

export const FlywheelQuadrantList: React.FC<FlywheelQuadrantListProps> = ({
  quadrants,
  currentStep,
  onSelect,
  onHover,
}) => {
  return (
    <div className="col-span-5 flex flex-col justify-between gap-3 h-full">
      <div className="flex items-center justify-between px-1 mb-1">
        <span className="font-mono text-sm font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase flex items-center gap-2">
          <RotateCw size={15} className="text-amber-900 dark:text-amber-400" />
          4-Quadrant Delivery Flywheel
        </span>
        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
          Quadrant {currentStep + 1} of {quadrants.length}
        </span>
      </div>
      <div className="flex flex-col justify-between gap-3.5 flex-1">
        {quadrants.map((q, idx) => (
          <FlywheelQuadrantCard
            key={q.name || idx}
            quadrant={q}
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
