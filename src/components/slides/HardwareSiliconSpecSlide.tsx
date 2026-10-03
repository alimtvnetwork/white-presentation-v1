import React from 'react';
import type { HardwareSiliconSpecSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { SiliconDieFloorplan } from './silicon/SiliconDieFloorplan';
import { SiliconBlockMetricCard } from './silicon/SiliconBlockMetricCard';
import { SiliconTelemetryGrid } from './silicon/SiliconTelemetryGrid';
import { Cpu, ShieldCheck } from 'lucide-react';

export const HardwareSiliconSpecSlide: React.FC<{ slide: HardwareSiliconSpecSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const blocks = slide.blocks || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30 flex items-center gap-1.5">
            <Cpu size={12} /> {slide.kicker || 'HARDWARE ARCHITECTURE'}
          </span>
          <span className="font-mono text-xs text-amber-800 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            TSMC N3E Foundry Validated | {slide.processNodeNm ?? 3}nm Node | {slide.transistorCountBillions ?? 48.2}B Transistors
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Sovereign Neural Silicon Micro-Architecture'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || `${slide.processNodeNm ?? 3}nm FinFET process with ${slide.transistorCountBillions ?? 48.2} billion transistors and ${slide.thermalDesignPowerWatts ?? 120}W thermal envelope.`}
        </p>
      </div>

      <div className="z-10 grid grid-cols-12 gap-8 my-auto items-stretch h-[610px]">
        <div className="col-span-7 flex flex-col gap-4">
          <div className="flex-1">
            <SiliconDieFloorplan
              blocks={blocks}
              dieAreaSquareMm={slide.dieAreaSquareMm ?? 312}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {blocks.slice(0, 2).map((blk) => (
              <SiliconBlockMetricCard
                key={blk.id}
                block={blk}
                totalDieArea={slide.dieAreaSquareMm ?? 312}
              />
            ))}
          </div>
        </div>

        <div className="col-span-5 flex flex-col">
          <SiliconTelemetryGrid
            processNodeNm={slide.processNodeNm ?? 3}
            transistorCountBillions={slide.transistorCountBillions ?? 48.2}
            thermalDesignPowerWatts={slide.thermalDesignPowerWatts ?? 120}
            dieAreaSquareMm={slide.dieAreaSquareMm ?? 312}
            memoryBandwidthGbps={slide.memoryBandwidthGbps ?? 800}
            isTapeoutVerified={slide.isTapeoutVerified}
          />
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">
          <ShieldCheck size={14} /> TSMC N3E Foundry Validated | Zero Timing Violations | A0 Stepping
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Status: Production Ready</span>
      </div>
    </div>
  );
};
