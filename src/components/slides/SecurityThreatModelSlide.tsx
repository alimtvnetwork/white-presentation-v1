import React from 'react';
import type { SecurityThreatModelSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { PerimeterLayerRow } from './threat/PerimeterLayerRow';
import { Shield, ShieldAlert, CheckCircle2, Lock, Cpu } from 'lucide-react';

export const SecurityThreatModelSlide: React.FC<{ slide: SecurityThreatModelSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const threatVectors = slide.threatVectors || [];
  const controls = slide.defensiveControls || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
            <Shield size={12} /> {slide.kicker || 'SECURITY ARCHITECTURE'}
          </span>
          <span className="font-mono text-xs text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
            STRIDE Threat Taxonomy | {slide.trustBoundaryCount ?? 5} Trust Boundaries
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >{slide.title || 'Zero-Trust Attack Surface & Defense Perimeter'}</h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Automated cryptographic mitigations across all trust boundaries.'}
        </p>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl border border-slate-800 bg-slate-900/60 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-4 text-slate-300">
          <span className="flex items-center gap-1.5"><Lock size={14} className="text-amber-600 dark:text-amber-400" /> SOC2: <strong className="text-emerald-400">{slide.isSoc2Compliant ? 'Compliant' : 'Auditing'}</strong></span>
          <span className="flex items-center gap-1.5"><Cpu size={14} className="text-cyan-400" /> Enclaves: <strong className="text-cyan-300">{slide.hasHardwareIsolation ? 'Active SGX' : 'Standard'}</strong></span>
        </div>
        <span className="flex items-center gap-1 text-emerald-400 font-bold"><CheckCircle2 size={14} /> Zero Critical Unresolved</span>
      </div>

      <div className="z-10 grid grid-cols-12 gap-8 my-auto items-stretch h-[500px]">
        <div className="col-span-7 plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 font-mono text-xs">
            <span className="flex items-center gap-2 font-bold text-slate-300"><ShieldAlert size={14} className="text-rose-400" /> STRIDE Attack Surface</span>
            <span className="text-slate-400">{threatVectors.length} Vectors Audited</span>
          </div>
          <div className="space-y-2.5 overflow-y-auto flex-1 pr-1 font-mono text-xs">
            {threatVectors.map((tv) => (
              <div key={tv.id} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">{tv.category}</span>
                    <span className="font-bold text-slate-100">{tv.vectorName}</span>
                  </div>
                  <span className={`text-xs font-bold px-1.5 py-0.5 rounded uppercase ${tv.riskSeverity === 'critical' ? 'bg-rose-500/20 text-rose-300' : 'text-amber-900 bg-amber-100 dark:text-amber-300 dark:bg-amber-500/20'}`}>{tv.riskSeverity}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/60 pt-1">
                  <span>Mitigation: {tv.mitigationStrategy}</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-bold"><CheckCircle2 size={11} /> Mitigated</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-5 plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 font-mono text-xs">
            <span className="flex items-center gap-2 font-bold text-slate-300"><Lock size={14} className="text-emerald-400" /> Defensive Perimeter Controls</span>
            <span className="text-emerald-400 font-bold">{controls.length} Layers Active</span>
          </div>
          <div className="space-y-2.5 overflow-y-auto flex-1 pr-1">
            {controls.map((control) => (
              <PerimeterLayerRow key={control.id} control={control} />
            ))}
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-rose-400 font-bold"><Shield size={14} /> FIPS 140-3 Hardware Security Modules Active | Mutual TLS Perimeter</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Status: Active Defense</span>
      </div>
    </div>
  );
};
