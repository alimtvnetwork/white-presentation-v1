// lint-allow: file-size reason="EnterpriseGenaiAppObservabilitySlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  EnterpriseGenaiAppObservabilitySlideData,
  ObservabilityPipelineStage,
  GenAiTraceSpanNode,
} from '../../../types/suite2028Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Activity,
  Sparkles,
  Clock,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Cpu,
  Search,
  Zap,
  Eye,
  DollarSign,
} from 'lucide-react';

const DEF_STAGES: ObservabilityPipelineStage[] = [
  {
    stepIndex: 0,
    stageName: 'Prompt Shield & Jailbreak Guardrail Gating',
    stageSubtitle: 'Sub-20ms ONNX classifier inspecting prompt injection and PII leakage',
    meanDurationMs: 18.0,
    hallucinationIndexScore: 0.01,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Vector RAG Embedding & Milvus Chunk Retrieval',
    stageSubtitle: 'Hierarchical HNSW index lookup returning 8 highest-ranked context chunks',
    meanDurationMs: 42.0,
    hallucinationIndexScore: 0.05,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Model Inference TTFT & Speculative Stream Decoding',
    stageSubtitle: 'Measuring Time-to-First-Token and sustained 148 tokens/second streaming output',
    meanDurationMs: 125.0,
    hallucinationIndexScore: 0.08,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Semantic Groundedness & Continuous Eval Loop',
    stageSubtitle: 'Asynchronous semantic evaluator scoring factual consistency against retrieved context',
    meanDurationMs: 32.0,
    hallucinationIndexScore: 0.12,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: GenAiTraceSpanNode[] = [
  {
    id: 'span-01',
    spanName: 'Prompt Injection Classifier',
    spanCategory: 'Guardrail',
    durationMilliseconds: 18.4,
    tokenCount: 380,
    costUsd: 0.0001,
    isWithinSlaBudget: true,
    hasAnomalousDriftDetected: false,
  },
  {
    id: 'span-02',
    spanName: 'Vector Hybrid Retrieval',
    spanCategory: 'Retrieval',
    durationMilliseconds: 41.8,
    tokenCount: 2400,
    costUsd: 0.0004,
    isWithinSlaBudget: true,
    hasAnomalousDriftDetected: false,
  },
  {
    id: 'span-03',
    spanName: 'Speculative Token Stream Decode',
    spanCategory: 'Inference',
    durationMilliseconds: 125.0,
    tokenCount: 840,
    costUsd: 0.0012,
    isWithinSlaBudget: true,
    hasAnomalousDriftDetected: false,
  },
  {
    id: 'span-04',
    spanName: 'Semantic Groundedness Scorer',
    spanCategory: 'Evaluation',
    durationMilliseconds: 32.2,
    tokenCount: 920,
    costUsd: 0.0002,
    isWithinSlaBudget: true,
    hasAnomalousDriftDetected: false,
  },
];

export const EnterpriseGenaiAppObservabilitySlide: React.FC<{
  slide?: EnterpriseGenaiAppObservabilitySlideData;
  data?: EnterpriseGenaiAppObservabilitySlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.observabilityStages?.length ? data.observabilityStages : DEF_STAGES;
  const nodes = data?.traceSpans?.length ? data.traceSpans : DEF_NODES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const hasPromptShield = data?.hasPromptShieldActive ?? true;
  const hasVectorDrift = data?.hasVectorDriftTracked ?? true;
  const hasEvaluator = data?.hasSemanticEvaluatorEngaged ?? true;

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
              <Activity size={16} className="text-cyan-500" />
              {data?.kicker || 'AI TELEMETRY & LLMOPS SRE'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Sparkles size={14} /> App: {data?.applicationName || 'Enterprise Copilot Core'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Clock size={14} className="text-emerald-500" />
              TTFT P95: {data?.timeToFirstTokenP95Ms ?? 185}ms
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-indigo-500" />
              Success Rate: {data?.blendedSuccessRatePercentage ?? 99.85}%
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Enterprise GenAI App Observability'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Full-stack LLMOps trace waterfall, prompt safety gating, vector RAG latency, and automated semantic evaluation.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Stage Latency</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.meanDurationMs.toFixed(1)} ms
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Hallucination</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {(activeStage.hallucinationIndexScore * 100).toFixed(1)}%
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
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 blur-[1.25px] text-slate-500 dark:text-slate-400'
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
                    {st.meanDurationMs.toFixed(1)}ms duration
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                {(st.hallucinationIndexScore * 100).toFixed(1)}% drift
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Trace Spans Waterfall */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> OpenTelemetry GenAI Span Waterfall & Cost Tracking
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {nodes.map((node, nIdx) => {
                const isCurrentLayer = nIdx === currentStep || (currentStep >= 3 && nIdx >= 3);
                return (
                  <div
                    key={node.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Eye size={16} className={isCurrentLayer ? 'text-[var(--pres-accent)]' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{node.spanName}</span>
                        <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                          {node.spanCategory}
                        </span>
                        {node.isWithinSlaBudget && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> SLA OK
                          </span>
                        )}
                        {!node.hasAnomalousDriftDetected && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <ShieldCheck size={12} /> No Drift
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">{node.tokenCount} tokens</span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {node.durationMilliseconds.toFixed(1)} ms
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isCurrentLayer ? 'bg-[var(--pres-accent)]' : 'bg-slate-400 dark:bg-slate-600'
                        }`}
                        style={{ width: `${Math.min(100, (node.durationMilliseconds / 150) * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Inference Unit Cost: ${node.costUsd.toFixed(4)} USD</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <Zap size={14} /> OpenTelemetry Verified
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Search size={16} className="text-cyan-500" />
              Total Distributed Trace Budget: 217ms Total Round-Trip | Cost: $0.0019/query
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Sub-200ms P95 Time-to-First-Token Enforced
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Verification */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Deep Inspection
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Mean Latency</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.meanDurationMs.toFixed(1)} ms
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Hallucination Index</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
                    {(activeStage.hallucinationIndexScore * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Prompt Shield Classifier</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasPromptShield ? 'Sub-20ms ONNX Guard' : 'Disabled'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Vector Embedding Drift</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasVectorDrift ? 'Real-Time Cosine Tracked' : 'Unmonitored'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Semantic Evaluator</span>
                <span className="font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasEvaluator ? 'Asynchronous Oracle Loop' : 'Offline Batch'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. End-to-end trace span confirms 99.85% blended response quality.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Runtime Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> OpenTelemetry GenAI v1.2 Compliant | Head-Based 100% Trace Sampling | Zero Drift Alert
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2028 Observability Engine
          </span>
        </div>
      </div>
    </div>
  );
};
export default EnterpriseGenaiAppObservabilitySlide;
