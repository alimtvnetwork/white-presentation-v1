import type {
  CodeDiffComparisonSlideData,
  GlobalCloudEdgeMeshSlideData,
  ApiEndpointInspectorSlideData,
  DatabaseSchemaErdSlideData,
  SecurityThreatModelSlideData,
  AiAgentSwarmDagSlideData,
  FinancialBurnRunwaySlideData,
  BentoKpiMosaicSlideData,
  CanaryReleaseGaugeSlideData,
  IncidentRcaPostmortemSlideData,
  SlasAndUptimeStatusSlideData,
  AudioWaveformStudioSlideData,
  HardwareSiliconSpecSlideData,
  CohortRetentionHeatmapSlideData,
  VerifiableAuditLedgerSlideData,
  KineticSuiteSlideType,
  KineticSuiteSlideData,
} from '../types/kineticSuiteArchetypes';
import type { ArchetypeOption } from './extendedSlideFactories';

// =============================================================================
// Archetype 01: Code Diff Comparison (code-diff-comparison)
// =============================================================================
export const createCodeDiffComparisonSlide = (
  id = `slide-${Date.now()}`
): CodeDiffComparisonSlideData => ({
  id,
  type: 'code-diff-comparison',
  kicker: 'CODING GUIDELINE REMEDIATION',
  title: 'Immutable Architecture: Eliminating Pointer Mutation',
  subtitle: 'Refactoring monolithic Go service handlers into stateless, value-semantic pipelines',
  language: 'go',
  beforeHeader: 'Monolithic Pointer Mutator (Before)',
  afterHeader: 'Stateless Monadic Pipeline (After)',
  hasSyntaxHighlighting: true,
  hasLineNumbers: true,
  activeStep: 0,
  maxSteps: 3,
  diffChunks: [
    {
      id: 'chunk-01',
      chunkTitle: 'Eliminate Mutable Receiver',
      chunkExplanation: 'Replace pointer receiver with pure value receiver and copy-on-write semantics.',
      beforeStartLine: 1,
      afterStartLine: 1,
      isCompleted: true,
      beforeLines: [
        { lineNumber: 1, content: 'func (s *OrderService) ApplyDiscount(o *Order) error {', isAddition: false, isDeletion: true, isModified: true, isHighlighted: true },
      ],
      afterLines: [
        { lineNumber: 1, content: 'func ApplyDiscount(o Order) Result[Order] {', isAddition: true, isDeletion: false, isModified: true, isHighlighted: true },
      ],
    },
    {
      id: 'chunk-02',
      chunkTitle: 'Invert Guard & Monadic Result',
      chunkExplanation: 'Remove explicit nil error returns; enforce positive boolean guards and monadic wrap.',
      beforeStartLine: 2,
      afterStartLine: 2,
      isCompleted: false,
      beforeLines: [
        { lineNumber: 2, content: '  if o.Discount == nil { return errors.New("empty") }', isAddition: false, isDeletion: true, isModified: true, isHighlighted: true },
        { lineNumber: 3, content: '  o.Total -= o.Discount.Amount', isAddition: false, isDeletion: true, isModified: true, isHighlighted: true },
      ],
      afterLines: [
        { lineNumber: 2, content: '  if isBooleanFalse(o.hasDiscount) { return Failure(ErrEmptyDiscount) }', isAddition: true, isDeletion: false, isModified: true, isHighlighted: true },
        { lineNumber: 3, content: '  return Success(o.WithCalculatedTotal())', isAddition: true, isDeletion: false, isModified: true, isHighlighted: true },
      ],
    },
    {
      id: 'chunk-03',
      chunkTitle: 'Pure Return with Copy Semantics',
      chunkExplanation: 'Return transformed struct copy without heap escape allocations.',
      beforeStartLine: 4,
      afterStartLine: 4,
      isCompleted: false,
      beforeLines: [
        { lineNumber: 4, content: '  s.cache[o.ID] = o', isAddition: false, isDeletion: true, isModified: true, isHighlighted: true },
        { lineNumber: 5, content: '  return nil', isAddition: false, isDeletion: true, isModified: true, isHighlighted: true },
      ],
      afterLines: [
        { lineNumber: 4, content: '  // Zero heap escape - return pure immutable value struct', isAddition: true, isDeletion: false, isModified: false, isHighlighted: true },
        { lineNumber: 5, content: '  return Success(o)', isAddition: true, isDeletion: false, isModified: true, isHighlighted: true },
      ],
    },
  ],
  refactoringMetrics: [
    { id: 'm1', metricLabel: 'Heap Escapes', metricValue: '0 allocs', metricDelta: '-100%', hasPositiveImpact: true },
    { id: 'm2', metricLabel: 'Execution Speed', metricValue: '42 ns/op', metricDelta: '+280%', hasPositiveImpact: true },
    { id: 'm3', metricLabel: 'Cyclomatic Complexity', metricValue: '2', metricDelta: '-65%', hasPositiveImpact: true },
    { id: 'm4', metricLabel: 'Thread Safety', metricValue: '100% Race-Free', metricDelta: 'Guaranteed', hasPositiveImpact: true },
  ],
});

