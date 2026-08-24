# National Action Plan — working notes for Claude

A clickable prototype of BZE's National Action Plan: the regional assessment
criteria, the methodology behind each indicator, and per-region scores.

**Read `review/comments.json` before starting design work.** That file is how the
team hands you work. See *The review loop* below.

## What this repo is

Plain static HTML/CSS/JS. No framework, no bundler, no build step. Pages are
hand-written HTML that pull shared data from top-level JS files and render it
client-side:

| File | Role |
| --- | --- |
| `index.html` | Overview — national coverage, then every region as a card |
| `map.html` | Clickable map; pins are rendered from `regions.js` |
| `city.html` | A region: theme averages, then indicators in an accordion |
| `CSC.html` | Criteria library; can show the mean per indicator across regions |
| `criterion.html`, `learn.html`, `assess*.html`, `previous.html` | Indicator detail pages |
| `contributors.html`, `editor.html` | Contributor list; scoring editor |
| `styles.css` | The whole design system — single stylesheet, tokens at the top |
| `nap.js` | The site shell (header, breadcrumbs) and the shared helpers |
| `indicator-drawer.js` | The panel that opens when an indicator is clicked |
| `regions.js` | The 16 regions — key, display name, state, map position |
| `data.js` | Criteria structure (pillars → groups → items) |
| `scores.js` | Per-region scores, by round |
| `learn-data.js`, `evidence-*.js` | Methodology and evidence content (large) |

The design came from `scratch/nap-concept-a-report.html` and was folded into
`styles.css` in August 2026. That concept file is the reference for how the
system is meant to look.

### House rules

1. **Never add a build step.** No npm dependencies for anything the site needs,
   no framework, no transpiling. `main` is published live by GitHub Pages,
   which serves the committed files as-is — `.nojekyll` at the repo root turns
   Jekyll off and must stay there.
2. **`styles.css` is the design system.** Change the variables and shared
   classes there rather than piling up inline styles or per-page `<style>`
   blocks. Exception: files in `scratch/` may do whatever they like.
3. **Most markup is generated at runtime.** A visual change often lives in a
   template string inside `data.js`, `learn.html` or `CSC.html`, not in static
   HTML. Grep for the class name before assuming.
4. **`review/` and `package.json` are dev-only.** They are not part of the
   deployed site. Never add a `<script src="review/overlay.js">` to a page — the
   dev server injects it into HTML responses at request time, which is what
   keeps it out of production.
5. **The header is rendered, not copied.** There is no templating, so
   `nap.js` builds the persistent header and breadcrumbs at run time. A page
   opts in with `<div id="napCrumbs"></div>` in the markup and a
   `NAP.shell({ page, crumbs })` call once it knows what it is showing.
   Don't paste a copy of the header into a page.
6. **Score vocabulary lives in `nap.js`.** `NAP.WORDS` maps 1–5 to the band
   names. Individual indicators also have their own grading scale — the
   structured one in `learn-data.js` (`scoringDescriptions`) and the
   signed-off one inside each evidence entry. Don't hard-code band names in
   a page.
7. **The score ramp is switchable.** `styles.css` ships a sequential blue
   ramp. Adding `data-ramp="traffic"` to `<html>` restores the earlier
   red/amber/green treatment across the whole site. Both are defined in the
   "Score marks and the colour ramp" section.
8. Australian English in all copy (organise, prioritise, colour).

## The review loop

The team reviews visually in the browser and hands you structured comments.

```
npm run dev        → http://localhost:5173   (zero dependencies, Node 18+)
```

They press `r`, click any element, and type what should change. Each comment is
appended to `review/comments.json`.

**When asked to action comments:**

1. Read `review/comments.json`.
2. Work only on `status: "open"` comments. Group them by `page`, then by the
   file that actually owns the markup.
3. Use `target.selector` plus `target.text` and `target.html` to find the source.
   Remember rule 3 above — the selector describes the *rendered* DOM.
4. `target.styleHints` records the computed styles at review time (font-size,
   colour, padding, radius…), which tells you what the reviewer was reacting to.
5. Make the changes. Prefer editing `styles.css` variables and shared classes
   over one-off overrides.
