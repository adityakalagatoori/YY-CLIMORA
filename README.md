# CLIMORA
### Climate-aware Load Intelligence & Moisture Optimization for Resource-efficient Air-conditioning

Yuva Yodha Tech Hackathon 2026 — Smart Buildings Track

---

## What this repo contains

| Path | Contents |
|---|---|
| `report/main.tex` | Full LaTeX technical report (problem, architecture, control logic, hardware/BOM, economics, sustainability, validation gaps, roadmap) |
| `report/references.bib` | Bibliography for all cited sources |
| `.github/workflows/build-report.yml` | GitHub Action that auto-compiles the report to PDF on every push |

The compiled PDF is produced automatically by CI — check the **Actions** tab after pushing, or download it from the workflow run's **Artifacts** section. No local LaTeX installation is required to get a PDF; it's only needed if you want to compile locally.

## Building locally (optional)

```bash
cd report
pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex
```

Or open `report/main.tex` directly in [Overleaf](https://overleaf.com) — no local setup needed.

## One-line summary

CLIMORA is a low-cost retrofit controller that captures AC condensate and uses it for adiabatic condenser pre-cooling — but only when real-time climate, electrical-load, water-availability, and thermal-response conditions indicate a genuine benefit. The physical mechanism is literature-demonstrated; CLIMORA's contribution is the demand-matched decision layer that determines when reusing the available water is actually worthwhile, while treating occupant comfort and system safety as hard constraints.

## Team

- Vaishnav Aditya K — Systems Lead
- Balachandar A — Software Lead
- Shyaam Ganesh — Data & Analytics Lead
- Srushti D — Product & Deployment Lead
