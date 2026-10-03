import React from 'react';
import type { StrategyPortfolioSummary } from '../../../types/nextGenArchetypes';

interface HorizonPortfolioSummaryStripProps {
  portfolioSummary: StrategyPortfolioSummary;
}

export const HorizonPortfolioSummaryStrip: React.FC<HorizonPortfolioSummaryStripProps> = ({
  portfolioSummary,
}) => {
  return (
    <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono">
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Total CapEx
        </span>
        <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">
          ${portfolioSummary.totalCapExMillionUsd}M
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          ROI Multiplier
        </span>
        <span className="text-xl font-bold text-slate-900 dark:text-sky-400">
          {portfolioSummary.projectedRoiMultiplier}x
        </span>
      </div>
      <div className="w-[1px] h-8 bg-slate-700/50" />
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
          Blended Growth
        </span>
        <span className="text-xl font-bold text-slate-900 dark:text-violet-400">
          +{portfolioSummary.blendedGrowthRatePercent}%
        </span>
      </div>
    </div>
  );
};
