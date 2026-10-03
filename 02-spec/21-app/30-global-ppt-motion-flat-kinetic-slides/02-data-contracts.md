# 02-Data Contracts: The 15 Extended Slide Archetypes

> **Specification Identifier:** `02-spec/21-app/30-global-ppt-motion-flat-kinetic-slides/02-data-contracts`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.4.0`  
> **Author:** Spec Author 01  
> **Created:** 2026-10-03  
> **Domain:** TypeScript Schemas, Virtual Coordinate Budgets, Step Count Formulas, ASCII Wireframes & Verified JSON Fixtures  

---

## 1. Architectural Foundation & Base Contract

Every one of the 15 extended slide archetypes defined in this specification extends the foundational `BaseSlide` contract. Every archetype adheres strictly to:

1. **Canonical 16:9 1920x1080 Viewport Geometry:** All bounding containers and coordinate calculations are fixed to exactly $1920\text{px}$ width by $1080\text{px}$ height. Layout drift across disparate display resolutions is eliminated through uniform GPU transform scaling.
2. **Pure Live DOM Typography Mandate:** Every text node (headlines, subtitles, kicker pill badges, body narratives, table cells, metric digits, and footnotes) renders as an accessible, selectable HTML element. Text must never be flattened into raster graphics or canvas bitmaps.
3. **Stepwise Intra-Slide Progression:** Slides support internal sub-step choreography (`activeStep: number`, `maxSteps: number`), resolving items into `past` (0.75 opacity with checkmark), `active` (1.00 opacity with glowing halo and spring physics), or `future` (0.40 opacity with $1.25\text{px}$ optical blur).
4. **Positive Boolean Polarity Only:** All boolean fields use positive naming conventions (`is*`, `has*`, `can*`, `should*`). Prohibit negative booleans (`disabled`, `hidden`, `isNotActive`) and explicit boolean comparisons (`== true`).
5. **Persona Normalization:** Any reference to executive Alim Ul Karim is strictly titled **"Chief Software Engineer"** (never "Founder" or "CEO").

```typescript
export interface BaseSlide {
  id: string;
  type: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  themeId?: string;
  notes?: string;
  activeStep?: number;
  maxSteps?: number;
}
```

---

## 2. Master Catalog of the 15 Extended Slide Archetypes

```
+---------------------------------------------------------------------------------------------------+
|                        MASTER CATALOG: 15 EXTENDED SLIDE ARCHETYPES                               |
+---------------------------------------------------------------------------------------------------+
|  [01] personal-vpn             --> Consumer Infrastructure & Network Node (FreeBSD, WireGuard)    |
|  [02] meeting-transcript       --> Real-time Meeting Transcript & Audio Diarization (3-Device Sync)|
|  [03] llm-benchmark            --> LLM Token Stream & Model Arena (TTFT, Throughput, Private Vault)|
|  [04] services-gravity         --> Services Bubble Gravity & Orbital Solar System (Physics Engine)|
|  [05] seo-dominance            --> SEO Evolution & Search Dominance (4-Era Ladder & Audit Grid)   |
|  [06] staff-aug-pipeline       --> Staff Augmentation & Candidate Vetting Pipeline (1000:3 Funnel)|
|  [07] craftsmanship-benchmark  --> Precision Craftsmanship & Luxury Standard (Horological Rigor)  |
|  [08] weekly-cadence           --> Global Remote Work Culture & Timezone Heatmap (Sun-Thu Rhythm) |
|  [09] competitive-moat         --> Multi-Dimensional Competitive Moat (Shimmer Pill Bento Cards)  |
|  [10] rapid-feedback           --> Rapid Iteration & Sprint Feedback Loop (4 Circular Stages)     |
|  [11] interactive-poll         --> Interactive Live Audience Polling (Real-Time Percentages)      |
|  [12] live-qa                  --> Live Q&A Curation Stream (Dynamic Upvoting & Answer Spotlight)  |
|  [13] embed-stage              --> Interactive Web Embed & Sandboxed Stage (16:9 Sandboxed Window)|
|  [14] countdown-launch         --> Event & Product Launch Countdown (Color-Shifting T-Minus Clock)|
|  [15] executive-takeaways      --> Bipartite Executive Briefing / Decision Protocol (Synopsis/ROI)|
+---------------------------------------------------------------------------------------------------+
```

---

## 3. Discriminated Union Declarations

```typescript
export type ExtendedSlideType =
  | 'personal-vpn'
  | 'meeting-transcript'
  | 'llm-benchmark'
  | 'services-gravity'
  | 'seo-dominance'
  | 'staff-aug-pipeline'
  | 'craftsmanship-benchmark'
  | 'weekly-cadence'
  | 'competitive-moat'
  | 'rapid-feedback'
  | 'interactive-poll'
  | 'live-qa'
  | 'embed-stage'
  | 'countdown-launch'
  | 'executive-takeaways';

export type ExtendedSlideData =
  | PersonalVpnSlideData
  | MeetingTranscriptSlideData
  | LlmBenchmarkSlideData
  | ServicesGravitySlideData
  | SeoDominanceSlideData
  | StaffAugPipelineSlideData
  | CraftsmanshipBenchmarkSlideData
  | WeeklyCadenceSlideData
  | CompetitiveMoatSlideData
  | RapidFeedbackSlideData
  | InteractivePollSlideData
  | LiveQaSlideData
  | EmbedStageSlideData
  | CountdownLaunchSlideData
  | ExecutiveTakeawaysSlideData;
```

---

## 4. Deep Specification of the 15 Extended Slide Archetypes

---

### Archetype 01: `personal-vpn` (PersonalVpnSlide)

#### Semantic Role & Use Case
Consumer infrastructure and secure network node briefing. Demonstrates zero-trust edge topology across FreeBSD bare-metal nodes, WireGuard, and OpenVPN protocols spanning 300+ servers across 29 sovereign countries.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Consumer Infrastructure & Sovereign Node Mesh   |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Bare-metal FreeBSD nodes, WireGuard cryptographic tunnel|
|                                                                                                   |
| +---------------------------------------------------------+  +----------------------------------+ |
| | GLOBAL SERVER NODE MESH STAGE                           |  | PROTOCOL & TELEMETRY INSPECTOR   | |
| | (Y=240, X=100, W=1120, H=710, Plane 1)                  |  | (Y=240, X=1260, W=560, H=710)    | |
| |                                                         |  |                                  | |
| | +-----------------------------------------------------+ |  | [Protocol: WireGuard / ChaCha20] | |
| | | NODE 01: Frankfurt Core (10Gbps, FreeBSD 14.1)      | |  |                                  | |
| | | Status: [Completed] Latency: 12ms Load: 34%         | |  | [Active Node: Tokyo Edge]        | |
| | +-----------------------------------------------------+ |  | IP: 198.51.100.42 (Encrypted)    | |
| |                                                         |  | Bandwidth: 8.4 Gbps / 10 Gbps    | |
| | +-----------------------------------------------------+ |  | Packet Loss: 0.000%              | |
| | | NODE 02: Tokyo Edge (10Gbps, WireGuard Kernel Mesh) | |  | Handshake: 42s ago               | |
| | | Status: [ACTIVE HALO] Latency: 18ms Load: 52%       | |  | Kill-Switch: Hardware Enforced   | |
| | +-----------------------------------------------------+ |  |                                  | |
| |                                                         |  | +------------------------------+ | |
| | +-----------------------------------------------------+ |  | | CRYPTOGRAPHIC SUITE          | | |
| | | NODE 03: Singapore Gateway (FreeBSD pf NAT)         | |  | | Curve25519 ECDH Key Exchange | | |
| | | Status: [1.25px Blur] Latency: 22ms Load: 28%       | |  | | Poly1305 MAC Authentication  | | |
| | +-----------------------------------------------------+ |  | +------------------------------+ | |
| +---------------------------------------------------------+  +----------------------------------+ |
| [Footer Metadata: Y=990, X=100, W=1720, H=30] -- 300+ Servers | 29 Countries | Zero Log Audit    |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Server Node Stage | 100 | 240 | 1120 | 710 | Plane 1 | Bento container, `backdrop-blur(12px)`, overflow hidden |
| Node Cards (3-4) | 130 | 270 + i*160 | 1060 | 140 | Plane 1/2 | Interactive bento cards; active node elevated with halo glow |
| Protocol Inspector | 1260 | 240 | 560 | 710 | Plane 1 | Glassmorphic panel, diagnostic meters, cryptographic badge suite |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Telemetry indicators, WCAG compliant secondary text |

#### TypeScript Contract
```typescript
export interface VpnNodeItem {
  id: string;
  city: string;
  country: string;
  ipAddress: string;
  latencyMs: number;
  bandwidthGbps: number;
  serverLoadPct: number;
  osDistribution: 'FreeBSD' | 'OpenBSD' | 'Linux-Hardened';
  isKillSwitchActive: boolean;
  isVerifiedAudit: boolean;
}

