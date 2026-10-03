import React from 'react';
import type { PollOptionItem } from '../../../types/extendedArchetypes';
import { getStepPhase, getStepPhaseStyle } from '../../../utils/stepProgression';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { CheckCircle2, Award } from 'lucide-react';

interface PollOptionBarProps {
  option: PollOptionItem;
  index: number;
  currentStep: number;
  accentColor?: string;
}

export const PollOptionBar: React.FC<PollOptionBarProps> = ({
  option,
  index,
  currentStep,
  accentColor = '#8b5cf6',
}) => {
  const phase = getStepPhase(index, currentStep);
  const phaseStyle = getStepPhaseStyle(phase, accentColor);
  const isLeader = isBooleanTrue(option.isWinningLeader);
  const isPast = phase === 'past';
  const isActive = phase === 'active';

  return (
    <div
      style={phaseStyle}
      className={`rounded-2xl border p-4 transition-all duration-300 ${
        isActive ? 'bg-slate-900/90 border-violet-500/60 plane-2-elevated' : 'bg-slate-900/40 border-slate-800 plane-1-raised'
      }`}
    >
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-violet-500/20 text-violet-300 border border-violet-500/30 flex items-center justify-center font-mono text-sm font-bold">
            {option.optionKey}
          </span>
          <span className="font-ubuntu text-base font-bold text-white tracking-wide">
            {option.optionLabel}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {isLeader && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40 flex items-center gap-1">
              <Award size={11} /> Majority Lead
            </span>
          )}
          {isPast && (
            <span className="text-emerald-400 flex items-center gap-1 text-[11px] font-mono">
              <CheckCircle2 size={13} /> Recorded
            </span>
          )}
          <span className="font-mono text-sm font-bold text-violet-300">
            {option.percentageScore}%
          </span>
          <span className="font-mono text-xs text-slate-500">
            ({option.votesCount} votes)
          </span>
        </div>
      </div>

      <div className="w-full h-3 rounded-full bg-slate-950/80 border border-slate-800/80 overflow-hidden relative">
        <div
          style={{ width: `${option.percentageScore}%` }}
          className={`h-full rounded-full transition-all duration-700 ${
            isLeader
              ? 'bg-gradient-to-r from-violet-500 to-amber-400 shadow-sm shadow-amber-500/30'
              : 'bg-gradient-to-r from-violet-600 to-cyan-500'
          }`}
        />
      </div>
    </div>
  );
};