// =============================================================================
// Archetype 02: Global Cloud Edge Mesh (global-cloud-edge-mesh)
// =============================================================================
export const createGlobalCloudEdgeMeshSlide = (
  id = `slide-${Date.now()}`
): GlobalCloudEdgeMeshSlideData => ({
  id,
  type: 'global-cloud-edge-mesh',
  kicker: 'INFRASTRUCTURE TELEMETRY',
  title: 'Global Anycast Cloud Edge Network & Latency Matrix',
  subtitle: '28 Sovereign Points of Presence delivering sub-20ms global transit via dedicated fiber',
  autonomousSystemNumber: 'AS64512',
  edgeHitRatioPercent: 99.4,
  globalAverageTtfbMs: 14.2,
  hasLivePulse: true,
  activeStep: 0,
  maxSteps: 1,
  regions: [
    { id: 'reg-us-iad', regionCode: 'us-east-iad', city: 'Ashburn', country: 'USA', latitude: 39.04, longitude: -77.48, p50LatencyMs: 6, p95LatencyMs: 11, p99LatencyMs: 16, throughputGbps: 100, isOperational: true, isPrimaryHub: true },
    { id: 'reg-us-sfo', regionCode: 'us-west-sfo', city: 'San Francisco', country: 'USA', latitude: 37.77, longitude: -122.41, p50LatencyMs: 8, p95LatencyMs: 14, p99LatencyMs: 19, throughputGbps: 100, isOperational: true, isPrimaryHub: false },
    { id: 'reg-eu-fra', regionCode: 'eu-central-fra', city: 'Frankfurt', country: 'DEU', latitude: 50.11, longitude: 8.68, p50LatencyMs: 9, p95LatencyMs: 15, p99LatencyMs: 22, throughputGbps: 100, isOperational: true, isPrimaryHub: true },
    { id: 'reg-eu-dub', regionCode: 'eu-west-dub', city: 'Dublin', country: 'IRL', latitude: 53.34, longitude: -6.26, p50LatencyMs: 11, p95LatencyMs: 17, p99LatencyMs: 24, throughputGbps: 100, isOperational: true, isPrimaryHub: false },
    { id: 'reg-ap-nrt', regionCode: 'ap-northeast-nrt', city: 'Tokyo', country: 'JPN', latitude: 35.68, longitude: 139.69, p50LatencyMs: 14, p95LatencyMs: 22, p99LatencyMs: 31, throughputGbps: 100, isOperational: true, isPrimaryHub: true },
    { id: 'reg-ap-sin', regionCode: 'ap-southeast-sin', city: 'Singapore', country: 'SGP', latitude: 1.35, longitude: 103.82, p50LatencyMs: 16, p95LatencyMs: 25, p99LatencyMs: 35, throughputGbps: 100, isOperational: true, isPrimaryHub: false },
  ],
  backboneLinks: [
    { id: 'link-iad-sfo', sourceRegionId: 'reg-us-iad', targetRegionId: 'reg-us-sfo', transitLatencyMs: 22, bandwidthCapacityGbps: 100, isEncrypted: true, isHealthy: true },
    { id: 'link-iad-fra', sourceRegionId: 'reg-us-iad', targetRegionId: 'reg-eu-fra', transitLatencyMs: 68, bandwidthCapacityGbps: 100, isEncrypted: true, isHealthy: true },
    { id: 'link-fra-dub', sourceRegionId: 'reg-eu-fra', targetRegionId: 'reg-eu-dub', transitLatencyMs: 14, bandwidthCapacityGbps: 100, isEncrypted: true, isHealthy: true },
    { id: 'link-fra-nrt', sourceRegionId: 'reg-eu-fra', targetRegionId: 'reg-ap-nrt', transitLatencyMs: 124, bandwidthCapacityGbps: 100, isEncrypted: true, isHealthy: true },
    { id: 'link-nrt-sin', sourceRegionId: 'reg-ap-nrt', targetRegionId: 'reg-ap-sin', transitLatencyMs: 48, bandwidthCapacityGbps: 100, isEncrypted: true, isHealthy: true },
    { id: 'link-sfo-nrt', sourceRegionId: 'reg-us-sfo', targetRegionId: 'reg-ap-nrt', transitLatencyMs: 96, bandwidthCapacityGbps: 100, isEncrypted: true, isHealthy: true },
  ],
});

// =============================================================================
// Archetype 03: API Endpoint Inspector (api-endpoint-inspector)
// =============================================================================
export const createApiEndpointInspectorSlide = (
  id = `slide-${Date.now()}`
): ApiEndpointInspectorSlideData => ({
  id,
  type: 'api-endpoint-inspector',
  kicker: 'API SPECIFICATION',
  title: 'Cryptographic Token Delegation Endpoint',
  subtitle: 'High-throughput mTLS authentication exchange with fine-grained Casbin policy claims',
  httpMethod: 'POST',
  endpointPath: '/api/v1/auth/tokens/delegate',
  authStrategy: 'Mutual TLS + Bearer JWT',
  rateLimitPerMinute: 10000,
  hasSchemaValidation: true,
  responseStatusCode: 200,
  activeStep: 0,
  maxSteps: 4,
  responsePayload: JSON.stringify(
    {
      status: 'success',
      delegationId: 'del_8f92ac41e9b2',
      tenantId: 'tnt_prod_alpha',
      expiresAt: '2026-10-04T00:00:00Z',
      claims: {
        canReadTelemetry: true,
        canTriggerFailover: true,
        canManageAuditLogs: true,
      },
    },
    null,
    2
  ),
  parameters: [
    { id: 'p1', name: 'tenantId', type: 'string', location: 'body', description: 'Target enterprise tenant UUID', isRequired: true },
    { id: 'p2', name: 'actorId', type: 'string', location: 'body', description: 'Authenticated actor issuing delegation', isRequired: true },
    { id: 'p3', name: 'durationS', type: 'integer', location: 'body', description: 'Delegation lifespan in seconds', isRequired: false, defaultValue: '3600' },
    { id: 'p4', name: 'scopes', type: 'array<string>', location: 'body', description: 'Explicit Casbin RBAC permission claims', isRequired: true },
  ],
});

