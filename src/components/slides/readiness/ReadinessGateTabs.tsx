import React from 'react';
import { CheckCircle, AlertOctagon, ShieldCheck } from 'lucide-react';
import type { StageGateItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface ReadinessGateTabsProps {
  stageGates: StageGateItem[];
  activeStep: number;
}

export const ReadinessGateTabs: React.FC<ReadinessGateTabsProps> = ({
  stageGates,
  activeStep,
}) => (
  <div className="grid grid-cols-5 gap-3">
    {stageGates.map((gate, idx) => {
      const isActive = idx === activeStep;
      const isPassed = isBooleanTrue(gate.isPassed);
      const isBlocked = isBooleanTrue(gate.isBlocked);

      const style = isActive
        ? 'plane-2-elevated border-emerald-500/80 bg-slate-900/90 ring-2 ring-emerald-500/30 opacity-100 shadow-xl'
        : isPassed
        ? 'plane-1-raised border-slate-700/80 bg-slate-900/60 opacity-80'
        : 'plane-1-raised border-slate-800/60 bg-slate-950/40 opacity-45';

      return (
        <div
          key={gate.id || idx}
          className={`p-3 rounded-xl border flex flex-col justify-between gap-1.5 transition-all duration-300 font-mono text-xs ${style}`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
              Gate 0{gate.gateIndex}
            </span>
            {isBlocked ? (
              <span className="text-rose-400 text-[10px] flex items-center gap-0.5 font-bold">
                <AlertOctagon size={11} /> BLOCKED
              </span>
            ) : isPassed ? (
              <span className="text-emerald-400 text-[10px] flex items-center gap-0.5 font-bold">
                <CheckCircle size={11} /> PASSED
              </span>
            ) : (
              <span className="text-slate-400 text-[10px]">PENDING</span>
            )}
          </div>

          <div className="font-ubuntu text-slate-100 font-bold text-xs truncate">
            {gate.gateName}
          </div>

          <div className="text-[10px] text-slate-400 truncate">
            Owner: <strong className="text-slate-300">{gate.gateOwner}</strong>
          </div>

          {isActive && (
            <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 pt-1 border-t border-slate-800">
              <ShieldCheck size={11} /> Active Review
            </div>
          )}
        </div>
      );
    })}
  </div>
);
