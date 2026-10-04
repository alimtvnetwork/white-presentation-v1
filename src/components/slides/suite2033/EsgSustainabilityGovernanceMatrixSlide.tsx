import React from 'react';
import type { EsgSustainabilityGovernanceMatrixSlideData } from '../../../types/suite2033Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Leaf, Award, CheckCircle2, ShieldCheck, Users, Scale } from 'lucide-react';

export const EsgSustainabilityGovernanceMatrixSlide: React.FC<{
  slide: EsgSustainabilityGovernanceMatrixSlideData;
  activeStep?: number;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const pillars = slide?.pillars || [];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[52px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase px-3.5 py-1 rounded-full bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2"><Leaf size={18} /> {slide?.kicker || 'ESG SUSTAINABILITY & GOVERNANCE MATRIX'}</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full border border-[var(--pres-border)] bg-[var(--pres-bg-card)] text-[var(--pres-text)]">FY: {slide?.reportingFiscalYear || 'FY2026'}</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-beacon-pulse inline-block" /><Award size={16} /> CDP Rating: {slide?.cdpRatingBadge || 'AAA / CDP A-LIST'}</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-[var(--pres-text-muted)] mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-1 font-mono text-[14px] border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-4 py-2.5 rounded-2xl">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-[var(--pres-accent)]/40 relative overflow-hidden flex items-center justify-center"><div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[var(--pres-accent)]/60 animate-radar-sweep origin-center" /></div>
            <span className="text-[var(--pres-text-muted)]">Composite ESG Score:</span>
            <span className="font-bold text-[16px] text-[var(--pres-accent)]">{slide?.compositeEsgScore || 96.2}/100</span>
          </div>
          <span className="text-[14px] text-[var(--pres-text-muted)]">Lead: {slide?.committeeChairName || 'Dame Eleanor Vance'}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 my-auto z-10 h-[520px]">
        {pillars.map((p, idx) => (
          <div key={idx} className="plane-1-raised rounded-3xl p-6 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                <span className="font-mono text-[16px] font-bold text-[var(--pres-accent)] flex items-center gap-2">
                  {p.pillarCategory === 'Environmental' ? <Leaf size={18} /> : p.pillarCategory === 'Social' ? <Users size={18} /> : <Scale size={18} />}
                  {p.pillarCategory}
                </span>
                <span className="font-mono text-[16px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-beacon-pulse" /><CheckCircle2 size={16} /> Score: {p.pillarScore}/{p.targetMaxScore}</span>
              </div>
              <h3 className="text-[22px] font-bold text-[var(--pres-text)] mt-4 mb-1">{p.leadInitiativeTitle}</h3>
              <div className="text-[14px] font-mono text-[var(--pres-text-muted)] mb-4">Auditor: {p.auditVerificationAgency}</div>
              <div className="space-y-3">
                {(p.kpis || []).map((kpi, kIdx) => (
                  <div key={kIdx} className="p-3 rounded-2xl bg-[var(--pres-bg-card)] border border-[var(--pres-border)] flex items-center justify-between">
                    <div>
                      <div className="text-[14px] text-[var(--pres-text-muted)]">{kpi.kpiLabel}</div>
                      <div className="font-mono text-[18px] font-bold text-[var(--pres-text)] animate-sparkline-trace">{kpi.kpiValue}</div>
                    </div>
                    <div className="text-right font-mono text-[14px]">
                      <div className="text-[var(--pres-text-muted)]">Target</div>
                      <div className="font-bold text-emerald-600 dark:text-emerald-400">{kpi.targetBenchmark}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
              <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5"><ShieldCheck size={16} /> Verified Compliant</span>
              <span className="px-2.5 py-1 rounded-lg bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] font-semibold">Tier-1 Rating</span>
            </div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised rounded-2xl p-4 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] z-10 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-mono text-[16px] text-emerald-600 dark:text-emerald-400"><CheckCircle2 size={18} /> Net-Zero Carbon by 2030</div>
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text)]"><ShieldCheck size={18} className="text-[var(--pres-accent)]" /> Zero Bribery Policy Active</div>
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text-muted)]"><Users size={18} /> 75% Independent Board</div>
        </div>
        <div className="font-mono text-[14px] text-[var(--pres-text-muted)] border-l border-[var(--pres-border)] pl-6">
          Governance Signoff: <span className="font-bold text-[var(--pres-text)]">Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>
    </div>
  );
};
