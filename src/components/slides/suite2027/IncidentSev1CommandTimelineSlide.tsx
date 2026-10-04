// lint-allow: file-size reason="IncidentSev1CommandTimelineSlide kinetic 4-step Sev1 incident command timeline" max=200
import React from 'react';
import type {
  IncidentSev1CommandTimelineSlideData,
  IncidentTimelineStage,
  IncidentActionNode,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  AlertOctagon,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Flame,
  Bot,
  Zap,
  Radio,
  Sparkles,
} from 'lucide-react';

const DEF_STAGES: IncidentTimelineStage[] = [
  {
    stepIndex: 0,
    stageName: 'T+00m: Anomaly Trigger & War Room Paging',
    stageSubtitle: 'Elevated 5xx error rate detected; synthetic canary alerts on edge gateway',
    timestampOffset: '00:00:00',
    blastRadiusPercentage: 100,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'T+04m: Blast Radius Isolation & eBPF Circuit Breaker',
    stageSubtitle: 'Autonomous socket severing cuts faulty microservice; prevents cascading panic',
    timestampOffset: '+00:04:15',
    blastRadiusPercentage: 35,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'T+11m: Kernel Rollback & Multi-Region Anycast Divert',
    stageSubtitle: 'Zero-downtime rollback to verified immutable container image; traffic drained',
    timestampOffset: '+00:11:30',
    blastRadiusPercentage: 8,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'T+18m: Full Service Recovery & Canary Verification',
    stageSubtitle: 'All probe vectors healthy; 99.999% SLA restored; postmortem cryptographic seal applied',
    timestampOffset: '+00:18:22',
    blastRadiusPercentage: 0,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_ACTIONS: IncidentActionNode[] = [
  {
    id: 'act-1',
    timeOffsetMinutes: 1,
    actionTitle: 'Autonomous eBPF circuit-breaker triggered on 5xx threshold breach',
    actionOwner: 'Kernel Mesh Daemon',
    executionStatus: 'Executed (45ms)',
    isAutomated: true,
    hasVerificationCheckPassed: true,
  },
  {
    id: 'act-2',
    timeOffsetMinutes: 4,
    actionTitle: 'Incident Commander convened War Room with PagerDuty Priority 1',
    actionOwner: 'Alim Ul Karim',
    executionStatus: 'Acknowledged',
    isAutomated: false,
    hasVerificationCheckPassed: true,
  },
  {
    id: 'act-3',
    timeOffsetMinutes: 7,
    actionTitle: 'BGP Anycast route diversion to secondary failover cluster',
    actionOwner: 'Edge Traffic Controller',
    executionStatus: 'Diverted (100%)',
    isAutomated: true,
    hasVerificationCheckPassed: true,
  },
  {
    id: 'act-4',
    timeOffsetMinutes: 12,
    actionTitle: 'Immutable container rollback to sha256:4f8e... consensus digest',
    actionOwner: 'GitOps Continuous Engine',
    executionStatus: 'Rolled Back',
    isAutomated: true,
    hasVerificationCheckPassed: true,
  },
  {
    id: 'act-5',
    timeOffsetMinutes: 18,
    actionTitle: 'Synthetic probe barrage: 500k requests verified with 0 error codes',
    actionOwner: 'Automated QA Harness',
    executionStatus: 'Passed (0 errors)',
    isAutomated: true,
    hasVerificationCheckPassed: true,
  },
];

export const IncidentSev1CommandTimelineSlide: React.FC<{
  slide?: IncidentSev1CommandTimelineSlideData;
  data?: IncidentSev1CommandTimelineSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.timelineStages?.length ? data.timelineStages : DEF_STAGES;
  const actions = data?.actionNodes?.length ? data.actionNodes : DEF_ACTIONS;

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
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20 flex items-center gap-2">
              <AlertOctagon size={16} className="text-rose-500" />
              {data?.kicker || 'INCIDENT COMMAND SYSTEM & POSTMORTEM TIMELINE'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Activity size={14} /> Incident: {data?.incidentIdentifier || 'INC-2027-SEV1-0941'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Clock size={14} className="text-emerald-500" />
              MTTR: {data?.meanTimeToRecoveryMinutes ?? 18.5}m (SLA &lt; {data?.slaTargetMinutes ?? 30.0}m)
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Sev-1 Incident Command War Room Timeline'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Sequential triage execution chronicle detailing telemetry alert, automated eBPF isolation, multi-region failover, and full operational recovery.'}
          </p>
        </div>

        {/* Commander Status Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Incident State</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {data?.isIncidentResolved ?? true ? 'RESOLVED (SEALED)' : 'ACTIVE TRIAGE'}
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Blast Radius</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.blastRadiusPercentage}%
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Commander</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.incidentCommander || 'Alim Ul Karim'}
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
                  <div className="font-bold leading-tight">{st.stageName.split(':')[0]}</div>
                  <div className="text-[12px] opacity-75 font-normal">{st.timestampOffset}</div>
                </div>
              </div>
              <span className={`text-[12px] font-bold px-2 py-0.5 rounded ${
                st.blastRadiusPercentage === 0
                  ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}>
                {st.blastRadiusPercentage}% Radius
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Plane 1 Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Action Item Audit Log */}
        <div className="col-span-8 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-[var(--pres-accent)]" /> Incident Command Action Chronology
              </span>
              <span className="font-mono text-[12px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Phase {currentStep + 1} Active: {activeStage.timestampOffset}
              </span>
            </div>

            <div className="space-y-3 mt-4 font-mono text-[13px]">
              {actions.map((act) => (
                <div
                  key={act.id}
                  className="p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:border-[var(--pres-accent)] hover:bg-slate-200/50 dark:hover:bg-slate-800/40 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        +T{act.timeOffsetMinutes}m
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{act.actionTitle}</span>
                    </div>
                    {act.isAutomated ? (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                        <Bot size={11} /> Automated
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                        Human in Loop
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[12px] text-slate-500 dark:text-slate-400 pt-1">
                    <span>Owner: {act.actionOwner}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 size={12} /> {act.executionStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[12px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Radio size={14} className="text-emerald-500" />
              Continuous Telemetry Audit: Zero data loss during multi-region reroute
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Postmortem Verification Seal Intact
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Blast Radius & SLA Adherence */}
        <div className="col-span-4 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Flame size={16} className="text-rose-500" /> Stage {currentStep + 1} Triage Focus
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

              <div className="space-y-3 font-mono text-[13px]">
                <div>
                  <div className="flex items-center justify-between text-[12px] text-slate-500 dark:text-slate-400 mb-1">
                    <span>Blast Radius Containment</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{activeStage.blastRadiusPercentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        activeStage.blastRadiusPercentage === 0
                          ? 'bg-emerald-500'
                          : activeStage.blastRadiusPercentage < 40
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                      style={{ width: `${Math.max(4, activeStage.blastRadiusPercentage)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[13px]">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">War Room Engagement</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasWarRoomActive ?? true ? 'Active Standing Quorum' : 'Idle'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Canary Partition Isolation</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasCanaryIsolated ?? true ? '100% Isolated' : 'Pending'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">SLA Objective (&lt; 30m)</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasMetSlaObjective ?? true ? 'Met (18.5m MTTR)' : 'Breached'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[12px]">
            <Zap size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step {currentStep + 1} of {stages.length}. Blast radius compressed to {activeStage.blastRadiusPercentage}% in {activeStage.timestampOffset}.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">Reliability SLA:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> MTTR 18.5m beats 30m Target | Root Cause Identified & Sealed
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Commander: {data?.incidentCommander || 'Alim Ul Karim'} ({data?.commanderRole || 'Chief Software Engineer'})
          </span>
          <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1">
            <Sparkles size={16} /> Suite 2027 SRE Core
          </span>
        </div>
      </div>
    </div>
  );
};
