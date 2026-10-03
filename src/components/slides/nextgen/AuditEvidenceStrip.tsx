import React from 'react';
import type { ComplianceSoc2ReadinessLadderSlideData, TrustCriteriaScore } from '../../../types/nextGenArchetypes';
import { Lock, CheckCircle2, Award, ShieldCheck, Activity } from 'lucide-react';

interface AuditEvidenceStripProps {
  variant: 'header' | 'footer';
  compliance?: ComplianceSoc2ReadinessLadderSlideData['continuousCompliance'];
  criteria?: TrustCriteriaScore[];
  auditFirm?: ComplianceSoc2ReadinessLadderSlideData['auditFirm'];
}

export const AuditEvidenceStrip: React.FC<AuditEvidenceStripProps> = ({
  variant,
  compliance,
  criteria = [],
  auditFirm,
}) => {
  if (variant === 'header') {
    const c = compliance || { automatedEvidenceIngestionPercent: 98.4, failingControlsCount: 0 };
    return (
      <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Evidence Ingestion
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">{c.automatedEvidenceIngestionPercent}%</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Failing Controls
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-sky-400">{c.failingControlsCount}</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Audit Opinion
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-violet-400">Unqualified</span>
        </div>
      </div>
    );
  }

  const firm = auditFirm || { firmName: 'PricewaterhouseCoopers LLP', observationWindowMonths: 6 };

  return (
    <div className="z-10 space-y-3 font-mono text-xs">
      <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 flex items-center gap-2">
            <Lock size={14} className="text-emerald-400" />
            AICPA Trust Services Principles (100% Monitored)
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Continuous Evidence Collection Engine</span>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {criteria.map((cr, cIdx) => (
            <div key={cIdx} className="p-2.5 rounded-xl bg-black/15 dark:bg-black/35 border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-800 dark:text-slate-300 block">
                  {cr.criteriaName.replace('_', ' ')}
                </span>
                <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px]">
                  {cr.passedControlsCount} / {cr.totalControlsCount} Controls
                </span>
              </div>
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      <div className="plane-1-raised rounded-2xl p-3.5 px-6 border border-slate-700/60 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Award size={14} className="text-violet-400" />
            <span style={{ color: 'var(--pres-text-muted)' }}>Independent Auditor:</span>
            <span className="font-bold text-slate-900 dark:text-slate-200">
              {firm.firmName} ({firm.observationWindowMonths}-Month Window)
            </span>
          </div>
          <div className="w-[1px] h-4 bg-slate-700/50" />
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span style={{ color: 'var(--pres-text-muted)' }}>Signoff Lead:</span>
            <span className="font-bold text-slate-900 dark:text-slate-200">
              Alim Ul Karim, Chief Software Engineer
            </span>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-bold">
          <Activity size={13} className="text-emerald-400" /> Continuous SOC 2 Monitoring Active
        </span>
      </div>
    </div>
  );
};
