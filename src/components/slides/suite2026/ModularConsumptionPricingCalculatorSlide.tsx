// lint-allow: file-size reason="ModularConsumptionPricingCalculatorSlide interactive consumption pricing tier calculator" max=160
import React from 'react';
import type { ModularConsumptionPricingCalculatorSlideData } from '../../../types/suite2026Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Calculator, CheckCircle2, DollarSign, TrendingUp, Sparkles, Layers } from 'lucide-react';

const DEF_TIERS = [
  { id: 't1', tierName: 'Starter Ingestion', unitMetricName: 'Event Streams', costPerUnitUsd: 0.0040, minimumCommitment: 250000, isRecommended: false, isSubtotal: false, hasVolumeDiscount: false },
  { id: 't2', tierName: 'Pro Compute Stream', unitMetricName: 'Compute Cycles', costPerUnitUsd: 0.0025, minimumCommitment: 2500000, isRecommended: true, isSubtotal: false, hasVolumeDiscount: true },
  { id: 't3', tierName: 'Enterprise AI Inference', unitMetricName: 'Tokens / Sec', costPerUnitUsd: 0.0012, minimumCommitment: 10000000, isRecommended: false, isSubtotal: false, hasVolumeDiscount: true },
  { id: 't4', tierName: 'Sovereign Private Fabric', unitMetricName: 'Dedicated Nodes', costPerUnitUsd: 0.0008, minimumCommitment: 25000000, isRecommended: false, isSubtotal: true, hasVolumeDiscount: true },
];

