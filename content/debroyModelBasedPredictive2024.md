---
title: "Model-based predictive greenhouse parameter control of aquaponic system"
citekey: "debroyModelBasedPredictive2024"
year: 2024
type: modelling
doi: "10.1007/s11356-024-34418-z"
url: "https://doi.org/10.1007/s11356-024-34418-z"
trials: 0
tags:
  - Meta/Type/Modelling
  - Meta/Region/South-Asia
  - Meta/Plant/Tomato
status: unread
quality:
---

# Model-based predictive greenhouse parameter control of aquaponic system

## Metadata
* **Cite key:** debroyModelBasedPredictive2024
* **Item type:** Journal Article
* **Authors:** [[P. Debroy]], [[P. Majumder]], [[A. Das]], [[L. Seban]]
* **Affiliation:** Department of Electronics and Instrumentation Engineering, National Institute of Technology Silchar, Assam, India (Debroy, Seban); Department of Basic Science and Humanities (Mathematics), Techno College of Engineering Agartala, Tripura, India (Majumder); Department of Mathematics, School of Advanced Sciences, Vellore Institute of Technology, Vellore, Tamil Nadu, India (Das)
* **Journal:** Environmental Science and Pollution Research 31 (2024) 48423–48449
* **Date:** 07/2024
* **Date added:** [not reported]
* **DOI:** [10.1007/s11356-024-34418-z](https://doi.org/10.1007/s11356-024-34418-z)
* **Funding:** None declared — "The authors affirm that they did not receive any funds, grants, or other forms of support during the preparation of this manuscript."
* **URL:** https://doi.org/10.1007/s11356-024-34418-z
* **PDF:** `Debroy et al. - 2024 - Model-based predictive greenhouse parameter contro.pdf`

> [!tip] Opinion
>
> A pure control-systems/simulation paper — no live aquaponic system, no fish, and no measured plant data. It borrows a tomato biomass model and greenhouse-climate equations wholesale from prior literature (Lastiri et al. 2018; Van Beveren et al. 2015a, b) and layers a PSO/GA setpoint optimizer plus an MPC-vs-PI controller comparison on top, tested only in MATLAB simulation against NASA POWER weather data for one summer and one winter day in Silchar, India. Aquaponics is essentially a framing device — a single sentence acknowledges the NFT channel water's negligible effect on greenhouse humidity (`H_NFT ≈ 0`), and there is no biofilter, fish tank, or fish-loop water-quality variable anywhere in the model. The engineering comparison (CDMPC clearly beats PI on RAD/MRD) looks methodologically sound for what it is, but the paper's own limitations section admits there is no real-time/physical validation — this is a MATLAB-only theoretical exercise, not a study of any actual aquaponic greenhouse.

## Abstract

The effectiveness of an aquaponic system significantly relies on the habitat provided for both the fish and plants. As an integral component of aquaponics, hydroponic cultivation benefits greatly from the controlled environment of a greenhouse. Within this environment, factors such as temperature, carbon dioxide levels, humidity, and light can be carefully adjusted to maximize plant growth and development. This precise regulation ensures an ideal growing environment, fostering the flourishing of plants and contributing to the overall success of the aquaponic ecosystem. This study presented a control approach for an aquaponic greenhouse system. It aims to keep the greenhouse climate parameters (temperature, CO2 concentration, and humidity) at their ideal levels. The proposed control strategy is a two-layered mechanism in which the first layer presents an optimization framework using particle swarm optimization (PSO) algorithm to give the setpoints for the controller, and the second layer demonstrates a constrained discrete model predictive control (CDMPC) strategy to maintain the desired trajectories received from the optimization layer. To validate the results obtained using PSO, this study incorporates genetic algorithms (GA) and assesses their performance in comparison. Given similar computational efficiency and low computational time for both algorithms, the optimal values identified by particle swarm optimization (PSO) are adopted as the setpoints. Two performance criteria, relative average deviation (RAD) and mean relative deviation (MRD), are derived to evaluate the tracking performance of the proposed CDMPC controller under external disturbances. A comparison of the proposed CDMPC with the PI controller is also offered. According to the comparison results, our proposed CDMPC performs better than the PI controller with lower RAD values (temperature, 1.1315; CO2 concentration, 0.9225; humidity, 2.547) and MRD values (temperature, 0.315; CO2 concentration, 0.25; humidity: 1.013). The controller is validated to be efficient by its strong control performance, highlighted by robustness, efficient setpoint tracking, and adequate disturbance rejection. This novel approach might prove to be a useful technique for developing environmental control strategies that can be used for potentially boosting production rates of aquaponic greenhouse systems, maximizing profitability, and reducing labor needs. By maintaining optimal conditions, it can enhance ecosystem health, improve yields, and streamline operations, paving the way for greater system performance and sustainability.

## Summary

This is a purely computational/simulation study, not an empirical trial. The authors build a lumped-parameter mathematical model (energy and mass balances, Eqs. 1–22, parameter values taken from Van Beveren et al. 2015a, b) for the temperature, CO2 concentration, and humidity of a greenhouse used as the hydroponic component of an aquaponic system, adding a single term for heat exchange with recirculating NFT channel water (negligible for humidity, `H_NFT ≈ 0`). A tomato fruit-biomass growth model borrowed from Lastiri et al. (2018) serves as the optimization objective function; particle swarm optimization (validated against a genetic algorithm) is used to find constant, time-invariant setpoints (23 °C, 400 ppm CO2, 22 g/kg humidity) rather than the sample-by-sample online setpoints used in prior literature. A constrained discrete model predictive controller (CDMPC) is then designed to track these setpoints and is compared against a conventional PI controller under two simulated disturbance scenarios (a summer day and a winter day in Silchar, Assam, India, using NASA POWER meteorological data) and two setpoint-tracking cases (constant setpoints and ±10% setpoint steps). Controller performance is scored using relative average deviation (RAD) and maximum relative deviation (MRD); CDMPC beats PI on both metrics for all three variables. All results are produced entirely in MATLAB 2022A simulation — the paper explicitly lists the absence of a real-time/physical demonstration as a limitation, and no fish, biofilter, or water-quality variables are modeled at all.

---

> [!info] Experiment data
> - **Location:** Simulation only; meteorological input data from Silchar, Assam, India (a summer day, 26 July 2023, and a winter day, 16 November 2023), sourced from NASA POWER Data Access Viewer. No physical greenhouse or aquaponic system was built or instrumented.
> - **Design:** Two-layer control architecture: (1) PSO (validated against GA) to find optimal constant setpoints for greenhouse temperature, CO2 concentration, and humidity, maximizing a literature-derived tomato fruit-biomass objective function; (2) constrained discrete MPC (CDMPC) vs. a conventional PI controller to track those setpoints under two case scenarios (disturbance rejection with constant setpoints; ±10% setpoint-tracking) crossed with the two simulated days, i.e. 4 simulated cases total.
> - **Replicates / n:** Not applicable — deterministic simulation, no biological/experimental replicates. RAD/MRD computed over N = 96 samples (24 h at 15-min sampling, Ts = 15 min) per case.
> - **Duration:** Simulated total time Tm = 1440 min (24 h) per case; PSO/GA run for 100 iterations with population size 100.
> - **Organisms:** [[Tomato]] (Solanum lycopersicum, species name itself not stated in text — only "tomato plant"/"tomato fruit" used) as the crop represented by the borrowed biomass-growth model (Eq. 23–24, parameters from Lastiri et al. 2018); no fish species modeled or mentioned as part of the system model at all (fish appear only in the generic Fig. 2 aquaponics schematic and background text).
> - **Statistics:** No inferential statistics / significance testing — outcomes reported as point values of RAD and MRD (Eqs. 38–40) and PSO/GA fitness-function convergence values, all deterministic outputs of the simulation, not measured biological data.
> - **[[Model Predictive Control (MPC)|CDMPC]] vs [[PI controller]] — RAD:** temperature 1.1315 (CDMPC) vs 2.1754 (PI); CO2 0.9225 (CDMPC) vs 1.0702 (PI); humidity 2.547 (CDMPC) vs 3.0169 (PI).
> - **CDMPC vs PI — MRD:** temperature 0.315 (CDMPC) vs 1.0681 (PI); CO2 0.25 (CDMPC) vs 0.627 (PI); humidity 1.013 (CDMPC) vs 2.0238 (PI).
> - **PSO vs GA setpoints (Table 5):** Tair 22.9565 ≈ 23 °C (PSO) vs 22.9577 ≈ 23 °C (GA); Cair 399.9914 ≈ 400 ppm (PSO) vs 400.0034 ≈ 400 ppm (GA); Hair 21.9783 ≈ 22 g/kg (PSO) vs 22.0324 ≈ 22 g/kg (GA).
> - **PSO vs GA performance (Table 6):** fitness value 6154.1 kg (PSO, 43 s) vs 6210.5 kg (GA, 79.4 s); PSO converged by iteration 36, GA by iteration 77.

---

## Why this is `modelling`, not an experiment

No live fish or plants were grown, measured, or sampled anywhere in this paper. The "aquaponic system" is present only as: (1) a motivating framing in the Introduction/schematic (Fig. 2, generic fish-tank/NFT-channel diagram, not this study's own setup); and (2) a single negligible correction term for NFT-channel water's effect on greenhouse humidity (`H_NFT ≈ 0`, Eq. 22). Every other equation is a standard closed-greenhouse energy/mass-balance model (temperature, CO2, humidity) parameterized from Van Beveren et al. (2015a, b), and the crop-growth objective function is lifted verbatim (with its parameter values) from Lastiri et al. (2018) — none of these parameters were fit or measured by the current authors. The only "validation" performed is a MATLAB simulation run against historical weather-station data for two calendar days; there is no physical greenhouse, no biofilter, no fish tank, and (per the authors' own stated limitation) "the absence of a real-time application demonstration represents a notable limitation." This satisfies the `modelling` test in `SCHEMA.md`: "Simulation or computational model; no new empirical data."

## Aquaponics relevance

This paper studies a **generic greenhouse climate-control problem** (temperature/CO2/humidity regulation via MPC vs. PI, with PSO/GA-derived setpoints) and frames it as being for a hydroponic-in-greenhouse component "incorporated in" an aquaponic system. Aquaponics-specific content is limited to: the Introduction's generic sustainability arguments for aquaponics (Table 1), a schematic of a generic aquaponic system (Fig. 2) that plays no role in the mathematical model, and the single `H_NFT ≈ 0` term. No fish loop, biofiltration, water-quality-to-plant-growth linkage, or fish-derived nutrient pathway is modeled. This is fundamentally a **greenhouse control-systems engineering paper** that name-checks aquaponics as an application context, not a study of an aquaponic system's biology or water chemistry.

## Controller/optimization design (for reference)

- Objective function: tomato fruit-biomass growth model (Eq. 23, parameters from Lastiri et al. 2018), function of temperature, CO2, humidity, water temperature, PPFD, dissolved oxygen, and recirculating-water nutrient concentrations (NO3, K, Mg, Ca) — but these last inputs are not simulated/varied in this study; the paper optimizes only Tair, Cair, Hair as design variables within fixed literature-recommended bounds (Table 4).
- PSO parameters: population 100, 100 iterations, c1 = c2 = 2, w from 0.9 to 0.4.
- GA parameters: population 100, 100 iterations, crossover probability 0.8, mutation probability 0.1.
- CDMPC parameters: prediction horizon Np = 100, control horizon Nc = 20, Ts = 15 min, Q = diag(1,1,1), R = diag(0.1,0.1,0.1).
- PI gains (Table 7): PI_Tair Kp = 0.08, Ki = 0.01106; PI_Cair Kp = 1, Ki = 0.1184; PI_Hair Kp = 0.087, Ki = 0.01164.

## Linked claims

- [[Model predictive control outperforms PI control for MIMO greenhouse climate regulation]]
- [[Constant PSO-derived setpoints avoid the energy/complexity cost of online setpoint re-optimization]]

## Citations to chase

- [ ] #todo Lastiri et al. 2018 — source of the tomato fruit-biomass growth model (Eq. 23–24) and all its parameter values; the actual empirical/model-fitting study behind the objective function used here.
- [ ] #todo Van Beveren et al. 2015a, 2015b — source of the greenhouse climate-model physical parameters (Table 3) used in this paper's temperature/CO2/humidity equations.
- [ ] #todo Su et al. 2020 — prior PID-based greenhouse control study discussed comparatively in Discussion (continuously adjusted setpoints, cited as having potential instability issues).
- [ ] #todo Lin et al. 2021 — prior MPC-based conventional-greenhouse control study (temperature, CO2, humidity) discussed comparatively in Discussion.

## Extraction notes

No internal contradictions (⚠️) were found — the abstract, results text, and Table 10 all report matching RAD/MRD values for PI and CDMPC.

`[not reported]` / `[unclear]` fields:
- **Date added** — Zotero "date added" field not present in `zotero-export.csv` export columns available; recorded `[not reported]`.
- **Tomato cultivar/species binomial** — paper only ever says "tomato plant"/"tomato fruit," no cultivar or Latin binomial given; recorded as `[not reported]` in the Organisms field above.

Judgment call on `Meta/Plant/Tomato` tag: no real tomato plant was grown or measured in this study. The tag is applied because the paper's entire optimization framework is built around a tomato-specific biomass-growth model (Eq. 23–24, parameters borrowed from Lastiri et al. 2018) and validates its extracted setpoints specifically against tomato-appropriate literature ranges (Li et al. 2017; Shamshiri et al. 2018; Yanes et al. 2020), rather than treating "aquaponics" or "plants" generically. This is different from a passing mention, but it is also not first-hand biological data — flagged here so the user can override if this bar is judged too permissive.

No `Meta/Fish/` tag: fish are never part of the mathematical model, never mentioned with a species name, and appear only in the generic system schematic (Fig. 2) and introductory background text about aquaponics generally.

Region tagged `Meta/Region/South-Asia` on the basis of the simulation's meteorological input location (Silchar, Assam, India) and all four authors' Indian institutional affiliations — no physical system exists at this location, only weather data drawn from it.

No PDF text-layer issues; the PDF has a clean, extractable text layer (not scanned).

---
*Source: `Debroy et al. - 2024 - Model-based predictive greenhouse parameter contro.pdf`*
