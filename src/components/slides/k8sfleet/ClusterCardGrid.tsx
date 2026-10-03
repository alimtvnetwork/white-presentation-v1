import React from 'react';
import type { K8sClusterItem } from '../../../types/sovereignOperationsArchetypes';
import { Server, Activity, Lock, ShieldCheck, Cpu } from 'lucide-react';

interface ClusterCardGridProps {
  clusters: K8sClusterItem[];
}

export const ClusterCardGrid: React.FC<ClusterCardGridProps> = ({ clusters }) => {
  return (
    <div className="grid grid-cols-3 gap-5 z-10 my-auto">
      {clusters.map((cl) => (
        <div
          key={cl.id}
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="p-5 rounded-xl border flex flex-col justify-between h-[360px] shadow-sm hover:border-sky-500/50 transition-colors"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm font-bold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/20">
                {cl.clusterName}
              </span>
              {cl.isHealthy && (
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <Activity size={10} className="animate-pulse" /> Healthy
                </span>
              )}
            </div>

            <div className="text-xs text-slate-300 font-medium">{cl.region}</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1">Version: {cl.k8sVersion}</div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-300 mt-3 bg-slate-900/40 p-2 rounded border border-slate-800">
              <div className="flex items-center gap-1 text-sky-300">
                <Server size={12} />
                <span>{cl.nodeCount} Nodes</span>
              </div>
              <span className="text-slate-600">|</span>
              <div className="flex items-center gap-1 text-slate-300">
                <Cpu size={12} className="text-cyan-400" />
                <span>{cl.runningPods.toLocaleString()} Pods</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 space-y-2 my-2">
            <div>
              <div className="flex justify-between items-center text-[11px] font-mono mb-1">
                <span className="text-slate-400">CPU Compute</span>
                <span className="text-sky-400 font-bold">{cl.cpuUtilizationPercent}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-sky-500 h-full rounded-full" style={{ width: `${cl.cpuUtilizationPercent}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-[11px] font-mono mb-1">
                <span className="text-slate-400">Memory Working Set</span>
                <span className="text-indigo-400 font-bold">{cl.memoryUtilizationPercent}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${cl.memoryUtilizationPercent}%` }} />
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck size={12} />
              {cl.isGitOpsSynced ? 'GitOps In-Sync' : 'Drift Detected'}
            </span>
            <span className="text-sky-400 flex items-center gap-1 font-medium">
              <Lock size={11} />
              {cl.hasQuorumLock ? 'etcd Quorum OK' : 'Degraded'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
