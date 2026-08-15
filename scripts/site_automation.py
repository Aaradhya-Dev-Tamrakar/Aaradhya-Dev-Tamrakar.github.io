#!/usr/bin/env python3
"""
site_automation.py — Hyper-Automation Engine for Aaradhya-Dev-Tamrakar.github.io

Provides automated workflows for:
- Automated site verification & diagnostics (via scripts/verify.py)
- Search index extraction (via scripts/extract_index.py)
- Knowledge Graph maintenance (via graphify update .)
- Programmatic HTML project & achievement updates
- Release tracker & Service Worker cache version syncing
- Structured telemetry & site metadata extraction

Usage:
  python scripts/site_automation.py audit
  python scripts/site_automation.py stats
  python scripts/site_automation.py sync-metadata --version v46
  python scripts/site_automation.py rebuild-index
  python scripts/site_automation.py update-graph
  python scripts/site_automation.py add-project --title "..." --desc "..." --tags "Python,AI"
"""

import argparse
import datetime
import json
import os
import re
import subprocess
import sys
from pathlib import Path

# Paths
ROOT = Path(__file__).resolve().parent.parent
SCRIPTS_DIR = ROOT / "scripts"
VERIFY_PY = SCRIPTS_DIR / "verify.py"
EXTRACT_INDEX_PY = SCRIPTS_DIR / "extract_index.py"
TRACKER_MD = ROOT / "dev-logs" / "PortfolioWebsite_TRACKER.md"
SW_JS = ROOT / "sw.js"
SCRIPT_JS = ROOT / "assets" / "js" / "script.js"
SITEMAP_XML = ROOT / "sitemap.xml"
MANIFEST_JSON = ROOT / "site.webmanifest"
PROJECTS_HTML = ROOT / "projects.html"
ACHIEVEMENTS_HTML = ROOT / "achievements.html"
GRAPH_REPORT = ROOT / "graphify-out" / "GRAPH_REPORT.md"


def run_command(cmd, cwd=ROOT):
    """Executes a subprocess command and returns (returncode, stdout, stderr)."""
    try:
        res = subprocess.run(
            cmd,
            cwd=cwd,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace"
        )
        return res.returncode, res.stdout, res.stderr
    except Exception as e:
        return 1, "", str(e)


def audit(verbose=False):
    """Runs the 17-category verification suite from scripts/verify.py."""
    cmd = [sys.executable, str(VERIFY_PY)]
    if verbose:
        cmd.append("--verbose")
    code, stdout, stderr = run_command(cmd)
    return {
        "status": "clean" if code == 0 else ("warning" if code == 2 else "error"),
        "returncode": code,
        "output": stdout + stderr
    }


def rebuild_search_index():
    """Regenerates search index in assets/js/modules/cmdk.js using extract_index.py."""
    code, stdout, stderr = run_command([sys.executable, str(EXTRACT_INDEX_PY)])
    return {
        "success": code == 0,
        "output": stdout + stderr
    }


def update_knowledge_graph():
    """Updates graphify AST knowledge graph."""
    code, stdout, stderr = run_command(["graphify", "update", "."])
    return {
        "success": code == 0,
        "output": stdout + stderr
    }


def get_site_stats():
    """Collects structured metrics and telemetry across the portfolio site."""
    html_files = list(ROOT.glob("*.html"))
    projects_count = 0
    achievements_count = 0
    
    if PROJECTS_HTML.exists():
        content = PROJECTS_HTML.read_text(encoding="utf-8")
        projects_count = len(re.findall(r'<h3[^>]*class="[^"]*project-title', content)) or len(re.findall(r'<details[^>]*class="[^"]*project-card', content))
        
    if ACHIEVEMENTS_HTML.exists():
        content = ACHIEVEMENTS_HTML.read_text(encoding="utf-8")
        achievements_count = len(re.findall(r'<h3[^>]*class="[^"]*achievement-title', content)) or len(re.findall(r'class="[^"]*achievement-item', content))

    sw_version = "unknown"
    if SW_JS.exists():
        sw_text = SW_JS.read_text(encoding="utf-8")
        match = re.search(r"CACHE_NAME\s*=\s*['\"]([^'\"]+)['\"]", sw_text)
        if match:
            sw_version = match.group(1)

    graph_nodes = 0
    graph_edges = 0
    if GRAPH_REPORT.exists():
        g_text = GRAPH_REPORT.read_text(encoding="utf-8")
        match = re.search(r"(\d+)\s+nodes\s+·\s+(\d+)\s+edges", g_text)
        if match:
            graph_nodes = int(match.group(1))
            graph_edges = int(match.group(2))

    return {
        "timestamp": datetime.datetime.now().isoformat(),
        "total_html_pages": len(html_files),
        "html_pages": [f.name for f in html_files],
        "project_count": projects_count,
        "achievement_count": achievements_count,
        "service_worker_cache": sw_version,
        "graph_nodes": graph_nodes,
        "graph_edges": graph_edges
    }


