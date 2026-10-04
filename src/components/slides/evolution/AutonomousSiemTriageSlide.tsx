// lint-allow: file-size reason="AutonomousSiemTriageSlide flat sovereign cognitive SIEM incident triage matrix" max=120
import React from 'react';
import type { AutonomousSiemTriageSlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Crosshair, CheckCircle2, ShieldAlert, Zap, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';

const DEF_INCIDENTS = [
  { incidentId: 'in1', incidentIndex: 1, threatCategory: 'Credential Stuffing', mitreTacticId: 'TA0006: Credential Access', aiConfidencePercent: 99.6, automatedActionTaken: 'REVOKE_SPIFFE_SVID_TOKEN', timeToContainSeconds: 3.8, isAutomatedContainmentActive: true, hasMitreAttackMapped: true, isTriageConfidenceHigh: true, hasContainmentSucceeded: true },
  { incidentId: 'in2', incidentIndex: 2, threatCategory: 'Lateral Movement Attempt', mitreTacticId: 'TA0008: Lateral Movement', aiConfidencePercent: 99.2, automatedActionTaken: 'ISOLATE_CONTAINER_VLAN', timeToContainSeconds: 4.1, isAutomatedContainmentActive: true, hasMitreAttackMapped: true, isTriageConfidenceHigh: true, hasContainmentSucceeded: true },
  { incidentId: 'in3', incidentIndex: 3, threatCategory: 'Data Exfiltration Burst', mitreTacticId: 'TA0010: Exfiltration', aiConfidencePercent: 99.4, automatedActionTaken: 'KILL_EGRESS_SOCKET_XDP', timeToContainSeconds: 5.2, isAutomatedContainmentActive: true, hasMitreAttackMapped: true, isTriageConfidenceHigh: true, hasContainmentSucceeded: true },
  { incidentId: 'in4', incidentIndex: 4, threatCategory: 'Supply-Chain Injection', mitreTacticId: 'TA0001: Initial Access', aiConfidencePercent: 99.8, automatedActionTaken: 'QUARANTINE_OCI_IMAGE_HASH', timeToContainSeconds: 2.9, isAutomatedContainmentActive: true, hasMitreAttackMapped: true, isTriageConfidenceHigh: true, hasContainmentSucceeded: true },
];

export const AutonomousSiemTriageSlide: React.FC<{ slide?: AutonomousSiemTriageSlideData; data?: AutonomousSiemTriageSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const incidents = data?.incidents?.length ? data.incidents : DEF_INCIDENTS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><Crosshair size={16} className="text-violet-500" />{data?.kicker || 'COGNITIVE SECURITY OPERATIONS (SECOPS)'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> {data?.overallTriageAccuracyPercent || 99.8}% Triage Accuracy</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Autonomous SIEM Incident Triage Matrix: MITRE ATT&CK Defense'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'High-throughput cognitive SIEM matrix analyzing 450,000 security events per second and executing automated containment playbooks'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Events Ingestion</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">450,000 / sec</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Containment</span><span className="text-sm font-bold text-emerald-500">{(data?.containedIncidentsTotal || 1420).toLocaleString()} Contained</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Chief Software Engineer</span><span className="text-sm font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[550px] items-stretch">
        {incidents.map((inc) => (
          <div key={inc.incidentId} className="plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between transition-all hover:scale-[1.01]">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-sm font-bold text-violet-400">INCIDENT 0{inc.incidentIndex}</span>
              <span className="font-mono text-sm px-2.5 py-1 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">{inc.timeToContainSeconds}s MTTC</span>
            </div>
            <div className="space-y-4 font-mono text-sm my-3">
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-1">
                <span className="text-sm text-slate-400 block uppercase">Threat Category</span>
                <span className="font-bold text-slate-200 text-sm block truncate">{inc.threatCategory}</span>
                <span className="text-sm text-sky-400 font-bold block mt-1">{inc.mitreTacticId}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
                <div className="flex justify-between items-center"><span className="text-sm text-slate-400">AI Confidence:</span><span className="font-bold text-emerald-400 text-sm">{inc.aiConfidencePercent}%</span></div>
                <div className="text-sm text-slate-300 truncate"><span className="text-slate-400 block mb-0.5">Action Taken:</span><span className="text-emerald-400 font-bold text-sm">{inc.automatedActionTaken}</span></div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><ShieldCheck size={16} /> Automated Containment Active</div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-6"><span className="text-sm uppercase text-slate-400">Detection Latency:</span><span className="text-emerald-400 font-bold text-base">1.2s MTTD</span><span className="text-sm uppercase text-slate-400">Mean Containment:</span><span className="text-sky-300 font-bold text-base">4.8s MTTC</span><span className="text-sm uppercase text-slate-400">False Negatives:</span><span className="text-violet-400 font-bold text-base">0 Guaranteed</span></div>
        <div className="flex items-center gap-4"><span className="text-sm text-slate-400">Defense State: <strong className="text-emerald-400">FULL CONTAINMENT</strong></span></div>
      </div>
    </div>
  );
};
