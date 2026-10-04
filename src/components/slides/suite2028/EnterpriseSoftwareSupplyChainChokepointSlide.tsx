// lint-allow: file-size reason="EnterpriseSoftwareSupplyChainChokepointSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  EnterpriseSoftwareSupplyChainChokepointSlideData,
  SupplyChainSecurityStage,
  SupplyChainArtifactNode,
} from '../../../types/suite2028Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Package,
  Lock,
  ShieldCheck,
  Layers,
  CheckCircle2,
  FileCheck,
  Activity,
  Terminal,
  Key,
  Cpu,
  Sparkles,
} from 'lucide-react';

const DEF_STAGES: SupplyChainSecurityStage[] = [
  {
    stepIndex: 0,
    stageName: 'Upstream Dependency Checksum Lock & Integrity Pinning',
    stageSubtitle: 'Validating SHA-256 tree hashes against tamper-proof transparency registries',
    enforcedPolicyCount: 48,
    gatedArtifactsCount: 28400,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Hermetic Networkless Build & Ephemeral Sandboxing',
    stageSubtitle: 'Compiling source code in fully disconnected containers with zero outbound network access',
    enforcedPolicyCount: 64,
    gatedArtifactsCount: 28400,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'CycloneDX SBOM Generation & in-toto Cryptographic Attestation',
    stageSubtitle: 'Binding binary digests to exact Git commit SHAs and compiler toolchains',
    enforcedPolicyCount: 92,
    gatedArtifactsCount: 28400,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Sigstore Keyless Signature & Kubernetes Admission Webhook',
    stageSubtitle: 'Enforcing cryptographically signed container deployment rejecting unsigned payloads',
    enforcedPolicyCount: 110,
    gatedArtifactsCount: 28400,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: SupplyChainArtifactNode[] = [
  {
    id: 'art-auth',
    artifactName: 'auth-service-v2.1.0.tar.gz',
    slsaComplianceLevel: 'SLSA-4',
    digestSha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    vulnerabilitiesDetectedCount: 0,
    isCosignSigned: true,
    hasProvenanceAttestation: true,
  },
  {
    id: 'art-payments',
    artifactName: 'payments-settlement-v4.0.0.tar.gz',
    slsaComplianceLevel: 'SLSA-4',
    digestSha256: 'ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb',
    vulnerabilitiesDetectedCount: 0,
    isCosignSigned: true,
    hasProvenanceAttestation: true,
  },
  {
    id: 'art-kernel',
    artifactName: 'ingress-kernel-v1.8.4.tar.gz',
    slsaComplianceLevel: 'SLSA-4',
    digestSha256: '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
    vulnerabilitiesDetectedCount: 0,
    isCosignSigned: true,
    hasProvenanceAttestation: true,
  },
];

export const EnterpriseSoftwareSupplyChainChokepointSlide: React.FC<{
  slide?: EnterpriseSoftwareSupplyChainChokepointSlideData;
  data?: EnterpriseSoftwareSupplyChainChokepointSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.supplyChainStages?.length ? data.supplyChainStages : DEF_STAGES;
  const nodes = data?.artifacts?.length ? data.artifacts : DEF_NODES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const hasHermetic = data?.hasHermeticBuildEnvironment ?? true;
  const hasAttestation = data?.hasCryptographicAttestation ?? true;
  const hasWebhook = data?.hasAdmissionWebhookEnforced ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Package size={16} className="text-cyan-500" />
              {data?.kicker || 'SOFTWARE SUPPLY CHAIN SECURITY'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Lock size={14} /> Pipeline: {data?.supplyChainPipeline || 'SLSA-4 Zero-Trust Build Pipeline'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-500" />
              Secured: {(data?.artifactsSecuredCount ?? 28400).toLocaleString()} Artifacts
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-indigo-500" />
              Standard: {data?.slsaLevelAchieved || 'SLSA Level 4'}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Enterprise Software Supply Chain Chokepoint'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'SLSA Level 4 hermetic compilation, CycloneDX SBOM analysis, and keyless Sigstore Kubernetes admission.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Policies Gated</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.enforcedPolicyCount} Rules
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Artifacts Gated</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.gatedArtifactsCount.toLocaleString()}
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

      {/* Kinetic 4-Step Nav Rail */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;

          return (
            <button
              key={st.stepIndex}
              onClick={() => jumpToStep(idx)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${
                isActive
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold animate-kinetic-step-reveal'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-75'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 blur-[1.25px] text-slate-500 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[14px] ${
                    isActive
                      ? 'bg-[var(--pres-accent)] text-white'
                      : isCompleted
                      ? 'bg-emerald-500 text-white dark:text-slate-900'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {isCompleted ? '✓' : idx + 1}
                </span>
                <div>
                  <div className="font-bold leading-tight">{st.stageName}</div>
                  <div className="text-[14px] opacity-75 font-normal">
                    {st.enforcedPolicyCount} policies enforced
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                {st.gatedArtifactsCount.toLocaleString()} gated
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Cryptographic Artifact Attestations */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> Tamper-Proof Cryptographic Artifact Attestations
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {nodes.map((node, nIdx) => {
                const isCurrentLayer = nIdx === currentStep || (currentStep >= 2 && nIdx >= 2);
                return (
                  <div
                    key={node.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <FileCheck size={16} className={isCurrentLayer ? 'text-[var(--pres-accent)]' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{node.artifactName}</span>
                        <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                          {node.slsaComplianceLevel}
                        </span>
                        {node.isCosignSigned && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Cosign Keyless
                          </span>
                        )}
                        {node.hasProvenanceAttestation && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30 flex items-center gap-1">
                            <Key size={12} /> in-toto v1.0
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          Vulnerabilities: {node.vulnerabilitiesDetectedCount}
                        </span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                          SLSA-4 Verified
                        </span>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-slate-200/60 dark:bg-black/40 font-mono text-[13px] text-slate-600 dark:text-slate-300 break-all mb-2 flex items-center gap-2">
                      <Terminal size={14} className="text-slate-400 shrink-0" />
                      <span>SHA-256: {node.digestSha256}</span>
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Provenance: Bound to Verified Git Commit & Ephemeral Builder</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <Lock size={14} /> Immutable OCI Hash
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-cyan-500" />
              Admission Controller: Kyverno & Gatekeeper Enforcing Cosign Signatures
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              100% Hermetic Build Verification
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Verification */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Deep Inspection
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[14px] border border-emerald-500/30">
                Phase {currentStep + 1} Active
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <h3 className="text-[20px] font-ubuntu font-bold text-slate-900 dark:text-white mb-1">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeStage.stageSubtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-[14px]">
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Enforced Policies</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.enforcedPolicyCount} Rules
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Gated Artifacts</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.gatedArtifactsCount.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Hermetic Compilation</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasHermetic ? 'Networkless Ephemeral VM' : 'Host Shared'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Cryptographic Attestation</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasAttestation ? 'in-toto Specification' : 'Unsigned'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Admission Webhook Enforced</span>
                <span className="font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasWebhook ? 'Sigstore Cosign Keyless' : 'Permissive'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Software supply chain strictly conforms to SLSA Level 4 zero-trust standards.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Runtime Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> SLSA-4 Hermetic Verified | Cryptographic Provenance Sealed | Keyless Cosign Admission Enforced
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2028 Supply Chain Engine
          </span>
        </div>
      </div>
    </div>
  );
};
export default EnterpriseSoftwareSupplyChainChokepointSlide;
