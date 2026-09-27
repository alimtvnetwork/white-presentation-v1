import React from 'react';
import { useEditStore } from '../../stores/editStore';
import { DockPosition, IndicatorPosition } from '../../types/presentation';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, LayoutGrid, X } from 'lucide-react';

interface DockPositionPopoverProps {
  onClose: () => void;
}

export const DockPositionPopover: React.FC<DockPositionPopoverProps> = ({ onClose }) => {
  const { dockPosition, setDockPosition, indicatorPosition, setIndicatorPosition } = useEditStore();

  const dockOptions: Array<{ id: DockPosition; label: string; icon: React.ReactNode }> = [
    { id: 'top-center', label: 'Top', icon: <ArrowUp size={11} /> },
    { id: 'bottom-center', label: 'Bottom', icon: <ArrowDown size={11} /> },
    { id: 'left', label: 'Left', icon: <ArrowLeft size={11} /> },
    { id: 'right', label: 'Right', icon: <ArrowRight size={11} /> },
  ];

  const indicatorOptions: Array<{ id: IndicatorPosition; label: string }> = [
    { id: 'bottom-left', label: 'Left' },
    { id: 'bottom-center', label: 'Center' },
    { id: 'bottom-right', label: 'Right' },
  ];

  return (
    <div className="absolute bottom-full mb-3 bg-slate-900/95 border border-slate-700/90 rounded-2xl p-3 shadow-2xl backdrop-blur-md flex flex-col gap-3 w-64 text-xs z-50 animate__animated animate__fadeIn">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-1.5 font-ubuntu font-bold text-slate-200">
          <LayoutGrid size={14} className="text-violet-400" />
          <span>Screen Layout</span>
        </div>
        <button onClick={onClose} className="p-0.5 text-slate-400 hover:text-white cursor-pointer" title="Close">
          <X size={13} />
        </button>
      </div>

      <div>
        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">Controller Position</div>
        <div className="grid grid-cols-4 bg-slate-950/90 p-0.5 rounded-lg border border-slate-800 w-full">
          {dockOptions.map((opt) => {
            const isSelected = dockPosition === opt.id;

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setDockPosition(opt.id)}
                className={`flex items-center justify-center gap-1 py-1.5 px-0.5 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-violet-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {opt.icon}
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-slate-800 pt-2">
        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">Slider Numbers</div>
        <div className="grid grid-cols-3 bg-slate-950/90 p-0.5 rounded-lg border border-slate-800 w-full">
          {indicatorOptions.map((opt) => {
            const isSelected = indicatorPosition === opt.id;

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setIndicatorPosition(opt.id)}
                className={`py-1.5 px-1 rounded-md text-center text-[11px] font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-violet-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