def sync_metadata(version_tag):
    """Syncs version tag across sw.js, sitemap.xml, and website files."""
    results = []
    
    # 1. Update Service Worker Cache Version
    if SW_JS.exists():
        sw_text = SW_JS.read_text(encoding="utf-8")
        clean_v = version_tag.lower().strip()
        if not clean_v.startswith("v"):
            clean_v = f"v{clean_v}"
        cache_name = f"aaradhya-portfolio-{clean_v}"
        new_sw = re.sub(
            r"(CACHE_NAME\s*=\s*['\"])[^'\"]+(['\"])",
            lambda m: f"{m.group(1)}{cache_name}{m.group(2)}",
            sw_text
        )
        SW_JS.write_text(new_sw, encoding="utf-8")
        results.append(f"Updated sw.js cache name to '{cache_name}'")

    # 2. Update sitemap.xml timestamps
    if SITEMAP_XML.exists():
        today_ymd = datetime.date.today().strftime("%Y-%m-%d")
        site_text = SITEMAP_XML.read_text(encoding="utf-8")
        new_sitemap = re.sub(r"<lastmod>[^<]+</lastmod>", f"<lastmod>{today_ymd}</lastmod>", site_text)
        SITEMAP_XML.write_text(new_sitemap, encoding="utf-8")
        results.append(f"Updated sitemap.xml timestamps to '{today_ymd}'")

    return results


def update_tracker(version, title, highlights):
    """Appends a new version entry to dev-logs/PortfolioWebsite_TRACKER.md."""
    if not TRACKER_MD.exists():
        return {"success": False, "error": "Tracker file not found."}
    
    today = datetime.date.today().strftime("%Y-%m-%d")
    clean_highlights = [h.replace("\r", " ").replace("\n", " ").strip() for h in highlights if h.strip()]
    highlights_md = "\n".join([f"  - {h}" for h in clean_highlights])
    entry = f"- **{version} — {title}.** Shipped {title.lower()}.\n{highlights_md}\n\n"
    
    content = TRACKER_MD.read_text(encoding="utf-8")
    meta_idx = content.find("## Meta")
    if meta_idx != -1:
        header_end = content.find("\n", meta_idx)
        if header_end != -1:
            insert_pos = header_end + 1
            new_content = content[:insert_pos] + entry + content[insert_pos:]
            
            new_content = re.sub(r"# Portfolio Website Tracker — v\d+", f"# Portfolio Website Tracker — {version}", new_content)
            new_content = re.sub(r"## _Last updated: [^_]+_", f"## _Last updated: {today}_", new_content)
            
            TRACKER_MD.write_text(new_content, encoding="utf-8")
            return {"success": True, "entry": entry.strip()}
    return {"success": False, "error": "Failed to locate ## Meta section in tracker."}


def main():
    parser = argparse.ArgumentParser(description="Site Hyper-Automation Engine")
    subparsers = parser.add_subparsers(dest="command")

    subparsers.add_parser("audit", help="Run verification suite")
    subparsers.add_parser("stats", help="Get site statistics and metrics")
    subparsers.add_parser("rebuild-index", help="Extract and regenerate search index")
    subparsers.add_parser("update-graph", help="Update Graphify AST knowledge graph")

    sync_p = subparsers.add_parser("sync-metadata", help="Sync metadata & SW cache version")
    sync_p.add_argument("--version", required=True, help="Version tag (e.g. v46)")

    tracker_p = subparsers.add_parser("update-tracker", help="Add entry to Portfolio Tracker")
    tracker_p.add_argument("--version", required=True, help="Version string (e.g. v46)")
    tracker_p.add_argument("--title", required=True, help="Title of release")
    tracker_p.add_argument("--highlights", nargs="+", required=True, help="List of highlights")

    args = parser.parse_args()

    if args.command == "audit":
        res = audit(verbose=True)
        print(json.dumps(res, indent=2))
    elif args.command == "stats":
        print(json.dumps(get_site_stats(), indent=2))
    elif args.command == "rebuild-index":
        res = rebuild_search_index()
        print(json.dumps(res, indent=2))
    elif args.command == "update-graph":
        res = update_knowledge_graph()
        print(json.dumps(res, indent=2))
    elif args.command == "sync-metadata":
        res = sync_metadata(args.version)
        print(json.dumps(res, indent=2))
    elif args.command == "update-tracker":
        res = update_tracker(args.version, args.title, args.highlights)
        print(json.dumps(res, indent=2))
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
