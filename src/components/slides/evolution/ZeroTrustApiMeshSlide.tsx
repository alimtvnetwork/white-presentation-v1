// lint-allow: file-size reason="ZeroTrustApiMeshSlide kinetic 4-stage zero-trust mesh authorization" max=120
import React from 'react';
import type { ZeroTrustApiMeshSlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldAlert, CheckCircle2, Lock, Key, Network, ShieldCheck, Activity } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Workload SVID Attestation', stageSubtitle: 'Kernel-level TPM measurement and SPIRE X.509 certificate issuance', authorizationEngine: 'SPIRE Server Agent Daemon', policyEvaluationMicroseconds: 240, rejectedTokenCount: 14, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'OPA Rego ABAC Evaluation', stageSubtitle: 'Fine-grained attribute evaluation and RBAC matrix validation', authorizationEngine: 'Open Policy Agent v0.68 Wasm', policyEvaluationMicroseconds: 420, rejectedTokenCount: 8, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'Hardware mTLS Tunnel', stageSubtitle: 'Hardware HSM ephemeral key negotiation with zero-copy socket encryption', authorizationEngine: 'Envoy Envoy-1.32 Ingress Gateway', policyEvaluationMicroseconds: 180, rejectedTokenCount: 2, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'SIEM Audit Stream', stageSubtitle: 'Signed audit event ingestion into immutable sovereign SIEM ledger', authorizationEngine: 'FluentBit to Sovereign SIEM Cluster', policyEvaluationMicroseconds: 120, rejectedTokenCount: 0, isActive: false, isCompleted: false },
];

const DEF_SERVICES = [
  { id: 'sv1', serviceIndex: 1, serviceName: 'auth-service', spiffeIdentifier: 'spiffe://corp.internal/ns/security/sa/auth', tlsCipherSuite: 'TLS_AES_256_GCM_SHA384', authorizedQps: 65400, isSvidAttested: true, hasMtlsActive: true, isPolicyCompliant: true },
  { id: 'sv2', serviceIndex: 2, serviceName: 'payment-gateway', spiffeIdentifier: 'spiffe://corp.internal/ns/finance/sa/payment', tlsCipherSuite: 'TLS_AES_256_GCM_SHA384', authorizedQps: 28200, isSvidAttested: true, hasMtlsActive: true, isPolicyCompliant: true },
  { id: 'sv3', serviceIndex: 3, serviceName: 'ledger-core', spiffeIdentifier: 'spiffe://corp.internal/ns/database/sa/ledger', tlsCipherSuite: 'TLS_CHACHA20_POLY1305_SHA256', authorizedQps: 48900, isSvidAttested: true, hasMtlsActive: true, isPolicyCompliant: true },
  { id: 'sv4', serviceIndex: 4, serviceName: 'audit-emitter', spiffeIdentifier: 'spiffe://corp.internal/ns/telemetry/sa/audit', tlsCipherSuite: 'TLS_AES_256_GCM_SHA384', authorizedQps: 18400, isSvidAttested: true, hasMtlsActive: true, isPolicyCompliant: true },
];

export const ZeroTrustApiMeshSlide: React.FC<{ slide?: ZeroTrustApiMeshSlideData; data?: ZeroTrustApiMeshSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.authorizationStages?.length ? data.authorizationStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const services = data?.services?.length ? data.services : DEF_SERVICES;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><Lock size={16} className="text-violet-500" />{data?.kicker || 'SERVICE-TO-SERVICE ZERO-TRUST'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> {data?.authorizedTrafficPercent || 99.98}% Authorized Traffic</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Zero-Trust API Mesh Authorization: SPIFFE/SPIRE Cryptographic Attestation'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Microsegmentation architecture verifying cryptographic workload identity, dynamic mTLS tunneling, and sub-millisecond OPA Rego governance'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Mesh Domain</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.meshDomain || 'mesh.corp.internal'}</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Enforcement</span><span className="text-sm font-bold text-emerald-500">HARDWARE HSM</span></div>
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
            <span className="text-sm opacity-75">{st.policyEvaluationMicroseconds}µs</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[480px] items-stretch">
        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-violet-400">MICROSERVICES IDENTITY MATRIX</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">4 Core SVIDs</span></div>
          <div className="space-y-3 font-mono text-sm my-3">
            {services.map((svc) => (
              <div key={svc.id} className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-1">
                <div className="flex justify-between items-center"><span className="font-bold text-slate-200">{svc.serviceName}</span><span className="text-sm text-emerald-400 font-bold">{svc.authorizedQps.toLocaleString()} QPS</span></div>
                <div className="text-sm text-slate-400 truncate">{svc.spiffeIdentifier}</div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><Key size={16} /> TPM v2.0 Kernel Attestation Bound</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-sky-300">AUTHORIZATION PIPELINE</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Step {currentStep + 1} of 4</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Active Authorization Stage</span>
              <div className="text-sky-300 font-bold text-base">{stages[currentStep]?.stageName}</div>
              <div className="text-sm text-slate-300 leading-relaxed font-poppins">{stages[currentStep]?.stageSubtitle}</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <div className="flex justify-between text-sm"><span className="text-slate-400">Evaluation Latency:</span><span className="text-emerald-400 font-bold">{stages[currentStep]?.policyEvaluationMicroseconds}µs Sub-ms</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-400">Rejected Bad Tokens:</span><span className="text-rose-400 font-bold">{stages[currentStep]?.rejectedTokenCount} (Dropped)</span></div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-sky-400 flex items-center gap-2"><Network size={16} /> Envoy Sidecar Ingress Filter v1.32</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'ring-2 ring-emerald-500 shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-emerald-400">SIEM STREAM & ATTESTATION</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Streamed</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Authorized Traffic Rate</span>
              <div className="text-emerald-400 font-bold text-3xl font-mono">99.98%</div>
              <div className="text-sm text-slate-400">Sub-second unauthorized token revoking</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Continuous Audit Stream</span>
              <div className="text-sky-300 font-bold text-base">Cryptographic Ledger Sync</div>
              <div className="text-sm text-slate-400">Tamper-evident streaming to sovereign SIEM</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><ShieldCheck size={16} /> Strict Zero-Trust Enforced</div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-4"><span className="text-sm uppercase text-slate-400">Security Mode:</span><span className="text-emerald-400 font-bold">STRICT MTLS HARDWARE HSM ENFORCEMENT</span></div>
        <div className="flex items-center gap-6"><span className="text-sm text-slate-400">Active Step: <strong className="text-slate-200">{currentStep + 1} / 4</strong></span><span className="text-sm text-slate-400">SVID Status: <strong className="text-emerald-400">ALL ATTESTED</strong></span></div>
      </div>
    </div>
  );
};
