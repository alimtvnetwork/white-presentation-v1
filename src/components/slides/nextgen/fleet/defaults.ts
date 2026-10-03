import type {
  SupervisorController,
  AgentWorkerNode,
  SafetyGovernorMetrics,
} from '../../../../types/nextGenArchetypes';

export const DEFAULT_SUPERVISOR: SupervisorController = {
  controllerId: 'sup-dispatch-01',
  modelFamily: 'Claude 3.7 Sonnet (Thinking Engine)',
  contextWindowTokens: 200000,
  currentTaskQueueDepth: 12,
  isOperational: true,
  isAutonomousDispatchEnabled: true,
};

export const DEFAULT_WORKERS: AgentWorkerNode[] = [
  {
    id: 'agent-w1',
    name: 'Synthesizer Alpha',
    role: 'AST Refactor Agent',
    specialization: 'High-speed code decomposition & type safety',
    status: 'EXECUTING',
    activeTokensUsed: 142800,
    taskSuccessRatePercent: 99.4,
    isHealthy: true,
    isSandboxIsolated: true,
    activeToolName: 'ast_pattern_replace',
  },
  {
    id: 'agent-w2',
    name: 'Sentinel Beta',
    role: 'AppSec & Secret Scanner',
    specialization: 'Confidentiality boundary & CVE isolation',
    status: 'EXECUTING',
    activeTokensUsed: 89400,
    taskSuccessRatePercent: 100.0,
    isHealthy: true,
    isSandboxIsolated: true,
    activeToolName: 'trufflehog_sandbox_audit',
  },
  {
    id: 'agent-w3',
    name: 'Database Delta',
    role: 'Split-DB Migration Engine',
    specialization: 'Distributed SQLite checksum verification',
    status: 'WAITING_IO',
    activeTokensUsed: 64200,
    taskSuccessRatePercent: 98.8,
    isHealthy: true,
    isSandboxIsolated: true,
    activeToolName: 'sqlite_wal_checkpoint',
  },
  {
    id: 'agent-w4',
    name: 'Orchestrator Gamma',
    role: 'Test Suite Validator',
    specialization: 'Multi-threaded headless unit verification',
    status: 'COMPLETED',
    activeTokensUsed: 112000,
    taskSuccessRatePercent: 99.8,
    isHealthy: true,
    isSandboxIsolated: true,
    activeToolName: 'vitest_smart_runner',
  },
];

export const DEFAULT_GOVERNOR: SafetyGovernorMetrics = {
  tokenBudgetMaxMillion: 50.0,
  tokensConsumedMillion: 18.6,
  loopAnomalyCount: 0,
  hasBlockedUnsafeCalls: true,
  isComplianceEnforced: true,
};

export const FLEET_PHASES = [
  { index: 0, title: 'Supervisor Dispatch', desc: 'Central routing and queue orchestration' },
  { index: 1, title: 'Agent Worker Fleet', desc: 'Isolated sandbox worker execution' },
  { index: 2, title: 'Safety Governor', desc: 'Loop anomaly & token budget constraints' },
  { index: 3, title: 'Telemetry Bus', desc: 'Realtime latency & event streaming' },
];
