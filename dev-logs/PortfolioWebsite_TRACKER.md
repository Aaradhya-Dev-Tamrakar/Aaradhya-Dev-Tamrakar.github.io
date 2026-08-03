# Portfolio Website Tracker — v27

## _Last updated: 2026-07-27_

## Meta

- **v27 — ambient particle-burst profile-photo effect (`about.html`), original design, not a Discord-asset port.** User referenced Discord Nitro profile-effect store items (Encom Grid/Tron, Ki Detonate, Vengeance frame, Entering Hyperspace) as visual inspiration; these are paid proprietary cosmetics and were **not** pulled/traced — flagged directly, then rebuilt as an original equivalent using the site's own design tokens. Implementation, scoped to `about.html` + `assets/js/script.js` only:
  - `<canvas id="about-photo-fx" class="about-photo-fx" aria-hidden="true">` inserted as first child of `#about-photo-wrap`, before the existing `<picture>` — verified single insertion, not duplicated.
  - CSS: `.about-photo-fx { position:absolute; inset:-24px; pointer-events:none; z-index:0; }` — sits behind `.about-photo` (`z-index:1`) and `.about-photo-ring` (`z-index:2`), confirmed the pre-existing ring block was read and left untouched (its own `inset`/`z-index`/`opacity` rules unchanged).
  - JS: new self-contained IIFE appended to end of `script.js` (after the global keymap handler) — guards on `document.getElementById('about-photo-fx')` existing, so it's inert on every other page without a separate page-check. Spawns particles at the wrap's edges that drift inward toward center, fade in/out over their lifetime, capped at 34 concurrent, respawn-throttled via a frame counter.
  - **Color**: reads `--accent` live via `getComputedStyle` on every animation frame (not cached at init) — so it tracks the light/dark theme toggle automatically, no separate light-mode branch needed.
  - **Perf/battery guards**: `prefers-reduced-motion: reduce` check at IIFE start — returns immediately, no canvas/rAF loop ever starts (this is the first JS-side reduced-motion check in the codebase; prior motion — the ring's CSS `animation` — was already covered by the existing global `*` reduced-motion rule in `style.css`, which doesn't reach canvas/rAF work, so this was a genuine gap being closed, not a duplicate check). Also gated on the Page Visibility API (`visibilitychange`) — `cancelAnimationFrame` fires when the tab isn't visible, resumes on return.
  - **Verification run**: `node -c script.js` — pass; `about.html` div-tag balance — 110 open / 110 close; `about-photo-fx` string count in `about.html` — exactly 2 (one CSS class rule, one element `id`+`class` — confirmed via `grep -n`, not just count, to rule out an accidental duplicate element); trailing-newline check on `script.js` post-append — present (file previously ended without one); CRLF check on both touched files — 0 in either, matching pre-edit LF-only state.
  - **Trigger/behavior chosen this version**: always-on ambient loop (not hover-only, not click-toggle) — user selected this explicitly over the hover-only pattern the pre-existing `.about-photo-ring` uses.
  - **Not committed/pushed from this side** — code delivered inline in-conversation (small/targeted edit, per output-delivery convention), `sync.ps1` is a local/user-side step and wasn't run this session.

