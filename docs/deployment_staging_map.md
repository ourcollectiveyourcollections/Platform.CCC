# Deployment Staging Map

## Purpose

Define how Platform.CCC moves from private work to public/member-facing deployment without breaking source-of-truth boundaries.

## Staging layers

```text
private source
→ internal staging
→ reviewed export
→ pre-publish preview
→ live public/member interface
→ archive / rollback snapshot
```

## Stage 1 — Private source

Canonical systems:

- Google Drive private folders
- Google Sheets live registry tabs
- GitHub source docs, schemas, scripts and templates

Contains:

- raw files
- private member data
- contract drafts
- internal notes
- unreviewed metadata
- unreviewed royalty accounting records

Public exposure: none.

## Stage 2 — Internal staging

Canonical systems:

- GitHub branch or root staging docs
- Drive staging folders
- Sheets review statuses

Contains:

- draft dashboard exports
- candidate metadata
- candidate mint packs
- interface previews
- review checklists

Public exposure: none unless explicitly published to a private preview.

## Stage 3 — Reviewed export

Canonical systems:

- generated JSON export
- registry CSV snapshot
- approved dashboard payload

Contains:

- redacted approved records
- public-safe display fields
- dashboard-ready arrays
- status fields

Public exposure: controlled.

## Stage 4 — Pre-publish preview

Canonical systems:

- Squarespace hidden/private pages
- dashboard widget preview
- static fallback pages

Contains:

- final public wording
- approved dashboard display
- public-safe library explorer
- launch copy

Public exposure: restricted preview.

## Stage 5 — Live interface

Canonical systems:

- Squarespace public/member pages
- approved dashboard widgets
- optional public static JSON export

Contains:

- public platform description
- public library explorer
- member dashboards
- collective dashboards

Public exposure: live.

## Stage 6 — Archive / rollback snapshot

Canonical systems:

- Drive archive folder
- GitHub tagged release or rollback branch
- registry snapshot CSVs

Contains:

- pre-launch snapshot
- post-launch snapshot
- generated exports
- release notes
- blockers resolved/remaining

## Deployment checkpoints

Before any public deployment, confirm:

- no private Drive links in public export
- no legal names unless approved
- no emails in public JSON
- no wallet secrets or keys anywhere
- no unreviewed contract text
- no guaranteed-return language
- dashboard widgets fail closed
- rollback snapshot exists

## Current status

Deployment is not live. Platform.CCC is in Stage 0/1 scaffold and internal staging.