// =============================================================================
// Archetype 04: Database Schema ERD (database-schema-erd)
// =============================================================================
export const createDatabaseSchemaErdSlide = (
  id = `slide-${Date.now()}`
): DatabaseSchemaErdSlideData => ({
  id,
  type: 'database-schema-erd',
  kicker: 'DATABASE ARCHITECTURE',
  title: 'Split-DB Relational Schema Architecture',
  subtitle: 'Independent SQLite databases adhering strictly to PascalCase tables and positive boolean flags',
  databaseEngine: 'SQLite 3.45 (WAL Mode)',
  storageIsolationModel: 'Split-DB Multi-Tier Isolation',
  hasForeignKeyEnforcement: true,
  activeStep: 0,
  maxSteps: 3,
  tables: [
    {
      id: 'tbl-users',
      tableName: 'Users',
      databaseTier: 'system.db',
      rowCountEstimate: 25000,
      columns: [
        { name: 'id', dataType: 'uuid', isPrimaryKey: true, isForeignKey: false, isNullable: false, isIndexed: true },
        { name: 'email', dataType: 'varchar(255)', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: true },
        { name: 'fullName', dataType: 'varchar(100)', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: false },
        { name: 'isSuperAdmin', dataType: 'boolean', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: false, defaultValue: 'false' },
        { name: 'hasMfaEnabled', dataType: 'boolean', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: false, defaultValue: 'true' },
        { name: 'canCreateDeck', dataType: 'boolean', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: false, defaultValue: 'true' },
        { name: 'createdAt', dataType: 'timestamp', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: true },
      ],
      relationships: [],
    },
    {
      id: 'tbl-presentations',
      tableName: 'Presentations',
      databaseTier: 'tenant.db',
      rowCountEstimate: 140000,
      columns: [
        { name: 'id', dataType: 'uuid', isPrimaryKey: true, isForeignKey: false, isNullable: false, isIndexed: true },
        { name: 'ownerUserId', dataType: 'uuid', isPrimaryKey: false, isForeignKey: true, isNullable: false, isIndexed: true },
        { name: 'title', dataType: 'varchar(200)', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: false },
        { name: 'themeId', dataType: 'varchar(50)', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: false, defaultValue: "'sovereign'" },
        { name: 'isPublished', dataType: 'boolean', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: true, defaultValue: 'false' },
        { name: 'hasWatermark', dataType: 'boolean', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: false, defaultValue: 'true' },
        { name: 'createdAt', dataType: 'timestamp', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: true },
      ],
      relationships: [
        { sourceColumn: 'ownerUserId', targetTable: 'Users', targetColumn: 'id', cardinality: 'one-to-many' },
      ],
    },
    {
      id: 'tbl-audit-events',
      tableName: 'AuditEvents',
      databaseTier: 'audit.db',
      rowCountEstimate: 850000,
      columns: [
        { name: 'id', dataType: 'uuid', isPrimaryKey: true, isForeignKey: false, isNullable: false, isIndexed: true },
        { name: 'presentationId', dataType: 'uuid', isPrimaryKey: false, isForeignKey: true, isNullable: false, isIndexed: true },
        { name: 'actorId', dataType: 'uuid', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: true },
        { name: 'actionType', dataType: 'varchar(50)', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: true },
        { name: 'isVerified', dataType: 'boolean', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: false, defaultValue: 'true' },
        { name: 'timestamp', dataType: 'datetime', isPrimaryKey: false, isForeignKey: false, isNullable: false, isIndexed: true },
      ],
      relationships: [
        { sourceColumn: 'presentationId', targetTable: 'Presentations', targetColumn: 'id', cardinality: 'one-to-many' },
      ],
    },
  ],
});

// =============================================================================
// Archetype 05: Security Threat Model (security-threat-model)
// =============================================================================
export const createSecurityThreatModelSlide = (
  id = `slide-${Date.now()}`
): SecurityThreatModelSlideData => ({
  id,
  type: 'security-threat-model',
  kicker: 'SECURITY ARCHITECTURE',
  title: 'Zero-Trust Attack Surface & Defense Perimeter',
  subtitle: 'STRIDE threat taxonomy with automated cryptographic mitigations across all trust boundaries',
  trustBoundaryCount: 5,
  isSoc2Compliant: true,
  hasHardwareIsolation: true,
  activeStep: 0,
  maxSteps: 1,
  threatVectors: [
    { id: 'tv-1', category: 'Spoofing', vectorName: 'JWT Token Forgery via Replay', riskSeverity: 'critical', mitigationStrategy: 'Ephemeral 60s tokens with mTLS binding', isMitigated: true },
    { id: 'tv-2', category: 'Tampering', vectorName: 'AST Bytecode Modification', riskSeverity: 'high', mitigationStrategy: 'Ed25519 signature checks before execution', isMitigated: true },
    { id: 'tv-3', category: 'Repudiation', vectorName: 'Audit Log Tampering / Erasure', riskSeverity: 'medium', mitigationStrategy: 'Append-only SQLite WAL replicated to Merkle ledger', isMitigated: true },
    { id: 'tv-4', category: 'InformationDisclosure', vectorName: 'Side-Channel Timing Leak', riskSeverity: 'low', mitigationStrategy: 'Constant-time cryptographic comparisons', isMitigated: true },
    { id: 'tv-5', category: 'DenialOfService', vectorName: 'Distributed Rate Limit Saturation', riskSeverity: 'high', mitigationStrategy: 'Anycast edge token bucket rate limiters', isMitigated: true },
    { id: 'tv-6', category: 'ElevationOfPrivilege', vectorName: 'RBAC Scope Escalation', riskSeverity: 'critical', mitigationStrategy: 'Casbin kernel-level policy isolation', isMitigated: true },
  ],
  defensiveControls: [
    { id: 'dc-1', name: 'Casbin Strict RBAC Engine', enforcementLayer: 'application', cipherSuite: 'AES-256-GCM', isHardwareAccelerated: false, isEnforced: true },
    { id: 'dc-2', name: 'Secure Enclave KMS', enforcementLayer: 'kernel', cipherSuite: 'ChaCha20-Poly1305', isHardwareAccelerated: true, isEnforced: true },
    { id: 'dc-3', name: 'WireGuard Mesh Transit', enforcementLayer: 'network', cipherSuite: 'Curve25519', isHardwareAccelerated: true, isEnforced: true },
    { id: 'dc-4', name: 'Split-DB Encrypted Storage', enforcementLayer: 'database', cipherSuite: 'AES-XTS-256', isHardwareAccelerated: false, isEnforced: true },
  ],
});

