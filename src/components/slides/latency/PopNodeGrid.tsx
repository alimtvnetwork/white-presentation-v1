import React from 'react';
import type { EdgePopNodeItem } from '../../../types/sovereignOperationsArchetypes';
import { Activity, ShieldCheck, Gauge } from 'lucide-react';

interface PopNodeGridProps {
  edgeNodes: EdgePopNodeItem[];
}

export const PopNodeGrid: React.FC<PopNodeGridProps> = ({ edgeNodes }) => {
  return (
    <div className="grid grid-cols-4 gap-4 z-10 my-auto">
      {edgeNodes.map((pop) => (
        <div
          key={pop.id}
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="p-4 rounded-xl border flex flex-col justify-between h-[360px] shadow-sm hover:border-cyan-500/50 transition-colors"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                {pop.popCode}
              </span>
              {pop.isOperational && (
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <Activity size={10} className="animate-pulse" /> Operational
                </span>
              )}
            </div>
            <div className="text-base font-semibold text-slate-100">{pop.location}</div>
            <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
              <Gauge size={12} className="text-cyan-400" />
              <span>Egress: {pop.trafficEgressGbps} Gbps</span>
              <span className="text-slate-500">|</span>
              <span>Cache: {pop.cacheHitRatioPercent}%</span>
            </div>
          </div>

          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 space-y-2 my-2">
            <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">Latency Profile (RTT)</div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-slate-800/40 p-2 rounded border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">p50</div>
                <div className="text-sm font-mono font-bold text-emerald-400">{pop.p50Ms}ms</div>
              </div>
              <div className="bg-slate-800/40 p-2 rounded border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">p95</div>
                <div className="text-sm font-mono font-bold text-cyan-400">{pop.p95Ms}ms</div>
              </div>
              <div className="bg-slate-800/40 p-2 rounded border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">p99</div>
                <div className="text-sm font-mono font-bold text-indigo-400">{pop.p99Ms}ms</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-800/80">
            <span className="text-slate-400 flex items-center gap-1">
              <ShieldCheck size={12} className="text-emerald-400" />
              {pop.isAnycastHealthy ? 'Anycast BGP Synced' : 'Sync Standby'}
            </span>
            <span className="text-cyan-400 font-medium">
              {pop.hasOptimalRouting ? 'Optimal Path' : 'Standard'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
