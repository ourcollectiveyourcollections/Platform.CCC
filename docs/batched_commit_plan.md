# Batched Commit Plan

## Purpose

Define rollback-safe commit groups for the Platform.CCC buildout.

The objective is to keep each commit coherent, auditable and reversible.

## Current status

`NCNBOUWER/Platform.CCC` is the active canonical repo for Create Your Collective / CCC.

Completed root commits include:

- failed ZIP removal
- root README expansion
- root build plan
- hierarchy config
- schema starts
- validation script
- GitHub Actions validation workflow
- co-runner interpretation
- source-of-truth register
- repo/Drive sync rules
- blockers register

## Commit group structure

### Batch 01 — Repository recovery and root promotion

Purpose:

- remove failed ZIP
- promote root README
- establish `.gitignore`
- document nested upload wrapper status

Status: in progress / mostly complete.

### Batch 02 — CCC hierarchy and architecture

Files:

- `config/platform_hierarchy.json`
- `docs/architecture/ccc_platform_architecture.md`
- `docs/architecture/token_hierarchy.md`
- `docs/architecture/membership_roles.md`
- `docs/architecture/library_model.md`
- `docs/architecture/compliance_boundaries.md`

Purpose:

- lock CCC / DAYCC / DAWC / DAW.G / DAW.B hierarchy
- prevent layer confusion
- define member and library concepts
- preserve compliance-safe wording

### Batch 03 — Registry, Drive and source-of-truth spine

Files:

- `docs/source_of_truth_register.md`
- `docs/repo_drive_sync_rules.md`
- `docs/current_state_summary.md`
- `docs/deployment_staging_map.md`
- `docs/rollback_and_snapshot_strategy.md`
- `registries/*.csv`

Purpose:

- define authority hierarchy
- align GitHub with Drive and Sheets
- document staging/export/archive logic
- prepare Codex continuation

### Batch 04 — Schemas, templates and examples

Files:

- `schemas/*.schema.json`
- `templates/*.template.json`
- `examples/**/*.json`

Purpose:

- stabilise validation surface
- provide safe public examples
- support future automation and mint-pack generation

### Batch 05 — Automation and validation

Files:

- `scripts/*.py`
- `apps_script/*.gs`
- `.github/workflows/*.yml`

Purpose:

- validate metadata
- scaffold Drive/Sheets automation
- generate mint-pack/testnet-ready exports

### Batch 06 — Interface and dashboard pathing

Files:

- `docs/interface/*.md`
- `dashboard_widgets/*`

Purpose:

- map Squarespace pages
- define dashboard modules
- connect exported JSON to public/member-facing views
- preserve private/public boundary

### Batch 07 — Handoff and launch readiness

Files:

- `docs/codex_handoff_2026-05-27.md`
- `docs/launch_readiness_checklist.md`
- `docs/unresolved_blockers.md`
- `docs/co_runner_assignment_interpretation.md`

Purpose:

- prepare future continuation
- track blockers
- define final pre-launch checks

## Rollback rules

1. Revert whole batches where possible.
2. Do not mix public interface files with schema changes in the same logical batch.
3. Do not delete staging wrappers until root parity is confirmed.
4. Preserve audit history for manual uploads and transfers.
5. Do not commit secrets, ZIP exports or private Drive files.
