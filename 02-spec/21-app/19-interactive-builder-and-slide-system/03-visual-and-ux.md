# 03-Visual & UX Specifications

## 1. Floating & Draggable Builder Inspector
- **Physical States:**
  1. **Expanded Window:** 360px wide floating palette with tabs: `Content`, `Layers`, `Themes`, `Export`, `Camera`.
  2. **Minimized Floating Bubble:** 48px rounded pill dockable anywhere on screen. Click expands into full inspector.
  3. **Drag Handle:** Header drag bar allowing smooth repositioning anywhere across the viewport.
- **Layer Stacking Controls:**
  - Forward / Backward layer buttons adjusting `zIndex` between 1 and 10.
  - Ability to add new photographic media plates, custom image URLs, and swap Lucide root icons.

## 2. In-Place Canvas Authoring
- When `isEditMode === true`:
  - Clicking any headline, subtitle, bullet point title, or description activates in-place editing directly on the slide surface.
  - Clunky upper pill badges ("Keynote Presentation") with balls are removed in favor of clean editorial layouts.
  - Elements display subtle dashed selection outlines with drag coordinates.

## 3. Configurable Docking Controls
- **Navigation Controls Dock:** Configurable via quick-dock switcher to:
  - `bottom-center` (Default), `bottom-left`, `bottom-right`, `top-right`, `left`, `right`.
- **Slide Indicator:** Positionable independently (`bottom-left`, `bottom-center`, `top-center`, `right`).

## 4. Full Canvas Theme Matrix (Beyond Accent Swatches)
- **True Dark:** Deep slate/black background (`#020617`), bright white titles (`#F8FAFC`), neon glow borders (`#6366F1`), and luminous contrast.
- **Pure White:** Crisp white canvas (`#FFFFFF`), deep navy typography (`#0F172A`), light subtle borders.
- **WP Exam Purple:** Gradient from `#1E1B4B` to `#31104B`, vibrant violet accents (`#A855F7`).
- **Emerald Growth:** Deep emerald/forest canvas (`#022C22` / `#064E3B`), vibrant mint/green accents (`#34D399`), dot-matrix overlay.

## 5. Camera Focal Zooming & Presets
- Camera transform modes:
  - `overview`: 1.0x full 1920x1080 canvas view.
  - `focus-left`: 1.35x zoom focused on editorial text and bullets.
  - `focus-right`: 1.35x zoom focused on media plate or steps cards.
  - `zoom-in`: 1.6x dramatic focus for high-stakes takeaways.
