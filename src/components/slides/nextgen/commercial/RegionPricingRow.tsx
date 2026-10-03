import React from 'react';
import { Globe, ShieldCheck } from 'lucide-react';
import type { RegionPricingMetric } from '../../../../types/nextGenArchetypes';

interface RegionPricingRowProps {
  regions: RegionPricingMetric[];
}

export const RegionPricingRow: React.FC<RegionPricingRowProps> = ({ regions }) => (
  <div className="plane-1-raised p-5 rounded-2xl border border-slate-700/60 bg-slate-900/30">
    <div className="flex items-center gap-2 mb-3">
      <Globe size={16} className="text-violet-500" />
      <span className="font-mono text-xs uppercase font-bold tracking-wider text-slate-700 dark:text-slate-300">
        Regional Compute & Storage Unit Benchmarks
      </span>
    </div>

    <div className="grid grid-cols-4 gap-4 font-mono text-xs">
      {regions.map((reg) => (
        <div
          key={reg.id}
          className="p-3 rounded-xl border border-slate-700/40 bg-slate-800/40 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-slate-900 dark:text-white">{reg.regionName}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">
              {reg.regionCode}
            </span>
          </div>

          <div className="space-y-1 text-slate-600 dark:text-slate-400 text-[11px]">
            <div className="flex justify-between">
              <span>Compute:</span>
              <span className="font-bold text-slate-900 dark:text-slate-200">${reg.computeCostPerHour}/hr</span>
            </div>
            <div className="flex justify-between">
              <span>Egress:</span>
              <span className="font-bold text-slate-900 dark:text-slate-200">${reg.egressCostPerGb}/GB</span>
            </div>
            <div className="flex justify-between">
              <span>Latency:</span>
              <span className="text-emerald-400 font-bold">{reg.latencyMs}ms</span>
            </div>
          </div>

          <div className="mt-2 pt-1.5 border-t border-slate-700/40 flex items-center justify-between text-[10px]">
            <span className="text-slate-500">SLA</span>
            <span className="text-emerald-400 font-bold flex items-center gap-0.5">
              <ShieldCheck size={11} /> {reg.slaPercentage}%
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
