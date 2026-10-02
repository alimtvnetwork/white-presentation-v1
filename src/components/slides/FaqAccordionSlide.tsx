import React, { useState } from 'react';
import type { FaqAccordionSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqAccordionSlide: React.FC<{ slide: FaqAccordionSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const faqs = slide.faqs || [];
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    faqs.forEach((f, idx) => {
      if (Boolean(f.isExpanded) || idx === 0) initial[f.id] = true;
    });
    return initial;
  });

  const toggle = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !Boolean(prev[id]) }));
  };

  const mid = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, mid);
  const rightFaqs = faqs.slice(mid);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'EXECUTIVE FREQUENTLY ASKED QUESTIONS'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• De-risking Enterprise Deployment</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'De-risking Enterprise Deployment'}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-8 z-10 my-auto items-start">
        {[leftFaqs, rightFaqs].map((col, colIdx) => (
          <div key={colIdx} className="space-y-4">
            {col.map((item) => {
              const isExp = Boolean(expandedIds[item.id]);
              const isHighlight = Boolean(item.isHighlighted);
              return (
                <div
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${isHighlight ? 'plane-2-elevated border-violet-500/40 bg-violet-500/10' : 'plane-1-raised bg-slate-900/40 border-slate-800'}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-violet-400 block mb-1">{item.category}</span>
                      <h3 className="font-ubuntu text-base font-bold text-slate-100">{item.question}</h3>
                    </div>
                    <div className="text-violet-400 shrink-0">
                      {isExp ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>
                  {isExp && (
                    <div className="mt-3 pt-3 border-t border-slate-800 font-poppins text-xs leading-relaxed text-slate-300">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
        <span className="flex items-center gap-2 text-violet-400 font-bold"><HelpCircle size={14} /> Clear, Binding Procurement & Technical Responses</span>
        <span>{slide.introSummary || '100% Deterministic IP & SLA Commitments'}</span>
      </div>
    </div>
  );
};
