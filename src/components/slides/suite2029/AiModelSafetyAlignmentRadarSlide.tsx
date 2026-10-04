// lint-allow: file-size reason="AiModelSafetyAlignmentRadarSlide flat sovereign AI safety alignment radar" max=420
import React from 'react';
import type {
  AiModelSafetyAlignmentRadarSlideData,
  SafetyEvaluationAxis,
} from '../../../types/suite2029Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Sparkles,
  Zap,
  Radio,
  FileCheck2,
  Scale,
  Brain,
  AlertOctagon,
  Layers,
} from 'lucide-react';

const DEF_AXES: SafetyEvaluationAxis[] = [
  {
    id: 'axis-injection',
    axisName: 'Prompt Injection & Jailbreak Defense',
    benchmarkScorePercentage: 99.4,
    thresholdScorePercentage: 95.0,
    evaluationMethodology: 'HarmBench & Adversarial Fuzzing',
    isStandardPassed: true,
    hasZeroKnownExploits: true,
  },
  {
    id: 'axis-exfiltration',
    axisName: 'PII & Sensitive Data Exfiltration Guard',
    benchmarkScorePercentage: 99.8,
    thresholdScorePercentage: 98.0,
    evaluationMethodology: 'Differential Privacy & Canaries',
    isStandardPassed: true,
    hasZeroKnownExploits: true,
  },
  {
    id: 'axis-cbrn',
    axisName: 'CBRN & Cyberweapon Refusal Gate',
    benchmarkScorePercentage: 100.0,
    thresholdScorePercentage: 99.5,
    evaluationMethodology: 'WMD Threat Invariant Suite',
    isStandardPassed: true,
    hasZeroKnownExploits: true,
  },
  {
    id: 'axis-hallucination',
    axisName: 'Hallucination & Factuality Grounding',
    benchmarkScorePercentage: 97.8,
    thresholdScorePercentage: 94.0,
    evaluationMethodology: 'TruthfulQA & Med-Fact Invariants',
    isStandardPassed: true,
    hasZeroKnownExploits: true,
  },
  {
    id: 'axis-hijacking',
    axisName: 'Autonomous Goal Hijacking Resilience',
    benchmarkScorePercentage: 99.1,
    thresholdScorePercentage: 95.0,
    evaluationMethodology: 'Agentic Sandboxing & Invariant Checks',
    isStandardPassed: true,
    hasZeroKnownExploits: true,
  },
  {
    id: 'axis-sycophancy',
    axisName: 'Sycophancy & Cognitive Honesty',
    benchmarkScorePercentage: 98.6,
    thresholdScorePercentage: 93.0,
    evaluationMethodology: 'Multi-Perspective Dialectic Probes',
    isStandardPassed: true,
    hasZeroKnownExploits: true,
  },
];

export const AiModelSafetyAlignmentRadarSlide: React.FC<{
  slide?: AiModelSafetyAlignmentRadarSlideData;
  data?: AiModelSafetyAlignmentRadarSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const axes = data?.safetyAxes?.length ? data.safetyAxes : DEF_AXES;
  const modelId = data?.modelIdentifier || 'FRONTIER-REASONER-V4 (Suite 2029)';
  const overallSafety = data?.overallSafetyIndex ?? 99.1;
  const alignmentTax = data?.alignmentTaxPercentage ?? 1.8;

  const isAlignmentPassed = data?.isAlignmentPassed ?? true;
  const hasRedTeaming = data?.hasAutomatedRedTeaming ?? true;
  const hasGuardrail = data?.hasOutputGuardrailActive ?? true;

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
              <Brain size={16} className="text-rose-500" />
              {data?.kicker || 'FOUNDATION MODEL SAFETY & ALIGNMENT'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              Alignment Status: {isAlignmentPassed ? 'All 6 Axes Passed' : 'Conditional'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Sparkles size={14} /> Model: {modelId}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <Radio size={14} /> Red Teaming: {hasRedTeaming ? 'Continuous Auto-Fuzzing' : 'Periodic'}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'AI Model Safety Alignment Radar'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Exhaustive 6-axis safety benchmarking against state-of-the-art adversarial jailbreaks, dangerous capability refusals, and low-overhead alignment guardrails.'}
          </p>
        </div>

        {/* Top-Right Executive Metric Badge */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Safety Index</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
              {overallSafety.toFixed(1)} / 100
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Alignment Tax</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
              {alignmentTax.toFixed(1)}% Overhead
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
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Tested Vectors</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[22px]">250,000+ Adversarial</span>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <ShieldAlert size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Blended Safety Score</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">{overallSafety.toFixed(1)}% Passed</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Output Guardrails</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[22px]">
              {hasGuardrail ? 'Real-Time Interceptor' : 'Standby'}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Zap size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Zero-Day Vulnerabilities</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">0 Active Exploits</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={24} />
          </div>
        </div>
      </div>

      {/* Main 6-Axis Bento Grid */}
      <div className="grid grid-cols-3 gap-5 z-10 my-auto items-stretch h-[540px]">
        {axes.map((axis) => {
          return (
            <div
              key={axis.id}
              className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-5 flex flex-col justify-between shadow-xl hover:-translate-y-0.5 hover:border-[var(--pres-accent)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-rose-500" />
                    <span className="font-bold text-slate-900 dark:text-white text-[16px] leading-tight">
                      {axis.axisName}
                    </span>
                  </div>
                  <span className="text-[14px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                    {axis.isStandardPassed ? 'Passed' : 'Deficient'}
                  </span>
                </div>

                <div className="mt-4 flex items-baseline justify-between font-mono">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase">Benchmark Score</span>
                    <div className="text-[34px] font-black tracking-tight text-slate-900 dark:text-white leading-none mt-1">
                      {axis.benchmarkScorePercentage.toFixed(1)}%
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase">Pass Threshold</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
                      &gt;= {axis.thresholdScorePercentage.toFixed(1)}%
                    </span>
                  </div>
                </div>

                {/* Score Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                      style={{ width: `${axis.benchmarkScorePercentage}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-[var(--pres-border)] font-mono text-[14px]">
                  <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase mb-0.5">Methodology</span>
                  <span className="text-slate-800 dark:text-slate-200 font-bold text-[14px]">
                    {axis.evaluationMethodology}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
                <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  Known Exploits: {axis.hasZeroKnownExploits ? '0 (Clean)' : 'Present'}
                </span>
                <span className="text-[var(--pres-accent)] font-bold">Rigorous Proven</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Alignment Assurance:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <CheckCircle2 size={18} /> Zero Safety Invariant Violations | Negligible 1.8% Alignment Tax | Production Ready
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
            <Brain size={16} /> Suite 2029 Safety Radar
          </span>
        </div>
      </div>
    </div>
  );
};
