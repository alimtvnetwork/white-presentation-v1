// lint-allow: file-size reason="AutonomousCyberThreatHuntingMatrixSlide flat sovereign threat hunting matrix" max=450
import React from 'react';
import type {
  AutonomousCyberThreatHuntingMatrixSlideData,
  ThreatVectorNode,
  MitreAttAckMapping,
} from '../../../types/suite2031Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Server,
  Layers,
  Lock,
  Zap,
  Activity,
  AlertTriangle,
  Bug,
  Crosshair,
  Cpu,
} from 'lucide-react';

const DEF_THREATS: ThreatVectorNode[] = [
  {
    id: 'tv-01',
    attackVectorName: 'Living-off-the-Land Binary Memory Injection',
    anomalyConfidenceScore: 99.4,
    meanTimeToDetectSeconds: 0.12,
    meanTimeToRemediateSeconds: 1.1,
    isThreatNeutralized: true,
    hasZeroDaySignatureQuarantined: true,
  },
  {
    id: 'tv-02',
    attackVectorName: 'eBPF Kernel Rootkit Stealth C2 Beacon',
    anomalyConfidenceScore: 97.8,
    meanTimeToDetectSeconds: 0.18,
    meanTimeToRemediateSeconds: 1.4,
    isThreatNeutralized: true,
    hasZeroDaySignatureQuarantined: true,
  },
  {
    id: 'tv-03',
    attackVectorName: 'Lateral Kerberoasting Ticket Replay Attack',
    anomalyConfidenceScore: 98.9,
    meanTimeToDetectSeconds: 0.09,
    meanTimeToRemediateSeconds: 0.8,
    isThreatNeutralized: true,
    hasZeroDaySignatureQuarantined: true,
  },
  {
    id: 'tv-04',
    attackVectorName: 'Cloud IAM Ephemeral Privilege Escalation Drift',
    anomalyConfidenceScore: 99.1,
    meanTimeToDetectSeconds: 0.15,
    meanTimeToRemediateSeconds: 1.0,
    isThreatNeutralized: true,
    hasZeroDaySignatureQuarantined: true,
  },
];

const DEF_MITRE: MitreAttAckMapping[] = [
  {
    id: 'mitre-01',
    tacticId: 'TA0001',
    techniqueName: 'Initial Access / Public-Facing App Exploitation',
    coveragePercentage: 98.4,
    isHeuristicGuarded: true,
  },
  {
    id: 'mitre-02',
    tacticId: 'TA0003',
    techniqueName: 'Persistence / Boot Execution Modification',
    coveragePercentage: 99.2,
    isHeuristicGuarded: true,
  },
  {
    id: 'mitre-03',
    tacticId: 'TA0005',
    techniqueName: 'Defense Evasion / Subvert Trust Controls',
    coveragePercentage: 96.5,
    isHeuristicGuarded: true,
  },
  {
    id: 'mitre-04',
    tacticId: 'TA0011',
    techniqueName: 'Command & Control / Non-Standard Port Beaconing',
    coveragePercentage: 99.0,
    isHeuristicGuarded: true,
  },
];

