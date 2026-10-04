// lint-allow: file-size reason="ZeroTrustCloudWorkloadEntitlementGraphSlide flat sovereign zero-trust entitlement graph" max=420
import React from 'react';
import type {
  ZeroTrustCloudWorkloadEntitlementGraphSlideData,
  WorkloadEntitlementEdge,
} from '../../../types/suite2030Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Lock,
  ShieldAlert,
  CheckCircle2,
  Clock,
  Server,
  KeyRound,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';

const DEF_EDGES: WorkloadEntitlementEdge[] = [
  {
    id: 'ent-edge-01',
    principalIdentity: 'service-account:k8s-checkout-prod',
    targetCloudResource: 'arn:aws:dynamodb:checkout-ledger',
    effectivePermissionLevel: 'PutItemOnly (Least-Privilege)',
    lastUsedDaysAgo: 0,
    isJitGranted: true,
    hasOverprivilegedRisk: false,
  },
  {
    id: 'ent-edge-02',
    principalIdentity: 'role:developer-sandbox-access',
    targetCloudResource: 'arn:aws:kms:prod-master-key',
    effectivePermissionLevel: 'AdminAccess (Overprivileged Flag)',
    lastUsedDaysAgo: 45,
    isJitGranted: false,
    hasOverprivilegedRisk: true,
  },
  {
    id: 'ent-edge-03',
    principalIdentity: 'workload:lambda-data-sync',
    targetCloudResource: 's3://corp-analytics-lakehouse',
    effectivePermissionLevel: 'GetObjectOnly (Read-Scoped)',
    lastUsedDaysAgo: 2,
    isJitGranted: true,
    hasOverprivilegedRisk: false,
  },
];

