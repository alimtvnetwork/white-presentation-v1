import React from 'react';
import type { WaterfallBar as WaterfallBarType } from '../../../../types/nextGenArchetypes';

interface WaterfallBarProps {
  bars: WaterfallBarType[];
  currencySymbol: string;
  isDark?: boolean;
}

export const WaterfallBar: React.FC<WaterfallBarProps> = ({ bars, currencySymbol, isDark }) => {
  const maxVal = Math.max(...bars.map((b) => Math.max(Math.abs(b.runningTotalMillionUsd), Math.abs(b.amountMillionUsd))), 50);

  return (
    <div className="plane-1-raised p-6 rounded-3xl border border-slate-700/60 bg-slate-900/30 h-[460px] flex flex-col justify-between">
      <div className="grid grid-cols-5 gap-4 h-full items-end pt-10 pb-4">
        {bars.map((bar) => {
          const isNet = bar.isSubtotal;
          const barHeightPercent = Math.min(100, Math.max(12, (Math.abs(bar.amountMillionUsd) / maxVal) * 100));

          const getBarColor = () => {
            if (isNet) return 'bg-violet-600 border-violet-400';
            if (bar.isPositiveDelta) return 'bg-emerald-600/80 border-emerald-400';
            return 'bg-rose-600/80 border-rose-400';
          };

          return (
            <div key={bar.id} className="flex flex-col items-center h-full justify-end font-mono">
              <span className={`text-xs font-bold mb-1.5 ${
                bar.isPositiveDelta ? 'text-emerald-400' : isNet ? (isDark ? 'text-violet-300' : 'text-violet-800') : 'text-rose-400'
              }`}>
                {bar.amountMillionUsd > 0 ? `+${bar.amountMillionUsd}` : bar.amountMillionUsd}M
              </span>

              <div
                style={{ height: `${barHeightPercent}%` }}
                className={`w-full rounded-xl border-2 flex items-center justify-center transition-all duration-300 shadow-lg ${getBarColor()}`}
              >
                <span className="text-[11px] text-white font-bold px-1 text-center truncate">
                  {currencySymbol}{bar.runningTotalMillionUsd}M
                </span>
              </div>

              <div className="mt-3 text-center w-full">
                <span className="text-xs font-poppins font-medium text-slate-800 dark:text-slate-200 block truncate">
                  {bar.label}
                </span>
                <span className="text-[10px] text-slate-500 uppercase block">
                  {bar.category.replace(/_/g, ' ')}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
