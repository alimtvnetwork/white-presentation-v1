import React from 'react';
import { Cloud, CheckCircle, ArrowDownRight } from 'lucide-react';
import type { CloudSpendProviderItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface FinopsProviderCardProps {
  provider: CloudSpendProviderItem;
}

export const FinopsProviderCard: React.FC<FinopsProviderCardProps> = ({ provider }) => {
  const isOptimized = isBooleanTrue(provider.isOptimized);

  return (
    <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/50 flex flex-col gap-2 font-mono text-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded bg-slate-800 text-cyan-400">
            <Cloud size={14} />
          </div>
          <span className="font-ubuntu font-bold text-sm text-white">
            {provider.providerName}
          </span>
        </div>
        {isOptimized && (
          <span className="text-emerald-400 font-bold text-[10px] flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            <CheckCircle size={10} /> OPTIMIZED
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/80">
        <div>
          <span className="text-[10px] text-slate-400 block">Monthly Run Rate</span>
          <span className="text-white font-bold text-sm">
            ${provider.monthlyRunRateUsd.toLocaleString()}
          </span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block">CUD Coverage</span>
          <span className="text-amber-600 dark:text-amber-400 font-bold text-sm">
            {provider.committedDiscountPercent}%
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-slate-800/60 text-[11px]">
        <span className="text-slate-400">
          Unit Cost: <strong className="text-cyan-300">${provider.unitCostPerTxUsd}/tx</strong>
        </span>
        <span className="text-emerald-400 font-semibold flex items-center gap-0.5">
          <ArrowDownRight size={11} /> -${provider.monthlySavingsUsd.toLocaleString()}/mo
        </span>
      </div>
    </div>
  );
};
