// lint-allow: file-size reason="CloudFinopsLadderSlide kinetic 4-stage cloud financial engineering" max=120
import React from 'react';
import type { CloudFinopsLadderSlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { DollarSign, CheckCircle2, TrendingDown, Scale, BarChart3, ShieldCheck, Activity } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Ingestion & Tag Normalization', stageSubtitle: 'CUR data lake ingestion and automated organizational taxonomy mapping', finopsEngine: 'Apache Spark on K8s', realizedSavingsAnnualUsd: 840000, unallocatedSpendPercent: 0.2, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'Unit Metric Amortization', stageSubtitle: 'Calculating cost per unit across business transactions and tenant tenants', finopsEngine: 'DuckDB FinOps Vectorizer', realizedSavingsAnnualUsd: 1420000, unallocatedSpendPercent: 0.1, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'Waste Detection & Rightsizing', stageSubtitle: 'Automated discovery of idle node pools, orphan disks, and over-provisioned pods', finopsEngine: 'Kubecost Enterprise Agent', realizedSavingsAnnualUsd: 1820000, unallocatedSpendPercent: 0.05, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'Algorithmic Commitment', stageSubtitle: 'Dynamic purchasing of 1-year and 3-year convertible commitment contracts', finopsEngine: 'Autonomous Commitment Broker', realizedSavingsAnnualUsd: 2600000, unallocatedSpendPercent: 0.0, isActive: false, isCompleted: false },
];

const DEF_ALLOCS = [
  { id: 'al1', allocationIndex: 1, costCategory: 'AI GPU Inference', monthlySpendUsd: 620000, unitCostUsd: 0.00042, unitMetricUnit: 'per 1K tokens', savingsPotentialUsd: 240000, isTagNormalized: true, hasRightsizingApplied: true, hasCommitmentDiscountActive: true },
  { id: 'al2', allocationIndex: 2, costCategory: 'Multi-Region Sharding', monthlySpendUsd: 340000, unitCostUsd: 0.012, unitMetricUnit: 'per 10K queries', savingsPotentialUsd: 95000, isTagNormalized: true, hasRightsizingApplied: true, hasCommitmentDiscountActive: true },
  { id: 'al3', allocationIndex: 3, costCategory: 'Zero-Trust API Mesh', monthlySpendUsd: 210000, unitCostUsd: 0.0018, unitMetricUnit: 'per 100K mTLS', savingsPotentialUsd: 58000, isTagNormalized: true, hasRightsizingApplied: false, hasCommitmentDiscountActive: true },
  { id: 'al4', allocationIndex: 4, costCategory: 'Object Storage & Lake', monthlySpendUsd: 280000, unitCostUsd: 0.015, unitMetricUnit: 'per GB-month', savingsPotentialUsd: 64000, isTagNormalized: true, hasRightsizingApplied: true, hasCommitmentDiscountActive: false },
];

export const CloudFinopsLadderSlide: React.FC<{ slide?: CloudFinopsLadderSlideData; data?: CloudFinopsLadderSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.amortizationStages?.length ? data.amortizationStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const allocations = data?.allocations?.length ? data.allocations : DEF_ALLOCS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><DollarSign size={16} className="text-violet-500" />{data?.kicker || 'CLOUD FINANCIAL ENGINEERING & UNIT ECONOMICS'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> {data?.effectiveSavingsRatePercent || 38.4}% Effective Savings</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Cloud FinOps Unit Amortization Ladder: Multi-Cloud Unit Economics'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Financial engineering architecture normalizing multi-cloud billing telemetry, deriving unit metrics, and executing algorithmic savings commitments'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Monthly Spend</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">${((data?.totalMonthlyCloudSpendUsd || 1450000) / 1000000).toFixed(2)}M / mo</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Commitment Engine</span><span className="text-sm font-bold text-emerald-500">ALGORITHMIC SAVINGS</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Chief Software Engineer</span><span className="text-sm font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-3">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`step-interactive text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-sm flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_20px_var(--pres-accent)] text-white scale-[1.02] animate-active-beacon' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 opacity-75' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-sm opacity-75">${(st.realizedSavingsAnnualUsd / 1000000).toFixed(2)}M/yr</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[480px] items-stretch">
        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-violet-400">COST CATEGORY ALLOCATION</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">4 Workloads</span></div>
          <div className="space-y-3 font-mono text-sm my-3">
            {allocations.map((a) => (
              <div key={a.id} className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-1">
                <div className="flex justify-between items-center"><span className="font-bold text-slate-200">{a.costCategory}</span><span className="text-sm text-emerald-400 font-bold">${(a.monthlySpendUsd / 1000).toFixed(0)}K/mo</span></div>
                <div className="flex justify-between text-sm text-slate-400"><span>${a.unitCostUsd} {a.unitMetricUnit}</span><span className="text-sky-300">Savings: ${(a.savingsPotentialUsd / 1000).toFixed(0)}K</span></div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><TrendingDown size={16} /> 99.8% Cost Allocation Tagging Coverage</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-sky-300">AMORTIZATION LADDER STAGE</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Step {currentStep + 1} of 4</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Active Amortization Engine</span>
              <div className="text-sky-300 font-bold text-base">{stages[currentStep]?.stageName}</div>
              <div className="text-sm text-slate-300 leading-relaxed font-poppins">{stages[currentStep]?.stageSubtitle}</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <div className="flex justify-between text-sm"><span className="text-slate-400">FinOps Engine:</span><span className="text-slate-200 font-bold">{stages[currentStep]?.finopsEngine}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-400">Unallocated Spend:</span><span className="text-emerald-400 font-bold">{stages[currentStep]?.unallocatedSpendPercent}% (Minimal)</span></div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-sky-400 flex items-center gap-2"><Scale size={16} /> Unit Margins Locked Across Tenants</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'ring-2 ring-emerald-500 shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-emerald-400">REALIZED SAVINGS AUDIT</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Verified</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Annual Realized Savings</span>
              <div className="text-emerald-400 font-bold text-3xl font-mono">$6.68M / yr</div>
              <div className="text-sm text-slate-400">38.4% blended effective multi-cloud discount</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Automated Commitment</span>
              <div className="text-sky-300 font-bold text-base">Convertible 1Y/3Y Savings Plans</div>
              <div className="text-sm text-slate-400">Spot eviction arbitrage with 0% downtime</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><ShieldCheck size={16} /> CFO / Board Audit Committee Approved</div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-4"><span className="text-sm uppercase text-slate-400">FinOps Program:</span><span className="text-emerald-400 font-bold">ENTERPRISE UNIT ECONOMICS & COMMITMENT ARBITRAGE ACTIVE</span></div>
        <div className="flex items-center gap-6"><span className="text-sm text-slate-400">Active Step: <strong className="text-slate-200">{currentStep + 1} / 4</strong></span><span className="text-sm text-slate-400">Unit Budget: <strong className="text-emerald-400">LOCKED</strong></span></div>
      </div>
    </div>
  );
};
