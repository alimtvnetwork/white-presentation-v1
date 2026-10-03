import React from 'react';
import { ShieldCheck, Award, Activity, CheckCircle2 } from 'lucide-react';

interface Soc2FooterProps {
  automatedIngestionPct: number;
  failingControls: number;
  isContinuousMonitoring: boolean;
  csl?: string;
}

export const Soc2Footer: React.FC<Soc2FooterProps> = ({
  automatedIngestionPct,
  failingControls,
  isContinuousMonitoring,
  csl = 'Alim Ul Karim',
}) => {
  return (
    <div className="z-10 plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm">
      <div className="flex items-center gap-7">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-emerald-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Automated Ingestion:</span>
          <span className="font-bold text-slate-900 dark:text-emerald-300">{automatedIngestionPct}% Continuous</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-sky-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Failing Controls:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">{failingControls} Critical Breaches</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Award size={16} className="text-capsule-gold" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Audit Lead Signoff:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">
            {csl} (Chief Software Engineer)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
          <Activity size={14} className="text-emerald-400 animate-pulse" />
          {isContinuousMonitoring ? '24/7 Evidence Ingestion Mesh Active' : 'Offline'}
        </span>
      </div>
    </div>
  );
};
