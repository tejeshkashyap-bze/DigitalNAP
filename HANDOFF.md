# Handoff — Digital NAP

Paste everything below into a new session.

---

We're continuing work on BZE's National Action Plan prototype. Read
`CLAUDE.md` in the repo before touching anything — it has the file map, house
rules and the review workflow.

## Where the work is

I work across two Windows machines, so **don't assume the path** — take it
from the session's connected-folder reminder rather than a remembered one.
Desktop is `C:\Users\tejes\digitalNAP`; laptop is `C:\Users\dugal\digitalNAP`.
Through `device_bash` either is mounted at `$HOME/mnt/digitalNAP`, and only the
machine I'm currently on is reachable.

The repo is `github.com/tejeshkashyap-bze/DigitalNAP` — standalone, not a fork,
**private for now** and to be made public later. Work on `main` unless I say
otherwise. Both machines have a clone; if one has been force-pushed over,
resync the other with `git fetch && git reset --hard origin/main` rather than
`git pull`.

Ignore the old `National-Action-Plan` folder and repo. It's the previous home
of the same project and it's public; anything you find there is superseded.

## What you can't do

You can't push. The Linux sandbox behind `device_bash` reaches github.com but
has no credential of any kind, and the cloud container's git proxy refuses to
issue one for this repo. So: commit, then give me a one-line push command to
paste. I have a `nap-commit` skill that covers this — use it when I say
"commit".

If you want push access yourself, ask me to add `tejeshkashyap-bze/DigitalNAP`
to the session's sources — that's the only route that doesn't put a token on
my disk.

**Never run any git command through the mount — reads included.** Plain
`git status` and `git diff` refresh the index and take `.git/index.lock`, and
`device_bash` cannot delete files, so the lock is left behind and my next
`git add` on Windows fails with "Unable to create index.lock: File exists".
This happened on 26 August 2026 and cost a round trip: the repo was fine, but
I had to `Remove-Item .git\index.lock -Force` before the commit would run.
Use `git --no-optional-locks status --short` and `git --no-optional-locks diff`
instead. `git log` is safe as-is.

## What's been done

The site was a five-column wall of 50 indicators at 13px with no visible
scores. Three design concepts were built in `scratch/`; I picked the "Report"
direction (`scratch/nap-concept-a-report.html`) and it's now ported into the
real pages:

- `styles.css` is the whole design system — tokens, shell, accordion, tabs,
  score ramp. Legacy class names were kept and restyled so nothing broke.
- Three new files: `nap.js` (renders the persistent header and breadcrumbs at
  run time — there's no build step), `regions.js` (the 16 regions in one
  place, replacing three duplicated copies), `indicator-drawer.js`.
- `city.html` is a region page: theme averages, indicators in an accordion.
- `index.html` is an overview with coverage strips per region; `CSC.html` is
  the criteria library; `map.html` renders its pins from `regions.js`.
- A review round was actioned: mean removed from map pins, "Scored only" as
  the default filter, the BZE briefing-sheet colour ramp replacing the blue
  one (with 1 and 2 swapped), and `region-overview.js` adding editorial region
  copy with a drop-in photo slot at `regions/<key>.jpg`.

### August 2026, second round

- **The drawer became a page.** Clicking an indicator used to open a side
  panel; it now opens `criterion.html` — one indicator, for one region, with
  the evidence and the context behind it in four tabs: Evidence, Grading
  scale, How it's assessed, Previous rounds. Score, theme, group, round and
  the cross-region comparison sit in an aside. Rows on `city.html` are
  ordinary links, so an indicator can be opened in a new tab or bookmarked,
  and the open tab is carried in the URL hash (`…#method`) so a single tab can
  be linked to. Being full width, the methodology tab shows the weighting and
  scoring-description tables in full, which the 520px drawer could not.
- **`indicator-drawer.js` is dead code.** No page loads it. Left in the tree
  deliberately; see open question 11.
