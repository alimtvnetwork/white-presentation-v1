// lint-allow: file-size reason="RagNeedleHaystackSlide kinetic 4-step orchestration" max=120
import React from 'react';
import type { RagNeedleHaystackSlideData } from '../../../types/kineticRevolutionArchetypes';
import { createRagNeedleHaystackSlide } from '../../../utils/kineticRevolutionFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Search, CheckCircle2, ShieldCheck, Flame, Compass } from 'lucide-react';

const STAGES = [
  { index: 0, title: 'Context Hydration', desc: '8K to 128K boundary baseline' },
  { index: 1, title: 'Deep Needle Injection', desc: '0% to 100% depth placement' },
  { index: 2, title: 'Cross-Attention Probe', desc: 'Multi-head semantic retrieval' },
  { index: 3, title: 'Recall Convergence', desc: '99.4% recall across 2M tokens' },
];

export const RagNeedleHaystackSlide: React.FC<{ slide?: RagNeedleHaystackSlideData; data?: RagNeedleHaystackSlideData }> = ({ slide, data: pData }) => {
  const fallback = createRagNeedleHaystackSlide('default-rag-needle');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), STAGES.length - 1);
  const models = data.models?.length ? data.models : fallback.models;
  const matrix = data.matrixResults?.length ? data.matrixResults : fallback.matrixResults;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Search size={15} className="text-violet-500" />
              {data.kicker || 'ATTENTION MECHANISM EVALUATION'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> Context Window: {data.contextWindowRange || '8K - 2,048K Tokens'}
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'RAG Needle in Haystack Benchmark: 8K to 2M Token Context Frontier'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Full-depth recall evaluation measuring attention saturation, context attenuation, and precision extraction across multi-megatoken document corpora.'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Recall Rate</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.overallRetrievalRate || '99.4%'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Max Context</span><span className="text-lg font-bold text-slate-900 dark:text-sky-400">2,048K Tokens</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Domain</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Legal & 10-K Master</span></div>
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
        <div className="col-span-5 flex flex-col justify-between gap-3">
          <div className="plane-2-elevated p-4 rounded-2xl border border-slate-700/60 flex flex-col justify-between flex-1">
            <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2"><Compass size={14} /> Needle Query Formulation</span>
            <div className="p-3 bg-black/30 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed my-2 italic">
              &quot;{data.needleQuery}&quot;
            </div>
            <div className="grid grid-cols-3 gap-2 font-mono text-[11px] pt-2 border-t border-slate-700/40">
              <div className="text-center p-2 rounded-lg bg-slate-800/40"><span className="text-slate-400 block text-[10px]">Context Span</span><span className="font-bold text-emerald-400">2M Tokens</span></div>
              <div className="text-center p-2 rounded-lg bg-slate-800/40"><span className="text-slate-400 block text-[10px]">Insertion</span><span className="font-bold text-sky-400">0% - 100%</span></div>
              <div className="text-center p-2 rounded-lg bg-slate-800/40"><span className="text-slate-400 block text-[10px]">Target Score</span><span className="font-bold text-violet-400">100.0%</span></div>
            </div>
          </div>
          <div className="plane-2-elevated p-4 rounded-2xl border border-slate-700/60 flex flex-col justify-between flex-1">
            <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">Model Accuracy Benchmark</span>
            <div className="space-y-2 my-2">
              {models.map((m) => (
                <div key={m.id} className={`p-2.5 rounded-xl border font-mono text-xs flex items-center justify-between ${m.isLeadingModel ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300' : 'bg-slate-800/30 border-slate-700 text-slate-400'}`}>
                  <span className="font-bold">{m.modelName}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-slate-400">{m.contextWindowLimit} Window</span>
                    <span className="font-bold text-sm text-slate-100">{m.averageAccuracy}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-7 plane-2-elevated p-5 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-700/40 pb-2">
            <span className="font-mono text-xs font-bold text-slate-200 flex items-center gap-2"><Flame size={14} className="text-rose-400" /> Multi-Depth Context Heatmap Matrix</span>
            <span className="font-mono text-[11px] text-emerald-400 font-bold">Green = 99%+ Accuracy Recall</span>
          </div>
          <div className="grid grid-cols-5 gap-3 my-auto">
            {matrix.slice(0, 10).map((cell) => (
              <div key={cell.id} className={`p-3 rounded-xl border text-center font-mono transition-all duration-300 ${cell.retrievalScorePercent >= 99 ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 shadow-sm' : 'bg-sky-500/10 border-sky-500/30 text-sky-300'}`}>
                <span className="text-[10px] block opacity-70">{Math.round(cell.contextLengthTokens / 1024)}K Context</span>
                <span className="text-lg font-bold my-0.5 block">{cell.retrievalScorePercent}%</span>
                <span className="text-[10px] text-slate-400">Depth {cell.depthPercent}% • {cell.latencyMs}ms</span>
              </div>
            ))}
          </div>
          <div className="p-3 bg-black/20 rounded-xl border border-slate-800/80 font-mono text-[11px] text-slate-400 flex items-center justify-between">
            <span>Verified by: <strong>Alim Ul Karim (Chief Software Engineer)</strong></span>
            <span className="text-emerald-400 font-bold">Zero context degradation across 2,048,000 token frontier</span>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Attention Saturation Defense: Verified</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Top-K Precision: <strong className="text-slate-200">Sub-18ms Latency</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Hard Negative Distractor Rejection: <span className="text-emerald-400">100.0% Perfect</span></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Active Stage: {STAGES[currentStep].title}</span>
          <span>Step {currentStep + 1} of {STAGES.length}</span>
        </div>
      </div>
    </div>
  );
};
