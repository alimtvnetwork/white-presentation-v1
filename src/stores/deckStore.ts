// lint-allow: file-size reason="presentation deck initial seed state" max=450
import { create } from 'zustand';
import { PresentationDeck, SlideData } from '../types/presentation';
import { soundEngine } from '../audio/soundEngine';

const INITIAL_DECK: PresentationDeck = {
  id: 'white-presentation-v1',
  title: 'White Presentation System - Executive Keynote',
  version: '1.0.0',
  author: 'Riseup Asia Architectural Team',
  defaultThemeId: 'white-brand',
  canvas: {
    width: 1920,
    height: 1080,
    aspectRatio: '16:9',
  },
  slides: [
    {
      id: 'slide-01',
      type: 'white-master',
      title: 'Stories Are Emotional Bridges',
      headline: 'Stories Are Emotional Bridges',
      subtitle: 'Transform raw data and technical architecture into unforgettable enterprise impact.',
      kicker: 'STRATEGIC NARRATIVE',
      bulletPoints: [
        {
          id: 'bp-1',
          icon: 'heart',
          title: 'Emotional Resonance',
          description: 'Facts inform, but emotional connections drive multimillion-dollar decisions and leadership alignment.',
        },
        {
          id: 'bp-2',
          icon: 'users',
          title: 'Human-Centered Context',
          description: 'Bridge executive vision with operational reality through clear, empathetic engineering narratives.',
        },
        {
          id: 'bp-3',
          icon: 'chat',
          title: 'Catalyst for Action',
          description: 'A well-crafted story breaks through executive inertia, galvanizing teams toward swift execution.',
        },
      ],
      heroImage: {
        src: '/assets/screenshots/hero-speaker-clean.png',
        alt: 'Speaker sharing emotional narrative with audience',
        featherDirection: 'left',
      },
      neonGlow: {
        color: '#F43F5E',
        shape: 'heart',
        pulseRateSeconds: 2.2,
      },
      logo: {
        src: '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png',
        alt: 'Riseup Asia Logo',
        heightPx: 42,
      },
    },
    {
      id: 'slide-02',
      type: 'title',
      title: 'Autonomous Presentation Architecture',
      subtitle: 'The Next-Generation Declarative Slide Platform for High-Stakes Tech Keynotes',
      kicker: 'KEYNOTE PRESENTATION',
      presenter: {
        name: 'Alim Ul Karim',
        role: 'Chief Software Engineer',
        company: 'Riseup Asia LLC',
      },
      date: 'September 2026',
    },
    {
      id: 'slide-03',
      type: 'persona',
      title: 'Technical Leadership',
      name: 'Alim Ul Karim',
      role: 'Chief Software Engineer',
      quote: 'We engineer sovereign, high-leverage software architectures with zero defect tolerance.',
      avatarUrl: '/assets/screenshots/hero-speaker-clean.png',
      metrics: [
        { value: '15+ Yrs', label: 'Enterprise Systems' },
        { value: '40M+', label: 'Active End Users' },
      ],
      bioBullets: [
        'Direct architect of multi-tenant enterprise cloud systems across North America & Asia.',
        'Pioneer of deterministic AI workflows, autonomous loop orchestration, and zero-defect QA.',
        'Senior enterprise software consultant for scalable cloud architectures.',
      ],
    },
    {
      id: 'slide-04',
      type: 'before-after',
      title: 'Transformation Paradigm',
      subtitle: 'Quantifiable operational shift from fragmented overhead to automated delivery.',
      kicker: 'STRATEGIC SHIFT',
      before: {
        title: 'Legacy Inefficient Paradigm',
        tag: 'BEFORE RISEUP',
        points: [
          'Fragmented, static PowerPoint decks unable to scale to 4K or mobile viewports.',
          'Baking text into raster images resulting in pixelated blur, zero SEO, and no searchability.',
          'Manual slide editing that wipes out live annotations and presentation timers.',
          'Disjointed brand palettes causing cognitive fatigue and low executive retention.',
        ],
      },
      after: {
        title: 'The White Presentation Standard',
        tag: 'AFTER TRANSFORMATION',
        points: [
          'Ultra-sharp 100% pure DOM text rendered at native vector resolution on any screen.',
          'Mathematical 10-step gradient precision system guaranteeing deterministic contrast.',
          'Decoupled Builder Mode allowing live element tweaking without presentation resets.',
          'Relational multi-tenant SQL schema enabling seamless enterprise team collaboration.',
        ],
      },
    },
    {
      id: 'slide-05',
      type: 'talent-funnel',
      title: 'Engineering Selectivity Standards',
      subtitle: 'Rigorous multi-stage vetting process ensuring top 1% global software craftsmanship.',
      kicker: 'HUMAN CAPITAL',
      stages: [
        {
          stageNumber: 1,
          title: 'Algorithmic & Architecture Screen',
          description: 'Automated complexity assessment and distributed systems profiling.',
          metric: '10,000+ Screened',
          conversionRate: 'Top 15%',
        },
        {
          stageNumber: 2,
          title: 'Live Pair Programming & System Design',
          description: '3-hour real-time refactoring under strict latency and fault-tolerance constraints.',
          metric: '1,500 Evaluated',
          conversionRate: 'Top 5%',
        },
        {
          stageNumber: 3,
          title: 'Communication & Culture Alignment',
          description: 'Executive narrative readiness and autonomous problem-solving velocity.',
          metric: '200 Finalists',
          conversionRate: 'Top 2%',
        },
        {
          stageNumber: 4,
          title: 'Deployed Production Specialists',
          description: 'Top-tier talent assigned to client mission-critical squads.',
          metric: 'Top 1% Hired',
          conversionRate: '0.8% Selected',
        },
      ],
    },
    {
      id: 'slide-06',
      type: 'pricing',
      title: 'Engagement & Partnership Tiers',
      subtitle: 'Transparent, predictable commercial models tailored to engineering scale.',
      kicker: 'INVESTMENT & VALUE',
      tiers: [
        {
          name: 'Dedicated Squad',
          price: '$4,500',
          cadence: '/ month',
          features: [
            '1 Senior Fullstack Lead',
            '2 Frontend/Backend Engineers',
            'Daily async standups & sprint reviews',
            'Direct Slack / Discord integration',
            'Weekly deployed production deliverables',
          ],
          ctaLabel: 'Select Squad Tier',
        },
        {
          name: 'Scale Partner',
          price: '$8,900',
          cadence: '/ month',
          isFeatured: true,
          badge: 'MOST POPULAR',
          features: [
            '1 Principal Systems Director',
            '4 Senior Fullstack Engineers',
            'Dedicated DevOps & Cloud Architect',
            'Real-time pair programming syncs',
            '24/7 Priority SLA response time',
            'Continuous autonomous QA pipeline',
          ],
          ctaLabel: 'Partner at Scale',
        },
        {
          name: 'Enterprise Custom',
          price: 'Custom',
          cadence: 'annually',
          features: [
            'Full Cross-Functional Organization',
            'SOC2, HIPAA & ISO-27001 compliance',
            'On-premise / VPC cloud deployment',
            'Executive advisory board seat',
            'Dedicated 99.99% uptime guarantees',
          ],
          ctaLabel: 'Contact Leadership',
        },
      ],
    },
    {
      id: 'slide-07',
      type: 'key-player',
      title: 'Principal Systems Architect',
      subtitle: 'Spearheading distributed systems, low-latency microservices, and AI pipelines.',
      kicker: 'CORE TALENT',
      name: 'Marek Nowak',
      role: 'Staff Infrastructure Architect',
      avatarUrl: '/assets/screenshots/white-presentation-sample-01.png',
      skills: ['Kubernetes', 'Go / Rust', 'Distributed SQL', 'Kafka', 'Terraform'],
      pillars: [
        {
          title: 'High-Scale Cloud Topologies',
          description: 'Designed zero-downtime multi-region failover clusters handling 100k+ RPS.',
          icon: 'cloud',
        },
        {
          title: 'Autonomous AI Orchestration',
          description: 'Engineered self-looping multi-agent execution waves with continuous linter gates.',
          icon: 'layers',
        },
        {
          title: 'Security & Enterprise Compliance',
          description: 'Achieved automated SOC2 Type II and ISO-27001 continuous compliance telemetry.',
          icon: 'security',
        },
      ],
    } as any,
    {
      id: 'slide-08',
      type: 'steps-chain',
      title: 'Autonomous Delivery Lifecycle',
      subtitle: 'From architectural discovery to continuous automated production release.',
      kicker: 'EXECUTION WAVE',
      steps: [
        {
          stepNumber: 1,
          title: 'Architecture Spec',
          duration: 'Week 1',
          deliverables: ['Canvas coordinate schemas', '10-step gradient tokens', 'Pure DOM contracts'],
        },
        {
          stepNumber: 2,
          title: 'Decoupled State Engine',
          duration: 'Week 2',
          deliverables: ['useDeckStore & useEditStore', 'applyEdit mutator funnel', 'Sound cues'],
        },
        {
          stepNumber: 3,
          title: 'Component Generation',
          duration: 'Week 3-4',
          deliverables: ['White master slide', 'Hero feather plate', 'Neon glowing heart'],
        },
        {
          stepNumber: 4,
          title: 'Production Deploy',
          duration: 'Continuous',
          deliverables: ['Automated CI/CD verification', 'Headless 4K export', 'Multi-tenant DB'],
        },
      ],
    } as any,
    {
      id: 'slide-09',
      type: 'testimonials',
      title: 'Executive Endorsements',
      subtitle: 'Validated by engineering leadership across high-growth venture-backed enterprises.',
      kicker: 'SOCIAL PROOF',
      testimonials: [
        {
          quote: 'The architectural rigor and zero-compromise pure DOM standard made our Series-B product launch a massive hit with enterprise buyers.',
          author: 'Sarah Jenkins',
          title: 'VP of Engineering',
          company: 'CloudPulse Networks',
        },
        {
          quote: 'Riseup delivered 3x faster than our internal estimates with zero technical debt and impeccable typographic fidelity at 4K resolution.',
          author: 'David Chen',
          title: 'Chief Technology Officer',
          company: 'HyperScale AI',
        },
      ],
    } as any,
  ],
};

