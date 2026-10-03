import React from 'react';
import type { CraftsmanshipBenchmarkSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { BenchmarkMetricCard } from './craftsmanship/BenchmarkMetricCard';
import { Award, Watch, Quote, Sparkles } from 'lucide-react';

export const CraftsmanshipBenchmarkSlide: React.FC<{ slide: CraftsmanshipBenchmarkSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const benchmarks = slide.benchmarks || slide.revelations || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30 flex items-center gap-1.5">
            <Award size={12} /> {slide.kicker || 'CRAFTSMANSHIP BENCHMARK'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Horological Precision in Software Architecture</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Precision Craftsmanship: The Luxury Benchmark'}
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto z-10 items-stretch">
        <div
          style={{
            backgroundColor: 'var(--pres-card-bg, rgba(255, 255, 255, 0.05))',
            borderColor: 'rgba(217, 119, 6, 0.3)',
          }}
          className="col-span-5 p-8 rounded-3xl border flex flex-col justify-between relative overflow-hidden"
        >
          <div>
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <Watch size={18} /> {slide.luxuryBrandMetaphor || 'Rolex Perpetual Horological Rigor'}
            </div>
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 mb-6">
              <Quote size={28} className="text-amber-600 dark:text-amber-400 mb-2 opacity-80" />
              <p className="font-poppins text-slate-200 text-base leading-relaxed italic">
                "{slide.prestigeQuote || 'Effortless performance is the product of thousands of unseen hours of discipline.'}"
              </p>
            </div>
          </div>
          <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between">
            <div>
              <div className="font-ubuntu font-bold text-sm text-slate-100">{slide.authorTitle || 'Alim Ul Karim, Chief Software Engineer'}</div>
              <div className="text-[11px] font-mono text-amber-600 dark:text-amber-400/80">Sovereign Architecture Protocol</div>
            </div>
            <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30">
              <Sparkles size={18} />
            </span>
          </div>
        </div>

        <div className="col-span-7 flex flex-col gap-3">
          {benchmarks.map((tier, idx) => (
            <BenchmarkMetricCard
              key={tier.id || idx}
              tier={tier}
              isActive={idx === activeStep}
              isPast={idx < activeStep}
              isFuture={idx > activeStep}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="text-amber-600 dark:text-amber-400 font-bold">10-Year Code Durability Guarantee • Horological Engineering Warranty</span>
        <span className="opacity-80">Zero Technical Debt Policy</span>
      </div>
    </div>
  );
};
