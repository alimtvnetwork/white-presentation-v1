import React, { useRef } from 'react';
import { Minimize2 } from 'lucide-react';
import { useWebcamStore } from '../../stores/webcamStore';
import { useWebcamHotkeys } from '../../hooks/useWebcamHotkeys';
import { WEBCAM_SIZES } from '../../types/webcam';
import { WebcamFrame } from './WebcamFrame';
import { WebcamToolbar } from './WebcamToolbar';

export const PresenterWebcam: React.FC = () => {
  useWebcamHotkeys();
  const { phase, posX, posY, sizeStep, isCircleShape, setPosition, toggleMinimize, toggleExpand } =
    useWebcamStore();
  const isDraggingRef = useRef(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  if (phase === 'off') {
    return null;
  }

  if (phase === 'minimized') {
    return (
      <div
        onClick={toggleMinimize}
        className="fixed bottom-8 right-8 z-50 w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-400 shadow-2xl cursor-pointer hover:scale-105 transition-transform group"
        title="Click to restore camera (M)"
      >
        <WebcamFrame className="w-full h-full" />
        <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-emerald-400 animate-ping pointer-events-none" />
      </div>
    );
  }

  if (phase === 'fullscreen') {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        <WebcamFrame className="w-full h-full !rounded-none !border-0 !ring-0" />
        <div className="absolute bottom-6 right-6 z-10 flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700 text-xs text-slate-300 shadow-xl">
          <span>Slide navigation active (← / →)</span>
          <button
            onClick={toggleExpand}
            className="px-2.5 py-1 bg-violet-600 hover:bg-violet-500 text-white rounded-full flex items-center gap-1 font-medium transition-colors cursor-pointer"
          >
            <Minimize2 size={13} /> Exit (Esc)
          </button>
        </div>
      </div>
    );
  }

  const dims = WEBCAM_SIZES[sizeStep] || WEBCAM_SIZES.M;
  const width = isCircleShape ? dims.h : dims.w;
  const height = dims.h;

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }

    isDraggingRef.current = true;
    dragOffsetRef.current = { x: e.clientX - posX, y: e.clientY - posY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) {
      return;
    }

    const rawX = e.clientX - dragOffsetRef.current.x;
    const rawY = e.clientY - dragOffsetRef.current.y;
    const clampedX = Math.max(8, Math.min(window.innerWidth - width - 8, rawX));
    const clampedY = Math.max(8, Math.min(window.innerHeight - height - 8, rawY));
    setPosition(clampedX, clampedY);
  };

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={() => (isDraggingRef.current = false)}
      onPointerCancel={() => (isDraggingRef.current = false)}
      style={{ left: `${posX}px`, top: `${posY}px`, width: `${width}px`, height: `${height}px` }}
      className="fixed z-50 group cursor-grab active:cursor-grabbing select-none"
    >
      <WebcamFrame className="w-full h-full" />
      <WebcamToolbar />
    </div>
  );
};
