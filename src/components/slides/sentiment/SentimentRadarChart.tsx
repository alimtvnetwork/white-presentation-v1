import React from 'react';
import type { RadarDimensionAxisItem } from '../../../types/globalPptArchetypes';

interface SentimentRadarChartProps {
  axes: RadarDimensionAxisItem[];
}

export const SentimentRadarChart: React.FC<SentimentRadarChartProps> = ({ axes }) => {
  const size = 460;
  const center = size / 2;
  const radius = 170;
  const count = Math.max(axes.length, 3);

  const getPt = (index: number, score: number) => {
    const angle = (Math.PI * 2 / count) * index - Math.PI / 2;
    const dist = (score / 100) * radius;
    return { x: center + dist * Math.cos(angle), y: center + dist * Math.sin(angle) };
  };

  const currentPts = axes.map((a, i) => `${getPt(i, a.currentScore).x},${getPt(i, a.currentScore).y}`).join(' ');
  const benchmarkPts = axes.map((a, i) => `${getPt(i, a.benchmarkScore).x},${getPt(i, a.benchmarkScore).y}`).join(' ');
  const rings = [0.25, 0.5, 0.75, 1.0];

  return (
    <div className="relative flex items-center justify-center p-2 rounded-2xl border border-slate-800 bg-slate-950/60 shadow-inner">
      <svg width={size} height={size} className="overflow-visible select-none">
        {rings.map((f, rIdx) => (
          <circle key={rIdx} cx={center} cy={center} r={radius * f} fill="none" stroke="rgba(148, 163, 184, 0.15)" strokeDasharray={f < 1 ? '4 4' : undefined} />
        ))}
        {axes.map((axis, i) => {
          const pt = getPt(i, 100);
          const labelPt = getPt(i, 118);
          return (
            <g key={axis.id || i}>
              <line x1={center} y1={center} x2={pt.x} y2={pt.y} stroke="rgba(148, 163, 184, 0.2)" />
              <text x={labelPt.x} y={labelPt.y} textAnchor="middle" dominantBaseline="central" fill="#94A3B8" fontSize="11" fontFamily="monospace" className="font-semibold">
                {axis.axisLabel}
              </text>
            </g>
          );
        })}
        <polygon points={benchmarkPts} fill="rgba(148, 163, 184, 0.1)" stroke="#64748B" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points={currentPts} fill="rgba(6, 182, 212, 0.25)" stroke="#06B6D4" strokeWidth="2.5" />
        {axes.map((axis, i) => {
          const pt = getPt(i, axis.currentScore);
          return <circle key={axis.id || i} cx={pt.x} cy={pt.y} r="4.5" fill="#22D3EE" stroke="#083344" strokeWidth="2" />;
        })}
      </svg>
    </div>
  );
};
