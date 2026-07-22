## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- ALWAYS read graphify-out/GRAPH_REPORT.md before reading any source files, running grep/glob searches, or answering codebase questions. The graph is your primary map of the codebase.
- IF graphify-out/wiki/index.md EXISTS, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over grep — these traverse the graph's EXTRACTED + INFERRED edges instead of scanning files
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

## git-workflow

To prevent merge conflicts on `assets/js/last-commit.json` (which is updated automatically on GitHub by a commit-back bot on every push):
- Always use `.\sync.ps1` (or `.\sync.ps1 -m "message"`) to commit, push, and auto-sync the GitHub Actions bot's stamp commit cleanly.
- `sync.ps1` uses `--autostash` and auto-generates smart commit messages when `-m` is omitted.

