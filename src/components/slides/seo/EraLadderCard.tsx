import React from 'react';
import type { SeoEraItem } from '../../../types/extendedArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Target } from 'lucide-react';

interface EraLadderCardProps {
  era: SeoEraItem;
  isActive: boolean;
  isPast: boolean;
  isFuture: boolean;
}

export const EraLadderCard: React.FC<EraLadderCardProps> = ({
  era,
  isActive,
  isPast,
  isFuture,
}) => {
  const isCurrent = isBooleanTrue(era.isCurrentEra);

  return (
    <div
      style={{
        backgroundColor: isActive ? 'var(--pres-card-bg, rgba(255, 255, 255, 0.08))' : 'var(--pres-card-bg, rgba(255, 255, 255, 0.04))',
        borderColor: isActive ? 'var(--pres-accent)' : 'var(--pres-card-border, rgba(255, 255, 255, 0.1))',
        opacity: isFuture ? 0.4 : isPast ? 0.75 : 1,
        filter: isFuture ? 'blur(1.25px)' : 'none',
        boxShadow: isActive ? '0 0 24px -2px var(--pres-accent)' : 'none',
        transform: isActive ? 'scale(1.02)' : 'none',
      }}
      className="p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            {era.yearRange}
          </span>
          {isCurrent && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              CURRENT ERA
            </span>
          )}
        </div>

        <h3 className="font-ubuntu text-lg font-bold mb-1" style={{ color: 'var(--pres-text)' }}>
          {era.eraName}
        </h3>

        <div className="flex items-center gap-1.5 text-xs font-mono text-violet-300 mb-3">
          <Target size={12} className="shrink-0" />
          <span className="truncate">{era.primaryRankingSignal}</span>
        </div>

        <p className="text-xs font-poppins leading-relaxed mb-4" style={{ color: 'var(--pres-text-muted)' }}>
          {era.tacticsSummary}
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center text-[11px] font-mono mb-1.5" style={{ color: 'var(--pres-text-muted)' }}>
          <span>Algorithmic Difficulty</span>
          <span className="font-bold text-slate-200">{era.difficultyScorePct}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-black/30 overflow-hidden">
          <div
            style={{ width: `${era.difficultyScorePct}%` }}
            className={`h-full rounded-full transition-all duration-500 ${
              era.difficultyScorePct > 80 ? 'bg-rose-500' : era.difficultyScorePct > 50 ? 'bg-amber-400' : 'bg-emerald-400'
            }`}
          />
        </div>
      </div>
    </div>
  );
};
