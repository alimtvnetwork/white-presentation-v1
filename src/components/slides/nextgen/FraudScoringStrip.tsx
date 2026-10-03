import React from 'react';
import { Cpu, Fingerprint } from 'lucide-react';

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
}) => {
  return (
    <div className="plane-1-raised p-3.5 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold">
          <Cpu size={15} className="text-emerald-500" />
          ML Fraud Score: {fraudEngine.riskScoreZeroToOneHundred} / 100 ({fraudEngine.modelVersion})
        </span>
        <span className="text-slate-500">|</span>
        <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
          <Fingerprint size={14} className="text-violet-400" />
          Biometric FIDO2: {fraudEngine.hasBiometricAuth ? 'CONFIRMED' : 'BYPASS'}
        </span>
        <span className="text-slate-500">|</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Inference: <strong className="text-slate-800 dark:text-slate-200">{fraudEngine.inferenceDurationMs} ms</strong>
        </span>
      </div>

      <div className="flex items-center gap-4 text-slate-400">
        <span>Active Stage: {activeStageName}</span>
        <span>Step {currentStep + 1} of {totalStages}</span>
      </div>
    </div>
  );
};
