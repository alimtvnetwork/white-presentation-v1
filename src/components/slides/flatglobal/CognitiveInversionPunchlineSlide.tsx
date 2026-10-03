import React from 'react';
import type { CognitiveInversionPunchlineSlideData } from '../../../types/flatGlobalSuiteTypes';
import { InversionPillarCard } from './InversionPillarCard';
import { UserCheck, Zap } from 'lucide-react';

export const CognitiveInversionPunchlineSlide: React.FC<{
  slide: CognitiveInversionPunchlineSlideData;
}> = ({ slide }) => {
  const pillars = slide.inversionPillars || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-center justify-between border-b border-slate-800/80 pb-3">
        <span className="kicker-pill-badge">{slide.kicker || 'STRATEGIC INTELLECTUAL FRAMEWORK'}</span>
        <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
          <UserCheck size={14} className="text-cyan-400" /> {slide.authorAttribution || 'Alim Ul Karim, Chief Software Engineer'}
        </span>
      </div>

      <div className="z-10 plane-1-raised p-6 rounded-2xl border border-rose-500/20 bg-slate-950/80 flex items-center justify-between gap-8 my-2">
        <div className="flex-1">
          <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider block mb-1">
            CONVENTIONAL ASSUMPTION (OBJECTION)
          </span>
          <p className="font-ubuntu text-base text-rose-200/70 line-through leading-relaxed">
            {slide.conventionalWisdom || 'Presentations must be compressed into 5 generic summary slides to respect executive attention.'}
          </p>
        </div>
        <div className="w-px h-12 bg-slate-800 shrink-0" />
        <div className="flex-1">
          <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
            COUNTER-INTUITIVE ARCHITECTURAL THESIS
          </span>
          <p className="font-ubuntu text-base text-cyan-200 font-semibold leading-relaxed">
            {slide.counterIntuitiveThesis || 'Compression increases ambiguity, slows decisions, and conceals architectural debt.'}
          </p>
        </div>
      </div>

      <div className="z-10 my-auto py-2 text-center">
        <h1 className="font-ubuntu font-black text-[112px] leading-[0.92] tracking-tight text-white max-w-[1740px] mx-auto drop-shadow-2xl">
          {slide.punchlineStatement || 'High-density, modular flat slides eliminate follow-up meetings.'}
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10">
        {pillars.map((pillar, idx) => (
          <InversionPillarCard key={pillar.id || idx} pillar={pillar} index={idx} />
        ))}
      </div>

      <div className="z-10 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-2.5">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <Zap size={14} /> Cognitive reframe validated against 40+ executive presentation reviews
        </span>
        <span>Empirical clarity beats superficial brevity</span>
      </div>
    </div>
  );
};
