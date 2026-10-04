// lint-allow: file-size reason="SaasExpansionRetentionWaterfallGaugeSlide flat sovereign SaaS ARR waterfall and NRR gauge" max=420
import React from 'react';
import type {
  SaasExpansionRetentionWaterfallGaugeSlideData,
  ArrWaterfallBucketNode,
} from '../../../types/suite2028Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  TrendingUp,
  Award,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  Zap,
  Gauge,
  Layers,
  DollarSign,
} from 'lucide-react';

const DEF_BUCKETS: ArrWaterfallBucketNode[] = [
  {
    id: 'arr-beg',
    bucketType: 'Beginning ARR',
    amountMillionsUsd: 110.5,
    deltaPercentage: 0.0,
    isPositiveContribution: true,
    hasMetTargetPacing: true,
  },
  {
    id: 'arr-exp',
    bucketType: 'Expansion',
    amountMillionsUsd: 32.4,
    deltaPercentage: 29.3,
    isPositiveContribution: true,
    hasMetTargetPacing: true,
  },
  {
    id: 'arr-cross',
    bucketType: 'Cross-Sell',
    amountMillionsUsd: 12.8,
    deltaPercentage: 11.6,
    isPositiveContribution: true,
    hasMetTargetPacing: true,
  },
  {
    id: 'arr-con',
    bucketType: 'Contraction',
    amountMillionsUsd: -3.2,
    deltaPercentage: -2.9,
    isPositiveContribution: false,
    hasMetTargetPacing: true,
  },
  {
    id: 'arr-churn',
    bucketType: 'Churn',
    amountMillionsUsd: -4.3,
    deltaPercentage: -3.9,
    isPositiveContribution: false,
    hasMetTargetPacing: true,
  },
  {
    id: 'arr-end',
    bucketType: 'Ending ARR',
    amountMillionsUsd: 148.2,
    deltaPercentage: 34.1,
    isPositiveContribution: true,
    hasMetTargetPacing: true,
  },
];

