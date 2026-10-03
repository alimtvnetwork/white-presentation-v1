import React from 'react';
import type { MerkleProofStepItem } from '../../../types/globalPptArchetypes';
import { resolveStepPhase } from '../../../utils/stepProgression';
import { GitBranch, Shield } from 'lucide-react';

interface MerkleTreeHierarchySvgProps {
  steps: MerkleProofStepItem[];
  activeStep: number;
  rootHash: string;
}

export const MerkleTreeHierarchySvg: React.FC<MerkleTreeHierarchySvgProps> = ({
  steps,
  activeStep,
  rootHash,
}) => {
  const currentStep = steps[Math.min(activeStep, Math.max(0, steps.length - 1))] || steps[0];

  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <GitBranch size={14} className="text-indigo-400" />
          Binary Merkle Tree Hierarchy & Proof Traversal
        </span>
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          <Shield size={12} /> Step {activeStep + 1}: {currentStep?.levelName || 'Proof Verification'}
        </span>
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-around py-2">
        {/* Level 2: Merkle Root */}
        <div className="px-5 py-2.5 rounded-xl border-2 border-indigo-500 bg-indigo-950/80 shadow-[0_0_24px_rgba(99,102,241,0.35)] flex flex-col items-center gap-1">
          <span className="text-[10px] text-indigo-300 uppercase tracking-wider font-bold">Merkle Root State</span>
          <span className="text-xs text-white font-bold">{rootHash.slice(0, 18)}...{rootHash.slice(-8)}</span>
        </div>

        {/* Level 1: Intermediate Branch Hashes */}
        <div className="flex items-center justify-around w-full px-8">
          <div className="px-4 py-2 rounded-xl border border-indigo-500/40 bg-slate-950/80 flex flex-col items-center gap-0.5">
            <span className="text-[9px] text-slate-400">Branch L1-A</span>
            <span className="text-[11px] text-indigo-300 font-bold">{currentStep?.leftHash || '0x3a91...d99'}</span>
          </div>
          <div className="px-4 py-2 rounded-xl border border-indigo-500/40 bg-slate-950/80 flex flex-col items-center gap-0.5">
            <span className="text-[9px] text-slate-400">Branch L1-B</span>
            <span className="text-[11px] text-indigo-300 font-bold">{currentStep?.rightHash || '0x88c2...f01'}</span>
          </div>
        </div>

        {/* Verification Step Summary Banner */}
        <div className="w-full p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-[11px]">
          <span className="text-slate-400">
            Hash Operation: <strong className="text-slate-200">SHA256(L1-A || L1-B)</strong>
          </span>
          <span className="text-emerald-400 font-bold">
            Output: {currentStep?.combinedHash ? `${currentStep.combinedHash.slice(0, 16)}...` : 'Verified Valid'}
          </span>
        </div>
      </div>
    </div>
  );
};
