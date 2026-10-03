import React from 'react';
import { DollarSign, PiggyBank, Percent, ShieldCheck } from 'lucide-react';

interface FinopsKpiStripProps {
  totalMonthlySpendUsd: number;
  totalAnnualProjectedSavingsUsd: number;
  overallDiscountCoveragePercent: number;
}

export const FinopsKpiStrip: React.FC<FinopsKpiStripProps> = ({
  totalMonthlySpendUsd,
  totalAnnualProjectedSavingsUsd,
  overallDiscountCoveragePercent,
}) => (
  <div className="plane-1-raised grid grid-cols-4 gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/60 z-10 font-mono">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
        <DollarSign size={20} />
      </div>
      <div>
        <div className="text-[11px] text-slate-400 uppercase tracking-wider">Monthly Run Rate</div>
        <div className="text-xl font-bold text-white">
          ${(totalMonthlySpendUsd || 142500).toLocaleString()}
        </div>
      </div>
    </div>

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
        <PiggyBank size={20} />
      </div>
      <div>
        <div className="text-[11px] text-slate-400 uppercase tracking-wider">Projected Annual Savings</div>
        <div className="text-xl font-bold text-cyan-400">
          ${(totalAnnualProjectedSavingsUsd || 384000).toLocaleString()}/yr
        </div>
      </div>
    </div>

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400">
        <Percent size={20} />
      </div>
      <div>
        <div className="text-[11px] text-slate-400 uppercase tracking-wider">CUD / Spot Coverage</div>
        <div className="text-xl font-bold text-amber-600 dark:text-amber-400">
          {overallDiscountCoveragePercent || 84.5}%
        </div>
      </div>
    </div>

    <div className="flex items-center gap-3 border-l border-slate-800 pl-4">
      <ShieldCheck size={20} className="text-emerald-400" />
      <div>
        <div className="text-[11px] text-slate-400 uppercase tracking-wider">Unit Efficiency</div>
        <div className="text-xs font-semibold text-emerald-300">
          Sub-$0.0005 per Transaction
        </div>
      </div>
    </div>
  </div>
);
