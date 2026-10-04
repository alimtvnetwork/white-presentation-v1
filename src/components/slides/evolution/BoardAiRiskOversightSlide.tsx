// lint-allow: file-size reason="BoardAiRiskOversightSlide kinetic 4-stage executive AI risk and governance" max=120
import React from 'react';
import type { BoardAiRiskOversightSlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Scale, CheckCircle2, ShieldAlert, FileText, Check, ShieldCheck, Activity } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Classification & Tiering', stageSubtitle: 'Comprehensive audit categorizing portfolio models into EU AI Act tiers', governanceBody: 'AI Ethics & Safety Board', auditStandard: 'EU AI Act Article 6', unresolvedRiskItemsCount: 0, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'Bias & Safety Auditing', stageSubtitle: 'Demographic parity verification, adversarial probing, and toxicity benchmarks', governanceBody: 'Independent Audit Team', auditStandard: 'NIST AI RMF 1.0', unresolvedRiskItemsCount: 0, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'IP Provenance Verification', stageSubtitle: 'Cryptographic training data lineage and copyright liability attestation', governanceBody: 'General Counsel & IP Audit', auditStandard: 'ISO/IEC 42001 Clause 8.2', unresolvedRiskItemsCount: 0, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'Board Resolution & Seal', stageSubtitle: 'Formal committee vote and immutable cryptographic board attestation seal', governanceBody: 'Board Audit Committee', auditStandard: 'Fiduciary Protocol', unresolvedRiskItemsCount: 0, isActive: false, isCompleted: false },
];

const DEF_CATEGORIES = [
  { id: 'rc1', categoryIndex: 1, riskCategoryTitle: 'EU AI Act Compliance', riskLevelBadge: 'VERIFIED COMPLIANT', complianceScorePercent: 99.6, mitigationProtocol: 'Article 9 Risk System', isRegulatoryCompliant: true, hasAuditAttestationActive: true, isRiskTolerancePassed: true },
  { id: 'rc2', categoryIndex: 2, riskCategoryTitle: 'Demographic Bias & Fairness', riskLevelBadge: 'CONTAINED RISK', complianceScorePercent: 98.9, mitigationProtocol: 'Disparate Impact > 0.92', isRegulatoryCompliant: true, hasAuditAttestationActive: true, isRiskTolerancePassed: true },
  { id: 'rc3', categoryIndex: 3, riskCategoryTitle: 'IP & Training Lineage', riskLevelBadge: 'VERIFIED COMPLIANT', complianceScorePercent: 98.4, mitigationProtocol: 'Synthetic Data Lineage', isRegulatoryCompliant: true, hasAuditAttestationActive: true, isRiskTolerancePassed: true },
  { id: 'rc4', categoryIndex: 4, riskCategoryTitle: 'Autonomous Swarm Safety', riskLevelBadge: 'LOW RESIDUAL RISK', complianceScorePercent: 99.2, mitigationProtocol: 'Hardware Kill-Switch', isRegulatoryCompliant: true, hasAuditAttestationActive: true, isRiskTolerancePassed: true },
];

export const BoardAiRiskOversightSlide: React.FC<{ slide?: BoardAiRiskOversightSlideData; data?: BoardAiRiskOversightSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.oversightStages?.length ? data.oversightStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const categories = data?.riskCategories?.length ? data.riskCategories : DEF_CATEGORIES;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><Scale size={16} className="text-violet-500" />{data?.kicker || 'EXECUTIVE BOARDROOM AI GOVERNANCE'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> {data?.overallPortfolioGovernanceScorePercent || 98.7}% Portfolio Governance</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Executive Board AI Risk Oversight: EU AI Act & ISO 42001 Compliance'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Boardroom-level governance framework evaluating enterprise artificial intelligence risk exposure, regulatory compliance, and fiduciary safety seals'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Framework</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">EU AI Act &amp; ISO 42001</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Board Resolution</span><span className="text-sm font-bold text-emerald-500">UNANIMOUS PASS</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Chief Software Engineer</span><span className="text-sm font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-3">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`step-interactive text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-sm flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_20px_var(--pres-accent)] text-white scale-[1.02] animate-active-beacon' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 opacity-75' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-sm opacity-75">{st.auditStandard.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[480px] items-stretch">
        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-violet-400">REGULATORY RISK SCORECARD</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">4 Pillars</span></div>
          <div className="space-y-3 font-mono text-sm my-3">
            {categories.map((c) => (
              <div key={c.id} className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-1">
                <div className="flex justify-between items-center"><span className="font-bold text-slate-200">{c.riskCategoryTitle}</span><span className="text-sm text-emerald-400 font-bold">{c.complianceScorePercent}%</span></div>
                <div className="flex justify-between text-sm text-slate-400"><span>{c.mitigationProtocol}</span><span className="text-sky-300">{c.riskLevelBadge}</span></div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><FileText size={16} /> ISO/IEC 42001 Artificial Intelligence Standard</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-sky-300">BOARD OVERSIGHT PHASE</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Step {currentStep + 1} of 4</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Audit Workstream</span>
              <div className="text-sky-300 font-bold text-base">{stages[currentStep]?.stageName}</div>
              <div className="text-sm text-slate-300 leading-relaxed font-poppins">{stages[currentStep]?.stageSubtitle}</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <div className="flex justify-between text-sm"><span className="text-slate-400">Governance Body:</span><span className="text-slate-200 font-bold">{stages[currentStep]?.governanceBody}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-400">Audit Standard:</span><span className="text-emerald-400 font-bold">{stages[currentStep]?.auditStandard}</span></div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-sky-400 flex items-center gap-2"><ShieldCheck size={16} /> 0 Unresolved High-Risk Items</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'ring-2 ring-emerald-500 shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-emerald-400">FIDUCIARY RESOLUTION SEAL</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Sealed</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Portfolio Governance Score</span>
              <div className="text-emerald-400 font-bold text-3xl font-mono">98.7%</div>
              <div className="text-sm text-slate-400">Full demographic fairness and IP compliance attested</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Audit Committee Attestation</span>
              <div className="text-sky-300 font-bold text-base">Cryptographic Board Sign-Off</div>
              <div className="text-sm text-slate-400">Unanimous risk tolerance pass certification</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><Check size={16} /> Formal Board Resolution Enacted</div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-4"><span className="text-sm uppercase text-slate-400">Governance Horizon:</span><span className="text-emerald-400 font-bold">EU AI ACT &amp; ISO 42001 CERTIFIED COMPLIANT</span></div>
        <div className="flex items-center gap-6"><span className="text-sm text-slate-400">Active Step: <strong className="text-slate-200">{currentStep + 1} / 4</strong></span><span className="text-sm text-slate-400">Residual Risk: <strong className="text-emerald-400">CONTAINED</strong></span></div>
      </div>
    </div>
  );
};
