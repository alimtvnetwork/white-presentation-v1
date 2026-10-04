// lint-allow: file-size reason="ActiveInferenceMemorySlide kinetic 4-stage HBM3e CXL memory tiering" max=120
import React from 'react';
import type { ActiveInferenceMemorySlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Cpu, CheckCircle2, ShieldCheck, Activity, Layers, Database } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Hot KV in HBM3e', stageSubtitle: 'Active attention heads held in on-die ultra-fast HBM3e memory', memoryTierTarget: 'Tier 0: HBM3e', cacheHitRatePercent: 99.4, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'Warm CXL 3.0 Pool', stageSubtitle: 'Dormant prompt tokens paged across coherent CXL 3.0 bus', memoryTierTarget: 'Tier 1: CXL 3.0 Pool', cacheHitRatePercent: 96.2, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'Cold NVMe Flash', stageSubtitle: 'Multi-turn conversation history evicted to disaggregated NVMe', memoryTierTarget: 'Tier 2: NVMe Fabric', cacheHitRatePercent: 91.8, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'Dynamic Rehydration', stageSubtitle: 'Predictive speculative prefetching eliminates pipeline stalls', memoryTierTarget: 'Rehydration Bus', cacheHitRatePercent: 98.6, isActive: false, isCompleted: false },
];
const DEF_TIERS = [
  { id: 't0', tierName: 'On-Die HBM3e', bandwidthCapacityTbps: 4.8, storageCapacityGb: 192, averageAccessLatencyNs: 82, activeContextTokens: 65536, isTierActive: true, hasPagingEnabled: true, isSaturated: false },
  { id: 't1', tierName: 'CXL 3.0 Host Pool', bandwidthCapacityTbps: 0.5, storageCapacityGb: 2048, averageAccessLatencyNs: 240, activeContextTokens: 524288, isTierActive: true, hasPagingEnabled: true, isSaturated: false },
  { id: 't2', tierName: 'NVMe-oF Fabric Flash', bandwidthCapacityTbps: 0.05, storageCapacityGb: 32768, averageAccessLatencyNs: 7800, activeContextTokens: 4194304, isTierActive: true, hasPagingEnabled: true, isSaturated: false },
];

export const ActiveInferenceMemorySlide: React.FC<{ slide?: ActiveInferenceMemorySlideData; data?: ActiveInferenceMemorySlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.tieringStages?.length ? data.tieringStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const tiers = data?.memoryTiers?.length ? data.memoryTiers : DEF_TIERS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><Cpu size={15} className="text-violet-500" />{data?.kicker || 'KV-CACHE HIERARCHICAL TIERING'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data?.overallCacheHitRatePercent || 98.4}% Hit Rate • 4M Context Window</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Active Inference Memory Tiering: HBM3e to CXL 3.0 Pipeline'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Zero-stall hierarchical memory orchestration for ultra-long context LLM serving with speculative prefetching'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Serving Engine</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.inferenceEngineName || 'vLLM + PagedAttention v3'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Context Window</span><span className="text-sm font-bold text-violet-400">4,194,304 Tokens</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Chief Software Engineer</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`step-interactive text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white scale-[1.02]' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 opacity-75' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-[10px] opacity-75 truncate max-w-[110px]">{st.cacheHitRatePercent}% hit</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-400">MEMORY TIER TOPOLOGY</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">3 Tiers</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {tiers.map((t) => (
              <div key={t.id} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center"><span className="text-slate-200 font-bold">{t.tierName}</span><span className="text-[10px] text-emerald-400 font-bold">{t.averageAccessLatencyNs}ns Latency</span></div>
                <div className="flex justify-between text-[11px] text-slate-400"><span>Bandwidth: {t.bandwidthCapacityTbps} TB/s</span><span className="text-sky-300">{t.storageCapacityGb} GB Cap</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><Layers size={13} /> PagedAttention Zero-Copy VRAM</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-sky-300">PAGING & ARBITRATION BUS</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">CXL 3.0 Coherent</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">CURRENT TIER TARGET</span>
              <div className="text-sky-300 font-bold text-xs">{stages[currentStep]?.memoryTierTarget}</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">{stages[currentStep]?.stageSubtitle}</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">Predictive Eviction:</span><strong className="text-emerald-400">Least Recently Attended (LRA)</strong></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Zero Attention Stall Guaranteed</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400">SERVING PERFORMANCE</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">4M Tokens</span></div>
          <div className="space-y-2 font-mono text-xs my-3">
            <div className="p-2.5 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">TIME TO FIRST TOKEN (TTFT)</span>
              <div className="text-emerald-300 font-bold text-xl font-mono">48ms P99</div>
              <div className="text-[10px] text-slate-400">Under 1,000 Concurrent 128k Streams</div>
            </div>
            <div className="p-2.5 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">VRAM COST REDUCTION</span>
              <div className="text-sky-300 font-bold text-xs">82% Lower GPU Memory Allocation</div>
              <div className="text-[10px] text-slate-400">Enables 6x higher batch density</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Cache Integrity:</span><strong className="font-bold">100% BITWISE ACCURATE</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> KV Memory Tiering Active</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Prefetch Predictor: <strong className="text-slate-200">ONLINE</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Hit Rate: <strong className="text-emerald-400">98.4% SUSTAINED</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400"><span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span><span>Step {currentStep + 1} of {stages.length}</span></div>
      </div>
    </div>
  );
};
