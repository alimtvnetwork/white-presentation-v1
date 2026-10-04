// lint-allow: file-size reason="MatrixFeatureBenchmarkSlide tabular comparative matrix" max=120
import React from 'react';
import type { MatrixFeatureBenchmarkSlideData } from '../../../types/suite2032Archetypes';
import { CheckCircle2, MinusCircle, XCircle, ShieldCheck, Sparkles } from 'lucide-react';

const renderStatusBadge = (score: string) => {
  const s = (score || '').toLowerCase();
  if (s === 'supported') {
    return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"><CheckCircle2 size={16} /> Supported</span>;
  }
  if (s === 'partial') {
    return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30"><MinusCircle size={16} /> Partial</span>;
  }
  return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-rose-500/15 text-rose-400 border border-rose-500/30"><XCircle size={16} /> Unsupported</span>;
};

export const MatrixFeatureBenchmarkSlide: React.FC<{
  slide: MatrixFeatureBenchmarkSlideData;
  activeStep?: number;
}> = ({ slide }) => {
  const competitors = slide.competitors || [];
  const rows = slide.featureRows || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg, #0b0f19)', color: 'var(--pres-text, #f8fafc)' }}
      className="relative w-[1920px] h-[1080px] p-[52px_72px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-base font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full bg-[var(--pres-accent,#6366f1)]/10 text-[var(--pres-accent,#818cf8)] border border-[var(--pres-accent,#6366f1)]/30 flex items-center gap-2">
            <Sparkles size={16} />
            {slide.kicker || 'COMPETITIVE INTELLIGENCE & MATRIX BENCHMARK'}
          </span>
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">{slide.benchmarkCategory}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[var(--pres-accent,#818cf8)] font-bold">{slide.evaluatedVersion}</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold font-display tracking-tight text-white mb-2">{slide.title}</h1>
        <p className="text-base text-slate-400 max-w-[1200px] leading-relaxed">{slide.subtitle}</p>
      </div>

      <div className="w-full my-auto rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.04]">
              <th className="p-4 px-6 text-base font-bold text-slate-200 w-[30%]">Architectural Capability</th>
              {competitors.map((comp) => (
                <th
                  key={comp.id}
                  className={`p-4 px-6 text-base font-bold ${comp.isOurPlatform ? 'text-[var(--pres-accent,#818cf8)] bg-[var(--pres-accent,#6366f1)]/10 border-x border-t border-[var(--pres-accent,#6366f1)]/30' : 'text-slate-300'}`}
                >
                  <div className="flex items-center gap-2">
                    <span>{comp.name}</span>
                    {comp.badge && (
                      <span className="font-mono text-sm px-2 py-0.5 rounded-full bg-[var(--pres-accent,#6366f1)]/20 text-[var(--pres-accent,#818cf8)] border border-[var(--pres-accent,#6366f1)]/40 font-semibold">{comp.badge}</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="p-3.5 px-6">
                  <div className="flex items-center gap-3">
                    <span className="text-base font-semibold text-white">{row.featureName}</span>
                    <span className="font-mono text-sm px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">{row.featureCategory}</span>
                    {row.isDifferentiatingFactor && (
                      <span className="text-sm font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">DIFFERENTIATOR</span>
                    )}
                  </div>
                </td>
                {competitors.map((comp) => (
                  <td key={comp.id} className={`p-3.5 px-6 ${comp.isOurPlatform ? 'bg-[var(--pres-accent,#6366f1)]/10 border-x border-[var(--pres-accent,#6366f1)]/30' : ''}`}>
                    {renderStatusBadge(row.scores[comp.id] || 'unsupported')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-sm text-slate-400 border-t border-white/10 pt-4">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 font-medium text-emerald-400"><ShieldCheck size={16} /> SOC2 / ISO-27001 Third-Party Verified</span>
          <span>Sample evaluated: Q4 FY26 High-Parity Architecture Matrix</span>
        </div>
        <span className="font-mono text-sm">ARCHETYPE: MATRIX-FEATURE-BENCHMARK (FLAT COMPARISON)</span>
      </div>
    </div>
  );
};
