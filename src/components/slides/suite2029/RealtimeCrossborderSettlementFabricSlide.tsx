// lint-allow: file-size reason="RealtimeCrossborderSettlementFabricSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  RealtimeCrossborderSettlementFabricSlideData,
  SettlementStage,
  CurrencySettlementPair,
} from '../../../types/suite2029Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Coins,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Activity,
  ArrowRight,
  Globe2,
  Lock,
  Layers,
  Zap,
  Building2,
  Scale,
} from 'lucide-react';

const DEF_STAGES: SettlementStage[] = [
  {
    stepIndex: 0,
    stageName: 'ISO 20022 pacs.008 Remittance Ingestion',
    stageSubtitle: 'Real-time schema validation and sanctions pre-screening against international AML registers',
    settlementLatencySec: 0.4,
    complianceChecksPassed: 18,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Bilateral PvP Escrow & Liquidity Allocation',
    stageSubtitle: 'Payment-versus-Payment multi-currency liquidity locked into programmable escrow accounts',
    settlementLatencySec: 0.8,
    complianceChecksPassed: 24,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Cross-Corridor Atomic Netting & RTGS Sync',
    stageSubtitle: 'Atomic gross settlement synchronized between correspondent central bank RTGS gateways',
    settlementLatencySec: 1.2,
    complianceChecksPassed: 32,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Final Irrevocable Credit & pacs.002 Status',
    stageSubtitle: 'Atomic beneficiary balance crediting with cryptographic finality and confirmation reporting',
    settlementLatencySec: 0.6,
    complianceChecksPassed: 36,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_PAIRS: CurrencySettlementPair[] = [
  {
    id: 'corridor-usd-eur',
    sourceCurrency: 'USD',
    targetCurrency: 'EUR',
    exchangeRate: 0.9245,
    liquidityReserveMillion: 1450.0,
    isEscrowLocked: true,
    hasInstantSettlementReady: true,
  },
  {
    id: 'corridor-usd-sgd',
    sourceCurrency: 'USD',
    targetCurrency: 'SGD',
    exchangeRate: 1.3412,
    liquidityReserveMillion: 820.0,
    isEscrowLocked: true,
    hasInstantSettlementReady: true,
  },
  {
    id: 'corridor-eur-gbp',
    sourceCurrency: 'EUR',
    targetCurrency: 'GBP',
    exchangeRate: 0.854,
    liquidityReserveMillion: 640.0,
    isEscrowLocked: true,
    hasInstantSettlementReady: true,
  },
  {
    id: 'corridor-usd-jpy',
    sourceCurrency: 'USD',
    targetCurrency: 'JPY',
    exchangeRate: 154.2,
    liquidityReserveMillion: 1120.0,
    isEscrowLocked: true,
    hasInstantSettlementReady: true,
  },
];

export const RealtimeCrossborderSettlementFabricSlide: React.FC<{
  slide?: RealtimeCrossborderSettlementFabricSlideData;
  data?: RealtimeCrossborderSettlementFabricSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.settlementStages?.length ? data.settlementStages : DEF_STAGES;
  const pairs = data?.currencyPairs?.length ? data.currencyPairs : DEF_PAIRS;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const hasAtomic = data?.isAtomicSettlementGuaranteed ?? true;
  const hasIso = data?.hasIso20022Compliance ?? true;
  const hasPvp = data?.hasPvpEscrowActive ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Globe2 size={16} className="text-cyan-500" />
              {data?.kicker || 'GLOBAL WHOLESALE PAYMENTS & ATOMIC PVP FABRIC'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Building2 size={14} /> Fabric: {data?.fabricIdentifier || 'settle-pvp-v8-apex'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Coins size={14} className="text-emerald-500" />
              Daily Volume: ${data?.dailyVolumeBillionUsd ?? 48.5}B USD
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <Zap size={14} className="text-indigo-500" />
              Settlement Speed: {data?.settlementSpeedSeconds ?? 3.0}s T+0
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Real-Time Cross-Border Settlement Fabric'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'ISO 20022 atomic Payment-versus-Payment (PvP) settlement, bilateral liquidity escrow, and multi-currency RTGS netting.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Phase Latency</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.settlementLatencySec.toFixed(1)} s
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Compliance Gates</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.complianceChecksPassed} Verified
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

      {/* Kinetic 4-Step Nav Rail */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;

          return (
            <button
              key={st.stepIndex}
              onClick={() => jumpToStep(idx)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${
                isActive
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold animate-kinetic-step-reveal'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-75'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-[0.38] blur-[1.25px] text-slate-500 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[14px] ${
                    isActive
                      ? 'bg-[var(--pres-accent)] text-white'
                      : isCompleted
                      ? 'bg-emerald-500 text-white dark:text-slate-900'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {isCompleted ? '✓' : idx + 1}
                </span>
                <div>
                  <div className="font-bold leading-tight">{st.stageName}</div>
                  <div className="text-[14px] opacity-75 font-normal">
                    {st.settlementLatencySec}s | {st.complianceChecksPassed} compliance checks passed
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                Step {idx + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Currency Settlement Corridors */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Scale size={16} className="text-[var(--pres-accent)]" /> Active PvP Corridors & Escrow Liquidity Reserves
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {pairs.map((pair, pIdx) => {
                const isCurrentLayer = pIdx === currentStep || (currentStep >= 2 && pIdx >= 2);
                return (
                  <div
                    key={pair.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Coins size={16} className={isCurrentLayer ? 'text-[var(--pres-accent)]' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {pair.sourceCurrency} / {pair.targetCurrency}
                        </span>
                        <div className="flex items-center gap-1 text-[14px] font-bold px-2 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                          <span>Rate: {pair.exchangeRate.toFixed(4)}</span>
                        </div>
                        {pair.isEscrowLocked && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <Lock size={12} /> Escrow Locked
                          </span>
                        )}
                        {pair.hasInstantSettlementReady && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <Zap size={12} /> PvP Ready
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          Liquidity: ${pair.liquidityReserveMillion.toFixed(0)}M
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>Atomic Finality: 100%</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isCurrentLayer ? 'bg-[var(--pres-accent)]' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${Math.min(100, (pair.liquidityReserveMillion / 1500) * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Herstatt Counterparty Risk: Completely Eliminated (0.00%)</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Legal Finality Guaranteed
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Building2 size={16} className="text-cyan-500" />
              Correspondent Banking Mesh: Direct RTGS Settlement Links (Fedwire, TARGET2, MEPS+)
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Sub-3.0 Second Global Settlement Complete
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Verification */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Settlement Workflow
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[14px] border border-emerald-500/30">
                Phase {currentStep + 1} Active
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <h3 className="text-[20px] font-ubuntu font-bold text-slate-900 dark:text-white mb-1">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeStage.stageSubtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-[14px]">
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Execution Speed</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.settlementLatencySec.toFixed(1)} s
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Compliance Checks</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.complianceChecksPassed} Passed
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Atomic Settlement Guarantee</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasAtomic ? 'Cryptographic Hash-Lock (HTLC)' : 'Standard Transfer'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">ISO 20022 Compliance</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasIso ? 'Universal XML Format Enforced' : 'Legacy MT103'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">PvP Escrow Mechanism</span>
                <span className="font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1">
                  <Lock size={16} /> {hasPvp ? 'Zero Counterparty Risk Active' : 'Uncollateralized'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Delivers wholesale cross-border liquidity without multi-day settlement traps.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Runtime Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Atomic PvP Finality Verified | Zero Counterparty Herstatt Risk | ISO 20022 Schema Validated
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2029 Settlement Fabric
          </span>
        </div>
      </div>
    </div>
  );
};

export default RealtimeCrossborderSettlementFabricSlide;
