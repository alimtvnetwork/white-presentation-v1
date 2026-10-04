// lint-allow: file-size reason="ZeroTrustIdentityMeshTopologySlide flat sovereign SPIFFE/SPIRE identity mesh topology" max=420
import React from 'react';
import type {
  ZeroTrustIdentityMeshTopologySlideData,
  SpireWorkloadNode,
} from '../../../types/suite2029Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  ShieldCheck,
  Lock,
  Clock,
  CheckCircle2,
  Zap,
  Radio,
  KeyRound,
  Network,
  Cpu,
  Fingerprint,
  Layers,
  Activity,
} from 'lucide-react';

const DEF_WORKLOADS: SpireWorkloadNode[] = [
  {
    id: 'node-ingress',
    serviceName: 'API Ingress Gateway Envoy',
    spiffeId: 'spiffe://prod.internal/ns/gateway/sa/envoy-ingress',
    trustDomain: 'prod.internal',
    mtlsHandshakeDurationMs: 0.38,
    isAttested: true,
    hasValidSvid: true,
  },
  {
    id: 'node-auth',
    serviceName: 'Auth & Session Token Broker',
    spiffeId: 'spiffe://prod.internal/ns/security/sa/token-broker',
    trustDomain: 'prod.internal',
    mtlsHandshakeDurationMs: 0.42,
    isAttested: true,
    hasValidSvid: true,
  },
  {
    id: 'node-matcher',
    serviceName: 'Distributed Order Matching Core',
    spiffeId: 'spiffe://prod.internal/ns/fintech/sa/order-matcher',
    trustDomain: 'prod.internal',
    mtlsHandshakeDurationMs: 0.29,
    isAttested: true,
    hasValidSvid: true,
  },
  {
    id: 'node-ledger',
    serviceName: 'Ledger Raft State Replicator',
    spiffeId: 'spiffe://prod.internal/ns/storage/sa/raft-replicated-log',
    trustDomain: 'prod.internal',
    mtlsHandshakeDurationMs: 0.35,
    isAttested: true,
    hasValidSvid: true,
  },
  {
    id: 'node-ebpf',
    serviceName: 'Kernel eBPF Telemetry Collector',
    spiffeId: 'spiffe://prod.internal/ns/observability/sa/ebpf-collector',
    trustDomain: 'prod.internal',
    mtlsHandshakeDurationMs: 0.45,
    isAttested: true,
    hasValidSvid: true,
  },
  {
    id: 'node-vault',
    serviceName: 'PQC HSM Vault Broker Agent',
    spiffeId: 'spiffe://prod.internal/ns/crypto/sa/pqc-vault-agent',
    trustDomain: 'prod.internal',
    mtlsHandshakeDurationMs: 0.31,
    isAttested: true,
    hasValidSvid: true,
  },
];

export const ZeroTrustIdentityMeshTopologySlide: React.FC<{
  slide?: ZeroTrustIdentityMeshTopologySlideData;
  data?: ZeroTrustIdentityMeshTopologySlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const workloads = data?.workloadNodes?.length ? data.workloadNodes : DEF_WORKLOADS;
  const meshId = data?.meshIdentifier || 'SPIRE-MESH-GLOBAL-01';
  const totalWorkloads = data?.totalAttestedWorkloadsCount ?? 18450;
  const mtlsRate = data?.mtlsEncryptionRatePercentage ?? 100;
  const svidLifetime = data?.averageSvidLifetimeHours ?? 1.0;

  const isSpiffeCompliant = data?.isSpiffeCompliant ?? true;
  const hasContinuousMtls = data?.hasContinuousMtls ?? true;
  const hasPostureEvaluation = data?.hasPostureEvaluationActive ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Fingerprint size={16} className="text-cyan-500" />
              {data?.kicker || 'ZERO TRUST ARCHITECTURE & WORKLOAD IDENTITY'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              Identity Standard: {isSpiffeCompliant ? 'SPIFFE/SPIRE Compliant' : 'Custom'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Network size={14} /> Mesh: {meshId}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <Radio size={14} /> Continuous Auth: {hasContinuousMtls ? 'Always-On mTLS' : 'Per-Session'}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Zero Trust Workload Identity Mesh Topology'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Cryptographically verified SPIFFE/SPIRE workload identities with short-lived X.509 SVIDs, sub-millisecond mTLS handshakes, and continuous runtime posture attestation.'}
          </p>
        </div>

        {/* Top-Right Executive Metric Badge */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Attested Pods</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
              {totalWorkloads.toLocaleString()}
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">mTLS Rate</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
              {mtlsRate.toFixed(1)}% E2E
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

      {/* Topline KPI Strip (4 Cards) */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Active Workloads</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[22px]">{totalWorkloads.toLocaleString()} Pods</span>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Fingerprint size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">mTLS Enforcement</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">{mtlsRate.toFixed(1)}% Strict</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">SVID Rotation Time</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[22px]">{svidLifetime.toFixed(1)} Hour TTL</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Clock size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Continuous Posture</span>
            <span className="text-amber-600 dark:text-amber-400 font-bold text-[22px]">
              {hasPostureEvaluation ? '100% Attested' : 'Auditing'}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Activity size={24} />
          </div>
        </div>
      </div>

      {/* Main 6-Workload Bento Grid */}
      <div className="grid grid-cols-3 gap-5 z-10 my-auto items-stretch h-[540px]">
        {workloads.map((node) => {
          return (
            <div
              key={node.id}
              className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-5 flex flex-col justify-between shadow-xl hover:-translate-y-0.5 hover:border-[var(--pres-accent)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <div className="flex items-center gap-2">
                    <KeyRound size={18} className="text-cyan-500" />
                    <span className="font-bold text-slate-900 dark:text-white text-[16px] leading-tight">
                      {node.serviceName}
                    </span>
                  </div>
                  <span className="text-[14px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                    {node.isAttested ? 'Attested' : 'Pending'}
                  </span>
                </div>

                <div className="mt-4 flex flex-col gap-2.5 font-mono text-[14px]">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-[var(--pres-border)]">
                    <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase mb-1">SPIFFE ID</span>
                    <span className="text-cyan-700 dark:text-cyan-300 font-bold text-[14px] break-all">
                      {node.spiffeId}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Trust Domain:</span>
                    <span className="text-slate-800 dark:text-slate-200 font-bold">{node.trustDomain}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">mTLS Handshake:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[16px]">
                      {node.mtlsHandshakeDurationMs.toFixed(2)} ms
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
                <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  SVID: {node.hasValidSvid ? 'Valid & Cryptographic' : 'Expired'}
                </span>
                <span className="text-[var(--pres-accent)] font-bold">Hardware TPM Root</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Identity Integrity:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <ShieldCheck size={18} /> Zero Static API Secrets | Ephemeral Hardware-Attested Certificates | Strict Zero Trust Ingress
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
            <Fingerprint size={16} /> Suite 2029 Identity Mesh
          </span>
        </div>
      </div>
    </div>
  );
};
