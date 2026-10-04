// lint-allow: file-size reason="AutonomousCodeSecurityPatchingLoopSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  AutonomousCodeSecurityPatchingLoopSlideData,
  SecurityPatchingStage,
  SecurityVulnerabilityNode,
} from '../../../types/suite2028Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  ShieldAlert,
  ShieldCheck,
  GitPullRequest,
  Clock,
  Layers,
  CheckCircle2,
  Activity,
  Code,
  Lock,
  Cpu,
  Sparkles,
} from 'lucide-react';

const DEF_STAGES: SecurityPatchingStage[] = [
  {
    stepIndex: 0,
    stageName: 'Zero-Day CVE Discovery & Semantic AST Triage',
    stageSubtitle: 'Dynamic taint analysis tracing tainted inputs to vulnerable sink nodes',
    meanTimeToRemediateMinutes: 1.2,
    activePatchesInFlight: 14,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Agentic Patch Synthesis & Multi-Hypothesis Generation',
    stageSubtitle: 'Autonomous LLM generating minimal code diffs preserving invariants',
    meanTimeToRemediateMinutes: 3.4,
    activePatchesInFlight: 10,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Hermetic Test Suite & Mutation Regression Proving',
    stageSubtitle: 'Executing 100,000+ unit, integration, and mutation tests in networkless VMs',
    meanTimeToRemediateMinutes: 2.6,
    activePatchesInFlight: 6,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Automated Pull Request Deployment & Canary Gate',
    stageSubtitle: 'Automated merge with progressive 10% -> 50% -> 100% traffic health gating',
    meanTimeToRemediateMinutes: 1.2,
    activePatchesInFlight: 0,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: SecurityVulnerabilityNode[] = [
  {
    id: 'cve-01',
    cveIdentifier: 'CVE-2026-3829',
    targetPackage: 'auth-kernel-go',
    cvssSeverityScore: 9.8,
    patchSynthesizedDurationSeconds: 42,
    regressionProofConfidencePercentage: 99.9,
    isRemediationVerified: true,
    hasAutomatedCanaryPassed: true,
  },
  {
    id: 'cve-02',
    cveIdentifier: 'CVE-2026-4410',
    targetPackage: 'crypto-vault-core',
    cvssSeverityScore: 8.9,
    patchSynthesizedDurationSeconds: 68,
    regressionProofConfidencePercentage: 99.4,
    isRemediationVerified: true,
    hasAutomatedCanaryPassed: true,
  },
  {
    id: 'cve-03',
    cveIdentifier: 'CVE-2026-1182',
    targetPackage: 'net-transport-mesh',
    cvssSeverityScore: 7.4,
    patchSynthesizedDurationSeconds: 19,
    regressionProofConfidencePercentage: 99.8,
    isRemediationVerified: true,
    hasAutomatedCanaryPassed: true,
  },
];

export const AutonomousCodeSecurityPatchingLoopSlide: React.FC<{
  slide?: AutonomousCodeSecurityPatchingLoopSlideData;
  data?: AutonomousCodeSecurityPatchingLoopSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.patchingStages?.length ? data.patchingStages : DEF_STAGES;
  const nodes = data?.vulnerabilities?.length ? data.vulnerabilities : DEF_NODES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const hasSymbolic = data?.hasSymbolicProofEngine ?? true;
  const hasSandboxing = data?.hasHermeticSandboxing ?? true;
  const hasCanary = data?.hasAutomatedCanaryRollout ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <ShieldAlert size={16} className="text-cyan-500" />
              {data?.kicker || 'DEVSECOPS & AUTONOMOUS AGENTS'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <GitPullRequest size={14} /> Fleet: {data?.repositoryFleet || '1,400 Production Repositories'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Clock size={14} className="text-emerald-500" />
              MTTR: {data?.meanTimeToRemediateMinutes ?? 8.4} Minutes
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-indigo-500" />
              Containment: {data?.zeroDayContainmentRatePercentage ?? 99.2}% Zero-Day
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Autonomous Code Security Patching Loop'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Real-time CVE discovery, multi-hypothesis agentic synthesis, hermetic test proving, and canary deployment.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Active Patches</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.activePatchesInFlight} in-flight
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Stage Latency</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.meanTimeToRemediateMinutes.toFixed(1)} min
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
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold animate-kinetic-step-reveal'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-75'
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
                  <div className="font-bold leading-tight">{st.stageName}</div>
                  <div className="text-[14px] opacity-75 font-normal">
                    {st.meanTimeToRemediateMinutes.toFixed(1)}m MTTR window
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                {st.activePatchesInFlight} flight
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Vulnerabilities & Remediation Progress */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> Active CVE Remediation Pipeline & Prover State
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {nodes.map((node, nIdx) => {
                const isCurrentLayer = nIdx === currentStep || (currentStep >= 2 && nIdx >= 2);
                return (
                  <div
                    key={node.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Code size={16} className={isCurrentLayer ? 'text-[var(--pres-accent)]' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{node.cveIdentifier}</span>
                        <span className="text-[14px] px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300">
                          {node.targetPackage}
                        </span>
                        <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30">
                          CVSS {node.cvssSeverityScore.toFixed(1)}
                        </span>
                        {node.isRemediationVerified && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Verified
                          </span>
                        )}
                        {node.hasAutomatedCanaryPassed && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <ShieldCheck size={12} /> Canary Pass
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          {node.patchSynthesizedDurationSeconds}s synthesis
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {node.regressionProofConfidencePercentage.toFixed(1)}% Proof
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isCurrentLayer ? 'bg-[var(--pres-accent)]' : 'bg-slate-400 dark:bg-slate-600'
                        }`}
                        style={{ width: `${node.regressionProofConfidencePercentage}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Regression Tests: 124,000+ Hermetic Invariants Passed</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <Lock size={14} /> Zero Regressions Proven
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Cpu size={16} className="text-cyan-500" />
              Agentic Model: DeepCoder SEC-2028 | Firecracker MicroVM Isolation
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Autonomous Remediation Loop Operational
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Verification */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Deep Inspection
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[14px] border border-emerald-500/30">
                Phase {currentStep + 1} Active
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <h3 className="text-[20px] font-ubuntu font-bold text-slate-900 dark:text-white mb-1">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeStage.stageSubtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-[14px]">
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Stage MTTR</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.meanTimeToRemediateMinutes.toFixed(1)} min
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Patches In Flight</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.activePatchesInFlight} active
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Symbolic Proof Engine</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasSymbolic ? 'Mathematical Soundness' : 'Disabled'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Hermetic Sandboxing</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasSandboxing ? 'Networkless MicroVM' : 'Shared Host'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Automated Canary Gate</span>
                <span className="font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasCanary ? '10% -> 50% -> 100% Gated' : 'Manual Merge'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Mean-Time-To-Remediate compressed to 8.4 minutes repository-wide.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Runtime Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Zero Critical CVEs Unmitigated | Symbolic Proof Soundness Certified | Firecracker Isolated
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2028 DevSecOps Engine
          </span>
        </div>
      </div>
    </div>
  );
};
export default AutonomousCodeSecurityPatchingLoopSlide;
