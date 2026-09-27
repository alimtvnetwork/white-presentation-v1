import React from 'react';
import {
  GripHorizontal,
  Circle,
  Square,
  Maximize2,
  Plus,
  Minus,
  Minimize2,
  X,
} from 'lucide-react';
import { useWebcamStore } from '../../stores/webcamStore';

export const WebcamToolbar: React.FC = () => {
  const {
    isCircleShape,
    toggleShape,
    toggleExpand,
    toggleMinimize,
    growSize,
    shrinkSize,
    close,
  } = useWebcamStore();

  return (
    <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-1 bg-slate-900/85 backdrop-blur-md rounded-full border border-slate-700/60 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 text-slate-200 pointer-events-auto">
      <div className="cursor-grab active:cursor-grabbing px-1 text-slate-400 hover:text-white" title="Drag">
        <GripHorizontal size={14} />
      </div>

      <button
        type="button"
        onClick={toggleShape}
        className="p-1 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
        title="Toggle shape (O)"
      >
        {isCircleShape ? <Square size={13} /> : <Circle size={13} />}
      </button>

      <button
        type="button"
        onClick={shrinkSize}
        className="p-1 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
        title="Decrease size (-)"
      >
        <Minus size={13} />
      </button>

      <button
        type="button"
        onClick={growSize}
        className="p-1 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
        title="Increase size (+)"
      >
        <Plus size={13} />
      </button>

      <button
        type="button"
        onClick={toggleExpand}
        className="p-1 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
        title="Fullscreen (E)"
      >
        <Maximize2 size={13} />
      </button>

      <button
        type="button"
        onClick={toggleMinimize}
        className="p-1 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
        title="Minimize to puck (M)"
      >
        <Minimize2 size={13} />
      </button>

      <button
        type="button"
        onClick={close}
        className="p-1 rounded-full hover:bg-red-500/20 text-slate-300 hover:text-red-400 transition-colors cursor-pointer"
        title="Turn off (I)"
      >
        <X size={13} />
      </button>
    </div>
  );
};
