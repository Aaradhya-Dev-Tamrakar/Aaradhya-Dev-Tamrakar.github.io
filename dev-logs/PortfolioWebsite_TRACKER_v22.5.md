# Portfolio Website Tracker — v23
*Last updated: 2026-07-18*

## Meta

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

| Item | Status |
| --- | --- |
| GitHub API direct commit/deployment count | Still blocked — sandbox shared-IP rate limit (confirmed v19). `last-commit.json` (SHA `43d99bd`) remains the fallback. |
| `graphify-out/` stale pre-WebP filename references | Open since v19, low priority, doesn't touch the live site. |
| **(v20, new) `Introduction_to_Git.pdf`** — uploaded, unmatched | **Resolved (v21).** Not the KEC IT Club entry (that hypothesis was checked and disproven by reading the PDF's actual content). It's a DataCamp "Statement of Accomplishment" (cert #48,697,649, Jul 6 2026) — the *same* completion as the already-wired CPE-credential cert (`..._CPE0469867571113`, same course, same date). Confirmed via side-by-side rendered-image comparison, not filename inference. The live card's own description text ("Credential ID CPE0469867571113") already specifically names the CPE version. No new card added — would duplicate existing content. Not copied into the repo. |
| **(v20, new) `Introduction_to_Python_certificate.pdf`** — uploaded, unmatched | **Resolved (v21).** Same pattern as the Git one: a DataCamp plain Statement of Accomplishment (cert #47,717,251, May 25 2026) for the identical completion as the already-wired CPE cert (`..._ITP0014139470763`). Confirmed via rendered-image comparison. Live card text already cites "Credential ID ITP0014139470763." No new card added; not copied into the repo. |
| Merge-pending: still separate from `AARADHYA_MASTER` | Unchanged, carried forward. |

**Resolved this version:**

- 23 of 23 live certificate cert-btns now download the original PDF while still displaying the WebP in the viewer. Verified byte-level, zero regressions on the pre-existing CV PDF button or on any untouched file.

---

## Evidence & Verification Log — v20 additions

- **Pre-work blocker check**: `find . -iname "*.pdf"` across the full v19 repo, before any edit — returned exactly one file (`assets/docs/AARADHYA_DEV_TAMRAKAR_CV.pdf`). This is what triggered surfacing the blocker to the user instead of proceeding.
- **Upload cross-reference**: `comm -23`/`comm -13`/`comm -12` between sorted basename lists (23 live `.webp`, 24 uploaded `.pdf`) — 23 exact matches, 0 webp-side misses, 2 pdf-side extras (both individually investigated by reading their corresponding HTML region in full, not assumed).
- **Injection method**: Python string-replace keyed on the exact `data-cert="assets/certificates/{base}.webp"` substring per matched basename, with a pre-check guarding against double-injection (none occurred, single pass). Applied to `achievements.html` (22 replacements) and `experience.html` (1 replacement) — count matches the known 23-webp total exactly.
- **JS edit**: `str_replace` on `assets/js/script.js`, two edits — the function signature/body (`downloadSrc` parameter, `lbDownload.href` fallback logic) and the event-listener call site (passing `btn.dataset.download` through). Both edits verified present via direct `sed`/`view` read of the final file, not assumed from the edit call's success alone.
- **Post-edit verification script**: a dedicated Python regex pass over both touched HTML files, checking every `data-cert`/`data-download` pair for basename equality — this is a stronger check than "the file exists," since it also catches a cert-btn that has a `data-download` pointing at the *wrong* cert's PDF (a copy-paste-style error), not just a missing one. Zero fails.
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
