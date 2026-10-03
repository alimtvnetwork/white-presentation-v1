import React from 'react';
import type { RedisMeshSyncStatus } from '../../../types/nextGenArchetypes';
import { Database, Server, AlertTriangle, ShieldCheck } from 'lucide-react';

interface Props {
  redis: RedisMeshSyncStatus;
  circuitBreaker: {
    state: string;
    failureThresholdPercent: number;
    isTripped: boolean;
    isAutoRecoveryEnabled: boolean;
  };
  currentStep: number;
}

export const RateLimitPipelineStrip: React.FC<Props> = ({ redis, circuitBreaker, currentStep }) => {
  return (
    <div className="col-span-4 flex flex-col justify-between gap-5 flex-1">
      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: currentStep === 2 ? 'var(--pres-border-hover)' : 'var(--pres-border)' }}
        className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between flex-1 transition-all duration-300 ${currentStep === 2 ? 'step-phase-active ring-2 ring-violet-500/50' : 'step-phase-past opacity-85'}`}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/20 text-slate-900 dark:text-rose-300 border border-rose-500/30 flex items-center gap-1.5">
              <Database size={14} className="text-rose-400" /> REDIS MESH SYNC
            </span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20">
              {redis.isClusterHealthy ? 'HEALTHY' : 'LAG'}
            </span>
          </div>
          <h3 className="text-xl font-ubuntu font-bold tracking-tight mb-1 text-slate-900 dark:text-slate-100">{redis.clusterNodesCount} Sharded Master Nodes</h3>
          <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-2.5">Ring: MurmurHash3 Consistent</p>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">P99 Sync</span>
              <span className="text-base font-bold text-slate-900 dark:text-emerald-400">{redis.p99SyncLatencyMs} ms</span>
            </div>
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Hashing</span>
              <span className="text-base font-bold text-slate-900 dark:text-sky-300">{redis.hasConsistentHashing ? '100%' : 'Rehash'}</span>
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><Server size={12} className="text-sky-400" /> State</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">SUB-MS</span>
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: currentStep === 3 ? 'var(--pres-border-hover)' : 'var(--pres-border)' }}
        className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between flex-1 transition-all duration-300 ${currentStep === 3 ? 'step-phase-active ring-2 ring-violet-500/50' : 'step-phase-past opacity-85'}`}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <AlertTriangle size={14} className="text-amber-800 dark:text-amber-300" /> CIRCUIT BREAKER
            </span>
            <span className={`font-mono text-xs px-2.5 py-0.5 rounded-full font-bold border ${circuitBreaker.state === 'CLOSED' ? 'bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-slate-900 dark:text-rose-400 border-rose-500/20'}`}>
              STATE: {circuitBreaker.state}
            </span>
          </div>
          <h3 className="text-xl font-ubuntu font-bold tracking-tight mb-1 text-slate-900 dark:text-slate-100">Resilience Shield</h3>
          <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-2.5">Trip Threshold: {circuitBreaker.failureThresholdPercent}% Error Rate</p>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Trip Status</span>
              <span className="text-xs font-bold text-slate-900 dark:text-emerald-400">{circuitBreaker.isTripped ? 'TRIPPED' : 'ARMED'}</span>
            </div>
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Auto-Recovery</span>
              <span className="text-xs font-bold text-slate-900 dark:text-sky-300">{circuitBreaker.isAutoRecoveryEnabled ? 'ACTIVE' : 'OFF'}</span>
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><ShieldCheck size={12} className="text-emerald-500" /> Fallback</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">READY</span>
        </div>
      </div>
    </div>
  );
};
