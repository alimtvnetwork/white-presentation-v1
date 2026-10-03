import React from 'react';
import type { PaymentClearingStage } from '../../../types/nextGenArchetypes';
import { FileCheck, CheckCircle2 } from 'lucide-react';

interface IsoClearingStageCardProps {
  stage: PaymentClearingStage;
  index: number;
  currentStep: number;
  onHover: (idx: number | null) => void;
}

export const IsoClearingStageCard: React.FC<IsoClearingStageCardProps> = ({
  stage,
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

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${stepPhaseClass}`}
    >
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-violet-600/20 text-slate-900 dark:text-violet-200 border border-violet-500/30">
            STAGE 0{index + 1}
          </span>
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20">
            {stage.isPassed ? 'PASSED' : 'IN_EVAL'}
          </span>
        </div>
        <h3 className="text-xl font-bold font-ubuntu tracking-tight leading-snug mb-1 text-slate-900 dark:text-slate-100">
          {stage.name}
        </h3>
        <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-poppins mb-3.5 line-clamp-2">
          {stage.standard}
        </p>
        <div className="grid grid-cols-2 gap-2 mb-3 p-2.5 rounded-2xl bg-black/20 dark:bg-white/5 border border-white/5 font-mono text-xs">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Latency SLA</span>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">&lt; {stage.latencyTargetMs} ms</span>
          </div>
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Actual</span>
            <span className="text-base font-bold text-slate-900 dark:text-emerald-400">{stage.latencyActualMs} ms</span>
          </div>
        </div>
        <div className="p-2.5 rounded-xl bg-black/10 dark:bg-black/30 border border-white/5 font-mono text-xs">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase mb-0.5">Enforced Rule Set</span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">{stage.activeRuleSet}</span>
        </div>
      </div>
      <div className="pt-2.5 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-700 dark:text-slate-400 flex items-center gap-1">
          <FileCheck size={13} className="text-sky-400" />
          {stage.isVerified ? 'Attestation Valid' : 'Unsigned'}
        </span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
          <CheckCircle2 size={13} /> {index === 3 ? 'FINAL SETTLEMENT' : 'STAGE CLEARED'}
        </span>
      </div>
    </div>
  );
};
