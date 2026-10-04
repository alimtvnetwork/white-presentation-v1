// lint-allow: file-size reason="CloudNativeWasmMicroserviceMeshSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  CloudNativeWasmMicroserviceMeshSlideData,
  WasmMeshStage,
  WasmModuleNode,
} from '../../../types/suite2028Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Box,
  Globe,
  Zap,
  Activity,
  Layers,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Terminal,
  Network,
  Sparkles,
} from 'lucide-react';

const DEF_STAGES: WasmMeshStage[] = [
  {
    stepIndex: 0,
    stageName: 'Polyglot Wasm Packaging & OCI Artifact Verification',
    stageSubtitle: 'Compiling Rust, Go, and Zig microservices to verified wasm32-wasi binaries',
    activeInstancesCount: 12400,
    requestThroughputRps: 420000,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Sub-Millisecond Cold Start & JIT Instantiation',
    stageSubtitle: 'Pre-warmed memory page copy-on-write launching instances under 1ms',
    activeInstancesCount: 38200,
    requestThroughputRps: 980000,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Capability-Based Sandboxing & Memory Bounds Check',
    stageSubtitle: 'Hardware-enforced linear memory clamping with zero unmapped pointer access',
    activeInstancesCount: 46500,
    requestThroughputRps: 1420000,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Distributed L7 Mesh Routing & eBPF Telemetry Flow',
    stageSubtitle: 'Sub-millisecond service-to-service RPC routing with mutual TLS 1.3',
    activeInstancesCount: 48200,
    requestThroughputRps: 1840000,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_MODULES: WasmModuleNode[] = [
  {
    id: 'wasm-auth',
    moduleName: 'Edge Authentication Router',
    sourceLanguage: 'Rust',
    binarySizeKb: 412,
    coldStartLatencyMicros: 480,
    memoryFootprintMb: 1.2,
    isWasiCompliant: true,
    hasSandboxIsolated: true,
  },
  {
    id: 'wasm-transform',
    moduleName: 'JSON-to-Protobuf Transformer',
    sourceLanguage: 'Go',
    binarySizeKb: 840,
    coldStartLatencyMicros: 820,
    memoryFootprintMb: 2.1,
    isWasiCompliant: true,
    hasSandboxIsolated: true,
  },
  {
    id: 'wasm-policy',
    moduleName: 'OPA Policy Enforcement Gate',
    sourceLanguage: 'Zig',
    binarySizeKb: 180,
    coldStartLatencyMicros: 320,
    memoryFootprintMb: 0.8,
    isWasiCompliant: true,
    hasSandboxIsolated: true,
  },
  {
    id: 'wasm-ratelimit',
    moduleName: 'Token Bucket Rate Limiter',
    sourceLanguage: 'C++',
    binarySizeKb: 260,
    coldStartLatencyMicros: 390,
    memoryFootprintMb: 1.0,
    isWasiCompliant: true,
    hasSandboxIsolated: true,
  },
];

export const CloudNativeWasmMicroserviceMeshSlide: React.FC<{
  slide?: CloudNativeWasmMicroserviceMeshSlideData;
  data?: CloudNativeWasmMicroserviceMeshSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.meshStages?.length ? data.meshStages : DEF_STAGES;
  const modules = data?.modules?.length ? data.modules : DEF_MODULES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const hasSandboxing = data?.hasCapabilitySandboxing ?? true;
  const hasEbpf = data?.hasEbpfTelemetryActive ?? true;
  const hasMtls = data?.hasMutualTlsEnforced ?? true;

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
              <Box size={16} className="text-cyan-500" />
              {data?.kicker || 'CLOUD NATIVE & SERVERLESS COMPUTE'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Globe size={14} /> Region: {data?.clusterRegion || 'Global Edge Anycast (280 PoPs)'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" />
              Cold Start: {data?.medianColdStartMs ?? 0.85}ms
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <Activity size={14} className="text-indigo-500" />
              P99 Latency: {data?.p99InvocationLatencyMs ?? 2.4}ms
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Cloud-Native Wasm Microservice Mesh'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Polyglot WASI compilation, sub-millisecond cold starts, capability isolation, and L7 eBPF routing.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Active Nodes</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.activeInstancesCount.toLocaleString()}
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Throughput</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {(activeStage.requestThroughputRps / 1000).toLocaleString()}k RPS
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
                    {st.activeInstancesCount.toLocaleString()} instances
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                {(st.requestThroughputRps / 1000).toFixed(0)}k rps
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Wasm Microservice Modules */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> Polyglot Wasm Microservice Modules
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Active: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {modules.map((mod, mIdx) => {
                const isCurrentLayer = mIdx === currentStep || (currentStep >= 3 && mIdx >= 3);
                return (
                  <div
                    key={mod.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Terminal size={16} className={isCurrentLayer ? 'text-[var(--pres-accent)]' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{mod.moduleName}</span>
                        <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                          {mod.sourceLanguage}
                        </span>
                        {mod.isWasiCompliant && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> WASI
                          </span>
                        )}
                        {mod.hasSandboxIsolated && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30 flex items-center gap-1">
                            <ShieldCheck size={12} /> Sandboxed
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">{mod.binarySizeKb} KB</span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {mod.coldStartLatencyMicros}µs Cold Start
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isCurrentLayer ? 'bg-[var(--pres-accent)]' : 'bg-slate-400 dark:bg-slate-600'
                        }`}
                        style={{ width: `${Math.min(100, (mod.coldStartLatencyMicros / 1000) * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Memory Footprint: {mod.memoryFootprintMb.toFixed(1)} MB</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <Zap size={14} /> Sub-1ms Latency SLA
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Network size={16} className="text-cyan-500" />
              eBPF XDP Ingress: 280 Edge PoPs | Zero Kernel Context Switching
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Sub-Millisecond Cold Starts Certified
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Active Pods</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.activeInstancesCount.toLocaleString()}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Throughput</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
                    {(activeStage.requestThroughputRps / 1000).toFixed(0)}k RPS
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Capability Sandboxing</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasSandboxing ? 'Hardware Enforced' : 'Disabled'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">eBPF Telemetry Flow</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasEbpf ? 'Zero-Copy XDP' : 'Socket Hook'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Mutual TLS 1.3</span>
                <span className="font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasMtls ? 'SPIFFE/SPIRE Keyless' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Wasm runtime achieves 10x memory compaction vs container runtimes.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Runtime Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> WASI Sandboxed | 48,200 Micro-Instances Active | Zero Memory Leaks
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2028 Wasm Engine
          </span>
        </div>
      </div>
    </div>
  );
};
export default CloudNativeWasmMicroserviceMeshSlide;
