// lint-allow: file-size reason="ZeroTrustSpiffeSlide flat sovereign SPIFFE microsegmentation" max=120
import React from 'react';
import type { ZeroTrustSpiffeSlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldCheck, CheckCircle2, Lock, Key, Network, Shield } from 'lucide-react';

const DEF_WORKLOADS = [
  { spiffeId: 'spiffe://prod.apex.internal/ns/ai/sa/inference-worker', workloadNamespace: 'ai-serving', svidTtlSeconds: 3600, certificateIssuer: 'SPIRE Root CA', isIdentityAttested: true, hasMtlsEnforced: true, isCompliant: true },
  { spiffeId: 'spiffe://prod.apex.internal/ns/mesh/sa/envoy-sidecar', workloadNamespace: 'mesh-ingress', svidTtlSeconds: 3600, certificateIssuer: 'SPIRE Agent (TPM RoT)', isIdentityAttested: true, hasMtlsEnforced: true, isCompliant: true },
  { spiffeId: 'spiffe://prod.apex.internal/ns/db/sa/distributed-wal', workloadNamespace: 'storage-core', svidTtlSeconds: 3600, certificateIssuer: 'Hardware TPM 2.0 SVID', isIdentityAttested: true, hasMtlsEnforced: true, isCompliant: true },
];

const DEF_POLICIES = [
  { sourceWorkload: 'inference-worker', destinationWorkload: 'distributed-wal', authorizedMethod: 'gRPC CommitEntry / StreamWAL', isEnforced: true },
  { sourceWorkload: 'envoy-ingress', destinationWorkload: 'inference-worker', authorizedMethod: 'POST /v1/chat/completions (mTLS)', isEnforced: true },
];

export const ZeroTrustSpiffeSlide: React.FC<{ slide?: ZeroTrustSpiffeSlideData; data?: ZeroTrustSpiffeSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const workloads = data?.workloads?.length ? data.workloads : DEF_WORKLOADS;
  const policies = data?.securityPolicies?.length ? data.securityPolicies : DEF_POLICIES;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><Lock size={15} className="text-violet-500" />{data?.kicker || 'ZERO-TRUST IDENTITY & MICROSEGMENTATION'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {(data?.activeWorkloadIdentities || 2450).toLocaleString()} Attested SVIDs • 1-Hour Rotation</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Zero-Trust SPIFFE Microsegmentation: X.509 SVID Mesh'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Zero static secrets, ephemeral hardware-attested cryptographic identities, and strictly enforced pairwise mTLS'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Trust Domain</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.trustDomain || 'spiffe://prod.apex.internal'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Static Secrets</span><span className="text-sm font-bold text-emerald-400">0 (Zero Static Keys)</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Chief Software Engineer</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[530px] items-stretch">
        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-400 flex items-center gap-2"><Key size={16} /> ATTESTED WORKLOAD SVIDs</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">X.509 SVID</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {workloads.map((w, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center"><span className="text-[10px] text-emerald-400 font-bold">{w.workloadNamespace}</span><span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">mTLS ENFORCED</span></div>
                <div className="text-[10px] text-slate-200 font-mono break-all">{w.spiffeId}</div>
                <div className="text-[10px] text-slate-500">Issuer: {w.certificateIssuer} • TTL: {w.svidTtlSeconds}s</div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><ShieldCheck size={13} /> Hardware TPM 2.0 Root-of-Trust Certified</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-sky-400 flex items-center gap-2"><Network size={16} /> STRICT PAIRWISE POLICIES</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Deny All Default</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {policies.map((pol, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <div className="flex justify-between text-xs font-mono"><span className="text-sky-300">{pol.sourceWorkload}</span><span className="text-slate-500">➔</span><span className="text-emerald-400">{pol.destinationWorkload}</span></div>
                <div className="text-[11px] text-slate-300 font-mono">{pol.authorizedMethod}</div>
              </div>
            ))}
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">Default DENY-ALL perimeter rejects unauthenticated traffic at TCP handshake layer before application parsing.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Zero Lateral Movement Allowed</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-2"><Shield size={16} /> EPHEMERAL ROTATION</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">SPIRE Agent</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">ROTATION FREQUENCY</span>
              <div className="text-emerald-300 font-bold text-sm font-mono">Every 60 Minutes (Automatic)</div>
              <div className="text-[11px] text-slate-400">Short-lived certificates render leaked tokens useless within one hour.</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">SECRET STORE INTEGRATION</span>
              <div className="text-sky-300 font-bold text-xs">Direct Kernel Memory Delivery</div>
              <div className="text-[10px] text-slate-400">Zero keys ever written to persistent disk filesystems</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Microsegmentation:</span><strong className="font-bold">100% ENFORCED</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> SPIFFE Identity Mesh Active</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Zero Static Secrets: <strong className="text-slate-200">100% COMPLIANT</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Default Posture: <strong className="text-emerald-400">STRICT DENY-ALL</strong></span>
        </div>
        <div className="text-slate-400">Single Step Overview Archetype</div>
      </div>
    </div>
  );
};