// =============================================================================
// Archetype 06: AI Agent Swarm DAG (ai-agent-swarm-dag)
// =============================================================================
export const createAiAgentSwarmDagSlide = (
  id = `slide-${Date.now()}`
): AiAgentSwarmDagSlideData => ({
  id,
  type: 'ai-agent-swarm-dag',
  kicker: 'MULTI-AGENT SYSTEMS',
  title: 'Autonomous Multi-Agent DAG Orchestration',
  subtitle: 'Deterministic topological task execution with automated evidence verification gates',
  orchestratorRole: 'Lead Orchestrator Subagent',
  totalTokenBudget: 50000,
  hasCyclicDependency: false,
  activeStep: 0,
  maxSteps: 5,
  nodes: [
    { id: 'n1', agentRole: 'Lead Orchestrator', agentName: 'agent-orchestrator', modelIdentifier: 'pro', assignedTaskDescription: 'Decompose parent goal into DAG tasks', executionDurationMs: 450, tokenCount: 1200, isCompleted: true, isEvidencePassed: true },
    { id: 'n2', agentRole: 'Spec Author Subagent', agentName: 'agent-spec-author', modelIdentifier: 'pro', assignedTaskDescription: 'Author canonical data contracts & schemas', executionDurationMs: 1420, tokenCount: 4800, isCompleted: true, isEvidencePassed: true },
    { id: 'n3', agentRole: 'AST Refactoring Worker', agentName: 'agent-ast-worker', modelIdentifier: 'flash', assignedTaskDescription: 'Micro-batch value-semantic code transformations', executionDurationMs: 890, tokenCount: 2400, isCompleted: true, isEvidencePassed: true },
    { id: 'n4', agentRole: 'Quality Auditor', agentName: 'agent-auditor', modelIdentifier: 'flash', assignedTaskDescription: 'Verify affirmative boolean conventions & zero lint', executionDurationMs: 620, tokenCount: 1850, isCompleted: false, isEvidencePassed: true },
    { id: 'n5', agentRole: 'Cryptographic Release Verifier', agentName: 'agent-verifier', modelIdentifier: 'pro', assignedTaskDescription: 'Sign build artifacts and notarize Merkle root', executionDurationMs: 310, tokenCount: 940, isCompleted: false, isEvidencePassed: false },
  ],
  edges: [
    { id: 'e1', sourceNodeId: 'n1', targetNodeId: 'n2', edgeLabel: 'Delegates Spec', isTraversed: true },
    { id: 'e2', sourceNodeId: 'n2', targetNodeId: 'n3', edgeLabel: 'Provides Contracts', isTraversed: true },
    { id: 'e3', sourceNodeId: 'n3', targetNodeId: 'n4', edgeLabel: 'Refactored Code', isTraversed: true },
    { id: 'e4', sourceNodeId: 'n4', targetNodeId: 'n5', edgeLabel: 'Audit Verification', isTraversed: false },
  ],
});

// =============================================================================
// Archetype 07: Financial Burn & Runway (financial-burn-runway)
// =============================================================================
export const createFinancialBurnRunwaySlide = (
  id = `slide-${Date.now()}`
): FinancialBurnRunwaySlideData => ({
  id,
  type: 'financial-burn-runway',
  kicker: 'FINANCIAL ARCHITECTURE',
  title: 'Capital Runway Horizon & Financial Trajectory',
  subtitle: '22.4 months operating runway with revenue crossover and breakeven target at Month 14',
  currentReservesUsd: 8400000,
  monthlyNetBurnUsd: 185000,
  runwayMonthsRemaining: 22.4,
  breakevenMonthTarget: 14,
  grossMarginPercent: 86.4,
  isVentureBacked: true,
  activeStep: 0,
  maxSteps: 1,
  months: [
    { monthIndex: 1, monthLabel: 'M01', cashReservesUsd: 8400000, netBurnUsd: 185000, monthlyRevenueUsd: 120000, isBreakevenMonth: false },
    { monthIndex: 4, monthLabel: 'M04', cashReservesUsd: 7850000, netBurnUsd: 155000, monthlyRevenueUsd: 180000, isBreakevenMonth: false },
    { monthIndex: 8, monthLabel: 'M08', cashReservesUsd: 7250000, netBurnUsd: 110000, monthlyRevenueUsd: 245000, isBreakevenMonth: false },
    { monthIndex: 12, monthLabel: 'M12', cashReservesUsd: 6500000, netBurnUsd: 40000, monthlyRevenueUsd: 310000, isBreakevenMonth: false },
    { monthIndex: 14, monthLabel: 'M14', cashReservesUsd: 6200000, netBurnUsd: 0, monthlyRevenueUsd: 350000, isBreakevenMonth: true },
    { monthIndex: 18, monthLabel: 'M18', cashReservesUsd: 6600000, netBurnUsd: -55000, monthlyRevenueUsd: 420000, isBreakevenMonth: false },
    { monthIndex: 22, monthLabel: 'M22', cashReservesUsd: 7300000, netBurnUsd: -95000, monthlyRevenueUsd: 480000, isBreakevenMonth: false },
    { monthIndex: 24, monthLabel: 'M24', cashReservesUsd: 7800000, netBurnUsd: -120000, monthlyRevenueUsd: 520000, isBreakevenMonth: false },
  ],
  expenseAllocations: [
    { id: 'exp-1', category: 'R&D Engineering', percentageShare: 68, monthlyAmountUsd: 125800 },
    { id: 'exp-2', category: 'Cloud Infrastructure', percentageShare: 18, monthlyAmountUsd: 33300 },
    { id: 'exp-3', category: 'G&A and Legal', percentageShare: 14, monthlyAmountUsd: 25900 },
  ],
});

