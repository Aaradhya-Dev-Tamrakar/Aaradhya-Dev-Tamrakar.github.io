# Antigravity IDE & Gemini Agent Rules for Portfolio Repository

## 1. Git Workflow & Automation (CRITICAL — STRICT ENFORCEMENT)

To avoid merge conflicts on `assets/js/last-commit.json` (bot-managed) and prevent wasteful multi-step Git commands, **NEVER run individual `git add`, `git commit`, `git push`, or `git pull` commands directly.**

**ALWAYS execute `.\sync.ps1` for repository synchronization and version control.**

### Commands

- **Routine / Minor Changes**:

  ```powershell
  .\sync.ps1
  ```

  _Automatically runs search index extraction, knowledge graph update, verification tests, updates tracker timestamp, generates a smart conventional commit message, pushes to origin main, and syncs GitHub Actions bot stamp commit._

- **Major Features / Architectural Changes**:
  1. Update `dev-logs/PortfolioWebsite_TRACKER.md` with detailed release notes and state-of-play items.
  2. Execute:

     ```powershell
     .\sync.ps1 -m "type(scope): detailed commit summary"
     ```

- **Safe Pull Only**:

  ```powershell
  .\sync.ps1 -PullOnly
  ```

---

## 2. Knowledge Graph & Codebase Navigation (Graphify)

- **Map First**: Read `graphify-out/GRAPH_REPORT.md` (or `graphify-out/wiki/index.md` if present) before deep-diving or raw file scanning.
- **Relationship Queries**: Prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` for cross-module relationship exploration.
- **Graph Updates**: `.\sync.ps1` automatically runs `graphify update .` AST sync.

---

## 3. Operational Rules & Efficiency

- **Zero-Waste Output**: Dive straight to work. Be concise. Avoid conversational filler or unnecessary explanations.
- **Single-Pass Sync**: Do not run separate scripts for indexing, graph updates, or staging — `.\sync.ps1` handles all tasks in one execution.
- **Bot-Managed Files**: NEVER manually modify or stage `assets/js/last-commit.json`.
- **Notebooks**: Do NOT execute `.ipynb` files locally. They are run manually in Google Colab or local user environments.
- **Verification Gate**: Ensure changes pass `python scripts/verify.py` before finalizing (auto-checked by `.\sync.ps1`).
- **Web Standards**: Maintain Vanilla HTML/CSS/JS architecture, high-end aesthetics, semantic markup, and cross-site link/asset integrity across all pages.
