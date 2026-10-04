// lint-allow: file-size reason="NeuromorphicBrainComputerInterfaceTelemetrySlide flat sovereign BCI telemetry" max=450
import React from 'react';
import type {
  NeuromorphicBrainComputerInterfaceTelemetrySlideData,
  BciChannelGroup,
  NeuralBandMetric,
} from '../../../types/suite2031Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Activity,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Server,
  Layers,
  Zap,
  Radio,
  Cpu,
  Heart,
  Thermometer,
  Waves,
} from 'lucide-react';

const DEF_CHANNELS: BciChannelGroup[] = [
  {
    id: 'grp-01',
    corticalRegion: 'Primary Motor Cortex (M1)',
    activeElectrodeCount: 4096,
    signalToNoiseRatioDb: 24.5,
    spikeSortingLatencyMicroseconds: 420.0,
    isNeuralImpedanceOptimal: true,
    hasHermeticSealIntact: true,
  },
  {
    id: 'grp-02',
    corticalRegion: 'Premotor Dorsal Cortex (PMd)',
    activeElectrodeCount: 3072,
    signalToNoiseRatioDb: 22.8,
    spikeSortingLatencyMicroseconds: 440.0,
    isNeuralImpedanceOptimal: true,
    hasHermeticSealIntact: true,
  },
  {
    id: 'grp-03',
    corticalRegion: 'Supplementary Motor Area (SMA)',
    activeElectrodeCount: 1536,
    signalToNoiseRatioDb: 25.1,
    spikeSortingLatencyMicroseconds: 380.0,
    isNeuralImpedanceOptimal: true,
    hasHermeticSealIntact: true,
  },
  {
    id: 'grp-04',
    corticalRegion: 'Somatosensory Cortex (S1)',
    activeElectrodeCount: 1536,
    signalToNoiseRatioDb: 26.1,
    spikeSortingLatencyMicroseconds: 390.0,
    isNeuralImpedanceOptimal: true,
    hasHermeticSealIntact: true,
  },
];

const DEF_BANDS: NeuralBandMetric[] = [
  {
    id: 'band-01',
    bandName: 'Mu Sensory-Motor Rhythm (8-12 Hz)',
    spectralPowerMicroVoltsSquared: 14.2,
    decodingAccuracyPercentage: 97.4,
    isChannelCalibrated: true,
  },
  {
    id: 'band-02',
    bandName: 'Beta Motor Intent Band (13-30 Hz)',
    spectralPowerMicroVoltsSquared: 32.5,
    decodingAccuracyPercentage: 98.6,
    isChannelCalibrated: true,
  },
  {
    id: 'band-03',
    bandName: 'Gamma High-Band Burst (30-70 Hz)',
    spectralPowerMicroVoltsSquared: 64.8,
    decodingAccuracyPercentage: 99.1,
    isChannelCalibrated: true,
  },
  {
    id: 'band-04',
    bandName: 'High-Gamma Neural Spike (70-150 Hz)',
    spectralPowerMicroVoltsSquared: 84.1,
    decodingAccuracyPercentage: 99.2,
    isChannelCalibrated: true,
  },
];