// =============================================================================
// Archetype 08: Bento KPI Mosaic (bento-kpi-mosaic)
// =============================================================================
export const createBentoKpiMosaicSlide = (
  id = `slide-${Date.now()}`
): BentoKpiMosaicSlideData => ({
  id,
  type: 'bento-kpi-mosaic',
  kicker: 'EXECUTIVE DASHBOARD',
  title: 'Enterprise Platform Performance Mosaic',
  subtitle: 'Asymmetric bento grid tracking hyper-growth ARR, retention, and infrastructure health',
  reportingQuarter: 'Q3 2026',
  hasLiveSparklines: true,
  activeStep: 0,
  maxSteps: 1,
  cards: [
    { id: 'c1', metricLabel: 'Annual Recurring Revenue', metricValue: '$18.4M', deltaPercent: 128, deltaPeriod: 'YoY', hasPositiveGrowth: true, sparklinePoints: [4.2, 6.5, 8.8, 11.4, 14.8, 18.4], cardSpanColumns: 2, cardSpanRows: 2 },
    { id: 'c2', metricLabel: 'Net Revenue Retention', metricValue: '142%', deltaPercent: 14, deltaPeriod: 'QoQ', hasPositiveGrowth: true, sparklinePoints: [118, 124, 130, 136, 142], cardSpanColumns: 1, cardSpanRows: 1 },
    { id: 'c3', metricLabel: 'Global p99 Latency', metricValue: '12.4ms', deltaPercent: 34, deltaPeriod: 'Faster', hasPositiveGrowth: true, sparklinePoints: [22, 19, 16, 14, 12.4], cardSpanColumns: 1, cardSpanRows: 1 },
    { id: 'c4', metricLabel: 'Active Swarm Agents', metricValue: '2,450', deltaPercent: 85, deltaPeriod: 'MoM', hasPositiveGrowth: true, sparklinePoints: [850, 1200, 1600, 2050, 2450], cardSpanColumns: 1, cardSpanRows: 1 },
    { id: 'c5', metricLabel: 'Verified Uptime', metricValue: '99.999%', deltaPercent: 0.05, deltaPeriod: 'vs SLA', hasPositiveGrowth: true, sparklinePoints: [99.99, 99.994, 99.998, 99.999], cardSpanColumns: 1, cardSpanRows: 1 },
    { id: 'c6', metricLabel: 'SOC2 Type II Controls', metricValue: '100% Gated Pass', deltaPercent: 100, deltaPeriod: 'Compliant', hasPositiveGrowth: true, cardSpanColumns: 3, cardSpanRows: 1 },
  ],
});

// =============================================================================
// Archetype 09: Canary Release Gauge (canary-release-gauge)
// =============================================================================
export const createCanaryReleaseGaugeSlide = (
  id = `slide-${Date.now()}`
): CanaryReleaseGaugeSlideData => ({
  id,
  type: 'canary-release-gauge',
  kicker: 'DEPLOYMENT AUTOMATION',
  title: 'Progressive Canary Deployment Pipeline',
  subtitle: 'Automated traffic graduation across 4 validation tiers with automated circuit breakers',
  releaseVersion: 'v1.5.0-rc2',
  targetEnvironment: 'Production Multi-Region',
  isAutomatedRollbackEnabled: true,
  activeStep: 0,
  maxSteps: 4,
  stages: [
    { id: 'st-1', stageName: 'Internal Smoke', trafficPercentage: 1, durationMinutes: 15, observedErrorRatePercent: 0.00, isCompleted: true, isActive: false, hasPassedQualityGate: true },
    { id: 'st-2', stageName: 'Edge Beta', trafficPercentage: 5, durationMinutes: 30, observedErrorRatePercent: 0.01, isCompleted: false, isActive: true, hasPassedQualityGate: true },
    { id: 'st-3', stageName: 'Regional Staged', trafficPercentage: 25, durationMinutes: 60, observedErrorRatePercent: 0.00, isCompleted: false, isActive: false, hasPassedQualityGate: false },
    { id: 'st-4', stageName: 'Full Global Release', trafficPercentage: 100, durationMinutes: 120, observedErrorRatePercent: 0.00, isCompleted: false, isActive: false, hasPassedQualityGate: false },
  ],
  thresholdRules: [
    { id: 'tr-1', metricName: 'HTTP 5xx Error Spike', thresholdLimit: '> 0.05%', isTriggered: false, canRollbackAutomatically: true },
    { id: 'tr-2', metricName: 'p99 Latency Regression', thresholdLimit: '> 15ms', isTriggered: false, canRollbackAutomatically: true },
    { id: 'tr-3', metricName: 'Memory Heap Allocation Growth', thresholdLimit: '> 250MB', isTriggered: false, canRollbackAutomatically: true },
  ],
});

// =============================================================================
// Archetype 10: Incident RCA Postmortem (incident-rca-postmortem)
// =============================================================================
export const createIncidentRcaPostmortemSlide = (
  id = `slide-${Date.now()}`
): IncidentRcaPostmortemSlideData => ({
  id,
  type: 'incident-rca-postmortem',
  kicker: 'ROOT CAUSE ANALYSIS',
  title: 'Incident Postmortem: RCA-2026-0819',
  subtitle: 'Analysis of transient connection pool exhaustion during database partition migration',
  incidentId: 'INC-2026-0819',
  severityLevel: 'SEV-1',
  downtimeMinutes: 4.2,
  isBlamelessPostmortem: true,
  activeStep: 0,
  maxSteps: 4,
  pillars: [
    {
      id: 'pil-1',
      pillarIndex: 0,
      pillarTitle: 'Immediate Cause',
      pillarSubtitle: 'Symptom & Trigger',
      findings: [
        'Unbounded connection spike during partition migration job',
        'OS socket descriptor limit reached at 65,535 file handles',
        'Edge reverse proxy surfaced transient HTTP 504 errors',
      ],
      isActionable: true,
    },
    {
      id: 'pil-2',
      pillarIndex: 1,
      pillarTitle: 'Root Cause',
      pillarSubtitle: 'Underlying Architecture Flaw',
      findings: [
        'Database connection timeout guard was missing in migration runner',
        'Retry loop did not implement exponential backoff jitter',
        'Connection pooling lacked hard upper boundary on concurrent acquires',
      ],
      isActionable: true,
    },
    {
      id: 'pil-3',
      pillarIndex: 2,
      pillarTitle: 'Blast Radius',
      pillarSubtitle: 'User Impact & Telemetry',
      findings: [
        '0.04% of public API calls received 504 Gateway Timeout',
        'Total degraded service duration was 4.2 minutes before failover',
        'Zero data loss or SQLite database corruption detected',
      ],
      isActionable: false,
    },
    {
      id: 'pil-4',
      pillarIndex: 3,
      pillarTitle: 'Preventative Actions',
      pillarSubtitle: 'Remediation & Guardrails',
      findings: [
        'Add HikariCP connection-pool hard timeout gate in CI/CD pipeline',
        'Enforce exponential backoff jitter on all database client connection pools',
        'Deploy isolated shadow runner for all high-volume partition DDL scripts',
      ],
      remediationOwner: 'Alim Ul Karim, Chief Software Engineer',
      isActionable: true,
    },
  ],
  timeline: [
    { timeOffset: '14:02 UTC', eventDescription: 'Automated partition migration script triggered on shard 04', isMitigationPoint: false },
    { timeOffset: '14:04 UTC', eventDescription: 'Socket saturation alerts fire across edge gateway clusters', isMitigationPoint: false },
    { timeOffset: '14:06 UTC', eventDescription: 'Automated circuit breaker trips traffic to backup read-replica pool', isMitigationPoint: true },
    { timeOffset: '14:08 UTC', eventDescription: 'Migration throttled; connection pool drops to nominal 12% capacity', isMitigationPoint: true },
  ],
});