export interface PersonalVpnSlideData extends BaseSlide {
  type: 'personal-vpn';
  activeProtocol: 'WireGuard' | 'OpenVPN' | 'IPSec';
  encryptionSuite: string;
  totalServersCount: number;
  totalCountriesCount: number;
  nodes: VpnNodeItem[];
  networkSummaryNotes?: string;
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.nodes ? Math.max(1, slide.nodes.length) : 1`
- **Choreography:**
  - `i < activeStep`: Node completed; displays verified lock badge (`CheckCircle2`), desaturated border.
  - `i === activeStep`: Node active; elevated to Plane 2 (`scale: 1.02`), accent halo (`0 0 24px -2px hsl(var(--pres-accent) / 0.5)`), right inspector updates to show this node's live telemetry.
  - `i > activeStep`: Node future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-vpn-01",
  "type": "personal-vpn",
  "title": "Consumer Infrastructure & Sovereign Network Mesh",
  "subtitle": "Bare-metal FreeBSD edge nodes with WireGuard ChaCha20-Poly1305 encryption",
  "kicker": "ZERO-TRUST EDGE",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 3,
  "activeProtocol": "WireGuard",
  "encryptionSuite": "ChaCha20-Poly1305 + Curve25519",
  "totalServersCount": 320,
  "totalCountriesCount": 29,
  "nodes": [
    {
      "id": "node-fra",
      "city": "Frankfurt",
      "country": "Germany",
      "ipAddress": "198.51.100.12",
      "latencyMs": 12,
      "bandwidthGbps": 10.0,
      "serverLoadPct": 34,
      "osDistribution": "FreeBSD",
      "isKillSwitchActive": true,
      "isVerifiedAudit": true
    },
    {
      "id": "node-tyo",
      "city": "Tokyo",
      "country": "Japan",
      "ipAddress": "198.51.100.42",
      "latencyMs": 18,
      "bandwidthGbps": 10.0,
      "serverLoadPct": 52,
      "osDistribution": "FreeBSD",
      "isKillSwitchActive": true,
      "isVerifiedAudit": true
    },
    {
      "id": "node-sin",
      "city": "Singapore",
      "country": "Singapore",
      "ipAddress": "198.51.100.88",
      "latencyMs": 24,
      "bandwidthGbps": 10.0,
      "serverLoadPct": 28,
      "osDistribution": "FreeBSD",
      "isKillSwitchActive": true,
      "isVerifiedAudit": true
    }
  ]
}
```

---

### Archetype 02: `meeting-transcript` (MeetingTranscriptSlide)

#### Semantic Role & Use Case
Real-time meeting transcript and multi-speaker audio diarization presentation. Unfolds meeting dialogue with speaker turn attribution, animated live waveform visualizer, and 3-device fan-out state synchronization (MacBook, iPhone, iPad).

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Real-Time Meeting Diarization & Sync Fabric      |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Sub-second turn attribution, WebRTC waveform telemetry  |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | LIVE AUDIO DIARIZATION WAVEFORM BAR (Y=240, X=100, W=1720, H=80, Plane 1)                      | |
| | [Speaker 1: Blue] |||||||| [Speaker 2: Coral] |||||||||| [Active Speaker 3: Violet] ||||||||||| |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +---------------------------------------------------------+  +----------------------------------+ |
| | LIVE TRANSCRIPT DIALOGUE STREAM                         |  | 3-DEVICE FAN-OUT PERSPECTIVE     | |
| | (Y=350, X=100, W=1160, H=600, Plane 1)                  |  | (Y=350, X=1300, W=520, H=600)    | |
| |                                                         |  |                                  | |
| | [Turn 01: Sarah Chen (VP Eng)] 00:04:12                 |  | +------------------------------+ | |
| | "We have consolidated the distributed ledger nodes..."  |  | | DEVICE 1: MacBook Pro (Host) | | |
| | Status: [Completed]                                     |  | | State: Ingesting 48kHz Audio | | |
| |                                                         |  | +------------------------------+ | |
| | [Turn 02: Alim Ul Karim (Chief Software Engineer)]      |  | | DEVICE 2: iPhone 16 Pro      | | |
| | "The consensus round latency is down to 42ms with zero  |  | | State: CRDT Local Sync (0ms) | | |
| | frame drops. Pure live DOM rendering is validated."     |  | +------------------------------+ | |
| | Status: [ACTIVE SPEAKER HALO - Plane 2]                 |  | | DEVICE 3: iPad Pro 13"       | | |
| |                                                         |  | | State: Stage Display Ready   | | |
| | [Turn 03: Elena Rostova (Product Lead)] 00:05:44        |  | +------------------------------+ | |
| | "Executive buy-in confirmed for FY26 Q4 launch."        |  | Latency: <16ms | Sync: CRDT Lock | |
| | Status: [1.25px Blur]                                   |  | WebRTC Data Channel: Connected   | |
| +---------------------------------------------------------+  +----------------------------------+ |
| [Footer Metadata: Y=990, X=100, W=1720, H=30]                                                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-ember`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Waveform Bar | 100 | 240 | 1720 | 80 | Plane 1 | SVG multi-frequency waveform with speaker color segments |
| Dialogue Stream | 100 | 350 | 1160 | 600 | Plane 1 | Bento container, scrollable speech bubbles with timestamps |
| Active Turn Bubble | 130 | Dynamic | 1100 | Auto | Plane 2 | Accent border, glowing halo (`--pres-accent`), scale 1.02 |
| 3-Device Synced Panel | 1300 | 350 | 520 | 600 | Plane 1 | Glassmorphic stage, 3 device isometric preview frames |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Audio sampling bitrate (48kHz FLAC), encryption badge |

#### TypeScript Contract
```typescript
export interface SpeakerTurnItem {
  id: string;
  speakerName: string;
  speakerRole: string;
  timestamp: string;
  utterance: string;
  speakerColor: string;
  sentimentTag: 'constructive' | 'decisive' | 'inquiry';
  hasAccentHighlight?: boolean;
}

export interface SyncedDeviceItem {
  id: string;
  deviceName: string;
  deviceType: 'desktop' | 'phone' | 'tablet';
  syncState: string;
  latencyMs: number;
  isPrimaryHost: boolean;
}

export interface MeetingTranscriptSlideData extends BaseSlide {
  type: 'meeting-transcript';
  meetingTitle: string;
  meetingDate: string;
  durationFormatted: string;
  speakerTurns: SpeakerTurnItem[];
  syncedDevices: SyncedDeviceItem[];
  isLiveRecording: boolean;
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.speakerTurns ? Math.max(1, slide.speakerTurns.length) : 1`
- **Choreography:**
  - `i < activeStep`: Turn past; opacity 0.75, historical timestamp, neutral border.
  - `i === activeStep`: Turn active; speaker utterance elevated to Plane 2, glowing accent halo, device sync animation triggers.
  - `i > activeStep`: Turn future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-transcript-01",
  "type": "meeting-transcript",
  "title": "Real-Time Meeting Diarization & Synchronized Multi-Device Fabric",
  "subtitle": "Continuous speaker turn attribution with sub-16ms CRDT multi-device state synchronization",
  "kicker": "AUDIO INTELLIGENCE",
  "themeId": "midnight-luxe",
  "activeStep": 1,
  "maxSteps": 3,
  "meetingTitle": "Executive Engineering Council - Q4 Architecture Sync",
  "meetingDate": "October 3, 2026",
  "durationFormatted": "00:45:18",
  "isLiveRecording": true,
  "speakerTurns": [
    {
      "id": "turn-01",
      "speakerName": "Sarah Chen",
      "speakerRole": "VP of Infrastructure",
      "timestamp": "00:04:12",
      "utterance": "We have consolidated the distributed ledger nodes into 3 bare-metal regions with automatic failover.",
      "speakerColor": "#008DDA",
      "sentimentTag": "decisive"
    },
    {
      "id": "turn-02",
      "speakerName": "Alim Ul Karim",
      "speakerRole": "Chief Software Engineer",
      "timestamp": "00:05:08",
      "utterance": "The consensus round latency is down to 42ms with zero frame drops. Pure live DOM rendering is mathematically verified.",
      "speakerColor": "#6366F1",
      "sentimentTag": "constructive",
      "hasAccentHighlight": true
    },
    {
      "id": "turn-03",
      "speakerName": "Elena Rostova",
      "speakerRole": "Product Lead",
      "timestamp": "00:06:15",
      "utterance": "Executive steering committee confirmed deployment schedule for tomorrow morning.",
      "speakerColor": "#10B981",
      "sentimentTag": "decisive"
    }
  ],
  "syncedDevices": [
    {
      "id": "dev-01",
      "deviceName": "MacBook Pro 16\"",
      "deviceType": "desktop",
      "syncState": "Ingesting 48kHz Audio Stream",
      "latencyMs": 0,
      "isPrimaryHost": true
    },
    {
      "id": "dev-02",
      "deviceName": "iPhone 16 Pro",
      "deviceType": "phone",
      "syncState": "CRDT Real-Time Sync Active",
      "latencyMs": 14,
      "isPrimaryHost": false
    },
    {
      "id": "dev-03",
      "deviceName": "iPad Pro 13\"",
      "deviceType": "tablet",
      "syncState": "Stage Display Visualizer",
      "latencyMs": 16,
      "isPrimaryHost": false
    }
  ]
}
```

---

### Archetype 03: `llm-benchmark` (LlmBenchmarkSlide)

#### Semantic Role & Use Case
LLM token stream, model arena, and private enterprise AI benchmarking. Compares frontier foundational models (Claude 3.7 Sonnet, GPT-4.5, Gemini 2.0 Flash, Local Sovereign DeepSeek/Llama-3) on latency, Time-To-First-Token (TTFT), throughput, and local hardware execution.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Enterprise LLM Arena & Private Stream Benchmark |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Sub-second TTFT, token throughput, sovereign on-device  |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | TOP KPI BANNER (Y=240, X=100, W=1720, H=90, Plane 1)                                          | |
| | [Metric 1: 184 tok/s Peak]  [Metric 2: 120ms TTFT]  [Metric 3: 100% Private]  [Metric 4: 128k]  | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +-------------------------+     +-------------------------+     +-------------------------+       |
| | MODEL 1: CLAUDE 3.7     |     | MODEL 2: PRIVATE LLAMA3 |     | MODEL 3: GEMINI 2 FLASH |       |
| | (Y=360, X=100, W=540)   |     | (Y=360, X=690, W=540)   |     | (Y=360, X=1280, W=540)  |       |
| | Height: 590px, Plane 1  |     | Height: 590px, Plane 2  |     | Height: 590px, Plane 1  |       |
| |                         |     |                         |     |                         |       |
| | TTFT: 240ms             |     | TTFT: 85ms (Local GPU)  |     | TTFT: 140ms             |       |
| | Speed: 92 tok/s         |     | Speed: 184 tok/s        |     | Speed: 145 tok/s        |       |
| | Host: Anthropic Cloud   |     | Host: On-Prem Sovereign |     | Host: Google Cloud      |       |
| | Privacy: Enterprise DP  |     | Privacy: ZERO DATA LEAK |     | Privacy: Workspace SLA  |       |
| | Status: [Completed]     |     | Status: [ACTIVE HALO]   |     | Status: [1.25px Blur]   |       |
| |                         |     |                         |     |                         |       |
| | Token Stream Simulation |     | Token Stream Simulation |     | Token Stream Simulation |       |
| | "Synthesizing event..." |     | "Executing local kernel"|     | "Parsing prompt..."     |       |
| +-------------------------+     +-------------------------+     +-------------------------+       |
| [Footer Metadata: Y=990, X=100, W=1720, H=30]                                                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Top KPI Banner | 100 | 240 | 1720 | 90 | Plane 1 | 4 metric badges, border `--pres-card-border`, frosted backdrop |
| Model Card 01 | 100 | 360 | 540 | 590 | Plane 1/2 | Benchmark container, interactive step card |
| Model Card 02 | 690 | 360 | 540 | 590 | Plane 1/2 | Benchmark container, interactive step card |
| Model Card 03 | 1280 | 360 | 540 | 590 | Plane 1/2 | Benchmark container, interactive step card |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Evaluation dataset, FP16 precision, hardware specs |

#### TypeScript Contract
```typescript
export interface LlmBenchmarkModelItem {
  id: string;
  modelName: string;
  provider: string;
  timeToFirstTokenMs: number;
  tokensPerSec: number;
  contextWindow: string;
  isPrivateOnDevice: boolean;
  isLeader: boolean;
  sampleStreamChunk: string;
  evaluationScorePct: number;
}

export interface LlmBenchmarkSlideData extends BaseSlide {
  type: 'llm-benchmark';
  benchmarkDatasetName: string;
  hardwarePlatform: string;
  peakThroughput: string;
  lowestLatency: string;
  models: LlmBenchmarkModelItem[];
  evaluationCriteriaNotes?: string;
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.models ? Math.max(1, slide.models.length) : 1`
- **Choreography:**
  - `i < activeStep`: Model completed; opacity 0.75, desaturated status badge.
  - `i === activeStep`: Model active; elevated to Plane 2 (`scale: 1.02`), accent halo (`--pres-accent`), typing cursor animates live simulated token stream.
  - `i > activeStep`: Model future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-llm-01",
  "type": "llm-benchmark",
  "title": "Enterprise LLM Arena & Private Stream Benchmark",
  "subtitle": "Real-time comparison of Time-To-First-Token, generation speed, and sovereign privacy",
  "kicker": "AI BENCHMARK",
  "themeId": "cyber-neon",
  "activeStep": 1,
  "maxSteps": 3,
  "benchmarkDatasetName": "Enterprise Code Synthesis & Financial Reasoning v4.2",
  "hardwarePlatform": "8x NVIDIA H100 SXM5 / PCIe 5.0",
  "peakThroughput": "184 tok/s",
  "lowestLatency": "85ms TTFT",
  "models": [
    {
      "id": "model-claude",
      "modelName": "Claude 3.7 Sonnet",
      "provider": "Anthropic Cloud",
      "timeToFirstTokenMs": 240,
      "tokensPerSec": 92,
      "contextWindow": "200k",
      "isPrivateOnDevice": false,
      "isLeader": false,
      "sampleStreamChunk": "Synthesizing event fabric topology and distributed cluster constraints...",
      "evaluationScorePct": 94.6
    },
    {
      "id": "model-llama-sovereign",
      "modelName": "Llama-3-70B Sovereign",
      "provider": "On-Prem Private Cluster",
      "timeToFirstTokenMs": 85,
      "tokensPerSec": 184,
      "contextWindow": "128k",
      "isPrivateOnDevice": true,
      "isLeader": true,
      "sampleStreamChunk": "Executing zero-latency memory kernel; verified zero external data transmission.",
      "evaluationScorePct": 96.2
    },
    {
      "id": "model-gemini",
      "modelName": "Gemini 2.0 Flash",
      "provider": "Google Cloud",
      "timeToFirstTokenMs": 140,
      "tokensPerSec": 145,
      "contextWindow": "1M",
      "isPrivateOnDevice": false,
      "isLeader": false,
      "sampleStreamChunk": "Streaming high-frequency token vector responses with multimodal grounding.",
      "evaluationScorePct": 93.8
    }
  ]
}
```

---

### Archetype 04: `services-gravity` (ServicesGravitySlide)

#### Semantic Role & Use Case
Services bubble gravity and orbital solar system visualization. Renders a central enterprise core node surrounded by dynamic satellite service bubbles (Auth, Billing, Search, AI, Ingestion, Analytics) governed by the atmospheric bubble physics simulation engine.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Services Bubble Gravity & Core Orbital Topology  |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Physics-damped satellite nodes revolving around Core API|
|                                                                                                   |
| +---------------------------------------------------------+  +----------------------------------+ |
| | ORBITAL GRAVITY SIMULATION STAGE                        |  | SERVICE NODE TELEMETRY INSPECTOR | |
| | (Y=240, X=100, W=1180, H=710, Plane 0/1)                |  | (Y=240, X=1320, W=500, H=710)    | |
| |                                                         |  |                                  | |
| |               ( ) Satellite Node 1 (Auth Mesh)          |  | [Selected Node: Core Event Bus]  | |
| |                      \                                  |  | SLA: 99.999%                     | |
| |        ( ) Node 2 ---- [ CENTRAL SUN ] ---- ( ) Node 3  |  | Throughput: 142k req/sec         | |
| |        (Billing)       [ CORE EVENT  ]      (AI Agents) |  | P99 Latency: 4.2ms               | |
| |                        [   FABRIC    ]                  |  | Cluster: 16 Pods / Multi-Region  | |
| |                      /                                  |  | Physics Preset: servicesDefault  | |
| |               (*) Node 4 (ACTIVE HALO - Search DB)      |  | Repulsion Radius: 180px          | |
| |                                                         |  | Spring Stiffness: 0.08          | |
| | [Orbital Tracks: R1=180px, R2=290px, R3=400px]          |  | Gravitational Const: 0.45        | |
| +---------------------------------------------------------+  +----------------------------------+ |
| [Footer Metadata: Y=990, X=100, W=1720, H=30]                                                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-cream`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Solar Simulation Stage | 100 | 240 | 1180 | 710 | Plane 0/1 | SVG canvas with orbital guide lines and bubble physics DOM nodes |
| Central Sun Node | 690 | 595 | 160 | 160 | Plane 2 | Radiant core node with rotating halo gradient ring |
| Satellite Nodes (4-6) | Dynamic | Dynamic | 90 - 130 | 90 - 130 | Plane 1/2 | Interactive floating bubbles, spring physics repositioning |
| Node Telemetry Drawer | 1320 | 240 | 500 | 710 | Plane 1 | Glassmorphic panel with dependency metrics and connection list |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Physics simulation tick rate, damping constant |

#### TypeScript Contract
```typescript
export interface OrbitingServiceBubble {
  id: string;
  name: string;
  category: string;
  orbitRadiusPx: number;
  orbitSpeedDeg: number;
  bubbleSizePx: number;
  slaAvailability: string;
  throughputKps: number;
  p99LatencyMs: number;
  isMissionCritical: boolean;
}

export interface ServicesGravitySlideData extends BaseSlide {
  type: 'services-gravity';
  coreSunTitle: string;
  coreSunSubtitle: string;
  physicsPreset: 'servicesDefault' | 'calm' | 'dense' | 'lively';
  services: OrbitingServiceBubble[];
  gravitySummaryNotes?: string;
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.services ? Math.max(1, slide.services.length) : 1`
- **Choreography:**
  - `i < activeStep`: Service completed; subdued orbit path, stable border.
  - `i === activeStep`: Service active; highlighted satellite bubble pulls closer to inspector, glows with active halo ring, inspector displays its live telemetry.
  - `i > activeStep`: Service future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-gravity-01",
  "type": "services-gravity",
  "title": "Services Bubble Gravity & Core Orbital Topology",
  "subtitle": "Force-directed physics simulation of microservices orbiting sovereign Core Event Fabric",
  "kicker": "SYSTEM TOPOLOGY",
  "themeId": "wp-exam-purple",
  "activeStep": 1,
  "maxSteps": 4,
  "coreSunTitle": "Sovereign Event Core",
  "coreSunSubtitle": "142k events/sec Zero-Copy Bus",
  "physicsPreset": "servicesDefault",
  "services": [
    {
      "id": "svc-auth",
      "name": "Auth & RBAC Mesh",
      "category": "Identity",
      "orbitRadiusPx": 180,
      "orbitSpeedDeg": 12,
      "bubbleSizePx": 110,
      "slaAvailability": "99.999%",
      "throughputKps": 48.5,
      "p99LatencyMs": 1.8,
      "isMissionCritical": true
    },
    {
      "id": "svc-billing",
      "name": "Billing & Ledger",
      "category": "Commerce",
      "orbitRadiusPx": 240,
      "orbitSpeedDeg": 8,
      "bubbleSizePx": 105,
      "slaAvailability": "99.995%",
      "throughputKps": 12.4,
      "p99LatencyMs": 3.4,
      "isMissionCritical": true
    },
    {
      "id": "svc-ai",
      "name": "AI Inference Mesh",
      "category": "Compute",
      "orbitRadiusPx": 310,
      "orbitSpeedDeg": 6,
      "bubbleSizePx": 125,
      "slaAvailability": "99.990%",
      "throughputKps": 22.8,
      "p99LatencyMs": 8.5,
      "isMissionCritical": true
    },
    {
      "id": "svc-search",
      "name": "Vector Search Cluster",
      "category": "Storage",
      "orbitRadiusPx": 380,
      "orbitSpeedDeg": 4,
      "bubbleSizePx": 115,
      "slaAvailability": "99.990%",
      "throughputKps": 34.0,
      "p99LatencyMs": 6.1,
      "isMissionCritical": false
    }
  ]
}
```

---

### Archetype 05: `seo-dominance` (SeoDominanceSlide)

#### Semantic Role & Use Case
SEO evolution and search dominance architecture. Deconstructs the 4-era difficulty ladder (2015 Keyword Density -> 2018 Backlinks -> 2021 Core Web Vitals & E-E-A-T -> 2025 AI Overviews & Zero-Click Search), displaying the organic CTR erosion curve alongside a 3x2 technical audit scorecard.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- SEO Evolution: 10-Year Search Dominance Matrix   |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- The 4-era transition from keyword stuffing to AI Overviews|
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | 4-ERA DIFFICULTY LADDER (Y=240, X=100, W=1720, H=190, Plane 1)                                | |
| | [ERA 1: 2015]           [ERA 2: 2018]           [ERA 3: 2021]           [ERA 4: 2025 AI OVER]   | |
| | Keywords & H1 Tags      Backlinks & PBNs        Core Web Vitals & EEAT  Zero-Click AI Answers   | |
| | Diff: Low (18%)         Diff: Med (42%)         Diff: High (74%)        Diff: CRITICAL (96%)    | |
| | Status: [Completed]     Status: [Completed]     Status: [ACTIVE HALO]   Status: [1.25px Blur]   | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +--------------------------------------------+  +----------------------------------------------+  |
| | ORGANIC CTR DROP GRAPH                     |  | 3x2 TECHNICAL AUDIT SCORECARD                |  |
| | (Y=460, X=100, W=830, H=490, Plane 1)      |  | (Y=460, X=990, W=830, H=490, Plane 1)       |  |
| |                                            |  |                                              |  |
| | Position 1 CTR: 32% (2015) -> 16% (2025)   |  | [Audit 1: INP < 40ms]    [Audit 2: LCP < 0.8s]|  |
| | AI Overview Displacement: -48% Organic     |  | Score: 100/100           Score: 99/100       |  |
| | Zero-Click Volume: 58.5% of All Queries    |  |                                              |  |
| | SVG Curve: Exponential Downward Erosion    |  | [Audit 3: Schema Mesh]   [Audit 4: Edge Cache]|  |
| | Takeaway: Brand Search & Direct Entity Auth|  | Score: 98/100            Score: 100/100      |  |
| +--------------------------------------------+  +----------------------------------------------+  |
| [Footer Metadata: Y=990, X=100, W=1720, H=30]                                                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| 4-Era Difficulty Ladder | 100 | 240 | 1720 | 190 | Plane 1 | 4 horizontal step blocks with ascending difficulty bars |
| Organic CTR Drop Graph | 100 | 460 | 830 | 490 | Plane 1 | SVG line chart comparing 2015 vs 2025 click curve |
| 3x2 Technical Audit | 990 | 460 | 830 | 490 | Plane 1 | 6 bento audit metric cells with green status lights |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Search engine data source, quarterly audit date |

#### TypeScript Contract
```typescript
export interface SeoEraItem {
  id: string;
  yearRange: string;
  eraName: string;
  primaryRankingSignal: string;
  difficultyScorePct: number;
  tacticsSummary: string;
  isCurrentEra: boolean;
}

