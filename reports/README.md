# Reports

Weekly reports for the **Columbia Stress Scenario Generator**, formatted for the team site
[`columbiarisk.github.io`](https://columbiarisk.github.io).

## Contents

| File | Purpose |
|---|---|
| `week2_report.md` | Week 2 report in Markdown (read in-repo / GitHub). |
| `week2_report.html` | **Self-contained** styled report with embedded charts — the upload artifact. |
| `generate_week2_report.py` | Reproducible generator: builds the charts + the HTML from validated metrics. |
| `assets/*.png` | Chart images (referenced by the `.md`; embedded as base64 inside the `.html`). |

## Regenerate

```bash
# from the repo root
/usr/local/bin/python3 reports/generate_week2_report.py
```

This rewrites `assets/*.png` and `week2_report.html`. The metrics live at the top of the generator
(sourced from `docs/PROJECT_DOCUMENTATION.md`); update them there and re-run.

## Publish to the website

`week2_report.html` is a single file with all styling and charts inlined (only the web fonts load from a
CDN), so publishing is a copy:

1. Keep `week2_report.html` in the site's `reports/` directory.
2. Add a report card to `weekly-reports.html` (title, date range `June 23 – June 29, 2026`, link).
3. `git add . && git commit -m "Add Week 2 report" && git push origin main` (GitHub Pages auto-deploys).

## Preview locally

```bash
cd reports && python3 -m http.server 8731
# then open http://localhost:8731/week2_report.html
```
