# aaradhya-dev-tamrakar.github.io

A personal portfolio website for **Aaradhya Dev Tamrakar**.

## Repository Structure

- `index.html` — homepage and main portfolio entry
- `projects.html` — projects showcase page
- `experience.html` — work and education experience page
- `achievements.html` — achievements and certificates page
- `about.html` — personal introduction page
- `contact.html` — contact and connect page
- `404.html` — custom not-found page (excluded from `sitemap.xml`, marked `noindex`)
- `robots.txt` — crawler directives
- `sitemap.xml` — site map for GitHub Pages and search engines
- `assets/certificates/` — certificate files linked from the achievements page
- `assets/images/` — profile images and site preview images
- `assets/docs/` — downloadable documents such as the CV
- `assets/css/style.css` — shared CSS styles
- `assets/js/script.js` — shared JavaScript behavior, including the global search / command palette
- `scripts/extract_index.py` — regenerates the search index from `achievements.html` / `projects.html` (see [Site Search](#site-search))
- `.github/workflows/` — CI: commit-back bots that keep `assets/js/last-commit.json` and the search index in sync automatically on every push

## Current Status

- Static site structure is in place for GitHub Pages.
- **v24 (2026-07-21)**: Fixed stale global search — the EU AI Act Literacy certificate (and any achievement/project added since the last manual export) was missing from search on every page except `achievements.html`/`projects.html`. Root cause: `SEARCH_STATIC_INDEX` in `assets/js/script.js` was a hand-maintained snapshot with no actual regeneration script, despite a code comment referencing one. Added `scripts/extract_index.py` (parses `achievements.html`/`projects.html` the same way the live JS scan does) and `.github/workflows/update-search-index.yml` (runs it automatically on every push, commits the result). Also fixed a related live-scan gap: the DOM scan only ever checked `.project-desc`, but every project card actually uses `.project-desc-list`, so live-scanned project search text was silently missing descriptions — now checks both.
- **v23 (2026-07-18)**: UI refinements applied — hero date toggle, navigation arrow consistency, card-arrow styling, keyboard shortcut update (= for scroll-to-top), and refined keymap wording. Also: small CSS tweak added to `assets/css/style.css` to increase footer right padding and avoid overlap between the "Get in Touch"/goto control and the Instagram social icon on small viewports.
- Shared assets live under `assets/` for easier maintenance.
- All main pages are present and included in `sitemap.xml`. `404.html` is intentionally excluded (not-found pages shouldn't be indexed) and is marked `noindex, nofollow`.
- Certificate files are stored in `assets/certificates/` and loaded from the achievements page.
- Navigation is centralized through shared JavaScript and the footer is shared site-wide.
- Portfolio media and documents were reorganized into dedicated asset folders to avoid root-level clutter.
- Updated page references now point to the correct asset paths for images, the CV, and certificate previews.

## Site Search

Press `/` (or click the search button in the nav) to open a global command-palette search, unified across all pages. It searches page names plus every achievement and project.

**How it stays accurate:** `buildSearchIndex()` in `assets/js/script.js` merges two sources —
1. `SEARCH_STATIC_INDEX` — a full snapshot of every achievement/project, shipped on every page so search works even on pages with no live achievement/project list (`index.html`, `contact.html`, `experience.html`, `about.html`, `404.html`).
2. A live DOM scan — only runs on `achievements.html` / `projects.html` themselves, so edits made there are searchable immediately, in the same session, before a commit.

The static snapshot is auto-regenerated on every push by `.github/workflows/update-search-index.yml`, which runs `scripts/extract_index.py` against the current `achievements.html` / `projects.html` and commits the result if it changed. This is fully automatic — no manual export step. (Previously the snapshot was hand-maintained and could go stale, e.g. a certificate added to `achievements.html` not showing up in search anywhere except `achievements.html` itself, until someone remembered to regenerate it by hand.)

To regenerate manually: `pip install beautifulsoup4 && python3 scripts/extract_index.py`

## Notes

- This is a static site intended for GitHub Pages.
- `sitemap.xml` contains the published page URLs used by search engines.
- Add new HTML pages to `sitemap.xml` when they are created.
- Keep shared CSS and JS changes centralized in `assets/css/style.css` and `assets/js/script.js`.
- When adding new media, place images in `assets/images/`, downloadable documents in `assets/docs/`, and certificates in `assets/certificates/`.
- The site now uses consistent asset paths across the homepage, about, projects, experience, achievements, and contact pages.

## Development

1. Open `index.html` in a browser to preview the homepage.
2. Edit CSS in `assets/css/style.css`.
3. Edit JS in `assets/js/script.js`.

## Contact

- Email: `aaradhyadevtmr@gmail.com`
- GitHub: `https://github.com/Aaradhya-Dev-Tamrakar`

## License

See [LICENSE](LICENSE).
