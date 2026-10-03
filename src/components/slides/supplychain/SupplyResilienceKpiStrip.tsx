import React from 'react';
import { ShieldCheck, Truck, AlertOctagon, UserCheck } from 'lucide-react';

interface SupplyResilienceKpiStripProps {
  overallSupplyResilienceScore: number;
  totalMonitoredSuppliers: number;
  criticalSpofCount: number;
  riskDirector: string;
  directorRole: string;
}

export const SupplyResilienceKpiStrip: React.FC<SupplyResilienceKpiStripProps> = ({
  overallSupplyResilienceScore,
  totalMonitoredSuppliers,
  criticalSpofCount,
  riskDirector,
  directorRole,
}) => {
  const isSpofEliminated = criticalSpofCount === 0;

  return (
    <div className="plane-1-raised p-4 rounded-2xl border border-amber-500/30 bg-amber-950/20 flex items-center justify-between font-mono text-xs">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full font-bold bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40">
          <Truck size={14} className="text-amber-600 dark:text-amber-400" />
          Resilience Score: {overallSupplyResilienceScore.toFixed(1)}%
        </span>
        <span className="flex items-center gap-1.5 text-slate-300">
          Monitored Suppliers: <strong className="text-slate-100 font-bold">{totalMonitoredSuppliers} Global Partners</strong>
        </span>
        <span
          className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold border ${
            isSpofEliminated
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
              : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
          }`}
        >
          <AlertOctagon size={12} />
          {isSpofEliminated ? '0 SPOF (Eliminated)' : `${criticalSpofCount} SPOF Detected`}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <UserCheck size={14} className="text-amber-600 dark:text-amber-400" />
        <span className="text-slate-400">
          Risk Governance: <strong className="text-slate-100">{riskDirector}</strong> ({directorRole})
        </span>
      </div>
    </div>
  );
};
