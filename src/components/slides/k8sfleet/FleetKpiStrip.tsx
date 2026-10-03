import React from 'react';
import { Server, Cpu, ShieldCheck, Box } from 'lucide-react';

interface FleetKpiStripProps {
  totalManagedClusters: number;
  overallNodeCapacity: number;
  runningPodsTotal: number;
  isZeroDriftEnforced: boolean;
}

export const FleetKpiStrip: React.FC<FleetKpiStripProps> = ({
  totalManagedClusters,
  overallNodeCapacity,
  runningPodsTotal,
  isZeroDriftEnforced,
}) => {
  const metrics = [
    {
      label: 'Managed Clusters',
      value: `${totalManagedClusters} Production`,
      sub: 'Multi-region mesh federation',
      icon: <Server size={18} className="text-sky-400" />,
      tagColor: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
    },
    {
      label: 'Total Fleet Capacity',
      value: `${overallNodeCapacity.toLocaleString()} Nodes`,
      sub: 'Karpenter consolidated compute',
      icon: <Cpu size={18} className="text-cyan-400" />,
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    },
    {
      label: 'Running Pod Workloads',
      value: `${(runningPodsTotal / 1000).toFixed(1)}k Pods`,
      sub: 'Zero restart flapping rate',
      icon: <Box size={18} className="text-indigo-400" />,
      tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    },
    {
      label: 'GitOps Reconciliation',
      value: isZeroDriftEnforced ? 'Zero-Drift' : 'Advisory',
      sub: 'ArgoCD / Flux sync state',
      icon: <ShieldCheck size={18} className="text-emerald-400" />,
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 z-10">
      {metrics.map((m, idx) => (
        <div
          key={idx}
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="p-4 rounded-xl border flex items-center justify-between shadow-sm"
        >
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">{m.label}</div>
            <div className="text-2xl font-mono font-bold mt-1 text-slate-100">{m.value}</div>
            <div className="text-xs text-slate-400 mt-0.5">{m.sub}</div>
          </div>
          <div className={`p-3 rounded-lg border ${m.tagColor}`}>{m.icon}</div>
        </div>
      ))}
    </div>
  );
};
