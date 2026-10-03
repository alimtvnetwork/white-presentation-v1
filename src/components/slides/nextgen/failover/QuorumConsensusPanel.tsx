import React from 'react';
import { ShieldCheck, Users } from 'lucide-react';

interface QuorumConsensusPanelProps {
  quorum: {
    activeVotingMembers: number;
    totalMembers: number;
    hasQuorumConsensus: boolean;
    isSplitBrainPrevented: boolean;
  };
  isActive: boolean;
}

export const QuorumConsensusPanel: React.FC<QuorumConsensusPanelProps> = ({
  quorum,
  isActive,
}) => (
  <div
    style={{
      backgroundColor: 'var(--pres-bg-card)',
      borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
    }}
    className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between flex-1 transition-all duration-300 ${
      isActive ? 'step-phase-active ring-2 ring-violet-500/60 shadow-xl opacity-100' : 'step-phase-past opacity-75'
    }`}
  >
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="px-3.5 py-1 rounded-full text-sm font-mono font-bold bg-emerald-500/20 text-slate-900 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
          <Users size={15} className="text-emerald-400" />
          RAFT QUORUM CONSENSUS
        </span>
        <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20 font-bold">
          {quorum.hasQuorumConsensus ? 'QUORUM OK' : 'SPLIT RISK'}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4 font-mono text-xs">
        <div className="p-3 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
            Voting Members
          </span>
          <span className="text-base font-bold text-slate-900 dark:text-emerald-400">
            {quorum.activeVotingMembers} / {quorum.totalMembers} Nodes
          </span>
        </div>
        <div className="p-3 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
            Split-Brain Guard
          </span>
          <span className="text-base font-bold text-slate-900 dark:text-sky-300">
            {quorum.isSplitBrainPrevented ? 'PREVENTED' : 'UNGUARDED'}
          </span>
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
      <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
        <ShieldCheck size={14} className="text-emerald-500" /> Byzantine Fault Tolerant
      </span>
      <span className="text-emerald-600 dark:text-emerald-400 font-bold">5-NODE QUORUM</span>
    </div>
  </div>
);
