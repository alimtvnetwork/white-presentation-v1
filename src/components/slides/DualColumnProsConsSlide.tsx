import React from 'react';
import type { DualColumnProsConsSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { CheckCircle2, AlertTriangle, Scale } from 'lucide-react';

export const DualColumnProsConsSlide: React.FC<{ slide: DualColumnProsConsSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const pros = slide.pros || [];
  const cons = slide.cons || [];
  const maxRows = Math.max(pros.length, cons.length);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            {slide.kicker || 'ARCHITECTURAL DECISION MATRIX'}
          </span>
          <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            Evaluating Pairwise Row {Math.min(maxRows, activeStep + 1)} of {maxRows}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Architectural Trade-Off Analysis'}
        </h1>
      </div>

      <div className="z-10 grid grid-cols-2 gap-8 my-auto">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 size={16} /> {slide.prosHeader || 'Advantages'}
          </span>
          {pros.map((pro, idx) => {
            const isPast = idx < activeStep;
            const isActive = idx === activeStep;
            const style: React.CSSProperties = isActive
              ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
              : isPast
              ? { opacity: 0.75, transform: 'scale(1.0)' }
              : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };
            return (
              <div key={pro.id || idx} style={style} className={`p-4 rounded-xl border transition-all duration-300 ${isActive ? 'bg-emerald-500/10 border-emerald-500 ring-2 ring-emerald-500/40' : 'bg-slate-900/40 border-slate-800'}`}>
                <div className="font-ubuntu font-bold text-sm text-slate-100">{pro.title}</div>
                <div className="font-poppins text-xs text-slate-400 mt-1">{pro.detail}</div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <AlertTriangle size={16} /> {slide.consHeader || 'Constraints & Mitigations'}
          </span>
          {cons.map((con, idx) => {
            const isPast = idx < activeStep;
            const isActive = idx === activeStep;
            const style: React.CSSProperties = isActive
              ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
              : isPast
              ? { opacity: 0.75, transform: 'scale(1.0)' }
              : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };
            return (
              <div key={con.id || idx} style={style} className={`p-4 rounded-xl border transition-all duration-300 ${isActive ? 'bg-amber-500/10 border-amber-500 ring-2 ring-amber-500/40' : 'bg-slate-900/40 border-slate-800'}`}>
                <div className="font-ubuntu font-bold text-sm text-slate-100">{con.title}</div>
                <div className="font-poppins text-xs text-slate-400 mt-1">{con.detail}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-cyan-400 font-bold"><Scale size={14} /> Kinetic Pairwise Highlight Matrix Active</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>{slide.recommendationSummary || 'Recommended: Proceed'}</span>
      </div>
    </div>
  );
};
