---
title: "A fully integrated simulation model of multi-loop aquaponics: A case study for system sizing in different environments"
citekey: "goddekFullyIntegratedSimulation2019"
year: 2019
type: modelling
doi: "10.1016/j.agsy.2019.01.010"
url: "https://doi.org/10.1016/j.agsy.2019.01.010"
trials: 0
tags:
  - Meta/Type/Modelling
  - Meta/Region/Europe
  - Meta/Region/Africa
  - Meta/Fish/Tilapia
  - Meta/Plant/Lettuce
  - Meta/Plant/Tomato
status: unread
quality:
---

# A fully integrated simulation model of multi-loop aquaponics: A case study for system sizing in different environments

## Metadata
* **Cite key:** goddekFullyIntegratedSimulation2019
* **Item type:** Journal Article
* **Authors:** [[S. Goddek]], [[O. Körner]]
* **Affiliation:** Biobased Chemistry & Technology, Wageningen University, P.O. Box 17, 6700 AA Wageningen, the Netherlands (S. Goddek); Leibniz Institute of Vegetables and Ornamental Crops (IGZ), Theodor-Echtermeyer-Weg 1, 14979 Großbeeren, Germany (O. Körner)
* **Journal:** Agricultural Systems 171 (2019) 143-154
* **Date:** 05/2019
* **Date added:** 2019-08-29
* **DOI:** [10.1016/j.agsy.2019.01.010](https://doi.org/10.1016/j.agsy.2019.01.010)
* **Funding:** Part of the research programme SUGI/Food-Water-Energy-Nexus "CITYFOOD" (project no. 438-17-402), partly financed by the Netherlands Organisation for Scientific Research (NWO). Authors also thank Desertfoods International GmbH and CITYFOOD (SUGI) for supporting the publication.
* **URL:** https://doi.org/10.1016/j.agsy.2019.01.010
* **PDF:** `Goddek and Körner - 2019 - A fully integrated simulation model of multi-loop .pdf`

> [!tip] Opinion
>
> A genuinely integrative modelling exercise — it is the first paper in this Goddek series to couple a full deterministic greenhouse/crop model (Körner's calibrated Unisim platform) with the RAS/mineralisation/distillation sub-models from Goddek and Keesman (2018), rather than treating hydroponic transpiration as a fixed rule of thumb. The three-climate scenario design (Faroe Islands, Netherlands, Namibia) is a sensible way to stress-test the sizing logic, and the fish-growth sub-model is at least calibrated against real empirical tilapia growth data (from AquaBioTech Group) rather than being purely literature-derived. That said, no physical multi-loop system was built or measured against these outputs — every "result" is a simulation output, all crop and RAS behaviour is deterministic with no stochasticity or measurement error propagated, and several key sub-model parameters (e.g. distillation split, nutrient recovery efficiencies) are taken wholesale from a single literature source each rather than validated locally. Useful as a sizing/engineering reference, not as evidence of realised yields or system performance.

## Abstract

Decoupled multi-loop aquaponics systems separate the recirculated aquaculture system (RAS) and hydroponic (HP) units from each another, creating detached ecosystems with inherent advantages for both plants and fish. This gives the advantage of improved crop and fish cultivation in combination, using the minimum resource input. Up to today, the focus of aquaponics systems is mainly on fish culture and treatment of RAS effluent for optimal use in HP, and systems are designed and sized with rule of thumbs of plant growth, evapotranspiration and nutrient needs, while taking the slow responses of RAS dynamics as basis. However, in order to create the optimal fit between RAS and HP, the different systems and differences in time responses of the underlying process need to be considered. Growth of fish and plants happen in hours or days and are slow processes while photosynthesis and transpiration in crops happen in seconds or minutes and are fast processes. As in a closed loop system the main water use is due to plant transpiration, the necessary sizes of system and sub-system depend on plant transpiration. We therefore aimed at creating an aquaponics-sizing simulator based on deterministic mathematical models and thus transferrable to various circumstances with simple parameterisation. We have combined a full-scale greenhouse simulator with a possible simulation time of min 1 min including HP, greenhouse construction and physics as well as a very detailed plant energy and growth model with a model for a multi-loop aquaponics system including distillation technologies and sumps. To illustrate the quality and wide applicability of our theoretical implementation of a multi-loop aquaponics system in greenhouse conditions we made scenario simulation studies at three different climate zones as sub-arctic cold, moderate and arid subtropical regions (i.e. Faroe Islands [66°N], The Netherlands [52°N], and Namibia [22.6°S]) using the same RAS size while simulating on the fitting HP area. For sizing, we used the element P as the most valuable macronutrient for plants. We simulated in a 1-min time steps for a 3-year duration using hourly input climate data for a complete year. Results clearly indicate the importance of transpiration dynamics on system and sub-system sizing, where e.g. the optimal HP size necessary was 11,250 m2, 10,250 m2 and 5250 m2 (tomato), or 15,750 m2, 14,000 m2 and 9250 m2 (lettuce), for Faroe Islands, The Netherlands, and Namibia, respectively.

## Summary

The authors couple a detailed, previously-validated deterministic greenhouse/crop simulator (MATLAB-based Unisim platform, tracking greenhouse microclimate, evapotranspiration, and photosynthesis-driven crop growth) with the multi-loop aquaponics sub-models (RAS, UASB mineralisation, and distillation/desalination) originally published in Goddek and Keesman (2018) and Goddek et al. (2016). The combined model is run as three-year, 1-minute-timestep scenario simulations under real hourly climate data for three contrasting sites — sub-arctic Faroe Islands, temperate Netherlands, and arid-subtropical Namibia — growing either tomato or lettuce in a hydroponic loop sized to balance a fixed 13-tank, 30 m3/tank tilapia RAS. Sizing is driven by phosphorus balance (chosen as the most valuable/limiting macronutrient) and by matching hydroponic area to the transpiration-driven water/nutrient flow needed to keep RAS nitrate below a tilapia-safe threshold. The main finding is that the necessary hydroponic area to balance a given RAS size varies substantially with climate and crop (from 5250 m2 tomato / 9250 m2 lettuce in Namibia up to 11,250 m2 tomato / 15,750 m2 lettuce in Faroe Islands), driven mainly by differences in crop transpiration and radiation across sites, and that annual energy-use efficiency (crop yield per unit heating/lighting energy) is highest in Namibia and lowest in the Faroe Islands. The paper also illustrates, via simulated distillation flow-rate scenarios (0-5000 L/h), how the desalination/distillation loop from the 2018 paper controls RAS nitrate accumulation regardless of location. No physical aquaponics facility was built or measured for this study; all reported values are simulation outputs from a model whose individual sub-models were validated in prior, separately published work.

---

> [!info] Experiment data
> - **Location:** Simulation study only; climate input data from Swakopmund (Namibia, 22.6°S; Meteoblue/HelioClim-3), De Bilt (The Netherlands, 52°N; Breuer and Van de Braak, 1989), and Tórshavn (Faroe Islands, 66°N; Meteoblue). No physical system built or sampled for this paper.
> - **Design:** Two coupled deterministic MATLAB (R2017a) sub-models — (1) a greenhouse/HP climate-and-crop model (Unisim platform, Körner and Holst 2017) and (2) an aquaculture model (RAS + UASB mineralisation + distillation, based on Goddek and Keesman 2018 and Goddek et al. 2016; fish tanks, drum filter, biofilter, gas exchange). Scenario simulations at three climate zones x two crops (tomato, lettuce, grown as monocultures, no intercropping) x hydroponic area stepped in 250 m2 increments to find the area that balances a fixed RAS size, run over 3 repeated years of hourly climate data at 1-min integration.
> - **Replicates / n:** [not applicable] — deterministic simulation, no biological replicates or randomisation; "replicate" years are 3 repeats of the same single reference climate year per site, not independent samples.
> - **Duration:** 3 simulated years (36 months) per scenario; RAS fish grown in consecutive batches/cohorts to a 600 g harvest weight over a ~2-year illustrative period (Fig. 5).
> - **Organisms:** [[Oreochromis niloticus]] (Nile tilapia; growth-model coefficients fitted by the authors via non-linear curve fitting to empirical growth data "provided by AquaBioTech Group, Mosta, Malta" — the one point in this paper where real biological measurement data underlies a sub-model, though the trial itself is not described or reported here) / [[Lactuca sativa]] (lettuce) / tomato (species not given beyond "tomato"; [not reported]).
> - **Statistics:** [not applicable] — no hypothesis testing; only a scenario/parameter search (250 m2 area increments) to identify the balanced hydroponic area for each climate x crop combination.
> - **Optimal HP area, tomato:** 11,250 m2 (Faroe Islands), 10,250 m2 (Netherlands), 5250 m2 (Namibia) — Table 6, matches abstract.
> - **Optimal HP area, lettuce:** 15,750 m2 (Faroe Islands), 14,000 m2 (Netherlands), 9250 m2 (Namibia) — Table 6, matches abstract.
> - **RAS system:** 13 tanks x 30 m3 = 390 m3 tank volume; stocking density cap 80 kg m−3 (Table 4); tilapia fingerling 55 g to harvest 600 g; water temp 29 °C.
> - **Average fish feed rate at steady state:** 165 kg day−1 (text, p.150, after "the system is totally cycled").
> - **Annual production efficiency (photosynthesis basis):** 10.9 (Namibia), 70.6 (Netherlands), 114.3 (Faroe Islands) kJ g−1 photosynthesis, i.e. 91.54, 14.16, 8.75 g MJ−1 heat energy respectively (text, p.152) — lower kJ/g (= higher g/MJ) is more efficient, so Namibia is most efficient, consistent between the two unit expressions.
> - **Heat efficiency without supplementary lighting (Table 7, EH, g MJ−1):** tomato — 60 (Faroe, SUN), 93 (Netherlands, SUN), 401 (Namibia, SUN); lettuce — 381 (Faroe, SUN), 564 (Netherlands, SUN), 1372 (Namibia, SUN).
> - **Distillation split (Table 4):** 38% of hydroponic-sump inflow returned to RAS as demineralised water (DeminFlow); 62% returned to hydroponic sump as concentrated brine (BrineFlow) — sourced from MemSys (2017) product spec, not derived in this paper.
> - **Nutrient recovery in mineralisation loop (Table 4):** N 30% (Goddek et al. 2018), P 90%, K 90% (both Jung and Lovitt 2011).

---

## Model architecture and coupling

**This paper:** Two independently developed large model systems are combined in MATLAB: (1) the greenhouse/hydroponic climate-and-crop model, a further development of the open-source Unisim greenhouse simulator (Körner and Holst, 2017), calibrated/validated in prior published experiments (Körner, 2004; Körner and Challa, 2004; Körner et al., 2007, 2009); and (2) the aquaculture model, itself sub-divided into RAS (fish tanks, drum filter, MBBR biofilter, gas exchange; Goddek, 2017), a UASB mineralisation loop (Goddek et al., 2018), and a distillation/desalination unit (Goddek and Keesman, 2018). The greenhouse model runs at 1-min simulation steps; the RAS/aquaculture differential-equation system is solved numerically at a 5-min timestep. Fig. 1 (p.145) diagrams the full water-flow scheme: fish tanks -> drum filter -> RAS sump <-> (biofilter/gas exchange loop) and <-> (settling basin -> UASB reactors -> RFS -> mineralised flow to HP sump); HP sump <-> distillation unit <-> HP sump/RAS sump; HP sump -> plants -> evapotranspiration.

**Compared with:**
- [[Goddek and Keesman 2018]] — sibling paper (already processed in this vault as `goddekNecessityDesalinationTechnology2018`), source of the RAS/mineralisation/distillation sub-model structure and the underlying nitrate-threshold logic reused here; not re-added to the chase list.
- #todo [[Karimanzira et al. 2016]] — dynamic modelling of the INAPRO aquaponic system, cited in the introduction as an example of prior single-loop aquaponics mass-balance modelling that this paper's multi-loop + greenhouse integration goes beyond.
- #todo [[Cerozi and Fitzsimmons 2017]] — phosphorus dynamics modelling and mass balance in an aquaponics system (Agric. Syst. 153), cited alongside Karimanzira et al. as prior aquaponics mass-balance literature.

## System sizing and nutrient thresholds

**This paper:** Sizing was done for phosphorus as "the most valuable macronutrient (in terms of cost and availability) for crop production" (p.148), with the RAS system sized for P first and nitrogen balanced against it. Two operating thresholds are stated in Results (p.149): NO3-N in RAS "must be below a certain threshold < 200 mg L−1 for tilapia," while PO4-P in HP is "aimed to be as close as possible to the recommended concentration of 50 mg L−1." Table 1 gives the target irrigation-water nutrient concentrations used as simulation input: lettuce NO3-N 190 / PO4-P 50 / K 210 mg L−1; tomato NO3-N 177 / PO4-P 49 / K 379 mg L−1. Fig. 2 shows RAS NO3-N over 36 months for both crops at all three sites (sized HP areas from Table 6) with a common "start phase" of rising N over the first ~6 months, then location- and crop-dependent seasonal fluctuation — smallest in Namibia, most pronounced in Faroe Islands/Netherlands.

**Compared with:**
- #todo [[König et al. 2018]] — analysis of aquaponics as an emerging technological innovation system, cited to support the claim that simple feed-based sizing rules of thumb carry "inherent risks for making false assumptions" in multi-loop systems.
- #todo [[Knaus and Palm 2017]] / #todo [[Licamele 2009]] — cited together as sources of the simple feed-input-based sizing rule of thumb used for one-loop systems, which this paper's model is positioned to improve upon for multi-loop systems.

## Fish growth and RAS parameters

**This paper:** The fish growth/metabolism sub-model follows Goddek et al. (2016)'s structure, but growth coefficients (αf, βf, γf = 0.0277, 0.4071, 0.0897 for Nile tilapia; Table 4) were newly fitted by the authors via non-linear curve fitting (MATLAB) to the Lupatsch and Kissil (1998) growth equation (Eq. 7) using "empirical data for Nile Tilapia... provided by AquaBioTech Group, Mosta, Malta" — the only real biological dataset feeding this model, though no details of that underlying trial (n, duration, conditions) are given in this paper. Table 4 lists the RAS design as 13 tanks x 30 m3, fingerling start weight 55 g, harvest target 600 g, water temperature 29 °C, stocking density cap 80 kg m−3, feed 38% protein / 1.2% P (Timmons and Ebeling 2013), 9.2% of feed protein becoming TAN (Timmons and Ebeling 2013). Sludge/excretion partitioning (Neto and Ostrensky 2013): 45% of feed P and 13% of feed N end up in RAS sludge; 16.7% of P and 33% of N are solubly excreted. Fig. 5 shows a 2-year illustrative simulation of 13 staggered tank cohorts reaching 600 g and being harvested in sequence, with feed rate ramping to a steady ~165 kg day−1 plateau (matching the text's stated average).

⚠️ **WARN-CHECK — Total RAS biomass capacity:** Table 4 (p.148) states stocking density `Biomassmax` = 80 kg m−3 applied to a fixed system of `Vtank`=30 m3 x `ntank`=13 (390 m3 of tank volume; total system volume including biofilter/sump given elsewhere as 482,000 L = 482 m3 in the Fig. 5 caption, p.151). Applying the stated 80 kg m−3 density to either volume gives a maximum standing biomass of roughly 31.2 t (tank volume basis) to 38.6 t (full system volume basis). However, the Fig. 5 caption (p.151) itself states the simulation is run "at a max. Total biomass of 80 t" — i.e. the same numeral "80" reappears, but now apparently read as tonnes of total biomass rather than kg m−3 of density. These are not the same quantity and the paper does not reconcile them. It is plausible this is an authorial slip re-using the "80" from Table 4's density parameter as if it were a total-tonnes figure, but this is not stated and cannot be confirmed from the text. Both values are recorded here with location; **unresolved, verify before citing either the "80 t" total-biomass figure or the ~31-39 t figure implied by Table 4's density parameter.** No downstream effect on `trials.csv`/`plant.csv`, which are header-only for this modelling paper.

**Compared with:**
- #todo [[Lupatsch and Kissil 1998]] — source of the fish growth equation (Eq. 7) whose coefficients were re-fitted here to Nile tilapia data.
- #todo [[Timmons and Ebeling 2013]] — source of feed protein/P content, %TAN conversion, and RAS water temperature parameters (Table 4).
- #todo [[Neto and Ostrensky 2013]] — source of sludge/soluble-excretion partitioning percentages for P and N (Table 4), and of the 55% sludge-P recovery figure cited in the Discussion.
- #todo [[Jung and Lovitt 2011]] — source of the 90% P and K nutrient-recovery efficiencies used for the mineralisation loop (Table 4).

## Yield and energy efficiency across climates

**This paper:** Table 7 reports annual fresh yield (Wc,f), electric energy (UE), heat energy (UH), heat efficiency (EH), and total energy efficiency (ET) for tomato and lettuce at all three sites, each under supplementary LED lighting (DLI 10 mol day−1) or sun-only (SUN). Fish yield is stated to be "the same regardless location when optimal cultivation procedures are assumed" (p.152), i.e. climate only affects crop-side yield and energy use in this model, not fish growth (RAS conditions are climate-controlled and decoupled from ambient weather). Crop yield per m2 and energy-use efficiency are both highest in Namibia (least seasonal variation, most consistent high radiation), intermediate in the Netherlands, and lowest in the Faroe Islands; annual production efficiency (photosynthesis basis) was 10.9, 70.6, 114.3 kJ g−1 for Namibia/Netherlands/Faroe Islands respectively (text, p.152). Fig. 6 shows weekly heat energy, absorbed radiation, and net photosynthesis for lettuce across a full year at all three sites.

**Compared with:**
- [[Goddek and Vermeulen 2018]] — cited in the introduction/discussion context as evidence for decoupled-aquaponics lettuce performance; sibling paper elsewhere in this vault batch, not re-added to chase list.
- #todo [[Mirzoyan et al. 2012]] — anaerobic treatment of brackish-water aquaculture sludge, contrasted in the Discussion with Goddek et al. (2018)'s aerobic/anaerobic UASB approach used in this paper's mineralisation loop.
- #todo [[Monsees et al. 2017]] — nutrient mobilisation from RAS-derived sludge under aerobic/anaerobic conditions, cited alongside Goddek et al. (2018) as supporting evidence that lower pH favours mineralisation of most macro/micronutrients.

## Linked claims

- [[Decoupled aquaponics requires nutrient/water trade-offs between RAS and hydroponic loops]]
- [[Crop transpiration is the main driver of water/nutrient flow sizing in closed-loop aquaponics]]
- [[Desalination technology can rebalance nutrient concentrations between RAS and hydroponic loops]]
- [[Aquaponics production efficiency increases with decreasing latitude and seasonal variation]]

## Citations to chase

- [ ] #todo Karimanzira et al. (2016) — Dynamic modeling of the INAPRO aquaponic system, Aquac. Eng. 75:29-45; prior single-loop aquaponics mass-balance model cited as context this paper's integration extends.
- [ ] #todo Cerozi and Fitzsimmons (2017) — Phosphorus dynamics modeling and mass balance in an aquaponics system, Agric. Syst. 153:94-100; prior aquaponics P mass-balance work cited in the introduction.
- [ ] #todo König et al. (2018) — Analysis of aquaponics as an emerging technological innovation system, J. Clean. Prod. 180:232-243; source of the claim that naive sizing rules of thumb carry risk in multi-loop systems.
- [ ] #todo Knaus and Palm (2017) — Effects of fish biology on ebb and flow aquaponical cultured herbs, Aquaculture 466:51-63; co-cited source of the simple feed-based sizing rule of thumb.
- [ ] #todo Licamele (2009) — Biomass Production and Nutrient Dynamics in an Aquaponics System, PhD thesis; co-cited source of the same sizing rule of thumb.
- [ ] #todo Lupatsch and Kissil (1998) — Predicting aquaculture waste from gilthead seabream using a nutritional approach, Aquat. Living Resour. 11:265-268; source of the fish growth equation re-fitted here.
- [ ] #todo Timmons and Ebeling (2013) — Recirculating Aquaculture, 3rd ed.; source of multiple RAS feed/water parameters (Table 4).
- [ ] #todo Neto and Ostrensky (2013) — Nutrient load estimation in the waste of Nile tilapia reared in cages, Aquac. Res.; source of sludge/excretion partitioning parameters and the 55% sludge-P recovery figure.
- [ ] #todo Jung and Lovitt (2011) — Leaching techniques to remove metals and potentially hazardous nutrients from trout farm sludge, Water Res. 45:5977-5986; source of the 90% P/K mineralisation recovery efficiencies.
- [ ] #todo Mirzoyan et al. (2012) — Anaerobic treatment of brackishwater aquaculture sludge, J. World Aquacult. Soc. 43:238-248; contrasted with the UASB mineralisation approach used here.
- [ ] #todo Monsees et al. (2017) — Potential of aquacultural sludge treatment for aquaponics, Aquac. Environ. Interact. 9:9-18; supporting evidence for pH-dependent mineralisation efficiency.

## Extraction notes

**Type classification (modelling):** This paper explicitly presents "our developed integrated multi-loop aquaponics and greenhouse model" (Introduction) built by combining two deterministic MATLAB sub-models, run as scenario simulations at three climate sites over 3 simulated years. No new fish were reared and no new plants were grown or measured for this study specifically — the fish growth-model coefficients were fitted to an external, unpublished-here empirical dataset ("provided by AquaBioTech Group"), and all crop, RAS, and distillation sub-model structures are stated to be reused/extended from prior published models (Goddek and Keesman 2018; Goddek et al. 2016; Körner and Holst 2017). There is no randomisation, no biological replication, and no statistical hypothesis test anywhere in the paper — only a parametric scenario/area search. This clearly satisfies SCHEMA.md's `modelling` test ("Simulation or computational model; no new empirical data") and fails every primary-research test (no controlled manipulation with replication, no on-farm/production trial, no descriptive pilot of a real system). It is also not a review/synthesis type, since it presents a new integrated computational tool and new simulation results rather than synthesising others' findings. `modelling` is the only defensible classification.

**CSV outputs:** Per CLAUDE.md/SCHEMA.md, only `experiment`, `quasi-experiment`, `field-trial`, and `exploratory` papers receive `trials.csv`/`plant.csv` rows. `out/goddekFullyIntegratedSimulation2019.trials.csv` and `out/goddekFullyIntegratedSimulation2019.plant.csv` are written header-only: this paper reports no original biological measurements of its own (the one real dataset referenced — AquaBioTech Group's tilapia growth data — is used only to fit model coefficients and is neither described in enough detail to extract a trial row, nor presented as this paper's own trial).

**[not reported]:**
- Tomato cultivar/species detail beyond "tomato" — no cultivar named anywhere in the paper.
- Details of the AquaBioTech Group empirical tilapia growth dataset used to fit Eq. 7's coefficients (n, tank conditions, duration, feed used) — cited only as a data provenance note, not described.
- Issue number for the journal volume (Zotero export lists no issue for Agricultural Systems 171; article is presumably issue-less/continuous volume numbering as is common for this journal since ~2016).
- Specific MATLAB toolbox versions beyond "ver. R2017a" for the base software.

**[unclear]:**
- The exact interpretation of `Biomassmax` (Table 4, 80 kg m−3) versus the Fig. 5 caption's "max. Total biomass of 80 t" — see ⚠️ WARN-CHECK above; not resolved.
- Whether Eq. 9's stated calculation of total fish population mass, `Mf(t) = Vt·Bmax/Wmax·Σ Wf(t)`, is dimensionally consistent as printed (Bmax is defined as a density in kg m−3, but the equation's structure suggests Bmax/Wmax might function as a fish-count-per-volume term) — a plausible typesetting/variable-definition issue in the source rather than a data contradiction, left unresolved since it doesn't affect any extracted value (no CSV rows for this modelling paper).
- Fig. 3's panel label reads "Faroer Islands" while the rest of the paper consistently uses "Faroe Islands" — treated as a minor spelling inconsistency in the source figure, not a data contradiction, no downstream effect.

