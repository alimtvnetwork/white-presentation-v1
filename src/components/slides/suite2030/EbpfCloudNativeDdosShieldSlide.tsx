// lint-allow: file-size reason="EbpfCloudNativeDdosShieldSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  EbpfCloudNativeDdosShieldSlideData,
  ShieldStage,
  DdosFilterRuleNode,
} from '../../../types/suite2030Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  Flame,
  Cpu,
} from 'lucide-react';

const DEF_STAGES: ShieldStage[] = [
  {
    stepIndex: 0,
    stageName: 'Kernel Ingress Hook & XDP Driver Stage Parsing',
    stageSubtitle: 'eBPF bytecode attaches to bare-metal NIC ring buffer before kernel sk_buff memory allocation',
    attackTrafficVolumeTbps: 12.4,
    mitigatedTrafficVolumeTbps: 12.38,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'SYN Flood & L4 Amplification Vector Filtering',
    stageSubtitle: 'Hardware-assisted SYN cookies and rate-limiting maps drop spoofed reflection vectors at wire-speed',
    attackTrafficVolumeTbps: 18.6,
    mitigatedTrafficVolumeTbps: 18.55,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'L7 HTTP/3 QUIC Semantic Heuristic Anomaly Detect',
    stageSubtitle: 'Zero-copy eBPF ring buffers stream header flow analytics to user-space anomaly mitigation daemons',
    attackTrafficVolumeTbps: 24.2,
    mitigatedTrafficVolumeTbps: 24.18,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Zero-Copy AF_XDP Bypassed Legitimate Routing',
    stageSubtitle: 'Clean validated enterprise traffic fast-paths directly into service mesh pods with zero CPU overhead',
    attackTrafficVolumeTbps: 28.5,
    mitigatedTrafficVolumeTbps: 28.48,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_RULES: DdosFilterRuleNode[] = [
  {
    id: 'rule-udp-amp',
    ruleVector: 'Volumetric UDP Reflection & DNS Amp',
    packetRateDroppedMpps: 145.2,
    mitigationProtocol: 'XDP_DROP Bare-Metal',
    isFilterActive: true,
    hasZeroCopyBypassed: true,
  },
  {
    id: 'rule-syn-flood',
    ruleVector: 'SYN Flood & TCP Out-of-Order ACK Storm',
    packetRateDroppedMpps: 98.4,
    mitigationProtocol: 'eBPF SYN-Cookie Engine',
    isFilterActive: true,
    hasZeroCopyBypassed: true,
  },
  {
    id: 'rule-quic-exhaust',
    ruleVector: 'HTTP/3 QUIC Connection ID Exhaustion',
    packetRateDroppedMpps: 54.8,
    mitigationProtocol: 'XDP BPF_MAP Rate Gate',
    isFilterActive: true,
    hasZeroCopyBypassed: true,
  },
  {
    id: 'rule-bgp-hijack',
    ruleVector: 'BGP Route Hijack & Anycast Spoofing',
    packetRateDroppedMpps: 22.1,
    mitigationProtocol: 'FlowBGP Fast Filter',
    isFilterActive: true,
    hasZeroCopyBypassed: true,
  },
];

export const EbpfCloudNativeDdosShieldSlide: React.FC<{
  slide?: EbpfCloudNativeDdosShieldSlideData;
  data?: EbpfCloudNativeDdosShieldSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.shieldStages?.length ? data.shieldStages : DEF_STAGES;
  const rules = data?.filterRules?.length ? data.filterRules : DEF_RULES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isLineRate = data?.isXdpLineRateEnforced ?? true;
  const hasSynFloodMitigated = data?.hasSynFloodMitigated ?? true;
  const hasZeroCopy = data?.hasZeroCopyBypassActive ?? true;

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
              className="font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2"
            >
              <ShieldAlert size={16} className="text-cyan-500" />
              {data?.kicker || 'EBPF KERNEL-LEVEL DDOS DEFENSE'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Cpu size={14} /> Shield: {data?.shieldIdentifier || 'ebpf-xdp-fortress-100'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" />
              Peak Defense: {data?.peakAttackVolumeTbps ? data.peakAttackVolumeTbps.toFixed(1) : '28.5'} Tbps
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Flame size={14} className="text-purple-500" />
              XDP Drop: {data?.xdpDropRateMpps ? data.xdpDropRateMpps.toFixed(1) : '320.5'} Mpps
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'eBPF Cloud-Native DDoS Shield'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Sub-microsecond kernel XDP packet filtering with hardware-assisted zero-copy mitigation at line rate.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Attack Mitigated</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.mitigatedTrafficVolumeTbps.toFixed(2)} Tbps
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Attack Volume</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.attackTrafficVolumeTbps.toFixed(1)} Tbps
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
          const lifecycleStyle = getStepLifecycleStyle(
            isActive ? 'active' : isCompleted ? 'completed' : 'future',
            'var(--pres-accent)',
            'var(--pres-border)'
          );

          return (
            <button
              key={st.stepIndex}
              onClick={() => jumpToStep(idx)}
              style={lifecycleStyle}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${
                isActive
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold animate-kinetic-step-reveal'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 opacity-75'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-[0.38] text-slate-500 dark:text-slate-400'
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
                    {st.mitigatedTrafficVolumeTbps} Tbps clean | {st.attackTrafficVolumeTbps} Tbps attack
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
        {/* Left Bento: DDoS Vector Filter Rules & Drop Rates */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ShieldAlert size={16} className="text-[var(--pres-accent)]" /> eBPF XDP Mitigation Vector Rules & Line-Rate Drops
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {rules.map((rule, rIdx) => {
                const isCurrentLayer = rIdx === currentStep || (currentStep >= 2 && rIdx >= 2);
                const isFilterActive = rule.isFilterActive;
                return (
                  <div
                    key={rule.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Flame size={16} className={isFilterActive ? 'text-cyan-500' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{rule.ruleVector}</span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isFilterActive
                              ? 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {isFilterActive ? 'Filtering' : 'Bypass'}
                        </span>
                        {rule.hasZeroCopyBypassed && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> {rule.mitigationProtocol}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          Dropped: {rule.packetRateDroppedMpps.toFixed(1)} Mpps
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>XDP_DROP</span>
                          <ArrowRight size={12} />
                          <span className="text-emerald-700 dark:text-emerald-400">0ns SKB</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full transition-all duration-700 bg-cyan-500"
                        style={{ width: `${Math.min(100, (rule.packetRateDroppedMpps / 150) * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Kernel Bypass: Ingress NIC Ring Buffer Evaluated</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Zero CPU Saturation
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldAlert size={16} className="text-cyan-500" />
              Bare-Metal XDP: Drops 320M+ malicious packets/sec before OS kernel stack
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              Sub-microsecond Ingress Mitigation
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Verification */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Mitigation Pipeline
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 font-bold text-[14px] border border-emerald-500/30">
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Clean Mitigated</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.mitigatedTrafficVolumeTbps.toFixed(2)} Tbps
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Raw Attack Flow</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.attackTrafficVolumeTbps.toFixed(1)} Tbps
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">XDP Line-Rate Enforcement</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isLineRate ? 'Bare-Metal NIC Hook Locked' : 'Driver Fallback'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">SYN Flood Mitigation Engine</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasSynFloodMitigated ? 'eBPF SYN-Cookies Active' : 'Unmitigated'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">AF_XDP Zero-Copy Bypass</span>
                <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                  <Layers size={16} /> {hasZeroCopy ? 'Direct User-Space Memory' : 'Standard Kernel Path'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. eBPF DDoS shield maintains sub-millisecond pod response during 28+ Tbps volumetric assaults.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div
        style={{ backdropFilter: 'blur(14px)' }}
        className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-[14px] z-10"
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Shield Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> 28.5 Tbps Attack Neutralized | 320 Mpps Line-Rate Drop | Zero Dropped Legitimate Packets
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2030 DDoS Shield
          </span>
        </div>
      </div>
    </div>
  );
};

export default EbpfCloudNativeDdosShieldSlide;
