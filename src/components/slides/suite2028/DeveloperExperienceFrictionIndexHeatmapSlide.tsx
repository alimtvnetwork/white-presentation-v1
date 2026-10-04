// lint-allow: file-size reason="DeveloperExperienceFrictionIndexHeatmapSlide flat sovereign DevEx friction heatmap" max=430
import React from 'react';
import type {
  DeveloperExperienceFrictionIndexHeatmapSlideData,
  DevExFrictionCellNode,
} from '../../../types/suite2028Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Activity,
  HeartHandshake,
  Clock,
  Layers,
  CheckCircle2,
  Calendar,
  Sparkles,
  Zap,
  TrendingDown,
  ShieldCheck,
  Code,
  Terminal,
} from 'lucide-react';

const DEF_CELLS: DevExFrictionCellNode[] = [
  {
    id: 'cell-onboard-infra',
    lifecycleStage: 'Onboarding',
    engineeringOrg: 'Core Infrastructure',
    frictionSeverityScore: 2.1,
    weeklyHoursLostPerEngineer: 0.8,
    p95WaitDurationMinutes: 15.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-onboard-front',
    lifecycleStage: 'Onboarding',
    engineeringOrg: 'Frontend Apps',
    frictionSeverityScore: 2.4,
    weeklyHoursLostPerEngineer: 1.1,
    p95WaitDurationMinutes: 18.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-onboard-data',
    lifecycleStage: 'Onboarding',
    engineeringOrg: 'Data Platforms',
    frictionSeverityScore: 3.2,
    weeklyHoursLostPerEngineer: 1.8,
    p95WaitDurationMinutes: 25.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-onboard-ai',
    lifecycleStage: 'Onboarding',
    engineeringOrg: 'AI Research',
    frictionSeverityScore: 4.1,
    weeklyHoursLostPerEngineer: 2.4,
    p95WaitDurationMinutes: 32.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },

  {
    id: 'cell-local-infra',
    lifecycleStage: 'Local Dev',
    engineeringOrg: 'Core Infrastructure',
    frictionSeverityScore: 1.8,
    weeklyHoursLostPerEngineer: 0.5,
    p95WaitDurationMinutes: 5.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-local-front',
    lifecycleStage: 'Local Dev',
    engineeringOrg: 'Frontend Apps',
    frictionSeverityScore: 2.0,
    weeklyHoursLostPerEngineer: 0.7,
    p95WaitDurationMinutes: 8.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-local-data',
    lifecycleStage: 'Local Dev',
    engineeringOrg: 'Data Platforms',
    frictionSeverityScore: 2.9,
    weeklyHoursLostPerEngineer: 1.4,
    p95WaitDurationMinutes: 14.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-local-ai',
    lifecycleStage: 'Local Dev',
    engineeringOrg: 'AI Research',
    frictionSeverityScore: 3.8,
    weeklyHoursLostPerEngineer: 2.1,
    p95WaitDurationMinutes: 20.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },

  {
    id: 'cell-ci-infra',
    lifecycleStage: 'CI/CD Pipeline',
    engineeringOrg: 'Core Infrastructure',
    frictionSeverityScore: 3.2,
    weeklyHoursLostPerEngineer: 1.5,
    p95WaitDurationMinutes: 6.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-ci-front',
    lifecycleStage: 'CI/CD Pipeline',
    engineeringOrg: 'Frontend Apps',
    frictionSeverityScore: 3.8,
    weeklyHoursLostPerEngineer: 1.9,
    p95WaitDurationMinutes: 7.2,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-ci-data',
    lifecycleStage: 'CI/CD Pipeline',
    engineeringOrg: 'Data Platforms',
    frictionSeverityScore: 5.8,
    weeklyHoursLostPerEngineer: 3.6,
    p95WaitDurationMinutes: 18.0,
    isFrictionRemediated: false,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-ci-ai',
    lifecycleStage: 'CI/CD Pipeline',
    engineeringOrg: 'AI Research',
    frictionSeverityScore: 4.8,
    weeklyHoursLostPerEngineer: 2.8,
    p95WaitDurationMinutes: 14.5,
    isFrictionRemediated: false,
    hasAutomationInvestmentApproved: true,
  },

  {
    id: 'cell-review-infra',
    lifecycleStage: 'Code Review',
    engineeringOrg: 'Core Infrastructure',
    frictionSeverityScore: 2.6,
    weeklyHoursLostPerEngineer: 1.2,
    p95WaitDurationMinutes: 45.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-review-front',
    lifecycleStage: 'Code Review',
    engineeringOrg: 'Frontend Apps',
    frictionSeverityScore: 2.8,
    weeklyHoursLostPerEngineer: 1.4,
    p95WaitDurationMinutes: 50.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-review-data',
    lifecycleStage: 'Code Review',
    engineeringOrg: 'Data Platforms',
    frictionSeverityScore: 3.4,
    weeklyHoursLostPerEngineer: 1.8,
    p95WaitDurationMinutes: 60.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-review-ai',
    lifecycleStage: 'Code Review',
    engineeringOrg: 'AI Research',
    frictionSeverityScore: 3.0,
    weeklyHoursLostPerEngineer: 1.5,
    p95WaitDurationMinutes: 52.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },

  {
    id: 'cell-deploy-infra',
    lifecycleStage: 'Production Deploy',
    engineeringOrg: 'Core Infrastructure',
    frictionSeverityScore: 1.4,
    weeklyHoursLostPerEngineer: 0.3,
    p95WaitDurationMinutes: 2.5,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-deploy-front',
    lifecycleStage: 'Production Deploy',
    engineeringOrg: 'Frontend Apps',
    frictionSeverityScore: 1.8,
    weeklyHoursLostPerEngineer: 0.5,
    p95WaitDurationMinutes: 3.5,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-deploy-data',
    lifecycleStage: 'Production Deploy',
    engineeringOrg: 'Data Platforms',
    frictionSeverityScore: 2.4,
    weeklyHoursLostPerEngineer: 0.8,
    p95WaitDurationMinutes: 6.0,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
  {
    id: 'cell-deploy-ai',
    lifecycleStage: 'Production Deploy',
    engineeringOrg: 'AI Research',
    frictionSeverityScore: 2.0,
    weeklyHoursLostPerEngineer: 0.6,
    p95WaitDurationMinutes: 4.8,
    isFrictionRemediated: true,
    hasAutomationInvestmentApproved: true,
  },
];

const ORGS = ['Core Infrastructure', 'Frontend Apps', 'Data Platforms', 'AI Research'];
const STAGES: Array<'Onboarding' | 'Local Dev' | 'CI/CD Pipeline' | 'Code Review' | 'Production Deploy'> = [
  'Onboarding',
  'Local Dev',
  'CI/CD Pipeline',
  'Code Review',
  'Production Deploy',
];

export const DeveloperExperienceFrictionIndexHeatmapSlide: React.FC<{
  slide?: DeveloperExperienceFrictionIndexHeatmapSlideData;
  data?: DeveloperExperienceFrictionIndexHeatmapSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const frictionCells = data?.frictionCells?.length ? data.frictionCells : DEF_CELLS;
  const frictionIndex = data?.blendedFrictionIndex ?? 3.8;
  const devNps = data?.developerNetPromoterScore ?? 52;

  const hasContinuousMeasurement = data?.hasContinuousMeasurementActive ?? true;
  const hasP95UnderFive = data?.hasP95CiBuildUnderFiveMinutes ?? true;
  const hasHermeticLocal = data?.hasHermeticLocalSetup ?? true;

  const getCellFor = (stage: string, org: string) => {
    return frictionCells.find(
      (c) => c.lifecycleStage === stage && c.engineeringOrg === org
    ) || {
      id: `${stage}-${org}`,
      lifecycleStage: stage as any,
      engineeringOrg: org,
      frictionSeverityScore: 2.5,
      weeklyHoursLostPerEngineer: 1.0,
      p95WaitDurationMinutes: 10,
      isFrictionRemediated: true,
      hasAutomationInvestmentApproved: true,
    };
  };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Activity size={16} className="text-cyan-500" />
              {data?.kicker || 'ENGINEERING PRODUCTIVITY & DEVEX'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Terminal size={14} /> Org: {data?.organizationName || 'Global Technology Platforms (3,200 Engineers)'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <HeartHandshake size={14} className="text-emerald-500" />
              Dev NPS: +{devNps} (Top Quartile)
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Developer Experience Friction Index Heatmap'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Cross-organization lifecycle toil telemetry, P95 CI build wait profiling, and developer net promoter scores.'}
          </p>
        </div>

        {/* Executive Metric Badge Strip */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Friction Index</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {frictionIndex.toFixed(1)} / 10 Target &lt; 4.0
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Developer NPS</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              +{devNps} Top Tier
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
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Friction Index</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[22px]">{frictionIndex.toFixed(1)} / 10</span>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Activity size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Dev NPS Score</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">+{devNps} Top Quartile</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <HeartHandshake size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">P95 CI Duration</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[22px]">4.2 Min (SLA &lt; 5m)</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Clock size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Weekly Toil Cut</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">-42% YoY</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <TrendingDown size={24} />
          </div>
        </div>
      </div>

      {/* Main Lifecycle Heatmap Bento Matrix */}
      <div className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl z-10 my-auto h-[540px]">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Layers size={16} className="text-[var(--pres-accent)]" /> Developer Lifecycle Friction Heatmap & Engineering Toil Profiling
            </span>
            <div className="flex items-center gap-3 font-mono text-[14px]">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                Continuous Telemetry: {hasContinuousMeasurement ? 'Active' : 'Off'}
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                CI &lt; 5m: {hasP95UnderFive ? 'Enforced' : 'Off'}
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-500/20">
                Hermetic Local: {hasHermeticLocal ? 'Passed' : 'Off'}
              </span>
            </div>
          </div>

          {/* Matrix Table */}
          <div className="mt-3">
            {/* Header */}
            <div className="grid grid-cols-5 gap-3 py-2.5 px-4 rounded-xl bg-slate-200/60 dark:bg-slate-800/60 font-mono text-[14px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              <div>Lifecycle Stage</div>
              {ORGS.map((org) => (
                <div key={org} className="text-center">{org}</div>
              ))}
            </div>

            {/* Rows */}
            <div className="space-y-2 mt-2">
              {STAGES.map((stage, sIdx) => (
                <div
                  key={stage}
                  className="grid grid-cols-5 gap-3 items-center p-2.5 px-4 rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 font-mono text-[14px]"
                >
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[13px] font-mono text-slate-600 dark:text-slate-300">
                      {sIdx + 1}
                    </span>
                    {stage}
                  </div>

                  {ORGS.map((org) => {
                    const cell = getCellFor(stage, org);
                    const score = cell.frictionSeverityScore;

                    const isSmooth = score <= 2.5;
                    const isModerate = score > 2.5 && score <= 4.5;
                    const isAttention = score > 4.5;

                    return (
                      <div
                        key={org}
                        className={`p-2.5 rounded-xl border text-center transition-all hover:-translate-y-0.5 ${
                          isSmooth
                            ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300'
                            : isModerate
                            ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-800 dark:text-cyan-300'
                            : 'border-amber-500/40 bg-amber-500/10 text-amber-800 dark:text-amber-300'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-1.5 font-bold text-[16px]">
                          <span>{score.toFixed(1)} / 10</span>
                          {isSmooth ? (
                            <CheckCircle2 size={14} className="text-emerald-500" />
                          ) : isModerate ? (
                            <Code size={14} className="text-cyan-500" />
                          ) : (
                            <Zap size={14} className="text-amber-500" />
                          )}
                        </div>
                        <div className="text-[13px] opacity-80 mt-0.5">
                          {cell.weeklyHoursLostPerEngineer}h lost / eng
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Heatmap Card Footer Summary */}
        <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <Zap size={16} className="text-emerald-600 dark:text-emerald-400" />
            Productivity Win: 3.8 Hours Saved / Engineer / Week | CI Cache Hit Rate: 91%
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">
            Local Dev Flakiness: 0.04% | SPACE Framework Aligned
          </span>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Productivity Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <ShieldCheck size={18} /> Top-Decile Developer Velocity | P95 CI Pipeline Build Under 5 Minutes Guaranteed
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
            <Terminal size={16} /> Suite 2028 DevEx Heatmap
          </span>
        </div>
      </div>
    </div>
  );
};
