// lint-allow: file-size reason="IncidentCommandPlaybookSlide kinetic 4-stage automated incident remediation" max=120
import React from 'react';
import type { IncidentCommandPlaybookSlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { AlertTriangle, CheckCircle2, ShieldCheck, Activity, Siren, GitPullRequest } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Anomaly Triage', stageSubtitle: 'SLO burn-rate alert triggers autonomous incident commander', orchestratorBot: 'PagerBot-AI Sentinel', serviceAvailabilityPercent: 99.2, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'Blast Isolation', stageSubtitle: 'Autonomous circuit breaker trips and isolates unhealthy downstream mesh', orchestratorBot: 'Envoy Mesh Controller', serviceAvailabilityPercent: 99.7, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'Canary Rollback', stageSubtitle: 'Zero-loss instant rollback to last certified golden commit tag', orchestratorBot: 'ArgoCD Remediation Agent', serviceAvailabilityPercent: 99.95, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'Post-Mortem Synthesis', stageSubtitle: 'LLM synthesizes root-cause timeline and generates Jira action items', orchestratorBot: 'Incident Synthesis LLM', serviceAvailabilityPercent: 100.0, isActive: false, isCompleted: false },
];
const DEF_ACTIONS = [
  { id: 'a1', actionOrder: 1, actionTitle: 'Trip Ingress Circuit Breaker', executionStatus: 'EXECUTED', executionLatencySeconds: 0.12, mitigationImpactSummary: 'Shed 100% errored socket traffic', isExecuted: true, isVerified: true, hasRollbackSucceeded: true },
  { id: 'a2', actionOrder: 2, actionTitle: 'Mesh Traffic Re-Route', executionStatus: 'EXECUTED', executionLatencySeconds: 0.38, mitigationImpactSummary: 'Shifted to warm backup cluster', isExecuted: true, isVerified: true, hasRollbackSucceeded: true },
  { id: 'a3', actionOrder: 3, actionTitle: 'Canary Version Rollback', executionStatus: 'VERIFIED', executionLatencySeconds: 0.84, mitigationImpactSummary: 'Restored certified baseline v2.4.1', isExecuted: true, isVerified: true, hasRollbackSucceeded: true },
];

export const IncidentCommandPlaybookSlide: React.FC<{ slide?: IncidentCommandPlaybookSlideData; data?: IncidentCommandPlaybookSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.playbookStages?.length ? data.playbookStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const actions = data?.remediationActions?.length ? data.remediationActions : DEF_ACTIONS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><Siren size={15} className="text-red-500" />{data?.kicker || 'AUTONOMOUS SRE INCIDENT RESPONSE'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data?.incidentSeverityBadge || 'SEV-1 AUTO-MITIGATED'} • MTTR {data?.meanTimeToRecoverySeconds || 24}s</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Incident Command Automated Playbook: Autonomous MTTR Cut'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Instant blast-radius isolation, deterministic circuit breaking, and automated post-mortem synthesis'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Incident ID</span><span className="text-sm font-bold text-red-400">{data?.incidentId || 'INC-2026-9042'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Availability</span><span className="text-sm font-bold text-emerald-400">99.95% Restored</span></div>
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
            <span className="text-[10px] opacity-75 truncate max-w-[110px]">{st.serviceAvailabilityPercent}%</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-red-400">AUTOMATED REMEDIATION ACTIONS</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/20">Active Runbook</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {actions.map((act) => (
              <div key={act.id} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center"><span className="text-slate-200 font-bold">{act.actionTitle}</span><span className="text-[10px] text-emerald-400 font-bold">{act.executionLatencySeconds}s</span></div>
                <div className="flex justify-between text-[11px] text-slate-400"><span>{act.mitigationImpactSummary}</span><span className="text-sky-300">{act.executionStatus}</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><AlertTriangle size={13} className="text-emerald-400" /> Circuit Breaker Tripped: Safe Isolation</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-300">ORCHESTRATION BOT EXECUTION</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">Autonomous SRE</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">CURRENT ORCHESTRATOR BOT</span>
              <div className="text-violet-300 font-bold text-xs">{stages[currentStep]?.orchestratorBot}</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">{stages[currentStep]?.stageSubtitle}</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">Restored Availability:</span><strong className="text-emerald-400">{stages[currentStep]?.serviceAvailabilityPercent}%</strong></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Zero-Human Execution Gate Authorized</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400">AI POST-MORTEM SYNTHESIS</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Auto RCA</span></div>
          <div className="space-y-2 font-mono text-xs my-3">
            <div className="p-2.5 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">ROOT CAUSE ANALYSIS</span>
              <div className="text-emerald-300 font-bold text-xs">Upstream DB Socket Exhaustion</div>
              <div className="text-[10px] text-slate-400">Automated pool resizing PR drafted</div>
            </div>
            <div className="p-2.5 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">ACTIONABLE TICKETS</span>
              <div className="text-sky-300 font-bold text-xs">JIRA-8910 Filed & Assigned</div>
              <div className="text-[10px] text-slate-400">Regression test suite updated</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Incident Status:</span><strong className="font-bold">CLOSED & CERTIFIED</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Playbook Execution Completed</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Resolution Latency: <strong className="text-slate-200">24s MTTR</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>SLO Impact: <strong className="text-emerald-400">0.02% BUDGET BURN</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400"><span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span><span>Step {currentStep + 1} of {stages.length}</span></div>
      </div>
    </div>
  );
};