// =============================================================================
// Archetype 11: SLAs & Uptime Status (slas-and-uptime-status)
// =============================================================================
export const createSlasAndUptimeStatusSlide = (
  id = `slide-${Date.now()}`
): SlasAndUptimeStatusSlideData => ({
  id,
  type: 'slas-and-uptime-status',
  kicker: 'SERVICE LEVEL AGREEMENTS',
  title: 'Enterprise Public Status & Service Health',
  subtitle: '99.999% verified operational availability across 4 mission-critical service tiers',
  overallUptimePercent: 99.999,
  meanTimeToDetectSeconds: 42,
  meanTimeToRecoverMinutes: 2.8,
  incidentFreeDaysCount: 314,
  hasExternalAuditorVerification: true,
  activeStep: 0,
  maxSteps: 1,
  services: [
    {
      id: 'svc-auth',
      name: 'Authentication & Session Cluster',
      tier: 'core',
      uptimePercentage: 100.0,
      isOperational: true,
      hasRecentIncident: false,
      historyBlocks: Array.from({ length: 90 }, (_, i) => ({ dayIndex: i + 1, isHealthy: true })),
    },
    {
      id: 'svc-edge',
      name: 'Global Anycast Edge API Gateway',
      tier: 'edge',
      uptimePercentage: 99.998,
      isOperational: true,
      hasRecentIncident: false,
      historyBlocks: Array.from({ length: 90 }, (_, i) => ({ dayIndex: i + 1, isHealthy: i !== 58 })),
    },
    {
      id: 'svc-db',
      name: 'Distributed Split-DB Shards',
      tier: 'data',
      uptimePercentage: 100.0,
      isOperational: true,
      hasRecentIncident: false,
      historyBlocks: Array.from({ length: 90 }, (_, i) => ({ dayIndex: i + 1, isHealthy: true })),
    },
    {
      id: 'svc-ws',
      name: 'Realtime WebSocket Mesh',
      tier: 'async',
      uptimePercentage: 99.999,
      isOperational: true,
      hasRecentIncident: false,
      historyBlocks: Array.from({ length: 90 }, (_, i) => ({ dayIndex: i + 1, isHealthy: true })),
    },
  ],
});

// =============================================================================
// Archetype 12: Audio Waveform Studio (audio-waveform-studio)
// =============================================================================
export const createAudioWaveformStudioSlide = (
  id = `slide-${Date.now()}`
): AudioWaveformStudioSlideData => ({
  id,
  type: 'audio-waveform-studio',
  kicker: 'AUDIO SYNTHESIS',
  title: 'Voice AI Neural Waveform & Phoneme Studio',
  subtitle: 'Real-time speech synthesis with sub-50ms token latency and neural vocoder alignment',
  audioCodec: 'Opus Lossless 48kHz',
  synthesisLatencyMs: 38,
  hasLivePlayback: true,
  activeStep: 0,
  maxSteps: 3,
  tracks: [
    {
      id: 'trk-1',
      trackName: 'Raw Microphone Ingress',
      samplingRateKhz: 48,
      waveformAmplitudes: [0.15, 0.32, 0.48, 0.65, 0.82, 0.60, 0.42, 0.28, 0.12, 0.24, 0.55, 0.78, 0.90, 0.62, 0.35],
      isActiveTrack: false,
    },
    {
      id: 'trk-2',
      trackName: 'Neural Synthesizer Output',
      samplingRateKhz: 48,
      waveformAmplitudes: [0.22, 0.45, 0.72, 0.88, 0.95, 0.84, 0.66, 0.50, 0.38, 0.58, 0.85, 0.92, 0.75, 0.48, 0.20],
      phonemes: [
        { phonemeSymbol: '/s/', startTimestampMs: 0, endTimestampMs: 80, confidenceScore: 0.99 },
        { phonemeSymbol: '/oʊ/', startTimestampMs: 80, endTimestampMs: 180, confidenceScore: 0.98 },
        { phonemeSymbol: '/v/', startTimestampMs: 180, endTimestampMs: 250, confidenceScore: 0.99 },
        { phonemeSymbol: '/r/', startTimestampMs: 250, endTimestampMs: 320, confidenceScore: 0.97 },
        { phonemeSymbol: '/ə/', startTimestampMs: 320, endTimestampMs: 390, confidenceScore: 0.99 },
        { phonemeSymbol: '/n/', startTimestampMs: 390, endTimestampMs: 460, confidenceScore: 0.99 },
      ],
      isActiveTrack: true,
    },
    {
      id: 'trk-3',
      trackName: 'Adaptive Noise Cancellation',
      samplingRateKhz: 48,
      waveformAmplitudes: [0.05, 0.08, 0.06, 0.04, 0.07, 0.05, 0.03, 0.06, 0.04, 0.05, 0.07, 0.04, 0.03, 0.05, 0.02],
      isActiveTrack: false,
    },
  ],
});

