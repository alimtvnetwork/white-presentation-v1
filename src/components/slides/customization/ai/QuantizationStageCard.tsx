import React from 'react';
import type { SpeculativeDecodingStageItem } from '../../../../types/customization/aiInfraTypes';
import { resolveStepPhase, getStepPhaseStyle } from '../../../../utils/stepProgression';
import { CheckCircle2, TrendingUp, Bot, Layers } from 'lucide-react';

export interface QuantizationStageCardProps {
  stage: SpeculativeDecodingStageItem;
  index: number;
  activeStep: number;
  accentColor?: string;
}

export const QuantizationStageCard: React.FC<QuantizationStageCardProps> = ({
  stage,
  index,
  activeStep,
  accentColor = '#f59e0b',
}) => {
  const stepPhase = resolveStepPhase(index, activeStep);
  const stepStyle = getStepPhaseStyle(stepPhase, accentColor);
  const isCurrent = stepPhase === 'active';
  const isCompleted = stage.isStageCompleted || stepPhase === 'completed';

  return (
    <div
      style={stepStyle}
      className={`rounded-2xl border p-5 flex flex-col justify-between font-mono text-xs transition-all duration-300 ${
        isCurrent
          ? 'bg-slate-950/95 border-amber-500 ring-2 ring-amber-500/40 shadow-2xl'
          : isCompleted
          ? 'bg-slate-900/60 border-slate-700'
          : 'bg-slate-950/40 border-slate-800'
      }`}
    >
      <div>
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30 font-bold flex items-center justify-center text-[11px]">
              0{index + 1}
            </span>
            <span className="font-bold text-slate-200 text-xs tracking-wide flex items-center gap-1">
              <Bot size={11} className="text-cyan-400" /> {stage.modelRole}
            </span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 flex items-center gap-1">
            <TrendingUp size={10} /> {stage.speedupFactor}x Boost
          </span>
        </div>

        <h3 className="font-ubuntu text-base font-bold text-slate-100 mb-2 leading-snug">{stage.stageName}</h3>

        <div className="grid grid-cols-3 gap-2 py-2 mb-3 bg-slate-900/40 rounded-xl border border-slate-800/60 px-3">
          <div>
            <div className="text-[9px] text-slate-400">ACCEPTANCE</div>
            <div className="text-emerald-400 font-bold text-xs">{stage.acceptanceRatePercentage}%</div>
          </div>
          <div>
            <div className="text-[9px] text-slate-400">SPEEDUP</div>
            <div className="text-amber-900 dark:text-amber-300 font-bold text-xs">{stage.speedupFactor}x</div>
          </div>
          <div>
            <div className="text-[9px] text-slate-400">BATCH</div>
            <div className="text-cyan-300 font-bold text-xs">{stage.batchSize} req</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-2">
          {stage.optimizationTechniques?.map((tech, idx) => (
            <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800/80 pt-2.5 mt-2 flex items-center justify-between text-[11px]">
        <span className="text-slate-400 flex items-center gap-1.5">
          <Layers size={11} className="text-amber-600 dark:text-amber-400" /> Speculation Pipeline
        </span>
        {isCompleted && (
          <span className="text-emerald-400 font-bold flex items-center gap-1 text-[10px]">
            <CheckCircle2 size={12} /> Accepted
          </span>
        )}
      </div>
    </div>
  );
};
