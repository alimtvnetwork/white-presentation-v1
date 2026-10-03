import React from 'react';
import type { EsgEmissionsScopeItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { CloudRain, CheckCircle2, TrendingDown, Target } from 'lucide-react';

interface EmissionsScopesGridProps {
  scopes: EsgEmissionsScopeItem[];
}

export const EmissionsScopesGrid: React.FC<EmissionsScopesGridProps> = ({ scopes }) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <CloudRain size={14} className="text-emerald-400" />
          Greenhouse Gas Emissions (GHG Protocol Scopes 1-3)
        </span>
        <span className="text-slate-400">{scopes.length} Scopes Audited</span>
      </div>

      <div className="space-y-3 overflow-y-auto flex-1 pr-1">
        {scopes.map((sc) => {
          const isNetZero = isBooleanTrue(sc.isNetZeroAligned);

          return (
            <div
              key={sc.id}
              className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {sc.scopeTier}
                  </span>
                  <span className="font-bold text-slate-100 text-[13px]">
                    {sc.emissionsMetricTonsCo2e.toLocaleString()} tCO2e
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <TrendingDown size={12} /> -{sc.yearOverYearReductionPercent.toFixed(1)}% YoY
                  </span>
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded border flex items-center gap-1 ${
                      isNetZero
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}
                  >
                    <Target size={10} />
                    {isNetZero ? 'NET ZERO 2030' : 'ALIGNED'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1 border-t border-slate-800/60 text-[11px]">
                <span className="text-slate-400">Carbon Offset Coverage:</span>
                <div className="flex-1 bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${Math.min(100, sc.offsetPercentage)}%` }}
                    className="bg-emerald-400 h-full rounded-full"
                  />
                </div>
                <span className="text-emerald-400 font-bold">{sc.offsetPercentage.toFixed(1)}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
