# CV Website

A single-page, responsive CV/resume site built with plain HTML, CSS, and JavaScript — no build step required. Features a light/dark theme toggle (with system-preference detection and persistence) and a "Download PDF" button that uses the browser's print dialog.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure and all content |
| `styles.css` | Styling, theming, responsive + print layout |
| `script.js` | Theme toggle, year stamp, print trigger |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |
| `.github/workflows/pages.yml` | GitHub Actions workflow that deploys to Pages |

## Edit your content

Open `index.html` and replace the placeholder text:

- **Name, title, location, email** — in the header and `.hero` section.
- **Links** — update GitHub, LinkedIn, and `mailto:` URLs (search for `you@example.com` and `your-handle`).
- **Experience** — edit the `<article class="timeline-item">` blocks.
- **Skills** — edit the `<li>` chips inside `.skills-grid`.
- **Projects** — edit the `.project-card` blocks.

## Preview locally

Just open `index.html` in a browser. Or serve it:

```powershell
# From the repo root, with Python installed:
python -m http.server 8000
# then visit http://localhost:8000
```

## Publish with GitHub Pages

This repo deploys automatically via GitHub Actions (`.github/workflows/pages.yml`) on every push to `main`.

1. Push to `main`.
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment**, set **Source: GitHub Actions**.
4. The workflow uploads the repo root and publishes the site.

The site publishes at `https://gilbertpierisrs.github.io/Site/`.
