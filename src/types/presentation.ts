export type SlideType =
  | 'white-master'
  | 'title'
  | 'persona'
  | 'key-player'
  | 'before-after'
  | 'talent-funnel'
  | 'pricing'
  | 'steps-chain'
  | 'testimonials';

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
    icon: 'heart' | 'users' | 'chat';
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
    duration: string;
    deliverables: string[];
    isCompleted?: boolean;
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

export type SlideData =
  | WhiteMasterSlideData
  | TitleSlideData
  | PersonaSlideData
  | BeforeAfterSlideData
  | TalentFunnelSlideData
  | PricingSlideData
  | StepsChainSlideData
  | TestimonialsSlideData;

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
