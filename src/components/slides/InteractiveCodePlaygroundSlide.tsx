import React from 'react';
import type { InteractiveCodePlaygroundSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { CodePlaygroundOutputPane } from './code/CodePlaygroundOutputPane';
import { Code2, FileCode, Cpu } from 'lucide-react';

export const InteractiveCodePlaygroundSlide: React.FC<{ slide: InteractiveCodePlaygroundSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const codeLines = (slide.initialCode || '').split('\n');

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            {slide.kicker || 'SOURCE CODE EXECUTION'}
          </span>
          <span className="font-mono text-xs text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1.5">
            <FileCode size={12} /> {slide.filename || 'slide.config.ts'} • {slide.language || 'typescript'}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Interactive Declarative Slide Specification'}
        </h1>
        {slide.subtitle && (
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm mt-2">
            {slide.subtitle}
          </p>
        )}
      </div>

      <div className="z-10 my-auto grid grid-cols-12 gap-6 w-full h-[620px]">
        <div className="col-span-7 plane-2-elevated rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden flex flex-col h-full">
          <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Code2 size={14} className="text-cyan-400" />
              <span>{slide.filename || 'slide.config.ts'}</span>
            </div>
            <span className="text-[10px] text-slate-500">Live Editor</span>
          </div>
          <div className="p-4 font-mono text-xs leading-relaxed text-slate-200 flex-1 overflow-auto bg-black/30 flex">
            <div className="pr-4 border-r border-slate-800 select-none text-slate-600 text-right space-y-1">
              {codeLines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <pre className="pl-4 whitespace-pre-wrap font-mono text-xs text-cyan-200 space-y-1 flex-1">
              {slide.initialCode}
            </pre>
          </div>
        </div>

        <div className="col-span-5 h-full">
          <CodePlaygroundOutputPane output={slide.executionOutput} isExecutable={slide.isExecutable} />
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-cyan-400 font-bold">
          <Cpu size={14} /> Deterministic Pure DOM Compilation Verified Under 10ms
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Interactive Code Playground & Live Console</span>
      </div>
    </div>
  );
};
