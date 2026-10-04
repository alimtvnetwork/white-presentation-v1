// lint-allow: file-size reason="CrossCloudMeshLatencyRoutingSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  CrossCloudMeshLatencyRoutingSlideData,
  RoutingOptimizationStage,
  CloudTransitHopNode,
} from '../../../types/suite2028Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Globe,
  Network,
  Zap,
  Activity,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Route,
  ArrowRight,
  Lock,
  Sparkles,
} from 'lucide-react';

const DEF_STAGES: RoutingOptimizationStage[] = [
  {
    stepIndex: 0,
    stageName: 'Global Edge Ingress & Anycast BGP Steering',
    stageSubtitle: 'Directing client traffic to closest edge PoP among 280 planetary locations',
    globalP99LatencyMs: 52.0,
    bandwidthThroughputTbps: 8.4,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Multi-Cloud WireGuard Tunneling & Kernel Bypass',
    stageSubtitle: 'Establishing ChaCha20-Poly1305 encrypted eBPF XDP tunnel fabrics',
    globalP99LatencyMs: 44.0,
    bandwidthThroughputTbps: 11.2,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Real-Time Sub-Millisecond Jitter & Latency Probing',
    stageSubtitle: 'Continuous ICMP/UDP telemetry detecting congestion on trans-Atlantic cables',
    globalP99LatencyMs: 38.0,
    bandwidthThroughputTbps: 13.5,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Dynamic SLA-Optimized Path Rerouting & Failover',
    stageSubtitle: 'Instantaneous rerouting traffic away from congested undersea fiber bundles',
    globalP99LatencyMs: 34.0,
    bandwidthThroughputTbps: 14.8,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: CloudTransitHopNode[] = [
  {
    id: 'hop-us-eu',
    sourceCloud: 'AWS us-east-1',
    destinationCloud: 'GCP europe-west3',
    nominalLatencyMs: 82.0,
    optimizedLatencyMs: 49.0,
    packetLossPercentage: 0.001,
    tunnelEncryptionAlgorithm: 'ChaCha20-Poly1305',
    isHardwareAccelerated: true,
    hasSlaCompliant: true,
  },
  {
    id: 'hop-eu-apac',
    sourceCloud: 'GCP europe-west3',
    destinationCloud: 'Azure southeast-asia',
    nominalLatencyMs: 145.0,
    optimizedLatencyMs: 98.0,
    packetLossPercentage: 0.002,
    tunnelEncryptionAlgorithm: 'ChaCha20-Poly1305',
    isHardwareAccelerated: true,
    hasSlaCompliant: true,
  },
  {
    id: 'hop-apac-us',
    sourceCloud: 'Azure southeast-asia',
    destinationCloud: 'OCI us-ashburn',
    nominalLatencyMs: 168.0,
    optimizedLatencyMs: 112.0,
    packetLossPercentage: 0.001,
    tunnelEncryptionAlgorithm: 'ChaCha20-Poly1305',
    isHardwareAccelerated: true,
    hasSlaCompliant: true,
  },
];

export const CrossCloudMeshLatencyRoutingSlide: React.FC<{
  slide?: CrossCloudMeshLatencyRoutingSlideData;
  data?: CrossCloudMeshLatencyRoutingSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.routingStages?.length ? data.routingStages : DEF_STAGES;
  const nodes = data?.transitHops?.length ? data.transitHops : DEF_NODES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const hasBgp = data?.hasAnycastBgpRouting ?? true;
  const hasWireGuard = data?.hasWireGuardAcceleration ?? true;
  const hasSubSea = data?.hasSubSeaPathOptimization ?? true;

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
              <Globe size={16} className="text-cyan-500" />
              {data?.kicker || 'GLOBAL NETWORKING & SD-WAN'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Route size={14} /> Mesh: {data?.meshIdentifier || 'Anycast Global WAN Mesh v3'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" />
              Latency Cut: -{data?.globalAverageLatencyReductionPercent ?? 38.5}%
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <Activity size={14} className="text-indigo-500" />
              Undersea Tunnels: {data?.activeUnderseaTunnelsCount ?? 64} Active
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Cross-Cloud Mesh Latency Routing'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Global anycast edge ingress, WireGuard WAN overlay, real-time telemetry probing, and subsea fiber bypass.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Global P99</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.globalP99LatencyMs.toFixed(0)} ms
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Bandwidth</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.bandwidthThroughputTbps.toFixed(1)} Tbps
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
                    P99: {st.globalP99LatencyMs.toFixed(0)}ms latency
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                {st.bandwidthThroughputTbps.toFixed(1)} Tbps
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Multi-Cloud Transit Hops */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> Inter-Cloud WAN Links & Telemetry Routing
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {nodes.map((node, nIdx) => {
                const isCurrentLayer = nIdx === currentStep || (currentStep >= 2 && nIdx >= 2);
                const reductionPercent = Math.round(
                  ((node.nominalLatencyMs - node.optimizedLatencyMs) / node.nominalLatencyMs) * 100
                );
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
                      <div className="flex items-center gap-2">
                        <Network size={16} className={isCurrentLayer ? 'text-[var(--pres-accent)]' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{node.sourceCloud}</span>
                        <ArrowRight size={14} className="text-slate-400" />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{node.destinationCloud}</span>
                        {node.isHardwareAccelerated && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <Zap size={12} /> SmartNIC
                          </span>
                        )}
                        {node.hasSlaCompliant && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> SLA OK
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px] line-through">
                          {node.nominalLatencyMs.toFixed(0)}ms
                        </span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                          {node.optimizedLatencyMs.toFixed(0)}ms (-{reductionPercent}%)
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isCurrentLayer ? 'bg-[var(--pres-accent)]' : 'bg-slate-400 dark:bg-slate-600'
                        }`}
                        style={{ width: `${Math.min(100, (node.optimizedLatencyMs / node.nominalLatencyMs) * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Encryption: {node.tunnelEncryptionAlgorithm} (eBPF XDP)</span>
                      <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                        <Lock size={14} /> Packet Loss: {node.packetLossPercentage.toFixed(3)}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Route size={16} className="text-cyan-500" />
              Trans-Oceanic Sub-Sea Cables: MAREA, Dunant, Amitie Under Active Steering
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Sub-Millisecond Dynamic Failover Confirmed
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Global P99</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.globalP99LatencyMs.toFixed(0)} ms
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Throughput</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.bandwidthThroughputTbps.toFixed(1)} Tbps
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Anycast BGP Steering</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasBgp ? '280 Edge PoPs Active' : 'Unicast Default'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">WireGuard eBPF Acceleration</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasWireGuard ? 'Kernel Bypass XDP' : 'Standard Socket'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Sub-Sea Path Optimization</span>
                <span className="font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasSubSea ? 'Congestion-Aware Reroute' : 'Static Fiber'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Global WAN mesh latency compressed by 38.5% across trans-continental routes.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Runtime Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Zero SLA Breach | eBPF XDP Kernel Bypass Operational | Sub-Sea Path Optimization Active
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2028 Mesh Engine
          </span>
        </div>
      </div>
    </div>
  );
};
export default CrossCloudMeshLatencyRoutingSlide;