export const SaasExpansionRetentionWaterfallGaugeSlide: React.FC<{
  slide?: SaasExpansionRetentionWaterfallGaugeSlideData;
  data?: SaasExpansionRetentionWaterfallGaugeSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const buckets = data?.buckets?.length ? data.buckets : DEF_BUCKETS;
  const nrr = data?.netRevenueRetentionPercentage ?? 128.4;
  const grr = data?.grossRevenueRetentionPercentage ?? 96.8;

  const hasExpansionMomentum = data?.hasHighExpansionMomentum ?? true;
  const hasLowChurn = data?.hasLowChurnRisk ?? true;
  const hasAuditedFinancials = data?.hasAuditedFinancialMetrics ?? true;

  const endingArr = buckets.find((b) => b.bucketType === 'Ending ARR')?.amountMillionsUsd ?? 148.2;
  const beginningArr = buckets.find((b) => b.bucketType === 'Beginning ARR')?.amountMillionsUsd ?? 110.5;
  const netGrowthPercent = Math.round(((endingArr - beginningArr) / beginningArr) * 100);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Gauge size={16} className="text-emerald-500" />
              {data?.kicker || 'SAAS UNIT ECONOMICS & BOARDROOM REPORTING'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Calendar size={14} /> Period: {data?.fiscalPeriod || 'FY2026 Full Year Results'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Award size={14} className="text-cyan-500" />
              NRR: {nrr.toFixed(1)}% (Top Decile)
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'SaaS Expansion Retention Waterfall Gauge'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'ARR bridge decomposition, 128% Net Revenue Retention gauge, GRR cohort stability, and unit economics.'}
          </p>
        </div>

        {/* Executive Metric Badge Strip */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Ending ARR</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              ${endingArr.toFixed(1)}M USD
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Net Retention</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {nrr.toFixed(1)}% NRR
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Topline KPI Strip (4 Cards) */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Net Retention Rate</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">{nrr.toFixed(1)}% NRR</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Gauge size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Gross Retention Rate</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[22px]">{grr.toFixed(1)}% GRR</span>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Award size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">ARR Net Expansion</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[22px]">+{netGrowthPercent}% YoY</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <TrendingUp size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Rule of 40 Index</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">58% Momentum</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Zap size={24} />
          </div>
        </div>
      </div>

      {/* Main ARR Waterfall Bridges & Cohort Bento Grid */}
      <div className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl z-10 my-auto h-[540px]">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Layers size={16} className="text-[var(--pres-accent)]" /> ARR Bridge Waterfall & Cohort Retention Flow
            </span>
            <div className="flex items-center gap-3 font-mono text-[14px]">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                Expansion Momentum: {hasExpansionMomentum ? 'High (Top Decile)' : 'Normal'}
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Churn Risk: {hasLowChurn ? 'Low (< 4%)' : 'Monitored'}
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-500/20">
                Financials: {hasAuditedFinancials ? 'Audited' : 'Pro-Forma'}
              </span>
            </div>
          </div>

          {/* Waterfall Steps Horizontal Bento */}
          <div className="grid grid-cols-6 gap-4 mt-6">
            {buckets.map((bucket, bIdx) => {
              const isEnding = bucket.bucketType === 'Ending ARR';
              const isBeginning = bucket.bucketType === 'Beginning ARR';
              const isContractionOrChurn = bucket.amountMillionsUsd < 0;

              return (
                <div
                  key={bucket.id}
                  className={`p-5 rounded-2xl border flex flex-col justify-between hover:-translate-y-0.5 transition-all duration-300 ${
                    isEnding
                      ? 'border-emerald-500 bg-emerald-500/15 ring-2 ring-emerald-500 shadow-lg'
                      : isBeginning
                      ? 'border-cyan-500/50 bg-cyan-500/10 shadow-md'
                      : isContractionOrChurn
                      ? 'border-rose-500/40 bg-rose-500/10 shadow-md'
                      : 'border-emerald-500/40 bg-emerald-500/10 shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[14px] pb-2 border-b border-[var(--pres-border)]">
                      <span className="font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        {bucket.bucketType}
                      </span>
                      <span className="text-slate-400">Step {bIdx + 1}</span>
                    </div>

                    <div className="mt-4 font-mono">
                      <div className="text-[34px] font-black tracking-tight leading-none text-slate-900 dark:text-white">
                        {bucket.amountMillionsUsd > 0 && !isBeginning && !isEnding ? '+' : ''}
                        ${Math.abs(bucket.amountMillionsUsd).toFixed(1)}M
                      </div>
                      <div className="flex items-center gap-1.5 mt-2 text-[14px] font-bold">
                        {bucket.deltaPercentage > 0 ? (
                          <span className="text-emerald-600 dark:text-emerald-400 flex items-center">
                            <ArrowUpRight size={16} /> +{bucket.deltaPercentage.toFixed(1)}%
                          </span>
                        ) : bucket.deltaPercentage < 0 ? (
                          <span className="text-rose-600 dark:text-rose-400 flex items-center">
                            <ArrowDownRight size={16} /> {bucket.deltaPercentage.toFixed(1)}%
                          </span>
                        ) : (
                          <span className="text-slate-500">Base Anchor</span>
                        )}
                      </div>
                    </div>

                    {/* Step Visual Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            isEnding
                              ? 'bg-emerald-500'
                              : isBeginning
                              ? 'bg-cyan-500'
                              : isContractionOrChurn
                              ? 'bg-rose-500'
                              : 'bg-emerald-500'
                          }`}
                          style={{ width: `${Math.min(100, (Math.abs(bucket.amountMillionsUsd) / endingArr) * 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--pres-border)] font-mono text-[14px] flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Pacing</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 size={14} /> On Target
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Waterfall Card Footer Summary */}
        <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <Zap size={16} className="text-emerald-600 dark:text-emerald-400" />
            Unit Economics: LTV/CAC: 6.8x | CAC Payback: 11 Months | Gross Margin: 82.4%
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">
            Rule of 40: 58% (Top Decile SaaS Benchmark)
          </span>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Financial Health:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <ShieldCheck size={18} /> Top Decile ARR Expansion Momentum | Sustainable Free Cash Flow Positive
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <DollarSign size={16} /> Suite 2028 SaaS Analytics
          </span>
        </div>
      </div>
    </div>
  );
};
