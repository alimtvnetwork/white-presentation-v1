import React from 'react';
import type { StrategicHorizon, HorizonInitiative } from '../../../types/nextGenArchetypes';
import { Layers, ShieldCheck, CheckCircle2, Clock, ArrowUpRight } from 'lucide-react';

interface HorizonColumnCardProps {
  horizon: StrategicHorizon;
  index: number;
  currentStep: number;
  onHover: (idx: number | null) => void;
}

export const HorizonColumnCard: React.FC<HorizonColumnCardProps> = ({
  horizon,
  index,
  currentStep,
  onHover,
}) => {
  const isCompleted = index < currentStep;
  const isActive = index === currentStep;
  const stepPhaseClass = isActive
    ? 'step-phase-active ring-2 ring-violet-500/60 shadow-2xl opacity-100'
    : isCompleted
      ? 'step-phase-past opacity-75'
      : 'step-phase-future opacity-40';

  const accentGradient =
    horizon.horizonNumber === 1
      ? 'from-blue-500/15 to-emerald-500/5 border-emerald-500/30'
      : horizon.horizonNumber === 2
        ? 'from-violet-500/15 to-indigo-500/5 border-violet-500/30'
        : 'from-amber-500/15 to-rose-500/5 border-amber-500/30';

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${stepPhaseClass} bg-gradient-to-b ${accentGradient}`}
    >
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="px-3 py-1 rounded-full font-mono text-sm font-bold bg-violet-600/20 text-slate-900 dark:text-violet-200 border border-violet-500/30 flex items-center gap-1.5">
            <Layers size={14} className="text-violet-400" />
            H{horizon.horizonNumber} MATRIX
          </span>
          <span className="flex items-center gap-1 font-mono text-xs text-slate-700 dark:text-slate-300 bg-black/10 dark:bg-white/5 px-2.5 py-1 rounded-full border border-slate-700/40">
            <Clock size={12} className="text-sky-400" />
            {horizon.timeframeYears}
          </span>
        </div>
        <h3 className="text-xl font-bold font-ubuntu tracking-tight leading-snug mb-1">{horizon.name}</h3>
        <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-poppins mb-3 line-clamp-1">{horizon.subtitle}</p>
        <div className="grid grid-cols-2 gap-2 mb-3 p-2.5 rounded-2xl bg-black/15 dark:bg-black/35 border border-white/5 font-mono">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase tracking-wider">Allocation</span>
            <span className="text-base font-bold text-slate-900 dark:text-emerald-400">{horizon.targetCapitalAllocationPercent}% CapEx</span>
          </div>
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase tracking-wider">Revenue Target</span>
            <span className="text-base font-bold text-slate-900 dark:text-sky-400">{horizon.targetRevenuePercentage}% Top-Line</span>
          </div>
        </div>
        <div className="mb-3 text-[11px] font-poppins leading-relaxed p-2.5 rounded-xl bg-white/5 border border-white/5 line-clamp-2">
          <strong className="text-slate-900 dark:text-slate-200 block mb-0.5">Mandate:</strong>
          <span style={{ color: 'var(--pres-text-muted)' }}>{horizon.strategicFocus}</span>
        </div>
        <div className="space-y-1.5">
          {horizon.initiatives.slice(0, 3).map((init: HorizonInitiative) => (
            <div key={init.id} className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-slate-700/30 flex items-center justify-between text-[11px] font-mono">
              <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 truncate max-w-[170px]">
                {init.isMilestoneAchieved ? <CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> : <ArrowUpRight size={12} className="text-violet-400 shrink-0" />}
                {init.name}
              </span>
              <span className="text-slate-900 dark:text-emerald-300 font-bold shrink-0">{init.metricTarget}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-2.5 border-t border-slate-700/40 mt-3 flex items-center justify-between text-[11px] font-mono">
        <span style={{ color: 'var(--pres-text-muted)' }} className="truncate max-w-[200px]">Gate: {horizon.stageGateCriteria}</span>
        <span className="text-slate-900 dark:text-violet-300 font-bold flex items-center gap-1 shrink-0">
          <ShieldCheck size={13} className="text-violet-400" />
          {horizon.isHorizonActive ? 'ACTIVE CYCLE' : 'STAGED'}
        </span>
      </div>
    </div>
  );
};
