// lint-allow: file-size reason="ExecutiveMetricsPulseSlide monumental KPI stepper telemetry" max=120
import React from 'react';
import type { ExecutiveMetricsPulseSlideData } from '../../../types/suite2032Archetypes';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { Activity, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

export const ExecutiveMetricsPulseSlide: React.FC<{
  slide: ExecutiveMetricsPulseSlideData;
  activeStep?: number;
}> = ({ slide, activeStep = 0 }) => {
  const metrics = slide.metrics || [];
  const departments = slide.departments || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg, #0b0f19)', color: 'var(--pres-text, #f8fafc)' }}
      className="relative w-[1920px] h-[1080px] p-[56px_72px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-base font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full bg-[var(--pres-accent,#6366f1)]/10 text-[var(--pres-accent,#818cf8)] border border-[var(--pres-accent,#6366f1)]/30 flex items-center gap-2">
              <Sparkles size={16} />
              {slide.kicker || 'TELEMETRY & BOARD VITALS'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300">{slide.reportWindow}</span>
          </div>
          <h1 className="text-4xl font-bold font-display tracking-tight text-white mb-2">{slide.title}</h1>
          <p className="text-base text-slate-400 max-w-[1200px] leading-relaxed">{slide.subtitle}</p>
        </div>
        <div className="p-4 px-6 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-4 shrink-0">
          <Activity className="w-10 h-10 text-emerald-400 animate-pulse" />
          <div>
            <div className="text-sm font-semibold text-slate-400">Composite Health Score</div>
            <div className="text-3xl font-bold font-mono text-white">{slide.overallHealthScore}%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto items-stretch">
        {metrics.map((item, idx) => {
          const phase = resolveStepPhase(idx, activeStep);
          const style = getStepLifecycleStyle(phase);
          return (
            <div
              key={item.id}
              style={style}
              className="p-6 rounded-2xl bg-[var(--pres-card-bg,rgba(255,255,255,0.03))] border border-white/10 flex flex-col justify-between transition-all duration-300 relative overflow-hidden backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono font-bold text-slate-400 uppercase tracking-wider">KPI 0{idx + 1}</span>
                  <span className="inline-flex items-center gap-1 font-mono text-sm font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <ArrowUpRight size={16} /> {item.changePercentage}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-300 mb-2">{item.metricLabel}</div>
                <div className="text-4xl font-extrabold font-mono text-white tracking-tight mb-4">{item.metricValue}</div>
                <div className="text-emerald-400/80 mb-4">
                  <svg className="w-full h-12 stroke-current" viewBox="0 0 100 40">
                    <polyline fill="none" strokeWidth="2.5" points="0,32 20,28 40,24 60,18 80,12 100,6" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
                  <span>Target Benchmark</span>
                  <span className="font-mono font-bold text-white">{item.targetBenchmark}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-3">
                  <div className="h-full bg-gradient-to-r from-[var(--pres-accent,#6366f1)] to-emerald-400 w-[96%]" />
                </div>
                <div className="flex items-center justify-between text-sm font-mono text-slate-400">
                  <span>{item.periodComparison}</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1"><CheckCircle2 size={16} /> Attained</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-6 p-4 rounded-xl bg-white/[0.03] border border-white/10">
        <span className="text-sm font-mono font-bold text-[var(--pres-accent,#818cf8)] uppercase tracking-wider">Department Vitals:</span>
        <div className="flex items-center gap-6 divide-x divide-white/10 flex-1">
          {departments.map((dept) => (
            <div key={dept.id} className="pl-6 first:pl-0 flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-200">{dept.departmentName}</span>
              <span className="font-mono text-sm font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">{dept.performanceScore}%</span>
            </div>
          ))}
        </div>
        <span className="font-mono text-sm text-slate-400">ARCHETYPE: EXECUTIVE-METRICS-PULSE</span>
      </div>
    </div>
  );
};
