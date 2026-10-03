import type {
  PaymentClearingStage,
  ActivePaymentTransaction,
} from '../../../../types/nextGenArchetypes';

export const DEFAULT_STAGES: PaymentClearingStage[] = [
  {
    stageId: 'stage-iso-ingest',
    name: 'ISO 20022 XML Ingestion',
    standard: 'pacs.008.001.10 FI-to-FI Customer Credit',
    latencyTargetMs: 5.0,
    latencyActualMs: 2.1,
    isVerified: true,
    isPassed: true,
    activeRuleSet: 'SWIFT CBPR+ Schema Validation',
  },
  {
    stageId: 'stage-sanctions-aml',
    name: 'Realtime Sanctions & AML Screening',
    standard: 'OFAC & FATF Watchlist Screening',
    latencyTargetMs: 15.0,
    latencyActualMs: 8.4,
    isVerified: true,
    isPassed: true,
    activeRuleSet: 'Fuzzy Token Levenshtein < 0.05',
  },
  {
    stageId: 'stage-fraud-scoring',
    name: 'AI Fraud Inference & Behavioral Analysis',
    standard: 'Graph Neural Network Risk Scoring',
    latencyTargetMs: 20.0,
    latencyActualMs: 11.4,
    isVerified: true,
    isPassed: true,
    activeRuleSet: 'FraudGuard-XGB-v4.8 (Score < 15)',
  },
  {
    stageId: 'stage-rtgs-settlement',
    name: 'Realtime Gross Settlement (RTGS)',
    standard: 'FedNow / Target2 Immediate Finality',
    latencyTargetMs: 10.0,
    latencyActualMs: 4.8,
    isVerified: true,
    isPassed: true,
    activeRuleSet: 'Double-Entry Atomic Ledger Finality',
  },
];

export const DEFAULT_TRANSACTION: ActivePaymentTransaction = {
  txnId: 'TXN-984210-FEDNOW',
  messageType: 'pacs.008.001.10',
  senderIbanMasked: 'US89****2910',
  receiverIbanMasked: 'DE44****8831',
  amountUsd: 14250000,
  currency: 'USD',
  isAuthorized: true,
  isSanctionsCleared: true,
};
