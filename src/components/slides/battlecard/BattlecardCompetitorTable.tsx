import React from 'react';
import { CheckCircle2, ShieldAlert, Award } from 'lucide-react';
import type { CompetitorParityItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface BattlecardCompetitorTableProps {
  competitors: CompetitorParityItem[];
}

export const BattlecardCompetitorTable: React.FC<BattlecardCompetitorTableProps> = ({
  competitors,
}) => (
  <div className="space-y-2 font-mono text-xs">
    {competitors.map((comp) => {
      const hasAdvantage = isBooleanTrue(comp.hasCompetitiveAdvantage);

      return (
        <div key={comp.id} className="p-3 rounded-lg border border-slate-800 bg-slate-900/50 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-ubuntu text-white font-bold text-sm">
                {comp.competitorName}
              </span>
              <span className="text-slate-400 text-[11px]">
                (Share: {comp.marketSharePercent}%)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-300">
                Parity: <strong className="text-rose-400">{comp.parityScorePercent}%</strong>
              </span>
              {hasAdvantage && (
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 text-[10px] border border-emerald-500/20 flex items-center gap-1 font-bold">
                  <Award size={10} /> CLEAR ADVANTAGE
                </span>
              )}
            </div>
          </div>

          <div className="p-2 rounded bg-slate-950/60 border border-slate-800/80 text-[11px] text-slate-300 font-poppins">
            <span className="font-mono text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-wider block font-semibold mb-0.5">
              Identified Competitor Vulnerability:
            </span>
            {comp.weaknessSummary}
          </div>
        </div>
      );
    })}
  </div>
);
