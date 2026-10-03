import React from 'react';
import type { ShardClusterTelemetry } from '../../../../types/modern/saasFinancialTypes';
import { Server, Users, RefreshCw, Zap, ShieldCheck } from 'lucide-react';

interface PartitionRoutingGridProps {
  telemetry: ShardClusterTelemetry;
}

export const PartitionRoutingGrid: React.FC<PartitionRoutingGridProps> = ({ telemetry }) => (
  <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/50 flex items-center justify-between gap-6 z-10 font-mono text-sm">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
        <Server size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Physical Shards</div>
        <div className="text-xl font-ubuntu font-black text-blue-400">{telemetry.totalPhysicalShards} Nodes</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
        <Users size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Tenants Isolated</div>
        <div className="text-xl font-ubuntu font-black text-purple-400">
          {telemetry.managedTenantsCount.toLocaleString()}
        </div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <Zap size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">p99 Replication</div>
        <div className="text-xl font-ubuntu font-black text-emerald-400">{telemetry.p99ReplicationLagMs} ms</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
        <ShieldCheck size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">SLA Availability</div>
        <div className="text-xl font-ubuntu font-black text-cyan-400">{telemetry.systemAvailabilityPercentage}%</div>
      </div>
    </div>

    {telemetry.isAutoRebalanceEnabled ? (
      <div className="px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
        <RefreshCw size={13} className="animate-spin" />
        Auto Rebalance
      </div>
    ) : null}
  </div>
);
