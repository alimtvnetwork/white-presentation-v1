// lint-allow: file-size reason="SovereignAiSiliconSupplyChainChokepointRadarSlide flat sovereign silicon radar" max=450
import React from 'react';
import type {
  SovereignAiSiliconSupplyChainChokepointRadarSlideData,
  SupplyChainChokepointNode,
  LithographyTierMetric,
} from '../../../types/suite2031Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Cpu,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Server,
  Layers,
  Radar,
  AlertTriangle,
  Factory,
  Globe,
  Clock,
} from 'lucide-react';

const DEF_CHOKEPOINTS: SupplyChainChokepointNode[] = [
  {
    id: 'cp-01',
    chokepointCategory: 'High-NA 0.55 EUV Optics & Multi-Layer Mirrors',
    globalMarketConcentrationPercentage: 98.0,
    leadTimeMonths: 24,
    geopoliticalRiskScore: 8.8,
    isSovereignAlternativeAvailable: false,
    hasStrategicStockpileSecured: true,
  },
  {
    id: 'cp-02',
    chokepointCategory: 'Advanced CoWoS Interposer High-Density Substrates',
    globalMarketConcentrationPercentage: 86.0,
    leadTimeMonths: 14,
    geopoliticalRiskScore: 7.4,
    isSovereignAlternativeAvailable: true,
    hasStrategicStockpileSecured: true,
  },
  {
    id: 'cp-03',
    chokepointCategory: 'Electronic-Grade 11N Ultra-Pure Monosilane Gas',
    globalMarketConcentrationPercentage: 92.0,
    leadTimeMonths: 8,
    geopoliticalRiskScore: 6.8,
    isSovereignAlternativeAvailable: true,
    hasStrategicStockpileSecured: true,
  },
  {
    id: 'cp-04',
    chokepointCategory: 'Extreme Deep-UV Fluorinated Photoresist Polymers',
    globalMarketConcentrationPercentage: 94.0,
    leadTimeMonths: 12,
    geopoliticalRiskScore: 8.1,
    isSovereignAlternativeAvailable: true,
    hasStrategicStockpileSecured: true,
  },
];

const DEF_LITHO_TIERS: LithographyTierMetric[] = [
  {
    id: 'tier-01',
    processNodeNm: '2nm GAA-FET (Nanosheet)',
    domesticYieldPercentage: 68.4,
    waferMonthlyStarts: 15000,
    hasCommercialViabilityAchieved: true,
  },
  {
    id: 'tier-02',
    processNodeNm: '3nm FinFET Advanced Logic',
    domesticYieldPercentage: 82.5,
    waferMonthlyStarts: 45000,
    hasCommercialViabilityAchieved: true,
  },
  {
    id: 'tier-03',
    processNodeNm: '5nm EUV Production Mainstay',
    domesticYieldPercentage: 94.2,
    waferMonthlyStarts: 120000,
    hasCommercialViabilityAchieved: true,
  },
];

