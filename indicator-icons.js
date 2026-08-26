// indicator-icons.js — one line-drawn glyph per assessed indicator.
//
// Every glyph is a 24×24 stroke drawing using currentColor, so the colour
// comes from the stylesheet rather than from here. They are deliberately
// plain: the badge is an aid to recognition on the indicator page, not
// decoration, and it sits next to a score chip that should stay the
// loudest thing on the page.
//
// Some indicators share a glyph on purpose. "Approvals" is the same
// question whether it is asked of the federal or the state government,
// and the eyebrow above the heading already says which one is being
// assessed — so the pair reads as one question at two levels rather than
// as two unrelated indicators.
//
// An indicator with no entry here gets no badge. That is deliberate: the
// badge marks an indicator BZE has actually assessed somewhere. The 26
// indicators not yet assessed in any region show the call for expertise
// instead (see criterion.html). When a new round scores an indicator for
// the first time, add one line to INDICATOR_ICONS below and it gets a
// badge; until then the page simply renders without one.
//
//   indicatorIcon("energy-storage")   → "<span class=\"iBadge\">…</span>"
//   indicatorIcon("port")             → ""

const INDICATOR_GLYPHS = {

  // ── Enabling infrastructure ──────────────────────────────────────────

  // Wind turbine — renewable generation.
  turbine:
    `<path d="M12 11.4V21"/><path d="M9.8 21h4.4"/>` +
    `<path d="M12 9V2.6"/><path d="M13.1 10.9l5.5 3.2"/><path d="M10.9 10.9l-5.5 3.2"/>` +
    `<circle cx="12" cy="10.2" r="1.2"/>`,

  // Lattice tower with insulators — transmission.
  pylon:
    `<path d="M6.6 21L12 3.4 17.4 21"/>` +
    `<path d="M8.3 15.6h7.4"/><path d="M9.4 11.9h5.2"/><path d="M10.4 8.6h3.2"/>` +
    `<path d="M4 9.4h16"/>` +
    `<path d="M6.6 9.4v2.2"/><path d="M17.4 9.4v2.2"/>`,

  // Pole with a transformer — distribution.
  pole:
    `<path d="M11 3.8V21"/>` +
    `<path d="M5.6 7.4h10.8"/>` +
    `<path d="M7.8 7.4v1.6"/>` +
    `<rect x="13.6" y="11" width="4.4" height="6" rx="1.6"/>` +
    `<path d="M15.8 7.4V11"/>`,

  // Battery and charge mark — storage.
  battery:
    `<rect x="2.5" y="7.5" width="16" height="9.5" rx="2.2"/>` +
    `<path d="M21.5 11v2.5"/>` +
    `<path d="M11.6 9.4L8.6 13.3h2.6l-.6 2.5 3.1-3.6h-2.7z"/>`,

  // Pipeline and valve — the hydrogen network.
  pipeline:
    `<path d="M2.5 11.4h19"/><path d="M2.5 15.8h19"/>` +
    `<path d="M7 10.2v6.8"/><path d="M17 10.2v6.8"/>` +
    `<path d="M12 11.4V7.2"/><path d="M9.4 7.2h5.2"/>`,

  // Droplet with a flow line — water and wastewater.
  droplet:
    `<path d="M12 3.2c3.3 4.1 5.6 6.8 5.6 9.8a5.6 5.6 0 1 1-11.2 0c0-3 2.3-5.7 5.6-9.8z"/>` +
    `<path d="M8.5 13.9c1.2-1.1 2.3-1.1 3.5 0s2.3 1.1 3.5 0"/>`,

  // A house and an apartment block — housing.
  homes:
    `<path d="M2.5 11.6L7.6 7.2l5.1 4.4"/>` +
    `<path d="M4 10.6V20.5h7.2V10.6"/>` +
    `<rect x="13.8" y="8.6" width="7.2" height="11.9" rx="1.2"/>` +
    `<path d="M15.9 11.8h3"/><path d="M15.9 15h3"/>`,

  // ── Industry ─────────────────────────────────────────────────────────

  // Works with falling emissions — industry decarbonisation plans.
  worksDown:
    `<path d="M2.2 20.6v-7.6l4.6 2.8v-2.8l4.6 2.8v7.6z"/>` +
    `<path d="M13.6 20.6V9.8H16v10.8"/>` +
    `<path d="M19.8 7.2v6.6"/><path d="M17.9 11.9l1.9 1.9 1.9-1.9"/>`,

  // ── Policy — one glyph per policy area, used for both levels ──────────

  // Falling emissions against an axis — emissions commitment.
  trendDown:
    `<path d="M4 3.6v16.8h16.4"/>` +
    `<path d="M7 7.8l3.7 3.4 3.3 1.1 3.9 3.5"/>` +
    `<path d="M17.9 15.8l-3.3-.5"/><path d="M17.9 15.8l-.5-3.3"/>`,

  // Mortarboard — skills and training.
  mortarboard:
    `<path d="M2.5 9.2L12 5.2l9.5 4-9.5 4z"/>` +
    `<path d="M6.8 11v4.6c0 1.6 2.3 2.7 5.2 2.7s5.2-1.1 5.2-2.7V11"/>` +
    `<path d="M21.5 9.2v5.1"/>`,

  // Approved document — approvals.
  docTick:
    `<path d="M13.4 3.5H6.5v17h11V7.6z"/>` +
    `<path d="M13.4 3.5v4.1h4.1"/>` +
    `<path d="M9.2 13.6l2.2 2.2 4-4"/>`,

  // Dollar coin — investment framework.
  coin:
    `<circle cx="12" cy="12" r="8.4"/>` +
    `<path d="M12 7.2v9.6"/>` +
    `<path d="M14.4 9.6c-.6-.8-1.5-1.2-2.5-1.2-1.6 0-2.7.9-2.7 2.1s1.1 1.8 2.7 2.1 2.7 1 2.7 2.2-1.1 2.1-2.7 2.1c-1.1 0-2-.4-2.6-1.2"/>`,

  // Flask — research and development.
  flask:
    `<path d="M9.4 3.5h5.2"/>` +
    `<path d="M10.5 3.5v5.3l-4.4 8.6a2 2 0 0 0 1.8 2.9h8.2a2 2 0 0 0 1.8-2.9l-4.4-8.6V3.5"/>` +
    `<path d="M8.1 14.4h7.8"/>`,

  // Clipboard — procurement.
  clipboard:
    `<path d="M9 4.6H6.4v15.9h11.2V4.6H15"/>` +
    `<rect x="9" y="2.9" width="6" height="3.4" rx="1.1"/>` +
    `<path d="M9.4 10.9h5.2"/><path d="M9.4 14.2h5.2"/><path d="M9.4 17.5h3"/>`,

  // Civic building — local government plans.
  civic:
    `<path d="M3 9.6L12 4.4l9 5.2"/>` +
    `<path d="M5.6 9.6v9.2"/><path d="M9.6 9.6v9.2"/>` +
    `<path d="M14.4 9.6v9.2"/><path d="M18.4 9.6v9.2"/>` +
    `<path d="M3 18.8h18"/>`,

  // A leaf inside a marked-out area — land-use planning.
  leafArea:
    `<rect x="2.8" y="2.8" width="18.4" height="18.4" rx="3.4"/>` +
    `<path d="M17.4 6.8c0 5.5-3.4 7.7-6.4 7.7a3.6 3.6 0 0 1-.2-7.2c2.8 0 4.6-.4 6.6-.5z"/>` +
    `<path d="M6.8 17.4c1.4-3.2 3.3-5.3 6.2-6.6"/>`,

  // Three parties sharing — community benefits.
  share:
    `<circle cx="12" cy="5.6" r="2.5"/>` +
    `<circle cx="5.4" cy="17.6" r="2.5"/><circle cx="18.6" cy="17.6" r="2.5"/>` +
    `<path d="M10.8 7.8l-4.2 7.6"/><path d="M13.2 7.8l4.2 7.6"/>` +
    `<path d="M7.9 17.6h8.2"/>`,

  // Consultation — community engagement.
  speech:
    `<path d="M4.2 4.8h15.6a1.7 1.7 0 0 1 1.7 1.7v7.6a1.7 1.7 0 0 1-1.7 1.7h-8.4L6.6 20v-4.2H4.2a1.7 1.7 0 0 1-1.7-1.7V6.5a1.7 1.7 0 0 1 1.7-1.7z"/>` +
    `<circle cx="8.2" cy="10.3" r="1" fill="currentColor" stroke="none"/>` +
    `<circle cx="12" cy="10.3" r="1" fill="currentColor" stroke="none"/>` +
    `<circle cx="15.8" cy="10.3" r="1" fill="currentColor" stroke="none"/>`,
};

