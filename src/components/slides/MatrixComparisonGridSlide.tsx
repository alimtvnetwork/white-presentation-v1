import React from 'react';
import type { MatrixComparisonSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Check, X, Grid } from 'lucide-react';

export const MatrixComparisonGridSlide: React.FC<{ slide: MatrixComparisonSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const columns = slide.columns || [];
  const features = slide.features || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
            {slide.kicker || 'COMPETITIVE BENCHMARK'}
          </span>
          <span className="font-mono text-xs text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
            Feature Row {Math.min(features.length, activeStep + 1)} of {features.length} Focus
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Technical Capability Comparison Matrix'}
        </h1>
      </div>

      <div className="z-10 my-auto rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden shadow-2xl">
        <div className="grid grid-cols-12 bg-slate-950/80 p-4 border-b border-slate-800 font-mono text-xs font-bold text-slate-300">
          <div className="col-span-3">Architectural Dimension</div>
          {columns.slice(1).map((col) => (
            <div key={col.id} className="col-span-3 text-center flex items-center justify-center gap-1.5">
              <span>{col.title}</span>
              {col.badge && <span className="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-full text-[10px] border border-indigo-500/30">{col.badge}</span>}
            </div>
          ))}
        </div>

        <div className="divide-y divide-slate-800/60">
          {features.map((feat, rowIdx) => {
            const isPast = rowIdx < activeStep;
            const isActive = rowIdx === activeStep;
            const rowStyle: React.CSSProperties = isActive
              ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
              : isPast
              ? { opacity: 0.75, transform: 'scale(1.0)' }
              : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };

            return (
              <div
                key={feat.id || rowIdx}
                style={rowStyle}
                className={`grid grid-cols-12 p-4 items-center transition-all duration-300 ${isActive ? 'bg-indigo-600/15 ring-2 ring-indigo-500/50' : 'bg-transparent'}`}
              >
                <div className="col-span-3">
                  <div className="font-ubuntu text-sm font-bold text-slate-100">{feat.featureName}</div>
                  <div className="font-mono text-[10px] text-slate-400">{feat.category}</div>
                </div>
                {columns.slice(1).map((col) => {
                  const val = feat.values[col.id];
                  const isBool = typeof val === 'boolean';
                  const isValTrue = isBool && Boolean(val);
                  return (
                    <div key={col.id} className="col-span-3 text-center font-mono text-xs text-slate-200">
                      {isBool ? (isValTrue ? <Check size={16} className="text-emerald-400 mx-auto" /> : <X size={16} className="text-rose-400 mx-auto" />) : <span>{String(val)}</span>}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-indigo-400 font-bold"><Grid size={14} /> Row-by-Row Kinetic Focus Matrix</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Continuous Benchmark Evaluation</span>
      </div>
    </div>
  );
};
