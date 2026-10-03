import React from 'react';

export interface CohortHeatmapCellProps {
  percentage: number;
  hasColorShading: boolean;
}

export const CohortHeatmapCell: React.FC<CohortHeatmapCellProps> = ({
  percentage,
  hasColorShading,
}) => {
  const hasHighRetention = percentage >= 95;

  let colorClasses = 'bg-slate-800/40 text-slate-300 border-slate-700/30';
  if (hasColorShading) {
    if (percentage >= 98) {
      colorClasses = 'bg-emerald-500/30 text-emerald-200 border-emerald-500/40 font-bold';
    } else if (percentage >= 95) {
      colorClasses = 'bg-teal-500/25 text-teal-200 border-teal-500/30 font-bold';
    } else if (percentage >= 90) {
      colorClasses = 'bg-cyan-500/20 text-cyan-200 border-cyan-500/30';
    } else if (percentage >= 80) {
      colorClasses = 'bg-blue-500/15 text-blue-200 border-blue-500/20';
    }
  }

  return (
    <div
      className={`h-9 flex items-center justify-center rounded-lg border font-mono text-xs transition-all ${colorClasses}`}
    >
      <span className={hasHighRetention ? 'font-bold' : ''}>
        {percentage}%
      </span>
    </div>
  );
};
