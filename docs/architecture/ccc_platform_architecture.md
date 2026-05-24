# CCC Platform Architecture

## Purpose

This document defines the canonical architecture for **Create Your Collective / CCC**.

It is the Lane A architecture spine for Platform.CCC and should be read with:

- `config/platform_hierarchy.json`
- `docs/source_of_truth_register.md`
- `docs/repo_drive_sync_rules.md`
- `docs/interface/dashboard_structure.md`

## Platform statement

Create Your Collective is a registry-first platform for turning people, collectives, projects, files, creative works, contracts, contribution records and mint-ready metadata into structured decentralised libraries.

It begins as:

```text
profiles
+ folders
+ registries
+ permissions
+ metadata
+ contribution logs
+ royalty accounting records
+ dashboard exports
```

Ethereum is a later provenance/mint layer, not the first operational database.

## Canonical hierarchy

```text
Create Your Collective
Coin: CCC — Creatives' Coin Collections
│
└── Day A Week
    Coin: DAYCC — Day-A-Week Community Coin
    │
    └── Day-A-Week-Collective
        Coin: DAWC — Day-A-Week Collective
        │
        ├── Day-A-Week Girls
        │   Coin: DAW.G — Da.Gorls
        │
        └── Day-A-Week Boys
            Coin: DAW.B — Da.Boiis
```

## Layer definitions

### Create Your Collective / CCC

Platform layer.

Owns:

- platform schema
- member/contributor profile logic
- collective creation logic
- shared library templates
- dashboard pattern
- safe public wording
- export and mint-pack standards

### Day A Week / DAYCC

First launch collective and broad community layer.

Owns:

- open participants
- non-primary members
- broad community records
- gateway membership into the first case study

### Day-A-Week-Collective / DAWC

Primary founding collective.

Owns:

- founding members
- founding group profiles
- primary shared projects
- DAW.G / DAW.B inheritance
- first internal coordination model

### DAW.G and DAW.B

Sibling sub-collectives under DAWC.

Rules:

```text
DAW.G ⊂ DAWC
DAW.B ⊂ DAWC
DAW.G ∩ DAW.B = Ø
```

A person may be represented in one sibling branch only unless the governance model is intentionally revised.

## System components

| Component | Role | Canonical system |
|---|---|---|
| Member profile | Identity and contribution node | Sheets + GitHub template |
| Collective profile | Group identity and scope | GitHub config + Sheets |
| Asset record | Creative/work file record | Sheets + Drive |
| Project record | Multi-party activity/object | Sheets + GitHub template |
| Contract record | Permission/legal scaffold | Drive + GitHub template |
| Royalty record | Internal accounting scaffold | Sheets snapshot |
| Mint pack | Reviewed metadata package | Drive build folder + GitHub scripts |
| Dashboard export | Public/private display data | Generated JSON |

## Operational architecture

```text
Squarespace form / manual intake
→ Google Sheets registry row
→ Google Drive folder/file reference
→ GitHub schema/template validation
→ operator approval
→ dashboard export
→ Squarespace display
→ optional testnet mint-pack
```

## Design principles

1. Registry before token.
2. Metadata before mint.
3. Permission before publication.
4. Review before public financial language.
5. Drive owns raw files.
6. Sheets own live rows.
7. GitHub owns schemas and automation.
8. Squarespace displays approved outputs.
9. Ethereum proves reviewed records later.

## Non-goals for MVP

The MVP should not:

- issue live investment products
- promise yield or passive income
- store private keys
- gate Minecraft gameplay with token ownership
- expose private Drive records publicly
- replace legal/tax review
- merge unrelated project claims into CCC

## Current implementation status

The repository now contains root-level architecture scaffolding. The older `Platform.CCC_upload_root/` folder remains as upload staging until root parity is complete.
