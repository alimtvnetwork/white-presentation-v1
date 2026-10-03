import React from 'react';
import type { ThreatVectorCard } from '../../../../types/modern/boardroomStrategyTypes';
import { ShieldAlert, Zap, CheckCircle2, RotateCcw } from 'lucide-react';

interface ThreatActorRowProps {
  vector: ThreatVectorCard;
  onClick?: () => void;
}

export const ThreatActorRow: React.FC<ThreatActorRowProps> = ({ vector, onClick }) => (
  <div
    onClick={onClick}
    className="plane-1-raised p-6 rounded-2xl flex flex-col justify-between border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 cursor-pointer"
  >
    <div>
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-red-500/10 text-red-400 border border-red-500/20">
          MITRE {vector.mitreAttackId}
        </span>
        {vector.hasAutomatedRollback ? (
          <span className="font-mono text-xs text-emerald-400 flex items-center gap-1 font-bold">
            <RotateCcw size={11} /> Auto Rollback
          </span>
        ) : null}
      </div>

      <h3 className="text-lg font-ubuntu font-bold text-slate-100 mb-1">{vector.threatName}</h3>
      <p className="text-xs text-slate-400 font-mono mb-3">{vector.hostileVectorDescription}</p>

      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-3">
        <div className="text-xs text-slate-400 font-mono flex items-center gap-1 mb-1">
          <Zap size={12} className="text-yellow-400" /> Defense Engine:
        </div>
        <div className="text-xs font-ubuntu font-bold text-slate-200">{vector.autonomousDefenseMechanism}</div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <div className="text-xs text-slate-400 font-mono">Contain Time</div>
          <div className="text-sm font-ubuntu font-black text-emerald-400">{vector.meanTimeToContainSeconds} s</div>
        </div>
        <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <div className="text-xs text-slate-400 font-mono">Confidence</div>
          <div className="text-sm font-ubuntu font-black text-purple-400">{vector.mitigationConfidencePercentage}%</div>
        </div>
      </div>
    </div>

    <div>
      <div className="text-xs uppercase text-slate-400 font-mono font-bold tracking-wider mb-1.5">
        Countermeasures
      </div>
      <div className="space-y-1">
        {vector.countermeasures.map((cm, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
            <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
            <span>{cm}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