export const SovereignAiSiliconSupplyChainChokepointRadarSlide: React.FC<{
  slide?: SovereignAiSiliconSupplyChainChokepointRadarSlideData;
  data?: SovereignAiSiliconSupplyChainChokepointRadarSlideData;
  activeStep?: number;
}> = ({ slide, data: propData }) => {
  const data = slide || propData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const chokepoints = data?.chokepointNodes?.length ? data.chokepointNodes : DEF_CHOKEPOINTS;
  const lithoTiers = data?.lithographyTiers?.length ? data.lithographyTiers : DEF_LITHO_TIERS;

  const clusterId = data?.radarClusterIdentifier || 'CHOKEPOINT-RADAR-GLOBAL-01';
  const selfSufficiencyPct = data?.sovereignSelfSufficiencyPercentage ?? 74.2;
  const chokepointsCount = data?.criticalChokepointsCount ?? 8;
  const isResilient = data?.isSupplyChainResilient ?? true;
  const hasDomesticFoundry = data?.hasDomesticFoundryOperational ?? true;
  const hasBuffer = data?.hasCriticalBufferMaintained ?? true;
  const hasGlow = data?.hasTelemetryGlow ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span
              style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.0rem)' }}
              className="font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2"
            >
              <Radar size={16} className="text-cyan-500" />
              {data?.kicker || 'GEOPOLITICAL STRATEGY & SILICON SOVEREIGNTY'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Server size={14} /> Radar: {clusterId}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              Self-Sufficiency: {selfSufficiencyPct.toFixed(1)}%
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Globe size={14} className="text-purple-500" />
              Monitored Chokepoints: {chokepointsCount} Vector Hubs
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Sovereign AI Silicon Supply Chain Chokepoint Radar'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Geopolitical risk analysis across High-NA EUV lithography, specialty gases, and advanced packaging.'}
          </p>
        </div>

        {/* Telemetry Hero Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Sovereign Index</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[28px] leading-tight">
              {selfSufficiencyPct.toFixed(1)}%
            </span>
          </div>
          <div className="w-[1px] h-10 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Strategic Stockpile</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[28px] leading-tight">
              18.5 Mo
            </span>
          </div>
          <div className="w-[1px] h-10 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold block text-[15px]">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
            <span className="text-[var(--pres-accent)] text-[14px]">
              {data?.leadRole || 'Chief Software Engineer'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[560px]">
        {/* Left Bento: Supply Chain Chokepoint Matrix & Geographic Concentration */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Cpu size={16} className="text-[var(--pres-accent)]" /> Global Silicon Supply Chokepoints & Geopolitical Risk
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Strategic Reserves Secured
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {chokepoints.map((cp) => {
                const hasAlternative = cp.isSovereignAlternativeAvailable;
                return (
                  <div
                    key={cp.id}
                    className="p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Radar size={16} className="text-cyan-500" />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{cp.chokepointCategory}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            hasAlternative
                              ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                              : 'bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/30'
                          }`}
                        >
                          {hasAlternative ? 'Domestic Alternative' : 'Single-Source Bottleneck'}
                        </span>
                        {cp.hasStrategicStockpileSecured && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Stockpiled
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-[14px] font-mono text-slate-600 dark:text-slate-400 mb-2 flex items-center gap-4">
                      <span>Lead Time: <strong className="text-slate-800 dark:text-slate-200">{cp.leadTimeMonths} Months</strong></span>
                      <span>•</span>
                      <span>Geopolitical Risk: <strong className="text-purple-700 dark:text-purple-400">{cp.geopoliticalRiskScore.toFixed(1)} / 10</strong></span>
                      <span>•</span>
                      <span>Market Concentration: <strong className="text-cyan-700 dark:text-cyan-400">{cp.globalMarketConcentrationPercentage.toFixed(0)}%</strong></span>
                    </div>

                    {/* Concentration Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[14px] font-mono text-slate-600 dark:text-slate-400">
                        <span>Global Market Concentration:</span>
                        <span className="font-bold text-purple-700 dark:text-purple-400">
                          {cp.globalMarketConcentrationPercentage.toFixed(1)}% Foreign Reliance
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 transition-all duration-500"
                          style={{ width: `${cp.globalMarketConcentrationPercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between text-[14px] font-mono text-slate-500 dark:text-slate-400">
            <span>Critical Strategic Buffer: 18.5 Months Supply Sealed in Climate-Controlled Vaults</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 size={14} /> Zero Foundry Interruption Risk
            </span>
          </div>
        </div>

        {/* Right Bento: Lithography Tiers & Domestic Foundry Independence */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Factory size={16} className="text-emerald-500" /> Domestic Lithography & Fab Starts
              </span>
              <span className="font-mono text-[14px] text-emerald-700 dark:text-emerald-400 font-bold">
                2nm Fab Commissioning
              </span>
            </div>

            <div className="space-y-3.5 mt-4 font-mono text-[14px]">
              {lithoTiers.map((tier) => (
                <div
                  key={tier.id}
                  className="p-3.5 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">
                      {tier.processNodeNm}
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                      {tier.domesticYieldPercentage.toFixed(1)}% Yield
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-500 dark:text-slate-400 text-[14px] mb-2">
                    <span>Monthly Wafer Starts:</span>
                    <span className="font-bold text-cyan-700 dark:text-cyan-400">
                      {tier.waferMonthlyStarts.toLocaleString()} WSPM
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                      style={{ width: `${tier.domesticYieldPercentage}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Supply Chain Resilience</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {isResilient ? 'Resilient (Multi-Sourced)' : 'Exposed'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Domestic Foundry Status</span>
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {hasDomesticFoundry ? 'Operational & Ramping' : 'Offline'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Critical Chemical Buffer</span>
                  <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                    <Layers size={16} /> {hasBuffer ? '18+ Months Strategic Vault' : 'Depleting'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-purple-500 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Sovereign silicon self-sufficiency index of {selfSufficiencyPct.toFixed(1)}% mitigates geopolitical export embargo risk.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div
        style={{ backdropFilter: 'blur(14px)' }}
        className={`plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-[14px] z-10 ${
          hasGlow ? 'shadow-cyan-500/10' : ''
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Sovereign Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Strategic Stockpiles Maintained | Domestic 2nm Fab Commissioning on Schedule | Independence Secured
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 Silicon Radar
          </span>
        </div>
      </div>
    </div>
  );
};

export default SovereignAiSiliconSupplyChainChokepointRadarSlide;
