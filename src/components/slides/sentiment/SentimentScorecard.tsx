import React from 'react';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import type { RadarDimensionAxisItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface SentimentScorecardProps {
  axes: RadarDimensionAxisItem[];
}

export const SentimentScorecard: React.FC<SentimentScorecardProps> = ({ axes }) => (
  <div className="space-y-2.5 font-mono text-xs">
    {axes.map((axis) => {
      const hasExceeded = isBooleanTrue(axis.hasExceededBenchmark);
      return (
        <div key={axis.id} className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-ubuntu text-slate-200 font-semibold text-xs">
              {axis.axisLabel}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">{axis.currentScore}/100</span>
              <span className="text-slate-500 text-[10px]">Bench: {axis.benchmarkScore}</span>
              {hasExceeded && (
                <span className="text-emerald-400 text-[10px] flex items-center gap-0.5">
                  <CheckCircle2 size={10} /> +{axis.currentScore - axis.benchmarkScore}
                </span>
              )}
            </div>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400"
              style={{ width: `${Math.min(100, Math.max(0, axis.currentScore))}%` }}
            />
          </div>
        </div>
      );
    })}
  </div>
);
