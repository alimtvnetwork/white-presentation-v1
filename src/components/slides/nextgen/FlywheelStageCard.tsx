import React from 'react';
import type { FlywheelQuadrant } from '../../../types/nextGenArchetypes';
import { RotateCw, TrendingUp, CheckCircle2, Zap } from 'lucide-react';

interface FlywheelStageCardProps {
  quadrant: FlywheelQuadrant;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onHover: (index: number | null) => void;
}

export const FlywheelStageCard: React.FC<FlywheelStageCardProps> = ({
  quadrant,
  index,
  isActive,
  isCompleted,
  onHover,
}) => {
  const stepPhaseClass = isActive
    ? 'step-phase-active ring-2 ring-violet-500/60 shadow-2xl opacity-100'
    : isCompleted
      ? 'step-phase-past opacity-75'
      : 'step-phase-future opacity-40';

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${stepPhaseClass} bg-gradient-to-b from-violet-500/10 to-emerald-500/5`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-violet-600/20 text-slate-900 dark:text-violet-200 border border-violet-500/30 flex items-center gap-1.5">
            <RotateCw size={12} className="text-violet-400" />
            QUADRANT 0{quadrant.quadrantIndex}
          </span>
          <span className="font-mono text-xs text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-bold">
            {quadrant.status}
          </span>
        </div>

        <h3 className="text-xl font-bold font-ubuntu tracking-tight leading-snug mb-3">
          {quadrant.name}
        </h3>

        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-xs leading-relaxed mb-4">
          {quadrant.description}
        </p>

        <div className="p-3.5 rounded-2xl bg-black/15 dark:bg-black/35 border border-white/5 font-mono">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider block mb-1">
            Target Telemetry
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-emerald-400 flex items-center gap-1.5">
            <TrendingUp size={14} />
            {quadrant.keyMetric}
          </span>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs">
        <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
          <CheckCircle2 size={13} className="text-emerald-400" /> Continuous Flow
        </span>
        {quadrant.isFlywheelAccelerating && (
          <span className="flex items-center gap-1 text-violet-400 font-semibold">
            <Zap size={12} /> Accelerating
          </span>
        )}
      </div>
    </div>
  );
};
