import React from 'react';
import type { CraftsmanshipTierItem } from '../../../types/extendedArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { CheckCircle2, ShieldCheck, XCircle } from 'lucide-react';

interface BenchmarkMetricCardProps {
  tier: CraftsmanshipTierItem;
  isActive: boolean;
  isPast: boolean;
  isFuture: boolean;
}

export const BenchmarkMetricCard: React.FC<BenchmarkMetricCardProps> = ({
  tier,
  isActive,
  isPast,
  isFuture,
}) => {
  const isExceeded = isBooleanTrue(tier.isBenchmarkExceeded);

  return (
    <div
      style={{
        backgroundColor: isActive ? 'var(--pres-card-bg, rgba(255, 255, 255, 0.08))' : 'var(--pres-card-bg, rgba(255, 255, 255, 0.04))',
        borderColor: isActive ? '#D97706' : 'var(--pres-card-border, rgba(255, 255, 255, 0.1))',
        opacity: isFuture ? 0.4 : isPast ? 0.75 : 1,
        filter: isFuture ? 'blur(1.25px)' : 'none',
        boxShadow: isActive ? '0 0 24px -2px rgba(217, 119, 6, 0.5)' : 'none',
        transform: isActive ? 'scale(1.02)' : 'none',
      }}
      className="p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-ubuntu font-bold text-base text-slate-100 flex items-center gap-2">
            <ShieldCheck size={16} className="text-amber-600 dark:text-amber-400" />
            {tier.dimensionName}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30">
            {tier.metricComparison}
          </span>
        </div>

        <div className="space-y-2">
          <div className="p-2.5 rounded-xl bg-rose-500/5 border border-rose-500/10 flex items-start gap-2 text-xs">
            <XCircle size={14} className="text-rose-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-[10px] text-rose-400/80 uppercase mr-1">Commodity:</span>
              <span className="text-slate-300 font-poppins">{tier.commodityStandard}</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-2 text-xs">
            {isExceeded ? (
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <ShieldCheck size={14} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            )}
            <div>
              <span className="font-mono text-[10px] text-emerald-400/80 uppercase mr-1">Sovereign:</span>
              <span className="text-slate-100 font-poppins font-medium">{tier.sovereignCraftsmanship}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
