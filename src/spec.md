# Specification

## Summary
**Goal:** Update the app’s light and dark color themes to closely match the provided reference site while keeping RTL behavior and existing features/content unchanged.

**Planned changes:**
- Update Tailwind/Shadcn theme tokens (CSS variables) in `frontend/src/index.css` for both `:root` and `.dark` (e.g., `--background`, `--foreground`, `--card`, `--primary`, `--accent`, `--muted`, `--border`, `--ring`) so the new palette propagates across all existing UI.
- Adjust styling (token-based Tailwind classes only) for key high-visibility surfaces to align with the updated palette: Top navigation bar, Intro splash gradient/background and CTA styling, decorated section headings, and the floating help-bot trigger/panel.
- Ensure readability/contrast across major UI areas (nav, splash, cards, simulator panels, videos gallery, help bot) in both light and dark modes, without introducing hard-coded component colors and without RTL/layout regressions.

**User-visible outcome:** The app presents a refreshed, cohesive light/dark color theme that closely matches the reference site across all existing screens and components, while preserving the current RTL Arabic experience and functionality.
