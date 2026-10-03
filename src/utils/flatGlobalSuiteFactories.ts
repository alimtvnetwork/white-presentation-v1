// lint-allow: file-size reason="Production default factories for 15 flat global suite slide archetypes" max=200
import type {
  InteractiveBranchingCloseSlideData,
  BeforeAfterShowcasePanSlideData,
  SearchSerpProofLightboxSlideData,
  CognitiveInversionPunchlineSlideData,
  TalentPyramidFunnelSvgSlideData,
  HexagonalTechClusterSlideData,
  ConnectedRoadmapRailPulseSlideData,
  CampaignPerformanceLightboxSlideData,
  ExecutiveRosterKeypadSlideData,
  FlatStepProcessFlowSlideData,
  FlatSplitNarrativeStepperSlideData,
  FlatTimelineMilestoneRailSlideData,
  FlatRevealBentoGridSlideData,
  FlatDepthSentenceStackSlideData,
  FlatTypewriterCodeWalkthroughSlideData,
  FlatGlobalSuiteSlideData,
  FlatGlobalSuiteSlideType,
} from '../types/flatGlobalSuiteTypes';
import {
  DEFAULT_BRANCHING_CLOSE_DATA,
  DEFAULT_BEFORE_AFTER_PAN_DATA,
  DEFAULT_SEARCH_SERP_LIGHTBOX_DATA,
  DEFAULT_COGNITIVE_INVERSION_DATA,
  DEFAULT_TALENT_PYRAMID_FUNNEL_SVG_DATA,
  DEFAULT_HEXAGONAL_TECH_CLUSTER_DATA,
  DEFAULT_CONNECTED_ROADMAP_RAIL_PULSE_DATA,
  DEFAULT_CAMPAIGN_PERFORMANCE_LIGHTBOX_DATA,
} from './flatGlobalTemplatesA';
import {
  DEFAULT_EXECUTIVE_ROSTER_KEYPAD_DATA,
  DEFAULT_FLAT_STEP_PROCESS_FLOW_DATA,
  DEFAULT_FLAT_SPLIT_NARRATIVE_STEPPER_DATA,
  DEFAULT_FLAT_TIMELINE_MILESTONE_RAIL_DATA,
  DEFAULT_FLAT_REVEAL_BENTO_GRID_DATA,
  DEFAULT_FLAT_DEPTH_SENTENCE_STACK_DATA,
  DEFAULT_FLAT_TYPEWRITER_CODE_WALKTHROUGH_DATA,
} from './flatGlobalTemplatesB';

export * from './flatGlobalTemplatesA';
export * from './flatGlobalTemplatesB';

// =============================================================================
// Factory Functions (Strict <= 15 lines per function body)
// =============================================================================

export const createInteractiveBranchingCloseSlide = (
  id = `slide-branching-close-${Date.now()}`
): InteractiveBranchingCloseSlideData => ({
  ...DEFAULT_BRANCHING_CLOSE_DATA,
  id,
});

export const createBeforeAfterShowcasePanSlide = (
  id = `slide-before-after-pan-${Date.now()}`
): BeforeAfterShowcasePanSlideData => ({
  ...DEFAULT_BEFORE_AFTER_PAN_DATA,
  id,
});

export const createSearchSerpProofLightboxSlide = (
  id = `slide-serp-lightbox-${Date.now()}`
): SearchSerpProofLightboxSlideData => ({
  ...DEFAULT_SEARCH_SERP_LIGHTBOX_DATA,
  id,
});

export const createCognitiveInversionPunchlineSlide = (
  id = `slide-cognitive-inversion-${Date.now()}`
): CognitiveInversionPunchlineSlideData => ({
  ...DEFAULT_COGNITIVE_INVERSION_DATA,
  id,
});

export const createTalentPyramidFunnelSvgSlide = (
  id = `slide-talent-pyramid-${Date.now()}`
): TalentPyramidFunnelSvgSlideData => ({
  ...DEFAULT_TALENT_PYRAMID_FUNNEL_SVG_DATA,
  id,
});

export const createHexagonalTechClusterSlide = (
  id = `slide-hexagonal-cluster-${Date.now()}`
): HexagonalTechClusterSlideData => ({
  ...DEFAULT_HEXAGONAL_TECH_CLUSTER_DATA,
  id,
});

