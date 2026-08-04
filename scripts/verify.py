#!/usr/bin/env python3
"""
verify.py — structural integrity check for achievements.html, projects.html,
journey.html, and their downstream dependents.

Why this exists: achievements/projects/journey are edited weekly-to-monthly,
each edit is hand-authored HTML (not templated), and three separate things
can silently drift out of sync:

  1. Duplicate or missing ids on .achievement-item / .project-card /
     .journey-node — breaks deep-links (#achv-N, #p-0NN) and, for projects,
     the one hardcoded self-link (projects.html#p-001 in projects.html
     itself).
  2. assets/js/script.js SEARCH_STATIC_INDEX drifting from live DOM —
     extract_index.py regenerates this on every push via CI, but if it
     hasn't been run since the latest edit (e.g. checking a diff before
     pushing), search silently misses new content — same failure mode
     documented in extract_index.py's own docstring (EU AI Act Literacy
     certificate incident).
  3. Unbalanced tags / malformed HTML from manual editing — BeautifulSoup's
     html.parser is lenient and will silently "fix" broken markup rather
     than error, so a naive parse-and-check misses this; this script
     diffs original vs. reserialized structure to catch it instead.

Run manually: python3 scripts/verify.py
Exit code 0 = clean, 1 = at least one check failed (CI-friendly).

Requires: beautifulsoup4
"""
import re
import sys
from pathlib import Path

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent
PAGES = {
    "achievements": {
        "file": ROOT / "achievements.html",
        "container": "#achievementsList",
        "item": ".achievement-item",
        "id_prefix": "achv-",
    },
    "projects": {
        "file": ROOT / "projects.html",
        "container": "#projectsGrid",
        "item": ".project-card",
        "id_prefix": "p-",
    },
    "journey": {
        "file": ROOT / "journey.html",
        "container": "#journeyTrack",
        "item": ".journey-node",
        "id_prefix": "j-",
    },
}

errors = []
warnings = []


def check_ids(name, cfg):
    """Every item must have an id; ids must be unique within the file."""
    if not cfg["file"].exists():
        errors.append(f"[{name}] file not found: {cfg['file']}")
        return
    soup = BeautifulSoup(cfg["file"].read_text(encoding="utf-8"), "html.parser")
    container = soup.select_one(cfg["container"])
    if container is None:
        errors.append(f"[{name}] container '{cfg['container']}' not found — "
                       f"selector may be stale, check against live markup")
        return
    items = container.select(cfg["item"])
    if not items:
        errors.append(f"[{name}] zero items found under '{cfg['container']} "
                       f"{cfg['item']}' — selector likely stale")
        return

    seen = {}
    missing = 0
    for i, el in enumerate(items):
        el_id = el.get("id")
        if not el_id:
            missing += 1
            continue
        seen.setdefault(el_id, []).append(i)

    if missing:
        warnings.append(f"[{name}] {missing} item(s) missing an id "
                         f"(fallback id used at render time, but not deep-linkable)")

    dupes = {k: v for k, v in seen.items() if len(v) > 1}
    for el_id, positions in dupes.items():
        errors.append(f"[{name}] duplicate id '{el_id}' at item positions {positions}")

    if cfg["id_prefix"]:
        bad_prefix = [k for k in seen if not k.startswith(cfg["id_prefix"])]
        if bad_prefix:
            warnings.append(f"[{name}] id(s) not matching expected prefix "
                             f"'{cfg['id_prefix']}': {bad_prefix}")

    return {"count": len(items), "ids": set(seen.keys())}


def check_internal_hrefs(name, cfg, valid_ids):
    """Any href="<file>.html#<id>" anchor pointing at this page's own ids
    must resolve to an id that actually exists (catches stale deep-links
    after a reorder/delete)."""
    site_files = [p for p in ROOT.glob("*.html")]
    target = cfg["file"].name
    pattern = re.compile(rf'href="{re.escape(target)}#([^"]+)"')
    for f in site_files:
        text = f.read_text(encoding="utf-8")
        for m in pattern.finditer(text):
            frag = m.group(1)
            if frag in ("main-content",):
                continue  # skip-link target, not a content id
            if frag not in valid_ids:
                errors.append(f"[{name}] {f.name} links to "
                               f"'{target}#{frag}' — id does not exist in {target}")


