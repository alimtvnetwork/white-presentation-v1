// lint-allow: file-size reason="CrossBorderDataResidencySlide flat sovereign data residency geofencing" max=120
import React from 'react';
import type { CrossBorderDataResidencySlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Globe, CheckCircle2, ShieldCheck, Lock, ShieldAlert, Key } from 'lucide-react';

const DEF_JURISDICTIONS = [
  { jurisdictionCode: 'EU-DE (Frankfurt)', datacenterLocation: 'AWS eu-central-1', dataRetentionDays: 90, encryptionStandard: 'AES-256-XTS + Local HSM', egressFenceStatus: 'HARDWARE GEOFENCED', isFenced: true, hasZeroCrossBorderLeak: true, isCompliant: true },
  { jurisdictionCode: 'CH-ZH (Zurich)', datacenterLocation: 'Equinix ZH4 Sovereign Enclave', dataRetentionDays: 365, encryptionStandard: 'Quantum-Resistant Kyber-1024', egressFenceStatus: 'HARDWARE GEOFENCED', isFenced: true, hasZeroCrossBorderLeak: true, isCompliant: true },
  { jurisdictionCode: 'US-VA (Virginia)', datacenterLocation: 'AWS us-east-1 (Isolated)', dataRetentionDays: 30, encryptionStandard: 'AES-256-GCM FedRAMP High', egressFenceStatus: 'HARDWARE GEOFENCED', isFenced: true, hasZeroCrossBorderLeak: true, isCompliant: true },
];

const DEF_AUDITS = [
  { auditFramework: 'BSI C5 German Sovereign Cloud Standard', lastInspectionDate: '2026-09-15', isAuditPassed: true },
  { auditFramework: 'Swiss FINMA Circular 2018/3 Cloud Outsourcing', lastInspectionDate: '2026-08-30', isAuditPassed: true },
];

export const CrossBorderDataResidencySlide: React.FC<{ slide?: CrossBorderDataResidencySlideData; data?: CrossBorderDataResidencySlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const jurisdictions = data?.jurisdictions?.length ? data.jurisdictions : DEF_JURISDICTIONS;
  const audits = data?.auditRecords?.length ? data.auditRecords : DEF_AUDITS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><Globe size={15} className="text-teal-500" />{data?.kicker || 'SOVEREIGN DATA RESIDENCY & PRIVACY'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data?.monitoredDataStoreCount || 48} Stores Monitored • 0 Unauthorized Egress</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Cross-Border Privacy: Cryptographic Geofencing & Local HSM'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Zero cross-border plain-text egress via localized dedicated HSM keys and automated eBPF network fence enforcement'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Compliance</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.globalComplianceFramework || 'GDPR Art 44-50'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Egress Leaks</span><span className="text-sm font-bold text-emerald-400">0 (Zero Incidents)</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Chief Software Engineer</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[530px] items-stretch">
        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-teal-400 flex items-center gap-2"><Globe size={16} /> JURISDICTION BOUNDARIES</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-teal-500/15 text-teal-300 border border-teal-500/30">Local Enclaves</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {jurisdictions.map((j, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center"><span className="text-slate-200 font-bold">{j.jurisdictionCode}</span><span className="text-[10px] text-emerald-400 font-bold">{j.egressFenceStatus}</span></div>
                <div className="text-[11px] text-slate-400 truncate">{j.datacenterLocation}</div>
                <div className="text-[10px] text-sky-300">Retention: {j.dataRetentionDays}d • {j.encryptionStandard}</div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><Key size={13} /> Local HSM Key Isolation Active</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-sky-400 flex items-center gap-2"><Lock size={16} /> CRYPTOGRAPHIC SHARDING</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Shamir Secret</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">KEY HIERARCHY</span>
              <div className="text-sky-300 font-bold text-xs font-mono">FIPS 140-3 Level 4 HSM</div>
              <div className="text-[11px] text-slate-400">Keys never leave local sovereign physical boundary. Cross-border queries utilize homomorphic blinded tokens only.</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">EGRESS FIREWALL RULE</span>
              <div className="text-emerald-400 font-bold text-sm">Default DENY All External Sockets</div>
              <div className="text-[10px] text-slate-400">eBPF kernel packet filter blocks unencrypted egress</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Hardware Geofence Strictly Enforced</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-2"><ShieldCheck size={16} /> REGULATORY AUDIT PASS</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Certified</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {audits.map((a, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 block">{a.auditFramework}</span>
                <div className="flex justify-between items-center text-slate-200 font-bold text-xs"><span>Inspected: {a.lastInspectionDate}</span><span className="text-emerald-400 font-bold">PASSED</span></div>
              </div>
            ))}
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">Continuous automated evidence streams demonstrate zero cross-border leakage to European Data Protection Board auditors.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Audit Rating:</span><strong className="font-bold">100% UNQUALIFIED OPINION</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Geofence Hardware Enforced</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Cryptographic Sharding: <strong className="text-slate-200">ACTIVE</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Egress Leakage: <strong className="text-emerald-400">ZERO TOLERANCE (0 DETECTED)</strong></span>
        </div>
        <div className="text-slate-400">Single Step Overview Archetype</div>
      </div>
    </div>
  );
};
