import React from 'react';
import { Leaf, Zap } from 'lucide-react';
import type { EfficiencyMetrics } from '../../../../types/nextgen/deepTechGovernanceTypes';

interface EsgHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  metrics: EfficiencyMetrics;
  targetYear: number;
}

export const EsgHeader: React.FC<EsgHeaderProps> = ({
  kicker,
  title,
  subtitle,
  metrics,
  targetYear,
}) => (
  <header className="flex items-start justify-between gap-6 mb-6">
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
          <Leaf size={14} className="text-emerald-700 dark:text-emerald-400" />
          {kicker || 'ESG SUSTAINABILITY'}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          NET-ZERO COMMITMENT: {targetYear}
        </span>
      </div>
      <h1 className="text-4xl font-ubuntu font-bold tracking-tight text-slate-900 dark:text-slate-50">
        {title}
      </h1>
      {subtitle && (
        <p style={{ color: 'var(--pres-text-muted)' }} className="text-base font-normal mt-1 max-w-4xl">
          {subtitle}
        </p>
      )}
    </div>

    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="plane-1-raised rounded-2xl p-3 border flex items-center gap-4 min-w-[320px]"
    >
      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-700 dark:text-emerald-300">
        <Zap size={20} />
      </div>
      <div className="flex items-center gap-4 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase block">
            Datacenter PUE
          </span>
          <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {metrics.datacenterPue.toFixed(2)}
          </span>
        </div>
        <div className="w-px h-8 bg-black/10 dark:bg-white/10" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase block">
            Clean Energy
          </span>
          <span className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
            {metrics.renewableEnergyPercentage}%
          </span>
        </div>
      </div>
    </div>
  </header>
);
