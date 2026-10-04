// lint-allow: file-size reason="Suite 2031 slide archetype renderer dispatcher" max=120
import React from 'react';
import type { SlideData } from '../../types/presentation';
import { WhiteMasterSlide } from './WhiteMasterSlide';
import * as S from './suite2031';

export const Suite2031SlideRenderer: React.FC<{ slide: SlideData; activeStep?: number }> = ({
  slide,
  activeStep = 0,
}) => {
  switch (slide.type) {
    case 'dna-data-storage-codec-pipeline':
      return <S.DnaDataStorageCodecPipelineSlide slide={slide as any} activeStep={activeStep} />;
    case 'superconducting-qubit-calibration-flow':
      return <S.SuperconductingQubitCalibrationFlowSlide slide={slide as any} activeStep={activeStep} />;
    case 'wafer-scale-engine-interconnect-routing':
      return <S.WaferScaleEngineInterconnectRoutingSlide slide={slide as any} activeStep={activeStep} />;
    case 'decentralized-ai-compute-slashing-protocol':
      return <S.DecentralizedAiComputeSlashingProtocolSlide slide={slide as any} activeStep={activeStep} />;
    case 'orbital-laser-satellite-constellation-routing':
      return <S.OrbitalLaserSatelliteConstellationRoutingSlide slide={slide as any} activeStep={activeStep} />;
    case 'agentic-codebase-migration-factory':
      return <S.AgenticCodebaseMigrationFactorySlide slide={slide as any} activeStep={activeStep} />;
    case 'chiplet-uci-e-interconnect-pipeline':
      return <S.ChipletUciEInterconnectPipelineSlide slide={slide as any} activeStep={activeStep} />;
    case 'ambient-iot-energy-harvesting-telemetry':
      return <S.AmbientIotEnergyHarvestingTelemetrySlide slide={slide as any} activeStep={activeStep} />;
    case 'federated-homomorphic-analytics-enclave':
      return <S.FederatedHomomorphicAnalyticsEnclaveSlide slide={slide as any} activeStep={activeStep} />;
    case 'geothermal-nuclear-smr-datacenter-grid':
      return <S.GeothermalNuclearSmrDatacenterGridSlide slide={slide as any} activeStep={activeStep} />;
    case 'spaceborne-ai-edge-payload-telemetry':
      return <S.SpaceborneAiEdgePayloadTelemetrySlide slide={slide as any} activeStep={activeStep} />;
    case 'sovereign-ai-silicon-supply-chain-chokepoint-radar':
      return <S.SovereignAiSiliconSupplyChainChokepointRadarSlide slide={slide as any} activeStep={activeStep} />;
    case 'neuromorphic-brain-computer-interface-telemetry':
      return <S.NeuromorphicBrainComputerInterfaceTelemetrySlide slide={slide as any} activeStep={activeStep} />;
    case 'autonomous-cyber-threat-hunting-matrix':
      return <S.AutonomousCyberThreatHuntingMatrixSlide slide={slide as any} activeStep={activeStep} />;
    case 'enterprise-ai-total-cost-of-ownership-quadrant':
      return <S.EnterpriseAiTotalCostOfOwnershipQuadrantSlide slide={slide as any} activeStep={activeStep} />;
    default:
      return <WhiteMasterSlide slide={slide as any} />;
  }
};
