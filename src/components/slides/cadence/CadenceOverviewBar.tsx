import React from 'react';
import { Clock, ShieldCheck, Zap } from 'lucide-react';

interface CadenceOverviewBarProps {
  goldenOverlapText: string;
}

export const CadenceOverviewBar: React.FC<CadenceOverviewBarProps> = ({ goldenOverlapText }) => {
  return (
    <div className="plane-1-raised px-6 py-3 rounded-2xl border border-slate-800 bg-slate-900/50 flex items-center justify-between z-10">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-amber-600 dark:text-amber-400" />
          <span className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider">
            Golden Overlap:
          </span>
          <span className="font-mono text-xs text-amber-800 dark:text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-500/20">
            {goldenOverlapText}
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-2 border-l border-slate-800 pl-6">
          <Zap size={15} className="text-emerald-400" />
          <span className="font-poppins text-xs text-slate-400">
            Sun: Architecture &amp; Init <span className="text-slate-600">|</span> Mon–Wed: Deep Focus <span className="text-slate-600">|</span> Thu: Demo &amp; Release
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ShieldCheck size={16} className="text-violet-400" />
        <span className="font-mono text-xs text-slate-300 font-semibold">
          Zero Friday Commits Enforced
        </span>
      </div>
    </div>
  );
};
