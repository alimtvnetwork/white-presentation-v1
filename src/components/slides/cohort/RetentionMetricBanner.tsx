import React from 'react';
import { TrendingUp, Award, DollarSign, Clock, ShieldCheck } from 'lucide-react';

export interface RetentionMetricBannerProps {
  netRevenueRetentionPercent: number;
  grossLogoRetentionPercent: number;
  ltvToCacRatio: number;
}

export const RetentionMetricBanner: React.FC<RetentionMetricBannerProps> = ({
  netRevenueRetentionPercent,
  grossLogoRetentionPercent,
  ltvToCacRatio,
}) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col justify-between h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <span className="flex items-center gap-2 font-bold text-slate-200">
          <TrendingUp size={14} className="text-emerald-400" />
          Enterprise Expansion Metrics
        </span>
        <span className="text-slate-400">GAAP Audited</span>
      </div>

      <div className="space-y-3.5 my-auto">
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col gap-1">
          <div className="flex items-center justify-between text-emerald-400 text-[11px]">
            <span className="flex items-center gap-1 font-bold">
              <Award size={13} /> Net Revenue Retention
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-[10px] font-bold">
              TOP DECILE
            </span>
          </div>
          <span className="text-3xl font-ubuntu font-black text-emerald-300">
            {netRevenueRetentionPercent}%
          </span>
          <span className="text-[10px] text-slate-400">
            Compound account expansion & negative net churn
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-slate-400 text-[11px] flex items-center gap-1">
              <ShieldCheck size={12} className="text-cyan-400" /> Gross Logo Retention
            </span>
            <span className="text-lg font-bold text-slate-100">
              {grossLogoRetentionPercent}%
            </span>
          </div>
          <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
            +1.8% YoY
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col gap-0.5">
            <span className="text-slate-400 text-[10px] flex items-center gap-1">
              <DollarSign size={11} className="text-amber-400" /> LTV / CAC
            </span>
            <span className="text-base font-bold text-amber-300">
              {ltvToCacRatio}x
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col gap-0.5">
            <span className="text-slate-400 text-[10px] flex items-center gap-1">
              <Clock size={11} className="text-indigo-400" /> Payback
            </span>
            <span className="text-base font-bold text-indigo-300">
              7 Months
            </span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-300 italic leading-relaxed">
          &ldquo;Best-in-class enterprise decay curve with cohort stability flattening strictly above 94%.&rdquo;
        </div>
      </div>

      <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-slate-400 text-[10px]">
        <span>Stripe Billing Verified</span>
        <span className="text-emerald-400 font-bold">Audit Pass</span>
      </div>
    </div>
  );
};
