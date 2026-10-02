import React from 'react';
import type { SecurityComplianceSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ComplianceControlRow } from './security/ComplianceControlRow';
import { Shield } from 'lucide-react';

export const SecurityComplianceMatrixSlide: React.FC<{ slide: SecurityComplianceSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const certifications = slide.certifications || [];
  const controls = slide.controls || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {slide.kicker || 'INFORMATION SECURITY & AUDIT'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            Level: {slide.complianceLevel || 'Tier-1 Air-Gapped'}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Security & Compliance Framework Matrix'}
        </h1>
      </div>

      <div className="z-10 grid grid-cols-12 gap-8 my-auto items-stretch">
        <div className="col-span-5 flex flex-col gap-4">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
            Accredited Certifications
          </span>
          {certifications.map((cert, idx) => {
            const isPast = idx < activeStep;
            const isActive = idx === activeStep;
            const certStyle: React.CSSProperties = isActive
              ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
              : isPast
              ? { opacity: 0.75, transform: 'scale(1.0)' }
              : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };
            return (
              <div
                key={cert.id || idx}
                style={certStyle}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isActive ? 'bg-emerald-500/15 border-emerald-500 ring-2 ring-emerald-500/40' : 'bg-slate-900/40 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-ubuntu font-bold text-sm text-slate-100">{cert.name}</div>
                  <span className="font-mono text-[10px] text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded">
                    {cert.status}
                  </span>
                </div>
                <div className="font-mono text-xs text-slate-400 mt-1">{cert.issuingBody}</div>
              </div>
            );
          })}
        </div>

        <div className="col-span-7 flex flex-col gap-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
            Governance & Technical Controls
          </span>
          {controls.map((control, idx) => (
            <ComplianceControlRow
              key={control.id || idx}
              control={control}
              rowIndex={idx}
              activeStep={activeStep}
            />
          ))}
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <Shield size={14} /> Cryptographic Proof & Zero-Egress Storage Verified
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Focus Step {activeStep + 1}</span>
      </div>
    </div>
  );
};
