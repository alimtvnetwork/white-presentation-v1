import React from 'react';
import { UserCheck, ShieldCheck, AlertCircle } from 'lucide-react';
import type { StageGateItem } from '../../../types/globalPptArchetypes';
import { ReadinessVerificationItem } from './ReadinessVerificationItem';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface ReadinessGateDetailProps {
  gate?: StageGateItem;
}

export const ReadinessGateDetail: React.FC<ReadinessGateDetailProps> = ({ gate }) => {
  if (!gate) return null;
  const isPassed = isBooleanTrue(gate.isPassed);
  const items = gate.verificationItems || [];
  const blockersCount = items.filter((i) => i.isBlocker && !i.isPassed).length;

  return (
    <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/70 flex flex-col gap-3">
      <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-bold uppercase tracking-wider">Gate Review:</span>
          <span className="text-white font-ubuntu font-bold text-sm">{gate.gateName}</span>
          <span className="text-slate-400 text-xs flex items-center gap-1 ml-2">
            <UserCheck size={12} className="text-emerald-400" />
            <span>Owner: <strong className="text-slate-200">{gate.gateOwner}</strong> ({gate.ownerRole})</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {blockersCount > 0 ? (
            <span className="text-rose-400 font-bold flex items-center gap-1">
              <AlertCircle size={13} /> {blockersCount} Active Blocker(s)
            </span>
          ) : (
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <ShieldCheck size={13} /> Zero Blockers
            </span>
          )}
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
            {items.length} Verification Checks
          </span>
        </div>
      </div>

      <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
        {items.map((item) => (
          <ReadinessVerificationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
