import React from 'react';
import type { QuadrantDefinition, MarketEntity, StrategicTrajectory } from '../../../../types/nextgen/deepTechGovernanceTypes';

interface QuadrantCanvasProps {
  xAxisLabel: string;
  yAxisLabel: string;
  quadrants: QuadrantDefinition[];
  entities: MarketEntity[];
  trajectory: StrategicTrajectory;
}

export const QuadrantCanvas: React.FC<QuadrantCanvasProps> = ({
  xAxisLabel,
  yAxisLabel,
  entities,
  trajectory,
}) => (
  <div
    style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
    className="plane-1-raised rounded-3xl p-6 border relative flex flex-col justify-between h-full overflow-hidden"
  >
    <div className="absolute top-3 left-4 text-[10px] font-mono uppercase tracking-wider text-slate-500">
      ↑ {yAxisLabel}
    </div>
    <div className="absolute bottom-2 right-6 text-[10px] font-mono uppercase tracking-wider text-slate-500">
      {xAxisLabel} →
    </div>

    <svg viewBox="0 0 600 500" className="w-full h-[480px] my-auto">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#8b5cf6" />
        </marker>
      </defs>

      <rect x="300" y="20" width="280" height="220" rx="16" fill="rgba(139, 92, 246, 0.06)" stroke="rgba(139, 92, 246, 0.2)" />
      <text x="315" y="45" className="text-[12px] font-mono font-bold fill-violet-700 dark:fill-violet-300">SOVEREIGN PARADIGM</text>

      <rect x="20" y="20" width="270" height="220" rx="16" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeOpacity="0.08" />
      <text x="35" y="45" className="text-[11px] font-mono fill-slate-500">ENTERPRISE MONOLITHS</text>

      <rect x="20" y="250" width="270" height="220" rx="16" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeOpacity="0.08" />
      <text x="35" y="455" className="text-[11px] font-mono fill-slate-500">LEGACY STAGNATION</text>

      <rect x="300" y="250" width="280" height="220" rx="16" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeOpacity="0.08" />
      <text x="315" y="455" className="text-[11px] font-mono fill-slate-500">UNREGULATED PROTOTYPES</text>

      <line x1="300" y1="20" x2="300" y2="470" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="20" y1="245" x2="580" y2="245" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="4 4" />

      <line
        x1={20 + (trajectory.originX / 100) * 560}
        y1={470 - (trajectory.originY / 100) * 450}
        x2={20 + (trajectory.targetX / 100) * 560}
        y2={470 - (trajectory.targetY / 100) * 450}
        stroke="#8b5cf6"
        strokeWidth="3"
        strokeDasharray="6 4"
        markerEnd="url(#arrow)"
      />

      {entities.map((e) => {
        const cx = 20 + (e.xScorePercent / 100) * 560;
        const cy = 470 - (e.yScorePercent / 100) * 450;
        const isSovereign = e.isSovereignPlatform;
        return (
          <g key={e.id}>
            <circle
              cx={cx}
              cy={cy}
              r={isSovereign ? 14 : 9}
              className={isSovereign ? 'fill-violet-600 text-white' : 'fill-slate-500 text-white'}
              stroke={isSovereign ? '#10b981' : '#94a3b8'}
              strokeWidth={isSovereign ? 3 : 1}
            />
            <text
              x={cx + (cx > 400 ? -12 : 16)}
              y={cy + 4}
              textAnchor={cx > 400 ? 'end' : 'start'}
              className={`text-[12px] font-mono font-bold ${isSovereign ? 'fill-violet-700 dark:fill-violet-300' : 'fill-slate-600 dark:fill-slate-400'}`}
            >
              {e.entityName}
            </text>
          </g>
        );
      })}
    </svg>
  </div>
);