**Contradictions:** One flagged above (⚠️ WARN-CHECK, RAS total biomass capacity, Table 4 vs. Fig. 5 caption). No other numeric contradictions were found; the sizing results (Table 6) are consistent between the abstract, Results text, and Table 6 itself, and the two efficiency-unit expressions on p.152 (kJ g−1 photosynthesis vs. g MJ−1 heat energy) are consistent reciprocal conversions of each other (checked: 1/10.9 kJ g−1 ≈ 91.7 g MJ−1 ≈ stated 91.54; 1/70.6 ≈ 14.16; 1/114.3 ≈ 8.75 — all match).

**Tagging judgment call:** `Meta/Fish/Tilapia` applied because Nile tilapia is the actual organism whose growth sub-model is fitted and simulated throughout (not just a passing illustrative mention, as in the 2020 sibling paper). `Meta/Plant/Lettuce` and `Meta/Plant/Tomato` applied because both are simulated in full detail (species-specific growth parameters, Table 3; dedicated yield/energy results, Table 7) as the two hydroponic crop options across all three climate scenarios. `Meta/Region/Europe` and `Meta/Region/Africa` both applied because the paper runs full scenario simulations for sites in both regions (Faroe Islands and the Netherlands = Europe; Namibia = Africa) as core, not incidental, results — unlike the 2018 sibling paper which used only a single Namibian site.

**New tags introduced:** None — `Meta/Type/Modelling`, `Meta/Region/Europe`, `Meta/Region/Africa`, `Meta/Fish/Tilapia`, `Meta/Plant/Lettuce`, and `Meta/Plant/Tomato` are all reused exactly as already spelled elsewhere in the vault (no new leaves needed).

---
*Source: `Goddek and Körner - 2019 - A fully integrated simulation model of multi-loop .pdf`*
