import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { RateLimitTierConfig } from '../../../../types/nextGenArchetypes';

interface GatewayTierCardProps {
  tier: RateLimitTierConfig;
}

export const GatewayTierCard: React.FC<GatewayTierCardProps> = ({ tier }) => {
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
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="plane-1-raised rounded-2xl p-4 border flex flex-col justify-between hover:border-violet-500/50 hover:shadow-lg transition-all"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className={`px-2.5 py-0.5 rounded-full font-mono text-xs font-bold border ${tierBadgeClass}`}>
            {tier.tierName} TIER
          </span>
          <span className="font-mono text-xs text-slate-700 dark:text-slate-300">
            {tier.activeClientsCount.toLocaleString()} Active Clients
          </span>
        </div>

        <h4 className="text-lg font-bold font-ubuntu text-slate-900 dark:text-slate-100 mb-2">
          {tier.tokenCapacity.toLocaleString()} Max Tokens
        </h4>

        <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-2">
          <div className="p-2.5 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
              Refill Rate
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-emerald-400">
              +{tier.refillRatePerSec.toLocaleString()}/sec
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
              Burst Allowance
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-sky-300">
              {tier.burstAllowance.toLocaleString()} Bursts
            </span>
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
};
