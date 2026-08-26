# Region photos

Drop a photo in here named after the region's `key` in `regions.js` and it
appears in that region's page hero automatically. No code change needed.

    regions/hunter-valley.jpg
    regions/gladstone.jpg
    regions/kwinana.jpg
    regions/port-hedland.jpg

`.jpg` is tried first, then `.png`. If neither exists the figure stays hidden
and the overview text takes the full width, so a region without a photo looks
deliberate rather than broken.

Notes:

- The image is cropped to 4:3 and covers its box, so the centre of the frame is
  what survives. Landscape shots work best.
- Keep files reasonably small — around 200 KB is plenty at the size shown. The
  site has no build step, so nothing is resizing or compressing these for you.
- To caption a photo, add `photoCaption` to that region's entry in
  `region-overview.js`.
- Only the regions with an entry in `region-overview.js` look for a photo. The
  other twelve don't, so adding a file here for an unassessed region does
  nothing yet.

Because the page probes for the file rather than being told about it, a region
without a photo logs a couple of harmless 404s in the browser console. That is
the trade for being able to add photos by dropping in a file.

## The placeholders currently in here

`port-hedland.png`, `kwinana.png`, `gladstone.png` and `hunter-valley.png` are
abstract placeholders, not photographs — flat geometry in the BZE blues, with
"PLACEHOLDER IMAGE" set into the frame so nobody mistakes one for a picture of
the actual region. They exist so the hero layout can be reviewed before the
photography is sorted.

To replace one, drop the real photo in as `<key>.jpg` and delete the `.png`.
The page tries `.jpg` first, so a stray `.png` left behind is harmless, but
removing it keeps the folder honest.

`scratch/make-region-placeholders.py` regenerates them (needs Pillow, which is
a dev-only dependency — the site itself still has none).
