import React, { useState } from 'react';
import type { FaqFlowItem } from '../../../types/enterpriseArchetypes';
import { ChevronDown, ChevronUp, Code2, HelpCircle } from 'lucide-react';

interface FaqFlowAccordionItemProps {
  item: FaqFlowItem;
}

export const FaqFlowAccordionItem: React.FC<FaqFlowAccordionItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(Boolean(item.isOpenDefault));
  const hasCode = Boolean(item.hasCodeSnippet);

  return (
    <div
      className={`rounded-2xl border transition-all overflow-hidden ${
        isOpen
          ? 'plane-2-elevated bg-slate-900/70 border-violet-500/50 shadow-violet-950/20'
          : 'plane-1-raised bg-slate-900/40 border-slate-800 hover:border-slate-700'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full p-4 flex items-center justify-between text-left gap-4 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
            <HelpCircle size={16} />
          </div>
          <div>
            {item.category && (
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-violet-400 block mb-0.5">
                {item.category}
              </span>
            )}
            <h4 className="font-ubuntu text-base font-bold text-slate-100">{item.question}</h4>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {hasCode && (
            <span className="flex items-center gap-1 text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
              <Code2 size={10} /> CLI / API
            </span>
          )}
          <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 pt-1 border-t border-slate-800/80">
          <p className="font-poppins text-sm leading-relaxed text-slate-300">{item.answer}</p>
        </div>
      )}
    </div>
  );
};
