import React from 'react';
import { CheckCircle, AlertCircle, ArrowUpRight } from 'lucide-react';
import type { OkrKeyResultItem } from '../../../types/globalPptArchetypes';
import { OkrInitiativeRow } from './OkrInitiativeRow';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface OkrKeyResultCardProps {
  keyResult: OkrKeyResultItem;
}

export const OkrKeyResultCard: React.FC<OkrKeyResultCardProps> = ({ keyResult }) => {
  const isOnTrack = isBooleanTrue(keyResult.isOnTrack);
  const isVerified = isBooleanTrue(keyResult.isVerified);
  const initiatives = keyResult.initiatives || [];

  return (
    <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/50 flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-bold border border-cyan-500/20">
            {keyResult.krCode}
          </span>
          <span className="font-mono text-xs text-slate-300">
            Target: <strong className="text-white">{keyResult.targetMetric}</strong> (Current: <strong className="text-cyan-400">{keyResult.currentMetric}</strong>)
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          {isOnTrack ? (
            <span className="text-emerald-400 flex items-center gap-1 font-semibold text-[11px]">
              <CheckCircle size={12} /> On Track
            </span>
          ) : (
            <span className="text-rose-400 flex items-center gap-1 font-semibold text-[11px]">
              <AlertCircle size={12} /> At Risk
            </span>
          )}
          {isVerified && (
            <span className="text-cyan-400 font-semibold text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
              Verified
            </span>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-[11px] font-mono text-slate-400">
          <span>{keyResult.unit} Delivery Progress</span>
          <span className="text-slate-200 font-bold">{keyResult.progressPercent}%</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
            style={{ width: `${Math.min(100, Math.max(0, keyResult.progressPercent))}%` }}
          />
        </div>
      </div>

      {initiatives.length > 0 && (
        <div className="flex flex-col gap-1.5 mt-1 pt-2 border-t border-slate-800/80">
          <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1">
            <ArrowUpRight size={10} /> Associated Initiatives ({initiatives.length})
          </div>
          {initiatives.map((init) => (
            <OkrInitiativeRow key={init.id} initiative={init} />
          ))}
        </div>
      )}
    </div>
  );
};
