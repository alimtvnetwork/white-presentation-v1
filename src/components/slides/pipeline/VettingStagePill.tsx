import React from 'react';
import type { VettingStageItem } from '../../../types/extendedArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { ShieldCheck, CheckCircle2, Users } from 'lucide-react';

interface VettingStagePillProps {
  stage: VettingStageItem;
  isActive: boolean;
  isPast: boolean;
  isFuture: boolean;
}

export const VettingStagePill: React.FC<VettingStagePillProps> = ({
  stage,
  isActive,
  isPast,
  isFuture,
}) => {
  const isGate = isBooleanTrue(stage.isDecisiveGate);
  const visualWidthPct = Math.max(6, Math.min(100, stage.passPercentage));

  return (
    <div
      style={{
        backgroundColor: isActive ? 'var(--pres-card-bg, rgba(255, 255, 255, 0.08))' : 'var(--pres-card-bg, rgba(255, 255, 255, 0.04))',
        borderColor: isActive ? 'var(--pres-accent)' : 'var(--pres-card-border, rgba(255, 255, 255, 0.1))',
        opacity: isFuture ? 0.4 : isPast ? 0.75 : 1,
        filter: isFuture ? 'blur(1.25px)' : 'none',
        boxShadow: isActive ? '0 0 24px -2px var(--pres-accent)' : 'none',
        transform: isActive ? 'scale(1.02)' : 'none',
      }}
      className="p-4 rounded-2xl border transition-all duration-300 flex flex-col gap-2 relative overflow-hidden"
    >
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-lg bg-violet-500/20 text-violet-300 border border-violet-500/30 flex items-center justify-center font-mono font-bold text-xs">
            0{stage.stageNumber}
          </span>
          <span className="font-ubuntu font-bold text-base text-slate-100">{stage.stageName}</span>
          {isGate && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
              <ShieldCheck size={10} /> DECISIVE GATE
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 font-mono text-xs">
          <span className="flex items-center gap-1.5" style={{ color: 'var(--pres-text-muted)' }}>
            <Users size={12} /> {stage.candidateVolume.toLocaleString()} Candidates
          </span>
          <span className="font-bold text-emerald-400 min-w-[50px] text-right">
            {stage.passPercentage}%
          </span>
          {isPast && <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />}
        </div>
      </div>

      <div className="w-full h-1.5 rounded-full bg-black/30 overflow-hidden z-10">
        <div
          style={{ width: `${visualWidthPct}%` }}
          className={`h-full rounded-full transition-all duration-500 ${
            isActive ? 'bg-violet-400' : isPast ? 'bg-emerald-400' : 'bg-slate-600'
          }`}
        />
      </div>
    </div>
  );
};
