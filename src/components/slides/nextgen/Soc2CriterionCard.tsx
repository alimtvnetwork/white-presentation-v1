import React from 'react';
import type { Soc2LadderStep } from '../../../types/nextGenArchetypes';
import { TrendingUp, CheckCircle2, Activity, Award } from 'lucide-react';

interface Soc2CriterionCardProps {
  step: Soc2LadderStep;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onHover: (index: number | null) => void;
}

export const Soc2CriterionCard: React.FC<Soc2CriterionCardProps> = ({
  step,
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
      className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${stepPhaseClass} bg-gradient-to-b from-indigo-500/10 to-violet-500/5`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-violet-600/20 text-slate-900 dark:text-violet-200 border border-violet-500/30 flex items-center gap-1.5">
            <TrendingUp size={12} className="text-violet-400" />
            LADDER 0{step.stepIndex}
          </span>
          <span className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-black/10 dark:bg-white/5 px-2.5 py-0.5 rounded-full border border-slate-700/40">
            {step.timeframe}
          </span>
        </div>

        <h3 className="text-lg font-bold font-ubuntu tracking-tight leading-snug mb-2">
          {step.title}
        </h3>

        <div className="p-3 rounded-2xl bg-black/15 dark:bg-black/35 border border-white/5 font-mono mb-3 space-y-1">
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase">Controls Monitored</span>
            <span className="text-sm font-bold text-slate-900 dark:text-emerald-400">{step.totalControlsMonitored}</span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase">Pass Ratio</span>
            <span className="text-xs font-bold text-sky-400">{step.controlPassRatioPercent}%</span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 font-mono text-[10px] text-slate-400">
          <span className="text-slate-500 uppercase block mb-0.5">Evidence Artifact:</span>
          <span className="text-violet-300 truncate block">{step.primaryEvidenceArtifact}</span>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs">
        {step.isStepCompleted ? (
          <span className="flex items-center gap-1 text-emerald-800 dark:text-emerald-400 font-bold">
            <CheckCircle2 size={13} /> Completed
          </span>
        ) : step.status === 'IN_PROGRESS' ? (
          <span className="flex items-center gap-1 text-sky-400 font-semibold">
            <Activity size={13} /> In Observation
          </span>
        ) : (
          <span className="text-slate-500">Upcoming Gate</span>
        )}
        {step.isAuditorSignedOff && (
          <span className="flex items-center gap-1 text-sky-400 text-[10px]">
            <Award size={11} /> Auditor Signoff
          </span>
        )}
      </div>
    </div>
  );
};
