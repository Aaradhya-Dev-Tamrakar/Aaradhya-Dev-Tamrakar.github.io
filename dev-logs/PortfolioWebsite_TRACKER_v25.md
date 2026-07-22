# Portfolio Website Tracker — v25

## *Last updated: 2026-07-22*

## Meta

- **v1–v24**: personal portfolio consolidation, certificate download integration, search index automation, site optimization, and mobile responsive refinements.
- **v25 (this version) — Zero-Leak Multi-Tier Access Control System & Google OAuth 2.0 Integration**:
  - **Zero-Leak Client-Side AES-256-GCM Encryption**:
    - Replaced raw HTML inside gated containers (`index-vip`, `index-master`, `achievements-vip`) with pre-encrypted ciphertext hex payloads stored in `ACCESS_CONTROL_PAYLOADS`.
    - Locked containers render zero raw HTML or text in Chrome DevTools (`F12`).
    - Web Crypto API PBKDF2 (100,000 iterations, salt `adt_salt_2026`, SHA-256) derives 256-bit key to decrypt payloads into browser memory on-demand.
    - DOM nodes are completely wiped on logout or lock.
  - **Google Account Sign-In (Google Identity Services SDK)**:
    - Integrated GSI SDK (`https://accounts.google.com/gsi/client?hl=en`) forced to English locale.
    - Client-side JWT token parsing extracts user email, name, and profile picture avatar.
    - Tier elevation logic: Master email (`aaradhyadevtmr@gmail.com`) $\rightarrow$ Master Level (Tier 2); VIP allowlist emails/domains $\rightarrow$ VIP Access (Tier 1).
    - Avatar picture renders inside `#navAccessBtn` upon sign-in.
  - **Stealth Mode for Master Level Access**:
    - Master diagnostic console on `index.html` and Master Level tab in login modal are hidden from public visitors (`display: none`).
    - Secret triggers (`Ctrl+Shift+M`, secret typing `master`/`admin`/`root`, or 5 fast clicks on modal title) reveal Master authentication for guests.
    - Master tab automatically un-hides for authenticated VIP users.
  - **VIP Gated GitHub Repository Links**:
    - Project cards remain visible to public visitors with descriptions and tags.
    - GitHub repository links (`data-vip-link`) are gated for non-VIPs (`🔒 GitHub Repo (VIP Access Required)`).
    - Clicking locked links opens Access Control modal; verified VIP/Master users automatically unlock direct URLs.
  - **Live VIP Allowlist Manager Widget**:
    - Built-in allowlist management interface inside the Master Control Panel popup (`#masterCardPopup`).
    - Allows adding or removing custom VIP user emails dynamically, stored in `localStorage` (`adt_custom_vip_emails`).
  - **Security & Git Compliance**:
    - Confirmed `.gitignore` line 32 excludes `dev-logs/secrets/`. Zero credential exposure.

---

## State of Play

**Open Items:**

| Item | Status |
| --- | --- |
| GitHub API direct commit/deployment count | Still blocked — sandbox shared-IP rate limit. `last-commit.json` remains fallback. |
| Merge-pending: still separate from `AARADHYA_MASTER` | Unchanged, carried forward. |

**Resolved in v25:**
- Implemented zero-leak AES-256-GCM encryption for gated content.
- Integrated Google Identity Services OAuth 2.0 Sign-In.
- Added Stealth Mode and secret action triggers for Master Level access.
- Implemented VIP Gated GitHub repository links across projects page.
- Added Live VIP email allowlist manager in Master Control Panel.
- Updated codebase knowledge graph (`graphify update .`).

---

## Verification & Build Log — v25

- **Web Crypto Decryption Test**: Verified AES-256-GCM decryption in browser memory across Chrome/Edge.
- **Passcode Key Resolution Test**: Verified passcode matching for Google Sign-In and simulated sessions.
- **Stealth Trigger Test**: Confirmed 5-click modal title, `Ctrl+Shift+M`, and key sequence `master` reveal Master tab correctly.
- **Git Security Audit**: Confirmed `dev-logs/secrets/` is strictly ignored and untracked in Git status.
