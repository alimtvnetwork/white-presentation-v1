import React from 'react';
import type { CompetencyAxisItem } from '../../../types/globalPptArchetypes';

interface RadarPolygonSvgProps {
  axes: CompetencyAxisItem[];
}

export const RadarPolygonSvg: React.FC<RadarPolygonSvgProps> = ({ axes }) => {
  const count = axes.length;
  const cx = 160;
  const cy = 160;
  const radius = 105;

  const getCoordinates = (index: number, scorePercent: number) => {
    const angle = (index * 2 * Math.PI) / count - Math.PI / 2;
    const r = (scorePercent / 100) * radius;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  };

  const reqPoints = axes.map((a, i) => {
    const p = getCoordinates(i, a.requiredScorePercent);
    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  }).join(' ');

  const evalPoints = axes.map((a, i) => {
    const p = getCoordinates(i, a.evaluatedScorePercent);
    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  }).join(' ');

  return (
    <svg width="320" height="320" viewBox="0 0 320 320" className="overflow-visible">
      {[0.25, 0.5, 0.75, 1.0].map((ring) => (
        <circle
          key={ring}
          cx={cx}
          cy={cy}
          r={radius * ring}
          fill="none"
          stroke="rgba(148, 163, 184, 0.15)"
          strokeDasharray={ring === 1.0 ? 'none' : '3 3'}
        />
      ))}
      {axes.map((_, i) => {
        const edge = getCoordinates(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={edge.x} y2={edge.y} stroke="rgba(148, 163, 184, 0.25)" />;
      })}
      <polygon points={reqPoints} fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon
        points={evalPoints}
        fill="rgba(168, 85, 247, 0.25)"
        stroke="#a855f7"
        strokeWidth="2.5"
        className="filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
      />
    </svg>
  );
};
