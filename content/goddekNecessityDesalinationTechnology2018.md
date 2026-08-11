---
title: "The necessity of desalination technology for designing and sizing multi-loop aquaponics systems"
citekey: "goddekNecessityDesalinationTechnology2018"
year: 2018
type: modelling
doi: "10.1016/j.desal.2017.11.024"
url: "https://doi.org/10.1016/j.desal.2017.11.024"
trials: 0
tags:
  - Meta/Type/Modelling
  - Meta/Region/Africa
  - Meta/Fish/Tilapia
  - Meta/Plant/Lettuce
status: unread
---

# The necessity of desalination technology for designing and sizing multi-loop aquaponics systems

## Metadata
* **Cite key:** goddekNecessityDesalinationTechnology2018
* **Item type:** Journal Article
* **Authors:** [[S. Goddek]], [[K.J. Keesman]]
* **Affiliation:** Biobased Chemistry & Technology, Wageningen University, P.O. Box 17, 6700 AA Wageningen, The Netherlands
* **Journal:** Desalination 428 (2018) 76-85
* **Date:** 02/2018
* **Date added:** 2019-01-16
* **DOI:** [10.1016/j.desal.2017.11.024](https://doi.org/10.1016/j.desal.2017.11.024)
* **Funding:** [not reported]
* **URL:** https://doi.org/10.1016/j.desal.2017.11.024
* **PDF:** `Goddek and Keesman - 2018 - The necessity of desalination technology for desig.pdf`

> [!tip] Opinion
>
> A clean, narrowly-scoped systems-engineering paper: it takes the AnyLogic decoupled-aquaponics model from Goddek et al. (2016) and bolts on a fourth (desalination) loop, then shows via simulation that concentrating the hydroponic solution while diluting the RAS water solves the nitrate mismatch that plagues simple decoupled systems. All inputs are drawn from prior literature/parametrisation rather than a new live trial, and the authors are explicit that the model is unvalidated against a physical facility (relying instead on a sensitivity analysis of evapotranspiration inputs). Useful as a design rationale for why a nutrient-concentration loop is needed, not as an empirical yield/growth result.

## Abstract

Providing both fish and plants with optimal environmental conditions is a classical problem in the field of aquaponics. Several studies have tackled this problem by decoupling fish and plant systems. However, in order to achieve both high nutrient levels for the plants and low nutrient and particulate loading in the fish tanks, suspended matter in the aquaculture component needs to be discharged and fertilizer needs to be added to the plants continuously. The present study aims to explore to what degree desalination technology could potentially be used to provide the necessary balance between the two different components based on a theoretical modelling approach using contemporary source material. We suggest how specific desalination engineering approaches can improve the nutrient balances in multi-loop aquaponics systems in order to attain optimal growth conditions for both fish and plants.

## Summary

The authors extend an existing AnyLogic system-dynamics model of a decoupled three-loop aquaponics system (RAS, hydroponics, mineralization) by adding a fourth, desalination loop that concentrates nutrients returning to the hydroponic sump while sending demineralized water back to the RAS. Using literature-derived parameters for Nile tilapia and lettuce, plus historical Walvis Bay (Namibia) weather data run through the FAO Penman-Monteith equation for evapotranspiration, they simulate nitrate dynamics in the RAS and hydroponic loops over 1000 days with and without the desalination unit, and at two desalination feed-flow rates (70 and 20 L/h). Without desalination, RAS nitrate rises well above the tilapia threshold (>200 ppm) while hydroponic nitrate oscillates below the lettuce optimum; with desalination, RAS nitrate stabilizes near or below species-safe levels (about 40-50 ppm at 70 L/h, about 120 ppm at 20 L/h) while hydroponic nitrate settles near 380-430 ppm. A sensitivity analysis (+/-10% evapotranspiration) shows the non-desalinated system is far more sensitive to ET assumptions than the desalinated one. The paper also tabulates four real European decoupled aquaponics systems (NerBreen, Tilamur, IGB Berlin, Inagro) for context, none of which regulate nutrient concentration the way the proposed design does. No physical prototype of the four-loop design was built or tested; the conclusions rest entirely on the simulation.

---

> [!info] Experiment data
> - **Location:** Simulation study; weather input from Walvis Bay, Namibia. Modelling performed at Wageningen University (no physical system built for this paper).
> - **Design:** AnyLogic (PLE v8.1) system-dynamics model of a 4-loop aquaponics system (RAS, hydroponic, mineralization, desalination), extending the model of Goddek et al. [12] (2016). Nitrate mass balances simulated over 1000 days under 4 scenarios: no desalination; desalination at 70 L h⁻¹; desalination at 20 L h⁻¹; plus a +/-10% evapotranspiration sensitivity analysis (Appendix B) for both no-desalination and desalination cases.
> - **Replicates / n:** [not applicable] — deterministic simulation, no biological replicates.
> - **Duration:** 1000 simulated days.
> - **Organisms:** [[Oreochromis niloticus]] (Nile tilapia, parameters from Goddek et al. 2016) / [[Lactuca sativa]] (lettuce, baby leaf).
> - **Statistics:** [not applicable] — no statistical hypothesis testing; a discrete, gradient-free direct search method [41] was used only to optimize the desalination unit's flow capacity so RAS nitrate stayed just below 50 ppm.
> - **Nitrate (RAS), no desalination:** rises to a peak, oscillating roughly 300-580 ppm over the simulated period (read from Fig. 3; no single summary value stated in text) — exceeds the paper's stated tilapia threshold of <100-200 ppm (Table 1).
> - **Nitrate (HP), no desalination:** oscillates roughly 130-280 ppm (Fig. 3), below the stated lettuce optimum of >700 ppm (Table 1).
> - **Nitrate (RAS), desalination at 70 L h⁻¹:** stabilizes "close to the trout's allowable threshold of 40 ppm" (text, p.79); Fig. 4 shows roughly 20-50 ppm steady state.
> - **Nitrate (HP), desalination at 70 L h⁻¹:** "steady state conditions around 430 ppm" (text, p.79).
> - **Nitrate (RAS), desalination at 20 L h⁻¹:** "average nitrate concentration in the RAS system increases to 120 ppm" (text, p.79).
> - **Nitrate (HP), desalination at 20 L h⁻¹:** "slightly lower" than the 70 L h⁻¹ case (text, p.79); Fig. 5 shows roughly 350-390 ppm.
> - **Cultivation area:** ~30 m² for leafy greens without mineralization (α=0.45, β=0, η=0); ~60 m² with mineralization (η=0.90) (Fig. 2, p.79).

---

## Model inputs and assumptions

**This paper:** RAS parameters (Table 2): water temp 29.5 degC, 83 fish/tank, 4 tanks, 1 m3/tank (5.1 m3 total system volume), fingerling size 0.1 (unit given only as "M" in Table 2 — [unclear], likely a units/formatting artifact for kg or g), harvest weight 0.6 kg, feed protein 35%. Hydroponic parameters (Table 3): 0.04 kg feed per m2 lettuce cultivation area (rule of thumb), 36 baby-leaf lettuce plants/m2, 28 m2 cultivation area (model outcome), 9.40 m3 total DWC volume, starting nitrate 700 ppm, observed leaf N at experiment end 0.391 mol kg-1 dry matter. Sludge assumptions: 55% of feed-derived nutrient input ends up in sludge [37,38]; UASB mineralization efficiency ~90% [39]; 40% of flow to the desalination unit is mineralized and reusable in RAS [40].

**Compared with:**
- #todo [[Goddek et al. 2016]] (Navigating towards decoupled aquaponic systems, Water 8:303) — source of the base system-dynamics model and RAS/lettuce parameters reused here.
- #todo [[Castro et al. 2009]] — lettuce nitrate uptake data said to be consistent with this study's derived values.
- #todo [[Mathieu et al. 2006]] — lettuce nitrate uptake data said to be consistent with this study's derived values.
- #todo [[Kloas et al. 2015]] — cited in the conclusion as prior work this study builds on.

## Existing multi-loop systems surveyed (Table 5, Appendix A)

**This paper:** Table 5 tabulates four real decoupled aquaponics systems in Europe for context (not this paper's own experimental data — descriptive/secondary information used to motivate the design):
- NerBreen (Basque Country, Spain) — commercial; Nile tilapia; season-dependent tomato/pepper/garlic/strawberry/herbs/lettuce; RAS 300 m3, HP 3500 m2 / 100 m3; 4 loops (RAS, HP, vermiculture, nutrient concentrator); RAS discharge 1%/day; HP discharge zero; mineralization via Californian red worm vermiculture; HP fertilization 40-60%.
- Tilamur/INAPRO (Lorquí, Murcia, Spain) — research; Nile tilapia; tomato; RAS 45 m3, HP 400 m2 / 3 m3; 2 loops; RAS discharge 7%/day; secondary clarifier mineralization; HP fertilization 60%.
- IGB Berlin/ASTAF-PRO (Germany) — research; Nile tilapia; tomato; RAS 16.5 m3, HP 6.5 m2 / 0.6 m3; 2 loops; RAS discharge 2.8%/day; HP fertilization 38.1% (for lettuce, as stated in the table despite tomato being listed as the plant species — [unclear], possibly a table transcription inconsistency in the source paper itself, not corrected here).
- Inagro vzw (Rumbeke-Beitem, Belgium) — research; pike perch; tomato; RAS 160 m3, HP 340 m2 (HP volume n/a); 3 loops (RAS, HP, sludge-to-biogas); RAS discharge 16%/day; HP discharge zero (footnoted as dependent on tomato life stage/weather since RAS and greenhouse were not co-designed); mineralization via biogas; HP fertilization n/a.

## Linked claims
- [[Decoupled aquaponics requires nutrient/water trade-offs between RAS and hydroponic loops]]
- [[Desalination technology can rebalance nutrient concentrations between RAS and hydroponic loops]]
- [[High NH4 concentrations preferred by hydroponics are lethal to fish]]

## Citations to chase
- [ ] #todo Goddek et al. (2016) — Navigating towards decoupled aquaponic systems: a system dynamics design approach, Water 8:303. Source of the base model and RAS/lettuce parameters used in this paper; check vault for existing note before creating a new one (six Goddek papers being processed in this vault batch).
- [ ] #todo Kloas et al. (2015) — new concept for aquaponic systems (Aquac. Environ. Interact. 7:179-192), cited as prior work this study builds on.
- [ ] #todo Castro et al. (2009) — nitrate content of lettuce after sewage sludge fertilization, cited as corroborating this paper's derived lettuce nitrate uptake.
- [ ] #todo Mathieu et al. (2006) — evaluation of the Nicolet model for hydroponic lettuce nitrate uptake, cited as corroborating this paper's derived lettuce uptake.
- [ ] #todo Goddek & Vermeulen (2017/submitted) — comparison of Lactuca sativa growth in rainwater vs RAS-water hydroponic solutions; source of the N-uptake data adjusted for this model.

## Extraction notes

**Type classification:** `modelling`. The paper explicitly states it uses "a theoretical modelling approach using contemporary source material" (Abstract) and is a "computer-aided design study" (Introduction) built on an AnyLogic system-dynamics model. No new fish or plant were grown for this paper: fish and hydroponic parameters (Tables 2-3) are stated to be reused from Goddek et al. [12] (2016), and evapotranspiration is calculated from historical Namibian weather data via the FAO Penman-Monteith equation, not measured. There is no replication, no randomised treatment allocation, and no statistical hypothesis test — the only optimization is a gradient-free search to size the desalination unit's flow capacity. This clearly fails the `experiment`/`quasi-experiment`/`field-trial`/`exploratory` tests in SCHEMA.md (no live biological trial, no data the authors collected themselves for this study) and is not a review either (it proposes and quantitatively simulates a specific novel design, rather than synthesising others' findings narratively). `modelling` is the correct and only defensible classification.

**[not reported]:**
- Funding / grant support — the Acknowledgements section thanks named individuals (Rolf Morgenstern, Alyssa Joyce, Sven Wuertz, Mariano Vidal, Fernando Sustaeta, Dieter Anseeuw, Hendrik Monsees) for input/data/review, but no funding body, grant number, or financial support statement appears anywhere in the paper.
- Date added to Zotero shown in the note (2019-01-16) comes from `zotero-export.csv`, not stated in the PDF itself.

**[unclear]:**
- Table 2 "Fingerling size" unit is given as "M" with value 0.1 — likely a typographic/OCR artifact for a mass unit (e.g., g or kg) rather than meters, but the paper does not clarify and no value can be confidently assigned a corrected unit, so left as [unclear] rather than guessed.
- Table 5: IGB Berlin's "HP fertilization" column reads "38.1 (for lettuce)" even though the same row lists "Tomato" as the plant species — this inconsistency exists in the source table itself; not resolved or corrected here, flagged as [unclear] provenance rather than treated as this paper's own error to fix.
- Precise numeric RAS/HP steady-state nitrate values for Figs. 3-5 and Appendix B (Figs. B.1-B.4) are given only as line charts; where the running text states a number (e.g., "close to 40 ppm," "around 430 ppm," "increases to 120 ppm") those are recorded above with page citation, but other values are visual approximations from the figures only and are not treated as precise reported statistics, per the "never read values off a figure" rule in SCHEMA.md — no plant.csv/trials.csv rows are created from them regardless.

**Contradictions:** None rising to WARN-BLOCK/MATERIAL/CHECK severity were found in this paper's own reported values — the IGB Berlin table inconsistency above is a data-provenance oddity in a contextual/secondary table (Table 5, sourced from other groups' systems), not a contradiction within this paper's own experimental findings, and does not affect any cell since this paper produces no trials.csv/plant.csv rows.

**No CSV rows:** This is a pure modelling/design paper with no live biological trial — `trials.csv` and `plant.csv` outputs are header-only per CLAUDE.md and SCHEMA.md ("Only `experiment`, `quasi-experiment`, `field-trial`, and `exploratory` [get CSV rows]").

---
*Source: `Goddek and Keesman - 2018 - The necessity of desalination technology for desig.pdf`*
