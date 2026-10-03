import React from 'react';
import { Database } from 'lucide-react';
import type { RedisMeshSyncStatus } from '../../../../types/nextGenArchetypes';

interface RedisMeshPanelProps {
  redis: RedisMeshSyncStatus;
  isActive: boolean;
}

export const RedisMeshPanel: React.FC<RedisMeshPanelProps> = ({ redis, isActive }) => (
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
        <span className="px-3.5 py-1 rounded-full text-sm font-mono font-bold bg-rose-500/20 text-slate-900 dark:text-rose-300 border border-rose-500/30 flex items-center gap-1.5">
          <Database size={15} className="text-rose-400" />
          REDIS MESH SYNC
        </span>
        <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20 font-bold">
          {redis.isClusterHealthy ? 'CLUSTER HEALTHY' : 'SYNC LAG'}
        </span>
      </div>

      <h3 className="text-xl font-ubuntu font-bold tracking-tight mb-1 text-slate-900 dark:text-slate-100">
        {redis.clusterNodesCount} Sharded Master Nodes
      </h3>
      <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-4">
        Consistent Hash Ring: MurmurHash3
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4 font-mono text-xs">
        <div className="p-3 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
            P99 Sync Latency
          </span>
          <span className="text-base font-bold text-slate-900 dark:text-emerald-400">
            {redis.p99SyncLatencyMs} ms
          </span>
        </div>
        <div className="p-3 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
            Key Consistency
          </span>
          <span className="text-base font-bold text-slate-900 dark:text-sky-300">
            {redis.hasConsistentHashing ? '100% Deterministic' : 'Rehashing'}
          </span>
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
      <span className="text-slate-700 dark:text-slate-400">Memory Engine: In-Memory Key Quotas</span>
      <span className="text-emerald-600 dark:text-emerald-400 font-bold">ACTIVE PEER SYNC</span>
    </div>
  </div>
);
