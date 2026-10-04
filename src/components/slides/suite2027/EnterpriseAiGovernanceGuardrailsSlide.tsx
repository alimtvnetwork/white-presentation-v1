// lint-allow: file-size reason="EnterpriseAiGovernanceGuardrailsSlide kinetic 4-step AI governance and safety guardrails" max=420
import React from 'react';
import type {
  EnterpriseAiGovernanceGuardrailsSlideData,
  GuardrailStage,
  GuardrailMetricNode,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Shield,
  ShieldCheck,
  Lock,
  FileCheck,
  Cpu,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Layers,
  Database,
  Fingerprint,
} from 'lucide-react';

const DEF_STAGES: GuardrailStage[] = [
  {
    stepIndex: 0,
    stageName: 'Input Prompt Sanitization & Jailbreak Shield',
    stageSubtitle: 'Semantic classifier detecting adversarial injections and unauthorized prompts',
    inspectionLatencyMs: 1.2,
    passRatePercentage: 98.4,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Hallucination & Factuality Verification Gate',
    stageSubtitle: 'Grounding verification against authorized enterprise knowledge store',
    inspectionLatencyMs: 4.8,
    passRatePercentage: 99.4,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'PII & Proprietary IP Redaction Filter',
    stageSubtitle: 'Cryptographic token masking ensuring zero leakage of customer data',
    inspectionLatencyMs: 2.1,
    passRatePercentage: 100.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Cryptographic Audit Ledger Anchoring',
    stageSubtitle: 'Append-only Merkle tree compliance seal proving non-repudiation',
    inspectionLatencyMs: 0.8,
    passRatePercentage: 100.0,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: GuardrailMetricNode[] = [
  {
    id: 'node-prompt-shield',
    guardrailLayer: 'Input Ingestion Shield',
    blockedRequestsCount: 4820,
    latencyOverheadMs: 1.2,
    complianceStandard: 'NIST AI RMF 1.0',
    isCompliant: true,
    hasActiveEnforcement: true,
  },
  {
    id: 'node-factuality',
    guardrailLayer: 'Output Grounding Engine',
    blockedRequestsCount: 610,
    latencyOverheadMs: 4.8,
    complianceStandard: 'EU AI Act High Risk',
    isCompliant: true,
    hasActiveEnforcement: true,
  },
  {
    id: 'node-pii',
    guardrailLayer: 'Data Privacy Mask',
    blockedRequestsCount: 1840,
    latencyOverheadMs: 2.1,
    complianceStandard: 'HIPAA / SOC2 Type II',
    isCompliant: true,
    hasActiveEnforcement: true,
  },
  {
    id: 'node-ledger',
    guardrailLayer: 'Merkle Audit Trail',
    blockedRequestsCount: 0,
    latencyOverheadMs: 0.8,
    complianceStandard: 'ISO/IEC 42001',
    isCompliant: true,
    hasActiveEnforcement: true,
  },
];

export const EnterpriseAiGovernanceGuardrailsSlide: React.FC<{
  slide?: EnterpriseAiGovernanceGuardrailsSlideData;
  data?: EnterpriseAiGovernanceGuardrailsSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.guardrailStages?.length ? data.guardrailStages : DEF_STAGES;
  const nodes = data?.metricNodes?.length ? data.metricNodes : DEF_NODES;

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
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <Shield size={16} className="text-indigo-500" />
              {data?.kicker || 'AI SAFETY ARCHITECTURE'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <FileCheck size={14} /> Framework: {data?.governanceFramework || 'NIST AI RMF & EU AI Act'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              Compliance Score: {data?.overallComplianceScore ?? 98.8}%
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Enterprise AI Governance & Safety Guardrails'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              '4-tier runtime compliance pipeline enforcing hallucination prevention, PII redaction, and cryptographic auditability.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Inspection Latency</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[18px]">
              {activeStage.inspectionLatencyMs} ms
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Pass Rate</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.passRatePercentage.toFixed(1)}%
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Chief Software Engineer</span>
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
                  <div className="font-bold leading-tight">{st.stageName}</div>
                  <div className="text-[12px] opacity-75 font-normal">
                    Latency: {st.inspectionLatencyMs}ms
                  </div>
                </div>
              </div>
              <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                {st.passRatePercentage}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Plane 1 Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Guardrail Metric Nodes */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> 4-Tier Guardrail Inspection Topology
              </span>
              <span className="font-mono text-[12px] px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-500/20">
                Active Gate: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {nodes.map((node, nIdx) => {
                const isCurrentLayer = nIdx === currentStep;
                return (
                  <div
                    key={node.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px]">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            node.hasActiveEnforcement ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'
                          }`}
                        />
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {node.guardrailLayer}
                        </span>
                        <span className="text-[12px] px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
                          {node.complianceStandard}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[13px]">
                          Blocked: <strong className="text-rose-600 dark:text-rose-400">{node.blockedRequestsCount.toLocaleString()}</strong>
                        </span>
                        <span className="text-[var(--pres-accent)] font-bold text-[14px]">
                          +{node.latencyOverheadMs}ms
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[var(--pres-border)] grid grid-cols-3 gap-4 font-mono text-[13px]">
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Jailbreak Interceptions</span>
              <span className="text-rose-600 dark:text-rose-400 font-bold text-[16px]">4,820 Threats Blocked</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">PII Redactions</span>
              <span className="text-amber-600 dark:text-amber-400 font-bold text-[16px]">1,840 Sanitized</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Merkle Chain Root</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[16px]">SHA-256 Verified</span>
            </div>
          </div>
        </div>

        {/* Right Bento: Active Stage Elevation & Compliance Assertions */}
        <div className="col-span-5 plane-2-elevated rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-[var(--pres-accent)] flex items-center gap-2">
                <ShieldCheck size={18} /> Active Enforcement Gate (Step 0{currentStep + 1})
              </span>
              <span className="text-[12px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold">
                PHASE 0{currentStep + 1} ACTIVE
              </span>
            </div>

            <div className="my-4">
              <h3 className="text-[22px] font-ubuntu font-bold text-slate-900 dark:text-slate-100 leading-snug">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[14px] text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {activeStage.stageSubtitle}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-black/30 border border-slate-200 dark:border-slate-800 space-y-3 font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-slate-500 dark:text-slate-400 uppercase">Inspection Latency Budget</span>
                <span className="text-[18px] font-bold text-[var(--pres-accent)]">{activeStage.inspectionLatencyMs} ms</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-[var(--pres-accent)] h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (activeStage.inspectionLatencyMs / 5.0) * 100)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[12px] text-slate-500 dark:text-slate-400">
                <span>Pass Rate: {activeStage.passRatePercentage}%</span>
                <span>Threshold: &lt; 5.0 ms</span>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[13px]">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">EU AI Act High-Risk Standard</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.isEuAiActCompliant ?? true ? 'Fully Certified' : 'Pending Audit'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">PII Zero-Leak Masking</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <Lock size={14} /> {data?.hasPiiRedactionActive ?? true ? 'Strict Active' : 'Passive'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Merkle Audit Preservation</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                  <Fingerprint size={14} /> {data?.hasAuditLedgerPreserved ?? true ? 'Immutable Root' : 'Unsealed'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[12px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Real-time compliance gate enforced across all inferences.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">Governance Gate:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 size={16} /> ISO/IEC 42001 & NIST AI RMF Attested | Tamper Evident
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1">
            <ShieldCheck size={16} /> Suite 2027 Safety Core
          </span>
        </div>
      </div>
    </div>
  );
};
