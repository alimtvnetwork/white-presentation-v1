import React from 'react';
import type { InteractiveCodePlaygroundSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Terminal, CheckCircle2, Play } from 'lucide-react';

export const InteractiveCodePlaygroundSlide: React.FC<{ slide: InteractiveCodePlaygroundSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const isEditorActive = activeStep === 0;
  const isEditorPast = activeStep > 0;
  const editorStyle: React.CSSProperties = isEditorActive
    ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
    : isEditorPast ? { opacity: 0.75, transform: 'scale(1.0)' }
    : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };

  const isTypecheckActive = activeStep === 1;
  const isTypecheckPast = activeStep > 1;
  const typecheckStyle: React.CSSProperties = isTypecheckActive
    ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
    : isTypecheckPast ? { opacity: 0.75, transform: 'scale(1.0)' }
    : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };

  const isConsoleActive = activeStep >= 2;
  const consoleStyle: React.CSSProperties = isConsoleActive
    ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
    : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {slide.kicker || 'LIVE ARCHITECTURE COMPILER'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            Phase: {activeStep === 0 ? 'Code Ingestion' : activeStep === 1 ? 'Typecheck Gate' : 'Live Output Logs'}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >{slide.title || 'Interactive Code & Specification Sandbox'}</h1>
      </div>

      <div className="z-10 grid grid-cols-12 gap-8 my-auto items-stretch">
        <div style={editorStyle} className={`col-span-7 rounded-2xl border p-5 transition-all duration-300 ${isEditorActive ? 'bg-slate-950/90 border-emerald-500 ring-2 ring-emerald-500/40 shadow-2xl' : 'bg-slate-950/60 border-slate-800'}`}>
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 font-mono text-xs text-slate-400">
            <span className="flex items-center gap-2 text-emerald-400"><Terminal size={14} /> {slide.filename || 'slide.config.ts'}</span>
            <span>TypeScript / Strict</span>
          </div>
          <pre className="font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto">{slide.initialCode}</pre>
        </div>

        <div className="col-span-5 flex flex-col gap-4">
          <div style={typecheckStyle} className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${isTypecheckActive ? 'bg-blue-500/15 border-blue-500 ring-2 ring-blue-500/40 shadow-xl' : 'bg-slate-900/40 border-slate-800'}`}>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-200"><CheckCircle2 size={16} className="text-blue-400" /><span>Static Typecheck Gate: 0 Errors</span></div>
            <span className="font-mono text-[10px] text-blue-400 uppercase bg-blue-500/10 px-2 py-0.5 rounded">PASS</span>
          </div>

          <div style={consoleStyle} className={`flex-1 rounded-xl border p-4 font-mono text-xs transition-all duration-300 ${isConsoleActive ? 'bg-slate-950 border-emerald-500 ring-2 ring-emerald-500/40 shadow-xl' : 'bg-slate-950/50 border-slate-800'}`}>
            <div className="flex items-center gap-2 text-slate-400 border-b border-slate-800 pb-2 mb-3"><Play size={12} className="text-emerald-400" /><span>Execution Output & Telemetry</span></div>
            <pre className="text-emerald-400/90 whitespace-pre-wrap leading-relaxed">{slide.executionOutput || '[OK] Sovereign pipeline compiled in 8.4ms.'}</pre>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-emerald-400 font-bold"><Terminal size={14} /> Kinetic Compiler Progression: Editor (0) → Typecheck (1) → Console (2)</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Interactive Developer Mode</span>
      </div>
    </div>
  );
};
