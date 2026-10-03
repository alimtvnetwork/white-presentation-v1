import React from 'react';
import type { CodeWalkthroughSyntaxLensSlideData } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Code, GitCommit, ShieldCheck, Terminal } from 'lucide-react';

export const CodeWalkthroughSyntaxLensSlide: React.FC<{ slide: CodeWalkthroughSyntaxLensSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const stages = slide.walkthroughStages || [];
  const lines = slide.codeLines || [];
  const currentStep = Math.min(activeStep, Math.max(0, stages.length - 1));
  const activeStage = stages[currentStep];
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'DEEP ARCHITECTURE & RUNTIME ENGINE'}</span>
          <h1
            className="font-ubuntu text-4xl font-black text-white tracking-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title || 'Code-Walkthrough Syntax Lens: Lock-Free State Machine in Go'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Stepwise line-by-line inspection of high-performance atomic consensus execution.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-cyan-300 font-bold">
            <Code size={14} className="text-cyan-400" /> {slide.sourceFilename || 'pkg/consensus/engine.go'}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-emerald-300 font-bold">
            <GitCommit size={14} className="text-emerald-400" /> {slide.gitCommitHash || 'git-0x8f2a1b9'}
          </span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-4 p-3 bg-slate-950/60 border border-slate-800/80 rounded-2xl font-mono text-xs">
        {stages.map((st, idx) => (
          <div key={st.stepIndex || idx} className={`p-3 rounded-xl border transition-all ${idx === currentStep ? 'bg-cyan-950/40 border-cyan-400/80 shadow-lg' : 'bg-slate-900/40 border-slate-800/60 opacity-70'}`}>
            <span className="text-[11px] font-bold text-slate-400 block mb-1">STEP 0{st.stepIndex}</span>
            <h4 className="font-ubuntu text-sm font-bold text-white truncate">{st.stageName}</h4>
          </div>
        ))}
      </div>

      <div className="z-10 grid grid-cols-12 gap-6 my-auto h-[460px]">
        <div className="col-span-7 p-4 bg-slate-950/80 rounded-2xl border border-slate-800 overflow-hidden flex flex-col">
          <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-800/80 font-mono text-xs text-slate-400">
            <Terminal size={14} className="text-cyan-400" />
            <span>{slide.sourceFilename || 'pkg/consensus/engine.go'}</span>
          </div>
          <div className="font-mono text-xs divide-y divide-slate-900 flex-1 overflow-y-auto">
            {lines.map((ln) => {
              const isFocal = activeStage ? (ln.lineNumber >= activeStage.focusLineStart && ln.lineNumber <= activeStage.focusLineEnd) : false;
              return (
                <div key={ln.lineNumber} className={`flex items-center gap-4 py-1 px-2.5 transition-colors ${isFocal ? 'bg-cyan-950/50 border-l-2 border-cyan-400 text-cyan-200' : 'text-slate-400'}`}>
                  <span className="w-6 text-slate-600 text-right select-none">{ln.lineNumber}</span>
                  <pre className="font-mono text-xs m-0 whitespace-pre">{ln.codeContent}</pre>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-5 p-6 bg-slate-950/80 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-2">SYNTAX LENS EXPLANATION</span>
            <h3 className="font-ubuntu text-xl font-bold text-white mb-3">{activeStage?.explanationTitle || 'Atomic Execution'}</h3>
            <p className="font-poppins text-sm text-slate-300 leading-relaxed mb-4">{activeStage?.explanationProse}</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs flex items-center justify-between">
            <span className="text-slate-400">Algorithmic Complexity:</span>
            <span className="text-emerald-400 font-bold">{activeStage?.algorithmicComplexity || 'O(1) Lock-Free'}</span>
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Interactive Lens Glow Active | High-Precision Typographic DOM Verified</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
