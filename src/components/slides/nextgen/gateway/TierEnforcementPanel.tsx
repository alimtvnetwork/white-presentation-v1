import React from 'react';
import { Sliders } from 'lucide-react';
import type { RateLimitTierConfig } from '../../../../types/nextGenArchetypes';
import { GatewayTierCard } from './GatewayTierCard';

interface TierEnforcementPanelProps {
  tiers: RateLimitTierConfig[];
}

export const TierEnforcementPanel: React.FC<TierEnforcementPanelProps> = ({ tiers }) => (
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
      {tiers.map((tier) => (
        <GatewayTierCard key={tier.tierId} tier={tier} />
      ))}
    </div>
  </div>
);
