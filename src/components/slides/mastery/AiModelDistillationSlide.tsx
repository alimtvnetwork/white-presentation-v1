// lint-allow: file-size reason="AiModelDistillationSlide kinetic 4-step model compression pipeline" max=120
import React from 'react';
import type { AiModelDistillationPipelineSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createAiModelDistillationSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Cpu, CheckCircle2, ShieldCheck, Activity, Zap } from 'lucide-react';

export const AiModelDistillationSlide: React.FC<{ slide?: AiModelDistillationPipelineSlideData; data?: AiModelDistillationPipelineSlideData }> = ({ slide, data: pData }) => {
  const fallback = createAiModelDistillationSlide('default-ai-model-distillation');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data.distillationStages?.length ? data.distillationStages : fallback.distillationStages;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const layers = data.modelLayers?.length ? data.modelLayers : fallback.modelLayers;
  const benchmarks = data.quantizationBenchmarks?.length ? data.quantizationBenchmarks : fallback.quantizationBenchmarks;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Cpu size={15} className="text-violet-500" />{data.kicker || 'EDGE AI INFRASTRUCTURE'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> {data.compressionRatioFormatted || '18.4x Reduction'} • {data.accuracyRetentionPercent || 94.2}% Retained
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'AI Model Distillation Pipeline: 70B Frontier to 3.8B Edge Model'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Knowledge transfer, structured pruning, and INT4 quantization achieving 94.2% reasoning retention'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Teacher</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data.teacherModelName || 'Llama-3.3-70B'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Edge Student</span><span className="text-sm font-bold text-slate-900 dark:text-emerald-400">{data.studentModelName || 'Apex-Edge-3.8B'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-[10px] opacity-75 truncate max-w-[120px]">{st.hardwareCluster}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-sky-400">TEACHER (70B FP16)</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">140 GB VRAM</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {layers.map((l) => (
              <div key={l.layerIndex} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 block">{l.layerType}</span>
                <div className="text-slate-200 font-bold">{l.teacherParameterCount}</div>
                <div className="text-[11px] text-sky-300">Soft Logits Extracted (Temperature T=2.5)</div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-slate-400">Cluster: 32x H100 SXM5 80GB</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-300">DISTILLATION LOSS ENGINE</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">KL Alignment</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">LOSS FORMULATION</span>
              <div className="text-violet-300 font-bold text-xs font-mono">Loss = α·L_CE + β·T²·KL(P_t || P_s)</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">Transfers teacher dark knowledge while grounding hard target tokens.</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">Pruning Head Retention:</span><strong className="text-emerald-400">60% Reduction</strong></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><Zap size={13} /> AWQ INT4 Weight Quantization Preserved</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400">EDGE STUDENT (3.8B INT4)</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">2.1 GB VRAM</span></div>
          <div className="space-y-2 font-mono text-xs my-3">
            {benchmarks.map((bm, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-black/30 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">{bm.quantizationPrecision}</span>
                <div className="flex justify-between text-[11px] font-bold"><span className="text-slate-300">{bm.memoryFootprintGb} GB</span><span className="text-emerald-400">{bm.inferenceSpeedTokensPerSec} t/s</span></div>
                <div className="text-[10px] text-sky-300">GSM8K: {bm.gsm8kAccuracyPercent}%</div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Edge NPU Latency:</span><strong className="font-bold">28ms TTFT (Apple M4)</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Edge Deployment Ready</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Energy Consumption: <strong className="text-slate-200">-93.4% vs Server Baseline</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>AWQ Quantization: <strong className="text-emerald-400">CERTIFIED LOSSLESS</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span>
          <span>Step {currentStep + 1} of {stages.length}</span>
        </div>
      </div>
    </div>
  );
};