- **v1–v18**: see prior tracker versions. Two-repo architecture, nav/WebP/CSS-JS consolidation, domain-identity fix, GCSBR expansion — all confirmed delivered and live as of v18. 14-file orphaned-cert-PNG deletion landed in v18.
- **v19**: 11 more orphaned raw PNGs (flagged in v18, out of scope there) deleted — 21 MB freed, verified zero broken references. Two open items resolved: `.achievement-title` h3 count (21, identified as a new DataCamp "Introduction to Git" entry, Jul 6 2026) and a re-attempted GitHub API query (still blocked, shared-IP rate limit, confirmed genuinely unresolved rather than newly broken). New low-priority finding: `graphify-out/` carries stale pre-WebP-conversion filenames, not actioned.
- **v20 (this version) — certificate download now serves the original PDF; viewer stays WebP.**
  - **The blocker, surfaced before any code was touched**: the live repo (as of v19) held zero certificate PDFs — only `AARADHYA_DEV_TAMRAKAR_CV.pdf` was a PDF anywhere in the tree. Confirmed via full repo-wide `find -iname "*.pdf"` before writing anything. The PDF→PNG→WebP conversion chain (documented across v9–v18) hadn't preserved originals at any step. Flagged to the user directly rather than building download machinery pointing at files that don't exist; user chose to upload the originals.
  - **User uploaded `certificates.zip`, 24 PDFs.** Cross-referenced by exact basename against all 23 live `.webp` files before touching any code: **23 exact matches**, zero missing. **2 uploaded PDFs unmatched** by any current cert-btn: `Introduction_to_Git.pdf` and `Introduction_to_Python_certificate.pdf`. Investigated rather than discarded — `Introduction_to_Git.pdf` plausibly corresponds to the KEC IT Club "Introduction to Git" (2024) achievement entry, which was directly confirmed (read in full, lines 592–602) to have **no cert-btn at all** — title/description/date only, no button, no webp. `Introduction_to_Python_certificate.pdf` was checked against the single live "Introduction to Python" entry (line 914) and found to already be wired to a different PDF (`Introduction_to_Python_ITP0014139470763`) — no plausible match found for it at all. **Neither of the 2 unmatched PDFs was actioned this version** — adding a cert-btn (and generating a webp) to a currently-buttonless achievement is new scope, not a wiring fix, and wasn't part of what was asked. Flagged as a distinct, optional follow-up.
  - **Implementation, scoped to the 23 confirmed matches only**:
    - Added a `data-download="assets/certificates/{basename}.pdf"` attribute to each of the 23 matched `.cert-btn` elements — 22 in `achievements.html`, 1 in `experience.html` — placed immediately after the existing `data-cert="...webp"` attribute, verified by basename-equality script (zero mismatches, zero missing).
    - `initLightbox()` in `assets/js/script.js`: `openLightbox()` gained a 4th parameter, `downloadSrc`; `lbDownload.href` now reads `downloadSrc || src` (falls back to the original `src`/webp when no `data-download` is present). `lbOpen.href` (the "open in new tab" button) was deliberately left unchanged — it still opens the webp, matching the user's stated scope ("when I view... webp") rather than silently also redirecting the new-tab action.
    - The `.cert-btn` click handler now passes `btn.dataset.download` as the 4th argument.
    - **Zero-regression check on the one pre-existing PDF cert-btn** (the CV, in `index.html`, `data-type="pdf"`): it has no `data-download` attribute and wasn't touched by the injection script (scoped to `assets/certificates/` webp basenames only, the CV lives at `assets/docs/`) — confirmed its behavior is unchanged: `downloadSrc` is `undefined` for it, so `lbDownload.href` falls back to `src`, identical to pre-edit behavior.
    - 23 PDFs copied into `assets/certificates/`, named to exactly match their `.webp` counterpart's basename.
  - **`download` attribute mechanics, verified**: `<a id="lb-download" ... download>` uses the bare (valueless) `download` attribute — this makes the browser save using the target URL's own filename, not the webp's. Since `lbDownload.href` now points at the `.pdf` URL for the 23 matched certs, the saved file is correctly named e.g. `Introduction_to_Git_CPE0469867571113.pdf`, not the webp's name.
  - **Full verification suite run post-edit**: (1) script cross-checked every `data-cert`/`data-download` pair in both touched HTML files for exact basename equality — 0 fails; (2) every `data-download` path resolved against the actual filesystem — 23/23 resolve, 0 broken; (3) `node -c` on `script.js` — valid syntax; (4) div open/close tag balance on both touched files — `achievements.html` 115/115, `experience.html` 58/58, both unchanged from v19; (5) line-ending regression check — all three touched files remained LF-only (0 CRLF), matching their pre-edit state.

---

## State of Play

**Open items:**

| Item                                                             | Status                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Particle-fx trigger style — always-on vs. click/hover toggle** | **Open, deferred by user this version (v27) — explicitly "continue later."** Currently shipped as always-on. If revisited: swap to click/hover would mean gating the rAF start/stop on a click/pointer listener instead of only `visibilitychange`; the reduced-motion check and 34-particle cap wouldn't need to change. |
| GitHub API direct commit/deployment count                        | Still blocked — sandbox shared-IP rate limit (confirmed v19). `last-commit.json` (SHA `43d99bd`) remains the fallback.                                                                                                                                                                                                    |
| Merge-pending: still separate from `AARADHYA_MASTER`             | Unchanged, carried forward.                                                                                                                                                                                                                                                                                               |

_Dropped from this table (v24): the two v20/v21 unmatched-PDF items and the `graphify-out/` stale-filename item — all resolved, all documented in their own dedicated sections below rather than carried indefinitely as "open."_

