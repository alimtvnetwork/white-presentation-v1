import React from 'react';
import type { CompetencyAxisItem } from '../../../types/globalPptArchetypes';
import { RadarPolygonSvg } from './RadarPolygonSvg';
import { Radar } from 'lucide-react';

interface CompetencyPolygonRadarProps {
  axes: CompetencyAxisItem[];
}

export const CompetencyPolygonRadar: React.FC<CompetencyPolygonRadarProps> = ({ axes }) => {
  const safeAxes = axes.length > 0 ? axes : [
    { id: '1', axisName: 'Architecture', requiredScorePercent: 80, evaluatedScorePercent: 90, isBenchmarkMet: true },
    { id: '2', axisName: 'Craftsmanship', requiredScorePercent: 80, evaluatedScorePercent: 95, isBenchmarkMet: true },
    { id: '3', axisName: 'Leadership', requiredScorePercent: 70, evaluatedScorePercent: 85, isBenchmarkMet: true },
    { id: '4', axisName: 'Velocity', requiredScorePercent: 75, evaluatedScorePercent: 88, isBenchmarkMet: true },
    { id: '5', axisName: 'Impact', requiredScorePercent: 80, evaluatedScorePercent: 92, isBenchmarkMet: true },
  ];

  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-2 h-full font-mono text-xs items-center justify-between">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 w-full">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <Radar size={14} className="text-purple-400" />
          5-Axis Talent Capability Radar
        </span>
        <span className="text-purple-300 font-bold">L8 Chief Engineer Profile</span>
      </div>

      <div className="relative flex items-center justify-center my-auto">
        <RadarPolygonSvg axes={safeAxes} />
      </div>

      <div className="flex items-center justify-center gap-6 w-full pt-1 border-t border-slate-800 text-[11px]">
        <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
          <span className="w-3 h-0.5 bg-amber-400 border border-amber-400" /> Required Benchmark
        </span>
        <span className="flex items-center gap-1.5 text-purple-300 font-bold">
          <span className="w-3 h-2 bg-purple-500/50 border border-purple-400 rounded-sm" /> Evaluated Score
        </span>
      </div>
    </div>
  );
};
