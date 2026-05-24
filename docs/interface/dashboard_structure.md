# Dashboard Structure

## Purpose

Define dashboard modules for Platform.CCC and their public/private access levels.

## Dashboard classes

### Public dashboard

Purpose:

- show approved public information
- explain platform structure
- display public-safe libraries
- show case-study records

Modules:

- platform overview
- public library explorer
- approved creator cards
- approved collective cards
- public case-study tiles

### Member dashboard

Purpose:

- member self-navigation
- personal assets/projects/contributions
- profile status
- mint-pack candidate status

Modules:

- profile summary
- wallet reference optional
- my collectives
- my assets
- my projects
- my contributions
- my royalty accounting records
- my mint-pack candidates
- open requests

### Collective dashboard

Purpose:

- collective-level coordination
- branch/member overview
- asset/project status
- review queues

Modules:

- collective overview
- member table
- sub-collective table
- assets table
- projects table
- contracts table
- permissions table
- mint queue
- build log

### Admin dashboard

Purpose:

- source-of-truth monitoring
- private review
- export approval
- blocker tracking

Modules:

- registry health
- Drive sync status
- GitHub validation status
- dashboard export preview
- public/private field review
- unresolved blockers
- audit log

## Data classes

| Class | Public? | Notes |
|---|---|---|
| approved profile display name | yes | if approved |
| legal name | no | private unless explicit approval |
| email | no | private |
| wallet address | conditional | only if member approves display |
| asset title | yes if approved | safe once reviewed |
| raw Drive link | no | use controlled public export link only |
| royalty split | conditional | conceptual only unless reviewed |
| contract draft | no | publish only reviewed summary |
| mint-pack status | conditional | public only after approval |

## Export model

```text
Sheets/Drive private source
→ dashboard_export.json
→ widget fetch
→ Squarespace display
```

## Widget mapping

| Widget | Data source | Access |
|---|---|---|
| member_dashboard.html | member-filtered dashboard JSON | member |
| collective_dashboard.html | collective dashboard JSON | collective/admin |
| library_explorer.html | public-safe approved records | public/member |

## Dashboard status values

Recommended display statuses:

```text
draft
submitted
reviewing
approved
mint_ready
testnet
published
archived
blocked
```

## Current status

Dashboard HTML scaffold exists. Live data endpoint and authentication filter are not yet implemented.
