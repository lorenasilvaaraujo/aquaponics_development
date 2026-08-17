---
title: "Let-Us Investigate; A Meta-Analysis of Influencing Factors on Lettuce Crop Yields within Controlled-Environment Agriculture Systems"
citekey: "gargaroLetUsInvestigate2023"
year: 2023
type: meta-analysis
doi: "10.3390/plants12142623"
url: "https://doi.org/10.3390/plants12142623"
trials: 0
tags:
  - Type/Meta-analysis
  - Region/Global
status: unread
quality:
---

# Let-Us Investigate; A Meta-Analysis of Influencing Factors on Lettuce Crop Yields within Controlled-Environment Agriculture Systems

## Metadata
* **Cite key:** gargaroLetUsInvestigate2023
* **Item type:** Journal Article
* **Authors:** [[M. Gargaro]], [[R.J. Murphy]], [[Z.M. Harris]]
* **Affiliation:** Centre for Environment and Sustainability, University of Surrey, Guildford GU2 7XH, UK
* **Journal:** Plants 12(14) (2023) 2623
* **Date:** 07/2023
* **Date added:** [not reported]
* **DOI:** [10.3390/plants12142623](https://doi.org/10.3390/plants12142623)
* **Funding:** Z.M.H. was funded by NERC (NE/R013314/2).
* **URL:** https://doi.org/10.3390/plants12142623
* **PDF:** `Gargaro et al. - 2023 - Let-Us Investigate; A Meta-Analysis of Influencing.pdf`

> [!tip] Opinion
>
> A genuine, well-documented meta-analysis (PRISMA search, random-effects pooling, meta-regression, AIC model selection) rather than a narrative review despite MDPI shelving it under the "Review" section and Zotero carrying a `review` tag. The systematic-search reporting has an internal miscount worth flagging (see Extraction notes) and Figure 4's on-plot mean label does not match the number quoted five times in running text, but the subgroup/meta-regression machinery itself looks sound. Directly relevant to this vault: it names aquaponics as the highest-yielding CEA nutrient-delivery subgroup (6.73 kg m⁻²) ahead of hydroponics (3.43 kg m⁻²), based on only n=50 aquaponic observations pooled from a handful of underlying studies — worth chasing those primary aquaponic-lettuce papers individually rather than citing the pooled 6.73 figure as if it were a single measurement.

## Abstract

Climate change-related impacts have hampered the productivity of agricultural lands in recent times, affecting food security globally. Novel technology-based agricultural production systems such as controlled-environment agriculture (CEA) are a way to reduce the impact of climatic variation and pests that harm current global crop production and ensure consistent crop development. These systems often use artificial lighting and soilless mediums to produce crops. This meta-analysis has investigated the key influencing factors on crop production within these systems, using previous studies on lettuce (the most cultivated crop in these systems) to understand what affects yield within CEA. This analysis has found that on average, CEA systems yield twice that of field-based agriculture (3.68 kg m−2 vs. 1.88 kg m−2), with the most influencing factors being the variety of cultivars grown, the season, the nutrient delivery method, and the lighting type. The cultivation time for this study was 40 days, with 94% of papers having trial periods of 70 days or less, much lower than field-based agriculture (60–120 days). Vertical farming (stacked vertical CEA cultivation) studies were found to especially drive up yield per area (6.88 kg m−2). The results of this meta-analysis are useful for starting to understand the key influencing factors on CEA growth and highlight the breadth of research ongoing in the CEA industry.

## Summary

The authors ran a PRISMA-style systematic search across four databases (42,260 records) to build a dataset of lettuce-in-CEA yield studies, ending with 121 papers and 979 extracted observations. Using random-effects meta-analysis (R, `meta`/`metafor` packages, REML), they pooled a global yield estimate for CEA lettuce and compared it against FAO field-lettuce yield, then ran subgroup analyses and meta-regression on lettuce variety, building type, season, lighting type, nutrient/watering system, and time-to-harvest to see which factors best explain the very high between-study heterogeneity (I² = 100%). They found CEA lettuce yields roughly double field yields, that vertical farming and aquaponic nutrient delivery produce the highest per-area yields of any subgroup, and that nutrient delivery system, season, cultivar, and lighting type formed the best-fit AIC model explaining heterogeneity. The paper is explicit that high heterogeneity limits how far single point estimates (e.g. the 6.73 kg m⁻² aquaponic figure) should be trusted, and flags major evidence gaps for aeroponics (only 10 usable observations from one study). It closes with a call for more standardised reporting of variance/error terms in primary CEA yield studies, since data-quality issues forced exclusion of over 100 of the ~233 initially eligible papers.

---

> [!info] Experiment data
> - **Location:** Global systematic review; primary studies from 36 nations, Italy (n=199 observations), USA (n=160), China (n=137) most represented
> - **Design:** PRISMA systematic search (Science Direct, Web of Science, Scopus, MDPI, 2009–2022) + random-effects meta-analysis + subgroup analysis + meta-regression + AIC model selection
> - **Replicates / n:** 121 papers (per body text, abstract, key results, and discussion), 979 total observations. ⚠️ See Extraction notes — the PRISMA diagram (Figure 1) itself states "Papers included in review: (n = 238)", conflicting with the 121 figure used everywhere else.
> - **Duration:** Search covered publications 2009–2022 (12 Feb 2022 acceptance cutoff); mean cultivation time-to-harvest across pooled studies was 40 days (abstract) / 40.4 days (§3.2.1)
> - **Organisms:** [[Lettuce (Lactuca sativa)]] — variety groups: butterhead, batavia, iceberg, looseleaf, multileaf, cos, other
> - **Statistics:** Random-effects model (inverse-variance weighting, REML for Tau²), heterogeneity via Cochrane's Q and I², meta-regression (mixed-effects model) for continuous/categorical moderators, AIC for model selection; R v4.1.2, `meta` and `metafor` packages, effect sizes via `METAMEAN`
> - **[[Yield]]:** Global pooled mean 3.68 kg m⁻², 95% CI (3.38–3.98) *(text/abstract figure — see ⚠️ Extraction notes re: Figure 4's "Mean = 3.81" label)* vs. FAO field-lettuce benchmark 1.88 kg m⁻² (1.8773 kg m⁻² precise, §3.1) *[secondary, cites FAOSTAT]*
> - **[[Yield]]:** Vertical farming subgroup 6.88 kg m⁻² (n=144)
> - **[[Yield]]:** Nutrient/watering-system subgroup — aquaponics 6.73 kg m⁻² (n=50), soilless culture 5.70 kg m⁻² (n=38), hydroponics 3.43 kg m⁻² (n=881), aeroponics 2.40 kg m⁻² (n=10, one study only)
> - **[[Yield]]:** Watering/nutrient technology subgroup — Ebb & Flow 8.12 kg m⁻², Deep Water Culture 7.36 kg m⁻²
> - **[[Yield]]:** Variety subgroup — iceberg highest (7.45 kg m⁻², n=41, 41 days to harvest), looseleaf lowest (2.58 kg m⁻², n=266, 37 days to harvest)
> - **[[Yield]]:** Building-type subgroup — greenhouse 5.11 kg m⁻² (n=415), outdoor covered/polytunnel 3.28 kg m⁻² (n=19), controlled-environment space 2.65 kg m⁻² (n=508, lowest)
> - **[[Yield]]:** Season subgroup — winter 8.93 kg m⁻² (highest), spring 5.11, summer 3.95, autumn 3.43 kg m⁻² (n=417 total)
> - **Model fit:** Best-fit AIC model (season × nutrient delivery × cultivar × lighting interaction) carried 69% of cumulative model weight, R²=82.28%; nutrient delivery system identified as single most influential moderator (removing it roughly halves R²)

---

## Aquaponics vs. hydroponics yield comparison

**This paper:** Aquaponics was the highest-yielding overall watering/nutrient-delivery category in the pooled analysis (6.73 kg m⁻², n=50 observations), ahead of soilless culture (5.70 kg m⁻², n=38) and hydroponics (3.43 kg m⁻², n=881, ~90% of all observations). The authors describe this as "a nearly 100% increase in yield between the two technologies" (p.13) and attribute it to organic nutrient supplementation from aquaculture effluent allowing comparable or better yields at lower nutrient concentration, EC, and pH than standard hydroponic solutions. They caution this is based on a small fraction of total observations (n=50/967) drawn from a handful of underlying aquaponic-lettuce studies, so the 6.73 kg m⁻² figure is a pooled estimate across a thin evidence base, not a robust population parameter.

**Compared with:**
- #todo [[Ayipio Wells McQuilling Wilson 2019]] — "Comparisons between Aquaponic and Conventional Hydroponic Crop Yields: A Meta-Analysis" (cited ref [28]), directly overlapping scope; not yet in vault.
- [[Castillo-Castellanos et al. 2016]] — cited (ref [27]) as reporting aquaponics slightly lower-yielding than hydroponics but more profitable overall once fish output is counted; already in vault as `castillocastellanosImplementationExperimentalNutrient2016.md`.
- [[Delaide et al. 2016]] — cited (ref [56]) for aquaponic solution outperforming hydroponics on lettuce yield; already in vault as `delaideLettuceLactucaSativa2016.md`.
- #todo [[Monsees Suhl Paul Kloas Dannehl Wurtz 2019]] — decoupled aquaponic lettuce (Salanova) matching conventional hydroponic yield/quality with drastically lower GHG emissions and up to 63% fertiliser savings (ref [29], cited p.13).

## Vertical farming and building type

**This paper:** Vertical (stacked) systems pooled to 6.88 kg m⁻² (n=144), more than 3.5× the FAO field benchmark and considerably higher than the 3.68 kg m⁻² global CEA pooled mean, though the authors note many of the underlying studies used only two-layer growth chambers, understating commercial vertical-farm potential. Greenhouses were the highest-yielding *building type* subgroup (5.11 kg m⁻², n=415), attributed partly to 81% of greenhouse studies being sited in "high-sun" locations; counter-intuitively, purpose-built "controlled environment" spaces were the *lowest*-yielding building type (2.65 kg m⁻², n=508) — the authors attribute this to that subgroup being dominated by the four lowest-yielding lettuce varieties (88% of trials) and shorter-than-average trial durations (35.5 vs 40.4 days).

**Compared with:**
- #todo [[Touliatos Dodd McAinsh 2016]] — side-by-side vertical vs. horizontal hydroponic lettuce trial, cited repeatedly (ref [17]) as the paper's key illustrative case: vertical yield per occupied floor area ~14× higher than horizontal (95 kg m⁻² vs. 6.9 kg m⁻²) despite lower per-plant shoot fresh weight. *[secondary, cites Touliatos et al. 2016]*

## Time, lighting, and other moderators

**This paper:** Time-to-harvest showed only a mild positive correlation with yield (Pearson r=0.38) and explained ~15% of heterogeneity; mean time-to-harvest was 40 days (40.4 days in §3.2.1), with 94% of pooled studies ≤70 days — much shorter than the 60–120 day field-lettuce benchmark cited from a University of Arizona extension source [13]. Lighting type showed only a weak relationship with yield (~12% of heterogeneity): "artificial AND supplementary" lighting pooled highest (6.02 kg m⁻², n=5, one study) but natural lighting alone was very close (5.68 kg m⁻², n=378) with a far larger evidence base; the authors explicitly discount the artificial+supplementary result given n=5. Season and time interaction jointly explained ~37% of heterogeneity — the largest single moderator interaction reported. Nutrient delivery system was identified via AIC removal as the single most influential moderator overall (removing it "almost halv[es]" R²).

**Compared with:**
- #todo [[Frasetya Harisman Ramdaniah 2021]] — nutrient formulation effects on lettuce growth (ref [57]), cited on marketable lettuce quality.
- #todo [[Casey Freeman Francis Brychkova McKeown Spillane Bezrukov Zaworotko Styles 2022]] — comparative LCA of hydroponic CEA vs. field lettuce supply chains (ref [58]), cited for CO2-eq figures (17.8 kg CO2-eq/kg lettuce for non-renewable-powered CEA vs. 10 kg CO2-eq/kg for air-freighted field lettuce; 0.48 kg CO2-eq/kg for renewable-powered closed systems accounting for land-use carbon opportunity). *[secondary, cites Casey et al. 2022]*
- #todo [[Goddek Vermeulen 2018]] — comparison of RAS-based vs. conventional hydroponic lettuce growth performance (ref [32]); a different Goddek paper than the two already in the vault (`goddekImprovingNutrientWater2020`, `goddekNecessityDesalinationTechnology2018`).

## Citations to chase

- [ ] #todo Ayipio, Wells, McQuilling & Wilson (2019) — "Comparisons between Aquaponic and Conventional Hydroponic Crop Yields: A Meta-Analysis" (Sustainability); directly overlapping meta-analysis scope, not yet in vault.
- [ ] #todo Monsees, Suhl, Paul, Kloas, Dannehl & Würtz (2019) — decoupled aquaponic Salanova lettuce production, PLoS ONE; not yet in vault.
- [ ] #todo Touliatos, Dodd & McAinsh (2016) — vertical vs. horizontal hydroponic lettuce yield comparison, Food Energy Secur.; not yet in vault, cited as the paper's key vertical-farming illustrative case.
- [ ] #todo Frasetya, Harisman & Ramdaniah (2021) — hydroponic nutrient formulation effects on lettuce; not yet in vault.
- [ ] #todo Casey, Freeman, Francis, Brychkova, McKeown, Spillane, Bezrukov, Zaworotko & Styles (2022) — comparative LCA of hydroponic CEA vs. field-based lettuce supply chains, J. Clean. Prod.; not yet in vault.
- [ ] #todo Goddek & Vermeulen (2018) — RAS-based vs. conventional hydroponic Lactuca sativa growth comparison, Aquac. Int.; distinct from the two Goddek papers already in the vault.
- [ ] #todo Moreno-Pérez, Castillo, Gutiérrez-Tlaque, González-Molina & Pineda-Pineda (2015) — greenhouse lettuce with/without nutrient-solution recirculation; not yet in vault.

## Extraction notes

⚠️WARN-MATERIAL Number of papers included in the meta-analysis: The PRISMA flow diagram (Figure 1, p.3) states in its "Included" box "Papers screened: (n = 234)" immediately followed by "Papers included in review: (n = 238)" — two different numbers within the same box of the same figure. Separately, the running text states throughout — abstract ("using previous studies"), §2.1 ("121 papers that satisfied inclusion criteria, totaling 979 total observations"), Figure 1's own caption ("Overall, 121 papers were included in the search, totaling 979 observations"), §2.5 Key Results ("About 121 papers were evaluated, totaling 979 observations"), §3.1 Discussion ("Overall, 121 papers were used in this study, totaling 979 observations. Due to data limitations, this meta-analysis had to omit 113 papers, resulting in another 955 observations being excluded") — a consistent figure of 121 papers, with §3.1's arithmetic (234 screened − 113 further excluded for missing data = 121) internally reconciling against the diagram's "234" figure. §5 separately states "There were 233 studies initially, but due to missing data, over 100 of them had to be excluded" — consistent in magnitude with 234−113=121 (233≈234, "over 100"≈113). Recorded: 121 papers / 979 observations, as stated 5+ times across abstract, results, key results, and discussion, with supporting arithmetic. The diagram's "238" is treated as a labelling error internal to Figure 1 (it doesn't even match the "234" in the same box) and not reflected as this paper's headline sample size. Downstream effects: none on trials.csv (header-only, meta-analysis produces no rows), but affects how much weight the pooled subgroup estimates below should be given — readers citing this paper's "n=121 papers" should be aware Figure 1 itself is internally inconsistent.

⚠️WARN-CHECK Global pooled yield mean: Abstract, §2.3 ("3.68 kg m−2 95%CI (3.38–3.98)"), §2.5 Key Results, §3.1 Discussion (precise value "3.6814 kg m−2"), and §6 Conclusions all state the global pooled CEA lettuce yield as **3.68 kg m⁻²**. However, Figure 4 (p.5), the density plot explicitly captioned as showing "the mean value (red line) from the global analysis," labels the plotted red line "**Mean = 3.81**." This is a different number from the 3.68 stated everywhere else, including in running text describing this exact same figure. Given the 5-fold textual repetition (including a 4-decimal precision figure, 3.6814, in §3.1) versus the single figure-label instance of 3.81, 3.68 kg m⁻² is recorded as the paper's global pooled mean above. The 3.81 figure-label discrepancy is noted but not adopted. Possible explanations not stated by the paper: 3.81 could be an arithmetic-mean-of-the-plotted-distribution artifact distinct from the REML pooled estimate, or a simple labelling/rounding error in figure production — the paper does not say. Not added to `REVIEW.md` (that table is rebuilt from `trials.csv`-sourced Paper/Trial/Field rows via `merge.py`; this paper produces no trial rows, and this flag is a paper-level meta-statistic with no Trial ID to key against, so it is recorded here instead).

⚠️WARN-MINOR Mean time-to-harvest: abstract and §2.4.2 give "40 days"; §3.2.1 gives "40.4 days." Same underlying statistic, differ only by rounding. No cell impact (meta-analysis produces no trials.csv row).

⚠️WARN-MINOR Vertical-farming yield multiple over field baseline: §3.1 states Touliatos' vertical/horizontal comparison was "around 14×" (95 kg m⁻² vs. 6.9 kg m⁻², which computes to ~13.8×); §6 restates "up to 14× higher" for the same citation. Consistent within rounding.

[not reported]: Individual primary-study raw data (this is a meta-analysis; primary numbers belong to the cited studies, not this paper — see Citations to chase). Geographic coordinates for the review itself (not applicable — this is a literature synthesis, not a sited trial). `quality:` intentionally left blank per extraction rules for meta-analysis type.

[unclear]: Whether Figure 4's "Mean = 3.81" reflects a genuinely different calculation (e.g., simple linear-scale mean of plotted points vs. the REML/log-scale pooled estimate reported as 3.68 elsewhere) or is a plain labelling error — the paper gives no indication either way.

No fish, water-chemistry, or tissue-analyte data of the kind `trials.csv`/`plant_measurements.csv` are built for — this is a synthesis of yield effect sizes only, so no numeric extraction against those two schemas was attempted beyond what is already summarised in the Experiment data callout above.

---
*Source: `Gargaro et al. - 2023 - Let-Us Investigate; A Meta-Analysis of Influencing.pdf`*
