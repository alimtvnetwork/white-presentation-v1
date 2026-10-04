// lint-allow: file-size reason="PostQuantumPkiCertificateHierarchyRadarSlide flat sovereign post-quantum PKI certificate radar" max=420
import React from 'react';
import type {
  PostQuantumPkiCertificateHierarchyRadarSlideData,
  CertificateTierNode,
} from '../../../types/suite2030Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Shield,
  Key,
  Lock,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';

const DEF_TIERS: CertificateTierNode[] = [
  {
    id: 'ca-01',
    authorityName: 'Global Sovereign Root CA G1',
    hierarchyTier: 'Tier 0 Root',
    signatureAlgorithm: 'ML-DSA-87 / Dilithium-5 + RSA-4096',
    keyLengthBits: 4096,
    quantumExpirationMonths: 180,
    isPqcMigrated: true,
    hasHybridDualSignature: true,
  },
  {
    id: 'ca-02',
    authorityName: 'Enterprise Issuing Intermediate CA',
    hierarchyTier: 'Tier 1 Intermediate',
    signatureAlgorithm: 'ML-DSA-65 / Dilithium-3 + ECDSA-P384',
    keyLengthBits: 384,
    quantumExpirationMonths: 60,
    isPqcMigrated: true,
    hasHybridDualSignature: true,
  },
  {
    id: 'ca-03',
    authorityName: 'Edge Service Mesh mTLS CA',
    hierarchyTier: 'Tier 2 End-Entity',
    signatureAlgorithm: 'ML-KEM-768 / Kyber-768 Hybrid',
    keyLengthBits: 768,
    quantumExpirationMonths: 12,
    isPqcMigrated: true,
    hasHybridDualSignature: true,
  },
];

