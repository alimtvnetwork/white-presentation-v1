// lint-allow: file-size reason="GlobalDataJurisdictionBoundarySlide flat sovereign multi-region data residency" max=160
import React from 'react';
import type { GlobalDataJurisdictionBoundarySlideData } from '../../../types/suite2026Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Globe, ShieldCheck, CheckCircle2, Lock, Cpu, Server } from 'lucide-react';

const DEF_ENCLAVES = [
  { id: 'e1', enclaveName: 'Americas Sovereign Enclave', geographicRegion: 'North America (US-East/Central)', jurisdictionLaw: 'FedRAMP High & US CLOUD Act Isolated', dataClassification: 'Strict National & PII', latencyTargetMs: 1.2, isCompliant: true, hasActiveBoundary: true, hasHardwareIsolation: true },
  { id: 'e2', enclaveName: 'EU/EEA Digital Sovereignty', geographicRegion: 'Frankfurt & Dublin Hubs', jurisdictionLaw: 'GDPR Art. 44 & EU Data Act Compliant', dataClassification: 'Zero Trans-Atlantic Export', latencyTargetMs: 1.8, isCompliant: true, hasActiveBoundary: true, hasHardwareIsolation: true },
  { id: 'e3', enclaveName: 'APAC Financial Perimeters', geographicRegion: 'Singapore & Tokyo Core', jurisdictionLaw: 'MAS TRM & APPI Japan Mandate', dataClassification: 'Cryptographic Sovereign Vault', latencyTargetMs: 2.4, isCompliant: true, hasActiveBoundary: true, hasHardwareIsolation: true },
  { id: 'e4', enclaveName: 'Sovereign Gulf Cloud Hub', geographicRegion: 'UAE & Saudi Sovereign DC', jurisdictionLaw: 'National Cybersecurity Authority (NCA)', dataClassification: 'In-Country HSM Dedicated', latencyTargetMs: 3.1, isCompliant: true, hasActiveBoundary: true, hasHardwareIsolation: true },
];

export const GlobalDataJurisdictionBoundarySlide: React.FC<{ slide?: GlobalDataJurisdictionBoundarySlideData; data?: GlobalDataJurisdictionBoundarySlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const enclaves = data?.enclaves?.length ? data.enclaves : DEF_ENCLAVES;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Globe size={16} className="text-emerald-500" /> {data?.kicker || 'GLOBAL DATA SOVEREIGNTY & CRYPTOGRAPHIC BOUNDARIES'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-violet-500/15 text-violet-800 dark:text-violet-300 border border-violet-500/30 flex items-center gap-2">
              <ShieldCheck size={14} /> Framework: {data?.complianceFramework || 'ISO 27001 / FedRAMP / GDPR'}
            </span>
          </div>
          <h1 className="text-[48px] font-ubuntu font-bold tracking-tight mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Global Data Jurisdiction Boundaries: Zero-Trust Enclaves'}
          </h1>
          <p className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Strict physical and cryptographic data boundaries guaranteeing local residency without cross-border telemetry bleed.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div><span className="text-slate-500 dark:text-slate-400 block uppercase">Global Coverage</span><span className="text-emerald-600 dark:text-emerald-400 font-bold">{data?.globalCoveragePercent || 100}% Certified</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span className="text-slate-500 dark:text-slate-400 block uppercase">Chief Software Engineer</span><span className="text-slate-800 dark:text-slate-200 font-bold">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 z-10 my-auto h-[500px]">
        {enclaves.map((enc) => (
          <div key={enc.id} className="plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex flex-col justify-between hover:border-[var(--pres-accent)] transition-all shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  <Server size={20} />
                </div>
                <div>
                  <h3 className="font-ubuntu text-xl font-bold text-slate-900 dark:text-slate-100">{enc.enclaveName}</h3>
                  <span className="font-mono text-[14px] text-slate-500 dark:text-slate-400">{enc.geographicRegion}</span>
                </div>
              </div>
              <span className="font-mono text-[14px] px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1 font-semibold">
                <CheckCircle2 size={13} /> {enc.latencyTargetMs}ms SLA
              </span>
            </div>

            <div className="space-y-3 my-4 font-mono text-[14px]">
              <div className="p-3 rounded-xl bg-slate-100/60 dark:bg-black/20 border border-slate-200 dark:border-slate-800/60 flex justify-between items-center">
                <span className="text-[14px] uppercase text-slate-500 dark:text-slate-400">Jurisdiction Governance:</span>
                <span className="text-slate-800 dark:text-slate-200 font-bold text-[14px]">{enc.jurisdictionLaw}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-100/60 dark:bg-black/20 border border-slate-200 dark:border-slate-800/60 flex justify-between items-center">
                <span className="text-[14px] uppercase text-slate-500 dark:text-slate-400">Data Classification:</span>
                <span className="text-violet-700 dark:text-violet-400 font-bold text-[14px]">{enc.dataClassification}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-black/30 border border-slate-200 dark:border-slate-800/60 flex items-center gap-2 text-[14px]">
                  <Lock size={14} className="text-emerald-600 dark:text-emerald-400" />
                  <span className="text-slate-700 dark:text-slate-300">Dedicated HSM Key Vault</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-black/30 border border-slate-200 dark:border-slate-800/60 flex items-center gap-2 text-[14px]">
                  <Cpu size={14} className="text-sky-600 dark:text-sky-400" />
                  <span className="text-slate-700 dark:text-slate-300">Hardware Enclave Isolation</span>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono text-[14px] text-emerald-700 dark:text-emerald-400 flex items-center justify-between">
              <span>Boundary Status: ZERO DATA EXFILTRATION GUARANTEE</span>
              <span className="font-bold">VERIFIED</span>
            </div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase">Perimeter Verification:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% Cryptographic Isolation Enforced Across 4 Continents</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400">Zero Trust Architecture</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1"><ShieldCheck size={16} /> Certified</span>
        </div>
      </div>
    </div>
  );
};
