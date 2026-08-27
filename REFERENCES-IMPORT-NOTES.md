# Bringing the report citations into the site — August 2026

The Hunter (May 2025) and Gladstone (September 2025) Regional Readiness Reports
cite their sources with numbered endnotes: 101 in the Hunter, 169 in Gladstone.
Those citations had not been carried into the site — the house convention
stripped them when the evidence text was written up.

This round put them back, in two halves. A `<sup class="refMark">n</sup>` marker
now sits in the evidence prose wherever the report placed a citation, and
`references-hunter-valley.js` / `references-gladstone.js` hold the matching
source list, one per indicator. `CLAUDE.md` describes the shape.

**No assessment prose was rewritten.** Strip the markers from either evidence
file and it is byte-for-byte the file that was signed off.

## What landed

| | Hunter Valley | Gladstone |
| --- | --- | --- |
| Indicators | 19 | 20 |
| Markers in the evidence text | 95 | 114 |
| Source entries | 99 | 136 |
| Report citations with no home | 0 | 18 |

Numbering restarts at 1 for each indicator, in the order a reader meets the
markers. Where the report cites the same source twice in one indicator, both
markers carry the same number. The report's own number is kept in the data
(`report:`) so any entry can be traced back to the PDF.

## Sources that could not be placed

These are cited in the report but sit on sentences the published evidence text
does not carry — usually a closing recommendation paragraph, a pull-quote, a
figure caption, or a "Key findings" block that was never part of the indicator
write-up. They are recorded here rather than being given an invented home. All
are Gladstone.

- **Transmission network** — 40 *Powerlink 2024 Transmission Annual Planning
  Report* and 51 *Queensland Energy Roadmap 2025*, on the paragraph about
  Powerlink as REZ delivery body and the 12 undeclared REZ sites.
- **Distribution network** — 52 *Ergon Strategic Forecasting Annual Report
  2024*, 61 *Ergon Distribution Annual Planning Report 2024* and 66 *AEMO
  Electricity Forecasting Data Portal*, on the paragraph benchmarking Ergon's
  forecasts against AEMO's scenarios.
- **Hydrogen network** — 88, 89, 90, 91, 92, 19 and 93, the whole export
  paragraph (Japan and Korea demand, marine fuels, hydrogen as a reductant for
  green iron).
- **Industry decarbonisation plans** — 107, on the Rio Tinto pull-quote; 48 and
  108, in the Key findings block.
- **State approvals** — 67, 143 and 47, on the paragraph about pumped hydro as
  Coordinated Projects and the Priority Transmission Investment framework.

Either the evidence text is missing material the report carries, or the report
cites more than the assessment relies on. That is a content call for the team,
not something to resolve in the data.

## Things noticed in the reports along the way

Recorded, not fixed — the published evidence text is signed off.

- Hunter 1.1.5 grading scale reads "in placer" where the evidence text reads
  "in place".
- Hunter 4.1.1 has a short paragraph on the Future Gas Strategy that repeats
  the paragraph before it. It is not in the evidence text.
- Hunter 4.2.4: "deployment of clean technologies deployment and drive
  emissions reduction" — a duplicated word, in both the report and the evidence.
- Hunter 2.1.1: the Tomago bullet opens a bracket it never closes, in both.
- Gladstone 3.2.2 spells it "Powerink Transmission Training Hub"; the evidence
  text says Powerlink, which matches every other mention.
- Gladstone 3.2.1 carries stray text ("Net Zero Net However") and an unclosed
  bracket around the national 43% target. The evidence text already cleaned
  both up.
- Gladstone 3.2.6 uses the US spelling "favoring", in both the report and the
  evidence text.
- Gladstone 2.1.1 attaches four citations to cells of Table 5, so those markers
  render inside the table paragraph rather than in body prose.
- Gladstone 3.2.2 jumps from citation 132 to 134 in the body — 133 is used in
  3.2.1 only.
- Ten reference entries have no URL in the printed list (conference talks,
  unpublished work, a journal article). They render as plain text.
