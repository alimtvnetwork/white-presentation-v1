// lint-allow: file-size reason="BoardFiduciaryEsgHorizonSlide flat sovereign executive board fiduciary ESG horizon" max=120
import React from 'react';
import type { BoardFiduciaryEsgHorizonSlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Leaf, CheckCircle2, ShieldCheck, Scale, FileText, Check, Activity } from 'lucide-react';

const DEF_PILLARS = [
  { pillarId: 'pl1', pillarIndex: 1, pillarTitle: 'Clean Energy Compute (Scope 2)', targetMetricName: 'Renewable Power Match', achievedValueDisplay: '99.4%', complianceStandard: 'GHG Protocol Scope 2', isTargetMet: true, hasRenewablePowerMatching: true, isCsrdCompliant: true, hasThirdPartyAuditCertified: true },
  { pillarId: 'pl2', pillarIndex: 2, pillarTitle: 'Carbon Abatement & Capture', targetMetricName: 'Metric Tons Abated', achievedValueDisplay: '124,000 MT', complianceStandard: 'ISO 14064-3 Carbon', isTargetMet: true, hasRenewablePowerMatching: true, isCsrdCompliant: true, hasThirdPartyAuditCertified: true },
  { pillarId: 'pl3', pillarIndex: 3, pillarTitle: 'Ethical AI & Diversity Governance', targetMetricName: 'Governance Composite', achievedValueDisplay: '98.8/100', complianceStandard: 'NIST AI RMF + ISO 42001', isTargetMet: true, hasRenewablePowerMatching: false, isCsrdCompliant: true, hasThirdPartyAuditCertified: true },
  { pillarId: 'pl4', pillarIndex: 4, pillarTitle: 'Boardroom Transparency', targetMetricName: 'Regulatory Filing Rate', achievedValueDisplay: '100.0%', complianceStandard: 'SEC Climate + CSRD', isTargetMet: true, hasRenewablePowerMatching: false, isCsrdCompliant: true, hasThirdPartyAuditCertified: true },
];

export const BoardFiduciaryEsgHorizonSlide: React.FC<{ slide?: BoardFiduciaryEsgHorizonSlideData; data?: BoardFiduciaryEsgHorizonSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const pillars = data?.pillars?.length ? data.pillars : DEF_PILLARS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><Leaf size={16} className="text-violet-500" />{data?.kicker || 'EXECUTIVE BOARDROOM SUSTAINABILITY GOVERNANCE'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> AAA Institutional ESG Rating</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Executive Board Fiduciary ESG Horizon: AAA Rating & 99.4% Clean Compute'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Institutional boardroom sustainability console tracking Scope 1/2/3 carbon abatement, green compute matching, and CSRD compliance'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Reporting Period</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">FY 2026-2027 Annual</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Audit Firm</span><span className="text-sm font-bold text-emerald-500">PwC ESG ASSURANCE</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Chief Software Engineer</span><span className="text-sm font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[550px] items-stretch">
        {pillars.map((pl) => (
          <div key={pl.pillarId} className="plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between transition-all hover:scale-[1.01]">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-sm font-bold text-violet-400">PILLAR 0{pl.pillarIndex}</span>
              <span className="font-mono text-sm px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">TARGET MET</span>
            </div>
            <div className="space-y-4 font-mono text-sm my-3">
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-1">
                <span className="text-sm text-slate-400 block uppercase">Strategic Pillar</span>
                <span className="font-bold text-slate-200 text-sm block truncate">{pl.pillarTitle}</span>
                <span className="text-sm text-emerald-400 font-bold block mt-2">{pl.achievedValueDisplay} ({pl.targetMetricName})</span>
              </div>
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
                <div className="flex justify-between items-center"><span className="text-sm text-slate-400">Standard:</span><span className="font-bold text-slate-200 text-sm truncate max-w-[120px]">{pl.complianceStandard}</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-slate-400">Audit Status:</span><span className="font-bold text-emerald-400 text-sm">100% AUDITED</span></div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><ShieldCheck size={16} /> Third-Party Certified CSRD</div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-6"><span className="text-sm uppercase text-slate-400">Carbon Abated:</span><span className="text-emerald-400 font-bold text-base">342,000 MT CO2e</span><span className="text-sm uppercase text-slate-400">Net-Zero Target:</span><span className="text-sky-300 font-bold text-base">Year 2028</span><span className="text-sm uppercase text-slate-400">Greenwashing Guarantee:</span><span className="text-violet-400 font-bold text-base">ZERO GREENWASHING</span></div>
        <div className="flex items-center gap-4"><span className="text-sm text-slate-400">Fiduciary Sign-Off: <strong className="text-emerald-400">SEALED</strong></span></div>
      </div>
    </div>
  );
};
