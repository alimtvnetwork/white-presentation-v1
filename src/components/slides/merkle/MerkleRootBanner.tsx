import React from 'react';
import { GitCommit, CheckCircle2, ShieldCheck, Binary } from 'lucide-react';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface MerkleRootBannerProps {
  rootStateHash: string;
  blockNumber: number;
  algorithmName: string;
  isRootFinalized: boolean;
  auditedBy: string;
  auditorRole: string;
}

export const MerkleRootBanner: React.FC<MerkleRootBannerProps> = ({
  rootStateHash,
  blockNumber,
  algorithmName,
  isRootFinalized,
  auditedBy,
  auditorRole,
}) => {
  const isFinalized = isBooleanTrue(isRootFinalized);

  return (
    <div className="plane-1-raised p-4 rounded-2xl border border-indigo-500/30 bg-indigo-950/20 flex items-center justify-between font-mono text-xs">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
          <GitCommit size={14} className="text-indigo-400" />
          BLOCK #{blockNumber.toLocaleString()}
        </span>
        <span className="flex items-center gap-2 text-slate-300">
          <Binary size={14} className="text-emerald-400" />
          Root State: <strong className="text-emerald-300 font-bold tracking-wider">{rootStateHash}</strong>
        </span>
        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">
          {algorithmName}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold border ${
            isFinalized
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
              : 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40'
          }`}
        >
          <CheckCircle2 size={12} />
          {isFinalized ? 'ROOT FINALIZED' : 'PENDING FINALITY'}
        </span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <ShieldCheck size={14} className="text-indigo-400" />
          Audited by: <strong className="text-slate-100">{auditedBy}</strong> ({auditorRole})
        </span>
      </div>
    </div>
  );
};
