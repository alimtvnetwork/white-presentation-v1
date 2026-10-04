// lint-allow: file-size reason="EnterpriseRiskTaxonomyHeatmapSlide interactive risk governance matrix" max=160
import React from 'react';
import type { EnterpriseRiskTaxonomyHeatmapSlideData } from '../../../types/suite2026Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { AlertOctagon, CheckCircle2, ShieldAlert, ShieldCheck, FileCheck, AlertTriangle } from 'lucide-react';

const DEF_RISKS = [
  { id: 'r1', riskName: 'Geopolitical Sovereign Data Lockout', taxonomyCategory: 'Regulatory Compliance', likelihoodScore: 4, impactScore: 5, mitigationControl: 'Multi-Region Isolated Enclave Mirroring with Autonomous Airgap Switchover', isResidualRiskAcceptable: true, isBoardEscalated: true, hasAuditProof: true },
  { id: 'r2', riskName: 'Post-Quantum Cryptographic Vulnerability', taxonomyCategory: 'Cryptographic Security', likelihoodScore: 3, impactScore: 5, mitigationControl: 'FIPS-203/204 Hybrid Kyber-1024 / Dilithium Dual-Sign Protocol Deployment', isResidualRiskAcceptable: true, isBoardEscalated: true, hasAuditProof: true },
  { id: 'r3', riskName: 'Subsea Fiber Cable Physical Severance', taxonomyCategory: 'Infrastructure Resilience', likelihoodScore: 2, impactScore: 4, mitigationControl: 'LEO Constellation Satellite Meshing with Redundant Terrestrial Rings', isResidualRiskAcceptable: true, isBoardEscalated: false, hasAuditProof: true },
  { id: 'r4', riskName: 'Third-Party Dependency Zero-Day Breach', taxonomyCategory: 'Supply Chain Assurance', likelihoodScore: 4, impactScore: 4, mitigationControl: 'Hermetic Build Sandboxing with Hardware TPM Attested Binary Provenance', isResidualRiskAcceptable: true, isBoardEscalated: false, hasAuditProof: true },
];

