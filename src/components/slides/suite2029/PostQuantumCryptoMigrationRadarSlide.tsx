// lint-allow: file-size reason="PostQuantumCryptoMigrationRadarSlide flat sovereign post-quantum migration radar" max=420
import React from 'react';
import type {
  PostQuantumCryptoMigrationRadarSlideData,
  CryptoMigrationAsset,
} from '../../../types/suite2029Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  Clock,
  CheckCircle2,
  Sparkles,
  Zap,
  Layers,
  Radio,
  KeyRound,
  FileCheck2,
  Cpu,
} from 'lucide-react';

const DEF_ASSETS: CryptoMigrationAsset[] = [
  {
    id: 'asset-tls-edge',
    assetCategory: 'TLS Endpoints',
    legacyAlgorithm: 'RSA-4096 / ECDHE',
    targetPqcAlgorithm: 'ML-KEM-768 (FIPS 203)',
    migrationProgressPercentage: 96,
    targetCompletionYear: 2027,
    isNistCompliant: true,
    hasAutomatedValidation: true,
  },
  {
    id: 'asset-vpn-mesh',
    assetCategory: 'VPN Gateways',
    legacyAlgorithm: 'ECDH P-384 / IKEv2',
    targetPqcAlgorithm: 'ML-KEM-1024 (FIPS 203)',
    migrationProgressPercentage: 88,
    targetCompletionYear: 2028,
    isNistCompliant: true,
    hasAutomatedValidation: true,
  },
  {
    id: 'asset-pki-root',
    assetCategory: 'PKI Certificates',
    legacyAlgorithm: 'RSA-4096 Root CA',
    targetPqcAlgorithm: 'ML-DSA-87 (FIPS 204)',
    migrationProgressPercentage: 92,
    targetCompletionYear: 2027,
    isNistCompliant: true,
    hasAutomatedValidation: true,
  },
  {
    id: 'asset-hardware-hsm',
    assetCategory: 'Hardware HSMs',
    legacyAlgorithm: 'Classical ECC P-256',
    targetPqcAlgorithm: 'SLH-DSA-256 (FIPS 205)',
    migrationProgressPercentage: 84,
    targetCompletionYear: 2028,
    isNistCompliant: true,
    hasAutomatedValidation: true,
  },
  {
    id: 'asset-mtls-mesh',
    assetCategory: 'TLS Endpoints',
    legacyAlgorithm: 'ECDSA P-256 SPIFFE',
    targetPqcAlgorithm: 'Hybrid X25519 + ML-KEM-768',
    migrationProgressPercentage: 98,
    targetCompletionYear: 2027,
    isNistCompliant: true,
    hasAutomatedValidation: true,
  },
  {
    id: 'asset-code-sign',
    assetCategory: 'PKI Certificates',
    legacyAlgorithm: 'RSA-4096 Authenticode',
    targetPqcAlgorithm: 'ML-DSA-65 (FIPS 204)',
    migrationProgressPercentage: 90,
    targetCompletionYear: 2027,
    isNistCompliant: true,
    hasAutomatedValidation: true,
  },
];

export const PostQuantumCryptoMigrationRadarSlide: React.FC<{
  slide?: PostQuantumCryptoMigrationRadarSlideData;
  data?: PostQuantumCryptoMigrationRadarSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const assets = data?.cryptoAssets?.length ? data.cryptoAssets : DEF_ASSETS;
  const totalAssets = data?.totalCryptographicAssetsCount ?? 42850;
  const readiness = data?.overallPqcReadinessPercentage ?? 91.3;
  const deadlineYear = data?.nistMandateDeadlineYear ?? 2030;

  const isMigrationOnTrack = data?.isMigrationOnTrack ?? true;
  const hasDiscovery = data?.hasAutomatedDiscovery ?? true;
  const hasHybrid = data?.hasHybridDualCertificates ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 flex items-center gap-2">
              <KeyRound size={16} className="text-violet-500" />
              {data?.kicker || 'QUANTUM RESILIENCE & CRYPTOGRAPHIC MIGRATION'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              Status: {isMigrationOnTrack ? 'Ahead of Schedule' : 'Evaluating'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Lock size={14} /> FIPS 203 / 204 / 205 Enforced
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Radio size={14} /> Automated Discovery: {hasDiscovery ? 'Live Continuous' : 'Static'}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Post-Quantum Cryptography Migration Radar'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              '6-pillar cryptographic modernization tracking 42,850+ enterprise assets migrating from RSA/ECC to NIST-standardized FIPS 203/204/205 algorithms.'}
          </p>
        </div>

        {/* Top-Right Executive Metric Badge */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">PQC Readiness</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
              {readiness.toFixed(1)}% Complete
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">NIST Deadline</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
              Year {deadlineYear}
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Topline KPI Strip (4 Cards) */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Cataloged Assets</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[22px]">{totalAssets.toLocaleString()}</span>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Lock size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">PQC Readiness Score</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">{readiness.toFixed(1)}%</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Dual Hybrid Mode</span>
            <span className="text-violet-600 dark:text-violet-400 font-bold text-[22px]">
              {hasHybrid ? '100% Deployed' : 'Evaluating'}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
            <Zap size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Mandate Horizon</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[22px]">3 Years In Advance</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Clock size={24} />
          </div>
        </div>
      </div>

      {/* Main 6-Pillar Bento Grid */}
      <div className="grid grid-cols-3 gap-5 z-10 my-auto items-stretch h-[540px]">
        {assets.map((asset) => {
          return (
            <div
              key={asset.id}
              className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-5 flex flex-col justify-between shadow-xl hover:-translate-y-0.5 hover:border-[var(--pres-accent)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <div className="flex items-center gap-2">
                    <KeyRound size={18} className="text-[var(--pres-accent)]" />
                    <span className="font-bold text-slate-900 dark:text-white text-[16px] leading-tight">
                      {asset.assetCategory}
                    </span>
                  </div>
                  <span className="text-[14px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                    {asset.isNistCompliant ? 'NIST Approved' : 'In Review'}
                  </span>
                </div>

                <div className="mt-4 flex flex-col gap-2 font-mono text-[14px]">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Legacy:</span>
                    <span className="text-rose-600 dark:text-rose-400 font-bold">{asset.legacyAlgorithm}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Target PQC:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">{asset.targetPqcAlgorithm}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-baseline justify-between font-mono mb-2">
                    <span className="text-slate-500 dark:text-slate-400 text-[14px] uppercase">Migration Progress</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">
                      {asset.migrationProgressPercentage}%
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-emerald-500 transition-all duration-700"
                      style={{ width: `${asset.migrationProgressPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
                <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  Target: Dec {asset.targetCompletionYear}
                </span>
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                  {asset.hasAutomatedValidation ? 'Automated Verified' : 'Manual Audit'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Quantum Resilience:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <ShieldCheck size={18} /> FIPS 203 / ML-KEM Key Exchange Active | Harvest-Now Decrypt-Later Defense Enforced
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
            <Lock size={16} /> Suite 2029 Quantum Radar
          </span>
        </div>
      </div>
    </div>
  );
};
