import React from 'react';
import { Award, DollarSign, TrendingUp, Zap, Target } from 'lucide-react';
import type { SalesQuotaRepItem } from '../../../../types/customization/sovereignTelemetryTypes';

interface SalesQuotaRepCardProps {
  rep: SalesQuotaRepItem;
  index: number;
  isStepActive: boolean;
}

export const SalesQuotaRepCard: React.FC<SalesQuotaRepCardProps> = ({
  rep,
  index: _index,
  isStepActive,
}) => {
  const isClub = rep.isPresidentClubQualified;
  const hasAccelerator = rep.hasOverageAccelerator;

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
          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
            {rep.salesRegion}
          </span>
          <span className="font-mono text-xs flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-400">
            <TrendingUp size={13} /> {rep.attainmentPercentage}%
          </span>
        </div>

        <h3 className="font-ubuntu text-lg font-bold leading-snug mb-3" style={{ color: 'var(--pres-text)' }}>
          {rep.repName}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg bg-[var(--pres-surface-muted)]">
            <span className="flex items-center gap-1.5" style={{ color: 'var(--pres-text-muted)' }}>
              <DollarSign size={13} className="text-emerald-500" /> Closed Won
            </span>
            <span className="font-bold text-base text-emerald-700 dark:text-emerald-400">
              ${rep.closedWonMln}M / ${rep.annualQuotaMln}M
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-[var(--pres-surface-muted)]">
            <span className="flex items-center gap-1.5" style={{ color: 'var(--pres-text-muted)' }}>
              <Target size={13} className="text-sky-500" /> Pipeline Coverage
            </span>
            <span className="font-bold text-sky-700 dark:text-sky-400">
              {rep.pipelineCoverageRatio}x Quota
            </span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between">
        <span
          className={`font-mono text-[11px] px-2 py-0.5 rounded-full border flex items-center gap-1 ${
            isClub
              ? 'bg-amber-500/10 text-amber-900 dark:text-amber-400 border-amber-300 dark:border-amber-500/30 font-bold'
              : 'bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-500/30'
          }`}
        >
          <Award size={11} /> {isClub ? "President's Club" : 'Pacing On Track'}
        </span>
        <span
          className={`font-mono text-[11px] px-2 py-0.5 rounded-full border flex items-center gap-1 ${
            hasAccelerator
              ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30 font-bold'
              : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/30'
          }`}
        >
          <Zap size={11} /> {hasAccelerator ? '2.5x Accelerator' : 'Standard Rate'}
        </span>
      </div>
    </div>
  );
};
