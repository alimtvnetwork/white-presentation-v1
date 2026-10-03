import React from 'react';
import type { ComplianceGlobalHeader } from '../../../../types/modern/saasFinancialTypes';
import { Award, Zap, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';

interface AuditRadarPillProps {
  header: ComplianceGlobalHeader;
}

export const AuditRadarPill: React.FC<AuditRadarPillProps> = ({ header }) => (
  <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/50 flex items-center justify-between gap-6 z-10 font-mono text-sm">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <Award size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Compliance Posture</div>
        <div className="text-xl font-ubuntu font-black text-emerald-400">{header.overallComplianceScore}% Score</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
        <Zap size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Continuous Tests</div>
        <div className="text-xl font-ubuntu font-black text-blue-400">
          {header.totalAutomatedTestsPerHour} / Hour
        </div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
        <Activity size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Config Drift</div>
        <div className="text-xl font-ubuntu font-black text-purple-400">
          {header.configurationDriftPercentage}% Drift
        </div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
        <AlertTriangle size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Critical Findings</div>
        <div className="text-xl font-ubuntu font-black text-amber-400">
          {header.openCriticalFindingsCount} Open
        </div>
      </div>
    </div>

    {header.isAuditReady ? (
      <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
        <ShieldCheck size={13} />
        Audit Ready
      </div>
    ) : null}
  </div>
);
