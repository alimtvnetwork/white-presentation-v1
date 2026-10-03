import React from 'react';
import type { RateLimitTierConfig } from '../../../types/nextGenArchetypes';
import { Sliders, CheckCircle2 } from 'lucide-react';

interface TokenBucketQuotaCardProps {
  tiers: RateLimitTierConfig[];
}

export const TokenBucketQuotaCard: React.FC<TokenBucketQuotaCardProps> = ({ tiers }) => {
  return (
    <div className="col-span-8 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <Sliders size={16} className="text-violet-400" />
          Multi-Tenant Rate Limiting Tier Enforcement ({tiers.length} Tiers)
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">
          Token Bucket Refill Algorithm: O(1) Memory
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {tiers.map((tier) => {
          const tierBadgeClass =
            tier.tierName === 'FREE'
              ? 'bg-slate-500/20 text-slate-800 dark:text-slate-300 border-slate-500/30'
              : tier.tierName === 'PRO'
                ? 'bg-sky-500/20 text-slate-900 dark:text-sky-300 border-sky-500/30'
                : tier.tierName === 'ENTERPRISE'
                  ? 'bg-violet-500/20 text-slate-900 dark:text-violet-300 border-violet-500/30'
                  : 'bg-emerald-500/20 text-slate-900 dark:text-emerald-300 border-emerald-500/30';

          return (
            <div
              key={tier.tierId}
              style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
              className="plane-1-raised rounded-2xl p-4 border flex flex-col justify-between hover:border-violet-500/50 hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`px-2.5 py-0.5 rounded-full font-mono text-xs font-bold border ${tierBadgeClass}`}>
                    {tier.tierName} TIER
                  </span>
                  <span className="font-mono text-xs text-slate-700 dark:text-slate-300">
                    {tier.activeClientsCount.toLocaleString()} Clients
                  </span>
                </div>
                <h4 className="text-xl font-bold font-ubuntu text-slate-900 dark:text-slate-100 mb-1.5">
                  {tier.tokenCapacity.toLocaleString()} Max Tokens
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-2.5">
                  <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
                    <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Refill Rate</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-emerald-400">+{tier.refillRatePerSec.toLocaleString()}/s</span>
                  </div>
                  <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
                    <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Burst Allowance</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-sky-300">{tier.burstAllowance.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between font-mono text-[11px]">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> {tier.isTierActive ? 'TIER ENFORCED' : 'OFFLINE'}
                </span>
                <span className="text-slate-700 dark:text-slate-400">
                  Priority: <strong className="text-slate-900 dark:text-slate-200">{tier.isPriorityQueueEnabled ? 'YES' : 'FIFO'}</strong>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
