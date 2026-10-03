import React from 'react';
import type { RagPipelineTopologySlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { RagHeader } from './rag/RagHeader';
import { RagStageNode } from './rag/RagStageNode';
import { RagConnectingEdge } from './rag/RagConnectingEdge';
import { RagMetricsPanel } from './rag/RagMetricsPanel';
import { ShieldCheck } from 'lucide-react';

export const RagPipelineTopologySlide: React.FC<{
  slide: RagPipelineTopologySlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const stages = slide.pipelineStages || [];
  const currentStep = Math.min(activeStep, Math.max(0, stages.length - 1));
  const activeStage = stages[currentStep];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <RagHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="flex items-center justify-between z-10 my-auto h-[480px]">
        {stages.map((stage, idx) => (
          <React.Fragment key={stage.id || idx}>
            <RagStageNode
              stage={stage}
              isActiveStage={idx === currentStep}
              isCompletedStage={idx < currentStep}
            />
            {idx < stages.length - 1 && (
              <RagConnectingEdge isActiveEdge={idx < currentStep} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex flex-col gap-3 z-10">
        <RagMetricsPanel metrics={slide.indexMetrics || []} />

        <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between border border-slate-800 font-mono text-xs">
          <span className="flex items-center gap-2 text-purple-400 font-bold">
            <ShieldCheck size={14} /> Semantic Retrieval Topology Verified | Sub-50ms Inference Guarantee
          </span>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Active Stage: {activeStage?.stageName || 'Pipeline'}</span>
            <span>Stage {currentStep + 1} of {Math.max(stages.length, 1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
