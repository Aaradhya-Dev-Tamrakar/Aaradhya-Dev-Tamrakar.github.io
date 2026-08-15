# Agent Rules & Workflow Guidelines

## 1. Git Workflow & Automation (CRITICAL — STRICT ENFORCEMENT)

To avoid merge conflicts on `assets/js/last-commit.json` (bot-managed) and prevent wasteful multi-step Git commands, **NEVER run individual `git add`, `git commit`, `git push`, or `git pull` commands directly.**

**ALWAYS execute `.\sync.ps1` for repository synchronization and version control.**

### Commands

- **Routine / Minor Changes**:

  ```powershell
  .\sync.ps1
  ```

  _Automatically handles search index extraction, graph updates, pre-commit verification, tracker log timestamps, auto-commit message generation, push, and bot stamp sync._

- **Major Features / Architectural Changes**:
  1. Update `dev-logs/PortfolioWebsite_TRACKER.md` with release notes and verification details.
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

- **Map First**: Read `graphify-out/GRAPH_REPORT.md` (or `graphify-out/wiki/index.md` if present) before deep-diving into raw files.
- **Relationship Queries**: Prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over blind grep searches.
- **Graph Updates**: `.\sync.ps1` automatically executes `graphify update .`.

---

## 3. Operational Rules & Efficiency

- **Zero-Waste Execution**: Be concise and dive straight to work. Avoid conversational filler.
- **Single-Pass Sync**: Do not run manual separate commands for indexing, graphify, or staging — `.\sync.ps1` accomplishes all of this in one run.
- **Bot-Managed Files**: NEVER manually modify or stage `assets/js/last-commit.json`.
- **Notebooks**: Do NOT execute `.ipynb` files locally; run manually in Google Colab or external runtime.
- **Verification Gate**: Ensure changes adhere to standards checked by `python scripts/verify.py`.
- **Web Standards**: Maintain Vanilla HTML/CSS/JS architecture, high-end aesthetics, semantic markup, and cross-site link/asset integrity across all pages.
