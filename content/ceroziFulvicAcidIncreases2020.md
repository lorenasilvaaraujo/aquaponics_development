---
title: "Fulvic acid increases iron bioavailability in aquaponic systems: Theoretical designs and practical considerations to prevent iron deficiency in plants"
citekey: "ceroziFulvicAcidIncreases2020"
year: 2020
type: experiment
doi: "10.1016/j.aquaeng.2020.102091"
url: "https://doi.org/10.1016/j.aquaeng.2020.102091"
trials: 5
tags:
  - Meta/Type/Experiment
  - Meta/Region/North-America
  - Meta/Fish/Tilapia
  - Meta/Plant/Basil
status: unread
quality: ok
---

# Fulvic acid increases iron bioavailability in aquaponic systems: Theoretical designs and practical considerations to prevent iron deficiency in plants

## Metadata

* **Cite key:** ceroziFulvicAcidIncreases2020
* **Item type:** Journal Article
* **Authors:** [[B. Cerozi]]
* **Affiliation:** University of the District of Columbia, College of Agriculture, Urban Sustainability and Environmental Sciences, Washington, DC, USA (present address given as Universidade de São Paulo, "Luiz de Queiroz", Departamento de Zootecnia, Piracicaba, SP, Brazil)
* **Journal:** Aquacultural Engineering 90 (2020) 102091
* **Date:** 08/2020
* **Date added:** 2021-02-04
* **DOI:** [10.1016/j.aquaeng.2020.102091](https://doi.org/10.1016/j.aquaeng.2020.102091)
* **Funding:** "This research did not receive any specific grant from funding agencies in the public, commercial, or not-for-profit sectors." (p.5)
* **URL:** https://doi.org/10.1016/j.aquaeng.2020.102091
* **PDF:** `Cerozi - 2020 - Fulvic acid increases iron bioavailability in aqua.pdf`

> [!tip] Opinion
>
> A tightly scoped, single-author mechanistic study. The ex-situ assay (fulvic acid dose vs. dissolved iron, ANOVA + Tukey, p<0.001) is sound and clearly reported. The Visual MINTEQ modelling section is a reasonable complement but is explicitly acknowledged to disagree with the empirical assay on the dose needed to maximize solubilization (80 mg/L in the model vs. 690 mg/L in the bench assay), which the author attributes to fulvic acid type (phenolic vs. carboxylic) — an honest, useful caveat. No fish or plant growth/tissue data were collected; this is a water-chemistry paper that uses an operating aquaponic system only as a realistic solution source. Worth citing for anyone designing iron dosing/chelation strategies, not for growth-performance comparisons.

## Abstract

Plants grown in aquaponics frequently develop iron deficiency, which is generally corrected via supplementation with iron chelates. However, the solid waste excreted by fish contains considerable amounts iron, which are lost in the system by precipitation of insoluble iron oxides. Thus, the present study proposed the use of fulvic acid (FA), a humic substance with metal complexing capacity, to prevent iron precipitation and enhance its bioavailability in the aquaculture wastewater. An aquaponic solution was added with levels of fulvic acid (0, 69, 138, 345, and 690 mg L−1), and analyzed for dissolved iron after incubation and centrifugation. Visual MINTEQ was used to characterize and quantify the effect of fulvic acid levels on iron precipitation, species of possible solid forms, and concentration of dissolved bioavailable iron forms. Dissolved iron concentration increased with the inclusion of fulvic acid in the nutrient solution, and the highest iron concentration (22.4 μM) was obtained by treating the solution with 690 mg L−1 of fulvic acid. Visual MINTEQ simulations demonstrated that, in the absence of fulvic acid, iron precipitated in the form of αFe2O3, and the concentration of available iron increased with the inclusion of FA due to its complexing properties. Solution pH had no effect on iron availability with the absence of fulvic acid; in its presence, the effect of pH was only significant at values below 4.5. This study shows that fulvic acid seems to play an important role in transporting low-soluble iron from fish tanks to plant roots in aquaponic systems.

## Summary

Cerozi used an operating recirculating aquaponic system (blue tilapia at 50 kg/m³, Genovese basil at 40 plants/m²) purely as a source of realistic aquaponic solution, which was withheld of iron for two weeks before sampling. In an ex-situ bench assay, 200 mL aliquots of this solution were dosed with five levels of a commercial fulvic acid product (final concentrations ~0, 69, 138, 345, 690 mg/L, labelled T0–T4), spiked with a fixed iron-containing mineral mix to raise Fe to ~35.6 μM, incubated, and centrifuged; dissolved iron was measured spectrophotometrically. Dissolved iron rose significantly with fulvic acid dose (one-way ANOVA, p<0.001; all five levels statistically distinct by Tukey's HSD), topping out at 22.4 μM (about 59% of the iron added) at the highest fulvic acid dose. In parallel, the author ran Visual MINTEQ geochemical simulations using the same solution's other measured elements, which corroborated that fulvic acid increases soluble iron species and suppresses hematite (αFe2O3) precipitation, and that solution pH has little effect on iron availability except below about pH 4.5–5.5. No fish or plant growth, survival, or tissue data were collected or reported; the paper's practical contribution is two proposed system designs (an in-line fulvic acid injector, and an aerobic digestion basin as an in-situ fulvic acid generator) for delivering fulvic acid to fish tanks in real aquaponic operations.

---

> [!info] Experiment data
> - **Location:** University of the District of Columbia, Washington, DC, USA (p.2)
> - **Design:** Single-factor, 5-level ex-situ dosing assay (fulvic acid 0/69/138/345/690 mg/L, labelled T0–T4) on aliquots of one sampled aquaponic solution, all spiked with a fixed iron mineral mix; one-way ANOVA + Tukey HSD. Complemented (not part of trials.csv) by Visual MINTEQ geochemical modelling of the same system using 11 fulvic acid levels (0–100 mg/L).
> - **Replicates / n:** [not reported] — number of independent flasks per fulvic acid level is not stated (only "two 14-mL aliquots" per flask for centrifugation subsampling, p.2)
> - **Duration:** Aquaponic system withheld of iron for 2 weeks pre-sampling; assay itself = 1 h FA incubation + 24 h incubation with iron mineral mix at 25 °C (p.2)
> - **Organisms:** [[Blue tilapia (Oreochromis aureus)]] / [[Genovese basil]] — background system only, not measured for growth in this study
> - **Statistics:** One-way [[ANOVA]], Tukey's HSD, α = 0.05, RStudio ver. 3.5.1 (p.3)
> - **[[Dissolved iron]]:** 22.4 μM at 690 mg/L fulvic acid (highest; p.3) — other four levels shown only as bars in Fig. 2, no in-text/table numbers
> - **[[Iron speciation]] (Visual MINTEQ):** hematite (αFe2O3) predominant below 80 mg/L FA in the model; model's optimum FA dose for solubilization (80 mg/L) did not match the assay's (690 mg/L) (p.4)

---

## Aquaponic system background (not a treatment)

**This paper:** Six 189 L fish tanks stocked with blue tilapia at 50 kg/m³ (≈56.7 kg total biomass), fed a 45% crude protein commercial diet (Purina Aquamax Grower 400) 3×/day at 1% of biomass/day; Filtreco moving bed filter for mechanical + biological filtration; six 1.67 m² grow beds fed at 150 L/h (≈20 min residence time) planted with Genovese basil at 40 plants/m²; pH maintained ~6.8 with KOH and dolomitic lime 3×/week (p.2). This system was used only to generate a realistic solution sample (Table 2) for the ex-situ fulvic acid assay — no fish or plant performance data were collected from it.

**Aquaponic solution profile (Table 2, p.3):** NO3 1448.3 μM, NO2 5.9 μM, NH3 33.3 μM, PO4 89.5 μM, K 426.3 μM, Ca 1587.1 μM, Mg 632.6 μM, Fe 0.35 μM (baseline, pre-spike), Cu 0.07 μM, Mn <0.01 μM (below detection), Zn 0.09 μM, Mo <0.01 μM (below detection), pH 6.55, EC 0.67 mS/cm, TDS 334 ppm.

## Fulvic acid dose-response (dissolved iron)

**This paper:** Dissolved Fe increased monotonically and significantly with FA dose (p<0.001, Fig. 2): T0 (0 mg/L) = bar "a" (lowest, no number given) … T4 (690 mg/L) = 22.4 μM (bar "e", highest), ≈59% of the 35.6 μM iron added. All five levels differ from each other (distinct Tukey letters a–e).

**Compared with:**
- #todo [[Adani et al. 1998]] — humic substances improved tomato growth/Fe status in hydroponics *(p.2)*
- #todo [[Pullin and Cabaniss 2003]] — FA increases Fe(III) solubility by complexation *(p.2)*
- #todo [[Goddek et al. 2018]] — >99% of iron in a sequential mineralization reactor stayed in the solid waste fraction, only a small fraction dissolved *(p.2)* — *[secondary figure, cited for context, not this paper's own measurement]*
- #todo [[Roosta and Mohsenian 2012]] — hypothesized low Fe availability in aquaponics is due to alkaline nutrient solution pH; this paper's Visual MINTEQ results contradict that hypothesis at the pH range tested *(p.4)*

## Theoretical iron mass balance (Table 1, Theory and Calculations)

**This paper:** Using literature parameters for a *generic tilapia–lettuce* system (not this paper's own tilapia/basil system), the author calculates a hypothetical 28-day-cycle iron influx of 25.2 mg/m² from feed vs. 22.2 mg/m² removed in lettuce dry biomass, i.e. a theoretical surplus of 3.0 mg/m² (p.1–2). All four input/output parameters (feeding rate, iron content of tilapia feed, excretion rate, lettuce iron content, lettuce dry mass yield) are secondary values from other papers (Rakocy 2012; Pantanella et al. 2012; El-Sayed 2006; Timmons et al. 2018), not measured here, and lettuce is a different species from the basil actually grown in this paper's real system. **Not extracted to plant.csv or trials.csv** — these are secondary literature figures assembled into an illustrative calculation, not this paper's own data. Marked `*[secondary, cites Pantanella et al. 2012 / Rakocy 2012 / El-Sayed 2006 / Timmons et al. 2018]*` per the secondary-figures rule.

## Linked claims

- [[Fulvic acid increases dissolved iron availability in aquaponic solution]]
- [[Fish solid waste contains iron that can be recovered via complexation before precipitation]]
- [[Solution pH has little effect on iron availability in aquaponics except at low pH]]

## Citations to chase

- [ ] #todo Adani et al. (1998) — humic substances and tomato Fe nutrition in hydroponics
- [ ] #todo Pullin and Cabaniss (2003) — kinetics of Fe–fulvic acid complexation
- [ ] #todo Goddek et al. (2018) — iron partitioning (solid vs. dissolved) in sequential mineralization reactors for aquaponics
- [ ] #todo Roosta and Mohsenian (2012) — foliar Fe sources on pepper in aquaponics; alkaline-pH hypothesis for low Fe availability
- [ ] #todo Rakocy (2012) — aquaponics fish/plant integration reference values (feeding rate, target Fe concentration)
- [ ] #todo Pantanella et al. (2012) — aquaponics vs. hydroponics lettuce production and quality (source of lettuce Fe content and dry mass yield used in Table 1)

## Extraction notes

**Type judgment:** This is a mixed paper — Section 2.3 is a genuine replicated, randomized, statistically tested bench experiment (dominant type, drives the abstract's main finding and the trials.csv rows), plus a secondary Visual MINTEQ geochemical modelling analysis (Section 2.4/4.3) and a purely illustrative literature-based mass-balance calculation (Table 1). Classified `experiment` per the dominant-type rule; modelling and secondary literature components noted here rather than driving classification.

**⚠️MINOR — Iron target mismatch between assay and model.** Section 2.3 (p.2): "raise Fe concentration to 35.6 μM in the aquaponic solution." Section 2.4 (p.2): "Iron concentration of 36.5 μM was used in the model." Both are said to reflect the same Rakocy (2012) recommendation. The two figures are close but not identical (0.9 μM apart). Not reconcilable from the text, but no trials.csv cell tracks the modelling target, so no cell is affected. Noted only.

**⚠️MATERIAL — Fulvic acid mass vs. concentration arithmetic (affects Iron supplementedDetails for T4/T5 rows only).** Methods p.2: "Fulvic acid... was dissolved at concentrations of 0, 20, 40, 125 and 250 mg in 200-mL aliquots... calculated concentrations of fulvic acid in the tested solutions were approximately 0(T0), 69(T1), 138(T2), 345(T3), and 690(T4) mg L−1" (69% product purity stated). Recomputing for verification only: 20 mg × 0.69 ÷ 0.2 L = 69 mg/L ✓; 40 mg × 0.69 ÷ 0.2 L = 138 mg/L ✓; but 125 mg × 0.69 ÷ 0.2 L = 431.25 mg/L ≠ 345 mg/L, and 250 mg × 0.69 ÷ 0.2 L = 862.5 mg/L ≠ 690 mg/L. Masses of 100 mg and 200 mg (not 125/250) would exactly reproduce 345 and 690 mg/L. The final concentrations (0/69/138/345/690 mg/L) are what is used consistently throughout Results, Fig. 2's x-axis, and the Abstract ("690 mg L−1"), so those are recorded as the trial-defining dose. The intermediate mass figures for the two highest levels (125, 250 mg) appear to be a typo for 100/200 mg and are not recorded as the "mass added" in Iron supplementedDetails for those rows — flagged there instead.

**⚠️CHECK — Water panel species basis (NO3/NO2/NH3) unstated (affects NO3-N, NO2-N, TAN/NH4-N in all 5 rows).** Table 2 (p.3) reports "NO3 1448.3 μM," "NO2 5.9 μM," "NH3 33.3 μM" without stating whether these are on an ion/molecule basis or a nitrogen basis. The cited Hach methods (8039 for NO3, 8507 for NO2, 8155 for NH3) are conventionally nitrogen-basis methods (mg/L as N), so the trials.csv columns (which are explicitly named "NO3-N," "NO2-N," "TAN/NH4-N") were populated using the nitrogen-basis conversion (μM × 14.007 g/mol ÷ 1000), prefixed `~` as a calculated/converted value: NO3-N ≈ 20.3 mg/L, NO2-N ≈ 0.083 mg/L, TAN/NH4-N ≈ 0.466 mg/L. The alternative (ion/molecule-basis) readings are NO3− ≈ 89.8 mg/L, NO2− ≈ 0.271 mg/L, NH3 ≈ 0.566 mg/L. This is not resolvable from the paper text alone; both bases are recorded here for the record, nitrogen-basis was used in the cells as the clearer/more conventional basis for the cited analytical methods.

**[not reported]:** Fish size initial/final, fish weight gain, fish survival rate, fish trial duration, FCR, SGR, total feed (kg), fish biomass created, water volume in the system (tank volume per tank stated as 189 L × 6 tanks and bed area 1.67 m² × 6 beds are both given, but no total system volume or bed depth is stated — NOT DERIVED, left NR), water type, water classification, daily water exchange rate, dissolved oxygen (monitored but no value given), water temperature (not stated; 25 °C is the assay incubation temperature, recorded separately as Average room Temperature), replicates (n) for the FA assay, plant category, days after transplant, SPAD, plant height, leaf count, plant fresh weight, plant dry matter, system type (raft/media/NFT not specified for the grow beds), media details, tissue nitrate (not measured), plant yield (AP)/(HYD) (not measured), lat/long (no coordinates given in text).

**[unclear]:** none beyond the CHECK/MATERIAL items above.

**NOT DERIVED, left NR:** total system water volume (tank count × per-tank volume, and bed count × bed area, both given but no combined total or depth stated); fish size (total biomass 56.7 kg given, fish count not given, so per-fish size not derivable even as NR-avoidance).

**NO COLUMN (routed to Experimental Remarks, not trials.csv/plant.csv):** K 426.3 μM, Ca 1587.1 μM, Mg 632.6 μM, Cu 0.07 μM, Mn <0.01 μM (below detection), Zn 0.09 μM, Mo <0.01 μM (below detection), PO4 89.5 μM, TDS 334 ppm — full water panel (Table 2, p.3), excluded from plant.csv per schema (water chemistry never goes there) and has no dedicated trials.csv column beyond NO3-N/NO2-N/TAN/pH/EC. Baseline pre-spike dissolved Fe = 0.35 μM (Table 2) also has no water-Fe column. Per-treatment dissolved Fe outcomes (the paper's core result, Fig. 2) likewise have no dedicated column and are recorded in each trial row's Experimental Remarks instead. **Flagging per SCHEMA.md instruction: this water panel (and the paper's core dissolved-Fe outcome variable) is too valuable to fully discard into a remarks cell — there is no "dissolved iron in water" column in the current 87-column schema, and this entire paper's finding lives in that gap.**

**Judgment calls on tags:** `Meta/Fish/Tilapia` and `Meta/Plant/Basil` applied because the real system sampled for this study was specifically stocked with blue tilapia and Genovese basil (not a passing mention — the solution used throughout the assay came from this exact system), even though neither organism's growth/performance was measured. Flagged here as a judgment call per CLAUDE.md's instruction to note ambiguous organism tagging.

**Region:** North America / USA taken directly from the stated author affiliation address (Washington, DC, USA); no lat/long given in the paper, so those columns are NR rather than inferred.

---
*Source: `Cerozi - 2020 - Fulvic acid increases iron bioavailability in aqua.pdf`*

---

## Data Tables

> [!note] Structured data extracted from this paper into the vault's `trials.csv` / `plant_measurements.csv` datasets. Fields the paper didn't report are omitted. [Download the full datasets](/trials.csv) ([measurements](/plant_measurements.csv)).

### Trial Parameters

#### ceroziFulvicAcidIncreases2020-T1

**Fish**

| Field | Value |
|---|---|
| Fish | Blue tilapia (Oreochromis aureus) |
| Initial Stock density | 50 |
| Protein | 45 |
| % of body weight | 1 |
| Feed routine | Automatic feeders, three times per day (08:00, 12:00, 16:00) |
| Feed regime | 45% crude protein commercial diet (Purina Aquamax Grower 400) at 1% of total fish biomass per day |

**Water**

| Field | Value |
|---|---|
| Water recycle | 2.5 |
| Aq pH | 6.55 |
| pHOptimal | 5.7-6.8 |
| EC | 0.67 |
| TAN / NH4-N | ~0.466 |
| NO2-N | ~0.083 |
| NO3-N | ~20.3 |

**Plant**

| Field | Value |
|---|---|
| Plant | Genovese basil (Johnny's Seeds) |
| Details | Grow beds fed constantly with aquaponic solution at 150 L/h; residence time ~20 min (p.2). Not measured for growth/yield in this study. |
| Plants/m2 | 40 |

**System & Setup**

| Field | Value |
|---|---|
| Biological system already in use | Y (Filtreco moving bed filter (Filtreco Company, Netherlands) used for both mechanical and biological filtration in the background recirculating system (p.2)) |
| Iron supplemented | Y (Background system withheld of all iron supplementation for 2 weeks pre-sampling (p.2). In the ex-situ assay, this treatment (paper's T0) received fulvic acid (Soluble Fulvic Acid, Ferti-Organic) at a final calculated concentration of 0 mg/L (0 mg fulvic acid product added (control, no FA)), followed by 25.0 mg of a commercial mineral mix (Florida Aqua Farms Inc., 16 mg/kg Fe) added per 200-mL aliquot to raise Fe to ~35.6 uM (p.2).) |
| pH Buffers | Y (Potassium hydroxide and dolomitic lime added 3x/week to maintain background aquaponic system pH at ~6.8, per Cerozi and Fitzsimmons (2016) protocol (p.2)) |
| Equipment | HANNA multiparameter meter HI98194 (pH/EC/TDS/DO); Filtreco moving bed filter; automatic fish feeders; HACH DR3900 spectrophotometer (Hach methods 8155/8507/8039/8048 for NH3/NO2/NO3/PO4, method 8008 Ferrover for dissolved Fe); ICP-MS (K,Ca,Mg,Fe,Cu,Zn,Mn,Mo); refrigerated centrifuge (3000xg); Visual MINTEQ ver. 3.1 (modelling only, not reflected in this row); RStudio 3.5.1 |
| Control Parameters | Background system pH maintained ~6.8; system withheld of all iron supplementation for 2 weeks pre-sampling; assay incubation 25 degC (1 h with fulvic acid, then 24 h after iron mineral mix addition); centrifugation 3000xg for 10 min |
| Combination | Blue tilapia (background stock) + Genovese basil (background crop); ex-situ aquaponic-solution fulvic acid dosing assay - no live fish or plant growth measured in this experiment |

**Site**

| Field | Value |
|---|---|
| Region | North America |
| Country | USA |
| Average room Temperature | 25 |

**Results & Statistics**

| Field | Value |
|---|---|
| Statistic Details | One-way ANOVA; Tukey's HSD post-hoc comparisons, alpha = 0.05; RStudio ver. 3.5.1 (p.3) |
| Statistically analysed | Y |

**Experimental Remarks:** TRIAL DEFINITION: Row corresponds to the paper's fulvic acid dosing level T0 (0 mg/L final FA concentration), one of 5 labelled treatments (T0-T4 in paper, mapped here to -T1 through -T5 in ascending FA dose order). All 5 treatments share one source aquaponic solution (Table 2) and the same background aquaponic system (fish/plant details identical across rows, not manipulated as part of this design). No hydroponic-only control arm exists in this paper (HYD columns = NA). Dissolved iron outcome for this treatment: NR - shown only as bar 'a' (lowest) in Fig. 2, no numeric value given in text or table. See -T4/-T5 remarks for a WARN-MATERIAL on the FA mass-vs-concentration arithmetic for the two highest treatment levels (not applicable to this row's dose). WARN-CHECK Water panel species basis unstated: Table 2 (p.3) reports NO3 1448.3 uM, NO2 5.9 uM, NH3 33.3 uM without stating ion/molecule vs. nitrogen basis. Cited Hach methods (8039/8507/8155) are conventionally nitrogen-basis (mg/L as N), so NO3-N/NO2-N/TAN cells were populated via N-basis conversion (uM x 14.007/1000), prefixed '~': NO3-N ~20.3, NO2-N ~0.083, TAN/NH4-N ~0.466 mg/L. Alternative ion-basis readings: NO3- ~89.8, NO2- ~0.271, NH3 ~0.566 mg/L. Not resolvable from the text; both bases recorded here. NO COLUMN: full water panel from Table 2 (p.3) applies identically to all 5 rows - K 426.3 uM, Ca 1587.1 uM, Mg 632.6 uM, Cu 0.07 uM, Mn <0.01 uM (below detection), Zn 0.09 uM, Mo <0.01 uM (below detection), PO4 89.5 uM, TDS 334 ppm, baseline pre-spike Fe 0.35 uM. UNIT CONVERSION ONLY: water recycle 150 L/h -> 2.5 L/min; EC 0.67 mS/cm = 0.67 dS/m (equivalent units). NOT DERIVED, left NR: total system water volume (six 189 L fish tanks and six 1.67 m2 grow beds stated, no total volume or bed depth given); fish size (total biomass 56.7 kg given, fish count not given). Statistical result for the fulvic-acid effect: one-way ANOVA p<0.001 (Fig. 2); all 5 treatment levels differ from each other (distinct Tukey HSD letters a-e, p<0.05).

#### ceroziFulvicAcidIncreases2020-T2

**Fish**

| Field | Value |
|---|---|
| Fish | Blue tilapia (Oreochromis aureus) |
| Initial Stock density | 50 |
| Protein | 45 |
| % of body weight | 1 |
| Feed routine | Automatic feeders, three times per day (08:00, 12:00, 16:00) |
| Feed regime | 45% crude protein commercial diet (Purina Aquamax Grower 400) at 1% of total fish biomass per day |

**Water**

| Field | Value |
|---|---|
| Water recycle | 2.5 |
| Aq pH | 6.55 |
| pHOptimal | 5.7-6.8 |
| EC | 0.67 |
| TAN / NH4-N | ~0.466 |
| NO2-N | ~0.083 |
| NO3-N | ~20.3 |

**Plant**

| Field | Value |
|---|---|
| Plant | Genovese basil (Johnny's Seeds) |
| Details | Grow beds fed constantly with aquaponic solution at 150 L/h; residence time ~20 min (p.2). Not measured for growth/yield in this study. |
| Plants/m2 | 40 |

**System & Setup**

| Field | Value |
|---|---|
| Biological system already in use | Y (Filtreco moving bed filter (Filtreco Company, Netherlands) used for both mechanical and biological filtration in the background recirculating system (p.2)) |
| Iron supplemented | Y (Background system withheld of all iron supplementation for 2 weeks pre-sampling (p.2). In the ex-situ assay, this treatment (paper's T1) received fulvic acid (Soluble Fulvic Acid, Ferti-Organic) at a final calculated concentration of 69 mg/L (20 mg fulvic acid product (69% soluble FA) added to 200 mL aliquot), followed by 25.0 mg of a commercial mineral mix (Florida Aqua Farms Inc., 16 mg/kg Fe) added per 200-mL aliquot to raise Fe to ~35.6 uM (p.2).) |
| pH Buffers | Y (Potassium hydroxide and dolomitic lime added 3x/week to maintain background aquaponic system pH at ~6.8, per Cerozi and Fitzsimmons (2016) protocol (p.2)) |
| Equipment | HANNA multiparameter meter HI98194 (pH/EC/TDS/DO); Filtreco moving bed filter; automatic fish feeders; HACH DR3900 spectrophotometer (Hach methods 8155/8507/8039/8048 for NH3/NO2/NO3/PO4, method 8008 Ferrover for dissolved Fe); ICP-MS (K,Ca,Mg,Fe,Cu,Zn,Mn,Mo); refrigerated centrifuge (3000xg); Visual MINTEQ ver. 3.1 (modelling only, not reflected in this row); RStudio 3.5.1 |
| Control Parameters | Background system pH maintained ~6.8; system withheld of all iron supplementation for 2 weeks pre-sampling; assay incubation 25 degC (1 h with fulvic acid, then 24 h after iron mineral mix addition); centrifugation 3000xg for 10 min |
| Combination | Blue tilapia (background stock) + Genovese basil (background crop); ex-situ aquaponic-solution fulvic acid dosing assay - no live fish or plant growth measured in this experiment |

**Site**

| Field | Value |
|---|---|
| Region | North America |
| Country | USA |
| Average room Temperature | 25 |

**Results & Statistics**

| Field | Value |
|---|---|
| Statistic Details | One-way ANOVA; Tukey's HSD post-hoc comparisons, alpha = 0.05; RStudio ver. 3.5.1 (p.3) |
| Statistically analysed | Y |

**Experimental Remarks:** TRIAL DEFINITION: Row corresponds to the paper's fulvic acid dosing level T1 (69 mg/L final FA concentration), one of 5 labelled treatments (T0-T4 in paper, mapped here to -T1 through -T5 in ascending FA dose order). All 5 treatments share one source aquaponic solution (Table 2) and the same background aquaponic system (fish/plant details identical across rows, not manipulated as part of this design). No hydroponic-only control arm exists in this paper (HYD columns = NA). Dissolved iron outcome for this treatment: NR - shown only as bar 'b' in Fig. 2, no numeric value given in text or table. See -T4/-T5 remarks for a WARN-MATERIAL on the FA mass-vs-concentration arithmetic for the two highest treatment levels (not applicable to this row's dose). WARN-CHECK Water panel species basis unstated: Table 2 (p.3) reports NO3 1448.3 uM, NO2 5.9 uM, NH3 33.3 uM without stating ion/molecule vs. nitrogen basis. Cited Hach methods (8039/8507/8155) are conventionally nitrogen-basis (mg/L as N), so NO3-N/NO2-N/TAN cells were populated via N-basis conversion (uM x 14.007/1000), prefixed '~': NO3-N ~20.3, NO2-N ~0.083, TAN/NH4-N ~0.466 mg/L. Alternative ion-basis readings: NO3- ~89.8, NO2- ~0.271, NH3 ~0.566 mg/L. Not resolvable from the text; both bases recorded here. NO COLUMN: full water panel from Table 2 (p.3) applies identically to all 5 rows - K 426.3 uM, Ca 1587.1 uM, Mg 632.6 uM, Cu 0.07 uM, Mn <0.01 uM (below detection), Zn 0.09 uM, Mo <0.01 uM (below detection), PO4 89.5 uM, TDS 334 ppm, baseline pre-spike Fe 0.35 uM. UNIT CONVERSION ONLY: water recycle 150 L/h -> 2.5 L/min; EC 0.67 mS/cm = 0.67 dS/m (equivalent units). NOT DERIVED, left NR: total system water volume (six 189 L fish tanks and six 1.67 m2 grow beds stated, no total volume or bed depth given); fish size (total biomass 56.7 kg given, fish count not given). Statistical result for the fulvic-acid effect: one-way ANOVA p<0.001 (Fig. 2); all 5 treatment levels differ from each other (distinct Tukey HSD letters a-e, p<0.05).

#### ceroziFulvicAcidIncreases2020-T3

**Fish**

| Field | Value |
|---|---|
| Fish | Blue tilapia (Oreochromis aureus) |
| Initial Stock density | 50 |
| Protein | 45 |
| % of body weight | 1 |
| Feed routine | Automatic feeders, three times per day (08:00, 12:00, 16:00) |
| Feed regime | 45% crude protein commercial diet (Purina Aquamax Grower 400) at 1% of total fish biomass per day |

**Water**

| Field | Value |
|---|---|
| Water recycle | 2.5 |
| Aq pH | 6.55 |
| pHOptimal | 5.7-6.8 |
| EC | 0.67 |
| TAN / NH4-N | ~0.466 |
| NO2-N | ~0.083 |
| NO3-N | ~20.3 |

**Plant**

| Field | Value |
|---|---|
| Plant | Genovese basil (Johnny's Seeds) |
| Details | Grow beds fed constantly with aquaponic solution at 150 L/h; residence time ~20 min (p.2). Not measured for growth/yield in this study. |
| Plants/m2 | 40 |

**System & Setup**

| Field | Value |
|---|---|
| Biological system already in use | Y (Filtreco moving bed filter (Filtreco Company, Netherlands) used for both mechanical and biological filtration in the background recirculating system (p.2)) |
| Iron supplemented | Y (Background system withheld of all iron supplementation for 2 weeks pre-sampling (p.2). In the ex-situ assay, this treatment (paper's T2) received fulvic acid (Soluble Fulvic Acid, Ferti-Organic) at a final calculated concentration of 138 mg/L (40 mg fulvic acid product (69% soluble FA) added to 200 mL aliquot), followed by 25.0 mg of a commercial mineral mix (Florida Aqua Farms Inc., 16 mg/kg Fe) added per 200-mL aliquot to raise Fe to ~35.6 uM (p.2).) |
| pH Buffers | Y (Potassium hydroxide and dolomitic lime added 3x/week to maintain background aquaponic system pH at ~6.8, per Cerozi and Fitzsimmons (2016) protocol (p.2)) |
| Equipment | HANNA multiparameter meter HI98194 (pH/EC/TDS/DO); Filtreco moving bed filter; automatic fish feeders; HACH DR3900 spectrophotometer (Hach methods 8155/8507/8039/8048 for NH3/NO2/NO3/PO4, method 8008 Ferrover for dissolved Fe); ICP-MS (K,Ca,Mg,Fe,Cu,Zn,Mn,Mo); refrigerated centrifuge (3000xg); Visual MINTEQ ver. 3.1 (modelling only, not reflected in this row); RStudio 3.5.1 |
| Control Parameters | Background system pH maintained ~6.8; system withheld of all iron supplementation for 2 weeks pre-sampling; assay incubation 25 degC (1 h with fulvic acid, then 24 h after iron mineral mix addition); centrifugation 3000xg for 10 min |
| Combination | Blue tilapia (background stock) + Genovese basil (background crop); ex-situ aquaponic-solution fulvic acid dosing assay - no live fish or plant growth measured in this experiment |

**Site**

| Field | Value |
|---|---|
| Region | North America |
| Country | USA |
| Average room Temperature | 25 |

**Results & Statistics**

| Field | Value |
|---|---|
| Statistic Details | One-way ANOVA; Tukey's HSD post-hoc comparisons, alpha = 0.05; RStudio ver. 3.5.1 (p.3) |
| Statistically analysed | Y |

**Experimental Remarks:** TRIAL DEFINITION: Row corresponds to the paper's fulvic acid dosing level T2 (138 mg/L final FA concentration), one of 5 labelled treatments (T0-T4 in paper, mapped here to -T1 through -T5 in ascending FA dose order). All 5 treatments share one source aquaponic solution (Table 2) and the same background aquaponic system (fish/plant details identical across rows, not manipulated as part of this design). No hydroponic-only control arm exists in this paper (HYD columns = NA). Dissolved iron outcome for this treatment: NR - shown only as bar 'c' in Fig. 2, no numeric value given in text or table. See -T4/-T5 remarks for a WARN-MATERIAL on the FA mass-vs-concentration arithmetic for the two highest treatment levels (not applicable to this row's dose). WARN-CHECK Water panel species basis unstated: Table 2 (p.3) reports NO3 1448.3 uM, NO2 5.9 uM, NH3 33.3 uM without stating ion/molecule vs. nitrogen basis. Cited Hach methods (8039/8507/8155) are conventionally nitrogen-basis (mg/L as N), so NO3-N/NO2-N/TAN cells were populated via N-basis conversion (uM x 14.007/1000), prefixed '~': NO3-N ~20.3, NO2-N ~0.083, TAN/NH4-N ~0.466 mg/L. Alternative ion-basis readings: NO3- ~89.8, NO2- ~0.271, NH3 ~0.566 mg/L. Not resolvable from the text; both bases recorded here. NO COLUMN: full water panel from Table 2 (p.3) applies identically to all 5 rows - K 426.3 uM, Ca 1587.1 uM, Mg 632.6 uM, Cu 0.07 uM, Mn <0.01 uM (below detection), Zn 0.09 uM, Mo <0.01 uM (below detection), PO4 89.5 uM, TDS 334 ppm, baseline pre-spike Fe 0.35 uM. UNIT CONVERSION ONLY: water recycle 150 L/h -> 2.5 L/min; EC 0.67 mS/cm = 0.67 dS/m (equivalent units). NOT DERIVED, left NR: total system water volume (six 189 L fish tanks and six 1.67 m2 grow beds stated, no total volume or bed depth given); fish size (total biomass 56.7 kg given, fish count not given). Statistical result for the fulvic-acid effect: one-way ANOVA p<0.001 (Fig. 2); all 5 treatment levels differ from each other (distinct Tukey HSD letters a-e, p<0.05).

#### ceroziFulvicAcidIncreases2020-T4

**Fish**

| Field | Value |
|---|---|
| Fish | Blue tilapia (Oreochromis aureus) |
| Initial Stock density | 50 |
| Protein | 45 |
| % of body weight | 1 |
| Feed routine | Automatic feeders, three times per day (08:00, 12:00, 16:00) |
| Feed regime | 45% crude protein commercial diet (Purina Aquamax Grower 400) at 1% of total fish biomass per day |

**Water**

| Field | Value |
|---|---|
| Water recycle | 2.5 |
| Aq pH | 6.55 |
| pHOptimal | 5.7-6.8 |
| EC | 0.67 |
| TAN / NH4-N | ~0.466 |
| NO2-N | ~0.083 |
| NO3-N | ~20.3 |

**Plant**

| Field | Value |
|---|---|
| Plant | Genovese basil (Johnny's Seeds) |
| Details | Grow beds fed constantly with aquaponic solution at 150 L/h; residence time ~20 min (p.2). Not measured for growth/yield in this study. |
| Plants/m2 | 40 |

**System & Setup**

| Field | Value |
|---|---|
| Biological system already in use | Y (Filtreco moving bed filter (Filtreco Company, Netherlands) used for both mechanical and biological filtration in the background recirculating system (p.2)) |
| Iron supplemented | Y (Background system withheld of all iron supplementation for 2 weeks pre-sampling (p.2). In the ex-situ assay, this treatment (paper's T3) received fulvic acid (Soluble Fulvic Acid, Ferti-Organic) at a final calculated concentration of 345 mg/L (Methods state 125 mg fulvic acid product added, but this does not reconcile with 345 mg/L at 69% purity in 200 mL (see WARN-MATERIAL below); likely 100 mg), followed by 25.0 mg of a commercial mineral mix (Florida Aqua Farms Inc., 16 mg/kg Fe) added per 200-mL aliquot to raise Fe to ~35.6 uM (p.2).) |
| pH Buffers | Y (Potassium hydroxide and dolomitic lime added 3x/week to maintain background aquaponic system pH at ~6.8, per Cerozi and Fitzsimmons (2016) protocol (p.2)) |
| Equipment | HANNA multiparameter meter HI98194 (pH/EC/TDS/DO); Filtreco moving bed filter; automatic fish feeders; HACH DR3900 spectrophotometer (Hach methods 8155/8507/8039/8048 for NH3/NO2/NO3/PO4, method 8008 Ferrover for dissolved Fe); ICP-MS (K,Ca,Mg,Fe,Cu,Zn,Mn,Mo); refrigerated centrifuge (3000xg); Visual MINTEQ ver. 3.1 (modelling only, not reflected in this row); RStudio 3.5.1 |
| Control Parameters | Background system pH maintained ~6.8; system withheld of all iron supplementation for 2 weeks pre-sampling; assay incubation 25 degC (1 h with fulvic acid, then 24 h after iron mineral mix addition); centrifugation 3000xg for 10 min |
| Combination | Blue tilapia (background stock) + Genovese basil (background crop); ex-situ aquaponic-solution fulvic acid dosing assay - no live fish or plant growth measured in this experiment |

**Site**

| Field | Value |
|---|---|
| Region | North America |
| Country | USA |
| Average room Temperature | 25 |

**Results & Statistics**

| Field | Value |
|---|---|
| Statistic Details | One-way ANOVA; Tukey's HSD post-hoc comparisons, alpha = 0.05; RStudio ver. 3.5.1 (p.3) |
| Statistically analysed | Y |

**Experimental Remarks:** TRIAL DEFINITION: Row corresponds to the paper's fulvic acid dosing level T3 (345 mg/L final FA concentration), one of 5 labelled treatments (T0-T4 in paper, mapped here to -T1 through -T5 in ascending FA dose order). All 5 treatments share one source aquaponic solution (Table 2) and the same background aquaponic system (fish/plant details identical across rows, not manipulated as part of this design). No hydroponic-only control arm exists in this paper (HYD columns = NA). Dissolved iron outcome for this treatment: NR - shown only as bar 'd' in Fig. 2, no numeric value given in text or table. WARN-MATERIAL Fulvic acid mass vs. final concentration: Methods p.2 states masses of 0/20/40/125/250 mg added to 200-mL aliquots, with stated 69% product purity giving final concentrations 0/69/138/345/690 mg/L. Recomputed for verification: 125 mg x 0.69 / 0.2 L = 431.25 mg/L (not 345); 250 mg x 0.69 / 0.2 L = 862.5 mg/L (not 690). Masses of 100 mg and 200 mg (not 125/250) would exactly reproduce 345 and 690 mg/L. The final concentrations (345, 690 mg/L) are used consistently throughout Results, Fig. 2's x-axis, and the Abstract, so they are recorded as this trial's dose; the intermediate mass figure is not used as the recorded 'mass added' value. WARN-CHECK Water panel species basis unstated: Table 2 (p.3) reports NO3 1448.3 uM, NO2 5.9 uM, NH3 33.3 uM without stating ion/molecule vs. nitrogen basis. Cited Hach methods (8039/8507/8155) are conventionally nitrogen-basis (mg/L as N), so NO3-N/NO2-N/TAN cells were populated via N-basis conversion (uM x 14.007/1000), prefixed '~': NO3-N ~20.3, NO2-N ~0.083, TAN/NH4-N ~0.466 mg/L. Alternative ion-basis readings: NO3- ~89.8, NO2- ~0.271, NH3 ~0.566 mg/L. Not resolvable from the text; both bases recorded here. NO COLUMN: full water panel from Table 2 (p.3) applies identically to all 5 rows - K 426.3 uM, Ca 1587.1 uM, Mg 632.6 uM, Cu 0.07 uM, Mn <0.01 uM (below detection), Zn 0.09 uM, Mo <0.01 uM (below detection), PO4 89.5 uM, TDS 334 ppm, baseline pre-spike Fe 0.35 uM. UNIT CONVERSION ONLY: water recycle 150 L/h -> 2.5 L/min; EC 0.67 mS/cm = 0.67 dS/m (equivalent units). NOT DERIVED, left NR: total system water volume (six 189 L fish tanks and six 1.67 m2 grow beds stated, no total volume or bed depth given); fish size (total biomass 56.7 kg given, fish count not given). Statistical result for the fulvic-acid effect: one-way ANOVA p<0.001 (Fig. 2); all 5 treatment levels differ from each other (distinct Tukey HSD letters a-e, p<0.05).

#### ceroziFulvicAcidIncreases2020-T5

**Fish**

| Field | Value |
|---|---|
| Fish | Blue tilapia (Oreochromis aureus) |
| Initial Stock density | 50 |
| Protein | 45 |
| % of body weight | 1 |
| Feed routine | Automatic feeders, three times per day (08:00, 12:00, 16:00) |
| Feed regime | 45% crude protein commercial diet (Purina Aquamax Grower 400) at 1% of total fish biomass per day |

**Water**

| Field | Value |
|---|---|
| Water recycle | 2.5 |
| Aq pH | 6.55 |
| pHOptimal | 5.7-6.8 |
| EC | 0.67 |
| TAN / NH4-N | ~0.466 |
| NO2-N | ~0.083 |
| NO3-N | ~20.3 |

**Plant**

| Field | Value |
|---|---|
| Plant | Genovese basil (Johnny's Seeds) |
| Details | Grow beds fed constantly with aquaponic solution at 150 L/h; residence time ~20 min (p.2). Not measured for growth/yield in this study. |
| Plants/m2 | 40 |

**System & Setup**

| Field | Value |
|---|---|
| Biological system already in use | Y (Filtreco moving bed filter (Filtreco Company, Netherlands) used for both mechanical and biological filtration in the background recirculating system (p.2)) |
| Iron supplemented | Y (Background system withheld of all iron supplementation for 2 weeks pre-sampling (p.2). In the ex-situ assay, this treatment (paper's T4) received fulvic acid (Soluble Fulvic Acid, Ferti-Organic) at a final calculated concentration of 690 mg/L (Methods state 250 mg fulvic acid product added, but this does not reconcile with 690 mg/L at 69% purity in 200 mL (see WARN-MATERIAL below); likely 200 mg), followed by 25.0 mg of a commercial mineral mix (Florida Aqua Farms Inc., 16 mg/kg Fe) added per 200-mL aliquot to raise Fe to ~35.6 uM (p.2).) |
| pH Buffers | Y (Potassium hydroxide and dolomitic lime added 3x/week to maintain background aquaponic system pH at ~6.8, per Cerozi and Fitzsimmons (2016) protocol (p.2)) |
| Equipment | HANNA multiparameter meter HI98194 (pH/EC/TDS/DO); Filtreco moving bed filter; automatic fish feeders; HACH DR3900 spectrophotometer (Hach methods 8155/8507/8039/8048 for NH3/NO2/NO3/PO4, method 8008 Ferrover for dissolved Fe); ICP-MS (K,Ca,Mg,Fe,Cu,Zn,Mn,Mo); refrigerated centrifuge (3000xg); Visual MINTEQ ver. 3.1 (modelling only, not reflected in this row); RStudio 3.5.1 |
| Control Parameters | Background system pH maintained ~6.8; system withheld of all iron supplementation for 2 weeks pre-sampling; assay incubation 25 degC (1 h with fulvic acid, then 24 h after iron mineral mix addition); centrifugation 3000xg for 10 min |
| Combination | Blue tilapia (background stock) + Genovese basil (background crop); ex-situ aquaponic-solution fulvic acid dosing assay - no live fish or plant growth measured in this experiment |

**Site**

| Field | Value |
|---|---|
| Region | North America |
| Country | USA |
| Average room Temperature | 25 |

**Results & Statistics**

| Field | Value |
|---|---|
| Statistic Details | One-way ANOVA; Tukey's HSD post-hoc comparisons, alpha = 0.05; RStudio ver. 3.5.1 (p.3) |
| Statistically analysed | Y |

**Experimental Remarks:** TRIAL DEFINITION: Row corresponds to the paper's fulvic acid dosing level T4 (690 mg/L final FA concentration), one of 5 labelled treatments (T0-T4 in paper, mapped here to -T1 through -T5 in ascending FA dose order). All 5 treatments share one source aquaponic solution (Table 2) and the same background aquaponic system (fish/plant details identical across rows, not manipulated as part of this design). No hydroponic-only control arm exists in this paper (HYD columns = NA). Dissolved iron outcome for this treatment: 22.4 uM - highest concentration obtained, approximately 59% of the 35.6 uM iron added was solubilized (p.3, Results 4.2 and 4.3.1). WARN-MATERIAL Fulvic acid mass vs. final concentration: Methods p.2 states masses of 0/20/40/125/250 mg added to 200-mL aliquots, with stated 69% product purity giving final concentrations 0/69/138/345/690 mg/L. Recomputed for verification: 125 mg x 0.69 / 0.2 L = 431.25 mg/L (not 345); 250 mg x 0.69 / 0.2 L = 862.5 mg/L (not 690). Masses of 100 mg and 200 mg (not 125/250) would exactly reproduce 345 and 690 mg/L. The final concentrations (345, 690 mg/L) are used consistently throughout Results, Fig. 2's x-axis, and the Abstract, so they are recorded as this trial's dose; the intermediate mass figure is not used as the recorded 'mass added' value. WARN-CHECK Water panel species basis unstated: Table 2 (p.3) reports NO3 1448.3 uM, NO2 5.9 uM, NH3 33.3 uM without stating ion/molecule vs. nitrogen basis. Cited Hach methods (8039/8507/8155) are conventionally nitrogen-basis (mg/L as N), so NO3-N/NO2-N/TAN cells were populated via N-basis conversion (uM x 14.007/1000), prefixed '~': NO3-N ~20.3, NO2-N ~0.083, TAN/NH4-N ~0.466 mg/L. Alternative ion-basis readings: NO3- ~89.8, NO2- ~0.271, NH3 ~0.566 mg/L. Not resolvable from the text; both bases recorded here. NO COLUMN: full water panel from Table 2 (p.3) applies identically to all 5 rows - K 426.3 uM, Ca 1587.1 uM, Mg 632.6 uM, Cu 0.07 uM, Mn <0.01 uM (below detection), Zn 0.09 uM, Mo <0.01 uM (below detection), PO4 89.5 uM, TDS 334 ppm, baseline pre-spike Fe 0.35 uM. UNIT CONVERSION ONLY: water recycle 150 L/h -> 2.5 L/min; EC 0.67 mS/cm = 0.67 dS/m (equivalent units). NOT DERIVED, left NR: total system water volume (six 189 L fish tanks and six 1.67 m2 grow beds stated, no total volume or bed depth given); fish size (total biomass 56.7 kg given, fish count not given). Statistical result for the fulvic-acid effect: one-way ANOVA p<0.001 (Fig. 2); all 5 treatment levels differ from each other (distinct Tukey HSD letters a-e, p<0.05).

