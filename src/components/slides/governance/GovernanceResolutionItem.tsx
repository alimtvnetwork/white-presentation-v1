import React from 'react';
import { CheckCircle2, FileText, Check } from 'lucide-react';
import type { CharterResolutionItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface GovernanceResolutionItemProps {
  resolution: CharterResolutionItem;
}

export const GovernanceResolutionItem: React.FC<GovernanceResolutionItemProps> = ({
  resolution,
}) => {
  const isPassed = isBooleanTrue(resolution.isPassed);
  const isCompliant = isBooleanTrue(resolution.isCompliant);
  const hasAuditSignoff = isBooleanTrue(resolution.hasAuditSignoff);

  return (
    <div className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-950/40 text-xs flex flex-col gap-1.5 transition-all">
      <div className="flex items-center justify-between">
        <span className="font-mono font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
          <FileText size={11} /> {resolution.resolutionCode}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[11px] text-slate-300">
            Quorum: <strong className="text-amber-800 dark:text-amber-300">{resolution.votingQuorumPercent}%</strong>
          </span>
          {isPassed && (
            <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono flex items-center gap-0.5">
              <Check size={10} /> PASSED
            </span>
          )}
        </div>
      </div>
      <p className="font-ubuntu text-slate-200 font-semibold text-[13px] leading-snug">
        {resolution.title}
      </p>
      <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-2">
        {resolution.summary}
      </p>
      <div className="flex items-center gap-2 pt-0.5 text-[10px] font-mono">
        {isCompliant && (
          <span className="text-emerald-400 flex items-center gap-0.5">
            <CheckCircle2 size={10} /> Compliant
          </span>
        )}
        {hasAuditSignoff && (
          <span className="text-cyan-400 flex items-center gap-0.5">
            <CheckCircle2 size={10} /> Audit Signoff
          </span>
        )}
      </div>
    </div>
  );
};
