import React from 'react';
import { Globe2 } from 'lucide-react';
import type { CloudRegionNode } from '../../../../types/nextGenArchetypes';
import { CloudRegionCard } from './CloudRegionCard';

interface RegionGridPanelProps {
  regions: CloudRegionNode[];
}

export const RegionGridPanel: React.FC<RegionGridPanelProps> = ({ regions }) => (
  <div className="col-span-8 flex flex-col justify-between">
    <div className="flex items-center justify-between mb-2">
      <span className="font-mono text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-slate-800 dark:text-slate-200">
        <Globe2 size={16} className="text-violet-400" />
        Heterogeneous Cloud Region Nodes ({regions.length} Regions)
      </span>
      <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">
        BGP Anycast Dynamic Drain Fabric
      </span>
    </div>

    <div className="grid grid-cols-2 gap-4 flex-1">
      {regions.map((region) => (
        <CloudRegionCard key={region.regionId} region={region} />
      ))}
    </div>
  </div>
);
