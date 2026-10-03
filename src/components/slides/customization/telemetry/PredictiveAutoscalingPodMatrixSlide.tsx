import React from 'react';
import { Server, ShieldCheck, Activity, Cpu } from 'lucide-react';
import type { PredictiveAutoscalingPodMatrixSlideData } from '../../../../types/customization/sovereignTelemetryTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { AutoscalingMetricCard } from './AutoscalingMetricCard';

export const PredictiveAutoscalingPodMatrixSlide: React.FC<{
  slide: PredictiveAutoscalingPodMatrixSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const storeStep = useDeckStore((s) => s.activeStep);
  const activeStep = slide.activeStep ?? storeStep ?? 1;
  const metricsList = slide.autoscalingMetrics || [];

  const metrics = [
    { label: 'Total Managed Pods', val: `${slide.totalManagedPods || 8400} Pods`, icon: Server, color: 'text-emerald-700 dark:text-emerald-400' },
    { label: 'Spot Instance Slicing', val: `${slide.spotInstanceRatioPercentage || 78}% Spot`, icon: Cpu, color: 'text-sky-700 dark:text-sky-400' },
    { label: 'Predictive Model', val: slide.isPredictiveModelActive ? 'Online ML Inference' : 'Calibrating', icon: Activity, color: 'text-indigo-700 dark:text-indigo-400' },
    { label: 'Zero Cold Start', val: slide.isZeroColdStartGuaranteed ? 'Guaranteed 0ms' : 'Standard SLA', icon: ShieldCheck, color: 'text-violet-700 dark:text-violet-400' },
  ];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
            <Server size={13} /> {slide.kicker || 'KUBERNETES FLEET OPTIMIZATION'}
          </span>
          <span className="font-mono text-xs text-sky-700 dark:text-sky-400 bg-sky-500/10 px-3 py-0.5 rounded-full border border-sky-300 dark:border-sky-500/30">
            Forecast Horizon: {slide.forecastHorizonHours || 24}h
          </span>
          <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
            <Activity size={12} /> Inference Cycle: {slide.mlInferenceIntervalSec || 15}s
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-4xl font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Predictive Autoscaling Pod Matrix'}
        </h1>
        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-5xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
        >
          {slide.subtitle || 'Real-time machine learning workload forecasting and proactive pod scaling'}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto">
        {metrics.map((m, idx) => (
          <div key={idx} className="plane-1-raised rounded-xl border border-[var(--pres-border)] p-3.5 flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg bg-emerald-500/10 ${m.color} flex items-center justify-center font-bold`}>
              <m.icon size={18} />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase" style={{ color: 'var(--pres-text-muted)' }}>{m.label}</div>
              <div className={`text-lg font-bold font-mono ${m.color}`}>{m.val}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-6 h-[460px] items-stretch">
        {metricsList.map((metric, idx) => (
          <AutoscalingMetricCard key={metric.id || idx} metric={metric} index={idx} isStepActive={activeStep === idx + 1} />
        ))}
      </div>

      <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-[var(--pres-border)]" style={{ color: 'var(--pres-text-muted)' }}>
        <span>Reinforcement Learning Custom Metrics Adapter • Prometheus / Thanos Telemetry Fed</span>
        <span>Lead Architect: Alim Ul Karim (Chief Software Engineer)</span>
      </div>
    </div>
  );
};
