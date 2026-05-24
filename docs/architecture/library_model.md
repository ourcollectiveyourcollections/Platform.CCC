# Library Model

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

## Library classes

### Platform library

Layer: CCC

Contains:

- platform templates
- schemas
- contributor profile patterns
- customer collective templates
- public example records
- approved dashboard patterns

### Launch collective library

Layer: DAYCC

Contains:

- open member profiles
- open group profiles
- broad community assets
- launch case study projects

### Primary collective library

Layer: DAWC

Contains:

- founding member profiles
- founding group profiles
- internal shared projects
- founding contribution records
- branch inheritance records

### Sibling branch libraries

Layers: DAW.G and DAW.B

Contain:

- branch member profiles
- branch-specific projects
- branch-specific assets
- branch-specific contribution records

### Individual libraries

Each person should eventually hold their own Drive/node.

Contains:

- personal source uploads
- profile materials
- contributed assets
- project participation records
- contract copies
- royalty records
- mint-pack candidates

## Collection of collections

Platform.CCC supports collections of collections.

Example:

```text
Project NFT
├── digital foreground art
├── background layer
├── legal contract layer
├── physical build/deployment layer
├── music/audio layer
├── written description/lore
├── contributor split
└── mint-pack metadata
```

This makes the NFT a container record for multi-party contribution, not merely an image.

## File authority

| File type | Canonical home |
|---|---|
| raw art | Google Drive |
| raw media | Google Drive |
| contract drafts | Google Drive |
| schemas | GitHub |
| templates | GitHub |
| live registry rows | Google Sheets |
| registry snapshots | GitHub `registries/` |
| dashboard widgets | GitHub |
| deployed pages | Squarespace |
| mint packs | Drive build folder + generated GitHub-safe manifest |

## Status model

Recommended statuses:

```text
draft
submitted
reviewing
approved
mint_ready
testnet
minted
archived
deprecated
```

## Publication model

Only approved records should appear publicly.

```text
private source
→ registry row
→ review
→ approved export
→ dashboard display
```

## Current limitation

The library model is currently scaffolded. Live automation must not be enabled until Drive parent folders, registry permissions and dashboard export boundaries are confirmed.
