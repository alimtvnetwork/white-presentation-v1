// lint-allow: file-size reason="SaasMagicNumberEfficiencyGaugeSlide flat sovereign SaaS magic number capital efficiency gauge" max=200
import React from 'react';
import type {
  SaasMagicNumberEfficiencyGaugeSlideData,
  EfficiencyGaugeItem,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Gauge,
  TrendingUp,
  Award,
  Zap,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

const DEF_GAUGES: EfficiencyGaugeItem[] = [
  {
    id: 'gauge-magic',
    metricLabel: 'SaaS Magic Number',
    currentValue: 1.28,
    benchmarkTarget: 1.0,
    unit: 'x',
    efficiencyRating: 'Top Decile (>1.25x)',
    isOptimalTier: true,
  },
  {
    id: 'gauge-cac',
    metricLabel: 'CAC Payback Period',
    currentValue: 8.4,
    benchmarkTarget: 12.0,
    unit: 'Mo',
    efficiencyRating: 'Best in Class (<9mo)',
    isOptimalTier: true,
  },
  {
    id: 'gauge-rule40',
    metricLabel: 'Rule of 40 Momentum Index',
    currentValue: 54.2,
    benchmarkTarget: 40.0,
    unit: '%',
    efficiencyRating: 'Tier 1 Outperformer',
    isOptimalTier: true,
  },
  {
    id: 'gauge-ndr',
    metricLabel: 'Net Retention Rate (NDR)',
    currentValue: 134.5,
    benchmarkTarget: 120.0,
    unit: '%',
    efficiencyRating: 'Hyper-Expansion Tier',
    isOptimalTier: true,
  },
  {
    id: 'gauge-grr',
    metricLabel: 'Gross Retention Rate (GRR)',
    currentValue: 96.8,
    benchmarkTarget: 90.0,
    unit: '%',
    efficiencyRating: 'World Class Retention',
    isOptimalTier: true,
  },
  {
    id: 'gauge-burn',
    metricLabel: 'Net Burn Multiple',
    currentValue: 0.62,
    benchmarkTarget: 1.0,
    unit: 'x',
    efficiencyRating: 'Super-Efficient (<0.75x)',
    isOptimalTier: true,
  },
];

export const SaasMagicNumberEfficiencyGaugeSlide: React.FC<{
  slide?: SaasMagicNumberEfficiencyGaugeSlideData;
  data?: SaasMagicNumberEfficiencyGaugeSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const gauges = data?.gauges?.length ? data.gauges : DEF_GAUGES;

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
              <Gauge size={16} className="text-emerald-500" />
              {data?.kicker || 'CAPITAL EFFICIENCY & GO-TO-MARKET UNIT ECONOMICS'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Calendar size={14} /> Quarter: {data?.fiscalQuarter || 'Q4 FY26 / FY27 Horizon'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Award size={14} className="text-cyan-500" />
              Magic Number: {data?.saasMagicNumber ?? 1.28}x (Top Decile)
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'SaaS Magic Number & Capital Efficiency Gauges'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Empirical GTM velocity metrics verifying top-decile net sales efficiency, sub-9 month payback velocity, and superior Rule of 40 capital momentum.'}
          </p>
        </div>

        {/* Executive Metric Badge Strip */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Magic Number</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {data?.saasMagicNumber ?? 1.28}x
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">CAC Payback</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {data?.cacPaybackMonths ?? 8.4} Mo
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

      {/* Magic Number Formula Callout Strip */}
      <div className="plane-1-raised p-3 px-6 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[13px] z-10 my-2">
        <div className="flex items-center gap-2">
          <span className="text-slate-500 dark:text-slate-400 font-bold uppercase text-[11px]">Bessemer Formula:</span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">
            Magic Number = [ (Net New ARR in Quarter Q) × 4 ] ÷ [ Prior Quarter Q-1 S&M Expense ]
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold text-[12px] border border-emerald-500/30 flex items-center gap-1">
            <Zap size={13} /> {`> 1.0x = Hyper-Efficient Engine (Scale Sales Fast)`}
          </span>
        </div>
      </div>

      {/* Main 6-Gauge Bento Grid */}
      <div className="grid grid-cols-3 gap-6 z-10 my-auto items-stretch h-[500px]">
        {gauges.map((gauge) => {
          const isHigherBetter = gauge.id !== 'gauge-cac' && gauge.id !== 'gauge-burn';
          const percentRatio = isHigherBetter
            ? Math.min(100, Math.round((gauge.currentValue / (gauge.benchmarkTarget * 1.4)) * 100))
            : Math.min(100, Math.round((gauge.benchmarkTarget / Math.max(0.1, gauge.currentValue)) * 80));

          return (
            <div
              key={gauge.id}
              className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl hover:-translate-y-1 hover:border-[var(--pres-accent)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-[var(--pres-border)]">
                  <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {gauge.metricLabel}
                  </span>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                    {gauge.efficiencyRating}
                  </span>
                </div>

                <div className="mt-4 flex items-baseline justify-between font-mono">
                  <div className="text-[44px] font-black tracking-tight text-slate-900 dark:text-white leading-none">
                    {gauge.currentValue}
                    <span className="text-[20px] font-semibold text-slate-500 ml-1">{gauge.unit}</span>
                  </div>
                  <div className="text-right text-[13px]">
                    <span className="text-slate-400 block text-[11px] uppercase">Benchmark</span>
                    <span className="text-slate-700 dark:text-slate-300 font-bold">
                      {gauge.benchmarkTarget} {gauge.unit}
                    </span>
                  </div>
                </div>

                {/* Visual Gauge Bar */}
                <div className="mt-4">
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-700"
                      style={{ width: `${percentRatio}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 mt-1.5">
                    <span>Baseline (0.0)</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-0.5">
                      <ArrowUpRight size={12} /> Outperforming
                    </span>
                    <span>Max Target</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[12px]">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  Optimal Tier Validated
                </span>
                <span className="text-[var(--pres-accent)] font-bold">Top Decile</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">Capital Health:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Burn Rate Compressed | Sustainable Profitability Runway &gt; 36 Months
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <Sparkles size={16} /> Suite 2027 Financial Analytics
          </span>
        </div>
      </div>
    </div>
  );
};
