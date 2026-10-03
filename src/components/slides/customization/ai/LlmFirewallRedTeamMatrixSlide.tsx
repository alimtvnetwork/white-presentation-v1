import React from 'react';
import type { LlmFirewallRedTeamMatrixSlideData } from '../../../../types/customization/aiInfraTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { GuardrailGateCard } from './GuardrailGateCard';
import { ShieldCheck, ShieldAlert, UserCheck, Flame, Lock } from 'lucide-react';

export const LlmFirewallRedTeamMatrixSlide: React.FC<{
  slide: LlmFirewallRedTeamMatrixSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const gates = slide.guardrailGates || slide.stages || [];
  const currentStep = Math.min(activeStep, Math.max(0, gates.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
              <ShieldAlert size={13} /> {slide.kicker || 'ADVERSARIAL AI DEFENSE'}
            </span>
            <span className="font-mono text-xs text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
              <UserCheck size={11} /> Alim Ul Karim (Chief Software Engineer)
            </span>
            <span className="font-mono text-xs text-amber-900 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 flex items-center gap-1">
              <Lock size={11} /> {slide.complianceFramework || 'OWASP LLM Top 10'}
            </span>
          </div>
          <h1
            style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
            className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title || 'LLM Firewall & Red Team Matrix'}</h1>
          <p
            style={{ color: 'var(--pres-text-muted)' }}
            className="font-poppins text-base max-w-4xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >{slide.subtitle || 'Real-time prompt injection mitigation, PII sanitization, and output boundary enforcement'}</p>
        </div>

        <div className="plane-1-raised px-4 py-3 rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-slate-900/60 flex items-center gap-5 font-mono text-xs">
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Simulations</div>
            <div className="text-amber-900 dark:text-amber-300 font-bold text-base flex items-center gap-1">
              <Flame size={13} className="text-rose-400" /> {(slide.adversarialSimulationsCount || 14200).toLocaleString()}
            </div>
          </div>
          <div className="w-px h-8 bg-slate-700/40" />
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Accuracy Rate</div>
            <div className="text-emerald-400 font-bold text-base">{slide.defenseAccuracyRate || 99.8}%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {gates.map((gate, idx) => (
          <GuardrailGateCard key={gate.id || idx} gate={gate} index={idx} activeStep={currentStep} />
        ))}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="text-amber-900 dark:text-amber-300 font-bold flex items-center gap-1.5"><ShieldCheck size={14} /> Firewall:</span>
          <span>PII: <strong className="text-emerald-400">{slide.hasPiiSanitized ? 'Scrubbed' : 'Off'}</strong></span>
          <span>Jailbreak: <strong className="text-emerald-400">{slide.isJailbreakBlocked ? '100% Blocked' : 'Observing'}</strong></span>
          <span>Policy: <strong className="text-cyan-400">{slide.isPolicyCompliant ? 'Compliant' : 'Review'}</strong></span>
          <span>Audit: <strong className="text-cyan-400">{slide.hasAuditSignature ? 'HMAC Signed' : 'Standard'}</strong></span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1 font-bold text-[11px]"><ShieldCheck size={13} /> Boundary Verified</span>
          <span className="text-slate-400 text-xs">Gate {currentStep + 1} of {Math.max(gates.length, 1)}</span>
        </div>
      </div>
    </div>
  );
};