interface DeckStoreState {
  deck: PresentationDeck;
  activeSlideIndex: number;
  activeThemeId: string;
  isSoundEnabled: boolean;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  setTheme: (themeId: string) => void;
  toggleSound: () => void;
  upsertSlide: (slide: SlideData) => void;
  addSlide: (slide: SlideData) => void;
  deleteSlide: (index: number) => void;
  applyEdit: (updater: (slide: SlideData) => SlideData) => void;
}

export const useDeckStore = create<DeckStoreState>((set, get) => ({
  deck: INITIAL_DECK,
  activeSlideIndex: 0,
  activeThemeId: 'white-brand',
  isSoundEnabled: true,

  nextSlide: () => {
    const { activeSlideIndex, deck, isSoundEnabled } = get();
    if (activeSlideIndex < deck.slides.length - 1) {
      if (isSoundEnabled) soundEngine.playSlideWhoosh('next');
      set({ activeSlideIndex: activeSlideIndex + 1 });
    }
  },

  prevSlide: () => {
    const { activeSlideIndex, isSoundEnabled } = get();
    if (activeSlideIndex > 0) {
      if (isSoundEnabled) soundEngine.playSlideWhoosh('prev');
      set({ activeSlideIndex: activeSlideIndex - 1 });
    }
  },

  goToSlide: (index: number) => {
    const { deck, isSoundEnabled } = get();
    if (index >= 0 && index < deck.slides.length) {
      if (isSoundEnabled) soundEngine.playSlideWhoosh('next');
      set({ activeSlideIndex: index });
    }
  },

  setTheme: (themeId: string) => {
    if (get().isSoundEnabled) soundEngine.playStepClick();
    set({ activeThemeId: themeId });
  },

  toggleSound: () => {
    const nextState = !get().isSoundEnabled;
    soundEngine.setMuted(!nextState);
    set({ isSoundEnabled: nextState });
  },

  upsertSlide: (slide: SlideData) => {
    const { deck, activeSlideIndex } = get();
    const slides = [...deck.slides];
    slides[activeSlideIndex] = slide;
    set({ deck: { ...deck, slides } });
  },

  addSlide: (slide: SlideData) => {
    const { deck } = get();
    const slides = [...deck.slides, slide];
    set({ deck: { ...deck, slides }, activeSlideIndex: slides.length - 1 });
  },

  deleteSlide: (index: number) => {
    const { deck, activeSlideIndex } = get();
    if (deck.slides.length <= 1) return;
    const slides = deck.slides.filter((_, i) => i !== index);
    const newIndex = Math.min(activeSlideIndex, slides.length - 1);
    set({ deck: { ...deck, slides }, activeSlideIndex: newIndex });
  },

  applyEdit: (updater: (slide: SlideData) => SlideData) => {
    const { deck, activeSlideIndex } = get();
    const currentSlide = deck.slides[activeSlideIndex];
    if (!currentSlide) return;
    const updated = updater(currentSlide);
    const slides = [...deck.slides];
    slides[activeSlideIndex] = updated;
    set({ deck: { ...deck, slides } });
  },
}));
