// lint-allow: file-size reason="EnterpriseSaasEfficiencyRuleOf40QuadrantSlide flat sovereign SaaS Rule of 40 quadrant" max=420
import React from 'react';
import type {
  EnterpriseSaasEfficiencyRuleOf40QuadrantSlideData,
  SaasBusinessUnitNode,
} from '../../../types/suite2030Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  TrendingUp,
  DollarSign,
  Award,
  CheckCircle2,
  PieChart,
  BarChart,
  Sparkles,
  Zap,
  Building2,
} from 'lucide-react';

const DEF_UNITS: SaasBusinessUnitNode[] = [
  {
    id: 'bu-01',
    unitName: 'Enterprise Cloud Platform',
    revenueGrowthPercentage: 38.0,
    freeCashFlowMarginPercentage: 24.0,
    ruleOfFortyScore: 62.0,
    netRetentionRatePercentage: 132.5,
    cacPaybackMonths: 7.8,
    isRuleOfFortyAchieved: true,
    hasTopDecileEfficiency: true,
  },
  {
    id: 'bu-02',
    unitName: 'Autonomous AI Agent Tools',
    revenueGrowthPercentage: 55.0,
    freeCashFlowMarginPercentage: 5.0,
    ruleOfFortyScore: 60.0,
    netRetentionRatePercentage: 142.0,
    cacPaybackMonths: 6.5,
    isRuleOfFortyAchieved: true,
    hasTopDecileEfficiency: true,
  },
  {
    id: 'bu-03',
    unitName: 'Sovereign Cybersecurity Suite',
    revenueGrowthPercentage: 28.0,
    freeCashFlowMarginPercentage: 22.0,
    ruleOfFortyScore: 50.0,
    netRetentionRatePercentage: 118.0,
    cacPaybackMonths: 11.2,
    isRuleOfFortyAchieved: true,
    hasTopDecileEfficiency: false,
  },
];