export const createConnectedRoadmapRailPulseSlide = (
  id = `slide-roadmap-pulse-${Date.now()}`
): ConnectedRoadmapRailPulseSlideData => ({
  ...DEFAULT_CONNECTED_ROADMAP_RAIL_PULSE_DATA,
  id,
});

export const createCampaignPerformanceLightboxSlide = (
  id = `slide-campaign-lightbox-${Date.now()}`
): CampaignPerformanceLightboxSlideData => ({
  ...DEFAULT_CAMPAIGN_PERFORMANCE_LIGHTBOX_DATA,
  id,
});

export const createExecutiveRosterKeypadSlide = (
  id = `slide-roster-keypad-${Date.now()}`
): ExecutiveRosterKeypadSlideData => ({
  ...DEFAULT_EXECUTIVE_ROSTER_KEYPAD_DATA,
  id,
});

export const createFlatStepProcessFlowSlide = (
  id = `slide-process-flow-${Date.now()}`
): FlatStepProcessFlowSlideData => ({
  ...DEFAULT_FLAT_STEP_PROCESS_FLOW_DATA,
  id,
});

export const createFlatSplitNarrativeStepperSlide = (
  id = `slide-narrative-stepper-${Date.now()}`
): FlatSplitNarrativeStepperSlideData => ({
  ...DEFAULT_FLAT_SPLIT_NARRATIVE_STEPPER_DATA,
  id,
});

export const createFlatTimelineMilestoneRailSlide = (
  id = `slide-timeline-rail-${Date.now()}`
): FlatTimelineMilestoneRailSlideData => ({
  ...DEFAULT_FLAT_TIMELINE_MILESTONE_RAIL_DATA,
  id,
});

export const createFlatRevealBentoGridSlide = (
  id = `slide-bento-grid-${Date.now()}`
): FlatRevealBentoGridSlideData => ({
  ...DEFAULT_FLAT_REVEAL_BENTO_GRID_DATA,
  id,
});

export const createFlatDepthSentenceStackSlide = (
  id = `slide-depth-sentence-${Date.now()}`
): FlatDepthSentenceStackSlideData => ({
  ...DEFAULT_FLAT_DEPTH_SENTENCE_STACK_DATA,
  id,
});

export const createFlatTypewriterCodeWalkthroughSlide = (
  id = `slide-code-walkthrough-${Date.now()}`
): FlatTypewriterCodeWalkthroughSlideData => ({
  ...DEFAULT_FLAT_TYPEWRITER_CODE_WALKTHROUGH_DATA,
  id,
});

// lint-allow: function-length reason="exhaustive switch factory over 15 archetypes" max=40
export const createFlatGlobalSuiteSlide = (
  type: FlatGlobalSuiteSlideType,
  id?: string
): FlatGlobalSuiteSlideData => {
  switch (type) {
    case 'interactive-branching-close': return createInteractiveBranchingCloseSlide(id);
    case 'before-after-showcase-pan': return createBeforeAfterShowcasePanSlide(id);
    case 'search-serp-proof-lightbox': return createSearchSerpProofLightboxSlide(id);
    case 'cognitive-inversion-punchline': return createCognitiveInversionPunchlineSlide(id);
    case 'talent-pyramid-funnel-svg': return createTalentPyramidFunnelSvgSlide(id);
    case 'hexagonal-tech-cluster': return createHexagonalTechClusterSlide(id);
    case 'connected-roadmap-rail-pulse': return createConnectedRoadmapRailPulseSlide(id);
    case 'campaign-performance-lightbox': return createCampaignPerformanceLightboxSlide(id);
    case 'executive-roster-keypad': return createExecutiveRosterKeypadSlide(id);
    case 'flat-step-process-flow': return createFlatStepProcessFlowSlide(id);
    case 'flat-split-narrative-stepper': return createFlatSplitNarrativeStepperSlide(id);
    case 'flat-timeline-milestone-rail': return createFlatTimelineMilestoneRailSlide(id);
    case 'flat-reveal-bento-grid': return createFlatRevealBentoGridSlide(id);
    case 'flat-depth-sentence-stack': return createFlatDepthSentenceStackSlide(id);
    case 'flat-typewriter-code-walkthrough': return createFlatTypewriterCodeWalkthroughSlide(id);
    default: return createInteractiveBranchingCloseSlide(id);
  }
};
