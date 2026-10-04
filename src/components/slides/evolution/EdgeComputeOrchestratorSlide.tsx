// lint-allow: file-size reason="EdgeComputeOrchestratorSlide kinetic 4-stage 5G MEC edge workload orchestrator" max=120
import React from 'react';
import type { EdgeComputeOrchestratorSlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Server, CheckCircle2, Radio, Zap, Globe, ShieldCheck, Activity } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Node Telemetry Profiling', stageSubtitle: 'Sub-5ms RTT link probing, GPU capacity discovery, and thermal profiling', orchestratorEngine: 'eBPF Edge Agent v2', schedulingLatencyMilliseconds: 0.4, activeEdgeNodesCount: 42500, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'MILP Constraint Solver', stageSubtitle: 'Mixed-integer constraint optimization placing microservices within 5ms SLAs', orchestratorEngine: 'OrTools Constraint Optimizer', schedulingLatencyMilliseconds: 1.8, activeEdgeNodesCount: 42500, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'P2P Image Dissemination', stageSubtitle: 'Layer-deduplicated OCI container distribution via BitTorrent P2P mesh', orchestratorEngine: 'Dragonfly P2P Mesh', schedulingLatencyMilliseconds: 4.2, activeEdgeNodesCount: 42500, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'Sub-Second Failover Guard', stageSubtitle: 'Continuous ping health checks re-routing ingress traffic under 350ms', orchestratorEngine: 'Maglev Dynamic Load Balancer', schedulingLatencyMilliseconds: 0.35, activeEdgeNodesCount: 42500, isActive: false, isCompleted: false },
];

const DEF_NODES = [
  { id: 'en1', nodeIndex: 1, nodeLocation: 'MEC-Tokyo-Tower-42', roundTripLatencyMilliseconds: 2.1, activeContainersCount: 64, cpuUtilizationPercent: 64.2, isNodeOnline: true, hasGpuAcceleration: true, isWithinLatencySla: true },
  { id: 'en2', nodeIndex: 2, nodeLocation: 'MEC-Frankfurt-PoP-08', roundTripLatencyMilliseconds: 3.4, activeContainersCount: 48, cpuUtilizationPercent: 58.1, isNodeOnline: true, hasGpuAcceleration: true, isWithinLatencySla: true },
  { id: 'en3', nodeIndex: 3, nodeLocation: 'MEC-Chicago-Edge-15', roundTripLatencyMilliseconds: 1.8, activeContainersCount: 72, cpuUtilizationPercent: 71.4, isNodeOnline: true, hasGpuAcceleration: false, isWithinLatencySla: true },
  { id: 'en4', nodeIndex: 4, nodeLocation: 'MEC-Singapore-Hub-04', roundTripLatencyMilliseconds: 2.9, activeContainersCount: 54, cpuUtilizationPercent: 52.8, isNodeOnline: true, hasGpuAcceleration: true, isWithinLatencySla: true },
];

export const EdgeComputeOrchestratorSlide: React.FC<{ slide?: EdgeComputeOrchestratorSlideData; data?: EdgeComputeOrchestratorSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.orchestrationStages?.length ? data.orchestrationStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const nodes = data?.edgeNodes?.length ? data.edgeNodes : DEF_NODES;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><Server size={16} className="text-violet-500" />{data?.kicker || 'DECENTRALIZED 5G MEC COMPUTE'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> {(data?.globalEdgeNodesTotal || 42500).toLocaleString()} PoPs Active</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Edge Compute Workload Orchestrator: 5G MEC Sub-5ms Scheduling'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Decentralized edge orchestration fabric optimizing container placement across 42,500 5G MEC nodes with sub-second failover'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Mean Edge RTT</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.meanEdgeLatencyMs || 3.2}ms Sub-5ms</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Failover Target</span><span className="text-sm font-bold text-emerald-500">&lt; 350ms DYNAMIC</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Chief Software Engineer</span><span className="text-sm font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-3">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`step-interactive text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-sm flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_20px_var(--pres-accent)] text-white scale-[1.02] animate-active-beacon' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 opacity-75' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-sm opacity-75">{st.schedulingLatencyMilliseconds}ms</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[480px] items-stretch">
        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-violet-400">EDGE NODES TELEMETRY</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">4 PoP Targets</span></div>
          <div className="space-y-3 font-mono text-sm my-3">
            {nodes.map((n) => (
              <div key={n.id} className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-1">
                <div className="flex justify-between items-center"><span className="font-bold text-slate-200">{n.nodeLocation}</span><span className="text-sm text-emerald-400 font-bold">{n.roundTripLatencyMilliseconds}ms RTT</span></div>
                <div className="flex justify-between text-sm text-slate-400"><span>Containers: {n.activeContainersCount}</span><span className="text-sky-300">{n.cpuUtilizationPercent}% CPU</span></div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><Radio size={16} /> 5G Network Slicing Proximity Verified</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-sky-300">ORCHESTRATION PIPELINE</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Step {currentStep + 1} of 4</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Orchestration Phase</span>
              <div className="text-sky-300 font-bold text-base">{stages[currentStep]?.stageName}</div>
              <div className="text-sm text-slate-300 leading-relaxed font-poppins">{stages[currentStep]?.stageSubtitle}</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <div className="flex justify-between text-sm"><span className="text-slate-400">Engine:</span><span className="text-slate-200 font-bold">{stages[currentStep]?.orchestratorEngine}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-400">Active Node Fleet:</span><span className="text-emerald-400 font-bold">{stages[currentStep]?.activeEdgeNodesCount.toLocaleString()} PoPs</span></div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-sky-400 flex items-center gap-2"><Globe size={16} /> Anycast Route Injection Active</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'ring-2 ring-emerald-500 shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-emerald-400">FAILOVER & SLA CONFIRMATION</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Armed</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">SLA Compliance</span>
              <div className="text-emerald-400 font-bold text-3xl font-mono">99.992%</div>
              <div className="text-sm text-slate-400">Under 5ms latency guaranteed to 99.8% of users</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Sub-Second Failover</span>
              <div className="text-sky-300 font-bold text-base">&lt; 350ms Reroute</div>
              <div className="text-sm text-slate-400">Zero packet drop eBPF traffic migration</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><ShieldCheck size={16} /> Thermal Throttling Avoided</div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-4"><span className="text-sm uppercase text-slate-400">Fleet Health:</span><span className="text-emerald-400 font-bold">ALL 42,500 EDGE POPS CONVERGED & ONLINE</span></div>
        <div className="flex items-center gap-6"><span className="text-sm text-slate-400">Active Step: <strong className="text-slate-200">{currentStep + 1} / 4</strong></span><span className="text-sm text-slate-400">Failover Latency: <strong className="text-emerald-400">350ms</strong></span></div>
      </div>
    </div>
  );
};
