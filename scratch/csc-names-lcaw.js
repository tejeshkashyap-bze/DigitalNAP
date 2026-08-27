// csc-names-lcaw.js — helpers shared by the three horizontal Criteria
// concepts from the August 2026 round.
//
// SCRATCH ONLY.
//
// The seven shortened indicator names from "Shortened LCAW CSC (1)" have
// since been folded into data.js, and concept 1 was ported to CSC.html, so
// LCAW_TITLES below is now a no-op. It is kept — empty of surprises, since
// every entry matches data.js — only so concepts 2 and 3 still run
// unchanged. Delete this file when those two concepts go.

const LCAW_TITLES = {
  "renewable-energy-generation": "Renewable generation",   // was "Renewables"
  "water-and-wastewater":        "Water and wastewater",   // was "Water & Wastewater"
  "industry-decarbonisation-plans": "Decarbonisation plans", // was "Decarb plans"
  "existing-workforce-capacity": "Existing workforce capacity", // was "Existing capacity"
  "coordinated-infrastructure-plan": "Common user infrastructure", // was "Common user infra"
  "lga-decarbonisation-plans":   "LGA decarbonisation plans", // was "LGA decarb plans"
  // The diagram title-cases this one ("Agency Representation"); the site is
  // sentence case throughout, so the sentence-case form is kept here.
  "agency-representation":       "Agency representation",
};

// Title for an indicator, preferring the LCAW naming.
function lcawTitle(item) {
  return LCAW_TITLES[item.id] || item.title;
}

// Does this indicator have a published methodology? learn-data.js holds a
// key per indicator and sets it to null when there is nothing to publish
// yet, so a truthy entry is the test the indicator pages already use.
function hasMethod(id) {
  return typeof LEARN_DATA !== "undefined" && !!LEARN_DATA[id];
}

// One line-drawn glyph per theme, echoing the report diagram. The ported
// version of these lives in indicator-icons.js as themeIcon().
const THEME_GLYPHS = {
  // Transmission pylon.
  "enabling-infrastructure":
    '<path d="M12 3v18M5.5 21 12 3l6.5 18M8 10h8M6.7 15h10.6M9.4 6.5h5.2"/>',
  // Plant with a stack.
  "industry-capability-capacity":
    '<path d="M3 20.5h18M4.5 20.5v-9l4.6 2.7v-2.7l4.6 2.7V7.5h3.4v13"/><circle cx="9" cy="17.5" r="1.5"/>',
  // Parliament — columns, roof, flagpole.
  "policy-governance":
    '<path d="M2.5 20.5h19M4.5 20.5v-8M8.2 20.5v-8M12 20.5v-8M15.8 20.5v-8M19.5 20.5v-8M2.5 12.5h19L12 6.5 2.5 12.5M12 6.5V3.5"/>',
  // Three people.
  "social-acceptance":
    '<circle cx="8" cy="9" r="2.4"/><circle cx="16" cy="9" r="2.4"/><path d="M3.5 19c0-2.6 2-4.4 4.5-4.4S12.5 16.4 12.5 19M11.5 19c0-2.6 2-4.4 4.5-4.4S20.5 16.4 20.5 19"/>',
  // Investment growing against a trend line.
  "financing-transition":
    '<path d="M3.5 20.5h17M7 20.5v-4.5m4.5 4.5v-8m4.5 8v-11"/><path d="M4.5 11 9 6.5l3.5 2.5L20 3"/><path d="M15.6 3h4.4v4.4"/>',
};

function themeGlyph(pillarId) {
  const d = THEME_GLYPHS[pillarId];
  if (!d) return "";
  return '<svg class="tGlyph" viewBox="0 0 24 24" aria-hidden="true" fill="none" ' +
    'stroke="currentColor" stroke-width="1.4" stroke-linecap="round" ' +
    'stroke-linejoin="round">' + d + "</svg>";
}
