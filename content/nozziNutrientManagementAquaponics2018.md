---
title: "Nutrient Management in Aquaponics: Comparison of Three Approaches for Cultivating Lettuce, Mint and Mushroom Herb"
citekey: "nozziNutrientManagementAquaponics2018"
year: 2018
type: quasi-experiment
doi: "10.3390/agronomy8030027"
url: "https://doi.org/10.3390/agronomy8030027"
trials: 9
tags:
  - Type/Quasi-experiment
  - Region/Europe
  - Fish/Tilapia
  - Plant/Lettuce
  - Plant/Mint
  - Plant/Mushroom-Herb
status: unread
quality: ok
---

# Nutrient Management in Aquaponics: Comparison of Three Approaches for Cultivating Lettuce, Mint and Mushroom Herb

## Metadata

* **Cite key:** nozziNutrientManagementAquaponics2018
* **Item type:** Journal Article
* **Authors:** [[V. Nozzi]], [[A. Graber]], [[Z. Schmautz]], [[A. Mathis]], [[R. Junge]]
* **Affiliation:** Department of Life and Environmental Science, Universita Politecnica delle Marche, Ancona, Italy (Nozzi); Institute for Natural Resource Sciences, Zurich University of Applied Sciences (ZHAW), Wadenswil, Switzerland (Graber, Schmautz, Mathis, Junge)
* **Journal:** Agronomy 8(3) (2018) 27 (article number, MDPI journal — not a page range)
* **Date:** 03/2018 (published 7 March 2018)
* **Date added:** 2026-08-09
* **DOI:** [10.3390/agronomy8030027](https://doi.org/10.3390/agronomy8030027)
* **Funding:** COST Action FA1305 — The EU Aquaponics Hub — Realising Sustainable Integrated Fish and Vegetable Production for the EU, Short Term Scientific Mission Grant to V. Nozzi; ZHAW Institute of Natural Resource Sciences (publication funding and research facilities)
* **URL:** https://doi.org/10.3390/agronomy8030027
* **PDF:** `Nozzi et al. - 2018 - Nutrient Management in Aquaponics Comparison of T.pdf`

> [!tip] Opinion
>
> A clean, useful early ZHAW-lab paper that answers a genuinely practical question — how much supplementation does aquaponic water actually need? — with a graduated-input design (fish-feed-only, +micronutrients/Fe, +macronutrients) rather than the usual binary AP-vs-HP comparison. Its main structural limitation is that every treatment (A, B, C, D) is a single unreplicated system: three species share four tanks with no system-level replication anywhere, so all statistics run on plant- or fish-level pseudo-replicates within one tank per treatment (same limitation as the same lab's earlier `graberAquaponicSystemsNutrient2009`). This doesn't invalidate the findings but means every yield/quality difference is a one-tank story, not a population-level one. A second real cost to this vault: the paper's own headline claim — that unsupplemented System A had lower tissue nitrate and thus "better nutritional quality" — is only ever shown in a bar chart (Figure 5) with no table or in-text numbers, so `plant_measurements.csv` cannot capture the paper's central quality claim at all. Worth citing for the graduated-supplementation framing and the clean Total-Input mass-balance table (Table 4); go to the PDF's Figure 5 directly if the actual nitrate numbers are ever needed.

## Abstract

Nutrients that are contained in aquaculture effluent may not supply sufficient levels of nutrients for proper plant development and growth in hydroponics; therefore, they need to be supplemented. To determine the required level of supplementation, three identical aquaponic systems (A, B, and C) and one hydroponic system (D) were stocked with lettuce, mint, and mushroom herbs. The aquaponic systems were stocked with Nile tilapia. System A only received nutrients derived from fish feed; system B received nutrients from fish feed as well as weekly supplements of micronutrients and Fe; system C received the same nutrients as B, with weekly supplements of the macronutrients, P and K; in system D, a hydroponic inorganic solution containing N, Ca, and the same nutrients as system C was added weekly. Lettuce achieved the highest yields in system C, mint in system B, and mushroom herb in systems A and B. The present study demonstrated that the nutritional requirements of the mint and mushroom herb make them suitable for aquaponic farming because they require low levels of supplement addition, and hence little management effort, resulting in minimal cost increases. While the addition of supplements accelerated the lettuce growth (Systems B, C), and even surpassed the growth in hydroponic (System C vs. D), the nutritional quality (polyphenols, nitrate content) was better without supplementation.

## Summary

The authors ran a four-week (29 May-30 June 2015) side-by-side comparison of three identical floating-raft aquaponic systems (A, B, C), each stocked with 50 Nile tilapia, and one conventional hydroponic system (D), all growing lettuce, mint, and mushroom herb simultaneously. The three aquaponic systems differed only in how much mineral supplementation was added on top of fish-derived nutrients: A received none, B received weekly micronutrients plus Fe, and C received B's supplement plus the macronutrients P and K (and Mg/S as carriers); D received a full inorganic hydroponic solution built on the same recipe as C plus N and Ca. They tracked water chemistry (pH, DO, EC, NH4-N, NO2-N, NO3-N, PO4-P, K, Fe, Ca, Mg), fish growth (FCR, SGR, survival), and plant outcomes (fresh biomass, per-plant shoot weight, root:shoot ratio, chlorophyll/flavonol indices via a Dualex leaf-clip, leaf tissue nitrate, dry matter, C/N ratio, and post-harvest water loss) for all three species across all four systems. Lettuce yield rose steadily with supplementation (System C surpassed even the hydroponic control D), while mint peaked at the intermediate System B and mushroom herb did best with little or no supplementation (A and B), leading the authors to argue that different species have fundamentally different aquaponic management-effort requirements. Despite unsupplemented System A's lettuce and mint growing more slowly and allocating more biomass to roots (a nutrient-foraging response, most likely driven by phosphorus limitation), those same System A plants had higher dry matter, higher polyphenol content, and lower leaf nitrate than their more heavily supplemented counterparts — the paper's central argument that maximizing management effort and inputs does not maximize either yield or quality, and that matching supplementation to species-specific need is the more defensible strategy.

---

> [!info] Experiment data
> - **Location:** Foliar greenhouse, Zurich University of Applied Sciences (ZHAW), Wadenswil, Switzerland (47.217262, 8.681461)
> - **Design:** 3 aquaponic nutrient regimes (A: fish-feed only; B: +micronutrients/Fe; C: +macronutrients P/K/Mg/S) vs. 1 hydroponic control (D: full inorganic solution); ONE system per treatment (no system-level replication — see Extraction notes on `quasi-experiment` classification); 3 plant species (lettuce, mint, mushroom herb) grown concurrently in every system
> - **Replicates / n:** 1 system per treatment; plant sub-samples n=6 (root:shoot ratio, CHL/FLV/NBI, dry-matter fraction) or n=3 (tissue NO3, C/N ratio); fish n=50/tank
> - **Duration:** Fish: 57 days (4 May-30 June 2015). Plants: ~4 weeks from transplant (29 May), harvested 26 June (lettuce, 28 d), 29 June (mint, 31 d), 30 June (mushroom herb, 32 d)
> - **Organisms:** [[Nile tilapia (Oreochromis niloticus)]] / [[Lettuce (Lactuca sativa)]] 'YACHT' (Salanova(R)) / Mint (*Mentha piperita* 'CHOCOLATE') / Mushroom herb (*Rungia klossii*)
> - **Statistics:** One-way [[ANOVA]] + Bonferroni multiple-comparison test, GraphPad Prism v5.00, p<0.05 (applied to Figs 3-6 physiological/quality indices; Table 3 yield data has no stated significance test)
> - **[[Feed Conversion Rate (FCR)]]:** A 1.25, B 1.49, C 1.16
> - **[[Specific Growth Rate (SGR)]]:** A 1.20, B 1.17, C 1.33 %/day
> - **Lettuce shoot yield (kg/m2):** A 4.00, B 4.90, C 6.13, D 5.65 — C > D
> - **Mint shoot yield (kg/m2):** A 3.07, B 4.77, C 4.48, D 4.33 — B highest
> - **Mushroom herb shoot yield (kg/m2):** A 0.34, B 0.33, C 0.21, D 0.27 — A/B highest

---

## Fish growth and water quality

**This paper:** Fish grew from ~220 g to 421-492 g over 57 days across the three aquaponic tanks (A 248->492 g, B 216->421 g, C 226->484 g; Table 2), with FCR 1.25/1.49/1.16 and SGR 1.20/1.17/1.33%/day for A/B/C respectively. Only one fish died in the entire trial (System A). Water quality stayed within ranges the authors describe as compatible with fish health in all systems (pH 5.0-7.4, DO 6.6-8.6 mg/L, Table 1) despite large daily root-zone temperature swings (up to 12 degC) from shallow, sun-exposed floating-raft tables. Calculated average NO3-N was similar across systems (62-84 mg/L) but PO4-P, K, Fe, Ca and Mg diverged sharply with supplementation level (e.g. PO4-P: A 3.5, B 1.9, C 28, D 28 mg/L), confirming the graduated-input design achieved its intended water-chemistry separation.

**Compared with:**
- #todo [[Graber and Junge 2009]] — same ZHAW facility, earlier tomato/lettuce/basil aquaponic-vs-hydroponic mass-balance comparison with the same single-system-per-treatment design; a natural methodological predecessor to this paper.
- #todo [[Bittsanszky et al. 2016]] — reviews aquaponic nutrient-supply limitations generally, cited as the framing reference for why supplementation may be needed (p.1-2).

## Lettuce, mint and mushroom herb growth

**This paper:** Lettuce yield rose monotonically with supplementation (A 4.00 < B 4.90 < C 6.13 kg/m2), with System C exceeding the hydroponic control D (5.65 kg/m2) — the paper's headline "high management can beat hydroponics" result for lettuce specifically. Mint peaked at the intermediate System B (4.77 kg/m2, ahead of C 4.48 and D 4.33), while mushroom herb performed best with the least supplementation (A 0.34, B 0.33 kg/m2) and was actively suppressed by the full macronutrient regime (C 0.21 kg/m2, the lowest of all four systems) — the authors interpret this as growth inhibition under high nutrient concentrations for this species. Root:shoot ratio (Figure 3, figure-only, no absolute values) was significantly higher in System A than the other systems for all three species, and higher in B than C for mushroom herb specifically, consistent with a phosphorus-foraging response under System A's ~10x lower PO4-P (Discussion, p.8, citing Cakmak et al. 1994, Hermans et al. 2006, Fernandez and Rubio 2015 on P-limitation driving root allocation).

**Compared with:**
- #todo [[Buwalda and Warmenhoven 1999]] — greenhouse lettuce (cv. 'Rachel'), found P shortage increases both root:shoot ratio and dry-matter content while decreasing shoot NO3 content — directly cited (p.8) as the mechanistic parallel for System A's lettuce phenotype.
- #todo [[Sorensen et al. 1994]] — crisphead lettuce, nitrogen supply effects on dry matter — cited (p.9) to support the System A dry-matter increase.
- #todo [[Roosta 2014]] — basil grown across a hydroponic:aquaponic irrigation-ratio gradient, comparable graduated-supplementation logic to this paper's A/B/C design (cited p.1, ref. [13]).

## Nitrate content and plant quality

**This paper:** The paper's central quality claim — that unsupplemented System A produced lettuce and mint with lower leaf nitrate, and mint and lettuce with higher polyphenols, than the more heavily supplemented systems — is stated repeatedly in the Discussion but the underlying numbers exist ONLY in Figure 5 (nitrate) and Figure 4 (CHL/FLV/NBI, the Dualex-based proxy for the "polyphenol" claim), both bar charts with significance letters and no companion data table or in-text values. The one significant tissue-NO3 finding stated with any specificity is qualitative: mushroom herb from System B had significantly higher NO3 than the hydroponic control (Section 2.4). All measured lettuce NO3 values are stated to fall below the EU's 4000 mg/kg regulatory limit for greenhouse lettuce (Discussion, p.8), but the actual measured values are never given in text. Per the vault's rule against reading values off figures, none of this was extracted to `plant_measurements.csv` — see Extraction notes.

**Compared with:**
- #todo [[Pavlou et al. 2007]] — romaine lettuce, organic vs. inorganic N sources affect leaf NO3 accumulation — cited (p.8) as a parallel for why AP's organic-derived N might behave differently from D's inorganic N.
- #todo [[Behr and Wiebe 1992]] — lettuce, inverse relationship between leaf NO3 and chlorophyll/sugar production — cited (p.9) as the mechanism linking System A's low NO3 to its high stated CHL.

## Citations to chase

- [ ] #todo Graber, A.; Junge, R. (2009) — Aquaponic systems: Nutrient recycling from fish wastewater by vegetable production, Desalination 246:147-156 — same ZHAW group/facility, earlier single-system-per-treatment design (already in vault as `graberAquaponicSystemsNutrient2009`)
- [ ] #todo Bittsanszky, A.; Uzinger, N.; Gyulai, G.; Mathis, A.; Junge, R.; Kotzen, B.; Komives, T. (2016) — Nutrient supply of plants in aquaponic systems, Ecocycles 2:17-20
- [ ] #todo Buwalda, F.; Warmenhoven, M. (1999) — Growth-limiting phosphate nutrition suppresses nitrate accumulation in greenhouse lettuce, J. Exp. Bot. 335:813-821
- [ ] #todo Sorensen, J.N.; Johansen, A.S.; Poulsen, N. (1994) — Influence of growth conditions on the value of crisphead lettuce, Plant Food Hum. Nutr. 46:1-11
- [ ] #todo Roosta, H.R. (2014) — Comparison of the vegetative growth, eco-physiological characteristics and mineral nutrient content of basil plants in different irrigation ratios of hydroponic:aquaponic solutions, J. Plant Nutr. 37:1782-1803
- [ ] #todo Pavlou, G.C.; Ehaliotis, C.D.; Kavvadias, V.A. (2007) — Effect of organic and inorganic fertilizers applied during successive crop seasons on growth and nitrate accumulation in lettuce, Sci. Hortic. 111:319-325
- [ ] #todo Behr, U.; Wiebe, H.-J. (1992) — Relation between photosynthesis and nitrate content of lettuce cultivars, Sci. Hortic. 49:175-179

## Extraction notes

**Type classification: `quasi-experiment`.** The authors collected their own primary data (Table 1 water-quality monitoring, Table 2 fish growth/FCR, Table 3 plant biomass, Figures 3-6 physiological indices) from a system they designed and operated, so this is primary research, not a review. It is not `experiment` because there is no randomisation and no independently replicated treatment units — each of the four nutrient regimes (A, B, C, D) was run in exactly one system, with no system-level replicate tanks; all reported statistics (ANOVA + Bonferroni) run on plant-level sub-samples (n=6 or n=3) or individual fish within that single system per treatment, which is pseudoreplication at the system level. This matches SCHEMA.md's `quasi-experiment` test exactly ("treatments compared but without randomisation or true replication") and closely parallels the same lab's earlier `graberAquaponicSystemsNutrient2009` (also `quasi-experiment`, one AP run and one HP run per crop, no system-level replication).

**Trial structure: 9 rows, not 3.** SCHEMA.md's worked example (one row per aquaponic treatment) covers the case of N aquaponic arms against one shared hydroponic control. This paper adds an orthogonal second axis: three plant species (lettuce, mint, mushroom herb) were grown simultaneously in every one of the four systems, each with its own species-specific yield, density, and harvest-day data. Following the precedent set by `aslanidouNutrientsUseEfficiency2023` (2 AP treatments x 4 sequential crops = 8 trial rows in this same vault), this paper is recorded as 3 AP treatments x 3 concurrent species = 9 rows (T1-T9). Fish-tank and system-level water-quality data (FCR, SGR, Table 1 ranges) are identical across the three species-rows sharing a given AP system, since all three species grew in the same tank; only the species-specific columns (Plant, Details, Days Plant after transplant, Plants/m2, Plant fresh weight, AP/HYD yield) vary by species within a treatment.

**WARN-CHECK Total Feed (kg) vs. FCR/duration pairing (all 9 rows), Table 2 (p.4) vs. Table 4 (p.11).** Table 4 ("Total input for the four experimental systems") gives a single "Fish feed" mass per system — A 9.20 kg, B 9.74 kg, C 9.50 kg — explicitly tied to "the four-week trial" during which the differential nutrient regimes were applied (Methods 4.2: "Four different nutrient regimes were applied over the four-week trial (see Table 4)"), i.e. the plant/nutrient-supplementation period starting 29 May. Table 2 gives FCR (A 1.25, B 1.49, C 1.16) and total biomass produced (A 11.96, B 10.25, C 12.90 kg) over the full 57-day FISH period (4 May-30 June). Recomputing implied feed consumption from FCR x biomass gain over the 57-day window gives A ~14.95 kg, B ~15.27 kg, C ~14.96 kg (recomputed here only as evidence, never entered in a cell) — substantially more than Table 4's 9.20/9.74/9.50 kg. The two figures almost certainly refer to different, overlapping but non-identical time windows (57-day fish-growth period vs. ~4-week nutrient-regime period), which the paper never explicitly reconciles — a textbook instance of SCHEMA.md's "duration counted from different starting points" CHECK archetype. Recorded Table 4's value in `Total Feed (kg)` since it is the only explicitly stated total-feed figure in the paper, with an inline pointer flagging that it should not be read as the feed total corresponding to the 57-day `Fish trial duration`/FCR pairing recorded elsewhere in the same row. Added to `REVIEW.md`.

**WARN-MINOR Fish size initial (all 9 rows), Methods 4.1 (p.10) vs. Table 2 (p.4).** Methods states fish were stocked "each weighing approximately 220 g"; Table 2 gives actual mean initial weights of 248 g (A), 216 g (B), 226 g (C) — a rounded approximate statement vs. precise per-tank table values, not a genuine conflict (setpoint/approximate vs. measured, per SCHEMA.md — not a contradiction). Table 2's per-tank values used for `Fish size initial`.

**WARN-MINOR NO2-N, System D, Table 1 (p.3).** Printed as "0.25-0.04 mg/L" — bounds in reversed order (min > max), most likely a typesetting error for a low range similar to the aquaponic systems' 0.01-0.04 mg/L band. Transcribed as printed in the CSV's NO COLUMN remarks (no dedicated HYD NO2-N column exists, so no cell is affected either way).

**Recomputation checks that agreed (not flagged, noted for confidence):** SGR recomputed from Table 2's per-fish initial/final weights and the 57-day duration (ln(w_f/w_i)/57 x 100) reproduces the stated 1.20/1.17/1.33%/day for A/B/C to two decimal places, confirming the 57-day duration and per-fish weight figures are mutually consistent. Fish weight gain (final - initial per fish) also matches Table 2's stated "average weight gain per fish" exactly for all three tanks.

**[not reported] fields, grouped:**
- Fish: Fish Category, Initial Stock density (fish-tank volume not stated separately from the ~4200 L total system volume — computing a density would be derivation), Fish survival rate (raw counts given — A 50->49 with one explicit death, B and C 50->50 — but no survival/mortality percentage is itself stated, so left NR per vault convention rather than computed), feed N/P/K composition beyond crude protein (Methods 4.1 gives only crude protein/lipid/fibre/ash in g/kg).
- Water: Water recycle (only a 30-minute pump duty-cycle is stated, not a flow rate), Water type, Water classification, Daily Water exchange rate, FUE AP/HYD, WUE — none of these are stated anywhere in the paper.
- Plant: SPAD (the paper used a Dualex Scientific leaf-clip for CHL/FLV/NBI/ANTH, a different instrument and metric from a SPAD chlorophyll meter — not a substitutable value), Plant height, Leaf count (not among the measured traits — only fresh/dry biomass, root:shoot ratio, the Dualex indices, tissue NO3, and C/N ratio were measured), Plant dry matter (Figure 6 Left reports only a bar chart of dry-weight fraction with no absolute % given in text or a table — see figure-only note below), Tissue nitrate AP/HYD (Figure 5 is figure-only, see below).
- System/site: Water type/classification, Climate control (foliar greenhouse; only fish-tank temperature/O2 is actively regulated via the SC1000 controller — no described greenhouse-level heating/cooling/humidity system), Average room Temperature (only water/root-zone temperatures are reported in Table 1; no separate ambient greenhouse air temperature is stated), Biological system already in use.

**Figure-only data, not extracted anywhere (the paper's most consequential omission for this vault):** Chlorophyll content (CHL), epidermal UV-absorbance/flavonols (FLV), and the CHL:FLV ratio (NBI) — Figure 4, all three species, all four systems, n=6 — reported only as a bar chart with significance letters; the only numeric values in running text are qualitative ("significantly lower," "highest," etc.), with no table. Leaf tissue nitrate (NO3, mg/kg) — Figure 5, all three species, n=3 — same situation; this is the paper's single most citable number for its "better nutritional quality without supplementation" claim, and it cannot be extracted per the vault's rule against reading figures. Dry-matter fraction of fresh biomass (shoots and roots) — Figure 6 Left, n=6 — qualitative text only ("higher dry matter content in system A... p<0.05"). Carbon:nitrogen atomic ratio — Figure 6 Right, n=3 — qualitative text only. Root:shoot ratio — Figure 3, n=6 — qualitative text only ("significantly higher in system A than the other systems," "also significantly higher in system B than in C for the mushroom herbs"). None of these five figures have a companion data table anywhere in the paper (checked all 15 pages). As a direct consequence, `plant_measurements.csv` for this paper contains **zero data rows** (header only) — every category the schema defines (biochemistry, mineral, microbiology, proximate) is represented in this paper's underlying dataset, but none of it clears the "never read a value off a figure" bar. Flagging explicitly per SCHEMA.md's instruction to say so rather than force-fit or silently drop, consistent with this vault's prior handling of `aslanidouNutrientsUseEfficiency2023` (also 0 plant.csv rows, same figure-only problem, same research lineage).

**Non-figure data with no schema home (`NO COLUMN`, full detail in each trials.csv row's Experimental Remarks):** water-phase PO4-P, K, Fe, Ca, Mg (Table 1) for all four systems — no dedicated water-ion columns exist in trials.csv beyond TAN/NO2-N/NO3-N; System-D-side water quality (pH, DO, EC, root-zone temperature, TAN, NO2-N, NO3-N) since the schema's water columns are aquaponic-loop-only with no paired HYD column; fish-tank compartment temperature ranges (Table 1's "T in fish tank," the alternate compartment to the root-zone value used for `Water temperature` per SCHEMA.md's plant-bed/hydroponic-unit rule); Table 3's "Relative production %" (the paper's own calculated fraction-of-maximum metric); Table 3's system-level total/shoot/root fresh biomass in kg (distinct from the per-plant and per-area figures already captured in `Plant fresh weight` and `AP`/`HYD`); post-harvest water loss during 14-day cold storage (lettuce only: A 24.6%, B 22.3%, C 21.8%, D 23.6% — an explicit, precise, in-text numeric result, but a postharvest-quality metric that fits neither trials.csv nor plant_measurements.csv).

**Judgment call — Remineralization vs. Nutrient supplemented:** SCHEMA.md leaves the distinction between these two paired columns undefined (flagged as an open schema question). This paper's Systems B and C add minerals directly into the same coupled aquaponic loop (not a separate decoupled remineralization step), so both fields were recorded identically (N for A; Y with matching supplement detail for B/C). Noted here so the apparent redundancy is understood as a schema gap, not a copy-paste error.

**Tags judgment call:** `Meta/Plant/Mint` and `Meta/Plant/Mushroom-Herb` are new tags — no existing vault note covers either species. Named following the vault's existing hyphenated-TitleCase convention for multi-word plant tags (e.g. `Meta/Plant/Water-Spinach`, `Meta/Plant/Swiss-Chard`). `Plant Category` left `NR` for lettuce (no categorical term applied by the paper) but recorded as `Herb` for mint and mushroom herb, quoting the paper's own wording ("two herbs: a mint... and mushroom herb," p.10).

**UNIT CONVERSION ONLY (no derivation, values preserved exactly):** feed crude protein 375 g/kg -> 37.5% (divide by 10); fish weights kg -> g throughout Table 2; EC uS/cm -> dS/m throughout Table 1 (divide by 1000); `Days Plant after transplant` computed as calendar-day differences between the stated transplant date (29 May, common to all species, Methods 4.2) and each species' stated harvest date (26/29/30 June respectively, Methods 4.3) — Lettuce 28 d, Mint 31 d, Mushroom herb 32 d, verified by direct date-arithmetic reproducing the paper's own stated 57-day fish-trial duration when applied to the fish stocking/harvest dates (4 May-30 June) as a sanity check on the method.

**PDF quality:** Clean, well-structured text layer (MDPI Agronomy typesetting); all 15 pages extracted without OCR issues. The extracted text contains duplicated paragraphs for several pages (an artifact of the PDF embedding both a "peer review" draft layout and the final typeset layout back-to-back) but the content is identical between duplicates and did not affect extraction.

---
*Source: `Nozzi et al. - 2018 - Nutrient Management in Aquaponics Comparison of T.pdf`*

---

## Data Tables

> [!note] Structured data extracted from this paper into the vault's `trials.csv` / `plant_measurements.csv` datasets. Fields the paper didn't report are omitted. [Download the full datasets](/trials.csv) ([measurements](/plant_measurements.csv)).

### Trial Parameters

#### nozziNutrientManagementAquaponics2018-T1

**Fish**

| Field | Value |
|---|---|
| Fish | Nile tilapia (Oreochromis niloticus) |
| FCR | 1.25 |
| SGR | 1.20 |
| Protein | 37.5 (UNIT CONVERSION ONLY: 375 g/kg -> %, Methods 4.1) |
| % of body weight | 2 |
| Fish size initial | 248 (UNIT CONVERSION ONLY: kg->g, Table 2; see WARN-MINOR) |
| Fish size final | 492 (UNIT CONVERSION ONLY: kg->g, Table 2) |
| Feed routine | 6 automated feeding times/day (07:00, 08:00, 10:00, 12:00, 15:00, 17:00); total feed amount recorded daily (Methods 4.1) |
| Feed regime | ~2% of body weight/day; Tilapia Vegi 4.5 mm floating extruded feed (Hokovit Hofmann Nutrition AG, Butzberg, CH); main ingredients soybean meal, wheat, corn gluten meal, linseed oil (Methods 4.1) |
| Total Feed (kg) | 9.20 (Table 4, 4-week nutrient-trial total; see WARN-CHECK) |
| Fish biomass created (kg) | 11.96 (Table 2, 'Total fish biomass produced') |
| Fish survival rate | NR (raw counts only; see NOT DERIVED) |
| Fish weight gain | 244 (g/fish, UNIT CONVERSION ONLY: kg->g, Table 2) |
| Fish trial duration (days) | 57 (4 May-30 June 2015, Table 2) |

**Water**

| Field | Value |
|---|---|
| Water recycle | NR (only a 30-min pump duty-cycle stated, not a flow rate; see NOT DERIVED) |
| Water volume in the system | 4200 (L, approx. total per AP system, Methods 4.1) |
| Aq pH | 5.1-6.9 (range, n=10 measurements over trial; no mean/SD reported, Table 1) |
| pHOptimal | 6.5 (AP target via KOH buffering, Methods 4.2) |
| Dissolved Oxigen | 7.5-8.3 (range, n=10, mg/L, Table 1) |
| EC | 0.760-1.042 (dS/m; range, n=10; UNIT CONVERSION ONLY from 760-1042 uS/cm, Table 1) |
| Water temperature | 23.5 (degC; single trial-mean value, n>1000 logged root-zone measurements, no SD stated, Table 1 'Average T in root zone') |
| TAN / NH4-N | 0.15 (mg/L, n=3, single reported value, Table 1) |
| NO2-N | 0.03 (mg/L, n=3, single reported value, Table 1) |
| NO3-N | 84 (mg/L; authors' own 'calculated average nutrient concentration', Table 1 caption; no SD/n given for this sub-block) |

**Plant**

| Field | Value |
|---|---|
| Plant | Lactuca sativa 'YACHT' (Salanova(R)) |
| Details | Lactuca sativa 'YACHT' (Salanova(R)), pelleted/coated seed; sown in rockwool cubes 5 May for germination, transplanted to floating-raft holes 29 May (placed directly on table), roots reached water and moved onto rafts after 6 days; 36 plants/system at 20 plants/m2; harvested 26 June (28 d after transplant, UNIT CONVERSION ONLY: date arithmetic 29 May->26 June); 1 of 36 plants unsellable (fresh shoot weight 94 g, fresh root weight 22.6 g, poorly developed with green-yellow leaves, Results 2.2/p.5), excluded from biomass analysis, 35 harvested |
| Days Plant after transplant | 28 |
| Plants/m2 | 20 |
| SPAD (aquaponics) | NR (Dualex leaf-clip CHL/FLV/NBI used instead of a SPAD meter; different instrument/metric, see NOT DERIVED) |
| Plant fresh weight | 222.0 (g/plant, Table 3 'Average shoot weight') |
| Plant dry matter | NR (Figure 6 Left reports only a bar chart of dry-weight fraction, no absolute % in text or table; never read a value off a figure) |
| Tissue nitrate AP | NR (Figure 5 reports NO3 content only as a bar chart with significance letters, no absolute values in text or a table; never read a value off a figure) |
| Tissue nitrate HYD | NR (same reason as Tissue nitrate AP) |

**System & Setup**

| Field | Value |
|---|---|
| System type | Floating raft culture (styrofoam rafts on shallow table, 25 mm water depth; paper's own keyword, p.1) |
| Media Details | Rockwool propagation cubes (germination/rooting); floating styrofoam rafts (Dry Hydroponics B.V., NL) on 3 table sections (1.2 x 2 m each, 7.2 m2 total per system); densities 20 plants/m2 (lettuce), 40 plants/m2 (mint, mushroom herb) (Methods 4.1) |
| Air supplement | Y (Oxygenation zone integral to each AP RAS loop (Methods 4.1 system-design list); temperature/DO regulated to target 26 degC / 8 mg O2 L-1 via HACH Lange SC1000 controller. Scope of this controller (whether it also actively aerates D, which has no fish tank) is not stated explicitly.) |
| Iron supplemented | N (System A received no Fe supplement; Fe present in water only from fish feed/faeces breakdown (Table 1: Fe 0.1 mg/L in A vs 1.8-2.3 mg/L in B/C/D)) |
| Remineralization | N (System A water not remineralized; nutrients derived exclusively from fish feed/faeces (Methods 4.2) \| Judgment call: this paper does not use the term 'remineralization'; recorded Y/N mirroring 'Nutrient supplemented' since both fields describe the same weekly mineral-addition practice for B/C -- see Extraction notes for the ambiguity between these two schema fields.) |
| pH Buffers | Y (KOH added to buffer AP pH to ~6.5; 250 g total over the trial (Table 4, Methods 4.2). HYD (D) used a different agent (350 mL 16% HNO3) to target pH ~6 -- see NO COLUMN in remarks.) |
| Artificial Lighting | N (Plants exposed to natural photoperiod only (Methods 4.1: 'The plants were exposed to a natural photoperiod')) |
| Nutrient supplemented | N (System A received no fertilizer supplement; all nutrients derived from fish feed and faeces only (Methods 4.2; Table 4: 0 g/mL for all supplement rows)) |
| Equipment | HACH Lange SC1000 controller (temp/O2 regulation, fish tank, target 26 degC / 8 mg O2 L-1); HACH Lange HQ40d portable multimeter (temp/pH/EC/O2, 3x/week); Hygrochron iButton temperature loggers (root zone, continuous, first table section); Dualex Scientific leaf-clip (ForceA) (CHL/FLV/NBI/ANTH, live leaf); Reflectoquant Nitrate-Test strip + spectrophotometer (Merck) (leaf NO3); LECO TruSpec CHN Macro Analyser (tissue C/N); HydroBuddy v1.50 nutrient calculator (fertilizer dosing); HACH Lange LCK cuvette tests + DR3800 VIS spectrophotometer (water PO4-P/NH4-N/NO2-N/NO3-N/K/Fe/Ca/Mg/CaCO3); GraphPad Prism v5.00 (statistics) |
| Control Parameters | Fish-tank temperature/DO regulated to 26 degC / 8 mg O2 L-1 (SC1000 controller); AP pH buffered to ~6.5 via KOH; HYD (D) pH buffered to ~6 via 16% HNO3; target water nutrient concentrations used for HydroBuddy dosing calculations: NO3-N 60 mg/L, PO4-P 35 mg/L, K+ 150 mg/L, Fe 3 mg/L, Ca2+ 130 mg/L, Mg2+ 40 mg/L (Methods 4.2) |
| Combination | Nile tilapia (Oreochromis niloticus) and Lactuca sativa 'YACHT' (Salanova(R)) co-cultured in floating-raft aquaponics; comparison of graduated nutrient-supplementation regimes (A: fish-feed-derived nutrients only; B: +weekly micronutrients/Fe; C: +weekly macronutrients P/K/Mg/S on top of B) against a hydroponic control D receiving a full inorganic nutrient solution (same P/K/Mg/S as C, plus N and Ca). This row = System A vs. D for Lettuce. |

**Site**

| Field | Value |
|---|---|
| Region | Europe |
| Country | Switzerland |
| Lat | 47.217262 |
| Long | 8.681461 |
| Average room Temperature | NR (only water/root-zone temperatures reported, see NOT DERIVED) |

**Results & Statistics**

| Field | Value |
|---|---|
| Measured Unit | g/plant (average shoot fresh weight); kg/m2 (shoot yield); kg (system fresh biomass); mg/L (water NH4-N/NO2-N/NO3-N/PO4-P/K/Fe/Ca/Mg); dS/m (EC, converted from uS/cm); degC (water/root-zone temperature); %/day (SGR); ratio (FCR); % (feed protein, converted from g/kg) |
| Statistic Details | One-way ANOVA + Bonferroni multiple-comparison test, GraphPad Prism v5.00 for Windows; significance p<0.05 (Methods 4.8); applied explicitly to physiological/quality indices (Figs 3-6) -- Table 3 yield/biomass has no significance letters or stated test, see NO COLUMN |
| Statistically analysed | Y |
| Replicates (n) | 1 system per treatment (no system-level replication, see DESIGN NOTE); plant sub-samples n=6 (root:shoot ratio Fig 3, CHL/FLV/NBI Fig 4, dry-matter fraction Fig 6 Left) or n=3 (tissue NO3 Fig 5, C/N ratio Fig 6 Right) |
| AP | 4.00 (kg/m2, Table 3 'Production (shoot)') |
| HYD | 5.65 (kg/m2, Table 3 'Production (shoot)', System D) |

**Experimental Remarks:** TRIAL DEFINITION: T1 = System A (aquaponic, no nutrient supplement) vs. System D (hydroponic control) for Lactuca sativa 'YACHT' (Salanova(R)). All four systems (A, B, C, D) were run concurrently as a single system per treatment (no system-level replication, see DESIGN NOTE below); Lettuce was one of three plant species (lettuce, mint, mushroom herb) grown simultaneously in every system, so this paper produces 9 trial rows total (3 AP treatments x 3 species), each row pairing that treatment's species-specific AP yield/growth data against the matching D value for the same species. Fish-tank and water-quality data (FCR, SGR, Table 1 ranges) are identical across the three species-rows sharing System A, since all three species grew in the same tank/system. \| WARN-CHECK Total Feed (kg) vs. FCR/duration pairing, Table 2 vs. Table 4, p.4 & p.11. Table 4 ('Total input for the four experimental systems') gives a single 'Fish feed' mass per system -- A 9.20 kg, B 9.74 kg, C 9.50 kg -- explicitly tied to 'the four-week trial' during which the differential nutrient regimes were applied (Methods 4.2: 'Four different nutrient regimes were applied over the four-week trial (see Table 4)'), i.e. the plant/nutrient-supplementation period starting 29 May. Table 2 gives FCR (A 1.25, B 1.49, C 1.16) and total biomass produced (A 11.96, B 10.25, C 12.90 kg) over the full 57-day FISH period (4 May-30 June). Recomputing implied feed consumption from FCR x biomass gain over the 57-day window gives A ~14.95 kg, B ~15.27 kg, C ~14.96 kg (recomputed here only as evidence, not entered in any cell) -- substantially more than Table 4's 9.20/9.74/9.50 kg. The two figures almost certainly refer to different, overlapping but non-identical time windows (57-day fish-growth period vs. ~4-week nutrient-regime period), which the paper does not explicitly reconcile. Recorded Table 4's value in 'Total Feed (kg)' since it is the only explicitly stated total-feed figure in the paper; flagged because it should NOT be read as the feed total corresponding to the 57-day 'Fish trial duration' / FCR pairing recorded elsewhere in this same row. Added to REVIEW.md by the batch merge step. \| WARN-MINOR Fish size initial, Methods 4.1 vs. Table 2, p.10 & p.4. Methods states fish were stocked 'each weighing approximately 220 g'; Table 2 gives actual mean initial weights of 248 g (A), 216 g (B), 226 g (C) -- a rounded approximate statement vs. precise per-tank table values, not a genuine conflict (not a contradiction: nominal/approximate vs. measured, per SCHEMA). Table 2's per-tank values used for Fish size initial. \| DESIGN NOTE: this paper uses one aquaponic system per nutrient regime (A, B, C) and one hydroponic system (D), with NO system-level replication -- each treatment is a single tank/table set, not a replicated experimental unit; ANOVA is run on plant- or fish-level sub-samples (n=6, n=3, or individual fish) within that one system per treatment. Classified `quasi-experiment` per SCHEMA.md's test ('treatments compared but without randomisation or true replication'); see the note's Extraction notes for the full rationale, closely paralleling the same lab's earlier graberAquaponicSystemsNutrient2009 (also quasi-experiment, same design pattern). \| UNIT CONVERSION ONLY (summary): feed crude protein 375 g/kg -> 37.5% (divide by 10, Methods 4.1); fish weights kg -> g (Table 2, x1000); EC uS/cm -> dS/m (Table 1, /1000, all three AP systems + D); Days Plant after transplant computed as calendar-day differences between the stated transplant date (29 May, common to all species, Methods 4.2) and each species' stated harvest date (26/29/30 June respectively, Methods 4.3) -- Lettuce 28 d, Mint 31 d, Mushroom herb 32 d; arithmetic shown per-species in the Details column. No new information beyond what the paper states was introduced by any of these conversions. \| NOT DERIVED, left NR: Initial Stock density (50 fish/tank and approx. per-fish weights given, but fish-tank water volume alone is not stated separately from the ~4200 L total system volume -- system total includes biofilter/sump/tables, so a kg/m3 density would be derivation); Fish survival rate (Table 2 gives raw counts -- A: 50->49, one fish died per Results 2.2; B: 50->50; C: 50->50 -- but the paper never states a survival or mortality PERCENTAGE itself, so left NR rather than computed from the counts, per vault convention); N and P and K feed composition beyond crude protein (Methods 4.1 gives only crude protein/lipid/fibre/ash, g/kg); Water recycle L/min (only a pump duty-cycle is stated -- 'water was pumped every 30 min', Methods 4.1 -- not a flow rate); Water type/Water classification (no categorising term used by the paper itself); Daily Water exchange rate (recirculating system, no %/day figure given); FUE AP/HYD, WUE (not calculated); SPAD (the paper used a Dualex Scientific leaf-clip for CHL/FLV/NBI/ANTH, not a SPAD chlorophyll meter -- different instrument/metric, not a substitutable value); Plant height and Leaf count (not among the measured traits -- only fresh/dry biomass, root:shoot ratio, CHL/FLV/NBI, tissue NO3, and C/N ratio were measured); Climate control (foliar greenhouse; no active heating/cooling/humidity control system described, only fish-tank temperature/O2 regulation via the SC1000 controller); Average room Temperature (only water/root-zone temperatures are reported -- Table 1's 'Average T in root zone' and 'T in fish tank' -- no separate ambient greenhouse air temperature is stated); Biological system already in use (no statement either way); Lat/Long ARE given directly in decimal degrees by the paper (47.217262, 8.681461, Methods 4.1) so no conversion was needed there. \| NO COLUMN (Table 1, water-phase parameters with no dedicated trials.csv field): PO4-P (mg/L) A 3.5, B 1.9, C 28, D 28 (calculated average; cf. Results/Discussion p.8 narrative giving system A's PO4-P as rising from 2.64 to 4.54 mg/L over the trial, average ~3.6, consistent with Table 1's 3.5 -- not a contradiction, a range vs. an average of the same range); K (mg/L) A 48, B 35, C 146, D 123; Fe (mg/L) A 0.1, B 1.8, C 2.1, D 2.3; Ca (mg/L) A 90, B 74, C 74, D 117; Mg (mg/L) A 15, B 11, C 32, D 35. HYD (D)-side water quality, since the schema's water-quality columns (Aq pH, Dissolved Oxigen, EC, Water temperature, TAN/NH4-N, NO2-N, NO3-N) are aquaponic-loop fields with no paired HYD column: pH (D) 5.9-7.4 (range, n=10); DO (D) 5.9-7.6 mg/L (range, n=10); EC (D) 1.234-1.622 dS/m (range, n=10; UNIT CONVERSION ONLY from 1234-1622 uS/cm); Water temperature/root-zone (D) 22.9 degC (single value, n>1000); T in fish tank (D) not applicable, no fish tank in D (Table 1 shows '-'); TAN/NH4-N (D) 0.03-0.06 mg/L (range, n=3); NO2-N (D) printed as '0.25-0.04' in Table 1 -- reversed order (min>max), most likely a typesetting error for a low range similar to the AP systems' 0.01-0.04 mg/L band; transcribed as printed, WARN-MINOR, no cell affected since there is no HYD NO2-N column; NO3-N (D) 63 mg/L (calculated average). Fish-tank compartment temperature (alternate to the root-zone value used for Water temperature, per SCHEMA's plant-bed/hydroponic-unit compartment rule): T in fish tank A 25.8-29.8 degC, B 24.8-28.4 degC, C 25.5-28.8 degC (range, n=10, Table 1); D has no fish tank. pHOptimal target for HYD (D): ~6, via 16% HNO3 addition (Methods 4.2) -- distinct from the AP target of ~6.5 via KOH, which is recorded in the pHOptimal cell for this row's AP system. Relative production % (Table 3, 'fraction of the highest production value for each species', paper's own calculated metric): Lettuce A 65, B 80, C 100, D 92; Mint A 59, B 100, C 94, D 91; Mushroom herb A 100, B 100, C 64, D 79. Total biomass (fresh, system-level kg, Table 3, distinct from the per-plant 'Average shoot weight' used for Plant fresh weight and from the per-area 'Production (shoot) kg/m2' used for AP/HYD): Lettuce A 9.2, B 10.6, C 13.5, D 12.4; Mint A 7.7, B 11.6, C 10.5, D 9.9; Mushroom herb A 1.31, B 1.25, C 0.76, D 0.98 (kg total shoots+roots per system). Shoots-only and roots-only fresh biomass (kg, Table 3) for all species/systems -- no dedicated column beyond the per-plant and per-area figures already captured. Root-to-shoot ratio (Figure 3, n=6): reported only as a bar chart with significance letters ('significantly higher in system A than the other systems' for all three species; 'also significantly higher in system B than in C for the mushroom herbs') -- no absolute values in text or a table, so no numbers were extracted (never read a value off a figure); the qualitative finding is described narratively in the note. Water loss during storage (Section 2.6, lettuce only, 14 days post-harvest, n=6): A 24.6%, B 22.3%, C 21.8%, D 23.6% water loss -- an explicit numeric result in running text, but a postharvest-storage metric with no home in either trials.csv or plant_measurements.csv (not a tissue analyte, not a growth/water-quality field); recorded here for completeness. Total input table (Table 4) reagent/product names and full per-system input masses for all elements/products, beyond what is captured in Nutrient supplemented/Iron supplemented/pH Buffers details above. Statistical scope caveat: the Methods 4.8 one-way ANOVA + Bonferroni description is applied explicitly to the physiological/quality indices in Figures 3-6 (root:shoot ratio, CHL/FLV/NBI, tissue NO3, dry matter fraction, C/N ratio); Table 3's yield/biomass figures are presented descriptively with no significance letters or stated test, so 'Statistically analysed = Y' for this row should be read as applying most directly to the physiological indices, not necessarily to the yield table.

#### nozziNutrientManagementAquaponics2018-T2

**Fish**

| Field | Value |
|---|---|
| Fish | Nile tilapia (Oreochromis niloticus) |
| FCR | 1.25 |
| SGR | 1.20 |
| Protein | 37.5 (UNIT CONVERSION ONLY: 375 g/kg -> %, Methods 4.1) |
| % of body weight | 2 |
| Fish size initial | 248 (UNIT CONVERSION ONLY: kg->g, Table 2; see WARN-MINOR) |
| Fish size final | 492 (UNIT CONVERSION ONLY: kg->g, Table 2) |
| Feed routine | 6 automated feeding times/day (07:00, 08:00, 10:00, 12:00, 15:00, 17:00); total feed amount recorded daily (Methods 4.1) |
| Feed regime | ~2% of body weight/day; Tilapia Vegi 4.5 mm floating extruded feed (Hokovit Hofmann Nutrition AG, Butzberg, CH); main ingredients soybean meal, wheat, corn gluten meal, linseed oil (Methods 4.1) |
| Total Feed (kg) | 9.20 (Table 4, 4-week nutrient-trial total; see WARN-CHECK) |
| Fish biomass created (kg) | 11.96 (Table 2, 'Total fish biomass produced') |
| Fish survival rate | NR (raw counts only; see NOT DERIVED) |
| Fish weight gain | 244 (g/fish, UNIT CONVERSION ONLY: kg->g, Table 2) |
| Fish trial duration (days) | 57 (4 May-30 June 2015, Table 2) |

**Water**

| Field | Value |
|---|---|
| Water recycle | NR (only a 30-min pump duty-cycle stated, not a flow rate; see NOT DERIVED) |
| Water volume in the system | 4200 (L, approx. total per AP system, Methods 4.1) |
| Aq pH | 5.1-6.9 (range, n=10 measurements over trial; no mean/SD reported, Table 1) |
| pHOptimal | 6.5 (AP target via KOH buffering, Methods 4.2) |
| Dissolved Oxigen | 7.5-8.3 (range, n=10, mg/L, Table 1) |
| EC | 0.760-1.042 (dS/m; range, n=10; UNIT CONVERSION ONLY from 760-1042 uS/cm, Table 1) |
| Water temperature | 23.5 (degC; single trial-mean value, n>1000 logged root-zone measurements, no SD stated, Table 1 'Average T in root zone') |
| TAN / NH4-N | 0.15 (mg/L, n=3, single reported value, Table 1) |
| NO2-N | 0.03 (mg/L, n=3, single reported value, Table 1) |
| NO3-N | 84 (mg/L; authors' own 'calculated average nutrient concentration', Table 1 caption; no SD/n given for this sub-block) |

**Plant**

| Field | Value |
|---|---|
| Plant | Mentha piperita 'CHOCOLATE' |
| Details | Mentha piperita 'CHOCOLATE', purchased as seedlings, propagated in rockwool cubes; transplanted to floating-raft holes 29 May, roots reached water and moved onto rafts after 9 days; 72 plants/system at 40 plants/m2; harvested 29 June (31 d after transplant, UNIT CONVERSION ONLY: date arithmetic 29 May->29 June); 6 of 72 plants unsellable (total shoot weight 22.6 g, poorly developed roots, total fresh root weight 0.6 g; light deprivation from rapid growth of surrounding plants, Results 2.2/p.5), excluded from biomass analysis, 66 harvested |
| Plant Category | Herb (p.10, 'two herbs: a mint (Mentha piperita) and mushroom herb') |
| Days Plant after transplant | 31 |
| Plants/m2 | 40 |
| SPAD (aquaponics) | NR (Dualex leaf-clip CHL/FLV/NBI used instead of a SPAD meter; different instrument/metric, see NOT DERIVED) |
| Plant fresh weight | 78.7 (g/plant, Table 3 'Average shoot weight') |
| Plant dry matter | NR (Figure 6 Left reports only a bar chart of dry-weight fraction, no absolute % in text or table; never read a value off a figure) |
| Tissue nitrate AP | NR (Figure 5 reports NO3 content only as a bar chart with significance letters, no absolute values in text or a table; never read a value off a figure) |
| Tissue nitrate HYD | NR (same reason as Tissue nitrate AP) |

**System & Setup**

| Field | Value |
|---|---|
| System type | Floating raft culture (styrofoam rafts on shallow table, 25 mm water depth; paper's own keyword, p.1) |
| Media Details | Rockwool propagation cubes (germination/rooting); floating styrofoam rafts (Dry Hydroponics B.V., NL) on 3 table sections (1.2 x 2 m each, 7.2 m2 total per system); densities 20 plants/m2 (lettuce), 40 plants/m2 (mint, mushroom herb) (Methods 4.1) |
| Air supplement | Y (Oxygenation zone integral to each AP RAS loop (Methods 4.1 system-design list); temperature/DO regulated to target 26 degC / 8 mg O2 L-1 via HACH Lange SC1000 controller. Scope of this controller (whether it also actively aerates D, which has no fish tank) is not stated explicitly.) |
| Iron supplemented | N (System A received no Fe supplement; Fe present in water only from fish feed/faeces breakdown (Table 1: Fe 0.1 mg/L in A vs 1.8-2.3 mg/L in B/C/D)) |
| Remineralization | N (System A water not remineralized; nutrients derived exclusively from fish feed/faeces (Methods 4.2) \| Judgment call: this paper does not use the term 'remineralization'; recorded Y/N mirroring 'Nutrient supplemented' since both fields describe the same weekly mineral-addition practice for B/C -- see Extraction notes for the ambiguity between these two schema fields.) |
| pH Buffers | Y (KOH added to buffer AP pH to ~6.5; 250 g total over the trial (Table 4, Methods 4.2). HYD (D) used a different agent (350 mL 16% HNO3) to target pH ~6 -- see NO COLUMN in remarks.) |
| Artificial Lighting | N (Plants exposed to natural photoperiod only (Methods 4.1: 'The plants were exposed to a natural photoperiod')) |
| Nutrient supplemented | N (System A received no fertilizer supplement; all nutrients derived from fish feed and faeces only (Methods 4.2; Table 4: 0 g/mL for all supplement rows)) |
| Equipment | HACH Lange SC1000 controller (temp/O2 regulation, fish tank, target 26 degC / 8 mg O2 L-1); HACH Lange HQ40d portable multimeter (temp/pH/EC/O2, 3x/week); Hygrochron iButton temperature loggers (root zone, continuous, first table section); Dualex Scientific leaf-clip (ForceA) (CHL/FLV/NBI/ANTH, live leaf); Reflectoquant Nitrate-Test strip + spectrophotometer (Merck) (leaf NO3); LECO TruSpec CHN Macro Analyser (tissue C/N); HydroBuddy v1.50 nutrient calculator (fertilizer dosing); HACH Lange LCK cuvette tests + DR3800 VIS spectrophotometer (water PO4-P/NH4-N/NO2-N/NO3-N/K/Fe/Ca/Mg/CaCO3); GraphPad Prism v5.00 (statistics) |
| Control Parameters | Fish-tank temperature/DO regulated to 26 degC / 8 mg O2 L-1 (SC1000 controller); AP pH buffered to ~6.5 via KOH; HYD (D) pH buffered to ~6 via 16% HNO3; target water nutrient concentrations used for HydroBuddy dosing calculations: NO3-N 60 mg/L, PO4-P 35 mg/L, K+ 150 mg/L, Fe 3 mg/L, Ca2+ 130 mg/L, Mg2+ 40 mg/L (Methods 4.2) |
| Combination | Nile tilapia (Oreochromis niloticus) and Mentha piperita 'CHOCOLATE' co-cultured in floating-raft aquaponics; comparison of graduated nutrient-supplementation regimes (A: fish-feed-derived nutrients only; B: +weekly micronutrients/Fe; C: +weekly macronutrients P/K/Mg/S on top of B) against a hydroponic control D receiving a full inorganic nutrient solution (same P/K/Mg/S as C, plus N and Ca). This row = System A vs. D for Mint. |

**Site**

| Field | Value |
|---|---|
| Region | Europe |
| Country | Switzerland |
| Lat | 47.217262 |
| Long | 8.681461 |
| Average room Temperature | NR (only water/root-zone temperatures reported, see NOT DERIVED) |

**Results & Statistics**

| Field | Value |
|---|---|
| Measured Unit | g/plant (average shoot fresh weight); kg/m2 (shoot yield); kg (system fresh biomass); mg/L (water NH4-N/NO2-N/NO3-N/PO4-P/K/Fe/Ca/Mg); dS/m (EC, converted from uS/cm); degC (water/root-zone temperature); %/day (SGR); ratio (FCR); % (feed protein, converted from g/kg) |
| Statistic Details | One-way ANOVA + Bonferroni multiple-comparison test, GraphPad Prism v5.00 for Windows; significance p<0.05 (Methods 4.8); applied explicitly to physiological/quality indices (Figs 3-6) -- Table 3 yield/biomass has no significance letters or stated test, see NO COLUMN |
| Statistically analysed | Y |
| Replicates (n) | 1 system per treatment (no system-level replication, see DESIGN NOTE); plant sub-samples n=6 (root:shoot ratio Fig 3, CHL/FLV/NBI Fig 4, dry-matter fraction Fig 6 Left) or n=3 (tissue NO3 Fig 5, C/N ratio Fig 6 Right) |
| AP | 3.07 (kg/m2, Table 3 'Production (shoot)') |
| HYD | 4.33 (kg/m2, Table 3 'Production (shoot)', System D) |

**Experimental Remarks:** TRIAL DEFINITION: T2 = System A (aquaponic, no nutrient supplement) vs. System D (hydroponic control) for Mentha piperita 'CHOCOLATE'. All four systems (A, B, C, D) were run concurrently as a single system per treatment (no system-level replication, see DESIGN NOTE below); Mint was one of three plant species (lettuce, mint, mushroom herb) grown simultaneously in every system, so this paper produces 9 trial rows total (3 AP treatments x 3 species), each row pairing that treatment's species-specific AP yield/growth data against the matching D value for the same species. Fish-tank and water-quality data (FCR, SGR, Table 1 ranges) are identical across the three species-rows sharing System A, since all three species grew in the same tank/system. \| WARN-CHECK Total Feed (kg) vs. FCR/duration pairing, Table 2 vs. Table 4, p.4 & p.11. Table 4 ('Total input for the four experimental systems') gives a single 'Fish feed' mass per system -- A 9.20 kg, B 9.74 kg, C 9.50 kg -- explicitly tied to 'the four-week trial' during which the differential nutrient regimes were applied (Methods 4.2: 'Four different nutrient regimes were applied over the four-week trial (see Table 4)'), i.e. the plant/nutrient-supplementation period starting 29 May. Table 2 gives FCR (A 1.25, B 1.49, C 1.16) and total biomass produced (A 11.96, B 10.25, C 12.90 kg) over the full 57-day FISH period (4 May-30 June). Recomputing implied feed consumption from FCR x biomass gain over the 57-day window gives A ~14.95 kg, B ~15.27 kg, C ~14.96 kg (recomputed here only as evidence, not entered in any cell) -- substantially more than Table 4's 9.20/9.74/9.50 kg. The two figures almost certainly refer to different, overlapping but non-identical time windows (57-day fish-growth period vs. ~4-week nutrient-regime period), which the paper does not explicitly reconcile. Recorded Table 4's value in 'Total Feed (kg)' since it is the only explicitly stated total-feed figure in the paper; flagged because it should NOT be read as the feed total corresponding to the 57-day 'Fish trial duration' / FCR pairing recorded elsewhere in this same row. Added to REVIEW.md by the batch merge step. \| WARN-MINOR Fish size initial, Methods 4.1 vs. Table 2, p.10 & p.4. Methods states fish were stocked 'each weighing approximately 220 g'; Table 2 gives actual mean initial weights of 248 g (A), 216 g (B), 226 g (C) -- a rounded approximate statement vs. precise per-tank table values, not a genuine conflict (not a contradiction: nominal/approximate vs. measured, per SCHEMA). Table 2's per-tank values used for Fish size initial. \| DESIGN NOTE: this paper uses one aquaponic system per nutrient regime (A, B, C) and one hydroponic system (D), with NO system-level replication -- each treatment is a single tank/table set, not a replicated experimental unit; ANOVA is run on plant- or fish-level sub-samples (n=6, n=3, or individual fish) within that one system per treatment. Classified `quasi-experiment` per SCHEMA.md's test ('treatments compared but without randomisation or true replication'); see the note's Extraction notes for the full rationale, closely paralleling the same lab's earlier graberAquaponicSystemsNutrient2009 (also quasi-experiment, same design pattern). \| UNIT CONVERSION ONLY (summary): feed crude protein 375 g/kg -> 37.5% (divide by 10, Methods 4.1); fish weights kg -> g (Table 2, x1000); EC uS/cm -> dS/m (Table 1, /1000, all three AP systems + D); Days Plant after transplant computed as calendar-day differences between the stated transplant date (29 May, common to all species, Methods 4.2) and each species' stated harvest date (26/29/30 June respectively, Methods 4.3) -- Lettuce 28 d, Mint 31 d, Mushroom herb 32 d; arithmetic shown per-species in the Details column. No new information beyond what the paper states was introduced by any of these conversions. \| NOT DERIVED, left NR: Initial Stock density (50 fish/tank and approx. per-fish weights given, but fish-tank water volume alone is not stated separately from the ~4200 L total system volume -- system total includes biofilter/sump/tables, so a kg/m3 density would be derivation); Fish survival rate (Table 2 gives raw counts -- A: 50->49, one fish died per Results 2.2; B: 50->50; C: 50->50 -- but the paper never states a survival or mortality PERCENTAGE itself, so left NR rather than computed from the counts, per vault convention); N and P and K feed composition beyond crude protein (Methods 4.1 gives only crude protein/lipid/fibre/ash, g/kg); Water recycle L/min (only a pump duty-cycle is stated -- 'water was pumped every 30 min', Methods 4.1 -- not a flow rate); Water type/Water classification (no categorising term used by the paper itself); Daily Water exchange rate (recirculating system, no %/day figure given); FUE AP/HYD, WUE (not calculated); SPAD (the paper used a Dualex Scientific leaf-clip for CHL/FLV/NBI/ANTH, not a SPAD chlorophyll meter -- different instrument/metric, not a substitutable value); Plant height and Leaf count (not among the measured traits -- only fresh/dry biomass, root:shoot ratio, CHL/FLV/NBI, tissue NO3, and C/N ratio were measured); Climate control (foliar greenhouse; no active heating/cooling/humidity control system described, only fish-tank temperature/O2 regulation via the SC1000 controller); Average room Temperature (only water/root-zone temperatures are reported -- Table 1's 'Average T in root zone' and 'T in fish tank' -- no separate ambient greenhouse air temperature is stated); Biological system already in use (no statement either way); Lat/Long ARE given directly in decimal degrees by the paper (47.217262, 8.681461, Methods 4.1) so no conversion was needed there. \| NO COLUMN (Table 1, water-phase parameters with no dedicated trials.csv field): PO4-P (mg/L) A 3.5, B 1.9, C 28, D 28 (calculated average; cf. Results/Discussion p.8 narrative giving system A's PO4-P as rising from 2.64 to 4.54 mg/L over the trial, average ~3.6, consistent with Table 1's 3.5 -- not a contradiction, a range vs. an average of the same range); K (mg/L) A 48, B 35, C 146, D 123; Fe (mg/L) A 0.1, B 1.8, C 2.1, D 2.3; Ca (mg/L) A 90, B 74, C 74, D 117; Mg (mg/L) A 15, B 11, C 32, D 35. HYD (D)-side water quality, since the schema's water-quality columns (Aq pH, Dissolved Oxigen, EC, Water temperature, TAN/NH4-N, NO2-N, NO3-N) are aquaponic-loop fields with no paired HYD column: pH (D) 5.9-7.4 (range, n=10); DO (D) 5.9-7.6 mg/L (range, n=10); EC (D) 1.234-1.622 dS/m (range, n=10; UNIT CONVERSION ONLY from 1234-1622 uS/cm); Water temperature/root-zone (D) 22.9 degC (single value, n>1000); T in fish tank (D) not applicable, no fish tank in D (Table 1 shows '-'); TAN/NH4-N (D) 0.03-0.06 mg/L (range, n=3); NO2-N (D) printed as '0.25-0.04' in Table 1 -- reversed order (min>max), most likely a typesetting error for a low range similar to the AP systems' 0.01-0.04 mg/L band; transcribed as printed, WARN-MINOR, no cell affected since there is no HYD NO2-N column; NO3-N (D) 63 mg/L (calculated average). Fish-tank compartment temperature (alternate to the root-zone value used for Water temperature, per SCHEMA's plant-bed/hydroponic-unit compartment rule): T in fish tank A 25.8-29.8 degC, B 24.8-28.4 degC, C 25.5-28.8 degC (range, n=10, Table 1); D has no fish tank. pHOptimal target for HYD (D): ~6, via 16% HNO3 addition (Methods 4.2) -- distinct from the AP target of ~6.5 via KOH, which is recorded in the pHOptimal cell for this row's AP system. Relative production % (Table 3, 'fraction of the highest production value for each species', paper's own calculated metric): Lettuce A 65, B 80, C 100, D 92; Mint A 59, B 100, C 94, D 91; Mushroom herb A 100, B 100, C 64, D 79. Total biomass (fresh, system-level kg, Table 3, distinct from the per-plant 'Average shoot weight' used for Plant fresh weight and from the per-area 'Production (shoot) kg/m2' used for AP/HYD): Lettuce A 9.2, B 10.6, C 13.5, D 12.4; Mint A 7.7, B 11.6, C 10.5, D 9.9; Mushroom herb A 1.31, B 1.25, C 0.76, D 0.98 (kg total shoots+roots per system). Shoots-only and roots-only fresh biomass (kg, Table 3) for all species/systems -- no dedicated column beyond the per-plant and per-area figures already captured. Root-to-shoot ratio (Figure 3, n=6): reported only as a bar chart with significance letters ('significantly higher in system A than the other systems' for all three species; 'also significantly higher in system B than in C for the mushroom herbs') -- no absolute values in text or a table, so no numbers were extracted (never read a value off a figure); the qualitative finding is described narratively in the note. Water loss during storage (Section 2.6, lettuce only, 14 days post-harvest, n=6): A 24.6%, B 22.3%, C 21.8%, D 23.6% water loss -- an explicit numeric result in running text, but a postharvest-storage metric with no home in either trials.csv or plant_measurements.csv (not a tissue analyte, not a growth/water-quality field); recorded here for completeness. Total input table (Table 4) reagent/product names and full per-system input masses for all elements/products, beyond what is captured in Nutrient supplemented/Iron supplemented/pH Buffers details above. Statistical scope caveat: the Methods 4.8 one-way ANOVA + Bonferroni description is applied explicitly to the physiological/quality indices in Figures 3-6 (root:shoot ratio, CHL/FLV/NBI, tissue NO3, dry matter fraction, C/N ratio); Table 3's yield/biomass figures are presented descriptively with no significance letters or stated test, so 'Statistically analysed = Y' for this row should be read as applying most directly to the physiological indices, not necessarily to the yield table.

#### nozziNutrientManagementAquaponics2018-T3

**Fish**

| Field | Value |
|---|---|
| Fish | Nile tilapia (Oreochromis niloticus) |
| FCR | 1.25 |
| SGR | 1.20 |
| Protein | 37.5 (UNIT CONVERSION ONLY: 375 g/kg -> %, Methods 4.1) |
| % of body weight | 2 |
| Fish size initial | 248 (UNIT CONVERSION ONLY: kg->g, Table 2; see WARN-MINOR) |
| Fish size final | 492 (UNIT CONVERSION ONLY: kg->g, Table 2) |
| Feed routine | 6 automated feeding times/day (07:00, 08:00, 10:00, 12:00, 15:00, 17:00); total feed amount recorded daily (Methods 4.1) |
| Feed regime | ~2% of body weight/day; Tilapia Vegi 4.5 mm floating extruded feed (Hokovit Hofmann Nutrition AG, Butzberg, CH); main ingredients soybean meal, wheat, corn gluten meal, linseed oil (Methods 4.1) |
| Total Feed (kg) | 9.20 (Table 4, 4-week nutrient-trial total; see WARN-CHECK) |
| Fish biomass created (kg) | 11.96 (Table 2, 'Total fish biomass produced') |
| Fish survival rate | NR (raw counts only; see NOT DERIVED) |
| Fish weight gain | 244 (g/fish, UNIT CONVERSION ONLY: kg->g, Table 2) |
| Fish trial duration (days) | 57 (4 May-30 June 2015, Table 2) |

**Water**

| Field | Value |
|---|---|
| Water recycle | NR (only a 30-min pump duty-cycle stated, not a flow rate; see NOT DERIVED) |
| Water volume in the system | 4200 (L, approx. total per AP system, Methods 4.1) |
| Aq pH | 5.1-6.9 (range, n=10 measurements over trial; no mean/SD reported, Table 1) |
| pHOptimal | 6.5 (AP target via KOH buffering, Methods 4.2) |
| Dissolved Oxigen | 7.5-8.3 (range, n=10, mg/L, Table 1) |
| EC | 0.760-1.042 (dS/m; range, n=10; UNIT CONVERSION ONLY from 760-1042 uS/cm, Table 1) |
| Water temperature | 23.5 (degC; single trial-mean value, n>1000 logged root-zone measurements, no SD stated, Table 1 'Average T in root zone') |
| TAN / NH4-N | 0.15 (mg/L, n=3, single reported value, Table 1) |
| NO2-N | 0.03 (mg/L, n=3, single reported value, Table 1) |
| NO3-N | 84 (mg/L; authors' own 'calculated average nutrient concentration', Table 1 caption; no SD/n given for this sub-block) |

**Plant**

| Field | Value |
|---|---|
| Plant | Rungia klossii ('mushroom herb') |
| Details | Rungia klossii ('mushroom herb'), purchased as seedlings, propagated in rockwool cubes; transplanted to floating-raft holes 29 May, roots reached water and moved onto rafts after 8 days; 72 plants/system at 40 plants/m2; harvested 30 June (32 d after transplant, UNIT CONVERSION ONLY: date arithmetic 29 May->30 June); 0 unsellable, 72 harvested |
| Plant Category | Herb (p.10, 'two herbs: a mint (Mentha piperita) and mushroom herb') |
| Days Plant after transplant | 32 |
| Plants/m2 | 40 |
| SPAD (aquaponics) | NR (Dualex leaf-clip CHL/FLV/NBI used instead of a SPAD meter; different instrument/metric, see NOT DERIVED) |
| Plant fresh weight | 9.32 (g/plant, Table 3 'Average shoot weight') |
| Plant dry matter | NR (Figure 6 Left reports only a bar chart of dry-weight fraction, no absolute % in text or table; never read a value off a figure) |
| Tissue nitrate AP | NR (Figure 5 reports NO3 content only as a bar chart with significance letters, no absolute values in text or a table; never read a value off a figure) |
| Tissue nitrate HYD | NR (same reason as Tissue nitrate AP) |

**System & Setup**

| Field | Value |
|---|---|
| System type | Floating raft culture (styrofoam rafts on shallow table, 25 mm water depth; paper's own keyword, p.1) |
| Media Details | Rockwool propagation cubes (germination/rooting); floating styrofoam rafts (Dry Hydroponics B.V., NL) on 3 table sections (1.2 x 2 m each, 7.2 m2 total per system); densities 20 plants/m2 (lettuce), 40 plants/m2 (mint, mushroom herb) (Methods 4.1) |
| Air supplement | Y (Oxygenation zone integral to each AP RAS loop (Methods 4.1 system-design list); temperature/DO regulated to target 26 degC / 8 mg O2 L-1 via HACH Lange SC1000 controller. Scope of this controller (whether it also actively aerates D, which has no fish tank) is not stated explicitly.) |
| Iron supplemented | N (System A received no Fe supplement; Fe present in water only from fish feed/faeces breakdown (Table 1: Fe 0.1 mg/L in A vs 1.8-2.3 mg/L in B/C/D)) |
| Remineralization | N (System A water not remineralized; nutrients derived exclusively from fish feed/faeces (Methods 4.2) \| Judgment call: this paper does not use the term 'remineralization'; recorded Y/N mirroring 'Nutrient supplemented' since both fields describe the same weekly mineral-addition practice for B/C -- see Extraction notes for the ambiguity between these two schema fields.) |
| pH Buffers | Y (KOH added to buffer AP pH to ~6.5; 250 g total over the trial (Table 4, Methods 4.2). HYD (D) used a different agent (350 mL 16% HNO3) to target pH ~6 -- see NO COLUMN in remarks.) |
| Artificial Lighting | N (Plants exposed to natural photoperiod only (Methods 4.1: 'The plants were exposed to a natural photoperiod')) |
| Nutrient supplemented | N (System A received no fertilizer supplement; all nutrients derived from fish feed and faeces only (Methods 4.2; Table 4: 0 g/mL for all supplement rows)) |
| Equipment | HACH Lange SC1000 controller (temp/O2 regulation, fish tank, target 26 degC / 8 mg O2 L-1); HACH Lange HQ40d portable multimeter (temp/pH/EC/O2, 3x/week); Hygrochron iButton temperature loggers (root zone, continuous, first table section); Dualex Scientific leaf-clip (ForceA) (CHL/FLV/NBI/ANTH, live leaf); Reflectoquant Nitrate-Test strip + spectrophotometer (Merck) (leaf NO3); LECO TruSpec CHN Macro Analyser (tissue C/N); HydroBuddy v1.50 nutrient calculator (fertilizer dosing); HACH Lange LCK cuvette tests + DR3800 VIS spectrophotometer (water PO4-P/NH4-N/NO2-N/NO3-N/K/Fe/Ca/Mg/CaCO3); GraphPad Prism v5.00 (statistics) |
| Control Parameters | Fish-tank temperature/DO regulated to 26 degC / 8 mg O2 L-1 (SC1000 controller); AP pH buffered to ~6.5 via KOH; HYD (D) pH buffered to ~6 via 16% HNO3; target water nutrient concentrations used for HydroBuddy dosing calculations: NO3-N 60 mg/L, PO4-P 35 mg/L, K+ 150 mg/L, Fe 3 mg/L, Ca2+ 130 mg/L, Mg2+ 40 mg/L (Methods 4.2) |
| Combination | Nile tilapia (Oreochromis niloticus) and Rungia klossii ('mushroom herb') co-cultured in floating-raft aquaponics; comparison of graduated nutrient-supplementation regimes (A: fish-feed-derived nutrients only; B: +weekly micronutrients/Fe; C: +weekly macronutrients P/K/Mg/S on top of B) against a hydroponic control D receiving a full inorganic nutrient solution (same P/K/Mg/S as C, plus N and Ca). This row = System A vs. D for MushroomHerb. |

**Site**

| Field | Value |
|---|---|
| Region | Europe |
| Country | Switzerland |
| Lat | 47.217262 |
| Long | 8.681461 |
| Average room Temperature | NR (only water/root-zone temperatures reported, see NOT DERIVED) |

**Results & Statistics**

| Field | Value |
|---|---|
| Measured Unit | g/plant (average shoot fresh weight); kg/m2 (shoot yield); kg (system fresh biomass); mg/L (water NH4-N/NO2-N/NO3-N/PO4-P/K/Fe/Ca/Mg); dS/m (EC, converted from uS/cm); degC (water/root-zone temperature); %/day (SGR); ratio (FCR); % (feed protein, converted from g/kg) |
| Statistic Details | One-way ANOVA + Bonferroni multiple-comparison test, GraphPad Prism v5.00 for Windows; significance p<0.05 (Methods 4.8); applied explicitly to physiological/quality indices (Figs 3-6) -- Table 3 yield/biomass has no significance letters or stated test, see NO COLUMN |
| Statistically analysed | Y |
| Replicates (n) | 1 system per treatment (no system-level replication, see DESIGN NOTE); plant sub-samples n=6 (root:shoot ratio Fig 3, CHL/FLV/NBI Fig 4, dry-matter fraction Fig 6 Left) or n=3 (tissue NO3 Fig 5, C/N ratio Fig 6 Right) |
| AP | 0.34 (kg/m2, Table 3 'Production (shoot)') |
| HYD | 0.27 (kg/m2, Table 3 'Production (shoot)', System D) |

**Experimental Remarks:** TRIAL DEFINITION: T3 = System A (aquaponic, no nutrient supplement) vs. System D (hydroponic control) for Rungia klossii ('mushroom herb'). All four systems (A, B, C, D) were run concurrently as a single system per treatment (no system-level replication, see DESIGN NOTE below); MushroomHerb was one of three plant species (lettuce, mint, mushroom herb) grown simultaneously in every system, so this paper produces 9 trial rows total (3 AP treatments x 3 species), each row pairing that treatment's species-specific AP yield/growth data against the matching D value for the same species. Fish-tank and water-quality data (FCR, SGR, Table 1 ranges) are identical across the three species-rows sharing System A, since all three species grew in the same tank/system. \| WARN-CHECK Total Feed (kg) vs. FCR/duration pairing, Table 2 vs. Table 4, p.4 & p.11. Table 4 ('Total input for the four experimental systems') gives a single 'Fish feed' mass per system -- A 9.20 kg, B 9.74 kg, C 9.50 kg -- explicitly tied to 'the four-week trial' during which the differential nutrient regimes were applied (Methods 4.2: 'Four different nutrient regimes were applied over the four-week trial (see Table 4)'), i.e. the plant/nutrient-supplementation period starting 29 May. Table 2 gives FCR (A 1.25, B 1.49, C 1.16) and total biomass produced (A 11.96, B 10.25, C 12.90 kg) over the full 57-day FISH period (4 May-30 June). Recomputing implied feed consumption from FCR x biomass gain over the 57-day window gives A ~14.95 kg, B ~15.27 kg, C ~14.96 kg (recomputed here only as evidence, not entered in any cell) -- substantially more than Table 4's 9.20/9.74/9.50 kg. The two figures almost certainly refer to different, overlapping but non-identical time windows (57-day fish-growth period vs. ~4-week nutrient-regime period), which the paper does not explicitly reconcile. Recorded Table 4's value in 'Total Feed (kg)' since it is the only explicitly stated total-feed figure in the paper; flagged because it should NOT be read as the feed total corresponding to the 57-day 'Fish trial duration' / FCR pairing recorded elsewhere in this same row. Added to REVIEW.md by the batch merge step. \| WARN-MINOR Fish size initial, Methods 4.1 vs. Table 2, p.10 & p.4. Methods states fish were stocked 'each weighing approximately 220 g'; Table 2 gives actual mean initial weights of 248 g (A), 216 g (B), 226 g (C) -- a rounded approximate statement vs. precise per-tank table values, not a genuine conflict (not a contradiction: nominal/approximate vs. measured, per SCHEMA). Table 2's per-tank values used for Fish size initial. \| DESIGN NOTE: this paper uses one aquaponic system per nutrient regime (A, B, C) and one hydroponic system (D), with NO system-level replication -- each treatment is a single tank/table set, not a replicated experimental unit; ANOVA is run on plant- or fish-level sub-samples (n=6, n=3, or individual fish) within that one system per treatment. Classified `quasi-experiment` per SCHEMA.md's test ('treatments compared but without randomisation or true replication'); see the note's Extraction notes for the full rationale, closely paralleling the same lab's earlier graberAquaponicSystemsNutrient2009 (also quasi-experiment, same design pattern). \| UNIT CONVERSION ONLY (summary): feed crude protein 375 g/kg -> 37.5% (divide by 10, Methods 4.1); fish weights kg -> g (Table 2, x1000); EC uS/cm -> dS/m (Table 1, /1000, all three AP systems + D); Days Plant after transplant computed as calendar-day differences between the stated transplant date (29 May, common to all species, Methods 4.2) and each species' stated harvest date (26/29/30 June respectively, Methods 4.3) -- Lettuce 28 d, Mint 31 d, Mushroom herb 32 d; arithmetic shown per-species in the Details column. No new information beyond what the paper states was introduced by any of these conversions. \| NOT DERIVED, left NR: Initial Stock density (50 fish/tank and approx. per-fish weights given, but fish-tank water volume alone is not stated separately from the ~4200 L total system volume -- system total includes biofilter/sump/tables, so a kg/m3 density would be derivation); Fish survival rate (Table 2 gives raw counts -- A: 50->49, one fish died per Results 2.2; B: 50->50; C: 50->50 -- but the paper never states a survival or mortality PERCENTAGE itself, so left NR rather than computed from the counts, per vault convention); N and P and K feed composition beyond crude protein (Methods 4.1 gives only crude protein/lipid/fibre/ash, g/kg); Water recycle L/min (only a pump duty-cycle is stated -- 'water was pumped every 30 min', Methods 4.1 -- not a flow rate); Water type/Water classification (no categorising term used by the paper itself); Daily Water exchange rate (recirculating system, no %/day figure given); FUE AP/HYD, WUE (not calculated); SPAD (the paper used a Dualex Scientific leaf-clip for CHL/FLV/NBI/ANTH, not a SPAD chlorophyll meter -- different instrument/metric, not a substitutable value); Plant height and Leaf count (not among the measured traits -- only fresh/dry biomass, root:shoot ratio, CHL/FLV/NBI, tissue NO3, and C/N ratio were measured); Climate control (foliar greenhouse; no active heating/cooling/humidity control system described, only fish-tank temperature/O2 regulation via the SC1000 controller); Average room Temperature (only water/root-zone temperatures are reported -- Table 1's 'Average T in root zone' and 'T in fish tank' -- no separate ambient greenhouse air temperature is stated); Biological system already in use (no statement either way); Lat/Long ARE given directly in decimal degrees by the paper (47.217262, 8.681461, Methods 4.1) so no conversion was needed there. \| NO COLUMN (Table 1, water-phase parameters with no dedicated trials.csv field): PO4-P (mg/L) A 3.5, B 1.9, C 28, D 28 (calculated average; cf. Results/Discussion p.8 narrative giving system A's PO4-P as rising from 2.64 to 4.54 mg/L over the trial, average ~3.6, consistent with Table 1's 3.5 -- not a contradiction, a range vs. an average of the same range); K (mg/L) A 48, B 35, C 146, D 123; Fe (mg/L) A 0.1, B 1.8, C 2.1, D 2.3; Ca (mg/L) A 90, B 74, C 74, D 117; Mg (mg/L) A 15, B 11, C 32, D 35. HYD (D)-side water quality, since the schema's water-quality columns (Aq pH, Dissolved Oxigen, EC, Water temperature, TAN/NH4-N, NO2-N, NO3-N) are aquaponic-loop fields with no paired HYD column: pH (D) 5.9-7.4 (range, n=10); DO (D) 5.9-7.6 mg/L (range, n=10); EC (D) 1.234-1.622 dS/m (range, n=10; UNIT CONVERSION ONLY from 1234-1622 uS/cm); Water temperature/root-zone (D) 22.9 degC (single value, n>1000); T in fish tank (D) not applicable, no fish tank in D (Table 1 shows '-'); TAN/NH4-N (D) 0.03-0.06 mg/L (range, n=3); NO2-N (D) printed as '0.25-0.04' in Table 1 -- reversed order (min>max), most likely a typesetting error for a low range similar to the AP systems' 0.01-0.04 mg/L band; transcribed as printed, WARN-MINOR, no cell affected since there is no HYD NO2-N column; NO3-N (D) 63 mg/L (calculated average). Fish-tank compartment temperature (alternate to the root-zone value used for Water temperature, per SCHEMA's plant-bed/hydroponic-unit compartment rule): T in fish tank A 25.8-29.8 degC, B 24.8-28.4 degC, C 25.5-28.8 degC (range, n=10, Table 1); D has no fish tank. pHOptimal target for HYD (D): ~6, via 16% HNO3 addition (Methods 4.2) -- distinct from the AP target of ~6.5 via KOH, which is recorded in the pHOptimal cell for this row's AP system. Relative production % (Table 3, 'fraction of the highest production value for each species', paper's own calculated metric): Lettuce A 65, B 80, C 100, D 92; Mint A 59, B 100, C 94, D 91; Mushroom herb A 100, B 100, C 64, D 79. Total biomass (fresh, system-level kg, Table 3, distinct from the per-plant 'Average shoot weight' used for Plant fresh weight and from the per-area 'Production (shoot) kg/m2' used for AP/HYD): Lettuce A 9.2, B 10.6, C 13.5, D 12.4; Mint A 7.7, B 11.6, C 10.5, D 9.9; Mushroom herb A 1.31, B 1.25, C 0.76, D 0.98 (kg total shoots+roots per system). Shoots-only and roots-only fresh biomass (kg, Table 3) for all species/systems -- no dedicated column beyond the per-plant and per-area figures already captured. Root-to-shoot ratio (Figure 3, n=6): reported only as a bar chart with significance letters ('significantly higher in system A than the other systems' for all three species; 'also significantly higher in system B than in C for the mushroom herbs') -- no absolute values in text or a table, so no numbers were extracted (never read a value off a figure); the qualitative finding is described narratively in the note. Water loss during storage (Section 2.6, lettuce only, 14 days post-harvest, n=6): A 24.6%, B 22.3%, C 21.8%, D 23.6% water loss -- an explicit numeric result in running text, but a postharvest-storage metric with no home in either trials.csv or plant_measurements.csv (not a tissue analyte, not a growth/water-quality field); recorded here for completeness. Total input table (Table 4) reagent/product names and full per-system input masses for all elements/products, beyond what is captured in Nutrient supplemented/Iron supplemented/pH Buffers details above. Statistical scope caveat: the Methods 4.8 one-way ANOVA + Bonferroni description is applied explicitly to the physiological/quality indices in Figures 3-6 (root:shoot ratio, CHL/FLV/NBI, tissue NO3, dry matter fraction, C/N ratio); Table 3's yield/biomass figures are presented descriptively with no significance letters or stated test, so 'Statistically analysed = Y' for this row should be read as applying most directly to the physiological indices, not necessarily to the yield table.

#### nozziNutrientManagementAquaponics2018-T4

**Fish**

| Field | Value |
|---|---|
| Fish | Nile tilapia (Oreochromis niloticus) |
| FCR | 1.49 |
| SGR | 1.17 |
| Protein | 37.5 (UNIT CONVERSION ONLY: 375 g/kg -> %, Methods 4.1) |
| % of body weight | 2 |
| Fish size initial | 216 (UNIT CONVERSION ONLY: kg->g, Table 2; see WARN-MINOR) |
| Fish size final | 421 (UNIT CONVERSION ONLY: kg->g, Table 2) |
| Feed routine | 6 automated feeding times/day (07:00, 08:00, 10:00, 12:00, 15:00, 17:00); total feed amount recorded daily (Methods 4.1) |
| Feed regime | ~2% of body weight/day; Tilapia Vegi 4.5 mm floating extruded feed (Hokovit Hofmann Nutrition AG, Butzberg, CH); main ingredients soybean meal, wheat, corn gluten meal, linseed oil (Methods 4.1) |
| Total Feed (kg) | 9.74 (Table 4, 4-week nutrient-trial total; see WARN-CHECK) |
| Fish biomass created (kg) | 10.25 (Table 2, 'Total fish biomass produced') |
| Fish survival rate | NR (raw counts only; see NOT DERIVED) |
| Fish weight gain | 205 (g/fish, UNIT CONVERSION ONLY: kg->g, Table 2) |
| Fish trial duration (days) | 57 (4 May-30 June 2015, Table 2) |

**Water**

| Field | Value |
|---|---|
| Water recycle | NR (only a 30-min pump duty-cycle stated, not a flow rate; see NOT DERIVED) |
| Water volume in the system | 4200 (L, approx. total per AP system, Methods 4.1) |
| Aq pH | 5.0-7.3 (range, n=10, Table 1) |
| pHOptimal | 6.5 (AP target via KOH buffering, Methods 4.2) |
| Dissolved Oxigen | 7.1-8.6 (range, n=10, mg/L, Table 1) |
| EC | 0.550-1.099 (dS/m; range, n=10; UNIT CONVERSION ONLY from 550-1099 uS/cm, Table 1) |
| Water temperature | 23.9 (degC; single trial-mean value, n>1000 logged root-zone measurements, no SD stated, Table 1) |
| TAN / NH4-N | 0.15-1.05 (mg/L, range, n=3, Table 1) |
| NO2-N | 0.03-0.04 (mg/L, range, n=3, Table 1) |
| NO3-N | 62 (mg/L; calculated average, Table 1 caption) |

**Plant**

| Field | Value |
|---|---|
| Plant | Lactuca sativa 'YACHT' (Salanova(R)) |
| Details | Lactuca sativa 'YACHT' (Salanova(R)), pelleted/coated seed; sown in rockwool cubes 5 May for germination, transplanted to floating-raft holes 29 May (placed directly on table), roots reached water and moved onto rafts after 6 days; 36 plants/system at 20 plants/m2; harvested 26 June (28 d after transplant, UNIT CONVERSION ONLY: date arithmetic 29 May->26 June); 0 unsellable, 36 harvested |
| Days Plant after transplant | 28 |
| Plants/m2 | 20 |
| SPAD (aquaponics) | NR (Dualex leaf-clip CHL/FLV/NBI used instead of a SPAD meter; different instrument/metric, see NOT DERIVED) |
| Plant fresh weight | 272.4 (g/plant, Table 3 'Average shoot weight') |
| Plant dry matter | NR (Figure 6 Left reports only a bar chart of dry-weight fraction, no absolute % in text or table; never read a value off a figure) |
| Tissue nitrate AP | NR (Figure 5 reports NO3 content only as a bar chart with significance letters, no absolute values in text or a table; never read a value off a figure) |
| Tissue nitrate HYD | NR (same reason as Tissue nitrate AP) |

**System & Setup**

| Field | Value |
|---|---|
| System type | Floating raft culture (styrofoam rafts on shallow table, 25 mm water depth; paper's own keyword, p.1) |
| Media Details | Rockwool propagation cubes (germination/rooting); floating styrofoam rafts (Dry Hydroponics B.V., NL) on 3 table sections (1.2 x 2 m each, 7.2 m2 total per system); densities 20 plants/m2 (lettuce), 40 plants/m2 (mint, mushroom herb) (Methods 4.1) |
| Air supplement | Y (Oxygenation zone integral to each AP RAS loop (Methods 4.1 system-design list); temperature/DO regulated to target 26 degC / 8 mg O2 L-1 via HACH Lange SC1000 controller. Scope of this controller (whether it also actively aerates D, which has no fish tank) is not stated explicitly.) |
| Iron supplemented | Y (Weekly micronutrient + Fe supplement: 242 g Multi Micro Mix (Zn,B,Mn,Mo,Cu; Okohum) + 558 g Fe DTPA solution (SARL Plantin) total over the 4-week trial (Table 4); target Fe 3 mg/L (Methods 4.2)) |
| Remineralization | Y (Weekly micronutrient + Fe supplement: 242 g Multi Micro Mix (Zn,B,Mn,Mo,Cu; Okohum) + 558 g Fe DTPA solution (SARL Plantin) total over the 4-week trial (Table 4); target Fe 3 mg/L (Methods 4.2) \| Judgment call: this paper does not use the term 'remineralization'; recorded Y/N mirroring 'Nutrient supplemented' since both fields describe the same weekly mineral-addition practice for B/C -- see Extraction notes for the ambiguity between these two schema fields.) |
| pH Buffers | Y (KOH added to buffer AP pH to ~6.5; 200 g total over the trial (Table 4, Methods 4.2). HYD (D) used 350 mL 16% HNO3 to target pH ~6 -- see NO COLUMN in remarks.) |
| Artificial Lighting | N (Plants exposed to natural photoperiod only (Methods 4.1: 'The plants were exposed to a natural photoperiod')) |
| Nutrient supplemented | Y (Weekly micronutrient + Fe supplement: 242 g Multi Micro Mix (Zn,B,Mn,Mo,Cu; Okohum) + 558 g Fe DTPA solution (SARL Plantin) total over the 4-week trial (Table 4); target Fe 3 mg/L (Methods 4.2)) |
| Equipment | HACH Lange SC1000 controller (temp/O2 regulation, fish tank, target 26 degC / 8 mg O2 L-1); HACH Lange HQ40d portable multimeter (temp/pH/EC/O2, 3x/week); Hygrochron iButton temperature loggers (root zone, continuous, first table section); Dualex Scientific leaf-clip (ForceA) (CHL/FLV/NBI/ANTH, live leaf); Reflectoquant Nitrate-Test strip + spectrophotometer (Merck) (leaf NO3); LECO TruSpec CHN Macro Analyser (tissue C/N); HydroBuddy v1.50 nutrient calculator (fertilizer dosing); HACH Lange LCK cuvette tests + DR3800 VIS spectrophotometer (water PO4-P/NH4-N/NO2-N/NO3-N/K/Fe/Ca/Mg/CaCO3); GraphPad Prism v5.00 (statistics) |
| Control Parameters | Fish-tank temperature/DO regulated to 26 degC / 8 mg O2 L-1 (SC1000 controller); AP pH buffered to ~6.5 via KOH; HYD (D) pH buffered to ~6 via 16% HNO3; target water nutrient concentrations used for HydroBuddy dosing calculations: NO3-N 60 mg/L, PO4-P 35 mg/L, K+ 150 mg/L, Fe 3 mg/L, Ca2+ 130 mg/L, Mg2+ 40 mg/L (Methods 4.2) |
| Combination | Nile tilapia (Oreochromis niloticus) and Lactuca sativa 'YACHT' (Salanova(R)) co-cultured in floating-raft aquaponics; comparison of graduated nutrient-supplementation regimes (A: fish-feed-derived nutrients only; B: +weekly micronutrients/Fe; C: +weekly macronutrients P/K/Mg/S on top of B) against a hydroponic control D receiving a full inorganic nutrient solution (same P/K/Mg/S as C, plus N and Ca). This row = System B vs. D for Lettuce. |

**Site**

| Field | Value |
|---|---|
| Region | Europe |
| Country | Switzerland |
| Lat | 47.217262 |
| Long | 8.681461 |
| Average room Temperature | NR (only water/root-zone temperatures reported, see NOT DERIVED) |

**Results & Statistics**

| Field | Value |
|---|---|
| Measured Unit | g/plant (average shoot fresh weight); kg/m2 (shoot yield); kg (system fresh biomass); mg/L (water NH4-N/NO2-N/NO3-N/PO4-P/K/Fe/Ca/Mg); dS/m (EC, converted from uS/cm); degC (water/root-zone temperature); %/day (SGR); ratio (FCR); % (feed protein, converted from g/kg) |
| Statistic Details | One-way ANOVA + Bonferroni multiple-comparison test, GraphPad Prism v5.00 for Windows; significance p<0.05 (Methods 4.8); applied explicitly to physiological/quality indices (Figs 3-6) -- Table 3 yield/biomass has no significance letters or stated test, see NO COLUMN |
| Statistically analysed | Y |
| Replicates (n) | 1 system per treatment (no system-level replication, see DESIGN NOTE); plant sub-samples n=6 (root:shoot ratio Fig 3, CHL/FLV/NBI Fig 4, dry-matter fraction Fig 6 Left) or n=3 (tissue NO3 Fig 5, C/N ratio Fig 6 Right) |
| AP | 4.90 (kg/m2, Table 3 'Production (shoot)') |
| HYD | 5.65 (kg/m2, Table 3 'Production (shoot)', System D) |

**Experimental Remarks:** TRIAL DEFINITION: T4 = System B (aquaponic, micronutrient+Fe supplement) vs. System D (hydroponic control) for Lactuca sativa 'YACHT' (Salanova(R)). All four systems (A, B, C, D) were run concurrently as a single system per treatment (no system-level replication, see DESIGN NOTE below); Lettuce was one of three plant species (lettuce, mint, mushroom herb) grown simultaneously in every system, so this paper produces 9 trial rows total (3 AP treatments x 3 species), each row pairing that treatment's species-specific AP yield/growth data against the matching D value for the same species. Fish-tank and water-quality data (FCR, SGR, Table 1 ranges) are identical across the three species-rows sharing System B, since all three species grew in the same tank/system. \| WARN-CHECK Total Feed (kg) vs. FCR/duration pairing, Table 2 vs. Table 4, p.4 & p.11. Table 4 ('Total input for the four experimental systems') gives a single 'Fish feed' mass per system -- A 9.20 kg, B 9.74 kg, C 9.50 kg -- explicitly tied to 'the four-week trial' during which the differential nutrient regimes were applied (Methods 4.2: 'Four different nutrient regimes were applied over the four-week trial (see Table 4)'), i.e. the plant/nutrient-supplementation period starting 29 May. Table 2 gives FCR (A 1.25, B 1.49, C 1.16) and total biomass produced (A 11.96, B 10.25, C 12.90 kg) over the full 57-day FISH period (4 May-30 June). Recomputing implied feed consumption from FCR x biomass gain over the 57-day window gives A ~14.95 kg, B ~15.27 kg, C ~14.96 kg (recomputed here only as evidence, not entered in any cell) -- substantially more than Table 4's 9.20/9.74/9.50 kg. The two figures almost certainly refer to different, overlapping but non-identical time windows (57-day fish-growth period vs. ~4-week nutrient-regime period), which the paper does not explicitly reconcile. Recorded Table 4's value in 'Total Feed (kg)' since it is the only explicitly stated total-feed figure in the paper; flagged because it should NOT be read as the feed total corresponding to the 57-day 'Fish trial duration' / FCR pairing recorded elsewhere in this same row. Added to REVIEW.md by the batch merge step. \| WARN-MINOR Fish size initial, Methods 4.1 vs. Table 2, p.10 & p.4. Methods states fish were stocked 'each weighing approximately 220 g'; Table 2 gives actual mean initial weights of 248 g (A), 216 g (B), 226 g (C) -- a rounded approximate statement vs. precise per-tank table values, not a genuine conflict (not a contradiction: nominal/approximate vs. measured, per SCHEMA). Table 2's per-tank values used for Fish size initial. \| DESIGN NOTE: this paper uses one aquaponic system per nutrient regime (A, B, C) and one hydroponic system (D), with NO system-level replication -- each treatment is a single tank/table set, not a replicated experimental unit; ANOVA is run on plant- or fish-level sub-samples (n=6, n=3, or individual fish) within that one system per treatment. Classified `quasi-experiment` per SCHEMA.md's test ('treatments compared but without randomisation or true replication'); see the note's Extraction notes for the full rationale, closely paralleling the same lab's earlier graberAquaponicSystemsNutrient2009 (also quasi-experiment, same design pattern). \| UNIT CONVERSION ONLY (summary): feed crude protein 375 g/kg -> 37.5% (divide by 10, Methods 4.1); fish weights kg -> g (Table 2, x1000); EC uS/cm -> dS/m (Table 1, /1000, all three AP systems + D); Days Plant after transplant computed as calendar-day differences between the stated transplant date (29 May, common to all species, Methods 4.2) and each species' stated harvest date (26/29/30 June respectively, Methods 4.3) -- Lettuce 28 d, Mint 31 d, Mushroom herb 32 d; arithmetic shown per-species in the Details column. No new information beyond what the paper states was introduced by any of these conversions. \| NOT DERIVED, left NR: Initial Stock density (50 fish/tank and approx. per-fish weights given, but fish-tank water volume alone is not stated separately from the ~4200 L total system volume -- system total includes biofilter/sump/tables, so a kg/m3 density would be derivation); Fish survival rate (Table 2 gives raw counts -- A: 50->49, one fish died per Results 2.2; B: 50->50; C: 50->50 -- but the paper never states a survival or mortality PERCENTAGE itself, so left NR rather than computed from the counts, per vault convention); N and P and K feed composition beyond crude protein (Methods 4.1 gives only crude protein/lipid/fibre/ash, g/kg); Water recycle L/min (only a pump duty-cycle is stated -- 'water was pumped every 30 min', Methods 4.1 -- not a flow rate); Water type/Water classification (no categorising term used by the paper itself); Daily Water exchange rate (recirculating system, no %/day figure given); FUE AP/HYD, WUE (not calculated); SPAD (the paper used a Dualex Scientific leaf-clip for CHL/FLV/NBI/ANTH, not a SPAD chlorophyll meter -- different instrument/metric, not a substitutable value); Plant height and Leaf count (not among the measured traits -- only fresh/dry biomass, root:shoot ratio, CHL/FLV/NBI, tissue NO3, and C/N ratio were measured); Climate control (foliar greenhouse; no active heating/cooling/humidity control system described, only fish-tank temperature/O2 regulation via the SC1000 controller); Average room Temperature (only water/root-zone temperatures are reported -- Table 1's 'Average T in root zone' and 'T in fish tank' -- no separate ambient greenhouse air temperature is stated); Biological system already in use (no statement either way); Lat/Long ARE given directly in decimal degrees by the paper (47.217262, 8.681461, Methods 4.1) so no conversion was needed there. \| NO COLUMN (Table 1, water-phase parameters with no dedicated trials.csv field): PO4-P (mg/L) A 3.5, B 1.9, C 28, D 28 (calculated average; cf. Results/Discussion p.8 narrative giving system A's PO4-P as rising from 2.64 to 4.54 mg/L over the trial, average ~3.6, consistent with Table 1's 3.5 -- not a contradiction, a range vs. an average of the same range); K (mg/L) A 48, B 35, C 146, D 123; Fe (mg/L) A 0.1, B 1.8, C 2.1, D 2.3; Ca (mg/L) A 90, B 74, C 74, D 117; Mg (mg/L) A 15, B 11, C 32, D 35. HYD (D)-side water quality, since the schema's water-quality columns (Aq pH, Dissolved Oxigen, EC, Water temperature, TAN/NH4-N, NO2-N, NO3-N) are aquaponic-loop fields with no paired HYD column: pH (D) 5.9-7.4 (range, n=10); DO (D) 5.9-7.6 mg/L (range, n=10); EC (D) 1.234-1.622 dS/m (range, n=10; UNIT CONVERSION ONLY from 1234-1622 uS/cm); Water temperature/root-zone (D) 22.9 degC (single value, n>1000); T in fish tank (D) not applicable, no fish tank in D (Table 1 shows '-'); TAN/NH4-N (D) 0.03-0.06 mg/L (range, n=3); NO2-N (D) printed as '0.25-0.04' in Table 1 -- reversed order (min>max), most likely a typesetting error for a low range similar to the AP systems' 0.01-0.04 mg/L band; transcribed as printed, WARN-MINOR, no cell affected since there is no HYD NO2-N column; NO3-N (D) 63 mg/L (calculated average). Fish-tank compartment temperature (alternate to the root-zone value used for Water temperature, per SCHEMA's plant-bed/hydroponic-unit compartment rule): T in fish tank A 25.8-29.8 degC, B 24.8-28.4 degC, C 25.5-28.8 degC (range, n=10, Table 1); D has no fish tank. pHOptimal target for HYD (D): ~6, via 16% HNO3 addition (Methods 4.2) -- distinct from the AP target of ~6.5 via KOH, which is recorded in the pHOptimal cell for this row's AP system. Relative production % (Table 3, 'fraction of the highest production value for each species', paper's own calculated metric): Lettuce A 65, B 80, C 100, D 92; Mint A 59, B 100, C 94, D 91; Mushroom herb A 100, B 100, C 64, D 79. Total biomass (fresh, system-level kg, Table 3, distinct from the per-plant 'Average shoot weight' used for Plant fresh weight and from the per-area 'Production (shoot) kg/m2' used for AP/HYD): Lettuce A 9.2, B 10.6, C 13.5, D 12.4; Mint A 7.7, B 11.6, C 10.5, D 9.9; Mushroom herb A 1.31, B 1.25, C 0.76, D 0.98 (kg total shoots+roots per system). Shoots-only and roots-only fresh biomass (kg, Table 3) for all species/systems -- no dedicated column beyond the per-plant and per-area figures already captured. Root-to-shoot ratio (Figure 3, n=6): reported only as a bar chart with significance letters ('significantly higher in system A than the other systems' for all three species; 'also significantly higher in system B than in C for the mushroom herbs') -- no absolute values in text or a table, so no numbers were extracted (never read a value off a figure); the qualitative finding is described narratively in the note. Water loss during storage (Section 2.6, lettuce only, 14 days post-harvest, n=6): A 24.6%, B 22.3%, C 21.8%, D 23.6% water loss -- an explicit numeric result in running text, but a postharvest-storage metric with no home in either trials.csv or plant_measurements.csv (not a tissue analyte, not a growth/water-quality field); recorded here for completeness. Total input table (Table 4) reagent/product names and full per-system input masses for all elements/products, beyond what is captured in Nutrient supplemented/Iron supplemented/pH Buffers details above. Statistical scope caveat: the Methods 4.8 one-way ANOVA + Bonferroni description is applied explicitly to the physiological/quality indices in Figures 3-6 (root:shoot ratio, CHL/FLV/NBI, tissue NO3, dry matter fraction, C/N ratio); Table 3's yield/biomass figures are presented descriptively with no significance letters or stated test, so 'Statistically analysed = Y' for this row should be read as applying most directly to the physiological indices, not necessarily to the yield table.

#### nozziNutrientManagementAquaponics2018-T5

**Fish**

| Field | Value |
|---|---|
| Fish | Nile tilapia (Oreochromis niloticus) |
| FCR | 1.49 |
| SGR | 1.17 |
| Protein | 37.5 (UNIT CONVERSION ONLY: 375 g/kg -> %, Methods 4.1) |
| % of body weight | 2 |
| Fish size initial | 216 (UNIT CONVERSION ONLY: kg->g, Table 2; see WARN-MINOR) |
| Fish size final | 421 (UNIT CONVERSION ONLY: kg->g, Table 2) |
| Feed routine | 6 automated feeding times/day (07:00, 08:00, 10:00, 12:00, 15:00, 17:00); total feed amount recorded daily (Methods 4.1) |
| Feed regime | ~2% of body weight/day; Tilapia Vegi 4.5 mm floating extruded feed (Hokovit Hofmann Nutrition AG, Butzberg, CH); main ingredients soybean meal, wheat, corn gluten meal, linseed oil (Methods 4.1) |
| Total Feed (kg) | 9.74 (Table 4, 4-week nutrient-trial total; see WARN-CHECK) |
| Fish biomass created (kg) | 10.25 (Table 2, 'Total fish biomass produced') |
| Fish survival rate | NR (raw counts only; see NOT DERIVED) |
| Fish weight gain | 205 (g/fish, UNIT CONVERSION ONLY: kg->g, Table 2) |
| Fish trial duration (days) | 57 (4 May-30 June 2015, Table 2) |

**Water**

| Field | Value |
|---|---|
| Water recycle | NR (only a 30-min pump duty-cycle stated, not a flow rate; see NOT DERIVED) |
| Water volume in the system | 4200 (L, approx. total per AP system, Methods 4.1) |
| Aq pH | 5.0-7.3 (range, n=10, Table 1) |
| pHOptimal | 6.5 (AP target via KOH buffering, Methods 4.2) |
| Dissolved Oxigen | 7.1-8.6 (range, n=10, mg/L, Table 1) |
| EC | 0.550-1.099 (dS/m; range, n=10; UNIT CONVERSION ONLY from 550-1099 uS/cm, Table 1) |
| Water temperature | 23.9 (degC; single trial-mean value, n>1000 logged root-zone measurements, no SD stated, Table 1) |
| TAN / NH4-N | 0.15-1.05 (mg/L, range, n=3, Table 1) |
| NO2-N | 0.03-0.04 (mg/L, range, n=3, Table 1) |
| NO3-N | 62 (mg/L; calculated average, Table 1 caption) |

**Plant**

| Field | Value |
|---|---|
| Plant | Mentha piperita 'CHOCOLATE' |
| Details | Mentha piperita 'CHOCOLATE', purchased as seedlings, propagated in rockwool cubes; transplanted to floating-raft holes 29 May, roots reached water and moved onto rafts after 9 days; 72 plants/system at 40 plants/m2; harvested 29 June (31 d after transplant, UNIT CONVERSION ONLY: date arithmetic 29 May->29 June); 0 unsellable, 72 harvested |
| Plant Category | Herb (p.10, 'two herbs: a mint (Mentha piperita) and mushroom herb') |
| Days Plant after transplant | 31 |
| Plants/m2 | 40 |
| SPAD (aquaponics) | NR (Dualex leaf-clip CHL/FLV/NBI used instead of a SPAD meter; different instrument/metric, see NOT DERIVED) |
| Plant fresh weight | 132.4 (g/plant, Table 3 'Average shoot weight') |
| Plant dry matter | NR (Figure 6 Left reports only a bar chart of dry-weight fraction, no absolute % in text or table; never read a value off a figure) |
| Tissue nitrate AP | NR (Figure 5 reports NO3 content only as a bar chart with significance letters, no absolute values in text or a table; never read a value off a figure) |
| Tissue nitrate HYD | NR (same reason as Tissue nitrate AP) |

**System & Setup**

| Field | Value |
|---|---|
| System type | Floating raft culture (styrofoam rafts on shallow table, 25 mm water depth; paper's own keyword, p.1) |
| Media Details | Rockwool propagation cubes (germination/rooting); floating styrofoam rafts (Dry Hydroponics B.V., NL) on 3 table sections (1.2 x 2 m each, 7.2 m2 total per system); densities 20 plants/m2 (lettuce), 40 plants/m2 (mint, mushroom herb) (Methods 4.1) |
| Air supplement | Y (Oxygenation zone integral to each AP RAS loop (Methods 4.1 system-design list); temperature/DO regulated to target 26 degC / 8 mg O2 L-1 via HACH Lange SC1000 controller. Scope of this controller (whether it also actively aerates D, which has no fish tank) is not stated explicitly.) |
| Iron supplemented | Y (Weekly micronutrient + Fe supplement: 242 g Multi Micro Mix (Zn,B,Mn,Mo,Cu; Okohum) + 558 g Fe DTPA solution (SARL Plantin) total over the 4-week trial (Table 4); target Fe 3 mg/L (Methods 4.2)) |
| Remineralization | Y (Weekly micronutrient + Fe supplement: 242 g Multi Micro Mix (Zn,B,Mn,Mo,Cu; Okohum) + 558 g Fe DTPA solution (SARL Plantin) total over the 4-week trial (Table 4); target Fe 3 mg/L (Methods 4.2) \| Judgment call: this paper does not use the term 'remineralization'; recorded Y/N mirroring 'Nutrient supplemented' since both fields describe the same weekly mineral-addition practice for B/C -- see Extraction notes for the ambiguity between these two schema fields.) |
| pH Buffers | Y (KOH added to buffer AP pH to ~6.5; 200 g total over the trial (Table 4, Methods 4.2). HYD (D) used 350 mL 16% HNO3 to target pH ~6 -- see NO COLUMN in remarks.) |
| Artificial Lighting | N (Plants exposed to natural photoperiod only (Methods 4.1: 'The plants were exposed to a natural photoperiod')) |
| Nutrient supplemented | Y (Weekly micronutrient + Fe supplement: 242 g Multi Micro Mix (Zn,B,Mn,Mo,Cu; Okohum) + 558 g Fe DTPA solution (SARL Plantin) total over the 4-week trial (Table 4); target Fe 3 mg/L (Methods 4.2)) |
| Equipment | HACH Lange SC1000 controller (temp/O2 regulation, fish tank, target 26 degC / 8 mg O2 L-1); HACH Lange HQ40d portable multimeter (temp/pH/EC/O2, 3x/week); Hygrochron iButton temperature loggers (root zone, continuous, first table section); Dualex Scientific leaf-clip (ForceA) (CHL/FLV/NBI/ANTH, live leaf); Reflectoquant Nitrate-Test strip + spectrophotometer (Merck) (leaf NO3); LECO TruSpec CHN Macro Analyser (tissue C/N); HydroBuddy v1.50 nutrient calculator (fertilizer dosing); HACH Lange LCK cuvette tests + DR3800 VIS spectrophotometer (water PO4-P/NH4-N/NO2-N/NO3-N/K/Fe/Ca/Mg/CaCO3); GraphPad Prism v5.00 (statistics) |
| Control Parameters | Fish-tank temperature/DO regulated to 26 degC / 8 mg O2 L-1 (SC1000 controller); AP pH buffered to ~6.5 via KOH; HYD (D) pH buffered to ~6 via 16% HNO3; target water nutrient concentrations used for HydroBuddy dosing calculations: NO3-N 60 mg/L, PO4-P 35 mg/L, K+ 150 mg/L, Fe 3 mg/L, Ca2+ 130 mg/L, Mg2+ 40 mg/L (Methods 4.2) |
| Combination | Nile tilapia (Oreochromis niloticus) and Mentha piperita 'CHOCOLATE' co-cultured in floating-raft aquaponics; comparison of graduated nutrient-supplementation regimes (A: fish-feed-derived nutrients only; B: +weekly micronutrients/Fe; C: +weekly macronutrients P/K/Mg/S on top of B) against a hydroponic control D receiving a full inorganic nutrient solution (same P/K/Mg/S as C, plus N and Ca). This row = System B vs. D for Mint. |

**Site**

| Field | Value |
|---|---|
| Region | Europe |
| Country | Switzerland |
| Lat | 47.217262 |
| Long | 8.681461 |
| Average room Temperature | NR (only water/root-zone temperatures reported, see NOT DERIVED) |

**Results & Statistics**

| Field | Value |
|---|---|
| Measured Unit | g/plant (average shoot fresh weight); kg/m2 (shoot yield); kg (system fresh biomass); mg/L (water NH4-N/NO2-N/NO3-N/PO4-P/K/Fe/Ca/Mg); dS/m (EC, converted from uS/cm); degC (water/root-zone temperature); %/day (SGR); ratio (FCR); % (feed protein, converted from g/kg) |
| Statistic Details | One-way ANOVA + Bonferroni multiple-comparison test, GraphPad Prism v5.00 for Windows; significance p<0.05 (Methods 4.8); applied explicitly to physiological/quality indices (Figs 3-6) -- Table 3 yield/biomass has no significance letters or stated test, see NO COLUMN |
| Statistically analysed | Y |
| Replicates (n) | 1 system per treatment (no system-level replication, see DESIGN NOTE); plant sub-samples n=6 (root:shoot ratio Fig 3, CHL/FLV/NBI Fig 4, dry-matter fraction Fig 6 Left) or n=3 (tissue NO3 Fig 5, C/N ratio Fig 6 Right) |
| AP | 4.77 (kg/m2, Table 3 'Production (shoot)') |
| HYD | 4.33 (kg/m2, Table 3 'Production (shoot)', System D) |

**Experimental Remarks:** TRIAL DEFINITION: T5 = System B (aquaponic, micronutrient+Fe supplement) vs. System D (hydroponic control) for Mentha piperita 'CHOCOLATE'. All four systems (A, B, C, D) were run concurrently as a single system per treatment (no system-level replication, see DESIGN NOTE below); Mint was one of three plant species (lettuce, mint, mushroom herb) grown simultaneously in every system, so this paper produces 9 trial rows total (3 AP treatments x 3 species), each row pairing that treatment's species-specific AP yield/growth data against the matching D value for the same species. Fish-tank and water-quality data (FCR, SGR, Table 1 ranges) are identical across the three species-rows sharing System B, since all three species grew in the same tank/system. \| WARN-CHECK Total Feed (kg) vs. FCR/duration pairing, Table 2 vs. Table 4, p.4 & p.11. Table 4 ('Total input for the four experimental systems') gives a single 'Fish feed' mass per system -- A 9.20 kg, B 9.74 kg, C 9.50 kg -- explicitly tied to 'the four-week trial' during which the differential nutrient regimes were applied (Methods 4.2: 'Four different nutrient regimes were applied over the four-week trial (see Table 4)'), i.e. the plant/nutrient-supplementation period starting 29 May. Table 2 gives FCR (A 1.25, B 1.49, C 1.16) and total biomass produced (A 11.96, B 10.25, C 12.90 kg) over the full 57-day FISH period (4 May-30 June). Recomputing implied feed consumption from FCR x biomass gain over the 57-day window gives A ~14.95 kg, B ~15.27 kg, C ~14.96 kg (recomputed here only as evidence, not entered in any cell) -- substantially more than Table 4's 9.20/9.74/9.50 kg. The two figures almost certainly refer to different, overlapping but non-identical time windows (57-day fish-growth period vs. ~4-week nutrient-regime period), which the paper does not explicitly reconcile. Recorded Table 4's value in 'Total Feed (kg)' since it is the only explicitly stated total-feed figure in the paper; flagged because it should NOT be read as the feed total corresponding to the 57-day 'Fish trial duration' / FCR pairing recorded elsewhere in this same row. Added to REVIEW.md by the batch merge step. \| WARN-MINOR Fish size initial, Methods 4.1 vs. Table 2, p.10 & p.4. Methods states fish were stocked 'each weighing approximately 220 g'; Table 2 gives actual mean initial weights of 248 g (A), 216 g (B), 226 g (C) -- a rounded approximate statement vs. precise per-tank table values, not a genuine conflict (not a contradiction: nominal/approximate vs. measured, per SCHEMA). Table 2's per-tank values used for Fish size initial. \| DESIGN NOTE: this paper uses one aquaponic system per nutrient regime (A, B, C) and one hydroponic system (D), with NO system-level replication -- each treatment is a single tank/table set, not a replicated experimental unit; ANOVA is run on plant- or fish-level sub-samples (n=6, n=3, or individual fish) within that one system per treatment. Classified `quasi-experiment` per SCHEMA.md's test ('treatments compared but without randomisation or true replication'); see the note's Extraction notes for the full rationale, closely paralleling the same lab's earlier graberAquaponicSystemsNutrient2009 (also quasi-experiment, same design pattern). \| UNIT CONVERSION ONLY (summary): feed crude protein 375 g/kg -> 37.5% (divide by 10, Methods 4.1); fish weights kg -> g (Table 2, x1000); EC uS/cm -> dS/m (Table 1, /1000, all three AP systems + D); Days Plant after transplant computed as calendar-day differences between the stated transplant date (29 May, common to all species, Methods 4.2) and each species' stated harvest date (26/29/30 June respectively, Methods 4.3) -- Lettuce 28 d, Mint 31 d, Mushroom herb 32 d; arithmetic shown per-species in the Details column. No new information beyond what the paper states was introduced by any of these conversions. \| NOT DERIVED, left NR: Initial Stock density (50 fish/tank and approx. per-fish weights given, but fish-tank water volume alone is not stated separately from the ~4200 L total system volume -- system total includes biofilter/sump/tables, so a kg/m3 density would be derivation); Fish survival rate (Table 2 gives raw counts -- A: 50->49, one fish died per Results 2.2; B: 50->50; C: 50->50 -- but the paper never states a survival or mortality PERCENTAGE itself, so left NR rather than computed from the counts, per vault convention); N and P and K feed composition beyond crude protein (Methods 4.1 gives only crude protein/lipid/fibre/ash, g/kg); Water recycle L/min (only a pump duty-cycle is stated -- 'water was pumped every 30 min', Methods 4.1 -- not a flow rate); Water type/Water classification (no categorising term used by the paper itself); Daily Water exchange rate (recirculating system, no %/day figure given); FUE AP/HYD, WUE (not calculated); SPAD (the paper used a Dualex Scientific leaf-clip for CHL/FLV/NBI/ANTH, not a SPAD chlorophyll meter -- different instrument/metric, not a substitutable value); Plant height and Leaf count (not among the measured traits -- only fresh/dry biomass, root:shoot ratio, CHL/FLV/NBI, tissue NO3, and C/N ratio were measured); Climate control (foliar greenhouse; no active heating/cooling/humidity control system described, only fish-tank temperature/O2 regulation via the SC1000 controller); Average room Temperature (only water/root-zone temperatures are reported -- Table 1's 'Average T in root zone' and 'T in fish tank' -- no separate ambient greenhouse air temperature is stated); Biological system already in use (no statement either way); Lat/Long ARE given directly in decimal degrees by the paper (47.217262, 8.681461, Methods 4.1) so no conversion was needed there. \| NO COLUMN (Table 1, water-phase parameters with no dedicated trials.csv field): PO4-P (mg/L) A 3.5, B 1.9, C 28, D 28 (calculated average; cf. Results/Discussion p.8 narrative giving system A's PO4-P as rising from 2.64 to 4.54 mg/L over the trial, average ~3.6, consistent with Table 1's 3.5 -- not a contradiction, a range vs. an average of the same range); K (mg/L) A 48, B 35, C 146, D 123; Fe (mg/L) A 0.1, B 1.8, C 2.1, D 2.3; Ca (mg/L) A 90, B 74, C 74, D 117; Mg (mg/L) A 15, B 11, C 32, D 35. HYD (D)-side water quality, since the schema's water-quality columns (Aq pH, Dissolved Oxigen, EC, Water temperature, TAN/NH4-N, NO2-N, NO3-N) are aquaponic-loop fields with no paired HYD column: pH (D) 5.9-7.4 (range, n=10); DO (D) 5.9-7.6 mg/L (range, n=10); EC (D) 1.234-1.622 dS/m (range, n=10; UNIT CONVERSION ONLY from 1234-1622 uS/cm); Water temperature/root-zone (D) 22.9 degC (single value, n>1000); T in fish tank (D) not applicable, no fish tank in D (Table 1 shows '-'); TAN/NH4-N (D) 0.03-0.06 mg/L (range, n=3); NO2-N (D) printed as '0.25-0.04' in Table 1 -- reversed order (min>max), most likely a typesetting error for a low range similar to the AP systems' 0.01-0.04 mg/L band; transcribed as printed, WARN-MINOR, no cell affected since there is no HYD NO2-N column; NO3-N (D) 63 mg/L (calculated average). Fish-tank compartment temperature (alternate to the root-zone value used for Water temperature, per SCHEMA's plant-bed/hydroponic-unit compartment rule): T in fish tank A 25.8-29.8 degC, B 24.8-28.4 degC, C 25.5-28.8 degC (range, n=10, Table 1); D has no fish tank. pHOptimal target for HYD (D): ~6, via 16% HNO3 addition (Methods 4.2) -- distinct from the AP target of ~6.5 via KOH, which is recorded in the pHOptimal cell for this row's AP system. Relative production % (Table 3, 'fraction of the highest production value for each species', paper's own calculated metric): Lettuce A 65, B 80, C 100, D 92; Mint A 59, B 100, C 94, D 91; Mushroom herb A 100, B 100, C 64, D 79. Total biomass (fresh, system-level kg, Table 3, distinct from the per-plant 'Average shoot weight' used for Plant fresh weight and from the per-area 'Production (shoot) kg/m2' used for AP/HYD): Lettuce A 9.2, B 10.6, C 13.5, D 12.4; Mint A 7.7, B 11.6, C 10.5, D 9.9; Mushroom herb A 1.31, B 1.25, C 0.76, D 0.98 (kg total shoots+roots per system). Shoots-only and roots-only fresh biomass (kg, Table 3) for all species/systems -- no dedicated column beyond the per-plant and per-area figures already captured. Root-to-shoot ratio (Figure 3, n=6): reported only as a bar chart with significance letters ('significantly higher in system A than the other systems' for all three species; 'also significantly higher in system B than in C for the mushroom herbs') -- no absolute values in text or a table, so no numbers were extracted (never read a value off a figure); the qualitative finding is described narratively in the note. Water loss during storage (Section 2.6, lettuce only, 14 days post-harvest, n=6): A 24.6%, B 22.3%, C 21.8%, D 23.6% water loss -- an explicit numeric result in running text, but a postharvest-storage metric with no home in either trials.csv or plant_measurements.csv (not a tissue analyte, not a growth/water-quality field); recorded here for completeness. Total input table (Table 4) reagent/product names and full per-system input masses for all elements/products, beyond what is captured in Nutrient supplemented/Iron supplemented/pH Buffers details above. Statistical scope caveat: the Methods 4.8 one-way ANOVA + Bonferroni description is applied explicitly to the physiological/quality indices in Figures 3-6 (root:shoot ratio, CHL/FLV/NBI, tissue NO3, dry matter fraction, C/N ratio); Table 3's yield/biomass figures are presented descriptively with no significance letters or stated test, so 'Statistically analysed = Y' for this row should be read as applying most directly to the physiological indices, not necessarily to the yield table.

#### nozziNutrientManagementAquaponics2018-T6

**Fish**

| Field | Value |
|---|---|
| Fish | Nile tilapia (Oreochromis niloticus) |
| FCR | 1.49 |
| SGR | 1.17 |
| Protein | 37.5 (UNIT CONVERSION ONLY: 375 g/kg -> %, Methods 4.1) |
| % of body weight | 2 |
| Fish size initial | 216 (UNIT CONVERSION ONLY: kg->g, Table 2; see WARN-MINOR) |
| Fish size final | 421 (UNIT CONVERSION ONLY: kg->g, Table 2) |
| Feed routine | 6 automated feeding times/day (07:00, 08:00, 10:00, 12:00, 15:00, 17:00); total feed amount recorded daily (Methods 4.1) |
| Feed regime | ~2% of body weight/day; Tilapia Vegi 4.5 mm floating extruded feed (Hokovit Hofmann Nutrition AG, Butzberg, CH); main ingredients soybean meal, wheat, corn gluten meal, linseed oil (Methods 4.1) |
| Total Feed (kg) | 9.74 (Table 4, 4-week nutrient-trial total; see WARN-CHECK) |
| Fish biomass created (kg) | 10.25 (Table 2, 'Total fish biomass produced') |
| Fish survival rate | NR (raw counts only; see NOT DERIVED) |
| Fish weight gain | 205 (g/fish, UNIT CONVERSION ONLY: kg->g, Table 2) |
| Fish trial duration (days) | 57 (4 May-30 June 2015, Table 2) |

**Water**

| Field | Value |
|---|---|
| Water recycle | NR (only a 30-min pump duty-cycle stated, not a flow rate; see NOT DERIVED) |
| Water volume in the system | 4200 (L, approx. total per AP system, Methods 4.1) |
| Aq pH | 5.0-7.3 (range, n=10, Table 1) |
| pHOptimal | 6.5 (AP target via KOH buffering, Methods 4.2) |
| Dissolved Oxigen | 7.1-8.6 (range, n=10, mg/L, Table 1) |
| EC | 0.550-1.099 (dS/m; range, n=10; UNIT CONVERSION ONLY from 550-1099 uS/cm, Table 1) |
| Water temperature | 23.9 (degC; single trial-mean value, n>1000 logged root-zone measurements, no SD stated, Table 1) |
| TAN / NH4-N | 0.15-1.05 (mg/L, range, n=3, Table 1) |
| NO2-N | 0.03-0.04 (mg/L, range, n=3, Table 1) |
| NO3-N | 62 (mg/L; calculated average, Table 1 caption) |

**Plant**

| Field | Value |
|---|---|
| Plant | Rungia klossii ('mushroom herb') |
| Details | Rungia klossii ('mushroom herb'), purchased as seedlings, propagated in rockwool cubes; transplanted to floating-raft holes 29 May, roots reached water and moved onto rafts after 8 days; 72 plants/system at 40 plants/m2; harvested 30 June (32 d after transplant, UNIT CONVERSION ONLY: date arithmetic 29 May->30 June); 0 unsellable, 72 harvested |
| Plant Category | Herb (p.10, 'two herbs: a mint (Mentha piperita) and mushroom herb') |
| Days Plant after transplant | 32 |
| Plants/m2 | 40 |
| SPAD (aquaponics) | NR (Dualex leaf-clip CHL/FLV/NBI used instead of a SPAD meter; different instrument/metric, see NOT DERIVED) |
| Plant fresh weight | 9.20 (g/plant, Table 3 'Average shoot weight') |
| Plant dry matter | NR (Figure 6 Left reports only a bar chart of dry-weight fraction, no absolute % in text or table; never read a value off a figure) |
| Tissue nitrate AP | NR (Figure 5 reports NO3 content only as a bar chart with significance letters, no absolute values in text or a table; never read a value off a figure) |
| Tissue nitrate HYD | NR (same reason as Tissue nitrate AP) |

**System & Setup**

| Field | Value |
|---|---|
| System type | Floating raft culture (styrofoam rafts on shallow table, 25 mm water depth; paper's own keyword, p.1) |
| Media Details | Rockwool propagation cubes (germination/rooting); floating styrofoam rafts (Dry Hydroponics B.V., NL) on 3 table sections (1.2 x 2 m each, 7.2 m2 total per system); densities 20 plants/m2 (lettuce), 40 plants/m2 (mint, mushroom herb) (Methods 4.1) |
| Air supplement | Y (Oxygenation zone integral to each AP RAS loop (Methods 4.1 system-design list); temperature/DO regulated to target 26 degC / 8 mg O2 L-1 via HACH Lange SC1000 controller. Scope of this controller (whether it also actively aerates D, which has no fish tank) is not stated explicitly.) |
| Iron supplemented | Y (Weekly micronutrient + Fe supplement: 242 g Multi Micro Mix (Zn,B,Mn,Mo,Cu; Okohum) + 558 g Fe DTPA solution (SARL Plantin) total over the 4-week trial (Table 4); target Fe 3 mg/L (Methods 4.2)) |
| Remineralization | Y (Weekly micronutrient + Fe supplement: 242 g Multi Micro Mix (Zn,B,Mn,Mo,Cu; Okohum) + 558 g Fe DTPA solution (SARL Plantin) total over the 4-week trial (Table 4); target Fe 3 mg/L (Methods 4.2) \| Judgment call: this paper does not use the term 'remineralization'; recorded Y/N mirroring 'Nutrient supplemented' since both fields describe the same weekly mineral-addition practice for B/C -- see Extraction notes for the ambiguity between these two schema fields.) |
| pH Buffers | Y (KOH added to buffer AP pH to ~6.5; 200 g total over the trial (Table 4, Methods 4.2). HYD (D) used 350 mL 16% HNO3 to target pH ~6 -- see NO COLUMN in remarks.) |
| Artificial Lighting | N (Plants exposed to natural photoperiod only (Methods 4.1: 'The plants were exposed to a natural photoperiod')) |
| Nutrient supplemented | Y (Weekly micronutrient + Fe supplement: 242 g Multi Micro Mix (Zn,B,Mn,Mo,Cu; Okohum) + 558 g Fe DTPA solution (SARL Plantin) total over the 4-week trial (Table 4); target Fe 3 mg/L (Methods 4.2)) |
| Equipment | HACH Lange SC1000 controller (temp/O2 regulation, fish tank, target 26 degC / 8 mg O2 L-1); HACH Lange HQ40d portable multimeter (temp/pH/EC/O2, 3x/week); Hygrochron iButton temperature loggers (root zone, continuous, first table section); Dualex Scientific leaf-clip (ForceA) (CHL/FLV/NBI/ANTH, live leaf); Reflectoquant Nitrate-Test strip + spectrophotometer (Merck) (leaf NO3); LECO TruSpec CHN Macro Analyser (tissue C/N); HydroBuddy v1.50 nutrient calculator (fertilizer dosing); HACH Lange LCK cuvette tests + DR3800 VIS spectrophotometer (water PO4-P/NH4-N/NO2-N/NO3-N/K/Fe/Ca/Mg/CaCO3); GraphPad Prism v5.00 (statistics) |
| Control Parameters | Fish-tank temperature/DO regulated to 26 degC / 8 mg O2 L-1 (SC1000 controller); AP pH buffered to ~6.5 via KOH; HYD (D) pH buffered to ~6 via 16% HNO3; target water nutrient concentrations used for HydroBuddy dosing calculations: NO3-N 60 mg/L, PO4-P 35 mg/L, K+ 150 mg/L, Fe 3 mg/L, Ca2+ 130 mg/L, Mg2+ 40 mg/L (Methods 4.2) |
| Combination | Nile tilapia (Oreochromis niloticus) and Rungia klossii ('mushroom herb') co-cultured in floating-raft aquaponics; comparison of graduated nutrient-supplementation regimes (A: fish-feed-derived nutrients only; B: +weekly micronutrients/Fe; C: +weekly macronutrients P/K/Mg/S on top of B) against a hydroponic control D receiving a full inorganic nutrient solution (same P/K/Mg/S as C, plus N and Ca). This row = System B vs. D for MushroomHerb. |

**Site**

| Field | Value |
|---|---|
| Region | Europe |
| Country | Switzerland |
| Lat | 47.217262 |
| Long | 8.681461 |
| Average room Temperature | NR (only water/root-zone temperatures reported, see NOT DERIVED) |

**Results & Statistics**

| Field | Value |
|---|---|
| Measured Unit | g/plant (average shoot fresh weight); kg/m2 (shoot yield); kg (system fresh biomass); mg/L (water NH4-N/NO2-N/NO3-N/PO4-P/K/Fe/Ca/Mg); dS/m (EC, converted from uS/cm); degC (water/root-zone temperature); %/day (SGR); ratio (FCR); % (feed protein, converted from g/kg) |
| Statistic Details | One-way ANOVA + Bonferroni multiple-comparison test, GraphPad Prism v5.00 for Windows; significance p<0.05 (Methods 4.8); applied explicitly to physiological/quality indices (Figs 3-6) -- Table 3 yield/biomass has no significance letters or stated test, see NO COLUMN |
| Statistically analysed | Y |
| Replicates (n) | 1 system per treatment (no system-level replication, see DESIGN NOTE); plant sub-samples n=6 (root:shoot ratio Fig 3, CHL/FLV/NBI Fig 4, dry-matter fraction Fig 6 Left) or n=3 (tissue NO3 Fig 5, C/N ratio Fig 6 Right) |
| AP | 0.33 (kg/m2, Table 3 'Production (shoot)') |
| HYD | 0.27 (kg/m2, Table 3 'Production (shoot)', System D) |

**Experimental Remarks:** TRIAL DEFINITION: T6 = System B (aquaponic, micronutrient+Fe supplement) vs. System D (hydroponic control) for Rungia klossii ('mushroom herb'). All four systems (A, B, C, D) were run concurrently as a single system per treatment (no system-level replication, see DESIGN NOTE below); MushroomHerb was one of three plant species (lettuce, mint, mushroom herb) grown simultaneously in every system, so this paper produces 9 trial rows total (3 AP treatments x 3 species), each row pairing that treatment's species-specific AP yield/growth data against the matching D value for the same species. Fish-tank and water-quality data (FCR, SGR, Table 1 ranges) are identical across the three species-rows sharing System B, since all three species grew in the same tank/system. \| WARN-CHECK Total Feed (kg) vs. FCR/duration pairing, Table 2 vs. Table 4, p.4 & p.11. Table 4 ('Total input for the four experimental systems') gives a single 'Fish feed' mass per system -- A 9.20 kg, B 9.74 kg, C 9.50 kg -- explicitly tied to 'the four-week trial' during which the differential nutrient regimes were applied (Methods 4.2: 'Four different nutrient regimes were applied over the four-week trial (see Table 4)'), i.e. the plant/nutrient-supplementation period starting 29 May. Table 2 gives FCR (A 1.25, B 1.49, C 1.16) and total biomass produced (A 11.96, B 10.25, C 12.90 kg) over the full 57-day FISH period (4 May-30 June). Recomputing implied feed consumption from FCR x biomass gain over the 57-day window gives A ~14.95 kg, B ~15.27 kg, C ~14.96 kg (recomputed here only as evidence, not entered in any cell) -- substantially more than Table 4's 9.20/9.74/9.50 kg. The two figures almost certainly refer to different, overlapping but non-identical time windows (57-day fish-growth period vs. ~4-week nutrient-regime period), which the paper does not explicitly reconcile. Recorded Table 4's value in 'Total Feed (kg)' since it is the only explicitly stated total-feed figure in the paper; flagged because it should NOT be read as the feed total corresponding to the 57-day 'Fish trial duration' / FCR pairing recorded elsewhere in this same row. Added to REVIEW.md by the batch merge step. \| WARN-MINOR Fish size initial, Methods 4.1 vs. Table 2, p.10 & p.4. Methods states fish were stocked 'each weighing approximately 220 g'; Table 2 gives actual mean initial weights of 248 g (A), 216 g (B), 226 g (C) -- a rounded approximate statement vs. precise per-tank table values, not a genuine conflict (not a contradiction: nominal/approximate vs. measured, per SCHEMA). Table 2's per-tank values used for Fish size initial. \| DESIGN NOTE: this paper uses one aquaponic system per nutrient regime (A, B, C) and one hydroponic system (D), with NO system-level replication -- each treatment is a single tank/table set, not a replicated experimental unit; ANOVA is run on plant- or fish-level sub-samples (n=6, n=3, or individual fish) within that one system per treatment. Classified `quasi-experiment` per SCHEMA.md's test ('treatments compared but without randomisation or true replication'); see the note's Extraction notes for the full rationale, closely paralleling the same lab's earlier graberAquaponicSystemsNutrient2009 (also quasi-experiment, same design pattern). \| UNIT CONVERSION ONLY (summary): feed crude protein 375 g/kg -> 37.5% (divide by 10, Methods 4.1); fish weights kg -> g (Table 2, x1000); EC uS/cm -> dS/m (Table 1, /1000, all three AP systems + D); Days Plant after transplant computed as calendar-day differences between the stated transplant date (29 May, common to all species, Methods 4.2) and each species' stated harvest date (26/29/30 June respectively, Methods 4.3) -- Lettuce 28 d, Mint 31 d, Mushroom herb 32 d; arithmetic shown per-species in the Details column. No new information beyond what the paper states was introduced by any of these conversions. \| NOT DERIVED, left NR: Initial Stock density (50 fish/tank and approx. per-fish weights given, but fish-tank water volume alone is not stated separately from the ~4200 L total system volume -- system total includes biofilter/sump/tables, so a kg/m3 density would be derivation); Fish survival rate (Table 2 gives raw counts -- A: 50->49, one fish died per Results 2.2; B: 50->50; C: 50->50 -- but the paper never states a survival or mortality PERCENTAGE itself, so left NR rather than computed from the counts, per vault convention); N and P and K feed composition beyond crude protein (Methods 4.1 gives only crude protein/lipid/fibre/ash, g/kg); Water recycle L/min (only a pump duty-cycle is stated -- 'water was pumped every 30 min', Methods 4.1 -- not a flow rate); Water type/Water classification (no categorising term used by the paper itself); Daily Water exchange rate (recirculating system, no %/day figure given); FUE AP/HYD, WUE (not calculated); SPAD (the paper used a Dualex Scientific leaf-clip for CHL/FLV/NBI/ANTH, not a SPAD chlorophyll meter -- different instrument/metric, not a substitutable value); Plant height and Leaf count (not among the measured traits -- only fresh/dry biomass, root:shoot ratio, CHL/FLV/NBI, tissue NO3, and C/N ratio were measured); Climate control (foliar greenhouse; no active heating/cooling/humidity control system described, only fish-tank temperature/O2 regulation via the SC1000 controller); Average room Temperature (only water/root-zone temperatures are reported -- Table 1's 'Average T in root zone' and 'T in fish tank' -- no separate ambient greenhouse air temperature is stated); Biological system already in use (no statement either way); Lat/Long ARE given directly in decimal degrees by the paper (47.217262, 8.681461, Methods 4.1) so no conversion was needed there. \| NO COLUMN (Table 1, water-phase parameters with no dedicated trials.csv field): PO4-P (mg/L) A 3.5, B 1.9, C 28, D 28 (calculated average; cf. Results/Discussion p.8 narrative giving system A's PO4-P as rising from 2.64 to 4.54 mg/L over the trial, average ~3.6, consistent with Table 1's 3.5 -- not a contradiction, a range vs. an average of the same range); K (mg/L) A 48, B 35, C 146, D 123; Fe (mg/L) A 0.1, B 1.8, C 2.1, D 2.3; Ca (mg/L) A 90, B 74, C 74, D 117; Mg (mg/L) A 15, B 11, C 32, D 35. HYD (D)-side water quality, since the schema's water-quality columns (Aq pH, Dissolved Oxigen, EC, Water temperature, TAN/NH4-N, NO2-N, NO3-N) are aquaponic-loop fields with no paired HYD column: pH (D) 5.9-7.4 (range, n=10); DO (D) 5.9-7.6 mg/L (range, n=10); EC (D) 1.234-1.622 dS/m (range, n=10; UNIT CONVERSION ONLY from 1234-1622 uS/cm); Water temperature/root-zone (D) 22.9 degC (single value, n>1000); T in fish tank (D) not applicable, no fish tank in D (Table 1 shows '-'); TAN/NH4-N (D) 0.03-0.06 mg/L (range, n=3); NO2-N (D) printed as '0.25-0.04' in Table 1 -- reversed order (min>max), most likely a typesetting error for a low range similar to the AP systems' 0.01-0.04 mg/L band; transcribed as printed, WARN-MINOR, no cell affected since there is no HYD NO2-N column; NO3-N (D) 63 mg/L (calculated average). Fish-tank compartment temperature (alternate to the root-zone value used for Water temperature, per SCHEMA's plant-bed/hydroponic-unit compartment rule): T in fish tank A 25.8-29.8 degC, B 24.8-28.4 degC, C 25.5-28.8 degC (range, n=10, Table 1); D has no fish tank. pHOptimal target for HYD (D): ~6, via 16% HNO3 addition (Methods 4.2) -- distinct from the AP target of ~6.5 via KOH, which is recorded in the pHOptimal cell for this row's AP system. Relative production % (Table 3, 'fraction of the highest production value for each species', paper's own calculated metric): Lettuce A 65, B 80, C 100, D 92; Mint A 59, B 100, C 94, D 91; Mushroom herb A 100, B 100, C 64, D 79. Total biomass (fresh, system-level kg, Table 3, distinct from the per-plant 'Average shoot weight' used for Plant fresh weight and from the per-area 'Production (shoot) kg/m2' used for AP/HYD): Lettuce A 9.2, B 10.6, C 13.5, D 12.4; Mint A 7.7, B 11.6, C 10.5, D 9.9; Mushroom herb A 1.31, B 1.25, C 0.76, D 0.98 (kg total shoots+roots per system). Shoots-only and roots-only fresh biomass (kg, Table 3) for all species/systems -- no dedicated column beyond the per-plant and per-area figures already captured. Root-to-shoot ratio (Figure 3, n=6): reported only as a bar chart with significance letters ('significantly higher in system A than the other systems' for all three species; 'also significantly higher in system B than in C for the mushroom herbs') -- no absolute values in text or a table, so no numbers were extracted (never read a value off a figure); the qualitative finding is described narratively in the note. Water loss during storage (Section 2.6, lettuce only, 14 days post-harvest, n=6): A 24.6%, B 22.3%, C 21.8%, D 23.6% water loss -- an explicit numeric result in running text, but a postharvest-storage metric with no home in either trials.csv or plant_measurements.csv (not a tissue analyte, not a growth/water-quality field); recorded here for completeness. Total input table (Table 4) reagent/product names and full per-system input masses for all elements/products, beyond what is captured in Nutrient supplemented/Iron supplemented/pH Buffers details above. Statistical scope caveat: the Methods 4.8 one-way ANOVA + Bonferroni description is applied explicitly to the physiological/quality indices in Figures 3-6 (root:shoot ratio, CHL/FLV/NBI, tissue NO3, dry matter fraction, C/N ratio); Table 3's yield/biomass figures are presented descriptively with no significance letters or stated test, so 'Statistically analysed = Y' for this row should be read as applying most directly to the physiological indices, not necessarily to the yield table.

#### nozziNutrientManagementAquaponics2018-T7

**Fish**

| Field | Value |
|---|---|
| Fish | Nile tilapia (Oreochromis niloticus) |
| FCR | 1.16 |
| SGR | 1.33 |
| Protein | 37.5 (UNIT CONVERSION ONLY: 375 g/kg -> %, Methods 4.1) |
| % of body weight | 2 |
| Fish size initial | 226 (UNIT CONVERSION ONLY: kg->g, Table 2; see WARN-MINOR) |
| Fish size final | 484 (UNIT CONVERSION ONLY: kg->g, Table 2) |
| Feed routine | 6 automated feeding times/day (07:00, 08:00, 10:00, 12:00, 15:00, 17:00); total feed amount recorded daily (Methods 4.1) |
| Feed regime | ~2% of body weight/day; Tilapia Vegi 4.5 mm floating extruded feed (Hokovit Hofmann Nutrition AG, Butzberg, CH); main ingredients soybean meal, wheat, corn gluten meal, linseed oil (Methods 4.1) |
| Total Feed (kg) | 9.50 (Table 4, 4-week nutrient-trial total; see WARN-CHECK) |
| Fish biomass created (kg) | 12.90 (Table 2, 'Total fish biomass produced') |
| Fish survival rate | NR (raw counts only; see NOT DERIVED) |
| Fish weight gain | 258 (g/fish, UNIT CONVERSION ONLY: kg->g, Table 2) |
| Fish trial duration (days) | 57 (4 May-30 June 2015, Table 2) |

**Water**

| Field | Value |
|---|---|
| Water recycle | NR (only a 30-min pump duty-cycle stated, not a flow rate; see NOT DERIVED) |
| Water volume in the system | 4200 (L, approx. total per AP system, Methods 4.1) |
| Aq pH | 5.0-6.5 (range, n=10, Table 1) |
| pHOptimal | 6.5 (AP target via KOH buffering, Methods 4.2) |
| Dissolved Oxigen | 6.6-8.4 (range, n=10, mg/L, Table 1) |
| EC | 1.483-1.858 (dS/m; range, n=10; UNIT CONVERSION ONLY from 1483-1858 uS/cm, Table 1) |
| Water temperature | 23.2 (degC; single trial-mean value, n>1000 logged root-zone measurements, no SD stated, Table 1) |
| TAN / NH4-N | 0.11-0.15 (mg/L, range, n=3, Table 1) |
| NO2-N | 0.01-0.02 (mg/L, range, n=3, Table 1) |
| NO3-N | 82 (mg/L; calculated average, Table 1 caption) |

**Plant**

| Field | Value |
|---|---|
| Plant | Lactuca sativa 'YACHT' (Salanova(R)) |
| Details | Lactuca sativa 'YACHT' (Salanova(R)), pelleted/coated seed; sown in rockwool cubes 5 May for germination, transplanted to floating-raft holes 29 May (placed directly on table), roots reached water and moved onto rafts after 6 days; 36 plants/system at 20 plants/m2; harvested 26 June (28 d after transplant, UNIT CONVERSION ONLY: date arithmetic 29 May->26 June); 0 unsellable, 36 harvested |
| Days Plant after transplant | 28 |
| Plants/m2 | 20 |
| SPAD (aquaponics) | NR (Dualex leaf-clip CHL/FLV/NBI used instead of a SPAD meter; different instrument/metric, see NOT DERIVED) |
| Plant fresh weight | 340.5 (g/plant, Table 3 'Average shoot weight') |
| Plant dry matter | NR (Figure 6 Left reports only a bar chart of dry-weight fraction, no absolute % in text or table; never read a value off a figure) |
| Tissue nitrate AP | NR (Figure 5 reports NO3 content only as a bar chart with significance letters, no absolute values in text or a table; never read a value off a figure) |
| Tissue nitrate HYD | NR (same reason as Tissue nitrate AP) |

**System & Setup**

| Field | Value |
|---|---|
| System type | Floating raft culture (styrofoam rafts on shallow table, 25 mm water depth; paper's own keyword, p.1) |
| Media Details | Rockwool propagation cubes (germination/rooting); floating styrofoam rafts (Dry Hydroponics B.V., NL) on 3 table sections (1.2 x 2 m each, 7.2 m2 total per system); densities 20 plants/m2 (lettuce), 40 plants/m2 (mint, mushroom herb) (Methods 4.1) |
| Air supplement | Y (Oxygenation zone integral to each AP RAS loop (Methods 4.1 system-design list); temperature/DO regulated to target 26 degC / 8 mg O2 L-1 via HACH Lange SC1000 controller. Scope of this controller (whether it also actively aerates D, which has no fish tank) is not stated explicitly.) |
| Iron supplemented | Y (Same micronutrient/Fe supplement as B (242 g Multi Micro Mix; 478 g Fe DTPA -- note: less total Fe than B despite being the higher-input treatment, Table 4, not a contradiction, just as reported) PLUS weekly macronutrients: 1401 g KH2PO4, 1818 g MgSO4.7H2O, 2551 g K2SO4 total over the trial; targets NO3-N 60, PO4-P 35, K+ 150, Ca2+ 130, Mg2+ 40 mg/L (Methods 4.2, Table 4)) |
| Remineralization | Y (Same micronutrient/Fe supplement as B (242 g Multi Micro Mix; 478 g Fe DTPA -- note: less total Fe than B despite being the higher-input treatment, Table 4, not a contradiction, just as reported) PLUS weekly macronutrients: 1401 g KH2PO4, 1818 g MgSO4.7H2O, 2551 g K2SO4 total over the trial; targets NO3-N 60, PO4-P 35, K+ 150, Ca2+ 130, Mg2+ 40 mg/L (Methods 4.2, Table 4) \| Judgment call: this paper does not use the term 'remineralization'; recorded Y/N mirroring 'Nutrient supplemented' since both fields describe the same weekly mineral-addition practice for B/C -- see Extraction notes for the ambiguity between these two schema fields.) |
| pH Buffers | Y (KOH added to buffer AP pH to ~6.5; 950 g total over the trial (Table 4, Methods 4.2) -- highest KOH input of the three AP systems. HYD (D) used 350 mL 16% HNO3 to target pH ~6 -- see NO COLUMN in remarks.) |
| Artificial Lighting | N (Plants exposed to natural photoperiod only (Methods 4.1: 'The plants were exposed to a natural photoperiod')) |
| Nutrient supplemented | Y (Same micronutrient/Fe supplement as B (242 g Multi Micro Mix; 478 g Fe DTPA -- note: less total Fe than B despite being the higher-input treatment, Table 4, not a contradiction, just as reported) PLUS weekly macronutrients: 1401 g KH2PO4, 1818 g MgSO4.7H2O, 2551 g K2SO4 total over the trial; targets NO3-N 60, PO4-P 35, K+ 150, Ca2+ 130, Mg2+ 40 mg/L (Methods 4.2, Table 4)) |
| Equipment | HACH Lange SC1000 controller (temp/O2 regulation, fish tank, target 26 degC / 8 mg O2 L-1); HACH Lange HQ40d portable multimeter (temp/pH/EC/O2, 3x/week); Hygrochron iButton temperature loggers (root zone, continuous, first table section); Dualex Scientific leaf-clip (ForceA) (CHL/FLV/NBI/ANTH, live leaf); Reflectoquant Nitrate-Test strip + spectrophotometer (Merck) (leaf NO3); LECO TruSpec CHN Macro Analyser (tissue C/N); HydroBuddy v1.50 nutrient calculator (fertilizer dosing); HACH Lange LCK cuvette tests + DR3800 VIS spectrophotometer (water PO4-P/NH4-N/NO2-N/NO3-N/K/Fe/Ca/Mg/CaCO3); GraphPad Prism v5.00 (statistics) |
| Control Parameters | Fish-tank temperature/DO regulated to 26 degC / 8 mg O2 L-1 (SC1000 controller); AP pH buffered to ~6.5 via KOH; HYD (D) pH buffered to ~6 via 16% HNO3; target water nutrient concentrations used for HydroBuddy dosing calculations: NO3-N 60 mg/L, PO4-P 35 mg/L, K+ 150 mg/L, Fe 3 mg/L, Ca2+ 130 mg/L, Mg2+ 40 mg/L (Methods 4.2) |
| Combination | Nile tilapia (Oreochromis niloticus) and Lactuca sativa 'YACHT' (Salanova(R)) co-cultured in floating-raft aquaponics; comparison of graduated nutrient-supplementation regimes (A: fish-feed-derived nutrients only; B: +weekly micronutrients/Fe; C: +weekly macronutrients P/K/Mg/S on top of B) against a hydroponic control D receiving a full inorganic nutrient solution (same P/K/Mg/S as C, plus N and Ca). This row = System C vs. D for Lettuce. |

**Site**

| Field | Value |
|---|---|
| Region | Europe |
| Country | Switzerland |
| Lat | 47.217262 |
| Long | 8.681461 |
| Average room Temperature | NR (only water/root-zone temperatures reported, see NOT DERIVED) |

**Results & Statistics**

| Field | Value |
|---|---|
| Measured Unit | g/plant (average shoot fresh weight); kg/m2 (shoot yield); kg (system fresh biomass); mg/L (water NH4-N/NO2-N/NO3-N/PO4-P/K/Fe/Ca/Mg); dS/m (EC, converted from uS/cm); degC (water/root-zone temperature); %/day (SGR); ratio (FCR); % (feed protein, converted from g/kg) |
| Statistic Details | One-way ANOVA + Bonferroni multiple-comparison test, GraphPad Prism v5.00 for Windows; significance p<0.05 (Methods 4.8); applied explicitly to physiological/quality indices (Figs 3-6) -- Table 3 yield/biomass has no significance letters or stated test, see NO COLUMN |
| Statistically analysed | Y |
| Replicates (n) | 1 system per treatment (no system-level replication, see DESIGN NOTE); plant sub-samples n=6 (root:shoot ratio Fig 3, CHL/FLV/NBI Fig 4, dry-matter fraction Fig 6 Left) or n=3 (tissue NO3 Fig 5, C/N ratio Fig 6 Right) |
| AP | 6.13 (kg/m2, Table 3 'Production (shoot)') |
| HYD | 5.65 (kg/m2, Table 3 'Production (shoot)', System D) |

**Experimental Remarks:** TRIAL DEFINITION: T7 = System C (aquaponic, micronutrient+Fe+macronutrient supplement) vs. System D (hydroponic control) for Lactuca sativa 'YACHT' (Salanova(R)). All four systems (A, B, C, D) were run concurrently as a single system per treatment (no system-level replication, see DESIGN NOTE below); Lettuce was one of three plant species (lettuce, mint, mushroom herb) grown simultaneously in every system, so this paper produces 9 trial rows total (3 AP treatments x 3 species), each row pairing that treatment's species-specific AP yield/growth data against the matching D value for the same species. Fish-tank and water-quality data (FCR, SGR, Table 1 ranges) are identical across the three species-rows sharing System C, since all three species grew in the same tank/system. \| WARN-CHECK Total Feed (kg) vs. FCR/duration pairing, Table 2 vs. Table 4, p.4 & p.11. Table 4 ('Total input for the four experimental systems') gives a single 'Fish feed' mass per system -- A 9.20 kg, B 9.74 kg, C 9.50 kg -- explicitly tied to 'the four-week trial' during which the differential nutrient regimes were applied (Methods 4.2: 'Four different nutrient regimes were applied over the four-week trial (see Table 4)'), i.e. the plant/nutrient-supplementation period starting 29 May. Table 2 gives FCR (A 1.25, B 1.49, C 1.16) and total biomass produced (A 11.96, B 10.25, C 12.90 kg) over the full 57-day FISH period (4 May-30 June). Recomputing implied feed consumption from FCR x biomass gain over the 57-day window gives A ~14.95 kg, B ~15.27 kg, C ~14.96 kg (recomputed here only as evidence, not entered in any cell) -- substantially more than Table 4's 9.20/9.74/9.50 kg. The two figures almost certainly refer to different, overlapping but non-identical time windows (57-day fish-growth period vs. ~4-week nutrient-regime period), which the paper does not explicitly reconcile. Recorded Table 4's value in 'Total Feed (kg)' since it is the only explicitly stated total-feed figure in the paper; flagged because it should NOT be read as the feed total corresponding to the 57-day 'Fish trial duration' / FCR pairing recorded elsewhere in this same row. Added to REVIEW.md by the batch merge step. \| WARN-MINOR Fish size initial, Methods 4.1 vs. Table 2, p.10 & p.4. Methods states fish were stocked 'each weighing approximately 220 g'; Table 2 gives actual mean initial weights of 248 g (A), 216 g (B), 226 g (C) -- a rounded approximate statement vs. precise per-tank table values, not a genuine conflict (not a contradiction: nominal/approximate vs. measured, per SCHEMA). Table 2's per-tank values used for Fish size initial. \| DESIGN NOTE: this paper uses one aquaponic system per nutrient regime (A, B, C) and one hydroponic system (D), with NO system-level replication -- each treatment is a single tank/table set, not a replicated experimental unit; ANOVA is run on plant- or fish-level sub-samples (n=6, n=3, or individual fish) within that one system per treatment. Classified `quasi-experiment` per SCHEMA.md's test ('treatments compared but without randomisation or true replication'); see the note's Extraction notes for the full rationale, closely paralleling the same lab's earlier graberAquaponicSystemsNutrient2009 (also quasi-experiment, same design pattern). \| UNIT CONVERSION ONLY (summary): feed crude protein 375 g/kg -> 37.5% (divide by 10, Methods 4.1); fish weights kg -> g (Table 2, x1000); EC uS/cm -> dS/m (Table 1, /1000, all three AP systems + D); Days Plant after transplant computed as calendar-day differences between the stated transplant date (29 May, common to all species, Methods 4.2) and each species' stated harvest date (26/29/30 June respectively, Methods 4.3) -- Lettuce 28 d, Mint 31 d, Mushroom herb 32 d; arithmetic shown per-species in the Details column. No new information beyond what the paper states was introduced by any of these conversions. \| NOT DERIVED, left NR: Initial Stock density (50 fish/tank and approx. per-fish weights given, but fish-tank water volume alone is not stated separately from the ~4200 L total system volume -- system total includes biofilter/sump/tables, so a kg/m3 density would be derivation); Fish survival rate (Table 2 gives raw counts -- A: 50->49, one fish died per Results 2.2; B: 50->50; C: 50->50 -- but the paper never states a survival or mortality PERCENTAGE itself, so left NR rather than computed from the counts, per vault convention); N and P and K feed composition beyond crude protein (Methods 4.1 gives only crude protein/lipid/fibre/ash, g/kg); Water recycle L/min (only a pump duty-cycle is stated -- 'water was pumped every 30 min', Methods 4.1 -- not a flow rate); Water type/Water classification (no categorising term used by the paper itself); Daily Water exchange rate (recirculating system, no %/day figure given); FUE AP/HYD, WUE (not calculated); SPAD (the paper used a Dualex Scientific leaf-clip for CHL/FLV/NBI/ANTH, not a SPAD chlorophyll meter -- different instrument/metric, not a substitutable value); Plant height and Leaf count (not among the measured traits -- only fresh/dry biomass, root:shoot ratio, CHL/FLV/NBI, tissue NO3, and C/N ratio were measured); Climate control (foliar greenhouse; no active heating/cooling/humidity control system described, only fish-tank temperature/O2 regulation via the SC1000 controller); Average room Temperature (only water/root-zone temperatures are reported -- Table 1's 'Average T in root zone' and 'T in fish tank' -- no separate ambient greenhouse air temperature is stated); Biological system already in use (no statement either way); Lat/Long ARE given directly in decimal degrees by the paper (47.217262, 8.681461, Methods 4.1) so no conversion was needed there. \| NO COLUMN (Table 1, water-phase parameters with no dedicated trials.csv field): PO4-P (mg/L) A 3.5, B 1.9, C 28, D 28 (calculated average; cf. Results/Discussion p.8 narrative giving system A's PO4-P as rising from 2.64 to 4.54 mg/L over the trial, average ~3.6, consistent with Table 1's 3.5 -- not a contradiction, a range vs. an average of the same range); K (mg/L) A 48, B 35, C 146, D 123; Fe (mg/L) A 0.1, B 1.8, C 2.1, D 2.3; Ca (mg/L) A 90, B 74, C 74, D 117; Mg (mg/L) A 15, B 11, C 32, D 35. HYD (D)-side water quality, since the schema's water-quality columns (Aq pH, Dissolved Oxigen, EC, Water temperature, TAN/NH4-N, NO2-N, NO3-N) are aquaponic-loop fields with no paired HYD column: pH (D) 5.9-7.4 (range, n=10); DO (D) 5.9-7.6 mg/L (range, n=10); EC (D) 1.234-1.622 dS/m (range, n=10; UNIT CONVERSION ONLY from 1234-1622 uS/cm); Water temperature/root-zone (D) 22.9 degC (single value, n>1000); T in fish tank (D) not applicable, no fish tank in D (Table 1 shows '-'); TAN/NH4-N (D) 0.03-0.06 mg/L (range, n=3); NO2-N (D) printed as '0.25-0.04' in Table 1 -- reversed order (min>max), most likely a typesetting error for a low range similar to the AP systems' 0.01-0.04 mg/L band; transcribed as printed, WARN-MINOR, no cell affected since there is no HYD NO2-N column; NO3-N (D) 63 mg/L (calculated average). Fish-tank compartment temperature (alternate to the root-zone value used for Water temperature, per SCHEMA's plant-bed/hydroponic-unit compartment rule): T in fish tank A 25.8-29.8 degC, B 24.8-28.4 degC, C 25.5-28.8 degC (range, n=10, Table 1); D has no fish tank. pHOptimal target for HYD (D): ~6, via 16% HNO3 addition (Methods 4.2) -- distinct from the AP target of ~6.5 via KOH, which is recorded in the pHOptimal cell for this row's AP system. Relative production % (Table 3, 'fraction of the highest production value for each species', paper's own calculated metric): Lettuce A 65, B 80, C 100, D 92; Mint A 59, B 100, C 94, D 91; Mushroom herb A 100, B 100, C 64, D 79. Total biomass (fresh, system-level kg, Table 3, distinct from the per-plant 'Average shoot weight' used for Plant fresh weight and from the per-area 'Production (shoot) kg/m2' used for AP/HYD): Lettuce A 9.2, B 10.6, C 13.5, D 12.4; Mint A 7.7, B 11.6, C 10.5, D 9.9; Mushroom herb A 1.31, B 1.25, C 0.76, D 0.98 (kg total shoots+roots per system). Shoots-only and roots-only fresh biomass (kg, Table 3) for all species/systems -- no dedicated column beyond the per-plant and per-area figures already captured. Root-to-shoot ratio (Figure 3, n=6): reported only as a bar chart with significance letters ('significantly higher in system A than the other systems' for all three species; 'also significantly higher in system B than in C for the mushroom herbs') -- no absolute values in text or a table, so no numbers were extracted (never read a value off a figure); the qualitative finding is described narratively in the note. Water loss during storage (Section 2.6, lettuce only, 14 days post-harvest, n=6): A 24.6%, B 22.3%, C 21.8%, D 23.6% water loss -- an explicit numeric result in running text, but a postharvest-storage metric with no home in either trials.csv or plant_measurements.csv (not a tissue analyte, not a growth/water-quality field); recorded here for completeness. Total input table (Table 4) reagent/product names and full per-system input masses for all elements/products, beyond what is captured in Nutrient supplemented/Iron supplemented/pH Buffers details above. Statistical scope caveat: the Methods 4.8 one-way ANOVA + Bonferroni description is applied explicitly to the physiological/quality indices in Figures 3-6 (root:shoot ratio, CHL/FLV/NBI, tissue NO3, dry matter fraction, C/N ratio); Table 3's yield/biomass figures are presented descriptively with no significance letters or stated test, so 'Statistically analysed = Y' for this row should be read as applying most directly to the physiological indices, not necessarily to the yield table.

#### nozziNutrientManagementAquaponics2018-T8

**Fish**

| Field | Value |
|---|---|
| Fish | Nile tilapia (Oreochromis niloticus) |
| FCR | 1.16 |
| SGR | 1.33 |
| Protein | 37.5 (UNIT CONVERSION ONLY: 375 g/kg -> %, Methods 4.1) |
| % of body weight | 2 |
| Fish size initial | 226 (UNIT CONVERSION ONLY: kg->g, Table 2; see WARN-MINOR) |
| Fish size final | 484 (UNIT CONVERSION ONLY: kg->g, Table 2) |
| Feed routine | 6 automated feeding times/day (07:00, 08:00, 10:00, 12:00, 15:00, 17:00); total feed amount recorded daily (Methods 4.1) |
| Feed regime | ~2% of body weight/day; Tilapia Vegi 4.5 mm floating extruded feed (Hokovit Hofmann Nutrition AG, Butzberg, CH); main ingredients soybean meal, wheat, corn gluten meal, linseed oil (Methods 4.1) |
| Total Feed (kg) | 9.50 (Table 4, 4-week nutrient-trial total; see WARN-CHECK) |
| Fish biomass created (kg) | 12.90 (Table 2, 'Total fish biomass produced') |
| Fish survival rate | NR (raw counts only; see NOT DERIVED) |
| Fish weight gain | 258 (g/fish, UNIT CONVERSION ONLY: kg->g, Table 2) |
| Fish trial duration (days) | 57 (4 May-30 June 2015, Table 2) |

**Water**

| Field | Value |
|---|---|
| Water recycle | NR (only a 30-min pump duty-cycle stated, not a flow rate; see NOT DERIVED) |
| Water volume in the system | 4200 (L, approx. total per AP system, Methods 4.1) |
| Aq pH | 5.0-6.5 (range, n=10, Table 1) |
| pHOptimal | 6.5 (AP target via KOH buffering, Methods 4.2) |
| Dissolved Oxigen | 6.6-8.4 (range, n=10, mg/L, Table 1) |
| EC | 1.483-1.858 (dS/m; range, n=10; UNIT CONVERSION ONLY from 1483-1858 uS/cm, Table 1) |
| Water temperature | 23.2 (degC; single trial-mean value, n>1000 logged root-zone measurements, no SD stated, Table 1) |
| TAN / NH4-N | 0.11-0.15 (mg/L, range, n=3, Table 1) |
| NO2-N | 0.01-0.02 (mg/L, range, n=3, Table 1) |
| NO3-N | 82 (mg/L; calculated average, Table 1 caption) |

**Plant**

| Field | Value |
|---|---|
| Plant | Mentha piperita 'CHOCOLATE' |
| Details | Mentha piperita 'CHOCOLATE', purchased as seedlings, propagated in rockwool cubes; transplanted to floating-raft holes 29 May, roots reached water and moved onto rafts after 9 days; 72 plants/system at 40 plants/m2; harvested 29 June (31 d after transplant, UNIT CONVERSION ONLY: date arithmetic 29 May->29 June); 0 unsellable, 72 harvested |
| Plant Category | Herb (p.10, 'two herbs: a mint (Mentha piperita) and mushroom herb') |
| Days Plant after transplant | 31 |
| Plants/m2 | 40 |
| SPAD (aquaponics) | NR (Dualex leaf-clip CHL/FLV/NBI used instead of a SPAD meter; different instrument/metric, see NOT DERIVED) |
| Plant fresh weight | 124.3 (g/plant, Table 3 'Average shoot weight') |
| Plant dry matter | NR (Figure 6 Left reports only a bar chart of dry-weight fraction, no absolute % in text or table; never read a value off a figure) |
| Tissue nitrate AP | NR (Figure 5 reports NO3 content only as a bar chart with significance letters, no absolute values in text or a table; never read a value off a figure) |
| Tissue nitrate HYD | NR (same reason as Tissue nitrate AP) |

**System & Setup**

| Field | Value |
|---|---|
| System type | Floating raft culture (styrofoam rafts on shallow table, 25 mm water depth; paper's own keyword, p.1) |
| Media Details | Rockwool propagation cubes (germination/rooting); floating styrofoam rafts (Dry Hydroponics B.V., NL) on 3 table sections (1.2 x 2 m each, 7.2 m2 total per system); densities 20 plants/m2 (lettuce), 40 plants/m2 (mint, mushroom herb) (Methods 4.1) |
| Air supplement | Y (Oxygenation zone integral to each AP RAS loop (Methods 4.1 system-design list); temperature/DO regulated to target 26 degC / 8 mg O2 L-1 via HACH Lange SC1000 controller. Scope of this controller (whether it also actively aerates D, which has no fish tank) is not stated explicitly.) |
| Iron supplemented | Y (Same micronutrient/Fe supplement as B (242 g Multi Micro Mix; 478 g Fe DTPA -- note: less total Fe than B despite being the higher-input treatment, Table 4, not a contradiction, just as reported) PLUS weekly macronutrients: 1401 g KH2PO4, 1818 g MgSO4.7H2O, 2551 g K2SO4 total over the trial; targets NO3-N 60, PO4-P 35, K+ 150, Ca2+ 130, Mg2+ 40 mg/L (Methods 4.2, Table 4)) |
| Remineralization | Y (Same micronutrient/Fe supplement as B (242 g Multi Micro Mix; 478 g Fe DTPA -- note: less total Fe than B despite being the higher-input treatment, Table 4, not a contradiction, just as reported) PLUS weekly macronutrients: 1401 g KH2PO4, 1818 g MgSO4.7H2O, 2551 g K2SO4 total over the trial; targets NO3-N 60, PO4-P 35, K+ 150, Ca2+ 130, Mg2+ 40 mg/L (Methods 4.2, Table 4) \| Judgment call: this paper does not use the term 'remineralization'; recorded Y/N mirroring 'Nutrient supplemented' since both fields describe the same weekly mineral-addition practice for B/C -- see Extraction notes for the ambiguity between these two schema fields.) |
| pH Buffers | Y (KOH added to buffer AP pH to ~6.5; 950 g total over the trial (Table 4, Methods 4.2) -- highest KOH input of the three AP systems. HYD (D) used 350 mL 16% HNO3 to target pH ~6 -- see NO COLUMN in remarks.) |
| Artificial Lighting | N (Plants exposed to natural photoperiod only (Methods 4.1: 'The plants were exposed to a natural photoperiod')) |
| Nutrient supplemented | Y (Same micronutrient/Fe supplement as B (242 g Multi Micro Mix; 478 g Fe DTPA -- note: less total Fe than B despite being the higher-input treatment, Table 4, not a contradiction, just as reported) PLUS weekly macronutrients: 1401 g KH2PO4, 1818 g MgSO4.7H2O, 2551 g K2SO4 total over the trial; targets NO3-N 60, PO4-P 35, K+ 150, Ca2+ 130, Mg2+ 40 mg/L (Methods 4.2, Table 4)) |
| Equipment | HACH Lange SC1000 controller (temp/O2 regulation, fish tank, target 26 degC / 8 mg O2 L-1); HACH Lange HQ40d portable multimeter (temp/pH/EC/O2, 3x/week); Hygrochron iButton temperature loggers (root zone, continuous, first table section); Dualex Scientific leaf-clip (ForceA) (CHL/FLV/NBI/ANTH, live leaf); Reflectoquant Nitrate-Test strip + spectrophotometer (Merck) (leaf NO3); LECO TruSpec CHN Macro Analyser (tissue C/N); HydroBuddy v1.50 nutrient calculator (fertilizer dosing); HACH Lange LCK cuvette tests + DR3800 VIS spectrophotometer (water PO4-P/NH4-N/NO2-N/NO3-N/K/Fe/Ca/Mg/CaCO3); GraphPad Prism v5.00 (statistics) |
| Control Parameters | Fish-tank temperature/DO regulated to 26 degC / 8 mg O2 L-1 (SC1000 controller); AP pH buffered to ~6.5 via KOH; HYD (D) pH buffered to ~6 via 16% HNO3; target water nutrient concentrations used for HydroBuddy dosing calculations: NO3-N 60 mg/L, PO4-P 35 mg/L, K+ 150 mg/L, Fe 3 mg/L, Ca2+ 130 mg/L, Mg2+ 40 mg/L (Methods 4.2) |
| Combination | Nile tilapia (Oreochromis niloticus) and Mentha piperita 'CHOCOLATE' co-cultured in floating-raft aquaponics; comparison of graduated nutrient-supplementation regimes (A: fish-feed-derived nutrients only; B: +weekly micronutrients/Fe; C: +weekly macronutrients P/K/Mg/S on top of B) against a hydroponic control D receiving a full inorganic nutrient solution (same P/K/Mg/S as C, plus N and Ca). This row = System C vs. D for Mint. |

**Site**

| Field | Value |
|---|---|
| Region | Europe |
| Country | Switzerland |
| Lat | 47.217262 |
| Long | 8.681461 |
| Average room Temperature | NR (only water/root-zone temperatures reported, see NOT DERIVED) |

**Results & Statistics**

| Field | Value |
|---|---|
| Measured Unit | g/plant (average shoot fresh weight); kg/m2 (shoot yield); kg (system fresh biomass); mg/L (water NH4-N/NO2-N/NO3-N/PO4-P/K/Fe/Ca/Mg); dS/m (EC, converted from uS/cm); degC (water/root-zone temperature); %/day (SGR); ratio (FCR); % (feed protein, converted from g/kg) |
| Statistic Details | One-way ANOVA + Bonferroni multiple-comparison test, GraphPad Prism v5.00 for Windows; significance p<0.05 (Methods 4.8); applied explicitly to physiological/quality indices (Figs 3-6) -- Table 3 yield/biomass has no significance letters or stated test, see NO COLUMN |
| Statistically analysed | Y |
| Replicates (n) | 1 system per treatment (no system-level replication, see DESIGN NOTE); plant sub-samples n=6 (root:shoot ratio Fig 3, CHL/FLV/NBI Fig 4, dry-matter fraction Fig 6 Left) or n=3 (tissue NO3 Fig 5, C/N ratio Fig 6 Right) |
| AP | 4.48 (kg/m2, Table 3 'Production (shoot)') |
| HYD | 4.33 (kg/m2, Table 3 'Production (shoot)', System D) |

**Experimental Remarks:** TRIAL DEFINITION: T8 = System C (aquaponic, micronutrient+Fe+macronutrient supplement) vs. System D (hydroponic control) for Mentha piperita 'CHOCOLATE'. All four systems (A, B, C, D) were run concurrently as a single system per treatment (no system-level replication, see DESIGN NOTE below); Mint was one of three plant species (lettuce, mint, mushroom herb) grown simultaneously in every system, so this paper produces 9 trial rows total (3 AP treatments x 3 species), each row pairing that treatment's species-specific AP yield/growth data against the matching D value for the same species. Fish-tank and water-quality data (FCR, SGR, Table 1 ranges) are identical across the three species-rows sharing System C, since all three species grew in the same tank/system. \| WARN-CHECK Total Feed (kg) vs. FCR/duration pairing, Table 2 vs. Table 4, p.4 & p.11. Table 4 ('Total input for the four experimental systems') gives a single 'Fish feed' mass per system -- A 9.20 kg, B 9.74 kg, C 9.50 kg -- explicitly tied to 'the four-week trial' during which the differential nutrient regimes were applied (Methods 4.2: 'Four different nutrient regimes were applied over the four-week trial (see Table 4)'), i.e. the plant/nutrient-supplementation period starting 29 May. Table 2 gives FCR (A 1.25, B 1.49, C 1.16) and total biomass produced (A 11.96, B 10.25, C 12.90 kg) over the full 57-day FISH period (4 May-30 June). Recomputing implied feed consumption from FCR x biomass gain over the 57-day window gives A ~14.95 kg, B ~15.27 kg, C ~14.96 kg (recomputed here only as evidence, not entered in any cell) -- substantially more than Table 4's 9.20/9.74/9.50 kg. The two figures almost certainly refer to different, overlapping but non-identical time windows (57-day fish-growth period vs. ~4-week nutrient-regime period), which the paper does not explicitly reconcile. Recorded Table 4's value in 'Total Feed (kg)' since it is the only explicitly stated total-feed figure in the paper; flagged because it should NOT be read as the feed total corresponding to the 57-day 'Fish trial duration' / FCR pairing recorded elsewhere in this same row. Added to REVIEW.md by the batch merge step. \| WARN-MINOR Fish size initial, Methods 4.1 vs. Table 2, p.10 & p.4. Methods states fish were stocked 'each weighing approximately 220 g'; Table 2 gives actual mean initial weights of 248 g (A), 216 g (B), 226 g (C) -- a rounded approximate statement vs. precise per-tank table values, not a genuine conflict (not a contradiction: nominal/approximate vs. measured, per SCHEMA). Table 2's per-tank values used for Fish size initial. \| DESIGN NOTE: this paper uses one aquaponic system per nutrient regime (A, B, C) and one hydroponic system (D), with NO system-level replication -- each treatment is a single tank/table set, not a replicated experimental unit; ANOVA is run on plant- or fish-level sub-samples (n=6, n=3, or individual fish) within that one system per treatment. Classified `quasi-experiment` per SCHEMA.md's test ('treatments compared but without randomisation or true replication'); see the note's Extraction notes for the full rationale, closely paralleling the same lab's earlier graberAquaponicSystemsNutrient2009 (also quasi-experiment, same design pattern). \| UNIT CONVERSION ONLY (summary): feed crude protein 375 g/kg -> 37.5% (divide by 10, Methods 4.1); fish weights kg -> g (Table 2, x1000); EC uS/cm -> dS/m (Table 1, /1000, all three AP systems + D); Days Plant after transplant computed as calendar-day differences between the stated transplant date (29 May, common to all species, Methods 4.2) and each species' stated harvest date (26/29/30 June respectively, Methods 4.3) -- Lettuce 28 d, Mint 31 d, Mushroom herb 32 d; arithmetic shown per-species in the Details column. No new information beyond what the paper states was introduced by any of these conversions. \| NOT DERIVED, left NR: Initial Stock density (50 fish/tank and approx. per-fish weights given, but fish-tank water volume alone is not stated separately from the ~4200 L total system volume -- system total includes biofilter/sump/tables, so a kg/m3 density would be derivation); Fish survival rate (Table 2 gives raw counts -- A: 50->49, one fish died per Results 2.2; B: 50->50; C: 50->50 -- but the paper never states a survival or mortality PERCENTAGE itself, so left NR rather than computed from the counts, per vault convention); N and P and K feed composition beyond crude protein (Methods 4.1 gives only crude protein/lipid/fibre/ash, g/kg); Water recycle L/min (only a pump duty-cycle is stated -- 'water was pumped every 30 min', Methods 4.1 -- not a flow rate); Water type/Water classification (no categorising term used by the paper itself); Daily Water exchange rate (recirculating system, no %/day figure given); FUE AP/HYD, WUE (not calculated); SPAD (the paper used a Dualex Scientific leaf-clip for CHL/FLV/NBI/ANTH, not a SPAD chlorophyll meter -- different instrument/metric, not a substitutable value); Plant height and Leaf count (not among the measured traits -- only fresh/dry biomass, root:shoot ratio, CHL/FLV/NBI, tissue NO3, and C/N ratio were measured); Climate control (foliar greenhouse; no active heating/cooling/humidity control system described, only fish-tank temperature/O2 regulation via the SC1000 controller); Average room Temperature (only water/root-zone temperatures are reported -- Table 1's 'Average T in root zone' and 'T in fish tank' -- no separate ambient greenhouse air temperature is stated); Biological system already in use (no statement either way); Lat/Long ARE given directly in decimal degrees by the paper (47.217262, 8.681461, Methods 4.1) so no conversion was needed there. \| NO COLUMN (Table 1, water-phase parameters with no dedicated trials.csv field): PO4-P (mg/L) A 3.5, B 1.9, C 28, D 28 (calculated average; cf. Results/Discussion p.8 narrative giving system A's PO4-P as rising from 2.64 to 4.54 mg/L over the trial, average ~3.6, consistent with Table 1's 3.5 -- not a contradiction, a range vs. an average of the same range); K (mg/L) A 48, B 35, C 146, D 123; Fe (mg/L) A 0.1, B 1.8, C 2.1, D 2.3; Ca (mg/L) A 90, B 74, C 74, D 117; Mg (mg/L) A 15, B 11, C 32, D 35. HYD (D)-side water quality, since the schema's water-quality columns (Aq pH, Dissolved Oxigen, EC, Water temperature, TAN/NH4-N, NO2-N, NO3-N) are aquaponic-loop fields with no paired HYD column: pH (D) 5.9-7.4 (range, n=10); DO (D) 5.9-7.6 mg/L (range, n=10); EC (D) 1.234-1.622 dS/m (range, n=10; UNIT CONVERSION ONLY from 1234-1622 uS/cm); Water temperature/root-zone (D) 22.9 degC (single value, n>1000); T in fish tank (D) not applicable, no fish tank in D (Table 1 shows '-'); TAN/NH4-N (D) 0.03-0.06 mg/L (range, n=3); NO2-N (D) printed as '0.25-0.04' in Table 1 -- reversed order (min>max), most likely a typesetting error for a low range similar to the AP systems' 0.01-0.04 mg/L band; transcribed as printed, WARN-MINOR, no cell affected since there is no HYD NO2-N column; NO3-N (D) 63 mg/L (calculated average). Fish-tank compartment temperature (alternate to the root-zone value used for Water temperature, per SCHEMA's plant-bed/hydroponic-unit compartment rule): T in fish tank A 25.8-29.8 degC, B 24.8-28.4 degC, C 25.5-28.8 degC (range, n=10, Table 1); D has no fish tank. pHOptimal target for HYD (D): ~6, via 16% HNO3 addition (Methods 4.2) -- distinct from the AP target of ~6.5 via KOH, which is recorded in the pHOptimal cell for this row's AP system. Relative production % (Table 3, 'fraction of the highest production value for each species', paper's own calculated metric): Lettuce A 65, B 80, C 100, D 92; Mint A 59, B 100, C 94, D 91; Mushroom herb A 100, B 100, C 64, D 79. Total biomass (fresh, system-level kg, Table 3, distinct from the per-plant 'Average shoot weight' used for Plant fresh weight and from the per-area 'Production (shoot) kg/m2' used for AP/HYD): Lettuce A 9.2, B 10.6, C 13.5, D 12.4; Mint A 7.7, B 11.6, C 10.5, D 9.9; Mushroom herb A 1.31, B 1.25, C 0.76, D 0.98 (kg total shoots+roots per system). Shoots-only and roots-only fresh biomass (kg, Table 3) for all species/systems -- no dedicated column beyond the per-plant and per-area figures already captured. Root-to-shoot ratio (Figure 3, n=6): reported only as a bar chart with significance letters ('significantly higher in system A than the other systems' for all three species; 'also significantly higher in system B than in C for the mushroom herbs') -- no absolute values in text or a table, so no numbers were extracted (never read a value off a figure); the qualitative finding is described narratively in the note. Water loss during storage (Section 2.6, lettuce only, 14 days post-harvest, n=6): A 24.6%, B 22.3%, C 21.8%, D 23.6% water loss -- an explicit numeric result in running text, but a postharvest-storage metric with no home in either trials.csv or plant_measurements.csv (not a tissue analyte, not a growth/water-quality field); recorded here for completeness. Total input table (Table 4) reagent/product names and full per-system input masses for all elements/products, beyond what is captured in Nutrient supplemented/Iron supplemented/pH Buffers details above. Statistical scope caveat: the Methods 4.8 one-way ANOVA + Bonferroni description is applied explicitly to the physiological/quality indices in Figures 3-6 (root:shoot ratio, CHL/FLV/NBI, tissue NO3, dry matter fraction, C/N ratio); Table 3's yield/biomass figures are presented descriptively with no significance letters or stated test, so 'Statistically analysed = Y' for this row should be read as applying most directly to the physiological indices, not necessarily to the yield table.

#### nozziNutrientManagementAquaponics2018-T9

**Fish**

| Field | Value |
|---|---|
| Fish | Nile tilapia (Oreochromis niloticus) |
| FCR | 1.16 |
| SGR | 1.33 |
| Protein | 37.5 (UNIT CONVERSION ONLY: 375 g/kg -> %, Methods 4.1) |
| % of body weight | 2 |
| Fish size initial | 226 (UNIT CONVERSION ONLY: kg->g, Table 2; see WARN-MINOR) |
| Fish size final | 484 (UNIT CONVERSION ONLY: kg->g, Table 2) |
| Feed routine | 6 automated feeding times/day (07:00, 08:00, 10:00, 12:00, 15:00, 17:00); total feed amount recorded daily (Methods 4.1) |
| Feed regime | ~2% of body weight/day; Tilapia Vegi 4.5 mm floating extruded feed (Hokovit Hofmann Nutrition AG, Butzberg, CH); main ingredients soybean meal, wheat, corn gluten meal, linseed oil (Methods 4.1) |
| Total Feed (kg) | 9.50 (Table 4, 4-week nutrient-trial total; see WARN-CHECK) |
| Fish biomass created (kg) | 12.90 (Table 2, 'Total fish biomass produced') |
| Fish survival rate | NR (raw counts only; see NOT DERIVED) |
| Fish weight gain | 258 (g/fish, UNIT CONVERSION ONLY: kg->g, Table 2) |
| Fish trial duration (days) | 57 (4 May-30 June 2015, Table 2) |

**Water**

| Field | Value |
|---|---|
| Water recycle | NR (only a 30-min pump duty-cycle stated, not a flow rate; see NOT DERIVED) |
| Water volume in the system | 4200 (L, approx. total per AP system, Methods 4.1) |
| Aq pH | 5.0-6.5 (range, n=10, Table 1) |
| pHOptimal | 6.5 (AP target via KOH buffering, Methods 4.2) |
| Dissolved Oxigen | 6.6-8.4 (range, n=10, mg/L, Table 1) |
| EC | 1.483-1.858 (dS/m; range, n=10; UNIT CONVERSION ONLY from 1483-1858 uS/cm, Table 1) |
| Water temperature | 23.2 (degC; single trial-mean value, n>1000 logged root-zone measurements, no SD stated, Table 1) |
| TAN / NH4-N | 0.11-0.15 (mg/L, range, n=3, Table 1) |
| NO2-N | 0.01-0.02 (mg/L, range, n=3, Table 1) |
| NO3-N | 82 (mg/L; calculated average, Table 1 caption) |

**Plant**

| Field | Value |
|---|---|
| Plant | Rungia klossii ('mushroom herb') |
| Details | Rungia klossii ('mushroom herb'), purchased as seedlings, propagated in rockwool cubes; transplanted to floating-raft holes 29 May, roots reached water and moved onto rafts after 8 days; 72 plants/system at 40 plants/m2; harvested 30 June (32 d after transplant, UNIT CONVERSION ONLY: date arithmetic 29 May->30 June); 0 unsellable, 72 harvested |
| Plant Category | Herb (p.10, 'two herbs: a mint (Mentha piperita) and mushroom herb') |
| Days Plant after transplant | 32 |
| Plants/m2 | 40 |
| SPAD (aquaponics) | NR (Dualex leaf-clip CHL/FLV/NBI used instead of a SPAD meter; different instrument/metric, see NOT DERIVED) |
| Plant fresh weight | 5.97 (g/plant, Table 3 'Average shoot weight') |
| Plant dry matter | NR (Figure 6 Left reports only a bar chart of dry-weight fraction, no absolute % in text or table; never read a value off a figure) |
| Tissue nitrate AP | NR (Figure 5 reports NO3 content only as a bar chart with significance letters, no absolute values in text or a table; never read a value off a figure) |
| Tissue nitrate HYD | NR (same reason as Tissue nitrate AP) |

**System & Setup**

| Field | Value |
|---|---|
| System type | Floating raft culture (styrofoam rafts on shallow table, 25 mm water depth; paper's own keyword, p.1) |
| Media Details | Rockwool propagation cubes (germination/rooting); floating styrofoam rafts (Dry Hydroponics B.V., NL) on 3 table sections (1.2 x 2 m each, 7.2 m2 total per system); densities 20 plants/m2 (lettuce), 40 plants/m2 (mint, mushroom herb) (Methods 4.1) |
| Air supplement | Y (Oxygenation zone integral to each AP RAS loop (Methods 4.1 system-design list); temperature/DO regulated to target 26 degC / 8 mg O2 L-1 via HACH Lange SC1000 controller. Scope of this controller (whether it also actively aerates D, which has no fish tank) is not stated explicitly.) |
| Iron supplemented | Y (Same micronutrient/Fe supplement as B (242 g Multi Micro Mix; 478 g Fe DTPA -- note: less total Fe than B despite being the higher-input treatment, Table 4, not a contradiction, just as reported) PLUS weekly macronutrients: 1401 g KH2PO4, 1818 g MgSO4.7H2O, 2551 g K2SO4 total over the trial; targets NO3-N 60, PO4-P 35, K+ 150, Ca2+ 130, Mg2+ 40 mg/L (Methods 4.2, Table 4)) |
| Remineralization | Y (Same micronutrient/Fe supplement as B (242 g Multi Micro Mix; 478 g Fe DTPA -- note: less total Fe than B despite being the higher-input treatment, Table 4, not a contradiction, just as reported) PLUS weekly macronutrients: 1401 g KH2PO4, 1818 g MgSO4.7H2O, 2551 g K2SO4 total over the trial; targets NO3-N 60, PO4-P 35, K+ 150, Ca2+ 130, Mg2+ 40 mg/L (Methods 4.2, Table 4) \| Judgment call: this paper does not use the term 'remineralization'; recorded Y/N mirroring 'Nutrient supplemented' since both fields describe the same weekly mineral-addition practice for B/C -- see Extraction notes for the ambiguity between these two schema fields.) |
| pH Buffers | Y (KOH added to buffer AP pH to ~6.5; 950 g total over the trial (Table 4, Methods 4.2) -- highest KOH input of the three AP systems. HYD (D) used 350 mL 16% HNO3 to target pH ~6 -- see NO COLUMN in remarks.) |
| Artificial Lighting | N (Plants exposed to natural photoperiod only (Methods 4.1: 'The plants were exposed to a natural photoperiod')) |
| Nutrient supplemented | Y (Same micronutrient/Fe supplement as B (242 g Multi Micro Mix; 478 g Fe DTPA -- note: less total Fe than B despite being the higher-input treatment, Table 4, not a contradiction, just as reported) PLUS weekly macronutrients: 1401 g KH2PO4, 1818 g MgSO4.7H2O, 2551 g K2SO4 total over the trial; targets NO3-N 60, PO4-P 35, K+ 150, Ca2+ 130, Mg2+ 40 mg/L (Methods 4.2, Table 4)) |
| Equipment | HACH Lange SC1000 controller (temp/O2 regulation, fish tank, target 26 degC / 8 mg O2 L-1); HACH Lange HQ40d portable multimeter (temp/pH/EC/O2, 3x/week); Hygrochron iButton temperature loggers (root zone, continuous, first table section); Dualex Scientific leaf-clip (ForceA) (CHL/FLV/NBI/ANTH, live leaf); Reflectoquant Nitrate-Test strip + spectrophotometer (Merck) (leaf NO3); LECO TruSpec CHN Macro Analyser (tissue C/N); HydroBuddy v1.50 nutrient calculator (fertilizer dosing); HACH Lange LCK cuvette tests + DR3800 VIS spectrophotometer (water PO4-P/NH4-N/NO2-N/NO3-N/K/Fe/Ca/Mg/CaCO3); GraphPad Prism v5.00 (statistics) |
| Control Parameters | Fish-tank temperature/DO regulated to 26 degC / 8 mg O2 L-1 (SC1000 controller); AP pH buffered to ~6.5 via KOH; HYD (D) pH buffered to ~6 via 16% HNO3; target water nutrient concentrations used for HydroBuddy dosing calculations: NO3-N 60 mg/L, PO4-P 35 mg/L, K+ 150 mg/L, Fe 3 mg/L, Ca2+ 130 mg/L, Mg2+ 40 mg/L (Methods 4.2) |
| Combination | Nile tilapia (Oreochromis niloticus) and Rungia klossii ('mushroom herb') co-cultured in floating-raft aquaponics; comparison of graduated nutrient-supplementation regimes (A: fish-feed-derived nutrients only; B: +weekly micronutrients/Fe; C: +weekly macronutrients P/K/Mg/S on top of B) against a hydroponic control D receiving a full inorganic nutrient solution (same P/K/Mg/S as C, plus N and Ca). This row = System C vs. D for MushroomHerb. |

**Site**

| Field | Value |
|---|---|
| Region | Europe |
| Country | Switzerland |
| Lat | 47.217262 |
| Long | 8.681461 |
| Average room Temperature | NR (only water/root-zone temperatures reported, see NOT DERIVED) |

**Results & Statistics**

| Field | Value |
|---|---|
| Measured Unit | g/plant (average shoot fresh weight); kg/m2 (shoot yield); kg (system fresh biomass); mg/L (water NH4-N/NO2-N/NO3-N/PO4-P/K/Fe/Ca/Mg); dS/m (EC, converted from uS/cm); degC (water/root-zone temperature); %/day (SGR); ratio (FCR); % (feed protein, converted from g/kg) |
| Statistic Details | One-way ANOVA + Bonferroni multiple-comparison test, GraphPad Prism v5.00 for Windows; significance p<0.05 (Methods 4.8); applied explicitly to physiological/quality indices (Figs 3-6) -- Table 3 yield/biomass has no significance letters or stated test, see NO COLUMN |
| Statistically analysed | Y |
| Replicates (n) | 1 system per treatment (no system-level replication, see DESIGN NOTE); plant sub-samples n=6 (root:shoot ratio Fig 3, CHL/FLV/NBI Fig 4, dry-matter fraction Fig 6 Left) or n=3 (tissue NO3 Fig 5, C/N ratio Fig 6 Right) |
| AP | 0.21 (kg/m2, Table 3 'Production (shoot)') |
| HYD | 0.27 (kg/m2, Table 3 'Production (shoot)', System D) |

**Experimental Remarks:** TRIAL DEFINITION: T9 = System C (aquaponic, micronutrient+Fe+macronutrient supplement) vs. System D (hydroponic control) for Rungia klossii ('mushroom herb'). All four systems (A, B, C, D) were run concurrently as a single system per treatment (no system-level replication, see DESIGN NOTE below); MushroomHerb was one of three plant species (lettuce, mint, mushroom herb) grown simultaneously in every system, so this paper produces 9 trial rows total (3 AP treatments x 3 species), each row pairing that treatment's species-specific AP yield/growth data against the matching D value for the same species. Fish-tank and water-quality data (FCR, SGR, Table 1 ranges) are identical across the three species-rows sharing System C, since all three species grew in the same tank/system. \| WARN-CHECK Total Feed (kg) vs. FCR/duration pairing, Table 2 vs. Table 4, p.4 & p.11. Table 4 ('Total input for the four experimental systems') gives a single 'Fish feed' mass per system -- A 9.20 kg, B 9.74 kg, C 9.50 kg -- explicitly tied to 'the four-week trial' during which the differential nutrient regimes were applied (Methods 4.2: 'Four different nutrient regimes were applied over the four-week trial (see Table 4)'), i.e. the plant/nutrient-supplementation period starting 29 May. Table 2 gives FCR (A 1.25, B 1.49, C 1.16) and total biomass produced (A 11.96, B 10.25, C 12.90 kg) over the full 57-day FISH period (4 May-30 June). Recomputing implied feed consumption from FCR x biomass gain over the 57-day window gives A ~14.95 kg, B ~15.27 kg, C ~14.96 kg (recomputed here only as evidence, not entered in any cell) -- substantially more than Table 4's 9.20/9.74/9.50 kg. The two figures almost certainly refer to different, overlapping but non-identical time windows (57-day fish-growth period vs. ~4-week nutrient-regime period), which the paper does not explicitly reconcile. Recorded Table 4's value in 'Total Feed (kg)' since it is the only explicitly stated total-feed figure in the paper; flagged because it should NOT be read as the feed total corresponding to the 57-day 'Fish trial duration' / FCR pairing recorded elsewhere in this same row. Added to REVIEW.md by the batch merge step. \| WARN-MINOR Fish size initial, Methods 4.1 vs. Table 2, p.10 & p.4. Methods states fish were stocked 'each weighing approximately 220 g'; Table 2 gives actual mean initial weights of 248 g (A), 216 g (B), 226 g (C) -- a rounded approximate statement vs. precise per-tank table values, not a genuine conflict (not a contradiction: nominal/approximate vs. measured, per SCHEMA). Table 2's per-tank values used for Fish size initial. \| DESIGN NOTE: this paper uses one aquaponic system per nutrient regime (A, B, C) and one hydroponic system (D), with NO system-level replication -- each treatment is a single tank/table set, not a replicated experimental unit; ANOVA is run on plant- or fish-level sub-samples (n=6, n=3, or individual fish) within that one system per treatment. Classified `quasi-experiment` per SCHEMA.md's test ('treatments compared but without randomisation or true replication'); see the note's Extraction notes for the full rationale, closely paralleling the same lab's earlier graberAquaponicSystemsNutrient2009 (also quasi-experiment, same design pattern). \| UNIT CONVERSION ONLY (summary): feed crude protein 375 g/kg -> 37.5% (divide by 10, Methods 4.1); fish weights kg -> g (Table 2, x1000); EC uS/cm -> dS/m (Table 1, /1000, all three AP systems + D); Days Plant after transplant computed as calendar-day differences between the stated transplant date (29 May, common to all species, Methods 4.2) and each species' stated harvest date (26/29/30 June respectively, Methods 4.3) -- Lettuce 28 d, Mint 31 d, Mushroom herb 32 d; arithmetic shown per-species in the Details column. No new information beyond what the paper states was introduced by any of these conversions. \| NOT DERIVED, left NR: Initial Stock density (50 fish/tank and approx. per-fish weights given, but fish-tank water volume alone is not stated separately from the ~4200 L total system volume -- system total includes biofilter/sump/tables, so a kg/m3 density would be derivation); Fish survival rate (Table 2 gives raw counts -- A: 50->49, one fish died per Results 2.2; B: 50->50; C: 50->50 -- but the paper never states a survival or mortality PERCENTAGE itself, so left NR rather than computed from the counts, per vault convention); N and P and K feed composition beyond crude protein (Methods 4.1 gives only crude protein/lipid/fibre/ash, g/kg); Water recycle L/min (only a pump duty-cycle is stated -- 'water was pumped every 30 min', Methods 4.1 -- not a flow rate); Water type/Water classification (no categorising term used by the paper itself); Daily Water exchange rate (recirculating system, no %/day figure given); FUE AP/HYD, WUE (not calculated); SPAD (the paper used a Dualex Scientific leaf-clip for CHL/FLV/NBI/ANTH, not a SPAD chlorophyll meter -- different instrument/metric, not a substitutable value); Plant height and Leaf count (not among the measured traits -- only fresh/dry biomass, root:shoot ratio, CHL/FLV/NBI, tissue NO3, and C/N ratio were measured); Climate control (foliar greenhouse; no active heating/cooling/humidity control system described, only fish-tank temperature/O2 regulation via the SC1000 controller); Average room Temperature (only water/root-zone temperatures are reported -- Table 1's 'Average T in root zone' and 'T in fish tank' -- no separate ambient greenhouse air temperature is stated); Biological system already in use (no statement either way); Lat/Long ARE given directly in decimal degrees by the paper (47.217262, 8.681461, Methods 4.1) so no conversion was needed there. \| NO COLUMN (Table 1, water-phase parameters with no dedicated trials.csv field): PO4-P (mg/L) A 3.5, B 1.9, C 28, D 28 (calculated average; cf. Results/Discussion p.8 narrative giving system A's PO4-P as rising from 2.64 to 4.54 mg/L over the trial, average ~3.6, consistent with Table 1's 3.5 -- not a contradiction, a range vs. an average of the same range); K (mg/L) A 48, B 35, C 146, D 123; Fe (mg/L) A 0.1, B 1.8, C 2.1, D 2.3; Ca (mg/L) A 90, B 74, C 74, D 117; Mg (mg/L) A 15, B 11, C 32, D 35. HYD (D)-side water quality, since the schema's water-quality columns (Aq pH, Dissolved Oxigen, EC, Water temperature, TAN/NH4-N, NO2-N, NO3-N) are aquaponic-loop fields with no paired HYD column: pH (D) 5.9-7.4 (range, n=10); DO (D) 5.9-7.6 mg/L (range, n=10); EC (D) 1.234-1.622 dS/m (range, n=10; UNIT CONVERSION ONLY from 1234-1622 uS/cm); Water temperature/root-zone (D) 22.9 degC (single value, n>1000); T in fish tank (D) not applicable, no fish tank in D (Table 1 shows '-'); TAN/NH4-N (D) 0.03-0.06 mg/L (range, n=3); NO2-N (D) printed as '0.25-0.04' in Table 1 -- reversed order (min>max), most likely a typesetting error for a low range similar to the AP systems' 0.01-0.04 mg/L band; transcribed as printed, WARN-MINOR, no cell affected since there is no HYD NO2-N column; NO3-N (D) 63 mg/L (calculated average). Fish-tank compartment temperature (alternate to the root-zone value used for Water temperature, per SCHEMA's plant-bed/hydroponic-unit compartment rule): T in fish tank A 25.8-29.8 degC, B 24.8-28.4 degC, C 25.5-28.8 degC (range, n=10, Table 1); D has no fish tank. pHOptimal target for HYD (D): ~6, via 16% HNO3 addition (Methods 4.2) -- distinct from the AP target of ~6.5 via KOH, which is recorded in the pHOptimal cell for this row's AP system. Relative production % (Table 3, 'fraction of the highest production value for each species', paper's own calculated metric): Lettuce A 65, B 80, C 100, D 92; Mint A 59, B 100, C 94, D 91; Mushroom herb A 100, B 100, C 64, D 79. Total biomass (fresh, system-level kg, Table 3, distinct from the per-plant 'Average shoot weight' used for Plant fresh weight and from the per-area 'Production (shoot) kg/m2' used for AP/HYD): Lettuce A 9.2, B 10.6, C 13.5, D 12.4; Mint A 7.7, B 11.6, C 10.5, D 9.9; Mushroom herb A 1.31, B 1.25, C 0.76, D 0.98 (kg total shoots+roots per system). Shoots-only and roots-only fresh biomass (kg, Table 3) for all species/systems -- no dedicated column beyond the per-plant and per-area figures already captured. Root-to-shoot ratio (Figure 3, n=6): reported only as a bar chart with significance letters ('significantly higher in system A than the other systems' for all three species; 'also significantly higher in system B than in C for the mushroom herbs') -- no absolute values in text or a table, so no numbers were extracted (never read a value off a figure); the qualitative finding is described narratively in the note. Water loss during storage (Section 2.6, lettuce only, 14 days post-harvest, n=6): A 24.6%, B 22.3%, C 21.8%, D 23.6% water loss -- an explicit numeric result in running text, but a postharvest-storage metric with no home in either trials.csv or plant_measurements.csv (not a tissue analyte, not a growth/water-quality field); recorded here for completeness. Total input table (Table 4) reagent/product names and full per-system input masses for all elements/products, beyond what is captured in Nutrient supplemented/Iron supplemented/pH Buffers details above. Statistical scope caveat: the Methods 4.8 one-way ANOVA + Bonferroni description is applied explicitly to the physiological/quality indices in Figures 3-6 (root:shoot ratio, CHL/FLV/NBI, tissue NO3, dry matter fraction, C/N ratio); Table 3's yield/biomass figures are presented descriptively with no significance letters or stated test, so 'Statistically analysed = Y' for this row should be read as applying most directly to the physiological indices, not necessarily to the yield table.

