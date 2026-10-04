// lint-allow: file-size reason="GlobalSovereignCloudGeopoliticalRiskMatrixSlide flat sovereign cloud geopolitical risk matrix" max=420
import React from 'react';
import type {
  GlobalSovereignCloudGeopoliticalRiskMatrixSlideData,
  SovereignCloudJurisdiction,
} from '../../../types/suite2029Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Globe2,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Building2,
  Zap,
  Radio,
  FileCheck2,
  Scale,
  Server,
  KeyRound,
  Layers,
} from 'lucide-react';

const DEF_JURISDICTIONS: SovereignCloudJurisdiction[] = [
  {
    id: 'jur-eu',
    regionName: 'European Union (Frankfurt / Paris)',
    sovereigntyIndexScore: 98.4,
    extraterritorialShieldingLevel: 'Complete',
    isKeyLocalizationEnforced: true,
    isAirGappedPartitionAvailable: true,
    hasLocalOperationsMandate: true,
  },
  {
    id: 'jur-ch',
    regionName: 'Switzerland Sovereign Vault (Zurich)',
    sovereigntyIndexScore: 99.2,
    extraterritorialShieldingLevel: 'Complete',
    isKeyLocalizationEnforced: true,
    isAirGappedPartitionAvailable: true,
    hasLocalOperationsMandate: true,
  },
  {
    id: 'jur-us-gov',
    regionName: 'US FedRAMP High (GovCloud US-East)',
    sovereigntyIndexScore: 96.0,
    extraterritorialShieldingLevel: 'Complete',
    isKeyLocalizationEnforced: true,
    isAirGappedPartitionAvailable: true,
    hasLocalOperationsMandate: true,
  },
  {
    id: 'jur-sg',
    regionName: 'Singapore Financial Mesh (SG-Central)',
    sovereigntyIndexScore: 94.6,
    extraterritorialShieldingLevel: 'High',
    isKeyLocalizationEnforced: true,
    isAirGappedPartitionAvailable: true,
    hasLocalOperationsMandate: true,
  },
  {
    id: 'jur-gcc',
    regionName: 'GCC Sovereign Cloud (Riyadh / Dubai)',
    sovereigntyIndexScore: 92.8,
    extraterritorialShieldingLevel: 'High',
    isKeyLocalizationEnforced: true,
    isAirGappedPartitionAvailable: true,
    hasLocalOperationsMandate: true,
  },
  {
    id: 'jur-uk',
    regionName: 'UK Sovereign Grid (London / Manchester)',
    sovereigntyIndexScore: 93.5,
    extraterritorialShieldingLevel: 'High',
    isKeyLocalizationEnforced: true,
    isAirGappedPartitionAvailable: true,
    hasLocalOperationsMandate: true,
  },
];

export const GlobalSovereignCloudGeopoliticalRiskMatrixSlide: React.FC<{
  slide?: GlobalSovereignCloudGeopoliticalRiskMatrixSlideData;
  data?: GlobalSovereignCloudGeopoliticalRiskMatrixSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const jurisdictions = data?.jurisdictions?.length ? data.jurisdictions : DEF_JURISDICTIONS;
  const count = data?.evaluatedJurisdictionsCount ?? jurisdictions.length;
  const avgScore = data?.averageSovereigntyScore ?? 95.8;
  const fisaShielding = data?.fisaShieldingEnforcedPercentage ?? 100;

  const isSovereigntyCompliant = data?.isSovereigntyCompliant ?? true;
  const hasZeroForeignAccess = data?.hasZeroForeignAccessEscrow ?? true;
  const hasNationalKeys = data?.hasNationalKeyManagement ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Globe2 size={16} className="text-cyan-500" />
              {data?.kicker || 'GEOPOLITICAL SOVEREIGNTY & CLOUD RISK'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              Compliance: {isSovereigntyCompliant ? 'Fully Certified' : 'In Review'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Scale size={14} /> CLOUD Act / NIS2 / HYOK Enforced
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <KeyRound size={14} /> National Key Management: {hasNationalKeys ? 'Isolated HSM' : 'Shared'}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Global Sovereign Cloud Geopolitical Risk Matrix'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Multi-jurisdictional risk evaluation neutralizing extraterritorial subpoena exposure (US CLOUD Act/FISA 702) via Hold-Your-Own-Key (HYOK) and air-gapped enclaves.'}
          </p>
        </div>

        {/* Top-Right Executive Metric Badge */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Avg Sovereignty</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
              {avgScore.toFixed(1)} / 100
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">FISA Shielding</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
              {fisaShielding.toFixed(0)}% Complete
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
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Jurisdictions</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[22px]">{count} Sovereign Zones</span>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Globe2 size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Average Sovereignty</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">{avgScore.toFixed(1)} / 100</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Foreign Access Escrow</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[22px]">
              {hasZeroForeignAccess ? 'Zero Foreign Access' : 'Conditional'}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Lock size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Key Custody (HYOK)</span>
            <span className="text-amber-600 dark:text-amber-400 font-bold text-[22px]">100% In-Country HSM</span>
          </div>
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <KeyRound size={24} />
          </div>
        </div>
      </div>

      {/* Main 6-Jurisdiction Bento Grid */}
      <div className="grid grid-cols-3 gap-5 z-10 my-auto items-stretch h-[540px]">
        {jurisdictions.map((jur) => {
          return (
            <div
              key={jur.id}
              className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-5 flex flex-col justify-between shadow-xl hover:-translate-y-0.5 hover:border-[var(--pres-accent)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <div className="flex items-center gap-2">
                    <Building2 size={18} className="text-cyan-500" />
                    <span className="font-bold text-slate-900 dark:text-white text-[16px] leading-tight">
                      {jur.regionName}
                    </span>
                  </div>
                  <span className="text-[14px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                    {jur.extraterritorialShieldingLevel} Shield
                  </span>
                </div>

                <div className="mt-4 flex items-baseline justify-between font-mono">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase">Sovereignty Score</span>
                    <div className="text-[34px] font-black tracking-tight text-slate-900 dark:text-white leading-none mt-1">
                      {jur.sovereigntyIndexScore.toFixed(1)}
                      <span className="text-[18px] font-semibold text-slate-400 ml-1">/ 100</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase">Key Localization</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
                      {jur.isKeyLocalizationEnforced ? 'Enforced' : 'Shared'}
                    </span>
                  </div>
                </div>

                {/* Score Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                      style={{ width: `${jur.sovereigntyIndexScore}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 font-mono text-[14px]">
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                    <span>Air-Gapped Partition:</span>
                    <span className="font-bold text-cyan-600 dark:text-cyan-400">
                      {jur.isAirGappedPartitionAvailable ? 'Available & Active' : 'Not Required'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                    <span>Local Citizen Ops:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      {jur.hasLocalOperationsMandate ? '100% Cleared Citizens' : 'Global Ops'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
                <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-500" />
                  CLOUD Act Immuntiy: Active
                </span>
                <span className="text-[var(--pres-accent)] font-bold">HYOK Certified</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Sovereign Assurance:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <ShieldCheck size={18} /> Zero Subpoena Vulnerability | Independent National Key Escrow | Complete Jurisdictional Isolation
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
            <Globe2 size={16} /> Suite 2029 Sovereign Matrix
          </span>
        </div>
      </div>
    </div>
  );
};
