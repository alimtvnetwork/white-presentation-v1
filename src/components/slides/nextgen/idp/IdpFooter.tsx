import React from 'react';
import { Users, Zap, Sparkles, Activity, Award } from 'lucide-react';

interface IdpFooterProps {
  weeklyEngineers: number;
  onboardingReductionPct: number;
  csatScore: number;
  activeProvisionings: number;
}

export const IdpFooter: React.FC<IdpFooterProps> = ({
  weeklyEngineers,
  onboardingReductionPct,
  csatScore,
  activeProvisionings,
}) => {
  return (
    <div className="z-10 plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm">
      <div className="flex items-center gap-7">
        <div className="flex items-center gap-2">
          <Users size={16} className="text-sky-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Weekly Engineers:</span>
          <span className="font-bold text-slate-900 dark:text-sky-300">
            {weeklyEngineers.toLocaleString()}
          </span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-emerald-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Onboarding Acceleration:</span>
          <span className="font-bold text-slate-900 dark:text-emerald-300">
            +{onboardingReductionPct}%
          </span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-violet-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Developer CSAT:</span>
          <span className="font-bold text-slate-900 dark:text-violet-300">
            {csatScore} / 5.0
          </span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Award size={16} className="text-capsule-gold" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Signoff:</span>
          <span className="font-bold text-slate-900 dark:text-slate-200">
            Alim Ul Karim (Chief Software Engineer)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
          <Activity size={14} className="text-emerald-400 animate-pulse" />
          Live Fleet Provisioning ({activeProvisionings} In-Flight)
        </span>
      </div>
    </div>
  );
};
