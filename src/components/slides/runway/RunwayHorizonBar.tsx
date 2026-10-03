import React from 'react';
import type { RunwayMonthData } from '../../../types/kineticSuiteArchetypes';

export interface RunwayHorizonBarProps {
  month: RunwayMonthData;
  maxReserves: number;
  hasHighlight?: boolean;
}

export const RunwayHorizonBar: React.FC<RunwayHorizonBarProps> = ({
  month,
  maxReserves,
}) => {
  const isBreakeven = month.isBreakevenMonth;
  const reserveRatio = Math.max(0.1, Math.min(1.0, month.cashReservesUsd / (maxReserves || 10000000)));
  const barHeightPercent = Math.round(reserveRatio * 100);

  return (
    <div className="flex-1 flex flex-col items-center justify-end h-full font-mono text-xs">
      <div className="flex flex-col items-center mb-2 text-[10px]">
        {isBreakeven && (
          <span className="mb-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase">
            Breakeven
          </span>
        )}
        <span className="font-bold text-slate-200">
          ${(month.cashReservesUsd / 1000000).toFixed(1)}M
        </span>
      </div>

      <div className="w-full flex-1 flex items-end justify-center px-1">
        <div
          style={{ height: `${barHeightPercent}%` }}
          className={`w-full rounded-t-lg transition-all duration-300 ${
            isBreakeven
              ? 'bg-gradient-to-t from-emerald-500/60 to-emerald-400 border-t-2 border-emerald-300 ring-2 ring-emerald-500/30'
              : 'bg-gradient-to-t from-emerald-500/30 to-emerald-500/70 border-t border-emerald-400/40'
          }`}
        />
      </div>

      <div className="w-full border-t border-slate-700/80 pt-2 mt-1 flex flex-col items-center gap-0.5">
        <span className="font-bold text-slate-300 text-[11px]">{month.monthLabel}</span>
        <span className="text-[9px] text-rose-400">
          -${Math.round(month.netBurnUsd / 1000)}k
        </span>
        <span className="text-[9px] text-emerald-400">
          +${Math.round(month.monthlyRevenueUsd / 1000)}k
        </span>
      </div>
    </div>
  );
};
