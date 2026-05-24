# Platform.CCC Current State Summary

Date: 2026-05-24  
Operator: Nathaniel Bouwer  
Execution lane: Co-Runner B primary, Lane A and Lane C support  
Repository: `NCNBOUWER/Platform.CCC`

## Executive status

`Platform.CCC` is the canonical repository for **Create Your Collective / CCC**.

The repository has moved from manual upload recovery into active structured buildout.

Current state:

```text
Stage 0 — scaffold/source-of-truth: substantially complete
Stage 1 — manual workflow / parity pass: in progress
Stage 2 — automation and dashboard export: queued
```

## Completed repo actions

### Recovery and control

- Repository transferred under `NCNBOUWER/Platform.CCC`.
- Admin/maintain/push access confirmed.
- Failed `Platform.CCC.zip` upload removed.
- Root README expanded.
- Root `.gitignore` added.
- Root build plan added.
- Co-runner orchestration protocol added.
- Co-runner assignment interpretation added.

### Source-of-truth and recoverability

- Source-of-truth register added.
- Repo/Drive sync rules added.
- Unresolved blocker register added and updated.
- Codex handoff file exists.
- Rollback and snapshot strategy exists.
- Root parity checklist added.

### Architecture and compliance

- Root hierarchy config added.
- CCC / DAYCC / DAWC / DAW.G / DAW.B hierarchy preserved.
- Compliance boundaries expanded.
- Public/private dashboard field allowlist added.

### Schema and validation

Root schemas now include:

- collective
- member
- asset
- project
- contract record
- contribution
- allocation record
- mint pack
- dashboard export

Validation surface now includes:

- validation script
- GitHub Actions validation workflow
- CCC / DAYCC / DAWC examples
- asset / project / mint-pack examples

### Config and Drive alignment

- Drive folder config template added.
- Drive manifest template added.
- Dashboard export example added.

## Current known repository issue

The previous manual upload created a nested staging folder:

```text
Platform.CCC_upload_root/
```

This folder still acts as a staging mirror. It should be retired only after root parity has been confirmed.

Current parity status:

```text
Docs: mostly promoted or superseded
Schemas: substantially complete
Templates: mostly complete
Config: substantially complete
Scripts: pending parity review
Apps Script: pending parity review
Dashboard widgets: pending parity review
Registry CSVs: pending parity review
```

## Current source-of-truth decision

| Record class | Canonical system |
|---|---|
| Platform hierarchy | GitHub `config/platform_hierarchy.json` |
| Live registry rows | Google Sheets Master Registry |
| Registry snapshots | GitHub `registries/*.csv` |
| Raw files/media | Google Drive |
| Schemas/templates/scripts | GitHub |
| Public/member interface | Squarespace |
| Mint/provenance target | Ethereum/testnet after review |

## Current execution posture

This repository is in Stage 0 / Stage 1 transition:

```text
Stage 0 — scaffold, hierarchy, source-of-truth, validation
Stage 1 — manual workflow using Drive + Sheets + GitHub templates
```

## Immediate priority

1. Promote or supersede automation scripts from `Platform.CCC_upload_root/`.
2. Promote or supersede Apps Script files from `Platform.CCC_upload_root/`.
3. Promote or supersede dashboard widgets from `Platform.CCC_upload_root/`.
4. Promote or supersede registry CSV snapshots.
5. Add dashboard export script enforcing the public field allowlist.
6. Run/inspect validation once Actions are visible.
7. Retire staging wrapper after parity check.

## No-go conditions

Do not proceed to live minting or public financial wording until:

- legal/tax review is complete
- metadata has been validated
- private/public data boundary is enforced
- wallet handling is defined without storing secrets
- dashboard exports are redacted and reviewed
