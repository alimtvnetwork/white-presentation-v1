import React from 'react';
import type { CustomerJourneyStage } from '../../../../types/modern/boardroomStrategyTypes';
import { ArrowRight, CheckCircle2, XCircle, Zap } from 'lucide-react';

interface JourneyPhaseSplitProps {
  stage: CustomerJourneyStage;
  onClick?: () => void;
}

export const JourneyPhaseSplit: React.FC<JourneyPhaseSplitProps> = ({ stage, onClick }) => (
  <div
    onClick={onClick}
    className="plane-1-raised p-6 rounded-2xl flex flex-col justify-between border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
  >
    <div>
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <h3 className="text-lg font-ubuntu font-bold text-slate-100">{stage.stageName}</h3>
        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/20">
          {stage.timeToCompleteDelta}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-4 text-xs font-mono text-slate-400">
        <Zap size={12} className="text-emerald-400" />
        <span>Uplift: +{stage.satisfactionUpliftPercentage}% CSAT</span>
      </div>

      <div className="p-3 rounded-xl bg-red-950/20 border border-red-900/30 mb-3">
        <div className="text-xs uppercase text-red-400 font-mono font-bold tracking-wider mb-1.5 flex items-center gap-1">
          <XCircle size={12} /> Legacy Friction
        </div>
        <div className="space-y-1">
          {stage.legacyPainPoints.map((pain, idx) => (
            <div key={idx} className="text-xs text-red-300/80 font-mono">
              • {pain}
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/30 mb-2">
        <div className="text-xs uppercase text-emerald-400 font-mono font-bold tracking-wider mb-1.5 flex items-center gap-1">
          <CheckCircle2 size={12} /> Autonomous Experience
        </div>
        <div className="space-y-1">
          {stage.modernSovereignExperience.map((exp, idx) => (
            <div key={idx} className="text-xs text-emerald-300 font-mono flex items-center gap-1.5">
              <ArrowRight size={10} className="text-emerald-400 shrink-0" />
              <span>{exp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
      {stage.isFrictionEliminated ? (
        <span className="text-emerald-400 font-semibold">Zero Friction</span>
      ) : null}
      {stage.hasAutonomousSupport ? (
        <span className="text-cyan-300 font-semibold ml-auto">Autonomous Support</span>
      ) : null}
    </div>
  </div>
);
