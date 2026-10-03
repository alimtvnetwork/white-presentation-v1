import React from 'react';
import type { DecarbonizationMilestoneYear } from '../../../types/nextGenArchetypes';
import { Calendar, ShieldCheck, CheckCircle2, TrendingDown } from 'lucide-react';

interface Props {
  milestone: DecarbonizationMilestoneYear;
  index: number;
  currentStep: number;
  onHover: (idx: number | null) => void;
}

export const DecarbonizationMilestoneCard: React.FC<Props> = ({ milestone, index, currentStep, onHover }) => {
  const isCompleted = index < currentStep;
  const isActive = index === currentStep;
  const stepPhaseClass = isActive
    ? 'step-phase-active ring-2 ring-emerald-500/60 shadow-2xl opacity-100'
    : isCompleted
      ? 'step-phase-past opacity-75'
      : 'step-phase-future opacity-40';

  const totalKiloTons = milestone.scope1KiloTons + milestone.scope2KiloTons + milestone.scope3KiloTons;

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)', color: 'var(--pres-text)' }}
      className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${stepPhaseClass}`}
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 rounded-full font-mono text-sm font-bold bg-emerald-600/20 text-slate-900 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
            <Calendar size={14} className="text-emerald-400" /> YEAR {milestone.year}
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20">
            -{milestone.totalReductionPercent}% CO2e
          </span>
        </div>
        <h3 className="text-2xl font-bold font-ubuntu tracking-tight leading-snug mb-1 text-slate-900 dark:text-slate-100">{totalKiloTons.toFixed(1)} kt Total</h3>
        <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-poppins mb-3 line-clamp-2">{milestone.primaryIntervention}</p>
        <div className="space-y-1.5 mb-2.5 font-mono text-xs">
          <div>
            <div className="flex justify-between text-[11px] mb-0.5"><span style={{ color: 'var(--pres-text-muted)' }}>Scope 1</span><span className="text-slate-900 dark:text-slate-200 font-bold">{milestone.scope1KiloTons} kt</span></div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden"><div style={{ width: `${Math.min(100, (milestone.scope1KiloTons / 50) * 100)}%` }} className="h-full bg-rose-500 rounded-full" /></div>
          </div>
          <div>
            <div className="flex justify-between text-[11px] mb-0.5"><span style={{ color: 'var(--pres-text-muted)' }}>Scope 2</span><span className="text-slate-900 dark:text-slate-200 font-bold">{milestone.scope2KiloTons} kt</span></div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden"><div style={{ width: `${Math.min(100, (milestone.scope2KiloTons / 70) * 100)}%` }} className="h-full bg-amber-500 rounded-full" /></div>
          </div>
          <div>
            <div className="flex justify-between text-[11px] mb-0.5"><span style={{ color: 'var(--pres-text-muted)' }}>Scope 3</span><span className="text-slate-900 dark:text-slate-200 font-bold">{milestone.scope3KiloTons} kt</span></div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden"><div style={{ width: `${Math.min(100, (milestone.scope3KiloTons / 200) * 100)}%` }} className="h-full bg-sky-500 rounded-full" /></div>
          </div>
        </div>
      </div>
      <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-700 dark:text-slate-400 flex items-center gap-1"><ShieldCheck size={13} className="text-emerald-400" />{milestone.isAuditedBySbti ? 'SBTi' : 'Self'}</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
          {milestone.isMilestoneAchieved ? <><CheckCircle2 size={13} /> ACHIEVED</> : <><TrendingDown size={13} /> ON TRACK</>}
        </span>
      </div>
    </div>
  );
};
