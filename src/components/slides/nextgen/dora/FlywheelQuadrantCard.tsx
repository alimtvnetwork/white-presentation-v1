import React from 'react';
import type { FlywheelQuadrant } from '../../../../types/nextGenArchetypes';
import { CheckCircle2, RotateCw, ArrowRight } from 'lucide-react';

interface FlywheelQuadrantCardProps {
  quadrant: FlywheelQuadrant;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

export const FlywheelQuadrantCard: React.FC<FlywheelQuadrantCardProps> = ({
  quadrant,
  index,
  isActive,
  isCompleted,
  onSelect,
  onHover,
}) => {
  const kineticClass = isActive
    ? 'step-phase-active opacity-100 ring-2 ring-amber-500/70 shadow-2xl scale-[1.02]'
    : isCompleted
      ? 'step-phase-past opacity-75'
      : 'step-phase-future opacity-40 blur-[1.25px]';

  return (
    <div
      onClick={() => onSelect(index)}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised rounded-2xl p-4 border flex items-center justify-between transition-all duration-300 cursor-pointer ${kineticClass}`}
    >
      <div className="flex items-center gap-3.5">
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm ${
            isActive
              ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/30'
              : isCompleted
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-black/20 dark:bg-white/5 text-slate-400'
          }`}
        >
          {isCompleted ? <CheckCircle2 size={18} className="text-emerald-400" /> : `0${index + 1}`}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-sm font-bold text-slate-900 dark:text-slate-100">{quadrant.name}</span>
            <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
              {quadrant.status}
            </span>
          </div>
          <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono flex items-center gap-2">
            <span className="text-emerald-400 font-semibold">{quadrant.keyMetric}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <RotateCw size={11} className={quadrant.isFlywheelAccelerating ? 'text-amber-900 dark:text-amber-400 animate-spin' : ''} />
              {quadrant.isFlywheelAccelerating ? 'Accelerating' : 'Optimized'}
            </span>
          </p>
        </div>
      </div>
      <ArrowRight size={16} className={`transition-transform ${isActive ? 'text-amber-900 dark:text-amber-400 translate-x-1' : 'text-slate-600'}`} />
    </div>
  );
};
