// lint-allow: file-size reason="EnterpriseAiTotalCostOfOwnershipQuadrantSlide flat sovereign TCO quadrant" max=450
import React from 'react';
import type {
  EnterpriseAiTotalCostOfOwnershipQuadrantSlideData,
  TcoQuadrantEntity,
  FinancialVectorMetric,
} from '../../../types/suite2031Archetypes';
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
  ShieldCheck,
  Layers,
  Activity,
} from 'lucide-react';

const DEF_ENTITIES: TcoQuadrantEntity[] = [
  {
    id: 'tco-01',
    workloadName: 'Autonomous Codebase Migration Factory',
    annualCapexMillionUsd: 12.0,
    annualOpexMillionUsd: 4.2,
    inferenceCostPerMillionTokensUsd: 0.14,
    roiPaybackPeriodMonths: 6.5,
    isTopDecileEfficiency: true,
    hasCostCapEnforced: true,
  },
  {
    id: 'tco-02',
    workloadName: 'Frontier Foundation Model Pre-Training',
    annualCapexMillionUsd: 48.0,
    annualOpexMillionUsd: 18.5,
    inferenceCostPerMillionTokensUsd: 0.32,
    roiPaybackPeriodMonths: 14.2,
    isTopDecileEfficiency: false,
    hasCostCapEnforced: true,
  },
  {
    id: 'tco-03',
    workloadName: 'Real-Time Agentic Voice Inference Mesh',
    annualCapexMillionUsd: 8.0,
    annualOpexMillionUsd: 3.1,
    inferenceCostPerMillionTokensUsd: 0.18,
    roiPaybackPeriodMonths: 7.8,
    isTopDecileEfficiency: true,
    hasCostCapEnforced: true,
  },
  {
    id: 'tco-04',
    workloadName: 'Confidential Homomorphic RAG Enclave',
    annualCapexMillionUsd: 15.0,
    annualOpexMillionUsd: 5.4,
    inferenceCostPerMillionTokensUsd: 0.22,
    roiPaybackPeriodMonths: 8.9,
    isTopDecileEfficiency: true,
    hasCostCapEnforced: true,
  },
];

const DEF_VECTORS: FinancialVectorMetric[] = [
  {
    id: 'fv-01',
    vectorName: 'Spot Compute GPU Fleet Arbitrage',
    allocatedBudgetMillionUsd: 24.0,
    budgetVariancePercentage: -14.2,
    isWithinForecastTolerance: true,
  },
  {
    id: 'fv-02',
    vectorName: 'Reserved Hardware CapEx Amortization',
    allocatedBudgetMillionUsd: 62.0,
    budgetVariancePercentage: -2.1,
    isWithinForecastTolerance: true,
  },
  {
    id: 'fv-03',
    vectorName: 'High-Bandwidth Interconnect Power Grid',
    allocatedBudgetMillionUsd: 18.5,
    budgetVariancePercentage: -0.8,
    isWithinForecastTolerance: true,
  },
];

