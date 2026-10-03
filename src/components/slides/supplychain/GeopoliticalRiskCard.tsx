import React from 'react';
import type { GeopoliticalRiskFactorItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Globe2, ShieldCheck, ShieldAlert } from 'lucide-react';

interface GeopoliticalRiskCardProps {
  riskFactors: GeopoliticalRiskFactorItem[];
}

export const GeopoliticalRiskCard: React.FC<GeopoliticalRiskCardProps> = ({ riskFactors }) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <Globe2 size={14} className="text-amber-600 dark:text-amber-400" />
          Geopolitical Risk Vectors & Strategic Buffers
        </span>
        <span className="text-slate-400">{riskFactors.length} Regions Monitored</span>
      </div>

      <div className="space-y-3 overflow-y-auto flex-1 pr-1">
        {riskFactors.map((rf) => {
          const isBufferActive = isBooleanTrue(rf.isMitigationBufferActive);

          return (
            <div
              key={rf.id}
              className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-100 text-[13px]">{rf.regionName}</span>
                  <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    {rf.riskCategory}
                  </span>
                </div>
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded border flex items-center gap-1 ${
                    isBufferActive
                      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                      : 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30'
                  }`}
                >
                  {isBufferActive ? (
                    <>
                      <ShieldCheck size={10} /> BUFFER ACTIVE
                    </>
                  ) : (
                    <>
                      <ShieldAlert size={10} /> BUFFER PENDING
                    </>
                  )}
                </span>
              </div>

              <p className="text-[11px] text-slate-300 leading-relaxed border-l-2 border-amber-500/40 pl-2 py-0.5">
                {rf.mitigationStrategy}
              </p>

              <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                <span>Impact Score: <strong className="text-amber-800 dark:text-amber-300 font-bold">{rf.impactScore} / 100</strong></span>
                <span className="text-emerald-400">Sovereign Compliance Verified</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
