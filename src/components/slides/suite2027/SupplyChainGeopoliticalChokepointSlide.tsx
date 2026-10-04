// lint-allow: file-size reason="SupplyChainGeopoliticalChokepointSlide flat sovereign supply chain geopolitical chokepoints" max=200
import React from 'react';
import type {
  SupplyChainGeopoliticalChokepointSlideData,
  ChokepointRiskNode,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Globe,
  Anchor,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  Compass,
  TrendingUp,
  Clock,
  Sparkles,
  Route,
} from 'lucide-react';

const DEF_CHOKEPOINTS: ChokepointRiskNode[] = [
  {
    id: 'cp-malacca',
    chokepointName: 'Strait of Malacca',
    globalTradeSharePercentage: 26.5,
    delayVarianceDays: 14,
    vulnerabilityIndexScore: 78.4,
    isAlternativeRouteAvailable: true,
    hasVulnerabilityAlert: true,
  },
  {
    id: 'cp-suez',
    chokepointName: 'Suez Canal & Red Sea Corridor',
    globalTradeSharePercentage: 14.8,
    delayVarianceDays: 18,
    vulnerabilityIndexScore: 86.2,
    isAlternativeRouteAvailable: true,
    hasVulnerabilityAlert: true,
  },
  {
    id: 'cp-hormuz',
    chokepointName: 'Strait of Hormuz',
    globalTradeSharePercentage: 21.0,
    delayVarianceDays: 22,
    vulnerabilityIndexScore: 91.5,
    isAlternativeRouteAvailable: false,
    hasVulnerabilityAlert: true,
  },
  {
    id: 'cp-panama',
    chokepointName: 'Panama Canal Locks',
    globalTradeSharePercentage: 6.2,
    delayVarianceDays: 10,
    vulnerabilityIndexScore: 64.0,
    isAlternativeRouteAvailable: true,
    hasVulnerabilityAlert: false,
  },
  {
    id: 'cp-mandeb',
    chokepointName: 'Bab el-Mandeb Strait',
    globalTradeSharePercentage: 11.4,
    delayVarianceDays: 16,
    vulnerabilityIndexScore: 89.1,
    isAlternativeRouteAvailable: true,
    hasVulnerabilityAlert: true,
  },
  {
    id: 'cp-bosporus',
    chokepointName: 'Turkish Straits (Bosporus/Dardanelles)',
    globalTradeSharePercentage: 3.8,
    delayVarianceDays: 7,
    vulnerabilityIndexScore: 52.3,
    isAlternativeRouteAvailable: true,
    hasVulnerabilityAlert: false,
  },
];

export const SupplyChainGeopoliticalChokepointSlide: React.FC<{
  slide?: SupplyChainGeopoliticalChokepointSlideData;
  data?: SupplyChainGeopoliticalChokepointSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const chokepoints = data?.chokepointNodes?.length ? data.chokepointNodes : DEF_CHOKEPOINTS;

  const getRiskBadge = (score: number) => {
    if (score >= 80) {
      return (
        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30 flex items-center gap-1">
          <AlertTriangle size={11} /> Critical ({score.toFixed(1)})
        </span>
      );
    }
    if (score >= 60) {
      return (
        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1">
          <TrendingUp size={11} /> Elevated ({score.toFixed(1)})
        </span>
      );
    }
    return (
      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
        <CheckCircle2 size={11} /> Managed ({score.toFixed(1)})
      </span>
    );
  };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 flex items-center gap-2">
              <Globe size={16} className="text-amber-500" />
              {data?.kicker || 'GLOBAL MARITIME RESILIENCE & CHOKEPOINT RISK INDEX'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Compass size={14} /> Operational Year: {data?.operationalYear || '2026-2027'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Anchor size={14} className="text-cyan-500" />
              Aggregate Vulnerability: {data?.totalVulnerabilityScore ?? 34.8}/100
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Supply Chain Geopolitical Chokepoint Vulnerability'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Empirical maritime bottleneck risk matrix monitoring global cargo transit shares, detour variances, and autonomous alternate corridor routing.'}
          </p>
        </div>

        {/* Global Risk Summary Box */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Monitored Trade</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">83.7% Maritime Vol</span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Avg Detour Delay</span>
            <span className="text-amber-600 dark:text-amber-400 font-bold text-[18px]">+14.5 Days</span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Geopolitical Risk Context Strip */}
      <div className="plane-1-raised p-3 px-6 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[13px] z-10 my-2">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 font-bold uppercase text-[11px]">Dynamic Rerouting:</span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">
            Cape of Good Hope circumnavigation adds +10 to 14 days steaming time; multi-modal rail corridor bypass active.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold text-[12px] border border-emerald-500/30 flex items-center gap-1">
            <Route size={13} /> Bypass Corridors Mapped: 5/6 Chokepoints
          </span>
        </div>
      </div>

      {/* Main 6-Chokepoint Bento Grid */}
      <div className="grid grid-cols-3 gap-6 z-10 my-auto items-stretch h-[500px]">
        {chokepoints.map((cp) => (
          <div
            key={cp.id}
            className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl hover:-translate-y-1 hover:border-[var(--pres-accent)] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                <span className="font-mono text-[14px] font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <Anchor size={15} className="text-amber-500" />
                  {cp.chokepointName}
                </span>
                {getRiskBadge(cp.vulnerabilityIndexScore)}
              </div>

              <div className="mt-4 space-y-3 font-mono text-[13px]">
                <div>
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[12px] mb-1">
                    <span>Global Trade Share</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{cp.globalTradeSharePercentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-cyan-500 transition-all duration-500"
                      style={{ width: `${cp.globalTradeSharePercentage * 3}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[12px] mb-1">
                    <span>Delay Variance</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                      <Clock size={12} /> +{cp.delayVarianceDays} Days
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-500 transition-all duration-500"
                      style={{ width: `${Math.min(100, cp.delayVarianceDays * 4)}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[12px]">
                  <span className="text-slate-500 dark:text-slate-400">Alt Route Bypass:</span>
                  {cp.isAlternativeRouteAvailable ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 size={13} /> Available
                    </span>
                  ) : (
                    <span className="text-rose-500 font-bold flex items-center gap-1">
                      <AlertTriangle size={13} /> No Direct Bypass
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[12px]">
              <span className="text-slate-500 dark:text-slate-400">Vulnerability Index:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">{cp.vulnerabilityIndexScore}/100</span>
            </div>
          </div>
        ))}
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">Strategic Continuity:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Autonomous Buffer Stock & Multi-Modal Freight Contracts Activated
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1">
            <Sparkles size={16} /> Suite 2027 Maritime Intel
          </span>
        </div>
      </div>
    </div>
  );
};
