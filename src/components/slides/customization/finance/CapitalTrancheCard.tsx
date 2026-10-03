import React from 'react';
import { DollarSign, CheckCircle2, TrendingUp, Clock, ShieldCheck } from 'lucide-react';
import type { CapitalAllocationTrancheItem } from '../../../../types/customization/sovereignTelemetryTypes';

interface CapitalTrancheCardProps {
  tranche: CapitalAllocationTrancheItem;
  index: number;
  isStepActive: boolean;
}

const getCategoryBadgeClass = (category: string) => {
  switch (category) {
    case 'CAPEX': return 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-300 dark:border-sky-500/30';
    case 'R&D': return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30';
    case 'M&A': return 'bg-amber-500/10 text-amber-900 dark:text-amber-400 border-amber-300 dark:border-amber-500/30';
    default: return 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-300 dark:border-indigo-500/30';
  }
};

export const CapitalTrancheCard: React.FC<CapitalTrancheCardProps> = ({
  tranche,
  index: _index,
  isStepActive,
}) => {
  const isFunded = tranche.isTrancheFunded;
  const isApproved = tranche.hasBoardApproval;

  return (
    <div
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isStepActive ? 'var(--pres-accent)' : 'var(--pres-border)',
      }}
      className={`plane-1-raised rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 ${
        isStepActive ? 'ring-2 ring-emerald-500/40 shadow-xl' : 'opacity-85'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${getCategoryBadgeClass(tranche.allocationCategory)}`}>
            {tranche.allocationCategory}
          </span>
          <span className="font-mono text-xs flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-bold">
            <TrendingUp size={13} /> {tranche.projectedIrrPercentage}% IRR
          </span>
        </div>

        <h3 className="font-ubuntu text-lg font-bold leading-snug mb-3" style={{ color: 'var(--pres-text)' }}>
          {tranche.trancheName}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg bg-[var(--pres-surface-muted)]">
            <span className="flex items-center gap-1.5" style={{ color: 'var(--pres-text-muted)' }}>
              <DollarSign size={13} className="text-emerald-500" /> Allocated Tranche
            </span>
            <span className="font-bold text-base text-emerald-700 dark:text-emerald-400">
              ${tranche.allocatedAmountMln}M
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-[var(--pres-surface-muted)]">
            <span className="flex items-center gap-1.5" style={{ color: 'var(--pres-text-muted)' }}>
              <Clock size={13} className="text-sky-500" /> Payback Horizon
            </span>
            <span className="font-bold text-sky-700 dark:text-sky-400">
              {tranche.paybackPeriodYears} Years
            </span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between">
        <span className="font-mono text-[11px] px-2 py-0.5 rounded-full border bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1">
          <CheckCircle2 size={11} /> {isApproved ? 'Board Approved' : 'Pending Review'}
        </span>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded-full border bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/30 flex items-center gap-1">
          <ShieldCheck size={11} /> {isFunded ? 'Fully Funded' : 'Committed'}
        </span>
      </div>
    </div>
  );
};