export interface SeoAuditCell {
  id: string;
  metricName: string;
  benchmarkTarget: string;
  achievedValue: string;
  scorePct: number;
  isPassingScore: boolean;
}

export interface SeoDominanceSlideData extends BaseSlide {
  type: 'seo-dominance';
  historicCtrDropPct: number;
  zeroClickQueryPct: number;
  eras: SeoEraItem[];
  auditGrid: SeoAuditCell[];
  strategicTakeawayQuote?: string;
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.eras ? Math.max(1, slide.eras.length) : 4`
- **Choreography:**
  - `i < activeStep`: Era completed; historical mark, desaturated difficulty pill.
  - `i === activeStep`: Era active; elevated to Plane 2, glowing accent halo, difficulty bar pulses.
  - `i > activeStep`: Era future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-seo-01",
  "type": "seo-dominance",
  "title": "SEO Evolution: 10-Year Search Dominance Matrix",
  "subtitle": "The 4-era structural transition from keyword stuffing to zero-click AI Overviews",
  "kicker": "ORGANIC ARCHITECTURE",
  "themeId": "emerald-growth",
  "activeStep": 2,
  "maxSteps": 4,
  "historicCtrDropPct": 48.2,
  "zeroClickQueryPct": 58.5,
  "strategicTakeawayQuote": "Survival in 2025 demands direct brand recall, verified entity authority, and sub-second technical speed.",
  "eras": [
    {
      "id": "era-2015",
      "yearRange": "2015-2017",
      "eraName": "Keyword Relevance",
      "primaryRankingSignal": "Keyword Density & Meta Tags",
      "difficultyScorePct": 22,
      "tacticsSummary": "High volume blogging, exact-match anchor links",
      "isCurrentEra": false
    },
    {
      "id": "era-2018",
      "yearRange": "2018-2020",
      "eraName": "Domain Authority",
      "primaryRankingSignal": "Backlink Velocity & PageRank",
      "difficultyScorePct": 54,
      "tacticsSummary": "Digital PR campaigns, skyscraper content assets",
      "isCurrentEra": false
    },
    {
      "id": "era-2021",
      "yearRange": "2021-2024",
      "eraName": "Experience & Trust (EEAT)",
      "primaryRankingSignal": "Core Web Vitals & First-Hand Proof",
      "difficultyScorePct": 78,
      "tacticsSummary": "Sub-second LCP, author entity schemas, original research",
      "isCurrentEra": false
    },
    {
      "id": "era-2025",
      "yearRange": "2025-2027",
      "eraName": "AI Engine Optimization (AEO)",
      "primaryRankingSignal": "Direct Citation in Generative Answers",
      "difficultyScorePct": 96,
      "tacticsSummary": "Structured knowledge graphs, conversational brand presence",
      "isCurrentEra": true
    }
  ],
  "auditGrid": [
    { "id": "aud-1", "metricName": "Interaction to Next Paint (INP)", "benchmarkTarget": "< 50ms", "achievedValue": "32ms", "scorePct": 100, "isPassingScore": true },
    { "id": "aud-2", "metricName": "Largest Contentful Paint (LCP)", "benchmarkTarget": "< 1.2s", "achievedValue": "0.74s", "scorePct": 99, "isPassingScore": true },
    { "id": "aud-3", "metricName": "Cumulative Layout Shift (CLS)", "benchmarkTarget": "< 0.05", "achievedValue": "0.000", "scorePct": 100, "isPassingScore": true },
    { "id": "aud-4", "metricName": "JSON-LD Entity Graph Coverage", "benchmarkTarget": "100%", "achievedValue": "100%", "scorePct": 100, "isPassingScore": true },
    { "id": "aud-5", "metricName": "Edge Cache Hit Ratio", "benchmarkTarget": "> 95%", "achievedValue": "98.4%", "scorePct": 98, "isPassingScore": true },
    { "id": "aud-6", "metricName": "Server Response Time (TTFB)", "benchmarkTarget": "< 100ms", "achievedValue": "48ms", "scorePct": 100, "isPassingScore": true }
  ]
}
```

---

### Archetype 06: `staff-aug-pipeline` (StaffAugPipelineSlide)

#### Semantic Role & Use Case
Staff augmentation and candidate vetting pipeline presentation. Visualizes an elite 6-stage bilateral vetting funnel demonstrating a 1000:3 selectivity ratio (1,000 Sourced -> 200 Algorithmic Screened -> 50 System Design -> 15 Live Pair Programming -> 5 Culture Fit -> 3 Certified Deployable Engineers).

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Elite Engineering Vetting Funnel (1000:3 Ratio) |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- 6-stage bilateral technical evaluation & culture gates   |
|                                                                                                   |
| +---------------------------------------------------------+  +----------------------------------+ |
| | 6-STAGE VETTING FUNNEL                                  |  | STAGE DEEP-DIVE INSPECTOR        | |
| | (Y=240, X=100, W=1100, H=710, Plane 1)                  |  | (Y=240, X=1240, W=580, H=710)    | |
| |                                                         |  |                                  | |
| | Stage 1: Global Talent Pool (1,000 Candidates)          |  | [Stage 04: Live Pair Coding]     | |
| | [=============================================] 100%    |  | Candidate Intake: 15             | |
| |                                                         |  | Successful Exits: 5              | |
| | Stage 2: Algorithmic & LeetCode Hard (200 Candidates)   |  | Elimination Rate: 66.7%          | |
| | [=========================] 20%                         |  | Evaluation Protocol:             | |
| |                                                         |  | - Concurrency bugs debugging     | |
| | Stage 3: Distributed System Architecture (50 Candidates)|  | - Live distributed consensus fix | |
| | [===============] 5.0%                                  |  | - Pure live DOM UI integration   | |
| |                                                         |  | Evaluator: Alim Ul Karim,        | |
| | Stage 4: Live Pair Programming (15 Candidates)          |  |            Chief Software Eng    | |
| | [=======] 1.5%  <-- [ACTIVE STAGE HALO]                 |  | Target SLA: 48h turn-around      | |
| |                                                         |  | Zero Compromise Policy: Active   | |
| | Stage 5: Executive Culture & Ethics (5 Candidates)      |  |                                  | |
| | [===] 0.5%                                              |  | +------------------------------+ | |
| |                                                         |  | | FINAL YIELD: 0.3% TOP TIER   | | |
| | Stage 6: Certified Deployable Engineers (3 Hired)       |  | | Top 3 of 1,000 Candidates    | | |
| | [=] 0.3%                                                |  | +------------------------------+ | |
| +---------------------------------------------------------+  +----------------------------------+ |
| [Footer Metadata: Y=990, X=100, W=1720, H=30]                                                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Funnel Container | 100 | 240 | 1100 | 710 | Plane 1 | Bento stage containing 6 tapered funnel bars with progress fills |
| Funnel Bars (6) | 130 | 270 + i*110 | 1040 | 85 | Plane 1/2 | Interactive horizontal bars with candidate count badges |
| Stage Inspector | 1240 | 240 | 580 | 710 | Plane 1 | Glassmorphic card displaying vetting criteria and evaluator notes |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Annual candidate intake, background check certification |

#### TypeScript Contract
```typescript
export interface VettingStageItem {
  id: string;
  stageNumber: number;
  stageName: string;
  candidateVolume: number;
  passPercentage: number;
  primaryFilterCriteria: string;
  assessmentTool: string;
  isDecisiveGate: boolean;
}

export interface StaffAugPipelineSlideData extends BaseSlide {
  type: 'staff-aug-pipeline';
  sourcePoolCount: number;
  finalHiredCount: number;
  yieldRatioText: string;
  stages: VettingStageItem[];
  pipelineSummaryNotes?: string;
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.stages ? Math.max(1, slide.stages.length) : 6`
- **Choreography:**
  - `i < activeStep`: Stage completed; funnel bar filled with steady accent, checkmark badge.
  - `i === activeStep`: Stage active; bar elevated to Plane 2, pulsing halo glow, stage inspector loads criteria.
  - `i > activeStep`: Stage future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-staff-01",
  "type": "staff-aug-pipeline",
  "title": "Elite Engineering Vetting Funnel & Candidate Pipeline",
  "subtitle": "Rigorous 6-stage technical vetting achieving an uncompromising 1000:3 selectivity ratio",
  "kicker": "TALENT ARCHITECTURE",
  "themeId": "true-dark",
  "activeStep": 3,
  "maxSteps": 6,
  "sourcePoolCount": 1000,
  "finalHiredCount": 3,
  "yieldRatioText": "1,000 : 3 (0.3% Selectivity)",
  "stages": [
    { "id": "stg-1", "stageNumber": 1, "stageName": "Global Candidate Sourcing", "candidateVolume": 1000, "passPercentage": 100, "primaryFilterCriteria": "Top 5% GitHub contributions & verified university/repo pedigree", "assessmentTool": "AI Resume Scanner & Portfolio Verification", "isDecisiveGate": false },
    { "id": "stg-2", "stageNumber": 2, "stageName": "Algorithmic & Data Structures", "candidateVolume": 200, "passPercentage": 20, "primaryFilterCriteria": "LeetCode Hard under 30min with zero memory leaks", "assessmentTool": "Automated Sandbox Evaluator", "isDecisiveGate": true },
    { "id": "stg-3", "stageNumber": 3, "stageName": "Distributed Systems Architecture", "candidateVolume": 50, "passPercentage": 5, "primaryFilterCriteria": "Fault tolerance, consensus protocols, multi-region database replication", "assessmentTool": "Architectural Whiteboard & Design Defense", "isDecisiveGate": true },
    { "id": "stg-4", "stageNumber": 4, "stageName": "Live Pair Programming", "candidateVolume": 15, "passPercentage": 1.5, "primaryFilterCriteria": "Real-world bug hunting, refactoring legacy code, pure live DOM integration", "assessmentTool": "60min Live Pair Session with Staff Engineer", "isDecisiveGate": true },
    { "id": "stg-5", "stageNumber": 5, "stageName": "Executive Culture & Alignment", "candidateVolume": 5, "passPercentage": 0.5, "primaryFilterCriteria": "Extreme ownership, direct communication, asynchronous excellence", "assessmentTool": "Alim Ul Karim, Chief Software Engineer Interview", "isDecisiveGate": true },
    { "id": "stg-6", "stageNumber": 6, "stageName": "Certified Deployable Engineer", "candidateVolume": 3, "passPercentage": 0.3, "primaryFilterCriteria": "Immediate deployment into mission-critical client sprint", "assessmentTool": "Sovereign Enterprise Contract Sign-off", "isDecisiveGate": false }
  ]
}
```

---

### Archetype 07: `craftsmanship-benchmark` (CraftsmanshipBenchmarkSlide)

#### Semantic Role & Use Case
Precision craftsmanship and luxury standard briefing. Frames engineering rigor through the metaphor of horological precision (Rolex framing, gold halo accents, Federer vs. Kohli prestige), contrasting commodity rush-to-market software with uncompromising sovereign engineering.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Precision Craftsmanship: The Luxury Benchmark  |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Horological precision applied to distributed software   |
|                                                                                                   |
| +--------------------------------------------+  +----------------------------------------------+  |
| | LUXURY HOROLOGICAL STANDARD                |  | 4-TIER CRAFTSMANSHIP BENCHMARK GRID          |  |
| | (Y=240, X=100, W=780, H=710, Plane 1)      |  | (Y=240, X=920, W=900, H=710, Plane 1)       |  |
| |                                            |  |                                              |  |
| |       +----------------------------+       |  | +------------------------------------------+ |  |
| |       |  [ROLEX GOLD HALO DIAL]    |       |  | | TIER 01: TOLERANCE & PRECISION           | |  |
| |       |   Sub-millisecond Timing   |       |  | | Commodity: +/- 200ms latency             | |  |
| |       |  Chronometer Certified     |       |  | | Sovereign: Sub-1ms jitter tolerance      | |  |
| |       +----------------------------+       |  | | Status: [Completed]                      | |  |
| |                                            |  | +------------------------------------------+ |  |
| | Prestige Benchmark:                        |  | | TIER 02: CODE DURABILITY & ZERO DEBT     | |  |
| | "Federer's effortless grace is the product |  | | Commodity: Rewrite every 18 months       | |  |
| | of 10,000 unseen hours of discipline.     |  | | Sovereign: Decadal stability by design   | |  |
| | Software must possess the same timeless    |  | | Status: [ACTIVE HALO - Plane 2]          | |  |
| | horological integrity."                    |  | +------------------------------------------+ |  |
| | -- Alim Ul Karim, Chief Software Engineer  |  | | TIER 03: PURE LIVE DOM TYPOGRAPHY        | |  |
| |                                            |  | | Status: [1.25px Blur]                    | |  |
| +--------------------------------------------+  +----------------------------------------------+  |
| [Footer Metadata: Y=990, X=100, W=1720, H=30]                                                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Horological Standard Card | 100 | 240 | 780 | 710 | Plane 1 | Gold accent border, gold dial graphic, certified chronometer badge |
| Benchmark Grid Container | 920 | 240 | 900 | 710 | Plane 1 | Bento stage containing 4 comparison tiers |
| Benchmark Tier Cards (4) | 940 | 260 + i*160 | 860 | 140 | Plane 1/2 | Interactive comparison cards with commodity vs sovereign columns |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Horological engineering warranty, zero technical debt guarantee |

#### TypeScript Contract
```typescript
export interface CraftsmanshipTierItem {
  id: string;
  dimensionName: string;
  commodityStandard: string;
  sovereignCraftsmanship: string;
  metricComparison: string;
  isBenchmarkExceeded: boolean;
}

