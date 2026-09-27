import { create } from 'zustand';
import { WebcamPhase, WebcamSizeStep, WebcamStore, STEP_ORDER } from '../types/webcam';

const readKey = (key: string, fallback = ''): string => {
  try {
    return localStorage.getItem(`riseup.white.webcam.${key}`) ?? fallback;
  } catch {
    return fallback;
  }
};

const saveKey = (key: string, value: string): void => {
  try {
    localStorage.setItem(`riseup.white.webcam.${key}`, value);
  } catch {}
};

const savedStep = readKey('sizeStep', 'M') as WebcamSizeStep;

export const useWebcamStore = create<WebcamStore>((set, get) => ({
  phase: 'off',
  stream: null,
  error: null,
  posX: Number(readKey('posX', '24')) || 24,
  posY: Number(readKey('posY', '80')) || 80,
  sizeStep: STEP_ORDER.includes(savedStep) ? savedStep : 'M',
  isCircleShape: readKey('isCircleShape') === '1',
  isMirrored: readKey('isMirrored', '1') !== '0',
  hasHalo: readKey('hasHalo') === '1',

  acquire: async () => {
    set({ phase: 'requesting', error: null });
    try {
      get().stream?.getTracks().forEach((track) => track.stop());
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      set({ stream, phase: 'on' });
    } catch (err) {
      const error = err instanceof Error ? err.message : 'Webcam access denied';
      set({ phase: 'denied', stream: null, error });
    }
  },

  close: () => {
    get().stream?.getTracks().forEach((track) => track.stop());
    set({ stream: null, phase: 'off', error: null });
  },

  toggle: async () => {
    const isActive = ['on', 'minimized', 'fullscreen'].includes(get().phase);
    if (isActive) {
      get().close();

      return;
    }

    await get().acquire();
  },

  toggleShape: () => {
    const next = !get().isCircleShape;
    saveKey('isCircleShape', next ? '1' : '0');
    set({ isCircleShape: next });
  },

  toggleExpand: () => {
    const isFull = get().phase === 'fullscreen';
    set({ phase: isFull ? 'on' : 'fullscreen' });
  },

  toggleMinimize: () => {
    const isMin = get().phase === 'minimized';
    set({ phase: isMin ? 'on' : 'minimized' });
  },

  growSize: () => {
    const nextIdx = Math.min(STEP_ORDER.indexOf(get().sizeStep) + 1, STEP_ORDER.length - 1);
    get().setSizeStep(STEP_ORDER[nextIdx]);
  },

  shrinkSize: () => {
    const nextIdx = Math.max(STEP_ORDER.indexOf(get().sizeStep) - 1, 0);
    get().setSizeStep(STEP_ORDER[nextIdx]);
  },

  setSizeStep: (sizeStep: WebcamSizeStep) => {
    saveKey('sizeStep', sizeStep);
    set({ sizeStep });
  },

  setPosition: (posX: number, posY: number) => {
    saveKey('posX', String(posX));
    saveKey('posY', String(posY));
    set({ posX, posY });
  },
}));
