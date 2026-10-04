// lint-allow: file-size reason="EbpfKernelTelemetryAnomalyFlowSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  EbpfKernelTelemetryAnomalyFlowSlideData,
  EbpfTelemetryStage,
  EbpfProbeHook,
} from '../../../types/suite2029Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Activity,
  Zap,
  Cpu,
  Layers,
  Search,
  Radio,
  Workflow,
  AlertTriangle,
} from 'lucide-react';

const DEF_STAGES: EbpfTelemetryStage[] = [
  {
    stepIndex: 0,
    stageName: 'Kernel Probe Attachment & Verifier Safety Gate',
    stageSubtitle: 'Bytecode mathematically checked by in-kernel verifier for bounded loops and zero crash risk',
    samplingRateHz: 1000,
    kernelEventsProcessedPerSec: 450000,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Zero-Copy RingBuffer Socket Telemetry Stream',
    stageSubtitle: 'Lockless memory ring buffers pipe TCP and syscall traces directly to observability engine',
    samplingRateHz: 5000,
    kernelEventsProcessedPerSec: 1250000,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Kernel-Level Tail Latency & Retransmit Analysis',
    stageSubtitle: 'Real-time in-kernel histograms pinpoint p99.9 socket stalls and TCP retransmit bottlenecks',
    samplingRateHz: 10000,
    kernelEventsProcessedPerSec: 2800000,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Automated XDP Fast-Path Threat Isolation',
    stageSubtitle: 'Targeted NIC driver-level packet drop and rogue process quarantine applied in sub-microsecond time',
    samplingRateHz: 10000,
    kernelEventsProcessedPerSec: 3200000,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_HOOKS: EbpfProbeHook[] = [
  {
    id: 'probe-sock-state',
    hookType: 'tracepoint',
    kernelSymbol: 'sock:inet_sock_set_state',
    eventsPerSecond: 850000,
    cpuOverheadPercentage: 0.12,
    isJitCompiled: true,
    hasRingBufferStreamActive: true,
  },
  {
    id: 'probe-tcp-retrans',
    hookType: 'kprobe',
    kernelSymbol: 'tcp_retransmit_skb',
    eventsPerSecond: 12000,
    cpuOverheadPercentage: 0.04,
    isJitCompiled: true,
    hasRingBufferStreamActive: true,
  },
  {
    id: 'probe-sched-switch',
    hookType: 'raw_tracepoint',
    kernelSymbol: 'sched:sched_switch',
    eventsPerSecond: 1850000,
    cpuOverheadPercentage: 0.28,
    isJitCompiled: true,
    hasRingBufferStreamActive: true,
  },
  {
    id: 'probe-xdp-redirect',
    hookType: 'xdp',
    kernelSymbol: 'xdp_do_redirect',
    eventsPerSecond: 480000,
    cpuOverheadPercentage: 0.08,
    isJitCompiled: true,
    hasRingBufferStreamActive: true,
  },
];

export const EbpfKernelTelemetryAnomalyFlowSlide: React.FC<{
  slide?: EbpfKernelTelemetryAnomalyFlowSlideData;
  data?: EbpfKernelTelemetryAnomalyFlowSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.telemetryStages?.length ? data.telemetryStages : DEF_STAGES;
  const hooks = data?.probeHooks?.length ? data.probeHooks : DEF_HOOKS;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isVerifierApproved = data?.isKernelVerifierApproved ?? true;
  const hasZeroCopy = data?.hasZeroCopyRingBuffer ?? true;
  const hasAutoIsolation = data?.hasAnomalyAutoIsolation ?? true;

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
              <Terminal size={16} className="text-cyan-500" />
              {data?.kicker || 'IN-KERNEL OBSERVABILITY & EBPF TELEMETRY'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Cpu size={14} /> Node: {data?.clusterNodeName || 'k8s-infra-titan-node-04'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Radio size={14} className="text-emerald-500" />
              Kernel: {data?.kernelVersion || 'Linux 6.8.0-rc7+ebpf'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-indigo-500" />
              Anomalies: {data?.anomaliesDetectedCount ?? 0} Critical
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'eBPF Kernel Telemetry Anomaly Flow'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'In-kernel probe verification, zero-copy ring buffer streams, tail latency anomaly isolation, and XDP packet defense.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Sampling Rate</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {(activeStage.samplingRateHz / 1000).toFixed(0)} kHz
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Kernel Events</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {(activeStage.kernelEventsProcessedPerSec / 1000000).toFixed(2)}M /s
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
                    {st.samplingRateHz}Hz | {(st.kernelEventsProcessedPerSec / 1000).toFixed(0)}k events/sec
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
        {/* Left Bento: Active eBPF Probe Hooks */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> Active eBPF Probe Hooks & In-Kernel Handlers
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {hooks.map((hook, hIdx) => {
                const isCurrentLayer = hIdx === currentStep || (currentStep >= 2 && hIdx >= 2);
                return (
                  <div
                    key={hook.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Terminal size={16} className={isCurrentLayer ? 'text-[var(--pres-accent)]' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{hook.kernelSymbol}</span>
                        <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30 uppercase">
                          {hook.hookType}
                        </span>
                        {hook.isJitCompiled && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> JIT Native
                          </span>
                        )}
                        {hook.hasRingBufferStreamActive && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <Radio size={12} /> RingBuffer
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          {(hook.eventsPerSecond / 1000).toLocaleString()}k ev/s
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>Overhead: {hook.cpuOverheadPercentage.toFixed(2)}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isCurrentLayer ? 'bg-[var(--pres-accent)]' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${Math.min(100, (hook.eventsPerSecond / 2000000) * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Zero-Copy RingBuffer: Lockless Single-Producer-Single-Consumer</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> BPF Verifier Safe (O(1) Memory Bounds)
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
              eBPF JIT Kernel Engine: Zero Context Switches for In-Kernel Telemetry Extraction
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Sub-1% Total Host CPU Overhead Guarantee
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Verification */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Telemetry Pipeline
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Sampling Rate</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
                    {(activeStage.samplingRateHz / 1000).toFixed(0)} kHz
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Processed / Sec</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
                    {(activeStage.kernelEventsProcessedPerSec / 1000000).toFixed(2)}M
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Kernel Verifier Status</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isVerifierApproved ? '100% Mathematically Proven Safe' : 'Unverified'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Zero-Copy RingBuffer</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasZeroCopy ? 'Active Direct Memory Pipe' : 'System Call Copy'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Anomaly Auto-Isolation</span>
                <span className="font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1">
                  <ShieldCheck size={16} /> {hasAutoIsolation ? 'Automated XDP Fast Path' : 'Manual Triage'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. In-kernel telemetry exposes root-cause microbursts before userspace is impacted.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Runtime Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> In-Kernel Verifier Approved | Sub-Microsecond XDP Isolation | Zero User-Kernel Context Switches
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2029 eBPF Observability
          </span>
        </div>
      </div>
    </div>
  );
};

export default EbpfKernelTelemetryAnomalyFlowSlide;
