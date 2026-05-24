# Platform.CCC Source of Truth Register

## Purpose

This register defines which system owns which class of record for Create Your Collective / CCC.

The objective is to prevent repo drift, duplicate authority and private-to-public leakage.

## Authority hierarchy

| Layer | Canonical owner | Mirrors / exports | Notes |
|---|---|---|---|
| Platform hierarchy | GitHub `config/platform_hierarchy.json` | README, docs, Squarespace copy | GitHub is canonical for structure. |
| Live registry records | Google Sheets Master Registry | `registries/*.csv` snapshots | Sheets are live; CSVs are portable snapshots. |
| Source files and media | Google Drive | GitHub references / manifests | Drive owns raw files. GitHub stores references, not raw private assets. |
| Schemas | GitHub `schemas/` | docs, validation outputs | Schemas are canonical field contracts. |
| Templates | GitHub `templates/` | Drive template copies | GitHub templates define structure. Drive copies are working documents. |
| Dashboard widgets | GitHub `dashboard_widgets/` | Squarespace code blocks | GitHub owns widget source. Squarespace deploys copy. |
| Public pages | Squarespace | docs/interface maps | Squarespace owns live presentation. GitHub documents pathing. |
| Mint packs | Drive build folders + GitHub scripts | testnet/export folders | Mint packs require review before live use. |
| Legal/compliance boundaries | GitHub docs + reviewed external advice | public wording | Repo docs are guardrails, not legal advice. |

## Private-to-public route

```text
Drive / Sheets private working record
→ registry validation
→ GitHub schema/template check
→ operator review
→ redacted/exported dashboard JSON
→ Squarespace/public display
```

## Non-authoritative areas

The following are not canonical sources of truth:

- chat transcripts unless converted into repo docs or registry rows
- ad hoc local downloads
- unreviewed exported ZIPs
- public website copy that has not been mapped back to repo docs
- duplicate files in nested upload folders

## Drift prevention rules

1. One canonical source per record type.
2. Mirrors must be labelled as mirror/export/generated/archive.
3. Raw private files stay in Drive.
4. GitHub stores schemas, templates, scripts, docs and safe examples.
5. Squarespace consumes approved outputs only.
6. Ethereum/testnet records are downstream proof layers, not the first operational database.

## Current status

- `NCNBOUWER/Platform.CCC` is canonical for Platform.CCC repo structure.
- Google Drive Master Registry remains canonical for live spreadsheet rows.
- Existing `Platform.CCC_upload_root/` content should be treated as staging until promoted or replaced at root.
- Failed ZIP upload has been removed from root.
