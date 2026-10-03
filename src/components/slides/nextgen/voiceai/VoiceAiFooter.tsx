import React from 'react';
import { Headphones, Sparkles, Award, Activity } from 'lucide-react';

interface VoiceAiFooterProps {
  codec: string;
  sampleRateKhz: number;
  mosScore: number;
  isFullDuplex: boolean;
  csl?: string;
}

export const VoiceAiFooter: React.FC<VoiceAiFooterProps> = ({
  codec,
  sampleRateKhz,
  mosScore,
  isFullDuplex,
  csl = 'Alim Ul Karim',
}) => {
  return (
    <div className="z-10 plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm">
      <div className="flex items-center gap-7">
        <div className="flex items-center gap-2">
          <Headphones size={16} className="text-indigo-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Audio Transport:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">{codec} @ {sampleRateKhz}kHz</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-emerald-400" />
          <span style={{ color: 'var(--pres-text-muted)' }}>MOS Naturalness:</span>
          <span className="font-bold text-slate-900 dark:text-emerald-300">{mosScore} / 5.0</span>
        </div>
        <div className="w-[1px] h-5 bg-slate-700/50" />
        <div className="flex items-center gap-2">
          <Award size={16} className="text-capsule-gold" />
          <span style={{ color: 'var(--pres-text-muted)' }}>Architect Signoff:</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">
            {csl} (Chief Software Engineer)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
          <Activity size={14} className="text-indigo-400 animate-pulse" />
          {isFullDuplex ? 'Full-Duplex Stream Active' : 'Half-Duplex Fallback'}
        </span>
      </div>
    </div>
  );
};
