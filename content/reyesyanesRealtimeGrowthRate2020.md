---
title: "Real-time growth rate and fresh weight estimation for little gem romaine lettuce in aquaponic grow beds"
citekey: "reyesyanesRealtimeGrowthRate2020"
year: 2020
type: methods
doi: "10.1016/j.compag.2020.105827"
url: "https://doi.org/10.1016/j.compag.2020.105827"
trials: 0
tags:
  - Meta/Type/Methods
  - Meta/Region/NorthAmerica
  - Meta/Plant/Lettuce
status: unread
quality:
---

# Real-time growth rate and fresh weight estimation for little gem romaine lettuce in aquaponic grow beds

## Metadata

* **Cite key:** reyesyanesRealtimeGrowthRate2020
* **Item type:** Journal Article
* **Authors:** [[A. Reyes-Yanes]], [[P. Martinez]], [[R. Ahmad]]
* **Affiliation:** Laboratory of Intelligent Manufacturing, Design, and Automation (LIMDA), Department of Mechanical Engineering, University of Alberta, Edmonton, AB T6G 2G8, Canada (Reyes-Yanes, Martinez, Ahmad); Department of Civil and Environmental Engineering, University of Alberta, Edmonton, AB T6G 2W2, Canada (Martinez, second affiliation)
* **Journal:** Computers and Electronics in Agriculture 179 (2020) 105827
* **Date:** 12/2020 (Zotero); PDF header states "Available online 14 October 2020," received 10 April 2020, revised 30 September 2020, accepted 7 October 2020
* **Date added:** 2021-02-04 (zotero-export.csv)
* **DOI:** [10.1016/j.compag.2020.105827](https://doi.org/10.1016/j.compag.2020.105827)
* **Funding:** Council on Science and Technology (CONACYT), Mexico (File No. 2018-000039-01EXTF-00050); Transportes Pitic Scholarship; Natural Sciences and Engineering Research Council of Canada (NSERC) (Grant File No. ALLRP 545537-19 and RGPIN-2017-04516)
* **URL:** https://doi.org/10.1016/j.compag.2020.105827
* **PDF:** `Reyes-Yanes et al. - 2020 - Real-time growth rate and fresh weight estimation .pdf`

> [!tip] Opinion
>
> A clean, well-documented computer-vision methods paper — MASK-RCNN multi-instance leaf segmentation feeding a growth-rate metric and a linear-regression fresh-weight model, validated against manual calliper/scale ground truth on 3 lettuce plants. The engineering is solid and clearly reported (training/validation loss curves, RMSE tables, regression coefficients all given as numbers, not just figures). The title and framing ("aquaponic grow beds") are misleading for this vault's purposes: the actual validation setup described in Section 4.1 and Fig. 5 is a CropKing NFT Desktop hydroponic system with no fish, tank, biofilter, or RAS component mentioned anywhere in Methods or Results — see Extraction notes. This is a technique-validation paper, not a biological or aquaponics-vs-hydroponics result; it produces no `trials.csv` row. Worth keeping in the vault for the "smart monitoring in aquaponics" literature thread, but should not be cited as aquaponic production data.

## Abstract

Computer vision systems' interest in food grading has been increasing and adopted due to the non-destructive and contactless features of the process. Aquaponics technique, on the other hand, is a farming method that combines a recirculating aquaculture system and soilless hydroponics agriculture promising to be one of the answers to sustainability in the food industry. Lack of intelligent real-time approaches to monitor and track plant growth is hindering the transition of aquaponic systems towards automation and commercialization. Computer vision can promote further contributions in smart applications in aquaponics; therefore, a methodology is proposed to measure in real-time the growth rate and fresh weight of crops in multi-instance setups. The proposed system uses image-processing techniques, deep learning, and regression analysis to estimate the size of the crops as they grow using image segmentation. Then, a correlation between the size of the crops and their fresh weight is modelled. For common little gem romaine lettuce, the size of crops and fresh weight is estimated with an overall error of 30 mm (18.7%) and 0.5 g (8.3%), respectively.

## Summary

The authors built a multi-instance MASK-RCNN model to segment leafy-vegetable plants from top- and side-view camera images and used the resulting masks to estimate two "key performance metrics": a real-time growth rate (from frame-to-frame change in segmented leaf area) and fresh weight (from a linear regression on image-derived height, depth, width, and side/top area). The segmentation model was trained on 1,350 images (3,150 labelled instances) pooled from the authors' own photos and Google Image searches, covering several leafy species (lettuce, spinach, basil, etc.), so it would generalize beyond the target crop. The method was then validated on three Little Gem Romaine lettuce plants grown together in a single CropKing NFT Desktop hydroponic system, photographed by two fixed webcams every 30 minutes and manually measured (width, depth, height, weight) twice daily as ground truth. Estimated dimensions tracked manual measurements reasonably well early in growth but diverged later, mainly because adjacent leaves began to occlude one another (plants 1 and 2) starting around day 11, adding roughly 10% extra error relative to the unoccluded plant 3. The best fresh-weight regression model (all extracted features except volume) achieved an RMSE of 0.42 g. The paper reports no biological treatment comparison of any kind — it is a technique-validation study using a single monitoring run, not an experiment with aquaponic vs. hydroponic or any other treatment arms.

---

> [!info] Experiment data
> - **Location:** Laboratory of Intelligent Manufacturing, Design, and Automation (LIMDA), Department of Mechanical Engineering, University of Alberta, Edmonton, Alberta, Canada — an indoor bench-top setup (wooden structure with a polyethylene humidity cover), not a greenhouse or production facility.
> - **Design:** No treatments, no comparison groups. Two sequential phases: (1) **Model building** — MASK-RCNN trained on a pooled image database (1,350 images / 3,150 labelled instances, mixed sources, multiple leafy species) using the Abdulla (n.d.) Keras/TensorFlow implementation; (2) **Model validation** — a single hydroponic NFT run of 3 Little Gem Romaine lettuce plants (one CropKing NFT Desktop System, 3 plants per image), monitored with two calibrated webcams (top + side view, 1920x1080 px, one image pair every 30 min from 06:00-18:00) and twice-daily manual ground-truth measurements (width, depth, height via calliper, 0.01 mm resolution; weight via digital scale, 0.01 g resolution, corrected for rockwool moisture).
> - **Replicates / n:** 3 plants total (not a replicated treatment design — this is the paper's entire validation sample). 750 total images collected during validation (375 top-view + 375 side-view).
> - **Duration:** ⚠️CHECK — see Extraction notes. Results (Section 4, opening sentence) states the validation batch "are monitored for 15 days." Methods (Section 3.2.1) separately states manual measurements were taken twice daily "during the same period (21 days)." Both read as describing the same manual-measurement/validation exercise; the paper never reconciles the two figures. Figures 11-15 and Tables 2-3 (the actual reported validation results) all use axes/data consistent with a ~14-15 day window, so 15 days is used descriptively in this note, but 21 days is an equally-stated candidate — not resolved.
> - **Organisms:** Little Gem Romaine lettuce (paper's own term throughout; scientific binomial *Lactuca sativa* is never stated in this paper — linked below to the vault's existing [[Lettuce (Lactuca sativa)]] page for consistency, not because this paper itself gives the binomial) / **no fish or aquaculture organism is named, described, or measured anywhere in this paper** — see Extraction notes.
> - **Statistics:** No hypothesis test, ANOVA, or treatment comparison (there are no treatments). Root Mean Squared Error (RMSE) used to quantify segmentation-vs-manual-measurement discrepancy (dimensions, Table 2) and weight-prediction error (Table 5); ordinary least-squares linear regression (scikit-learn, Python), 70%/30% train/validation split, for the fresh-weight model.
> - **[[Plant dimension estimation]]:** Manual-vs-model RMSE (Table 2) — Plant 1: height 11.31 mm, depth 30.22 mm, width 28.70 mm; Plant 2: height 10.61 mm, depth 24.53 mm, width 21.81 mm; Plant 3: height 14.71 mm, depth 22.34 mm, width 12.31 mm.
> - **[[Growth Rate (crop imaging)]]:** Average growth rate per plant (Table 3, area-based, Eq. 8) — Plant 1: 18.17% (side view) / 18.09% (top view); Plant 2: 16.21% / 16.31%; Plant 3: 21.06% / 19.93%. Literature comparison figure cited by the authors: ~21% average reported growth rate for the same crop *[secondary, cites J.Y. Lu et al. 2019]*.
> - **Fresh weight model (Table 5-6):** Best RMSE = 0.42 g using all extracted features except Volume (vs. 0.52 g all-parameters, 0.54 g excl. Depth, 0.66 g excl. Width). Regression coefficients: Height -0.000859, Depth +0.001044, Width +0.005135, Side Area -0.000007, Top Area +0.000042, Intercept +0.246012.
> - **Headline validation error (Abstract/Conclusion):** overall crop size (length/width) estimated within 30 mm (18.7%) of manual measurement; fresh weight estimated within 0.5 g (8.3%).

---

## Growth rate estimation

**This paper:** Growth rate is computed per plant per image as the percentage change in segmented leaf area between consecutive time points (Eq. 8, `GR = a_i*100/a_{i-1}`), not from a linear dimension. Averaged over the validation run, the three plants' growth rates ranged 16.2-21.1% (side view) and 16.3-19.9% (top view) (Table 3), tracking each plant's individual vigor rather than a treatment effect — there is no treatment being tested. A degree-4 polynomial fit (Eq. 12, coefficients in Table 4) is offered as a smoothed area-vs-time growth curve, presented as a reusable "real-time" indicator a grower could act on, though the paper does not validate the polynomial fit itself against an independent dataset.

**Compared with:**
- #todo [[Lu et al. 2019]] (J.-Y. Lu, C.-L. Chang, Y.-F. Kuo) -- MASK-RCNN-based lettuce growth-rate monitoring in NFT channels; this paper's own literature benchmark, cited as "reported growth rates in literature are around 21% on average" for the same crop *(p.6)*. This paper's own Plant 3 side-view rate (21.06%) matches closely; Plants 1-2 (16-18%) are lower.
- #todo [[Yeh et al. 2014]] -- automated growth-measurement system for leafy vegetables in a hydroponic system, camera moving along channels, contour-based area/height growth curves; cited as an earlier precedent for image-based growth curves *(p.2)*.
- #todo [[Zhang et al. 2020]] -- CNN-based growth monitoring of greenhouse lettuce, addressing noise interference versus traditional computer-vision approaches *(p.2)*.

## Fresh weight estimation

**This paper:** Fresh weight is predicted by ordinary linear regression on image-derived features (height, depth, width, side-view area, top-view area), calibrated against manual digital-scale weights corrected for rockwool moisture. Volume (computed from height x depth x width) was tested as a candidate predictor but excluded from the best model — including it worsened RMSE (0.52 g vs. 0.42 g, Table 5), which the authors attribute to Volume's correlation with the other geometric features (redundant information) rather than to Volume being a poor predictor per se; this reasoning is the authors' own interpretation, not separately tested.

**Compared with:**
- #todo [[Jung et al. 2015]] -- two image-processing methods correlating hydroponic lettuce leaf-area images with weight via regression; direct methodological precedent for this paper's approach *(p.2)*.
- #todo [[Mortensen et al. 2018]] -- lettuce segmentation in coloured 3D point clouds for fresh-weight estimation; cited as a 3D alternative to this paper's 2D moment-based approach *(p.2)*.
- #todo [[Campillo et al. 2008]] -- using digital images to characterize canopy coverage/light interception in processing tomato; cited as establishing fresh-weight/area correlation as a metric the agricultural community wants *(p.2)*.

## Model architecture and validation design

**This paper:** Leaf segmentation uses the MASK-RCNN framework (He et al. 2017, Abdulla n.d. implementation), trained for 30 epochs (training loss 0.21, validation loss 0.31, Fig. 3) on a pooled 1,350-image / 3,150-instance database spanning multiple leafy species so the model generalizes beyond the target crop. Camera calibration (Zhang, 2004 method) corrects radial/tangential distortion before feature extraction; image moments (via Green's theorem / OpenCV contour-following, Suzuki and Be 1985) yield area, centroid, and — combined with bounding-box coordinates — height/width/depth per plant per frame.

**Compared with:**
- #todo [[Paturkar et al. 2020]] -- non-destructive 3D reconstruction of chilli plants from a single camera for outdoor growth monitoring; cited as an alternative single-camera 3D approach *(p.2)*.
- #todo [[Cavallo et al. 2019]] -- computer-vision quality classification of table grapes by colour-level image processing, contactless food-grading precedent motivating this paper's framing *(p.2)*.
- #todo [[Bai et al. 2018]] -- rice-spike detection via SVM + CNN cascade, cited as a precedent for combining classical image processing with deep learning to reduce false positives *(p.2)*.

## Linked claims

- [[MASK R-CNN multi-instance segmentation can estimate leafy-vegetable growth rate from time-lapse imagery]]
- [[Linear regression on image-derived plant dimensions predicts leafy-vegetable fresh weight]]
- [[Leaf occlusion between adjacent plants degrades computer-vision growth measurement accuracy]]

## Citations to chase

- [ ] #todo Lu, J.-Y., Chang, C.-L., Kuo, Y.-F. (2019) -- Monitoring Growth Rate of Lettuce Using Deep Convolutional Neural Networks, 2019 ASABE Annual International Meeting -- source of this paper's ~21% literature growth-rate benchmark
- [ ] #todo Yeh, Y.-H.-F., Lai, T.-C., Liu, T.-Y., Liu, C.-C., Chung, W.-C., Lin, T.-T. (2014) -- An automated growth measurement system for leafy vegetables, Biosyst. Eng. 117:43-50
- [ ] #todo Jung, D.-H., Park, S.H., Han, X.Z., Kim, H.-J. (2015) -- Image processing methods for measurement of lettuce fresh weight, J. Biosyst. Eng. 40:89-93
- [ ] #todo Mortensen, A.K., Bender, A., Whelan, B., Barbour, M.M., Sukkarieh, S., Karstoft, H., Gislum, R. (2018) -- Segmentation of lettuce in coloured 3D point clouds for fresh weight estimation, Comput. Electron. Agric. 154:373-381
- [ ] #todo Zhang, L., Xu, Z., Xu, D., Ma, J., Chen, Y., Fu, Z. (2020) -- Growth monitoring of greenhouse lettuce based on a convolutional neural network, Hortic. Res. 7:124
- [ ] #todo Paturkar, A., Gupta, G. Sen, Bailey, D. (2020) -- Non-destructive and cost-effective 3D plant growth monitoring system in outdoor conditions, Multimed. Tools Appl.
- [ ] #todo Cavallo, D.P., Cefola, M., Pace, B., Logrieco, A.F., Attolico, G. (2019) -- Non-destructive and contactless quality evaluation of table grapes by a computer vision system, Comput. Electron. Agric. 156:558-564
- [ ] #todo Bai, X., Cao, Z., Zhao, L., Zhang, J., Lv, C., Li, C., Xie, J. (2018) -- Rice heading stage automatic observation by multi-classifier cascade based rice spike detection method, Agric. For. Meteorol. 259:260-270
- [ ] #todo Campillo, C., Prieto, M.H., Daza, C., Monino, M.J., Garcia, M.I. (2008) -- Using digital images to characterize canopy coverage and light interception in a processing tomato crop, HortScience 43:1780-1786

## Extraction notes

**Type classification: `methods`.** The paper introduces and validates a computer-vision/deep-learning technique (MASK-RCNN segmentation feeding a growth-rate metric and a linear-regression fresh-weight model) against manual ground-truth measurements. There is no controlled manipulation, no defined treatments, no comparison group, and no biological hypothesis tested — the entire "Results" section reports estimation error (RMSE) of a prediction model, not a biological outcome. This matches SCHEMA.md's `methods` test exactly ("Introduces or validates a technique, not a biological result") and fails the `experiment`/`exploratory`/`observational` tests, all of which presuppose some biological measurement being taken *of* something (a treatment, a system, a population) rather than a *model* being scored against ground truth. Per SCHEMA.md Part 1, only `experiment`, `quasi-experiment`, `field-trial`, and `exploratory` produce `trials.csv` rows — `methods` does not. `trials.csv` for this paper therefore contains only the 87-column header, zero data rows (`out/reyesyanesRealtimeGrowthRate2020.trials.csv`). `plant_measurements.csv` is likewise header-only: none of the paper's measured quantities (height, depth, width, area, weight, RMSE, regression coefficients) fall into the `biochemistry`/`mineral`/`microbiology`/`proximate` analyte categories that schema scopes that file to.

**Template block judgment call.** CLAUDE.md's block-selection rule only names `experiment / modelling / meta-analysis -> Experiment data` and `review / policy -> Review scope`, and does not cover `methods`. This paper has a real methodology, dataset, and quantified validation results (Design, Replicates, Duration, Statistics, RMSE tables) that map far more naturally onto the `Experiment data` fields than onto `Review scope`'s literature-synthesis fields (Argument, Evidence base, Typologies), so `Experiment data` was used. Flagged here since the rule doesn't explicitly cover this case.

**Paper title/framing claims "aquaponic," but the described validation setup has no fish component (important, not severity-tiered since it is not a numeric contradiction, but load-bearing for how this paper should be used).** The title says "little gem romaine lettuce in aquaponic grow beds," the Abstract frames aquaponics generally, and Section 3.2 states a "validation test is then performed... with experimental results obtained using an aquaponics setup." However, Section 4.1 "Experimental setup" — which describes the actual physical setup used for the validation results reported in Section 4-5 (Figs. 11-15, Tables 2-3, 5-6) — lists exactly: "1 CropKing (R) NFT Desktop System," 2 webcams, 1 growth light, 1 ring light, 1 Raspberry Pi controller, 1 4-channel relay module. No fish tank, no biofilter, no RAS/recirculating-aquaculture component, no fish species, and no water-quality parameter is mentioned anywhere in Methods, Results, or Discussion. Fig. 5's own in-image label for this apparatus reads "Hydroponics Component," not "Aquaponics Component." The word "aquaponic(s)" appears only in generic/motivational framing (Title, Abstract, Introduction, Conclusion) and the one Section 3.2 phrase quoted above — never attached to an actual described fish or RAS element. Read most plainly, the validation experiment is a plain hydroponic NFT system that the paper brands "aquaponic" for motivation/keyword purposes (the journal keywords list includes "Aquaponics"). Consequence for this extraction: the fish block (`Fish`, `Fish Category`, `Initial Stock density`, `FCR`, etc.) is `NA` throughout (per SCHEMA.md's "entire fish block in a plant-only study" rule), not `NR` — the paper is not silent about fish, it simply describes a system with no fish in it, based on the equipment list actually given. No `trials.csv` row exists to carry this `NA` block since the paper is `methods` type, but the judgment is recorded here for anyone using this note. No `Meta/Fish/` tag applied.

**⚠️CHECK Validation duration: 15 days (Results, Section 4, opening sentence: "these plants are monitored for 15 days") vs. 21 days (Methods, Section 3.2.1: "The manual measurements were taken twice a day at 8:00 h and 16:00 h during the same period (21 days)").** Both sentences describe what reads as the same activity — the twice-daily manual ground-truth measurement of the validation batch of plants against which the model is scored. Section 3.2.1 is written in the Methodology section in general/procedural language ("the same period" refers back to the 30-min image-acquisition schedule described one sentence earlier); Section 4's "new batch of plants" sentence is the specific description of the dataset that produced every subsequent table and figure (Table 2 RMSE, Table 3 growth rates, Figs. 11-15). It is plausible that 3.2.1's "21 days" describes the intended/general protocol while the specific validation run reported in Results actually ran 15 days (a plan-vs-actual difference), or that 21 days refers to a different, earlier data-collection pass (e.g., feeding the correlation/regression-model database in Section 5.2, which does not restate its own duration) distinct from the "new batch" validation run. The paper gives no explicit cross-reference resolving this. Not entered in any cell (no `trials.csv` row exists for this paper); recorded here as `UNCLEAR` with both candidates, for anyone citing this paper's validation window. Not added to `REVIEW.md` because that file's schema is keyed to a `Trial ID`, and this paper produces none — flagging here is this paper's only mechanism for surfacing the discrepancy.

**[not reported] / [unclear] fields, grouped (narrative, no `trials.csv` cells since none exist):**
- No fish, water-quality, or aquaculture data of any kind (`NA` throughout that block per the aquaponic-framing note above).
- Scientific binomial for the plant (*Lactuca sativa*) — never stated; the paper uses only "little gem romaine lettuce" throughout.
- Cultivar/seed supplier, growing medium composition beyond "rockwool," nutrient solution recipe/EC/pH for the NFT system — none given (Section 4.1 lists only hardware, not consumables/inputs).
- Light photoperiod is given (T5 grow light on/off at 12 h intervals) but light intensity (lux/PPFD) for the grow light itself is not stated (only the ring light's 3000-35,000 lux, which is a camera-lighting aid, not a plant-growth light spec).
- Ambient room temperature/humidity for the lab bench setup — not stated (only that a polyethylene cover "maintain[s] the humidity in the system," no target value).

**PDF quality:** Clean, fully extractable text layer (10 pages, standard two-column Elsevier typesetting, all equations/tables/figure captions legible). No OCR issues, no scanned pages.

**Tags judgment call:** `Meta/Type/Methods` is a new tag facet value — no existing vault note carried this exact type (closest precedent is `goddekImprovingNutrientWater2020`, tagged `Meta/Type/Technical-Note`, which is a distinct SCHEMA.md category). `Meta/Region/NorthAmerica` per the University of Alberta, Edmonton, Canada location, reusing the vault's existing no-space convention (e.g. `blanchardEffectPHCucumber2020`, `deleonramirezPhysiologicalStressYield2025`). `Meta/Plant/Lettuce` applied because Little Gem Romaine lettuce is the organism actually grown and measured, reusing the vault's existing generic Lettuce tag. No `Meta/Fish/` tag — see the aquaponic-framing note above.

**Paper ID / citekey judgment call.** `zotero-export.csv`'s `File Attachments` field for this row happens to include a stale note-vault path (`...\content\zotero\reyes-yanesRealtimeGrowthRate2020.md`) showing the surname with its hyphen preserved. However, every other hyphenated/compound-surname paper already in this vault (`fernandezcabanasComparativeAnalysisHorizontal2020`, `castillocastellanosImplementationExperimentalNutrient2016`, `camargocastellanosSystemManagementLemna2022`, `perezurrestarazuSuitabilityOptimizationFAO2019`, `deleonramirezPhysiologicalStressYield2025`, `pinedapinedaResponseTilapiaTomato2020`) strips the hyphen. Followed the vault's own established, unanimous convention and used `reyesyanesRealtimeGrowthRate2020` (no hyphen) rather than the one stale path string, for consistency with the rest of the corpus. Flagged here for auditability in case the hyphenated form is in fact the live Better BibTeX key.

**New wikilink targets introduced:** [[A. Reyes-Yanes]], [[P. Martinez]], [[R. Ahmad]] (no existing author notes found in the vault for any of the three). [[Lettuce (Lactuca sativa)]] reused (existing vault target, e.g. `pantanellaAquaponicsHydroponicsProduction2012`) despite this paper never stating the binomial itself — see note above.

---
*Source: `Reyes-Yanes et al. - 2020 - Real-time growth rate and fresh weight estimation .pdf`*
