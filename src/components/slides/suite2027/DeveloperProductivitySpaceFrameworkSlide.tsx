// lint-allow: file-size reason="DeveloperProductivitySpaceFrameworkSlide flat sovereign SPACE framework matrix" max=420
import React from 'react';
import type {
  DeveloperProductivitySpaceFrameworkSlideData,
  SpaceDimensionNode,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Users,
  Award,
  Zap,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Heart,
  Target,
  Activity,
  MessageSquare,
  Clock,
  Star,
} from 'lucide-react';

const DEF_DIMENSIONS: SpaceDimensionNode[] = [
  {
    id: 'space-s',
    dimensionCode: 'S',
    dimensionTitle: 'Satisfaction & Well-Being',
    primaryMetric: 'Developer Happiness Index: 88%',
    metricScore: 88.0,
    benchmarkPercentile: 92.0,
    isEliteTier: true,
  },
  {
    id: 'space-p',
    dimensionCode: 'P',
    dimensionTitle: 'Performance & Quality',
    primaryMetric: 'Code Review Quality Score: 94%',
    metricScore: 94.0,
    benchmarkPercentile: 96.0,
    isEliteTier: true,
  },
  {
    id: 'space-a',
    dimensionCode: 'A',
    dimensionTitle: 'Activity & Delivery',
    primaryMetric: 'Deploy Frequency: 42 deploys/day',
    metricScore: 92.0,
    benchmarkPercentile: 95.0,
    isEliteTier: true,
  },
  {
    id: 'space-c',
    dimensionCode: 'C',
    dimensionTitle: 'Communication & Collaboration',
    primaryMetric: 'Median PR Review Time: 18 minutes',
    metricScore: 96.0,
    benchmarkPercentile: 98.0,
    isEliteTier: true,
  },
  {
    id: 'space-e',
    dimensionCode: 'E',
    dimensionTitle: 'Efficiency & Deep Flow',
    primaryMetric: 'Uninterrupted Deep Work: 4.8h/day',
    metricScore: 91.0,
    benchmarkPercentile: 94.0,
    isEliteTier: true,
  },
];

const DIMENSION_ICONS = {
  S: Heart,
  P: Target,
  A: Activity,
  C: MessageSquare,
  E: Clock,
};

const DIMENSION_COLORS = {
  S: { bg: 'bg-rose-500/10', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-500/30' },
  P: { bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-500/30' },
  A: { bg: 'bg-cyan-500/10', text: 'text-cyan-600 dark:text-cyan-400', border: 'border-cyan-500/30' },
  C: { bg: 'bg-violet-500/10', text: 'text-violet-600 dark:text-violet-400', border: 'border-violet-500/30' },
  E: { bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500/30' },
};

export const DeveloperProductivitySpaceFrameworkSlide: React.FC<{
  slide?: DeveloperProductivitySpaceFrameworkSlideData;
  data?: DeveloperProductivitySpaceFrameworkSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const dimensions = data?.dimensions?.length ? data.dimensions : DEF_DIMENSIONS;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 flex items-center gap-2">
              <Users size={16} className="text-violet-500" />
              {data?.kicker || 'ENGINEERING HEALTH & DORA METRICS'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Award size={14} /> Org: {data?.engineeringOrgName || 'Core Platform Engineering'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" />
              Health Score: {data?.overallHealthScore ?? 94.2}%
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Developer Productivity SPACE Framework'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Multidimensional engineering velocity analysis covering satisfaction, performance, activity, collaboration, and flow efficiency.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">DORA Classification</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {data?.isDoraEliteTier ?? true ? 'ELITE TIER' : 'HIGH PERFORMER'}
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Deep Flow Protection</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {data?.hasDeepWorkProtected ?? true ? '4.8h / Day' : 'Unprotected'}
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

      {/* Main Plane 1 Bento Grid - 5 SPACE Dimensions */}
      <div className="grid grid-cols-5 gap-5 z-10 my-auto items-stretch h-[560px]">
        {dimensions.map((dim) => {
          const IconComp = DIMENSION_ICONS[dim.dimensionCode] || Activity;
          const color = DIMENSION_COLORS[dim.dimensionCode] || DIMENSION_COLORS.P;

          return (
            <div
              key={dim.id}
              className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pres-accent)] hover:shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
                  <span className={`px-2.5 py-1 rounded-md font-bold uppercase tracking-wider ${color.bg} ${color.text} border ${color.border} flex items-center gap-1.5`}>
                    <IconComp size={15} /> [{dim.dimensionCode}]
                  </span>
                  <span className="flex items-center gap-1 text-[12px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    <Star size={12} className="fill-amber-400 text-amber-500" /> Top {100 - dim.benchmarkPercentile}%
                  </span>
                </div>

                <div className="my-4">
                  <h3 className="text-[20px] font-ubuntu font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {dim.dimensionTitle}
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-black/30 border border-slate-200 dark:border-slate-800 space-y-2 font-mono">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[12px] text-slate-500 dark:text-slate-400 uppercase">Score</span>
                    <span className="text-[32px] font-bold text-slate-900 dark:text-white">
                      {dim.metricScore.toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[var(--pres-accent)] h-full rounded-full transition-all duration-500"
                      style={{ width: `${dim.metricScore}%` }}
                    />
                  </div>
                  <div className="text-[12px] text-slate-500 dark:text-slate-400 pt-1 flex justify-between">
                    <span>Percentile</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{dim.benchmarkPercentile}th</span>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-mono uppercase">Primary Metric</span>
                  <p className="font-mono text-[13px] font-semibold text-slate-800 dark:text-slate-200 mt-1 leading-snug">
                    {dim.primaryMetric}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[13px]">
                <span className="text-slate-500 dark:text-slate-400">Benchmark Tier</span>
                <span className="px-2 py-0.5 rounded font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={13} /> ELITE
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">Framework Status:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 size={16} /> GitHub & Google SPACE Research Verified | DORA Elite Attained
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-violet-600 dark:text-violet-400 font-bold flex items-center gap-1">
            <ShieldCheck size={16} /> Suite 2027 DevOps Core
          </span>
        </div>
      </div>
    </div>
  );
};