export const EnterpriseAiTotalCostOfOwnershipQuadrantSlide: React.FC<{
  slide?: EnterpriseAiTotalCostOfOwnershipQuadrantSlideData;
  data?: EnterpriseAiTotalCostOfOwnershipQuadrantSlideData;
  activeStep?: number;
}> = ({ slide, data: propData }) => {
  const data = slide || propData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const entities = data?.quadrantEntities?.length ? data.quadrantEntities : DEF_ENTITIES;
  const vectors = data?.financialVectors?.length ? data.financialVectors : DEF_VECTORS;

  const quadrantId = data?.financialQuadrantIdentifier || 'TCO-ENTERPRISE-2031-Q3';
  const totalExpenditure = data?.totalAiExpenditureMillionUsd ?? 148.5;
  const efficiencyScore = data?.aggregateInferenceEfficiencyScore ?? 92.4;
  const isFinalized = data?.isTcoAnalysisFinalized ?? true;
  const hasSpotArbitrage = data?.hasSpotComputeArbitrageActive ?? true;
  const hasAmortizationOptimized = data?.hasCapExAmortizationOptimized ?? true;
  const hasGlow = data?.hasTelemetryGlow ?? true;

  const avgTokenCost = (
    entities.reduce((acc, e) => acc + e.inferenceCostPerMillionTokensUsd, 0) / entities.length
  ).toFixed(2);
  const avgPayback = (
    entities.reduce((acc, e) => acc + e.roiPaybackPeriodMonths, 0) / entities.length
  ).toFixed(1);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span
              style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.0rem)' }}
              className="font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2"
            >
              <TrendingUp size={16} className="text-cyan-500" />
              {data?.kicker || 'FINANCIAL ENGINEERING & AI INFRASTRUCTURE ECONOMICS'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Building2 size={14} /> Quadrant: {quadrantId}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Award size={14} className="text-emerald-500" />
              Efficiency Score: {efficiencyScore.toFixed(1)} / 100
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <DollarSign size={14} className="text-purple-500" />
              Total AI Spend: ${totalExpenditure.toFixed(1)}M USD
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Enterprise AI Total Cost of Ownership (TCO) Quadrant'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'CapEx vs OpEx portfolio allocation, inference unit token economics, and capital payback velocity.'}
          </p>
        </div>

        {/* Telemetry Hero Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Avg Token Cost</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[28px] leading-tight">
              ${avgTokenCost} / 1M
            </span>
          </div>
          <div className="w-[1px] h-10 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Avg ROI Payback</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[28px] leading-tight">
              {avgPayback} Mo
            </span>
          </div>
          <div className="w-[1px] h-10 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold block text-[15px]">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
            <span className="text-[var(--pres-accent)] text-[14px]">
              {data?.leadRole || 'Chief Software Engineer'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[560px]">
        {/* Left Bento: 2x2 Workload TCO Quadrant (CapEx vs OpEx Efficiency) */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <BarChart size={16} className="text-[var(--pres-accent)]" /> Workload Portfolio: CapEx vs OpEx Amortization
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-bold border border-emerald-500/20">
                Top-Decile Cost Decoupling
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {entities.map((ent) => {
                const isElite = ent.isTopDecileEfficiency;
                return (
                  <div
                    key={ent.id}
                    className="p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Building2 size={16} className="text-cyan-500" />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{ent.workloadName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isElite
                              ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                              : 'bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/30'
                          }`}
                        >
                          {isElite ? 'Elite Decile' : 'Pre-Training Intensive'}
                        </span>
                        {ent.hasCostCapEnforced && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Cost Capped
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-[14px] font-mono text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200/60 dark:border-slate-800/60">
                      <div>
                        <span>CapEx: </span>
                        <strong className="text-purple-700 dark:text-purple-400">${ent.annualCapexMillionUsd.toFixed(1)}M</strong>
                      </div>
                      <div>
                        <span>OpEx: </span>
                        <strong className="text-cyan-700 dark:text-cyan-400">${ent.annualOpexMillionUsd.toFixed(1)}M</strong>
                      </div>
                      <div>
                        <span>Token Cost: </span>
                        <strong className="text-emerald-700 dark:text-emerald-400">${ent.inferenceCostPerMillionTokensUsd.toFixed(2)}</strong>
                      </div>
                      <div>
                        <span>Payback: </span>
                        <strong className="text-slate-800 dark:text-slate-200">{ent.roiPaybackPeriodMonths.toFixed(1)} Mo</strong>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between text-[14px] font-mono text-slate-500 dark:text-slate-400">
            <span>ROI Threshold: Net Cash Flow Positive within Month 7 Post-Deployment</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 size={14} /> 100% Within Budget Ceiling
            </span>
          </div>
        </div>

        {/* Right Bento: Inference Unit Economics & Budget Variances */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <PieChart size={16} className="text-emerald-500" /> Capital Allocation & Forecast Variance
              </span>
              <span className="font-mono text-[14px] text-emerald-700 dark:text-emerald-400 font-bold">
                Board Sign-Off
              </span>
            </div>

            <div className="space-y-3.5 mt-4 font-mono text-[14px]">
              {vectors.map((vec) => (
                <div
                  key={vec.id}
                  className="p-3.5 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">
                      {vec.vectorName}
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                      {vec.budgetVariancePercentage.toFixed(1)}% (Favorable)
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-500 dark:text-slate-400 text-[14px]">
                    <span>Allocated Budget:</span>
                    <span className="font-bold text-cyan-700 dark:text-cyan-400">
                      ${vec.allocatedBudgetMillionUsd.toFixed(1)}M USD
                    </span>
                  </div>
                </div>
              ))}

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">TCO Analysis Finalized</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {isFinalized ? 'Audited & Approved' : 'In Review'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Spot GPU Fleet Arbitrage</span>
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {hasSpotArbitrage ? 'Active (42% Cost Savings)' : 'Fixed Price'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">CapEx 36-Month Amortization</span>
                  <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                    <Layers size={16} /> {hasAmortizationOptimized ? 'Optimized Accelerated' : 'Standard'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-emerald-500 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Blended token cost of ${avgTokenCost} / 1M tokens yields average enterprise ROI payback of {avgPayback} months.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div
        style={{ backdropFilter: 'blur(14px)' }}
        className={`plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-[14px] z-10 ${
          hasGlow ? 'shadow-emerald-500/10' : ''
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">TCO Quadrant Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> All Workloads Within Budget Cap | Net Cash Flow Positive: Month 7 Post-Deployment | Top-Decile Efficiency
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 TCO Quadrant
          </span>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseAiTotalCostOfOwnershipQuadrantSlide;
