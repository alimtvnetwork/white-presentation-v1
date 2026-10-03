import React from 'react';
import type { VoicePipelineStage } from '../../../types/nextGenArchetypes';
import { AudioWaveform, CheckCircle2, Zap } from 'lucide-react';

interface VadPipelineStageCardProps {
  stage: VoicePipelineStage;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onHover: (index: number | null) => void;
}

export const VadPipelineStageCard: React.FC<VadPipelineStageCardProps> = ({
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

  const progressPercent = Math.min(100, (stage.actualLatencyMs / stage.budgetLatencyMs) * 100);

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${stepPhaseClass} bg-gradient-to-b from-sky-500/10 to-violet-500/5`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-violet-600/20 text-slate-900 dark:text-violet-200 border border-violet-500/30 flex items-center gap-1.5">
            <AudioWaveform size={13} className="text-violet-400" />
            STAGE 0{stage.stageIndex}
          </span>
          <span className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-black/10 dark:bg-white/5 px-2.5 py-0.5 rounded-full border border-slate-700/40">
            Target &le; {stage.budgetLatencyMs}ms
          </span>
        </div>

        <h3 className="text-xl font-bold font-ubuntu tracking-tight leading-snug mb-2">
          {stage.stageName}
        </h3>

        <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-4 text-violet-400 truncate">
          {stage.modelName}
        </p>

        <div className="p-3.5 rounded-2xl bg-black/15 dark:bg-black/35 border border-white/5 font-mono mb-3 space-y-2">
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] uppercase tracking-wider">
              Measured Latency
            </span>
            <span className="text-lg font-bold text-slate-900 dark:text-emerald-400">
              {stage.actualLatencyMs}ms
            </span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white/5 border border-white/5 font-mono text-xs flex items-center justify-between">
          <span style={{ color: 'var(--pres-text-muted)' }}>Throughput</span>
          <span className="font-bold text-slate-800 dark:text-slate-200">
            {stage.throughputTokensOrAudioPerSec.toLocaleString()} /sec
          </span>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs">
        <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400 font-semibold">
          <CheckCircle2 size={13} /> Within Budget
        </span>
        <span className="text-sky-400 font-semibold flex items-center gap-1">
          <Zap size={12} /> Streaming Active
        </span>
      </div>
    </div>
  );
};
