// lint-allow: file-size reason="AiInferenceCostTokenWaterfallSlide kinetic 4-step AI inference token cost waterfall" max=200
import React from 'react';
import type {
  AiInferenceCostTokenWaterfallSlideData,
  TokenWaterfallStage,
  TokenCostNode,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Cpu,
  Zap,
  TrendingDown,
  Activity,
  Layers,
  CheckCircle2,
  Sparkles,
  Server,
  ShieldCheck,
  Flame,
} from 'lucide-react';

const DEF_STAGES: TokenWaterfallStage[] = [
  {
    stepIndex: 0,
    stageName: 'Raw Prefill Ingress',
    stageSubtitle: 'Unoptimized prompt context ingestion & attention matrix allocation',
    tokenThroughputTps: 1450,
    cumulativeCostUsd: 0.32,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Speculative Drafting',
    stageSubtitle: 'Small draft model token proposal with 84% acceptance rate',
    tokenThroughputTps: 3200,
    cumulativeCostUsd: 0.54,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'KV-Cache Multi-Tenant Reuse',
    stageSubtitle: 'PagedAttention zero-copy prefix sharing & chunked prefill',
    tokenThroughputTps: 4800,
    cumulativeCostUsd: 0.68,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Quantized Decode Stream (FP8)',
    stageSubtitle: 'AWQ/FP8 tensor core decode with sub-45ms time-to-first-token',
    tokenThroughputTps: 6100,
    cumulativeCostUsd: 0.85,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: TokenCostNode[] = [
  {
    id: 'node-prefill',
    category: 'Prefill Compute Engine',
    costPerThousandTokensUsd: 0.32,
    percentageOfTotalCost: 38,
    isOptimized: true,
    hasHardwareAccelerationActive: true,
  },
  {
    id: 'node-kvcache',
    category: 'KV-Cache Memory Fabric',
    costPerThousandTokensUsd: 0.22,
    percentageOfTotalCost: 26,
    isOptimized: true,
    hasHardwareAccelerationActive: true,
  },
  {
    id: 'node-fabric',
    category: 'Inter-GPU NVLink Bus',
    costPerThousandTokensUsd: 0.14,
    percentageOfTotalCost: 16,
    isOptimized: true,
    hasHardwareAccelerationActive: true,
  },
  {
    id: 'node-speculative',
    category: 'Speculative Draft Model',
    costPerThousandTokensUsd: 0.11,
    percentageOfTotalCost: 13,
    isOptimized: true,
    hasHardwareAccelerationActive: false,
  },
  {
    id: 'node-decode',
    category: 'Serialization & Safety Filter',
    costPerThousandTokensUsd: 0.06,
    percentageOfTotalCost: 7,
    isOptimized: false,
    hasHardwareAccelerationActive: false,
  },
];

export const AiInferenceCostTokenWaterfallSlide: React.FC<{
  slide?: AiInferenceCostTokenWaterfallSlideData;
  data?: AiInferenceCostTokenWaterfallSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.waterfallStages?.length ? data.waterfallStages : DEF_STAGES;
  const nodes = data?.costNodes?.length ? data.costNodes : DEF_NODES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

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
              <Cpu size={16} className="text-cyan-500" />
              {data?.kicker || 'AI INFERENCE UNIT ECONOMICS & TOKEN WATERFALL'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Sparkles size={14} /> Model: {data?.modelIdentifier || 'Llama-3.3-70B-Instruct-vLLM'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <TrendingDown size={14} className="text-emerald-500" />
              Blended: ${data?.blendedCostPerMillionTokensUsd ?? 0.85}/1M Tokens
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'AI Inference Cost & Token Throughput Waterfall'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Sequential unit cost attribution across GPU prefill, speculative drafting, paged KV-cache reuse, and quantized decode streaming.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">TTFT Latency</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {data?.timeToFirstTokenMs ?? 42} ms
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Peak Throughput</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.tokenThroughputTps.toLocaleString()} TPS
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Lead Architect</span>
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
          const isFuture = idx > currentStep;

          return (
            <button
              key={st.stepIndex}
              onClick={() => jumpToStep(idx)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${
                isActive
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-90'
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
                  <div className="text-[12px] opacity-75 font-normal">
                    {st.tokenThroughputTps.toLocaleString()} TPS
                  </div>
                </div>
              </div>
              <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                ${st.cumulativeCostUsd.toFixed(2)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Plane 1 Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Cost Breakdown Nodes */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> Token Lifecycle Unit Cost Breakdown
              </span>
              <span className="font-mono text-[12px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Active Stage: {activeStage.stageName}
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
                    <div className="flex items-center justify-between font-mono text-[14px] mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <Server size={15} className={isCurrentLayer ? 'text-[var(--pres-accent)]' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{node.category}</span>
                        {node.hasHardwareAccelerationActive && (
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <Zap size={10} /> H100 Tensor
                          </span>
                        )}
                        {node.isOptimized && (
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <CheckCircle2 size={10} /> Optimized
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[12px]">{node.percentageOfTotalCost}% of Cost</span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          ${node.costPerThousandTokensUsd.toFixed(2)}/1K
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isCurrentLayer ? 'bg-[var(--pres-accent)]' : 'bg-slate-400 dark:bg-slate-600'
                        }`}
                        style={{ width: `${node.percentageOfTotalCost * 2}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[12px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Flame size={14} className="text-amber-500" />
              Dynamic Batch Size: 128 concurrent sequences per node
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Sub-cent per 10k output tokens achieved
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Efficiency Gauges */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Deep Inspection
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[12px] border border-emerald-500/30">
                Phase {currentStep + 1} Active
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <h3 className="text-[18px] font-ubuntu font-bold text-slate-900 dark:text-white mb-1">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeStage.stageSubtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-[13px]">
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[11px] block uppercase">Throughput</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
                    {activeStage.tokenThroughputTps.toLocaleString()} TPS
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[11px] block uppercase">Cumulative Cost</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
                    ${activeStage.cumulativeCostUsd.toFixed(2)}/1M
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[13px]">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Speculative Decoding</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasSpeculativeDecoding ?? true ? 'Engaged (2.1x Boost)' : 'Disabled'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Quantization Format</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasQuantizationOptimized ?? true ? 'AWQ FP8 Ultra' : 'FP16 Baseline'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">KV-Cache Hit Ratio</span>
                <span className="font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasCacheHitRate ?? true ? '94.2% Shared Prefix' : '0% Cold Cache'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[12px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Total system cost compressed by 4.2x vs unoptimized baseline.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">Runtime Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Continuous Telemetry Verified | Cost Slope Stable
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2027 vLLM Core
          </span>
        </div>
      </div>
    </div>
  );
};