**Resolved this version:**

- **Site-optimization pass** (`e7b6f8b`, `034ae1e`, `42d30e0`) — untracked `graphify-out/`+`dev-logs/` (~1MB no longer publicly served by GitHub Pages), regenerated `og-image.jpg` with the correct post-migration domain, converted 3 oversized logo PNGs to sized WebP pairs, added an LCP `fetchpriority` hint on `about.html`'s hero, rAF-throttled the scroll handler in `script.js`, plus `.hintrc`/template a11y follow-ups. Full breakdown below.
- **Mobile legend line-break fix** (`8683db4`) — `achievements.html`'s category/year legend groups now stack as distinct blocks on mobile instead of an ambiguous inline wrap.

**_(Note: this bullet list had gone stale — it still described v20's cert-download work as of the v23 file. Replaced to actually describe v24's resolutions; v20's own summary remains intact in the Meta section above and isn't lost.)_**

---

## Evidence & Verification Log — v20 additions

- **Pre-work blocker check**: `find . -iname "*.pdf"` across the full v19 repo, before any edit — returned exactly one file (`assets/docs/AARADHYA_DEV_TAMRAKAR_CV.pdf`). This is what triggered surfacing the blocker to the user instead of proceeding.
- **Upload cross-reference**: `comm -23`/`comm -13`/`comm -12` between sorted basename lists (23 live `.webp`, 24 uploaded `.pdf`) — 23 exact matches, 0 webp-side misses, 2 pdf-side extras (both individually investigated by reading their corresponding HTML region in full, not assumed).
- **Injection method**: Python string-replace keyed on the exact `data-cert="assets/certificates/{base}.webp"` substring per matched basename, with a pre-check guarding against double-injection (none occurred, single pass). Applied to `achievements.html` (22 replacements) and `experience.html` (1 replacement) — count matches the known 23-webp total exactly.
- **JS edit**: `str_replace` on `assets/js/script.js`, two edits — the function signature/body (`downloadSrc` parameter, `lbDownload.href` fallback logic) and the event-listener call site (passing `btn.dataset.download` through). Both edits verified present via direct `sed`/`view` read of the final file, not assumed from the edit call's success alone.
- **Post-edit verification script**: a dedicated Python regex pass over both touched HTML files, checking every `data-cert`/`data-download` pair for basename equality — this is a stronger check than "the file exists," since it also catches a cert-btn that has a `data-download` pointing at the _wrong_ cert's PDF (a copy-paste-style error), not just a missing one. Zero fails.
- **CV button regression check**: read directly (`grep`), confirmed the CV's `cert-btn` in `index.html` has no `data-download` attribute post-edit, and its scope (`assets/docs/`) falls outside the injection script's target directory (`assets/certificates/`) — the CV's un-changed status is structural, not incidental.

---

## v21 addition — both v20-flagged unmatched PDFs closed out

Neither of the two unmatched uploaded PDFs (`Introduction_to_Git.pdf`, `Introduction_to_Python_certificate.pdf`) corresponded to a missing achievement. Both are DataCamp's plain "Statement of Accomplishment" document for a course completion that's already represented on the site by its more-complete CPE-credential counterpart (same course, same completion date, same person — confirmed by rendering both PDFs to images and comparing directly, not by filename or metadata alone). The original hypothesis that `Introduction_to_Git.pdf` belonged to the buttonless KEC IT Club "Introduction to Git" (2024) entry was checked against the PDF's actual content and disproven — it's dated Jul 6, 2026 and issued by DataCamp, not a 2024 KEC IT Club document.

Since each live achievement card's own description text already names the CPE credential ID that's currently wired, adding a second card for the plain-variant document would duplicate content already on the page rather than fill a gap. No new cards added, no files copied into the repo. Both items closed with a determination, not left open.

---

## v22 addition — KEC IT Club "Introduction to Git" (2024) card: closed, no source file available

