// lint-allow: file-size reason="RagContinuousKnowledgeDistillationLoopSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  RagContinuousKnowledgeDistillationLoopSlideData,
  DistillationStage,
  KnowledgeCorpusChunk,
} from '../../../types/suite2029Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  BrainCircuit,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Activity,
  Layers,
  Search,
  Zap,
  ArrowRight,
  Database,
  GitBranch,
  BookOpen,
} from 'lucide-react';

const DEF_STAGES: DistillationStage[] = [
  {
    stepIndex: 0,
    stageName: 'Corpus Chunk Ingestion & Dense-Graph Indexing',
    stageSubtitle: 'Hybrid indexing unifying HNSW dense embeddings with entity knowledge graph relations',
    corpusDocumentsIndexedCount: 1450000,
    factualConsistencyScore: 94.2,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Frontier Teacher Reasoning Generation & Rerank',
    stageSubtitle: 'Frontier teacher LLM evaluates semantic queries producing multi-step CoT reasoning traces',
    corpusDocumentsIndexedCount: 2200000,
    factualConsistencyScore: 97.8,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Logit Distillation & Edge Student Fine-Tuning',
    stageSubtitle: 'KL divergence distillation transfers reasoning logits into lightweight 3.8B edge student weights',
    corpusDocumentsIndexedCount: 3100000,
    factualConsistencyScore: 98.6,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Hallucination Gating & Continuous Weight Commit',
    stageSubtitle: 'Self-consistency verification filters anomalies before pushing quantized weights to edge nodes',
    corpusDocumentsIndexedCount: 4200000,
    factualConsistencyScore: 99.4,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_CHUNKS: KnowledgeCorpusChunk[] = [
  {
    id: 'chunk-sec-arch',
    sourceDocument: 'Distributed-Security-Spec-v4.pdf',
    tokenCount: 512,
    embeddingModel: 'text-embedding-3-large',
    similarityScore: 0.94,
    isIndexEmbedded: true,
    hasDistillationSampled: true,
  },
  {
    id: 'chunk-iso-pacs',
    sourceDocument: 'ISO-20022-Settlement-Protocol.md',
    tokenCount: 480,
    embeddingModel: 'text-embedding-3-large',
    similarityScore: 0.91,
    isIndexEmbedded: true,
    hasDistillationSampled: true,
  },
  {
    id: 'chunk-pqc-kem',
    sourceDocument: 'NIST-FIPS-203-MLKEM-Standard.pdf',
    tokenCount: 640,
    embeddingModel: 'text-embedding-3-large',
    similarityScore: 0.96,
    isIndexEmbedded: true,
    hasDistillationSampled: true,
  },
  {
    id: 'chunk-ebpf-diag',
    sourceDocument: 'Kernel-eBPF-Observability-Guide.md',
    tokenCount: 390,
    embeddingModel: 'text-embedding-3-large',
    similarityScore: 0.88,
    isIndexEmbedded: true,
    hasDistillationSampled: true,
  },
];

export const RagContinuousKnowledgeDistillationLoopSlide: React.FC<{
  slide?: RagContinuousKnowledgeDistillationLoopSlideData;
  data?: RagContinuousKnowledgeDistillationLoopSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.distillationStages?.length ? data.distillationStages : DEF_STAGES;
  const chunks = data?.corpusChunks?.length ? data.corpusChunks : DEF_CHUNKS;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const hasHybrid = data?.isHybridSearchActive ?? true;
  const hasContinuous = data?.hasContinuousDistillation ?? true;
  const hasHallucinationGate = data?.hasHallucinationGatePassed ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <BrainCircuit size={16} className="text-cyan-500" />
              {data?.kicker || 'HYBRID RAG & EDGE MODEL KNOWLEDGE DISTILLATION'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Database size={14} /> Loop: {data?.distillationLoopId || 'distill-loop-v6-alpha'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Sparkles size={14} className="text-emerald-500" />
              Teacher: {data?.frontierTeacherModel || 'Claude 3.5 Sonnet / GPT-4o'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <Zap size={14} className="text-indigo-500" />
              Edge Student: {data?.edgeModelParameterCount || '3.8B AWQ-4bit'}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'RAG Continuous Knowledge Distillation Loop'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Dense-graph hybrid retrieval, frontier teacher chain-of-thought distillation, and automated hallucination gating.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Indexed Docs</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {(activeStage.corpusDocumentsIndexedCount / 1000000).toFixed(2)}M
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Consistency</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.factualConsistencyScore.toFixed(1)}%
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Kinetic 4-Step Nav Rail */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;

          return (
            <button
              key={st.stepIndex}
              onClick={() => jumpToStep(idx)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${
                isActive
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold animate-kinetic-step-reveal'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-75'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-[0.38] blur-[1.25px] text-slate-500 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[14px] ${
                    isActive
                      ? 'bg-[var(--pres-accent)] text-white'
                      : isCompleted
                      ? 'bg-emerald-500 text-white dark:text-slate-900'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {isCompleted ? '✓' : idx + 1}
                </span>
                <div>
                  <div className="font-bold leading-tight">{st.stageName}</div>
                  <div className="text-[14px] opacity-75 font-normal">
                    {st.factualConsistencyScore.toFixed(1)}% consistency | {(st.corpusDocumentsIndexedCount / 1000000).toFixed(1)}M docs
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                Step {idx + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Knowledge Corpus Chunks & Embeddings */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <BookOpen size={16} className="text-[var(--pres-accent)]" /> Active Knowledge Corpus Chunks & Alignment Scores
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {chunks.map((chunk, cIdx) => {
                const isCurrentLayer = cIdx === currentStep || (currentStep >= 2 && cIdx >= 2);
                return (
                  <div
                    key={chunk.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Layers size={16} className={isCurrentLayer ? 'text-[var(--pres-accent)]' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{chunk.sourceDocument}</span>
                        <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                          {chunk.tokenCount} tok
                        </span>
                        {chunk.isIndexEmbedded && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> HNSW Indexed
                          </span>
                        )}
                        {chunk.hasDistillationSampled && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <BrainCircuit size={12} /> Distilled
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          Model: {chunk.embeddingModel.split('-')[0]}
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>Sim: {(chunk.similarityScore * 100).toFixed(1)}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isCurrentLayer ? 'bg-[var(--pres-accent)]' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${Math.min(100, chunk.similarityScore * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Graph Relation: Entity Triplets Linked (Entity-Action-Target)</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Factual Grounding Verified
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Zap size={16} className="text-cyan-500" />
              Hybrid Retrieval Architecture: Vector Dense Embedding + Graph Triplet Traversal
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Sub-20ms Edge Model Generation Latency
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Verification */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Distillation Diagnostics
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[14px] border border-emerald-500/30">
                Phase {currentStep + 1} Active
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <h3 className="text-[20px] font-ubuntu font-bold text-slate-900 dark:text-white mb-1">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeStage.stageSubtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-[14px]">
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Indexed Corpus</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
                    {(activeStage.corpusDocumentsIndexedCount / 1000000).toFixed(2)}M
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Consistency Score</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.factualConsistencyScore.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Hybrid Search Engine</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasHybrid ? 'Dense HNSW + Knowledge Graph' : 'Dense Vector Only'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Continuous Distillation</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasContinuous ? 'Automated Continuous Learning' : 'Static Dataset'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Hallucination Gate Passed</span>
                <span className="font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1">
                  <ShieldCheck size={16} /> {hasHallucinationGate ? 'Self-Consistency 99.4% Pass' : 'Evaluating'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Compact edge model achieves 98.6% frontier reasoning accuracy at 1/20th latency.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Runtime Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Knowledge Distillation Locked | 99.4% Factual Consistency | 3.8B Edge Model AWQ Quantized
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2029 Distillation Loop
          </span>
        </div>
      </div>
    </div>
  );
};

export default RagContinuousKnowledgeDistillationLoopSlide;
