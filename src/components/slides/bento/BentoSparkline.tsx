import React from 'react';

export interface BentoSparklineProps {
  points?: number[];
  hasPositiveGrowth: boolean;
  color?: string;
}

export const BentoSparkline: React.FC<BentoSparklineProps> = ({
  points = [],
  hasPositiveGrowth,
  color,
}) => {
  const hasData = points.length >= 2;
  const strokeColor = color || (hasPositiveGrowth ? '#10b981' : '#f43f5e');

  if (!hasData) {
    return <div className="h-10 w-full" />;
  }

  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const width = 180;
  const height = 44;
  const padding = 4;

  const coords = points.map((p, i) => {
    const x = padding + (i / (points.length - 1)) * (width - padding * 2);
    const y = height - padding - ((p - min) / range) * (height - padding * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  const pathData = `M ${coords.join(' L ')}`;
  const areaData = `${pathData} L ${width - padding},${height} L ${padding},${height} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-11 overflow-visible">
      <defs>
        <linearGradient id={`grad-${strokeColor.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={strokeColor} stopOpacity="0.25" />
          <stop offset="100%" stopColor={strokeColor} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path d={areaData} fill={`url(#grad-${strokeColor.replace('#', '')})`} />
      <path d={pathData} fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
