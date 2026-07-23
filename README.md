# aaradhya-dev-tamrakar.github.io

A personal portfolio website for **Aaradhya Dev Tamrakar**.

## Repository Structure

- `index.html` — homepage and main portfolio entry
- `projects.html` — projects showcase page
- `experience.html` — work and education experience page
- `achievements.html` — achievements and certificates page
- `journey.html` — build log of this portfolio site's own development, with applied skillset per milestone linked to real commits
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
- `scripts/dev-serve.py` — local development HTTP testing server with no-cache headers
- `sync.ps1` — PowerShell automation script for zero-conflict pulling, smart auto-commit message generation, pushing, and GitHub Actions bot synchronization
- `.github/workflows/` — CI: commit-back bots that keep `assets/js/last-commit.json` and the search index in sync automatically on every push

## Current Status

- Static site structure is in place for GitHub Pages.
- **v25 (2026-07-22)**: Implemented Zero-Leak Multi-Tier Access Control & Google OAuth 2.0 Sign-In. Features include:
  - **Zero-Leak Client-Side AES-256-GCM Encryption**: Protected HTML blocks are stripped from raw DOM source and stored as pre-encrypted ciphertext hex payloads (`ACCESS_CONTROL_PAYLOADS`). Key derivation uses Web Crypto API PBKDF2 (100,000 iterations, SHA-256) with salted passcodes (`vip2026`, `master2026`). Unlocked payloads are decrypted into browser memory on demand and wiped completely on logout/lock.
  - **Google Account Sign-In Integration**: Integrated official Google Identity Services SDK (`https://accounts.google.com/gsi/client?hl=en`) forced to English locale, featuring client-side JWT token decoding. Master emails (`aaradhyadevtmr@gmail.com`) grant Master Level (Tier 2); VIP allowlist emails/domains grant Higher Tier Access (Tier 1). User profile picture avatar renders in navigation bar upon sign-in.
  - **Stealth Mode for Master Access**: Master Level tab in login modal and diagnostic console on `index.html` are 100% hidden from public visitors. Master tab automatically reveals for authenticated VIP users or via secret triggers (`Ctrl+Shift+M`, secret typing `master`/`admin`/`root`, or 5 fast clicks on modal title).
  - **VIP Gated GitHub Repository Links**: All project cards remain visible to public visitors with descriptions and tags, while GitHub source code links (`data-vip-link`) are gated (`🔒 GitHub Repo (VIP Access Required)`). Unlocks direct links upon VIP/Master verification.
  - **Live VIP Allowlist Manager**: Built-in allowlist management widget inside the Master Admin Control Panel popup to add/remove VIP user emails dynamically (persisted in `localStorage`).
- **v24 (2026-07-21)**: Fixed stale global search — added `scripts/extract_index.py` and GitHub Actions workflow for search index auto-updates.
- **v23 (2026-07-18)**: UI refinements applied — hero date toggle, navigation arrow consistency, card-arrow styling, keyboard shortcut update (`=` for scroll-to-top), and refined keymap wording.
- Shared assets live under `assets/` for easier maintenance.
- All main pages are present and included in `sitemap.xml`. `404.html` is intentionally excluded (not-found pages shouldn't be indexed) and is marked `noindex, nofollow`.
- Certificate files are stored in `assets/certificates/` and loaded from the achievements page.
- Navigation is centralized through shared JavaScript and the footer is shared site-wide.

## Access Control & Security Model

The site implements a 3-Tier Access Hierarchy:

1. **Public Guest (Tier 0)**: Default visitor view. Standard portfolio content, locked GitHub links (`🔒 VIP Required`), hidden Master diagnostic controls.
2. **Higher Tier VIP (Tier 1)**: Authenticated via VIP passcode (`vip2026`) or VIP Google Sign-In. Unlocks all 13+ GitHub repository links, extended benchmark metrics, and private project specifications.
3. **Master Level Admin (Tier 2)**: Authenticated via Master passcode (`master2026`) or Master Google Sign-In (`aaradhyadevtmr@gmail.com`). Unlocks Master Diagnostic Console, simulated tier controls, and live VIP email allowlist manager.

### Security Highlights

- **Zero Raw HTML Exposure**: Locked containers render empty DOM wrappers `<div data-payload-id="..."></div>`. No plain text or unencrypted HTML is visible in Chrome DevTools (`F12`).
- **Web Crypto API**: Uses AES-256-GCM encryption with PBKDF2 key derivation (salt: `adt_salt_2026`).
- **Git Safety**: Secrets directory `dev-logs/secrets/` is strictly `.gitignore`d to prevent any credential leaks.

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

### Local Git Workflow & Auto-Sync (`sync.ps1`)

To prevent merge conflicts on `assets/js/last-commit.json` (which is updated automatically on GitHub by a commit-back bot on every push), use `sync.ps1`:

- **Minor / Routine Changes** (Auto-generates a conventional commit message and updates tracker timestamp):

  ```powershell
  .\sync.ps1
  ```- **Major Features / Architectural Changes**:
  Update `dev-logs/PortfolioWebsite_TRACKER.md` with detailed release notes first, then pass a descriptive message:
  ```powershell
  .\sync.ps1 -m "feat(scope): detailed architectural summary"
  ```- **Safe Pull Only** (Uses `--autostash` to safely pull remote updates):
  ```powershell
  .\sync.ps1 -PullOnly
  ```

## Contact

- Email: `aaradhyadevtmr@gmail.com`
- GitHub: `https://github.com/Aaradhya-Dev-Tamrakar`

## License

See [LICENSE](LICENSE).
