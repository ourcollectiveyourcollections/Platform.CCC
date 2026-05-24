# Rollback and Snapshot Strategy

## Purpose

Define how Platform.CCC preserves recoverability during staged buildout and future launch.

## Snapshot types

### Repo snapshot

Method:

- Git commit SHA
- Git tag where appropriate
- release notes
- batched commit grouping

Use for:

- schema versions
- dashboard widget versions
- automation script versions
- public docs versions

### Registry snapshot

Method:

- CSV export from Google Sheets
- timestamped copy in `registries/`
- Drive archive copy where required

Use for:

- member registry
- asset registry
- project registry
- mint queue
- permissions
- audit log

### Drive snapshot

Method:

- copied folder into archive/staging snapshot folder
- manifest listing folder IDs and major files

Use for:

- source assets
- contract drafts
- mint packs
- public export payloads

### Interface snapshot

Method:

- Squarespace page export/manual copy where possible
- screenshot/PDF if required
- GitHub docs mirror of page map and public wording

Use for:

- launch copy
- dashboard layout
- public/private boundary review

## Rollback levels

### Level 0 — local file rollback

Revert a single file commit if isolated.

### Level 1 — batch rollback

Revert a logical batch from `docs/batched_commit_plan.md`.

### Level 2 — release rollback

Return to a tagged pre-launch or post-launch snapshot.

### Level 3 — system freeze

Stop public updates, freeze dashboard export, preserve current state and review blockers.

## Required pre-launch snapshot

Before public launch, create:

- root repo commit SHA
- registry CSV set
- Drive folder manifest
- dashboard export JSON copy
- launch page copy snapshot
- unresolved blockers snapshot

## Deletion rules

Do not delete:

- source Drive files
- registry history
- audit logs
- commit history
- unreviewed legal records

Can delete after parity confirmed:

- failed ZIPs
- nested upload staging wrappers
- duplicate generated exports
- obsolete local examples

## Current rollback point

The repo has already removed the failed ZIP and begun root promotion.

The nested `Platform.CCC_upload_root/` folder remains available as a temporary fallback until root parity is complete.
