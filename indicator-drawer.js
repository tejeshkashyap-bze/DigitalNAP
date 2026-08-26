// indicator-drawer.js — the panel that opens when you click an indicator.
//
// Requires regions.js, data.js, scores.js, nap.js. learn-data.js is
// optional: if it is loaded, an unscored indicator can still show its
// grading scale from LEARN_DATA.
//
//   DRAWER.open("energy-storage", "kwinana")
//
// The body is four tabs — Evidence, Grading scale, How it's assessed,
// Previous rounds — in that order. Evidence is what the reader clicked
// for, so it opens first; the other three are the context behind it.
// The order and the labels come from the standalone concept page in
// scratch/nap-concept-a-report.html.
//
// About the grading scale. Every signed-off evidence entry begins with
// a paragraph titled "Indicator grading scale", followed by the
// assessment prose. The drawer separates the two: the scale becomes the
// "Grading scale" tab, the prose becomes the Evidence tab. Nothing is
// rewritten and nothing is dropped — the scale paragraph is rendered
// verbatim, just moved into the slot it belongs in. This was checked
// against all 87 rounds in the four evidence files: in every one the
// scale is paragraph 0 and carries that exact prefix, so the split is
// deterministic rather than a guess.
//
// If a future evidence entry does not follow that shape, its first
// paragraph simply stays in the body where it was written, and the
// Grading scale tab falls back to the structured scale in learn-data.js.

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

  // ── tabs ──────────────────────────────────────────────────────────────
  // Evidence first: it is what the reader clicked the row for. The other
  // three are the context behind it, in the order the concept page used.
  const TABS = [
    ["evidence", "Evidence"],
    ["scale",    "Grading scale"],
    ["method",   "How it's assessed"],
    ["history",  "Previous rounds"],
  ];

  function tabStrip() {
    return `<div class="tabs" role="tablist">` +
      TABS.map(([key, label], i) =>
        `<button class="tab" type="button" role="tab" data-tab="${key}" ` +
        `id="dTab-${key}" aria-controls="dPane-${key}" ` +
        `aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">` +
        `${NAP.esc(label)}</button>`
      ).join("") +
    `</div>`;
  }

  function pane(key, inner, first) {
    return `<div class="pane" role="tabpanel" id="dPane-${key}" ` +
      `aria-labelledby="dTab-${key}"${first ? "" : " hidden"}>${inner}</div>`;
  }

  function sub(name) { return `<div class="dSecName">${NAP.esc(name)}</div>`; }

  // "How it's assessed" — the methodology held in learn-data.js, trimmed to
  // what reads well in a 520px panel. The weighting table and the full
  // scoring-description table are seven columns wide, so they stay on the
  // methodology page and the tab links out to it.
  function methodPane(id, qp) {
    const d = (typeof LEARN_DATA !== "undefined") ? LEARN_DATA[id] : null;
    if (!d) {
      return `<div class="note">No methodology has been recorded for this ` +
        `indicator yet.</div>`;
    }
    const out = [];
    if (d.purpose) {
      out.push(sub("Purpose"), `<div class="dProse"><p>${d.purpose}</p></div>`);
    }
    if (d.frameworkIntro || (d.frameworkItems || []).length) {
      out.push(sub("Assessment framework"), `<div class="dProse">` +
        (d.frameworkIntro ? `<p>${d.frameworkIntro}</p>` : "") +
        ((d.frameworkItems || []).length
          ? `<ul>${d.frameworkItems.map(f => `<li>${f}</li>`).join("")}</ul>` : "") +
      `</div>`);
    }
    if ((d.dataSources || []).length) {
      out.push(sub("Data sources"), `<div class="dProse"><ul>` +
        d.dataSources.map(x => `<li>${x}</li>`).join("") + `</ul></div>`);
    }
    if ((d.scoringProcess || []).length) {
      out.push(sub("Scoring process"), `<div class="dProse"><ol>` +
        d.scoringProcess.map(x => `<li><strong>${NAP.esc(x.label)}</strong> — ${x.desc}</li>`).join("") +
      `</ol></div>`);
    }
    out.push(`<div class="dLinks"><a class="btn" href="learn.html?${qp}">` +
      `Full methodology, including the weighting table</a></div>`);
    return out.join("");
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

    // score — the tab strip carries the rule under it, so this one is flush
    parts.push(
      `<div class="dScore flush">` + NAP.sBox(score, "lg") +
      `<div><div class="dScoreWord">${NAP.esc(NAP.word(score))}</div>` +
      `<div class="dScoreMeta">${NAP.esc(rName)}${latest ? " · " + NAP.esc(latest.date)
        : (round ? " · " + NAP.esc(round.date) : "")}</div></div></div>`
    );

    parts.push(tabStrip());

    // 1. evidence
    let evidenceInner;
    if (body.length) {
      evidenceInner = `<div class="dProse">` +
        body.map(p => p.trim().startsWith("<") ? p : `<p>${p}</p>`).join("") +
      `</div>`;
    } else if (typeof score === "number") {
      evidenceInner = `<div class="note">This indicator is scored but has no ` +
        `evidence text recorded yet.</div>`;
    } else {
      evidenceInner = `<div class="note">Not yet assessed in ${NAP.esc(rName)}.</div>`;
    }
    parts.push(pane("evidence", evidenceInner, true));

    // 2. grading scale — the signed-off wording if there is one, otherwise the
    //    structured scale from learn-data.js with this region's band marked
    const learnScale = scaleFromLearnData(id, score);
    parts.push(pane("scale",
      scale ? `<div class="dProse">${scale}</div>`
        : (learnScale || `<div class="note">No grading scale has been recorded ` +
           `for this indicator yet.</div>`)));

    // 3. how it's assessed
    parts.push(pane("method", methodPane(id, qp)));

    // 4. previous rounds
    let historyInner;
    if (rounds.length > 1) {
      historyInner = rounds.slice(1).map(r =>
        `<div class="scaleRow">` + NAP.sBox(r.score) +
        `<div><div class="scaleLabel">${NAP.esc(r.date)}</div>` +
        `<div class="scaleChars">${NAP.esc(NAP.word(r.score))}</div></div></div>`
      ).join("") +
      `<div class="dLinks"><a class="btn" href="previous.html?${qp}">Full history</a></div>`;
    } else if (rounds.length === 1) {
      historyInner = `<div class="note">${NAP.esc(latest.date)} is the only round ` +
        `recorded for this indicator in ${NAP.esc(rName)}.</div>`;
    } else {
      historyInner = `<div class="note">No rounds recorded for this indicator in ` +
        `${NAP.esc(rName)}.</div>`;
    }
    parts.push(pane("history", historyInner));

    // context that belongs to every tab, so it sits below them
    parts.push(`<div class="dSec"><div class="dSecName">This indicator across regions</div>` +
      acrossRegions(id, region) + `</div>`);

    el.body.innerHTML = parts.join("");
    el.body.scrollTop = 0;

    wireTabs();
  }

  function wireTabs() {
    const tabs = [...el.body.querySelectorAll(".tab")];
    const panes = [...el.body.querySelectorAll(".pane")];

    function show(key) {
      tabs.forEach(t => {
        const on = t.dataset.tab === key;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
      });
      panes.forEach(p => { p.hidden = p.id !== `dPane-${key}`; });
    }

    tabs.forEach((t, i) => {
      t.addEventListener("click", () => show(t.dataset.tab));
      t.addEventListener("keydown", e => {
        const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!step) return;
        e.preventDefault();
        const next = tabs[(i + step + tabs.length) % tabs.length];
        next.focus();
        show(next.dataset.tab);
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
