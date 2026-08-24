# Handoff — Digital NAP

Paste everything below into a new session.

---

We're continuing work on BZE's National Action Plan prototype. Read
`CLAUDE.md` in the repo before touching anything — it has the file map, house
rules and the review workflow.

## Where the work is

The repo is on my Windows machine at `C:\Users\tejes\digitalNAP`, and it's
connected to the session, so you can read and write it. Through `device_bash`
it's mounted at `$HOME/mnt/digitalNAP`. This is a fresh private repo
(`github.com/tejeshkashyap-bze/DigitalNAP`), copied out of the older public
`National-Action-Plan` fork with a single initial commit — no history carried
across. Work on `main` until I say otherwise.

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

## What's been done

The site was a five-column wall of 50 indicators at 13px with no visible
scores. Three design concepts were built in `scratch/`; I picked the "Report"
direction (`scratch/nap-concept-a-report.html`) and it's now ported into the
real pages:

- `styles.css` is the whole design system — tokens, shell, accordion, drawer,
  score ramp. Legacy class names were kept and restyled so nothing broke.
- Three new files: `nap.js` (renders the persistent header and breadcrumbs at
  run time — there's no build step), `regions.js` (the 16 regions in one
  place, replacing three duplicated copies), `indicator-drawer.js`.
- `city.html` is a region page: theme averages, indicators in an accordion,
  and a drawer showing the grading scale plus the signed-off evidence.
- `index.html` is an overview with coverage strips per region; `CSC.html` is
  the criteria library; `map.html` renders its pins from `regions.js`.
- A review round has since been actioned: mean removed from map pins,
  "Scored only" as the default filter, the BZE briefing-sheet colour ramp
  replacing the blue one (with 1 and 2 swapped), and `region-overview.js`
  adding editorial region copy with a drop-in photo slot at
  `regions/<key>.jpg`.

Data as at August 2026: 50 indicators, 4 assessed regions of 16 — Port Hedland
24/50 and Kwinana 24/50 (both August 2026), Gladstone 20/50 (September 2025),
Hunter Valley 19/50 (April 2025). 87 scores in total. Every scored indicator
has matching evidence, every evidence score agrees with `scores.js`, and there
are no orphan indicator ids.

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

## How to check your work

There's no build step and no test suite, so verify in a browser:

```
npm run dev        → http://localhost:5173
```

Press `r` to review — click any element, type what should change, and it lands
in `review/comments.json` for you to action.

If you have Playwright in the cloud container, serve the files there with
`node review/server.mjs --no-review --port 5199` and walk every page checking
for console errors and 4xx. Two known-good exceptions: each region page fires
two 404s probing for `regions/<key>.jpg` then `.png` (that's the photo slot),
and `editor.html`'s Quill CDN is unreachable from the container.

## How I work

I'm not a developer. Explain what changed and why in plain terms, and tell me
when something needs my judgement rather than guessing. Australian English.
Assessment prose is measured and evidence-led, never promotional.
