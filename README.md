# Krish Vedak: research website

## Publish on GitHub Pages
1. Create a repo named `your-username.github.io` (or any name).
2. Upload everything in this folder (keep `.nojekyll`).
3. Settings → Pages → Source: *Deploy from a branch* → `main` / root → Save.
4. Visit `https://your-username.github.io` after about a minute.

## Edit content (no code needed)
Everything except articles lives in **`data/content.json`**:
- `intro`, `interests`, `courses`, `projects`, `internships`
- To add an item, copy an existing `{ ... }` block, paste it after a comma, and edit the text.

## Add an article
1. Create `articles/my-topic.md` (plain Markdown; use `$...$` for math, ``` for code).
2. Add an entry to `articles/index.json`:
   `{"slug": "my-topic", "title": "…", "date": "2026-11-02", "summary": "…", "tags": ["…"]}`
   The slug must match the file name.

## Other tweaks
- CV: put your PDF at `assets/cv.pdf`.
- Colours and fonts: variables at the top of `assets/style.css`.
- Preview locally: `python3 -m http.server`, then open http://localhost:8000
- JSON must stay valid: watch commas and double quotes.