- **`indicator-icons.js` is new** — one line-drawn 24×24 glyph per assessed
  indicator, in `currentColor`, shown in a 56px tile beside the heading. The
  24 scored indicators share 18 glyphs: the federal and state versions of a
  policy question use the same glyph on purpose, since the eyebrow already
  says which level is being assessed. `indicatorIcon(id)` returns the badge or
  `""`, so an indicator with no glyph renders without one rather than
  breaking. A newly scored indicator needs one line adding here.
- **Empty states now ask for help instead of leaking dev instructions.** The
  26 indicators not assessed in any region were rendering four empty tabs, and
  their Criteria pages told the reader to edit `learn-data.js` — a note to
  whoever builds the site, on a repo that will be public. Both now show a call
  for expertise pointing at bze.org.au/about-us/volunteer and
  info@bze.org.au. The wording lives once, in `nap.js`, as
  `NAP.undevelopedCallout()` and `NAP.noMethodCallout()`; `NAP.isIndicatorAssessed()`
  decides which applies. An indicator scored in a newer region but not an
  older one counts as developed, so the older region's page keeps its ordinary
  "not yet assessed here".
- **Review comments 6 and 7 actioned.** "Scored only" is now the first filter
  on a region page and "All" the second. `regions/` holds abstract placeholder
  images for the four assessed regions — flat geometry in the BZE blues with
  "PLACEHOLDER IMAGE" set into the frame, so none can be mistaken for a
  photograph of the region. `scratch/make-region-placeholders.py` regenerates
  them (needs Pillow, dev-only; the site still has no dependencies).

All seven comments in `review/comments.json` are marked `done` and the file is
waiting on my **Clear** in the overlay, which is the reviewer's call.

Data as at August 2026: 50 indicators, 4 assessed regions of 16 — Port Hedland
24/50 and Kwinana 24/50 (both August 2026), Gladstone 20/50 (September 2025),
Hunter Valley 19/50 (April 2025). 87 scores in total. 24 distinct indicators
are scored somewhere; 26 have never been scored, and none of those 26 has a
`learn-data.js` entry either. Every scored indicator has matching evidence,
every evidence score agrees with `scores.js`, and there are no orphan
indicator ids.

## Open questions I still owe answers on

1. **Port Hedland reads as "Assessed · August 2026"** alongside the two
   signed-off rounds, but `PORT-HEDLAND-DRAFT-ISSUES.md` is still open. If
   it's a draft it needs its own state in the UI. Don't invent one — ask me.
2. **`region-overview.js` makes factual claims in BZE's name** — 11% of
   Australia's domestic emissions, the 80% export figure, "largest coal export
   terminal in the world" — with citations stripped per house convention. I
   supplied that text from a report; it hasn't been fact-checked in place.
3. **`NAP Scores - Sheet1.csv`** is stale and contradicts `scores.js` (empty
   Port Hedland and Kwinana columns, 52 rows against the current 50). It
   should be deleted or clearly marked an export before someone reads scores
   off it.
4. **`editor.html` loads Quill from a CDN**, which cuts against the
   no-runtime-dependency rule. Left alone so far.
5. **Abbreviated indicator titles in `data.js`** ("Renewables", "R&D",
   "Decarb plans") were shortened to fit the old five-column grid. The new
   rows are full width, so they could go back to readable names.
6. **GitHub Pages** isn't set up on the new private repo. The end goal is a
   site other people can open. Private repos need a paid plan for Pages, so
   that needs deciding.
7. **Real region photography.** The four images in `regions/` are honest
   placeholders, not photographs. The Gladstone and Hunter Regional Readiness
   Report PDFs in the repo root may hold usable images — that was offered and
   not taken up. Kwinana and Port Hedland would need sourcing either way.
   Dropping a real `<key>.jpg` into `regions/` replaces a placeholder with no
   code change, because `.jpg` is probed before `.png`.