export interface CraftsmanshipBenchmarkSlideData extends BaseSlide {
  type: 'craftsmanship-benchmark';
  luxuryBrandMetaphor: string;
  prestigeQuote: string;
  authorTitle: string;
  benchmarks: CraftsmanshipTierItem[];
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.benchmarks ? Math.max(1, slide.benchmarks.length) : 1`
- **Choreography:**
  - `i < activeStep`: Tier completed; golden checkmark badge, subdued border.
  - `i === activeStep`: Tier active; card elevated to Plane 2, glowing gold halo (`box-shadow: 0 0 24px -2px #D97706`), comparison metrics expand.
  - `i > activeStep`: Tier future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-craft-01",
  "type": "craftsmanship-benchmark",
  "title": "Precision Craftsmanship: The Luxury Benchmark",
  "subtitle": "Applying the horological standards of master watchmaking to distributed systems",
  "kicker": "CRAFTSMANSHIP BENCHMARK",
  "themeId": "white-brand",
  "activeStep": 1,
  "maxSteps": 4,
  "luxuryBrandMetaphor": "Rolex Perpetual Calibre & Horological Rigor",
  "prestigeQuote": "Effortless performance is the product of thousands of hours of unseen discipline. True luxury in software is zero crashes, zero drift, and timeless stability.",
  "authorTitle": "Alim Ul Karim, Chief Software Engineer",
  "benchmarks": [
    {
      "id": "bm-1",
      "dimensionName": "Timing Tolerance & Jitter",
      "commodityStandard": "Accepts +/- 200ms latency spikes as normal web behavior",
      "sovereignCraftsmanship": "Hard sub-16ms frame budgeting with zero audio/visual stutter",
      "metricComparison": "12.5x tighter jitter tolerance",
      "isBenchmarkExceeded": true
    },
    {
      "id": "bm-2",
      "dimensionName": "Code Durability & Technical Debt",
      "commodityStandard": "Quick hack jobs requiring total system rewrite every 18 months",
      "sovereignCraftsmanship": "Architected for decadal longevity with strict typing and positive booleans",
      "metricComparison": "10-year projected maintainability lifespan",
      "isBenchmarkExceeded": true
    },
    {
      "id": "bm-3",
      "dimensionName": "Typography & DOM Rendering",
      "commodityStandard": "Rasterized graphic banners that pixelate on high-DPI displays",
      "sovereignCraftsmanship": "100% pure live DOM text nodes rendering with mathematical clamp formulas",
      "metricComparison": "Infinite resolution fidelity & full WCAG AAA",
      "isBenchmarkExceeded": true
    },
    {
      "id": "bm-4",
      "dimensionName": "Pride of Ownership & Elegance",
      "commodityStandard": "Generic component templates copied without design intention",
      "sovereignCraftsmanship": "Handcrafted micro-shadows, authentic HSL ramps, and spring dynamics",
      "metricComparison": "Unanimous executive boardroom approval",
      "isBenchmarkExceeded": true
    }
  ]
}
```

---

### Archetype 08: `weekly-cadence` (WeeklyCadenceSlide)

#### Semantic Role & Use Case
Global remote work culture and timezone operating rhythm. Demonstrates a structured Sun-Thu weekly operating cadence featuring protected deep-work blocks, synchronized global overlap hours, and asynchronous handoffs across UTC-5 to UTC+6.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Global Remote Work Culture & Timezone Rhythm     |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- High-efficiency Sun-Thu operating rhythm & deep work zones|
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | CADENCE OVERVIEW: 5-DAY OPERATING RHYTHM (Y=240, X=100, W=1720, H=80, Plane 1)                 | |
| | Sunday: Architecture & Sprint Init | Mon-Wed: Deep Focus Blocks | Thursday: Demo & Deployment   | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +---------------------------------------------------------+  +----------------------------------+ |
| | 5-DAY TIMEZONE HEATMAP (HOURLY MATRIX)                  |  | CADENCE GOVERNANCE RULES         | |
| | (Y=340, X=100, W=1180, H=610, Plane 1)                  |  | (Y=340, X=1320, W=500, H=610)    | |
| |                                                         |  |                                  | |
| |        08:00  10:00  12:00  14:00  16:00  18:00         |  | [Rule 01: Zero Friday Commits]   | |
| | SUN:   [Sync Sprint Planning] [Deep Code Block...]      |  | Production releases occur only   | |
| |        Status: [Completed]                              |  | Thursday mornings.               | |
| |                                                         |  |                                  | |
| | MON:   [Deep Focus Block] [Code Review] [Deep Focus]    |  | [Rule 02: 4h Deep Work Blocks]   | |
| |        Status: [ACTIVE DAY HALO - Plane 2]              |  | Zero Slack/Zoom interruptions    | |
| |                                                         |  | during 10:00 - 14:00.            | |
| | TUE:   [Deep Focus Block] [Async RFC Architecture]      |  |                                  | |
| |        Status: [1.25px Blur]                            |  | [Rule 03: Async RFCs]            | |
| |                                                         |  | All decisions written down in    | |
| | WED:   [Deep Focus Block] [Cross-Team Sync Window]      |  | specs prior to code execution.   | |
| |        Status: [1.25px Blur]                            |  |                                  | |
| |                                                         |  | Golden Overlap: 14:00 - 17:00    | |
| | THU:   [Live Demo & Keynote Release Ceremony]           |  | (London / NY / Dhaka Overlap)    | |
| |        Status: [1.25px Blur]                            |  |                                  | |
| +---------------------------------------------------------+  +----------------------------------+ |
| [Footer Metadata: Y=990, X=100, W=1720, H=30]                                                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-ember`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Cadence Overview Bar | 100 | 240 | 1720 | 80 | Plane 1 | Summary of Sun-Thu operating rhythm with key highlights |
| Timezone Heatmap Container | 100 | 340 | 1180 | 610 | Plane 1 | Bento grid displaying hourly schedule blocks for 5 workdays |
| Day Row Blocks (5) | 120 | 360 + i*115 | 1140 | 95 | Plane 1/2 | Interactive day rows with colored focus blocks |
| Governance Rules Panel | 1320 | 340 | 500 | 610 | Plane 1 | Glassmorphic card detailing rules of engagement and overlap |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Timezone references (EST, GMT, BST, UTC+6) |

