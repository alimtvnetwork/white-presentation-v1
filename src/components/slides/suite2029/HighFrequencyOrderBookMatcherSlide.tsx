// lint-allow: file-size reason="HighFrequencyOrderBookMatcherSlide kinetic 4-step FPGA L3 order book matching engine" max=450
import React from 'react';
import type {
  HighFrequencyOrderBookMatcherSlideData,
  MatchingStage,
  OrderBookLevel,
} from '../../../types/suite2029Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Zap,
  Cpu,
  Activity,
  ArrowRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Radio,
  Layers,
  TrendingUp,
  TrendingDown,
  Server,
  BarChart3,
  Network,
} from 'lucide-react';

const DEF_STAGES: MatchingStage[] = [
  {
    stepIndex: 0,
    stageName: 'FPGA Pre-Trade Risk & Margin Gate',
    stageSubtitle: 'Sub-15ns hardware gate checking margin limits, price band thresholds, and order rate throttles',
    tickLatencyNanoseconds: 14,
    ordersProcessedPerSec: 12500000,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Deterministic L3 Order Book Matching',
    stageSubtitle: 'In-memory lockless order queue executing strict price-time priority fills and cancellations',
    tickLatencyNanoseconds: 48,
    ordersProcessedPerSec: 9800000,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Atomic Trade Journaling & State Sync',
    stageSubtitle: 'Hardware-accelerated NVMe ring buffer and zero-copy journal commit to standby matching core',
    tickLatencyNanoseconds: 82,
    ordersProcessedPerSec: 8500000,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Kernel-Bypass Multicast Tick Fan-Out',
    stageSubtitle: 'Solarflare EF_VI raw Ethernet multicast tick dissemination to collocated market makers',
    tickLatencyNanoseconds: 120,
    ordersProcessedPerSec: 15000000,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_BOOK_LEVELS: OrderBookLevel[] = [
  // Asks (Sells) - Ascending price
  { id: 'ask-4', side: 'ask', price: 98452.50, quantityLots: 142.80, orderCount: 38, isInsideMarket: false, hasActiveExecution: false },
  { id: 'ask-3', side: 'ask', price: 98452.00, quantityLots: 96.40, orderCount: 27, isInsideMarket: false, hasActiveExecution: false },
  { id: 'ask-2', side: 'ask', price: 98451.50, quantityLots: 64.10, orderCount: 19, isInsideMarket: false, hasActiveExecution: false },
  { id: 'ask-1', side: 'ask', price: 98451.00, quantityLots: 28.50, orderCount: 8, isInsideMarket: true, hasActiveExecution: true },
  // Bids (Buys) - Descending price
  { id: 'bid-1', side: 'bid', price: 98450.50, quantityLots: 32.20, orderCount: 11, isInsideMarket: true, hasActiveExecution: true },
  { id: 'bid-2', side: 'bid', price: 98450.00, quantityLots: 78.60, orderCount: 24, isInsideMarket: false, hasActiveExecution: false },
  { id: 'bid-3', side: 'bid', price: 98449.50, quantityLots: 112.30, orderCount: 33, isInsideMarket: false, hasActiveExecution: false },
  { id: 'bid-4', side: 'bid', price: 98449.00, quantityLots: 165.70, orderCount: 45, isInsideMarket: false, hasActiveExecution: false },
];

export const HighFrequencyOrderBookMatcherSlide: React.FC<{
  slide?: HighFrequencyOrderBookMatcherSlideData;
  data?: HighFrequencyOrderBookMatcherSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.matchingStages?.length ? data.matchingStages : DEF_STAGES;
  const bookLevels = data?.bookLevels?.length ? data.bookLevels : DEF_BOOK_LEVELS;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const tradingPair = data?.tradingPair || 'BTC/USD-PERP';
  const engineInstance = data?.engineInstance || 'FPGA-CORE-ORD-01 (Xilinx UltraScale+ VU9P)';
  const p99LatencyNs = data?.p99LatencyNanoseconds ?? 142;

  const isFpgaAccelerated = data?.isFpgaAccelerated ?? true;
  const hasZeroSlippage = data?.hasZeroSlippageExecution ?? true;
  const hasMulticast = data?.hasMulticastDissemination ?? true;

  const asks = bookLevels.filter((lvl) => lvl.side === 'ask');
  const bids = bookLevels.filter((lvl) => lvl.side === 'bid');
  const maxQty = Math.max(...bookLevels.map((lvl) => lvl.quantityLots), 200);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 flex items-center gap-2">
              <Zap size={16} className="text-amber-500" />
              {data?.kicker || 'HIGH-FREQUENCY TRADING & ULTRA-LOW LATENCY'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Cpu size={14} /> {engineInstance}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-500" />
              Pair: {tradingPair}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Clock size={14} className="text-cyan-500" />
              P99 Tick Latency: {p99LatencyNs}ns
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'High-Frequency Order Book Matcher'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Sub-150ns FPGA tick-to-trade architecture: pre-trade hardware risk checks, lockless L3 matching, and kernel-bypass multicast.'}
          </p>
        </div>

        {/* Top-Right Executive Metric Badge */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Tick Latency</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
              {activeStage.tickLatencyNanoseconds} ns
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Throughput</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
              {(activeStage.ordersProcessedPerSec / 1000000).toFixed(1)}M ops/s
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

      {/* Main Kinetic Content Layout (4-Plane Grid) */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[600px]">
        {/* Left Column: 4-Step Kinetic Pipeline (5 Cols) */}
        <div className="col-span-5 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase flex items-center gap-2">
              <Layers size={16} className="text-[var(--pres-accent)]" />
              Kinetic Matching Pipeline (Step {currentStep + 1} of {stages.length})
            </span>
            <span className="font-mono text-[14px] px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
              Interactive Stepper
            </span>
          </div>

          <div className="flex flex-col gap-3 flex-1 justify-between">
            {stages.map((stg, idx) => {
              const isCurrent = idx === currentStep;
              const isPast = idx < currentStep;

              return (
                <div
                  key={stg.stepIndex}
                  onClick={() => jumpToStep(idx)}
                  className={`plane-1-raised rounded-2xl border p-4 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isCurrent
                      ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/10 shadow-lg ring-1 ring-[var(--pres-accent)] -translate-y-0.5'
                      : isPast
                      ? 'border-emerald-500/30 bg-emerald-500/5 opacity-90'
                      : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-60 hover:opacity-100 hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl font-mono font-bold text-[14px] flex items-center justify-center ${
                          isCurrent
                            ? 'bg-[var(--pres-accent)] text-white shadow-md'
                            : isPast
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {isPast ? <CheckCircle2 size={16} /> : idx + 1}
                      </div>
                      <span className="font-bold text-[16px] text-slate-900 dark:text-white leading-tight">
                        {stg.stageName}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[14px]">
                      <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                        {stg.tickLatencyNanoseconds}ns
                      </span>
                    </div>
                  </div>

                  <p className="font-poppins text-[14px] text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {stg.stageSubtitle}
                  </p>

                  <div className="mt-2 pt-2 border-t border-[var(--pres-border)]/50 flex items-center justify-between font-mono text-[14px]">
                    <span className="text-slate-500 dark:text-slate-400">
                      Capacity: {(stg.ordersProcessedPerSec / 1000000).toFixed(1)}M msgs/sec
                    </span>
                    <span className={`font-bold ${isCurrent ? 'text-[var(--pres-accent)]' : 'text-slate-400'}`}>
                      {isCurrent ? 'ACTIVE PROCESSING' : isPast ? 'VERIFIED PASSED' : 'STANDBY QUEUE'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Column: Dual L3 Order Book Ladder (4 Cols) */}
        <div className="col-span-4 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-5 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <div className="flex items-center gap-2">
                <BarChart3 size={18} className="text-amber-500" />
                <span className="font-bold text-slate-900 dark:text-white text-[16px]">
                  L3 Order Book Microstructure
                </span>
              </div>
              <span className="text-[14px] font-mono px-2.5 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                Live Depth
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[14px] text-slate-400 uppercase border-b border-[var(--pres-border)] pb-1.5">
              <span>Price (USD)</span>
              <span>Size (Lots)</span>
              <span>Orders</span>
            </div>

            {/* Asks (Sell Side - Red) */}
            <div className="flex flex-col gap-1.5 my-2">
              {asks.map((ask) => {
                const fillWidth = Math.min(100, Math.round((ask.quantityLots / maxQty) * 100));
                return (
                  <div
                    key={ask.id}
                    className={`relative p-1.5 rounded-lg flex items-center justify-between font-mono text-[14px] transition-all overflow-hidden ${
                      ask.isInsideMarket ? 'bg-rose-500/15 border border-rose-500/30' : 'bg-slate-100/50 dark:bg-slate-800/40'
                    }`}
                  >
                    <div
                      className="absolute right-0 top-0 bottom-0 bg-rose-500/10 pointer-events-none rounded"
                      style={{ width: `${fillWidth}%` }}
                    />
                    <span className="text-rose-600 dark:text-rose-400 font-bold z-10">
                      ${ask.price.toFixed(2)}
                    </span>
                    <span className="text-slate-800 dark:text-slate-200 z-10">
                      {ask.quantityLots.toFixed(2)}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 z-10">
                      {ask.orderCount} ords
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Spread Divider */}
            <div className="py-1.5 px-3 rounded-xl bg-slate-200/60 dark:bg-slate-800/70 border border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
              <span className="text-slate-500 dark:text-slate-400 uppercase">Tightest Spread</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">$0.50 (0.05 bps)</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">FPGA Lockless Match</span>
            </div>

            {/* Bids (Buy Side - Green) */}
            <div className="flex flex-col gap-1.5 my-2">
              {bids.map((bid) => {
                const fillWidth = Math.min(100, Math.round((bid.quantityLots / maxQty) * 100));
                return (
                  <div
                    key={bid.id}
                    className={`relative p-1.5 rounded-lg flex items-center justify-between font-mono text-[14px] transition-all overflow-hidden ${
                      bid.isInsideMarket ? 'bg-emerald-500/15 border border-emerald-500/30' : 'bg-slate-100/50 dark:bg-slate-800/40'
                    }`}
                  >
                    <div
                      className="absolute right-0 top-0 bottom-0 bg-emerald-500/10 pointer-events-none rounded"
                      style={{ width: `${fillWidth}%` }}
                    />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold z-10">
                      ${bid.price.toFixed(2)}
                    </span>
                    <span className="text-slate-800 dark:text-slate-200 z-10">
                      {bid.quantityLots.toFixed(2)}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 z-10">
                      {bid.orderCount} ords
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
            <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
              <TrendingUp size={15} className="text-emerald-500" />
              Inside Market Size: 60.70 Lots
            </span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">Zero Requotes</span>
          </div>
        </div>

        {/* Right Column: Hardware Register & Telemetry Matrix (3 Cols) */}
        <div className="col-span-3 flex flex-col justify-between gap-4">
          <div className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-5 flex flex-col justify-between shadow-xl flex-1">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                <div className="flex items-center gap-2">
                  <Server size={18} className="text-cyan-500" />
                  <span className="font-bold text-slate-900 dark:text-white text-[16px]">
                    Hardware & ASIC Specs
                  </span>
                </div>
                <span className="text-[14px] font-mono px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300">
                  PCIe Gen5
                </span>
              </div>

              <div className="flex flex-col gap-3 mt-4 font-mono text-[14px]">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-[var(--pres-border)]">
                  <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase">FPGA Logic Engine</span>
                  <span className="text-slate-900 dark:text-white font-bold text-[15px]">
                    {isFpgaAccelerated ? 'Xilinx Virtex UltraScale+ FPGA' : 'Software Core'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-[var(--pres-border)]">
                  <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase">Kernel-Bypass Transport</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[15px]">
                    {hasMulticast ? 'Solarflare OpenOnload EF_VI' : 'TCP Socket'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-[var(--pres-border)]">
                  <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase">Execution Integrity</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[15px]">
                    {hasZeroSlippage ? 'Zero Slippage Guarantee' : 'Standard Execution'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-[var(--pres-border)]">
                  <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase">Clock Synchronization</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[15px]">
                    IEEE 1588 PTP Sub-10ns
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono text-[14px] text-emerald-700 dark:text-emerald-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} /> FPGA Synthesis
              </span>
              <span className="font-bold">Timing Met (650MHz)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Engine Reliability:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <ShieldCheck size={18} /> Hardware Pre-Trade Risk Validated | Zero P99 Outliers | 100% Deterministic Match
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
            <Radio size={16} /> Suite 2029 Kinetic Stepper
          </span>
        </div>
      </div>
    </div>
  );
};
