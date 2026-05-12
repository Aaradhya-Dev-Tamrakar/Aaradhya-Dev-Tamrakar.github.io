# Graph Report - .  (2026-05-10)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 15 nodes · 14 edges · 1 communities
- Extraction: 86% EXTRACTED · 14% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f3a1405f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]

## God Nodes (most connected - your core abstractions)
1. `Aaradhya Dev Tamrakar CV` - 14 edges
2. `Fuse AI Fellowship` - 1 edges
3. `IEEE KEC Student Branch` - 1 edges
4. `DataCamp Fellowship` - 1 edges
5. `Edge AI Stability Detection System` - 1 edges
6. `Gesture-Controlled Self-Balancing Robot` - 1 edges
7. `Alpha Android Super-App` - 1 edges
8. `SysOptimizer` - 1 edges
9. `Major Project (Edge AI Platform - HAR)` - 1 edges
10. `Portfolio Website` - 1 edges

## Surprising Connections (you probably didn't know these)
- `Graphify Agent` --conceptually_related_to--> `Aaradhya Dev Tamrakar CV`  [INFERRED]
  AGENTS.md → AARADHYA_DEV_TAMRAKAR_CV.pdf
- `Aaradhya Dev Tamrakar CV` --conceptually_related_to--> `Profile Photo`  [INFERRED]
  AARADHYA_DEV_TAMRAKAR_CV.pdf → AaradhyaDTmr.github.io/photo.jpg
- `Aaradhya Dev Tamrakar CV` --references--> `Fuse AI Fellowship`  [EXTRACTED]
  AARADHYA_DEV_TAMRAKAR_CV.pdf → AARADHYA_MASTER_v42.md
- `Aaradhya Dev Tamrakar CV` --references--> `IEEE KEC Student Branch`  [EXTRACTED]
  AARADHYA_DEV_TAMRAKAR_CV.pdf → AARADHYA_MASTER_v42.md
- `Aaradhya Dev Tamrakar CV` --references--> `DataCamp Fellowship`  [EXTRACTED]
  AARADHYA_DEV_TAMRAKAR_CV.pdf → AARADHYA_MASTER_v42.md

## Communities (1 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (15): Aaradhya Dev Tamrakar CV, Alpha Android Super-App, DataCamp Fellowship, Edge AI Stability Detection System, Fuse AI Fellowship, Gesture-Controlled Self-Balancing Robot, IEEE KEC Student Branch, Major Project (Edge AI Platform - HAR) (+7 more)

## Knowledge Gaps
- **14 isolated node(s):** `Fuse AI Fellowship`, `IEEE KEC Student Branch`, `DataCamp Fellowship`, `Edge AI Stability Detection System`, `Gesture-Controlled Self-Balancing Robot` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 2 inferred relationships involving `Aaradhya Dev Tamrakar CV` (e.g. with `Graphify Agent` and `Profile Photo`) actually correct?**
  _`Aaradhya Dev Tamrakar CV` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Fuse AI Fellowship`, `IEEE KEC Student Branch`, `DataCamp Fellowship` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._