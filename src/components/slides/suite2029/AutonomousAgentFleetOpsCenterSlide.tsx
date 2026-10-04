// lint-allow: file-size reason="AutonomousAgentFleetOpsCenterSlide flat sovereign agent fleet operations center" max=420
import React from 'react';
import type {
  AutonomousAgentFleetOpsCenterSlideData,
  AgentFleetClusterStatus,
} from '../../../types/suite2029Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Bot,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Zap,
  Clock,
  Radio,
  Layers,
  Globe2,
  Server,
  Sparkles,
  Flame,
  AlertTriangle,
} from 'lucide-react';

const DEF_CLUSTERS: AgentFleetClusterStatus[] = [
  {
    id: 'cluster-us-east',
    clusterRegion: 'US-East (Northern Virginia)',
    activeAgentsCount: 4820,
    healthyAgentsPercentage: 99.98,
    averageResponseLatencyMs: 38,
    isAutoScalingActive: true,
    hasKillSwitchArmReady: true,
  },
  {
    id: 'cluster-eu-central',
    clusterRegion: 'EU-Central (Frankfurt Sovereign)',
    activeAgentsCount: 3450,
    healthyAgentsPercentage: 99.95,
    averageResponseLatencyMs: 42,
    isAutoScalingActive: true,
    hasKillSwitchArmReady: true,
  },
  {
    id: 'cluster-ap-east',
    clusterRegion: 'AP-East (Tokyo Hyperscale)',
    activeAgentsCount: 2680,
    healthyAgentsPercentage: 99.92,
    averageResponseLatencyMs: 54,
    isAutoScalingActive: true,
    hasKillSwitchArmReady: true,
  },
  {
    id: 'cluster-us-west',
    clusterRegion: 'US-West (Oregon Edge)',
    activeAgentsCount: 1530,
    healthyAgentsPercentage: 99.99,
    averageResponseLatencyMs: 35,
    isAutoScalingActive: true,
    hasKillSwitchArmReady: true,
  },
];

