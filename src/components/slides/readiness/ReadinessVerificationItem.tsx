import React from 'react';
import { CheckCircle2, AlertOctagon, Cpu, Clock, UserCheck } from 'lucide-react';
import type { ChecklistVerificationItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface ReadinessVerificationItemProps {
  item: ChecklistVerificationItem;
}

export const ReadinessVerificationItem: React.FC<ReadinessVerificationItemProps> = ({ item }) => {
  const isPassed = isBooleanTrue(item.isPassed);
  const isBlocker = isBooleanTrue(item.isBlocker);
  const hasAutomated = isBooleanTrue(item.hasAutomatedVerification);

  return (
    <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs font-mono">
      <div className="flex items-center gap-3 max-w-[70%]">
        <div className="shrink-0">
          {isPassed ? (
            <CheckCircle2 size={16} className="text-emerald-400" />
          ) : isBlocker ? (
            <AlertOctagon size={16} className="text-rose-400" />
          ) : (
            <div className="w-4 h-4 rounded-full border border-slate-600" />
          )}
        </div>
        <div>
          <p className="text-slate-200 font-ubuntu text-xs font-medium leading-snug">
            {item.itemDescription}
          </p>
          <div className="flex items-center gap-3 text-[10px] text-slate-400 mt-0.5">
            <span className="flex items-center gap-1">
              <UserCheck size={10} className="text-cyan-400" /> {item.verifiedBy}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={10} /> {item.verifiedTimestamp}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {hasAutomated && (
          <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[10px] flex items-center gap-1 border border-cyan-500/20">
            <Cpu size={10} /> Automated CI
          </span>
        )}
        {isBlocker && (
          <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 text-[10px] border border-rose-500/20 font-bold">
            BLOCKER CRITERIA
          </span>
        )}
      </div>
    </div>
  );
};
