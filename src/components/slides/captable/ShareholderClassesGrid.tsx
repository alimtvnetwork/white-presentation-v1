import React from 'react';
import type { ShareholderClassItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Layers, ShieldCheck, Check } from 'lucide-react';

interface ShareholderClassesGridProps {
  shareClasses: ShareholderClassItem[];
}

export const ShareholderClassesGrid: React.FC<ShareholderClassesGridProps> = ({ shareClasses }) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <Layers size={14} className="text-emerald-400" />
          Shareholder Classes & Seniority Tranches
        </span>
        <span className="text-slate-400">{shareClasses.length} Tranches Defined</span>
      </div>

      <div className="space-y-3 overflow-y-auto flex-1 pr-1">
        {shareClasses.map((item) => {
          const isPreferred = isBooleanTrue(item.isPreferredShare);
          const hasCap = isBooleanTrue(item.hasLiquidationCap);
          const sharesM = (item.shareCount / 1_000_000).toFixed(1);

          return (
            <div
              key={item.id}
              className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-100">{item.shareClassName}</span>
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${
                      isPreferred
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}
                  >
                    {isPreferred ? 'PREFERRED' : 'COMMON'}
                  </span>
                </div>
                <span className="text-emerald-400 font-bold text-sm">
                  {item.ownershipPercent.toFixed(1)}%
                </span>
              </div>

              <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden">
                <div
                  style={{ width: `${Math.min(100, item.ownershipPercent)}%` }}
                  className={`h-full rounded-full ${
                    isPreferred ? 'bg-emerald-400' : 'bg-cyan-400'
                  }`}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Shares: <strong className="text-slate-200">{sharesM}M</strong></span>
                <span>
                  Liquidation Pref: <strong className="text-slate-200">{item.liquidationPreferenceMultiple}x</strong>
                </span>
                <span className="flex items-center gap-1 text-[10px]">
                  <ShieldCheck size={11} className={hasCap ? 'text-amber-700 dark:text-amber-400' : 'text-slate-500'} />
                  {hasCap ? 'Cap Active' : 'No Cap'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
