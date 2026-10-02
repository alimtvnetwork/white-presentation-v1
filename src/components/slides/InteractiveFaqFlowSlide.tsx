import React from 'react';
import type { InteractiveFaqSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { HelpCircle, ChevronRight, MessageSquare } from 'lucide-react';

export const InteractiveFaqFlowSlide: React.FC<{ slide: InteractiveFaqSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const jumpToStep = useDeckStore((s) => s.jumpToStep);
  const faqItems = slide.faqItems || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-purple-500/10 text-purple-400 border border-purple-500/30">
            {slide.kicker || 'EXECUTIVE FAQ & DIRECT ARCHITECTURE ANSWERS'}
          </span>
          <span className="font-mono text-xs text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
            Item {Math.min(faqItems.length, activeStep + 1)} of {faqItems.length}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Frequently Addressed Architectural Inquiries'}
        </h1>
      </div>

      <div className="z-10 flex flex-col gap-4 my-auto max-w-5xl">
        {faqItems.map((item, idx) => {
          const isPast = idx < activeStep;
          const isActive = idx === activeStep;
          const itemStyle: React.CSSProperties = isActive
            ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
            : isPast
            ? { opacity: 0.75, transform: 'scale(1.0)' }
            : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };

          return (
            <div
              key={item.id || idx}
              style={itemStyle}
              onClick={() => jumpToStep(idx)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-purple-600/15 border-purple-500 ring-2 ring-purple-500/40 shadow-xl'
                  : isPast
                  ? 'bg-slate-900/60 border-purple-500/30'
                  : 'bg-slate-900/40 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-ubuntu text-lg font-bold text-slate-100 flex items-center gap-3">
                  <HelpCircle size={18} className={isActive ? 'text-purple-400' : 'text-slate-500'} />
                  {item.question}
                </span>
                <ChevronRight size={18} className={`transition-transform duration-300 ${isActive ? 'rotate-90 text-purple-400' : 'text-slate-500'}`} />
              </div>
              {isActive && (
                <div className="mt-3 pt-3 border-t border-purple-500/30 font-poppins text-sm text-slate-300 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-purple-400 font-bold">
          <MessageSquare size={14} /> Kinetic Accordion Sequencing Active
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Interactive FAQ Navigation</span>
      </div>
    </div>
  );
};
