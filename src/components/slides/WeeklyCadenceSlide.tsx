import React from 'react';
import type { WeeklyCadenceSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { DayScheduleColumn } from './cadence/DayScheduleColumn';
import { Globe2, Clock, CalendarDays, Compass } from 'lucide-react';

export const WeeklyCadenceSlide: React.FC<{ slide: WeeklyCadenceSlideData }> = ({ slide }) => {
  const currentStep = useDeckStore((s) => s.activeStep);
  const days = slide.days || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30">
            {slide.kicker || 'REMOTE CULTURE'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs flex items-center gap-1">
            <CalendarDays size={12} /> Sun-Thu Operating Rhythm
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
        >
          {slide.title || 'Global Remote Work Culture & Timezone Rhythm'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'High-efficiency operating rhythm designed for maximum deep-work velocity.'}
        </p>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-800 bg-slate-900/40 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <Globe2 size={16} className="text-cyan-400" />
          <span className="text-slate-400">Timezones:</span>
          <span className="text-cyan-300 font-semibold">{slide.primaryTimezonesText}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <Clock size={16} className="text-amber-600 dark:text-amber-400" />
          <span className="text-slate-400">Golden Overlap:</span>
          <span className="text-amber-800 dark:text-amber-300 font-semibold">{slide.goldenOverlapWindowText}</span>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 z-10 my-auto h-[560px]">
        {days.map((day, idx) => (
          <DayScheduleColumn
            key={day.id || idx}
            day={day}
            index={idx}
            currentStep={currentStep}
            accentColor="var(--pres-accent, #8b5cf6)"
          />
        ))}
      </div>

      <div className="plane-1-raised p-3.5 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">
          <Compass size={14} /> Cadence Governance Motto
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-poppins italic">
          "{slide.governanceMotto || 'Asynchronous by default, synchronous for celebration and decisive architecture.'}"
        </span>
      </div>
    </div>
  );
};
