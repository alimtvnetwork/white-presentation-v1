import React from 'react';
import type { RealtimeEventStreamFabricSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { FabricClusterHeader } from './eventstream/FabricClusterHeader';
import { TopicPartitionsGrid } from './eventstream/TopicPartitionsGrid';
import { ConsumerGroupLagCard } from './eventstream/ConsumerGroupLagCard';
import { Activity, ShieldCheck, Terminal } from 'lucide-react';

export const RealtimeEventStreamFabricSlide: React.FC<{ slide: RealtimeEventStreamFabricSlideData }> = ({
  slide,
}) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const topics = slide.topics || [];
  const consumerGroups = slide.consumerGroups || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center gap-1.5">
            <Activity size={12} /> {slide.kicker || 'STREAMING FABRIC'}
          </span>
          <span className="font-mono text-xs text-sky-300 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
            Real-Time Pub/Sub Fabric
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Real-Time Event Streaming Topology & Partition Fabric'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'High-Throughput Pub/Sub Message Bus, Zero Consumer Lag & Fault Isolation'}
        </p>
      </div>

      <div className="z-10 flex flex-col gap-5 my-auto">
        <FabricClusterHeader
          clusterRegion={slide.clusterRegion || 'Global Anycast Multi-Region'}
          aggregateThroughputEps={slide.aggregateThroughputEps ?? 2400000}
          totalDeadLetterQueueEvents={slide.totalDeadLetterQueueEvents ?? 0}
          principalEngineer={slide.principalEngineer || 'Alim Ul Karim'}
          engineerRole={slide.engineerRole || 'Chief Software Engineer'}
        />

        <div className="grid grid-cols-12 gap-6 items-stretch h-[500px]">
          <div className="col-span-6 h-full">
            <TopicPartitionsGrid topics={topics} />
          </div>
          <div className="col-span-6 h-full">
            <ConsumerGroupLagCard consumerGroups={consumerGroups} />
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-sky-400 font-bold">
          <ShieldCheck size={14} className="text-emerald-400" />
          TLS 1.3 End-to-End Encrypted | Exactly-Once Delivery Semantics
        </span>
        <span className="flex items-center gap-1.5 text-slate-400">
          <Terminal size={12} />
          Principal Engineer: {slide.principalEngineer || 'Alim Ul Karim'} ({slide.engineerRole || 'Chief Software Engineer'})
        </span>
      </div>
    </div>
  );
};
