import React from 'react';
import type { ProConItem } from '../../../types/enterpriseArchetypes';
import { CheckCircle2, AlertCircle, Sparkles, Wrench } from 'lucide-react';

interface ProConItemRowProps {
  item: ProConItem;
  isPro: boolean;
}

export const ProConItemRow: React.FC<ProConItemRowProps> = ({ item, isPro }) => {
  const hasHighImpact = Boolean(item.hasHighImpact);
  const hasWorkaround = Boolean(item.hasWorkaround);

  return (
    <div
      className={`p-4 rounded-2xl border transition-all ${
        isPro
          ? 'plane-1-raised bg-emerald-500/5 border-emerald-500/30'
          : 'plane-1-raised bg-amber-500/5 border-amber-500/30'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
            isPro ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
          }`}
        >
          {isPro ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-1 gap-2">
            <h4 className="font-ubuntu text-sm font-bold text-slate-100">{item.title}</h4>
            <div className="flex items-center gap-1.5 shrink-0">
              {hasHighImpact && (
                <span className="flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border bg-violet-500/20 text-violet-300 border-violet-500/30">
                  <Sparkles size={10} /> High Impact
                </span>
              )}
              {hasWorkaround && (
                <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full border bg-slate-800 text-slate-300 border-slate-700">
                  <Wrench size={10} /> Mitigated
                </span>
              )}
            </div>
          </div>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-xs leading-relaxed">
            {item.detail}
          </p>
        </div>
      </div>
    </div>
  );
};