// =============================================================================
// Archetype 13: Hardware Silicon Spec (hardware-silicon-spec)
// =============================================================================
export const createHardwareSiliconSpecSlide = (
  id = `slide-${Date.now()}`
): HardwareSiliconSpecSlideData => ({
  id,
  type: 'hardware-silicon-spec',
  kicker: 'HARDWARE ARCHITECTURE',
  title: 'Sovereign Neural Silicon Micro-Architecture',
  subtitle: '3nm FinFET process with 48.2 billion transistors and 120W thermal envelope',
  processNodeNm: 3,
  transistorCountBillions: 48.2,
  thermalDesignPowerWatts: 120,
  dieAreaSquareMm: 312,
  memoryBandwidthGbps: 800,
  isTapeoutVerified: true,
  activeStep: 0,
  maxSteps: 1,
  blocks: [
    { id: 'blk-1', blockName: '16x Tensor Vector Cores', areaSquareMm: 84, powerConsumptionWatts: 45, clockSpeedGhz: 2.8, isPrimaryCompute: true },
    { id: 'blk-2', blockName: '8x High-Perf CPU Cores', areaSquareMm: 42, powerConsumptionWatts: 35, clockSpeedGhz: 4.2, isPrimaryCompute: true },
    { id: 'blk-3', blockName: '128 MB Shared System Cache (SLC)', areaSquareMm: 36, powerConsumptionWatts: 12, clockSpeedGhz: 3.2, isPrimaryCompute: false },
    { id: 'blk-4', blockName: 'Quad LPDDR5X Memory Controller', areaSquareMm: 28, powerConsumptionWatts: 14, clockSpeedGhz: 4.8, isPrimaryCompute: false },
    { id: 'blk-5', blockName: 'FIPS 140-3 Hardware Crypto Engine', areaSquareMm: 16, powerConsumptionWatts: 6, clockSpeedGhz: 2.0, isPrimaryCompute: false },
    { id: 'blk-6', blockName: 'PCIe Gen 5 Root Complex (16 Lanes)', areaSquareMm: 18, powerConsumptionWatts: 8, clockSpeedGhz: 2.5, isPrimaryCompute: false },
  ],
});

// =============================================================================
// Archetype 14: Cohort Retention Heatmap (cohort-retention-heatmap)
// =============================================================================
export const createCohortRetentionHeatmapSlide = (
  id = `slide-${Date.now()}`
): CohortRetentionHeatmapSlideData => ({
  id,
  type: 'cohort-retention-heatmap',
  kicker: 'INVESTOR TRACTION',
  title: 'Enterprise Cohort Retention & Expansion Matrix',
  subtitle: '138% Net Revenue Retention with curve stabilization above 94% retention',
  netRevenueRetentionPercent: 138,
  grossLogoRetentionPercent: 97.4,
  ltvToCacRatio: 6.2,
  hasColorShading: true,
  activeStep: 0,
  maxSteps: 1,
  cohorts: [
    { id: 'c-oct', cohortLabel: 'Oct 2025', startingAccountCount: 38, retentionPercentages: [100, 98, 96, 95, 95, 94, 94] },
    { id: 'c-nov', cohortLabel: 'Nov 2025', startingAccountCount: 42, retentionPercentages: [100, 99, 97, 96, 95, 95] },
    { id: 'c-dec', cohortLabel: 'Dec 2025', startingAccountCount: 48, retentionPercentages: [100, 99, 98, 97, 96] },
    { id: 'c-jan', cohortLabel: 'Jan 2026', startingAccountCount: 55, retentionPercentages: [100, 98, 97, 96] },
    { id: 'c-feb', cohortLabel: 'Feb 2026', startingAccountCount: 64, retentionPercentages: [100, 99, 98] },
    { id: 'c-mar', cohortLabel: 'Mar 2026', startingAccountCount: 76, retentionPercentages: [100, 99] },
    { id: 'c-apr', cohortLabel: 'Apr 2026', startingAccountCount: 92, retentionPercentages: [100] },
  ],
});

// =============================================================================
// Archetype 15: Verifiable Audit Ledger (verifiable-audit-ledger)
// =============================================================================
export const createVerifiableAuditLedgerSlide = (
  id = `slide-${Date.now()}`
): VerifiableAuditLedgerSlideData => ({
  id,
  type: 'verifiable-audit-ledger',
  kicker: 'VERIFIABLE AUDIT',
  title: 'Cryptographic Evidence Gate & Audit Ledger',
  subtitle: 'Tamper-evident verification guaranteeing zero guideline violations and verified signatures',
  merkleRootHash: '0x7f28ab49c10928e498d3901ba32cff918',
  chiefAuditorName: 'Alim Ul Karim',
  chiefAuditorTitle: 'Chief Software Engineer',
  isTamperEvident: true,
  activeStep: 0,
  maxSteps: 5,
  gates: [
    {
      id: 'g-1',
      gateIndex: 0,
      gateName: 'Git Commit Ed25519 Signature',
      evidenceType: 'signature',
      cryptographicHash: '4a9f2b801de2f7a938c4',
      attestorIdentity: 'Alim Ul Karim, Chief Software Engineer',
      isVerified: true,
      hasAuditGap: false,
    },
    {
      id: 'g-2',
      gateIndex: 1,
      gateName: 'Software Bill of Materials (SBOM)',
      evidenceType: 'sbom',
      cryptographicHash: '8f72c019bd823901ca5e',
      attestorIdentity: 'Autonomous Security Auditor',
      isVerified: true,
      hasAuditGap: false,
    },
    {
      id: 'g-3',
      gateIndex: 2,
      gateName: 'Positive Boolean Linter Gate',
      evidenceType: 'linter',
      cryptographicHash: '9e81ca244f01bb749210',
      attestorIdentity: 'Guideline CI Linter Subsystem',
      isVerified: true,
      hasAuditGap: false,
    },
    {
      id: 'g-4',
      gateIndex: 3,
      gateName: 'Isolated Integration Test Suite',
      evidenceType: 'integration',
      cryptographicHash: '3b2901a884fe1928df77',
      attestorIdentity: 'Autonomous QA Runner',
      isVerified: true,
      hasAuditGap: false,
    },
    {
      id: 'g-5',
      gateIndex: 4,
      gateName: 'Merkle Root Ledger Notarization',
      evidenceType: 'merkle',
      cryptographicHash: '0x7f28ab49c10928e498d3901ba32cff918',
      attestorIdentity: 'Sovereign Ledger Node',
      isVerified: true,
      hasAuditGap: false,
    },
  ],
});

