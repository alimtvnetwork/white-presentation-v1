import React from 'react';
import { RefreshCw, Zap } from 'lucide-react';

interface DxFlywheelGraphicProps {
  activeStageIndex: number;
}

export const DxFlywheelGraphic: React.FC<DxFlywheelGraphicProps> = ({ activeStageIndex }) => {
  const nodes = [
    { num: 1, label: 'Feedback', cx: 200, cy: 60 },
    { num: 2, label: 'AST Guard', cx: 340, cy: 200 },
    { num: 3, label: 'Canary', cx: 200, cy: 340 },
    { num: 4, label: 'Telemetry', cx: 60, cy: 200 },
  ];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="plane-1-raised rounded-3xl p-6 border flex flex-col items-center justify-center relative overflow-hidden h-full"
    >
      <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono text-violet-700 dark:text-violet-300 font-bold uppercase tracking-wider">
        <RefreshCw size={14} className="animate-spin text-violet-600 dark:text-violet-400" />
        Continuous Momentum
      </div>

      <svg viewBox="0 0 400 400" className="w-[360px] h-[360px] my-auto">
        <defs>
          <linearGradient id="flywheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="16" />
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="url(#flywheelGrad)"
          strokeWidth="6"
          strokeDasharray="40 16"
        />

        <circle cx="200" cy="200" r="64" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2" />
        <text x="200" y="196" textAnchor="middle" className="text-[12px] font-mono font-bold fill-current">
          COMPOUNDING
        </text>
        <text x="200" y="214" textAnchor="middle" className="text-[10px] font-mono fill-current opacity-70">
          DX LOOP
        </text>

        {nodes.map((node, i) => {
          const isActive = activeStageIndex === i;
          return (
            <g key={node.num}>
              <circle
                cx={node.cx}
                cy={node.cy}
                r={isActive ? 24 : 20}
                className={isActive ? 'fill-violet-600 text-white' : 'fill-slate-100 dark:fill-slate-800 text-slate-900 dark:text-slate-100'}
                stroke={isActive ? '#8b5cf6' : '#94a3b8'}
                strokeWidth="2"
              />
              <text
                x={node.cx}
                y={node.cy + 5}
                textAnchor="middle"
                className={`text-[12px] font-mono font-bold ${isActive ? 'fill-white' : 'fill-current'}`}
              >
                0{node.num}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="flex items-center justify-between w-full pt-3 border-t border-black/10 dark:border-white/10 text-xs font-mono">
        <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
          <Zap size={14} className="text-violet-600 dark:text-violet-400" />
          Autonomous Velocity Flywheel
        </span>
        <span className="text-emerald-700 dark:text-emerald-400 font-bold">14.2x Faster</span>
      </div>
    </div>
  );
};