export const AutonomousAgentFleetOpsCenterSlide: React.FC<{
  slide?: AutonomousAgentFleetOpsCenterSlideData;
  data?: AutonomousAgentFleetOpsCenterSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const clusters = data?.fleetClusters?.length ? data.fleetClusters : DEF_CLUSTERS;
  const totalAgents = data?.totalActiveAgentsCount ?? 12480;
  const uptime = data?.fleetUptimePercentage ?? 99.98;
  const interventionRate = data?.safetyInterventionRatePercentage ?? 0.002;
  const tokensBillions = data?.tokensConsumedBillions ?? 4.82;

  const isFleetOperational = data?.isFleetOperational ?? true;
  const hasLiveHeartbeat = data?.hasLiveHeartbeatFeed ?? true;
  const hasKillSwitch = data?.hasAutomatedKillSwitch ?? true;

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
              <Bot size={16} className="text-cyan-500" />
              {data?.kicker || 'AUTONOMOUS MULTI-AGENT ORCHESTRATION'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-500" />
              Fleet Status: {isFleetOperational ? 'All 4 Clusters Healthy' : 'Degraded'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Activity size={14} /> Telemetry Tick: Sub-50ms
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <Radio size={14} /> Heartbeat: {hasLiveHeartbeat ? 'Active Streaming' : 'Polling'}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Autonomous Agent Fleet Operations Center'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Real-time sovereign telemetry across 12,480+ distributed AI agents: cohort health, token burn velocity, and automated kill switch readiness.'}
          </p>
        </div>

        {/* Top-Right Executive Metric Badge */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Active Fleet</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
              {totalAgents.toLocaleString()} Agents
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Uptime SLA</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
              {uptime.toFixed(2)}%
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
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Total Active Agents</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[22px]">{totalAgents.toLocaleString()}</span>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Bot size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Fleet Uptime</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">{uptime.toFixed(2)}%</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Safety Intervention</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[22px]">{interventionRate.toFixed(3)}%</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Zap size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Daily Token Burn</span>
            <span className="text-amber-600 dark:text-amber-400 font-bold text-[22px]">{tokensBillions.toFixed(2)}B Tokens</span>
          </div>
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Flame size={24} />
          </div>
        </div>
      </div>

      {/* Main Content Layout (4-Plane Bento Grid) */}
      <div className="grid grid-cols-12 gap-5 z-10 my-auto items-stretch h-[540px]">
        {/* Left Side: 4 Regional Clusters (7 Cols) */}
        <div className="col-span-7 grid grid-cols-2 gap-4">
          {clusters.map((cluster) => {
            return (
              <div
                key={cluster.id}
                className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-5 flex flex-col justify-between shadow-xl hover:-translate-y-0.5 hover:border-[var(--pres-accent)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                    <div className="flex items-center gap-2">
                      <Globe2 size={18} className="text-cyan-500" />
                      <span className="font-bold text-slate-900 dark:text-white text-[16px] leading-tight">
                        {cluster.clusterRegion}
                      </span>
                    </div>
                    <span className="text-[14px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                      {cluster.healthyAgentsPercentage}% Healthy
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline justify-between font-mono">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase">Active Agents</span>
                      <div className="text-[34px] font-black tracking-tight text-slate-900 dark:text-white leading-none mt-1">
                        {cluster.activeAgentsCount.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-500 dark:text-slate-400 block text-[14px] uppercase">Avg Latency</span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
                        {cluster.averageResponseLatencyMs} ms
                      </span>
                    </div>
                  </div>

                  {/* Latency / Capacity Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                        style={{ width: `${Math.min(100, Math.round((cluster.activeAgentsCount / 5000) * 100))}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-400 mt-2">
                      <span>Load Capacity</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                        {Math.round((cluster.activeAgentsCount / 5000) * 100)}% Alloc
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
                  <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    Auto-Scale: {cluster.isAutoScalingActive ? 'Active' : 'Static'}
                  </span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                    {cluster.hasKillSwitchArmReady ? 'Kill Switch Armed' : 'Disarmed'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Cohort Breakdown & Safety Command (5 Cols) */}
        <div className="col-span-5 flex flex-col justify-between gap-4">
          {/* Cohort Health Breakdown Card */}
          <div className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-5 flex flex-col justify-between shadow-xl flex-1">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                <div className="flex items-center gap-2">
                  <Layers size={18} className="text-[var(--pres-accent)]" />
                  <span className="font-bold text-slate-900 dark:text-white text-[16px]">
                    Agent Cohort Specialization
                  </span>
                </div>
                <span className="text-[14px] font-mono px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300">
                  4 Active Cohorts
                </span>
              </div>

              <div className="flex flex-col gap-2.5 mt-3 font-mono text-[14px]">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-[var(--pres-border)] flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300">Reasoning & Proving Agents</span>
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">5,400 (43.3%)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-[var(--pres-border)] flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300">Code Synthesis Specialists</span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">3,800 (30.4%)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-[var(--pres-border)] flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300">Safety & Compliance Auditors</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">2,100 (16.8%)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-[var(--pres-border)] flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300">Autonomous Tool Runners</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">1,180 (9.5%)</span>
                </div>
              </div>
            </div>

            {/* Safety & Kill Switch Panel */}
            <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono text-[14px] flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <ShieldCheck size={18} />
                <span className="font-bold">Kill Switch Guard: {hasKillSwitch ? 'Armed & Ready' : 'Standby'}</span>
              </div>
              <span className="text-slate-600 dark:text-slate-400">Sub-10ms Global Revocation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Fleet Governance:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <CheckCircle2 size={18} /> 100% Autonomous Cohorts Verified | Zero Dialectic Deadlocks | Zero Data Exfiltration
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
            <Bot size={16} /> Suite 2029 Sovereign Fleet Ops
          </span>
        </div>
      </div>
    </div>
  );
};
