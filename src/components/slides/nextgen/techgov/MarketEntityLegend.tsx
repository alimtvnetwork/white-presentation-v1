import React from 'react';
import { ShieldCheck, Crosshair } from 'lucide-react';
import type { MarketEntity } from '../../../../types/nextgen/deepTechGovernanceTypes';

interface MarketEntityLegendProps {
  entities: MarketEntity[];
}

export const MarketEntityLegend: React.FC<MarketEntityLegendProps> = ({ entities }) => (
  <div className="flex flex-col justify-between gap-4 h-full">
    {entities.map((entity) => {
      const isSovereign = entity.isSovereignPlatform;
      return (
        <div
          key={entity.id}
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between flex-1 transition-all duration-300 ${
            isSovereign ? 'ring-2 ring-violet-500/50' : ''
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span
                className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                  isSovereign
                    ? 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20'
                    : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-black/10 dark:border-white/10'
                }`}
              >
                {isSovereign ? 'SOVEREIGN PLATFORM' : 'COMPETITOR BENCHMARK'}
              </span>
              <span className="font-mono text-xs text-slate-500">
                Share: {entity.marketSharePercent}%
              </span>
            </div>

            <h3 className="text-lg font-ubuntu font-bold text-slate-900 dark:text-slate-100 mb-1 leading-snug flex items-center gap-2">
              {isSovereign && <ShieldCheck size={16} className="text-violet-600 dark:text-violet-400" />}
              {entity.entityName}
            </h3>
          </div>

          <div className="pt-3 border-t border-black/10 dark:border-white/10 grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
                Velocity Score
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1">
                <Crosshair size={12} className="text-violet-600 dark:text-violet-400" />
                {entity.xScorePercent}/100
              </span>
            </div>
            <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
                Governance
              </span>
              <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                <ShieldCheck size={12} />
                {entity.yScorePercent}/100
              </span>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);
