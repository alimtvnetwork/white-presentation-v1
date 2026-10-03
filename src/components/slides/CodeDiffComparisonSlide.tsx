import React from 'react';
import type { CodeDiffComparisonSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { CodeBlockPane } from './diff/CodeBlockPane';
import { GitCompare, Sparkles, TrendingUp, Cpu } from 'lucide-react';

export const CodeDiffComparisonSlide: React.FC<{ slide: CodeDiffComparisonSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const chunks = slide.diffChunks || [];
  const currentChunkIndex = Math.min(activeStep, Math.max(0, chunks.length - 1));
  const activeChunk = chunks[currentChunkIndex] || {
    beforeLines: [],
    afterLines: [],
    chunkTitle: 'AST Value Semantics',
    chunkExplanation: 'Sovereign zero-allocation transformation',
  };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center gap-1.5">
            <GitCompare size={12} /> {slide.kicker || 'CODE ARCHITECTURE REFACTOR'}
          </span>
          <span className="font-mono text-xs text-blue-300 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
            Hunk {currentChunkIndex + 1} of {Math.max(chunks.length, 1)}: {activeChunk.chunkTitle}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Side-by-Side Code Diff & Refactoring Comparison'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || activeChunk.chunkExplanation}
        </p>
      </div>

      <div className="z-10 grid grid-cols-12 gap-6 my-auto items-stretch h-[620px]">
        <div className="col-span-5 flex flex-col">
          <CodeBlockPane
            header={slide.beforeHeader || 'LEGACY (BEFORE)'}
            lines={activeChunk.beforeLines}
            isAfterPane={false}
            isActive={false}
          />
        </div>
        <div className="col-span-5 flex flex-col">
          <CodeBlockPane
            header={slide.afterHeader || 'REFACTORED (AFTER)'}
            lines={activeChunk.afterLines}
            isAfterPane={true}
            isActive={true}
            accentColor="var(--pres-accent, #3b82f6)"
          />
        </div>
        <div className="col-span-2 flex flex-col justify-between gap-4">
          <div className="plane-1-raised p-4 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 border-b border-slate-800 pb-2">
              <TrendingUp size={14} /> Telemetry
            </div>
            {(slide.refactoringMetrics || []).map((m) => (
              <div key={m.id} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-1">
                <span className="text-[11px] font-mono text-slate-400">{m.metricLabel}</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-ubuntu font-bold text-slate-100">{m.metricValue}</span>
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${m.hasPositiveImpact ? 'text-emerald-400 bg-emerald-500/10' : 'text-amber-400 bg-amber-500/10'}`}>{m.metricDelta}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="plane-1-raised p-4 rounded-2xl border border-blue-500/30 bg-blue-500/10 flex flex-col gap-1 font-mono text-xs">
            <span className="text-blue-300 font-bold flex items-center gap-1.5"><Sparkles size={12} /> Language Gate</span>
            <span className="text-slate-300">{slide.language || 'TypeScript / Go'} Strict</span>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3.5 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-blue-400 font-bold"><Cpu size={14} /> AST Verified | Zero Escapes</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Step: {activeStep}</span>
      </div>
    </div>
  );
};
