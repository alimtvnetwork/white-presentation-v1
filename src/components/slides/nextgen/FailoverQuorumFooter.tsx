import React from 'react';
import type { StorageReplicationPipeline, FailoverTelemetry } from '../../../types/nextGenArchetypes';
import { ArrowRightLeft, RefreshCw, Lock, ShieldCheck } from 'lucide-react';

interface FailoverQuorumFooterProps {
  replication: StorageReplicationPipeline;
  quorum: {
    activeVotingMembers: number;
    totalMembers: number;
    hasQuorumConsensus: boolean;
    isSplitBrainPrevented: boolean;
  };
  failover: FailoverTelemetry;
  currentStep: number;
}

export const FailoverQuorumFooter: React.FC<FailoverQuorumFooterProps> = ({
  replication,
  quorum,
  failover,
  currentStep,
}) => {
  return (
    <div className="col-span-4 flex flex-col justify-between gap-5 flex-1">
      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: currentStep === 1 ? 'var(--pres-border-hover)' : 'var(--pres-border)' }}
        className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between flex-1 transition-all duration-300 ${currentStep === 1 ? 'step-phase-active ring-2 ring-violet-500/50' : 'step-phase-past opacity-85'}`}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/20 text-slate-900 dark:text-violet-300 border border-violet-500/30 flex items-center gap-1.5">
              <ArrowRightLeft size={14} className="text-violet-400" /> STORAGE REPLICATION
            </span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20">
              {replication.syncMode}
            </span>
          </div>
          <h3 className="text-xl font-ubuntu font-bold tracking-tight mb-1 text-slate-900 dark:text-slate-100">Multi-Region WAL Streaming</h3>
          <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-2.5">Consensus: Raft Multi-Paxos</p>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Zero-Loss</span>
              <span className="text-sm font-bold text-slate-900 dark:text-emerald-400">{replication.hasZeroDataLossGuarantee ? 'VERIFIED' : 'BEST-EFFORT'}</span>
            </div>
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Replica State</span>
              <span className="text-sm font-bold text-slate-900 dark:text-sky-300">{replication.isReplicaConsistent ? '100% Sync' : 'Replay'}</span>
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><RefreshCw size={12} className="text-sky-400" /> Sync Cadence</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">CONTINUOUS</span>
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: currentStep === 2 ? 'var(--pres-border-hover)' : 'var(--pres-border)' }}
        className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between flex-1 transition-all duration-300 ${currentStep === 2 ? 'step-phase-active ring-2 ring-violet-500/50' : 'step-phase-past opacity-85'}`}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/20 text-slate-900 dark:text-sky-300 border border-sky-500/30 flex items-center gap-1.5">
              <Lock size={14} className="text-sky-400" /> QUORUM CONSENSUS
            </span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20">
              {quorum.hasQuorumConsensus ? 'QUORUM REACHED' : 'ELECTION'}
            </span>
          </div>
          <h3 className="text-xl font-ubuntu font-bold tracking-tight mb-1 text-slate-900 dark:text-slate-100">Split-Brain Guard</h3>
          <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-2.5">Voting Members: {quorum.activeVotingMembers}/{quorum.totalMembers}</p>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Split-Brain</span>
              <span className="text-sm font-bold text-slate-900 dark:text-emerald-400">{quorum.isSplitBrainPrevented ? 'PREVENTED' : 'VULNERABLE'}</span>
            </div>
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Failover Trigger</span>
              <span className="text-sm font-bold text-slate-900 dark:text-sky-300">{failover.isAutomaticTriggerEnabled ? 'AUTOMATIC' : 'MANUAL'}</span>
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><ShieldCheck size={12} className="text-emerald-500" /> Armed</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{failover.isFailoverArmed ? 'ARMED' : 'STANDBY'}</span>
        </div>
      </div>
    </div>
  );
};
