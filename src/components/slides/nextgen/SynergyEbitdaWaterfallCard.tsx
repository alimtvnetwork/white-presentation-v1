import React from 'react';
import type { SynergyMilestone } from '../../../types/nextGenArchetypes';
import { Calendar, ArrowUpRight, CheckCircle2, Activity } from 'lucide-react';

interface SynergyEbitdaWaterfallCardProps {
  milestone: SynergyMilestone;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onHover: (index: number | null) => void;
}

export const SynergyEbitdaWaterfallCard: React.FC<SynergyEbitdaWaterfallCardProps> = ({
  milestone,
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
      className={`plane-1-raised rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${stepPhaseClass} bg-gradient-to-b from-indigo-500/10 to-violet-500/5`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-violet-600/20 text-slate-900 dark:text-violet-200 border border-violet-500/30 flex items-center gap-1.5">
            <Calendar size={13} className="text-violet-400" />
            {milestone.targetQuarter}
          </span>
          {milestone.isEpsAccretive && (
            <span className="font-mono text-xs text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1 font-semibold">
              <ArrowUpRight size={12} /> EPS Accretive
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold font-ubuntu tracking-tight leading-snug mb-3">
          {milestone.phaseName}
        </h3>

        <div className="p-3.5 rounded-2xl bg-black/15 dark:bg-black/35 border border-white/5 font-mono space-y-2 mb-3">
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] uppercase tracking-wider">
              Projected Savings
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-sky-300">
              ${milestone.projectedSavingsMillionUsd}M
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] uppercase tracking-wider">
              Realized Savings
            </span>
            <span className="text-base font-bold text-slate-900 dark:text-emerald-400">
              ${milestone.actualSavingsMillionUsd}M
            </span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-poppins leading-relaxed">
          <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-1">
            Value Driver:
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }}>{milestone.primaryDriver}</span>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-500">Status</span>
        {milestone.isMilestoneAchieved ? (
          <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400 font-bold">
            <CheckCircle2 size={13} /> Completed
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-sky-400">
            <Activity size={13} /> In Progress
          </span>
        )}
      </div>
    </div>
  );
};
