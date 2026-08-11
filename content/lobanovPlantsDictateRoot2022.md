---
title: "Plants Dictate Root Microbial Composition in Hydroponics and Aquaponics"
citekey: "lobanovPlantsDictateRoot2022"
year: 2022
type: experiment
doi: "10.3389/fmicb.2022.848057"
url: "https://doi.org/10.3389/fmicb.2022.848057"
trials: 3
tags:
  - Meta/Type/Experiment
  - Meta/Region/Europe
  - Meta/Fish/Tilapia
  - Meta/Plant/Lettuce
status: unread
quality: ok
---

# Plants Dictate Root Microbial Composition in Hydroponics and Aquaponics

## Metadata

* **Cite key:** lobanovPlantsDictateRoot2022
* **Item type:** Journal Article
* **Authors:** [[V. Lobanov]], [[K.J. Keesman]], [[A. Joyce]]
* **Affiliation:** Department of Marine Sciences, University of Gothenburg, Gothenburg, Sweden (Lobanov, Joyce); Mathematical and Statistical Methods Group – Biometris, Wageningen University & Research, Wageningen, Netherlands (Keesman)
* **Journal:** Frontiers in Microbiology 13 (2022) Article 848057
* **Date:** 04/2022
* **Date added:** [not reported]
* **DOI:** [10.3389/fmicb.2022.848057](https://doi.org/10.3389/fmicb.2022.848057)
* **Funding:** FORMAS (AJ 2017-00242), the Lamm Foundation and the WUR WIMEK Mobility Program
* **URL:** https://doi.org/10.3389/fmicb.2022.848057
* **PDF:** `Lobanov et al. - 2022 - Plants Dictate Root Microbial Composition in Hydroponics and Aquaponics.pdf`

> [!tip] Opinion
>
> A methodologically careful microbiome-community study (16S rRNA metabarcoding, multiple clustering/ordination methods, bootstrap-supported dendrograms) that deliberately avoids the classic AP-vs-HYD yield comparison to instead isolate the *source-water* question. The multivariate stats (Hellinger transform, Ward clustering with pvclust, PCA, co-occurrence networks) are well justified and cross-validated against each other, which is good practice. The weakness for this vault is that essentially all quantitative results live only in figures (dendrograms, ordination plots, heatmaps) with no accompanying numeric tables, so nothing here is minable for trials.csv/plant.csv beyond design metadata. Worth citing for the "plants dictate their own rhizosphere over water source" claim, but it contributes no water-chemistry or yield numbers to compare against other papers in this review.

## Abstract

The role of the microbial community in mediating fish and plant co-culture is often considered the black box of aquaponics. Despite widespread recognition regarding the dependency of plants on their rhizosphere, the extent to which upstream aquaculture influences downstream hydroponic root communities has been poorly described in the literature. In this study we performed a taxonomic survey (16S rRNA metabarcoding) of microbial communities originating in the facility water source, hydroponic nutrient solution (HNS) sump, nutrient supplemented biofilter effluent (BF) sump, and recirculating aquaculture system tanks stocked with Nile tilapia (Oreochromis niloticus). Lettuce (Lactuca sativa) was then grown using the HNS and BF effluent under sterilized or mature (prior aquaponics/hydroponics lettuce culture water) conditions, likewise, the influence of probiotic addition or inoculation with soil-grown lettuce rhizosphere was assessed. Compositional similarities across treatments suggest that under soil-less conditions, plants are able to exert a stronger discriminatory influence on their rhizosphere composition than is done by colonization from upstream sources. Furthermore, cluster dendrograms grouped the sterilized and unsterilized treatments more consistently together than hydroponics and aquaponics treatments. These findings contradict conventional beliefs that microbial communities in the water column colonize roots based on their presence alone, ignoring the role that plants play in rhizosphere community selection.

## Summary

The authors ran a decoupled aquaponic/hydroponic system at Wageningen UR (Bleiswijk, NL) with Nile tilapia and Batavian lettuce, and used 16S rRNA metabarcoding to ask whether the source of irrigation water (aquaculture-derived biofilter effluent vs. commercial hydroponic nutrient solution) determines the bacterial community that colonizes lettuce roots. Lettuce was grown in self-contained floating hydroponic boxes (3 plants/box, 3 replicate boxes per treatment) under seven water-source/treatment combinations: mature or sterilized biofilter effluent, mature or sterilized commercial nutrient solution, biofilter effluent or nutrient solution amended with a Bacillus amyloliquefaciens probiotic, and sterilized nutrient solution inoculated with soil-grown lettuce rhizosphere. Root DNA was sequenced and analyzed with hierarchical clustering (Ward's method, bootstrap-supported via pvclust), PCA, dissimilarity matrices, and co-occurrence networks across genus/family/order taxonomic ranks. Clustering did not separate aquaponic from hydroponic treatments, or sterilized from unsterilized (mature) treatments, at any taxonomic rank; instead, most experimental treatments diverged together from the environmental controls (facility water, RAS tank water, biofilter sump, HNS sump, soil), while probiotic-amended and soil-inoculated treatments formed their own less-cohesive clusters. The authors conclude that the plant itself, rather than the upstream microbial source (aquaculture vs. hydroponic, sterile vs. mature), is the dominant force shaping rhizosphere community composition under soil-less cultivation, with implications for prioritizing plant health over water sterilization as a disease-management strategy. No plant growth/yield data or water-chemistry trial means are reported; the paper is a community-composition study, not a productivity comparison.

---

> [!info] Experiment data
> - **Location:** Wageningen UR Greenhouse Horticulture Unit, Bleiswijk, Netherlands
> - **Design:** Decoupled (unidirectional-flow) aquaponics/hydroponics system; lettuce grown in self-contained floating hydroponic boxes under 7 treatments (HNS.m, HNS.s, BF.m, BF.s, Probio.s, Probio.m, Soil.inoc) plus environmental controls (WS, RAS, BF, HNS, Soil, HNS.aqueous, BF.aqueous); 3 replicate boxes (3 plants/box) per treatment, technical replicates pooled for DNA extraction
> - **Replicates / n:** 3 boxes per treatment (28 total samples including controls, per Results p.4)
> - **Duration:** 6 weeks (42 days) from seeding to harvest
> - **Organisms:** [[Lactuca sativa]] (Batavian lettuce, cv. Exaudio RZ 79-43) / [[Oreochromis niloticus]] (Nile tilapia, RAS component, no growth data reported)
> - **Statistics:** Hellinger-transformed OTU abundance; Ward's minimum-variance hierarchical clustering with pvclust bootstrap (au/bp) p-values; principal component analysis; dissimilarity matrix; co-occurrence network analysis (R: vegan, ade4, labdsv, pvclust, vegclust, vegsoup, picante, corrplot, gclus, dendextend, ggplot2)
> - **[[Rhizosphere microbial community]]:** no divisive split between aquaponic (BF) and hydroponic (HNS) treatments, nor between sterilized and mature (unsterilized) treatments, at genus/family/order rank — cophenetic correlation 0.93 (p. 5)
> - **[[Principal component analysis]]:** dimension 1 = 23.8%, dimension 2 = 15.5% of variance, separating environmental controls from experimental (HNS.m/HNS.s/BF.m/BF.s) treatments (p. 4)

---

## Design and treatments

**This paper:** Seven plant-growing treatments were tested (Figure 1, p.4; Materials and Methods p.2-3): mature biofilter effluent (BF.m) and sterilized biofilter effluent (BF.s) — both aquaponic, nutrient-supplemented, unidirectional from the RAS/biofilter; mature commercial hydroponic nutrient solution (HNS.m) and sterilized commercial hydroponic nutrient solution (HNS.s) — both purely hydroponic; a Bacillus amyloliquefaciens probiotic added to unsterilized BF (Probio.m, aquaponic) or to sterilized HNS (Probio.s, hydroponic); and sterilized HNS inoculated with soil-grown lettuce rhizosphere (Soil.inoc, hydroponic, no aquaponic counterpart). Environmental/control samples (WS, RAS, BF, HNS, Soil, HNS.aqueous, BF.aqueous) were sequenced but not grown-plant treatments.

**Compared with:**
- #todo [[Wielgosz et al. 2017]] — concluded RAS-effluent benefits to plant growth are conferred via microbial exudates rather than direct colonization, unaffected by sterilization; this paper's clustering results (no mature/sterile split) are cited as supporting that hypothesis (p. 9).
- #todo [[Bartelme et al. 2019]] — facility conditions strongly dictate microbial populations in RAS/aquaponic systems; cited as the basis for interpreting the facility-specific microbiome found here (p. 8).
- #todo [[Schreiter et al. 2014]] — lettuce rhizobiome reported consistent across varying soil types, used as a cross-system parallel (p. 8).
- #todo [[Edmonds et al. 2020]] — aeroponic rhizosphere microbiome distinct from circulating nutrient solution after 12 days; parallel soil-less system finding (p. 8).
- #todo [[Lobanov et al. 2021]] — companion study on trace-nutrient uptake in aquaponics, referenced for the broader argument that plant nutritional needs (not water source) should be prioritized (p. 9).

## Rhizosphere community composition (qualitative findings only)

No numeric relative-abundance, diversity-index, or OTU-count values are stated in running text or tables anywhere in the paper — all compositional results are conveyed exclusively through cluster dendrograms (Figure 2, Supplementary Figs. 1-2), a dissimilarity heatmap (Figure 3), PCA biplots (Figure 4), and co-occurrence network diagrams (Figure 5, Supplementary Figs. 3-4). Per the vault's "never read a value off a figure" rule this means the paper contributes **zero rows to plant.csv** (see Extraction notes).

Qualitative findings (p. 4-9): a core microbiome was noted as present in "9-10 out of 28 treatments" (p.4, this is a count of treatments sharing OTUs, not an abundance value); aquaculture-impacted (BF) and probiotic-supplemented treatments were each more internally similar than to other groups; soil-inoculated treatments did not cluster consistently; probiotic treatments were the least internally consistent group; the facility water supply (WS) was described as relatively enriched in several phyla (Bacillariophyta, Chlamydiae, Aquificae, Candidatus Saccharibacteria) compared to RAS/BF, and RAS/BF were enriched in Fusobacteria, Nitrospirae, and Lentisphaerae (p.9) — again, no percentages or counts given.

## Linked claims

- [[Plants exert stronger control over rhizosphere composition than upstream water source in soil-less systems]]
- [[Sterilization of aquaponic/hydroponic source water does not measurably change root microbial community composition]]
- [[Probiotic addition perturbs root microbial community consistency more than source water or sterilization]]

## Citations to chase

- [ ] #todo Wielgosz et al. (2017) — microbial effects on aquaponically grown lettuce; hypothesis re: exudates vs. colonization that this paper's clustering results support
- [ ] #todo Bartelme et al. (2019) — component microenvironments/system biogeography structuring RAS and aquaponic microbiomes
- [ ] #todo Schreiter et al. (2014) — effect of soil type on lettuce rhizosphere microbiome
- [ ] #todo Edmonds et al. (2020) — aeroponic rhizosphere microbiome community dynamics
- [ ] #todo Lobanov et al. (2021) — companion paper on trace-nutrient uptake and plant health in aquaponics (Front. Plant Sci. 12:683690)

## Extraction notes

**Type classification:** `experiment` — defined treatments (7 plant-growing arms + environmental controls), replication (3 boxes/treatment), and formal multivariate statistical testing (bootstrap-supported clustering, PCA) on data the authors collected themselves (16S sequencing of their own system). Not a review despite extensive literature discussion in Discussion — original empirical data is the core of the paper.

**⚠️WARN-CHECK Water vs. room temperature.** "Temperature was controlled at 16°C" (Materials and Methods, p.3) is stated once, generically, for "both experiments," with no indication of whether this refers to the nutrient-solution/water temperature or the greenhouse air temperature. Nile tilapia (the RAS species used to generate BF effluent) are a warm-water species typically requiring water in the mid-20s°C or higher for viable growth, making 16°C an unlikely value for fish-tank/biofilter water specifically; 16°C is a plausible greenhouse air setpoint for lettuce. The paper draws no distinction and gives only this one figure. **Recorded UNCLEAR** — left `NR` in both `Water temperature` and `Average room Temperature` in trials.csv, with the candidate value (16°C) and this reasoning noted in each row's `Experimental Remarks`. Should be added to REVIEW.md by the batch merge (not edited directly here per task instructions). Severity: CHECK (a defensible reading exists — likely room temperature, given tilapia biology — but the paper does not confirm it, so no cell was populated).

**Not flagged as contradictions (setpoint vs. measured mean, per SCHEMA.md "not a contradiction" rule):** pH ("set to 6-7"), EC ("set to 2-2.5 mS/cm"), and the full macro/micronutrient recipe (mmol/L NO3, NH4, K, Na, Ca, Mg, Si, Cl, SO4, HCO3, P; µmol/L Fe, Mn, Zn, B, Cu, Mo) are all given as target set points "maintained" and "adjusted as needed" (p.2), not as measured trial-mean values with dispersion. Per schema, `Aq pH`, `EC`, `TAN/NH4-N`, and `NO3-N` require a **trial mean**, which is not what's reported here, so these are `NR` in trials.csv; the pH target range (6-7) was recorded in the dedicated `pHOptimal` column since that column is explicitly for target/optimal values. All other setpoints are preserved in full in the `Nutrient supplementedDetails` / `Control Parameters` free-text columns rather than discarded.

**[not reported] fields, grouped:**
- Fish block (all of it): Fish Category, Initial Stock density, FCR, SGR, feed composition (Protein/N/P/K), % of body weight, fish size initial/final, feed routine/regime, Total Feed, Fish biomass created, Fish survival rate, Fish weight gain, Fish trial duration — the paper describes the RAS/tilapia component only as the biofilter-effluent source; no fish husbandry or growth data are given anywhere.
- Water quality trial means: Aq pH, EC, Water temperature, TAN/NH4-N, NO2-N, NO3-N, Dissolved Oxygen (stated only qualitatively as "kept saturated," no ppm value), Water recycle, Water volume, Water type, Water classification, Daily Water exchange rate (only a *weekly* 50% exchange is stated, see NO COLUMN note below), FUE AP/HYD, WUE.
- Plant biometrics: Plant Category, Plants/m², SPAD, Plant height, Leaf count, Plant fresh weight, Plant dry matter, Tissue nitrate AP/HYD, Measured Unit, AP, HYD — plant health is only described qualitatively ("not nutrient limited nor displayed signs of disease," p.3), no biometric table given.
- Lat/Long — Bleiswijk, Netherlands is named as the location but no coordinates are stated in the paper.

**[unclear] fields:** none beyond the WARN-CHECK temperature issue above.

**NO COLUMN items (routed to Experimental Remarks in trials.csv, prefixed `NO COLUMN:`):**
- Weekly (not daily) 50% nutrient-solution volume exchange (p.2) — does not fit `Daily Water exchange rate` without an unstated linearity assumption.
- The non-aquaponic Soil.inoc treatment (sterilized HNS + soil rhizosphere inoculum, no biofilter/aquaculture link) — has no matching aquaponic arm and per SCHEMA.md's "one row per aquaponic treatment" rule is not converted into its own trial row; its existence is documented in remarks instead.
- Absence of any numeric microbiome community values (relative abundance, diversity indices, OTU counts) anywhere outside figures — explains why plant.csv is empty (see below).
- 6-week (42-day) total seed-to-harvest duration — recorded as a unit-conversion note in remarks rather than in `Days Plant after transplant`, since seeds were sown directly into agar plugs (not transplanted as seedlings), so that column is `NA` by design, not `NR`.

**Tag judgment call:** `Meta/Fish/Tilapia` applied even though no fish growth/performance data are reported, because Nile tilapia were an actual live, stocked component of the experimental RAS/biofilter unit whose effluent is one of the two water sources under direct test (not a passing literature mention). `Meta/Plant/Lettuce` applied straightforwardly (Lactuca sativa is the sole test organism grown and sequenced).

**Candidate wikilink forms considered:** "Rhizosphere microbial community" vs. "Rhizobiome" — both used interchangeably by the authors (p.2); used "Rhizosphere microbial community" as the primary linked-claim phrasing and note "rhizobiome" as a likely existing/future alternate title to check against for orphan prevention.

---
*Source: `Lobanov et al. - 2022 - Plants Dictate Root Microbial Composition in Hydroponics and Aquaponics.pdf`*

---

## Data Tables

> [!note] Structured data extracted from this paper into the vault's `trials.csv` / `plant_measurements.csv` datasets. Fields the paper didn't report are omitted. [Download the full datasets](/trials.csv) ([measurements](/plant_measurements.csv)).

### Trial Parameters

#### lobanovPlantsDictateRoot2022-T1

**Fish**

| Field | Value |
|---|---|
| Fish | Nile tilapia (Oreochromis niloticus) |

**Water**

| Field | Value |
|---|---|
| pHOptimal | 6-7 |

**Plant**

| Field | Value |
|---|---|
| Plant | Lettuce (Lactuca sativa), Batavian, cultivar Exaudio RZ 79-43 (Rijk Zwaan, Netherlands) |
| Details | Mature treatments: BF.m = aquaponic biofilter effluent from >=2 full prior crop cycles (unsterilized); paired hydroponic control HNS.m = commercial hydroponic nutrient solution from >=2 full prior crop cycles (unsterilized) (p.3) |

**System & Setup**

| Field | Value |
|---|---|
| System type | Deep-water culture / floating raft, self-contained hydroponic boxes (Styrofoam sheet floating on nutrient solution) (p.2) |
| Media Details | 2% w/v agar-agar in sheared-tip microcentrifuge tubes, seeds immersed in agar, inserted into floating Styrofoam sheet (p.2) |
| Biological system already in use | Y (Nutrient-supplemented biofilter (BF) effluent sump of the decoupled recirculating aquaculture system; 'mature' BF/HNS = derived from prior aquaponics/hydroponics lettuce culture water (p.3)) |
| Iron supplemented | Y (Fe target 20.0 umol/L maintained in nutrient solution recipe alongside Mn 7.0, Zn 5.0, B 20.0, Cu 0.5, Mo 0.1 umol/L (p.2)) |
| Climate control | Y (Wageningen UR Greenhouse Horticulture Unit (Bleiswijk, NL); temperature controlled at 16degC -- location (water vs. room) not specified, see Experimental Remarks (p.3)) |
| Artificial Lighting | Y (Broad spectrum lighting at 200 umol/s/m2 for 16 h/day for all trials; not used in trial 2 due to adequate summer irradiation (p.3)) |
| Nutrient supplemented | Y (Target macronutrients (mmol/L): 15.0 NO3, 1.5 NH4, 5.0 K, 1.5 Na, 3.0 Ca, 1.5 Mg, 0.1 Si, 0.1 Cl, 1.5 SO4, 0.5 HCO3, 0.5-1.0 P; trace elements (umol/L): 20.0 Fe, 7.0 Mn, 5.0 Zn, 20.0 B, 0.5 Cu, 0.1 Mo; pH set to 6-7, EC set to 2.0-2.5 dS/m; kept constant across AP and HYD treatments to avoid confounding nutrient loading with plant health (p.2-3). These are stated targets/set points maintained via weekly supplementation, not reported as measured trial-mean values, hence left NR in the dedicated water-quality columns.) |
| Equipment | DNeasy PowerSoil Kit (Qiagen); 16S rDNA V3-V4 universal bacterial primers (Table 1); MiSeq sequencing via BaseClear B.V.; hydroponic boxes with floating Styrofoam sheets; microcentrifuge tube seed-agar inserts (p.3) |
| Control Parameters | pH 6-7; EC 2.0-2.5 dS/m; temperature controlled at 16degC (water vs room unclear); DO kept saturated (no numeric value given); light 200 umol/s/m2, 16 h/day (trial 2 unsupplemented) (p.2-3) |

**Site**

| Field | Value |
|---|---|
| Region | Europe |
| Country | Netherlands |

**Results & Statistics**

| Field | Value |
|---|---|
| Statistic Details | Hellinger-transformed OTU abundance; Ward's minimum-variance hierarchical clustering with pvclust bootstrap (au/bp) p-values; PCA; correlation plot; co-occurrence network analysis (R packages vegan, ade4, labdsv, pvclust, vegclust, vegsoup, picante, corrplot, gclus, dendextend, ggplot2) (p.3) |
| Statistically analysed | Y |
| Replicates (n) | 3 |

**Experimental Remarks:** TRIAL DEFINITION: Aquaponic treatment BF.m (mature/unsterilized nutrient-supplemented biofilter effluent) vs. paired hydroponic control HNS.m (mature/unsterilized commercial hydroponic nutrient solution); both unsterilized ('mature' = derived from water used in >=2 prior lettuce crop cycles), distinguishing this trial from T2 (sterilized) and T3 (probiotic-amended) (p.3). WARN-CHECK Water/room temperature: 'Temperature was controlled at 16 degC' (p.3) -- paper does not state whether this refers to nutrient-solution/water temperature or greenhouse air temperature. Nile tilapia (studied in the RAS/biofilter unit) are a warm-water species typically requiring >~24 degC for viable growth, making 16 degC an unlikely value for the fish-tank/biofilter water specifically, but the paper draws no distinction and applies one figure to 'both experiments' (HNS and BF). Recorded UNCLEAR; left NR in both Water temperature and Average room Temperature, candidate value 16 degC noted here. Should be added to REVIEW.md at batch merge. NO COLUMN: Study is a 16S rRNA metabarcoding taxonomic/community-composition survey (cluster dendrograms, PCA, dissimilarity matrix, co-occurrence networks); no numeric relative-abundance, diversity-index, or plant-biometric (height/weight/leaf count) values are given anywhere in text or tables -- all such results are presented only as figures, hence plant.csv is empty for this paper. NO COLUMN: 'Nutrient solutions were prepared weekly, at which time half of the volume was exchanged' (p.2) -- this is a weekly, not daily, exchange fraction; recording it under 'Daily Water exchange rate' would require an unstated linearity assumption (derivation), so left NR there. NO COLUMN: Design also included a non-aquaponic treatment, Soil.inoc (sterilized HNS inoculated with soil-grown lettuce rhizosphere, no biofilter/aquaculture component), which has no matching aquaponic arm and is therefore not converted into a trial row per the 'one row per aquaponic treatment' rule (p.3). UNIT CONVERSION ONLY: 'harvested after 6 weeks' (p.3) = 42 days from seeding; recorded here only because Days Plant after transplant is NA (seeds were sown directly into agar plugs, not transplanted as seedlings, p.2).

#### lobanovPlantsDictateRoot2022-T2

**Fish**

| Field | Value |
|---|---|
| Fish | Nile tilapia (Oreochromis niloticus) |

**Water**

| Field | Value |
|---|---|
| pHOptimal | 6-7 |

**Plant**

| Field | Value |
|---|---|
| Plant | Lettuce (Lactuca sativa), Batavian, cultivar Exaudio RZ 79-43 (Rijk Zwaan, Netherlands) |
| Details | Sterilized treatments: BF.s = aquaponic biofilter effluent, freshly made and filter-sterilized (0.22 um) before use; paired hydroponic control HNS.s = commercial hydroponic nutrient solution, freshly made and filter-sterilized (0.22 um) (p.3) |

**System & Setup**

| Field | Value |
|---|---|
| System type | Deep-water culture / floating raft, self-contained hydroponic boxes (Styrofoam sheet floating on nutrient solution) (p.2) |
| Media Details | 2% w/v agar-agar in sheared-tip microcentrifuge tubes, seeds immersed in agar, inserted into floating Styrofoam sheet (p.2) |
| Biological system already in use | Y (Nutrient-supplemented biofilter (BF) effluent sump of the decoupled recirculating aquaculture system; 'mature' BF/HNS = derived from prior aquaponics/hydroponics lettuce culture water (p.3)) |
| Iron supplemented | Y (Fe target 20.0 umol/L maintained in nutrient solution recipe alongside Mn 7.0, Zn 5.0, B 20.0, Cu 0.5, Mo 0.1 umol/L (p.2)) |
| Climate control | Y (Wageningen UR Greenhouse Horticulture Unit (Bleiswijk, NL); temperature controlled at 16degC -- location (water vs. room) not specified, see Experimental Remarks (p.3)) |
| Artificial Lighting | Y (Broad spectrum lighting at 200 umol/s/m2 for 16 h/day for all trials; not used in trial 2 due to adequate summer irradiation (p.3)) |
| Nutrient supplemented | Y (Target macronutrients (mmol/L): 15.0 NO3, 1.5 NH4, 5.0 K, 1.5 Na, 3.0 Ca, 1.5 Mg, 0.1 Si, 0.1 Cl, 1.5 SO4, 0.5 HCO3, 0.5-1.0 P; trace elements (umol/L): 20.0 Fe, 7.0 Mn, 5.0 Zn, 20.0 B, 0.5 Cu, 0.1 Mo; pH set to 6-7, EC set to 2.0-2.5 dS/m; kept constant across AP and HYD treatments to avoid confounding nutrient loading with plant health (p.2-3). These are stated targets/set points maintained via weekly supplementation, not reported as measured trial-mean values, hence left NR in the dedicated water-quality columns.) |
| Equipment | DNeasy PowerSoil Kit (Qiagen); 16S rDNA V3-V4 universal bacterial primers (Table 1); MiSeq sequencing via BaseClear B.V.; hydroponic boxes with floating Styrofoam sheets; microcentrifuge tube seed-agar inserts (p.3) |
| Control Parameters | pH 6-7; EC 2.0-2.5 dS/m; temperature controlled at 16degC (water vs room unclear); DO kept saturated (no numeric value given); light 200 umol/s/m2, 16 h/day (trial 2 unsupplemented) (p.2-3) |

**Site**

| Field | Value |
|---|---|
| Region | Europe |
| Country | Netherlands |

**Results & Statistics**

| Field | Value |
|---|---|
| Statistic Details | Hellinger-transformed OTU abundance; Ward's minimum-variance hierarchical clustering with pvclust bootstrap (au/bp) p-values; PCA; correlation plot; co-occurrence network analysis (R packages vegan, ade4, labdsv, pvclust, vegclust, vegsoup, picante, corrplot, gclus, dendextend, ggplot2) (p.3) |
| Statistically analysed | Y |
| Replicates (n) | 3 |

**Experimental Remarks:** TRIAL DEFINITION: Aquaponic treatment BF.s (sterilized nutrient-supplemented biofilter effluent) vs. paired hydroponic control HNS.s (sterilized commercial hydroponic nutrient solution); distinguishes this trial from T1 (mature/unsterilized) and T3 (probiotic-amended) (p.3). Same WARN-CHECK on 16 degC water-vs-room temperature applies here as in T1 (see -T1 Experimental Remarks for full evidence); recorded UNCLEAR, NR in both Water temperature and Average room Temperature. Same NO COLUMN notes on absence of numeric microbiome/plant-biometric data (plant.csv empty), weekly (not daily) water exchange, and exclusion of the non-aquaponic Soil.inoc arm apply as in -T1. UNIT CONVERSION ONLY: 6 weeks = 42 days from seeding to harvest (direct-seeded, not transplanted, p.2).

#### lobanovPlantsDictateRoot2022-T3

**Fish**

| Field | Value |
|---|---|
| Fish | Nile tilapia (Oreochromis niloticus) |

**Water**

| Field | Value |
|---|---|
| pHOptimal | 6-7 |

**Plant**

| Field | Value |
|---|---|
| Plant | Lettuce (Lactuca sativa), Batavian, cultivar Exaudio RZ 79-43 (Rijk Zwaan, Netherlands) |
| Details | Probiotic treatments: Probio.m = unsterilized (mature) biofilter effluent amended with Bacillus amyloliquefaciens (DSMZ stock, ~5x10^11 CFU/g, applied to a final concentration of 2 mg/L); paired hydroponic control Probio.s = sterilized commercial hydroponic nutrient solution amended with the same probiotic (p.3) |

**System & Setup**

| Field | Value |
|---|---|
| System type | Deep-water culture / floating raft, self-contained hydroponic boxes (Styrofoam sheet floating on nutrient solution) (p.2) |
| Media Details | 2% w/v agar-agar in sheared-tip microcentrifuge tubes, seeds immersed in agar, inserted into floating Styrofoam sheet (p.2) |
| Biological system already in use | Y (Nutrient-supplemented biofilter (BF) effluent sump of the decoupled recirculating aquaculture system; 'mature' BF/HNS = derived from prior aquaponics/hydroponics lettuce culture water (p.3)) |
| Iron supplemented | Y (Fe target 20.0 umol/L maintained in nutrient solution recipe alongside Mn 7.0, Zn 5.0, B 20.0, Cu 0.5, Mo 0.1 umol/L (p.2)) |
| Climate control | Y (Wageningen UR Greenhouse Horticulture Unit (Bleiswijk, NL); temperature controlled at 16degC -- location (water vs. room) not specified, see Experimental Remarks (p.3)) |
| Artificial Lighting | Y (Broad spectrum lighting at 200 umol/s/m2 for 16 h/day for all trials; not used in trial 2 due to adequate summer irradiation (p.3)) |
| Nutrient supplemented | Y (Target macronutrients (mmol/L): 15.0 NO3, 1.5 NH4, 5.0 K, 1.5 Na, 3.0 Ca, 1.5 Mg, 0.1 Si, 0.1 Cl, 1.5 SO4, 0.5 HCO3, 0.5-1.0 P; trace elements (umol/L): 20.0 Fe, 7.0 Mn, 5.0 Zn, 20.0 B, 0.5 Cu, 0.1 Mo; pH set to 6-7, EC set to 2.0-2.5 dS/m; kept constant across AP and HYD treatments to avoid confounding nutrient loading with plant health (p.2-3). These are stated targets/set points maintained via weekly supplementation, not reported as measured trial-mean values, hence left NR in the dedicated water-quality columns.) |
| Equipment | DNeasy PowerSoil Kit (Qiagen); 16S rDNA V3-V4 universal bacterial primers (Table 1); MiSeq sequencing via BaseClear B.V.; hydroponic boxes with floating Styrofoam sheets; microcentrifuge tube seed-agar inserts (p.3) |
| Control Parameters | pH 6-7; EC 2.0-2.5 dS/m; temperature controlled at 16degC (water vs room unclear); DO kept saturated (no numeric value given); light 200 umol/s/m2, 16 h/day (trial 2 unsupplemented) (p.2-3) |

**Site**

| Field | Value |
|---|---|
| Region | Europe |
| Country | Netherlands |

**Results & Statistics**

| Field | Value |
|---|---|
| Statistic Details | Hellinger-transformed OTU abundance; Ward's minimum-variance hierarchical clustering with pvclust bootstrap (au/bp) p-values; PCA; correlation plot; co-occurrence network analysis (R packages vegan, ade4, labdsv, pvclust, vegclust, vegsoup, picante, corrplot, gclus, dendextend, ggplot2) (p.3) |
| Statistically analysed | Y |
| Replicates (n) | 3 |

**Experimental Remarks:** TRIAL DEFINITION: Aquaponic treatment Probio.m (mature/unsterilized biofilter effluent + B. amyloliquefaciens probiotic, 2 mg/L final conc.) vs. paired hydroponic control Probio.s (sterilized HNS + same probiotic); distinguishes this trial from T1 and T2 (no probiotic) (p.3). Note the probiotic is added to the mature (unsterilized) BF but to the sterilized HNS -- an asymmetry in sterilization status between the AP and HYD arms of this pair that is inherent to the paper's design, not a data error; stated here so it is not mistaken for a mismatch. Same WARN-CHECK on 16 degC water-vs-room temperature (see -T1 Experimental Remarks for full evidence), and same NO COLUMN notes (no numeric microbiome/plant-biometric values in text/tables, plant.csv empty; weekly not daily water exchange; Soil.inoc excluded as non-aquaponic) apply as in -T1/-T2. UNIT CONVERSION ONLY: 6 weeks = 42 days from seeding to harvest (direct-seeded, not transplanted, p.2).

