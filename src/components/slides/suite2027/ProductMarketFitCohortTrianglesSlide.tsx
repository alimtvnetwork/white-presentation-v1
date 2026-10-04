// lint-allow: file-size reason="ProductMarketFitCohortTrianglesSlide flat sovereign PMF cohort retention triangles" max=200
import React from 'react';
import type {
  ProductMarketFitCohortTrianglesSlideData,
  RetentionCohortRow,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  TrendingUp,
  Sparkles,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Flame,
  Award,
} from 'lucide-react';

const DEF_COHORTS: RetentionCohortRow[] = [
  {
    id: 'cohort-q1-26',
    cohortLabel: 'Q1 2026 Cohort',
    userCount: 12400,
    month0RetentionPercent: 100,
    month1RetentionPercent: 82.4,
    month3RetentionPercent: 71.5,
    month6RetentionPercent: 67.2,
    month12RetentionPercent: 64.8,
    isAsymptoteFlattened: true,
  },
  {
    id: 'cohort-q2-26',
    cohortLabel: 'Q2 2026 Cohort',
    userCount: 16800,
    month0RetentionPercent: 100,
    month1RetentionPercent: 84.1,
    month3RetentionPercent: 73.8,
    month6RetentionPercent: 69.4,
    month12RetentionPercent: 66.2,
    isAsymptoteFlattened: true,
  },
  {
    id: 'cohort-q3-26',
    cohortLabel: 'Q3 2026 Cohort',
    userCount: 21500,
    month0RetentionPercent: 100,
    month1RetentionPercent: 86.5,
    month3RetentionPercent: 76.2,
    month6RetentionPercent: 72.1,
    month12RetentionPercent: 0,
    isAsymptoteFlattened: true,
  },
  {
    id: 'cohort-q4-26',
    cohortLabel: 'Q4 2026 Cohort',
    userCount: 28200,
    month0RetentionPercent: 100,
    month1RetentionPercent: 88.0,
    month3RetentionPercent: 78.4,
    month6RetentionPercent: 0,
    month12RetentionPercent: 0,
    isAsymptoteFlattened: true,
  },
  {
    id: 'cohort-q1-27',
    cohortLabel: 'Q1 2027 Cohort',
    userCount: 36500,
    month0RetentionPercent: 100,
    month1RetentionPercent: 89.2,
    month3RetentionPercent: 0,
    month6RetentionPercent: 0,
    month12RetentionPercent: 0,
    isAsymptoteFlattened: true,
  },
];

const MONTH_COLS = [
  { key: 'month0RetentionPercent', label: 'M0 (Ingress)' },
  { key: 'month1RetentionPercent', label: 'M1 (Onboard)' },
  { key: 'month3RetentionPercent', label: 'M3 (Habit)' },
  { key: 'month6RetentionPercent', label: 'M6 (Expansion)' },
  { key: 'month12RetentionPercent', label: 'M12 (Asymptote)' },
] as const;