export const EnterpriseSaasEfficiencyRuleOf40QuadrantSlide: React.FC<{
  slide?: EnterpriseSaasEfficiencyRuleOf40QuadrantSlideData;
  data?: EnterpriseSaasEfficiencyRuleOf40QuadrantSlideData;
  activeStep?: number;
}> = ({ slide, data: propData }) => {
  const data = slide || propData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const units = data?.businessUnits?.length ? data.businessUnits : DEF_UNITS;
  const blendedScore = data?.blendedRuleOfFortyScore ?? 58.4;
  const arr = data?.annualRecurringRevenueMillionUsd ?? 184.5;
  const quadrantId = data?.quadrantIdentifier || 'RULE-40-EXECUTIVE-BOARD';
  const hasGlow = data?.hasTelemetryGlow ?? true;

  const avgNdr = (
    units.reduce((acc, curr) => acc + curr.netRetentionRatePercentage, 0) / units.length
  ).toFixed(1);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[56px_76px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[clamp(0.875rem,1.2vw,1.0rem)] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-2">
              <TrendingUp size={16} className="text-cyan-600 dark:text-cyan-400" />
              {data?.kicker || 'EXECUTIVE LEADERSHIP & SAAS UNIT ECONOMICS'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Building2 size={14} /> Quadrant: {quadrantId}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
              <Award size={14} className="text-emerald-600 dark:text-emerald-400" />
              Score: {blendedScore.toFixed(1)}% (Target: 40%)
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30 flex items-center gap-2">
              <DollarSign size={14} className="text-indigo-600 dark:text-indigo-400" />
              ARR: ${arr.toFixed(1)}M
            </span>
          </div>

          <h1
            className="text-[clamp(2.0rem,2.8vw,2.75rem)] font-ubuntu font-bold tracking-tight mb-2 leading-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Enterprise SaaS Capital Efficiency & Rule of 40 Quadrant'}
          </h1>
          <p
            className="font-poppins text-[clamp(1.0rem,1.4vw,1.125rem)] text-slate-700 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Balancing hyper-growth trajectory with disciplined free cash flow profitability.'}
          </p>
        </div>

        {/* Telemetry Hero Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] flex items-center gap-6 font-mono">
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Rule of 40 Score</span>
            <span className="text-[clamp(2.75rem,5.0vw,4.5rem)] font-bold leading-none text-emerald-700 dark:text-emerald-400">
              {blendedScore.toFixed(1)}%
            </span>
          </div>
          <div className="w-[1px] h-12 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Average NDR</span>
            <span className="text-indigo-700 dark:text-indigo-400 font-bold text-[24px]">
              {avgNdr}%
            </span>
            <span className="block text-[14px] text-slate-500 dark:text-slate-400">
              Target: &gt; 120% Met
            </span>
          </div>
          <div className="w-[1px] h-12 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Lead Architect</span>
            <span className="text-slate-900 dark:text-slate-100 font-bold text-[16px] block">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
            <span className="text-[14px] text-[var(--pres-accent)] font-semibold">
              {data?.leadRole || 'Chief Software Engineer'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Business Unit Cohort Matrix */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <BarChart size={18} className="text-[var(--pres-accent)]" /> Business Unit Growth & Free Cash Flow Cohorts
              </span>
              <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-500/30">
                All 3 Units &gt; 40% Target
              </span>
            </div>

            <div className="mt-4 space-y-3.5 font-mono">
              {units.map((unit) => (
                <div
                  key={unit.id}
                  className="p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg)]/60"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-[16px] text-slate-900 dark:text-slate-100">
                      {unit.unitName}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[14px] font-bold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                        Score: {unit.ruleOfFortyScore.toFixed(0)}%
                      </span>
                      {unit.hasTopDecileEfficiency ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[14px] font-bold bg-indigo-500/15 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30">
                          ELITE DECILE
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[14px] font-bold bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30">
                          CASH COW
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-3 pt-2 border-t border-[var(--pres-border)] text-[14px]">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block">YoY Growth</span>
                      <span className="font-bold text-indigo-700 dark:text-indigo-400">+{unit.revenueGrowthPercentage.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block">FCF Margin</span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400">+{unit.freeCashFlowMarginPercentage.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block">Net Retention</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{unit.netRetentionRatePercentage.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block">CAC Payback</span>
                      <span className="font-bold text-cyan-700 dark:text-cyan-400">{unit.cacPaybackMonths.toFixed(1)} Mo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between text-[14px] font-mono text-slate-600 dark:text-slate-400">
            <span>Formula: Revenue Growth % + Free Cash Flow Margin %</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Consolidated Portfolio Status: ELITE</span>
          </div>
        </div>

        {/* Right Bento: Capital Efficiency Command Deck */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <PieChart size={18} className="text-emerald-600 dark:text-emerald-400" /> Capital Efficiency Unit Economics
              </span>
              <span className="text-[14px] font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                BOARD SIGN-OFF
              </span>
            </div>

            <div className="mt-4 space-y-3 font-mono text-[14px]">
              <div className="p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg)]/60">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <Zap size={15} className="text-indigo-500" /> SaaS Magic Number
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">1.42 (Tier 1)</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[14px]">
                  Net new ARR generated per dollar of sales and marketing spend exceeds efficiency bar.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg)]/60">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-500" /> Gross Margin Profile
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">82.4%</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[14px]">
                  Pure cloud software gross margin maintaining robust pricing power against inflation.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg)]/60">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <DollarSign size={15} className="text-cyan-500" /> CAC Payback Horizon
                  </span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold">8.4 Months</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[14px]">
                  Customer acquisition capital returned in under 9 months, fueling self-funding expansion.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-200 font-mono text-[14px] flex items-center gap-2">
            <Sparkles size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span>Rule of 40 Audit: 58.4% blended performance satisfies institutional investor threshold.</span>
          </div>
        </div>
      </div>

      {/* Plane 2 Telemetry Footer */}
      <div className={`plane-1-raised z-10 px-6 py-3.5 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] flex items-center justify-between font-mono text-[14px] text-slate-700 dark:text-slate-300 shadow-md ${hasGlow ? 'shadow-emerald-500/10' : ''}`}>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            CAPITAL DISCIPLINE: TOP-DECILE PERFORMANCE
          </span>
          <span>Annual Recurring Revenue: <strong className="text-emerald-700 dark:text-emerald-400">${arr.toFixed(1)}M USD</strong></span>
          <span>Blended Rule of 40: <strong className="text-indigo-700 dark:text-indigo-400">{blendedScore.toFixed(1)}%</strong></span>
        </div>
        <div className="flex items-center gap-6">
          <span>Lead Architect: <strong>{data?.leadArchitect || 'Alim Ul Karim'}</strong>, <span className="text-[var(--pres-accent)]">{data?.leadRole || 'Chief Software Engineer'}</span></span>
          <span className="text-slate-500 dark:text-slate-400">16:9 4K Precision DOM Standard</span>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSaasEfficiencyRuleOf40QuadrantSlide;