8. **Gladstone's dates disagree.** `scores.js` puts the round at September
   2025; every evidence entry in `evidence-gladstone.js` is dated March 2026.
   One of them is wrong. `criterion.html` deliberately shows the round date in
   the aside and the evidence dates only under Previous rounds, so the two
   never appear side by side — but that hides the problem rather than fixing
   it. This is a content call for me.
9. **The grading scale exists twice** — as signed-off wording in the first
   paragraph of every evidence entry, and as structured rows in
   `learn-data.js` (`scoringDescriptions`). `criterion.html` prefers the
   signed-off wording and falls back to the structured rows. Now that it has a
   whole tab rather than a collapsed strip, which one is canonical needs
   deciding. `CLAUDE.md` already flags this as a team question, not something
   to resolve in a template.
10. **There are two indicator pages.** The Criteria list (`CSC.html`) points at
    `learn.html`; region rows point at `criterion.html`. `criterion.html`
    already handles being opened without a region — it shows the grading scale
    and methodology and prompts for a region — so pointing Criteria at it
    would leave one page instead of two. That also means deciding what becomes
    of `learn.html`, which `editor.html` and the older `assess-*` pages still
    link to. Recommended, not done.
11. **`indicator-drawer.js` is unused.** Kept in the tree so the drawer can be
    put back cheaply if the page turns out to be the wrong call. Delete it once
    I'm happy with the page. `CLAUDE.md` marks it safe to remove.
12. **Three indicators are scored but undocumented.** Housing, Water &
    Wastewater and Community engagement have scores in Port Hedland and
    Kwinana but no `learn-data.js` entry, so their pages say the methodology
    is not yet published and ask for help. Truthful, but it may be that the
    methodology should be written up instead of left as the standing state.
13. **The indicator glyphs haven't been signed off.** If any reads wrongly,
    it's one entry in `indicator-icons.js` to swap. Earlier drafts of the
    turbine and pylon both read as a stick figure with its arms out and were
    redrawn; the rest were checked at both 56px and 22px.
14. **The glyphs could also go on the region-page rows.** They're legible at
    22px. Not done — the badge is only on the indicator page.

## Decisions already taken

- **`review/` and `scratch/` stay tracked until the project is finished.**
  They are stripped out only at the very end, before final publishing. Don't
  untrack or delete them as a tidy-up — `package.json`'s scripts all point at
  `review/server.mjs`, and keeping the folder tracked is what lets the desktop
  and the laptop share the dev server, the overlay and the comments.
- **`scratch/nap-concept-a-report.html` is kept deliberately** as the
  reference for how the ported design system is meant to look. The other four
  concepts were removed once Concept A was chosen.
- Indicator count is **50**, revised down from 52. Note bze.org.au still says
  55 on its public National Action Plan page; the repo is the correct side.
- **The indicator page won over the drawer.** The drawer was built first and
  looked cleaner, but a full page leaves room for the methodology tables and
  gives every indicator a linkable, bookmarkable address.
- **Placeholder images say so on their face.** Nothing generated is passed off
  as a photograph of a real place.

## How to check your work

There's no build step and no test suite, so verify in a browser:

```
npm run dev        → http://localhost:5173
```

Press `r` to review — click any element, type what should change, and it lands
in `review/comments.json` for you to action.

If you have Playwright in the cloud container, stage the site files there,
serve them with `node review/server.mjs --no-review --port 5199` and walk
every page checking for console errors and 4xx. Cover `index.html`,
`map.html`, `CSC.html`, a page per assessed region, an unassessed region, a
region deep link, `criterion.html` in all its states (assessed, scored-but-no-
evidence, undeveloped, no region, bad id), `learn.html` in all three of its
states, `previous.html`, `contributors.html` and `editor.html`. Two
known-good exceptions: each region page fires a 404 probing for
`regions/<key>.jpg` before falling back to `.png` (that's the photo slot), and
`editor.html`'s Quill CDN is unreachable from the container.

## How I work

I'm not a developer. Explain what changed and why in plain terms, and tell me
when something needs my judgement rather than guessing. Australian English.
Assessment prose is measured and evidence-led, never promotional.
