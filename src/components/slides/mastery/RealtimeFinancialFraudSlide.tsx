// lint-allow: file-size reason="RealtimeFinancialFraudSlide sovereign GNN graph fraud detection overview" max=120
import React from 'react';
import type { RealtimeFinancialFraudGraphSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createRealtimeFinancialFraudSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Network, CheckCircle2, ShieldCheck, ArrowRight, ShieldAlert } from 'lucide-react';

export const RealtimeFinancialFraudSlide: React.FC<{ slide?: RealtimeFinancialFraudGraphSlideData; data?: RealtimeFinancialFraudGraphSlideData }> = ({ slide, data: pData }) => {
  const fallback = createRealtimeFinancialFraudSlide('default-realtime-financial-fraud');
  const data = slide || pData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const sc = data.scorecard || fallback.scorecard;
  const entities = data.entities?.length ? data.entities : fallback.entities;
  const edges = data.edges?.length ? data.edges : fallback.edges;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Network size={15} className="text-violet-500" />
              {data.kicker || 'FINANCIAL CRIME INTELLIGENCE'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> {sc.modelArchitecture} • {sc.inferenceLatencyMs}ms Real-Time Inference
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Real-Time Financial Fraud Graph: GNN Multi-Hop Layering Detection'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Heterogeneous Graph Neural Networks uncovering shell company circular fund laundering within 9.8ms'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Ring Value</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{sc.detectedFraudRingValue || '$14.2M'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">FP Reduction</span><span className="text-lg font-bold text-slate-900 dark:text-sky-300">{sc.falsePositiveReductionPercent}%</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-slate-800 z-10 flex items-center justify-between font-mono text-xs my-2">
        <div className="flex items-center gap-4">
          <span className="text-sky-400 font-bold flex items-center gap-1.5"><ShieldAlert size={15} /> GNN DETECTION MATRIX:</span>
          <span className="text-slate-300">Scanned 4.8M Transactions/day</span>
        </div>
        <div className="flex items-center gap-5 text-slate-400">
          <span>Circular Layering Rings: <strong className="text-rose-400">3 Detected & Blocked</strong></span>
          <span>Intervention Speed: <strong className="text-emerald-400">Sub-10ms Gate</strong></span>
          <span>AML Compliance: <strong className="text-emerald-400">FinCEN Automated Filing</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[460px] items-stretch">
        {entities.map((ent, idx) => {
          const edge = edges[idx];
          return (
            <div key={ent.entityId} className={`plane-2-elevated p-5 rounded-2xl border transition-all flex flex-col justify-between ${ent.isFlaggedSuspicious ? 'border-rose-500/50 bg-rose-950/10' : 'border-slate-800'}`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
                <span className="font-mono text-xs font-bold text-slate-200">NODE 0{idx + 1}: {ent.entityType}</span>
                <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${ent.isFlaggedSuspicious ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold' : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'}`}>
                  RISK: {ent.riskScore}/100
                </span>
              </div>
              <div className="space-y-3 font-mono text-xs my-3">
                <div className="text-slate-100 font-bold text-sm">{ent.label}</div>
                <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                  <div className="text-slate-400 text-[10px]">GNN PROFILE REASONING</div>
                  <div className="text-slate-300 text-[11px] leading-relaxed">{ent.flaggedReason}</div>
                  <div className="text-[10px] text-sky-400 pt-1">Jurisdiction: {ent.jurisdictionCountry}</div>
                </div>
                {edge && (
                  <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1">Hop #{edge.hopIndex} <ArrowRight size={11} /></span>
                    <span className="text-rose-400 font-bold">{edge.amountFormatted} ({edge.timeElapsedSeconds}s)</span>
                  </div>
                )}
              </div>
              <div className="pt-2.5 border-t border-slate-700/40 flex items-center justify-between font-mono text-[10px] text-slate-400">
                <span>Action Taken:</span>
                <span className={`font-bold ${ent.isFlaggedSuspicious ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {ent.isFlaggedSuspicious ? 'ACCOUNT FROZEN • SAR FILED' : 'CLEARED NORMAL'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> AML Compliance Certified</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Automated SAR File Token: <strong className="text-slate-200">0x9f18a24c (FinCEN Direct)</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Real-Time Action: <strong className="text-rose-400">TRANSACTION ROUTE INTERCEPTED</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Sovereign Telemetry Overview</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
