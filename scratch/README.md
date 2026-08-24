# Scratchpad

`nap-concept-a-report.html` is the winner of the August 2026 round and is kept
as the reference for how the ported design system is meant to look. It is not
a live concept — don't edit it to change the site; edit `styles.css`.

Throwaway design concepts. Served at <http://localhost:5173/scratch/> when the dev
server is running, but **never linked from the site** — the real pages don't
reference anything in here.

## How to use it

1. Ask Claude for concepts: *"give me two scratch concepts for the home page —
   one tighter and more editorial, one card-heavy."*
2. Browse them at `/scratch/`. Tick two and hit **Compare side by side**.
3. Comment on the one you like with the review overlay, same as any page —
   comments get tagged `scratch/…` so it's obvious they're about a concept.
4. When one wins: *"port scratch/<concept>.html into the real pages"*.
5. Delete concepts whenever. Nothing depends on them.

## Writing a concept by hand

A concept is just an HTML file in this folder. Two optional comments feed the
gallery cards:

```html
<!-- concept: warmer palette, single column, bigger type -->
<!-- replaces: index.html -->
```

Concepts normally link `../styles.css` so they inherit the real design system.
A concept that's deliberately exploring a different look can inline its own
`<style>` block instead — that's the point of the scratchpad.

## Deploying

This folder is committed so both of us can see the concepts, but it isn't part
of the site. If you'd rather it never reach the published build, delete
`scratch/` before deploying, or exclude it in whatever publishes the site.
