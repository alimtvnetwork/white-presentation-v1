// lint-allow: file-size reason="WCAG contrast runtime & theme token injector" max=520
import { THEME_PALETTES } from './gradientTokens';
import { ThemePalette } from '../types/presentation';
import { isBooleanTrue, isFalse } from '../utils/booleanGuards';

const THEME_STORAGE_KEY = 'white.theme.v1';
const SYNC_CHANNEL_NAME = 'white-deck-sync';

const FONT_DISPLAY = "'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const FONT_BODY = "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const FONT_MONO = "'JetBrains Mono', 'Fira Code', monospace";

export interface ContrastAuditResult {
  themeId: string;
  ratio: number;
  isAccessible: boolean;
  textLuma: number;
  canvasLuma: number;
  accentTextRatio?: number;
  isAccentTextAccessible?: boolean;
  cardHoverTextRatio?: number;
  isCardHoverAccessible?: boolean;
  borderHoverRatio?: number;
  isBorderHoverAccessible?: boolean;
  isZeroYellowCompliant?: boolean;
}

let broadcastChannel: BroadcastChannel | null = null;
const hasWindow = typeof window !== 'undefined';
const hasBroadcast = typeof BroadcastChannel !== 'undefined';

if (hasWindow && hasBroadcast) {
  broadcastChannel = new BroadcastChannel(SYNC_CHANNEL_NAME);
  broadcastChannel.onmessage = (event: MessageEvent) => {
    const isThemeSync = event.data?.type === 'THEME_SYNC';
    const hasThemeId = typeof event.data?.themeId === 'string';
    if (isThemeSync && hasThemeId) {
      applyTheme(event.data.themeId, true);
    }
  };
}

export function resolveUrlTheme(): string | null {
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    const params = new URLSearchParams(window.location.search);
    const themeParam = params.get('theme');
    const hasTheme = Boolean(themeParam);
    if (hasTheme) {
      return themeParam;
    }
  }
  return null;
}

export function saveThemeToStorage(themeId: string): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  } catch {
    // ignore storage access errors in restricted iframe environments
  }
}

export function getStoredTheme(): string {
  const urlTheme = resolveUrlTheme();
  const hasUrlTheme = Boolean(urlTheme);
  if (hasUrlTheme) {
    saveThemeToStorage(urlTheme!);
    return urlTheme!;
  }
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'white-brand';
  } catch {
    return 'white-brand';
  }
}

export function linearizeChannel(val: number): number {
  const norm = val / 255;
  const isLinearDomain = norm <= 0.04045;
  if (isLinearDomain) {
    return norm / 12.92;
  }
  return Math.pow((norm + 0.055) / 1.055, 2.4);
}

export function calculateRelativeLuminance(r: number, g: number, b: number): number {
  const lr = linearizeChannel(r);
  const lg = linearizeChannel(g);
  const lb = linearizeChannel(b);
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
}

export function parseHexColor(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const isShort = clean.length === 3;
  const full = isShort ? clean.split('').map((c) => c + c).join('') : clean;
  const num = parseInt(full.slice(0, 6), 16) || 0;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return [r, g, b];
}

export function parseRgbColor(rgbStr: string): [number, number, number] {
  const matches = rgbStr.match(/\d+/g);
  const hasValidMatches = Boolean(matches && matches.length >= 3);
  if (hasValidMatches) {
    const r = Number(matches![0]);
    const g = Number(matches![1]);
    const b = Number(matches![2]);
    return [r, g, b];
  }
  return [0, 0, 0];
}

export function parseColorToRgb(color: string): [number, number, number] {
  const trimmed = color.trim();
  const isHex = trimmed.startsWith('#');
  if (isHex) {
    return parseHexColor(trimmed);
  }
  return parseRgbColor(trimmed);
}

export function hexToLuminance(color: string): number {
  const [r, g, b] = parseColorToRgb(color);
  return calculateRelativeLuminance(r, g, b);
}

export function contrastRatio(luma1: number, luma2: number): number {
  const highLuma = Math.max(luma1, luma2);
  const lowLuma = Math.min(luma1, luma2);
  return (highLuma + 0.05) / (lowLuma + 0.05);
}

