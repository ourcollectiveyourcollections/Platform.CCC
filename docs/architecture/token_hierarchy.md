# Token Hierarchy

Repository: `NCNBOUWER/Platform.CCC`  
Status: canonical scaffold

## Purpose

This document locks the separation between platform, launch collective, primary collective and sibling sub-collectives.

The terms below are registry and metadata concepts until legal, tax and token-design review is complete.

## Canonical hierarchy

```text
Create Your Collective
Coin: CCC — Creatives' Coin Collections

└── Day A Week
    Coin: DAYCC — Day-A-Week Community Coin

    └── Day-A-Week-Collective
        Coin: DAWC — Day-A-Week Collective

        ├── Day-A-Week Girls
        │   Coin: DAW.G — Da.Gorls
        │
        └── Day-A-Week Boys
            Coin: DAW.B — Da.Boiis
```

## Layer table

| Layer | Name | Coin | Asset class | Precision target | Role |
|---|---|---|---|---|---|
| Platform | Create Your Collective | CCC | members + contributors | 7dp+ | reusable platform root |
| Launch collective | Day A Week | DAYCC | open/non-primary members + groups | 5–6dp | first community shell |
| Primary collective | Day-A-Week-Collective | DAWC | founding groups + profiles | 6dp | founding inner collective |
| Sibling A | Day-A-Week Girls | DAW.G | member profiles | 5dp | branch-level profile/library scope |
| Sibling B | Day-A-Week Boys | DAW.B | member profiles | 5dp | branch-level profile/library scope |

## Inheritance

```text
DAW.G → DAWC → DAYCC → CCC
DAW.B → DAWC → DAYCC → CCC
DAYCC-only participant → DAYCC → CCC
CCC-only contributor → CCC
```

## Exclusivity

```text
DAW.G ∩ DAW.B = Ø
```

A member cannot be in both DAW.G and DAW.B unless the governance model is explicitly changed later.

## Token state progression

Use this progression before live token issuance:

```text
registry label
→ metadata field
→ internal accounting reference
→ testnet token candidate
→ reviewed live token
```

## Suggested technical standards

Early system:

- JSON records
- registry rows
- dashboard exports
- wallet address references only

Later system:

- ERC-721 for unique identity/profile records where required
- ERC-1155 for collection-of-collections and layered asset libraries
- ERC-20-like accounting only after legal/tax review

## Wording guardrail

Use:

- token candidate
- registry unit
- accounting reference
- profile record
- library entry
- royalty accounting record

Avoid until reviewed:

- dividend
- guaranteed return
- passive income
- investment entitlement
- asset-backed yield
- security
- financial product

## Root config

The canonical machine-readable hierarchy is:

```text
config/platform_hierarchy.json
```
