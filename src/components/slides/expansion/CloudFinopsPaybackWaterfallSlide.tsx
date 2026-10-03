import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { TrendingDown, DollarSign, Percent, ArrowDownRight, Layers } from 'lucide-react';

interface WaterfallSegment {
  label: string;
  amount: string;
  deltaPct: string;
  description: string;
  isTotal?: boolean;
}

const DEFAULT_SEGMENTS: WaterfallSegment[] = [
  { label: 'Legacy Cloud Baseline', amount: '$24.8M', deltaPct: '100%', description: 'Unoptimized on-demand compute & unindexed storage' },
  { label: 'Compute Rightsizing', amount: '-$5.2M', deltaPct: '-21%', description: 'eBPF-driven CPU & memory right-sizing across 1,200 pods' },
  { label: 'Reserved / Spot Arbitrage', amount: '-$4.1M', deltaPct: '-16%', description: 'Automated 3-year RI fleet coverage & spot pooling' },
  { label: 'Serverless Event Migration', amount: '-$3.6M', deltaPct: '-15%', description: 'Idle cluster elimination via decoupled event workers' },
  { label: 'Optimized Sovereign Run-Rate', amount: '$11.9M', deltaPct: '48%', description: '52% Net Annual Cloud Spend Reduction Achieved', isTotal: true },
];

export const CloudFinopsPaybackWaterfallSlide: React.FC<{ slide: BaseSlide & { segments?: WaterfallSegment[]; leadArchitect?: string; } }> = ({ slide }) => {
  const segments = slide.segments || DEFAULT_SEGMENTS;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'FINANCIAL ARCHITECTURE & OPEX CONTROL'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Cloud FinOps Unit Economics & Amortized Payback Waterfall'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Amortized cloud migration return on investment, reserved capacity arbitrage, and structural unit cost deflation.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><TrendingDown size={14} className="text-emerald-400" /> 52% Spend Cut</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Percent size={14} className="text-cyan-400" /> Payback: 4.8 Mos</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-5 gap-4 my-auto">
        {segments.map((seg, idx) => (
          <div key={idx} className={`p-5 rounded-2xl border shadow-xl flex flex-col justify-between ${seg.isTotal ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-slate-800 bg-slate-950/70'}`}>
            <div>
              <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${seg.isTotal ? 'bg-emerald-900/60 text-emerald-300' : 'bg-slate-900 text-slate-400'}`}>
                {seg.deltaPct}
              </span>
              <h2 className="font-ubuntu text-base font-bold text-white mt-3 mb-1">{seg.label}</h2>
              <p className="font-poppins text-xs text-slate-400 leading-relaxed">{seg.description}</p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-900 flex items-center justify-between font-mono">
              <span className="text-xs text-slate-500">{seg.isTotal ? 'Net Run-Rate' : 'Variance'}</span>
              <span className={`text-xl font-bold flex items-center ${seg.isTotal ? 'text-emerald-400' : seg.amount.startsWith('-') ? 'text-cyan-400' : 'text-slate-200'}`}>
                {seg.amount.startsWith('-') && <ArrowDownRight size={16} className="mr-0.5" />}{seg.amount}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2"><DollarSign size={13} className="text-emerald-400" /> Total Annualized Cloud Savings: $12.9M recurring reduction with zero workload latency regression</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