export function logContrastAudit(themeId: string, ratio: number, isAccessible: boolean): void {
  if (isAccessible) {
    console.info(`[ThemeContrast] ${themeId} passes WCAG AA (${ratio.toFixed(2)}:1)`);
    return;
  }
  console.warn(`[ThemeContrast] ${themeId} fails WCAG AA: ${ratio.toFixed(2)}:1 < 4.5:1`);
}

export function isYellowish(color: string): boolean {
  const [r, g, b] = parseColorToRgb(color);
  return r >= 180 && g >= 140 && b <= 110;
}

function getKnownLightAccent(themeId: string): string | null {
  if (themeId === 'github-light') return '#0969DA';
  if (themeId === 'paper-ink') return '#8A5A0E';
  if (themeId === 'white-brand') return '#6D28D9';
  return null;
}

export function resolveAccentTextColor(theme: ThemePalette, isDark: boolean): string {
  if (isDark) return theme.accentColor;
  const knownAccent = getKnownLightAccent(theme.id);
  if (knownAccent) return knownAccent;
  const canvasLuma = hexToLuminance(theme.canvasBg || '#FFFFFF');
  const candidate = theme.stops?.[7]?.hex || theme.stops?.[8]?.hex || '#6D28D9';
  const isCandidateValid = contrastRatio(hexToLuminance(candidate), canvasLuma) >= 5.5 && !isYellowish(candidate);
  if (isCandidateValid) return candidate;
  return '#6D28D9';
}

export function auditThemeContrast(theme: ThemePalette): ContrastAuditResult {
  const textLuma = hexToLuminance(theme.textColor);
  const canvasLuma = hexToLuminance(theme.canvasBg);
  const ratio = contrastRatio(textLuma, canvasLuma);
  const isAccessible = ratio >= 4.5;
  logContrastAudit(theme.id, ratio, isAccessible);

  const isDark = Boolean(theme.isDark);
  const accentTextColor = resolveAccentTextColor(theme, isDark);
  const accentLuma = hexToLuminance(accentTextColor);
  const accentTextRatio = contrastRatio(accentLuma, canvasLuma);
  const isAccentTextAccessible = accentTextRatio >= 4.5;
  const isZeroYellowCompliant = isDark || !isYellowish(accentTextColor);

  if (isAccentTextAccessible && isZeroYellowCompliant) {
    console.info(`[ThemeContrast] ${theme.id} accent-text passes WCAG AA (${accentTextRatio.toFixed(2)}:1)`);
  } else {
    console.warn(`[ThemeContrast] ${theme.id} accent-text fails WCAG AA: ${accentTextRatio.toFixed(2)}:1 < 4.5:1`);
  }

  // Hover contrast checks across light and dark modes
  const cardHoverHex = isDark ? '#334155' : '#FFFFFF';
  const cardHoverLuma = hexToLuminance(cardHoverHex);
  const cardHoverTextRatio = contrastRatio(textLuma, cardHoverLuma);
  const isCardHoverAccessible = cardHoverTextRatio >= 4.5;

  const borderHoverLuma = hexToLuminance(theme.accentColor);
  const borderHoverRatio = contrastRatio(borderHoverLuma, canvasLuma);
  const isBorderHoverAccessible = borderHoverRatio >= 2.0;

  return {
    themeId: theme.id,
    ratio,
    isAccessible,
    textLuma,
    canvasLuma,
    accentTextRatio,
    isAccentTextAccessible,
    cardHoverTextRatio,
    isCardHoverAccessible,
    borderHoverRatio,
    isBorderHoverAccessible,
    isZeroYellowCompliant,
  };
}

