import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { RoiCalculatedMetric } from '../../../types/enterpriseArchetypes';

export interface RoiMetricCardProps {
  metric: RoiCalculatedMetric;
  cardIndex: number;
  activeStep: number;
}

export const RoiMetricCard: React.FC<RoiMetricCardProps> = ({
  metric,
  cardIndex,
  activeStep,
}) => {
  const isPast = cardIndex < activeStep;
  const isActive = cardIndex === activeStep;
  const isFuture = cardIndex > activeStep;

  const cardStyle: React.CSSProperties = isActive
    ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
    : isPast
    ? { opacity: 0.75, transform: 'scale(1.0)' }
    : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };

  return (
    <div
      style={cardStyle}
      className={`p-6 rounded-2xl border transition-all duration-300 relative ${
        isActive
          ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border-emerald-500 ring-2 ring-emerald-500/40 shadow-xl'
          : isPast
          ? 'bg-slate-900/60 border-emerald-500/40'
          : 'bg-slate-900/40 border-slate-800'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
          {metric.label}
        </span>
        <ArrowUpRight size={16} className={isActive ? 'text-emerald-400' : 'text-slate-500'} />
      </div>
      <div className="font-ubuntu text-3xl font-black text-slate-100 mb-1">
        {metric.value}
      </div>
      {metric.subtext && (
        <p className="font-poppins text-xs text-slate-400">
          {metric.subtext}
        </p>
      )}
    </div>
  );
};
