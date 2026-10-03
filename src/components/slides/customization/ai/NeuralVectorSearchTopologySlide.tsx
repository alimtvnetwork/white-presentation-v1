import React from 'react';
import type { NeuralVectorSearchTopologySlideData } from '../../../../types/customization/aiInfraTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { VectorHeader } from './VectorHeader';
import { VectorPhaseCard } from './VectorPhaseCard';
import { ShieldCheck, Cpu, Database } from 'lucide-react';

export const NeuralVectorSearchTopologySlide: React.FC<{
  slide: NeuralVectorSearchTopologySlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const phases = slide.searchPhases || slide.stages || [];
  const currentStep = Math.min(activeStep, Math.max(0, phases.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <VectorHeader
        kicker={slide.kicker}
        title={slide.title || 'Neural Vector Search Topology & HNSW Indexing'}
        subtitle={slide.subtitle || 'Sub-millisecond semantic retrieval across high-dimensional embeddings'}
        dimension={slide.embeddingDimension || 1536}
        metric={slide.distanceMetric || 'Cosine Similarity'}
        vectorCount={slide.totalVectorsCount || '1.2B'}
        p99LatencyMs={slide.p99LatencyMs || 4.2}
        isGpuAccelerated={slide.isGpuAccelerated}
        isEditMode={isEditMode}
        onUpdateTitle={(val) => applyEdit((s) => ({ ...s, title: val }))}
        onUpdateSubtitle={(val) => applyEdit((s) => ({ ...s, subtitle: val }))}
      />

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {phases.map((phase, idx) => (
          <VectorPhaseCard
            key={phase.id || idx}
            phase={phase}
            index={idx}
            activeStep={currentStep}
          />
        ))}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="text-amber-900 dark:text-amber-300 font-bold flex items-center gap-1.5">
            <Cpu size={14} /> Telemetry State:
          </span>
          <span className="flex items-center gap-1">
            <Database size={12} className="text-cyan-400" />
            Index: <strong className="text-slate-100">{slide.isHnswIndexed ? 'HNSW Hierarchical' : 'Flat Inverted'}</strong>
          </span>
          <span className="flex items-center gap-1">
            Quantization: <strong className="text-cyan-400">{slide.hasQuantizedVectors ? 'SQ8 Scalar' : 'FP32 Dense'}</strong>
          </span>
          <span className="flex items-center gap-1">
            Reranker: <strong className="text-emerald-400">{slide.hasCrossEncoderRerank ? 'Cross-Encoder Active' : 'Single-Pass'}</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {slide.isGpuAccelerated && (
            <span className="text-emerald-400 flex items-center gap-1 font-bold text-[11px]">
              <ShieldCheck size={13} /> TensorRT-LLM Verified
            </span>
          )}
          <span className="text-slate-400 text-xs">Phase {currentStep + 1} of {Math.max(phases.length, 1)}</span>
        </div>
      </div>
    </div>
  );
};
