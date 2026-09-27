import React from 'react';
import { Video, VideoOff } from 'lucide-react';
import { useWebcamStore } from '../../stores/webcamStore';

export const PresenterWebcamButton: React.FC = () => {
  const { phase, toggle } = useWebcamStore();
  const isActive = phase === 'on' || phase === 'fullscreen' || phase === 'minimized';

  return (
    <button
      onClick={() => void toggle()}
      className={`p-1.5 rounded-full transition-all cursor-pointer relative ${
        isActive
          ? 'bg-emerald-500/20 text-emerald-400 ring-2 ring-emerald-400/80 shadow-lg shadow-emerald-500/20'
          : 'text-slate-400 hover:text-white hover:bg-slate-800'
      }`}
      title="Presenter Camera (I: toggle, O: circle/rect, E: expand)"
      aria-label="Presenter Camera"
    >
      {isActive ? <VideoOff size={16} /> : <Video size={16} />}
      {isActive && (
        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
      )}
    </button>
  );
};
