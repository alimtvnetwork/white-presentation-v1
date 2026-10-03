import React from 'react';
import type { ConsumerGroupLagItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Network, AlertTriangle, Clock, Check } from 'lucide-react';

interface ConsumerGroupLagCardProps {
  consumerGroups: ConsumerGroupLagItem[];
}

export const ConsumerGroupLagCard: React.FC<ConsumerGroupLagCardProps> = ({ consumerGroups }) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <Network size={14} className="text-amber-600 dark:text-amber-400" />
          Consumer Group Lag & Commit Telemetry
        </span>
        <span className="text-slate-400">{consumerGroups.length} Active Groups</span>
      </div>

      <div className="space-y-3 overflow-y-auto flex-1 pr-1">
        {consumerGroups.map((cg) => {
          const hasAlert = isBooleanTrue(cg.hasLagAlert);
          const isZeroLag = cg.lagOffsets === 0;

          return (
            <div
              key={cg.id}
              className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-100 text-[13px]">{cg.groupName}</span>
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded border flex items-center gap-1 ${
                    hasAlert
                      ? 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                      : isZeroLag
                      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                      : 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30'
                  }`}
                >
                  {hasAlert ? (
                    <>
                      <AlertTriangle size={10} /> LAG ALERT
                    </>
                  ) : (
                    <>
                      <Check size={10} /> {isZeroLag ? 'ZERO LAG' : 'STABLE'}
                    </>
                  )}
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
                <span>Topic: <strong className="text-sky-300 font-bold">{cg.targetTopic}</strong></span>
                <span>Lag: <strong className="text-slate-100 font-bold">{cg.lagOffsets} msgs</strong></span>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock size={11} className="text-amber-600 dark:text-amber-400" />
                  Commit Latency: <strong className="text-slate-200">{cg.commitLatencyMs.toFixed(1)}ms</strong>
                </span>
                <span className="text-emerald-400">P99 Committed</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
