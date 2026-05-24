# Platform.CCC Batched Commit Plan

Date: 2026-05-24  
Repository: `NCNBOUWER/Platform.CCC`  
Execution lane: Co-Runner B primary

## Purpose

This plan groups Platform.CCC changes into rollback-safe, logically coherent batches.

The objective is to prevent mixed-purpose commits, reduce repo drift, and preserve future Codex continuation readability.

## Batch 0 — Recovery and transfer

Status: complete

Includes:

- repository transfer to `NCNBOUWER/Platform.CCC`
- failed ZIP deletion
- root README promotion
- `.gitignore` creation
- root build plan

Rollback risk: low.

## Batch 1 — Coordination and source-of-truth control

Status: active / mostly complete

Includes:

- co-runner orchestrator protocol
- co-runner assignment interpretation
- source-of-truth register
- repo/Drive sync rules
- unresolved blockers register
- current state summary

Rollback risk: low. These are control documents and do not alter runtime behaviour.

## Batch 2 — CCC platform architecture

Status: queued / active

Files:

```text
docs/architecture/ccc_platform_architecture.md
docs/architecture/token_hierarchy.md
docs/architecture/membership_roles.md
docs/architecture/library_model.md
docs/architecture/royalty_logic_conceptual.md
docs/architecture/compliance_boundaries.md
```

Purpose:

- lock CCC / DAYCC / DAWC / DAW.G / DAW.B hierarchy
- stabilise membership and library model
- preserve public/private and legal wording boundaries

Rollback risk: low.

## Batch 3 — Repo, Drive and registry spine

Status: queued / active

Files:

```text
docs/repo_drive_sync_rules.md
docs/source_of_truth_register.md
docs/deployment_staging_map.md
docs/rollback_and_snapshot_strategy.md
registries/*.csv
config/*.json
```

Purpose:

- preserve source-of-truth integrity
- map Drive and repo roles
- define staging, mirror, generated and archive states

Rollback risk: medium if deleting staging wrapper. Deletions require parity check first.

## Batch 4 — Schemas, templates and validation

Status: active

Files:

```text
schemas/*.schema.json
templates/*.json
scripts/*.py
.github/workflows/*.yml
examples/**/*.json
```

Purpose:

- define data contracts
- validate core examples
- support mint-pack generation and dashboard exports

Rollback risk: medium if schema names change after registry alignment.

## Batch 5 — Interface and Squarespace alignment

Status: queued

Files:

```text
docs/interface/squarespace_page_map.md
docs/interface/dashboard_structure.md
docs/interface/frontend_backend_contracts.md
docs/interface/launch_readiness_checklist.md
dashboard_widgets/*
```

Purpose:

- map public/member/admin modules
- define dashboard JSON contracts
- prepare Squarespace embeds and public/private gate

Rollback risk: low to medium.

## Batch 6 — Automation and Apps Script

Status: queued

Files:

```text
apps_script/*.gs
scripts/build_mint_pack.py
scripts/export_dashboard_json.py
docs/automation_plan.md
```

Purpose:

- automate member onboarding
- automate asset submission
- automate dashboard export
- scaffold mint-pack generation

Rollback risk: medium. Automation must remain disabled until folder IDs and permissions are confirmed.

## Batch 7 — Codex handoff and launch readiness

Status: queued

Files:

```text
docs/codex_handoff_2026-05-27.md
docs/launch_readiness_checklist.md
docs/unresolved_blockers.md
docs/current_state_summary.md
```

Purpose:

- make system understandable to future build agents
- preserve handoff state
- record blockers and no-go conditions

Rollback risk: low.

## Commit discipline

1. Do not mix architecture, automation and public website changes in one commit unless explicitly necessary.
2. Prefer additive commits until the root parity check is complete.
3. Do not delete nested staging files until root equivalents have been verified.
4. Do not commit secrets or private member data.
5. Keep every commit explainable in one sentence.

## Next recommended commits

1. Add architecture documents.
2. Add interface documents.
3. Add remaining schemas/templates.
4. Add Codex handoff.
5. Run metadata validation after examples are complete.
