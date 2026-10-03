import React from 'react';
import { Layers } from 'lucide-react';
import type { StorageReplicationPipeline } from '../../../../types/nextGenArchetypes';

interface ReplicationMeshPanelProps {
  replication: StorageReplicationPipeline;
  isActive: boolean;
}

export const ReplicationMeshPanel: React.FC<ReplicationMeshPanelProps> = ({
  replication,
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
        <span className="px-3.5 py-1 rounded-full text-sm font-mono font-bold bg-violet-500/20 text-slate-900 dark:text-violet-300 border border-violet-500/30 flex items-center gap-1.5">
          <Layers size={15} className="text-violet-400" />
          STORAGE REPLICATION
        </span>
        <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20 font-bold">
          {replication.syncMode}
        </span>
      </div>

      <h3 className="text-xl font-ubuntu font-bold tracking-tight mb-1 text-slate-900 dark:text-slate-100">
        Continuous Block Level Sync
      </h3>
      <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-4">
        Zero Data Loss Storage Pipeline
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4 font-mono text-xs">
        <div className="p-3 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
            Replication Lag
          </span>
          <span className="text-base font-bold text-slate-900 dark:text-emerald-400">
            {replication.replicationLagMs} ms
          </span>
        </div>
        <div className="p-3 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
            Loss Guarantee
          </span>
          <span className="text-base font-bold text-slate-900 dark:text-sky-300">
            {replication.hasZeroDataLossGuarantee ? 'ZERO LOSS (RPO=0)' : 'BEST EFFORT'}
          </span>
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
      <span className="text-slate-700 dark:text-slate-400">Replica Consistency: 100% Deterministic</span>
      <span className="text-emerald-600 dark:text-emerald-400 font-bold">VERIFIED</span>
    </div>
  </div>
);
