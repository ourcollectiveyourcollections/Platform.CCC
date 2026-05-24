# Implementation Plan

## Objective

Build **Create Your Collective** as a low-cost, Web2-first, Web3-ready platform that lets users create structured collective libraries.

A collective library can include:

- members
- contributors
- sub-collectives
- personal libraries
- shared asset libraries
- contract records
- project records
- contribution records
- royalty split records
- mint-ready metadata packs

## Phase 1 — Repository scaffold

Create the canonical GitHub structure:

```text
docs/
schemas/
templates/
scripts/
apps_script/
dashboard_widgets/
examples/
registries/
.github/workflows/
```

## Phase 2 — Registry stabilisation

Use Google Sheets as the temporary database.

Required registry tabs:

- Dash
- Collectives
- Sub_Collectives
- Members
- Assets
- Projects
- Contracts
- Royalties
- Contributions
- Mint Queue
- Permissions
- Index
- Glossary
- Build Log
- Audit Log

## Phase 3 — Drive folder automation

Use Drive as the asset and library layer.

Each member eventually holds their own Drive folder and minimum personal repo/node.

The central platform stores:

- shared libraries
- approved templates
- mint-pack outputs
- platform-level registries
- collective-level references

## Phase 4 — Squarespace interface

Use Squarespace as the user-facing layer.

Core pages:

- Home
- About
- Create a Collective
- Member Login
- Member Dashboard
- Collective Dashboard
- Library Explorer
- Submit Asset
- Submit Project
- Terms
- Contact

## Phase 5 — Automation

Use free and low-cost tooling first:

- Google Forms or Squarespace forms for intake
- Google Apps Script for Drive/Sheets automation
- GitHub Actions for schema validation
- Python scripts for metadata/mint-pack builds
- Ollama for local drafting only

## Phase 6 — Ethereum-ready export

Do not start with live token issuance.

First produce:

- validated metadata JSON
- file manifest
- royalty split JSON
- contract record JSON
- mint-pack folder
- testnet-ready export

## Phase 7 — Testnet

Use Ethereum testnet only after:

- metadata passes validation
- files are reviewed
- permissions are clear
- legal wording is conservative
- no private keys are stored in the repo

## Phase 8 — First live case

Use the Day A Week hierarchy as first case:

- CCC platform layer
- DAYCC launch/community layer
- DAWC founding collective
- DAW.G sibling branch
- DAW.B sibling branch
