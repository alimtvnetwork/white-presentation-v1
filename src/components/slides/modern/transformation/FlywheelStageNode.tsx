import React from 'react';
import { Cpu, Zap, Activity, Check } from 'lucide-react';
import type { AiFlywheelStage } from '../../../../types/modern/transformationTypes';

interface FlywheelStageNodeProps {
  stage: AiFlywheelStage;
  index: number;
  currentStep: number;
  onHover: (idx: number | null) => void;
}

export const FlywheelStageNode: React.FC<FlywheelStageNodeProps> = ({
  stage,
  index,
  currentStep,
  onHover,
}) => {
  const isCurrent = index === currentStep;
  const isPast = index < currentStep;

  const cardOpacity = isCurrent ? 'opacity-100' : isPast ? 'opacity-75' : 'opacity-35';
  const cardBorder = isCurrent ? 'border-violet-500 shadow-[0_0_24px_rgba(139,92,246,0.25)]' : 'border-slate-700/60';

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={`plane-1-raised rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${cardOpacity} ${cardBorder}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-400 font-bold border border-violet-500/30">
            STAGE 0{index + 1}
          </span>
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full font-bold text-emerald-400 bg-emerald-500/10 flex items-center gap-1">
            <Activity size={12} />
            {stage.isAutonomous ? 'AUTONOMOUS' : 'SUPERVISED'}
          </span>
        </div>

        <h3 style={{ color: 'var(--pres-text)' }} className="text-xl font-bold font-ubuntu mb-1">
          {stage.stageName}
        </h3>
        <p className="text-xs font-mono text-slate-400 mb-4">{stage.subsystemTitle}</p>

        <div className="space-y-2 text-sm font-mono mb-4">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-violet-400" /> Throughput</span>
            <span className="text-slate-200 font-bold">{stage.throughputRate}</span>
          </div>
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5"><Cpu size={14} className="text-sky-400" /> {stage.coreMetricName}</span>
            <span className="text-emerald-400 font-bold">{stage.coreMetricValue}</span>
          </div>
        </div>
      </div>

      <div>
        <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-2">
          Engine Capabilities
        </span>
        <div className="flex flex-wrap gap-1.5">
          {stage.capabilities.map((cap) => (
            <span
              key={cap}
              className="text-xs px-2 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-slate-300 flex items-center gap-1 font-mono"
            >
              <Check size={12} className="text-violet-400" />
              {cap}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
