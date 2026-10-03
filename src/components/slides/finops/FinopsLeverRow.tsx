import React from 'react';
import { Cpu, HardDrive, Network, Key, CheckCircle, Zap, AlertTriangle } from 'lucide-react';
import type { CostOptimizationLeverItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface FinopsLeverRowProps {
  lever: CostOptimizationLeverItem;
}

export const FinopsLeverRow: React.FC<FinopsLeverRowProps> = ({ lever }) => {
  const isAutomated = isBooleanTrue(lever.isAutomated);
  const isRealized = isBooleanTrue(lever.isRealized);
  const hasAnomalousSpike = isBooleanTrue(lever.hasAnomalousSpike);

  const renderCategoryIcon = () => {
    switch (lever.category) {
      case 'compute': return <Cpu size={12} className="text-cyan-400" />;
      case 'storage': return <HardDrive size={12} className="text-amber-600 dark:text-amber-400" />;
      case 'network': return <Network size={12} className="text-emerald-400" />;
      case 'licensing': return <Key size={12} className="text-purple-400" />;
    }
  };

  return (
    <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/50 flex items-center justify-between font-mono text-xs">
      <div className="flex items-center gap-3 max-w-[60%]">
        <div className="p-1.5 rounded bg-slate-800">
          {renderCategoryIcon()}
        </div>
        <div>
          <div className="text-white font-ubuntu font-semibold text-sm">
            {lever.leverTitle}
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-400">
            <span className="uppercase tracking-wider">{lever.category}</span>
            <span>•</span>
            <span className="capitalize">Effort: {lever.effortTier}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-sm font-bold text-emerald-400">
            +${lever.annualSavingsUsd.toLocaleString()}/yr
          </div>
          <div className="text-[10px] text-slate-400">
            {isRealized ? 'Realized Savings' : 'Projected Opportunity'}
          </div>
        </div>

        <div className="flex items-center gap-1">
          {isAutomated && (
            <span className="p-1 rounded bg-cyan-500/10 text-cyan-400 text-[10px] flex items-center gap-0.5 border border-cyan-500/20" title="Automated Policy">
              <Zap size={11} /> Auto
            </span>
          )}
          {isRealized ? (
            <span className="p-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] flex items-center gap-0.5 border border-emerald-500/20">
              <CheckCircle size={11} /> Active
            </span>
          ) : (
            <span className="p-1 rounded bg-slate-800 text-slate-300 text-[10px]">
              Planned
            </span>
          )}
          {hasAnomalousSpike && (
            <span className="p-1 rounded bg-rose-500/10 text-rose-400 text-[10px] flex items-center gap-0.5 border border-rose-500/20">
              <AlertTriangle size={11} /> Spike
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
