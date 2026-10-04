// lint-allow: file-size reason="EnterpriseDataCleanRoomAuditSlide flat sovereign confidential data clean room audit" max=420
import React from 'react';
import type {
  EnterpriseDataCleanRoomAuditSlideData,
  DataCleanRoomParticipantNode,
} from '../../../types/suite2028Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  ShieldCheck,
  Lock,
  Database,
  CheckCircle2,
  Cpu,
  KeyRound,
  FileCheck2,
  Layers,
  Sparkles,
  Server,
  Zap,
} from 'lucide-react';

const DEF_PARTICIPANTS: DataCleanRoomParticipantNode[] = [
  {
    id: 'part-hospital',
    organizationName: 'Mayo Medical Center Network',
    contributionRecordCount: 12400000,
    privacyBudgetEpsilonConsumed: 0.45,
    enclaveAttestationStatus: 'Hardware Attested',
    isDifferentialPrivacyEnforced: true,
    hasCryptographicAuditPassed: true,
  },
  {
    id: 'part-pharma',
    organizationName: 'BioResearch Global Therapeutics',
    contributionRecordCount: 8200000,
    privacyBudgetEpsilonConsumed: 0.52,
    enclaveAttestationStatus: 'Hardware Attested',
    isDifferentialPrivacyEnforced: true,
    hasCryptographicAuditPassed: true,
  },
  {
    id: 'part-genomics',
    organizationName: 'Alliance Genomics Foundation',
    contributionRecordCount: 4200000,
    privacyBudgetEpsilonConsumed: 0.23,
    enclaveAttestationStatus: 'Hardware Attested',
    isDifferentialPrivacyEnforced: true,
    hasCryptographicAuditPassed: true,
  },
];

export const EnterpriseDataCleanRoomAuditSlide: React.FC<{
  slide?: EnterpriseDataCleanRoomAuditSlideData;
  data?: EnterpriseDataCleanRoomAuditSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const participants = data?.participants?.length ? data.participants : DEF_PARTICIPANTS;
  const isEnclaveActive = data?.isConfidentialEnclaveActive ?? true;
  const hasZeroLeak = data?.hasZeroLeakProofVerified ?? true;
  const hasCompliance = data?.hasRegulatoryComplianceApproved ?? true;

  const totalRecords = data?.totalRecordsAnalyzedMillions ?? 24.8;
  const cumulativeEpsilon = data?.cumulativePrivacyBudgetEpsilon ?? 1.2;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Lock size={16} className="text-cyan-500" />
              {data?.kicker || 'CRYPTOGRAPHIC PRIVACY & FEDERATED DATA'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Database size={14} /> Room: {data?.cleanRoomIdentifier || 'Healthcare & Genomics Federated Consortium'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              Differential Privacy: ε={cumulativeEpsilon.toFixed(2)}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Enterprise Data Clean Room Audit'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Confidential computing enclave attestation, differential privacy budgets, and zero-knowledge leakage guarantees.'}
          </p>
        </div>

        {/* Executive Metric Badge Strip */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Total Analyzed</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {totalRecords}M Records
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Privacy Budget</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              ε = {cumulativeEpsilon.toFixed(2)} / 2.0 Max
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

      {/* Topline KPI Summary Strip (4 Cards) */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Encrypted Records</span>
            <span className="text-slate-900 dark:text-white font-bold text-[22px]">{totalRecords} Million</span>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Database size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Privacy Epsilon</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">ε = {cumulativeEpsilon.toFixed(2)}</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Lock size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Hardware Enclave</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[22px]">AMD SEV-SNP</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Cpu size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Data Leak Proof</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">0.00 Bytes Leak</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <FileCheck2 size={24} />
          </div>
        </div>
      </div>

      {/* Main Bento Grid: Participants & Enclave Proof */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Clean Room Consortium Participants */}
        <div className="col-span-8 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> Federated Consortium Participant Attestations
              </span>
              <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                {participants.length} Active Enclaves
              </span>
            </div>

            <div className="space-y-4 mt-4">
              {participants.map((part) => {
                const epsilonPercent = Math.min(100, Math.round((part.privacyBudgetEpsilonConsumed / 1.0) * 100));

                return (
                  <div
                    key={part.id}
                    className="p-4 rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:-translate-y-0.5 hover:border-[var(--pres-accent)] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-3">
                        <Server size={18} className="text-[var(--pres-accent)]" />
                        <span className="font-bold text-slate-900 dark:text-white text-[16px]">
                          {part.organizationName}
                        </span>
                        <span className="text-[14px] font-bold px-3 py-0.5 rounded bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
                          <Cpu size={14} /> {part.enclaveAttestationStatus}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          {(part.contributionRecordCount / 1000000).toFixed(1)}M Encrypted Records
                        </span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 text-[16px]">
                          ε = {part.privacyBudgetEpsilonConsumed.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400 mb-1.5">
                        <span>Differential Privacy Budget Consumption</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300">
                          {epsilonPercent}% of Allocated Slice
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-700"
                          style={{ width: `${epsilonPercent}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
                      <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                        <CheckCircle2 size={15} className="text-emerald-500" />
                        Differential Privacy: {part.isDifferentialPrivacyEnforced ? 'Active ε-Laplace Noise' : 'Bypass'}
                      </span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1.5">
                        <KeyRound size={15} /> Hardware Nonce Verified
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <Zap size={16} className="text-amber-600 dark:text-amber-400" />
              Hardware Key Exchange: Ephemeral ECDH X25519 with TPM 2.0 endorsement
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Non-repudiation Certified
            </span>
          </div>
        </div>

        {/* Right Bento: Cryptographic Enclave & Proof Guarantees */}
        <div className="col-span-4 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ShieldCheck size={16} className="text-cyan-500" /> Confidential Enclave Proof
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[14px] border border-emerald-500/30">
                Verified
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <h3 className="text-[20px] font-ubuntu font-bold text-slate-900 dark:text-white mb-1.5">
                Hardware Attestation Architecture
              </h3>
              <p className="font-poppins text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Raw source data never leaves isolated silicon enclaves. All joins and aggregate model weights are computed in zero-knowledge memory space.
              </p>

              <div className="space-y-3 font-mono text-[14px]">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Confidential Enclave</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 size={15} /> {isEnclaveActive ? 'AMD SEV-SNP Active' : 'Off'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Zero-Leak Proof</span>
                  <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                    <CheckCircle2 size={15} /> {hasZeroLeak ? 'Mathematically Proven' : 'Unproven'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Regulatory Compliance</span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                    <CheckCircle2 size={15} /> {hasCompliance ? 'HIPAA / GDPR Sealed' : 'Pending'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800 font-mono text-[14px] space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Raw Data Exposed:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">0.00 Bytes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Side-Channel Mitigation:</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">FIPS 140-3 Level 4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Audit Verification:</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">Cryptographically Proven</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={18} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Sovereign canvas: 1-step cryptographic audit. Zero participant data disclosure guaranteed by hardware mathematics.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Attestation Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <ShieldCheck size={18} /> Confidential Computing Enclave Validated | Zero Leakage Cryptographically Proved
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
            <Lock size={16} /> Suite 2028 Confidential Clean Room
          </span>
        </div>
      </div>
    </div>
  );
};
