import React from 'react';
import { CheckCircle2, TrendingUp, Calendar, UserCheck } from 'lucide-react';
import type { MnaMilestoneItem } from '../../../../types/customization/enterpriseStrategyTypes';

interface MnaMilestoneCardProps {
  milestone: MnaMilestoneItem;
  index: number;
  isStepActive: boolean;
}

export const MnaMilestoneCard: React.FC<MnaMilestoneCardProps> = ({
  milestone,
  index,
  isStepActive,
}) => {
  const isHighlighted = isStepActive || milestone.isMilestoneActive;
  const isAchieved = milestone.isMilestoneAchieved;

  return (
    <div
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isHighlighted ? 'var(--pres-accent)' : 'var(--pres-border)',
      }}
      className={`plane-1-raised rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 ${
        isHighlighted ? 'ring-2 ring-emerald-500/40 shadow-xl' : 'opacity-85'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
            Phase 0{milestone.stepIndex || index + 1}
          </span>
          <span className="font-mono text-xs flex items-center gap-1" style={{ color: 'var(--pres-text-muted)' }}>
            <Calendar size={12} /> {milestone.targetTimeline}
          </span>
        </div>

        <h3 className="font-ubuntu text-lg font-bold leading-snug mb-2" style={{ color: 'var(--pres-text)' }}>
          {milestone.milestoneTitle}
        </h3>

        <div className="flex items-center gap-2 mb-4 font-mono text-xs text-sky-700 dark:text-sky-400">
          <UserCheck size={13} />
          <span>{milestone.workstreamOwner}</span>
        </div>

        <div className="space-y-1.5 mb-4">
          {(milestone.keyDeliverables || []).map((deliverable, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs" style={{ color: 'var(--pres-text-muted)' }}>
              <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
              <span className="leading-tight">{deliverable}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'var(--pres-text-muted)' }}>
            Synergy Value
          </div>
          <div className="font-mono text-base font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
            <TrendingUp size={14} /> ${milestone.financialSynergyMln}M
          </div>
        </div>

        <div className="text-right">
          <span
            className={`font-mono text-[11px] px-2.5 py-1 rounded-full border ${
              isAchieved
                ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30 font-bold'
                : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/30'
            }`}
          >
            {milestone.completionPercentage}% Complete
          </span>
        </div>
      </div>
    </div>
  );
};
