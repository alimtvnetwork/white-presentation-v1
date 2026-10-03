import React from 'react';
import type { MerkleLeafNodeItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Database, CheckCircle2, FileCheck } from 'lucide-react';

interface MerkleLeafAuditTableProps {
  leafNodes: MerkleLeafNodeItem[];
}

export const MerkleLeafAuditTable: React.FC<MerkleLeafAuditTableProps> = ({ leafNodes }) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <Database size={14} className="text-emerald-400" />
          Leaf Transactions & Inclusion Proofs
        </span>
        <span className="text-slate-400">{leafNodes.length} Blocks Verified</span>
      </div>

      <div className="space-y-2.5 overflow-y-auto flex-1 pr-1">
        {leafNodes.map((leaf) => {
          const isVerified = isBooleanTrue(leaf.isProofVerified);
          return (
            <div
              key={leaf.id}
              className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-bold border border-indigo-500/20 text-[10px]">
                    L0[{leaf.leafIndex}]
                  </span>
                  <span className="text-[11px] text-emerald-400 font-bold tracking-wider">
                    {leaf.payloadHash}
                  </span>
                </div>
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded border flex items-center gap-1 ${
                    isVerified
                      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                      : 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30'
                  }`}
                >
                  <CheckCircle2 size={10} />
                  {isVerified ? 'INCLUDED' : 'PENDING'}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug flex items-center gap-1.5">
                <FileCheck size={12} className="text-slate-500 shrink-0" />
                {leaf.transactionData}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
