# Achievements page — Implementation log

Timestamp: 2026-07-07T00:00:00Z

Summary of implemented features (extracted from `achievements.html`):

- Nav height calculation: `computeNavHeight()` measures `#siteNav` and writes CSS var `--nav-h`.
- Date parsing and sorting: `parseDateValue()` and `sortedEntries` parse date strings and sort entries newest-first.
- Year grouping: script builds `<details class="year-group">` per year, closed by default.
- Stacked certificate buttons: script creates `.achievement-actions` and moves `.cert-btn` into it.
- Initial scroll-to-top: on load the script scrolls achievements top accounting for nav height.
- Mutually-exclusive toggle behavior: opening a year closes others.
- Gap-aware scrolling: computes visual `gap` in pixels between groups and sets `summary.style.scrollMarginTop = navHeight + gap` before scrolling.
- Lightbox: `openLightbox()` / `closeLightbox()` and `.cert-btn` click wiring.

References:
- Main implementation file: [achievements.html](achievements.html)

Notes:
- The code logs measurements to the console; no visible debug overlay remains in these saved files.
- To see runtime-measured `gap` value, open the page and check the browser console after toggling a year group.
