// indicator-drawer.js — the panel that opens when you click an indicator.
//
// Requires regions.js, data.js, scores.js, nap.js. learn-data.js is
// optional: if it is loaded, an unscored indicator can still show its
// grading scale from LEARN_DATA.
//
//   DRAWER.open("energy-storage", "kwinana")
//
// About the grading scale. Every signed-off evidence entry begins with
// a paragraph titled "Indicator grading scale", followed by the
// assessment prose. The drawer separates the two: the scale goes into
// a collapsed block at the top, the prose becomes the evidence body.
// Nothing is rewritten and nothing is dropped — the scale paragraph is
// rendered verbatim, just moved into the slot it belongs in. This was
// checked against all 87 rounds in the four evidence files: in every
// one the scale is paragraph 0 and carries that exact prefix, so the
// split is deterministic rather than a guess.
//
// If a future evidence entry does not follow that shape, its first
// paragraph simply stays in the body where it was written.

const DRAWER = (function () {

  const SCALE_PREFIX = "<strong>Indicator grading scale</strong>";

  const cache = {};   // region key → CITY_EVIDENCE snapshot
  let el = null;      // { scrim, panel, body, kicker, title }
  let lastFocus = null;

  function build() {
    if (el) return el;

    const scrim = document.createElement("div");
    scrim.className = "scrim";
    scrim.addEventListener("click", close);

    const panel = document.createElement("aside");
    panel.className = "drawer";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "drawerTitle");
    panel.innerHTML =
      `<div class="dHead">` +
        `<button class="dClose" type="button" aria-label="Close">×</button>` +
        `<div class="dKicker" id="drawerKicker"></div>` +
        `<h2 class="dTitle" id="drawerTitle"></h2>` +
      `</div>` +
      `<div class="dBody" id="drawerBody"></div>`;

    panel.querySelector(".dClose").addEventListener("click", close);

    document.body.appendChild(scrim);
    document.body.appendChild(panel);

    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && panel.classList.contains("open")) close();
    });

    el = {
      scrim,
      panel,
      body: panel.querySelector("#drawerBody"),
      kicker: panel.querySelector("#drawerKicker"),
      title: panel.querySelector("#drawerTitle"),
    };
    return el;
  }

  // Load evidence-<region>.js once and keep a snapshot, because each
  // file assigns to the same window.CITY_EVIDENCE global.
  function loadEvidence(region, done) {
    if (!region) return done(null);
    if (cache[region]) return done(cache[region]);

    const s = document.createElement("script");
    s.src = `evidence-${region}.js`;
    s.onload = () => {
      cache[region] = window.CITY_EVIDENCE || {};
      done(cache[region]);
    };
    s.onerror = () => { cache[region] = {}; done(cache[region]); };
    document.head.appendChild(s);
  }

  function splitEvidence(round) {
    const paras = (round && round.paragraphs) ? round.paragraphs.slice() : [];
    let scale = null;
    if (paras.length && paras[0].startsWith(SCALE_PREFIX)) {
      scale = paras.shift().slice(SCALE_PREFIX.length);
    }
    return { scale, body: paras };
  }

  // Fallback scale for an indicator with no evidence yet.
  function scaleFromLearnData(id, current) {
    const d = (typeof LEARN_DATA !== "undefined") ? LEARN_DATA[id] : null;
    if (!d || !d.scoringDescriptions) return null;
    return d.scoringDescriptions.map(s => {
      const here = s.score === current;
      return `<div class="scaleRow" data-current="${here}">` +
        NAP.sBox(s.score) +
        `<div><div class="scaleLabel">${NAP.esc(s.label || NAP.word(s.score))}</div>` +
        `<div class="scaleChars">${(s.characteristics || []).map(NAP.esc).join(" · ")}</div></div>` +
        (here ? `<div class="scaleHere">THIS REGION</div>` : "") +
      `</div>`;
    }).join("");
  }

  function fold(label, inner, open) {
    return `<div class="dFold">` +
      `<button class="dFoldBtn" type="button" aria-expanded="${!!open}">` +
        `${NAP.esc(label)}<span class="pCar"></span></button>` +
      `<div class="dFoldBody${open ? " open" : ""}">${inner}</div>` +
    `</div>`;
  }

  function acrossRegions(id, current) {
    const rows = NAP.assessedRegions().map(r => {
      const round = NAP.latestRound(r.key);
      const v = round ? round.scores[id] : undefined;
      const isHere = r.key === current;
      return `<a class="xRow" href="city.html?city=${encodeURIComponent(r.key)}#${encodeURIComponent(id)}">` +
        `<span class="xName"${isHere ? ' style="font-weight:650"' : ""}>${NAP.esc(r.name)}</span>` +
        `<span class="xWord">${typeof v === "number" ? NAP.esc(NAP.word(v)) : "not scored"}</span>` +
        NAP.sBox(v) +
      `</a>`;
    }).join("");
    return rows || `<div class="note">No region has been assessed yet.</div>`;
  }

  function render(id, region, evidence) {
    const item = NAP.itemById(id);
    if (!item) return;

    const round = NAP.latestRound(region);
    const score = round ? round.scores[id] : undefined;
    const rounds = (evidence && evidence[id]) ? evidence[id] : [];
    const latest = rounds[0] || null;
    const { scale, body } = splitEvidence(latest);
    const rName = (typeof regionName === "function") ? regionName(region) : region;

    el.kicker.textContent = `${item.pillarTitle} · ${item.groupTitle}`;
    el.title.textContent = item.title;

    const qp = `id=${encodeURIComponent(id)}&city=${encodeURIComponent(region)}`;

    const parts = [];

    // score
    parts.push(
      `<div class="dScore">` + NAP.sBox(score, "lg") +
      `<div><div class="dScoreWord">${NAP.esc(NAP.word(score))}</div>` +
      `<div class="dScoreMeta">${NAP.esc(rName)}${latest ? " · " + NAP.esc(latest.date)
        : (round ? " · " + NAP.esc(round.date) : "")}</div></div></div>`
    );

    // grading scale
    const learnScale = scaleFromLearnData(id, score);
    if (scale) {
      parts.push(`<div class="dSec">${fold("Indicator grading scale", `<div class="dProse">${scale}</div>`)}</div>`);
    } else if (learnScale) {
      parts.push(`<div class="dSec">${fold("Indicator grading scale", learnScale)}</div>`);
    }

    // evidence
    parts.push(`<div class="dSec"><div class="dSecName">Evidence</div>`);
    if (body.length) {
      parts.push(`<div class="dProse">` +
        body.map(p => p.trim().startsWith("<") ? p : `<p>${p}</p>`).join("") +
      `</div>`);
    } else if (typeof score === "number") {
      parts.push(`<div class="note">This indicator is scored but has no evidence text recorded yet.</div>`);
    } else {
      parts.push(`<div class="note">Not yet assessed in ${NAP.esc(rName)}.</div>`);
    }
    parts.push(`</div>`);

    // earlier rounds
    if (rounds.length > 1) {
      const older = rounds.slice(1).map(r =>
        `<div class="scaleRow">` + NAP.sBox(r.score) +
        `<div><div class="scaleLabel">${NAP.esc(r.date)}</div>` +
        `<div class="scaleChars">${NAP.esc(NAP.word(r.score))}</div></div></div>`
      ).join("");
      parts.push(`<div class="dSec"><div class="dSecName">Earlier rounds</div>${older}</div>`);
    }

    // across regions
    parts.push(`<div class="dSec"><div class="dSecName">This indicator across regions</div>` +
      acrossRegions(id, region) + `</div>`);

    // links out
    parts.push(`<div class="dLinks">` +
      `<a class="btn" href="learn.html?${qp}">Methodology</a>` +
      (rounds.length ? `<a class="btn" href="previous.html?${qp}">Full history</a>` : "") +
    `</div>`);

    el.body.innerHTML = parts.join("");
    el.body.scrollTop = 0;

    el.body.querySelectorAll(".dFoldBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!open));
        btn.nextElementSibling.classList.toggle("open", !open);
      });
    });
  }

  function open(id, region) {
    build();
    lastFocus = document.activeElement;
    el.scrim.classList.add("open");
    el.panel.classList.add("open");
    el.body.innerHTML = `<div class="note">Loading…</div>`;
    el.panel.querySelector(".dClose").focus();
    loadEvidence(region, ev => render(id, region, ev));
  }

  function close() {
    if (!el) return;
    el.scrim.classList.remove("open");
    el.panel.classList.remove("open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  return { open, close };
})();
