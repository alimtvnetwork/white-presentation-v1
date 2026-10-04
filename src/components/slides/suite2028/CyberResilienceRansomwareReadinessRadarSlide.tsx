// lint-allow: file-size reason="CyberResilienceRansomwareReadinessRadarSlide flat sovereign ransomware disaster recovery radar" max=420
import React from 'react';
import type {
  CyberResilienceRansomwareReadinessRadarSlideData,
  ResiliencePillarNode,
} from '../../../types/suite2028Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles,
  Zap,
  Layers,
  Flame,
  Radio,
  FileCheck2,
} from 'lucide-react';

const DEF_PILLARS: ResiliencePillarNode[] = [
  {
    id: 'pil-backups',
    pillarName: 'Air-Gapped Immutable Backups',
    targetScore: 100,
    actualScore: 98,
    recoveryTimeObjectiveHours: 1.2,
    isPillarCertified: true,
    hasAutomatedAuditPassed: true,
  },
  {
    id: 'pil-identity',
    pillarName: 'Identity & Privileged Access Hygiene',
    targetScore: 100,
    actualScore: 92,
    recoveryTimeObjectiveHours: 0.8,
    isPillarCertified: true,
    hasAutomatedAuditPassed: true,
  },
  {
    id: 'pil-isolation',
    pillarName: 'Automated Endpoint Isolation',
    targetScore: 100,
    actualScore: 96,
    recoveryTimeObjectiveHours: 0.4,
    isPillarCertified: true,
    hasAutomatedAuditPassed: true,
  },
  {
    id: 'pil-restoration',
    pillarName: 'Clean-Room Restoration Proof',
    targetScore: 100,
    actualScore: 94,
    recoveryTimeObjectiveHours: 2.8,
    isPillarCertified: true,
    hasAutomatedAuditPassed: true,
  },
  {
    id: 'pil-crisis',
    pillarName: 'Crisis Playbook Drill Velocity',
    targetScore: 100,
    actualScore: 91,
    recoveryTimeObjectiveHours: 1.5,
    isPillarCertified: true,
    hasAutomatedAuditPassed: true,
  },
  {
    id: 'pil-crypto',
    pillarName: 'Cryptographic Root Integrity',
    targetScore: 100,
    actualScore: 97,
    recoveryTimeObjectiveHours: 0.5,
    isPillarCertified: true,
    hasAutomatedAuditPassed: true,
  },
];

export const CyberResilienceRansomwareReadinessRadarSlide: React.FC<{
  slide?: CyberResilienceRansomwareReadinessRadarSlideData;
  data?: CyberResilienceRansomwareReadinessRadarSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const pillars = data?.pillars?.length ? data.pillars : DEF_PILLARS;
  const resilienceIndex = data?.blendedResilienceIndex ?? 94.2;
  const mttrHours = data?.meanTimeToRecoverHours ?? 2.8;

  const hasAirGapped = data?.hasAirGappedBackupsActive ?? true;
  const hasSnapshots = data?.hasImmutableSnapshotsVerified ?? true;
  const hasAttackExercised = data?.hasSimulatedAttackExercised ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20 flex items-center gap-2">
              <ShieldAlert size={16} className="text-rose-500" />
              {data?.kicker || 'ENTERPRISE RISK & DISASTER RECOVERY'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Calendar size={14} /> Review: {data?.assessmentQuarter || 'Q4 2026 Board Review'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              Resilience Index: {resilienceIndex.toFixed(1)} / 100 (Tier AAA)
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Cyber Resilience Ransomware Readiness Radar'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              '6-dimensional risk evaluation, air-gapped immutable snapshots, clean-room restoration, and sub-3-hour MTTR.'}
          </p>
        </div>

        {/* Executive Metric Badge Strip */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Resilience Score</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {resilienceIndex.toFixed(1)} / 100
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Mean Recovery</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {mttrHours.toFixed(1)} Hours MTTR
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
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Resilience Index</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">{resilienceIndex.toFixed(1)}%</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Mean MTTR</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[22px]">{mttrHours.toFixed(1)} Hours</span>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Clock size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">RPO Target</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[22px]">0 Seconds (Zero Loss)</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Radio size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Simulated Drill</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">100% Passed</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <FileCheck2 size={24} />
          </div>
        </div>
      </div>

      {/* Main 6-Pillar Bento Grid */}
      <div className="grid grid-cols-3 gap-5 z-10 my-auto items-stretch h-[540px]">
        {pillars.map((pillar) => {
          const scorePercent = Math.min(100, Math.round((pillar.actualScore / pillar.targetScore) * 100));

          return (
            <div
              key={pillar.id}
              className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-5 flex flex-col justify-between shadow-xl hover:-translate-y-0.5 hover:border-[var(--pres-accent)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-[var(--pres-accent)]" />
                    <span className="font-bold text-slate-900 dark:text-white text-[16px] leading-tight">
                      {pillar.pillarName}
                    </span>
                  </div>
                  <span className="text-[14px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                    {pillar.isPillarCertified ? 'Certified' : 'Evaluating'}
                  </span>
                </div>

                <div className="mt-4 flex items-baseline justify-between font-mono">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase">Readiness Score</span>
                    <div className="text-[38px] font-black tracking-tight text-slate-900 dark:text-white leading-none mt-1">
                      {pillar.actualScore}
                      <span className="text-[20px] font-semibold text-slate-400 ml-1">/ {pillar.targetScore}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase">RTO Guarantee</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
                      {pillar.recoveryTimeObjectiveHours.toFixed(1)} Hours
                    </span>
                  </div>
                </div>

                {/* Score Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-700"
                      style={{ width: `${scorePercent}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between font-mono text-[14px] text-slate-400 mt-2">
                    <span>Baseline (0)</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 size={13} /> {scorePercent}% Ready
                    </span>
                    <span>Target ({pillar.targetScore})</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
                <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  Audit: {pillar.hasAutomatedAuditPassed ? 'Passed' : 'Pending'}
                </span>
                <span className="text-[var(--pres-accent)] font-bold">WORM Snapshot OK</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Disaster Recovery Guarantee:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <ShieldCheck size={18} /> Air-Gapped Optical WORM Backups Active | Zero Ransom Payment Policy Enforced
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
            <Lock size={16} /> Suite 2028 Cyber Resilience Radar
          </span>
        </div>
      </div>
    </div>
  );
};
