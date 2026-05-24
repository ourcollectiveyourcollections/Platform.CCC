# Codex Handoff — Platform.CCC

Target continuation date: 2026-05-27  
Repository: `NCNBOUWER/Platform.CCC`  
Operator: Nathaniel Bouwer  
Primary lane: Co-Runner B — Repo / Drive / Dataspace  
Support lanes: Co-Runner A — CCC Platform; Co-Runner C — Interface / Squarespace / Dashboard

## Current repository state

Platform.CCC is the canonical repository for Create Your Collective / CCC.

The repo was transferred to `NCNBOUWER`, write access was confirmed, and the failed ZIP upload was removed.

Root-level repo scaffolding has begun and now includes:

- README
- config
- docs
- schemas
- scripts
- examples
- GitHub Actions workflow

## Critical hierarchy

```text
Create Your Collective / CCC
└── Day A Week / DAYCC
    └── Day-A-Week-Collective / DAWC
        ├── Day-A-Week Girls / DAW.G
        └── Day-A-Week Boys / DAW.B
```

Do not collapse CCC, DAYCC and DAWC into one layer.

## Files to read first

1. `README.md`
2. `docs/co_runner_assignment_interpretation.md`
3. `docs/source_of_truth_register.md`
4. `docs/repo_drive_sync_rules.md`
5. `docs/unresolved_blockers.md`
6. `docs/batched_commit_plan.md`
7. `docs/current_state_summary.md`
8. `docs/architecture/ccc_platform_architecture.md`
9. `docs/interface/frontend_backend_contracts.md`

## Completed work

### Repo recovery

- Removed `Platform.CCC.zip`.
- Expanded root README.
- Added `.gitignore`.
- Added `docs/repo_build_plan.md`.

### Source-of-truth control

- Added source-of-truth register.
- Added repo/Drive sync rules.
- Added blockers register.
- Added batched commit plan.
- Added current state summary.

### CCC architecture

- Added platform hierarchy config.
- Added CCC architecture doc.
- Added token hierarchy doc.
- Added membership roles doc.
- Added library model doc.
- Added compliance boundaries doc.

### Interface support

- Added Squarespace page map.
- Added dashboard structure.
- Added frontend/backend contracts.

### Validation surface

- Added collective and member schemas.
- Added validation script.
- Added GitHub Actions validation workflow.
- Added example CCC, DAYCC and DAWC records.

## Known unresolved blockers

See `docs/unresolved_blockers.md`.

Primary blockers:

- nested `Platform.CCC_upload_root/` staging wrapper remains
- dashboard endpoint not connected
- Drive folder IDs not locked into automation config
- live Google Sheets export previously hit API quota
- legal/tax review not complete
- public/private dashboard boundary not technically enforced

## Next recommended actions

### 1. Root parity pass

Check files in `Platform.CCC_upload_root/` and promote any root-missing files.

Do not delete the wrapper until parity is confirmed.

### 2. Schema completion

Add or verify:

- `schemas/asset.schema.json`
- `schemas/project.schema.json`
- `schemas/contract_record.schema.json`
- `schemas/royalty_split.schema.json`
- `schemas/mint_pack.schema.json`
- `schemas/dashboard_export.schema.json`

### 3. Template completion

Add or verify:

- collective template
- member template
- asset template
- project template
- royalty split template
- NFT metadata template
- contract templates

### 4. Automation completion

Add or verify:

- Apps Script onboarding
- Apps Script asset submission
- Apps Script dashboard export
- Drive folder creation scaffold
- mint-pack builder script
- dashboard export script

### 5. Interface completion

Add or verify:

- dashboard widgets
- library explorer widget
- launch readiness checklist
- deployment dependency map

## Safety rules

Do not commit:

- private keys
- seed phrases
- identity documents
- unreviewed private contracts
- raw personal data
- live wallet secrets
- financial promises
- large ZIP exports

## Handoff interpretation

Codex should treat this repo as a registry-first, Web2-first, Web3-ready platform scaffold.

The immediate objective is not live token deployment.

The immediate objective is:

```text
source-of-truth integrity
+ repo/Drive alignment
+ schema validation
+ dashboard-safe exports
+ recoverable launch staging
```
