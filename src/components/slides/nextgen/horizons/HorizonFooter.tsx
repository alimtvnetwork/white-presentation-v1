import React from 'react';
import { Award, BarChart3 } from 'lucide-react';

interface HorizonFooterProps {
  chiefStrategyOfficer: string;
  chiefSoftwareEngineer?: string;
  reviewQuarter: string;
  activeHorizonNumber: number;
  currentStep: number;
  totalSteps: number;
}

export const HorizonFooter: React.FC<HorizonFooterProps> = ({
  chiefStrategyOfficer,
  chiefSoftwareEngineer = 'Alim Ul Karim',
  reviewQuarter,
  activeHorizonNumber,
  currentStep,
  totalSteps,
}) => (
  <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
    <div className="flex items-center gap-3">
      <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold">
        <Award size={16} className="text-emerald-500" />
        Executive Strategy Governance Signed
      </span>
      <span className="text-slate-500">|</span>
      <span style={{ color: 'var(--pres-text-muted)' }}>
        CSO: <strong className="text-slate-800 dark:text-slate-200">{chiefStrategyOfficer}</strong>
      </span>
      <span className="text-slate-500">|</span>
      <span style={{ color: 'var(--pres-text-muted)' }}>
        Chief Software Engineer: <strong className="text-slate-800 dark:text-slate-200">{chiefSoftwareEngineer}</strong>
      </span>
      <span className="text-slate-500">|</span>
      <span style={{ color: 'var(--pres-text-muted)' }}>
        Cycle: <span className="text-slate-800 dark:text-slate-200">{reviewQuarter}</span>
      </span>
    </div>
    <div className="flex items-center gap-5 text-slate-400">
      <span className="flex items-center gap-1.5 text-slate-800 dark:text-sky-300">
        <BarChart3 size={14} /> Active Horizon Focus: H{activeHorizonNumber}
      </span>
      <span>Step {currentStep + 1} of {totalSteps}</span>
    </div>
  </div>
);
