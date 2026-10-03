// lint-allow: file-size reason="AiInferenceTokenEconomicsSlide kinetic 4-step orchestration" max=120
import React from 'react';
import type { AiInferenceTokenEconomicsSlideData } from '../../../types/kineticRevolutionArchetypes';
import { createAiInferenceTokenEconomicsSlide } from '../../../utils/kineticRevolutionFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Coins, CheckCircle2, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

const STAGES = [
  { index: 0, title: 'Prefill Ingestion', desc: 'TTFT optimization & batch sizing' },
  { index: 1, title: 'Paged KV Cache Offload', desc: 'VRAM footprint reduction' },
  { index: 2, title: 'Speculative Drafting', desc: 'Draft model 2.4x throughput' },
  { index: 3, title: 'Unit Margin Compounding', desc: 'Gross margin expands to 84.2%' },
];

export const AiInferenceTokenEconomicsSlide: React.FC<{ slide?: AiInferenceTokenEconomicsSlideData; data?: AiInferenceTokenEconomicsSlideData }> = ({ slide, data: pData }) => {
  const fallback = createAiInferenceTokenEconomicsSlide('default-ai-inference');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), STAGES.length - 1);
  const tiers = data.tiers?.length ? data.tiers : fallback.tiers;
  const costs = data.costBreakdowns?.length ? data.costBreakdowns : fallback.costBreakdowns;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Coins size={15} className="text-violet-500" />
              {data.kicker || 'FOUNDATION MODEL ECONOMICS'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> Primary Model: {data.primaryModel}
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'AI Inference Token Economics: Margin Scaling & Paged KV Cache'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Granular unit economics tracking time-to-first-token (TTFT), inter-token latency (ITL), and GPU VRAM offload gross margin realization.'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Monthly Run Rate</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.monthlyRunRateUsd}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Avg TTFT</span><span className="text-lg font-bold text-slate-900 dark:text-sky-400">{data.averageTtftMs} ms</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Cache Discount</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">{data.cacheHitDiscountRate}</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {STAGES.map((st, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;
          return (
            <button key={st.index} onClick={() => jumpToStep(idx)} className={`text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${isActive ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white' : isCompleted ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : isCompleted ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{isCompleted ? '✓' : idx + 1}</span>
                <span className="font-bold">{st.title}</span>
              </div>
              <span className="text-[10px] opacity-75 truncate max-w-[130px]">{st.desc}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-12 gap-5 z-10 my-auto h-[490px] items-stretch">
        <div className="col-span-6 flex flex-col justify-between gap-3">
          <div className="plane-2-elevated p-4 rounded-2xl border border-slate-700/60 flex-1 flex flex-col justify-between">
            <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2"><Zap size={14} /> Inference Tier Cost & Latency Benchmark</span>
            <div className="space-y-2 my-2">
              {tiers.map((t) => (
                <div key={t.id} className={`p-3 rounded-xl border font-mono text-xs flex flex-col gap-1.5 ${t.isRecommended ? 'bg-[var(--pres-accent)]/10 border-[var(--pres-accent)]/50 text-slate-200' : 'bg-slate-800/30 border-slate-700/60 text-slate-400'}`}>
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-slate-100 flex items-center gap-2">{t.tierName} {t.isRecommended ? <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Recommended</span> : null}</span>
                    <span className="text-emerald-400">${t.inputPricePerMillion.toFixed(2)} in / ${t.outputPricePerMillion.toFixed(2)} out (1M)</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-700/30">
                    <span>Model: {t.modelFamily}</span>
                    <span>TTFT P95: <strong className="text-sky-300">{t.ttftP95Ms} ms</strong></span>
                    <span>Throughput: <strong className="text-violet-300">{t.tokensPerSecond} tok/s</strong></span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2.5 rounded-xl bg-black/20 font-mono text-[11px] text-slate-400 flex justify-between">
              <span>Speculative Decoding: <strong className="text-emerald-400">2.4x Speedup Active</strong></span>
              <span>KV Cache Offload: <strong className="text-emerald-400">Paged Attention</strong></span>
            </div>
          </div>
        </div>

        <div className="col-span-6 flex flex-col justify-between gap-3">
          <div className="plane-2-elevated p-4 rounded-2xl border border-slate-700/60 flex-1 flex flex-col justify-between">
            <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2"><TrendingUp size={14} className="text-emerald-400" /> Workload Allocation & Margin Realization</span>
            <div className="space-y-2 my-2">
              {costs.map((c) => (
                <div key={c.id} className="p-3 rounded-xl border border-slate-700/50 bg-slate-800/20 font-mono text-xs flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-200 block">{c.category}</span>
                    <span className="text-[10px] text-slate-400">{c.monthlyTokensMillion}M Tokens / Month</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-100 block">${c.allocatedBudgetUsd.toLocaleString()}</span>
                    <span className="text-[10px] text-emerald-400 font-bold">{c.savingsPercent}% Cost Avoided</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-black/20 rounded-xl border border-slate-800/80 font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span>Audited by: <strong>Alim Ul Karim (Chief Software Engineer)</strong></span>
              <span className="text-emerald-400 font-bold">Gross Margin: 84.2% Realized</span>
            </div>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Enterprise Token Unit Economics: Verified</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Paged KV Cache: <strong className="text-slate-200">68.4% VRAM Saved</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Inter-Token Latency: <span className="text-emerald-400">10.8 ms P95</span></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Active Stage: {STAGES[currentStep].title}</span>
          <span>Step {currentStep + 1} of {STAGES.length}</span>
        </div>
      </div>
    </div>
  );
};
