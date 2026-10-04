// lint-allow: file-size reason="DataLakehouseMedallionPipelineSlide kinetic 4-step streaming medallion pipeline" max=420
import React from 'react';
import type {
  DataLakehouseMedallionPipelineSlideData,
  MedallionPipelineStage,
  LakehouseLayerNode,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Database,
  Layers,
  Zap,
  Activity,
  CheckCircle2,
  Sparkles,
  Server,
  ArrowRight,
  ShieldCheck,
  HardDrive,
  Clock,
} from 'lucide-react';

const DEF_STAGES: MedallionPipelineStage[] = [
  {
    stepIndex: 0,
    stageName: 'Bronze Raw Event Streaming',
    stageSubtitle: 'Append-only high-throughput Kafka ingestion with zero data transformation',
    throughputEventsPerSec: 1800000,
    dataQualityScorePercent: 98.2,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Silver Deduplication & Quality Enrichment',
    stageSubtitle: 'SCD Type-2 conformance, entity resolution, and automated null quarantine',
    throughputEventsPerSec: 1400000,
    dataQualityScorePercent: 99.9,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Gold Curated Feature Aggregation',
    stageSubtitle: 'Dimensional star schema rollups and real-time ML feature store indexing',
    throughputEventsPerSec: 850000,
    dataQualityScorePercent: 99.98,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Interactive BI & Inference Serving',
    stageSubtitle: 'Sub-second Trino querying and real-time inference embedding lookups',
    throughputEventsPerSec: 850000,
    dataQualityScorePercent: 100.0,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_LAYERS: LakehouseLayerNode[] = [
  {
    id: 'layer-bronze',
    layerName: 'Bronze Raw Event Stream',
    tableCount: 184,
    storageVolumeTerabytes: 2800,
    freshnessLatencySeconds: 2.4,
    isSchemaEnforced: false,
    hasIcebergOptimized: true,
  },
  {
    id: 'layer-silver',
    layerName: 'Silver Enriched Dimensions',
    tableCount: 92,
    storageVolumeTerabytes: 1100,
    freshnessLatencySeconds: 8.0,
    isSchemaEnforced: true,
    hasIcebergOptimized: true,
  },
  {
    id: 'layer-gold',
    layerName: 'Gold Analytical Aggregations',
    tableCount: 46,
    storageVolumeTerabytes: 300,
    freshnessLatencySeconds: 14.5,
    isSchemaEnforced: true,
    hasIcebergOptimized: true,
  },
  {
    id: 'layer-delivery',
    layerName: 'Delivery Query Layer',
    tableCount: 18,
    storageVolumeTerabytes: 45,
    freshnessLatencySeconds: 0.8,
    isSchemaEnforced: true,
    hasIcebergOptimized: true,
  },
];

export const DataLakehouseMedallionPipelineSlide: React.FC<{
  slide?: DataLakehouseMedallionPipelineSlideData;
  data?: DataLakehouseMedallionPipelineSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.pipelineStages?.length ? data.pipelineStages : DEF_STAGES;
  const layers = data?.layerNodes?.length ? data.layerNodes : DEF_LAYERS;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 flex items-center gap-2">
              <Database size={16} className="text-blue-500" />
              {data?.kicker || 'BIG DATA ARCHITECTURE'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Server size={14} /> Engine: {data?.lakehouseEngine || 'Apache Iceberg & Trino'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <HardDrive size={14} className="text-emerald-500" />
              Footprint: {data?.totalDataFootprintPetabytes ?? 4.2} PB
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Data Lakehouse Streaming Medallion Pipeline'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Continuous event ingestion, automated schema evolution, and low-latency feature serving on Apache Iceberg.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Event Throughput</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold text-[18px]">
              {(activeStage.throughputEventsPerSec / 1000000).toFixed(2)}M ev/s
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Quality Score</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.dataQualityScorePercent}%
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Chief Software Engineer</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Kinetic 4-Step Nav Rail */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;

          return (
            <button
              key={st.stepIndex}
              onClick={() => jumpToStep(idx)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${
                isActive
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-90'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 blur-[1.25px] text-slate-500 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[14px] ${
                    isActive
                      ? 'bg-[var(--pres-accent)] text-white'
                      : isCompleted
                      ? 'bg-emerald-500 text-white dark:text-slate-900'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {isCompleted ? '✓' : idx + 1}
                </span>
                <div>
                  <div className="font-bold leading-tight">{st.stageName}</div>
                  <div className="text-[12px] opacity-75 font-normal">
                    {(st.throughputEventsPerSec / 1000).toLocaleString()}k ev/s
                  </div>
                </div>
              </div>
              <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                {st.dataQualityScorePercent}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Plane 1 Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Lakehouse Layer Nodes */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> Medallion Architecture Storage Tiering
              </span>
              <span className="font-mono text-[12px] px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold border border-blue-500/20">
                Stage: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {layers.map((layer, lIdx) => {
                const isCurrentLayer = lIdx === currentStep;
                return (
                  <div
                    key={layer.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px]">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            layer.hasIcebergOptimized ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'
                          }`}
                        />
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {layer.layerName}
                        </span>
                        <span className="text-[12px] px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
                          {layer.tableCount} Tables
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[13px] flex items-center gap-1">
                          <HardDrive size={13} /> {layer.storageVolumeTerabytes} TB
                        </span>
                        <span className="text-cyan-600 dark:text-cyan-400 text-[13px] flex items-center gap-1">
                          <Clock size={13} /> {layer.freshnessLatencySeconds}s Lag
                        </span>
                        <span
                          className={`text-[12px] px-2 py-0.5 rounded font-bold ${
                            layer.isSchemaEnforced
                              ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                              : 'bg-amber-500/20 text-amber-700 dark:text-amber-400'
                          }`}
                        >
                          {layer.isSchemaEnforced ? 'STRICT SCHEMA' : 'SCHEMA EVOLVE'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[var(--pres-border)] grid grid-cols-3 gap-4 font-mono text-[13px]">
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">CDC Stream Latency</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold text-[16px]">&lt; 2.5s End-to-End</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Iceberg Table Format</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[16px]">v2 ACID Enforced</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Trino Query p95</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[16px]">380ms Sub-Second</span>
            </div>
          </div>
        </div>

        {/* Right Bento: Active Stage Elevation & Data Quality */}
        <div className="col-span-5 plane-2-elevated rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-[var(--pres-accent)] flex items-center gap-2">
                <Activity size={18} /> Active Refinery Stage (Step 0{currentStep + 1})
              </span>
              <span className="text-[12px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold">
                PHASE 0{currentStep + 1} ACTIVE
              </span>
            </div>

            <div className="my-4">
              <h3 className="text-[22px] font-ubuntu font-bold text-slate-900 dark:text-slate-100 leading-snug">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[14px] text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {activeStage.stageSubtitle}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-black/30 border border-slate-200 dark:border-slate-800 space-y-3 font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-slate-500 dark:text-slate-400 uppercase">Throughput Capacity</span>
                <span className="text-[18px] font-bold text-[var(--pres-accent)]">
                  {activeStage.throughputEventsPerSec.toLocaleString()} ev/s
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-[var(--pres-accent)] h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (activeStage.throughputEventsPerSec / 2000000) * 100)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[12px] text-slate-500 dark:text-slate-400">
                <span>Data Quality: {activeStage.dataQualityScorePercent}%</span>
                <span>Peak Ingestion: 2.0M ev/s</span>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[13px]">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Continuous Streaming Pipeline</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.isStreamingActive ?? true ? 'Active & Healthy' : 'Stalled'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Automated Schema Enforcement</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasSchemaEnforced ?? true ? 'Strict Evolution' : 'Permissive'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Apache Iceberg v2 Engine</span>
                <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.isIcebergOptimized ?? true ? 'Zero-Copy Clones' : 'Standard'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[12px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Sub-second Trino analytical delivery verified.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">Pipeline Health:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 size={16} /> 100% ACID Lineage Preserved | Zero Data Loss Guaranteed
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1">
            <ShieldCheck size={16} /> Suite 2027 Lakehouse Core
          </span>
        </div>
      </div>
    </div>
  );
};
