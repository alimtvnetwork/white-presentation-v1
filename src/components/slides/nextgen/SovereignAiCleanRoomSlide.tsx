// lint-allow: file-size reason="SovereignAiCleanRoomSlide kinetic 4-stage confidential data clean room" max=120
import React from 'react';
import type { SovereignAiCleanRoomSlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Shield, CheckCircle2, ShieldCheck, Activity, Globe2, EyeOff } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Remote Attestation', stageSubtitle: 'Multi-party hardware verification of AMD SEV-SNP confidential enclaves', governanceProtocol: 'NIST SP 800-193 + SPDM 1.2', differentialEpsilonUsed: 0.1, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'Blind Ingestion', stageSubtitle: 'Homomorphic data tokenization with differential privacy noise injection', governanceProtocol: 'Differential Privacy (ε=0.5, δ=1e-6)', differentialEpsilonUsed: 0.5, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'Federated Gradient', stageSubtitle: 'In-enclave model training with strict zero raw data exposure', governanceProtocol: 'Secure Aggregation Protocol', differentialEpsilonUsed: 0.8, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'ZK Compliance Seal', stageSubtitle: 'Zero-Knowledge succinct proof certifying GDPR and HIPAA constraints', governanceProtocol: 'Groth16 SNARK Proof Engine', differentialEpsilonUsed: 1.0, isActive: false, isCompleted: false },
];
const DEF_PARTS = [
  { id: 'p1', participantOrg: 'Swiss Health Consortium', jurisdictionRegion: 'Switzerland (CH)', datasetName: 'Oncology Records (1.2M)', recordCount: 1200000, privacyEpsilonBudget: 0.5, isIngestionComplete: true, hasAttestationConfirmed: true, isEncrypted: true },
  { id: 'p2', participantOrg: 'Nordic Genomics Bank', jurisdictionRegion: 'Sweden (SE)', datasetName: 'Whole Genome Sequences', recordCount: 450000, privacyEpsilonBudget: 0.3, isIngestionComplete: true, hasAttestationConfirmed: true, isEncrypted: true },
  { id: 'p3', participantOrg: 'BioPharma Global Research', jurisdictionRegion: 'Germany (DE)', datasetName: 'Clinical Trial Cohorts', recordCount: 880000, privacyEpsilonBudget: 0.4, isIngestionComplete: true, hasAttestationConfirmed: true, isEncrypted: true },
];

export const SovereignAiCleanRoomSlide: React.FC<{ slide?: SovereignAiCleanRoomSlideData; data?: SovereignAiCleanRoomSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.cleanRoomStages?.length ? data.cleanRoomStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const parts = data?.participants?.length ? data.participants : DEF_PARTS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><Shield size={15} className="text-teal-500" />{data?.kicker || 'CONFIDENTIAL DATA CLEAN ROOM'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data?.complianceCertification || 'GDPR + HIPAA Compliant'} • Zero Raw Exposure</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Sovereign AI Data Clean Room: Multi-Party Enclave Compute'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Zero-trust cross-border collaborative AI training inside cryptographically attested blind hardware enclaves'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Enclave</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.confidentialEnclaveProvider || 'AMD SEV-SNP Gen3'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Privacy Budget</span><span className="text-sm font-bold text-teal-400">ε = 1.0 (Guaranteed)</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Chief Software Engineer</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`step-interactive text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white scale-[1.02]' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 opacity-75' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-[10px] opacity-75 truncate max-w-[110px]">ε = {st.differentialEpsilonUsed}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-teal-400">PARTICIPATING SOVEREIGN NODES</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">3 Jurisdictions</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {parts.map((p) => (
              <div key={p.id} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center"><span className="text-slate-200 font-bold">{p.participantOrg}</span><span className="text-[10px] text-teal-400 font-bold">{p.jurisdictionRegion}</span></div>
                <div className="flex justify-between text-[11px] text-slate-400"><span>{p.datasetName}</span><span className="text-emerald-400">ε = {p.privacyEpsilonBudget}</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><EyeOff size={13} /> Differential Privacy Noise Calibrated</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-sky-300">BLIND ENCLAVE EXECUTION</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Zero Plaintext</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">CURRENT GOVERNANCE PROTOCOL</span>
              <div className="text-sky-300 font-bold text-xs">{stages[currentStep]?.governanceProtocol}</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">{stages[currentStep]?.stageSubtitle}</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">Data Re-Identification Risk:</span><strong className="text-emerald-400">&lt; 0.0001% Mathematical Floor</strong></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Multi-Party Consensus Cryptographically Bound</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400">ZK COMPLIANCE AUDIT SEAL</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Groth16 SNARK</span></div>
          <div className="space-y-2 font-mono text-xs my-3">
            <div className="p-2.5 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">ZERO-KNOWLEDGE VERIFICATION</span>
              <div className="text-emerald-300 font-bold text-xs">Mathematical Proof of Non-Exfiltration</div>
              <div className="text-[10px] text-slate-400">Proof Verification Time: 4.8ms</div>
            </div>
            <div className="p-2.5 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">FEDERATED MODEL WEIGHTS</span>
              <div className="text-sky-300 font-bold text-xs">Aggregated Weights Released to Swarm</div>
              <div className="text-[10px] text-slate-400">Zero Raw Row Traceability</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Audit Certificate:</span><strong className="font-bold">SEALED & IMMUTABLE</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Sovereign Clean Room Sealed</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Differential Budget: <strong className="text-slate-200">ε = 1.0 MAX</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>ZK Proof: <strong className="text-emerald-400">ON-CHAIN VERIFIED</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400"><span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span><span>Step {currentStep + 1} of {stages.length}</span></div>
      </div>
    </div>
  );
};
