# Library Model

Repository: `NCNBOUWER/Platform.CCC`  
Status: canonical library scaffold

## Purpose

Define how Create Your Collective organises member, asset, project, contract and metadata libraries.

## Core idea

A library is not just a folder.

A library is:

```text
folder structure
+ registry rows
+ metadata records
+ permissions
+ provenance references
+ dashboard visibility state
+ optional mint-pack output
```

## Library types

### 1. Platform library — CCC

Scope:

- platform templates
- platform profiles
- platform contributors
- platform examples
- future collectives

Drive area:

```text
Create Your Collective.CCC/
```

GitHub area:

```text
config/
schemas/
templates/
examples/ccc/
registries/
```

### 2. Launch community library — DAYCC

Scope:

- open and non-primary members
- external groups
- broad Day A Week community assets
- public-safe community examples

Drive area:

```text
Day-A-Week.Community/
```

GitHub area:

```text
examples/daycc/
```

### 3. Primary collective library — DAWC

Scope:

- founding member profiles
- founding groups
- primary DAWC assets and projects
- founding contribution records

Drive area:

```text
Day-A-Week.Collective/
```

GitHub area:

```text
examples/dawc/
```

### 4. Sibling sub-collective libraries — DAW.G / DAW.B

Scope:

- branch member profiles
- branch-specific assets
- branch-specific projects
- branch contribution records

Drive areas:

```text
Day-A-Week.Girls/
Day-A-Week.Boys/
```

GitHub areas:

```text
examples/daw-g/
examples/daw-b/
```

### 5. Individual member libraries

Scope:

- member profile
- uploaded assets
- project contributions
- personal contracts
- metadata drafts
- mint-pack drafts
- royalty records

Suggested Drive structure:

```text
member_[member_id]_[display_name]/
├── 00_profile/
├── 01_uploaded_assets/
├── 02_project_contributions/
├── 03_contracts/
├── 04_nft_metadata/
├── 05_mint_packs/
├── 06_royalty_records/
└── 99_archive/
```

## Collection of collections model

A Platform.CCC collection can contain other collections.

Example:

```text
CCC platform collection
└── DAYCC launch community collection
    └── DAWC founding collective collection
        ├── DAW.G branch collection
        └── DAW.B branch collection
```

A project can also be a collection of multiple contribution layers:

```text
project NFT/library entry
├── visual art layer
├── music/audio layer
├── written/lore layer
├── legal/contract layer
├── physical build layer
├── contribution records
├── royalty accounting records
└── provenance metadata
```

## Asset lifecycle

```text
draft upload
→ registry row
→ metadata draft
→ permission review
→ approved library entry
→ dashboard-safe export
→ mint-pack candidate
→ testnet candidate
→ live mint candidate after review
```

## Permission model

Every library item needs:

- creator reference
- contributor references
- collection scope
- visibility state
- review status
- licence or permission status
- royalty accounting reference if applicable

## Dashboard indexing

Dashboard cards should not read raw private folders.

They should read safe exported records:

```text
Sheets row
→ reviewed export JSON
→ dashboard widget
```

## Archive model

Do not delete source material casually.

Use state labels:

- draft
- submitted
- approved
- exported
- mint_ready
- minted
- deprecated
- archived

## Public boundary

Only publish:

- approved titles
- approved descriptions
- public-safe images/files
- public-safe contributor names
- public-safe status records

Do not publish:

- private Drive folders
- legal drafts
- identity documents
- personal emails
- wallet secrets
- unreviewed royalty terms
