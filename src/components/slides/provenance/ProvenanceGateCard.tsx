import React from 'react';
import { CheckCircle2, ShieldCheck, GitCommit, FileCheck } from 'lucide-react';
import type { ArtifactProvenanceStageItem } from '../../../types/sovereignOperationsArchetypes';

interface ProvenanceGateCardProps {
  stage: ArtifactProvenanceStageItem;
  index: number;
  activeStep: number;
}

export const ProvenanceGateCard: React.FC<ProvenanceGateCardProps> = ({ stage, index, activeStep }) => {
  const isCompleted = index < activeStep;
  const isActive = index === activeStep;
  const phaseClass = isActive
    ? 'step-phase-active'
    : isCompleted
      ? 'step-phase-past'
      : 'step-phase-future';

  const attestations = stage.attestations || [];

  return (
    <div
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised p-5 rounded-2xl border flex flex-col justify-between h-[420px] transition-all duration-300 ${phaseClass}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span
            style={{
              backgroundColor: isActive ? 'var(--pres-accent)' : 'rgba(59, 130, 246, 0.15)',
              color: isActive ? 'var(--pres-accent-text, #ffffff)' : '#60a5fa',
            }}
            className="px-2.5 py-1 rounded-md font-mono text-xs font-bold"
          >
            STAGE {stage.stageIndex || index + 1}
          </span>
          <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            {stage.slsaLevel}
          </span>
        </div>

        <h3 style={{ color: 'var(--pres-text)' }} className="text-xl font-bold font-ubuntu tracking-tight mb-2">
          {stage.stageName}
        </h3>

        <div className="flex items-center gap-1.5 font-mono text-xs text-blue-300 mb-3">
          <GitCommit size={12} className="text-blue-400" />
          <span className="truncate max-w-[210px]">{stage.buildRunnerId}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-lg bg-black/20 border border-white/5 font-mono text-xs">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block">DURATION</span>
            <span className="text-cyan-300 font-bold">{stage.executionDurationSeconds}s</span>
          </div>
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block">REPRODUCIBILITY</span>
            <span className="text-emerald-300 font-bold">
              {stage.isReproducibleBuild ? 'Bit-for-Bit' : 'Hermetic'}
            </span>
          </div>
        </div>

        <div className="space-y-1.5">
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider font-mono">
            Signed Attestations ({attestations.length})
          </div>
          {attestations.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center justify-between text-xs font-mono p-1.5 rounded bg-white/5">
              <span className="truncate max-w-[150px]" style={{ color: 'var(--pres-text)' }}>
                {item.attestationType}
              </span>
              <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                <CheckCircle2 size={11} /> {item.digestSha256.slice(0, 8)}...
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px]">
        <span style={{ color: 'var(--pres-text-muted)' }} className="flex items-center gap-1">
          <FileCheck size={12} className="text-sky-400" />
          {stage.hasImmutableDigest ? 'Immutable Digest' : 'Digest Pinned'}
        </span>
        <span className="text-blue-400 font-bold flex items-center gap-1">
          <ShieldCheck size={12} />
          {stage.isCompliant ? 'SLSA SIGNED' : 'PENDING'}
        </span>
      </div>
    </div>
  );
};