export const ProductMarketFitCohortTrianglesSlide: React.FC<{
  slide?: ProductMarketFitCohortTrianglesSlideData;
  data?: ProductMarketFitCohortTrianglesSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const cohorts = data?.cohortRows?.length ? data.cohortRows : DEF_COHORTS;

  const renderRetentionCell = (value: number) => {
    if (value === 0) {
      return (
        <div className="flex items-center justify-center p-2.5 rounded-lg border border-dashed border-slate-300 dark:border-slate-800 text-slate-400 text-[12px] font-mono">
          —
        </div>
      );
    }

    let colorStyle = 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-700';
    if (value >= 80) {
      colorStyle = 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/40 font-bold';
    } else if (value >= 70) {
      colorStyle = 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-500/40 font-bold';
    } else if (value >= 60) {
      colorStyle = 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-500/40 font-bold';
    } else if (value >= 50) {
      colorStyle = 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/40 font-bold';
    }

    return (
      <div
        className={`flex items-center justify-center p-2.5 rounded-lg border font-mono text-[13px] ${colorStyle} shadow-sm transition-all duration-200 hover:scale-105`}
      >
        {value.toFixed(1)}%
      </div>
    );
  };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <TrendingUp size={16} className="text-emerald-500" />
              {data?.kicker || 'PRODUCT-MARKET FIT COHORT TRIANGLES & ASYMPTOTE RETENTION'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Sparkles size={14} /> Product: {data?.productName || 'Autonomous Presentation Studio'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Award size={14} className="text-cyan-500" />
              Asymptote: {data?.asymptoticRetentionRate ?? 64.8}% (Flattened)
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Product-Market Fit Cohort Triangles & Retention Smile'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Empirical cohort retention heatmap demonstrating definitive asymptotic curve flattening at ~65% and high Quick Ratio growth efficiency.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Quick Ratio</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {data?.quickRatio ?? 4.15}x
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">PMF Status</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {data?.isProductMarketFitAchieved ?? true ? 'ACHIEVED (TIER 1)' : 'SEARCHING'}
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Plane 1 Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Cohort Heatmap Triangles Table */}
        <div className="col-span-8 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Users size={16} className="text-[var(--pres-accent)]" /> Longitudinal Cohort Retention Triangles
              </span>
              <span className="font-mono text-[12px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                100% Non-Leaky Bucket
              </span>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-3 pt-4 pb-2 border-b border-slate-200 dark:border-slate-800 font-mono text-[13px] font-bold text-slate-500 dark:text-slate-400 uppercase items-center">
              <div className="col-span-3">Cohort</div>
              <div className="col-span-2 text-right">Users</div>
              {MONTH_COLS.map((col) => (
                <div key={col.key} className="col-span-1 text-center text-[11px] leading-tight">
                  {col.label.split(' ')[0]}
                </div>
              ))}
              <div className="col-span-2 text-center text-[11px]">Asymptote</div>
            </div>

            {/* Cohort Rows */}
            <div className="space-y-2 mt-2 font-mono text-[13px]">
              {cohorts.map((cohort) => (
                <div
                  key={cohort.id}
                  className="grid grid-cols-12 gap-3 items-center p-2.5 rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:border-[var(--pres-accent)] hover:bg-slate-200/50 dark:hover:bg-slate-800/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="col-span-3 font-bold text-slate-800 dark:text-slate-200">
                    {cohort.cohortLabel}
                  </div>
                  <div className="col-span-2 text-right text-slate-500 dark:text-slate-400 font-semibold">
                    {cohort.userCount.toLocaleString()}
                  </div>

                  <div className="col-span-1">{renderRetentionCell(cohort.month0RetentionPercent)}</div>
                  <div className="col-span-1">{renderRetentionCell(cohort.month1RetentionPercent)}</div>
                  <div className="col-span-1">{renderRetentionCell(cohort.month3RetentionPercent)}</div>
                  <div className="col-span-1">{renderRetentionCell(cohort.month6RetentionPercent)}</div>
                  <div className="col-span-1">{renderRetentionCell(cohort.month12RetentionPercent)}</div>

                  <div className="col-span-2 flex justify-center">
                    {cohort.isAsymptoteFlattened ? (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 size={11} /> Flattened
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-400">Maturing</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[12px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Flame size={14} className="text-amber-500" />
              Bessemer PMF Standard: Stable horizontal asymptote achieved by Month 3
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Net Negative Churn Confirmed
            </span>
          </div>
        </div>

        {/* Right Bento: PMF Asymptote & Quick Ratio Diagnostics */}
        <div className="col-span-4 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Sparkles size={16} className="text-emerald-500" /> PMF Empirical Proof
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[12px] border border-emerald-500/30">
                Top Decile PMF
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <h3 className="text-[18px] font-ubuntu font-bold text-slate-900 dark:text-white mb-1">
                The Asymptotic Retention Smile
              </h3>
              <p className="font-poppins text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Classic PMF curve: initial drop stabilizes at Month 3 and curls slightly upward due to organic workspace seat expansion.
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-[13px]">
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[11px] block uppercase">Asymptote Rate</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
                    {data?.asymptoticRetentionRate ?? 64.8}%
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[11px] block uppercase">Quick Ratio</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
                    {data?.quickRatio ?? 4.15}x
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[13px]">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Curve Flattened at Month 3+</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasFlattenedRetentionCurve ?? true ? 'Verified (64.8%)' : 'Declining'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Product-Market Fit Milestone</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.isProductMarketFitAchieved ?? true ? 'Confirmed Tier 1' : 'Pending'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Net Negative Churn Velocity</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <ArrowUpRight size={14} /> {data?.hasNetNegativeChurn ?? true ? 'Expansion Outpaces Churn' : 'Flat'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[12px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Quick Ratio 4.15x indicates $4.15 in new & expansion ARR for every $1 lost to churn.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">Venture Benchmark:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Sequoia / Benchmark Tier 1 PMF Benchmark Exceeded
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2027 Growth Analytics
          </span>
        </div>
      </div>
    </div>
  );
};