export const AutonomousCyberThreatHuntingMatrixSlide: React.FC<{
  slide?: AutonomousCyberThreatHuntingMatrixSlideData;
  data?: AutonomousCyberThreatHuntingMatrixSlideData;
  activeStep?: number;
}> = ({ slide, data: propData }) => {
  const data = slide || propData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const threats = data?.threatVectors?.length ? data.threatVectors : DEF_THREATS;
  const mitre = data?.mitreMappings?.length ? data.mitreMappings : DEF_MITRE;

  const clusterId = data?.matrixClusterIdentifier || 'HUNTER-MATRIX-ENTERPRISE-01';
  const neutralizationPct = data?.autonomousNeutralizationRatePercentage ?? 99.94;
  const activeHunts = data?.activeThreatInvestigationsCount ?? 4;
  const isInterceptionActive = data?.isKillChainInterceptionActive ?? true;
  const hasSandbox = data?.hasSandboxIsolationEnforced ?? true;
  const hasForensics = data?.hasAutomatedForensicsCaptured ?? true;
  const hasGlow = data?.hasTelemetryGlow ?? true;

  const avgMttd = (
    threats.reduce((acc, t) => acc + t.meanTimeToDetectSeconds, 0) / threats.length
  ).toFixed(2);
  const avgMttr = (
    threats.reduce((acc, t) => acc + t.meanTimeToRemediateSeconds, 0) / threats.length
  ).toFixed(2);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span
              style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.0rem)' }}
              className="font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2"
            >
              <ShieldAlert size={16} className="text-cyan-500" />
              {data?.kicker || 'AUTONOMOUS CYBERSECURITY & ZERO-TRUST WORKLOADS'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Server size={14} /> Matrix: {clusterId}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              Neutralization: {neutralizationPct.toFixed(2)}%
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Crosshair size={14} className="text-purple-500" />
              Active Hunts: {activeHunts} Intercepted
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Autonomous Cyber Threat Hunting & Remediation Matrix'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Real-time MITRE ATT&CK kill-chain interception, zero-day heuristic detection, and microsecond sandbox isolation.'}
          </p>
        </div>

        {/* Telemetry Hero Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Interception Rate</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[28px] leading-tight">
              {neutralizationPct.toFixed(2)}%
            </span>
          </div>
          <div className="w-[1px] h-10 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Avg MTTD / MTTR</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[28px] leading-tight">
              {avgMttd}s / {avgMttr}s
            </span>
          </div>
          <div className="w-[1px] h-10 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold block text-[15px]">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
            <span className="text-[var(--pres-accent)] text-[14px]">
              {data?.leadRole || 'Chief Software Engineer'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[560px]">
        {/* Left Bento: Active Anomaly Vectors & Kill-Chain Interceptions */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Crosshair size={16} className="text-[var(--pres-accent)]" /> Active Anomaly Vectors & Kill-Chain Interceptions
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-bold border border-emerald-500/20">
                Swarm Heuristics Engaged
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {threats.map((t) => {
                const isNeutralized = t.isThreatNeutralized;
                return (
                  <div
                    key={t.id}
                    className="p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Bug size={16} className="text-cyan-500" />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{t.attackVectorName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isNeutralized
                              ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                              : 'bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/30'
                          }`}
                        >
                          {isNeutralized ? 'Neutralized' : 'Active Intercept'}
                        </span>
                        {t.hasZeroDaySignatureQuarantined && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Quarantined
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-[14px] font-mono text-slate-600 dark:text-slate-400 mb-2 flex items-center gap-4">
                      <span>MTTD: <strong className="text-cyan-700 dark:text-cyan-400">{t.meanTimeToDetectSeconds.toFixed(2)}s</strong></span>
                      <span>•</span>
                      <span>MTTR: <strong className="text-emerald-700 dark:text-emerald-400">{t.meanTimeToRemediateSeconds.toFixed(1)}s</strong></span>
                      <span>•</span>
                      <span>Anomaly Confidence: <strong className="text-purple-700 dark:text-purple-400">{t.anomalyConfidenceScore.toFixed(1)}%</strong></span>
                    </div>

                    {/* Confidence Meter Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[14px] font-mono text-slate-600 dark:text-slate-400">
                        <span>Confidence Score:</span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-400">
                          {t.anomalyConfidenceScore.toFixed(1)}% High-Certainty Alert
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 transition-all duration-500"
                          style={{ width: `${t.anomalyConfidenceScore}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between text-[14px] font-mono text-slate-500 dark:text-slate-400">
            <span>Dynamic Microsegmentation: Process-isolated in eBPF network sandbox</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 size={14} /> Zero Lateral Propagation Confirmed
            </span>
          </div>
        </div>

        {/* Right Bento: MITRE ATT&CK Matrix Heatmap & Behavioral Isolation */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-purple-500" /> MITRE ATT&CK Enterprise Matrix
              </span>
              <span className="font-mono text-[14px] text-emerald-700 dark:text-emerald-400 font-bold">
                100% Guarded
              </span>
            </div>

            <div className="space-y-3.5 mt-4 font-mono text-[14px]">
              {mitre.map((m) => (
                <div
                  key={m.id}
                  className="p-3.5 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">
                      [{m.tacticId}] {m.techniqueName}
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                      {m.coveragePercentage.toFixed(1)}% Coverage
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden mt-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-500"
                      style={{ width: `${m.coveragePercentage}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Kill-Chain Interception</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {isInterceptionActive ? 'Active (Pre-Execution Lock)' : 'Passive'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Sandbox Isolation Enforced</span>
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {hasSandbox ? 'gVisor Kernel Sandbox Isolated' : 'Uncontained'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Automated Forensics Capture</span>
                  <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {hasForensics ? 'Memory Dump & Call Graph Pushed' : 'Pending'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-emerald-500 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Autonomous remediation AI neutralizing threats in under {avgMttr} seconds across distributed enterprise clusters.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div
        style={{ backdropFilter: 'blur(14px)' }}
        className={`plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-[14px] z-10 ${
          hasGlow ? 'shadow-emerald-500/10' : ''
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Threat Matrix Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Microsegmentation Applied | Memory Core Dumps Captured | Automated Patch Pushed to Fleet
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 Cyber Matrix
          </span>
        </div>
      </div>
    </div>
  );
};

export default AutonomousCyberThreatHuntingMatrixSlide;
