import React from 'react';
import type { DataLineageGovernanceFlowSlideData } from '../../../types/suite2033Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { Database, CheckCircle2, Sparkles, ShieldCheck, GitCommit, Lock } from 'lucide-react';

export const DataLineageGovernanceFlowSlide: React.FC<{
  slide: DataLineageGovernanceFlowSlideData;
  activeStep?: number;
}> = ({ slide, activeStep }) => {
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = slide?.governanceHops || [];
  const currentStep = Math.min(Math.max(0, (activeStep !== undefined ? activeStep : storeStep) || 0), stages.length - 1);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[52px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase px-3.5 py-1 rounded-full bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Database size={18} /> {slide?.kicker || 'DATA LINEAGE & GOVERNANCE FLOW'}
            </span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full border border-[var(--pres-border)] bg-[var(--pres-bg-card)] text-[var(--pres-text)] flex items-center gap-2">
              <Lock size={16} /> Framework: {slide?.complianceFrameworkName || 'GDPR / HIPAA Enclave'}
            </span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5"><ShieldCheck size={16} /> Cryptographically Sealed</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-[var(--pres-text-muted)] mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-1 font-mono text-[14px] border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-4 py-2.5 rounded-2xl">
          <div className="flex items-center gap-2"><span className="text-[var(--pres-text-muted)]">Governance Hop:</span><span className="font-bold text-[16px] text-[var(--pres-accent)]">{currentStep + 1} of {stages.length}</span></div>
          <span className="text-[14px] text-[var(--pres-text-muted)]">Chief Data Architect: Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto z-10 h-[520px]">
        {stages.map((hop, idx) => {
          const phase = resolveStepPhase(idx, currentStep);
          const isCurrent = phase === 'active';
          const isDone = phase === 'completed';
          return (
            <div key={hop.stepIndex} onClick={() => jumpToStep(idx)} style={getStepLifecycleStyle(phase)} className={`plane-1-raised rounded-3xl p-6 border flex flex-col justify-between cursor-pointer transition-all ${isCurrent ? 'bg-[var(--pres-bg-card)] border-[var(--pres-accent)] ring-2 ring-[var(--pres-accent)]/40 shadow-xl animate-pipeline-flow' : 'bg-[var(--pres-bg-card)] border-[var(--pres-border)]'}`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <span className="font-mono text-[16px] font-bold text-[var(--pres-accent)]">{hop.hopCode} • {hop.processingEngineName}</span>
                  {isDone ? <span className="font-mono text-[16px] text-emerald-700 dark:text-emerald-300 flex items-center gap-1"><CheckCircle2 size={18} /> Audited</span> : isCurrent ? <span className="font-mono text-[16px] text-[var(--pres-accent)] flex items-center gap-1"><Sparkles size={18} /> Ingesting</span> : <span className="font-mono text-[16px] text-[var(--pres-text-muted)]">Queued</span>}
                </div>
                <h3 className="text-[22px] font-bold text-[var(--pres-text)] mt-4 mb-2">{hop.hopTitle}</h3>
                <div className="text-[14px] font-mono text-[var(--pres-accent)] mb-3 flex items-center gap-1"><GitCommit size={14} /> Hash: {hop.cryptographicHashTag}</div>
                <div className="space-y-2 font-mono text-[14px]">
                  <div className="p-2 rounded-xl bg-[var(--pres-bg)] border border-[var(--pres-border)] flex justify-between">
                    <span className="text-[var(--pres-text-muted)]">PII Masking</span>
                    <span className="text-[var(--pres-text)] font-bold">{hop.piiMaskingAlgorithm}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[var(--pres-bg)] border border-[var(--pres-border)] flex justify-between">
                    <span className="text-[var(--pres-text-muted)]">Standard</span>
                    <span className="text-emerald-700 dark:text-emerald-300 font-bold">{hop.complianceAuditStandard}</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--pres-border)] flex items-center justify-between font-mono">
                <div><div className="text-[14px] text-[var(--pres-text-muted)]">Daily Ingest</div><div className="text-[18px] font-bold text-[var(--pres-text)]">{hop.dataVolumeDailyGigabytes} GB/d</div></div>
                <div className="text-right"><div className="text-[14px] text-[var(--pres-text-muted)]">Security Audit</div><div className="text-[18px] font-bold text-emerald-700 dark:text-emerald-300">0 Defects</div></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised rounded-2xl p-4 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] z-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text-muted)]"><Database size={18} className="text-[var(--pres-accent)]" /> Governed Schema Attributes:</div>
          {(slide?.catalogAttributes || []).slice(0, 3).map((attr) => (
            <div key={attr.id} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--pres-bg)] border border-[var(--pres-border)] font-mono text-[14px]">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span className="font-bold text-[var(--pres-text)]">{attr.attributeFieldName}</span>
              <span className="text-[var(--pres-text-muted)]">({attr.classificationTier} • RBAC)</span>
            </div>
          ))}
        </div>
        <div className="font-mono text-[14px] text-[var(--pres-text-muted)] border-l border-[var(--pres-border)] pl-6">
          Catalog: <span className="font-bold text-[var(--pres-accent)] text-[16px]">{slide?.totalGovernedDatasetsCount || 0} Datasets ({slide?.dailyIngestionTerabytes || 0} TB/d)</span> • Officer: <span className="font-bold text-[var(--pres-text)]">Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>
    </div>
  );
};
