// references-port-hedland.js — Sources behind the Port Hedland assessment.
//
// One list per indicator, taken from the Port Hedland Regional Readiness
// Report. That report cites author-date in the prose and prints its own
// reference list under each indicator, so `report` here is the position in
// that per-indicator list rather than a whole-of-report endnote number.
//
// Entries are numbered from 1 within each indicator, in the order the
// markers appear in the evidence text. criterion.html renders them under
// the assessment on the Evidence tab.
//
// `report: null` marks a source that is NOT in the report's list — added
// during a fact-check because the evidence text now makes a claim the report
// did not source. There is one, on federal-emissions-commitment.
//
// Five federal indicators are deliberately absent — federal-skills-training,
// federal-approvals, federal-investment-framework, federal-rd and
// federal-procurement. Their evidence text is Kwinana's, cloned and never
// localised, so Port Hedland's sources have nothing correct to attach to.
// See REFERENCES-IMPORT-NOTES.md.

window.CITY_REFERENCES = {

  "distribution-network": [
    { n: 1, report: 1, cite: "Government of Western Australia. (2024, April 10). Smart Connect Solar.", url: "https://www.climateaction.wa.gov.au/initiatives/smart-connect-solar" },
    { n: 2, report: 4, cite: "Horizon Power. (2025b, September 9). Annual Report 2025.", url: "https://www.horizonpower.com.au/globalassets/media/documents/annual-reports/20242025/2024-25-annual-report_horizon-power.pdf" },
    { n: 3, report: 2, cite: "Government of Western Australia. (2026, May 21). WA Residential Battery Scheme.", url: "https://www.wa.gov.au/organisation/energy-policy-wa/wa-residential-battery-scheme" },
    { n: 4, report: 3, cite: "Horizon Power. (2025a). Community wave.", url: "https://www.horizonpower.com.au/utilities/campaigns/communitywave/" },
  ],

  "effective-community-engagement": [
    { n: 1, report: 1, cite: "Government of Western Australia. (2026). Pilbara Energy Transition Plan.", url: "https://stateofenergy.wa.gov.au/Projects-and-Initiatives/pilbara-energy-transition-(pet)" },
  ],

  "energy-storage": [
    { n: 1, report: 7, cite: "RenewMap. (2026). [Dataset].", url: "https://renewmap.com.au/" },
    { n: 2, report: 2, cite: "Climate Transition Plan 2025. (2025). Fortescue.", url: "https://content.fortescue.com/fortescue17114-fortescueeb60-productionbbdb-8be5/media/project/fortescueportal/shared/documents/publications/reports/fy25-climate-transition-plan.pdf" },
    { n: 3, report: 4, cite: "Fortescue. (2026). Accelerating Fortescue’s Green Grid.", url: "https://www.fortescue.com/en/accelerating-fortescues-green-grid" },
    { n: 4, report: 9, cite: "Yindjibarndi Energy Corporation. (2026). Yindjibarndi Energy.", url: "https://yindjibarndienergy.com.au/" },
    { n: 5, report: 1, cite: "APA. (2025, December 10). APA and KNAC sign Project Agreement and Indigenous Land Use Agreement for Newman Renewable Energy Hub.", url: "https://www.apa.com.au/news/asx-and-media-releases/apa-and-knac-sign-project-agreement-and-indigenous-land-use-agreement-for-newman-renewable-energy-hub" },
    { n: 6, report: 6, cite: "Port Hedland Iron. (2025). Project Description.", url: "https://phiron.com.au/project-description/" },
    { n: 7, report: 5, cite: "MIDREX. (2024). MIDREX Flex.", url: "https://www.midrex.com/midrex-process/midrex-flex/" },
    { n: 8, report: 8, cite: "Trainor, Dr. G., Belford, N., & Priest, W. (2026, April 14). Building 110 Gigawatts Of Green Hydrogen with Warner Priest [Broadcast].", url: "https://www.wiredforenergy.org/building-110-gigawatts-of-green-hydrogen-with-warner-priest/" },
    { n: 9, report: 3, cite: "Element Zero. (2026). Our Technology.", url: "https://elementzero.green/technology/" },
  ],

  "federal-emissions-commitment": [
    { n: 1, report: 7, cite: "Beyond Zero Emissions. (2025b). Powering Up the Hunter.", url: "https://www.bze.org.au/research/report/powering-up-the-hunter" },
    { n: 2, report: 6, cite: "Beyond Zero Emissions. (2025a). Powering Up Gladstone.", url: "https://www.bze.org.au/research/report/powering-up-gladstone" },
    { n: 3, report: 27, cite: "Woodside Energy Group Ltd. (2025). Woodside welcomes approval of North West Shelf Project Extension.", url: "https://www.woodside.com/docs/default-source/media-releases/2025/woodside-welcomes-approval-of-north-west-shelf-project-extension.pdf" },
    { n: 4, report: 12, cite: "Climate Council. (2026a, March 23). The Albanese Government’s fossil fuel approvals. Climate Council.", url: "https://www.climatecouncil.org.au/resources/albanese-governments-fossil-fuel-approvals/" },
    { n: 5, report: 15, cite: "Department of Climate Change, Energy, the Environment and Water. (2025a). Australia’s 2035 Nationally Determined Contribution. Department of Climate Change, Energy, the Environment and Water.", url: "https://unfccc.int/sites/default/files/2025-09/Australias%20Second%20NDC.pdf" },
    { n: 6, report: 8, cite: "Carbon Brief. (2025, May 6). Australia federal election: Anthony Albanese wins in landslide. Carbon Brief.", url: "https://www.carbonbrief.org/australia-federal-election-anthony-albanese-wins-in-landslide" },
    { n: 7, report: 24, cite: "Parliament of Australia. (n.d.). Environment Protection Reform Bill 2025 [Text]. Parliament of Australia. (Australia). Retrieved August 27, 2026, from", url: "https://www.aph.gov.au/Parliamentary_Business/Bills_Legislation/Bills_Search_Results/Result?bId=r7398" },
    { n: 8, report: 2, cite: "ASIC. (2024, September 18). 24-205MR ASIC urges businesses to prepare for mandatory climate reporting [Media release].", url: "https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2024-releases/24-205mr-asic-urges-businesses-to-prepare-for-mandatory-climate-reporting" },
    { n: 9, report: 21, cite: "Hall & Wilcox. (2025, March 27). Federal Budget 2025-2026: Energy and climate snapshot. Hall & Wilcox.", url: "https://hallandwilcox.com.au/news/federal-budget-2025-2026-energy-and-climate-snapshot/" },
    { n: 10, report: 5, cite: "BCG Global. (2026, January 15). Australia’s Safeguard Mechanism Is Heating Up. BCG Global.", url: "https://www.bcg.com/publications/2026/australias-safeguard-mechanism-is-heating-up" },
    { n: 11, report: 25, cite: "Peel, J. (2023). Legal opinion – gaps in the Environment Protection and Biodiversity Conservation Act and other federal laws for protection of the climate.", url: "https://www.climatecouncil.org.au/resources/expert-opinion-our-national-environment-law-is-fundamentally-flawed/" },
    { n: 12, report: 11, cite: "Climate Change Authority. (2026, July 29). 2035 Emissions Reduction Targets FAQs.", url: "https://www.climatechangeauthority.gov.au/2035-emissions-reduction-targets-faqs" },
    { n: 13, report: 3, cite: "Australian Energy Market Operator Limited. (2025). Draft 2026 Integrated System Plan.", url: "https://www.aemo.com.au/-/media/files/major-publications/isp/draft-2026/draft-2026-integrated-system-plan.pdf" },
    { n: 14, report: 18, cite: "Environmental Protection Authority WA. (2025, August 18). Port Hedland Iron Project – Stage 1 (formerly Port Hedland Green Steel Project – Stage 1) | EPA Western Australia.", url: "https://www.epa.wa.gov.au/proposals/port-hedland-iron-project-stage-1-formerly-port-hedland-green-steel-project-stage-1" },
    { n: 15, report: 14, cite: "CSIRO. (2026, August 1). Christmas Creek Green Iron Trial Commercial Plant. HyResource.", url: "https://research.csiro.au/hyresource/christmas-creek-green-iron-trial-commercial-plant/" },
    { n: 16, report: 16, cite: "Department of Climate Change, Energy, the Environment and Water. (2025b). Capacity Investment Scheme 2025 Western Australia Wholesale Electricity Market (WEM) Design Paper.", url: "https://storage.googleapis.com/files-au-climate/climate-au/p/prj33bcff372f2eabb62180d/page/Capacity_Investment_Scheme_2025_Western_Australia_Wholesale_Electricity_Market_WEM_Design_Paper.pdf" },
    { n: 17, report: 17, cite: "Energy Policy WA. (2025, September 16). Pilbara Electricity System.", url: "https://www.wa.gov.au/organisation/energy-policy-wa/pilbara-electricity-system" },
    { n: 18, report: 22, cite: "IEEFA. (2026, July 6). After ‘The BHP Files’: What we learned about policy’s role in decarbonising mining.", url: "https://ieefa.org/resources/after-bhp-files-what-we-learned-about-policys-role-decarbonising-mining" },
    { n: 19, report: 23, cite: "Knaus, C., & Morton, A. (2026, May 25). BHP quietly scrapped plan to build Pilbara plant that would have drastically cut emissions. The Guardian.", url: "https://www.theguardian.com/world/2026/may/25/bhp-mining-pilbara-iron-ore-plant-to-drastically-cut-emissions-scrapped" },
    { n: 20, report: null, cite: "Australian Competition and Consumer Commission. (2024, December 18). Determination: Application for authorisation AA1000666 lodged by Pilbara ISOCo Ltd.", url: "https://www.accc.gov.au/system/files/public-registers/documents/Final%20Determination%20-%2018.12.24%20-%20PR%20-%20AA1000666%20Pilbara%20ISOCo%20Ltd.pdf" },
  ],

  "housing": [
    { n: 1, report: 6, cite: "Real Estate Institute of Western Australia (REIWA). (2026). Port Hedland.", url: "https://reiwa.com.au/suburb/port-hedland/" },
    { n: 2, report: 5, cite: "Government of Western Australia. (2026b, May 6). More than $75m for new South Hedland residential development.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/More-than-$75m-for-new-South-Hedland-residential-development-20260505" },
    { n: 3, report: 4, cite: "Government of Western Australia. (2026a, April 28). Seven Cities to deliver new homes for Karratha and Port Hedland.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/Seven-Cities-to-deliver-new-homes-for-Karratha-and-Port-Hedland-20260428" },
    { n: 4, report: 2, cite: "Environmental Protection Agency WA. (2025, June 6). East Pilbara Generation Hub.", url: "https://www.epa.wa.gov.au/proposals/east-pilbara-generation-hub" },
    { n: 5, report: 1, cite: "APA. (2025, December 10). APA and KNAC sign Project Agreement and Indigenous Land Use Agreement for Newman Renewable Energy Hub.", url: "https://www.apa.com.au/news/asx-and-media-releases/apa-and-knac-sign-project-agreement-and-indigenous-land-use-agreement-for-newman-renewable-energy-hub" },
    { n: 6, report: 3, cite: "Fortescue. (2026, January 15). Construction begins on Fortescue’s first wind project in the Pilbara.", url: "https://www.fortescue.com/en/articles/construction-begins-on-fortescues-first-wind-project-in-the-pilbara" },
  ],

  "hydrogen-network": [
    { n: 1, report: 2, cite: "Baringa. (2025). Powering Australia’s green export future.", url: "https://www.ceig.org.au/wp-content/uploads/2025/11/Baringa_CEIG_Powering-Australias-green-export-future-web.pdf" },
    { n: 2, report: 6, cite: "Environmental Protection Agency WA. (2026, April 7). Statement That a Proposoal May Be Implemented (Environmental Protection Act 1986).", url: "https://www.epa.wa.gov.au/sites/default/files/Ministerial_Statement/1789%20statement%201268%20for%20publishing%20Port%20Hedland%20Iron%20Project.pdf" },
    { n: 3, report: 10, cite: "Port Hedland Iron. (2025). Project Description.", url: "https://phiron.com.au/project-description/" },
    { n: 4, report: 3, cite: "CSIRO. (2026, August 1). Christmas Creek Green Iron Trial Commercial Plant.", url: "https://research.csiro.au/hyresource/christmas-creek-green-iron-trial-commercial-plant/" },
    { n: 5, report: 8, cite: "Intercontinental Energy. (2026, February 3). Australian Renewable Energy Hub secures $21 million ARENA funding to advance large scale hydrogen production for green iron in the Pilbara.", url: "https://assets.ctfassets.net/8jlz82vr8e01/7KL1Lt0wqnC1O6NgA1ulWl/c365ae678b7ccabdada4a2b3809e45ce/ARENA___AREH_Press_Release_Final_27_Jan.pdf" },
    { n: 6, report: 12, cite: "Vorrath, S. (2026, February 4). Giant Pilbara wind, solar and hydrogen hub dumped by bp wins $21 million government grant.", url: "https://reneweconomy.com.au/giant-pilbara-wind-solar-and-hydrogen-hub-dumped-by-bp-wins-21-million-government-grant/" },
    { n: 7, report: 11, cite: "RenewMap. (2026). [Dataset].", url: "https://renewmap.com.au/" },
    { n: 8, report: 7, cite: "Hargreaves, G., & Bates, A. (2025, July 25). Oil giant BP Backs out of Australia Renewable Energy Hub in WA’s Pilbara. ABC News.", url: "https://www.abc.net.au/news/2025-07-25/bp-renewable-energy-hub-investment-withdrawn/105571720" },
    { n: 9, report: 13, cite: "Williamson, R. (2024, October 21). Start date for Australia’s biggest renewable energy hub pushed out to end of decade.", url: "https://reneweconomy.com.au/start-date-for-australias-biggest-renewable-energy-hub-pushed-out-to-end-of-decade/" },
    { n: 10, report: 9, cite: "Pilbara Development Commission. (2026). Pilbara Hydrogen Hub.", url: "https://www.pdc.wa.gov.au/our-focus/projects/pilbara-hydrogen-hub.aspx" },
    { n: 11, report: 1, cite: "ARENA. (2026, March 2). Fortescue – low temperature direct electrochemical reduction for zero emissions iron.", url: "https://arena.gov.au/projects/fortescue-low-temperature-direct-electrochemical-reduction-for-zero-emissions-iron-project" },
    { n: 12, report: 4, cite: "Element Zero. (2026a). Our Technology.", url: "https://elementzero.green/technology/" },
    { n: 13, report: 5, cite: "Element Zero. (2026b). Pilbara Iron Super Hub.", url: "https://elementzero.green/" },
  ],

  "industry-decarbonisation-plans": [
    { n: 1, report: 39, cite: "Pilbara Ports. (n.d.). Port of Port Hedland. Pilbara Ports. Retrieved August 31, 2026, from", url: "https://www.pilbaraports.com.au/ports/port-of-port-hedland" },
    { n: 2, report: 29, cite: "Mysteel. (2026, January 20). Iron ore shipments via Port Hedland hit record high in 2025.", url: "https://www.mysteel.net/news/5110738-iron-ore-shipments-via-port-hedland-hit-record-high-in-2025" },
    { n: 3, report: 20, cite: "Government of Western Australia. (2025, July 24). Pilbara Ports achieves record throughput for sixth consecutive year | Western Australian Government.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/Pilbara-Ports-achieves-record-throughput-for-sixth-consecutive-year--20250724" },
    { n: 4, report: 38, cite: "PHIC. (2019). What is exported through the Port of Port Hedland? PHIC. Retrieved August 31, 2026, from", url: "https://www.phic-hedland.com.au/faq-items/what-is-exported-through-the-port-of-port-hedland/" },
    { n: 5, report: 43, cite: "REMPLAN. (2026). Pilbara Region Economy, Jobs, and Business Insights | Gross Regional Product, Industries. REMPLAN Region Profiles and Explorers.", url: "https://app.remplan.com.au/pilbara-region/economy/industries/gross-regional-product" },
    { n: 6, report: 1, cite: "ACIL Allen. (2023). The Economic Significance of Port of Port Hedland. ACIL Allen.", url: "https://www.phic-hedland.com.au/wp-content/uploads/2024/04/Economic-Significance-of-Port-of-Port-Hedland-2022-23.pdf" },
    { n: 7, report: 21, cite: "Grigg, A., Wilkinson, M., McDonald, A., & Toomey, J. (2026, May 25). Mining giant BHP’s plan to go green was “urgent”, until it wasn’t. ABC News.", url: "https://www.abc.net.au/news/2026-05-25/bhp-leaked-documents-climate-emissions-cuts-delay-electric-truck/106706762" },
    { n: 8, report: 41, cite: "PLS. (2025). Annual Report 2025.", url: "https://www.pls.com/storage/announcements/2025-annual-report-incorporating-appendix-4e-2025-08-25.pdf" },
    { n: 9, report: 6, cite: "BHP. (2024a). Climate Transition Action Plan 2024.", url: "https://www.bhp.com/-/media/documents/investors/annual-reports/2024/240827_bhpclimatetransitionactionplan2024.pdf" },
    { n: 10, report: 49, cite: "Thompson, B. (2024, March 19). Rio bows to investor pressure on green-steel spending. Australian Financial Review.", url: "https://www.afr.com/companies/mining/rio-bows-to-investor-pressure-on-green-steel-spending-20240319-p5fdnt" },
    { n: 11, report: 14, cite: "Fortescue. (2025a). Climate Transition Plan 2025.", url: "https://content.fortescue.com/fortescue17114-fortescueeb60-productionbbdb-8be5/media/project/fortescueportal/shared/documents/publications/reports/fy25-climate-transition-plan.pdf" },
    { n: 12, report: 36, cite: "Organisation for Economic Co-operation and Development). (2025, October 22). Developments in green iron production, trade and investment: Green Iron opportunities in Australia. OECD.", url: "https://www.oecd.org/en/publications/green-iron-opportunities-in-australia_bbd1e2b8-en/full-report/component-5.html" },
    { n: 13, report: 8, cite: "BHP. (2025a). Annual Report 2025.", url: "https://www.bhp.com/-/media/documents/investors/annual-reports/2025/250819_bhpannualreport2025.pdf" },
    { n: 14, report: 24, cite: "Heal, D. (2026, June 23). Why electrification is gaining momentum across Australia’s mining sector. BHP.", url: "https://www.bhp.com/news/bhp-insights/2026/06/why-electrification-is-gaining-momentum-across-australias-mining-sector" },
    { n: 15, report: 15, cite: "Fortescue. (2025b, September 25). Fortescue unites world’s best technology and manufacturing to accelerate decarbonisation globally. Global.", url: "" },
    { n: 16, report: 37, cite: "Parkinson, G. (2026, July 24). “They do exist:” Fortescue tests its 150 tonne battery-powered water truck, and its new electric dozers, grades and loaders. The Driven.", url: "https://thedriven.io/2026/07/24/fortescue-tests-its-150-tonne-battery-powered-water-truck-and-its-new-electric-dozers-and-wheel-loaders/" },
  ],

  "lga-decarbonisation-plans": [
    { n: 1, report: 2, cite: "Town of Port Hedland. (2022). Environmental Sustainability Strategy 2022-2027.", url: "https://www.porthedland.wa.gov.au/documents/3991/environmental-sustainability-strategy-2022-2027" },
    { n: 2, report: 4, cite: "Town of Port Hedland. (2025b, June). ANNUAL BUDGET FOR THE YEAR ENDED 30 JUNE 2026.", url: "https://www.porthedland.wa.gov.au/documents/4683/town-of-port-hedland-annual-budget-2025-2026" },
    { n: 3, report: 3, cite: "Town of Port Hedland. (2025a). Town of Port Hedland Capital Works Program 2025/2026.", url: "https://www.porthedland.wa.gov.au/documents/4696/202526-capital-works-program" },
    { n: 4, report: 5, cite: "Town of Port Hedland. (2026). Sustainability grants.", url: "https://www.porthedland.wa.gov.au/our-community/community/grants-program/sustainability-grant.aspx" },
    { n: 5, report: 1, cite: "Town of Port Hedland. (2014, July). Town of Port Hedland—Community Engagement Strategy.", url: "https://www.porthedland.wa.gov.au/council-meetings/audit-risk-and-compliance-committee/confirmed-minutes-for-audit-risk-and-governance-committee/51/documents/11.2.2_att_4._community_engagement_strategy.pdf" },
  ],

  "renewable-energy-generation": [
    { n: 1, report: 4, cite: "Marsden Jacob Associates. (2025). Common user transmission and decarbonising Pilbara energy demand.", url: "https://www.cefc.com.au/document?file=/media/jwlnajzx/common-user-transmission-and-decarbonising-pilbara-energy-demand.pdf" },
    { n: 2, report: 6, cite: "RenewMap. (2026). [Dataset].", url: "https://renewmap.com.au/" },
    { n: 3, report: 3, cite: "Government of Western Australia. (2026). Pilbara Energy Transition Plan.", url: "https://stateofenergy.wa.gov.au/Projects-and-Initiatives/pilbara-energy-transition-(pet)" },
    { n: 4, report: 1, cite: "Baringa. (2025). Powering Australia’s green export future.", url: "https://www.ceig.org.au/wp-content/uploads/2025/11/Baringa_CEIG_Powering-Australias-green-export-future-web.pdf" },
    { n: 5, report: 7, cite: "Vorrath, S. (2026, February 4). Giant Pilbara wind, solar and hydrogen hub dumped by bp wins $21 million government grant.", url: "https://reneweconomy.com.au/giant-pilbara-wind-solar-and-hydrogen-hub-dumped-by-bp-wins-21-million-government-grant/" },
    { n: 6, report: 2, cite: "Fortescue. (2026, January 15). Construction begins on Fortescue’s first wind project in the Pilbara.", url: "https://www.fortescue.com/en/articles/construction-begins-on-fortescues-first-wind-project-in-the-pilbara" },
    { n: 7, report: 5, cite: "Pilbara Development Commission. (2026). Pilbara Hydrogen Hub.", url: "https://www.pdc.wa.gov.au/our-focus/projects/pilbara-hydrogen-hub.aspx" },
  ],

  "state-approvals": [
    { n: 1, report: 4, cite: "Government of Western Australia. (2024a, October 18). Major environmental approvals reforms pass Parliament.", url: "https://www.wa.gov.au/government/media-statements/Cook-Labor-Government/Major-environmental-approvals-reforms-pass-Parliament-20241018" },
    { n: 2, report: 7, cite: "Government of Western Australia. (2026, August 4). The Office of the Coordinator General.", url: "https://www.wa.gov.au/organisation/department-of-the-premier-and-cabinet/the-office-of-the-coordinator-general" },
    { n: 3, report: 5, cite: "Government of Western Australia. (2024b, December 20). Green Energy Approvals Initiative.", url: "https://www.wa.gov.au/service/environment/green-energy-approvals-initiative" },
    { n: 4, report: 10, cite: "Williamson, R. (2026, January 12). Massive 2 GW wind, solar and battery project lands all state planning approvals in breathtaking four months. Renew Economy.", url: "https://reneweconomy.com.au/massive-2-gw-wind-solar-and-battery-project-lands-all-planning-approvals-in-breathtaking-four-months/" },
    { n: 5, report: 9, cite: "Town of Port Hedland. (2020, August 5). Position Statement—Mining Tenements.", url: "https://www.porthedland.wa.gov.au/Profiles/porthedland/Assets/ClientData/Final_Draft_Position_Statement_-_Mining_Tenements_-_05_08_2020.pdf" },
    { n: 6, report: 8, cite: "RenewMap. (2026). [Dataset].", url: "https://renewmap.com.au/" },
    { n: 7, report: 6, cite: "Government of Western Australia. (2025, December). Draft Renewable Energy Planning Code.", url: "https://www.planning.wa.gov.au/draft-renewable-energy-planning-code" },
    { n: 8, report: 3, cite: "Environmental Protection Agency WA. (2025, May 23). Chair Determination Turner River Solar Hub.", url: "https://epa.wa.gov.au/sites/default/files/Extract_of_determination/Chair%20Determination%20-%20Turner%20River%20Solar%20Hub.pdf" },
    { n: 9, report: 1, cite: "Department of Climate Change, Energy, the Environment and Water. (2025, December 18). Turner River Solar Hub.", url: "https://epbcpublicportal.environment.gov.au/open-for-comments/project-decision/?id=4f16e972-be39-f011-b4cb-002248113fed" },
    { n: 10, report: 2, cite: "Department of Climate Change, Energy, the Environment and Water. (2026, April 21). Memorandum of Understanding between the Commonwealth of Australia and Western Australia on bilateral environmental assessment and approval agreements.", url: "https://www.dcceew.gov.au/sites/default/files/documents/memorandum-understanding-comm-wa-governments.pdf" },
  ],

  "state-emissions-commitment": [
    { n: 1, report: 7, cite: "Parliament of Western Australia. (2024, December 17). Climate Change Bill 2023.", url: "https://www.parliament.wa.gov.au/parliament/bills.nsf/BillProgressPopup?openForm&ParentUNID=7A17F706ED198C4148258A750008D497" },
    { n: 2, report: 2, cite: "Government of Western Australia. (2023, December). Sectoral emissions reduction strategy for Western Australia.", url: "https://www.wa.gov.au/system/files/2024-07/sers-final-report-20240702.pdf" },
    { n: 3, report: 6, cite: "McKelvie, Troy. (2024, October). Pilbara powers up: Leading the charge in Australia’s green energy transition.", url: "https://www.nortonrosefulbright.com/en-au/knowledge/publications/4e5ff84a/pilbara-powers-up-leading-the-charge-in-australias-green-energy-transition" },
    { n: 4, report: 1, cite: "Australian Government. (2026, June 18). Safeguard Mechanism overview.", url: "https://www.dcceew.gov.au/climate-change/emissions-reporting/national-greenhouse-energy-reporting-scheme/safeguard-mechanism/overview" },
    { n: 5, report: 8, cite: "Pilbara Ports. (2026, August 25). Climate Action Plan.", url: "https://www.pilbaraports.com.au/sustainability/climate-action-plan" },
    { n: 6, report: 10, cite: "Reinmuth, J., Yiannakou, J., Pittorino, P., & McKelvie, W. (2024, November 5). Investing in WA: energy reforms in the Pilbara—Unpacking the North-West Interconnected System.", url: "https://www.allens.com.au/insights-news/insights/2024/11/investing-in-wa-energy-reforms-in-the-pilbara-unpacking-the-north-west-interconnected-system/" },
    { n: 7, report: 5, cite: "Kefeli, E. (2026, April 9). POSCO-backed HBI project in Western Australia receives final approval.", url: "https://www.steelorbis.com/steel-news/latest-news/posco-backed-hbi-project-in-western-australia-receives-final-approval-1446712.htm" },
    { n: 8, report: 4, cite: "Government of Western Australia. (2026b, April 16). Cook Government to fast-track key industrial precinct and projects.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/Cook-Government-to-fast-track-key-industrial-precinct-and-projects-20260416" },
    { n: 9, report: 3, cite: "Government of Western Australia. (2026a). Community Benefits Guideline.", url: "https://stateofenergy.wa.gov.au/for-community/community-benefits-guideline" },
    { n: 10, report: 9, cite: "Prestipino, D. (2026, May 11). Yindjibarndi Energy signs 30-year power purchase deal with Rio Tinto. National Indigenous Times.", url: "https://nit.com.au/11-05-2026/24182/yindjibarndi-energy-signs-30-year-power-purchase-deal-with-rio-tinto" },
  ],

  "state-investment-framework": [
    { n: 1, report: 7, cite: "Government of Western Australia. (2026d, April 16). Cook Government to fast-track key industrial precinct and projects.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/Cook-Government-to-fast-track-key-industrial-precinct-and-projects-20260416" },
    { n: 2, report: 3, cite: "Government of Western Australia. (2025, November 26). Western Australia’s strategic industrial areas.", url: "https://www.wa.gov.au/organisation/department-of-energy-and-economic-diversification/western-australias-strategic-industrial-areas" },
    { n: 3, report: 9, cite: "Government of Western Australia. (2026f, May 12). Invest and Trade WA: Investment Attraction Fund.", url: "https://www.wa.gov.au/organisation/department-of-energy-and-economic-diversification/invest-and-trade-wa-investment-attraction-fund" },
    { n: 4, report: 2, cite: "Government of Western Australia. (2024, October 2). Pilbara Clean Energy Training and Research Institute progresses to design.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/Pilbara-Clean-Energy-Training-and-Research-Institute-progresses-to-design-20241001" },
    { n: 5, report: 4, cite: "Government of Western Australia. (2026a). Pilbara Energy Transition (PET) Plan.", url: "https://stateofenergy.wa.gov.au/Projects-and-Initiatives/pilbara-energy-transition-%28pet%29" },
    { n: 6, report: 12, cite: "Kefeli, E. (2026, April 9). POSCO-backed HBI project in Western Australia receives final approval.", url: "https://www.steelorbis.com/steel-news/latest-news/posco-backed-hbi-project-in-western-australia-receives-final-approval-1446712.htm" },
    { n: 7, report: 10, cite: "Hargreaves, G., & Bates, A. (2025, July 25). Oil giant BP Backs out of Australia Renewable Energy Hub in WA’s Pilbara. ABC News.", url: "https://www.abc.net.au/news/2025-07-25/bp-renewable-energy-hub-investment-withdrawn/105571720" },
    { n: 8, report: 11, cite: "Heynes, G. (2026, February 5). 26GW Australian Renewable Energy Hub secures AU$21 million ARENA boost for Pilbara green hydrogen push. PV Tech.", url: "https://www.pv-tech.org/26gw-australian-renewable-energy-hub-secures-au21-million-arena-boost-for-pilbara-green-hydrogen-push/" },
    { n: 9, report: 8, cite: "Government of Western Australia. (2026e, April 22). First State Development Area and Priority Projects announced.", url: "https://www.wa.gov.au/government/announcements/first-state-development-area-and-priority-projects-announced" },
    { n: 10, report: 13, cite: "Parkinson, G. (2022, April 11). Alinta gets state grant and approval for resized Port Hedland big battery. Renew Economy.", url: "https://reneweconomy.com.au/alinta-gets-state-grant-and-approval-for-resized-port-hedland-big-battery/" },
    { n: 11, report: 1, cite: "Core Innovation Hub. (2026). $500,000 Made in the Pilbara grants boost local manufacturing, jobs and regional innovation.", url: "https://www.corehub.com.au/articles/made-in-the-pilbara-launches" },
    { n: 12, report: 6, cite: "Government of Western Australia. (2026c, April 9). RED grants driving jobs and economic diversification in the Pilbara.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/RED-grants-driving-jobs-and-economic-diversification-in-the-Pilbara-20260409" },
    { n: 13, report: 5, cite: "Government of Western Australia. (2026b, March 6). Joint media statement—New interchange to support Pilbara’s clean energy future.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/Joint-media-statement---New-interchange-to-support-Pilbara%27s-clean-energy-future-20260306" },
  ],

  "state-procurement": [
    { n: 1, report: 4, cite: "Government of Western Australia. (2025a). WA Industry Link Annual Report 2024-25.", url: "https://www.parliament.wa.gov.au/publications/tabledpapers.nsf/displaypaper/4210783a242b6d21230ee08148258d5600062ca5/$file/tp+783+(2025).pdf" },
    { n: 2, report: 3, cite: "Government of Western Australia. (2024). Western Australian Industry Participation Strategy 2024.", url: "https://www.wa.gov.au/system/files/2024-08/waips-2024-final.pdf" },
    { n: 3, report: 2, cite: "Government of Western Australia. (2022b, November 15). Environmental Procurement Guide.", url: "https://www.wa.gov.au/government/publications/environmental-procurement-guide-0" },
    { n: 4, report: 1, cite: "Government of Western Australia. (2022a). Western Australian Buy Local Policy 2022.", url: "https://www.wa.gov.au/system/files/2022-04/Western%20Australian%20Buy%20Local%20Policy%202022.pdf" },
    { n: 5, report: 5, cite: "Government of Western Australia. (2025b, April 24). WA Buy Local Policy.", url: "https://www.wa.gov.au/government/document-collections/wa-buy-local-policy" },
    { n: 6, report: 9, cite: "Office of the Auditor General WA. (2025, April 24). Implementation of the Aboriginal Procurement Policy.", url: "https://audit.wa.gov.au/reports-and-publications/reports/implementation-of-the-aboriginal-procurement-policy/" },
    { n: 7, report: 10, cite: "Pilbara Development Commission. (2026, August 24). Tender opportunities.", url: "https://www.pdc.wa.gov.au/our-focus/local-content/tender-opportunities.aspx" },
    { n: 8, report: 8, cite: "Government of Western Australia. (2026b, April 9). RED grants driving jobs and economic diversification in the Pilbara.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/RED-grants-driving-jobs-and-economic-diversification-in-the-Pilbara-20260409" },
    { n: 9, report: 7, cite: "Government of Western Australia. (2026a, February). Expression of Interest—Supply of Locally Manufactured Green Steel for Major Government Projects.", url: "https://www.wa.gov.au/system/files/2026-02/expression_of_interest_supply_of_locally_manufactured_green_steel_for_major_government_projects.pdf" },
    { n: 10, report: 6, cite: "Government of Western Australia. (2025c, November 9). Government projects to be built with green steel that’s Made in WA.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/Government-projects-to-be-built-with-green-steel-that%27s-Made-in-WA-20251109" },
  ],

  "state-rd": [
    { n: 1, report: 5, cite: "Government of Western Australia. (2024b, December 3). Diversify WA: 2024 Update.", url: "https://www.wa.gov.au/government/publications/diversify-wa-2024-update" },
    { n: 2, report: 8, cite: "Government of Western Australia. (2025b, June 19). Strategic industries funding doubled to secure Made in WA.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/Strategic-industries-funding-doubled-to-secure-Made-in-WA-20250618" },
    { n: 3, report: 17, cite: "Regional Development Australia. (2026, May 19). From the RDA Pilbara Chair—May 2026.", url: "https://www.rdapilbara.org.au/post/from-the-rda-pilbara-chair-may-2026" },
    { n: 4, report: 2, cite: "Chamber of Minerals and Energy WA. (2026, May 7). State Budget 2026-27: Mining and energy bankroll WA through global volatility.", url: "https://cmewa.com.au/news/state-budget-2026-27-mining-and-energy-bankroll-wa-through-global-volatility/" },
    { n: 5, report: 14, cite: "Government of Western Australia. (2026e, May 7). Investing in Regional WA.", url: "https://www.ourstatebudget.wa.gov.au/2026-27/investing-regions.html" },
    { n: 6, report: 12, cite: "Government of Western Australia. (2026c, March 6). Joint media statement—New interchange to support Pilbara’s clean energy future.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/Joint-media-statement---New-interchange-to-support-Pilbara%27s-clean-energy-future-20260306" },
    { n: 7, report: 4, cite: "Government of Western Australia. (2024a, February 19). Joint media statement—Pilbara Hydrogen Hub to boost Australia’s hydrogen industry.", url: "https://www.wa.gov.au/government/media-statements/Cook-Labor-Government/Joint-media-statement---Pilbara-Hydrogen-Hub-to-boost-Australia%27s-hydrogen-industry--20240219" },
    { n: 8, report: 16, cite: "Pilbara Development Commission. (2026). Pilbara Hydrogen Hub.", url: "https://www.pdc.wa.gov.au/our-focus/projects/pilbara-hydrogen-hub.aspx" },
    { n: 9, report: 11, cite: "Government of Western Australia. (2026b, February 25). $500,000 Made in the Pilbara grants create jobs, apprenticeships.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/$500,000-Made-in-the-Pilbara-grants-create-jobs,-apprenticeships-20260225" },
    { n: 10, report: 3, cite: "Core Innovation Hub. (2026). $500,000 Made in the Pilbara grants boost local manufacturing, jobs and regional innovation.", url: "https://www.corehub.com.au/articles/made-in-the-pilbara-launches" },
    { n: 11, report: 15, cite: "International Mining. (2025, December 18). Airbridge secures WA grant to scale-up carbon capture Pilbara plan.", url: "https://im-mining.com/2025/12/18/airbridge-secures-wa-grant-to-scale-up-carbon-capture-pilbara-plan/" },
    { n: 12, report: 1, cite: "Carroll, D. (2026, January 7). WA launches $9 million funding round open for clean energy projects.", url: "https://www.pv-magazine-australia.com/2026/01/07/wa-launches-9-million-funding-round-open-for-clean-energy-projects/" },
    { n: 13, report: 6, cite: "Government of Western Australia. (2024c, December 24). Government announces $44 million boost to research infrastructure.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/Government-announces-%2444-million-boost-to-research-infrastructure--20241224" },
    { n: 14, report: 10, cite: "Government of Western Australia. (2026a). Clean Energy Skills—Applied Research Grant Program.", url: "https://cleanenergyskills.wa.gov.au/grants" },
    { n: 15, report: 7, cite: "Government of Western Australia. (2025a). TrHyHub: Community Summary.", url: "https://www.wa.gov.au/system/files/2025-05/trhyhub_community_summary.pdf" },
  ],

  "state-skills-training": [
    { n: 1, report: 3, cite: "Government of Western Australia. (2024b, October 29). Western Australia’s Renewable Hydrogen Strategy 2024–2030.", url: "https://www.wa.gov.au/government/publications/western-australias-renewable-hydrogen-strategy-2024-2030" },
    { n: 2, report: 1, cite: "Government of Western Australia. (2023, December). Sectoral emissions reduction strategy for Western Australia.", url: "https://www.wa.gov.au/system/files/2024-07/sers-final-report-20240702.pdf" },
    { n: 3, report: 10, cite: "Government of Western Australia. (2026c, August). Future State Accelerating Diversify WA.", url: "https://www.wa.gov.au/system/files/2026-08/00604_future_state_prospectus_web.pdf" },
    { n: 4, report: 11, cite: "Langdon, R., Rutovitz, J., Barreto Lara, H., Briggs, C., Gerrard, E., & Toakley, J. (2025). The Western Australian Electricity Workforce: Projections to 2050.", url: "https://www.racefor2030.com.au/content/uploads/WA-Workforce-Projections-Report-2025_FINAL.pdf" },
    { n: 5, report: 4, cite: "Government of Western Australia. (2024c, December 20). Green Energy Approvals Initiative.", url: "https://www.wa.gov.au/service/environment/green-energy-approvals-initiative" },
    { n: 6, report: 14, cite: "Yindjibarndi Energy Corporation. (2026). Yindjibarndi Energy.", url: "https://yindjibarndienergy.com.au/" },
    { n: 7, report: 12, cite: "Ngarluma Aboriginal Corporation. (2026). Green energy park support to help diversify WA’s regional economy.", url: "https://www.ngarluma.com.au/green-energy-park-support-to-help-diversify-wa-s-regional-economy" },
    { n: 8, report: 6, cite: "Government of Western Australia. (2025b, January 23). Historic National Skills Agreement between Commonwealth and State Governments.", url: "https://www.wa.gov.au/government/announcements/historic-national-skills-agreement-between-commonwealth-and-state-governments" },
    { n: 9, report: 5, cite: "Government of Western Australia. (2025a). WA State Budget Overview 2025-26.", url: "https://www.ourstatebudget.wa.gov.au/2025-26/budget-papers/2025-26-wa-state-budget-overview.pdf" },
    { n: 10, report: 9, cite: "Government of Western Australia. (2026b, February 3). Collie Transition Package.", url: "https://www.wa.gov.au/organisation/department-of-the-premier-and-cabinet/collie-transition-package" },
    { n: 11, report: 7, cite: "Government of Western Australia. (2025c, June 19). Strategic industries funding doubled to secure Made in WA.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/Strategic-industries-funding-doubled-to-secure-Made-in-WA-20250618" },
    { n: 12, report: 2, cite: "Government of Western Australia. (2024a, February 19). Joint media statement—Pilbara Hydrogen Hub to boost Australia’s hydrogen industry.", url: "https://www.wa.gov.au/government/media-statements/Cook-Labor-Government/Joint-media-statement---Pilbara-Hydrogen-Hub-to-boost-Australia%27s-hydrogen-industry--20240219" },
    { n: 13, report: 8, cite: "Government of Western Australia. (2026a, February). $500,000 Made in the Pilbara grants create jobs, apprenticeships.", url: "https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/%24500%2C000-Made-in-the-Pilbara-grants-create-jobs%2C-apprenticeships-20260225" },
    { n: 14, report: 13, cite: "Pilbara Development Commission. (n.d.). Pilbara Universities Centre. Retrieved September 3, 2026, from", url: "https://www.pdc.wa.gov.au/our-focus/achievements/pilbara-universities-centre.aspx" },
  ],

  "strategic-nature-positive-planning": [
    { n: 1, report: 3, cite: "State planning strategy 2050. (2021, August 26).", url: "https://www.wa.gov.au/government/publications/state-planning-strategy-2050" },
    { n: 2, report: 1, cite: "Department of Planning, Lands and Heritage. (2024, February 6). New regional planning strategies for the State’s regions.", url: "https://www.wa.gov.au/government/document-collections/new-regional-planning-strategies-the-states-regions" },
    { n: 3, report: 2, cite: "Infrastructure WA. (2026). State Infrastructure Strategy.", url: "https://www.infrastructure.wa.gov.au/state-infrastructure-strategy" },
    { n: 4, report: 4, cite: "Western Australia Planning Commission. (2026). Draft Renewable Planning Code.", url: "https://www.planning.wa.gov.au/draft-renewable-energy-planning-code" },
  ],

  "transmission-network": [
    { n: 1, report: 1, cite: "Climate Transition Plan 2025. (2025). Fortescue.", url: "https://content.fortescue.com/fortescue17114-fortescueeb60-productionbbdb-8be5/media/project/fortescueportal/shared/documents/publications/reports/fy25-climate-transition-plan.pdf" },
    { n: 2, report: 3, cite: "Fortescue Invests $680m to Expand Pilbara Green Energy Infrastructure. (2026, April 25). Fortescue.", url: "https://www.fortescue.com/en/articles/fortescue-invests-$680m-to-expand-pilbara-green-energy-infrastructure" },
    { n: 3, report: 9, cite: "RenewMap. (2026). [Dataset].", url: "https://renewmap.com.au/" },
    { n: 4, report: 4, cite: "Government of Western Australia. (2026). Pilbara Energy Transition Plan.", url: "https://stateofenergy.wa.gov.au/Projects-and-Initiatives/pilbara-energy-transition-(pet)" },
    { n: 5, report: 8, cite: "Pilbara Minerals’ Power Strategy to Reduce Emissions Intensity and Costs. (2023, December 21). Pilbara Minerals.", url: "https://www.listcorp.com/asx/pls/pls-group-limited/news/power-strategy-to-reduce-emissions-intensity-and-costs-2974986.html" },
    { n: 6, report: 5, cite: "Hamersley Range Corridor. (2025). APA. google.com/url?q=", url: "https://www.apa.com.au/operations-and-projects/electricity-transmission/electricity-transmission/hamersley-range-corridor" },
    { n: 7, report: 7, cite: "Pilbara Green Link. (2025, March). Australia New Zealand Infrastructure Pipeline.", url: "https://infrastructurepipeline.org/project/pilbara-green-link" },
    { n: 8, report: 10, cite: "Williamson, R. (2024, October 21). Start date for Australia’s biggest renewable energy hub pushed out to end of decade.", url: "https://reneweconomy.com.au/start-date-for-australias-biggest-renewable-energy-hub-pushed-out-to-end-of-decade/" },
    { n: 9, report: 2, cite: "Evolution of the Pilbara Networks Rules. (2025, May 14). Government of Western Australia.", url: "https://www.wa.gov.au/government/document-collections/evolution-of-the-pilbara-networks-rules" },
    { n: 10, report: 6, cite: "Pilbara Advisory Committee Meeting Papers. (2024, August 29). Energy Policy WA.", url: "https://www.wa.gov.au/system/files/2024-08/pacmeeting-29august2024-meetingpapers.pdf" },
  ],

  "water-and-wastewater": [
    { n: 1, report: 3, cite: "Government of Western Australia. (2012). Lower De Grey and Yule groundwater allocation limits report.", url: "https://www.wa.gov.au/system/files/2022-10/Lower-De-Grey-and-Yule-groundwater-allocation-limits-report.pdf" },
    { n: 2, report: 5, cite: "Government of Western Australia. (2026b). Water Register.", url: "https://maps.water.wa.gov.au/#/webmap/register" },
    { n: 3, report: 4, cite: "Government of Western Australia. (2026a). Building water security for Pilbara coastal towns and industry.", url: "https://www.wa.gov.au/system/files/2026-08/pilbara-building-water-security_120826.pdf" },
    { n: 4, report: 2, cite: "Bureau of Meteorology. (2026). Climate Resilient Water Sources.", url: "https://www.bom.gov.au/water/crews/site-explorer/" },
    { n: 5, report: 11, cite: "Water Corporation. (2026). Port Hedland water source planning.", url: "https://www.watercorporation.com.au/outages-and-works/ongoing-works/port-hedland-water-source-planning" },
    { n: 6, report: 1, cite: "Bates, A., Putland, K., & Reid, K. (2026, January 23). Water Corporation investigates private sector water supply for Port Hedland. ABC News.", url: "https://www.abc.net.au/news/2026-01-23/port-hedland-water-carting-pilbara-supply-shortage/106258122" },
    { n: 7, report: 10, cite: "URBIS. (2017, September). Boodarie Strategic Industrial Area Structure Plan.", url: "https://developmentwa.com.au/documents/1552-boodarie-sia-structure-plan/viewdocument/1552" },
    { n: 8, report: 8, cite: "NW Interconnected Power. (2020, October). Asian Renewable Energy Hub Revised Proposal.", url: "https://www.epa.wa.gov.au/sites/default/files/Referral_Documentation/Supporting%20Document_20.pdf" },
    { n: 9, report: 9, cite: "NZEA. (2025, February 21). Traditional owners collaborate on water project in the Pilbara.", url: "https://www.nzea.gov.au/traditional-owners-collaborate-water-project-pilbara" },
    { n: 10, report: 7, cite: "Legacie. (2024, March). Ngarluma Water Desalination Project.", url: "https://legacie.com.au/wp-content/uploads/2024/03/LEGA13643_Project-Information-Sheet.pdf" },
  ],

  "wider-community-benefit-sharing": [
    { n: 1, report: 5, cite: "REMPLAN. (2026a). Pilbara Region | Population/Age [Dataset].", url: "https://app.remplan.com.au/pilbara-region/community/population/indigenous?locality=east-pilbara" },
    { n: 2, report: 6, cite: "REMPLAN. (2026b). Pilbara Region | Population/Indigenous [Dataset].", url: "https://app.remplan.com.au/pilbara-region/community/population/indigenous?locality=east-pilbara" },
    { n: 3, report: 7, cite: "Shire of East Pilbara. (2026). Newman.", url: "https://www.eastpilbara.wa.gov.au/council/our-council/about-us/newman.aspx" },
    { n: 4, report: 1, cite: "Graves, M., Reinmuth, J., Pittorino, P., & Bailey, F. (2024, July 24). Investing in WA – what are the land options for your renewable energy project?", url: "https://www.allens.com.au/insights-news/insights/2024/07/investing-in-wa-what-are-the-land-options-for-your-renewable-energy-project/" },
    { n: 5, report: 3, cite: "Karlka Nyiyaparli Aboriginal Corporation. (2026, February). KNAC Newsletter Issue 11.", url: "https://www.karlka.com.au/wp-content/uploads/2026/03/FINAL-Newsletter-Feb-2026.pdf" },
    { n: 6, report: 2, cite: "Hay Shire Council, & The Next Economy. (2025, August). Hay Region Economic Transition Roadmap—Early Insights Paper.", url: "https://www.hay.nsw.gov.au/Portals/0/Hay%20Economic%20Roadmap%20-%20Early%20Insights%20Paper.pdf" },
    { n: 7, report: 4, cite: "Pilbara Development Commission. (2023). Strategic Plan 2023-25.", url: "https://www.pdc.wa.gov.au/Profiles/pdc/Assets/ClientData/PDC_StrategicPlan_2023-2025_SCREEN_Singles.pdf" },
  ],

};
