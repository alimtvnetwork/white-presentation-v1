# 07-Animation, Audio Sound, Export Quality & Multi-User Architecture

## 1. System Overview
This specification standardizes the dynamic runtime execution of presentations. It covers motion timing curves, audio cue synthesis, ultra-high quality export engines (4K/60fps, print-ready PDF), and the multi-tenant user authentication and deck persistence architecture inspired by `wp-exam`.

---

## 2. Animation & Motion Design Standards

### 2.1 Easing Curves & Timing Constants
To achieve professional elegance without aggressive bounce or sluggish drag, animations leverage standard quintic easing:

```typescript
// Standard organic deceleration curve
export const PRESENTATION_EASE = [0.22, 1, 0.36, 1] as const;

// Transition durations in seconds
export const DURATION = {
  instant: 0.15,
  fast: 0.35,
  normal: 0.65,
  slow: 0.95,
  heroReveal: 1.20,
} as const;

// Stagger intervals for list items and cards
export const STAGGER = {
  tight: 0.08,
  standard: 0.14,
  relaxed: 0.22,
} as const;
```

### 2.2 Hardware Acceleration & 60fps Enforcement
To guarantee stutter-free 60fps playback during complex slide transitions:
1. **GPU-Accelerated Properties Only:** Transitions strictly manipulate `transform` (`translate3d`, `scale`) and `opacity`. Never animate `top`, `left`, `width`, `height`, or `margin`.
2. **CSS Stacking Context Isolation:**
   ```css
   .slide-viewport {
     contain: layout paint size;
     isolation: isolate;
     will-change: transform;
     transform: translateZ(0);
   }
   ```
3. **Motion Safety Guard (`prefers-reduced-motion`):**
   When the operating system requests reduced motion, transitions immediately bypass spatial translations (`x`, `y`, `scale`), resolving into instant opacity crossfades ($0.15\text{s}$) or instantaneous cuts.

---

## 3. Audio & Acoustic Architecture

### 3.1 Audio Cue Engine
Audio cues provide tactile acoustic feedback during live presentations:

| Audio Event | Asset File | Trigger Condition | Default Gain | Debounce Window |
|:---|:---|:---|:---:|:---:|
| **Slide Transition** | `/sounds/fade_swoosh_v4.mp3` | Next/Prev slide navigation | $0.90 \times \text{Master}$ | $120\text{ms}$ |
| **Sub-Step Advance**| `/sounds/click.mp3` | Step progression on multi-step slide | $\text{stepVol}(\text{Master})$ | $80\text{ms}$ |
| **Typewriter Tap** | `/sounds/tap.mp3` | Character reveal in typewriter slide | $0.35 \times \text{Master}$ | $45\text{ms}$ |
| **Deck Background Music**| User selected MP3 | Continuous presentation loop | Slider ($0.0 - 1.0$) | $300\text{ms}$ crossfade |

### 3.2 Volume Attenuation Curve (`stepVolume`)
Sub-step advance sounds are deliberately balanced so they do not overpower slide transitions:
$$\text{stepVolume}(m) = \begin{cases} m & \text{if } m < 0.3 \\ \max(0.3, m - 0.3) & \text{if } m \ge 0.3 \end{cases}$$

### 3.3 Dynamic Audio Ducking
When an embedded video begins playback or when presenter narration is active:
- Background music gain automatically ducks to $20\%$ of its nominal volume over $400\text{ms}$.
- Upon speech pause or video completion, volume smoothly ramps back to nominal levels over $800\text{ms}$.

---

## 4. Ultra-High Quality Export Pipelines

### 4.1 4K UHD (3840×2160) Headless Capture
- **Resolution:** $3840 \times 2160$ (4K UHD at 16:9).
- **Scale Factor:** Computed as $\text{scale} = 2.0$.
- **Chromium / Playwright Headless Configuration:**
  ```typescript
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 3840, height: 2160 },
    deviceScaleFactor: 2,
  });
  ```
- **Fidelity Guarantee:** Because all headlines, bullet points, and vector curves are pure DOM and SVG elements, they render natively at 4K UHD with zero raster pixelation.

