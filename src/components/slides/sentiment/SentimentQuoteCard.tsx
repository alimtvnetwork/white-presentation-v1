import React from 'react';
import { Quote, ShieldCheck, Building } from 'lucide-react';
import type { CustomerVerbatimQuoteItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface SentimentQuoteCardProps {
  quote: CustomerVerbatimQuoteItem;
}

export const SentimentQuoteCard: React.FC<SentimentQuoteCardProps> = ({ quote }) => {
  const isEnterpriseTier = isBooleanTrue(quote.isEnterpriseTier);
  const isVerifiedCustomer = isBooleanTrue(quote.isVerifiedCustomer);

  return (
    <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between gap-2">
      <div className="flex items-start gap-2.5">
        <Quote size={18} className="text-cyan-400 shrink-0 mt-0.5" />
        <p className="font-poppins text-xs text-slate-200 leading-relaxed italic">
          "{quote.quoteText}"
        </p>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 font-mono text-[11px]">
        <div>
          <strong className="text-white font-ubuntu">{quote.authorName}</strong>
          <span className="text-slate-400 ml-1.5">• {quote.authorRole}</span>
          <div className="text-cyan-300 text-[10px] flex items-center gap-1 mt-0.5">
            <Building size={10} /> {quote.companyName}
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {isEnterpriseTier && (
            <span className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300 text-[10px] border border-purple-500/20">
              Enterprise
            </span>
          )}
          {isVerifiedCustomer && (
            <span className="text-emerald-400 text-[10px] flex items-center gap-0.5">
              <ShieldCheck size={11} /> Verified
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
