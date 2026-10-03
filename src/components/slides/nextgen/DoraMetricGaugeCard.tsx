import React from 'react';
import type { ValueStreamDoraFlywheelSlideData } from '../../../types/nextGenArchetypes';
import { Layers, Rocket, Gauge, Sparkles, TrendingUp, Award, ShieldCheck, Activity } from 'lucide-react';

interface DoraMetricGaugeCardProps {
  variant: 'header' | 'footer';
  dora?: ValueStreamDoraFlywheelSlideData['doraMetrics'];
  flow?: ValueStreamDoraFlywheelSlideData['flowFramework'];
  impact?: ValueStreamDoraFlywheelSlideData['valueImpact'];
}

export const DoraMetricGaugeCard: React.FC<DoraMetricGaugeCardProps> = ({ variant, dora, flow, impact }) => {
  if (variant === 'header') {
    const d = dora || { deploymentFrequencyPerDay: 48.2, leadTimeHours: 1.2, changeFailureRatePercent: 0.8, mttrMinutes: 14.0 };
    const items = [
      { label: 'Deploy Frequency', val: `${d.deploymentFrequencyPerDay}/day`, color: 'text-emerald-400', badgeColor: 'text-emerald-800 dark:text-emerald-300' },
      { label: 'Lead Time', val: `${d.leadTimeHours}h`, color: 'text-sky-400', badgeColor: 'text-sky-800 dark:text-sky-300' },
      { label: 'Failure Rate', val: `${d.changeFailureRatePercent}%`, color: 'text-violet-400', badgeColor: 'text-violet-800 dark:text-violet-300' },
      { label: 'MTTR Recovery', val: `${d.mttrMinutes}m`, color: 'text-emerald-400', badgeColor: 'text-emerald-800 dark:text-emerald-300' },
    ];
    return (
      <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono">
        {items.map((it, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <div className="w-[1px] h-8 bg-slate-700/50" />}
            <div>
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase tracking-wider">{it.label}</span>
              <span className={`text-base font-bold text-slate-900 dark:${it.color}`}>{it.val}</span>
              <span className={`text-[10px] ${it.badgeColor} block font-bold`}>ELITE</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }

  const fl = flow || { flowVelocityItemsPerSprint: 142, flowEfficiencyPercent: 84.0 };
  const imp = impact || { shippedFeaturesQuarterCount: 84, revenueImpactMillionUsd: 42.5 };
  const flowCards = [
    { label: 'FLOW VELOCITY', val: `${fl.flowVelocityItemsPerSprint} Items/Sprint`, icon: <Rocket size={16} className="text-emerald-400" /> },
    { label: 'FLOW EFFICIENCY', val: `${fl.flowEfficiencyPercent}% Active`, icon: <Gauge size={16} className="text-sky-400" /> },
    { label: 'SHIPPED FEATURES', val: `${imp.shippedFeaturesQuarterCount} / Qtr`, icon: <Sparkles size={16} className="text-violet-400" /> },
    { label: 'REVENUE ACCRETION', val: `+$${imp.revenueImpactMillionUsd}M`, icon: <TrendingUp size={16} className="text-emerald-400" /> },
  ];

  return (
    <div className="z-10 space-y-3 font-mono text-xs">
      <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 flex items-center gap-2">
            <Layers size={14} className="text-violet-400" /> Flow Framework &amp; Attributed Impact
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 text-[10px] font-bold">WIP Limits Enforced</span>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {flowCards.map((fc, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-black/15 dark:bg-black/35 border border-white/5 flex items-center justify-between">
              <div>
                <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block">{fc.label}</span>
                <span className="text-sm font-bold text-slate-900 dark:text-emerald-400">{fc.val}</span>
              </div>
              {fc.icon}
            </div>
          ))}
        </div>
      </div>

      <div className="plane-1-raised rounded-2xl p-3.5 px-6 border border-slate-700/60 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Award size={14} className="text-emerald-400" />
            <span style={{ color: 'var(--pres-text-muted)' }}>DORA:</span>
            <span className="font-bold text-slate-900 dark:text-emerald-400">Top 1% Global Tier (Elite)</span>
          </div>
          <div className="w-[1px] h-4 bg-slate-700/50" />
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-sky-400" />
            <span style={{ color: 'var(--pres-text-muted)' }}>Lead:</span>
            <span className="font-bold text-slate-900 dark:text-slate-200">Alim Ul Karim, Chief Software Engineer</span>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-bold">
          <Activity size={13} className="text-emerald-400" /> Flow Cycle Time 2.4 Days
        </span>
      </div>
    </div>
  );
};
