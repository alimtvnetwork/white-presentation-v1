import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { ArrowDownRight, Award, BatteryCharging, Leaf, Sun, Wind, Zap } from 'lucide-react';

interface EsgMetric {
  title: string;
  metricValue: string;
  baseline: string;
  highlight: string;
  subtext: string;
}

const DEFAULT_METRICS: EsgMetric[] = [
  { title: 'Power Usage Effectiveness (PUE)', metricValue: '1.08', baseline: 'Industry Avg: 1.58', highlight: '31% More Efficient', subtext: 'Direct liquid cooling & closed-loop thermal heat recapture' },
  { title: 'Carbon-Free Energy Match', metricValue: '99.4%', baseline: 'Standard Grid: 34%', highlight: '24/7 Hourly Matching', subtext: 'Zero-carbon geothermal, solar & contracted offshore wind' },
  { title: 'Carbon-Aware Workload Shift', metricValue: '88%', baseline: 'Static Scheduling: 0%', highlight: 'Green Grid Optimization', subtext: 'AI batch training dynamic migration to lowest carbon intensity hours' },
  { title: 'Net Carbon Avoidance', metricValue: '14.2k t', baseline: 'Annual Target: 10k t', highlight: 'Scope 1-3 Net Zero', subtext: '14,200 metric tons CO2e eliminated via sovereign scheduling' },
];

export const CognitiveDecarbonizationEsgSlide: React.FC<{ slide: BaseSlide & { metrics?: EsgMetric[]; leadArchitect?: string; } }> = ({ slide }) => {
  const metrics = slide.metrics || DEFAULT_METRICS;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'SUSTAINABILITY & ESG ARCHITECTURE'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Cognitive Workload Decarbonization & Green Datacenter ESG'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Intelligent compute scheduling targeting carbon-negative grid hours, sub-1.1 PUE, and 24/7 renewable matching.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Leaf size={14} className="text-emerald-400" /> PUE 1.08</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Sun size={14} className="text-amber-400" /> 99.4% Renewable</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-5 my-auto">
        {metrics.map((m, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all">
            <div>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
                {m.highlight}
              </span>
              <h2 className="font-ubuntu text-base font-bold text-white mt-3 mb-1">{m.title}</h2>
              <div className="text-4xl font-black font-ubuntu text-emerald-400 my-2">{m.metricValue}</div>
              <p className="font-mono text-xs text-slate-400 mb-3">{m.baseline}</p>
              <p className="font-poppins text-xs text-slate-400 leading-relaxed">{m.subtext}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between font-mono text-xs text-slate-500">
              <span>GHG Protocol Scope 1-3</span>
              <span className="text-emerald-400 font-semibold">Audited</span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2"><Wind size={14} className="text-emerald-400" /> Clean Energy Guarantees: 100% verified hourly Energy Attribute Certificates (EACs)</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
