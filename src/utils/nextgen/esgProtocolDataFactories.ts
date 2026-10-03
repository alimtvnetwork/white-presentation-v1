import type {
  EsgDecarbonizationRoadmapSlideData,
  ModelContextProtocolMeshSlideData,
  DataCleanRoomSlideData,
} from '../../types/presentation';

// =============================================================================
// Archetype 06: ESG Decarbonization Roadmap (esg-decarbonization-roadmap)
// =============================================================================
export const createEsgDecarbonizationRoadmapSlide = (
  id = `slide-esg-roadmap-${Date.now()}`,
  overrides?: Partial<EsgDecarbonizationRoadmapSlideData>
): EsgDecarbonizationRoadmapSlideData => ({
  id,
  type: 'esg-decarbonization-roadmap',
  title: 'Corporate Decarbonization & Net-Zero Roadmap',
  subtitle: 'SBTi-Validated 1.5°C Trajectory Across Scopes 1, 2 & 3 Emission Reduction Wedges',
  kicker: 'Sustainable Enterprise Operations',
  activeStep: 1,
  maxSteps: 4,
  energyMix: {
    renewablePercentage: 84,
    gridAveragePercentage: 12,
    nuclearPercentage: 4,
    isCarbonNeutralDataCenterAchieved: true,
  },
  esgScorecard: {
    cdpRating: 'A',
    msciEsgScore: 'AAA',
    isCompliantWithCsrd: true,
  },
  reductionWedges: [
    {
      wedgeName: '24/7 Clean Energy PPAs',
      reductionTonsPerYear: 320000,
      costPerTonUsd: 14.5,
      isOperationalized: true,
      hasDirectMeasurement: true,
    },
    {
      wedgeName: 'Data Center PUE Optimization (< 1.12)',
      reductionTonsPerYear: 180000,
      costPerTonUsd: 8.2,
      isOperationalized: true,
      hasDirectMeasurement: true,
    },
    {
      wedgeName: 'Scope 3 Supply Chain Hardware Recycling',
      reductionTonsPerYear: 450000,
      costPerTonUsd: 22.0,
      isOperationalized: false,
      hasDirectMeasurement: true,
    },
  ],
  milestoneYears: [
    {
      year: 2025,
      scope1KiloTons: 120,
      scope2KiloTons: 380,
      scope3KiloTons: 700,
      totalReductionPercent: 0,
      isMilestoneAchieved: true,
      isAuditedBySbti: true,
      primaryIntervention: 'Comprehensive Greenhouse Gas Protocol Baseline Audit',
    },
    {
      year: 2030,
      scope1KiloTons: 40,
      scope2KiloTons: 60,
      scope3KiloTons: 500,
      totalReductionPercent: 50,
      isMilestoneAchieved: false,
      isAuditedBySbti: true,
      primaryIntervention: '100% Renewable Data Centers via Virtual PPAs',
    },
    {
      year: 2040,
      scope1KiloTons: 10,
      scope2KiloTons: 0,
      scope3KiloTons: 170,
      totalReductionPercent: 85,
      isMilestoneAchieved: false,
      isAuditedBySbti: false,
      primaryIntervention: 'Silicon Circularity & Clean Hydrogen Transport',
    },
    {
      year: 2050,
      scope1KiloTons: 0,
      scope2KiloTons: 0,
      scope3KiloTons: 0,
      totalReductionPercent: 100,
      isMilestoneAchieved: false,
      isAuditedBySbti: false,
      primaryIntervention: 'Certified Direct Air Carbon Capture Permanent Removal',
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 07: Model Context Protocol Mesh (model-context-protocol-mesh)
// =============================================================================
export const createModelContextProtocolMeshSlide = (
  id = `slide-mcp-mesh-${Date.now()}`,
  overrides?: Partial<ModelContextProtocolMeshSlideData>
): ModelContextProtocolMeshSlideData => ({
  id,
  type: 'model-context-protocol-mesh',
  title: 'Model Context Protocol (MCP) Multi-Server Mesh',
  subtitle: 'Standardized JSON-RPC 2.0 Architectural Bus Connecting Autonomous Agents to External Tool Hubs',
  kicker: 'Universal Context Bus',
  activeStep: 1,
  maxSteps: 4,
  clientHost: {
    hostName: 'Antigravity Autonomous Core',
    agentVersion: 'v1.7.0',
    protocolVersion: '2024-11-05',
    isConnected: true,
    hasToolAutoApproval: false,
  },
  meshMetrics: {
    totalServersConnected: 4,
    totalToolsExposed: 56,
    averageRoundtripMs: 32.2,
    isSecuritySandboxActive: true,
  },
  activeInvocation: {
    invocationId: 'inv-mcp-8921',
    requestedTool: 'execute_split_db_query',
    serverSource: 'mcp-split-database',
    parametersJson: '{"database": "gitmap.db", "query": "SELECT count(*) FROM repositories"}',
    executionDurationMs: 4.8,
    isCompleted: true,
    isPolicyPermitted: true,
    isUserConfirmationRequired: false,
    requiresUserConfirmation: false,
  },
  mcpServers: [
    {
      serverId: 'mcp-server-db',
      name: 'Split SQLite & Postgres Hub',
      transport: 'STDIO',
      toolCount: 14,
      resourceCount: 8,
      pingLatencyMs: 1.2,
      isHealthy: true,
      isAuthorized: true,
      supportedTools: ['query_split_db', 'get_schema', 'explain_plan'],
    },
    {
      serverId: 'mcp-server-github',
      name: 'Enterprise GitHub Gateway',
      transport: 'SSE',
      toolCount: 28,
      resourceCount: 12,
      pingLatencyMs: 45.0,
      isHealthy: true,
      isAuthorized: true,
      supportedTools: ['create_pull_request', 'read_tree', 'check_run'],
    },
    {
      serverId: 'mcp-server-search',
      name: 'Brave Web Research API',
      transport: 'SSE',
      toolCount: 6,
      resourceCount: 2,
      pingLatencyMs: 82.0,
      isHealthy: true,
      isAuthorized: true,
      supportedTools: ['web_search', 'fetch_url_markdown'],
    },
    {
      serverId: 'mcp-server-fs',
      name: 'Hermetic Local Filesystem',
      transport: 'STDIO',
      toolCount: 8,
      resourceCount: 4,
      pingLatencyMs: 0.4,
      isHealthy: true,
      isAuthorized: true,
      supportedTools: ['read_file', 'write_file', 'list_dir'],
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 08: Data Clean Room Collaboration (data-clean-room-collaboration)
// =============================================================================
export const createDataCleanRoomSlide = (
  id = `slide-clean-room-${Date.now()}`,
  overrides?: Partial<DataCleanRoomSlideData>
): DataCleanRoomSlideData => ({
  id,
  type: 'data-clean-room-collaboration',
  title: 'Multi-Party Privacy-Preserving Data Clean Room',
  subtitle: 'Confidential Enclave Computation with Differential Privacy Guarantees and Zero PII Egress',
  kicker: 'Confidential Data Architecture',
  activeStep: 1,
  maxSteps: 4,
  enclaveConfig: {
    enclaveType: 'AWS_NITRO',
    attestationHash: 'sha384:8f9a2b7c4d1e0f3a6b8c9d2e4f5a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4',
    isMemoryEncrypted: true,
    isZeroEgressEnforced: true,
  },
  differentialPrivacy: {
    epsilonBudget: 2.0,
    epsilonUsed: 0.48,
    delta: 0.000001,
    kAnonymityThreshold: 100,
    isBudgetCompliant: true,
  },
  outputMetrics: {
    matchedAudienceMillion: 14.8,
    overlapPercentage: 21.7,
    piiLeaksDetectedCount: 0,
    isExportAuthorized: true,
  },
  collaboratingParties: [
    {
      partyId: 'party-ent-01',
      organizationName: 'Global Retail Enterprise',
      datasetName: 'Omnichannel CRM Active Purchases',
      recordCountMillion: 24.5,
      isEnclaveAttested: true,
      isIngestionCompleted: true,
      hasSignedConsent: true,
    },
    {
      partyId: 'party-pub-02',
      organizationName: 'Premium Media Network',
      datasetName: 'Authenticated Identity Graph',
      recordCountMillion: 68.2,
      isEnclaveAttested: true,
      isIngestionCompleted: true,
      hasSignedConsent: true,
    },
    {
      partyId: 'party-pay-03',
      organizationName: 'Payment Card Consortium',
      datasetName: 'Point-of-Sale Tokenized Signals',
      recordCountMillion: 110.4,
      isEnclaveAttested: true,
      isIngestionCompleted: true,
      hasSignedConsent: true,
    },
  ],
  ...overrides,
});
