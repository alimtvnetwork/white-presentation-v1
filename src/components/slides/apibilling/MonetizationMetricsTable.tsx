import React from 'react';
import type { BillingMetricSummaryItem } from '../../../types/sovereignOperationsArchetypes';
import { DollarSign, CheckCircle2, TrendingUp } from 'lucide-react';

interface MonetizationMetricsTableProps {
  metricSummaries: BillingMetricSummaryItem[];
}

export const MonetizationMetricsTable: React.FC<MonetizationMetricsTableProps> = ({
  metricSummaries,
}) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="p-3.5 rounded-xl border flex items-center justify-between z-10 text-xs font-mono shadow-sm"
    >
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <TrendingUp size={14} /> Unit Economics Targets:
        </span>
        <div className="flex items-center gap-3 text-slate-300">
          {metricSummaries.map((m) => (
            <span
              key={m.id}
              className="bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800 text-[11px] flex items-center gap-2"
            >
              <span className="text-slate-400">{m.metricLabel}:</span>
              <span className="text-emerald-400 font-bold">{m.metricValue}</span>
              {m.isTargetAchieved && (
                <span className="text-emerald-400 flex items-center gap-0.5">
                  <CheckCircle2 size={11} /> Target Met
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
        <DollarSign size={13} /> 100% Automated Stripe/Orb Reconciliation
      </div>
    </div>
  );
};