export const PostQuantumPkiCertificateHierarchyRadarSlide: React.FC<{
  slide?: PostQuantumPkiCertificateHierarchyRadarSlideData;
  data?: PostQuantumPkiCertificateHierarchyRadarSlideData;
  activeStep?: number;
}> = ({ slide, data: propData }) => {
  const data = slide || propData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const tiers = data?.caTiers?.length ? data.caTiers : DEF_TIERS;
  const migrationPct = data?.overallPqcMigrationPercentage ?? 88.4;
  const certsCount = data?.totalCertificatesMonitoredThousands ?? 450.0;
  const radarId = data?.radarIdentifier || 'PQC-PKI-RADAR-V3';
  const hasGlow = data?.hasTelemetryGlow ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[56px_76px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[clamp(0.875rem,1.2vw,1.0rem)] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-2">
              <Shield size={16} className="text-cyan-600 dark:text-cyan-400" />
              {data?.kicker || 'POST-QUANTUM CRYPTOGRAPHY & PKI GOVERNANCE'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Key size={14} /> Radar: {radarId}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400" />
              Dual-Sig: ENFORCED
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30 flex items-center gap-2">
              <Lock size={14} className="text-indigo-600 dark:text-indigo-400" />
              NIST FIPS: COMPLIANT
            </span>
          </div>

          <h1
            className="text-[clamp(2.0rem,2.8vw,2.75rem)] font-ubuntu font-bold tracking-tight mb-2 leading-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Post-Quantum PKI Certificate Hierarchy Radar'}
          </h1>
          <p
            className="font-poppins text-[clamp(1.0rem,1.4vw,1.125rem)] text-slate-700 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Enterprise-wide cryptographic agility tracking NIST ML-KEM and ML-DSA transition progress.'}
          </p>
        </div>

        {/* Telemetry Hero Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] flex items-center gap-6 font-mono">
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">PQC Migration</span>
            <span className="text-[clamp(2.75rem,5.0vw,4.5rem)] font-bold leading-none text-cyan-700 dark:text-cyan-400">
              {migrationPct.toFixed(1)}%
            </span>
          </div>
          <div className="w-[1px] h-12 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Monitored Certs</span>
            <span className="text-indigo-700 dark:text-indigo-400 font-bold text-[24px]">
              {certsCount.toFixed(0)}k Active
            </span>
            <span className="block text-[14px] text-slate-500 dark:text-slate-400">
              Horizon: 2029 Target
            </span>
          </div>
          <div className="w-[1px] h-12 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Lead Architect</span>
            <span className="text-slate-900 dark:text-slate-100 font-bold text-[16px] block">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
            <span className="text-[14px] text-[var(--pres-accent)] font-semibold">
              {data?.leadRole || 'Chief Software Engineer'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: CA Certificate Hierarchy Tiers */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Layers size={18} className="text-[var(--pres-accent)]" /> Certificate Authority Hierarchy & Hybrid Dual-Signatures
              </span>
              <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 font-bold border border-cyan-500/30">
                All 3 Tiers Protected
              </span>
            </div>

            <div className="mt-4 space-y-3.5">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg)]/60 font-mono"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded text-[14px] font-bold bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30">
                        {tier.hierarchyTier}
                      </span>
                      <span className="font-bold text-[16px] text-slate-900 dark:text-slate-100">{tier.authorityName}</span>
                    </div>
                    <span className="px-3 py-0.5 rounded-full text-[14px] font-bold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 size={13} /> DUAL-SIG
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-3 text-[14px] pt-2 border-t border-[var(--pres-border)]">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block">Signature Suite</span>
                      <span className="font-bold text-slate-900 dark:text-slate-100">{tier.signatureAlgorithm}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block">Key Length</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{tier.keyLengthBits} bits</span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block">Quantum Lifetime</span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400">{tier.quantumExpirationMonths} Months</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between text-[14px] font-mono text-slate-600 dark:text-slate-400">
            <span>Root CA Algorithm: ML-DSA-87 (FIPS 204 Standard)</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Zero Unencrypted RSA-2048</span>
          </div>
        </div>

        {/* Right Bento: Cryptographic Agility & NIST Standards */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Cpu size={18} className="text-cyan-500" /> NIST PQC Standard Implementation
              </span>
              <span className="text-[14px] font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                NIST AA READY
              </span>
            </div>

            <div className="mt-4 space-y-3 font-mono text-[14px]">
              <div className="p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg)]/60">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-900 dark:text-slate-100">NIST FIPS 203: ML-KEM (Kyber)</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">100% Deployed</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[14px]">
                  Lattice-based key encapsulation for edge mTLS sessions and internal service meshes.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg)]/60">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-900 dark:text-slate-100">NIST FIPS 204: ML-DSA (Dilithium)</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold">92.4% Migrated</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[14px]">
                  Primary digital signature scheme for Root CAs and cross-organization intermediate anchors.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg)]/60">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-900 dark:text-slate-100">NIST FIPS 205: SLH-DSA (SPHINCS+)</span>
                  <span className="text-indigo-700 dark:text-indigo-400 font-bold">Standby Ready</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[14px]">
                  Stateless hash-based signature fallback guaranteeing independence from lattice assumptions.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-900 dark:text-indigo-200 font-mono text-[14px] flex items-center gap-2">
            <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
            <span>Cryptographic agility engine: Dynamic cipher renegotiation with sub-millisecond overhead.</span>
          </div>
        </div>
      </div>

      {/* Plane 2 Telemetry Footer */}
      <div className={`plane-1-raised z-10 px-6 py-3.5 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] flex items-center justify-between font-mono text-[14px] text-slate-700 dark:text-slate-300 shadow-md ${hasGlow ? 'shadow-cyan-500/10' : ''}`}>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            PKI STATUS: QUANTUM-RESISTANT ACTIVE
          </span>
          <span>Quantum Threat Horizon: <strong className="text-indigo-700 dark:text-indigo-400">2029 NIST Threshold</strong></span>
          <span>Zero Legacy RSA at Root: <strong className="text-emerald-700 dark:text-emerald-400">VERIFIED</strong></span>
        </div>
        <div className="flex items-center gap-6">
          <span>Lead Architect: <strong>{data?.leadArchitect || 'Alim Ul Karim'}</strong>, <span className="text-[var(--pres-accent)]">{data?.leadRole || 'Chief Software Engineer'}</span></span>
          <span className="text-slate-500 dark:text-slate-400">16:9 4K Precision DOM Standard</span>
        </div>
      </div>
    </div>
  );
};

export default PostQuantumPkiCertificateHierarchyRadarSlide;
