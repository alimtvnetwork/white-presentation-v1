export type WebcamPhase =
  | 'off'
  | 'requesting'
  | 'on'
  | 'minimized'
  | 'fullscreen'
  | 'denied';

export type WebcamSizeStep = 'S' | 'M' | 'L' | 'XL';

export interface WebcamDimensions {
  w: number;
  h: number;
}

export const WEBCAM_SIZES: Record<WebcamSizeStep, WebcamDimensions> = {
  S: { w: 240, h: 135 },
  M: { w: 320, h: 180 },
  L: { w: 480, h: 270 },
  XL: { w: 720, h: 405 },
};

export const STEP_ORDER: readonly WebcamSizeStep[] = ['S', 'M', 'L', 'XL'];
export const MINIMIZED_PUCK_SIZE = 96;

export interface WebcamSettings {
  phase: WebcamPhase;
  sizeStep: WebcamSizeStep;
  isCircleShape: boolean;
  isMirrored: boolean;
  hasHalo: boolean;
  posX: number;
  posY: number;
}

export interface WebcamState extends WebcamSettings {
  stream: MediaStream | null;
  error: string | null;
}

export interface WebcamActions {
  acquire: () => Promise<void>;
  close: () => void;
  toggle: () => Promise<void> | void;
  toggleShape: () => void;
  toggleExpand: () => void;
  toggleMinimize: () => void;
  growSize: () => void;
  shrinkSize: () => void;
  setSizeStep: (step: WebcamSizeStep) => void;
  setPosition: (posX: number, posY: number) => void;
}

export type WebcamStore = WebcamState & WebcamActions;
