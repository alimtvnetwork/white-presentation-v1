import React from 'react';
import type { ServiceComponentItem } from '../../../types/kineticSuiteArchetypes';
import { UptimeHistoryStrips } from './UptimeHistoryStrips';
import { CheckCircle2, AlertTriangle, Server } from 'lucide-react';

export interface ServiceComponentRowProps {
  service: ServiceComponentItem;
}

export const ServiceComponentRow: React.FC<ServiceComponentRowProps> = ({ service }) => {
  const isOperational = service.isOperational;
  const hasRecentIncident = service.hasRecentIncident;

  const tierColors: Record<string, string> = {
    core: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    edge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    data: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30',
    async: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  };

  return (
    <div className="plane-1-raised rounded-2xl border border-slate-800 bg-slate-900/50 p-4 flex flex-col gap-3 font-mono text-xs transition-all hover:border-slate-700 hover:bg-slate-900/70">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            {isOperational && <span className="absolute w-3 h-3 rounded-full bg-emerald-400/40 animate-ping" />}
            <span className={`w-2.5 h-2.5 rounded-full ${isOperational ? 'bg-emerald-400' : 'bg-rose-400'}`} />
          </div>
          <span className="font-ubuntu font-bold text-slate-100 text-sm">{service.name}</span>
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${tierColors[service.tier] || tierColors.core}`}>
            {service.tier}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Uptime</span>
            <span className="font-bold text-emerald-400 text-sm">{service.uptimePercentage.toFixed(3)}%</span>
          </div>
          <div className="flex items-center gap-1">
            {hasRecentIncident ? (
              <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1 text-[11px] font-bold">
                <AlertTriangle size={13} /> Degraded
              </span>
            ) : (
              <span className="text-emerald-400 flex items-center gap-1 text-[11px] font-bold">
                <CheckCircle2 size={13} /> Nominal
              </span>
            )}
          </div>
        </div>
      </div>

      <UptimeHistoryStrips historyBlocks={service.historyBlocks} />
    </div>
  );
};
