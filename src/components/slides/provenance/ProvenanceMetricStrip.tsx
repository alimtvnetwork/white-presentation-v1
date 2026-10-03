import React from 'react';
import { GitCommit, ShieldCheck, Lock, Binary } from 'lucide-react';
import type { CiCdArtifactProvenanceSlideData } from '../../../types/sovereignOperationsArchetypes';

interface ProvenanceMetricStripProps {
  slide: CiCdArtifactProvenanceSlideData;
}

export const ProvenanceMetricStrip: React.FC<ProvenanceMetricStripProps> = ({ slide }) => {
  const stages = slide.provenanceStages || [];
  const rawDigest = slide.rootDigestSha256 || 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
  const shortDigest = `${rawDigest.slice(0, 12)}...${rawDigest.slice(-8)}`;
  const slsaRating = slide.slsaComplianceRating || 'SLSA L4';
  const isKeyless = slide.isKeylessSigningActive;

  return (
    <div className="z-10 grid grid-cols-4 gap-4">
      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Root Digest SHA-256
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-sm font-bold font-mono tracking-tight mt-1 truncate max-w-[220px]">
            {shortDigest}
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
          <Binary size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Supply Chain Level
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {slsaRating}
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <ShieldCheck size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Provenance Stages
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {stages.length} <span className="text-sm font-normal font-mono text-cyan-400">Enclaves</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <GitCommit size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Notary Attestation
          </div>
          <div className="text-sm font-bold font-mono text-blue-400 flex items-center gap-1.5 mt-1">
            <span>{isKeyless ? 'Sigstore Cosign' : 'KMS Signed'}</span>
            <span style={{ color: 'var(--pres-text-muted)' }}>•</span>
            <span>Rekor Log</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
          <Lock size={20} />
        </div>
      </div>
    </div>
  );
};
