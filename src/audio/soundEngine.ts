// lint-allow: file-size reason="synthesized web audio sound engine" max=220

interface SynthToneParams {
  type: OscillatorType;
  startFreq: number;
  endFreq?: number;
  gain: number;
  duration: number;
}

export function stepVolume(master: number): number {
  const isBelowCeiling = master < 0.3;
  if (isBelowCeiling) return master;
  return Math.max(0.3, master - 0.3);
}

export const calculateStepVolume = stepVolume;

function hasCooldownElapsed(now: number, lastTime: number, windowMs: number): boolean {
  return (now - lastTime) >= windowMs;
}

function triggerTone(ctx: AudioContext, p: SynthToneParams): void {
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();
  const targetEndFreq = p.endFreq ?? p.startFreq;
  osc.type = p.type;
  osc.frequency.setValueAtTime(p.startFreq, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(Math.max(1, targetEndFreq), ctx.currentTime + p.duration * 0.85);
  gainNode.gain.setValueAtTime(p.gain, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + p.duration);
  osc.connect(gainNode);
  gainNode.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + p.duration + 0.02);
}

class PresentationSoundEngine {
  private ctx: AudioContext | null = null;
  private lastSlideChangeMs = 0;
  private lastStepClickMs = 0;
  private lastKeystrokeTapMs = 0;
  private lastThemeSwitchMs = 0;
  private lastStepAdvanceMs = 0;
  private lastStepRewindMs = 0;
  private lastStageCompleteMs = 0;
  private isMuted = false;
  private masterVolume = 0.4;

  private initContext(): AudioContext | null {
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    const isSuspended = Boolean(this.ctx && this.ctx.state === 'suspended');
    if (isSuspended) this.ctx?.resume();
    return this.ctx;
  }

  public setMuted(muted: boolean): void { this.isMuted = muted; }
  public getIsMuted(): boolean { return this.isMuted; }
  public setVolume(volume: number): void { this.masterVolume = Math.max(0, Math.min(1, volume)); }
  public stepVolume(master: number): number { return stepVolume(master); }

  public playSlideWhoosh(direction: 'next' | 'prev' = 'next'): void {
    if (this.isMuted) return;
    const now = performance.now();
    const hasElapsed = hasCooldownElapsed(now, this.lastSlideChangeMs, 120);
    if (!hasElapsed) return;
    this.lastSlideChangeMs = now;
    const ctx = this.initContext();
    if (!ctx) return;
    const isNext = direction === 'next';
    const startFreq = isNext ? 240 : 360;
    const endFreq = isNext ? 480 : 180;
    try {
      triggerTone(ctx, { type: 'sine', startFreq, endFreq, gain: this.masterVolume * 0.35, duration: 0.22 });
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  public playStepClick(): void {
    if (this.isMuted) return;
    const now = performance.now();
    const hasElapsed = hasCooldownElapsed(now, this.lastStepClickMs, 80);
    if (!hasElapsed) return;
    this.lastStepClickMs = now;
    const ctx = this.initContext();
    if (!ctx) return;
    const clickGain = stepVolume(this.masterVolume) * 0.30;
    try {
      triggerTone(ctx, { type: 'triangle', startFreq: 750, endFreq: 320, gain: clickGain, duration: 0.06 });
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  public playKeystrokeTap(): void {
    if (this.isMuted) return;
    const now = performance.now();
    const hasElapsed = hasCooldownElapsed(now, this.lastKeystrokeTapMs, 45);
    if (!hasElapsed) return;
    this.lastKeystrokeTapMs = now;
    const ctx = this.initContext();
    if (!ctx) return;
    try {
      triggerTone(ctx, { type: 'triangle', startFreq: 1100, endFreq: 350, gain: this.masterVolume * 0.30, duration: 0.035 });
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  public playThemeSwitch(): void {
    if (this.isMuted) return;
    const now = performance.now();
    const hasElapsed = hasCooldownElapsed(now, this.lastThemeSwitchMs, 100);
    if (!hasElapsed) return;
    this.lastThemeSwitchMs = now;
    const ctx = this.initContext();
    if (!ctx) return;
    try {
      triggerTone(ctx, { type: 'sine', startFreq: 880, endFreq: 880, gain: this.masterVolume * 0.35, duration: 0.16 });
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  public playPop(): void {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;
    try {
      triggerTone(ctx, { type: 'sine', startFreq: 580, endFreq: 840, gain: this.masterVolume * 0.25, duration: 0.05 });
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  public playStepReveal(): void {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;
    try {
      triggerTone(ctx, { type: 'sine', startFreq: 440, endFreq: 660, gain: stepVolume(this.masterVolume) * 0.28, duration: 0.12 });
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  public playStepAdvance(): void {
    if (this.isMuted) return;
    const now = performance.now();
    const hasElapsed = hasCooldownElapsed(now, this.lastStepAdvanceMs, 50);
    if (!hasElapsed) return;
    this.lastStepAdvanceMs = now;
    const ctx = this.initContext();
    if (!ctx) return;
    const gain = stepVolume(this.masterVolume) * 0.30;
    try {
      triggerTone(ctx, { type: 'sine', startFreq: 440, endFreq: 880, gain, duration: 0.05 });
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  public playStepRewind(): void {
    if (this.isMuted) return;
    const now = performance.now();
    const hasElapsed = hasCooldownElapsed(now, this.lastStepRewindMs, 50);
    if (!hasElapsed) return;
    this.lastStepRewindMs = now;
    const ctx = this.initContext();
    if (!ctx) return;
    const gain = stepVolume(this.masterVolume) * 0.28;
    try {
      triggerTone(ctx, { type: 'sine', startFreq: 660, endFreq: 330, gain, duration: 0.045 });
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  public playStageComplete(): void {
    if (this.isMuted) return;
    const now = performance.now();
    const hasElapsed = hasCooldownElapsed(now, this.lastStageCompleteMs, 100);
    if (!hasElapsed) return;
    this.lastStageCompleteMs = now;
    const ctx = this.initContext();
    if (!ctx) return;
    const chordGain = this.masterVolume * 0.24;
    try {
      // True harmonic C5-E5-G5 triad chord synthesis
      const frequencies = [523.25, 659.25, 783.99];
      const audioNow = ctx.currentTime;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(chordGain, audioNow);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, audioNow + 0.18);
      masterGain.connect(ctx.destination);

      frequencies.forEach((freq) => {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, audioNow);
        osc.connect(masterGain);
        osc.start(audioNow);
        osc.stop(audioNow + 0.18 + 0.02);
      });
    } catch {
      // AudioContext policy suppression fallback
    }
  }
}

export const soundEngine = new PresentationSoundEngine();
