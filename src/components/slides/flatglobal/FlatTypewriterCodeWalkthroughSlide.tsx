import React from 'react';
import type { FlatTypewriterCodeWalkthroughSlideData } from '../../../types/flatGlobalSuiteTypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { TypewriterStanzaPane } from './TypewriterStanzaPane';
import { Terminal, Code2, ShieldCheck, CheckCircle } from 'lucide-react';

export const FlatTypewriterCodeWalkthroughSlide: React.FC<{
  slide: FlatTypewriterCodeWalkthroughSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const steps = slide.walkthroughSteps || slide.steps || [];
  const currentStep = Math.min(activeStep, Math.max(0, steps.length - 1));
  const activeStepItem = steps[currentStep];
  const highlightedLines = activeStepItem?.highlightedLineNumbers || [];
  const lines = slide.codeSnippet.split('\n');

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-900 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <Terminal size={13} /> {slide.kicker || 'SOURCE CODE INSPECTION'}
            </span>
            <span className="font-mono text-xs text-cyan-800 dark:text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 flex items-center gap-1">
              <Code2 size={11} /> {slide.codeLanguage?.toUpperCase() || 'TYPESCRIPT'}
            </span>
          </div>
          <h1
            style={{ color: 'var(--pres-text)' }}
            className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title}</h1>
          <p
            style={{ color: 'var(--pres-text-muted)' }}
            className="font-poppins text-base max-w-4xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >{slide.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 my-auto h-[500px] items-stretch">
        <div className="col-span-7 flex flex-col rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl font-mono text-xs">
          <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-slate-400 text-xs">{slide.terminalHeaderTitle}</span>
            </div>
            <span className="text-[11px] text-cyan-400">Strict TypeScript</span>
          </div>

          <div className="p-5 flex-1 overflow-auto space-y-1">
            {lines.map((line, idx) => {
              const lineNum = idx + 1;
              const isHighlighted = highlightedLines.includes(lineNum);
              return (
                <div
                  key={idx}
                  className={`flex items-center px-2 py-0.5 rounded transition-colors ${
                    isHighlighted ? 'bg-amber-500/20 text-amber-200 border-l-2 border-amber-400 font-bold' : 'text-slate-400'
                  }`}
                >
                  <span className="w-8 select-none text-slate-600 text-right mr-4">{lineNum}</span>
                  <span className="whitespace-pre flex-1">{line}</span>
                  {isHighlighted && <span className="text-amber-400 animate-pulse ml-2">▍</span>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-5 h-full">
          <TypewriterStanzaPane
            activeStepItem={activeStepItem}
            activeStep={currentStep}
            totalSteps={steps.length}
            allSteps={steps}
          />
        </div>
      </div>
    </div>
  );
};
