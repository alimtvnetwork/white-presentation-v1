import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';

interface FraudScoringStripProps {
  fraudEngine: {
    riskScoreZeroToOneHundred: number;
    inferenceDurationMs: number;
    modelVersion: string;
    isApprovedByModel: boolean;
    hasBiometricAuth: boolean;
  };
  activeStageName: string;
  currentStep: number;
  totalStages: number;
}

export const FraudScoringStrip: React.FC<FraudScoringStripProps> = ({
  fraudEngine,
  activeStageName,
  currentStep,
  totalStages,
}) => (
  <div className="plane-1-raised p-3.5 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
    <div className="flex items-center gap-4">
      <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold">
        <ShieldCheck size={16} className="text-emerald-500" />
        AI Fraud Gate: Risk Score {fraudEngine.riskScoreZeroToOneHundred} / 100 (APPROVED)
      </span>
      <span className="text-slate-500">|</span>
      <span style={{ color: 'var(--pres-text-muted)' }} className="flex items-center gap-1.5">
        <Cpu size={14} className="text-violet-400" /> Model: {fraudEngine.modelVersion} ({fraudEngine.inferenceDurationMs}ms inference)
      </span>
      <span className="text-slate-500">|</span>
      <span style={{ color: 'var(--pres-text-muted)' }}>
        Chief Software Engineer: <strong className="text-slate-800 dark:text-slate-200">Alim Ul Karim</strong>
      </span>
    </div>

    <div className="flex items-center gap-4 text-slate-400">
      <span>Active Pipeline Stage: {activeStageName}</span>
      <span>Step {currentStep + 1} of {totalStages}</span>
    </div>
  </div>
);