#### TypeScript Contract
```typescript
export interface CadenceTimeBlock {
  id: string;
  timeRange: string;
  blockTitle: string;
  blockCategory: 'deep-work' | 'sync-overlap' | 'sprint-demo' | 'async-rfc';
  durationHours: number;
}

export interface CadenceDayItem {
  id: string;
  dayName: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday';
  dayThemeFocus: string;
  blocks: CadenceTimeBlock[];
  isReleaseDay: boolean;
}

export interface WeeklyCadenceSlideData extends BaseSlide {
  type: 'weekly-cadence';
  primaryTimezonesText: string;
  goldenOverlapWindowText: string;
  days: CadenceDayItem[];
  governanceMotto?: string;
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.days ? Math.max(1, slide.days.length) : 5`
- **Choreography:**
  - `i < activeStep`: Day completed; past day badge, desaturated schedule blocks.
  - `i === activeStep`: Day active; row elevated to Plane 2, glowing halo ring, active day blocks pulse.
  - `i > activeStep`: Day future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-cadence-01",
  "type": "weekly-cadence",
  "title": "Global Remote Work Culture & Timezone Operating Rhythm",
  "subtitle": "Structured Sun-Thu operating rhythm designed for maximum deep-work velocity and zero burnout",
  "kicker": "REMOTE CULTURE",
  "themeId": "paper-editorial",
  "activeStep": 1,
  "maxSteps": 5,
  "primaryTimezonesText": "UTC-5 (New York) | UTC+0 (London) | UTC+6 (Dhaka)",
  "goldenOverlapWindowText": "14:00 - 17:00 UTC (3-Hour Real-Time Overlap)",
  "governanceMotto": "Asynchronous by default, synchronous for celebration and decisive architecture.",
  "days": [
    {
      "id": "day-sun",
      "dayName": "Sunday",
      "dayThemeFocus": "Sprint Initialization & Architectural Alignment",
      "isReleaseDay": false,
      "blocks": [
        { "id": "b-1", "timeRange": "09:00 - 11:00", "blockTitle": "Sprint Planning & Task Assignment", "blockCategory": "sync-overlap", "durationHours": 2 },
        { "id": "b-2", "timeRange": "11:00 - 15:00", "blockTitle": "Deep Work: Core Architecture Implementation", "blockCategory": "deep-work", "durationHours": 4 },
        { "id": "b-3", "timeRange": "15:00 - 17:00", "blockTitle": "Async Spec Review & RFC Sign-off", "blockCategory": "async-rfc", "durationHours": 2 }
      ]
    },
    {
      "id": "day-mon",
      "dayName": "Monday",
      "dayThemeFocus": "Uninterrupted Engineering Flow",
      "isReleaseDay": false,
      "blocks": [
        { "id": "b-4", "timeRange": "09:00 - 14:00", "blockTitle": "Protected Deep-Work Zone (Zero Slack/Meetings)", "blockCategory": "deep-work", "durationHours": 5 },
        { "id": "b-5", "timeRange": "14:00 - 17:00", "blockTitle": "Golden Overlap: Pair Programming & Code Reviews", "blockCategory": "sync-overlap", "durationHours": 3 }
      ]
    },
    {
      "id": "day-tue",
      "dayName": "Tuesday",
      "dayThemeFocus": "Performance Optimization & Testing",
      "isReleaseDay": false,
      "blocks": [
        { "id": "b-6", "timeRange": "09:00 - 14:00", "blockTitle": "Deep Work: Stress Testing & Benchmarks", "blockCategory": "deep-work", "durationHours": 5 },
        { "id": "b-7", "timeRange": "14:00 - 17:00", "blockTitle": "Cross-Functional Architecture Review", "blockCategory": "sync-overlap", "durationHours": 3 }
      ]
    },
    {
      "id": "day-wed",
      "dayName": "Wednesday",
      "dayThemeFocus": "Feature Complete & Pre-Flight Audits",
      "isReleaseDay": false,
      "blocks": [
        { "id": "b-8", "timeRange": "09:00 - 14:00", "blockTitle": "Code Freeze & 12 Quality Gate Verification", "blockCategory": "deep-work", "durationHours": 5 },
        { "id": "b-9", "timeRange": "14:00 - 17:00", "blockTitle": "Release Candidate Staging Validation", "blockCategory": "sync-overlap", "durationHours": 3 }
      ]
    },
    {
      "id": "day-thu",
      "dayName": "Thursday",
      "dayThemeFocus": "Demo Ceremony & Production Release",
      "isReleaseDay": true,
      "blocks": [
        { "id": "b-10", "timeRange": "09:00 - 11:00", "blockTitle": "Production Deployment & Smoke Tests", "blockCategory": "sprint-demo", "durationHours": 2 },
        { "id": "b-11", "timeRange": "14:00 - 16:00", "blockTitle": "All-Hands Sprint Demo & Executive Showcase", "blockCategory": "sync-overlap", "durationHours": 2 }
      ]
    }
  ]
}
```

---

### Archetype 09: `competitive-moat` (CompetitiveMoatSlide)

#### Semantic Role & Use Case
Multi-dimensional competitive moat and defensibility analysis. Articulates 4 structural barriers to entry (Network Effects, Switching Costs, Proprietary Data Flywheel, Intellectual Property) with shimmer headlines, hover capsule pills, and modal expandable cards.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Multi-Dimensional Enterprise Competitive Moat     |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Structural defensibility barriers & high switching costs|
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | SHIMMER ACCENT HEADLINE BANNER (Y=240, X=100, W=1720, H=80, Plane 1)                          | |
| | "Our sovereign architecture creates an insurmountable 4-layer technical and economic moat"    | |
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +-------------------+  +-------------------+  +-------------------+  +-------------------+        |
| | MOAT 01: NETWORK  |  | MOAT 02: HIGH     |  | MOAT 03: DATA     |  | MOAT 04: IP &     |        |
| | EFFECTS FLYWHEEL  |  | SWITCHING COSTS   |  | FLYWHEEL ASYMMETRY|  | SOVEREIGN PATENTS |        |
| | (Y=340, X=100)    |  | (Y=340, X=540)    |  | (Y=340, X=980)    |  | (Y=340, X=1420)   |        |
| | W: 400, H: 470    |  | W: 400, H: 470    |  | W: 400, H: 470    |  | W: 400, H: 470    |        |
| | Plane 1           |  | Plane 2 (ACTIVE)  |  | Plane 1           |  | Plane 1           |        |
| |                   |  |                   |  |                   |  |                   |        |
| | Barrier: 8.8/10   |  | Barrier: 9.6/10   |  | Barrier: 9.2/10   |  | Barrier: 8.4/10   |        |
| | Replicability: 3y |  | Replicability: 4y |  | Replicability: 5y |  | Replicability: 2y |        |
| | Status: Completed |  | Status: ACTIVE    |  | Status: 1.25 Blur |  | Status: 1.25 Blur |        |
| +-------------------+  +-------------------+  +-------------------+  +-------------------+        |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | DEFENSIVE STRATEGY SUMMARY BAR (Y=830, X=100, W=1720, H=130, Plane 1)                         | |
| | Active Pillar Deep-Dive: 48 enterprise integrations, proprietary zero-copy serialization protocol|
| +-----------------------------------------------------------------------------------------------+ |
| [Footer Metadata: Y=990, X=100, W=1720, H=30]                                                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Shimmer Banner | 100 | 240 | 1720 | 80 | Plane 1 | Glassmorphic card with dynamic CSS linear-gradient shimmer wave |
| Moat Cards (4) | 100 + i*440 | 340 | 400 | 470 | Plane 1/2 | Interactive cards; active card elevated with glowing halo |
| Summary Bar | 100 | 830 | 1720 | 130 | Plane 1 | Deep-dive metrics corresponding to active moat step |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Defensibility horizon, market share retention rate |

#### TypeScript Contract
```typescript
export interface MoatPillarItem {
  id: string;
  pillarTitle: string;
  category: 'network-effects' | 'switching-costs' | 'data-flywheel' | 'intellectual-property';
  barrierScore10: number;
  timeToReplicateYears: number;
  coreMechanism: string;
  keyAssets: string[];
  isDominantAdvantage: boolean;
}

