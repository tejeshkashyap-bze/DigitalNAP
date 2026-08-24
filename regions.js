// regions.js — the 16 industrial regions, in one place.
//
// Before this file the region list existed three times: CITY_LABELS in
// city.html, the hard-coded <a class="cityLabel"> pins in map.html, and
// again in the editor. Three copies meant a renamed region was renamed
// twice and wrong once.
//
//   key   — the ?city= URL parameter, and the key used by scores.js
//           and the evidence-<key>.js filename
//   name  — display name (note port-kembla displays as "Illawarra")
//   state — shown as a small label on cards
//   x, y  — position of the pin on BZE REIP Map.png, in per cent of the
//           image box. Adjust these if a pin sits slightly off.
//
//           Karratha, Geelong and Portland are nudged a little away from
//           true position so their labels clear the neighbouring pin.
//           Karratha vs Port Hedland is the tight one.
//
// Assessment status is never recorded here — it is derived from
// scores.js, so a region becomes "assessed" the moment it has scores.

const REGIONS = [
  { key: "karratha",       name: "Karratha",       state: "WA",  x: 21,   y: 26 },
  { key: "port-hedland",   name: "Port Hedland",   state: "WA",  x: 32,   y: 30 },
  { key: "geraldton",      name: "Geraldton",      state: "WA",  x: 20,   y: 47 },
  { key: "kwinana",        name: "Kwinana",        state: "WA",  x: 21,   y: 54 },
  { key: "collie",         name: "Collie",         state: "WA",  x: 23.5, y: 59 },
  { key: "darwin",         name: "Darwin",         state: "NT",  x: 47,   y: 18 },
  { key: "mt-isa",         name: "Mt Isa",         state: "QLD", x: 56,   y: 33 },
  { key: "townsville",     name: "Townsville",     state: "QLD", x: 69,   y: 30 },
  { key: "gladstone",      name: "Gladstone",      state: "QLD", x: 73,   y: 40 },
  { key: "hunter-valley",  name: "Hunter Valley",  state: "NSW", x: 78,   y: 54 },
  { key: "port-kembla",    name: "Illawarra",      state: "NSW", x: 77.5, y: 59 },
  { key: "whyalla",        name: "Whyalla",        state: "SA",  x: 52,   y: 59 },
  { key: "geelong",        name: "Geelong",        state: "VIC", x: 59,   y: 63.5 },
  { key: "latrobe-valley", name: "Latrobe Valley", state: "VIC", x: 69,   y: 68 },
  { key: "portland",       name: "Portland",       state: "VIC", x: 55,   y: 70 },
  { key: "bell-bay",       name: "Bell Bay",       state: "TAS", x: 66,   y: 77 },
];

function regionByKey(key) {
  return REGIONS.find(r => r.key === key) || null;
}

function regionName(key) {
  const r = regionByKey(key);
  return r ? r.name : "Selected region";
}
