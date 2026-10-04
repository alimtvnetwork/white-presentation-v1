// lint-allow: file-size reason="EditorialQuoteSpotlightSlide monumental quote spotlight" max=120
import React from 'react';
import type { EditorialQuoteSpotlightSlideData } from '../../../types/suite2032Archetypes';
import { Quote, CheckCircle2, Bookmark, Sparkles } from 'lucide-react';

export const EditorialQuoteSpotlightSlide: React.FC<{
  slide: EditorialQuoteSpotlightSlideData;
  activeStep?: number;
}> = ({ slide }) => {
  const takeaways = slide.keyTakeaways || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg, #0b0f19)', color: 'var(--pres-text, #f8fafc)' }}
      className="relative w-[1920px] h-[1080px] p-[56px_72px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="font-mono text-base font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full bg-[var(--pres-accent,#6366f1)]/10 text-[var(--pres-accent,#818cf8)] border border-[var(--pres-accent,#6366f1)]/30 flex items-center gap-2 mb-3 w-fit">
            <Sparkles size={16} />
            {slide.kicker || 'INDUSTRY LEADERSHIP & PERSPECTIVE'}
          </span>
          <h1 className="text-4xl font-bold font-display tracking-tight text-white mb-2">{slide.title}</h1>
          <p className="text-base text-slate-400 max-w-[1200px] leading-relaxed">{slide.subtitle}</p>
        </div>
        <div className="p-3 px-5 rounded-xl bg-white/5 border border-white/10 text-right shrink-0">
          <div className="font-mono text-sm text-[var(--pres-accent,#818cf8)] font-bold">{slide.publicationSource}</div>
          <div className="text-sm text-slate-400">{slide.publicationDate}</div>
        </div>
      </div>

      <div className="relative my-auto p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden">
        <Quote className="absolute -top-4 -left-4 w-32 h-32 text-[var(--pres-accent,#6366f1)] opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-[1500px]">
          <p className="font-display italic text-3xl font-medium leading-relaxed text-slate-100 mb-8 tracking-wide">
            &ldquo;{slide.primaryQuote}&rdquo;
          </p>
          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--pres-accent,#6366f1)]/20 border border-[var(--pres-accent,#6366f1)]/40 flex items-center justify-center font-bold font-display text-xl text-[var(--pres-accent,#818cf8)]">
                {slide.quoteAttribution.charAt(0)}
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{slide.quoteAttribution}</div>
                <div className="text-base font-semibold text-[var(--pres-accent,#818cf8)]">
                  {slide.attributionTitle} · <span className="text-slate-300 font-normal">{slide.organizationName}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono text-sm text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
              <CheckCircle2 size={16} /> Verified Citation
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {takeaways.map((item) => (
          <div
            key={item.id}
            className={`p-5 rounded-2xl border transition-all ${
              item.isCoreThesis
                ? 'bg-[var(--pres-accent,#6366f1)]/10 border-[var(--pres-accent,#6366f1)]/40'
                : 'bg-white/[0.03] border-white/10'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Bookmark size={16} className="text-[var(--pres-accent,#818cf8)]" />
              <span className="text-base font-bold text-white">{item.takeawayLabel}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{item.supportingContext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
