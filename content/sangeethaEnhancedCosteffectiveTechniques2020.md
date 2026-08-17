---
title: "Enhanced and cost-effective techniques used for plant growth in vertical agriculture"
citekey: "sangeethaEnhancedCosteffectiveTechniques2020"
year: 2020
type: technical-note
doi: "10.1016/j.matpr.2020.11.557"
url: "https://doi.org/10.1016/j.matpr.2020.11.557"
trials: 0
tags:
  - Type/Technical-Note
  - Region/South-Asia
status: unread
quality:
---

# Enhanced and cost-effective techniques used for plant growth in vertical agriculture

> [!warning] This article has been WITHDRAWN by the publisher (retraction dated 2020-12-31)
> Crossref lists this DOI's current title as "WITHDRAWN: Enhanced and cost-effective techniques used
> for plant growth in vertical agriculture" with an `update-to` record of `type: retraction`, dated
> 2020-12-31 — twelve days after the paper's "Accepted 17 November 2020" date and before it was ever
> assigned a final volume/page in Materials Today: Proceedings (it remained an "Article in Press,"
> which is also how the PDF in `pdfs/` is watermarked/paginated). Per a web search (ScienceDirect
> listing, not independently re-verified against the primary Elsevier retraction notice, which
> 403'd on fetch), the withdrawal is **not specific to this paper's content** — it is one of an
> entire conference proceedings withdrawn together: "the withdrawal of the Proceedings of the
> International Conference on Emerging Trends in Materials Science, Technology and Engineering
> (ICMSTE2K21). Several serious concerns arose regarding the integrity and veracity of the
> conference organisation and peer-review process." See Extraction notes for full detail and
> source. This note extracts the paper as written; the retraction is a peer-review-integrity
> finding about the conference, not a stated data-integrity finding about this specific paper —
> but treat everything below with corresponding caution.

## Metadata

* **Cite key:** sangeethaEnhancedCosteffectiveTechniques2020
* **Item type:** Conference Paper (Materials Today: Proceedings — Emerging Trends in Materials Science, Technology and Engineering, ICMSTE2K21)
* **Authors:** [[T. Sangeetha]], [[P. Ezhumalai]]
* **Affiliation:** CSE, J.N.N Institute of Engineering, Chennai, Tamil Nadu 601102, India (Sangeetha); R.M.D Engineering College, Kavaraipettai, Chennai, Tamil Nadu 601206, India (Ezhumalai)
* **Journal:** Materials Today: Proceedings, "Article in Press" — never assigned a final volume/page before the whole proceedings was withdrawn (2020-12-31); PDF header prints "Materials Today: Proceedings xxx (xxxx) xxx" throughout
* **Date:** Received 11 November 2020; Accepted 17 November 2020; "Available online xxxx" (never resolved to a final publication date on the PDF itself; Crossref's `published` field gives 12/2020)
* **Date added:** 2026-08-10
* **DOI:** [10.1016/j.matpr.2020.11.557](https://doi.org/10.1016/j.matpr.2020.11.557)
* **Funding:** [not reported] — no funding/acknowledgements section anywhere in the 6-page PDF (only a CRediT authorship statement and a competing-interests declaration)
* **URL:** https://doi.org/10.1016/j.matpr.2020.11.557
* **PDF:** `Sangeetha and Ezhumalai - 2020 - Enhanced and cost-effective techniques used for pl.pdf`

> [!tip] Opinion
>
> Not an aquaponics paper by any reasonable reading, and it should probably not have been pulled
> into this vault's PDF set: it is a short IoT/vertical-farming proceedings paper about hydroponic
> tomato monitoring. Aquaponics is named exactly once, in a single introductory sentence listing it
> alongside hydroponics and aeroponics as "one of the three soilless systems" — no fish, tank,
> biofilter, RAS, or aquaculture organism is mentioned anywhere else in the paper. It reports no
> original experiment: Tables 1-3 (parameter ranges, nutrient composition, NPK-by-stage ratios) read
> as design targets compiled from cited hydroponics/IoT literature rather than measurements this
> paper's own system produced, and the two "proposed" detection techniques (a 12 cm plant-height
> threshold for vegetative-stage onset via ultrasonic sensor; a Faster R-CNN pipeline for
> flowering-stage detection) are each illustrated with exactly one anecdotal smartphone-notification
> screenshot (Figs. 6 and 8) and zero quantified validation — no accuracy/precision/recall for the
> R-CNN model, no error margin or sample size for the height threshold, no statistics of any kind.
> Combined with the whole-conference retraction (see banner above), I would not cite anything from
> this paper as evidence for anything; it is retained here only as a `technical-note` with no
> `trials.csv`/`plant.csv` rows, per SCHEMA.md's type rules.

## Abstract

As the population of India increases, the most of the land occupied for constructions and industrial works for their comforts. Due to this, the agriculture land is decreasing that results less food production and cannot supply necessary food for the increased population. The people already experience this problem during COVID-19 pandemic. The vertical agriculture is ideal solution that introduced to ensure food security. In this form of soilless agriculture, we use controlling environment to monitor plant growth, to record pH and EC levels daily, to test for disease detections, to supply water with required nutrients and to check CO2 concentration. In this paper, we observed that plant intakes changing at various stages such as germination, vegetative, reproduction and maturity stages. We proposed enhanced and cost-effective techniques for supplying all essentials of plants as much as they required according to their stage. We introduced two methods 1. To identify the vegetative stage based on plant height 2. To identify the reproduction stage using R-CNN algorithm. This helps to inform the farmer let to know the changes in plant stages in right time.

## Summary

This is a short (6-page) proceedings paper proposing an IoT-based monitoring system for indoor/vertical hydroponic farming, framed around the observation that a tomato plant's nutrient (NPK), CO2, and light needs change across germination, vegetative, reproduction, and maturity stages. The authors describe a sensing/control/notification architecture (humidity-temperature, pH, EC, CO2, and light sensors feeding an Arduino/Raspberry Pi stack, with alerts pushed to a "Farmer Assistant" smartphone app) and propose two specific automated stage-detection techniques: an ultrasonic (HC-SR04) sensor that flags the onset of the vegetative stage once measured plant height crosses a fixed 12 cm threshold, and a Faster R-CNN image-detection pipeline (ResNet50 backbone, trained on 500+ camera images) that flags the onset of the reproduction stage by detecting flowers. Neither technique is validated with a dataset, accuracy metric, or statistical test in this paper — each is illustrated with a single example smartphone-notification screenshot. The paper also tabulates general target environmental ranges (pH, EC, temperature, humidity, CO2, light hours) and stage-specific NPK ratios, presented as background design parameters rather than values measured by the authors' own system. No biological outcome (yield, growth rate, survival, tissue composition) of any kind is reported.

---

<!-- ===== USE THIS BLOCK FOR: review | policy (closest available fit for this non-empirical technical-note — no experiment, no dataset, no validation metric was reported for either proposed technique; see Extraction notes for the same judgment call already established in this vault for goddekImprovingNutrientWater2020) ===== -->

> [!info] Review scope
> - **Region / system covered:** Indoor/vertical soilless (hydroponic) tomato cultivation; a lab/prototype-scale demonstration system built by the authors (location within India not further specified beyond the Chennai-area author affiliations). Aquaponics named once, in passing, as one of three soilless-farming categories — not itself a covered system.
> - **Argument:** An IoT sensing/control/notification architecture — ultrasonic plant-height threshold (12 cm) to flag vegetative-stage onset, and a Faster R-CNN flower-detection model to flag reproduction-stage onset — can reduce labor and cost in vertical farming by alerting a (typically time-poor, urban) farmer exactly when to adjust nutrient ratios, CO2, and lighting as the crop moves between growth stages.
> - **Evidence base:** No original experiment, dataset, or statistical test. Tables 1-3's environmental/nutrient parameter ranges are stated without an inline citation tying the specific numbers to a source or to this paper's own measurements — surrounding text cites general sensor/hydroponics references ([2], [4], [7]-[9]) for the *concepts*, not demonstrably for these exact figures, so origin is [unclear] rather than confirmed secondary. The two proposed detection techniques are each demonstrated with one anecdotal single-instance screenshot (Figs. 6, 8), not a validation dataset.
> - **Typologies or frameworks introduced:** A three-part system architecture (sensing -> control/threshold-regulation -> mobile notification); an ultrasonic height-threshold rule for vegetative-stage detection (`x = h - d`, `d = (s * t)/2`); a Faster R-CNN pipeline (region-proposal network -> CNN feature extraction -> SVM classification -> bounding-box regression -> non-maxima suppression) for flower/reproduction-stage detection.
> - **Key figures cited:** pH 5.5-6.4, EC 2.0-3.5 mS, temperature 65-80°F, humidity 60-70%, CO2 800-1500 ppm, LED light 16-18 h/day (Table 1, target ranges — *[unclear source: not tied to a specific in-text citation next to the numbers themselves]*); vegetative-stage NPK ratio 7-9-5, reproduction-stage NPK ratio 5-15-14 (running text, p.3, same sourcing caveat).

---

## Proposed system architecture

**This paper:** Describes a three-part vertical-farming monitoring system: (1) sensing — DHT11 (humidity/temperature), a pH sensor, a TDS meter (EC), an infrared CO2 sensor, a LUX FC light-intensity sensor, and an HC-SR04 ultrasonic sensor, wired through an Arduino microcontroller and a Raspberry Pi board; (2) a control layer intended to keep each parameter within the Table 1 target ranges; (3) a "Farmer Assistant" mobile app receiving alerts via ThingSpeak cloud logging when a growth-stage transition is detected. No circuit diagram, bill of materials cost, or system-level test/uptime data is given — the "cost-effective" framing in the title is not quantified anywhere in the paper (no dollar/rupee figures for any component or for a baseline manual-monitoring comparison).

**Compared with:**
- #todo [[Ruengittinun, Phongsamsuan, and Sureeratanakorn 2017]] — applied IoT for a smart hydroponic farming ecosystem (HFE), cited as a precedent for the mobile-notification architecture used here *(ref [5], p.2)*.
- #todo [[Sihombing, Zarlis, and Herriyance 2019]] — Automatic Nutrition Detection System (ANDES) for hydroponic monitoring via microcontroller and Android smartphone, cited as a precedent for the sensing/app architecture *(ref [6], p.5)*.
- #todo [[Abhiram, Kuppili, and Manga 2020]] — Smart Farming System using IoT for efficient crop growth, cited alongside this paper's sensor stack *(ref [8], p.2)*.
- #todo [[Gour, Reddy, Sridhar, Vishuvardhan, and Ram 2020]] — IoT-based farming techniques in indoor environments, a brief survey, cited as general background *(ref [9], p.2)*.

## Vegetative-stage detection (plant height)

**This paper:** An HC-SR04 ultrasonic sensor mounted above the plant emits a 40 kHz sound pulse and times its reflection off the plant canopy to estimate height: `x = h - d` where `h` is sensor mounting height and `d = (s * t)/2` is the distance travelled (`s` = speed of sound, `t` = travel time). A fixed threshold of 12 cm triggers a "Vegetative Stage Begins" push notification to the farmer's phone (Fig. 6), logged via Arduino + Python + ThingSpeak cloud. The paper states (p.4, running text, not a measured result of this system) that hydroponic tomato reaches roughly 5 inches (~12.7 cm) after about two weeks and four-plus leaves, which appears to be the basis for the chosen 12 cm threshold, though the paper never states this derivation explicitly. No accuracy, false-positive/negative rate, or comparison against manual height measurement is reported — Fig. 6 shows one notification on one seedling tray as a proof-of-concept, not a validated test.

**Compared with:** (no external literature comparison given for the height-threshold method's accuracy specifically — refs [7]/[8] are cited earlier for ultrasonic sensing generally, not for this method's validation)

## Reproduction-stage detection (Faster R-CNN flower detection)

**This paper:** A Raspberry Pi camera captures images sent to cloud storage and then to a mobile device running an on-device TF-Lite inference model (Fig. 7 flowchart). The underlying detection pipeline (Section 4.1) is a Faster R-CNN: Selective Search region proposals -> ResNet50 (50-layer) feature extraction -> a fully-connected Region Proposal Network -> SVM classification -> bounding-box regression -> non-maxima suppression to collapse overlapping boxes. Training data: "more than 500 images" (JPEG, 3264x1832 px, Canon PowerShot camera) — no train/validation split, epoch count, loss curve, or accuracy/precision/recall metric is reported anywhere. A positive flower detection triggers a "Reproductive Stage Begins" notification (Fig. 8), again illustrated with a single example screenshot rather than a quantified validation run.

**Compared with:**
- #todo [[Uijlings, van de Sande, Gevers, and Smeulders 2013]] — Selective Search for object recognition, the region-proposal algorithm this paper's R-CNN pipeline is built on *(ref [1], p.4)*.
- #todo [[Oppenheim, Shani, and Edan]] — Tomato flower detection using Deep Learning, listed under "Further Reading" (not integrated into this paper's own method description, numbers, or a stated comparison — appears to be a citation of relevance rather than a benchmark this paper measures against) *(p.6)*.

## NPK, CO2, and light requirements across plant growth stages

**This paper:** Table 3 gives qualitative ideal NPK levels by stage (Vegetative: N High / P Medium / K High; Reproduction: N Low / P High / K High), and running text (p.3) gives numeric ratios: 7-9-5 (N-P-K) for the vegetative stage, 5-15-14 for the reproductive stage. CO2 targets: ambient ~400 ppm (0.04%) is described as sufficient only at germination; 800-1500 ppm is needed at vegetative/flowering stages (Fig. 3); CO2 is reduced once growth stops at maturity, and the paper separately warns that "excess supply of CO2 severely causes plant damages" without giving an upper safety limit. Light: 8-10 h/day at seedling stage, 16-18 h light + 8 h darkness at vegetative stage, tapering to 10 h at the reproductive stage; the LED temperature range for germination/growth is given as 71-80°F. None of these numbers are attributed to a measurement taken on the authors' own prototype system — they read as general/ideal design targets for hydroponic tomato, restated from the sensor/hydroponics literature the paper cites elsewhere, without a specific citation attached to each individual figure.

**Compared with:** (no external literature comparison given for these specific numeric ranges — see Review scope's "Key figures cited" sourcing caveat)

## Citations to chase

- [ ] #todo Uijlings JRR, van de Sande KEA, Gevers T, Smeulders AWM (2013) — Selective search for object recognition, Int. J. Comput. Vis. 104(2):154-171 — region-proposal algorithm underlying this paper's R-CNN method
- [ ] #todo Kumar S, kumar B, Thakur R, kumar M (2015) — Soil pH sensing techniques and technologies — a review, Int. J. Adv. Res. Electric. Electron. Instrument. Eng. 4(3):4452-4456
- [ ] #todo Jindarat S, Wuttidittachotti P (2015) — Smart Farm Monitoring Using Raspberry Pi and Arduino, 2015 I4CT
- [ ] #todo Saaid MF, Sanuddin A, Ali M, Yassin MSAIM (2015) — Automated pH Controller System for Hydroponic Cultivation, 2015 IEEE ISCAIE
- [ ] #todo Ruengittinun S, Phongsamsuan S, Sureeratanakorn P (2017) — Applied Internet of Thing for Smart Hydroponic Farming Ecosystem (HFE), 2017 UbiMedia
- [ ] #todo Sihombing P, Zarlis M, Herriyance (2019) — Automatic Nutrition Detection System (ANDES) for Hydroponic Monitoring by using Micro controller and Smartphone Android, 2019 ICIC
- [ ] #todo Abas PE, Silva LCD — IoTs Hydroponics System: Effect of light condition towards plant growth, ResearchGate publication 330783053
- [ ] #todo Abhiram MSD, Kuppili J, Manga NA (2020) — Smart Farming System using IoT for Efficient Crop Growth, 2020 IEEE SCEECS
- [ ] #todo Gour MS, Reddy V, Sridhar VM, Vishuvardhan N, Ram VT (2020) — IoT based Farming Techniques in Indoor Environment: A Brief Survey, 2020 ICCES
- [ ] #todo Oppenheim D, Shani G, Edan Y — Tomato flower detection using Deep Learning, ResearchGate publication 344477430

## Extraction notes

**Type classification: `technical-note`.** No controlled manipulation, no defined treatments, no replication, no statistical test, and no biological outcome (yield, growth, survival, composition) is reported anywhere in this 6-page paper — it fails every test for `experiment`/`quasi-experiment`/`field-trial`/`exploratory`/`observational`. It is closer to `methods` ("introduces or validates a technique") in that it proposes two specific detection techniques, but unlike this vault's other `methods`-typed paper (`reyesyanesRealtimeGrowthRate2020`, which reports RMSE tables, a train/validation split, and regression coefficients validating its technique against manual ground truth), neither technique here is validated with any dataset, accuracy metric, or quantified result — each is illustrated with exactly one anecdotal smartphone-notification screenshot. SCHEMA.md's `technical-note` test ("short descriptive report, no hypothesis") is the better match. Per SCHEMA.md Part 1 §"Which types produce CSV rows," only `experiment`/`quasi-experiment`/`field-trial`/`exploratory` get `trials.csv` rows — `technical-note` does not, so `out/sangeethaEnhancedCosteffectiveTechniques2020.trials.csv` is header-only (87 columns, 0 data rows, validated). `plant_measurements.csv` is likewise header-only (11 columns, 0 data rows) — no plant tissue analyte (biochemistry/mineral/microbiology/proximate) data of any kind is reported; the paper's only numeric plant-related figures are the environmental/nutrient-solution *targets* in Tables 1-3, which are system-design parameters, not measured plant tissue.

**Template block judgment call.** As with `goddekImprovingNutrientWater2020` (also non-empirical, also mapped to `Review scope` despite not literally being a review/policy paper), CLAUDE.md's block rule doesn't name a block for `technical-note`. Because this paper reports no design, no replicate count, no duration, and no statistics that would fill `Experiment data`'s fields honestly, `Review scope` was used instead — its "Argument / Evidence base / Key figures cited" fields map far more naturally onto a paper that proposes an approach and restates literature parameter ranges than `Experiment data`'s empirical-study fields would.

**Retraction (see banner at top of note).** Crossref's record for DOI 10.1016/j.matpr.2020.11.557 currently gives the title as "WITHDRAWN: Enhanced and cost-effective techniques used for plant growth in vertical agriculture" with an `update-to` entry `{"DOI": "10.1016/j.matpr.2020.11.557", "type": "retraction", "label": "Retraction", "updated": {"date-parts": [[2020, 12, 31]]}}`. A WebSearch of the ScienceDirect listing for this article (title: "WITHDRAWN: Enhanced and cost-effective techniques used for plant growth in vertical agriculture — ScienceDirect") returned a summary stating the withdrawal was applied to the *entire* Proceedings of the International Conference on Emerging Trends in Materials Science, Technology and Engineering (ICMSTE2K21) collectively, over "serious concerns... regarding the integrity and veracity of the conference organisation and peer-review process." I could not independently re-fetch the primary Elsevier/ScienceDirect retraction notice text (403 Forbidden on direct WebFetch), so this is reported at one remove — a WebSearch summary of the ScienceDirect page, not a verbatim read of the notice itself. Recorded here per the prime directive rather than omitted, since it is directly relevant to how much weight this paper's content should be given; flagged as the single most important fact about this paper.

**Not an aquaponics paper — scope judgment call.** The word "aquaponic" appears exactly once in the entire text (Introduction, p.1: "The vertical farming can be one of the three soilless systems for providing nutrients to crops that includes hydroponic, aeroponic, or aquaponic"). No fish, tank, biofilter, RAS, or aquaculture organism is named, described, or measured anywhere else in the paper — every sensor, target range, and demonstration image is for a plain hydroponic (nutrient-solution) tomato setup. Recorded here rather than silently dropped, since the paper is nonetheless present in this vault's `pdfs/` folder and CLAUDE.md requires every paper to get a note. No `Meta/Fish/` tag applied (nothing to tag — this is not the `NR`-vs-silence distinction, there is no aquaculture component in this system at all, so the fish block would be `NA` in a `trials.csv` row if one existed).

**Plant tag judgment call — no `Meta/Plant/Tomato` tag applied.** Tomato plants appear in every demonstration figure (Fig. 2 growth-stage diagram is a generic tomato-stage illustration, not this paper's own data; Figs. 4, 6, 8 show an actual tomato seedling/plant used to demonstrate the prototype hardware and app). However, per CLAUDE.md's rule ("Only tag an organism if the paper studied it... A review mentioning tilapia in passing is not tagged"), no biological measurement, growth outcome, or trial was conducted *on* this tomato plant — it appears only as a hardware-demonstration subject for the height sensor and the app notification screenshots, not as a studied organism with a reported result. Treated as equivalent to a review's passing mention rather than a study subject; not tagged.

**[not reported] / [unclear] fields, grouped (narrative — no `trials.csv` cells exist for this paper):**
- Fish/aquaculture: entirely absent — see scope note above. Not even mentioned beyond the single passing "aquaponic" reference.
- Cost figures: the title and running text repeatedly call the proposed system "cost-effective," but no bill of materials, per-unit sensor/hardware cost, or comparison against a manual-monitoring baseline cost is given anywhere — the cost claim is asserted, not quantified.
- Validation metrics for both proposed techniques (height-threshold and R-CNN flower detection): no accuracy, precision, recall, F1, false-positive/negative rate, sample size beyond ">500 images" (R-CNN training set only, not a held-out validation set), or statistical test of any kind. Figs. 6 and 8 are single anecdotal screenshots, not validation data — per the vault's "never read a value off a figure" convention, and more fundamentally because there is no numeric validation result to read even if figures were used for that purpose.
- Basis for the 12 cm vegetative-stage height threshold: plausibly derived from the paper's own earlier statement that hydroponic tomato reaches "approximately around 5 or more than 5 in[ches]" (~12.7 cm) after two weeks, but the paper never explicitly states this as the threshold's derivation — left [unclear] rather than assumed.
- Source of Table 1-3's numeric ranges (pH, EC, temperature, humidity, CO2, light hours, NPK ratios): not tied to a specific in-text citation adjacent to the numbers themselves, despite the surrounding paragraphs citing refs [2], [4], [7]-[9] for related sensing/hydroponics concepts. [unclear] whether these are the authors' own design choices, uncredited restatements of a specific cited source, or general "well-known" hydroponics figures.
- Funding: no funding/acknowledgements section in the PDF at all (only CRediT authorship-contribution and competing-interest statements).
- Final volume/page/issue: never assigned — paper remained "Article in Press" (per the PDF's own running header) at the time the whole proceedings was withdrawn.

**PDF quality:** Clean, fully extractable two-column Elsevier text layer (6 pages, "ARTICLE IN PRESS" banner on every page), no OCR needed. One extraction-layer artifact worth flagging: the two height-calculation equations on p.4 render with garbled operators in the PDF's text layer (e.g. "x ¼ h  d" for what the surrounding prose and Fig. context make clear is `x = h - d`, and "d ¼ ð Þ sxt =2" for `d = (s x t)/2`) — a common PDF-to-text artifact for special characters (minus signs, parentheses) in equations set outside the main text flow, not a scanned/garbled-OCR document. Equations transcribed in the "Vegetative-stage detection" section above using the standard mathematical notation implied by the surrounding text, not the literal garbled glyphs.

**Tags judgment call:** `Meta/Region/South-Asia` applied on the basis of both authors' Chennai, Tamil Nadu, India affiliations (reusing the existing vault leaf spelling from `akterComparisonIndianSpinach2025`, `debroyModelBasedPredictive2024`, `singhAquaponicProductionOrnamental2024`, `madusankaComparativeAssessmentIntensive2023`), consistent with the "affiliation-based placeholder when no physical trial site is stated" precedent set in `enduta­NutrientRemovalAquaculture2011`/`debroyModelBasedPredictive2024` — no physical deployment site is described beyond the two institutions. No new tag facets introduced.

**New wikilink targets introduced:** [[T. Sangeetha]], [[P. Ezhumalai]] — no existing author notes found in the vault for either name.

---
*Source: `Sangeetha and Ezhumalai - 2020 - Enhanced and cost-effective techniques used for pl.pdf`*
