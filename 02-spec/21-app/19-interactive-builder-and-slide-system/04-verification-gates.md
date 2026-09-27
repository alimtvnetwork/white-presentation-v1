# 04-Verification Gates & Acceptance Invariants

## 1. Acceptance Criteria Ledger

### AC-01: Hero Plate Cleanliness & Collision Removal
- [ ] Slide 1 hero plate displays clean photography without baked-in colliding typography.
- [ ] Feathered mask produces seamless blend into canvas on both light and dark themes.

### AC-02: Persona Role Standardization
- [ ] "Alim Ul Karim" role is verified as "Chief Software Engineer" across persona and title slides.
- [ ] Company and executive details are 100% editable via builder inspector and in-place DOM editing.

### AC-03: Full-Canvas Theme Engine
- [ ] Switching to "True Dark" renders dark canvas with luminous light text and glowing borders.
- [ ] Switching to "Emerald Growth" renders emerald styling with dot-matrix textures.
- [ ] Switching to "WP Exam Purple" renders branded purple tones with high readability.

### AC-04: Floating Draggable & Minimizable Builder
- [ ] Builder window can be dragged via header handle to any coordinate.
- [ ] Minimize button shrinks panel to floating 48px bubble; click restores full inspector.
- [ ] Layer controls allow adjusting item zIndex and adding/replacing media plates and icons.

### AC-05: In-Place Text Editing & Canvas Manipulation
- [ ] Clicking headlines or body text in edit mode allows direct typing with immediate state commit.
- [ ] Upper pill badges with balls removed; clean editorial layout preserved.

### AC-06: Repositionable Controls & Indicators
- [ ] Controller dock can be placed at bottom-center, bottom-left, top-right, or side docks.
- [ ] Slide indicator can be moved to center, right, or top-center.

### AC-07: Slide System & Dynamic Slide Creation
- [ ] "New Slide" action allows appending Steps, Before/After, Persona, or Key Player slides.
- [ ] Steps slide exhibits sequential entrance animations with audio feedback.

### AC-08: Camera Presets & Multi-Format Export
- [ ] Camera toggle supports `overview`, `focus-left`, and `focus-right` smooth transitions.
- [ ] Export modal outputs PowerPoint-compatible structure, Deck JSON, and AI Prompt Spec.

## 2. Code Quality & Linter Invariants
- [ ] File Size Cap: All source files $\le 300$ lines; React components $\le 100$ lines.
- [ ] No Build/Test Execution during routine refactoring turns.
- [ ] All 36 Local CI Quality Gates pass upon completion (`exit 0`).
