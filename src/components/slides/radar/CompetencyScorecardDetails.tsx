import React from 'react';
import type { CompetencyAxisItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { CheckCircle2, TrendingUp, Sparkles, UserCheck } from 'lucide-react';

interface CompetencyScorecardDetailsProps {
  axes: CompetencyAxisItem[];
  hasPromotionalRecommendation: boolean;
  evaluatorName: string;
  evaluatorRole: string;
}

export const CompetencyScorecardDetails: React.FC<CompetencyScorecardDetailsProps> = ({
  axes,
  hasPromotionalRecommendation,
  evaluatorName,
  evaluatorRole,
}) => {
  const isRecommended = isBooleanTrue(hasPromotionalRecommendation);

  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <TrendingUp size={14} className="text-purple-400" />
          Capability Dimension Rubrics
        </span>
        <span
          className={`text-[9px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-1 ${
            isRecommended
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
              : 'bg-slate-800 text-slate-400 border-slate-700'
          }`}
        >
          <Sparkles size={10} />
          {isRecommended ? 'PROMOTIONAL SIGN-OFF' : 'IN REVIEW'}
        </span>
      </div>

      <div className="space-y-2.5 overflow-y-auto flex-1 pr-1">
        {axes.map((ax) => {
          const isMet = isBooleanTrue(ax.isBenchmarkMet);

          return (
            <div
              key={ax.id}
              className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-100">{ax.axisName}</span>
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded border flex items-center gap-1 ${
                    isMet
                      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                      : 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30'
                  }`}
                >
                  <CheckCircle2 size={10} />
                  {isMet ? 'EXCEEDED' : 'PROGRESSING'}
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Required: <strong className="text-slate-300">{ax.requiredScorePercent}%</strong></span>
                <span>Evaluated: <strong className="text-purple-300 font-bold">{ax.evaluatedScorePercent}%</strong></span>
              </div>

              <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                <div
                  style={{ width: `${Math.min(100, ax.evaluatedScorePercent)}%` }}
                  className="bg-purple-400 h-full rounded-full"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <UserCheck size={12} className="text-purple-400" />
          Evaluator: <strong className="text-slate-200">{evaluatorName}</strong> ({evaluatorRole})
        </span>
        <span className="text-emerald-400 font-bold">100% Verified</span>
      </div>
    </div>
  );
};
