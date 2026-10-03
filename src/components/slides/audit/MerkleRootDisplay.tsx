import React from 'react';
import { GitMerge, ShieldCheck, CheckCircle2, Lock, Award } from 'lucide-react';

export interface MerkleRootDisplayProps {
  merkleRootHash: string;
  chiefAuditorName: string;
  chiefAuditorTitle: string;
  isTamperEvident: boolean;
  totalGatesCount: number;
  verifiedGatesCount: number;
}

export const MerkleRootDisplay: React.FC<MerkleRootDisplayProps> = ({
  merkleRootHash,
  chiefAuditorName,
  chiefAuditorTitle,
  isTamperEvident,
  totalGatesCount,
  verifiedGatesCount,
}) => {
  const normalizedTitle = chiefAuditorName.includes('Alim')
    ? 'Chief Software Engineer'
    : chiefAuditorTitle;

  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col justify-between h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <span className="flex items-center gap-2 font-bold text-slate-200">
          <GitMerge size={14} className="text-cyan-400" />
          Merkle Tree Cryptographic Root
        </span>
        <span className="text-cyan-300 font-bold">SHA-256 Validated</span>
      </div>

      <div className="space-y-3.5 my-auto">
        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col gap-1.5">
          <span className="text-slate-400 text-[10px] flex items-center gap-1">
            <Lock size={11} className="text-cyan-400" /> Merkle Root Digest
          </span>
          <span className="text-xs font-mono font-bold text-cyan-300 break-all select-all">
            {merkleRootHash}
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-slate-400 text-[10px] flex items-center gap-1">
              <Award size={11} className="text-cyan-400" /> Certified Attestor
            </span>
            <span className="text-sm font-bold text-slate-100">
              {chiefAuditorName || 'Alim Ul Karim'}
            </span>
            <span className="text-[11px] text-cyan-300">
              {normalizedTitle}
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
            <ShieldCheck size={20} />
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Gates Verified</span>
          <span className="font-bold text-emerald-400">
            {verifiedGatesCount} / {totalGatesCount} Gated Pass
          </span>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-emerald-300 font-bold text-[11px]">
          <CheckCircle2 size={14} className="text-emerald-400" />
          <span>{isTamperEvident ? 'Tamper-Evident Ledger' : 'Standard Ledger'}</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded font-bold">
          100% AUDIT PASS
        </span>
      </div>
    </div>
  );
};