function getCanvasRatioVars(isDark: boolean): Record<string, string> {
  return {
    '--pres-dominant-ratio': '60%',
    '--pres-structural-ratio': '30%',
    '--pres-accent-ratio': '10%',
    '--step-phase-future-opacity': '0.40',
    '--step-phase-past-opacity': '0.75',
    '--step-phase-active-opacity': '1.00',
    '--pres-canvas-gradient': isDark
      ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--pres-accent-hsl, 262 83% 58%) / 0.15), transparent 70%)'
      : 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--pres-accent-hsl, 262 83% 58%) / 0.08), transparent 70%)',
    '--pres-dot-matrix': isDark
      ? 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)'
      : 'radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
    '--pres-kpi-highlight': isDark
      ? 'hsl(var(--pres-accent-hsl, 262 83% 58%) / 0.20)'
      : 'hsl(var(--pres-accent-hsl, 262 83% 58%) / 0.10)',
    '--pres-shadow-subpixel': isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px',
  };
}

function getPresSurfaceVars(theme: ThemePalette, isDark: boolean): Record<string, string> {
  const cardBgHover = isDark ? 'rgba(51, 65, 85, 0.95)' : 'rgba(255, 255, 255, 0.98)';
  return {
    '--pres-bg': theme.canvasBg,
    '--pres-canvas-bg': theme.canvasBg,
    '--pres-bg-surface': isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    '--pres-bg-card': theme.cardBg,
    '--pres-card-bg': theme.cardBg,
    '--pres-bg-card-hover': cardBgHover,
    '--pres-card-bg-hover': cardBgHover,
  };
}

function getPresAccentAndTextVars(theme: ThemePalette, isDark: boolean): Record<string, string> {
  const glow = theme.accentHsl ? `hsl(${theme.accentHsl} / 0.50)` : `${theme.accentColor}40`;
  const accentText = resolveAccentTextColor(theme, isDark);
  return {
    '--pres-accent': theme.accentColor,
    '--pres-accent-text': accentText,
    '--pres-accent-glow': glow,
    '--pres-accent-hover': theme.accentColor,
    '--pres-text': theme.textColor,
    '--pres-text-primary': theme.textColor,
    '--pres-text-muted': theme.subtextColor,
    '--pres-text-secondary': theme.subtextColor,
    '--pres-text-subtle': isDark ? '#64748B' : '#94A3B8',
    '--pres-border': theme.cardBorder,
    '--pres-card-border': theme.cardBorder,
    '--pres-border-hover': theme.accentColor,
    '--pres-card-border-hover': theme.accentColor,
  };
}

function buildColorVars(theme: ThemePalette, isDark: boolean): Record<string, string> {
  return {
    ...getPresSurfaceVars(theme, isDark),
    ...getPresAccentAndTextVars(theme, isDark),
    ...getCanvasRatioVars(isDark),
  };
}

function buildTypographyVars(shadow?: string, isDark = false): Record<string, string> {
  const defaultShadow = isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px';
  const resolvedShadow = shadow || defaultShadow;
  return {
    '--pres-header-shadow': resolvedShadow,
    '--pres-font-display': FONT_DISPLAY,
    '--pres-font-body': FONT_BODY,
    '--pres-font-mono': FONT_MONO,
    '--preset-display-font': FONT_DISPLAY,
    '--preset-body-font': FONT_BODY,
    '--preset-mono-font': FONT_MONO,
  };
}

