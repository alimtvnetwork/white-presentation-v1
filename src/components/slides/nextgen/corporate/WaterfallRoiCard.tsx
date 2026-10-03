import React from 'react';
import { TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import type { NetRoiSummary } from '../../../../types/nextGenArchetypes';

interface WaterfallRoiCardProps {
  summary: NetRoiSummary;
  isDark?: boolean;
}

export const WaterfallRoiCard: React.FC<WaterfallRoiCardProps> = ({ summary, isDark }) => (
  <div className="z-10 plane-1-raised p-4 px-8 rounded-2xl border border-slate-700/60 bg-slate-900/40 flex items-center justify-between">
    <div className="flex items-center gap-8 font-mono">
      <div>
        <span className="text-[10px] text-slate-500 uppercase block">Annualized Savings</span>
        <span className={`text-2xl font-bold ${isDark ? 'text-violet-300' : 'text-violet-800'}`}>
          {summary.annualizedSavingsUsd}
        </span>
      </div>

      <div className="w-[1px] h-8 bg-slate-700/50" />

      <div>
        <span className="text-[10px] text-slate-500 uppercase block">ROI Multiplier</span>
        <span className="text-2xl font-bold text-emerald-400 flex items-center gap-1">
          <TrendingUp size={16} />
          {summary.roiMultiplier}x
        </span>
      </div>

      <div className="w-[1px] h-8 bg-slate-700/50" />

      <div>
        <span className="text-[10px] text-slate-500 uppercase block">Payback Period</span>
        <span className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-1">
          <Zap size={16} className="text-violet-400" />
          {summary.paybackMonths} Months
        </span>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="text-right font-mono text-xs">
        <span className="text-slate-500 block text-[10px]">Confidence Level</span>
        <span className="text-slate-300 font-bold">{summary.confidenceIntervalPercent}% CI</span>
      </div>
      {summary.isInvestmentApproved ? (
        <span className="font-mono text-xs px-3.5 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
          <ShieldCheck size={14} className="text-emerald-500" />
          Investment Approved
        </span>
      ) : null}
    </div>
  </div>
);
