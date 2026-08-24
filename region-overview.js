// region-overview.js — the editorial "what is this region" copy shown at the
// top of city.html, above the indicator scores.
//
// This is narrative context, not assessment content. Scores live in scores.js
// and the evidence behind each score lives in evidence-<key>.js; nothing here
// is scored or graded.
//
// Shape per region — every field is optional except `intro`:
//
//   intro     [String]   Opening paragraphs. Rendered in the hero.
//   glance    [{ title, items: [String] }]
//                        Optional "at a glance" fact lists. A region may have
//                        more than one group (Port Hedland has two: the port
//                        and the Eastern Pilbara).
//   sections  [{ title, paragraphs: [String] }]
//                        Longer subheaded prose, rendered in the band below
//                        the hero.
//
// Photos are not listed here. city.html looks for regions/<key>.jpg and then
// regions/<key>.png, and shows the figure only if one of them loads — so a
// photo appears the moment the file is dropped in, with no code change. Set
// `photoCaption` to caption it.
//
// House conventions followed here:
//   - Citations are stripped, as in the evidence entries. The figures come
//     from the regional readiness reports; attribution lives there.
//   - Australian English, and the "%" sign rather than "per cent", to match
//     the evidence files.
//
// Only the four assessed regions have copy. The other twelve fall back to the
// coverage sentence, exactly as before.

