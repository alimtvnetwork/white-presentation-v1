import React, { useEffect, useRef } from 'react';
import { useWebcamStore } from '../../stores/webcamStore';

interface WebcamFrameProps {
  className?: string;
}

export const WebcamFrame: React.FC<WebcamFrameProps> = ({ className = '' }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { stream, isCircleShape, isMirrored, hasHalo } = useWebcamStore();

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.srcObject !== stream) {
      video.srcObject = stream;
    }
  }, [stream]);

  const shapeClass = isCircleShape ? 'rounded-full aspect-square' : 'rounded-2xl aspect-video';
  const haloClass = hasHalo ? 'ring-4 ring-violet-500/50 shadow-violet-500/25' : 'ring-1 ring-white/10';

  return (
    <div
      className={`relative overflow-hidden bg-slate-950 border border-slate-700/60 shadow-2xl transition-all duration-300 ${shapeClass} ${haloClass} ${className}`}
    >
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ transform: isMirrored ? 'scaleX(-1)' : 'none' }}
        className="w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
};