function buildHslThemeVars(theme: ThemePalette): Record<string, string> {
  const vars: Record<string, string> = {};
  if (theme.accentHsl) {
    vars['--pres-accent-hsl'] = theme.accentHsl;
  }
  if (theme.bgHsl) {
    vars['--pres-bg-hsl'] = theme.bgHsl;
  }
  if (theme.canvasBgHsl) {
    vars['--pres-canvas-bg-hsl'] = theme.canvasBgHsl;
  } else if (theme.bgHsl) {
    vars['--pres-canvas-bg-hsl'] = theme.bgHsl;
  }
  if (theme.textHsl) {
    vars['--pres-text-hsl'] = theme.textHsl;
    vars['--pres-text-primary-hsl'] = theme.textHsl;
  }
  if (theme.cardBgHsl) {
    vars['--pres-card-bg-hsl'] = theme.cardBgHsl;
    vars['--pres-bg-card-hsl'] = theme.cardBgHsl;
  }
  if (theme.subtextHsl) {
    vars['--pres-subtext-hsl'] = theme.subtextHsl;
    vars['--pres-text-muted-hsl'] = theme.subtextHsl;
    vars['--pres-text-secondary-hsl'] = theme.subtextHsl;
  }
  if (theme.cardBorderHsl) {
    vars['--pres-border-hsl'] = theme.cardBorderHsl;
    vars['--pres-card-border-hsl'] = theme.cardBorderHsl;
  }

  // Unadorned Global HSL Triplet Tokens
  vars['--gold'] = '41 100% 50%';
  vars['--gold-glow'] = '41 100% 65%';
  vars['--cream'] = '42 100% 94%';
  vars['--ember'] = '14 80% 57%';
  vars['--ink'] = '240 20% 4%';

  // Fixed Dark Chrome HUD Tokens
  Object.assign(vars, buildChromeVars());

  // Micro-Shadow Weight Variables
  vars['--text-shadow-weight-light'] = 'rgb(255 255 255) 1px 0.7px 0px';
  vars['--text-shadow-weight-light-strong'] = '0 1px 1px hsl(0 0% 100% / 0.7)';
  vars['--text-shadow-weight-dark'] = 'rgb(0 0 0) 1px 0.7px 0px';
  vars['--text-shadow-weight-dark-strong'] = '0 2px 4px hsl(0 0% 0% / 0.6)';

  return vars;
}

export function buildChromeVars(): Record<string, string> {
  return {
    '--chrome-bg': '0 0% 7%', '--chrome-fg': '0 0% 98%',
    '--chrome-border': '0 0% 100% / 0.12', '--chrome-hover': '0 0% 100% / 0.08',
    '--chrome-fg-muted': '0 0% 98% / 0.78', '--chrome-fg-subtle': '0 0% 98% / 0.62',
    '--chrome-border-strength': '0.22', '--chrome-divider-strength': '0.12',
    '--chrome-bg-hover': '0 0% 100% / 0.08', '--chrome-border-glow': 'rgba(255, 255, 255, 0.25)',
    '--chrome-glass-blur': '16px', '--chrome-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
    '--chrome-radius': '12px', '--chrome-text': '#F8FAFC',
    '--chrome-subtext': '#94A3B8', '--chrome-accent': '#6366F1',
  };
}

let cachedVarKeys: string[] | null = null;

function collectPaletteVarKeys(palette: ThemePalette, keys: Set<string>): void {
  const isDark = Boolean(palette.isDark);
  Object.keys(buildColorVars(palette, isDark)).forEach((k) => keys.add(k));
  Object.keys(buildTypographyVars()).forEach((k) => keys.add(k));
  Object.keys(buildHslThemeVars(palette)).forEach((k) => keys.add(k));
  Object.keys(buildStopVars(palette.stops)).forEach((k) => keys.add(k));
  Object.keys(buildChromeVars()).forEach((k) => keys.add(k));
}

export function getAllThemeVarKeys(): string[] {
  const hasCached = Boolean(cachedVarKeys);
  if (hasCached) return cachedVarKeys!;
  const keys = new Set<string>();
  Object.values(THEME_PALETTES).forEach((palette) => {
    collectPaletteVarKeys(palette, keys);
  });
  cachedVarKeys = Array.from(keys);
  return cachedVarKeys;
}

export function cleanRootThemeVariables(targetRoot: HTMLElement): void {
  const varKeys = getAllThemeVarKeys();
  varKeys.forEach((key) => {
    targetRoot.style.removeProperty(key);
  });
}

function buildStopVars(stops: ThemePalette['stops']): Record<string, string> {
  const vars: Record<string, string> = {};
  const hasStops = Array.isArray(stops);
  if (hasStops) {
    stops.forEach((stop, index) => {
      vars[`--pres-stop-${stop.step}`] = stop.hex;
      vars[`--pres-s${stop.step}`] = stop.hex;
      vars[`--pres-stop-${stop.step}-hsl`] = stop.hsl;
      vars[`--pres-stop-${stop.step}-rgb`] = stop.rgb;
      vars[`--pres-gradient-stop-${index}`] = stop.hex;
      vars[`--pres-gradient-stop-${index}-hsl`] = stop.hsl;
      vars[`--pres-gradient-stop-${index}-rgb`] = stop.rgb;
    });
  }
  return vars;
}