const REGION_OVERVIEW = {

  /* ------------------------------------------------------------------ */

  "hunter-valley": {
    intro: [
      "The Hunter hosts the largest coal export terminal in the world and is a "
      + "major industrial hub, which makes it a distinctive testbed for this "
      + "framework. If substantial change can be achieved in the Hunter, those "
      + "lessons can be applied to other regions.",

      "The region is responsible for 11% of Australia's domestic emissions, and "
      + "BZE analysis finds that coal exported from the Port of Newcastle "
      + "generates emissions overseas equivalent to 80% of Australia's total "
      + "domestic emissions.",

      "The Hunter is home to coal-fired power stations, numerous coal mines and "
      + "major industrial sites such as Tomago Aluminium and Orica's Kooragang "
      + "Island operations. It is one of sixteen key industrial regions "
      + "identified as a potential Renewable Energy Industrial Precinct.",
    ],
  },

  /* ------------------------------------------------------------------ */

  "gladstone": {
    intro: [
      "Gladstone is Central Queensland's biggest regional manufacturing and "
      + "industry hub. Manufacturing employs 15% of the region's workforce, "
      + "produces 67% of its exports and generates almost $9 billion annually in "
      + "regional output. Gladstone is the source of over 35% of Australia's "
      + "alumina production, the Boyne Smelter is Australia's second largest "
      + "aluminium production facility, and the region is home to one of "
      + "Australia's largest multi-commodity ports, critical to the movement of "
      + "products for global markets.",

      "Gladstone is also one of Australia's highest-emitting industrial regions, "
      + "making its decarbonisation an urgent priority. Its manufacturing "
      + "emissions are driven by aluminium smelting, alumina refining, cement "
      + "production and chemical manufacturing — all covered under the federal "
      + "Safeguard Mechanism, and together producing 8.1 Mt of emissions "
      + "annually. The region also has significant coal and LNG industries which "
      + "power much of Gladstone and are exported, further increasing global "
      + "emissions. Over 75% of Gladstone's industrial energy use comes from "
      + "fossil fuels, primarily gas and coal.",

      "If Gladstone does not move quickly, it risks losing its pole position as "
      + "an industrial powerhouse. Global markets for aluminium, ammonia, iron "
      + "and other commodities are shifting rapidly to low-emissions supply "
      + "chains, and trade partners are already setting strict carbon standards. "
      + "Inaction means stranded assets, declining exports and thousands of "
      + "local jobs under threat.",

      "That same concentration of heavy-emitting facilities makes Gladstone "
      + "Australia's best opportunity for deep, coordinated decarbonisation "
      + "without de-industrialisation. With investment in electrification, green "
      + "hydrogen and renewable heat, Gladstone can shed its high emissions "
      + "profile and instead secure a competitive edge supplying green "
      + "commodities — green aluminium, green ammonia and green iron — to the "
      + "world. Its proximity to several potential Queensland Renewable Energy "
      + "Zones, together with its port and rail infrastructure and skilled "
      + "workforce, positions it well. Gladstone is one of sixteen key "
      + "industrial regions identified where clusters of manufacturers and "
      + "exporters can benefit from shared access to renewable energy and clean "
      + "hydrogen infrastructure.",
    ],
  },

  /* ------------------------------------------------------------------ */

  "kwinana": {
    intro: [
      "Kwinana is WA's premier industrial precinct, located 30 kilometres south "
      + "of Perth on Cockburn Sound. The region is globally recognised for its "
      + "industrial symbiosis, where the by-product of one facility becomes the "
      + "feedstock of another. Operators include WesCEF's CSBP chemicals and "
      + "fertiliser complex, Tronox's titanium dioxide pigment plant, Cockburn "
      + "Cement, Covalent Lithium's new lithium hydroxide refinery, and major "
      + "fuel and logistics businesses.",
    ],

    glance: [
      {
        title: "Kwinana at a glance",
        items: [
          "$15.7 billion annual output",
          "30,000+ direct and indirect jobs, including 4,800 direct",
          "On Nyoongar country, within the Gnaala Karla Booja native title "
          + "settlement area",
          "Home to Australia's only collective industrial carbon reduction "
          + "program (CRKIA)",
        ],
      },
    ],

    sections: [
      {
        title: "Kwinana's regional readiness assessment",
        paragraphs: [
          "Kwinana currently operates as an integrated ecosystem — both its "
          + "greatest strength and a structural vulnerability. When a major "
          + "player exits, the impact transmits through the cluster rather than "
          + "being absorbed by it. Recent exits make the risk concrete. Alcoa's "
          + "alumina refinery closed permanently in 2025 after sixty years of "
          + "operation. BHP Nickel West is on care and maintenance. Tianqi "
          + "terminated its lithium expansion. BP mothballed its H2Kwinana "
          + "hydrogen hub despite $70 million in Commonwealth co-investment.",

          "The WA Government's Kwinana Strategic Industrial Area, backed by the "
          + "$1 billion Strategic Industries Fund, is positioned to support the "
          + "industries intended to come next: green iron, ammonia and other "
          + "decarbonising industries, headlined by the NeoSmelt electric "
          + "smelting pilot. The state has also named the surrounding Western "
          + "Trade Coast its first State Development Area.",

          "However, while decarbonisation commitments exist across the "
          + "precinct, the transition is at risk of attrition. Energy "
          + "infrastructure is accelerating, but only 205 MW of new SWIS "
          + "renewables has been built since 2021, and just 8% of the renewable "
          + "generation required by 2035 is in construction or operation.",

          "Ambition among operators is uneven: Tronox is 1.5°C-aligned, others "
          + "have yet to publish credible pathways, and CRKIA — the precinct's "
          + "natural coordination vehicle — has stalled. WA remains without an "
          + "enforceable interim emissions framework, Kwinana has no workforce "
          + "transition plan for its existing industries, and the Wheatbelt and "
          + "Mid-West communities building Kwinana's and the broader SWIS "
          + "renewable supply are not yet sharing evenly in the benefits.",
        ],
      },
      {
        title: "The bottom line",
        paragraphs: [
          "Kwinana has the foundations of a powerful renewable energy "
          + "industrial precinct: an established industrial base, spare "
          + "transmission import capacity and proximity to WA's renewable "
          + "resources. But coordination gaps in system planning, the renewable "
          + "pipeline and construction delivery persist, with the industrial "
          + "base contracting faster than clean projects are arriving. "
          + "Accelerated Clean Energy Link delivery and precinct-wide "
          + "coordination, alongside legislated state climate targets, can close "
          + "that gap. Done well, Kwinana has a strong economic future, shifting "
          + "from a fossil fuel hub exposed to closures towards green metals, "
          + "clean chemicals and refined critical minerals.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */

  "port-hedland": {
    intro: [
      "Port Hedland, the world's largest bulk export port, ships predominantly "
      + "iron ore worth about $100 billion annually — roughly 4% of Australia's "
      + "economy. This assessment also covers the Eastern Pilbara's upstream "
      + "mines feeding Port Hedland's exports.",
    ],

    glance: [
      {
        title: "Port Hedland at a glance",
        items: [
          "Salt (Rio Tinto's Dampier Salt), port export facilities, and green "
          + "iron and green hydrogen under development at the Boodarie "
          + "Strategic Industrial Area",
          "~17,000 residents and 11,000 jobs",
          "$11.4 billion gross regional product",
          "A rugged, iron-red landscape around a natural deep-water harbour and "
          + "tidal creeks",
          "Home to Kariyarra, Ngarla and Nyamal people",
        ],
      },
      {
        title: "The Eastern Pilbara at a glance",
        items: [
          "Iron ore mining (Fortescue, BHP, Hancock Iron Ore), plus lithium "
          + "(PLS's Pilgangoora, Mineral Resources' Wodgina)",
          "~11,000 residents and 14,000 mining jobs",
          "$100 billion combined annual output",
          "Home to the Kariyarra, Ngarla, Nyamal, Nyiyaparli, Banjima, Puutu "
          + "Kunti Kurrama and Pinikura, Martu, Palyku and Eastern Guruma "
          + "peoples, whose country spans the port at Port Hedland and the "
          + "inland ranges and desert, alongside Nyangumarta country to the "
          + "north and Yindjibarndi country to the west",
        ],
      },
    ],

    sections: [
      {
        title: "Port Hedland and the Eastern Pilbara's regional readiness assessment",
        paragraphs: [
          "Economists project that Pilbara iron ore could underpin $386 billion "
          + "a year in green iron exports by 2060 — triple Australia's current "
          + "iron export value — if affordable renewable energy is available for "
          + "Pilbara processing. The region is transitioning into a green "
          + "energy, green iron and critical minerals corridor: POSCO, Element "
          + "Zero and Fortescue are already piloting green iron. Land is "
          + "allocated at the WA Government's Boodarie Strategic Industrial Area "
          + "for this downstream processing, though its anchor power supply "
          + "remains gas-dominant, with solar and batteries in support. The PET "
          + "plan aims to build common-use electricity corridors to boost "
          + "interconnection, renewable generation and investment.",

          "Fortescue (“real zero” by 2030) and Rio Tinto's Dampier Salt are "
          + "1.5°C-aligned. BHP and PLS risk stalling despite power purchase "
          + "agreement progress and commitments, with heavy mining equipment — a "
          + "large portion of Pilbara mining emissions — still largely "
          + "fossil-fuelled. Fortescue's electrified haul trucks, coming online "
          + "in 2026/27, could open a pathway; Hancock Iron Ore and Mineral "
          + "Resources at Wodgina are committed to net zero by 2050 but have "
          + "shared little detail on planned pathways. The diesel Fuel Tax "
          + "Credit is reducing collective industry ambition for "
          + "renewable-powered operations by keeping diesel cheaper than it "
          + "should be.",

          "Coordination gaps persist: only 9% of 2035 NWIS/Pilbara renewable "
          + "generation, and 2% of storage, is under construction, with "
          + "Fortescue responsible for over 80% of that. The PET's priority "
          + "transmission corridors — the Hamersley Range and the Great Sandy "
          + "Desert — aim to address this fragmentation, but routing, capacity "
          + "and timelines remain unconfirmed and need far greater transparency "
          + "and momentum.",

          "Good practice looks different in this remote region, with its large "
          + "First Nations population and heavy reliance on a fly-in-fly-out "
          + "workforce. There is no Collie-style transition plan or SWIS-style "
          + "community benefits framework. There are, however, important "
          + "nascent initiatives benefiting local communities, including the "
          + "Seven Cities housing initiative, the Clean Energy Training and "
          + "Research Institute, and APA's Newman Renewable Energy Hub, "
          + "co-designed with First Nations communities. First Nations social "
          + "acceptance and benefit indicators are still under development "
          + "through BZE's National Action Plan.",
        ],
      },
      {
        title: "The bottom line",
        paragraphs: [
          "Delivering the PET plan and stronger guardrails — legislated state "
          + "emissions and renewable energy targets, a reduced diesel Fuel Tax "
          + "Credit subsidy, and a stronger Safeguard Mechanism — are needed to "
          + "bring industry on board and unlock the region's green iron "
          + "potential.",
        ],
      },
    ],
  },
};

function regionOverview(key) {
  return REGION_OVERVIEW[key] || null;
}