export const ModularConsumptionPricingCalculatorSlide: React.FC<{
  slide?: ModularConsumptionPricingCalculatorSlideData;
  data?: ModularConsumptionPricingCalculatorSlideData;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const tiers = data?.tiers?.length ? data.tiers : DEF_TIERS;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), tiers.length - 1);
  const activeTier = tiers[currentStep] || tiers[0];
  const usageMultiplier = [0.25, 1.0, 4.0, 10.0][currentStep] ?? 1.0;
  const calculatedMonthlyUnits = Math.round((data?.estimatedMonthlyUsage || 12500000) * usageMultiplier);
  const calculatedSpend = Math.round(calculatedMonthlyUnits * activeTier.costPerUnitUsd);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-[14px] font-mono font-bold tracking-wider uppercase flex items-center gap-2">
              <Calculator size={16} className="text-violet-500" />
              {data?.kicker || 'CONSUMPTION-BASED VALUE ARCHITECTURE'}
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-500" />
              {data?.billingFrequency || 'Monthly True-Up Reconciliation'}
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-[44px] font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Modular Consumption Pricing: Transparent Unit Economics Model'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-[16px] max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Zero platform lock-in pricing engine with linear volume discounts, telemetry verification, and sovereign commitments.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[12px] block uppercase">Currency</span><span className="font-bold text-slate-900 dark:text-slate-100">{data?.currencyCode || 'USD ($)'}</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[12px] block uppercase">Est. Monthly Base</span><span className="font-bold text-violet-500">{(data?.estimatedMonthlyUsage || 12500000).toLocaleString()} Units</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[12px] block uppercase">SLA Grade</span><span className="font-bold text-emerald-500">99.99% Financial SLA</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-3">
        {tiers.map((t, idx) => {
          const isActive = idx === currentStep;
          return (
            <button key={t.id} onClick={() => jumpToStep(idx)} className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${isActive ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_20px_var(--pres-accent)] text-slate-900 dark:text-white scale-[1.02]' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-80' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 text-slate-500 dark:text-slate-400 blur-[0.5px]'}`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[12px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
                <span className="font-bold truncate text-[13px]">{t.tierName}</span>
              </div>
              <span className="text-[12px] opacity-80">${t.costPerUnitUsd.toFixed(4)}/u</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[460px] items-stretch">
        <div className="plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold text-violet-500 dark:text-violet-400 flex items-center gap-2"><Layers size={16} />TIER ARCHITECTURE</span>
            <span className="font-mono text-[12px] px-2.5 py-1 rounded bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">{activeTier.tierName}</span>
          </div>
          <div className="space-y-3 font-mono text-[14px] my-3">
            <div className="p-3.5 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)] space-y-1">
              <span className="text-[12px] text-slate-500 dark:text-slate-400 block uppercase">Unit Metric Standard</span>
              <div className="font-bold text-[16px] text-slate-900 dark:text-slate-100">{activeTier.unitMetricName}</div>
              <div className="text-[12px] text-slate-500">Sub-millisecond telemetry counting with verifiable cryptographic receipt.</div>
            </div>
            <div className="p-3.5 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)] space-y-1">
              <span className="text-[12px] text-slate-500 dark:text-slate-400 block uppercase">Minimum Monthly Commitment</span>
              <div className="font-bold text-[16px] text-slate-900 dark:text-slate-100">{activeTier.minimumCommitment.toLocaleString()} Units</div>
              <div className="text-[12px] text-emerald-600 dark:text-emerald-400 font-bold">Unused units rollover with zero forfeiture penalty.</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 font-mono text-[13px] text-violet-700 dark:text-violet-300 flex items-center gap-2">
            <Sparkles size={16} /> {activeTier.isRecommended ? '★ Recommended Tier for Enterprise Production Workloads' : 'Volume-Weighted Linear Amortization Active'}
          </div>
        </div>

        <div className="plane-2-elevated p-6 rounded-2xl border-2 border-[var(--pres-accent)] bg-[var(--pres-bg-card)] shadow-2xl flex flex-col justify-between scale-[1.01]">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold text-[var(--pres-accent)] flex items-center gap-2"><DollarSign size={16} />LIVE SIMULATOR</span>
            <span className="font-mono text-[12px] px-2.5 py-1 rounded bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 font-bold">Step {currentStep + 1} of 4</span>
          </div>
          <div className="space-y-4 font-mono text-[14px] my-3">
            <div className="p-4 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-[12px] text-slate-500 dark:text-slate-400 block uppercase">Estimated Monthly Consumption</span>
              <div className="text-[32px] font-bold text-slate-900 dark:text-white font-ubuntu">{calculatedMonthlyUnits.toLocaleString()}</div>
              <div className="text-[13px] text-slate-500 dark:text-slate-400">Rate: ${activeTier.costPerUnitUsd.toFixed(4)} per {activeTier.unitMetricName.toLowerCase()}</div>
            </div>
            <div className="p-4 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/30 space-y-1">
              <span className="text-[12px] text-[var(--pres-accent)] block uppercase font-bold">Estimated Monthly Invoiced Spend</span>
              <div className="text-[36px] font-bold text-[var(--pres-accent)] font-ubuntu">${calculatedSpend.toLocaleString()}</div>
              <div className="text-[12px] text-slate-600 dark:text-slate-300">Predictable linear scaling with zero surge multiplier.</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)] font-mono text-[13px] text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
            <CheckCircle2 size={16} /> Volume discount applied: {(0.0050 - activeTier.costPerUnitUsd > 0 ? ((0.0050 - activeTier.costPerUnitUsd) / 0.0050 * 100).toFixed(0) : '0')}% savings vs on-demand
          </div>
        </div>

        <div className="plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2"><TrendingUp size={16} />ENTERPRISE GUARANTEES</span>
            <span className="font-mono text-[12px] px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">Active Policy</span>
          </div>
          <div className="space-y-3 font-mono text-[14px] my-3">
            <div className="p-3.5 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)] space-y-1">
              <span className="font-bold text-slate-900 dark:text-slate-200">100% Granular Audit Trails</span>
              <div className="text-[13px] text-slate-500 dark:text-slate-400">Cryptographically verifiable CSV/JSON export delivered to designated S3 bucket every hour.</div>
            </div>
            <div className="p-3.5 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)] space-y-1">
              <span className="font-bold text-slate-900 dark:text-slate-200">Zero Overage Cliff-Edge Penalty</span>
              <div className="text-[13px] text-slate-500 dark:text-slate-400">Overage capacity continues at the negotiated rate without throttled throughput or penalty rates.</div>
            </div>
            <div className="p-3.5 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)] space-y-1">
              <span className="font-bold text-slate-900 dark:text-slate-200">Multi-Entity Sub-Account Billing</span>
              <div className="text-[13px] text-slate-500 dark:text-slate-400">Hierarchical cost-center tagging across global subsidiary accounts and isolated departments.</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)] font-mono text-[13px] text-slate-700 dark:text-slate-300">
            Enterprise Master Services Agreement (MSA) with 45-day invoice terms available upon request.
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between text-[14px] font-mono pt-3 border-t border-[var(--pres-border)]">
        <span style={{ color: 'var(--pres-text-muted)' }}>Slide 9 • Modular Consumption Pricing Engine • 16:9 4K Precision Standard</span>
        <span className="text-violet-500 font-bold">Dynamic Step {currentStep + 1} of {tiers.length}</span>
      </div>
    </div>
  );
};
