import React from 'react';
import type { InteractiveFaqSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { FaqFlowAccordionItem } from './faq/FaqFlowAccordionItem';
import { MessageSquareCheck } from 'lucide-react';

export const InteractiveFaqFlowSlide: React.FC<{ slide: InteractiveFaqSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const categories = slide.categories || [];
  const faqItems = slide.faqItems || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'EXECUTIVE CLARITY & FAQ'}
          </span>
          <div className="flex items-center gap-1.5">
            {categories.map((cat, idx) => (
              <span key={idx} className="font-mono text-xs text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                {cat}
              </span>
            ))}
          </div>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Architectural Invariants & Key Inquiries'}
        </h1>
        {slide.subtitle && (
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm mt-2">
            {slide.subtitle}
          </p>
        )}
      </div>

      <div className="z-10 my-auto w-full max-w-5xl mx-auto space-y-3">
        {faqItems.map((item) => (
          <FaqFlowAccordionItem key={item.id} item={item} />
        ))}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-violet-400 font-bold">
          <MessageSquareCheck size={14} /> Full Technical Specification & Architecture Governance Documented
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Interactive FAQ & Invariant Verification Flow</span>
      </div>
    </div>
  );
};
