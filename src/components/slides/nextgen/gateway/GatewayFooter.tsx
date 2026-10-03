import React from 'react';
import { Network } from 'lucide-react';

interface GatewayFooterProps {
  currentPhaseTitle: string;
  currentStep: number;
  totalSteps: number;
}

export const GatewayFooter: React.FC<GatewayFooterProps> = ({
  currentPhaseTitle,
  currentStep,
  totalSteps,
}) => (
  <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
    <div className="flex items-center gap-3">
      <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold">
        <Network size={15} className="text-emerald-500" />
        Token Bucket Rate Limiting Architecture Operational
      </span>
      <span className="text-slate-500">|</span>
      <span style={{ color: 'var(--pres-text-muted)' }}>
        Backpressure: <strong className="text-slate-800 dark:text-slate-200">HTTP 429 Retry-After Headers Active</strong>
      </span>
      <span className="text-slate-500">|</span>
      <span style={{ color: 'var(--pres-text-muted)' }}>
        Chief Software Engineer: <strong className="text-slate-800 dark:text-slate-200">Alim Ul Karim</strong>
      </span>
    </div>

    <div className="flex items-center gap-4 text-slate-400">
      <span>Active View: {currentPhaseTitle}</span>
      <span>Step {currentStep + 1} of {totalSteps}</span>
    </div>
  </div>
);