export const NeuromorphicBrainComputerInterfaceTelemetrySlide: React.FC<{
  slide?: NeuromorphicBrainComputerInterfaceTelemetrySlideData;
  data?: NeuromorphicBrainComputerInterfaceTelemetrySlideData;
  activeStep?: number;
}> = ({ slide, data: propData }) => {
  const data = slide || propData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const channelGroups = data?.channelGroups?.length ? data.channelGroups : DEF_CHANNELS;
  const neuralBands = data?.neuralBands?.length ? data.neuralBands : DEF_BANDS;

  const bciId = data?.bciIdentifier || 'BCI-SYNAPSE-10K-PRO';
  const totalChannels = data?.totalElectrodeChannels ?? 10240;
  const powerMw = data?.powerDissipationMilliWatts ?? 6.8;
  const isCalibrated = data?.isImplantCalibrated ?? true;
  const hasBioCompat = data?.hasBioCompatibilityVerified ?? true;
  const hasWirelessStream = data?.hasWirelessTelemetryStreamActive ?? true;
  const hasGlow = data?.hasTelemetryGlow ?? true;

  const avgAccuracy = (
    neuralBands.reduce((acc, b) => acc + b.decodingAccuracyPercentage, 0) / neuralBands.length
  ).toFixed(1);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span
              style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.0rem)' }}
              className="font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2"
            >
              <Activity size={16} className="text-cyan-500" />
              {data?.kicker || 'NEURAL ENGINEERING & BIO-INTELLIGENCE'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Server size={14} /> Device: {bciId}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Cpu size={14} className="text-emerald-500" />
              Channels: {totalChannels.toLocaleString()} Electrodes
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Zap size={14} className="text-purple-500" />
              Dissipation: {powerMw.toFixed(1)} mW Sub-Threshold
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Neuromorphic Brain-Computer Interface (BCI) Telemetry'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              '10,240-channel intracortical spike decoding, sub-milliwatt tissue dissipation, and motor intent reconstruction.'}
          </p>
        </div>

        {/* Telemetry Hero Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Active Channels</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[28px] leading-tight">
              {totalChannels.toLocaleString()}
            </span>
          </div>
          <div className="w-[1px] h-10 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Avg Intent Accuracy</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[28px] leading-tight">
              {avgAccuracy}%
            </span>
          </div>
          <div className="w-[1px] h-10 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold block text-[15px]">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
            <span className="text-[var(--pres-accent)] text-[14px]">
              {data?.leadRole || 'Chief Software Engineer'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[560px]">
        {/* Left Bento: Cortical Region Channel Groups & Action Potentials */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Waves size={16} className="text-[var(--pres-accent)]" /> Intracortical Microelectrode Groups & Spike Latency
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-bold border border-emerald-500/20">
                100% Bio-Compatible
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {channelGroups.map((grp) => {
                const isImpedanceOk = grp.isNeuralImpedanceOptimal;
                return (
                  <div
                    key={grp.id}
                    className="p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Activity size={16} className="text-cyan-500" />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{grp.corticalRegion}</span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isImpedanceOk
                              ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                              : 'bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/30'
                          }`}
                        >
                          {isImpedanceOk ? 'Impedance 120kΩ' : 'High Impedance'}
                        </span>
                        {grp.hasHermeticSealIntact && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Hermetic Seal Intact
                          </span>
                        )}
                      </div>
                      <span className="font-bold text-purple-700 dark:text-purple-400">
                        {grp.activeElectrodeCount.toLocaleString()} Channels
                      </span>
                    </div>

                    <div className="text-[14px] font-mono text-slate-600 dark:text-slate-400 mb-2 flex items-center gap-4">
                      <span>Signal-to-Noise: <strong className="text-emerald-700 dark:text-emerald-400">+{grp.signalToNoiseRatioDb.toFixed(1)} dB</strong></span>
                      <span>•</span>
                      <span>Spike Sorting Latency: <strong className="text-cyan-700 dark:text-cyan-400">{grp.spikeSortingLatencyMicroseconds.toFixed(0)} μs</strong></span>
                    </div>

                    {/* SNR Meter Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[14px] font-mono text-slate-600 dark:text-slate-400">
                        <span>SNR Margin:</span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-400">
                          {grp.signalToNoiseRatioDb.toFixed(1)} dB (Target &gt; 18.0 dB)
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 transition-all duration-500"
                          style={{ width: `${(grp.signalToNoiseRatioDb / 30.0) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between text-[14px] font-mono text-slate-500 dark:text-slate-400">
            <span>Neuromorphic Spike Sorter: Asynchronous event-driven event detector</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 size={14} /> Sub-Millisecond Motor Intent Decoded
            </span>
          </div>
        </div>

        {/* Right Bento: Spectral Bands & Thermal Dissipation Safeguards */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Thermometer size={16} className="text-cyan-500" /> Spectral Power Bands & Thermal Safeguards
              </span>
              <span className="font-mono text-[14px] text-emerald-700 dark:text-emerald-400 font-bold">
                Delta-T &lt; 0.3°C
              </span>
            </div>

            <div className="space-y-3.5 mt-4 font-mono text-[14px]">
              {neuralBands.map((band) => (
                <div
                  key={band.id}
                  className="p-3.5 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">
                      {band.bandName}
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                      {band.decodingAccuracyPercentage.toFixed(1)}% Accuracy
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-500 dark:text-slate-400 text-[14px] mb-2">
                    <span>Spectral Power:</span>
                    <span className="font-bold text-cyan-700 dark:text-cyan-400">
                      {band.spectralPowerMicroVoltsSquared.toFixed(1)} μV²
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500"
                      style={{ width: `${band.decodingAccuracyPercentage}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Implant Calibration State</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {isCalibrated ? 'Calibrated (Zero Drift)' : 'Calibrating'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Bio-Compatibility Verified</span>
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {hasBioCompat ? 'Platinum-Iridium Flexible Ribbons' : 'Pending'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Wireless Telemetry Stream</span>
                  <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                    <Radio size={16} /> {hasWirelessStream ? 'Optical Transcutaneous Link Active' : 'Offline'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-cyan-500 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Total power dissipation of {powerMw.toFixed(1)} mW strictly guarantees brain tissue temperature rise remains below 0.3°C.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div
        style={{ backdropFilter: 'blur(14px)' }}
        className={`plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-[14px] z-10 ${
          hasGlow ? 'shadow-cyan-500/10' : ''
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Neural Telemetry:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Zero Invasive Tissue Damage | Wireless Optical Power Delivery: 100% Nominal | 10k Channel Spikes Active
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 Bio-Neural
          </span>
        </div>
      </div>
    </div>
  );
};

export default NeuromorphicBrainComputerInterfaceTelemetrySlide;
