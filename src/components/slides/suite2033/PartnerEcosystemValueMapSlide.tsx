import React from 'react';
import type { PartnerEcosystemValueMapSlideData } from '../../../types/suite2033Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Network, Handshake, CheckCircle2, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

export const PartnerEcosystemValueMapSlide: React.FC<{
  slide: PartnerEcosystemValueMapSlideData;
  activeStep?: number;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const pillars = slide?.partnerPillars || [];
  const metrics = slide?.ecosystemMetrics || [];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[52px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase px-3.5 py-1 rounded-full bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2"><Network size={18} /> {slide?.kicker || 'STRATEGIC ALLIANCES & ECOSYSTEM VALUE'}</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full border border-[var(--pres-border)] bg-[var(--pres-bg-card)] text-[var(--pres-text)]">{slide?.reportingFiscalYear || 'FY2026 Global Alliances'}</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-beacon-pulse inline-block" /><TrendingUp size={16} /> Co-Sell Pipeline: ${slide?.totalCoSellPipelineMillionUsd || 148.5}M</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-[var(--pres-text-muted)] mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-1 font-mono text-[14px] border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-4 py-2.5 rounded-2xl">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-[var(--pres-accent)]/40 relative overflow-hidden flex items-center justify-center"><div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[var(--pres-accent)]/60 animate-radar-sweep origin-center" /></div>
            <span className="text-[var(--pres-text-muted)]">Alliances Lead:</span>
            <span className="font-bold text-[16px] text-[var(--pres-accent)]">{slide?.vpGlobalAlliancesName || 'Rachel Thorne'}</span>
          </div>
          <span className="text-[14px] text-[var(--pres-text-muted)]">Ecosystem Velocity: 64.2% YoY</span>
        </div>
      </div>

      <div className="space-y-5 my-auto z-10">
        <div className="grid grid-cols-4 gap-5 h-[340px]">
          {pillars.map((p) => (
            <div key={p.id} className="plane-1-raised rounded-3xl p-5 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-2.5 border-b border-[var(--pres-border)]">
                  <span className="font-mono text-[14px] font-bold text-[var(--pres-accent)]">{p.activePartnerCount} Partners</span>
                  <span className="font-mono text-[14px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-beacon-pulse" /> Validated</span>
                </div>
                <h3 className="text-[18px] font-bold text-[var(--pres-text)] mt-3 mb-1">{p.pillarTitle}</h3>
                <div className="font-mono text-[26px] font-bold text-[var(--pres-text)] my-2 animate-sparkline-trace">${p.annualCoSellPipelineMillionUsd}M <span className="text-[14px] text-[var(--pres-text-muted)] font-normal">Pipeline</span></div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {(p.topPartnerNames || []).map((name, idx) => (
                    <span key={idx} className="font-mono text-[14px] px-2.5 py-0.5 rounded-md bg-[var(--pres-bg-card)] border border-[var(--pres-border)] text-[var(--pres-text)]">{name}</span>
                  ))}
                </div>
              </div>
              <div className="pt-2.5 border-t border-[var(--pres-border)] font-mono text-[14px] text-[var(--pres-text-muted)] flex items-center justify-between">
                <span>Joint GTM</span><span className="text-[var(--pres-accent)] font-semibold">Active Co-Sell</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-5">
          {metrics.map((m) => (
            <div key={m.id} className="plane-1-raised rounded-2xl p-4 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono">
              <div>
                <div className="text-[14px] text-[var(--pres-text-muted)]">{m.metricLabel}</div>
                <div className="text-[24px] font-bold text-[var(--pres-text)] mt-1">{m.metricValue}</div>
              </div>
              <div className="text-right">
                <span className="text-[14px] px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1"><Sparkles size={14} /> {m.growthPercentage}</span>
                <span className="text-[14px] text-[var(--pres-text-muted)] block mt-1">Exceeding Plan</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="plane-1-raised rounded-2xl p-4 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] z-10 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-mono text-[16px] text-emerald-600 dark:text-emerald-400"><CheckCircle2 size={18} /> Ecosystem Flywheel Accelerating</div>
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text)]"><ShieldCheck size={18} className="text-[var(--pres-accent)]" /> Hyperscaler Co-Sell Locked</div>
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text-muted)]"><Handshake size={18} /> Joint GTM Programs Authorized</div>
        </div>
        <div className="font-mono text-[14px] text-[var(--pres-text-muted)] border-l border-[var(--pres-border)] pl-6">
          Alliances Signoff: <span className="font-bold text-[var(--pres-text)]">Rachel Thorne, VP Global Alliances</span>
        </div>
      </div>
    </div>
  );
};
