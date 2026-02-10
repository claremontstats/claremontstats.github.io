# 7Cs Statistics Research (Demo)

A simple static site (HTML/CSS/JS) you can drop into a GitHub repo and deploy via **GitHub Pages**.

## Quick start (local)

- Open `index.html` directly in a browser, **or**
- Run a tiny server:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a new repo and add these files.
2. In GitHub: **Settings → Pages**
3. Choose **Deploy from a branch**, select branch `main` and folder `/root`.
4. Save. GitHub will give you a Pages URL.

## Updating the directory

Open `script.js` and edit the arrays:

- `peopleStatisticians`
- `peopleAdjacent`

Each entry supports:
- `name`, `school`, `title`, `email`
- `img` (path under `assets/`)
- `website` (profile page)
- `blurb`
- `keywords` (array)

## Notes

- A few entries have **placeholder avatars** (SVG) and/or a **filler blurb** where the relevant profile page did not provide an obvious headshot or where the research blurb should be refined.
- This is intentionally lightweight (no frameworks, no build step).
