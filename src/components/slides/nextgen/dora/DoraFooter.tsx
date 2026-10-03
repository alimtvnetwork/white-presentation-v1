import React from 'react';
import { Rocket, DollarSign, Sparkles, Award, Activity } from 'lucide-react';

interface DoraFooterProps {
  shippedFeatures: number;
  revenueImpactMillionUsd: number;
  csatScore: number;
  isPredictable: boolean;
  csl?: string;
}

export const DoraFooter: React.FC<DoraFooterProps> = ({
  shippedFeatures,
  revenueImpactMillionUsd,
  csatScore,
  isPredictable,
  csl = 'Alim Ul Karim',
}) => {
  return (
    <div className="z-10 plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm">
      <div className="flex items-center gap-7">
        <div className="flex items-center gap-2">
          <Rocket size={16} className="text-emerald-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Quarterly Features:</span>
          <span className="font-bold text-slate-900 dark:text-emerald-300">{shippedFeatures} Shipped</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <DollarSign size={16} className="text-sky-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Attributed Value:</span>
          <span className="font-bold text-slate-900 dark:text-sky-300">+${revenueImpactMillionUsd}M ARR</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-amber-900 dark:text-amber-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Developer CSAT:</span>
          <span className="font-bold text-slate-900 dark:text-amber-300">{csatScore} / 5.0</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Award size={16} className="text-capsule-gold" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Signoff:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">
            {csl} (Chief Software Engineer)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
          <Activity size={14} className="text-emerald-400 animate-pulse" />
          {isPredictable ? 'Delivery Cadence 100% Predictable' : 'Stabilizing'}
        </span>
      </div>
    </div>
  );
};
