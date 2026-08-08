# aaradhya-dev-tamrakar.github.io

Official personal portfolio website for **Aaradhya Dev Tamrakar** — Electronics Engineer & AI/ML Developer. Built as a high-performance, responsive static web app hosted on GitHub Pages, featuring zero-leak client-side AES-256-GCM encryption, Google OAuth 2.0 authentication, dynamic command-palette search, and an interactive milestone build log.

🌐 **Live Website**: [aaradhya-dev-tamrakar.github.io](https://aaradhya-dev-tamrakar.github.io)

---

## 📁 Repository Structure & Directory Map

```text
.
├── 📄 HTML Pages & Web App Manifest (Root Deployment)
│   ├── index.html              # Homepage, hero section, interactive dev terminal, stats & Master Control Panel
│   ├── about.html              # Personal background, engineering philosophy, timeline & biography
│   ├── projects.html           # Technical showcase with VIP-gated GitHub source code links
│   ├── experience.html         # Professional positions, leadership roles (IEEE KEC, EPC, Maker's Space) & education
│   ├── achievements.html       # Certifications, credentials, filterable badges & PDF verification links
│   ├── journey.html            # Development timeline & commit-linked evolution log of the website itself
│   ├── contact.html            # Interactive contact form, channels & direct connection links
│   ├── privacy.html            # Site privacy policy and data handling transparency
│   ├── terms.html              # Terms of service and usage terms
│   ├── 404.html                # Custom styled Not-Found page (excluded from sitemap, marked noindex)
│   ├── site.webmanifest        # Progressive Web App manifest metadata (standalone app, dark theme tokens)
│   ├── sw.js                   # PWA Service Worker (v33 cache-first static assets & network-first HTML)
│   └── google3e772e11a3eb8313.html # Google Search Console site ownership verification file
│
├── 🎨 Assets (`assets/`)
│   ├── certificates/          # PDF downloads and WebP image previews for all 35+ certifications
│   ├── css/
│   │   └── style.css          # Core CSS stylesheet: design tokens, dark theme palette, glassmorphism UI & responsive styles
│   ├── docs/
│   │   ├── AARADHYA_DEV_TAMRAKAR_CV.pdf # Official downloadable Curriculum Vitae
│   │   └── ADT_LOGO.png        # Brand emblem and identity asset
│   ├── events/                # Event photos, posters & vector graphics for workshops, hackathons & campus activities
│   ├── images/
│   │   ├── photo.webp / .png   # Profile headshots
│   │   ├── og-image.jpg        # Open Graph social sharing preview card
│   │   └── logos/              # Institutional logos (IEEE KEC, Fusemachines, EPC Club, Maker's Space, NSSR)
│   ├── js/
│   │   ├── script.js           # Core site engine: nav, theme toggle, access control, Google Sign-In & search
│   │   └── last-commit.json    # Commit metadata stamped on push via GitHub Actions for live commit status display
│   └── videos/                 # Project video demonstrations (e.g., GCSBR working demo) & poster stills
│
├── 🛠️ Scripts (`scripts/`)
│   ├── verify.py               # Structural integrity check: HTML tag balance, search index sync, PWA & metadata audit
│   ├── extract_index.py        # Python script to extract searchable items into the static command palette index
│   └── dev-serve.py            # Local HTTP development testing server with strict no-cache headers
│
├── 🤖 GitHub Workflows (`.github/workflows/`)
│   ├── stamp-last-commit.yml   # CI bot stamping last commit hash, timestamp & message on every push
│   └── update-search-index.yml # CI bot auto-regenerating search index on HTML content changes
│
├── 📊 Dev Logs & Knowledge Graph (`dev-logs/` & `graphify-out/`)
│   ├── dev-logs/
│   │   ├── PortfolioWebsite_TRACKER.md # Comprehensive release tracker & build log
│   │   ├── og-image/           # Template & instructions for generating Open Graph social cards
│   │   └── secrets/            # Git-ignored local development credentials
│   └── graphify-out/           # Codebase knowledge graph analysis (community hubs, god nodes, AST report)
│
└── ⚙️ Configuration & Maintenance
    ├── sync.ps1                # PowerShell script for zero-conflict pulls, conventional commit generation & pushing
    ├── sitemap.xml             # XML sitemap for search engine crawlers (Google, Bing)
    ├── robots.txt              # Search engine crawler directives
    ├── AGENTS.md               # Codebase rules, Graphify instructions & Git workflow directives
    ├── CLAUDE.md               # Context summary for AI pair programming
    ├── LICENSE                 # Repository license
    ├── .gitignore              # Excluded files (local secrets, bytecode, graph outputs)
    ├── .gitattributes          # Git repository attribute definitions
    └── .hintrc                 # Webhint linter configuration
```

---

## 🔒 Multi-Tier Access Control & Security Model

The site features an advanced **Zero-Leak Client-Side Access Control System** supporting 3 security tiers:

| Tier       | Role                | Access Level & Capabilities                                                                                                                                                                                                                                           |
| :--------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tier 0** | **Public Guest**    | Standard visitor view. Full portfolio, project descriptions, skills & certificates. GitHub source code links display as `🔒 GitHub Repo (VIP Access Required)`.                                                                                                       |
| **Tier 1** | **Higher Tier VIP** | Unlocked via passcode (`vip2026`) or Google Sign-In with an authorized email/domain. Grants direct access to all GitHub repository links, private project specs & extended metrics.                                                                                   |
| **Tier 2** | **Master Admin**    | Unlocked exclusively via Google Sign-In with Master email (`aaradhyadevtmr@gmail.com`). (Manual passcode authentication is disabled for Master Level). Grants Master Control Panel modal, live VIP allowlist manager, simulated tier switching & diagnostic controls. |

### 🔍 Technical Security Architecture

- **Zero Raw HTML Leakage**: Gated HTML content blocks are pre-encrypted into hex ciphertexts (`ACCESS_CONTROL_PAYLOADS`). Public HTML source contains no unencrypted text or hidden DOM nodes inspectable via Chrome DevTools (`F12`).
- **Web Crypto API Encryption**: Key derivation uses PBKDF2 with SHA-256 (100,000 iterations and salt `adt_salt_2026`). Content is encrypted using **AES-256-GCM** and decrypted dynamically into browser memory only upon successful authentication.
- **In-Memory DOM Lifecycles**: Decrypted DOM fragments exist only while authenticated and are completely purged on logout or lock.
- **Master Level Visibility**: Master Level controls and exclusive administrative panels (`#master-exclusive`) are hidden (`display: none`) from public guests and VIP users. They are unlocked exclusively upon signing in with the Master administrator Google account (`aaradhyadevtmr@gmail.com`).

---

## 🔑 Google OAuth 2.0 Integration

- Powered by the official **Google Identity Services SDK** (`https://accounts.google.com/gsi/client?hl=en`).
- **Client-Side Verification**: Decodes Google ID tokens (JWT) to extract email, full name, and avatar picture.
- **Automatic Tier Elevation**: Matches authenticated email against Master administrator account (`aaradhyadevtmr@gmail.com`) or the active VIP email allowlist to instantly elevate session privileges.
- **Custom VIP Allowlist Management**: Master Admin control panel features a live allowlist manager widget to add/remove custom VIP user emails dynamically (stored locally in `localStorage`).
- **User Navigation Avatar**: Displays the user's Google profile picture inside the navigation bar upon sign-in.

---

## 🔍 Site Search & Unified Command Palette

Press **`/`** (or click the **Search** button in the navigation bar) on any page to open the unified **Command Palette**.

### Key Features

- **Instant Cross-Page Search**: Searches across all 10 site pages, all 36 achievements, all 22 projects, and direct quick-navigation commands.
- **Dual Index Strategy**:
  1. `SEARCH_STATIC_INDEX`: Pre-compiled static snapshot bundled into `assets/js/script.js` so search works immediately on non-list pages (`index.html`, `contact.html`, `about.html`, etc.).
  2. **Live DOM Scanning**: Real-time DOM fallback scanner on `achievements.html` and `projects.html` to instantly reflect any client-side content edits in search results.
- **Automated CI Re-Indexing**: On every push, GitHub Actions workflow `.github/workflows/update-search-index.yml` runs `scripts/extract_index.py` to regenerate the static index automatically.

---

## 💻 Interactive Developer Terminal Widget (`#adtTerminal`)

Located directly on the Home page (`index.html`), the **Interactive Dev Terminal** (`adt-shell`) allows visitors to explore Aaradhya's technical profile via a CLI-style interface.

### Terminal Commands

- `skills`: Overview of core firmware, AI/ML, robotics, and software toolstacks.
- `projects`: Summary of featured projects (PulseLive, GCSBR, Autonomous Rover).
- `experience`: Engineering leadership roles (IEEE KEC Vice Secretary, Robotics Lead).
- `achievements`: Overview of 36+ verified certifications and competition awards.
- `contact`: Direct email, GitHub, and LinkedIn links.
- `whatsnew`: Triggers the **What's New (v33)** major releases modal.
- `theme`: Toggles site light/dark color scheme.
- `matrix`: Renders cybernetic digital rain animation stream.
- `clear`: Clears terminal screen.

### UX Features

- **1-Click Quick Preset Pills**: Clickable command buttons (`help`, `skills`, `projects`, etc.) for instant command execution without typing.
- **HTML Output Formatting**: Color-coded text (`.term-green`, `.term-gold`, `.term-cyan`), prompt indicators (`visitor@adt:~$&nbsp;`), and clickable links.
- **Keyboard-Friendly**: Binds to `Enter` for execution and auto-scrolls to latest prompt output.

---

## ⚡ Local Development & Git Workflow

### Local Development Server

To preview the portfolio locally with no-cache headers:

```bash
python scripts/extract_index.py   # Regenerates static search index
python scripts/dev-serve.py        # Starts local server on http://localhost:8000
```

Alternatively, open `index.html` directly in any web browser.

### Automated Git Workflow (`sync.ps1`)

To prevent merge conflicts with GitHub Actions commit-back bots (which auto-update `assets/js/last-commit.json` and search index files), use `sync.ps1`:

- **Routine & Minor Updates** (Auto-generates conventional commit message and syncs timestamps):

  ```powershell
  .\sync.ps1
  ```

- **Major Architectural & Feature Updates** (Passes descriptive commit summary):

  ```powershell
  # 1. Update dev-logs/PortfolioWebsite_TRACKER.md with release notes first
  # 2. Run sync script with detailed message:
  .\sync.ps1 -m "feat(access-control): implement multi-tier OAuth security system"
  ```

- **Safe Remote Pull**:

  ```powershell
  .\sync.ps1 -PullOnly
  ```

---

## 📈 Codebase Knowledge Graph (`Graphify`)..

This repository uses **Graphify** for local AST-level knowledge graph extraction, mapping code abstractions, script functions, HTML components, and cross-file dependencies.

> ℹ️ **Note**: `graphify-out/` is a local analysis directory (`.gitignore`d) generated during development.

- **Local Report**: View metrics & god nodes locally at `graphify-out/GRAPH_REPORT.md`.
- **Update Graph**: Regenerate the knowledge graph locally after modifying code:

  ```bash
  graphify update .
  ```

---

## 📬 Contact & Connect

- **Email**: `aaradhyadevtmr@gmail.com`
- **GitHub**: [github.com/Aaradhya-Dev-Tamrakar](https://github.com/Aaradhya-Dev-Tamrakar)
- **LinkedIn**: [Aaradhya Dev Tamrakar](https://www.linkedin.com/in/aaradhya-dev-tamrakar)
- **Portfolio Site**: [aaradhya-dev-tamrakar.github.io](https://aaradhya-dev-tamrakar.github.io)

---

## 📄 License

This project is open source and available under the terms of the [MIT License](LICENSE).
