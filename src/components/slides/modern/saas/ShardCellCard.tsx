import React from 'react';
import type { ShardingTier } from '../../../../types/modern/saasFinancialTypes';
import { Server, CheckCircle2, Shield } from 'lucide-react';

interface ShardCellCardProps {
  tier: ShardingTier;
  isCurrentStep: boolean;
  onClick?: () => void;
}

export const ShardCellCard: React.FC<ShardCellCardProps> = ({
  tier,
  isCurrentStep,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
      isCurrentStep
        ? 'plane-2-elevated border-blue-500/60 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/20'
        : 'plane-1-raised border-slate-700/50 hover:border-slate-600'
    }`}
  >
    <div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800 text-blue-300">
          Tier {tier.stepIndex}
        </span>
        {tier.isHighlyAvailable ? (
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 flex items-center gap-1">
            <Shield size={11} /> High Availability
          </span>
        ) : null}
      </div>

      <h3 className="text-lg font-ubuntu font-bold text-slate-100 mb-1">{tier.tierName}</h3>
      <p className="text-xs text-slate-400 font-mono mb-4">{tier.architectureComponent}</p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <div className="text-xs text-slate-400 font-mono">Nodes</div>
          <div className="text-base font-ubuntu font-black text-blue-400">{tier.activeNodeCount}</div>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <div className="text-xs text-slate-400 font-mono">Budget</div>
          <div className="text-base font-ubuntu font-black text-emerald-400">{tier.latencyBudgetMs} ms</div>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-4 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-mono">Capacity:</span>
        <span className="text-sm font-ubuntu font-black text-cyan-400">
          {tier.throughputQps.toLocaleString()} QPS
        </span>
      </div>
    </div>

    <div>
      <div className="text-xs uppercase text-slate-400 font-mono font-bold tracking-wider mb-2">Capabilities</div>
      <div className="space-y-1.5">
        {tier.tierFeatures.map((feat, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
            <CheckCircle2 size={13} className="text-blue-400 shrink-0" />
            <span>{feat}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