// Indicator id → glyph. Ids come from data.js; never invent one.
const INDICATOR_ICONS = {
  // Enabling Infrastructure · Energy System
  "renewable-energy-generation": "turbine",
  "transmission-network":        "pylon",
  "distribution-network":        "pole",
  "energy-storage":              "battery",
  "hydrogen-network":            "pipeline",

  // Enabling Infrastructure · Water System & Waste Management
  "water-and-wastewater":        "droplet",

  // Enabling Infrastructure · Social Infrastructure
  "housing":                     "homes",

  // Industry Capability & Capacity · Industry Decarbonisation
  "industry-decarbonisation-plans": "worksDown",

  // Policy & Governance · Federal Policy
  "federal-emissions-commitment":   "trendDown",
  "federal-skills-training":        "mortarboard",
  "federal-approvals":              "docTick",
  "federal-investment-framework":   "coin",
  "federal-rd":                     "flask",
  "federal-procurement":            "clipboard",

  // Policy & Governance · State Policy — the same six questions
  "state-emissions-commitment":     "trendDown",
  "state-skills-training":          "mortarboard",
  "state-approvals":                "docTick",
  "state-investment-framework":     "coin",
  "state-rd":                       "flask",
  "state-procurement":              "clipboard",

  // Policy & Governance · Local Government Policy
  "lga-decarbonisation-plans":      "civic",

  // Social Acceptance · Community Benefits & Impacts
  "strategic-nature-positive-planning": "leafArea",
  "wider-community-benefit-sharing":    "share",

  // Social Acceptance · Engagement & Participation of Communities
  "effective-community-engagement":     "speech",
};

// The badge markup, or "" for an indicator with no glyph. Decorative:
// the indicator's name is right beside it, so it is hidden from screen
// readers rather than given a label that would only be read twice.
function indicatorIcon(id) {
  const glyph = INDICATOR_GLYPHS[INDICATOR_ICONS[id]];
  if (!glyph) return "";
  return `<span class="iBadge" aria-hidden="true">` +
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ` +
    `stroke-linecap="round" stroke-linejoin="round">${glyph}</svg></span>`;
}
