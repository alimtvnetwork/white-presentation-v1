import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import type { EnterprisePricingTier } from '../../../../types/nextGenArchetypes';

interface PricingTierCardProps {
  tier: EnterprisePricingTier;
  isDark?: boolean;
}

export const PricingTierCard: React.FC<PricingTierCardProps> = ({ tier, isDark }) => (
  <div
    className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
      tier.isRecommendedTier
        ? 'border-violet-500 bg-violet-500/10 shadow-lg'
        : 'border-slate-700/60 bg-slate-900/30'
    }`}
  >
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-violet-500/20 text-violet-700 dark:text-violet-300 font-bold uppercase">
          {tier.tierBadge}
        </span>
        {tier.isRecommendedTier ? (
          <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-700 dark:text-violet-300 flex items-center gap-1 font-bold">
            <Award size={12} /> Recommended
          </span>
        ) : null}
      </div>

      <h3 className="font-ubuntu text-xl font-bold text-slate-900 dark:text-white mb-2">
        {tier.tierName}
      </h3>

      <div className="font-mono mb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-slate-900 dark:text-white">
            ${tier.monthlyBaseUsd.toLocaleString()}
          </span>
          <span className="text-xs text-slate-500">/mo</span>
        </div>
        <span className={`text-xs block mt-1 ${isDark ? 'text-violet-300' : 'text-violet-800'}`}>
          Includes ${tier.includedCreditsUsd} monthly compute credits
        </span>
      </div>
    </div>

    <div className="pt-3 border-t border-slate-700/40 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
      <CheckCircle2 size={13} />
      <span>{tier.hasEnterpriseDiscount ? 'Enterprise SLA & Custom Billing' : 'Standard Support'}</span>
    </div>
  </div>
);
