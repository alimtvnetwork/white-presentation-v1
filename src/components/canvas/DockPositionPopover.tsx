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
    { id: 'top-center', label: 'Top', icon: <ArrowUp size={12} /> },
    { id: 'bottom-center', label: 'Bottom', icon: <ArrowDown size={12} /> },
    { id: 'left', label: 'Left', icon: <ArrowLeft size={12} /> },
    { id: 'right', label: 'Right', icon: <ArrowRight size={12} /> },
  ];

  const indicatorOptions: Array<{ id: IndicatorPosition; label: string }> = [
    { id: 'bottom-left', label: 'Left' },
    { id: 'bottom-center', label: 'Center' },
    { id: 'bottom-right', label: 'Right' },
  ];

  return (
    <div className="absolute bottom-full mb-3 bg-slate-900/95 border border-slate-700/90 rounded-2xl p-3 shadow-2xl backdrop-blur-md flex flex-col gap-2.5 min-w-[220px] text-xs z-50 animate__animated animate__fadeIn">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-1.5 font-ubuntu font-bold text-slate-200">
          <LayoutGrid size={14} className="text-violet-400" />
          <span>Screen Layout</span>
        </div>
        <button onClick={onClose} className="p-0.5 text-slate-400 hover:text-white cursor-pointer">
          <X size={13} />
        </button>
      </div>

      <div>
        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">Controller Position</div>
        <div className="grid grid-cols-4 gap-1">
          {dockOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setDockPosition(opt.id)}
              className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded-lg border text-[11px] font-medium transition-all cursor-pointer ${
                dockPosition === opt.id
                  ? 'bg-violet-600 border-violet-500 text-white font-bold'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {opt.icon}
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800 pt-2">
        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">Slider Numbers</div>
        <div className="grid grid-cols-3 gap-1">
          {indicatorOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setIndicatorPosition(opt.id)}
              className={`py-1 px-2 rounded-lg border text-center text-[11px] font-medium transition-all cursor-pointer ${
                indicatorPosition === opt.id
                  ? 'bg-violet-600 border-violet-500 text-white font-bold'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
