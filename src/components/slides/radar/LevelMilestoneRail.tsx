import React from 'react';
import type { EngineeringLevelMilestoneItem } from '../../../types/globalPptArchetypes';
import { resolveStepPhase, getStepPhaseStyle } from '../../../utils/stepProgression';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Award, CheckCircle2 } from 'lucide-react';

interface LevelMilestoneRailProps {
  milestones: EngineeringLevelMilestoneItem[];
  activeStep: number;
}

export const LevelMilestoneRail: React.FC<LevelMilestoneRailProps> = ({
  milestones,
  activeStep,
}) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <Award size={14} className="text-purple-400" />
          Seniority Level Progression (L4 - L8)
        </span>
        <span className="text-slate-400">Level {activeStep + 1} of {Math.max(milestones.length, 1)}</span>
      </div>

      <div className="space-y-2.5 overflow-y-auto flex-1 pr-1">
        {milestones.map((item, idx) => {
          const stepPhase = resolveStepPhase(idx, activeStep);
          const phaseStyle = getStepPhaseStyle(stepPhase, 'var(--pres-accent, #a855f7)');
          const isCurrent = stepPhase === 'active';
          const isCertified = isBooleanTrue(item.isCertifiedCompetency);

          return (
            <div
              key={item.id || idx}
              style={phaseStyle}
              className={`p-3 rounded-xl border flex flex-col gap-1.5 transition-all ${
                isCurrent
                  ? 'bg-purple-500/15 border-purple-500/60 shadow-lg'
                  : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded font-bold text-[11px] bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {item.levelCode}
                  </span>
                  <span className="font-bold text-slate-100">{item.levelTitle}</span>
                </div>
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded border flex items-center gap-1 ${
                    isCertified
                      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  <CheckCircle2 size={10} />
                  {isCertified ? 'CERTIFIED' : 'TARGET'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                {item.scopeSummary}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
