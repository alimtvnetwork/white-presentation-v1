import React from 'react';
import type { ZeroTrustNetworkMeshSlideData } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldCheck, Lock, Server, KeyRound } from 'lucide-react';

export const ZeroTrustNetworkMeshSlide: React.FC<{ slide: ZeroTrustNetworkMeshSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const stages = slide.meshStages || [];
  const nodes = slide.meshNodes || [];
  const currentStep = Math.min(activeStep, Math.max(0, stages.length - 1));
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'CLOUD SECURITY ARCHITECTURE'}</span>
          <h1
            className="font-ubuntu text-4xl font-black text-white tracking-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title || 'Zero-Trust Network Mesh: Dynamic Mutual TLS Micro-Segmentation'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Hardware-attested cryptographic enclave boundaries enforcing strict zero-trust access control.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-cyan-300 font-bold">
            <Lock size={14} className="text-cyan-400" /> {slide.cryptographicSuite || 'Kyber-768 + AES-256-GCM'}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-700/60 bg-emerald-950/50 text-emerald-300 font-bold">
            <KeyRound size={14} className="text-emerald-400" /> TPM 2.0 Attested
          </span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-4 p-3 bg-slate-950/60 border border-slate-800/80 rounded-2xl font-mono text-xs">
        {stages.map((st, idx) => (
          <div key={st.stepIndex || idx} className={`p-3 rounded-xl border transition-all ${idx === currentStep ? 'bg-cyan-950/40 border-cyan-400/80 shadow-lg' : 'bg-slate-900/40 border-slate-800/60 opacity-70'}`}>
            <span className="text-[11px] font-bold text-slate-400 block mb-1">STAGE 0{st.stepIndex}: {st.securityDomain}</span>
            <h4 className="font-ubuntu text-sm font-bold text-white truncate">{st.stageTitle}</h4>
            <p className="font-poppins text-[11px] text-slate-400 truncate mt-0.5">{st.enforcementMechanism}</p>
          </div>
        ))}
      </div>

      <div className="z-10 grid grid-cols-4 gap-5 my-auto">
        {nodes.slice(0, 4).map((nd, idx) => (
          <div key={nd.nodeId || idx} className={`p-5 rounded-2xl border transition-all h-[420px] flex flex-col justify-between ${nd.isActive || idx === currentStep ? 'bg-slate-900/90 border-cyan-500/60 shadow-xl' : 'bg-slate-950/70 border-slate-800/80'}`}>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] font-bold uppercase text-cyan-400 flex items-center gap-1">
                  <Server size={12} /> {nd.nodeCategory}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-emerald-950/60 text-emerald-300 border border-emerald-700/50">Verified</span>
              </div>
              <h3 className="font-ubuntu text-base font-bold text-white mb-2">{nd.nodeName}</h3>
              <p className="font-mono text-xs text-slate-400">IP: <strong className="text-slate-200">{nd.ipAddress}</strong></p>
            </div>
            <div className="space-y-3 pt-3 border-t border-slate-800 font-mono text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Attestation:</span>
                <span className="text-slate-200 truncate max-w-[150px]">{nd.attestationStandard}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>TLS Suite:</span>
                <span className="text-cyan-300">{nd.tlsVersion}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Latency Overhead:</span>
                <span className="text-emerald-400 font-bold">{nd.latencyOverheadMs}ms</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Continuous Enclave Attestation: 100% Policy Compliant | Post-Quantum Lattice Activated</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
