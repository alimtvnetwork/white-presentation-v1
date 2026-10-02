import React from 'react';
import type { SecurityComplianceSlideData, ComplianceControlItem } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ComplianceCard } from './security/ComplianceCard';
import { ShieldCheck, Lock, FileCheck2 } from 'lucide-react';

const ControlRow: React.FC<{ control: ComplianceControlItem }> = ({ control }) => {
  const isAudited = Boolean(control.isAudited);
  const widthPercent = Math.min(100, Math.max(0, control.coveragePercent));
  return (
    <div className="p-3 rounded-xl plane-1-raised bg-slate-900/50 border border-slate-800/80">
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="font-ubuntu font-bold text-slate-200">{control.standard}</span>
        <div className="flex items-center gap-2">
          {isAudited && <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">Audited</span>}
          <span className="font-mono font-bold text-emerald-400">{control.coveragePercent}%</span>
        </div>
      </div>
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mt-1">
        <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style={{ width: `${widthPercent}%` }} />
      </div>
      <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-[10px] mt-1 block uppercase">{control.category}</span>
    </div>
  );
};

export const SecurityComplianceMatrixSlide: React.FC<{ slide: SecurityComplianceSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const certs = slide.certifications || [];
  const controls = slide.controls || [];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between">
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {slide.kicker || 'SECURITY & COMPLIANCE'}
          </span>
          {slide.complianceLevel && (
            <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              Posture: {slide.complianceLevel}
            </span>
          )}
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Enterprise Compliance & Security Assurance'}
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 my-auto items-start">
        <div className="col-span-5 space-y-4">
          <div className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
            <ShieldCheck size={14} /> Formal Certifications & Attestations
          </div>
          <div className="space-y-3">
            {certs.map((c) => (
              <ComplianceCard key={c.id} cert={c} />
            ))}
          </div>
        </div>

        <div className="col-span-7 space-y-4">
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
            <FileCheck2 size={14} /> Security Control Coverage Percentages
          </div>
          <div className="grid grid-cols-2 gap-3">
            {controls.map((ctrl) => (
              <ControlRow key={ctrl.id} control={ctrl} />
            ))}
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <Lock size={14} /> Zero-Trust Security Posture with Strict Audit Verification
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Enterprise Security & Compliance Matrix</span>
      </div>
    </div>
  );
};
