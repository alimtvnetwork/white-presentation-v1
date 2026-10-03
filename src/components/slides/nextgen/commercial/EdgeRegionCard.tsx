import React from 'react';
import { Activity, ShieldCheck } from 'lucide-react';
import type { EdgePopMetric } from '../../../../types/nextGenArchetypes';

interface EdgeRegionCardProps {
  pop: EdgePopMetric;
  isDark?: boolean;
}

export const EdgeRegionCard: React.FC<EdgeRegionCardProps> = ({ pop, isDark }) => (
  <div className="plane-1-raised p-5 rounded-2xl border border-slate-700/60 bg-slate-900/30 flex flex-col justify-between h-full">
    <div>
      <div className="flex items-center justify-between mb-3 font-mono text-xs">
        <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-700 dark:text-violet-300 font-bold">
          {pop.regionCode}
        </span>
        <span className="text-slate-500">{pop.anycastIp}</span>
      </div>

      <h3 className="font-ubuntu text-xl font-bold text-slate-900 dark:text-white mb-3">
        {pop.city}
      </h3>

      <div className="space-y-2 font-mono text-xs text-slate-600 dark:text-slate-400">
        <div className="flex justify-between">
          <span>P99 Latency:</span>
          <span className="text-emerald-400 font-bold">{pop.p99LatencyMs}ms</span>
        </div>
        <div className="flex justify-between">
          <span>Throughput:</span>
          <span className="text-slate-200 font-bold">{pop.requestVolumeRps.toLocaleString()} RPS</span>
        </div>
        <div className="flex justify-between">
          <span>DDoS Filter:</span>
          <span className="text-emerald-400 font-bold">{pop.ddosMitigationStatus}</span>
        </div>
      </div>
    </div>

    <div className="pt-3 border-t border-slate-700/40 flex items-center justify-between font-mono text-[11px]">
      <span className="text-slate-500">Status</span>
      <span className="text-emerald-400 font-bold flex items-center gap-1">
        <ShieldCheck size={12} /> {pop.isPopOperational ? 'Operational' : 'Degraded'}
      </span>
    </div>
  </div>
);