6. Set each handled comment's `status` to `"done"` in `review/comments.json`
   (leave everything else in the entry untouched). Open browser tabs pick the
   change up automatically. Don't clear or archive the file — the **Clear**
   button in the overlay is the reviewer's call.
7. Summarise what changed per comment number, and flag anything you chose not to
   do and why.

Don't clear or archive `comments.json` — the **Clear** button in the overlay is
the reviewer's call, and it's how they mark a round finished.

### Publishing

`main` is live at <https://tejeshkashyap-bze.github.io/National-Action-Plan/>,
so anything merged there is public immediately. Work on a branch named for the
round rather than committing design changes straight to `main`, and let the user
decide when to merge. The repo is public: treat `review/`, `scratch/` and
`PORT-HEDLAND-DRAFT-ISSUES.md` as published even though nothing links to them.

### Comment shape

```json
{
  "id": "cmszsn3x41",
  "seq": 1,
  "createdAt": "2026-08-19T07:52:19.096Z",
  "status": "open",
  "reviewer": "Tejesh",
  "page": "index.html",
  "category": "type",
  "priority": "high",
  "comment": "Make these nav pills smaller — 32px is too big.",
  "target": {
    "selector": "a.homeNavCard:nth-of-type(1)",
    "tag": "a",
    "classes": "homeNavCard",
    "text": "Contributors",
    "html": "<a class=\"homeNavCard\" href=\"contributors.html\">Contributors</a>",
    "ancestors": "div.container › div.homeNav",
    "rect": { "x": 60, "y": 355, "w": 375, "h": 122 },
    "styleHints": { "font-size": "32px", "padding": "22px 20px", "…": "…" }
  }
}
```

`id` is the stable key. `seq` is just the display number.

`page` values starting `scratch/` are comments on a throwaway concept, not the
real site — fix them in the concept file, not in the deployed pages.

## The scratchpad

`scratch/` holds throwaway design concepts, browsable at `/scratch/` with a
side-by-side compare view. Nothing on the real site links to it.

Use it whenever a request is exploratory — *"try a different home page"*,
*"what would this look like with more whitespace"*. Build the idea as a new file
in `scratch/` rather than editing `index.html`, so the deployed pages stay
stable until a concept is approved.

- Name files by intent: `home-editorial.html`, `csc-two-column.html`.
- Add the metadata comments so the gallery can describe them:
  `<!-- concept: … -->` and `<!-- replaces: index.html -->`.
- Link `../styles.css` so concepts inherit the design system, then override in a
  page-level `<style>` block. A concept exploring a different look may ignore it.
- Offer two or three genuinely different directions rather than one.
- Only port a concept into the real pages when asked. Porting means folding the
  concept's CSS into `styles.css` properly — not copying a `<style>` block
  across.

## Comments and git

`review/comments.json` is committed, so two reviewers can end up with duplicate
`seq` numbers or a duplicated entry after a merge. Keep both sides when
resolving a conflict in that file, then run:

```
npm run review:normalise
```

which dedupes by `id` and renumbers `seq` chronologically.

Archived batches live in `review/archive/` and are also committed — they're the
record of what each design round asked for. Never edit or delete an archive.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Serve the site with review overlay + live reload |
| `npm start` | Same, and open a browser |
| `npm run dev -- --port 4000` | Use a specific port |
| `npm run dev:noreview` | Serve exactly what deploys — no overlay |
| `npm run review:show` | Print current comments to the terminal |
| `npm run review:normalise` | Dedupe + renumber after a git merge |

## Evidence and the grading scale

Every signed-off entry in an `evidence-<region>.js` file starts with a
paragraph titled **Indicator grading scale**, followed by the assessment
prose. This was true of all 87 rounds across the four regions as at
August 2026.

`indicator-drawer.js` relies on that shape: it lifts the scale paragraph into
a collapsed block at the top of the drawer and renders the rest as the
evidence body. Nothing is rewritten and nothing is dropped — the paragraph is
shown verbatim, just moved into the slot it belongs in. If an entry does not
follow the shape, its first paragraph stays in the body where it was written.

Don't "fix" the duplication by editing evidence text. The scale living in
both `learn-data.js` and the evidence entries is a content question for the
team, not something to resolve in a template.

Full human-facing docs: `review/README.md` and `scratch/README.md`.
