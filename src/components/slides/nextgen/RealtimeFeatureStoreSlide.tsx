// lint-allow: file-size reason="RealtimeFeatureStoreSlide flat sovereign dual-path feature store" max=120
import React from 'react';
import type { RealtimeFeatureStoreSlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Database, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw } from 'lucide-react';

const DEF_VIEWS = [
  { entityName: 'user_realtime_fraud_features', onlineStoreProvider: 'Redis Cluster (In-Memory)', offlineWarehouse: 'Snowflake Enterprise', servingLatencyP99Ms: 2.1, freshnessSlaSeconds: 1, isPointInTimeCorrect: true, isOnlineStoreReady: true },
  { entityName: 'merchant_risk_historical', onlineStoreProvider: 'Redis Cluster (In-Memory)', offlineWarehouse: 'Snowflake Enterprise', servingLatencyP99Ms: 3.4, freshnessSlaSeconds: 10, isPointInTimeCorrect: true, isOnlineStoreReady: true },
  { entityName: 'session_clickstream_embeddings', onlineStoreProvider: 'Redis Cluster (In-Memory)', offlineWarehouse: 'Snowflake Enterprise', servingLatencyP99Ms: 1.8, freshnessSlaSeconds: 1, isPointInTimeCorrect: true, isOnlineStoreReady: true },
];

const DEF_METRICS = [
  { metricName: 'Point-in-Time Join Leakage', metricValue: '0.00% (Bitwise Certified)', isHealthy: true },
  { metricName: 'Streaming Ingestion Freshness', metricValue: '< 850ms End-to-End', isHealthy: true },
];

export const RealtimeFeatureStoreSlide: React.FC<{ slide?: RealtimeFeatureStoreSlideData; data?: RealtimeFeatureStoreSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const views = data?.featureViews?.length ? data.featureViews : DEF_VIEWS;
  const metrics = data?.metrics?.length ? data.metrics : DEF_METRICS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><Database size={15} className="text-emerald-500" />{data?.kicker || 'ENTERPRISE FEATURE STORE PLATFORM'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data?.onlineReadThroughputQps || 85000} QPS • 2.1ms Serving P99</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Realtime Feature Store: Dual-Path Online Redis vs Offline Snowflake'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Zero-leakage point-in-time correct historical training joins paired with sub-5ms low-latency online inference feature serving'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Registry</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.featureRegistryName || 'Feast ApexML v2'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Features</span><span className="text-sm font-bold text-emerald-400">{(data?.totalRegisteredFeatures || 1450).toLocaleString()} Registered</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Chief Software Engineer</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[530px] items-stretch">
        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-2"><Zap size={16} /> ONLINE STORE (REDIS CLUSTER)</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Sub-3ms Serving</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {views.map((v, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 block">{v.entityName}</span>
                <div className="flex justify-between items-center text-slate-200 font-bold"><span className="text-emerald-400">{v.servingLatencyP99Ms}ms P99</span><span className="text-[10px] text-sky-300">SLA: {v.freshnessSlaSeconds}s</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><Zap size={13} /> 85,000 Read QPS Sustained</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-sky-400 flex items-center gap-2"><Database size={16} /> OFFLINE LAKE (SNOWFLAKE)</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Time Travel AS-OF</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 block">{m.metricName}</span>
                <div className="text-slate-200 font-bold text-xs font-mono">{m.metricValue}</div>
              </div>
            ))}
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">Guarantees historical training datasets reflect strictly what was known at observation time without data leakage.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Zero Feature Leakage Verified</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-300 flex items-center gap-2"><RefreshCw size={16} /> STREAMING INGESTION SYNC</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">Kafka CDC</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">STREAMING PIPELINE</span>
              <div className="text-violet-300 font-bold text-xs font-mono">Flink Real-Time Aggregations</div>
              <div className="text-[11px] text-slate-400">Sliding windows: 1m, 5m, 1h, 24h counters</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">DRIFT DETECTION</span>
              <div className="text-emerald-400 font-bold text-sm">Kolmogorov-Smirnov Test: PASSED</div>
              <div className="text-[10px] text-slate-400">Continuous distribution divergence monitoring</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Online Store Readiness:</span><strong className="font-bold">100% READY</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Feast Store Synchronized</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Online Store: <strong className="text-slate-200">REDIS IN-MEMORY</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Offline Warehouse: <strong className="text-emerald-400">SNOWFLAKE PARQUET</strong></span>
        </div>
        <div className="text-slate-400">Single Step Overview Archetype</div>
      </div>
    </div>
  );
};
