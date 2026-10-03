import React from 'react';
import { DollarSign, ShieldCheck } from 'lucide-react';
import type { CostOptimizationSummary } from '../../../../types/nextGenArchetypes';

interface PricingHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  summary?: CostOptimizationSummary;
}

export const PricingHeader: React.FC<PricingHeaderProps> = ({
  kicker,
  title,
  subtitle,
  summary,
}) => (
  <div className="z-10 flex items-start justify-between gap-8 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          <DollarSign size={13} className="text-violet-500" />
          {kicker || 'COMMERCIAL BENCHMARKS'}
        </span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
      >
        {title || 'Regional Infrastructure & Commercial Pricing'}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed">
        {subtitle || 'Predictable, multi-region compute and egress unit economics with volume discounting'}
      </p>
    </div>

    {summary ? (
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-violet-500/20 bg-violet-950/20 font-mono text-right">
        <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase block font-bold">
          Annualized Optimization
        </span>
        <span className="text-2xl font-bold text-slate-900 dark:text-emerald-400 block">
          {summary.annualCostReductionUsd}
        </span>
        <div className="flex items-center gap-1.5 justify-end text-xs text-emerald-600 dark:text-emerald-400 mt-1">
          <ShieldCheck size={13} />
          <span>{summary.estimatedSavingsPercentage}% Cost Reduction</span>
        </div>
      </div>
    ) : null}
  </div>
);
