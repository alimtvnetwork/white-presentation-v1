// lint-allow: file-size reason="ContinuousAiAgentEvalHarnessSlide kinetic 4-step AI agent evaluation harness" max=420
import React from 'react';
import type {
  ContinuousAiAgentEvalHarnessSlideData,
  EvalStage,
  AgentBenchmarkSuiteNode,
} from '../../../types/suite2030Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Activity,
  CheckCircle2,
  ShieldCheck,
  Award,
  Zap,
  BarChart3,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

const DEF_STAGES: EvalStage[] = [
  {
    stepIndex: 0,
    stageName: 'Deterministic Tool-Call Tests',
    stageSubtitle: 'Validating JSON argument schema conformance across 500 APIs',
    testScenariosExecutedCount: 850,
    passRatePercentage: 99.8,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Autonomous Multi-Turn Arena Matches',
    stageSubtitle: 'Head-to-head ELO evaluation against baseline foundation models',
    testScenariosExecutedCount: 1200,
    passRatePercentage: 94.5,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Adversarial Red-Team Safety Probe',
    stageSubtitle: 'Stress-testing injection resistance and data exfiltration bounds',
    testScenariosExecutedCount: 350,
    passRatePercentage: 100.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Automated Production Release Gate',
    stageSubtitle: 'Cryptographic sign-off and container registry promotion',
    testScenariosExecutedCount: 2400,
    passRatePercentage: 99.2,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_SUITES: AgentBenchmarkSuiteNode[] = [
  {
    id: 'bm-01',
    suiteName: 'Enterprise Cloud Architecture Reasoning',
    eloRating: 1510,
    toolCallAccuracyPercentage: 99.4,
    safetyViolationCount: 0,
    isBenchmarkPassed: true,
    hasRegressionDetected: false,
  },
  {
    id: 'bm-02',
    suiteName: 'Autonomous Cybersecurity Triaging',
    eloRating: 1465,
    toolCallAccuracyPercentage: 98.9,
    safetyViolationCount: 0,
    isBenchmarkPassed: true,
    hasRegressionDetected: false,
  },
  {
    id: 'bm-03',
    suiteName: 'Financial Quantitative Modeling',
    eloRating: 1495,
    toolCallAccuracyPercentage: 99.1,
    safetyViolationCount: 0,
    isBenchmarkPassed: true,
    hasRegressionDetected: false,
  },
];

export const ContinuousAiAgentEvalHarnessSlide: React.FC<{
  slide?: ContinuousAiAgentEvalHarnessSlideData;
  data?: ContinuousAiAgentEvalHarnessSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.evalStages?.length ? data.evalStages : DEF_STAGES;
  const suites = data?.benchmarkSuites?.length ? data.benchmarkSuites : DEF_SUITES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const blendedElo = data?.blendedEloScore ?? 1482;
  const targetGate = data?.targetDeploymentGate || 'GA-Release-Candidate-2';
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
              <Activity size={16} className="text-cyan-600 dark:text-cyan-400" />
              {data?.kicker || 'AGENT OPERATIONS & MLOPS RESILIENCE'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Cpu size={14} /> Harness: {data?.harnessIdentifier || 'EVAL-HARNESS-ENTERPRISE-PRO'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400" />
              Gate: {targetGate}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30 flex items-center gap-2">
              <Award size={14} className="text-indigo-600 dark:text-indigo-400" />
              Blended ELO: {blendedElo}
            </span>
          </div>

          <h1
            className="text-[clamp(2.0rem,2.8vw,2.75rem)] font-ubuntu font-bold tracking-tight mb-2 leading-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Continuous AI Agent Automated Evaluation Harness'}
          </h1>
          <p
            className="font-poppins text-[clamp(1.0rem,1.4vw,1.125rem)] text-slate-700 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'CI/CD automated regression testing, arena ELO convergence, and red-team safety certification.'}
          </p>
        </div>

        {/* Telemetry Hero Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] flex items-center gap-6 font-mono">
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Blended ELO</span>
            <span className="text-[clamp(2.75rem,5.0vw,4.5rem)] font-bold leading-none text-cyan-700 dark:text-cyan-400">
              {blendedElo}
            </span>
          </div>
          <div className="w-[1px] h-12 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Active Pass Rate</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[24px]">
              {activeStage.passRatePercentage.toFixed(1)}%
            </span>
            <span className="block text-[14px] text-slate-500 dark:text-slate-400">
              {activeStage.testScenariosExecutedCount} runs
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

      {/* Kinetic 4-Step Progression Rail */}
      <div className="grid grid-cols-4 gap-4 z-10 my-3">
        {stages.map((st, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;

          return (
            <button
              key={st.stepIndex}
              onClick={() => jumpToStep(idx)}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${
                isActive
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold animate-kinetic-step-reveal'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 opacity-85'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 blur-[1.25px] text-slate-600 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[14px] ${
                    isActive
                      ? 'bg-[var(--pres-accent)] text-white'
                      : isCompleted
                      ? 'bg-emerald-600 text-white dark:text-slate-950'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {isCompleted ? '✓' : idx + 1}
                </span>
                <div>
                  <div className="font-bold leading-tight text-[15px]">{st.stageName}</div>
                  <div className="text-[14px] opacity-80 font-normal">
                    {st.passRatePercentage.toFixed(1)}% pass • {st.testScenariosExecutedCount} cases
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold px-2 py-1 rounded bg-slate-200/60 dark:bg-slate-800/60">
                Step {idx + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[510px]">
        {/* Left Bento: Benchmark Suites Matrix */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <BarChart3 size={18} className="text-[var(--pres-accent)]" /> Multi-Turn Agent Benchmark Performance Suites
              </span>
              <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 font-bold border border-cyan-500/30">
                Active Step {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {suites.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg)]/60 flex items-center justify-between gap-4 font-mono"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 font-bold flex items-center justify-center text-[15px] border border-cyan-500/30">
                      <Cpu size={18} />
                    </span>
                    <div>
                      <div className="font-bold text-[15px] text-slate-900 dark:text-slate-100">{item.suiteName}</div>
                      <div className="text-[14px] text-slate-600 dark:text-slate-400">
                        Accuracy: <span className="font-bold text-emerald-700 dark:text-emerald-400">{item.toolCallAccuracyPercentage.toFixed(1)}%</span> • Violations: <span className="font-bold text-slate-800 dark:text-slate-200">{item.safetyViolationCount}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="block text-[14px] text-slate-500 dark:text-slate-400 uppercase">Suite ELO</span>
                      <span className="text-[18px] font-bold text-indigo-700 dark:text-indigo-400">{item.eloRating}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[14px] font-bold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                      <CheckCircle2 size={14} /> PASS
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between text-[14px] font-mono text-slate-600 dark:text-slate-400">
            <span>Regression Monitoring: Zero Drift Detected</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Target ELO Floor: 1,400+ Exceeded</span>
          </div>
        </div>

        {/* Right Bento: Active Stage Verification & Gate Audit */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Layers size={18} className="text-indigo-500" /> Stage Verification & Deployment Gate
              </span>
              <span className="text-[14px] font-mono text-slate-600 dark:text-slate-400 font-bold">
                Phase {currentStep + 1} of {stages.length}
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl border border-[var(--pres-accent)]/30 bg-[var(--pres-accent)]/10 font-mono">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[14px] font-bold text-[var(--pres-accent)] uppercase">Current Phase Objective</span>
                <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-300">ACTIVE</span>
              </div>
              <p className="text-[14px] text-slate-800 dark:text-slate-200 leading-relaxed font-sans mb-3">
                {activeStage.stageSubtitle}
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[var(--pres-border)] text-[14px]">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Scenarios Run</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100">{activeStage.testScenariosExecutedCount} cases</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Gate Pass Rate</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">{activeStage.passRatePercentage.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-[var(--pres-border)] flex items-center justify-between">
                <span className="text-slate-700 dark:text-slate-300">Tool Argument Conformance</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400">99.8% Validated</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-[var(--pres-border)] flex items-center justify-between">
                <span className="text-slate-700 dark:text-slate-300">Adversarial Jailbreak Resistance</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400">100.0% Guarded</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-[var(--pres-border)] flex items-center justify-between">
                <span className="text-slate-700 dark:text-slate-300">Container Promotion Gate</span>
                <span className="font-bold text-indigo-700 dark:text-indigo-400">{targetGate}</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-900 dark:text-cyan-200 font-mono text-[14px] flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
            <span>Autonomous regression loop verified: Zero regressions detected across 2,400 runs.</span>
          </div>
        </div>
      </div>

      {/* Plane 2 Telemetry Footer */}
      <div className={`plane-1-raised z-10 px-6 py-3.5 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] flex items-center justify-between font-mono text-[14px] text-slate-700 dark:text-slate-300 shadow-md ${hasGlow ? 'shadow-cyan-500/10' : ''}`}>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            EVALUATION STATUS: LINE-RATE VERIFIED
          </span>
          <span>Target Deployment Gate: <strong className="text-[var(--pres-accent)]">{targetGate}</strong></span>
          <span>Blended ELO Rating: <strong className="text-indigo-700 dark:text-indigo-400">{blendedElo}</strong></span>
        </div>
        <div className="flex items-center gap-6">
          <span>Lead Architect: <strong>{data?.leadArchitect || 'Alim Ul Karim'}</strong>, <span className="text-[var(--pres-accent)]">{data?.leadRole || 'Chief Software Engineer'}</span></span>
          <span className="text-slate-500 dark:text-slate-400">16:9 4K Precision DOM Standard</span>
        </div>
      </div>
    </div>
  );
};

export default ContinuousAiAgentEvalHarnessSlide;
