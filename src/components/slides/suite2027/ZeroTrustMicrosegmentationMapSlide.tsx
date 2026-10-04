// lint-allow: file-size reason="ZeroTrustMicrosegmentationMapSlide kinetic 4-step zero trust microsegmentation topology" max=200
import React from 'react';
import type {
  ZeroTrustMicrosegmentationMapSlideData,
  SegmentationStage,
  MicrosegmentNode,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  Network,
  CheckCircle2,
  Cpu,
  AlertTriangle,
  Server,
  Zap,
  Radio,
} from 'lucide-react';

const DEF_STAGES: SegmentationStage[] = [
  {
    stepIndex: 0,
    stageName: 'SPIFFE/SPIRE Attestation',
    stageSubtitle: 'Cryptographic node and workload identity minting with X.509 SVIDs',
    enforcedRuleCount: 1420,
    packetsInspectedRatePerSec: 165000,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Kernel eBPF Filter Mesh',
    stageSubtitle: 'Zero-overhead socket-level packet inspection without sidecar proxies',
    enforcedRuleCount: 2890,
    packetsInspectedRatePerSec: 280000,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Strict Mutual TLS (mTLS)',
    stageSubtitle: 'WireGuard/TLS 1.3 encrypted peer-to-peer data plane with ephemeral rotation',
    enforcedRuleCount: 4150,
    packetsInspectedRatePerSec: 390000,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Quarantine & Blast Radius Isolation',
    stageSubtitle: 'Autonomous anomaly tripwire: instantaneous socket severance on policy breach',
    enforcedRuleCount: 5620,
    packetsInspectedRatePerSec: 510000,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: MicrosegmentNode[] = [
  {
    id: 'node-auth',
    workloadName: 'auth-gateway-svc',
    namespace: 'prod-edge',
    securityZone: 'Zone 0: Ingress DMZ',
    svidIdentity: 'spiffe://corp.internal/ns/prod-edge/sa/auth-gateway',
    isQuarantined: false,
    hasEbpfFilterActive: true,
  },
  {
    id: 'node-payment',
    workloadName: 'payment-settlement-core',
    namespace: 'prod-banking',
    securityZone: 'Zone 1: Core Financial',
    svidIdentity: 'spiffe://corp.internal/ns/prod-banking/sa/payment-core',
    isQuarantined: false,
    hasEbpfFilterActive: true,
  },
  {
    id: 'node-infer',
    workloadName: 'vllm-inference-fleet',
    namespace: 'prod-compute',
    securityZone: 'Zone 2: AI Compute Fabric',
    svidIdentity: 'spiffe://corp.internal/ns/prod-compute/sa/vllm-nodes',
    isQuarantined: false,
    hasEbpfFilterActive: true,
  },
  {
    id: 'node-vault',
    workloadName: 'hsm-vault-kms',
    namespace: 'prod-security',
    securityZone: 'Zone 3: Key Enclave',
    svidIdentity: 'spiffe://corp.internal/ns/prod-security/sa/kms-vault',
    isQuarantined: false,
    hasEbpfFilterActive: true,
  },
  {
    id: 'node-analytics',
    workloadName: 'telemetry-collector-agent',
    namespace: 'prod-observability',
    securityZone: 'Zone 4: Telemetry Mesh',
    svidIdentity: 'spiffe://corp.internal/ns/prod-observability/sa/telemetry',
    isQuarantined: false,
    hasEbpfFilterActive: true,
  },
  {
    id: 'node-untrusted',
    workloadName: 'untrusted-webhook-worker',
    namespace: 'prod-sandbox',
    securityZone: 'Zone 5: Containment Sandbox',
    svidIdentity: 'spiffe://corp.internal/ns/prod-sandbox/sa/webhook-runner',
    isQuarantined: true,
    hasEbpfFilterActive: true,
  },
];

export const ZeroTrustMicrosegmentationMapSlide: React.FC<{
  slide?: ZeroTrustMicrosegmentationMapSlideData;
  data?: ZeroTrustMicrosegmentationMapSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.segmentationStages?.length ? data.segmentationStages : DEF_STAGES;
  const nodes = data?.workloadNodes?.length ? data.workloadNodes : DEF_NODES;

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
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-500" />
              {data?.kicker || 'ZERO-TRUST ARCHITECTURE & KERNEL MICROSEGMENTATION'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Network size={14} /> Cluster: {data?.clusterIdentifier || 'prod-mesh-us-east-cluster-01'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Lock size={14} className="text-cyan-500" />
              Rejection: {data?.packetRejectionRatePpm ?? 12.4} PPM
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Zero-Trust Microsegmentation & eBPF Policy Mesh'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Real-time cryptographic identity validation, kernel socket filtering, mutual TLS transport, and automated blast-radius quarantine containment.'}
          </p>
        </div>

        {/* Telemetry Indicator */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Rules Enforced</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.enforcedRuleCount.toLocaleString()}
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Inspection Rate</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {(activeStage.packetsInspectedRatePerSec / 1000).toFixed(0)}k pkts/sec
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
                    {st.enforcedRuleCount.toLocaleString()} Active Rules
                  </div>
                </div>
              </div>
              <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                Phase {st.stepIndex + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Plane 1 Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Workload Microsegmentation Topology Map */}
        <div className="col-span-8 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Network size={16} className="text-[var(--pres-accent)]" /> Active Microsegment Workloads & SPIFFE Identities
              </span>
              <span className="font-mono text-[12px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                eBPF Ingress/Egress Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3.5 mt-4">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={`p-3.5 rounded-xl border transition-all duration-300 ${
                    node.isQuarantined
                      ? 'border-rose-500/60 bg-rose-500/10 ring-1 ring-rose-500/40 shadow-sm'
                      : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:border-[var(--pres-accent)] hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[13px] mb-2">
                    <div className="flex items-center gap-2">
                      <Server size={15} className={node.isQuarantined ? 'text-rose-500' : 'text-slate-400'} />
                      <span className="font-bold text-slate-800 dark:text-slate-200">{node.workloadName}</span>
                    </div>
                    {node.isQuarantined ? (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/40 flex items-center gap-1">
                        <AlertTriangle size={11} /> QUARANTINED
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 size={11} /> Enforced
                      </span>
                    )}
                  </div>

                  <div className="font-mono text-[12px] space-y-1">
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                      <span>Security Zone:</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{node.securityZone}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                      <span>Namespace:</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{node.namespace}</span>
                    </div>
                    <div className="pt-1.5 border-t border-slate-200/60 dark:border-slate-800/60 truncate text-[11px] text-cyan-600 dark:text-cyan-400">
                      {node.svidIdentity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[12px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Radio size={14} className="text-emerald-500" />
              Live Mesh Status: 0 unauthenticated packets passed in last 10^8 cycles
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              100% SPIFFE Cryptographic Identity Coverage
            </span>
          </div>
        </div>

        {/* Right Bento: Active Step Policy Deep-Dive */}
        <div className="col-span-4 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Cpu size={16} className="text-emerald-500" /> Step {currentStep + 1} Deep Inspection
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[12px] border border-emerald-500/30">
                Active Protocol
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
                  <span className="text-slate-500 dark:text-slate-400 text-[11px] block uppercase">Enforced Rules</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
                    {activeStage.enforcedRuleCount.toLocaleString()}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[11px] block uppercase">Packets/Sec</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
                    {(activeStage.packetsInspectedRatePerSec / 1000).toFixed(0)}k
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[13px]">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Kernel eBPF Socket Filters</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasEbpfActive ?? true ? 'Active (Sub-0.2ms)' : 'Bypassed'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Strict Mutual TLS (mTLS)</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasMutualTls ?? true ? 'WireGuard / TLS 1.3' : 'Disabled'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Quarantine Engagement</span>
                <span className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                  <ShieldAlert size={14} /> {data?.isQuarantineEngaged ?? true ? 'Auto-Sever Active' : 'Manual'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[12px]">
            <Zap size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step {currentStep + 1} of {stages.length} locked. Zero trust perimeter verified at kernel boundary.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">Security Mandate:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> NIST SP 800-207 Zero Trust Compliance Certified
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2027 Core
          </span>
        </div>
      </div>
    </div>
  );
};
