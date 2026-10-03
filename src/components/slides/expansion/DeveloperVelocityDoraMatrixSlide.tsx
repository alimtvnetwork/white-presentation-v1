import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { Award, Clock, Flame, GitMerge, RefreshCw, Rocket, ShieldCheck, Zap } from 'lucide-react';

interface DoraPillar {
  metricName: string;
  metricValue: string;
  tierRating: 'Elite' | 'High';
  industryBenchmark: string;
  enablingMechanism: string;
}

const DEFAULT_DORA: DoraPillar[] = [
  { metricName: 'Deployment Frequency', metricValue: '42 / Day', tierRating: 'Elite', industryBenchmark: 'Industry: 1 / Month', enablingMechanism: 'Trunk-based development & automated CI/CD micro-pipelines' },
  { metricName: 'Lead Time for Changes', metricValue: '13.8 Mins', tierRating: 'Elite', industryBenchmark: 'Industry: 1-6 Months', enablingMechanism: 'Hermetic build caches & sub-minute unit/integration suites' },
  { metricName: 'Mean Time to Recover (MTTR)', metricValue: '5.2 Mins', tierRating: 'Elite', industryBenchmark: 'Industry: 2-7 Days', enablingMechanism: 'Automated eBPF health probes & instant canary traffic rollback' },
  { metricName: 'Change Failure Rate', metricValue: '0.28%', tierRating: 'Elite', industryBenchmark: 'Industry: 15-30%', enablingMechanism: 'Comprehensive contractual property testing & zero-drift schemas' },
];

export const DeveloperVelocityDoraMatrixSlide: React.FC<{ slide: BaseSlide & { dora?: DoraPillar[]; leadArchitect?: string; } }> = ({ slide }) => {
  const dora = slide.dora || DEFAULT_DORA;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'ENGINEERING EXCELLENCE & DORA METRICS'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Elite Engineering Velocity & Four Key DORA Metrics'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Continuous software delivery throughput, sub-15 minute commit-to-production pipelines, and 0.28% change failure rates.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Award size={14} className="text-amber-400" /> Top 1% Global DORA</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Rocket size={14} className="text-cyan-400" /> 42 Deploys/Day</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-5 my-auto">
        {dora.map((d, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40 flex items-center gap-1">
                  <Flame size={12} className="text-amber-400" /> {d.tierRating} DORA
                </span>
                <span className="font-mono text-xs text-slate-400">{d.industryBenchmark}</span>
              </div>
              <h2 className="font-ubuntu text-base font-bold text-white mb-2">{d.metricName}</h2>
              <div className="text-4xl font-black font-ubuntu text-cyan-300 my-2">{d.metricValue}</div>
              <p className="font-poppins text-xs text-slate-400 leading-relaxed mt-3">{d.enablingMechanism}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between font-mono text-xs text-slate-500">
              <span>Benchmark Status</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1"><ShieldCheck size={13} /> Elite Tier</span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span>Engineering Benchmark: Continuous deployment with automated testing eliminates release freezes and manual QA cycles</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
