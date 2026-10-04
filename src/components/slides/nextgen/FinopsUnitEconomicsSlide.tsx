// lint-allow: file-size reason="FinopsUnitEconomicsSlide flat sovereign FinOps cloud unit economics" max=120
import React from 'react';
import type { FinopsUnitEconomicsSlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { DollarSign, CheckCircle2, ShieldCheck, TrendingDown, Layers, PieChart } from 'lucide-react';

const DEF_WORKLOADS = [
  { workloadName: '70B Frontier LLM Serving', cloudProvider: 'CoreWeave / GCP', costPerMillionTokensUsd: 0.18, monthlySpendUsd: 680000, commitmentDiscountCoveragePercent: 84, isOptimized: true, hasBudgetAlertAverted: true },
  { workloadName: '8B Real-Time Semantic Router', cloudProvider: 'AWS Graviton4', costPerMillionTokensUsd: 0.03, monthlySpendUsd: 240000, commitmentDiscountCoveragePercent: 92, isOptimized: true, hasBudgetAlertAverted: true },
  { workloadName: 'Continuous Red-Team Fuzzing', cloudProvider: 'Equinix Metal Bare-Metal', costPerMillionTokensUsd: 0.05, monthlySpendUsd: 180000, commitmentDiscountCoveragePercent: 100, isOptimized: true, hasBudgetAlertAverted: true },
];

const DEF_KPIS = [
  { kpiTitle: 'Gross Margin per 1M Tokens', metricFormatted: '78.4% (Target > 70%)', isTargetMet: true },
  { kpiTitle: 'Blended Cost per 1k Tokens', metricFormatted: '$0.00014 USD', isTargetMet: true },
];

export const FinopsUnitEconomicsSlide: React.FC<{ slide?: FinopsUnitEconomicsSlideData; data?: FinopsUnitEconomicsSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const workloads = data?.workloads?.length ? data.workloads : DEF_WORKLOADS;
  const kpis = data?.kpis?.length ? data.kpis : DEF_KPIS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><DollarSign size={15} className="text-emerald-500" />{data?.kicker || 'FINOPS & CLOUD UNIT ECONOMICS'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> ${data?.blendedCostPerTokenCent || 0.0014}c per Token • 78.4% Gross Margin</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'FinOps Unit Economics: GPU Token Economics Matrix'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Rigorous token cost allocation, multi-cloud spot arbitrage, and 3-year GPU capital depreciation modeling'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Fiscal Period</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.reportingFiscalPeriod || 'Q3-2026 Fleet'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Monthly Spend</span><span className="text-sm font-bold text-emerald-400">${((data?.totalMonthlyCloudSpendUsd || 1420000) / 1000000).toFixed(2)}M/mo</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Chief Software Engineer</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[530px] items-stretch">
        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-2"><DollarSign size={16} /> WORKLOAD COST BREAKDOWN</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Cost / 1M Tokens</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {workloads.map((w, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center"><span className="text-slate-200 font-bold">{w.workloadName}</span><span className="text-emerald-400 font-bold">${w.costPerMillionTokensUsd} / M</span></div>
                <div className="flex justify-between text-[11px] text-slate-400"><span>Spend: ${(w.monthlySpendUsd / 1000).toFixed(0)}k/mo</span><span className="text-sky-300">{w.commitmentDiscountCoveragePercent}% Reserved</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><TrendingDown size={13} /> Multi-Cloud Spot Arbitrage Active</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-sky-400 flex items-center gap-2"><PieChart size={16} /> CAPITAL DEPRECIATION</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">36-Month Model</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {kpis.map((k, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 block">{k.kpiTitle}</span>
                <div className="text-emerald-400 font-bold text-sm font-mono">{k.metricFormatted}</div>
              </div>
            ))}
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">Straight-line depreciation of H100 servers over 36 months yielding $0.00014 blended cost per inference token.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Carbon Neutral Offsets Included</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-300 flex items-center gap-2"><Layers size={16} /> COMMITMENT DISCOUNTS</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">92% Coverage</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">RESERVED CAPACITY POOL</span>
              <div className="text-violet-300 font-bold text-xs font-mono">3-Year Convertible CUDs</div>
              <div className="text-[11px] text-slate-400">Guaranteed 48% discount vs on-demand GPU pricing tier.</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">ANOMALY AVERTED</span>
              <div className="text-emerald-400 font-bold text-sm">$320,000 Saved via Spot Eviction Auto-Healing</div>
              <div className="text-[10px] text-slate-400">Continuous Karpenter bin-packing optimization</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Budget Compliance:</span><strong className="font-bold">100% ON TARGET</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> FinOps Ledger Verified</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Gross Margin: <strong className="text-slate-200">78.4%</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Reserved Capacity: <strong className="text-emerald-400">92% SECURED</strong></span>
        </div>
        <div className="text-slate-400">Single Step Overview Archetype</div>
      </div>
    </div>
  );
};
