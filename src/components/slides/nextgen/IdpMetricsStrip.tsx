import React from 'react';
import { Users, Zap, Sparkles, Activity } from 'lucide-react';

interface IdpMetricsStripProps {
  variant: 'header' | 'footer';
  catalog?: { totalServicesTracked: number; compliantServicesPercentage: number };
  pipeline?: { avgProvisioningSeconds: number; activeProvisioningsCount: number; isSelfServiceEnabled: boolean };
  adoption?: { weeklyActiveEngineers: number; onboardingTimeReductionPercent: number; developerSatisfactionScore: number };
}

export const IdpMetricsStrip: React.FC<IdpMetricsStripProps> = ({
  variant,
  catalog,
  pipeline,
  adoption,
}) => {
  if (variant === 'header') {
    return (
      <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Services Tracked
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">
            {catalog?.totalServicesTracked ?? 1420}
          </span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Catalog Compliance
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-sky-400">
            {catalog?.compliantServicesPercentage ?? 96.4}%
          </span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Avg Setup
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-violet-400">
            {pipeline?.avgProvisioningSeconds ?? 42.0}s
          </span>
        </div>
      </div>
    );
  }

  const weeklyEngineers = (adoption?.weeklyActiveEngineers ?? 2450).toLocaleString();
  const onboardingReduction = adoption?.onboardingTimeReductionPercent ?? 78.5;
  const csat = adoption?.developerSatisfactionScore ?? 4.8;
  const activeCount = pipeline?.activeProvisioningsCount ?? 14;

  return (
    <div className="z-10 plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Users size={16} className="text-sky-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Weekly Engineers:</span>
          <span className="font-bold text-slate-900 dark:text-sky-300">{weeklyEngineers}</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-emerald-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Onboarding Acceleration:</span>
          <span className="font-bold text-slate-900 dark:text-emerald-300">+{onboardingReduction}% Faster</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-violet-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Developer CSAT:</span>
          <span className="font-bold text-slate-900 dark:text-violet-300">{csat} / 5.0</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
          <Activity size={13} className="text-emerald-400 animate-pulse" />
          Self-Service Engine Active
        </span>
        <span className="text-xs text-slate-500">Provisionings In-Flight: {activeCount}</span>
      </div>
    </div>
  );
};
