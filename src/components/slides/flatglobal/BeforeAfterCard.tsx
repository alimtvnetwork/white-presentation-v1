import React from 'react';
import type { PanComparisonItem } from '../../../types/flatGlobalSuiteTypes';
import { ArrowUpRight, AlertCircle, CheckCircle } from 'lucide-react';

export interface BeforeAfterCardProps {
  mode: 'before' | 'after';
  headline: string;
  metricSummary: string;
  items: PanComparisonItem[];
  hasLivePanControl?: boolean;
}

export const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({
  mode,
  headline,
  metricSummary,
  items,
  hasLivePanControl = true,
}) => {
  const isAfter = mode === 'after';
  const borderTone = isAfter ? 'border-cyan-500/40' : 'border-rose-500/30';
  const badgeBg = isAfter ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' : 'bg-rose-500/10 text-rose-300 border-rose-500/30';
  const accentColor = isAfter ? 'text-cyan-400' : 'text-rose-400';

  return (
    <div className={`w-[780px] h-[720px] plane-1-raised rounded-3xl p-7 border ${borderTone} bg-slate-950/70 flex flex-col justify-between overflow-hidden shadow-2xl relative group`}>
      <div className="z-10">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${badgeBg}`}>
            {isAfter ? 'TARGET STATE: OPTIMIZED' : 'BASELINE: CURRENT PRODUCTION'}
          </span>
          <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
            {isAfter ? <CheckCircle size={14} className="text-cyan-400" /> : <AlertCircle size={14} className="text-rose-400" />}
            {isAfter ? 'Zero Lock Contention' : 'Global Lock Active'}
          </span>
        </div>
        <div className="mt-4 mb-3">
          <h2 className="font-ubuntu text-3xl font-bold text-slate-100">{headline}</h2>
          <div className={`font-mono text-sm font-semibold mt-1 ${accentColor}`}>
            {metricSummary}
          </div>
        </div>
      </div>

      <div className={`z-10 flex-1 my-3 overflow-y-auto pr-1 space-y-3.5 transition-all duration-700 ${hasLivePanControl ? 'group-hover:ba-scroll-pan-anim' : ''}`}>
        {items.map((item) => (
          <div key={item.id} className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/50 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-ubuntu text-sm font-bold text-slate-200">{item.featureTitle}</span>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 flex items-center gap-1">
                <ArrowUpRight size={12} className={accentColor} /> {item.deltaMetric}
              </span>
            </div>
            <p className="font-poppins text-xs text-slate-400 leading-relaxed">
              {isAfter ? item.afterStateText : item.beforeStateText}
            </p>
          </div>
        ))}
      </div>

      <div className="z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px] text-slate-400">
        <span>Hairline Architecture Matrix</span>
        <span>Auto-pan telemetry {hasLivePanControl ? 'enabled' : 'locked'}</span>
      </div>
    </div>
  );
};
