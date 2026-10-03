import React from 'react';
import { GitCommit, UserCheck, ShieldCheck, Key, Terminal } from 'lucide-react';
import type { CiCdArtifactProvenanceSlideData } from '../../../types/sovereignOperationsArchetypes';

interface ProvenanceHeaderProps {
  slide: CiCdArtifactProvenanceSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const ProvenanceHeader: React.FC<ProvenanceHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => {
  const signerName = slide.attestationSigner || 'Alim Ul Karim';
  const signerRole = slide.signerTitle || 'Chief Software Engineer';
  const isKeyless = slide.isKeylessSigningActive;

  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center gap-1.5">
            <GitCommit size={13} /> {slide.kicker || 'CI/CD ARTIFACT PROVENANCE'}
          </span>
          <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 flex items-center gap-1">
            <Terminal size={11} /> {slide.artifactName || 'release/core-runtime:v2.4'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
            <ShieldCheck size={11} /> {slide.slsaComplianceRating || 'SLSA Level 4'}
          </span>
          <span className="font-mono text-xs text-sky-300 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20 flex items-center gap-1">
            <UserCheck size={11} /> {signerName} ({signerRole})
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
        >
          {slide.title || 'Cryptographic Supply Chain & SLSA L4 Attestation'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Hermetic Build Enclaves, Rekor Transparency Notarization & Ephemeral OIDC Keyless Signatures'}
        </p>
      </div>

      <div className="flex items-center gap-3 font-mono">
        <div
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="plane-1-raised px-4 py-2.5 rounded-xl border flex items-center gap-3"
        >
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Key size={18} />
          </div>
          <div>
            <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider">
              Signing Infrastructure
            </div>
            <div className="text-sm font-bold text-blue-400">
              {isKeyless ? 'KEYLESS SIGSTORE (OIDC)' : 'HARDWARE HSM'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
