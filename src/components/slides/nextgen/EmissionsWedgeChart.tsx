import React from 'react';
import type { EsgReductionWedge } from '../../../types/nextGenArchetypes';
import { Factory } from 'lucide-react';

interface EmissionsWedgeChartProps {
  wedges: EsgReductionWedge[];
  currentYear: number;
  currentStep: number;
  totalMilestones: number;
}

export const EmissionsWedgeChart: React.FC<EmissionsWedgeChartProps> = ({
  wedges,
  currentYear,
  currentStep,
  totalMilestones,
}) => {
  return (
    <div className="plane-1-raised p-3.5 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold">
          <Factory size={15} className="text-emerald-500" />
          Active Decarbonization Wedges:
        </span>
        {wedges.map((w, wIdx) => (
          <div key={wIdx} className="flex items-center gap-2">
            <span className="text-slate-800 dark:text-slate-200">{w.wedgeName}</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-slate-900 dark:text-emerald-300 font-bold">
              -{(w.reductionTonsPerYear / 1000).toFixed(0)}k t/yr (${w.costPerTonUsd}/t)
            </span>
            {wIdx < wedges.length - 1 && <span className="text-slate-600">|</span>}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 text-slate-400">
        <span>Active Milestone: {currentYear}</span>
        <span>Step {currentStep + 1} of {totalMilestones}</span>
      </div>
    </div>
  );
};
