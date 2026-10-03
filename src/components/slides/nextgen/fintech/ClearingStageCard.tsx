import React from 'react';
import { CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import type { PaymentClearingStage } from '../../../../types/nextGenArchetypes';

interface ClearingStageCardProps {
  stage: PaymentClearingStage;
  index: number;
  currentStep: number;
  onHover: (idx: number | null) => void;
}

export const ClearingStageCard: React.FC<ClearingStageCardProps> = ({
  stage,
  index,
  currentStep,
  onHover,
}) => {
  const isActive = index === currentStep;
  const isCompleted = index < currentStep;

  const kineticClass = isActive
    ? 'step-phase-active opacity-100 ring-2 ring-violet-500/60 shadow-2xl scale-[1.01]'
    : isCompleted
      ? 'step-phase-past opacity-75'
      : 'step-phase-future opacity-40 blur-[1.25px]';

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)' }}
      className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${kineticClass}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="w-7 h-7 rounded-full bg-violet-600/20 text-slate-900 dark:text-violet-300 font-mono text-xs font-bold flex items-center justify-center border border-violet-500/30">
            {isCompleted ? <CheckCircle2 size={16} className="text-emerald-500" /> : `0${index + 1}`}
          </span>
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1 font-bold">
            <ShieldCheck size={13} className="text-emerald-500" /> VERIFIED
          </span>
        </div>

        <h3 className="text-xl font-bold font-ubuntu tracking-tight leading-snug mb-1 text-slate-900 dark:text-slate-100">
          {stage.name}
        </h3>
        <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-4">
          {stage.standard}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-2xl bg-black/15 dark:bg-black/35 border border-white/5 font-mono text-xs">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Observed</span>
            <span className="text-base font-bold text-slate-900 dark:text-emerald-400">{stage.latencyActualMs} ms</span>
          </div>
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Target SLA</span>
            <span className="text-base font-bold text-slate-900 dark:text-sky-400">&lt; {stage.latencyTargetMs} ms</span>
          </div>
        </div>

        <div className="text-xs font-mono p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-700 dark:text-slate-300">
          <span className="text-[10px] uppercase block text-slate-500 mb-0.5">Active Ruleset</span>
          <span className="truncate block font-bold">{stage.activeRuleSet}</span>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
        <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
          <CheckCircle2 size={13} /> {stage.isPassed ? 'DETERMINISTIC PASS' : 'FLAGGED'}
        </span>
        <span className="text-slate-500 flex items-center gap-1">
          <Clock size={12} /> Realtime
        </span>
      </div>
    </div>
  );
};
