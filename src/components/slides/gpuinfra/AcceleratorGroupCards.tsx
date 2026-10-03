import React from 'react';
import type { GpuNodeGroupItem } from '../../../types/sovereignOperationsArchetypes';
import { Cpu, Activity, Flame, ShieldCheck, Zap } from 'lucide-react';

interface AcceleratorGroupCardsProps {
  gpuNodeGroups: GpuNodeGroupItem[];
}

export const AcceleratorGroupCards: React.FC<AcceleratorGroupCardsProps> = ({ gpuNodeGroups }) => {
  return (
    <div className="grid grid-cols-3 gap-5 z-10 my-auto">
      {gpuNodeGroups.map((group) => (
        <div
          key={group.id}
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="p-5 rounded-xl border flex flex-col justify-between h-[360px] shadow-sm hover:border-purple-500/50 transition-colors"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/20 truncate max-w-[200px]">
                {group.nodeGroupName}
              </span>
              {group.isHealthy && (
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <Activity size={10} className="animate-pulse" /> Healthy
                </span>
              )}
            </div>

            <div className="text-xs text-slate-300 font-medium">{group.acceleratorModel}</div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-300 mt-3 bg-slate-900/40 p-2 rounded border border-slate-800">
              <div className="flex items-center gap-1 text-purple-300">
                <Cpu size={12} />
                <span>{group.gpuCount} Accelerators</span>
              </div>
              <span className="text-slate-600">|</span>
              <div className="flex items-center gap-1 text-cyan-400">
                <Zap size={12} />
                <span>{(group.tokensPerSecondGenerated / 1000).toFixed(0)}k TPS</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 space-y-2 my-2">
            <div>
              <div className="flex justify-between items-center text-[11px] font-mono mb-1">
                <span className="text-slate-400">Tensor Compute Utilization</span>
                <span className="text-purple-400 font-bold">{group.computeUtilizationPercent}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-purple-500 h-full rounded-full" style={{ width: `${group.computeUtilizationPercent}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-[11px] font-mono mb-1">
                <span className="text-slate-400">Paged KV-Cache Efficiency</span>
                <span className="text-emerald-400 font-bold">{group.kvCacheEfficiencyPercent}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${group.kvCacheEfficiencyPercent}%` }} />
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck size={12} />
              {group.isThermalThrottleFree ? 'Zero Throttle (64°C)' : 'Throttled'}
            </span>
            <span className="text-purple-400 flex items-center gap-1 font-medium">
              <Activity size={11} />
              {group.hasActiveWorkload ? 'Active Workload' : 'Idle'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
