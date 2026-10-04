// lint-allow: file-size reason="FinopsUnitEconomicsCommandDeckSlide flat sovereign finops unit economics command deck" max=420
import React from 'react';
import type {
  FinopsUnitEconomicsCommandDeckSlideData,
  GpuClusterUnitCost,
} from '../../../types/suite2029Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  DollarSign,
  TrendingDown,
  TrendingUp,
  Cpu,
  Server,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Radio,
  Layers,
  Percent,
  BarChart3,
  Clock,
} from 'lucide-react';

const DEF_POOLS: GpuClusterUnitCost[] = [
  {
    id: 'pool-h100',
    hardwarePool: 'NVIDIA H100 SXM5 80GB (Frontier Inference)',
    utilizationEfficiencyPercentage: 96.2,
    costPerMillionTokensUsd: 0.28,
    spotArbitrageSavingsPercentage: 42.5,
    isTargetEfficiencyAchieved: true,
    hasAutoDownscalingActive: true,
  },
  {
    id: 'pool-b200',
    hardwarePool: 'NVIDIA B200 Blackwell (Dense MoE Engines)',
    utilizationEfficiencyPercentage: 94.8,
    costPerMillionTokensUsd: 0.19,
    spotArbitrageSavingsPercentage: 48.0,
    isTargetEfficiencyAchieved: true,
    hasAutoDownscalingActive: true,
  },
  {
    id: 'pool-tpu',
    hardwarePool: 'Google Cloud TPU v5e (Distillation & Batch)',
    utilizationEfficiencyPercentage: 98.1,
    costPerMillionTokensUsd: 0.08,
    spotArbitrageSavingsPercentage: 54.2,
    isTargetEfficiencyAchieved: true,
    hasAutoDownscalingActive: true,
  },
  {
    id: 'pool-mi300x',
    hardwarePool: 'AMD Instinct MI300X (Sovereign Open SLMs)',
    utilizationEfficiencyPercentage: 93.4,
    costPerMillionTokensUsd: 0.14,
    spotArbitrageSavingsPercentage: 38.6,
    isTargetEfficiencyAchieved: true,
    hasAutoDownscalingActive: true,
  },
];

export const FinopsUnitEconomicsCommandDeckSlide: React.FC<{
  slide?: FinopsUnitEconomicsCommandDeckSlideData;
  data?: FinopsUnitEconomicsCommandDeckSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const pools = data?.gpuPools?.length ? data.gpuPools : DEF_POOLS;
  const blendedCost = data?.blendedCostPerMillionTokensUsd ?? 0.18;
  const utilization = data?.gpuClusterUtilizationPercentage ?? 95.6;
  const savingsMillion = data?.monthlyArbitrageSavingsMillionUsd ?? 1.42;
  const margin = data?.grossMarginPercentage ?? 78.4;

  const isTargetMarginAchieved = data?.isTargetMarginAchieved ?? true;
  const hasSpotArbitrage = data?.hasSpotArbitrageEnabled ?? true;
  const hasDownscaling = data?.hasAutomatedDownscaling ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <DollarSign size={16} className="text-emerald-500" />
              {data?.kicker || 'AI INFRASTRUCTURE FINOPS & UNIT ECONOMICS'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <TrendingUp size={14} className="text-cyan-500" />
              Gross Margin: {margin.toFixed(1)}% ({isTargetMarginAchieved ? 'Target Met' : 'Below Target'})
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Zap size={14} /> Spot Arbitrage: {hasSpotArbitrage ? 'Autonomous Engine Active' : 'Off'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <TrendingDown size={14} className="text-indigo-500" /> Auto-Downscaling: {hasDownscaling ? 'Zero Idle Leaks' : 'Manual'}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'FinOps Unit Economics Command Deck'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Real-time GPU cluster cost attribution, token unit economics, spot arbitrage yield, and sustained 78%+ SaaS infrastructure gross margins.'}
          </p>
        </div>

        {/* Top-Right Executive Metric Badge */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Blended Cost</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
              ${blendedCost.toFixed(2)} / 1M Tokens
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Cluster Util</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
              {utilization.toFixed(1)}% Eff
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
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Cost / Million Tokens</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">${blendedCost.toFixed(2)} USD</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <DollarSign size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">GPU Cluster Efficiency</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[22px]">{utilization.toFixed(1)}% Util</span>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Cpu size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Monthly Spot Savings</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[22px]">${savingsMillion.toFixed(2)}M / Mo</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <TrendingDown size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">SaaS Gross Margin</span>
            <span className="text-amber-600 dark:text-amber-400 font-bold text-[22px]">{margin.toFixed(1)}% Margin</span>
          </div>
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <TrendingUp size={24} />
          </div>
        </div>
      </div>

      {/* Main 4-Pool Bento Grid */}
      <div className="grid grid-cols-2 gap-5 z-10 my-auto items-stretch h-[540px]">
        {pools.map((pool) => {
          return (
            <div
              key={pool.id}
              className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl hover:-translate-y-0.5 hover:border-[var(--pres-accent)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <div className="flex items-center gap-2">
                    <Server size={20} className="text-emerald-500" />
                    <span className="font-bold text-slate-900 dark:text-white text-[18px] leading-tight">
                      {pool.hardwarePool}
                    </span>
                  </div>
                  <span className="text-[14px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                    {pool.isTargetEfficiencyAchieved ? 'Target Met' : 'Optimizing'}
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 font-mono">
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-[var(--pres-border)]">
                    <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase mb-1">
                      Cost per 1M Tokens
                    </span>
                    <div className="text-[32px] font-black tracking-tight text-emerald-600 dark:text-emerald-400 leading-none">
                      ${pool.costPerMillionTokensUsd.toFixed(2)}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-[var(--pres-border)]">
                    <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase mb-1">
                      Spot Savings Yield
                    </span>
                    <div className="text-[32px] font-black tracking-tight text-cyan-600 dark:text-cyan-400 leading-none">
                      {pool.spotArbitrageSavingsPercentage.toFixed(1)}%
                    </div>
                  </div>
                </div>

                {/* Utilization Progress Bar */}
                <div className="mt-5">
                  <div className="flex items-baseline justify-between font-mono mb-2">
                    <span className="text-slate-500 dark:text-slate-400 text-[14px] uppercase">
                      Cluster Utilization Rate
                    </span>
                    <span className="text-slate-900 dark:text-white font-bold text-[18px]">
                      {pool.utilizationEfficiencyPercentage.toFixed(1)}%
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-700"
                      style={{ width: `${pool.utilizationEfficiencyPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
                <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  Dynamic Downscale: {pool.hasAutoDownscalingActive ? 'Active' : 'Standby'}
                </span>
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                  Zero Idle Leakage
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">FinOps Governance:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <ShieldCheck size={18} /> Automated Spot Eviction Protection | Zero Cloud Spend Surprises | 78.4% Blended Margin
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
            <DollarSign size={16} /> Suite 2029 FinOps Command
          </span>
        </div>
      </div>
    </div>
  );
};
