import React from 'react';
import type { LiquidationWaterfallTierItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { TrendingUp, CheckCircle, BarChart3 } from 'lucide-react';

interface LiquidationWaterfallChartProps {
  waterfallTiers: LiquidationWaterfallTierItem[];
}

export const LiquidationWaterfallChart: React.FC<LiquidationWaterfallChartProps> = ({
  waterfallTiers,
}) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <BarChart3 size={14} className="text-cyan-400" />
          Exit Valuation Waterfall Model
        </span>
        <span className="text-slate-400">{waterfallTiers.length} Scenarios Modeled</span>
      </div>

      <div className="space-y-3 overflow-y-auto flex-1 pr-1">
        {waterfallTiers.map((tier) => {
          const isDiluted = isBooleanTrue(tier.isFullyDiluted);
          const exitM = (tier.exitValuationUsd / 1_000_000).toFixed(0);
          const proceedsM = (tier.proceedsUsd / 1_000_000).toFixed(0);
          const proceedsRatio = Math.min(100, Math.round((tier.proceedsUsd / tier.exitValuationUsd) * 100));

          return (
            <div
              key={tier.id}
              className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    #{tier.payoutRank}
                  </span>
                  <span className="font-bold text-slate-100 text-sm">
                    Exit: ${exitM}M USD
                  </span>
                </div>
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded border flex items-center gap-1 ${
                    isDiluted
                      ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  <CheckCircle size={10} />
                  {isDiluted ? 'FULLY DILUTED' : 'UNDILUTED'}
                </span>
              </div>

              <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden">
                <div
                  style={{ width: `${proceedsRatio}%` }}
                  className="bg-cyan-400 h-full rounded-full"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Distributable Proceeds: <strong className="text-emerald-400 font-bold">${proceedsM}M</strong></span>
                <span>Proceeds Share: <strong className="text-cyan-300 font-bold">{proceedsRatio}%</strong></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
