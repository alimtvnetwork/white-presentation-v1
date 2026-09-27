export type SlideType =
  | 'white-master'
  | 'title'
  | 'persona'
  | 'key-player'
  | 'before-after'
  | 'talent-funnel'
  | 'pricing'
  | 'steps-chain'
  | 'testimonials'
  | 'competitive-edge'
  | 'tech-stack';

export type DockPosition =
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-right'
  | 'left'
  | 'right';

export type IndicatorPosition =
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'left'
  | 'right';

export type CameraPreset =
  | 'overview'
  | 'focus-left'
  | 'focus-right'
  | 'zoom-in';

export interface GradientStop {
  step: number;
  label: string;
  hsl: string;
  rgb: string;
  hex: string;
  luma: number;
  contrastOnWhite: number;
}

export interface ThemePalette {
  id: string;
  name: string;
  description: string;
  isDark?: boolean;
  canvasBg: string;
  textColor: string;
  subtextColor: string;
  cardBg: string;
  cardBorder: string;
  accentColor: string;
  dotMatrix?: boolean;
  headerShadow: string;
  stops: GradientStop[];
}

export interface BaseSlide {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string;
  kicker?: string;
  themeId?: string;
  notes?: string;
}

export interface WhiteMasterSlideData extends BaseSlide {
  type: 'white-master';
  headline: string;
  subtitle: string;
  kicker: string;
  bulletPoints: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
  }>;
  heroImage: {
    src: string;
    alt: string;
    featherDirection: 'left' | 'radial';
  };
  neonGlow: {
    color: string;
    shape: 'heart' | 'star' | 'circle';
    pulseRateSeconds: number;
    enabled?: boolean;
  };
  logo: {
    src: string;
    alt: string;
    heightPx: number;
  };
}

export interface TitleSlideData extends BaseSlide {
  type: 'title';
  presenter: {
    name: string;
    role: string;
    avatarUrl?: string;
    company?: string;
  };
  date?: string;
}

export interface PersonaSlideData extends BaseSlide {
  type: 'persona';
  name: string;
  role: string;
  quote?: string;
  avatarUrl: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
  bioBullets: string[];
}

export interface KeyPlayerSlideData extends BaseSlide {
  type: 'key-player';
  name: string;
  role: string;
  avatarUrl: string;
  skills: string[];
  pillars: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface BeforeAfterSlideData extends BaseSlide {
  type: 'before-after';
  before: {
    title: string;
    tag?: string;
    points: string[];
  };
  after: {
    title: string;
    tag?: string;
    points: string[];
  };
}

export interface TalentFunnelSlideData extends BaseSlide {
  type: 'talent-funnel';
  stages: Array<{
    stageNumber: number;
    title: string;
    description: string;
    metric: string;
    conversionRate: string;
  }>;
}

export interface PricingSlideData extends BaseSlide {
  type: 'pricing';
  tiers: Array<{
    name: string;
    price: string;
    cadence: string;
    isFeatured?: boolean;
    badge?: string;
    features: string[];
    ctaLabel: string;
  }>;
}

export interface StepsChainSlideData extends BaseSlide {
  type: 'steps-chain';
  steps: Array<{
    stepNumber: number;
    title: string;
    description?: string;
    duration?: string;
    deliverables?: string[];
    isCompleted?: boolean;
    status?: string;
  }>;
}

export interface TestimonialsSlideData extends BaseSlide {
  type: 'testimonials';
  testimonials: Array<{
    quote: string;
    author: string;
    title: string;
    company: string;
    avatarUrl?: string;
  }>;
  partnerLogos?: string[];
}

export interface CompetitiveEdgeSlideData extends BaseSlide {
  type: 'competitive-edge';
  headers: string[];
  rows: Array<{ feature: string; competitor: string; us: string; isHighlight?: boolean; }>;
}

export interface TechStackSlideData extends BaseSlide {
  type: 'tech-stack';
  categories: Array<{
    name: string;
    icon: string;
    technologies: Array<{ name: string; level: string; badgeColor?: string; }>;
  }>;
}

export type SlideData =
  | WhiteMasterSlideData
  | TitleSlideData
  | PersonaSlideData
  | KeyPlayerSlideData
  | BeforeAfterSlideData
  | TalentFunnelSlideData
  | PricingSlideData
  | StepsChainSlideData
  | TestimonialsSlideData
  | CompetitiveEdgeSlideData
  | TechStackSlideData;

export interface PresentationDeck {
  id: string;
  title: string;
  version: string;
  author: string;
  defaultThemeId: string;
  canvas: {
    width: number;
    height: number;
    aspectRatio: string;
  };
  slides: SlideData[];
}
