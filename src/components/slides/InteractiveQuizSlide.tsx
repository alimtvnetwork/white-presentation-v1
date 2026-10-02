import React, { useState } from 'react';
import type { InteractiveQuizSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { HelpCircle, CheckCircle2, XCircle, Info } from 'lucide-react';

export const InteractiveQuizSlide: React.FC<{ slide: InteractiveQuizSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const options = slide.options || [];
  const [selectedId, setSelectedId] = useState<string | null>(() => options.find((o) => Boolean(o.isSelected))?.id || null);
  const [isRevealed, setIsRevealed] = useState<boolean>(() => Boolean(slide.isAnswerRevealed));

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setIsRevealed(true);
  };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
              {slide.kicker || 'DIAGNOSTIC WORKSHOP POLL'}
            </span>
            <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Question {slide.questionNumber} of {slide.totalQuestions}</span>
          </div>
          <h1
            style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
            className="font-ubuntu text-[36px] font-black tracking-tight leading-none"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {slide.title || 'Identify Your Core Architectural Bottleneck'}
          </h1>
        </div>
        <button onClick={() => setIsRevealed(!isRevealed)} className="btn-secondary-glass text-xs py-2 px-4 flex items-center gap-2">
          <HelpCircle size={14} /> {isRevealed ? 'Hide Answer' : 'Reveal Answer'}
        </button>
      </div>

      <div className="z-10 my-auto w-full">
        <div className="plane-1-raised p-6 rounded-2xl border border-violet-500/30 bg-violet-500/5 mb-6 text-center font-ubuntu text-2xl font-bold text-slate-100">
          "{slide.questionText}"
        </div>

        <div className="grid grid-cols-2 gap-5 mb-6">
          {options.map((opt) => {
            const isSel = selectedId === opt.id;
            const isCorrect = Boolean(opt.isCorrect);
            const showCorrect = isRevealed && isCorrect;
            const showWrong = isRevealed && isSel && !isCorrect;

            const borderClass = showCorrect ? 'border-emerald-500 bg-emerald-500/10' : showWrong ? 'border-rose-500 bg-rose-500/10' : isSel ? 'border-violet-500 bg-violet-500/10' : 'bg-slate-900/40 border-slate-800 hover:border-violet-500/40';
            const badgeClass = showCorrect ? 'bg-emerald-500 text-white' : showWrong ? 'bg-rose-500 text-white' : isSel ? 'bg-violet-500 text-white' : 'bg-slate-800 text-slate-300';
            return (
              <div
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`plane-2-elevated p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${borderClass}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl font-ubuntu font-bold flex items-center justify-center text-sm ${badgeClass}`}>{opt.letter}</div>
                  <span className="font-poppins text-sm text-slate-200 font-medium">{opt.text}</span>
                </div>
                {showCorrect && <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />}
                {showWrong && <XCircle size={20} className="text-rose-400 shrink-0" />}
              </div>
            );
          })}
        </div>

        {isRevealed && Boolean(slide.revealExplanation) && (
          <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-start gap-3">
            <Info size={18} className="text-violet-400 shrink-0 mt-0.5" />
            <div className="font-poppins text-xs leading-relaxed text-violet-200">
              <strong className="font-ubuntu text-slate-100 mr-1">Explanation:</strong>
              {slide.revealExplanation}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
        <span className="text-violet-400 font-bold">Interactive Audience Engagement</span>
        <span>Deterministic Diagnostic Logic</span>
      </div>
    </div>
  );
};