### 4.2 High-Fidelity Print & PDF Generation
- **CSS `@page` Definition:**
  ```css
  @page {
    size: 1920px 1080px landscape;
    margin: 0;
  }
  @media print {
    body {
      background: #FFFFFF !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    [data-print-hide] {
      display: none !important;
    }
    .print-page {
      break-after: page;
      page-break-after: always;
    }
  }
  ```
- **Automated Step Unwrapping:**
  In print mode, step-based slides (timelines, process chains, bullet reveals) automatically evaluate to:
  $$\text{step} = \max(0, \text{slideStepCount}(\text{slide}) - 1)$$
  ensuring all items appear fully revealed in printed handouts.

---

## 5. Multi-User & Enterprise Database Architecture

### 5.1 Architecture Inspired by `wp-exam`
To transform the slide engine into an enterprise multi-tenant platform where users can register, log in, create custom presentations, and collaborate, we adopt `wp-exam`'s modular relational data schema:

```
┌────────────────────────────────────────────────────────┐
│                        users                           │
│  id, email, password_hash, role, created_at            │
└──────────────────────────┬─────────────────────────────┘
                           │ 1:N
                           ▼
┌────────────────────────────────────────────────────────┐
│                        decks                           │
│  id, user_id, title, slug, theme_id, settings_json     │
└──────────────────────────┬─────────────────────────────┘
                           │ 1:N
                           ▼
┌────────────────────────────────────────────────────────┐
│                        slides                          │
│  id, deck_id, sequence_order, type, title, slide_json  │
└────────────────────────────────────────────────────────┘
```

### 5.2 SQL Relational Schema Specification

```sql
-- 1. Users Table (Role-Based Access Control)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(128) NOT NULL,
    role VARCHAR(32) NOT NULL DEFAULT 'creator', -- 'admin' | 'creator' | 'viewer'
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Presentations (Decks) Container Table
CREATE TABLE decks (
    id VARCHAR(64) PRIMARY KEY, -- URL-safe slug id
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    theme_id VARCHAR(64) NOT NULL DEFAULT 'white-pure-violet',
    version INT NOT NULL DEFAULT 2,
    settings_json JSONB NOT NULL DEFAULT '{}'::jsonb,
    is_public BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Slides Table (Atomic Slide Storage)
CREATE TABLE slides (
    id VARCHAR(64) PRIMARY KEY,
    deck_id VARCHAR(64) NOT NULL REFERENCES decks(id) ON DELETE CASCADE,
    sequence_order INT NOT NULL,
    type VARCHAR(32) NOT NULL, -- 'center' | 'left' | 'bullets' | 'steps' | etc.
    title VARCHAR(255) NOT NULL,
    slide_json JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_deck_sequence UNIQUE(deck_id, sequence_order)
);

-- 4. Deck Collaboration & Permissions Table
CREATE TABLE deck_collaborators (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deck_id VARCHAR(64) NOT NULL REFERENCES decks(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    permission VARCHAR(32) NOT NULL DEFAULT 'editor', -- 'owner' | 'editor' | 'viewer'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_deck_user UNIQUE(deck_id, user_id)
);

-- 5. Media & Assets Library Table
CREATE TABLE assets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    deck_id VARCHAR(64) REFERENCES decks(id) ON DELETE SET NULL,
    file_name VARCHAR(255) NOT NULL,
    mime_type VARCHAR(128) NOT NULL,
    file_size_bytes BIGINT NOT NULL,
    storage_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 5.3 Authentication & Session Security Protocol
1. **JWT & Session Cookie Support:** Supports stateless JWT headers for AI API deck generation and HTTP-only encrypted session cookies for browser clients.
2. **Access Control (RBAC):**
   - `admin`: Full platform control, user management, global theme provisioning.
   - `creator`: Authoring own decks, uploading assets, inviting viewers/editors.
   - `viewer`: Read-only presenter mode, presentation viewer, and audience synchronization.
3. **AI Generation Hook:** External AI agents authenticate via API keys (`Bearer sk_...`) allowing programmatic deck creation:
   ```bash
   POST /api/v1/decks
   Content-Type: application/json
   Authorization: Bearer <API_KEY>
   ```
   Payload drops straight into the `decks` and `slides` tables with instant real-time websocket broadcast to connected editors.
