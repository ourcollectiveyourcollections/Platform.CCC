# CCC Platform Architecture

Repository: `NCNBOUWER/Platform.CCC`  
Platform: Create Your Collective  
Coin: CCC — Creatives' Coin Collections  
Status: canonical architecture scaffold

## Purpose

Create Your Collective is a Web2-first, Web3-ready platform for creating structured creator, contributor, project, contract, royalty and collection libraries.

The platform does not begin as speculative token issuance. It begins as a registry-first architecture:

```text
people
→ profiles
→ folders
→ assets
→ projects
→ contracts
→ contribution records
→ royalty accounting records
→ metadata
→ mint-ready packages
→ optional Ethereum proof layer
```

## Correct layer hierarchy

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

## Layer definitions

### Platform layer — CCC

Create Your Collective is the reusable product/platform.

CCC is the platform-level coin/registry concept.

It covers:

- members
- contributors
- platform-level profiles
- future collectives
- reusable collection templates
- creator/contributor libraries

Precision target:

```text
7dp+ and collecting royalty/accounting records
```

### Launch collective layer — DAYCC

Day A Week is the first launch collective under CCC.

DAYCC is the broad community/base shell.

It covers:

- open members
- non-primary members
- external groups
- future community-level users
- participants under Day A Week but outside the founding inner collective

Precision target:

```text
5–6dp and collecting royalty/accounting records
```

### Primary collective layer — DAWC

Day-A-Week-Collective is the founding inner collective.

DAWC covers:

- founding groups
- founding member profiles
- shared founding projects
- founding collective records

Precision target:

```text
6dp and royalties/accounting records
```

### Sibling sub-collective layer — DAW.G and DAW.B

DAW.G and DAW.B are sibling sub-collectives under DAWC.

Rule:

```text
DAW.G ∩ DAW.B = Ø
DAW.G ⊂ DAWC
DAW.B ⊂ DAWC
DAWC ⊂ DAYCC
DAYCC ⊂ CCC
```

Meaning:

- DAW.G members inherit upward into DAWC, DAYCC and CCC.
- DAW.B members inherit upward into DAWC, DAYCC and CCC.
- DAW.G and DAW.B membership is mutually exclusive unless explicitly restructured later.

## System stack

| Layer | Tool | Canonical role |
|---|---|---|
| Interface | Squarespace | public/member-facing Web2 interface |
| File storage | Google Drive | source files, member folders, asset libraries |
| Live registry | Google Sheets | member, asset, project, contribution and mint queue rows |
| Code/source control | GitHub | schemas, templates, scripts, docs, examples |
| Design | Canva | visual/layer production |
| Local AI | Ollama | drafting and metadata assistance only |
| Chain target | Ethereum | optional proof/mint layer after review |

## Design principle

Every member is a node.

```text
node = person + profile + wallet reference + folder + records + permissions + contributions
```

Every project is a container.

```text
project = assets + contributors + contract records + permissions + royalty accounting + metadata
```

Every collection is a boundary.

```text
collection = membership scope + asset scope + permission scope + dashboard scope
```

## Non-goals for MVP

The MVP does not:

- issue guaranteed financial returns
- create securities-style language
- store private keys
- store private member data in GitHub
- publicly expose raw Drive folders
- merge Minecraft gameplay economics
- import unrelated project claims without explicit bridge instruction

## MVP proof target

The first proof is not a live speculative token.

The first proof is:

```text
one member profile
one asset record
one project record
one contract record
one contribution record
one royalty accounting record
one metadata object
one mint-pack draft
one dashboard-safe export
```

Once this works, the platform can scale into repeatable collective creation.
