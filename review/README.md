# Design-review tooling

Click any element on the site, leave a comment, hand the batch to Claude.

**Nothing in here is part of the deployed site** — production stays plain
HTML/CSS/JS. Delete `review/`, `scratch/` and `package.json` and the site is
unchanged.

## Run it

```
npm run dev          # → http://localhost:5173
npm start            # same, and opens a browser
```

No `npm install`, no `node_modules`. The server uses Node built-ins only and
needs Node 18+. That's the whole setup — clone the repo and run it.

| Command | What it does |
| --- | --- |
| `npm run dev` | Serve the site with the review overlay + live reload |
| `npm start` | Same, and open a browser |
| `npm run dev -- --port 4000` | Use a specific port |
| `npm run dev -- --host 0.0.0.0` | Let someone else on your network see it |
| `npm run dev:noreview` | Serve the site exactly as it deploys, no overlay |
| `npm run review:show` | Print current comments in the terminal |
| `npm run review:normalise` | Dedupe + renumber after a git merge |

## Using the overlay

| Action | How |
| --- | --- |
| Toggle pick mode | Click **⌖ Review**, or press `r` |
| Comment on an element | In pick mode, click it → type → **Add comment** (or `Ctrl/⌘+Enter`) |
| Open the comment panel | Click **☰**, or press `c` |
| Find a commented element again | **Show** on the comment, or click its numbered pin |
| Mark handled / delete | **Done** / **Delete** on the comment |
| Filter | **This page / All pages**, and by reviewer once there's more than one |
| Cancel anything | `Esc` |
| Clear the batch | **Clear** → **Archive & clear** |

In pick mode all clicks are intercepted, so links don't navigate — that's how you
can comment on a nav card without leaving the page. Turn pick mode off to browse.

The first comment asks for your name; it's remembered in your browser and stamped
on everything you write, so it's clear whose feedback is whose. Change it any
time via **change** in the panel header.

Each comment records the element's CSS selector, tag, classes, text, an HTML
snippet, its box dimensions and the computed styles that matter for design work
(font-size, colour, padding, radius) — enough for Claude to find the source and
change it without guessing.

## The scratchpad

`/scratch/` is a gallery of throwaway design concepts — ask Claude for two or
three directions, browse them, tick any two and hit **Compare side by side**.
Concepts are ordinary HTML files in `scratch/`, marked with a purple ribbon so
they're never confused with the real site, and nothing on the site links to them.
Comment on them exactly like a real page. See `scratch/README.md`.

## Files

```
review/
  server.mjs      dev server (static + comment API + live reload + scratch gallery)
  overlay.js      the click-to-comment UI, injected into HTML responses
  comments.json   current comments — the file Claude reads
  archive/        previous batches, written by Clear
```

`Clear` writes `archive/comments-YYYY-MM-DD_HH-MM-SS.json` then empties
`comments.json`. Nothing is ever destroyed.

## The loop

**Start the round**

1. GitHub Desktop → switch to `main` → **Pull origin**, so you start from
   whatever your colleague last published.
2. **Branch → New branch**, named for the round (`design-round-2`). `main` is
   the branch GitHub Pages publishes, so working on a branch keeps the live
   site stable while the round is in progress.
3. `npm run dev`, open <http://localhost:5173>.

**Review**

4. Press `r`, click the thing that should change, type what should change,
   `Ctrl/⌘+Enter` to save. Repeat across as many pages as you like.
5. `c` opens the panel to see the batch. Numbered pins mark what you've already
   flagged.

**Get the changes made**

6. Ask Claude to action the review comments. It reads `review/comments.json`,
   makes the changes, and marks each one done — your open tab updates live.
7. Check the result. Reopen anything that isn't right; that's the next round,
   not a failure.

**Publish**

8. Commit and push in GitHub Desktop.
9. Open a pull request and merge it into `main`. GitHub Pages rebuilds within a
   minute or two — watch for the green tick on **Actions → pages build and
   deployment**.
10. Hard-refresh the live site (`Ctrl+Shift+R`). Pages caches aggressively, and
    without a hard refresh you'll see the old version and think the deploy
    failed.

**Close the round**

11. Panel → **Clear** → **Archive & clear**. The batch moves to
    `review/archive/` and `comments.json` empties.
12. Commit that too, so the archive is shared history rather than sitting on one
    person's disk.

**Copy for Claude** copies the whole batch as markdown if you'd rather paste it
into a chat than have Claude read the file.

## The live site

<https://tejeshkashyap-bze.github.io/National-Action-Plan/>

Published by GitHub Pages from the **`main`** branch, root folder. There is no
build step: Pages serves the committed files as they are. `.nojekyll` at the
repo root switches off Jekyll processing, which is what makes that true — remove
it and Pages will try to interpret the site as a Jekyll project.

Two things follow from this:

- **What's in the repo is on the web.** The repo is public, so `review/`,
  `scratch/` and every PDF are fetchable by URL even though nothing links to
  them. `review/comments.json` in particular will hold your review notes.
  Nothing here is linked from the site, but treat it as published.
- **The review overlay cannot reach the live site.** The dev server injects it
  into HTML responses at request time, so the committed HTML never references
  it, and there's no API on Pages for it to save to. If you can see the
  **⌖ Review** button, you're on `localhost`, not the published site.

`npm run dev -- --no-review` serves the site exactly as it deploys — the honest
preview before you publish.

## Working with a colleague

`comments.json` and `archive/` are committed, so review rounds are shared
history. Two people commenting on separate branches can produce duplicate `seq`
numbers or a duplicated entry when those branches merge — the `id` field is the
real key, so when you hit a conflict in `comments.json`, **keep both sides**,
then run:

```
npm run review:normalise
```

It drops exact duplicates and renumbers everything chronologically.

If `comments.json` changes on disk while you have a tab open — a colleague's
`git pull`, or Claude marking things done — the panel refreshes itself. `↻` in
the panel header forces it.

## Reusing this elsewhere

`review/` is repo-agnostic: it serves whatever directory sits above it and reads
the project name from `package.json`. To use it on another static site, copy
`review/` and the `scripts` block from `package.json` across. Nothing in it
knows anything about this site's markup.