function toggleThemeClass(el: HTMLElement, isDark: boolean): void {
  if (isDark) {
    el.classList.add('theme-dark', 'dark');
    el.classList.remove('theme-light');
  } else {
    el.classList.add('theme-light');
    el.classList.remove('theme-dark', 'dark');
  }
}

function setRootThemeAttributes(root: HTMLElement, theme: ThemePalette, isDark: boolean): void {
  root.setAttribute('data-theme', theme.id);
  root.setAttribute('data-appearance', isDark ? 'dark' : 'light');
  root.setAttribute('data-is-dark', isDark ? 'true' : 'false');
}

function assembleThemeVars(theme: ThemePalette, isDark: boolean): Record<string, string> {
  const defaultShadow = isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px';
  return {
    ...buildColorVars(theme, isDark),
    ...buildTypographyVars(theme.headerShadow || defaultShadow),
    ...buildHslThemeVars(theme),
    ...buildStopVars(theme.stops),
    ...buildChromeVars(),
  };
}

export function applyThemeRuntimeVariables(theme: ThemePalette, rootEl: HTMLElement): void {
  const isDark = Boolean(theme.isDark);
  cleanRootThemeVariables(rootEl);
  const vars = assembleThemeVars(theme, isDark);
  Object.entries(vars).forEach(([key, val]) => {
    rootEl.style.setProperty(key, val);
  });
  toggleThemeClass(rootEl, isDark);
}

export function applyThemeToRoot(palette: ThemePalette, targetRoot?: HTMLElement): void {
  const root = targetRoot || (typeof document !== 'undefined' ? document.documentElement : null);
  if (!root) return;
  toggleThemeClass(root, Boolean(palette.isDark));
}

function applyVarsToRoot(vars: Record<string, string>, isDark: boolean): void {
  const root = document.documentElement;
  Object.entries(vars).forEach(([key, val]) => {
    root.style.setProperty(key, val);
  });
  toggleThemeClass(root, isDark);
  const presRoot = document.getElementById('presentation-root');
  if (presRoot) {
    cleanRootThemeVariables(presRoot);
    Object.entries(vars).forEach(([key, val]) => presRoot.style.setProperty(key, val));
    toggleThemeClass(presRoot, isDark);
  }
}

function broadcastThemeChange(themeId: string, isFromBroadcast: boolean): void {
  const isLocalOrigin = isFalse(isFromBroadcast);
  const hasChannel = Boolean(broadcastChannel);
  if (isLocalOrigin && hasChannel) {
    broadcastChannel!.postMessage({ type: 'THEME_SYNC', themeId });
  }
}

export function applyTheme(id: string, isFromBroadcast = false): ThemePalette {
  const theme = THEME_PALETTES[id] || THEME_PALETTES['white-brand'];
  const hasDocument = typeof document !== 'undefined';
  if (isFalse(hasDocument)) return theme;
  const isDark = Boolean(theme.isDark);
  const root = document.documentElement;
  setRootThemeAttributes(root, theme, isDark);
  cleanRootThemeVariables(root);
  applyThemeToRoot(theme);
  applyVarsToRoot(assembleThemeVars(theme, isDark), isDark);
  saveThemeToStorage(theme.id);
  auditThemeContrast(theme);
  broadcastThemeChange(theme.id, isFromBroadcast);
  return theme;
}

export function initThemeRuntime(): void {
  const urlTheme = resolveUrlTheme();
  const hasUrlTheme = Boolean(urlTheme);
  if (hasUrlTheme) {
    applyTheme(urlTheme!);
    return;
  }
  const storedTheme = getStoredTheme();
  applyTheme(storedTheme);
}

const isDomReady = typeof window !== 'undefined';
if (isDomReady) {
  initThemeRuntime();
}