User asked to add a card for this entry (v21's own flagged gap). Checked comprehensively — all files uploaded across this conversation, the live repo, `dev-logs/` — for a source certificate matching this specific entry: none exists. `Introduction_to_Git.pdf` (uploaded earlier, investigated in v21) was already confirmed via rendered-image comparison to be the DataCamp Jul 2026 document, not this one. User confirmed directly they don't have the original file.

**Resolution: left as a text-only achievement entry** (org/title/description/date, no cert-btn) — unchanged from its current live state. This is treated as a legitimate end state, not a gap: not every achievement needs a linked certificate image, and fabricating a placeholder or synthetic certificate graphic would misrepresent a real credential — not done. No code changes made this version. Closed.

---

## v23 addition — latest site refinements (2026-07-18)

Recent updates from the latest repository changes are now captured here:

- Added a date toggle in the hero status card so the timeline can switch between B.S. and A.D. views.
- Updated navigation arrow symbols across pages from « to << for more consistent rendering.
- Added card-arrow styling and hover effects to improve the visual treatment of navigation and card actions.
- Changed the keyboard shortcut for scrolling back to the top from + to =.
- Refined the wording in the keymap/help content around the recommended viewing brightness.

### Status

- No new blocker or content-gap issue was introduced by these changes.
- Existing tracker items remain unchanged unless a new certificate-source or content issue is surfaced.
- These updates are polish and interaction refinements rather than structural site rewrites.

---

## v24 addition — site-optimization pass + mobile legend line-break fix (2026-07-18)

Four commits landed this round. Verified against a **fresh clone of `origin/main`** (current HEAD `b8c8014`) rather than trusted from session memory — each commit's actual `git show --stat`/diff pulled and checked against what follows, not assumed from the prior session's running narration.

**`e7b6f8b`** — dead-weight untracking + OG image fix

- `.gitignore`: added `graphify-out/` and `dev-logs/*` (with `!dev-logs/og-image/**` carved out). Neither directory is referenced by any page or the README's documented structure, yet both were being served live by GitHub Pages — a bloat issue and a minor info-exposure issue (internal dev notes/tracker docs publicly crawlable). Confirmed on the live clone: `graphify-out/` — 0 tracked files (fully untracked); `dev-logs/` — only `og-image/README.md` and `og-image/template.html` remain tracked.
- `assets/images/og-image.jpg`: **40,361B → 56,595B** (confirmed exact, matches `git show --stat`). The old asset still showed the retired `aaradhyadtmr.github.io` domain from before the repo migration — surfaced by a WhatsApp share preview. No source template existed for the old flat JPG, so it was rebuilt as a reusable HTML/CSS template (`dev-logs/og-image/template.html`, tracked, pulls the site's actual `:root` design tokens) rendered via Playwright at 1200×630. `dev-logs/og-image/README.md` documents the regen steps plus each platform's cache-buster link (old shares need a manual re-scrape to pick up the new image).

**`034ae1e`** — logo WebP conversion + LCP hint + scroll throttle (one commit, not split across two as first assumed mid-session — confirmed via diff)

- `epc-club.png` 772K→105K (PNG) + **4,188B** (WebP); `fusemachines.png` 193K→19K (PNG) + **10,006B** (WebP); `makerspace.png` 118K→48K (PNG) + **14,488B** (WebP) — all confirmed present on disk at these exact sizes. All three were 10x+ oversized for their actual rendered footprint (`.exp-banner`, 120px/96px container, `object-fit: contain`). Wired via `<picture>` in `experience.html` (5 `<picture>` pairs, 8 logo `<img>` instances total, matching the pre-existing `photo.png`/`photo.webp` dual-source pattern). `ieee-kec.png`/`nssr.png` were already correctly sized (256×256) — no conversion needed, just `width`/`height`/`decoding="async"` added for CLS.
- `about.html`: `fetchpriority="high"` confirmed present on the hero photo (line 628, alongside existing `decoding="async"`/`width`/`height`) — the known-LCP image now correctly hinted to the browser's preload scanner.
- `assets/js/script.js`: `initScroll`'s scroll listener rAF-throttled — a `scrollTicking` flag gates a single `requestAnimationFrame` callback per scroll burst, replacing 4 unthrottled `classList.toggle` calls + a style write on every raw scroll event (which can fire dozens of times per frame). Confirmed present and correct on the live file; `passive: true` preserved.

**`42d30e0`** — follow-up fixes (made directly by Aaradhya, on top of the above, before the pull-and-verify pass)

- `.hintrc`: added an `ignore` rule for `img[fetchpriority]` under `compat-api/html` — suppresses a `webhint` false-positive (the attribute is newer than the linter's compat table). Correct call: kept the attribute, silenced the warning rather than removing the attribute.
- `dev-logs/og-image/template.html`: added a viewport meta tag and `alt="Aaradhya Dev Tamrakar portrait"` on the portrait `<img>` — confirmed present.

**`8683db4`** — mobile legend line-break fix

- `achievements.html`, inside the existing `@media (max-width: 900px)` block:

  ```css
  .achv-legends {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }
  .achv-legend-sep {
    display: none;
  }
  ```

- The category-legend wrap (4 items — Workshop/Certification/Competition/Leadership — "Leadership" spilling to its own line under ~900px) was real but unstyled: it read as a designed second row sitting next to the Current-Year/Past-Years row below it, but wasn't one — the 1px `.achv-legend-sep` divider meant to separate the two legends was floating mid-flow with nothing anchoring it as a group boundary. Fix stacks both legend groups as distinct blocks with a real `0.6rem` gap instead of letting them contest space in one wrapped flex row. Verified via computed styles at a 375px viewport (two clean, non-overlapping vertical bands, ~9px gap between them) and against the live diff (matches exactly, plus one incidental editor line-wrap on the Certification `<span>` — whitespace only, no functional change). Confirmed working in simulation, then on Aaradhya's own device, before commit.

**Lighthouse**: 87 mobile / 99 desktop, confirmed by Aaradhya against `f4373a2` — the commit immediately after `42d30e0`'s merge, i.e. reflects the full optimization pass but predates the legend fix. (An initially-reported 78/95 was a misread mid-session; corrected to 87/99 before being recorded here — the earlier figure was never actioned on.)

**False-alarm, not actioned**: a suspected horizontal-overflow bug on `achievements.html` mobile (hero text/legend/year-row clipped, scrollbar visible at the bottom of a screenshot) turned out to be a pinch-zoomed screenshot, not a rendering defect — confirmed against a normal-zoom screenshot of the same page. No underlying issue; nothing changed because of it.

**`graphify-out/` stale pre-WebP filename references** (open since v19): resolved as moot. The directory is untracked from git entirely as of `e7b6f8b`, so stale filenames inside it no longer touch anything git-tracked or deployed.

**Verification method**: fresh `git clone` of `origin/main` into a clean sandbox (not trusted from the exported session transcript alone) → `git log --oneline` confirming all four SHAs exist in the expected order (each followed by its usual CI "stamp last commit" + merge commit pair) → `git show --stat`/full diff on each of the four to confirm actual file-level content matches what's summarized above → direct `cat`/`grep`/`ls -la` on the current working tree for `.gitignore`, `.hintrc`, `about.html`, `script.js`, `dev-logs/og-image/template.html`, and all three logo `.webp` files, byte sizes matched exactly against `git show --stat`. Current `origin/main` HEAD: `b8c8014`.

---

**Flag — filename vs. content version, resolved**: filename renamed to `PortfolioWebsite_TRACKER_v24.md` to match the content version, closing the drift noted above (present since the uploaded `v22.5` filename carried `v23` content).

---

## v25 addition — bug-check sweep, pages 1/3/4 (2026-07-27)

Two sessions merged into this entry: a prior exported session (`index.html` check) plus the current session (`experience.html`, `achievements.html`). Repo re-cloned fresh for the current session; HEAD `b6c1aa4` (10 commits ahead of v24's `b8c8014` — all incremental UI/animation polish: card-arrow scaling, achievements track-button styling, keyboard nav for track toggling, hero caption rotation, schema.org credential markup; none altered by this check).

**Page 1 — `index.html` (prior session, carried forward): no bugs found.**

- Clean: tag balance (lxml strict, 0 errors), 0 duplicate ids, all `#anchor` refs resolve, all local `href`/`src` resolve, JSON-LD valid, `style.css` 0 parse errors, `script.js` + inline scripts `node --check` clean, every JS-targeted id exists exactly once, `last-commit.json` shape matches fetch handler.
- VIP/Master gated-content system (initially flagged as suspicious) traced fully and confirmed **legitimate, not a vulnerability**: AES-GCM payloads baked into `script.js`, decrypted client-side via Web Crypto/PBKDF2, real Google Sign-In, Master gated to 4 of the owner's own Gmail addresses, VIP open to any signed-in account (recruiter gimmick), everything local-storage only — no exfiltration.
- Cosmetic-only, not fixed: `style.css` L15–16 duplicated "Token System" comment; `CAPTIONS[]` in the hero-caption script has only 1 entry (the `Math.random()` pick is a no-op); `window.SEARCH_INDEX` declared/initialized but never populated or read (site-wide scaffold, not index-specific).
- **One real finding, unresolved**: `script.js`'s `ACCESS_CONTROL_PAYLOADS` defines an `"achievements-vip"` key that no `.html` file references via `data-payload-id`/`data-payload-link-id` — dead ciphertext, no UI hookup. (Contrast: all 13 `proj-*` keys are correctly wired to `projects.html`.) Not actioned — flagging only.

**Page 3 — `experience.html` (this session): no bugs found.**

- Tag balance, 0 duplicate ids, all 10 referenced logo/certificate assets resolve on disk, all CSS custom properties used are defined, `E — 001`…`E — 008` numbering sequential with no gaps/dupes, `cert-btn` data attributes match `initLightbox()` consumption, `#quickNavGrid`/`#siteNav`/`#siteFooter`/`live-fuse-year` all match global init calls in `script.js`, nav/breadcrumb JSON-LD/canonical/og:url all consistent.

**Page 4 — `achievements.html` (this session): one bug found.**

- **Orphaned "Leadership" category in the Academic legend/filter.** `#legendAcademic` (the default view on page load — `applyTrack('academic')` runs on init) lists Workshop/Certification/Competition/**Leadership**, with `.achievement-item[data-category="leadership"]` and `.legend-swatch--leadership` both styled (teal, `--glow-teal`). But none of the 35 achievement items use `data-category="leadership"` — "leadership" only exists under the separate ECA taxonomy (`data-track="eca" data-eca-category="leadership"`, pink, `--eca-leadership`). Net effect: default Academic view shows a legend swatch that can never match a visible card — stale category left over from before the Academic/ECA track split. **Not yet fixed** — flagging for a decision (remove the Academic "Leadership" legend entry + its unused CSS rule, or tag an existing academic item into it — nothing currently qualifies).
- Everything else clean: tag balance, 0 duplicate ids, in-page anchors resolve, all 96 local asset refs (images/certs) exist, all 52 `cert-btn`s have consistent `data-type`↔extension pairing, every item fully tagged (`data-track` + matching category attr), search-index regenerated via `scripts/extract_index.py` with **zero diff** (35 achievements / 20 projects — matches live DOM exactly), inline date-parsing/sort/year-bucketing script (`·` multi-date, year ranges, AM/PM times) resolves correctly on every tested case.

**Open items carried forward, unchanged:** GitHub API rate-limit block, `AARADHYA_MASTER` merge-pending status (see State of Play table above).

**New open items (v25):** orphaned `achievements-vip` payload key in `script.js`; orphaned "Leadership" category in `achievements.html`'s Academic legend/CSS.

---

## v26 addition — bug-check sweep, page 2 + about (2026-07-27)

From a separately exported session (`projects.html` + `about.html` checks). Re-verified live against a fresh pull before filing — HEAD `4889ff9` (one commit ahead of v25's `b6c1aa4`: the v25 tracker commit itself, `127593a`; no source changes since).

**Correction to v25's `achievements-vip` note**: re-checked ground truth in the live `script.js`/`achievements.html` rather than trusting recollection — `ACCESS_CONTROL_PAYLOADS["achievements-vip"]` still exists, and `data-payload-id=` still appears only twice, both in `index.html` (`index-vip`, `index-master`). **Still orphaned, not resolved** — v25's phrasing stands.

**Page 2 — `projects.html`: no bugs found (one transient issue, self-resolved).**

- Clean: tag balance, 0 duplicate ids, both in-page anchors resolve, all local asset refs exist (incl. `GCSBR_working_demo_poster.jpg`), JSON-LD valid, `script.js` syntax OK, search index in sync (35 achievements/20 projects, no stale entries), the 18 dynamically-`id`'d project cards (`proj-${i}`) deep-link correctly since `buildSearchIndex()` runs before `revealSearchTarget()`, all CSS classes resolve (shared stylesheet + inline block), progress-bar/legend consistency across all in-progress cards, all `target="_blank"` carry `rel="noopener"`, all 13 AES-gated project links decrypt and resolve 200 OK.
- **Transient 404, self-resolved**: `AaradhyaDTmr/PulseLive` GitHub link returned 404 at check time (repo didn't exist under that account or `AaradhyaDT`). Flagged rather than auto-corrected. User made the repo public same session; re-verified again this session via direct fetch — **200 OK, confirmed live and public**. No code change was or is needed.

**About page — `about.html`: one very minor, non-visual discrepancy, unresolved.**

- Clean: tag balance, 0 duplicate ids, anchor integrity, local asset refs, JSON-LD, inline JS syntax, CSS class coverage, heading hierarchy; `live-about-year`/`live-edu-meta`/`live-subjects-title`/`live-edu-tags` correctly wired to `computeLiveDates()`/`applyLiveDates()`, `LIVE` object fields match 1:1, semester logic correctly resolves to IV/I for the current date; "15+ Projects" stat consistent with `index.html`.
- **Stale intrinsic-size hint, re-confirmed still live**: `<img src="assets/images/photo.png" ... width="480" height="640">` (line 647–648) declares 480×640, but `photo.png`/`photo.webp` are both actually 720×960px (re-verified via `identify` both this session and the prior one). Aspect ratio is identical (3:4 either way) so there's no layout shift or visual distortion — purely a stale hint. Optional fix: update to `width="720" height="960"`.

**Open items carried forward, unchanged:** GitHub API rate-limit block; `AARADHYA_MASTER` merge-pending status; orphaned `achievements-vip` payload; orphaned Academic "Leadership" legend category (`achievements.html`).

**Closed this version:** PulseLive 404 (repo made public, re-verified 200 OK — no code change needed).

**New open item (v26):** stale `width`/`height` on `about.html`'s profile photo (480×640 vs actual 720×960).

---

## v28 addition — site-wide bug audit & structural hardening pass (2026-08-04)

Full site-wide audit completed and all open findings resolved:

- **Deep-linking IDs**: Added explicit `id` attributes to all 22 `.project-card` elements (`p-001`…`p-022`) in `projects.html` and all 25 `.journey-node` elements (`j-001`…`j-025`) in `journey.html`. Updated `scripts/verify.py` with `id_prefix: "j-"`.
- **Search index sync**: Regenerated `SEARCH_STATIC_INDEX` via `scripts/extract_index.py` (36 achievements, 22 projects indexed with clean deep-links).
- **Academic legend clean-up**: Removed orphaned "Leadership" swatch from `#legendAcademic` in `achievements.html`.
- **Image hint update**: Corrected profile photo intrinsic hints in `about.html` from `width="480" height="640"` to `width="720" height="960"`.
- **Security hardening**: Added `rel="noopener"` to EmailJS and Formspree external links in `privacy.html`. Fixed internal links in `journey.html` (`contact.html`, `index.html`) to use standard same-tab navigation.
- **Orphaned JS payload clean-up**: Removed unreferenced `"achievements-vip"` entry from `ACCESS_CONTROL_PAYLOADS` in `assets/js/script.js`.
- **Verification status**: `python scripts/verify.py` passes with **0 errors and 0 warnings**. `graphify update .` executed cleanly.

---

## v29 addition — site-wide performance, PWA, SEO & styling upgrades (2026-08-04)

All proposed site upgrades implemented and verified across the portfolio:

- **PWA & Manifest integration**: Created `site.webmanifest` with metadata (`standalone` display, dark theme `#0f0e0c`, maskable SVG icon). Added `<link rel="manifest" href="site.webmanifest" />` across all 10 HTML pages.
- **Mobile video playsinline**: Added `playsinline=""` to the demonstration video element in `projects.html` to prevent iOS devices from forcing full-screen video player popups.
- **Cross-page theme-color script**: Injected dynamic `<meta name="theme-color">` script in `<head>` of `about.html`, `achievements.html`, `experience.html`, `journey.html`, and `projects.html` for uniform address bar tinting across light/dark OS modes.
- **Async image decoding**: Added `decoding="async"` across images in `achievements.html`, `experience.html`, `about.html`, and `journey.html` to prevent main-thread layout stalls during fast scrolling.
- **SEO rich snippets (JSON-LD)**: Added structured JSON-LD schemas for `ItemList`/`SoftwareApplication` on `projects.html`, `Person`/`Organization` on `experience.html`, and `EducationalOccupationalCredential` on `achievements.html`.
- **Print stylesheet optimization (`@media print`)**: Added `@media print` rules in `assets/css/style.css` to hide floating controls (`.cmdk-modal`, `.nav`, `.back-to-top`, `.about-photo-fx`, `.keymap-modal`, `footer`) and format content for crisp printing/PDF resume export.
- **Verification status**: `python scripts/verify.py` passes with **0 errors and 0 warnings**. `graphify update .` executed cleanly.
