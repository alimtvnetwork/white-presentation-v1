import React from 'react';
import { Globe, ShieldCheck, Scale, FileText } from 'lucide-react';
import type { TransferPricingTaxTopologySlideData } from '../../../../types/customization/sovereignTelemetryTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { JurisdictionTaxCard } from './JurisdictionTaxCard';

export const TransferPricingTaxTopologySlide: React.FC<{
  slide: TransferPricingTaxTopologySlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const storeStep = useDeckStore((s) => s.activeStep);
  const activeStep = slide.activeStep ?? storeStep ?? 1;
  const nodes = slide.jurisdictionTaxNodes || [];
  const taxCounsel = slide.taxCounselPartner || 'Clifford Chance LLP';

  const metrics = [
    { label: 'Global Effective Tax Rate', val: `${slide.globalEffectiveTaxRatePercentage || 16.2}% ETR`, icon: Globe, color: 'text-emerald-700 dark:text-emerald-400' },
    { label: 'OECD Pillar 2 Floor', val: `${slide.statutoryPillar2MinRatePercentage || 15.0}% Min`, icon: Scale, color: 'text-sky-700 dark:text-sky-400' },
    { label: 'Arms-Length Standard', val: slide.hasArmsLengthPricing ? 'Verified & Benchmarked' : 'In Calibration', icon: ShieldCheck, color: 'text-indigo-700 dark:text-indigo-400' },
    { label: 'Audit Defensibility', val: slide.isAuditDefensible ? 'Big-4 Opinion Active' : 'Pending Review', icon: FileText, color: 'text-violet-700 dark:text-violet-400' },
  ];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
            <Globe size={13} /> {slide.kicker || 'GLOBAL TRANSFER PRICING LEDGER'}
          </span>
          <span className="font-mono text-xs text-sky-700 dark:text-sky-400 bg-sky-500/10 px-3 py-0.5 rounded-full border border-sky-300 dark:border-sky-500/30">
            HQ: {slide.headquartersJurisdiction || 'Dublin, Ireland'}
          </span>
          <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
            <ShieldCheck size={12} /> Tax Counsel: {taxCounsel}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-4xl font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Transfer Pricing Tax Topology'}
        </h1>
        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-5xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
        >
          {slide.subtitle || 'OECD BEPS Pillar 2 statutory tax harmonization and cross-border IP valuation'}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto">
        {metrics.map((m, idx) => (
          <div key={idx} className="plane-1-raised rounded-xl border border-[var(--pres-border)] p-3.5 flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg bg-emerald-500/10 ${m.color} flex items-center justify-center font-bold`}>
              <m.icon size={18} />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase" style={{ color: 'var(--pres-text-muted)' }}>{m.label}</div>
              <div className={`text-lg font-bold font-mono ${m.color}`}>{m.val}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-6 h-[460px] items-stretch">
        {nodes.map((node, idx) => (
          <JurisdictionTaxCard key={node.id || idx} node={node} index={idx} isStepActive={activeStep === idx + 1} />
        ))}
      </div>

      <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-[var(--pres-border)]" style={{ color: 'var(--pres-text-muted)' }}>
        <span>OECD BEPS Pillar 2 Global Anti-Base Erosion Rules (GloBE) Model Compliant</span>
        <span>Intercompany Master File & Local File Documentation Synchronized</span>
      </div>
    </div>
  );
};
