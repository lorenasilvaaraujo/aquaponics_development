---
title: "Comparison of Lactuca sativa growth performance in conventional and RAS-based hydroponic systems"
citekey: "goddekComparisonLactucaSativa2018"
year: 2018
type: quasi-experiment
doi: "10.1007/s10499-018-0293-8"
url: "https://doi.org/10.1007/s10499-018-0293-8"
trials: 1
tags:
  - Type/Quasi-experiment
  - Region/Europe
  - Plant/Lettuce
status: unread
quality: caution
---

# Comparison of Lactuca sativa growth performance in conventional and RAS-based hydroponic systems

## Metadata
* **Cite key:** goddekComparisonLactucaSativa2018
* **Item type:** Journal Article
* **Authors:** [[S. Goddek]], [[T. Vermeulen]]
* **Affiliation:** Biobased Chemistry & Technology, Wageningen University & Research, P.O. Box 17, 6700 AA Wageningen, The Netherlands (Goddek); Greenhouse Horticulture, Wageningen University & Research, P.O. Box 20, 2665 ZG Bleiswijk, The Netherlands (Vermeulen)
* **Journal:** Aquaculture International 26 (2018) 1377-1386
* **Date:** 12/2018
* **Date added:** 2019-06-29
* **DOI:** [10.1007/s10499-018-0293-8](https://doi.org/10.1007/s10499-018-0293-8)
* **Funding:** Aquaponik Manufaktur GmbH and the Dutch ministry of Economic Affairs
* **URL:** https://doi.org/10.1007/s10499-018-0293-8
* **PDF:** `Goddek and Vermeulen - 2018 - Comparison of Lactuca sativa growth performance in.pdf`

> [!tip] Opinion
>
> A small, tightly-focused two-system comparison that reads honestly about its own limitation: the authors state plainly that "hydrologically speaking, this approach... cannot be considered as a repetition" — one HP tank, one RAS-water tank, each servicing many gullies, so the n=20 "replicates" are pseudo-replicated plants within a single system per treatment, not independent system-level replicates. That is exactly why this is scored `quasi-experiment` rather than `experiment`, consistent with how this vault already treats the closely related Delaide et al. (2016) design. The headline fresh/dry-weight result is clean and well cross-checked against the abstract, but the paper's own "dry matter %" claim (7.8% RAS vs 3.1% HP) does not reconcile with its own Table 3 raw wet/dry weight figures — see the BLOCK flag below. Worth citing for the sodium-accumulation story (a genuinely interesting non-finding: sodium did not accumulate as expected) but the dry-matter figure needs independent verification before use.

## Abstract

A recent study related to aquaponics has shown that hydroponic lettuce grown in aquaculture-derived supplemented water grew significantly better than lettuce grown in a conventional hydroponic system. The principal objective of this study was to verify this finding in a larger setup. Even though the aquaculture water that was added to the aquaculture-based hydroponic system contained relatively high amounts of sodium, we were still able to observe an enhanced growth performance of the lettuce in that system compared to the lettuce grown in the conventional hydroponic nutrient solution. The lettuce final fresh weight was 7.9%, and its final dry weight even 33.2% higher than the one of the hydroponic control.

## Summary

The authors compared lettuce (cv. Cosmopolia, butterhead type) grown in two parallel NFT systems in a Bleiswijk (NL) greenhouse over a warm August-October 2016 season: one filled continuously with rain water ("conventional hydroponic," HP) and one filled with 30% water from a separate, pre-existing carp RAS system plus 70% rain water ("RAS-based hydroponic," RAS), both dosed daily with the same commercial nutrient solution and held at the same target EC and pH. This design directly follows up on Delaide et al. (2016), which reported a ~40% aquaponic yield advantage over hydroponics, and aims to test whether that advantage holds at a larger scale. Despite the RAS water carrying significantly more sodium (confirmed by a Kolmogorov-Smirnov test on the Na+ distributions), the RAS-fed lettuce still out-yielded the HP control: 7.9% higher fresh weight (n=20, ANOVA p=0.016) and a reported 33.2% higher dry weight (n=2 pooled samples, ANOVA p=0.280, not significant). Leaf tissue analysis (n=2) showed higher K, Na, Ca, Mg and P uptake but lower Zn and Mo uptake in the RAS-fed plants, and sodium did not accumulate in the RAS system to the degree the authors expected, which they tentatively attribute to increased plant uptake or a possible microbial interaction in the rhizosphere. The authors frame the result as broadly consistent with, though smaller in magnitude than, Delaide et al. (2016), and explicitly note the study's own lack of true system-level replication.

---

> [!info] Experiment data
> - **Location:** Plastic tunnel greenhouse, Bleiswijk, The Netherlands.
> - **Design:** Two parallel NFT systems (16 gullies of 7.7 m each, 2 blocks of 8 rows, cross-over drip irrigation, 250 L recirculation container each): one "conventional hydroponic" (HP, filled with rain water) and one "RAS-based hydroponic" (RAS, filled with 30% carp-RAS water + 70% rain water, +40 L RAS water added to the sump every 2 weeks). Both dosed daily with the same General Hydroponics nutrient solution (FloraMicro:FloraGrow:FloraBloom, 3:2:1) and held at EC ~1800 uS/cm and pH 5.0-6.0. Not independently replicated at the system level — one HP system and one RAS system, each servicing many gullies/plants (the authors' own caveat, see Opinion above).
> - **Replicates / n:** n=20 individually weighed shoots per system (fresh weight, Table 3); n=2 pooled samples per system (dry weight, Table 3, and leaf mineral content, Table 4); n=7 water samples per system (Tables 1-2).
> - **Duration:** 7 weeks (49 days) from transplant (23 Aug 2016) to harvest (11 Oct 2016).
> - **Organisms:** [[Lactuca sativa]] (butterhead lettuce, cv. Cosmopolia, RZ). No fish were grown as part of this study; RAS water was sourced from a separate, pre-existing carp RAS system in Wageningen.
> - **Statistics:** ANOVA in R (R Core Team 2013); two-sample Kolmogorov-Smirnov test on Na+ concentration distributions (D=0.857, p=0.01); principal component analysis of leaf nutrient composition in Genstat.
> - **Fresh weight:** HP 286.83 +/- 47.78 g/plant vs RAS 309.48 +/- 32.96 g/plant, ANOVA p=0.016 (n=20) — RAS 7.9% higher, matches abstract.
> - **Dry weight:** HP 9.08 [7.92, 10.24] g vs RAS 12.09 [10.40, 13.79] g, mean/range, n=2, ANOVA p=0.280 (ns) — RAS 33.2% higher, matches abstract, but see the BLOCK flag on "dry matter %" below.

---

## Sodium behaviour

**This paper:** RAS water itself carried 8.62 +/- 2.37 mmol/L Na+ (Table 1, n=7), versus system-water means of HP 0.49 +/- 0.59 vs RAS 3.07 +/- 3.08 mmol/L Na+ (Table 2, n=7, ANOVA p=0.049 — the only water-panel parameter reaching significance). A two-sample KS test on the underlying Na+ distributions gave D=0.857, p=0.01. Despite repeated RAS-water additions, sodium in the RAS system did not accumulate to the degree the authors expected (Fig. 5); they suggest increased plant uptake as a partial explanation, calculating modelled uptake concentrations (Penman-Monteith evapotranspiration) of 0.04 mmol/L (HP) and 0.21 mmol/L (RAS), both below the 0.5-0.8 mmol/L uptake range reported elsewhere for high-sodium nutrient solutions (Sonneveld and Voogt 2009).

**Compared with:**
- #todo [[Sonneveld and Voogt 2009]] — reports Na+ uptake concentrations of 0.5-0.8 mmol/L under high-sodium nutrient solutions, used as a benchmark for this paper's own calculated uptake figures.
- #todo [[Mayak et al. 2004]] — plant growth-promoting bacteria conferring salt-stress resistance in tomato, cited as a possible (untested) mechanism for the RAS-water lettuce's enhanced growth despite higher sodium.

## Leaf nutrient composition and growth stage

**This paper:** Leaf tissue analysis (ICP-OES, Table 4, n=2 pooled samples per system) showed significantly higher K+, Na+, Ca2+, Mg2+ and Mn2+ in RAS-fed lettuce, significantly lower Zn2+ and Mo6+, and no significant difference in total N, P, Fe2+, B, or Cu2+. A PCA (Fig. 6) grouped the macronutrients (P, Mg, Ca, Na, K) with the RAS-system samples and the micronutrients (Cu, B, Mo, Zn) with the HP-system samples, with Fe and N behaving as comparatively independent variables. Separately, at harvest the RAS-system lettuce had reached the heading growth stage while the HP-system lettuce was still at the earlier cupping stage (Fig. 4) — a qualitative, non-tabulated observation.

**Compared with:**
- #todo [[Delaide et al. 2016]] — already in this vault as [[delaideLettuceLactucaSativa2016]]; this paper explicitly frames its own result as confirming (with smaller magnitude) Delaide et al.'s ~40% aquaponic yield advantage over hydroponics, using near-identical logic (single HP vs single RAS-supplemented hydroponic system, not independently replicated).
- #todo [[Suhl et al. 2016]] — Advanced aquaponics: intensive tomato production in aquaponics vs conventional hydroponics (Agric Water Manag 178:335-344); cited as a contrasting case that found no significant production advantage for aquaponics (tomato).
- #todo [[Kloas et al. 2015]] — new concept for aquaponic systems (Aquac Environ Interact 7:179-192), cited as foundational work motivating decoupled multi-loop system design.
- #todo [[Goddek et al. 2016]] — Navigating towards decoupled aquaponic systems (Water 8:303), cited alongside Kloas et al. 2015 for the decoupled multi-loop rationale.

## Citations to chase
- [ ] #todo Sonneveld C, Voogt W (2009) — Plant nutrition in future greenhouse production (in: Plant Nutrition of Greenhouse Crops), source of the 0.5-0.8 mmol/L Na+ uptake benchmark under high-sodium conditions.
- [ ] #todo Mayak S, Tirosh T, Glick BR (2004) — Plant growth-promoting bacteria confer resistance in tomato plants to salt stress (Plant Physiol Biochem 42:565-572), cited as a possible mechanism for the observed growth enhancement.
- [ ] #todo Suhl J, Dannehl D, Kloas W, Baganz D, Jobs S, Scheibe G, Schmidt U (2016) — Advanced aquaponics: evaluation of intensive tomato production in aquaponics vs conventional hydroponics (Agric Water Manag 178:335-344).
- [ ] #todo Kloas W et al. (2015) — A new concept for aquaponic systems to improve sustainability, increase productivity, and reduce environmental impacts (Aquac Environ Interact 7:179-192).
- [ ] #todo Villarroel M et al. (2016) — Survey of aquaponics in Europe (Water 8:468), cited re: aquaponics currently mainly used for educational purposes.
- [ ] #todo dos Santos MJPL (2016) — Smart cities and urban areas: aquaponics as innovative urban agriculture (Urban For Urban Green 20:402-406), cited re: the commercial breakthrough of aquaponics still being outstanding.
- [ ] #todo Knaus U, Palm HW (2017) — Effects of fish biology on ebb and flow aquaponical cultured herbs in northern Germany (Aquaculture 466:51-63).
- [ ] #todo Schmautz Z et al. (2016) — Tomato productivity and quality in aquaponics: comparison of three hydroponic methods (Water 8:533).
- [ ] #todo Yogev U, Barnes A, Gross A (2016) — Nutrients and energy balance analysis for a conceptual model of a three loops off grid aquaponics (Water 8:589).
- [x] [[Delaide et al. 2016]] — already in the vault as `delaideLettuceLactucaSativa2016.md`, not re-added.

## Extraction notes

**Type classification:** `quasi-experiment`. The paper collects original data (fresh/dry weight, water/leaf chemistry, ANOVA, KS test, PCA) so it is primary research, not a review — but the design compares exactly one HP system against exactly one RAS system, with no randomised or replicated allocation of the treatment across independent systems; the authors themselves state "hydrologically speaking, this approach... cannot be considered as a repetition" (p.2/1378). This matches SCHEMA.md's test for `quasi-experiment` ("treatments compared but without randomisation or true replication") rather than `experiment`, and is consistent with how this vault already classified the near-identical Delaide et al. (2016) design (`delaideLettuceLactucaSativa2016`, also `quasi-experiment`).

**[not reported]:**
- Fish species beyond "carps"; no fish stocking density, feed composition, growth, or survival data (RAS water was sourced from a separate, already-running facility, not part of this study's own design).
- Dissolved oxygen, water temperature (only greenhouse "average day temperature" of 17.7 degC is given, not water temperature specifically).
- NO2-N; tissue nitrate specifically (Table 4 gives total leaf N, not nitrate, and on a dry-matter not fresh-weight basis, so it does not fit the "Tissue nitrate AP/HYD" column, which wants mg NO3-/kg fresh weight).
- Plant height, leaf count, SPAD.
- Coordinates for Bleiswijk (the paper never states them; not filled from outside knowledge per the prime directive).
- A total-system water recirculation flow rate (only a per-nozzle drip rate of 2 L/h is given, which is a different quantity).
- Any pH-adjustment reagent, iron-supplementation practice, or active climate-control system beyond "climate was monitored."

**[unclear]:**
- Whether "sown... and put directly into the system on the 23rd of August" (p.4) means seeds were sown and transplanted the same day, or whether an unstated interval separates sowing from transplanting; taken as the transplant date for "Days Plant after transplant," which cross-checks exactly against "seven weeks after planting" -> 11 Oct harvest (49 days), so the reading used is at least internally consistent.

**Contradictions:**

- **WARN-BLOCK Plant dry matter (%):** Results text (p.6/1382) states "the dry matter (%) of the lettuce grown in the RAS was 2.5 times higher (7.8%) than the lettuce grown in the pure hydroponic environment (3.1%)." Table 3 (p.8/1384) separately reports wet weight (mean +/- SD, n=20: HP 286.83 +/- 47.78 g, RAS 309.48 +/- 32.96 g) and dry weight (mean [range], n=2: HP 9.08 [7.92, 10.24] g, RAS 12.09 [10.40, 13.79] g). Recomputing dry matter % from Table 3's own numbers: HP = 9.08/286.83 = 3.17% (matches the stated 3.1% closely); RAS = 12.09/309.48 = 3.91% (does **not** match the stated 7.8% — off by close to a factor of 2). For the stated 7.8% to be consistent with the RAS wet weight of 309.48 g, RAS dry weight would need to be ~24.1 g, almost exactly double Table 3's stated 12.09 g. Compounding this, the abstract/conclusion's separate "33.2% higher" dry-*weight* claim IS consistent with Table 3's raw grams ((12.09-9.08)/9.08 = 33.2%), but is incompatible with the 7.8%/3.1% dry-matter-*percentage* claim once combined with the stated wet weights (which would imply a ~166% dry-weight increase, not 33.2%, if 7.8%/24.1g were the correct dry-weight figure). The paper gives no basis to prefer one reconciliation over the other (a transcription error in Table 3's RAS dry weight, or an error/different-sample-basis in the 7.8% figure, or the two percentages coming from a different subsample than the fresh/dry-weight bags). Recorded UNCLEAR in `trials.csv` (`Plant dry matter`). Downstream effects: none of the other cells depend on this value (Plant fresh weight / AP / HYD columns use the internally-consistent Table 3 wet weight, unaffected).
- **WARN-MINOR EC unit:** Methods (p.4) states EC was "kept constant on 1800 μS cm⁻²" — cm⁻² is very likely a typographic error for cm⁻¹ (the standard EC unit); read as 1800 μS/cm = 1.8 dS/m for the `EC` cell (UNIT CONVERSION ONLY). Does not affect the value used, only the exponent as printed.
- **WARN-MINOR KS-test caption logic:** Fig. 3's caption states "D = 0.857, and p = 0.01. Thus, it is reasonable to assume that the data comes from different distributions, since p > 0.05" — the stated criterion ("since p > 0.05") is backwards for concluding the distributions differ (the correct KS logic is p < 0.05 -> reject equal distributions, and p=0.01 does satisfy that), so this reads as a typo for "p < 0.05." No `trials.csv`/`plant.csv` cell is affected (no column captures KS-test output); noted for transparency only.
- **WARN-MINOR "2.5 times" rounding:** 7.8/3.1 = 2.516, rounded to "2.5 times" in the text (p.6/1382). No cell impact.

**Severity tally for this paper: 1 BLOCK, 0 MATERIAL, 0 CHECK, 3 MINOR -> `quality: caution`** (1 BLOCK per SCHEMA.md's scoring table).

**Judgment calls (not severity-tagged, but worth recording):**
- Fish block in `trials.csv` set to `NA` across the board (no fish trial in this study; RAS water sourced from a pre-existing carp RAS facility), following the SCHEMA.md instruction to use `NA` for "the entire fish block in a plant-only study," even though the paper does name "carps" as the RAS species.
- `Aq pH`, `EC`, and `Plant fresh weight`/`Plant dry matter` are populated with the RAS-treatment ("AP-type loop") values only, per the convention already used for the sibling Delaide et al. (2016) extraction in this vault; the paired HP values are cross-referenced in `Experimental Remarks`.
- `pHOptimal` left `NR` rather than filled with the operational setpoint (5.0-6.0) — that setpoint is an experimenter-chosen target, not a stated literature optimum for lettuce, so it is recorded instead under `Control Parameters`.
- `Lat`/`Long` left `NR`: the paper names "Bleiswijk, The Netherlands" but never states coordinates; not filled from outside geographic knowledge per the prime directive.
- `Climate control` left `NR` rather than `Y`: the paper states climate (temperature, RH, irradiation) was *monitored*, not that it was actively *controlled* — these are treated as different claims.
- `Water classification` left `NR`: the paper's own "conventional hydroponic" vs "RAS-based hydroponic" terminology is already captured under `System type`/`Water type`; SCHEMA.md itself flags the `Water type` vs `Water classification` distinction as undefined, so this avoids inventing a redundant categorisation.

**NO COLUMN (Experimental Remarks in trials.csv carries the full detail):**
- Table 1 (RAS water composition, mean +/- SD, n=7): pH 7.66 +/- 0.11; EC 1.18 +/- 0.26 mS/cm; K+ 0.20 +/- 0.28, Na+ 8.62 +/- 2.37, Ca2+ 0.72 +/- 0.08, Mg2+ 0.12 +/- 0.04, NO3- 1.58 +/- 0.38, Cl- 7.44 +/- 0.38, SO4(2-) 0.22 +/- 0.08, HCO3- 1.06 +/- 0.38, P 0.04 +/- 0.05 mmol/L; Zn2+ 0.16 +/- 0.05 umol/L.
- Table 2 (system water, mean +/- SD, n=7, ANOVA): full HP-vs-RAS panel for K+, Ca2+, Mg2+, Fe2+, Mn2+, Zn2+, Cu2+, Mo6+, P, B(III), HCO3-, Cl-, SO4(2-) — none of these have dedicated `trials.csv` columns; only pH, NH4+ (TAN/NH4-N, left NR — see below), Na+, and NO3- (NO3-N, left NR — see below) approach existing columns.
- **This water panel is flagged as too valuable to discard** (per SCHEMA.md's explicit instruction) — the Na+ contrast (Table 1/2, Fig. 3, Fig. 5) is the paper's central finding, and the full ion panel would be useful for anyone modelling nutrient balance in decoupled systems, but SCHEMA.md is equally explicit that "water chemistry does not belong [in plant.csv] regardless of how well it fits," so none of it was routed there. It sits only in `trials.csv`'s `Experimental Remarks` (NO COLUMN), which under-serves it — flagging this in the report as requested.
- TAN/NH4-N and NO3-N were available only in mmol/L (Table 2: NH4+ HP 1.56 +/- 0.92 / RAS 0.87 +/- 0.74; NO3- HP 8.07 +/- 3.13 / RAS 6.63 +/- 2.76 mmol/L). Converting to the schema's mg/L (as -N) would require assuming the ion-to-N molar-mass basis; left `NR` in the dedicated columns rather than performing that conversion, with the raw mmol/L values recorded here instead.
- Modelled Na+ uptake concentrations (Penman-Monteith): 0.04 mmol/L (HP), 0.21 mmol/L (RAS) — a modelled/calculated value from the paper itself, not measured; no column fits it.
- Light transmission index of the greenhouse foil: 57.7%. Average outside irradiation: 1584.66 J/cm2/day.

## Water panel excluded from plant.csv
Tables 1 and 2 (RAS water composition and HP-vs-RAS system water composition) are water chemistry, not plant analytes, so per SCHEMA.md they are excluded from `plant.csv` entirely regardless of fit. See "NO COLUMN" above for the full panel, retained only in `trials.csv` remarks.

---
*Source: `Goddek and Vermeulen - 2018 - Comparison of Lactuca sativa growth performance in.pdf`*

---

## Data Tables

> [!note] Structured data extracted from this paper into the vault's `trials.csv` / `plant_measurements.csv` datasets. Fields the paper didn't report are omitted. [Download the full datasets](/trials.csv) ([measurements](/plant_measurements.csv)).

### Trial Parameters

#### goddekComparisonLactucaSativa2018-T1

**Fish**

| Field | Value |
|---|---|
| Fish | Carp (species NR); RAS water sourced from a separate, pre-existing experimental carp RAS system in Wageningen, not co-located or measured in this study (p.4) |

**Water**

| Field | Value |
|---|---|
| Water volume in the system | 250 |
| Water type | RAS-based hydroponic (AP-type) tank: 30% RAS water (from a carp RAS system) + 70% rain water, plus 40 L additional RAS water added to the sump every 2 weeks (p.4); both systems dosed daily with the same General Hydroponics FloraMicro/FloraGrow/FloraBloom (3:2:1) nutrient solution |
| Aq pH | 5.86 +/- 0.91 (RAS system mean, Table 2, n=7; ANOVA vs HP p=0.105) |
| EC | 1.8 (setpoint maintained daily in both systems throughout the trial; UNIT CONVERSION ONLY: paper states '1800 uS cm-2', read as 1800 uS/cm -> 1.8 dS/m; see WARN-MINOR in Extraction notes) |

**Plant**

| Field | Value |
|---|---|
| Plant | Lettuce (Lactuca sativa, butterhead type, cv. Cosmopolia, RZ) |
| Details | Sown in 4x4 peat blocks and transplanted directly into the NFT system on 23 Aug 2016; harvested 7 weeks later (11 Oct 2016); 20 shoots randomly selected, harvested and weighed individually per system for fresh weight (n=20, Table 3); remaining lettuce heads per system cut, weighed, merged into paper bags (40x20x20 cm) and oven-dried (24 h at 103 degC) for dry weight (n=2 per system, Table 3); leaf tissue nutrient analysis by ICP-OES (n=2 pooled samples per system, Table 4) |
| Plant Category | Butterhead lettuce (p.4) |
| Days Plant after transplant | 49 |
| Plants/m2 | 12 |
| Plant fresh weight | 309.48 +/- 32.96 g/plant (RAS system, Table 3, n=20) |

**System & Setup**

| Field | Value |
|---|---|
| System type | Nutrient film technique (NFT), cross-over individual drip irrigation (2 L/h per plant); RAS-based hydroponic system vs conventional hydroponic system (paper's own terms, p.4) |
| Media Details | 4x4 peat blocks (seedling establishment) transplanted directly into NFT gullies; no other growing medium stated (p.4) |
| Biological system already in use | Y (RAS water taken from a pre-existing, already-running carp RAS system in Wageningen, hours before addition to the hydroponic system; not part of this study's own experimental design (p.4)) |
| pH Buffers | Y (pH measured daily and kept constant at pH 5.0-6.0 in both systems; adjustment reagent/method not stated (p.4)) |
| Nutrient supplemented | Y (Hydroponic nutrient solutions (General Hydroponics FloraMicro, FloraGrow, FloraBloom; 3:2:1 mixing ratio) added daily to both the HP and RAS tanks (p.4)) |
| Equipment | NFT gullies (16 x 7.7 m per system, 2 blocks of 8 rows, cross-over layout); individual drip-irrigation nozzles (2 L/h each); 250 L recirculation container per system; Groen Agro Control HPLC water analysis (ISO 17025 norm); ICP-OES leaf nutrient analysis (Groen Agro Control); R (R Core Team 2013) and Genstat software (p.2-4) |
| Control Parameters | EC held constant at ~1800 uS/cm (~1.8 dS/m); pH held at 5.0-6.0; both measured daily; water loss from evapotranspiration/leakage continuously replaced in the basin (p.4) |
| Combination | Butterhead lettuce (cv. Cosmopolia) x 2 hydroponic water sources (conventional rain-water-fed vs 30% carp-RAS-water-supplemented); NFT system; single greenhouse, Bleiswijk NL, Aug-Oct 2016 |

**Site**

| Field | Value |
|---|---|
| Region | Europe |
| Country | Netherlands |
| Average room Temperature | 17.7 (average day temperature, greenhouse, Results p.6) |

**Results & Statistics**

| Field | Value |
|---|---|
| Measured Unit | g/plant (fresh & dry weight, Table 3); mmol/kg dm or umol/kg dm (leaf mineral content, Table 4); mmol/L or umol/L (water ion composition, Tables 1-2) |
| Statistic Details | ANOVA (R, R Core Team 2013); two-sample Kolmogorov-Smirnov test on Na+ concentration distributions (D=0.857, p=0.01, Fig. 3); principal component analysis of leaf nutrient composition (Genstat, Fig. 6) |
| Statistically analysed | Y |
| Replicates (n) | 20 |
| AP | 309.48 |
| HYD | 286.83 |

**Experimental Remarks:** TRIAL DEFINITION: T1 = RAS-based hydroponic treatment (30% carp RAS water + 70% rain water). Paired control = conventional hydroponic (100% rain water) treatment, recorded in the HYD columns. Only one treatment comparison in this paper (single HP system vs single RAS system), so one row. Hydrologically, this is NOT a replicated system-level comparison -- the authors themselves state 'this approach... cannot be considered as a repetition' (p.2); n=20 refers to individually weighed plants within the single system per treatment, not independent system replicates. \| WARN-BLOCK Plant dry matter (%): Results text (p.6) states dry matter of RAS lettuce was '2.5 times higher (7.8%)' than HP '(3.1%)'. Table 3 gives wet weight (HP 286.83+/-47.78 g, RAS 309.48+/-32.96 g, n=20) and dry weight (HP 9.08 [7.92,10.24] g, RAS 12.09 [10.40,13.79] g, n=2). Recomputing: HP dry matter = 9.08/286.83 = 3.17% (matches stated 3.1%); RAS dry matter = 12.09/309.48 = 3.91% (does NOT match stated 7.8%, off by ~2x). For 7.8% to hold given RAS wet weight, RAS dry weight would need to be ~24.1 g, almost exactly double Table 3's 12.09 g. The abstract's separate '33.2% higher' dry-WEIGHT claim IS consistent with Table 3's raw grams ((12.09-9.08)/9.08=33.2%) but is incompatible with the 7.8%/3.1% dry-matter-PERCENTAGE claim once combined with the stated wet weights. No basis in the paper to prefer one reconciliation over the other. Recorded UNCLEAR for Plant dry matter. Downstream: Plant fresh weight/AP/HYD columns use the internally-consistent wet-weight figures and are unaffected. \| WARN-MINOR EC unit: Methods (p.4) states '1800 uS cm-2' -- almost certainly a typo for uS cm-1 (standard EC unit); read as 1800 uS/cm -> 1.8 dS/m (UNIT CONVERSION ONLY). \| WARN-MINOR KS-test caption (Fig. 3, p.7) states 'D=0.857, and p=0.01... since p>0.05' -- the stated criterion is backwards for concluding the distributions differ (correct KS logic: p<0.05 rejects equal distributions, and p=0.01 does satisfy that); reads as a typo for 'p<0.05'. No cell affected, no column captures KS-test output. \| WARN-MINOR: text rounds 7.8/3.1=2.516 to '2.5 times' (p.6); no cell impact. \| UNIT CONVERSION ONLY: 'seven weeks after planting' -> 49 days (Days Plant after transplant); cross-checked against calendar dates 23 Aug - 11 Oct 2016 = 49 days exactly, consistent. \| NOT DERIVED, left NR/NA: fish stocking density/FCR/SGR/feed/survival/weight gain/duration (no fish trial conducted in this study; entire fish block set NA per SCHEMA.md 'plant-only study' convention, even though the source RAS species is named as carp); Dissolved Oxygen and Water temperature (never measured/reported, only greenhouse air 'average day temperature' 17.7 degC given); NO2-N; Tissue nitrate AP/HYD (Table 4 gives total leaf N on a dry-matter basis, not nitrate specifically and not on a fresh-weight basis, so does not fit this column); Plant height; Leaf count; SPAD; Lat/Long (paper names Bleiswijk, NL but never states coordinates; not filled from outside knowledge); Water recycle (only a per-nozzle drip rate of 2 L/h is given, a different quantity from a system recirculation flow rate -- recorded here as context, not in the column); Daily Water exchange rate (only a 40 L/2-week RAS-water top-up for the RAS sump is stated, not a % rate); FUE AP/HYD; WUE; pHOptimal (the 5.0-6.0 figure is an operational setpoint chosen by the experimenters, not a stated literature optimum for lettuce, so recorded under Control Parameters instead and left NR here). \| TAN/NH4-N and NO3-N left NR: Table 2 gives NH4+ (HP 1.56+/-0.92, RAS 0.87+/-0.74 mmol/L) and NO3- (HP 8.07+/-3.13, RAS 6.63+/-2.76 mmol/L) only in mmol/L; converting to the schema's mg/L-as-N would require assuming an ion-to-N molar-mass basis not stated in the paper, so left NR with raw mmol/L values recorded here instead. \| NO COLUMN (full water panel, flagged in the note as too valuable to discard per SCHEMA.md but excluded from plant.csv as water chemistry): Table 1 RAS water composition (mean+/-SD, n=7): pH 7.66+/-0.11; EC 1.18+/-0.26 mS/cm; K+ 0.20+/-0.28, Na+ 8.62+/-2.37, Ca2+ 0.72+/-0.08, Mg2+ 0.12+/-0.04, NO3- 1.58+/-0.38, Cl- 7.44+/-0.38, SO4(2-) 0.22+/-0.08, HCO3- 1.06+/-0.38, P 0.04+/-0.05 mmol/L; Zn2+ 0.16+/-0.05 umol/L. Table 2 system water (mean+/-SD, n=7, ANOVA, HP/RAS/p): K+ 3.39+/-2.10/2.36+/-2.00/p=0.367; Ca2+ 2.16+/-0.46/2.24+/-0.53/p=0.753; Mg2+ 0.15+/-0.39/0.14+/-0.36/p=0.728; Fe2+ 53.74+/-37.81/39.60+/-23.19 umol/L/p=0.415; Mn2+ 17.31+/-9.84/12.99+/-9.57 umol/L/p=0.420; Zn2+ 73.76+/-55.06/29.01+/-22.58 umol/L/p=0.070; Cu2+ 2.63+/-1.03/2.14+/-1.09 umol/L/p=0.409; Mo6+ 0.66+/-0.56/0.47+/-0.53 umol/L/p=0.537; P 0.97+/-0.49/0.94+/-0.47 mmol/L/p=0.913; B(III) 19.00+/-6.00/19.14+/-5.52 umol/L/p=0.964; HCO3- 0.06+/-0.10/0.37+/-0.47 mmol/L/p=0.110; Cl- 0.79+/-0.50/2.84+/-2.67 mmol/L/p=0.068; SO4(2-) 1.17+/-0.35/1.09+/-0.39 mmol/L/p=0.650; Na+ 0.49+/-0.59/3.07+/-3.08 mmol/L/p=0.049 (the only significant water-panel parameter). Modelled Na+ uptake (Penman-Monteith): 0.04 mmol/L (HP), 0.21 mmol/L (RAS), both below the 0.5-0.8 mmol/L benchmark of Sonneveld and Voogt (2009). Light transmission index of greenhouse foil: 57.7%; average outside irradiation 1584.66 J/cm2/day. \| Judgment call: Aq pH, EC, Plant fresh weight and Plant dry matter populated with the RAS-treatment ('AP-type loop') value only, per the convention already used for the sibling delaideLettuceLactucaSativa2016 extraction in this vault; paired HP values are cross-referenced above and in AP vs HYD columns.

### Plant Measurements

| Trial | System | Category | Analyte | Value | Unit | Sig. | Location |
|---|---|---|---|---|---|---|---|
| goddekComparisonLactucaSativa2018-T1 | HYD | mineral | K+ | 1808.00 | mmol/kg dm | p=0.000 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | AP | mineral | K+ | 2327.50 | mmol/kg dm | p=0.000 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | HYD | mineral | Na+ | 25.50 | mmol/kg dm | p=0.008 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | AP | mineral | Na+ | 91.90 | mmol/kg dm | p=0.008 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | HYD | mineral | Ca2+ | 325.00 | mmol/kg dm | p=0.038 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | AP | mineral | Ca2+ | 408.50 | mmol/kg dm | p=0.038 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | HYD | mineral | Mg2+ | 167.00 | mmol/kg dm | p=0.047 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | AP | mineral | Mg2+ | 206.50 ± 7.78 | mmol/kg dm | p=0.047 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | HYD | mineral | N (total) | 3708.00 | mmol/kg dm | ns (p=0.395) | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | AP | mineral | N (total) | 3909.50 | mmol/kg dm | ns (p=0.395) | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | HYD | mineral | P | 311.00 | mmol/kg dm | ns (p=0.075) | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | AP | mineral | P | 369.00 | mmol/kg dm | ns (p=0.075) | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | HYD | mineral | Fe2+ | 3.25 | mmol/kg dm | ns (p=0.403) | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | AP | mineral | Fe2+ | 3.70 | mmol/kg dm | ns (p=0.403) | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | HYD | mineral | Mn2+ | 3.55 | mmol/kg dm | p=0.038 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | AP | mineral | Mn2+ | 4.80 | mmol/kg dm | p=0.038 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | HYD | mineral | Zn2+ | 15.50 | mmol/kg dm | p=0.014 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | AP | mineral | Zn2+ | 7.35 | mmol/kg dm | p=0.014 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | HYD | mineral | B | 3.20 | mmol/kg dm | ns (p=0.095) | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | AP | mineral | B | 3.05 | mmol/kg dm | ns (p=0.095) | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | HYD | mineral | Mo6+ | 25.20 | umol/kg dm | p=0.022 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | AP | mineral | Mo6+ | 18.10 | umol/kg dm | p=0.022 | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | HYD | mineral | Cu2+ | 170.50 | umol/kg dm | ns (p=0.078) | Table 4 |
| goddekComparisonLactucaSativa2018-T1 | AP | mineral | Cu2+ | 148.50 | umol/kg dm | ns (p=0.078) | Table 4 |