export interface CompetitiveMoatSlideData extends BaseSlide {
  type: 'competitive-moat';
  shimmerStatement: string;
  overallDefensibilityRating: string;
  moatPillars: MoatPillarItem[];
  defensibilityNotes?: string;
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.moatPillars ? Math.max(1, slide.moatPillars.length) : 1`
- **Choreography:**
  - `i < activeStep`: Pillar completed; desaturated barrier score, checkmark badge.
  - `i === activeStep`: Pillar active; elevated to Plane 2 (`scale: 1.02`), accent halo ring, bottom summary updates to this pillar's assets.
  - `i > activeStep`: Pillar future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-moat-01",
  "type": "competitive-moat",
  "title": "Multi-Dimensional Enterprise Competitive Moat",
  "subtitle": "Four structural defensibility barriers providing decadal protection against commodity competition",
  "kicker": "STRATEGIC DEFENSE",
  "themeId": "midnight-luxe",
  "activeStep": 1,
  "maxSteps": 4,
  "shimmerStatement": "Our architecture transforms technical superiority into institutional switching costs.",
  "overallDefensibilityRating": "9.1 / 10 (Tier-1 Defensibility)",
  "moatPillars": [
    {
      "id": "moat-net",
      "pillarTitle": "Network Effects & Ecosystem",
      "category": "network-effects",
      "barrierScore10": 8.8,
      "timeToReplicateYears": 3.0,
      "coreMechanism": "Every deployed enterprise node enhances global telemetry accuracy for all participants.",
      "keyAssets": ["320+ Edge Nodes", "Shared Threat Intelligence Mesh"],
      "isDominantAdvantage": false
    },
    {
      "id": "moat-switch",
      "pillarTitle": "High Switching Costs",
      "category": "switching-costs",
      "barrierScore10": 9.6,
      "timeToReplicateYears": 4.5,
      "coreMechanism": "Deep embedding into mission-critical financial settlement and real-time audio workflows.",
      "keyAssets": ["48 Enterprise ERP Adapters", "Certified Regulatory Workflows"],
      "isDominantAdvantage": true
    },
    {
      "id": "moat-data",
      "pillarTitle": "Data Flywheel Asymmetry",
      "category": "data-flywheel",
      "barrierScore10": 9.2,
      "timeToReplicateYears": 5.0,
      "coreMechanism": "Petabytes of proprietary meeting diarization and distributed telemetry models.",
      "keyAssets": ["Zero-Leak On-Device Models", "Proprietary Audio Weights"],
      "isDominantAdvantage": true
    },
    {
      "id": "moat-ip",
      "pillarTitle": "Horological IP & Patents",
      "category": "intellectual-property",
      "barrierScore10": 8.4,
      "timeToReplicateYears": 2.5,
      "coreMechanism": "Patented pure live DOM rendering algorithms and zero-drift virtual canvas transforms.",
      "keyAssets": ["Canvas Transform Patent", "Positive Boolean Type Guards"],
      "isDominantAdvantage": false
    }
  ]
}
```

---

### Archetype 10: `rapid-feedback` (RapidFeedbackSlide)

#### Semantic Role & Use Case
Rapid iteration and sprint feedback loop presentation. Renders 4 circular continuous stages (Plan & Instrument -> Ship Micro-Increment -> Observe Live Telemetry -> Adapt & Refactor) connected by dynamic SVG jumping arched arrows and real-time velocity metrics.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Continuous Rapid Feedback & Sprint Loop Velocity |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- 4-stage circular cadence with sub-hour cycle telemetry   |
|                                                                                                   |
| +---------------------------------------------------------+  +----------------------------------+ |
| | CIRCULAR 4-STAGE FEEDBACK LOOP (SVG ARCHED ARROWS)      |  | SPRINT VELOCITY TELEMETRY        | |
| | (Y=240, X=100, W=1140, H=710, Plane 1)                  |  | (Y=240, X=1280, W=540, H=710)    | |
| |                                                         |  |                                  | |
| |             [ STAGE 01: PLAN & INSTRUMENT ]             |  | [Deployment Frequency: 18 / Day] | |
| |                    /               \                    |  | Lead Time to Prod: 42 minutes    | |
| |             (SVG Arrow)          (SVG Arrow)            |  | Change Failure Rate: < 0.1%      | |
| |                  /                   \                  |  | Mean Time to Recovery: 3.5 min   | |
| |      [ STAGE 04: ADAPT ]        [ STAGE 02: SHIP ]      |  |                                  | |
| |          & REFACTOR               MICRO-INCREMENT       |  | Active Stage Deep-Dive:          | |
| |      Status: 1.25 Blur          Status: ACTIVE HALO     |  | - Canary deployment to 5% nodes  | |
| |                  \                   /                  |  | - Automated rollback gates       | |
| |             (SVG Arrow)          (SVG Arrow)            |  | - Real-time synthetic load check | |
| |                    \               /                    |  |                                  | |
| |             [ STAGE 03: OBSERVE TELEMETRY ]             |  | "Moving fast without breaking    | |
| |                   Status: 1.25 Blur                     |  | things is an architecture, not a | |
| |                                                         |  | slogan."                         | |
| +---------------------------------------------------------+  +----------------------------------+ |
| [Footer Metadata: Y=990, X=100, W=1720, H=30]                                                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-ember`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Feedback Loop Stage | 100 | 240 | 1140 | 710 | Plane 1 | Bento stage containing SVG circular graph and jumping arched arrows |
| Stage Nodes (4) | Fixed Polar | Coordinates | 220 | 140 | Plane 1/2 | Circular bento nodes with icon, title, and status pill |
| Jumping SVG Arrows | Dynamic | Overlay | SVG | Vector | Plane 3 | Animated traveling pulse along arched path to active node |
| Telemetry Panel | 1280 | 240 | 540 | 710 | Plane 1 | Glassmorphic card with DORA metrics and active stage checklist |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | DORA metric source, CI/CD telemetry pipeline |

#### TypeScript Contract
```typescript
export interface FeedbackLoopStageItem {
  id: string;
  stageOrder: number;
  stageName: string;
  leadTimeFormatted: string;
  toolchainIcon: string;
  actionSummary: string;
  isAutomatedGate: boolean;
}

export interface RapidFeedbackSlideData extends BaseSlide {
  type: 'rapid-feedback';
  dailyDeployFrequency: number;
  leadTimeToProductionMinutes: number;
  changeFailureRatePct: number;
  loopStages: FeedbackLoopStageItem[];
  cultureDirectives?: string[];
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.loopStages ? Math.max(1, slide.loopStages.length) : 4`
- **Choreography:**
  - `i < activeStep`: Stage completed; green verified badge, solid arrow path.
  - `i === activeStep`: Stage active; node elevated to Plane 2, glowing halo, SVG arched arrow emits animated traveling pulse.
  - `i > activeStep`: Stage future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-feedback-01",
  "type": "rapid-feedback",
  "title": "Continuous Rapid Feedback & Sprint Loop Velocity",
  "subtitle": "4-stage sub-hour iteration loop achieving elite DORA operational performance",
  "kicker": "SPRINT VELOCITY",
  "themeId": "sunset-horizon",
  "activeStep": 1,
  "maxSteps": 4,
  "dailyDeployFrequency": 18,
  "leadTimeToProductionMinutes": 42,
  "changeFailureRatePct": 0.08,
  "cultureDirectives": [
    "Instrument telemetry before authoring business logic.",
    "Canary deployments verify real user load at 5% traffic.",
    "Automated rollbacks trigger when p99 latency spikes above 20ms."
  ],
  "loopStages": [
    {
      "id": "stage-plan",
      "stageOrder": 1,
      "stageName": "Plan & Instrument",
      "leadTimeFormatted": "15 min",
      "toolchainIcon": "FileCode",
      "actionSummary": "Author specifications, add telemetry tags, and establish negative test bounds.",
      "isAutomatedGate": true
    },
    {
      "id": "stage-ship",
      "stageOrder": 2,
      "stageName": "Ship Micro-Increment",
      "leadTimeFormatted": "12 min",
      "toolchainIcon": "Send",
      "actionSummary": "Execute bounded atomic commits; deploy immediately to isolated staging cluster.",
      "isAutomatedGate": true
    },
    {
      "id": "stage-observe",
      "stageOrder": 3,
      "stageName": "Observe Live Telemetry",
      "leadTimeFormatted": "10 min",
      "toolchainIcon": "Activity",
      "actionSummary": "Inspect real-time Grafana metrics, error rates, and memory heap allocation.",
      "isAutomatedGate": true
    },
    {
      "id": "stage-adapt",
      "stageOrder": 4,
      "stageName": "Adapt & Refactor",
      "leadTimeFormatted": "5 min",
      "toolchainIcon": "RefreshCw",
      "actionSummary": "Incorporate feedback immediately into next micro-batch without technical debt.",
      "isAutomatedGate": false
    }
  ]
}
```

---

### Archetype 11: `interactive-poll` (InteractivePollSlide)

#### Semantic Role & Use Case
Interactive live audience polling presentation. Renders dynamic real-time percentage bars, active vote tallies, audience selection highlights, and QR submission triggers during live boardroom presentations.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Live Audience Poll: Enterprise Modernization     |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Real-time audience telemetry & preference distribution    |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | MAIN QUESTION HERO BANNER (Y=240, X=100, W=1720, H=90, Plane 1)                               | |
| | "What is the single greatest bottleneck preventing your org from achieving sub-second delivery?"|
| +-----------------------------------------------------------------------------------------------+ |
|                                                                                                   |
| +---------------------------------------------------------+  +----------------------------------+ |
| | INTERACTIVE POLL OPTIONS STACK                          |  | LIVE AUDIENCE TELEMETRY PANEL    | |
| | (Y=360, X=100, W=1200, H=590, Plane 1)                  |  | (Y=360, X=1340, W=480, H=590)    | |
| |                                                         |  |                                  | |
| | Option A: Legacy Monolith Code Debt                     |  | [Total Votes Cast: 482]          | |
| | [==========================================] 48% (231)  |  | Active Respondents: 94.2%        | |
| | Status: Completed                                       |  | Real-Time Consensus: Emerging    | |
| |                                                         |  |                                  | |
| | Option B: Lack of Pure Live DOM Typography Standards    |  | [QR CODE STAGE LINK]             | |
| | [==============================] 32% (154)               |  | Scan to vote from mobile browser | |
| | Status: [ACTIVE OPTION HALO - Plane 2]                  |  | https://vote.enterprise.internal | |
| |                                                         |  |                                  | |
| | Option C: Brittle End-to-End Testing Suites             |  | Real-Time Websocket: Connected   | |
| | [============] 14% (67)                                 |  | Damping Spring: k=420, zeta=0.85 | |
| | Status: 1.25px Blur                                     |  |                                  | |
| |                                                         |  | Majority Threshold: 50%          | |
| | Option D: Unclear Executive Ownership & RACI Drift      |  | Winning Margin: +16% Option A    | |
| | [====] 6% (30)                                          |  |                                  | |
| | Status: 1.25px Blur                                     |  |                                  | |
| +---------------------------------------------------------+  +----------------------------------+ |
| [Footer Metadata: Y=990, X=100, W=1720, H=30]                                                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Question Banner | 100 | 240 | 1720 | 90 | Plane 1 | Frosted glass container with bold question typography |
| Options Container | 100 | 360 | 1200 | 590 | Plane 1 | Bento stage containing 4 vote option progress bars |
| Option Rows (4) | 130 | 380 + i*135 | 1140 | 110 | Plane 1/2 | Interactive cards; active option highlighted with glowing halo |
| Audience Telemetry | 1340 | 360 | 480 | 590 | Plane 1 | Glassmorphic panel with live vote counter, QR scan target |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Live WebSocket status, cryptographic ballot verification |

#### TypeScript Contract
```typescript
export interface PollOptionItem {
  id: string;
  optionKey: 'A' | 'B' | 'C' | 'D';
  optionLabel: string;
  votesCount: number;
  percentageScore: number;
  isWinningLeader: boolean;
}

export interface InteractivePollSlideData extends BaseSlide {
  type: 'interactive-poll';
  questionPrompt: string;
  totalVotesReceived: number;
  isPollingActive: boolean;
  options: PollOptionItem[];
  qrCodeTargetUrl?: string;
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.options ? Math.max(1, slide.options.length) : 1`
- **Choreography:**
  - `i < activeStep`: Option completed; stable percentage fill, checkmark indicator.
  - `i === activeStep`: Option active; card elevated to Plane 2, accent glow ring, percentage bar animates with spring physics.
  - `i > activeStep`: Option future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-poll-01",
  "type": "interactive-poll",
  "title": "Live Audience Poll: Enterprise Modernization Bottlenecks",
  "subtitle": "Real-time audience telemetry and preference distribution collected via live WebSockets",
  "kicker": "AUDIENCE TELEMETRY",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 4,
  "questionPrompt": "What is the single greatest bottleneck preventing your organization from achieving sub-second delivery?",
  "totalVotesReceived": 482,
  "isPollingActive": true,
  "qrCodeTargetUrl": "https://vote.enterprise.internal/session-842",
  "options": [
    {
      "id": "opt-a",
      "optionKey": "A",
      "optionLabel": "Legacy Monolith Code Debt & Inverted Booleans",
      "votesCount": 231,
      "percentageScore": 48.0,
      "isWinningLeader": true
    },
    {
      "id": "opt-b",
      "optionKey": "B",
      "optionLabel": "Lack of Pure Live DOM Typography Standards",
      "votesCount": 154,
      "percentageScore": 32.0,
      "isWinningLeader": false
    },
    {
      "id": "opt-c",
      "optionKey": "C",
      "optionLabel": "Brittle End-to-End Testing Suites & Flaky CI/CD",
      "votesCount": 67,
      "percentageScore": 14.0,
      "isWinningLeader": false
    },
    {
      "id": "opt-d",
      "optionKey": "D",
      "optionLabel": "Unclear Executive Ownership & RACI Drift",
      "votesCount": 30,
      "percentageScore": 6.0,
      "isWinningLeader": false
    }
  ]
}
```

---

### Archetype 12: `live-qa` (LiveQaSlide)

#### Semantic Role & Use Case
Live Q&A curation stream and keynote moderation stage. Displays real-time upvoted attendee questions sorted dynamically by community votes, status tags (Answered, Live Spotlight, Queue), and speaker answer notes.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Keynote Live Q&A & Curated Audience Inquiries    |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Dynamic upvote queue and speaker answer spotlight         |
|                                                                                                   |
| +---------------------------------------------------------+  +----------------------------------+ |
| | CURATED UPVOTED QUESTIONS STREAM                        |  | SPEAKER ANSWER SPOTLIGHT STAGE   | |
| | (Y=240, X=100, W=1120, H=710, Plane 1)                  |  | (Y=240, X=1260, W=560, H=710)    | |
| |                                                         |  |                                  | |
| | [Q1: 142 Upvotes] "How do you guarantee sub-16ms        |  | [ACTIVE QUESTION SPOTLIGHT]      | |
| | frame delivery across heterogeneous client devices?"    |  | Submitter: Michael Vance         | |
| | Submitter: Dr. Aris Thorne (MIT) | Status: [Completed]  |  | Affiliation: Stripe Infra        | |
| |                                                         |  |                                  | |
| | [Q2: 128 Upvotes] "What architectural safeguards prevent|  | Question:                        | |
| | memory leaks during multi-hour canvas sessions?"        |  | "What architectural safeguards   | |
| | Submitter: Michael Vance (Stripe) | Status: [ACTIVE]    |  | prevent memory leaks during      | |
| | <-- [ACTIVE QUESTION HALO - Plane 2]                    |  | multi-hour canvas sessions?"     | |
| |                                                         |  |                                  | |
| | [Q3: 94 Upvotes] "Can the 10 authentic HSL palettes be  |  | Speaker Answer Points:           | |
| | extended with custom brand hex tokens?"                 |  | 1. Pure live DOM typography with | |
| | Submitter: Priya Patel (Canva) | Status: [1.25px Blur]  |  |    zero Canvas bitmap retention. | |
| |                                                         |  | 2. Deterministic React hooks     | |
| | [Q4: 76 Upvotes] "How is persona standardization        |  |    with strict unmount cleanup.  | |
| | enforced in autonomous multi-agent pipelines?"          |  | 3. Invariant virtual canvas size | |
| | Submitter: Kenji Sato (Sony) | Status: [1.25px Blur]    |  |    (1920x1080) prevents reflow. | |
| +---------------------------------------------------------+  +----------------------------------+ |
| [Footer Metadata: Y=990, X=100, W=1720, H=30]                                                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Questions Stream | 100 | 240 | 1120 | 710 | Plane 1 | Bento stage containing ranked interactive question cards |
| Question Cards (3-4) | 130 | 270 + i*160 | 1060 | 140 | Plane 1/2 | Interactive cards; active question elevated to Plane 2 with halo glow |
| Spotlight Drawer | 1260 | 240 | 560 | 710 | Plane 1 | Glassmorphic stage with full question context and speaker answer bullets |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Moderation filter status, total approved questions count |

#### TypeScript Contract
```typescript
export interface LiveQuestionItem {
  id: string;
  submitterName: string;
  submitterCompany: string;
  questionText: string;
  upvotesCount: number;
  answerBullets: string[];
  isAnswered: boolean;
  isFlaggedPriority: boolean;
}

export interface LiveQaSlideData extends BaseSlide {
  type: 'live-qa';
  totalQuestionsSubmitted: number;
  moderationStatusText: string;
  questions: LiveQuestionItem[];
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.questions ? Math.max(1, slide.questions.length) : 1`
- **Choreography:**
  - `i < activeStep`: Question answered; green checkmark badge, subdued border.
  - `i === activeStep`: Question active; elevated to Plane 2, accent halo, spotlight drawer displays answer points.
  - `i > activeStep`: Question future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-qa-01",
  "type": "live-qa",
  "title": "Keynote Live Q&A & Curated Audience Inquiries",
  "subtitle": "Community-upvoted inquiries streamed live with real-time speaker answer synthesis",
  "kicker": "LIVE Q&A",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 3,
  "totalQuestionsSubmitted": 84,
  "moderationStatusText": "Real-time AI Moderation & Spam Filter Active",
  "questions": [
    {
      "id": "q-1",
      "submitterName": "Dr. Aris Thorne",
      "submitterCompany": "MIT Distributed Systems Lab",
      "questionText": "How do you guarantee sub-16ms frame delivery across heterogeneous client devices?",
      "upvotesCount": 142,
      "answerBullets": [
        "Hardware-accelerated CSS transform scale applied to fixed 1920x1080 virtual root.",
        "Zero layout recalculations during intra-slide kinetic step transitions."
      ],
      "isAnswered": true,
      "isFlaggedPriority": true
    },
    {
      "id": "q-2",
      "submitterName": "Michael Vance",
      "submitterCompany": "Stripe Infrastructure",
      "questionText": "What architectural safeguards prevent memory leaks during multi-hour canvas sessions?",
      "upvotesCount": 128,
      "answerBullets": [
        "Pure live DOM typography eliminates canvas bitmap allocations entirely.",
        "Strict unmount cleanup in all React step progression hooks.",
        "Fixed coordinate space prevents incremental DOM geometry thrashing."
      ],
      "isAnswered": false,
      "isFlaggedPriority": true
    },
    {
      "id": "q-3",
      "submitterName": "Priya Patel",
      "submitterCompany": "Canva Core Engine",
      "questionText": "Can the 10 authentic HSL palettes be extended with custom brand hex tokens?",
      "upvotesCount": 94,
      "answerBullets": [
        "Yes, hex tokens are automatically parsed into unadorned HSL triplets at runtime.",
        "Enables instant slash-alpha compositing without CSS rewriting."
      ],
      "isAnswered": false,
      "isFlaggedPriority": false
    }
  ]
}
```

---

### Archetype 13: `embed-stage` (EmbedStageSlide)

#### Semantic Role & Use Case
Interactive web embed and sandboxed stage container. Renders an interactive, secure sandboxed iframe (or high-fidelity interactive simulation fallback) inside a macOS/browser window frame with URL bar, SSL padlock, and telemetry badge.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Sandboxed Interactive Web Application Stage       |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Live sandbox environment with telemetry monitoring        |
|                                                                                                   |
| +-----------------------------------------------------------------------------------------------+ |
| | BROWSER STAGE CONTAINER (Y=240, X=100, W=1720, H=710, Plane 1/2)                              | |
| | +-------------------------------------------------------------------------------------------+ | |
| | | BROWSER CHROME HEADER (H=54px)                                                            | | |
| | | [O][O][O] Traffic Lights | [🔒 https://demo.enterprise.internal/app] | [Reload] [Telemetry]| | |
| | +-------------------------------------------------------------------------------------------+ | |
| |                                                                                               | |
| |  SANDBOXED IFRAME / LIVE APPLICATION VIEWPORT                                                 | |
| |  (W=1720px, H=656px, sandbox="allow-scripts allow-same-origin")                               | |
| |                                                                                               | |
| |  Step 0: Overview & Sandbox Shell (Opacity: 1.00, Static Preview)                             | |
| |  Step 1: Active Interactive Execution & Telemetry (Plane 2 Elevated, Live Interaction Ready)  | |
| |                                                                                               | |
| +-----------------------------------------------------------------------------------------------+ |
| [Footer Metadata: Y=990, X=100, W=1720, H=30] -- Sandbox Security: Verified | Frame-Busting Guard  |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-cream`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Browser Container | 100 | 240 | 1720 | 710 | Plane 1/2 | Window chrome border, `border-radius: 16px`, shadow `--elevation-2` |
| Chrome Address Bar | 120 | 248 | 1680 | 40 | Plane 2 | Simulated browser toolbar, SSL icon, URL text, reload button |
| Sandboxed Viewport | 100 | 294 | 1720 | 656 | Plane 1/2 | Sandboxed iframe with security attributes and fallback simulation |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Iframe origin policy, sandbox permissions checklist |

#### TypeScript Contract
```typescript
export interface EmbedStageSlideData extends BaseSlide {
  type: 'embed-stage';
  embedUrl: string;
  displayTitle: string;
  isSandboxStrict: boolean;
  allowCameraAccess: boolean;
  allowMicrophoneAccess: boolean;
  fallbackImageUrl?: string;
  telemetryBadgeText?: string;
}
```

#### Step Progression Formula & Mapping
- **Formula:** `2` (Step 0: Stage Overview & Security Shell, Step 1: Active Interactive Execution & Telemetry).
- **Choreography:**
  - `activeStep === 0`: Sandbox shell rendered in Plane 1, displays application title and security posture.
  - `activeStep === 1`: Stage elevated to Plane 2 with active halo, full interactivity unlocked, live telemetry badge illuminated.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-embed-01",
  "type": "embed-stage",
  "title": "Sandboxed Interactive Web Application Stage",
  "subtitle": "Live interactive demonstration running within a cryptographically isolated browser viewport",
  "kicker": "LIVE DEMO STAGE",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 2,
  "embedUrl": "https://demo.enterprise.internal/realtime-mesh",
  "displayTitle": "Sovereign Event Mesh - Live Visualizer",
  "isSandboxStrict": true,
  "allowCameraAccess": false,
  "allowMicrophoneAccess": false,
  "telemetryBadgeText": "Live Stream: 60 FPS | Zero Frame Drop"
}
```

---

### Archetype 14: `countdown-launch` (CountdownLaunchSlide)

#### Semantic Role & Use Case
Event and product launch countdown keynote slide. Instills high boardroom anticipation using a massive T-Minus countdown clock, color-shifting countdown gradient based on urgency (Emerald -> Amber -> Crimson), launch readiness checklist, and mission control telemetry.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Production Launch T-Minus Countdown Protocol     |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Mission control deployment gates & global rollout lock    |
|                                                                                                   |
| +---------------------------------------------------------+  +----------------------------------+ |
| | MASSIVE T-MINUS COUNTDOWN STAGE                         |  | MISSION CONTROL TELEMETRY        | |
| | (Y=240, X=100, W=1100, H=420, Plane 2)                  |  | (Y=240, X=1240, W=580, H=710)    | |
| |                                                         |  |                                  | |
| |     T - 0 2 : 1 4 : 3 8 : 4 5                           |  | [Launch Director: Alim Ul Karim] | |
| |     DAYS    HOURS   MINS    SECS                        |  | Title: Chief Software Engineer   | |
| |                                                         |  | Launch Authority: Sovereign Board| |
| | Gradient Urgency Bar: Emerald -> Amber -> Crimson       |  | Deployment Window: 04:00 UTC     | |
| | [==========================================] 84% Ready  |  | Rollback Abort: Armed            | |
| +---------------------------------------------------------+  | Canary Traffic: 5% Routed        | |
|                                                              | Zero Downtime: Guaranteed        | |
| +---------------------------------------------------------+  |                                  | |
| | 4-GATE LAUNCH READINESS CHECKLIST                       |  | +------------------------------+ | |
| | (Y=680, X=100, W=1100, H=270, Plane 1)                  |  | | MISSION STATUS: GO FOR LAUNCH| | |
| |                                                         |  | | All 12 Quality Gates Verified| | |
| | [x] Gate 01: Core Ledger Consensus Lock (Completed)     |  | +------------------------------+ | |
| | [x] Gate 02: Multi-Region Load Shedding (ACTIVE HALO)   |  |                                  | |
| | [ ] Gate 03: Executive RACI Confirmation (1.25px Blur)  |  |                                  | |
| | [ ] Gate 04: Global DNS Traffic Shift (1.25px Blur)     |  |                                  | |
| +---------------------------------------------------------+  +----------------------------------+ |
| [Footer Metadata: Y=990, X=100, W=1720, H=30]                                                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-ember`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Countdown Stage | 100 | 240 | 1100 | 420 | Plane 2 | Massive monospace digits (clamp 3.5rem to 5.5rem), color-shifting gradient |
| Readiness Checklist | 100 | 680 | 1100 | 270 | Plane 1 | Bento stage containing 4 sequential launch verification gates |
| Mission Control Panel | 1240 | 240 | 580 | 710 | Plane 1 | Glassmorphic card with director notes, target timestamp, Go/No-Go badge |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Atomic clock synchronization source, UTC offset |

#### TypeScript Contract
```typescript
export interface LaunchGateItem {
  id: string;
  gateNumber: number;
  gateTitle: string;
  assignedOwner: string;
  isPassed: boolean;
  isMissionCritical: boolean;
}

export interface CountdownLaunchSlideData extends BaseSlide {
  type: 'countdown-launch';
  targetIsoTimestamp: string;
  launchStageName: string;
  launchDirectorName: string;
  launchDirectorTitle: string;
  urgencyState: 'normal' | 'impending' | 'critical';
  launchGates: LaunchGateItem[];
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.launchGates ? Math.max(1, slide.launchGates.length) : 4`
- **Choreography:**
  - `i < activeStep`: Gate completed; green passed badge, verified checkmark.
  - `i === activeStep`: Gate active; elevated to Plane 2, glowing halo, countdown urgency pulses.
  - `i > activeStep`: Gate future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-countdown-01",
  "type": "countdown-launch",
  "title": "Production Launch T-Minus Countdown Protocol",
  "subtitle": "Mission control deployment gates and global DNS traffic cutover synchronization",
  "kicker": "COUNTDOWN PROTOCOL",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 4,
  "targetIsoTimestamp": "2026-10-04T04:00:00Z",
  "launchStageName": "Stage 4: Global Mesh Cutover",
  "launchDirectorName": "Alim Ul Karim",
  "launchDirectorTitle": "Chief Software Engineer",
  "urgencyState": "impending",
  "launchGates": [
    { "id": "gate-1", "gateNumber": 1, "gateTitle": "Distributed Database Replication Lock", "assignedOwner": "Database Reliability Team", "isPassed": true, "isMissionCritical": true },
    { "id": "gate-2", "gateNumber": 2, "gateTitle": "Multi-Region Load Balancer Health Verification", "assignedOwner": "Core Infrastructure Team", "isPassed": true, "isMissionCritical": true },
    { "id": "gate-3", "gateNumber": 3, "gateTitle": "Security & Penetration Test Sign-Off", "assignedOwner": "InfoSec Governance", "isPassed": false, "isMissionCritical": true },
    { "id": "gate-4", "gateNumber": 4, "gateTitle": "Global BGP Route Announcement & DNS Cutover", "assignedOwner": "Network Operations", "isPassed": false, "isMissionCritical": true }
  ]
}
```

---

### Archetype 15: `executive-takeaways` (ExecutiveTakeawaysSlide)

#### Semantic Role & Use Case
Bipartite executive briefing and strategic decision protocol. Provides a bilateral split view: Strategic Synopsis, quantified ROI metrics, and executive quote on the left; Action Matrix, RACI ownership, and 14-day execution commitments on the right.

#### ASCII Wireframe Geometry (1920x1080)
```
+---------------------------------------------------------------------------------------------------+
| [Kicker: Y=80, X=100, W=400, H=24]                          [Corporate Logo: Y=80, X=1720, W=100] |
| [Slide Title (H1): Y=116, X=100, W=1500, H=64] -- Executive Briefing: Strategic Decision Protocol |
| [Subtitle: Y=188, X=100, W=1400, H=32] -- Bilateral governance sign-off & 14-day execution matrix  |
|                                                                                                   |
| +--------------------------------------------+  +----------------------------------------------+  |
| | LEFT STRATEGIC SYNOPSIS & ROI PANEL        |  | RIGHT ACTION MATRIX & RACI GOVERNANCE        |  |
| | (Y=240, X=100, W=820, H=710, Plane 1)      |  | (Y=240, X=960, W=860, H=710, Plane 1)       |  |
| |                                            |  |                                              |  |
| | Executive Summary:                         |  | +------------------------------------------+ |  |
| | "The transition to sovereign presentation  |  | | ACTION 01: Deploy WireGuard Mesh Nodes   | |  |
| | architecture eliminates $1.4M in recurring |  | | Owner: Alim Ul Karim, Chief Software Eng | |  |
| | licensing while unlocking sub-16ms frames."|  | | Target SLA: 72 Hours | Status: Completed | |  |
| |                                            |  | +------------------------------------------+ |  |
| | 3 KEY QUANTIFIED ROI METRICS:              |  | | ACTION 02: Inforce Positive Booleans &   | |  |
| | [ Metric 1: 4.8x Delivery Velocity ]       |  | |           100-Line Component Ceilings    | |  |
| | [ Metric 2: 38% Infrastructure Savings ]   |  | | Owner: Core Architecture Team            | |  |
| | [ Metric 3: Zero Layout Drift on Canvas ]  |  | | Target SLA: 5 Days | Status: ACTIVE HALO | |  |
| |                                            |  | +------------------------------------------+ |  |
| | Certified Executive Sign-Off:              |  | | ACTION 03: Execute Boardroom Demo Keynote| |  |
| | Alim Ul Karim, Chief Software Engineer     |  | | Status: [1.25px Blur]                    | |  |
| +--------------------------------------------+  +----------------------------------------------+  |
| [Footer Metadata: Y=990, X=100, W=1720, H=30]                                                     |
+---------------------------------------------------------------------------------------------------+
```

#### Coordinate Budget Table
| Canvas Element | X (px) | Y (px) | Width (px) | Height (px) | Plane | Styling / Constraints |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Header Zone | 100 | 80 | 1720 | 140 | Plane 1 | Kicker pill (`capsule-gold`), H1 (Ubuntu 700 56px), Subtitle (Poppins 400 20px) |
| Left Synopsis Panel | 100 | 240 | 820 | 710 | Plane 1 | Bento card with narrative synopsis, 3 ROI badges, and signature stamp |
| Right Action Matrix | 960 | 240 | 860 | 710 | Plane 1 | Bento stage containing interactive action items with RACI pills |
| Action Items (3-4) | 980 | 260 + i*160 | 820 | 140 | Plane 1/2 | Interactive cards; active action elevated to Plane 2 with halo glow |
| Footer Zone | 100 | 990 | 1720 | 30 | Plane 1 | Board governance sign-off hash, verification timestamp |

#### TypeScript Contract
```typescript
export interface ExecutiveRoiMetric {
  id: string;
  metricValue: string;
  metricLabel: string;
  isPositiveYield: boolean;
}

export interface ExecutiveActionItem {
  id: string;
  actionTitle: string;
  ownerName: string;
  ownerTitle: string;
  targetTimeline: string;
  statusBadge: string;
  isApproved: boolean;
}

export interface ExecutiveTakeawaysSlideData extends BaseSlide {
  type: 'executive-takeaways';
  strategicSynopsis: string;
  executiveSignOffName: string;
  executiveSignOffTitle: string;
  roiMetrics: ExecutiveRoiMetric[];
  actionItems: ExecutiveActionItem[];
  boardApprovalReference?: string;
}
```

#### Step Progression Formula & Mapping
- **Formula:** `slide.actionItems ? Math.max(1, slide.actionItems.length) : 1`
- **Choreography:**
  - `i < activeStep`: Action completed; verified green badge, desaturated border.
  - `i === activeStep`: Action active; card elevated to Plane 2, glowing accent halo, RACI owner highlighted.
  - `i > activeStep`: Action future; opacity 0.40, `filter: blur(1.25px)`.

#### Verified JSON Sample Fixture
```json
{
  "id": "slide-takeaways-01",
  "type": "executive-takeaways",
  "title": "Executive Briefing: Strategic Decision Protocol",
  "subtitle": "Bilateral governance sign-off and 14-day prioritized execution roadmap",
  "kicker": "EXECUTIVE DECISION",
  "themeId": "true-dark",
  "activeStep": 1,
  "maxSteps": 3,
  "strategicSynopsis": "Transitioning to sovereign presentation architecture eliminates third-party licensing dependencies, guarantees zero layout drift on high-resolution displays, and accelerates delivery velocity across all engineering squads.",
  "executiveSignOffName": "Alim Ul Karim",
  "executiveSignOffTitle": "Chief Software Engineer",
  "boardApprovalReference": "BOARD-RES-2026-10-03",
  "roiMetrics": [
    { "id": "roi-1", "metricValue": "4.8x", "metricLabel": "Engineering Velocity", "isPositiveYield": true },
    { "id": "roi-2", "metricValue": "38%", "metricLabel": "Cloud Cost Savings", "isPositiveYield": true },
    { "id": "roi-3", "metricValue": "100%", "metricLabel": "Pure Live DOM Text", "isPositiveYield": true }
  ],
  "actionItems": [
    {
      "id": "act-1",
      "actionTitle": "Deploy WireGuard Mesh Nodes & FreeBSD Edge Clusters",
      "ownerName": "Core Infrastructure Squad",
      "ownerTitle": "Engineering Team Lead",
      "targetTimeline": "Next 72 Hours",
      "statusBadge": "Completed",
      "isApproved": true
    },
    {
      "id": "act-2",
      "actionTitle": "Enforce Affirmative Booleans and 100-Line Component Cap",
      "ownerName": "Alim Ul Karim",
      "ownerTitle": "Chief Software Engineer",
      "targetTimeline": "Next 5 Days",
      "statusBadge": "Active Execution",
      "isApproved": true
    },
    {
      "id": "act-3",
      "actionTitle": "Conduct Keynote Boardroom Demonstration with 10 HSL Themes",
      "ownerName": "Executive Steering Committee",
      "ownerTitle": "Board Sponsors",
      "targetTimeline": "Next 14 Days",
      "statusBadge": "Scheduled",
      "isApproved": false
    }
  ]
}
```

---

## 5. Centralized Step Calculation Engine for All 15 Extended Archetypes

To eliminate phantom steps and ensure consistent intra-slide step progression across the presentation engine, all 15 extended slide archetypes calculate step counts using explicit data array bindings:

```typescript
// Central Step Registration in deckStore.ts
export const getExtendedSlideStepCount = (slide: ExtendedSlideData): number => {
  switch (slide.type) {
    case 'personal-vpn':
      return Array.isArray(slide.nodes) ? Math.max(1, slide.nodes.length) : 1;
    case 'meeting-transcript':
      return Array.isArray(slide.speakerTurns) ? Math.max(1, slide.speakerTurns.length) : 1;
    case 'llm-benchmark':
      return Array.isArray(slide.models) ? Math.max(1, slide.models.length) : 1;
    case 'services-gravity':
      return Array.isArray(slide.services) ? Math.max(1, slide.services.length) : 1;
    case 'seo-dominance':
      return Array.isArray(slide.eras) ? Math.max(1, slide.eras.length) : 4;
    case 'staff-aug-pipeline':
      return Array.isArray(slide.stages) ? Math.max(1, slide.stages.length) : 6;
    case 'craftsmanship-benchmark':
      return Array.isArray(slide.benchmarks) ? Math.max(1, slide.benchmarks.length) : 1;
    case 'weekly-cadence':
      return Array.isArray(slide.days) ? Math.max(1, slide.days.length) : 5;
    case 'competitive-moat':
      return Array.isArray(slide.moatPillars) ? Math.max(1, slide.moatPillars.length) : 1;
    case 'rapid-feedback':
      return Array.isArray(slide.loopStages) ? Math.max(1, slide.loopStages.length) : 4;
    case 'interactive-poll':
      return Array.isArray(slide.options) ? Math.max(1, slide.options.length) : 1;
    case 'live-qa':
      return Array.isArray(slide.questions) ? Math.max(1, slide.questions.length) : 1;
    case 'embed-stage':
      return 2; // Step 0: Sandbox Overview, Step 1: Active Interactive Execution
    case 'countdown-launch':
      return Array.isArray(slide.launchGates) ? Math.max(1, slide.launchGates.length) : 4;
    case 'executive-takeaways':
      return Array.isArray(slide.actionItems) ? Math.max(1, slide.actionItems.length) : 1;
    default:
      return 1;
  }
};
```
