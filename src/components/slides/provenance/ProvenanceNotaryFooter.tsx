import React from 'react';
import { GitCommit, CheckCircle2, ShieldCheck, Key } from 'lucide-react';
import type { CiCdArtifactProvenanceSlideData } from '../../../types/sovereignOperationsArchetypes';

interface ProvenanceNotaryFooterProps {
  slide: CiCdArtifactProvenanceSlideData;
  activeStep: number;
}

export const ProvenanceNotaryFooter: React.FC<ProvenanceNotaryFooterProps> = ({
  slide,
  activeStep,
}) => {
  const stages = slide.provenanceStages || [];
  const currentStep = Math.min(activeStep, Math.max(0, stages.length - 1));
  const activeStage = stages[currentStep];
  const compliantCount = stages.filter((s) => s.isCompliant).length;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="plane-1-raised px-5 py-3 rounded-2xl flex items-center justify-between z-10 border font-mono text-xs"
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-blue-400 font-bold">
          <GitCommit size={14} /> Artifact Notary Transparency Log
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>|</span>
        <span style={{ color: 'var(--pres-text)' }} className="flex items-center gap-1">
          <Key size={12} className="text-blue-400 animate-pulse" />
          Active Enclave: <strong className="text-blue-300 font-bold">{activeStage?.stageName || 'Source Checkout'}</strong>
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>|</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Runner: <span className="text-slate-300">{activeStage?.buildRunnerId || 'github-hosted'}</span>
        </span>
      </div>

      <div className="flex items-center gap-5 text-slate-300">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle2 size={13} />
          <span>{compliantCount} of {stages.length} Stages Signed</span>
        </span>
        <span className="flex items-center gap-1.5 text-blue-400">
          <ShieldCheck size={13} />
          <span>Rekor Entry Confirmed</span>
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Enclave {currentStep + 1} / {Math.max(stages.length, 1)}
        </span>
      </div>
    </div>
  );
};
