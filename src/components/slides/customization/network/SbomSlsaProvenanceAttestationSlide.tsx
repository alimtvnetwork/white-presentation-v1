import React from 'react';
import type { SbomSlsaProvenanceAttestationSlideData } from '../../../../types/customization/networkPlatformTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { SlsaAttestationCard } from './SlsaAttestationCard';
import { ShieldCheck, Lock, UserCheck, Package, FileCheck } from 'lucide-react';

export const SbomSlsaProvenanceAttestationSlide: React.FC<{
  slide: SbomSlsaProvenanceAttestationSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const steps = slide.attestationSteps || slide.stages || [];
  const currentStep = Math.min(activeStep, Math.max(0, steps.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30 flex items-center gap-1.5">
              <ShieldCheck size={13} /> {slide.kicker || 'SUPPLY CHAIN SECURITY'}
            </span>
            <span className="font-mono text-xs text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
              <UserCheck size={11} /> Alim Ul Karim (Chief Software Engineer)
            </span>
            <span className="font-mono text-xs text-cyan-800 dark:text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 flex items-center gap-1">
              <Lock size={11} /> {slide.provenanceStandard || 'SLSA v1.0 Level 4'}
            </span>
          </div>
          <h1
            style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
            className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title || 'SBOM & SLSA Level 4 Provenance Attestation'}</h1>
          <p
            style={{ color: 'var(--pres-text-muted)' }}
            className="font-poppins text-base max-w-4xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >{slide.subtitle || 'Cryptographically signed build provenance, hermetic toolchains, and admission gates'}</p>
        </div>

        <div className="plane-1-raised px-4 py-3 rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-slate-900/60 flex items-center gap-5 font-mono text-xs">
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Target Artifact</div>
            <div className="text-amber-900 dark:text-amber-300 font-bold text-xs flex items-center gap-1 truncate max-w-[190px]">
              <Package size={13} /> {slide.targetArtifactUri || 'edge-agent:v2.4.0'}
            </div>
          </div>
          <div className="w-px h-8 bg-slate-700/40" />
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Certificate Authority</div>
            <div className="text-emerald-400 font-bold text-xs truncate max-w-[150px]">{slide.certificateAuthority || 'Sigstore / Rekor'}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {steps.map((step, idx) => (
          <SlsaAttestationCard key={step.id || idx} step={step} index={idx} activeStep={currentStep} />
        ))}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="text-amber-900 dark:text-amber-300 font-bold flex items-center gap-1.5"><FileCheck size={14} /> Provenance:</span>
          <span>Commit: <strong className="text-emerald-400">{slide.hasSignedCommit ? 'Signed' : 'Unsigned'}</strong></span>
          <span>Build: <strong className="text-emerald-400">{slide.isHermeticBuild ? 'Hermetic' : 'Standard'}</strong></span>
          <span>Compliance: <strong className="text-cyan-400">{slide.isSlsaLevel4Compliant ? 'SLSA L4' : 'L2/L3'}</strong></span>
          <span>Admission: <strong className="text-emerald-400">{slide.hasAdmissionPassed ? 'Admitted' : 'Pending'}</strong></span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1 font-bold text-[11px]"><ShieldCheck size={13} /> Admission Passed</span>
          <span className="text-slate-400 text-xs">Step {currentStep + 1} of {Math.max(steps.length, 1)}</span>
        </div>
      </div>
    </div>
  );
};
