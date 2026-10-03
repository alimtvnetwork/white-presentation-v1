import React from 'react';
import type { KillChainStageDetail } from '../../../types/nextGenArchetypes';
import { Lock, Clock, Zap, CheckCircle2 } from 'lucide-react';

interface KillChainStageCardProps {
  stage: KillChainStageDetail;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onHover: (index: number | null) => void;
}

export const KillChainStageCard: React.FC<KillChainStageCardProps> = ({
  stage,
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

  const statusColor =
    stage.containmentStatus === 'NEUTRALIZED'
      ? 'text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/30'
      : stage.containmentStatus === 'CONTAINED'
        ? 'text-sky-800 dark:text-sky-300 bg-sky-500/10 border-sky-500/30'
        : 'text-amber-800 dark:text-amber-300 bg-amber-500/10 border-amber-500/30';

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${stepPhaseClass} bg-gradient-to-b from-rose-500/10 to-violet-500/5`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-violet-600/20 text-slate-900 dark:text-violet-200 border border-violet-500/30 flex items-center gap-1.5">
            <Lock size={12} className="text-violet-400" />
            STAGE 0{stage.stageIndex}
          </span>
          <span className="font-mono text-xs text-violet-400 bg-black/10 dark:bg-white/5 px-2.5 py-0.5 rounded-full border border-slate-700/40">
            {stage.mitreTacticId}
          </span>
        </div>

        <h3 className="text-xl font-bold font-ubuntu tracking-tight leading-snug mb-3">
          {stage.stageName}
        </h3>

        <div className="p-3.5 rounded-2xl bg-black/15 dark:bg-black/35 border border-white/5 font-mono mb-3">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase tracking-wider mb-1">
            Primary Threat Vector
          </span>
          <p className="text-xs text-rose-400 dark:text-rose-300 font-semibold leading-relaxed">
            {stage.primaryThreatVector}
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 font-mono mb-4">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase tracking-wider mb-1">
            Active Defense Shield
          </span>
          <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
            {stage.activeDefenseControl}
          </p>
        </div>

        <div className="flex items-center justify-between font-mono text-xs mb-2">
          <span style={{ color: 'var(--pres-text-muted)' }}>Containment:</span>
          <span className={`px-2.5 py-1 rounded-full border font-bold flex items-center gap-1 ${statusColor}`}>
            <CheckCircle2 size={12} />
            {stage.containmentStatus}
          </span>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs">
        <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
          <Clock size={12} className="text-sky-400" />
          MTTD: {stage.mttdMinutes}m
        </span>
        <span className="flex items-center gap-1 text-emerald-800 dark:text-emerald-400 font-semibold">
          <Zap size={12} /> SOAR Armed
        </span>
      </div>
    </div>
  );
};
