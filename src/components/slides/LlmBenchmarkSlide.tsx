import React from 'react';
import type { LlmBenchmarkSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ModelScorecard } from './benchmark/ModelScorecard';
import { Cpu, Zap, Activity, ShieldCheck } from 'lucide-react';

export const LlmBenchmarkSlide: React.FC<{ slide: LlmBenchmarkSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const models = slide.models || slide.modelResults || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
            <Zap size={12} /> {slide.kicker || 'AI BENCHMARK'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">
            • {slide.benchmarkDatasetName || 'Enterprise Code & Reasoning v4.2'}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Enterprise LLM Arena & Private Stream Benchmark'}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10">
        <div className="p-4 rounded-2xl bg-black/20 border border-white/5 flex items-center gap-3 font-mono">
          <Zap className="text-cyan-400 shrink-0" size={24} />
          <div>
            <div className="text-[11px]" style={{ color: 'var(--pres-text-muted)' }}>Peak Throughput</div>
            <div className="text-lg font-bold text-cyan-400">{slide.peakThroughput || '184 tok/s'}</div>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-black/20 border border-white/5 flex items-center gap-3 font-mono">
          <Activity className="text-emerald-400 shrink-0" size={24} />
          <div>
            <div className="text-[11px]" style={{ color: 'var(--pres-text-muted)' }}>Lowest Latency</div>
            <div className="text-lg font-bold text-emerald-400">{slide.lowestLatency || '85ms TTFT'}</div>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-black/20 border border-white/5 flex items-center gap-3 font-mono">
          <Cpu className="text-violet-400 shrink-0" size={24} />
          <div>
            <div className="text-[11px]" style={{ color: 'var(--pres-text-muted)' }}>Hardware Platform</div>
            <div className="text-sm font-bold text-slate-200 truncate">{slide.hardwarePlatform || '8x NVIDIA H100'}</div>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-black/20 border border-white/5 flex items-center gap-3 font-mono">
          <ShieldCheck className="text-amber-600 dark:text-amber-400 shrink-0" size={24} />
          <div>
            <div className="text-[11px]" style={{ color: 'var(--pres-text-muted)' }}>Privacy Protocol</div>
            <div className="text-sm font-bold text-amber-800 dark:text-amber-300">Zero-Data-Exfiltration</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 my-auto z-10 items-stretch">
        {models.map((model, idx) => (
          <ModelScorecard
            key={model.id || idx}
            model={model}
            isActive={idx === activeStep}
            isPast={idx < activeStep}
            isFuture={idx > activeStep}
          />
        ))}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="text-emerald-400 font-bold">FP16 Matrix Precision • Dynamic Stream Arena</span>
        <span className="opacity-80">Hardware-Grounding • Chief Software Engineer Review</span>
      </div>
    </div>
  );
};
