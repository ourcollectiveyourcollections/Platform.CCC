# Repo / Drive Sync Rules

## Purpose

Define how `NCNBOUWER/Platform.CCC` synchronises with Google Drive and Sheets without creating duplicate authority.

## System roles

| System | Role |
|---|---|
| GitHub | schemas, templates, automation, safe examples, documentation |
| Google Drive | source media, contracts, member folders, mint-pack files |
| Google Sheets | live registries, contribution ledgers, status tracking |
| Squarespace | public/member-facing interface |
| Ethereum/testnet | downstream provenance and mint target after review |

## Sync rule 1 — GitHub does not store private source files

Do not commit:

- identity documents
- private contracts
- wallet secrets
- seed phrases
- raw private member uploads
- unreviewed commercial agreements
- large ZIP exports

GitHub may store:

- schema files
- template files
- documentation
- generated public-safe examples
- scripts
- dashboard widget code
- registry snapshots with no sensitive data

## Sync rule 2 — Drive owns file objects

Drive is canonical for:

- visual assets
- layered art files
- media files
- contract working drafts
- member-owned folders
- mint-pack package folders
- public/private archive folders

GitHub should reference Drive paths or IDs only where appropriate and safe.

## Sync rule 3 — Sheets own live rows

Google Sheets is canonical for:

- member registry rows
- asset registry rows
- project registry rows
- contribution rows
- royalty split rows
- mint queue rows
- audit log rows

`registries/*.csv` are snapshots, not live databases.

## Sync rule 4 — Promotion pathway

```text
Drive source file
→ Sheet row
→ GitHub metadata/template/schema validation
→ operator approval
→ dashboard export
→ Squarespace display
→ optional testnet mint-pack
```

## Sync rule 5 — Staging and archive labels

Every non-canonical copy should be labelled as one of:

- `staging`
- `generated`
- `mirror`
- `export`
- `archive`
- `deprecated`

## Sync rule 6 — Nested upload wrapper retirement

The folder `Platform.CCC_upload_root/` is a staging artifact from manual upload.

Action:

1. Promote required files to root.
2. Confirm root files render and validate.
3. Delete nested duplicates only after root equivalents exist.
4. Preserve commit history for traceability.

## Sync rule 7 — Public/private boundary

Public dashboards may only consume approved exports.

Never expose:

- raw private Drive links
- private Google Sheet tabs
- sensitive member data
- unreviewed contract terms
- unreviewed financial claims

## Current operational decision

`NCNBOUWER/Platform.CCC` is the canonical repo for Create Your Collective / CCC.

`NCNBOUWER/Link-Drive` remains the orchestration/reference source for lane coordination, not the canonical CCC repo.
