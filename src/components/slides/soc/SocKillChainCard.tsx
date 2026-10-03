import React from 'react';
import type { KillChainVectorItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Crosshair, ShieldCheck, AlertCircle } from 'lucide-react';

interface SocKillChainCardProps {
  attackVectors: KillChainVectorItem[];
}

export const SocKillChainCard: React.FC<SocKillChainCardProps> = ({ attackVectors }) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <Crosshair size={14} className="text-amber-600 dark:text-amber-400" />
          MITRE ATT&CK Kill Chain Vectors
        </span>
        <span className="text-slate-400">{attackVectors.length} Vectors Tracked</span>
      </div>

      <div className="space-y-3 overflow-y-auto flex-1 pr-1">
        {attackVectors.map((vec) => {
          const isMitigated = isBooleanTrue(vec.isMitigated);
          return (
            <div
              key={vec.id}
              className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-800 dark:text-amber-300 font-bold border border-amber-500/20 text-[11px]">
                    {vec.techniqueCode}
                  </span>
                  <span className="font-bold text-slate-100">{vec.techniqueName}</span>
                </div>
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded border flex items-center gap-1 ${
                    isMitigated
                      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                      : 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                  }`}
                >
                  {isMitigated ? (
                    <>
                      <ShieldCheck size={10} /> MITIGATED
                    </>
                  ) : (
                    <>
                      <AlertCircle size={10} /> UNRESOLVED
                    </>
                  )}
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
                <span>Phase: <strong className="text-slate-300">{vec.tacticPhase}</strong></span>
                <span>Source: <strong className="text-slate-300">{vec.detectionSource}</strong></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
