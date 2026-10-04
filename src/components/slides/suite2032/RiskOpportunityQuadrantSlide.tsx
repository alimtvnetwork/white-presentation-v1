import React from 'react';
import type { RiskOpportunityQuadrantSlideData } from '../../../types/suite2032Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Grid, ShieldAlert, Sparkles, ShieldCheck, Activity, Target } from 'lucide-react';

const QUADRANT_CONFIGS = [
  { key: 'existential-threat', title: 'Existential Threats', subtitle: 'High Impact · Low Probability', border: 'border-rose-500/40', bg: 'bg-rose-950/15', glow: '', text: 'text-rose-400' },
  { key: 'strategic-opportunity', title: 'Strategic Exponential Opportunities', subtitle: 'High Impact · High Probability', border: 'border-emerald-500/50', bg: 'bg-emerald-950/20', glow: 'shadow-[0_0_30px_rgba(16,185,129,0.2)]', text: 'text-emerald-400', isImmediateWin: true },
  { key: 'containable-risk', title: 'Containable Operational Risks', subtitle: 'Low Impact · Low Probability', border: 'border-slate-800', bg: 'bg-slate-900/50', glow: '', text: 'text-slate-400' },
  { key: 'tactical-quick-win', title: 'Tactical Quick Wins', subtitle: 'Low Impact · High Probability', border: 'border-cyan-500/40', bg: 'bg-cyan-950/15', glow: '', text: 'text-cyan-400' },
];

export const RiskOpportunityQuadrantSlide: React.FC<{
  slide: RiskOpportunityQuadrantSlideData;
  activeStep?: number;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const items = slide?.items || [];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[56px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-2">
              <Grid size={16} /> {slide?.kicker || 'PORTFOLIO RISK & STRATEGIC PRIORITIZATION'}
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">Audit: {slide?.auditQuarter || 'Q4 FY2026'}</span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">CRO: {slide?.chiefRiskOfficer || 'Executive Risk Officer'}</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-slate-400 mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="font-mono text-[14px] bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-slate-300 flex items-center gap-2">
          <Target size={14} className="text-emerald-400" /> Bounded Risk Envelope
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-5 my-auto z-10 h-[590px]">
        {QUADRANT_CONFIGS.map((q) => {
          const qItems = items.filter((it) => it.quadrant === q.key);
          return (
            <div key={q.key} className={`plane-1-raised rounded-3xl p-6 border ${q.border} ${q.bg} ${q.glow} flex flex-col justify-between transition-all relative overflow-hidden`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div>
                  <h3 className={`text-[20px] font-bold ${q.text} flex items-center gap-2`}>
                    {q.isImmediateWin && <Sparkles size={18} className="text-emerald-400 animate-pulse" />}
                    {q.title}
                  </h3>
                  <span className="text-[14px] font-mono text-slate-400">{q.subtitle}</span>
                </div>
                {q.isImmediateWin && (
                  <span className="text-[14px] font-mono font-bold bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
                    IMMEDIATE WINS GLOW
                  </span>
                )}
              </div>
              <div className="space-y-3 my-auto">
                {qItems.map((item) => (
                  <div key={item.id} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-between gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[16px] font-bold text-slate-100">{item.itemTitle}</span>
                      <div className="flex items-center gap-2 font-mono text-[14px]">
                        <span className="text-cyan-400 font-bold">Imp: {item.impactScore}</span>
                        <span className="text-slate-500">|</span>
                        <span className="text-purple-400 font-bold">Prb: {item.probabilityScore}</span>
                      </div>
                    </div>
                    <div className="text-[14px] text-slate-300 font-mono flex items-center gap-2">
                      <span className="text-slate-500 uppercase font-semibold">Mitigation:</span>
                      <span className="truncate text-slate-200">{item.mitigationAction}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 font-mono text-[14px] text-slate-400">
                <span>Active Vectors: {qItems.length}</span>
                <span className="text-emerald-400 flex items-center gap-1"><ShieldCheck size={14} /> Assigned</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised px-6 py-3.5 rounded-2xl border border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-[14px] text-slate-300">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-cyan-400 font-bold"><Activity size={16} /> Board Oversight Protocol Active</span>
          <span className="text-slate-400">CRO Verification: <strong className="text-slate-200">Affirmed & Signed</strong></span>
        </div>
        <div className="flex items-center gap-2 text-emerald-400 font-bold"><ShieldCheck size={16} /> Risk Envelope 100% Bounded</div>
      </div>
    </div>
  );
};
