import React from 'react';
import type { IntegrationStreamProgress, ExecutiveMaSynergySlideData } from '../../../types/nextGenArchetypes';
import { Layers, ShieldCheck, Award, Scale } from 'lucide-react';

interface IntegrationWorkstreamCardProps {
  variant?: 'waterfall' | 'streams';
  waterfall?: ExecutiveMaSynergySlideData['valuationWaterfall'];
  streams?: IntegrationStreamProgress[];
  governance?: ExecutiveMaSynergySlideData['governanceSignoff'];
}

export const IntegrationWorkstreamCard: React.FC<IntegrationWorkstreamCardProps> = ({
  variant = 'streams',
  waterfall,
  streams = [],
  governance,
}) => {
  if (variant === 'waterfall') {
    const wf = waterfall || { enterpriseValueMillionUsd: 4200.0, runRateSynergiesMillionUsd: 180.0, ebitdaMultiple: 14.2 };
    return (
      <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">Enterprise Value</span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">${(wf.enterpriseValueMillionUsd / 1000).toFixed(2)}B</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">Run-Rate Synergies</span>
          <span className="text-xl font-bold text-slate-900 dark:text-sky-400">${wf.runRateSynergiesMillionUsd}M / yr</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">EV / EBITDA</span>
          <span className="text-xl font-bold text-slate-900 dark:text-violet-400">{wf.ebitdaMultiple}x</span>
        </div>
      </div>
    );
  }

  const gov = governance || { chiefExecutiveOfficer: 'Elena Vance, CEO', chiefFinancialOfficer: 'EVP Finance', chiefSoftwareEngineer: 'Alim Ul Karim, Chief Software Engineer', isBoardApproved: true, isAntitrustCleared: true };

  return (
    <div className="z-10 space-y-3 font-mono text-xs">
      <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold tracking-wider uppercase text-slate-900 dark:text-slate-200 flex items-center gap-2">
            <Layers size={14} className="text-violet-400" />
            Integration Workstreams Progress &amp; Leadership
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }}>All 4 Streams Active &amp; On-Track</span>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {streams.map((stream, sIdx) => (
            <div key={sIdx} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800 dark:text-slate-300">{stream.streamName.replace('_', ' ')}</span>
                <span className="font-bold text-slate-900 dark:text-emerald-400">{stream.completionPercentage}%</span>
              </div>
              <div className="h-1.5 w-full bg-black/20 dark:bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-500 to-emerald-400 rounded-full" style={{ width: `${stream.completionPercentage}%` }} />
              </div>
              <p style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] truncate">Lead: {stream.streamLeaderTitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="plane-1-raised rounded-2xl p-3.5 px-6 border border-slate-700/60 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-slate-900 dark:text-slate-200 font-bold">
            <ShieldCheck size={14} className="text-emerald-400" /> Executive Governance:
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }}>
            {gov.chiefExecutiveOfficer} | {gov.chiefFinancialOfficer} | {gov.chiefSoftwareEngineer || 'Alim Ul Karim, Chief Software Engineer'}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {gov.isBoardApproved && (
            <span className="px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1 font-semibold">
              <Award size={12} /> Board Approved
            </span>
          )}
          {gov.isAntitrustCleared && (
            <span className="px-3 py-0.5 rounded-full bg-sky-500/10 text-sky-800 dark:text-sky-300 border border-sky-500/30 flex items-center gap-1 font-semibold">
              <Scale size={12} /> DOJ/FTC Cleared
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