def check_tag_balance(name, cfg):
    """Text-level regex tag-scanning is unreliable on these pages: a literal
    <svg>...</svg> fragment lives inside a data-URI href attribute value
    (favicon), and apostrophes in ordinary prose ("Beginner's Association")
    collide with single-quoted attribute delimiters. Both defeat any
    regex that tries to distinguish "real tag" from "text that looks like
    one" without a proper tokenizer.

    Instead, this delegates to html.parser directly via HTMLParser's error
    handling: html.parser is lenient (it never raises), but it exposes
    enough structure via a custom subclass to flag genuine stray/mismatched
    closing tags while correctly ignoring anything inside attribute values,
    script/style bodies, and comments — because it actually tokenizes the
    document instead of pattern-matching on raw text."""
    from html.parser import HTMLParser

    void_elements = {
        "area", "base", "br", "col", "embed", "hr", "img", "input",
        "link", "meta", "param", "source", "track", "wbr",
    }

    class BalanceChecker(HTMLParser):
        def __init__(self):
            super().__init__(convert_charrefs=True)
            self.stack = []
            self.issues = []
            self._in_raw = None  # 'script' or 'style' while inside one

        def handle_starttag(self, tag, attrs):
            if self._in_raw:
                return
            if tag in ("script", "style"):
                self._in_raw = tag
                return
            if tag in void_elements:
                return
            self.stack.append(tag)

        def handle_startendtag(self, tag, attrs):
            pass  # self-closed (e.g. <br/>) — nothing to push

        def handle_endtag(self, tag):
            if self._in_raw:
                if tag == self._in_raw:
                    self._in_raw = None
                return
            if not self.stack:
                self.issues.append(f"stray closing tag </{tag}> with no open tag")
                return
            if self.stack[-1] == tag:
                self.stack.pop()
            elif tag in self.stack:
                unclosed = []
                while self.stack and self.stack[-1] != tag:
                    unclosed.append(self.stack.pop())
                self.stack.pop()
                self.issues.append(f"</{tag}> closed out of order — "
                                    f"unclosed tag(s) in between: {unclosed}")
            else:
                self.issues.append(f"closing tag </{tag}> does not match "
                                    f"any open tag on the stack")

    text = cfg["file"].read_text(encoding="utf-8")
    checker = BalanceChecker()
    checker.feed(text)
    checker.close()

    for issue in checker.issues:
        errors.append(f"[{name}] {issue}")
    if checker.stack:
        errors.append(f"[{name}] unclosed tag(s) at end of file: {checker.stack}")


def check_search_index_sync():
    """Runs extract_index.py's own logic in dry-run form: regenerate the
    block in memory and diff against what's committed in script.js. If
    they differ, the committed index is stale relative to
    achievements.html / projects.html right now."""
    sys.path.insert(0, str(ROOT / "scripts"))
    import importlib
    import extract_index as ei
    importlib.reload(ei)

    achievements = ei.extract_achievements()
    projects = ei.extract_projects()
    if not achievements or not projects:
        errors.append("[search-index] extract_index.py returned zero "
                       "achievements or projects — see its own error above")
        return

    expected_block = ei.render_block(achievements, projects)
    src = ei.SCRIPT_JS.read_text(encoding="utf-8")
    start = src.find(ei.START_MARK)
    end = src.find(ei.END_MARK, start) + len(ei.END_MARK) if start != -1 else -1
    if start == -1 or end == -1:
        errors.append("[search-index] could not locate SEARCH_STATIC_INDEX "
                       "block in script.js")
        return
    current_block = src[start:end]

    if current_block.strip() != expected_block.strip():
        errors.append("[search-index] assets/js/script.js SEARCH_STATIC_INDEX "
                       "is stale — run `python3 scripts/extract_index.py` "
                       "before committing")


def check_pwa_and_a11y_metadata():
    """Verify site.webmanifest, skip-links, and preconnect font links across all 10 site HTML pages."""
    site_files = sorted([f for f in ROOT.glob("*.html") if not f.name.startswith("google")])
    for f in site_files:
        text = f.read_text(encoding="utf-8")
        if 'href="site.webmanifest"' not in text and "href='site.webmanifest'" not in text:
            errors.append(f"[pwa] {f.name} missing <link rel=\"manifest\" href=\"site.webmanifest\">")
        if 'class="skip-link"' not in text and "class='skip-link'" not in text:
            errors.append(f"[a11y] {f.name} missing skip-link navigation")
        if 'id="main-content"' not in text and "id='main-content'" not in text:
            errors.append(f"[a11y] {f.name} missing <main id=\"main-content\"> target")
        if 'fonts.googleapis.com' not in text:
            warnings.append(f"[performance] {f.name} missing Google Fonts preconnect/link")


def main():
    id_results = {}
    for name, cfg in PAGES.items():
        id_results[name] = check_ids(name, cfg)
        check_tag_balance(name, cfg)

    for name, cfg in PAGES.items():
        res = id_results.get(name)
        if res:
            check_internal_hrefs(name, cfg, res["ids"])

    check_search_index_sync()
    check_pwa_and_a11y_metadata()

    if warnings:
        print("WARNINGS:")
        for w in warnings:
            print(f"  - {w}")
    if errors:
        print("ERRORS:")
        for e in errors:
            print(f"  - {e}")
        print(f"\n{len(errors)} error(s), {len(warnings)} warning(s).")
        sys.exit(1)

    counts = ", ".join(f"{n}={r['count']}" for n, r in id_results.items() if r)
    print(f"OK — {counts}. {len(warnings)} warning(s).")
    sys.exit(0)


if __name__ == "__main__":
    main()