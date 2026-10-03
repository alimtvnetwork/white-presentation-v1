import React from 'react';
import { ShieldCheck, Zap, Clock, ChevronRight } from 'lucide-react';
import type { GatewayPipelineStageItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface GatewayStagePipelineProps {
  stages: GatewayPipelineStageItem[];
  activeStep: number;
}

export const GatewayStagePipeline: React.FC<GatewayStagePipelineProps> = ({
  stages,
  activeStep,
}) => (
  <div className="grid grid-cols-4 gap-3">
    {stages.map((stage, idx) => {
      const isActive = idx === activeStep;
      const isCompleted = idx < activeStep;
      const isAuthorized = isBooleanTrue(stage.isAuthorized);
      const hasHeadroom = isBooleanTrue(stage.hasRateLimitHeadroom);

      const style = isActive
        ? 'plane-2-elevated border-cyan-500/80 bg-slate-900/90 ring-2 ring-cyan-500/30 opacity-100 shadow-xl'
        : isCompleted
        ? 'plane-1-raised border-slate-700/80 bg-slate-900/60 opacity-80'
        : 'plane-1-raised border-slate-800/60 bg-slate-950/40 opacity-45';

      return (
        <div
          key={stage.id || idx}
          className={`p-3 rounded-xl border flex flex-col justify-between gap-1.5 transition-all duration-300 font-mono text-xs ${style}`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
              Stage 0{idx + 1}
            </span>
            <span className="text-cyan-400 text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
              {stage.statusBadge}
            </span>
          </div>

          <div className="font-ubuntu text-slate-100 font-bold text-xs">
            {stage.stageName}
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
            <span className="flex items-center gap-1 text-slate-300">
              <Clock size={10} className="text-cyan-400" /> {stage.latencyMs}ms
            </span>
            {isAuthorized && hasHeadroom && (
              <span className="text-emerald-400 flex items-center gap-0.5">
                <ShieldCheck size={10} /> Verified
              </span>
            )}
          </div>
        </div>
      );
    })}
  </div>
);
