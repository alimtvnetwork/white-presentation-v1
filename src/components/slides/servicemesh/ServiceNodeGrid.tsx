import React from 'react';
import type { MeshServiceNodeItem } from '../../../types/sovereignOperationsArchetypes';
import { Box, Lock, Activity, ShieldCheck, Cpu } from 'lucide-react';

interface ServiceNodeGridProps {
  meshServices: MeshServiceNodeItem[];
}

export const ServiceNodeGrid: React.FC<ServiceNodeGridProps> = ({ meshServices }) => {
  return (
    <div className="grid grid-cols-4 gap-4 z-10 my-auto">
      {meshServices.map((svc) => (
        <div
          key={svc.id}
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="p-4 rounded-xl border flex flex-col justify-between h-[360px] shadow-sm hover:border-indigo-500/50 transition-colors"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 truncate max-w-[200px]">
                {svc.serviceName}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                <Box size={10} /> {svc.podReplicas} pods
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 mt-2 font-mono">
              <span className="flex items-center gap-1 text-slate-300">
                <Activity size={12} className="text-cyan-400" />
                {(svc.requestsPerSecond / 1000).toFixed(0)}k RPS
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-semibold">
                p99: {svc.p99LatencyMs}ms
              </span>
            </div>
          </div>

          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 space-y-2 my-2">
            <div className="flex justify-between items-center text-[11px] font-mono">
              <span className="text-slate-400 uppercase">Error Budget</span>
              <span className="text-emerald-400 font-bold">{svc.errorBudgetRemainingPercent}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full"
                style={{ width: `${Math.min(svc.errorBudgetRemainingPercent, 100)}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 flex justify-between font-mono">
              <span>SLO: 99.9%</span>
              <span className="text-cyan-400">Burn Rate: 0.01x</span>
            </div>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs font-mono">
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1 text-purple-400">
                <Lock size={11} /> {svc.isMtlsEnforced ? 'Strict mTLS' : 'Permissive'}
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck size={11} /> {svc.isCircuitBreakerHealthy ? 'Breaker OK' : 'Tripped'}
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Telemetry:</span>
              <span className="text-cyan-400 font-medium">
                {svc.hasTelemetryTracing ? 'W3C TraceContext' : 'Disabled'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