// =============================================================================
// Master Factories Record & Dispatch Helper
// =============================================================================
export const KINETIC_SUITE_FACTORIES: Record<KineticSuiteSlideType, (id?: string) => KineticSuiteSlideData> = {
  'code-diff-comparison': createCodeDiffComparisonSlide,
  'global-cloud-edge-mesh': createGlobalCloudEdgeMeshSlide,
  'api-endpoint-inspector': createApiEndpointInspectorSlide,
  'database-schema-erd': createDatabaseSchemaErdSlide,
  'security-threat-model': createSecurityThreatModelSlide,
  'ai-agent-swarm-dag': createAiAgentSwarmDagSlide,
  'financial-burn-runway': createFinancialBurnRunwaySlide,
  'bento-kpi-mosaic': createBentoKpiMosaicSlide,
  'canary-release-gauge': createCanaryReleaseGaugeSlide,
  'incident-rca-postmortem': createIncidentRcaPostmortemSlide,
  'slas-and-uptime-status': createSlasAndUptimeStatusSlide,
  'audio-waveform-studio': createAudioWaveformStudioSlide,
  'hardware-silicon-spec': createHardwareSiliconSpecSlide,
  'cohort-retention-heatmap': createCohortRetentionHeatmapSlide,
  'verifiable-audit-ledger': createVerifiableAuditLedgerSlide,
};

export const createKineticSuiteSlide = (
  type: KineticSuiteSlideType,
  id = `slide-${Date.now()}`
): KineticSuiteSlideData | null => {
  const factory = KINETIC_SUITE_FACTORIES[type];
  return factory ? factory(id) : null;
};

// =============================================================================
// Kinetic Suite Archetype Options (across 4 canonical categories)
// =============================================================================
export const KINETIC_SUITE_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  // Product & Architecture
  {
    type: 'code-diff-comparison',
    label: 'Code Diff & Refactoring',
    category: 'Product & Architecture',
    desc: 'Side-by-side AST transform and refactoring metrics comparison',
    icon: 'Code2',
  },
  {
    type: 'global-cloud-edge-mesh',
    label: 'Global Edge Cloud Mesh',
    category: 'Product & Architecture',
    desc: 'Anycast PoP topology, WireGuard mesh, and latency matrix',
    icon: 'Globe',
  },
  {
    type: 'api-endpoint-inspector',
    label: 'API Endpoint Inspector',
    category: 'Product & Architecture',
    desc: 'REST/gRPC schema studio with parameter inspect and payload responses',
    icon: 'Terminal',
  },
  {
    type: 'database-schema-erd',
    label: 'Database Schema ERD',
    category: 'Product & Architecture',
    desc: 'Split-DB relational entity relationship diagram with key relations',
    icon: 'Database',
  },
  {
    type: 'ai-agent-swarm-dag',
    label: 'AI Agent Swarm DAG',
    category: 'Product & Architecture',
    desc: 'Autonomous multi-agent orchestration DAG with evidence gates',
    icon: 'Workflow',
  },
  {
    type: 'audio-waveform-studio',
    label: 'Audio Waveform Studio',
    category: 'Product & Architecture',
    desc: 'Multi-track neural voice spectrogram and phoneme alignment studio',
    icon: 'Activity',
  },
  {
    type: 'hardware-silicon-spec',
    label: 'Hardware Silicon Spec',
    category: 'Product & Architecture',
    desc: 'Deep-tech die floorplan blocks, TDP envelope, and electrical spec sheet',
    icon: 'Cpu',
  },

  // Strategy & Metrics
  {
    type: 'financial-burn-runway',
    label: 'Financial Burn & Runway',
    category: 'Strategy & Metrics',
    desc: 'Monthly cash reserves, net-burn rate, and breakeven trajectory',
    icon: 'TrendingUp',
  },
  {
    type: 'bento-kpi-mosaic',
    label: 'Bento KPI Mosaic',
    category: 'Strategy & Metrics',
    desc: 'Asymmetric golden-ratio bento grid with sparklines and metric cards',
    icon: 'LayoutGrid',
  },
  {
    type: 'slas-and-uptime-status',
    label: 'SLAs & Uptime Status',
    category: 'Strategy & Metrics',
    desc: '99.999% availability dashboard, 90-day history strips, and MTTD/MTTR',
    icon: 'CheckCircle2',
  },
  {
    type: 'cohort-retention-heatmap',
    label: 'Cohort Retention Heatmap',
    category: 'Strategy & Metrics',
    desc: 'Triangular retention decay matrix, NRR expansion, and LTV/CAC ratio',
    icon: 'BarChart3',
  },

  // Story & Conversion
  {
    type: 'canary-release-gauge',
    label: 'Canary Release Gauge',
    category: 'Story & Conversion',
    desc: 'Progressive traffic rollout gauge with circuit breaker safeguards',
    icon: 'Gauge',
  },
  {
    type: 'incident-rca-postmortem',
    label: 'Incident RCA Postmortem',
    category: 'Story & Conversion',
    desc: '4-part root cause analysis postmortem and preventative remediation',
    icon: 'FileText',
  },

  // Team & Credibility
  {
    type: 'security-threat-model',
    label: 'Security Threat Model',
    category: 'Team & Credibility',
    desc: 'STRIDE threat taxonomy, zero-trust perimeter, and defensive controls',
    icon: 'ShieldAlert',
  },
  {
    type: 'verifiable-audit-ledger',
    label: 'Verifiable Audit Ledger',
    category: 'Team & Credibility',
    desc: 'Cryptographic Merkle evidence gates and signed audit checklist',
    icon: 'ShieldCheck',
  },
];
