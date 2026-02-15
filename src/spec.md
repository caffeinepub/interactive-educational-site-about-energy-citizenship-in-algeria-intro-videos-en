# Specification

## Summary
**Goal:** Add per-section color variety by introducing scoped theme accents per major section while keeping a cohesive global look and preserving RTL behavior.

**Planned changes:**
- Add a small set of reusable section theme variants in `frontend/src/index.css` that locally override theme tokens (at minimum `--primary`, `--primary-foreground`, `--ring`, plus dark-mode equivalents).
- Apply a distinct section theme variant wrapper to each major section (overview, energy-types, citizenship, relationship, algeria, simulators, videos, conclusion) via `frontend/src/sections/MainContent.tsx` and relevant section components.
- Ensure existing components (including `DecoratedHeading`) continue using theme tokens so accents automatically change per section without hard-coded colors, and verify contrast in both light/dark modes.

**User-visible outcome:** Each main page section displays a noticeably different accent color (and optional subtle tint) from neighboring sections, while the overall UI remains consistent and RTL layout/typography stay unchanged.
