#!/usr/bin/env python3
"""
Regenerate SEARCH_STATIC_INDEX in assets/js/script.js.

Why this exists: buildSearchIndex() in script.js only sees achievements/
projects when the live page has #achievementsList / #projectsGrid in the
DOM — so on every other page, searching for a project or achievement
returned nothing. This script extracts the full index once and embeds it
in script.js so every page ships the complete dataset. The live DOM scan
in buildSearchIndex() still runs on top and overrides matching entries,
so same-session edits to achievements.html/projects.html show up
immediately without a re-run of this script.

IMPORTANT: achievements.html contains an inline (non-deferred) script
that re-sorts .achievement-item elements into year-buckets by date
*during HTML parsing* — this runs BEFORE script.js (which is deferred)
even executes. That means the true item order/ids only exist in the
rendered DOM, not in the raw HTML source. This script therefore renders
the page in a real browser (Playwright) and extracts post-render, using
the exact same field logic as buildSearchIndex() in script.js, rather
than parsing the HTML file directly.

projects.html has no such reordering script, but is extracted the same
way for consistency and to auto-detect if that ever changes.

Usage:
    python3 -m http.server 8899 &        # serve the repo root
    python3 extract_index.py             # writes assets/js/script.js in place

Requires: playwright (pip install playwright && playwright install chromium)
"""
import json
import re
import sys
from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:8899"
SCRIPT_PATH = "assets/js/script.js"

EXTRACT_ACHIEVEMENTS_JS = """() => {
    const out = [];
    document.querySelectorAll('#achievementsList .achievement-item').forEach((el, i) => {
        el.id = el.id || `achv-${i}`;
        const org = el.querySelector('.achievement-org')?.textContent.trim() || '';
        const title = el.querySelector('.achievement-title')?.textContent.trim() || '';
        const desc = el.querySelector('.achievement-desc')?.textContent.trim() || '';
        const date = el.querySelector('.achievement-date')?.textContent.trim() || '';
        out.push({
            type: 'achievement',
            title,
            meta: [org, date].filter(Boolean).join(' \\u00b7 '),
            href: `achievements.html#${el.id}`,
            text: [org, title, desc, date].join(' ').toLowerCase(),
        });
    });
    return out;
}"""

EXTRACT_PROJECTS_JS = """() => {
    const out = [];
    document.querySelectorAll('#projectsGrid .project-card').forEach((el, i) => {
        el.id = el.id || `proj-${i}`;
        const title = el.querySelector('.project-title')?.textContent.trim() || '';
        const desc = el.querySelector('.project-desc')?.textContent.trim() || '';
        const status = el.querySelector('.project-status')?.textContent.trim() || '';
        const tags = Array.from(el.querySelectorAll('.tag')).map(t => t.textContent.trim());
        out.push({
            type: 'project',
            title,
            meta: [status, tags.slice(0, 3).join(', ')].filter(Boolean).join(' \\u00b7 '),
            href: `projects.html#${el.id}`,
            text: [title, desc, tags.join(' '), status].join(' ').toLowerCase(),
        });
    });
    return out;
}"""


def collapse_ws(s):
    return re.sub(r'\s+', ' ', s).strip()


def extract():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        page.goto(f"{BASE_URL}/achievements.html")
        page.wait_for_timeout(300)  # let the inline year-sort script finish
        achievements = page.evaluate(EXTRACT_ACHIEVEMENTS_JS)

        page.goto(f"{BASE_URL}/projects.html")
        page.wait_for_timeout(300)
        projects = page.evaluate(EXTRACT_PROJECTS_JS)

        browser.close()

    for item in achievements + projects:
        item['title'] = collapse_ws(item['title'])
        item['meta'] = collapse_ws(item['meta'])
        item['text'] = collapse_ws(item['text'])

    return achievements, projects


def build_block(achievements, projects):
    achievements_js = json.dumps(achievements, ensure_ascii=False, indent=2)
    projects_js = json.dumps(projects, ensure_ascii=False, indent=2)
    return (
        "// Static snapshot of achievements/projects so search is truly global:\n"
        "// every page ships the full index, not just whichever type it happens\n"
        "// to render live in the DOM. Regenerate via extract_index.py after\n"
        "// editing achievements.html or projects.html. buildSearchIndex() below\n"
        "// merges this with a live DOM scan, so on-page edits still show up\n"
        "// immediately in the same session without needing a re-export.\n"
        "const SEARCH_STATIC_INDEX = {\n"
        f"  achievement: {achievements_js},\n"
        f"  project: {projects_js},\n"
        "};\n"
    )


def main():
    achievements, projects = extract()
    print(f"Extracted {len(achievements)} achievements, {len(projects)} projects")

    with open(SCRIPT_PATH, encoding='utf-8') as f:
        content = f.read()

    match = re.search(
        r'// Static snapshot of achievements/projects.*?\nconst SEARCH_STATIC_INDEX = \{.*?\n\};\n',
        content, re.DOTALL,
    )
    if not match:
        print("ERROR: could not find existing SEARCH_STATIC_INDEX block to replace.", file=sys.stderr)
        sys.exit(1)

    new_block = build_block(achievements, projects)
    new_content = content[:match.start()] + new_block + content[match.end():]

    with open(SCRIPT_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Updated {SCRIPT_PATH}")


if __name__ == '__main__':
    main()
