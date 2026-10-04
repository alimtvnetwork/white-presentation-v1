// lint-allow: file-size reason="GitOpsArgoCdSyncSlide kinetic 4-stage reconciliation drift wave" max=120
import React from 'react';
import type { GitOpsArgoCdSyncSlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { GitBranch, CheckCircle2, ShieldCheck, Activity, Layers, RefreshCw } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Git Ingestion', stageSubtitle: 'PGP signature & OCI chart bundle fetch', actionSummary: 'Verified commit sha and parsed Helm values', elapsedTimeMs: 280, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'Drift Detection', stageSubtitle: 'Three-way JSON patch diff vs etcd', actionSummary: 'Found 4-replica delta and env var drift', elapsedTimeMs: 640, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'Wave Application', stageSubtitle: 'Ordered sync waves (CRD -> Pods)', actionSummary: 'Rolling update with zero dropped TCP sockets', elapsedTimeMs: 2400, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'Steady State', stageSubtitle: 'Readiness probes green seal', actionSummary: 'All pods healthy with zero error budget burn', elapsedTimeMs: 880, isActive: false, isCompleted: false },
];
const DEF_RESOURCES = [
  { id: 'r1', resourceKind: 'VirtualService', resourceName: 'checkout-vs', targetNamespace: 'prod-mesh', syncWave: 1, syncStatus: 'SYNCED', isSynced: true, isHealthy: true, hasDriftDetected: false },
  { id: 'r2', resourceKind: 'Deployment', resourceName: 'checkout-service', targetNamespace: 'prod-mesh', syncWave: 2, syncStatus: 'SYNCED', isSynced: true, isHealthy: true, hasDriftDetected: false },
  { id: 'r3', resourceKind: 'HPA', resourceName: 'checkout-scaler', targetNamespace: 'prod-mesh', syncWave: 3, syncStatus: 'HEALTHY', isSynced: true, isHealthy: true, hasDriftDetected: false },
];

export const GitOpsArgoCdSyncSlide: React.FC<{ slide?: GitOpsArgoCdSyncSlideData; data?: GitOpsArgoCdSyncSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.reconciliationStages?.length ? data.reconciliationStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const resources = data?.resources?.length ? data.resources : DEF_RESOURCES;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><GitBranch size={15} className="text-cyan-500" />{data?.kicker || 'DECLARATIVE CLUSTER INFRASTRUCTURE'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data?.syncDurationSeconds || 4.2}s Sync Cycle • Zero Drift</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'GitOps ArgoCD Sync Reconciliation: Declarative Drift Correction'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Continuous Git-to-cluster synchronization with automated drift detection and multi-wave application'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Cluster</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.clusterTarget || 'k8s-prod-us-east-1'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Git Commit</span><span className="text-sm font-bold text-cyan-400">{data?.gitRevisionSha || '9f4a8b2c1d3e'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Chief Software Engineer</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`step-interactive text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white scale-[1.02]' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 opacity-75' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-[10px] opacity-75 truncate max-w-[110px]">{st.elapsedTimeMs}ms</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-cyan-400">DESIRED GIT STATE</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">Source of Truth</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">APPLICATION</span>
              <div className="text-slate-200 font-bold">{data?.applicationName || 'core-checkout-service'}</div>
              <div className="text-[11px] text-cyan-300">Repo: org/manifests.git@main</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">ACTION SUMMARY</span>
              <div className="text-slate-300 text-[11px]">{stages[currentStep]?.actionSummary}</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><RefreshCw size={13} /> Automated Self-Healing Active</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-300">RECONCILIATION ENGINE</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">Three-Way Patch</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">ACTIVE STAGE SUBTITLE</span>
              <div className="text-violet-300 font-bold text-xs">{stages[currentStep]?.stageSubtitle}</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">Deterministic sync wave ordering guarantees zero cascading restart failure.</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">Elapsed Execution:</span><strong className="text-emerald-400">{stages[currentStep]?.elapsedTimeMs}ms</strong></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Zero-Downtime Wave Application Enforced</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400">LIVE CLUSTER RESOURCES</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">K8s Target</span></div>
          <div className="space-y-2 font-mono text-xs my-3">
            {resources.map((res) => (
              <div key={res.id} className="p-2.5 rounded-xl bg-black/30 border border-slate-800 flex items-center justify-between">
                <div><span className="text-[10px] text-slate-400 block">{res.resourceKind}</span><span className="text-slate-200 font-bold text-[11px]">{res.resourceName}</span></div>
                <div className="text-right"><span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">{res.syncStatus}</span><span className="text-[10px] text-slate-500 block">Wave {res.syncWave}</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Sync Verification:</span><strong className="font-bold">100% HEALTHY • 0 DRIFT</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> ArgoCD Sync Reconciled</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Auto-Prune: <strong className="text-slate-200">ACTIVE</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Self-Healing: <strong className="text-emerald-400">CONTINUOUS LOOP</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400"><span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span><span>Step {currentStep + 1} of {stages.length}</span></div>
      </div>
    </div>
  );
};
