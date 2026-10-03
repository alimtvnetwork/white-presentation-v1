import React from 'react';
import { CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import type { OkrInitiativeItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface OkrInitiativeRowProps {
  initiative: OkrInitiativeItem;
}

export const OkrInitiativeRow: React.FC<OkrInitiativeRowProps> = ({ initiative }) => {
  const isCompleted = isBooleanTrue(initiative.isCompleted);
  const isOnTrack = isBooleanTrue(initiative.isOnTrack);
  const hasConfidenceWarning = isBooleanTrue(initiative.hasConfidenceWarning);

  return (
    <div className="p-2 rounded bg-slate-950/40 border border-slate-800/80 flex items-center justify-between text-xs font-mono">
      <div className="flex flex-col gap-0.5 max-w-[65%]">
        <div className="flex items-center gap-1.5">
          <span className="text-slate-200 font-ubuntu font-medium truncate">
            {initiative.initiativeName}
          </span>
          {isCompleted && (
            <span className="text-emerald-400 font-bold text-[10px] flex items-center gap-0.5">
              <CheckCircle2 size={10} /> DONE
            </span>
          )}
        </div>
        <span className="text-[10px] text-slate-400">
          Owner: <strong className="text-slate-300">{initiative.ownerName}</strong> ({initiative.ownerRole})
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-20 bg-slate-800 rounded-full h-1.5 overflow-hidden">
          <div
            className={`h-full rounded-full ${isCompleted ? 'bg-emerald-400' : 'bg-cyan-400'}`}
            style={{ width: `${Math.min(100, Math.max(0, initiative.progressPercent))}%` }}
          />
        </div>
        <span className="text-slate-300 w-9 text-right font-bold text-[11px]">
          {initiative.progressPercent}%
        </span>
        <div className="flex items-center">
          {hasConfidenceWarning ? (
            <span className="text-amber-600 dark:text-amber-400 flex items-center gap-0.5 text-[10px]" title="Confidence Risk">
              <AlertTriangle size={11} /> Warn
            </span>
          ) : (
            <span className="text-emerald-400 flex items-center gap-0.5 text-[10px]">
              <ShieldCheck size={11} /> {Math.round(initiative.confidenceScore * 100)}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
