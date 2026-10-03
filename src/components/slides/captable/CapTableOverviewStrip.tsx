import React from 'react';
import { DollarSign, PieChart, Users, Award } from 'lucide-react';

interface CapTableOverviewStripProps {
  currentValuationUsd: number;
  totalSharesOutstanding: number;
  unallocatedOptionPoolPercent: number;
  chiefArchitect: string;
  architectRole: string;
}

export const CapTableOverviewStrip: React.FC<CapTableOverviewStripProps> = ({
  currentValuationUsd,
  totalSharesOutstanding,
  unallocatedOptionPoolPercent,
  chiefArchitect,
  architectRole,
}) => {
  const valuationM = (currentValuationUsd / 1_000_000).toFixed(0);
  const sharesM = (totalSharesOutstanding / 1_000_000).toFixed(1);

  return (
    <div className="plane-1-raised p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 flex items-center justify-between font-mono text-xs">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5 text-slate-300">
          <DollarSign size={14} className="text-emerald-400" />
          Enterprise Valuation: <strong className="text-emerald-300 text-sm font-bold">${valuationM}M USD</strong>
        </span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <Users size={14} className="text-cyan-400" />
          Shares Outstanding: <strong className="text-cyan-300 font-bold">{sharesM}M</strong>
        </span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <PieChart size={14} className="text-amber-600 dark:text-amber-400" />
          Option Pool Headroom: <strong className="text-amber-800 dark:text-amber-300 font-bold">{unallocatedOptionPoolPercent}%</strong>
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Award size={14} className="text-emerald-400" />
        <span className="text-slate-400">
          Capital Structure: <strong className="text-slate-100">{chiefArchitect}</strong> ({architectRole})
        </span>
      </div>
    </div>
  );
};
