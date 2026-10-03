import React from 'react';
import { Cpu, Zap, Clock, ShieldCheck, Check } from 'lucide-react';
import type { RagPipelineStageItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface RagStageNodeProps {
  stage: RagPipelineStageItem;
  isActiveStage: boolean;
  isCompletedStage: boolean;
}

export const RagStageNode: React.FC<RagStageNodeProps> = ({
  stage,
  isActiveStage,
  isCompletedStage,
}) => {
  const isDense = isBooleanTrue(stage.isDenseSearchEnabled);
  const hasReRanker = isBooleanTrue(stage.hasReRankerApplied);

  const style = isActiveStage
    ? 'plane-2-elevated border-purple-500/80 bg-slate-900/90 ring-2 ring-purple-500/30 opacity-100 shadow-xl scale-[1.01]'
    : isCompletedStage
    ? 'plane-1-raised border-slate-700/80 bg-slate-900/60 opacity-80'
    : 'plane-1-raised border-slate-800/60 bg-slate-950/40 opacity-45';

  return (
    <div className={`flex-1 p-3.5 rounded-xl border flex flex-col justify-between gap-2.5 transition-all duration-300 font-mono text-xs ${style}`}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-purple-300 font-bold">
          Stage 0{stage.stageIndex}
        </span>
        {isCompletedStage ? (
          <span className="text-emerald-400 text-[10px] flex items-center gap-0.5 font-bold">
            <Check size={11} /> PASSED
          </span>
        ) : (
          <span className="text-slate-400 text-[10px] flex items-center gap-1">
            <Clock size={10} /> {stage.latencyMs}ms
          </span>
        )}
      </div>

      <div>
        <h2 className="font-ubuntu text-slate-100 font-bold text-sm leading-snug">
          {stage.stageName}
        </h2>
        <div className="flex items-center gap-1 text-[11px] text-purple-300 mt-1">
          <Cpu size={11} className="text-purple-400" />
          <span className="truncate">{stage.modelIdentifier}</span>
        </div>
      </div>

      <div className="p-2 rounded bg-slate-950/70 border border-slate-800/80 space-y-1 text-[11px]">
        <div className="flex items-center justify-between text-slate-400">
          <span>Throughput:</span>
          <strong className="text-white">{stage.throughputDocsSec.toLocaleString()} docs/s</strong>
        </div>
        <div className="flex items-center gap-1 pt-1 border-t border-slate-800/60 text-[10px]">
          {isDense && (
            <span className="px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-300">Dense HNSW</span>
          )}
          {hasReRanker && (
            <span className="px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-800 dark:text-amber-300">Reranked</span>
          )}
        </div>
      </div>

      {isActiveStage && (
        <div className="text-[10px] text-purple-400 font-bold flex items-center gap-1 pt-1 border-t border-slate-800">
          <ShieldCheck size={11} /> Active Inference Phase
        </div>
      )}
    </div>
  );
};
