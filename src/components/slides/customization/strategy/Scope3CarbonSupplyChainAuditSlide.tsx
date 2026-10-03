import React from 'react';
import { Leaf, ShieldCheck, Activity, Award } from 'lucide-react';
import type { Scope3CarbonSupplyChainAuditSlideData } from '../../../../types/customization/enterpriseStrategyTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { Scope3AuditCard } from './Scope3AuditCard';

export const Scope3CarbonSupplyChainAuditSlide: React.FC<{
  slide: Scope3CarbonSupplyChainAuditSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const storeStep = useDeckStore((s) => s.activeStep);
  const activeStep = slide.activeStep ?? storeStep ?? 1;
  const phases = slide.auditPhases || slide.stages || [];
  const cso = slide.chiefSustainabilityOfficer || 'Dr. Clara Hensley';

  const metrics = [
    { label: 'Baseline Emissions', val: `${slide.totalBaselineCo2eTons?.toLocaleString() || '145,000'} tCO2e`, icon: Leaf, color: 'text-emerald-700 dark:text-emerald-400' },
    { label: 'Current Year Carbon', val: `${slide.currentYearCo2eTons?.toLocaleString() || '118,000'} tCO2e`, icon: Activity, color: 'text-sky-700 dark:text-sky-400' },
    { label: 'CBAM Compliance', val: slide.isCbamCompliant ? 'Verified & Audited' : 'Pending Review', icon: Award, color: 'text-indigo-700 dark:text-indigo-400' },
    { label: 'Sensor Telemetry', val: slide.hasSensorTelemetry ? 'Active IoT Mesh' : 'Manual Intake', icon: ShieldCheck, color: 'text-violet-700 dark:text-violet-400' },
  ];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
            <Leaf size={13} /> {slide.kicker || 'ENTERPRISE ESG & SUSTAINABILITY'}
          </span>
          <span className="font-mono text-xs text-sky-700 dark:text-sky-400 bg-sky-500/10 px-3 py-0.5 rounded-full border border-sky-300 dark:border-sky-500/30">
            Fiscal Year: {slide.reportingFiscalYear || 'FY2026'}
          </span>
          <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
            <ShieldCheck size={12} /> CSO: {cso}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-4xl font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Scope 3 Carbon Supply Chain Audit & CBAM Compliance'}
        </h1>
        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-5xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
        >
          {slide.subtitle || 'Tier-1/2 supplier emissions ledger, activity carbon modeling, and CSRD readiness'}
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
        {phases.map((phase, idx) => (
          <Scope3AuditCard key={phase.id || idx} phase={phase} index={idx} isStepActive={activeStep === idx + 1} />
        ))}
      </div>

      <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-[var(--pres-border)]" style={{ color: 'var(--pres-text-muted)' }}>
        <span>GHG Protocol Corporate Value Chain Standard • CSRD Digital Product Passport Ready</span>
        <span>Independent Attestation: Big-4 Verified Carbon Ledger</span>
      </div>
    </div>
  );
};
