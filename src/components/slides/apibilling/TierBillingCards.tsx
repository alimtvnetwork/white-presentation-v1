import React from 'react';
import type { ApiTierItem } from '../../../types/sovereignOperationsArchetypes';
import { ShieldCheck, Users, Zap, Check } from 'lucide-react';

interface TierBillingCardsProps {
  pricingTiers: ApiTierItem[];
}

export const TierBillingCards: React.FC<TierBillingCardsProps> = ({ pricingTiers }) => {
  return (
    <div className="grid grid-cols-4 gap-4 z-10 my-auto">
      {pricingTiers.map((tier) => (
        <div
          key={tier.id}
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="p-4 rounded-xl border flex flex-col justify-between h-[360px] shadow-sm hover:border-emerald-500/50 transition-colors"
        >
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-sm font-bold text-emerald-400 truncate max-w-[180px]">
                {tier.tierName}
              </span>
              {tier.isSlaGuaranteeActive && (
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.2 rounded border border-cyan-500/20">
                  99.99% SLA
                </span>
              )}
            </div>

            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-2xl font-mono font-bold text-slate-100">
                ${tier.monthlyBaseFee.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 font-mono">/mo base</span>
            </div>

            <div className="mt-2 text-xs font-mono text-slate-400 space-y-1 bg-slate-900/40 p-2 rounded border border-slate-800">
              <div className="flex justify-between">
                <span>Included:</span>
                <span className="text-slate-200 font-bold">{tier.includedCallsMillions}M calls</span>
              </div>
              <div className="flex justify-between">
                <span>Overage:</span>
                <span className="text-emerald-400">${tier.overagePerThousandCalls.toFixed(2)}/1k</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 space-y-1.5 my-2 font-mono text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span className="flex items-center gap-1 text-slate-400">
                <Users size={11} className="text-indigo-400" /> Subscribers
              </span>
              <span className="font-bold text-slate-100">{tier.activeSubscribers.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Tier MRR</span>
              <span className="font-bold text-emerald-400">
                ${(tier.monthlyRecurringRevenue / 1000).toFixed(0)}k
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Gross Margin</span>
              <span className="font-bold text-cyan-400">{tier.grossMarginPercent}%</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="text-slate-300 flex items-center gap-1">
              <Check size={11} className="text-emerald-400" />
              {tier.isSelfServeEnabled ? 'Self-Serve API' : 'Direct Enterprise'}
            </span>
            <span className="text-indigo-400 font-medium">
              {tier.hasVolumeDiscount ? 'Tier Discount' : 'Standard'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
