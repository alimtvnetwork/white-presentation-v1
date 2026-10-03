import React from 'react';
import { Layers, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { StrategicHorizon } from '../../../../types/nextGenArchetypes';
import { HorizonInitiativeItem } from './HorizonInitiativeItem';

interface HorizonCardProps {
  horizon: StrategicHorizon;
  idx: number;
  isActive: boolean;
  isCompleted: boolean;
  onHover: (idx: number | null) => void;
}

export const HorizonCard: React.FC<HorizonCardProps> = ({
  horizon,
  idx,
  isActive,
  isCompleted,
  onHover,
}) => {
  const kineticClass = isActive
    ? 'step-phase-active opacity-100 ring-2 ring-violet-500/60 shadow-2xl scale-[1.01]'
    : isCompleted
      ? 'step-phase-past opacity-75'
      : 'step-phase-future opacity-40 blur-[1.25px]';

  const accentGradient =
    horizon.horizonNumber === 1
      ? 'from-blue-500/15 to-emerald-500/5 border-emerald-500/30'
      : horizon.horizonNumber === 2
        ? 'from-violet-500/15 to-indigo-500/5 border-violet-500/30'
        : 'from-amber-500/15 to-rose-500/5 border-amber-500/30';

  return (
    <div
      onMouseEnter={() => onHover(idx)}
      onMouseLeave={() => onHover(null)}
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${kineticClass} bg-gradient-to-b ${accentGradient}`}
    >
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="px-3.5 py-1 rounded-full font-mono text-sm font-bold bg-violet-600/20 text-slate-900 dark:text-violet-200 border border-violet-500/30 flex items-center gap-1.5">
            {isCompleted ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Layers size={14} className="text-violet-400" />}
            H{horizon.horizonNumber} MATRIX
          </span>
          <span className="flex items-center gap-1.5 font-mono text-sm text-slate-700 dark:text-slate-300 bg-black/10 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-700/40">
            <Clock size={13} className="text-sky-400" />
            {horizon.timeframeYears}
          </span>
        </div>
        <h3 className="text-xl font-bold font-ubuntu tracking-tight leading-snug mb-1">
          {horizon.name}
        </h3>
        <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-poppins mb-3 line-clamp-1">
          {horizon.subtitle}
        </p>
        <div className="grid grid-cols-2 gap-2 mb-3 p-2.5 rounded-2xl bg-black/15 dark:bg-black/35 border border-white/5 font-mono text-xs">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] block uppercase">CapEx Alloc</span>
            <span className="text-base font-bold text-slate-900 dark:text-emerald-400">{horizon.targetCapitalAllocationPercent}%</span>
          </div>
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] block uppercase">Top-Line</span>
            <span className="text-base font-bold text-slate-900 dark:text-sky-400">{horizon.targetRevenuePercentage}%</span>
          </div>
        </div>
        <div className="space-y-1.5">
          {horizon.initiatives.slice(0, 2).map((init) => (
            <HorizonInitiativeItem key={init.id} initiative={init} />
          ))}
        </div>
      </div>
      <div className="pt-2.5 border-t border-slate-700/40 mt-3 flex items-center justify-between text-xs font-mono">
        <span style={{ color: 'var(--pres-text-muted)' }} className="truncate max-w-[200px]">Gate: {horizon.stageGateCriteria}</span>
        <span className="text-slate-900 dark:text-violet-300 font-bold flex items-center gap-1 shrink-0">
          <ShieldCheck size={14} className="text-violet-400" />
          {horizon.isHorizonActive ? 'ACTIVE' : 'STAGED'}
        </span>
      </div>
    </div>
  );
};