export const ZeroTrustCloudWorkloadEntitlementGraphSlide: React.FC<{
  slide?: ZeroTrustCloudWorkloadEntitlementGraphSlideData;
  data?: ZeroTrustCloudWorkloadEntitlementGraphSlideData;
  activeStep?: number;
}> = ({ slide, data: propData }) => {
  const data = slide || propData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const edges = data?.entitlementEdges?.length ? data.entitlementEdges : DEF_EDGES;
  const reductionPct = data?.dormantEntitlementReductionPercentage ?? 84.5;
  const monitoredCount = data?.totalMonitoredIdentitiesCount ?? 12400;
  const graphId = data?.graphIdentifier || 'CIEM-GRAPH-MULTI-CLOUD';
  const hasGlow = data?.hasTelemetryGlow ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[56px_76px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[clamp(0.875rem,1.2vw,1.0rem)] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-2">
              <Lock size={16} className="text-cyan-600 dark:text-cyan-400" />
              {data?.kicker || 'CLOUD IDENTITY & PERIMETERLESS SECURITY'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Server size={14} /> Graph: {graphId}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400" />
              JIT Access: ENFORCED
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30 flex items-center gap-2">
              <KeyRound size={14} className="text-indigo-600 dark:text-indigo-400" />
              Standing Admins: ZERO
            </span>
          </div>

          <h1
            className="text-[clamp(2.0rem,2.8vw,2.75rem)] font-ubuntu font-bold tracking-tight mb-2 leading-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Zero-Trust Cloud Workload Entitlement Graph'}
          </h1>
          <p
            className="font-poppins text-[clamp(1.0rem,1.4vw,1.125rem)] text-slate-700 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Real-time CIEM least-privilege enforcement eliminating standing access and dormant entitlements.'}
          </p>
        </div>

        {/* Telemetry Hero Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] flex items-center gap-6 font-mono">
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Dormant Reduction</span>
            <span className="text-[clamp(2.75rem,5.0vw,4.5rem)] font-bold leading-none text-emerald-700 dark:text-emerald-400">
              {reductionPct.toFixed(1)}%
            </span>
          </div>
          <div className="w-[1px] h-12 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Monitored Roles</span>
            <span className="text-indigo-700 dark:text-indigo-400 font-bold text-[24px]">
              {monitoredCount.toLocaleString()}
            </span>
            <span className="block text-[14px] text-slate-500 dark:text-slate-400">
              Ephemeral JIT: 15 min
            </span>
          </div>
          <div className="w-[1px] h-12 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Lead Architect</span>
            <span className="text-slate-900 dark:text-slate-100 font-bold text-[16px] block">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
            <span className="text-[14px] text-[var(--pres-accent)] font-semibold">
              {data?.leadRole || 'Chief Software Engineer'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Workload Entitlement Edges & Policy Matrix */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Lock size={18} className="text-[var(--pres-accent)]" /> Active Workload Entitlements & JIT Grant Status
              </span>
              <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 font-bold border border-cyan-500/30">
                Live Identity Graph
              </span>
            </div>

            <div className="mt-4 space-y-3.5 font-mono">
              {edges.map((edge) => (
                <div
                  key={edge.id}
                  className={`p-4 rounded-xl border bg-[var(--pres-bg)]/60 ${
                    edge.hasOverprivilegedRisk
                      ? 'border-amber-500/40 bg-amber-500/5'
                      : 'border-[var(--pres-border)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-[15px] text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <Server size={15} className="text-cyan-600 dark:text-cyan-400" />
                      {edge.principalIdentity}
                    </span>
                    {edge.hasOverprivilegedRisk ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[14px] font-bold bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/40 flex items-center gap-1">
                        <AlertTriangle size={13} /> OVERPRIVILEGED
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[14px] font-bold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 size={13} /> JIT SECURED
                      </span>
                    )}
                  </div>

                  <div className="text-[14px] text-slate-600 dark:text-slate-400 mb-2">
                    Target: <code className="text-slate-800 dark:text-slate-200 font-semibold">{edge.targetCloudResource}</code>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[var(--pres-border)] text-[14px]">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block">Permission Scope</span>
                      <span className="font-bold text-slate-900 dark:text-slate-100">{edge.effectivePermissionLevel}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block">Last Active</span>
                      <span className="font-bold text-indigo-700 dark:text-indigo-400">
                        {edge.lastUsedDaysAgo === 0 ? 'Today (Active Now)' : `${edge.lastUsedDaysAgo} days ago`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between text-[14px] font-mono text-slate-600 dark:text-slate-400">
            <span>Dormant Entitlement Reaper: Auto-Pruning &gt; 30 Days Inactivity</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Zero Standing Admin Roles</span>
          </div>
        </div>

        {/* Right Bento: Blast Radius Guardrails */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <ShieldAlert size={18} className="text-emerald-600 dark:text-emerald-400" /> Blast Radius & Isolation Policies
              </span>
              <span className="text-[14px] font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                LEAST PRIVILEGE
              </span>
            </div>

            <div className="mt-4 space-y-3 font-mono text-[14px]">
              <div className="p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg)]/60">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <Clock size={15} className="text-indigo-500" /> Ephemeral JIT Token Vault
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">15m TTL</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[14px]">
                  Workload tokens generated just-in-time with cryptographic expiration after 15 minutes.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg)]/60">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <ShieldCheck size={15} className="text-emerald-500" /> Cross-Account Boundary Guard
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">STRICT AIR-GAP</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[14px]">
                  Blocks privilege escalation across AWS, GCP, and Azure subscription perimeters.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg)]/60">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <KeyRound size={15} className="text-cyan-500" /> Continuous CIEM Analytics
                  </span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold">100% AUDITED</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[14px]">
                  Real-time identity graph modeling graphs 12,400+ identities and resource relationships.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-200 font-mono text-[14px] flex items-center gap-2">
            <Sparkles size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span>Zero-Trust validation: Overprivileged roles reduced by 84.5% across all production clouds.</span>
          </div>
        </div>
      </div>

      {/* Plane 2 Telemetry Footer */}
      <div className={`plane-1-raised z-10 px-6 py-3.5 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] flex items-center justify-between font-mono text-[14px] text-slate-700 dark:text-slate-300 shadow-md ${hasGlow ? 'shadow-cyan-500/10' : ''}`}>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            CIEM STATUS: LEAST-PRIVILEGE ENFORCED
          </span>
          <span>Access Lifetime: <strong className="text-indigo-700 dark:text-indigo-400">15 min Ephemeral</strong></span>
          <span>Cross-Account Boundary: <strong className="text-emerald-700 dark:text-emerald-400">STRICT</strong></span>
        </div>
        <div className="flex items-center gap-6">
          <span>Lead Architect: <strong>{data?.leadArchitect || 'Alim Ul Karim'}</strong>, <span className="text-[var(--pres-accent)]">{data?.leadRole || 'Chief Software Engineer'}</span></span>
          <span className="text-slate-500 dark:text-slate-400">16:9 4K Precision DOM Standard</span>
        </div>
      </div>
    </div>
  );
};

export default ZeroTrustCloudWorkloadEntitlementGraphSlide;
