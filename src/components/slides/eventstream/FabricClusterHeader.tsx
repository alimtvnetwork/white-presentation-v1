import React from 'react';
import { Activity, ShieldCheck, Zap, Server } from 'lucide-react';

interface FabricClusterHeaderProps {
  clusterRegion: string;
  aggregateThroughputEps: number;
  totalDeadLetterQueueEvents: number;
  principalEngineer: string;
  engineerRole: string;
}

export const FabricClusterHeader: React.FC<FabricClusterHeaderProps> = ({
  clusterRegion,
  aggregateThroughputEps,
  totalDeadLetterQueueEvents,
  principalEngineer,
  engineerRole,
}) => {
  const epsM = (aggregateThroughputEps / 1_000_000).toFixed(1);

  return (
    <div className="plane-1-raised p-4 rounded-2xl border border-sky-500/30 bg-sky-950/20 flex items-center justify-between font-mono text-xs">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full font-bold bg-sky-500/20 text-sky-300 border border-sky-500/40">
          <Server size={14} className="text-sky-400" />
          {clusterRegion}
        </span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <Zap size={14} className="text-amber-600 dark:text-amber-400" />
          Aggregate Ingress: <strong className="text-sky-300 text-sm font-bold">{epsM}M EPS</strong>
        </span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <Activity size={14} className="text-emerald-400" />
          DLQ Quarantine: <strong className="text-emerald-400 font-bold">{totalDeadLetterQueueEvents} Events</strong>
        </span>
      </div>

      <div className="flex items-center gap-2">
        <ShieldCheck size={14} className="text-sky-400" />
        <span className="text-slate-400">
          Principal Engineer: <strong className="text-slate-100">{principalEngineer}</strong> ({engineerRole})
        </span>
      </div>
    </div>
  );
};
