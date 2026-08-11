---
title: "Navigating towards Decoupled Aquaponic Systems: A System Dynamics Design Approach"
citekey: "goddekNavigatingDecoupledAquaponic2016"
year: 2016
type: modelling
doi: "10.3390/w8070303"
url: "https://doi.org/10.3390/w8070303"
trials: 0
tags:
  - Meta/Type/Modelling
  - Meta/Region/Europe
  - Meta/Fish/Tilapia
  - Meta/Plant/Lettuce
status: unread
---

# Navigating towards Decoupled Aquaponic Systems: A System Dynamics Design Approach

## Metadata
* **Cite key:** goddekNavigatingDecoupledAquaponic2016
* **Item type:** Journal Article
* **Authors:** [[S. Goddek]], [[C.A. Espinal]], [[B. Delaide]], [[M.H. Jijakli]], [[Z. Schmautz]], [[S. Wuertz]], [[K.J. Keesman]]
* **Affiliation:** Biobased Chemistry and Technology, Wageningen University, Wageningen, The Netherlands (Goddek, Keesman); Aquaponik Manufaktur GmbH, Issum, Germany (Goddek); LandIng Aquaculture, Oirschot, The Netherlands (Espinal); Integrated and Urban Plant Pathology Laboratory, Université de Liège, Gembloux, Belgium (Delaide, Jijakli); Institute for Natural Resource Sciences, Zurich University of Applied Science (ZHAW), Wädenswil, Switzerland (Schmautz); IGB, Ecophysiology and Aquaculture, Berlin, Germany (Wuertz)
* **Journal:** Water 8 (2016) Article 303, Issue 7
* **Date:** 07/2016
* **Date added:** 2019-01-16
* **DOI:** [10.3390/w8070303](https://doi.org/10.3390/w8070303)
* **Funding:** Aquaponik Manufaktur GmbH and COST Action FA1305: The EU Aquaponics Hub - Realizing Sustainable Integrated Fish and Vegetable Production for the EU (Acknowledgments)
* **URL:** https://doi.org/10.3390/w8070303
* **PDF:** `Goddek et al. - 2016 - Navigating towards Decoupled Aquaponic Systems A .pdf`

> [!tip] Opinion
>
> This is the base AnyLogic system-dynamics model that several later Goddek-group papers (e.g., the 2018 desalination paper) extend directly — worth reading first in citation order. It is transparent about its own limits: the authors explicitly flag that there is no empirical validation of the hydroponic component's productivity and call the whole study "theoretical." The value is in the design logic (evapotranspiration-driven sizing, P as the recommended sizing nutrient rather than N or feed rate) and in the compiled optimal-conditions tables (Tables 2-4), which read as a literature synthesis in their own right and are reused as parameter sources by sibling papers.

## Abstract

The classical working principle of aquaponics is to provide nutrient-rich aquacultural water to a hydroponic plant culture unit, which in turn depurates the water that is returned to the aquaculture tanks. A known drawback is that a compromise away from optimal growing conditions for plants and fish must be achieved to produce both crops and fish in the same environmental conditions. The objective of this study was to develop a theoretical concept of a decoupled aquaponic system (DAPS), and predict water, nutrient (N and P), fish, sludge, and plant levels. This has been approached by developing a dynamic aquaponic system model, using inputs from data found in literature covering the fields of aquaculture, hydroponics, and sludge treatment. The outputs from the model showed the dependency of aquacultural water quality on the hydroponic evapotranspiration rate. This result can be explained by the fact that DAPS is based on one-way flows. These one-way flows results in accumulations of remineralized nutrients in the hydroponic component ensuring optimal conditions for the plants. The study also suggests to size the cultivation area based on P availability in the hydroponic component as P is an exhaustible resource and has been identified one of the main limiting factors for plant growth.

## Summary

The authors built an AnyLogic system-dynamics model of a three-loop decoupled aquaponic system (DAPS: RAS, hydroponics, and an anaerobic nutrient remineralization component/ANRC built around a UASB reactor), parameterized entirely from prior published literature (tilapia growth equations, lettuce nutrient uptake, UASB digestion rates, and a FAO Penman-Monteith evapotranspiration model driven by Köln-Bonn solar radiation data). The model simulates fish biomass, water flow, and N/P dynamics over 1000 simulated days for a four-tank RAS stocked with tilapia (target 50 kg/m3) feeding a lettuce DWC hydroponic unit. Key outputs: RAS nitrate accumulation is governed by the hydroponic evapotranspiration rate (higher ET -> more RAS water replacement -> lower RAS nitrate); under natural light in Central Europe, 100 m2 of lettuce cultivation area keeps RAS nitrate under the 200 mg/L tilapia threshold, while artificial lighting allows a much smaller area to achieve the same result. The authors propose sizing the hydroponic component by phosphorus availability (600 m2 was P-sufficient in their scenario) rather than by feed rate or nitrogen, since P is a finite, remineralization-limited resource, whereas N supplementation is cheap and abundant. No physical system was built or tested; the authors state outright that there is no empirical data on the hydroponic component's productivity and call for future validation.

---

> [!info] Experiment data
> - **Location:** Simulation study; solar radiation/evapotranspiration inputs from measured Köln-Bonn, Germany (50°47'N; 7°5'E) 2014 weather data [ref. 31]. No physical system built or tested for this paper.
> - **Design:** AnyLogic (software ref. [20]) system-dynamics model of a decoupled aquaponic system (DAPS) with three functional units (RAS, hydroponics, ANRC/UASB). Four-step modelling procedure: (1) parameter-variation experiment to size fish stock for a target 50 kg/m3 stocking density; (2) parameter-variation experiment sizing hydroponic cultivation area against RAS N-NO3 thresholds for trout (<40 mg/L) and tilapia (<200 mg/L) under natural vs. artificial light; (3) optimization step sizing the hydroponic area by P availability from RAS + ANRC inflow; (4) UASB reactor sizing from the resulting P/sludge flow.
> - **Replicates / n:** [not applicable] — deterministic simulation, no biological replicates.
> - **Duration:** Simulations run to 1000 simulated days (fish growth cycle within the model set at 200 days, harvested/re-stocked every 50 days; lettuce growth cycle set at 35 days).
> - **Organisms:** [[Oreochromis niloticus]] (Nile tilapia — model fish species) / [[Lactuca sativa]] (lettuce — model plant species, DWC).
> - **Statistics:** [not applicable] — no statistical hypothesis testing; parameter-variation and one optimization experiment (decision variable "amount of fish") conducted in AnyLogic.
> - **Fish stocking:** ~100 fingerlings (10 cm) needed to reach ~50 kg/m3 per tank (1 m3 tank) after 200 days (Figure 10); optimization suggested starting with 60 fingerlings per tank.
> - **RAS N-NO3, natural light:** stays under 200 mg/L with 100 m2 cultivation area (robust fish, e.g. tilapia) (Figure 12, Section 5.2).
> - **RAS N-NO3, artificial light:** a much smaller cultivation area achieves low, stable N-NO3 for both robust and sensitive fish species (Figure 13).
> - **P-based hydroponic sizing:** 600 m2 of lettuce (16 plants/m2) was supportable by combined RAS + ANRC P inflow over 1000 days; P deficit at start-up is corrected by ~day 150 (Figures 16-17).
> - **UASB sizing:** required reactor filling capacity ~140 L for the modelled sludge load at 60% sludge blanket, 3% TSS, 10-day HRT, 80-day SRT (Figure 18).

---

## Model structure and parametrization

**This paper:** Fish (tilapia) growth modelled via `Growth (cm/month) = (T - 18.3)/3.28` and `WT = 2.08 x L^3 / 3.28` (both from Timmons & Ebeling [32], not this study's own data). Optimal FCR assumed 1.1-1.3 for tilapia by growth stage [32], though FCRs of 1.7-1.8 "have been observed" in aquaponics [33] (secondary figures, not measured here). Feed protein content 35%, 9.2% of protein becomes TAN, 95% feed uptake rate, 10% passive denitrification — all sourced from [32]. Lettuce: 35-day growth cycle, 150 g head weight achievable 4 weeks after transplant [33,41], 16 plants/m2, 6 g N and 50 mg P uptake per plant per growth cycle [9] (Licamele 2009 PhD thesis). Table 2 compiles literature optimal-growth thresholds for tilapia (TAN <2.9 mg/L, NO2-N <0.5-1, NO3-N <100-200, T 27-29 degC, O2 4-6 mg/L, pH 6-9, photoperiod 18L:6D). Tables 3-4 compile optimal conditions across multiple fish (tilapia, rainbow trout, catfish, pike-perch) and plant (lettuce, tomato) species, and a hydroponic-vs-aquaponic nutrient solution gap table for lettuce (e.g., N-NO3 gap 74.4%, P-PO4 gap 94%, K gap 83.7% relative to hydroponic optimum) — all reused from cited sources [14,41,72], not generated by this study.

**Compared with:**
- #todo [[Jijakli et al. 2016]] — observed 39% increased plant growth from supplementing hydroponic component with additional fertilizer in a lab-scale DAPS; cited as motivating evidence for DAPS growth advantages.
- #todo [[Goddek 2016 conference]] (Three-loop Aquaponics Systems: Chances and challenges) — cited as showing anaerobic digestates increased plant growth.
- #todo [[Kloas et al. 2015]] — presented a two-unit DAPS (RAS + hydroponics) with evapotranspiration-driven water replacement; this paper explicitly extends that concept to a third (remineralization) unit.
- #todo [[Neto and Ostrensky 2013]] — N/P sludge partitioning data (Table 5) used to parametrize the ANRC/sludge model; this paper's own "personal observations" (RAS) values are compared against it in the same table.
- #todo [[Mirzoyan and Gross 2013]] — UASB nitrate/nitrite removal efficiency and effluent TAN data used to parametrize the ANRC.
- #todo [[Licamele 2009]] — PhD thesis; source of the lettuce N/P uptake-per-plant figures and the fish:plant sizing ratio (2.5 kg feed per 16 lettuce plants) used throughout.

## Nutrient and sludge partitioning (Table 5)

**This paper:** Reports both a literature figure and the authors' own unreferenced "personal observations" for N/P partitioning from Nile tilapia feed in RAS, feeding fish of 9.7% N and 1.7% P content: Neto and Ostrensky [10] (cage systems) — fish retention N 35%/P 28%, water N 33%/P 17%, total sludge N 31%/P 55% (of which feces 13%N/37%P, non-consumed feed 18%N/18%P). Personal observations (RAS, this study) — fish retention N 35-50%/P 60-70%, water N 20-30%/P 5-10%, total sludge N 15-25%/P 35-45%. The authors state their own observed values are closer to Neto and Ostrensky's cage-system figures than to Rafiee and Saad [74]'s RAS figures, and note more P accumulated in fish than in sludge in their own observations. ⚠️CHECK — the source and methodology of the "Personal Observations (RAS)" column in Table 5 is not described anywhere in the Methods (no sample size, location, or measurement method given for this dataset); it reads as a separate, unreported empirical observation embedded in a modelling paper. Because no methodology is stated, this does not meet the bar for a `trials.csv` row (no design, no replicates, no measured outcome variable beyond this one summary table), and the paper's overall classification as `modelling` is not affected — the DAPS system dynamics model itself is the object of the study and used no primary experimental design.

## Linked claims
- [[Decoupled aquaponic systems allow independent optimization of fish and plant growing conditions]]
- [[Evapotranspiration rate governs RAS water replacement and nutrient dilution in decoupled aquaponic systems]]
- [[Phosphorus is the recommended sizing nutrient for decoupled aquaponic hydroponic components]]
- [[Sludge remineralization via anaerobic digestion recovers phosphorus and water in aquaponic systems]]

## Citations to chase
- [ ] #todo Jijakli, Delaide & Gott (2016) — Plant Production Capacity and Nutrient Mass Balance in the PAFF Box; source of the "39% increased growth" figure cited here.
- [ ] #todo Kloas et al. (2015) — A new concept for aquaponic systems to improve sustainability... (Aquac. Environ. Interact. 7:179-192); two-unit DAPS concept this paper extends to three units. Already chased in `goddekNecessityDesalinationTechnology2018.md`.
- [ ] #todo Neto and Ostrensky (2013) — Nutrient load estimation in the waste of Nile tilapia... (Aquac. Res. 46:1309-1322); source of Table 5 literature N/P sludge partitioning values.
- [ ] #todo Mirzoyan and Gross (2013) — Use of UASB reactors for brackish aquaculture sludge digestion under different conditions (Water Res. 47:2843-2850); UASB parametrization source.
- [ ] #todo Licamele (2009) — Biomass Production and Nutrient Dynamics in an Aquaponics System (PhD thesis, University of Arizona); source of lettuce nutrient uptake and fish:plant sizing ratio.
- [ ] #todo Rafiee and Saad (2005) — Nutrient cycle and sludge production during different stages of red tilapia growth in a RAS (Aquaculture 244:109-118); comparison point for the authors' own sludge partitioning observations.
- [ ] #todo Zekki, Gauthier and Gosselin (1996) — Growth, productivity, and mineral composition of hydroponically cultivated greenhouse tomatoes with/without nutrient solution recycling; cited re: sulfate accumulation risk in recycled nutrient solutions.

## Extraction notes

**Type classification:** `modelling`. The paper is explicitly a "theoretical concept" (Abstract) built entirely on an AnyLogic system-dynamics model, with every fish-growth, lettuce-uptake, and UASB-performance parameter sourced from prior literature ([9,10,17,32,33,41], etc.) rather than measured by the authors for this study. There is no randomized treatment, no replication, and no statistical hypothesis test anywhere in the paper — only parameter-variation and one optimization experiment run in the simulation software. The Discussion and Conclusion sections state directly: "there is no empirical data on the productivity of the system's hydroponic component" and "this study is of a theoretical kind and needs to be verified." This fails every test for `experiment`/`quasi-experiment`/`field-trial`/`exploratory` in SCHEMA.md and is not a review either — it proposes and quantitatively simulates a specific novel system design rather than narratively synthesising others' findings. `modelling` is the only defensible classification.

**Confirmed as the paper cited by the sibling desalination paper:** Yes. This PDF's title page confirms: title "Navigating towards Decoupled Aquaponic Systems: A System Dynamics Design Approach"; authors Simon Goddek, Carlos Alberto Espinal, Boris Delaide, Mohamed Haissam Jijakli, Zala Schmautz, Sven Wuertz, Karel J. Keesman; journal header "Water 2016, 8, 303; doi:10.3390/w8070303"; received 24 February 2016, accepted 12 July 2016, published 21 July 2016. This exactly matches the citation "Goddek et al. (2016) — Navigating towards decoupled aquaponic systems: a system dynamics design approach, Water 8:303" listed in `notes/goddekNecessityDesalinationTechnology2018.md`'s Citations-to-chase section, and reference [12] in that paper is explicitly the source of the RAS/lettuce parameters (fish growth equations, tilapia thresholds, lettuce uptake rates) reused there. Confirmed match.

**[not reported]:**
- Individual author affiliations for corresponding vs. contributing roles beyond the numbered footnotes on the title page (used as given).
- Precise funding amounts or grant numbers — Acknowledgments names Aquaponik Manufaktur GmbH and COST Action FA1305 as support, with no monetary figures.
- Methodology (sample size, location, measurement method) for the "Personal Observations (RAS)" column in Table 5 — see ⚠️CHECK note above.

**[unclear]:**
- Whether the "Personal Observations (RAS)" data in Table 5 derives from a real physical RAS operated by one of the co-authors (e.g., via Aquaponik Manufaktur GmbH) or is itself drawn from an uncited prior study; the paper does not say, and it is not treated as this paper's own reportable experimental dataset given the complete absence of methods for it.

**Contradictions:** None rising to WARN-BLOCK or WARN-MATERIAL severity found in the paper's own stated model parameters or results. The one flagged item (Table 5 "Personal Observations") is a WARN-CHECK on provenance/methodology, not a numeric contradiction — see note above. No `REVIEW.md` entry needed since this does not block or materially affect any extracted cell (no trials.csv/plant.csv rows are produced by this paper).

**No CSV rows:** This is a pure modelling/system-dynamics paper with no live biological trial conducted by the authors for this study (all fish and plant inputs are literature-derived parameters, and the "Personal Observations" table has no stated methodology to extract as a trial). Per CLAUDE.md and SCHEMA.md, only `experiment`, `quasi-experiment`, `field-trial`, and `exploratory` papers get `trials.csv`/`plant.csv` rows — `trials.csv` and `plant.csv` outputs for this paper are header-only.

---
*Source: `Goddek et al. - 2016 - Navigating towards Decoupled Aquaponic Systems A .pdf`*
