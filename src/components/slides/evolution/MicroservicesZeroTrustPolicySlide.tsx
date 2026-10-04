// lint-allow: file-size reason="MicroservicesZeroTrustPolicySlide flat sovereign microservices zero-trust policy map" max=120
import React from 'react';
import type { MicroservicesZeroTrustPolicySlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Workflow, CheckCircle2, Lock, ShieldCheck, ArrowRight, Network, Activity } from 'lucide-react';

const DEF_EDGES = [
  { edgeId: 'ed1', edgeIndex: 1, sourceService: 'frontend-gateway', targetService: 'auth-service', authorizationAction: 'ALLOW_MTLS_SVID', trafficThroughputQps: 85400, droppedPacketsPerMinute: 0, isTlsMutualEnforced: true, hasStrictEgressFiltering: true, isPolicyCompliant: true },
  { edgeId: 'ed2', edgeIndex: 2, sourceService: 'auth-service', targetService: 'user-store', authorizationAction: 'ALLOW_MTLS_SVID', trafficThroughputQps: 42100, droppedPacketsPerMinute: 0, isTlsMutualEnforced: true, hasStrictEgressFiltering: true, isPolicyCompliant: true },
  { edgeId: 'ed3', edgeIndex: 3, sourceService: 'billing-worker', targetService: 'payment-api', authorizationAction: 'ALLOW_MTLS_SVID', trafficThroughputQps: 18200, droppedPacketsPerMinute: 0, isTlsMutualEnforced: true, hasStrictEgressFiltering: true, isPolicyCompliant: true },
  { edgeId: 'ed4', edgeIndex: 4, sourceService: 'payment-api', targetService: 'ledger-db', authorizationAction: 'ALLOW_MTLS_SVID', trafficThroughputQps: 12400, droppedPacketsPerMinute: 0, isTlsMutualEnforced: true, hasStrictEgressFiltering: true, isPolicyCompliant: true },
];

export const MicroservicesZeroTrustPolicySlide: React.FC<{ slide?: MicroservicesZeroTrustPolicySlideData; data?: MicroservicesZeroTrustPolicySlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const edges = data?.policyEdges?.length ? data.policyEdges : DEF_EDGES;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><Workflow size={16} className="text-violet-500" />{data?.kicker || 'SERVICE MESH SECURITY ARCHITECTURE'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> {data?.overallComplianceRatePercent || 100}% Policy Compliance</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Microservices Zero-Trust Policy Map: 100% mTLS Enforcement Matrix'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Declarative service mesh security topology visualizing cryptographic trust domains, strict egress policies, and real-time packet dropping'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Active mTLS</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{(data?.activeMtlsSessionsCount || 48200).toLocaleString()} Sessions</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Default Egress</span><span className="text-sm font-bold text-emerald-500">ZERO DEFAULT ALLOW</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Chief Software Engineer</span><span className="text-sm font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[550px] items-stretch">
        {edges.map((ed) => (
          <div key={ed.edgeId} className="plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between transition-all hover:scale-[1.01]">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-sm font-bold text-violet-400">EDGE 0{ed.edgeIndex}</span>
              <span className="font-mono text-sm px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">{ed.authorizationAction}</span>
            </div>
            <div className="space-y-4 font-mono text-sm my-3">
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
                <span className="text-sm text-slate-400 block uppercase">Source Workload</span>
                <span className="font-bold text-slate-200 text-sm block truncate">{ed.sourceService}</span>
                <div className="flex items-center justify-center my-1"><ArrowRight size={16} className="text-violet-400" /></div>
                <span className="text-sm text-slate-400 block uppercase">Target Workload</span>
                <span className="font-bold text-sky-300 text-sm block truncate">{ed.targetService}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
                <div className="flex justify-between items-center"><span className="text-sm text-slate-400">Throughput:</span><span className="font-bold text-emerald-400 text-sm">{(ed.trafficThroughputQps / 1000).toFixed(1)}K QPS</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-slate-400">Dropped Packets:</span><span className="font-bold text-sky-300 text-sm">{ed.droppedPacketsPerMinute} / min</span></div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><Lock size={16} /> Strict SPIFFE Attestation Enforced</div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-6"><span className="text-sm uppercase text-slate-400">Total Services:</span><span className="text-emerald-400 font-bold text-base">340 Mesh Nodes</span><span className="text-sm uppercase text-slate-400">Egress Policies:</span><span className="text-sky-300 font-bold text-base">1,280 Rules</span><span className="text-sm uppercase text-slate-400">Policy Evaluation:</span><span className="text-violet-400 font-bold text-base">450µs eBPF</span></div>
        <div className="flex items-center gap-4"><span className="text-sm text-slate-400">Policy State: <strong className="text-emerald-400">FULL COMPLIANCE</strong></span></div>
      </div>
    </div>
  );
};
