// lint-allow: file-size reason="EdgeFleetDensitySlide flat sovereign edge infrastructure fleet density matrix" max=120
import React from 'react';
import type { EdgeFleetDensitySlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Activity, CheckCircle2, Server, Zap, Globe, ShieldCheck, Leaf } from 'lucide-react';

const DEF_POPS = [
  { popId: 'pp1', popIndex: 1, metroArea: 'Tokyo Metropolitan Area', activeEdgeRacksCount: 24, deployedMicroServersCount: 1920, powerUsageEffectiveness: 1.12, averageChassisTempCelsius: 42.0, isPoPOnline: true, hasGreenEnergyCertified: true, isPueOptimized: true },
  { popId: 'pp2', popIndex: 2, metroArea: 'Frankfurt Rhine-Main', activeEdgeRacksCount: 28, deployedMicroServersCount: 2240, powerUsageEffectiveness: 1.16, averageChassisTempCelsius: 44.0, isPoPOnline: true, hasGreenEnergyCertified: true, isPueOptimized: true },
  { popId: 'pp3', popIndex: 3, metroArea: 'Silicon Valley South', activeEdgeRacksCount: 32, deployedMicroServersCount: 2560, powerUsageEffectiveness: 1.14, averageChassisTempCelsius: 43.0, isPoPOnline: true, hasGreenEnergyCertified: true, isPueOptimized: true },
  { popId: 'pp4', popIndex: 4, metroArea: 'São Paulo Central', activeEdgeRacksCount: 18, deployedMicroServersCount: 1440, powerUsageEffectiveness: 1.18, averageChassisTempCelsius: 46.0, isPoPOnline: true, hasGreenEnergyCertified: true, isPueOptimized: true },
];

export const EdgeFleetDensitySlide: React.FC<{ slide?: EdgeFleetDensitySlideData; data?: EdgeFleetDensitySlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const pops = data?.pops?.length ? data.pops : DEF_POPS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><Activity size={16} className="text-violet-500" />{data?.kicker || 'EDGE HARDWARE & POWER EFFICIENCY'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> {data?.globalPoPsCount || 480} Global PoPs Deployed</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Edge Infrastructure Fleet Density Matrix: 480 Global PoPs & 1.14 PUE'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Global hardware deployment matrix monitoring 480 edge micro-datacenters, rack density, and two-phase liquid immersion cooling'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Mean Uptime</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.meanUptimePercent || 99.999}% SLA</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Fleet PUE</span><span className="text-sm font-bold text-emerald-500">1.14 FLEET PUE</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Chief Software Engineer</span><span className="text-sm font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[550px] items-stretch">
        {pops.map((pp) => (
          <div key={pp.popId} className="plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between transition-all hover:scale-[1.01]">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-sm font-bold text-violet-400">POP 0{pp.popIndex}</span>
              <span className="font-mono text-sm px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">{pp.powerUsageEffectiveness} PUE</span>
            </div>
            <div className="space-y-4 font-mono text-sm my-3">
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-1">
                <span className="text-sm text-slate-400 block uppercase">Metro Area</span>
                <span className="font-bold text-slate-200 text-sm block truncate">{pp.metroArea}</span>
                <span className="text-sm text-emerald-400 font-bold block mt-2">{pp.deployedMicroServersCount.toLocaleString()} MicroServers</span>
              </div>
              <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
                <div className="flex justify-between items-center"><span className="text-sm text-slate-400">Racks:</span><span className="font-bold text-emerald-400 text-sm">{pp.activeEdgeRacksCount} Units</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-slate-400">Chassis Temp:</span><span className="font-bold text-sky-300 text-sm">{pp.averageChassisTempCelsius}°C</span></div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><Leaf size={16} /> 100% Green Energy Certified</div>
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-6"><span className="text-sm uppercase text-slate-400">Aggregate Power:</span><span className="text-emerald-400 font-bold text-base">28.5 MW</span><span className="text-sm uppercase text-slate-400">Active Containers:</span><span className="text-sky-300 font-bold text-base">512,000</span><span className="text-sm uppercase text-slate-400">Cooling Mode:</span><span className="text-violet-400 font-bold text-base">2-Phase Immersion</span></div>
        <div className="flex items-center gap-4"><span className="text-sm text-slate-400">Fleet Density: <strong className="text-emerald-400">HIGH EFFICIENCY</strong></span></div>
      </div>
    </div>
  );
};
