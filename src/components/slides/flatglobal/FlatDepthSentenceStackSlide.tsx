import React from 'react';
import type { FlatDepthSentenceStackSlideData } from '../../../types/flatGlobalSuiteTypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { DepthSentenceCard } from './DepthSentenceCard';
import { Layers, Bookmark, CheckCircle } from 'lucide-react';

export const FlatDepthSentenceStackSlide: React.FC<{
  slide: FlatDepthSentenceStackSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const cards = slide.sentenceCards || slide.cards || [];
  const currentStep = Math.min(activeStep, Math.max(0, cards.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-900 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <Layers size={13} /> {slide.kicker || 'ENGINEERING MANIFESTO'}
            </span>
            <span className="font-mono text-xs text-amber-900 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 flex items-center gap-1">
              <Bookmark size={11} /> 3D Receding Perspective Active
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

      <div
        style={{ perspective: '1200px' }}
        className="relative z-10 my-auto h-[480px] w-full"
      >
        {cards.map((card, idx) => (
          <DepthSentenceCard
            key={card.id || idx}
            card={card}
            index={idx}
            activeStep={currentStep}
          />
        ))}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="text-amber-900 dark:text-amber-300 font-bold flex items-center gap-1.5">
            <CheckCircle size={14} /> Tenet Depth:
          </span>
          <span>Layer: <strong className="text-cyan-400">{currentStep + 1}</strong> of {cards.length} Statements</span>
          <span>Signoff: <strong className="text-emerald-400">{cards[currentStep]?.authorSignature}</strong></span>
        </div>
        <span className="text-slate-400 text-xs">Step Progression: Space / Arrow to Shift Depth Focus</span>
      </div>
    </div>
  );
};
