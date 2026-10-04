// lint-allow: file-size reason="GeopoliticalSovereignCloudComplianceCompassSlide flat sovereign cloud compliance compass" max=420
import React from 'react';
import type {
  GeopoliticalSovereignCloudComplianceCompassSlideData,
  SovereignJurisdictionNode,
} from '../../../types/suite2028Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Globe,
  ShieldCheck,
  KeyRound,
  Lock,
  CheckCircle2,
  Calendar,
  Sparkles,
  Zap,
  Layers,
  FileCheck2,
  Radio,
  Server,
} from 'lucide-react';

const DEF_JURISDICTIONS: SovereignJurisdictionNode[] = [
  {
    id: 'jur-eu',
    jurisdictionRegion: 'European Union (NIS2 / EU Cloud)',
    regulatoryFramework: 'NIS2 Directive / EU Cloud Act / GDPR',
    dataResidencyCompliancePercentage: 100.0,
    keyManagementModel: 'Customer Held Keys (HYOK)',
    auditReadinessStatus: 'Audit Certified',
    isDataSovereigntyEnforced: true,
    hasCustomerKeyControl: true,
  },
  {
    id: 'jur-us',
    jurisdictionRegion: 'United States (FedRAMP High / DoD)',
    regulatoryFramework: 'FedRAMP High / DoD IL5 / CJIS',
    dataResidencyCompliancePercentage: 100.0,
    keyManagementModel: 'Customer Held Keys (HYOK)',
    auditReadinessStatus: 'Continuous Conformance',
    isDataSovereigntyEnforced: true,
    hasCustomerKeyControl: true,
  },
  {
    id: 'jur-apac',
    jurisdictionRegion: 'Asia-Pacific (APRA CPS 234 / PDPA)',
    regulatoryFramework: 'APRA CPS 234 / Singapore PDPA',
    dataResidencyCompliancePercentage: 100.0,
    keyManagementModel: 'Customer Held Keys (HYOK)',
    auditReadinessStatus: 'Audit Certified',
    isDataSovereigntyEnforced: true,
    hasCustomerKeyControl: true,
  },
  {
    id: 'jur-me',
    jurisdictionRegion: 'Middle East (NESA / SAMA Data)',
    regulatoryFramework: 'NESA / SAMA Sovereign Data Framework',
    dataResidencyCompliancePercentage: 100.0,
    keyManagementModel: 'Customer Held Keys (HYOK)',
    auditReadinessStatus: 'Audit Certified',
    isDataSovereigntyEnforced: true,
    hasCustomerKeyControl: true,
  },
];

export const GeopoliticalSovereignCloudComplianceCompassSlide: React.FC<{
  slide?: GeopoliticalSovereignCloudComplianceCompassSlideData;
  data?: GeopoliticalSovereignCloudComplianceCompassSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const jurisdictions = data?.jurisdictions?.length ? data.jurisdictions : DEF_JURISDICTIONS;
  const complianceScore = data?.blendedSovereigntyComplianceScore ?? 99.8;
  const coveredCount = data?.jurisdictionsCoveredCount ?? 42;

  const hasAirGapped = data?.hasAirGappedControlPlane ?? true;
  const hasZeroForeign = data?.hasZeroForeignJurisdictionAccess ?? true;
  const hasContinuousAudit = data?.hasContinuousAuditAutomation ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <Globe size={16} className="text-indigo-500" />
              {data?.kicker || 'GEOPOLITICAL SOVEREIGNTY & GLOBAL GOVERNANCE'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Calendar size={14} /> Blueprint: {data?.governanceYear || '2026-2028 Sovereign Blueprint'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              Compliance: {complianceScore.toFixed(1)}% (Global Audit)
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Geopolitical Sovereign Cloud Compliance Compass'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Multi-jurisdiction cloud sovereignty, customer-held encryption keys (HYOK), air-gapped isolation, and zero foreign access.'}
          </p>
        </div>

        {/* Executive Metric Badge Strip */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Sovereignty Score</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {complianceScore.toFixed(1)}% Audited
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Jurisdictions</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[18px]">
              {coveredCount} Sovereign Regions
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Topline KPI Strip (4 Cards) */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Compliance Score</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">{complianceScore.toFixed(1)}%</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Global Jurisdictions</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[22px]">{coveredCount} Regions</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Globe size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Key Ownership</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[22px]">100% HYOK Held</span>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <KeyRound size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Foreign Access Deflected</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">100% Deflected</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Lock size={24} />
          </div>
        </div>
      </div>

      {/* Main Multi-Jurisdiction Bento Compass Grid (4 Cards) */}
      <div className="grid grid-cols-2 gap-6 z-10 my-auto items-stretch h-[540px]">
        {jurisdictions.map((jur) => {
          return (
            <div
              key={jur.id}
              className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl hover:-translate-y-0.5 hover:border-[var(--pres-accent)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <div className="flex items-center gap-3">
                    <Globe size={20} className="text-[var(--pres-accent)]" />
                    <span className="font-bold text-slate-900 dark:text-white text-[18px]">
                      {jur.jurisdictionRegion}
                    </span>
                  </div>
                  <span className="text-[14px] font-mono font-bold px-3 py-1 rounded bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                    {jur.auditReadinessStatus}
                  </span>
                </div>

                <div className="mt-4 font-mono text-[14px] text-slate-600 dark:text-slate-300">
                  <span className="text-slate-500 dark:text-slate-400 uppercase block text-[13px]">Regulatory Framework</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">{jur.regulatoryFramework}</span>
                </div>

                {/* Data Residency Progress Gauge */}
                <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 font-mono text-[14px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-500 dark:text-slate-400">Data Residency Guarantee</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[16px]">
                      {jur.dataResidencyCompliancePercentage.toFixed(0)}% Local In-Territory
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-700"
                      style={{ width: `${jur.dataResidencyCompliancePercentage}%` }}
                    />
                  </div>
                </div>

                {/* Key Management Architecture */}
                <div className="mt-3.5 space-y-2.5 font-mono text-[14px]">
                  <div className="flex items-center justify-between p-2.5 px-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <KeyRound size={15} className="text-cyan-500" /> Key Management Model
                    </span>
                    <span className="font-bold text-cyan-600 dark:text-cyan-400">
                      {jur.keyManagementModel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 px-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-500" /> Sovereignty Enforcement
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 size={14} /> Strict Air-Gapped Plane
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  Audit: Conformance Confirmed
                </span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                  Zero Foreign Subpoena Risk
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Sovereignty Assurance:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <ShieldCheck size={18} /> Cross-Border Foreign Warrants Deflected: 100% | Operational Independence Verified
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1.5">
            <Globe size={16} /> Suite 2028 Sovereign Cloud Compass
          </span>
        </div>
      </div>
    </div>
  );
};