export const EnterpriseRiskTaxonomyHeatmapSlide: React.FC<{
  slide?: EnterpriseRiskTaxonomyHeatmapSlideData;
  data?: EnterpriseRiskTaxonomyHeatmapSlideData;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const risks = data?.risks?.length ? data.risks : DEF_RISKS;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), risks.length - 1);
  const activeRisk = risks[currentStep] || risks[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-[14px] font-mono font-bold tracking-wider uppercase flex items-center gap-2">
              <AlertOctagon size={16} className="text-violet-500" />
              {data?.kicker || 'BOARD AUDIT & ENTERPRISE RISK TAXONOMY'}
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-500" />
              Audit Cycle: {data?.auditYear || 'FY2026 Sovereign Audit'}
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-[44px] font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Enterprise Risk Taxonomy: 5x5 Likelihood vs Impact Heatmap'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-[16px] max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Systematic board-level evaluation of critical threat vectors, active controls, and quantitative residual exposure.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[12px] block uppercase">Governance</span><span className="font-bold text-slate-900 dark:text-slate-100">{data?.governanceCommittee || 'Board Audit & Risk Committee'}</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[12px] block uppercase">Residual Posture</span><span className="font-bold text-emerald-500">100% CONTROLLED</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[12px] block uppercase">External Audit</span><span className="font-bold text-violet-500">SOC2 Type II Attested</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-3">
        {risks.map((r, idx) => {
          const isActive = idx === currentStep;
          return (
            <button key={r.id} onClick={() => jumpToStep(idx)} className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${isActive ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_20px_var(--pres-accent)] text-slate-900 dark:text-white scale-[1.02]' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-80' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 text-slate-500 dark:text-slate-400 blur-[0.5px]'}`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[12px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
                <span className="font-bold truncate text-[13px]">{r.riskName.split(' ')[0]}</span>
              </div>
              <span className={`text-[12px] px-2 py-0.5 rounded font-bold ${r.isBoardEscalated ? 'bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-500/30' : 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30'}`}>{r.likelihoodScore * r.impactScore}/25</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-12 gap-6 z-10 my-auto h-[460px] items-stretch">
        <div className="col-span-5 plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold text-violet-500 dark:text-violet-400">5x5 LIKELIHOOD VS IMPACT MATRIX</span>
            <span className="font-mono text-[12px] px-2.5 py-1 rounded bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">Active Grid</span>
          </div>
          <div className="grid grid-cols-5 gap-2 my-auto p-4 rounded-xl bg-black/5 dark:bg-black/30 border border-[var(--pres-border)]">
            {[5, 4, 3, 2, 1].map((impact) =>
              [1, 2, 3, 4, 5].map((likelihood) => {
                const matchingRisk = risks.find((r) => r.impactScore === impact && r.likelihoodScore === likelihood);
                const isCurrentActive = matchingRisk && matchingRisk.id === activeRisk.id;
                const score = impact * likelihood;
                return (
                  <div key={`${impact}-${likelihood}`} className={`h-14 rounded-lg flex flex-col items-center justify-center p-1 font-mono text-[11px] border transition-all ${isCurrentActive ? 'ring-2 ring-[var(--pres-accent)] bg-[var(--pres-accent)]/30 text-white font-bold scale-[1.05]' : score >= 16 ? 'bg-rose-500/20 border-rose-500/30 text-rose-700 dark:text-rose-300' : score >= 10 ? 'bg-amber-500/15 border-amber-500/30 text-amber-800 dark:text-amber-300' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400'}`}>
                    <span>{matchingRisk ? matchingRisk.riskName.slice(0, 4) : `${likelihood},${impact}`}</span>
                    <span className="text-[10px] opacity-75">{score} pts</span>
                  </div>
                );
              })
            )}
          </div>
          <div className="flex justify-between items-center text-[12px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-[var(--pres-border)]">
            <span>X: Likelihood (1-5)</span>
            <span>Y: Impact (1-5)</span>
            <span className="text-emerald-500 font-bold">Residual Score Capped</span>
          </div>
        </div>

        <div className="col-span-7 plane-2-elevated p-6 rounded-2xl border-2 border-[var(--pres-accent)] bg-[var(--pres-bg-card)] shadow-2xl flex flex-col justify-between scale-[1.01]">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold text-[var(--pres-accent)] flex items-center gap-2">
              <ShieldAlert size={16} /> RISK MITIGATION DOSSIER
            </span>
            <div className="flex items-center gap-2">
              <span className={`font-mono text-[12px] px-2.5 py-1 rounded font-bold ${activeRisk.isBoardEscalated ? 'bg-rose-500/20 text-rose-700 dark:text-rose-400 border border-rose-500/30' : 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30'}`}>{activeRisk.isBoardEscalated ? 'CRITICAL BOARD ESCALATION' : 'OPERATIONAL MONITORING'}</span>
              <span className="font-mono text-[12px] px-2.5 py-1 rounded bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 font-bold">Risk {currentStep + 1} of {risks.length}</span>
            </div>
          </div>
          <div className="space-y-4 font-mono text-[14px] my-3">
            <div className="p-4 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-[12px] text-slate-500 dark:text-slate-400 block uppercase">Threat Vector Name & Category</span>
              <h3 className="text-[24px] font-ubuntu font-bold text-slate-900 dark:text-white leading-tight">{activeRisk.riskName}</h3>
              <div className="text-[13px] text-violet-600 dark:text-violet-400 font-bold">{activeRisk.taxonomyCategory}</div>
            </div>
            <div className="p-4 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-[12px] text-slate-500 dark:text-slate-400 block uppercase font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5"><ShieldCheck size={16} /> Engineered Mitigation Control</span>
              <div className="font-poppins text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed font-medium">{activeRisk.mitigationControl}</div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)]"><span className="text-[11px] text-slate-500 uppercase block">Likelihood</span><span className="text-[18px] font-bold text-slate-900 dark:text-white">{activeRisk.likelihoodScore} / 5</span></div>
              <div className="p-3 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)]"><span className="text-[11px] text-slate-500 uppercase block">Impact</span><span className="text-[18px] font-bold text-slate-900 dark:text-white">{activeRisk.impactScore} / 5</span></div>
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20"><span className="text-[11px] text-emerald-700 dark:text-emerald-400 uppercase block">Residual Risk</span><span className="text-[18px] font-bold text-emerald-700 dark:text-emerald-300">ACCEPTABLE</span></div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)] font-mono text-[13px] text-slate-600 dark:text-slate-300 flex items-center gap-2">
            <FileCheck size={16} className="text-emerald-500" /> Continuous automated security control verification attested in real-time.
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between text-[14px] font-mono pt-3 border-t border-[var(--pres-border)]">
        <span style={{ color: 'var(--pres-text-muted)' }}>Slide 11 • Enterprise Risk Taxonomy Heatmap • 16:9 4K Precision Standard</span>
        <span className="text-violet-500 font-bold">Dynamic Step {currentStep + 1} of {risks.length}</span>
      </div>
    </div>
  );
};
