import React from 'react';
import type { CyberThreatKillChainSlideData } from '../../../types/nextGenArchetypes';
import { AlertTriangle, Eye, ShieldCheck, Activity } from 'lucide-react';

interface SoarContainmentStripProps {
  variant: 'header' | 'footer';
  actor?: CyberThreatKillChainSlideData['threatActor'];
  soc?: CyberThreatKillChainSlideData['socTelemetry'];
  review?: CyberThreatKillChainSlideData['cisoReview'];
}

export const SoarContainmentStrip: React.FC<SoarContainmentStripProps> = ({
  variant,
  actor,
  soc,
  review,
}) => {
  if (variant === 'header') {
    const act = actor || { adversaryCodename: 'APT-29 (Cozy Bear)' };
    const sc = soc || { meanTimeToContainMinutes: 1.4, automatedContainmentRatePercent: 99.4 };
    return (
      <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Adversary
          </span>
          <span className="text-xl font-bold text-rose-500 flex items-center gap-1.5">
            <AlertTriangle size={16} />
            {act.adversaryCodename}
          </span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Mean Time to Contain
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">
            {sc.meanTimeToContainMinutes}m
          </span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            SOAR Automated
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-sky-400">
            {sc.automatedContainmentRatePercent}%
          </span>
        </div>
      </div>
    );
  }

  const target = actor?.targetAsset || 'Customer Identity Database & HSM Root Keys';
  const cisoName = review?.chiefInformationSecurityOfficer || 'Sarah Jenkins, CISO';
  const engLead = review?.chiefSoftwareEngineer || 'Alim Ul Karim, Chief Software Engineer';
  const alertCount = soc?.activeAlertsCount ?? 2;

  return (
    <div className="z-10 plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Eye size={16} className="text-sky-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Attributed Target:</span>
          <span className="font-bold text-slate-900 dark:text-sky-300">{target}</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-emerald-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Executive Review:</span>
          <span className="font-bold text-slate-900 dark:text-slate-200">
            {cisoName} | {engLead}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
          <Activity size={13} className="text-emerald-400 animate-pulse" />
          SOAR Autonomous Defense Armed
        </span>
        <span className="text-xs text-slate-500">Active Alerts: {alertCount}</span>
      </div>
    </div>
  );
};
