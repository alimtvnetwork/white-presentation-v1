import React from 'react';
import type { EdgeMeshRegionItem } from '../../../types/kineticSuiteArchetypes';
import { Globe, Radio, Zap } from 'lucide-react';

export interface EdgeRegionPillProps {
  region: EdgeMeshRegionItem;
  hasGlow?: boolean;
}

export const EdgeRegionPill: React.FC<EdgeRegionPillProps> = ({ region }) => {
  const isHealthy = region.isOperational;
  const isHub = region.isPrimaryHub;

  return (
    <div
      className={`p-3 rounded-xl border flex items-center justify-between font-mono text-xs transition-all ${
        isHub
          ? 'bg-cyan-500/10 border-cyan-500/40 ring-1 ring-cyan-500/30'
          : isHealthy
          ? 'bg-slate-900/50 border-slate-800'
          : 'bg-slate-950/40 border-slate-800'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center ${
            isHub ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-300'
          }`}
        >
          {isHub ? <Radio size={14} className="animate-pulse" /> : <Globe size={14} />}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-200">{region.city}</span>
            <span className="text-[10px] text-slate-400">({region.country})</span>
          </div>
          <span className="text-[10px] text-cyan-400/80">{region.regionCode}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end text-[10px]">
          <span className="text-slate-400">p50 / p95 / p99</span>
          <span className="text-emerald-400 font-bold">
            {region.p50LatencyMs}ms / {region.p95LatencyMs}ms / {region.p99LatencyMs}ms
          </span>
        </div>

        <div className="flex flex-col items-end">
          <span
            className={`text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase ${
              isHealthy
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                : 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30'
            }`}
          >
            {isHealthy ? 'Operational' : 'Degraded'}
          </span>
          <span className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
            <Zap size={10} className="text-amber-600 dark:text-amber-400" /> {region.throughputGbps} Gbps
          </span>
        </div>
      </div>
    </div>
  );
};
