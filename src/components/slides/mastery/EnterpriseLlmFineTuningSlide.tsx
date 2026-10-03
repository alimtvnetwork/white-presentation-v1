// lint-allow: file-size reason="EnterpriseLlmFineTuningSlide kinetic 4-step LoRA training loss orchestration" max=120
import React from 'react';
import type { EnterpriseLlmFineTuningLossSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createEnterpriseLlmFineTuningSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { TrendingUp, CheckCircle2, ShieldCheck, Activity, Award, Cpu } from 'lucide-react';

export const EnterpriseLlmFineTuningSlide: React.FC<{ slide?: EnterpriseLlmFineTuningLossSlideData; data?: EnterpriseLlmFineTuningLossSlideData }> = ({ slide, data: pData }) => {
  const fallback = createEnterpriseLlmFineTuningSlide('default-enterprise-llm-fine-tuning');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data.tuningStages?.length ? data.tuningStages : fallback.tuningStages;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const checkpoints = data.checkpoints?.length ? data.checkpoints : fallback.checkpoints;
  const lora = data.loraParams || fallback.loraParams;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><TrendingUp size={15} className="text-violet-500" />{data.kicker || 'FOUNDATION MODEL ADAPTATION'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data.corpusTokenCountFormatted || '12.8 Billion Tokens'} • Final PPL {data.finalEvalPerplexity || 2.41}</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data.title || 'Enterprise LLM Fine-Tuning Loss: LoRA Convergence & Perplexity'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data.subtitle || 'Parameter-efficient domain adaptation across 12.8B tokens with sub-2.5 validation perplexity'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Foundation Model</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data.foundationModelName || 'Llama-3.3-70B'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Eval Perplexity</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.finalEvalPerplexity || 2.41}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;
          return (
            <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${isActive ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white' : isCompleted ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
              <div className="flex items-center gap-2.5"><span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : isCompleted ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{isCompleted ? '✓' : idx + 1}</span><span className="font-bold">{st.stageName}</span></div>
              <span className="text-[10px] opacity-75 truncate max-w-[120px]">Grad: {st.gradientNorm}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep <= 1 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="font-mono text-xs font-bold text-sky-400">LOSS TRAJECTORY (STEP 0 - 10,000)</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">Cosine Schedule</span>
          </div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-2">
              <div className="flex justify-between text-slate-400 text-[11px]"><span>Step 0 (Initial): <b className="text-rose-400">3.84 Loss</b></span><span>Step 2,500: <b className="text-amber-400">2.45 Loss</b></span></div>
              <div className="flex justify-between text-slate-400 text-[11px]"><span>Step 5,000: <b className="text-sky-300">1.82 Loss</b></span><span>Step 10,000: <b className="text-emerald-400">1.12 Loss</b></span></div>
            </div>
            <div className="text-slate-400 text-[11px] leading-relaxed">Steady monotonic decay with zero loss spikes, zero gradient explosions, and stable FSDP sharding.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-slate-400">GPU Cluster: 64x H100 SXM5 FlashAttention-3</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 2 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="font-mono text-xs font-bold text-violet-300">LORA RANK-32 ADAPTERS</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">PEFT Method</span>
          </div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-2">
              <div className="flex justify-between text-slate-300 text-[11px]"><span>Rank (r) / Alpha (α):</span><strong className="text-violet-300">r={lora.loraRank} / α={lora.loraAlpha}</strong></div>
              <div className="flex justify-between text-slate-300 text-[11px]"><span>Target Attention:</span><strong className="text-sky-300">{lora.targetModules.join(', ')}</strong></div>
              <div className="flex justify-between text-slate-300 text-[11px]"><span>Param Ratio:</span><strong className="text-emerald-400">{lora.trainableParameterRatioPercent}% (128M)</strong></div>
            </div>
            <div className="text-slate-400 text-[11px] leading-relaxed">Updates low-rank decomposition matrices while freezing all 70B backbone weights, preserving core general capabilities.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><Cpu size={13} /> Zero Catastrophic Forgetting Certified</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="font-mono text-xs font-bold text-emerald-400">CHECKPOINT VALIDATION</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Eval Perplexity</span>
          </div>
          <div className="space-y-3 font-mono text-xs my-3">
            {checkpoints.map((cp) => (
              <div key={cp.checkpointStep} className={`p-2.5 rounded-xl border ${cp.isSavedCheckpoint ? 'bg-emerald-950/40 border-emerald-500/40' : 'bg-black/30 border-slate-800'}`}>
                <div className="flex justify-between items-center text-slate-200 font-bold text-xs mb-1"><span>Step #{cp.checkpointStep.toLocaleString()}</span><span className={`text-[10px] ${cp.isSavedCheckpoint ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>{cp.isSavedCheckpoint ? 'OPTIMAL PRODUCTION' : 'SAVED'}</span></div>
                <div className="flex justify-between text-[11px] text-slate-300"><span>PPL: <strong className="text-emerald-300">{cp.validationPerplexity}</strong></span><span>Loss: <strong className="text-slate-200">{cp.trainingLoss}</strong></span><span>VRAM: <strong className="text-slate-400">{cp.gpuMemoryUsageGb}GB</strong></span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center justify-between">
            <span>Validation Result:</span>
            <span className="font-bold flex items-center gap-1"><Award size={13} /> READY TO SERVE</span>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Convergence Stability Proven</span>
          <span className="text-slate-600">|</span><span style={{ color: 'var(--pres-text-muted)' }}>Throughput: <strong className="text-slate-200">3,840 tokens/sec/GPU</strong></span>
          <span className="text-slate-600">|</span><span style={{ color: 'var(--pres-text-muted)' }}>MFU Efficiency: <strong className="text-emerald-400">54.2%</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active: {stages[currentStep]?.stageName}</span>
          <span>Step {currentStep + 1} of {stages.length}</span>
        </div>
      </div>
    </div>
  );
};
