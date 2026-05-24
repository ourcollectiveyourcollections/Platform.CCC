# Unresolved Blockers Register

## Purpose

Track Platform.CCC blockers in a form that supports coordinator review, rollback-safe execution and future Codex continuation.

## Active blockers

| ID | Blocker | Severity | Owner lane | Current action |
|---|---|---:|---|---|
| BLK-001 | Nested scaffold files remain under `Platform.CCC_upload_root/` | Medium | Lane B | Root parity checklist created; promote automation, widgets and registry CSVs before retiring wrapper. |
| BLK-002 | Google Sheets live export previously hit API read quota | Low | Lane B | Use CSV snapshots until quota resets or direct export succeeds. |
| BLK-003 | Squarespace dashboard endpoint not yet connected | Medium | Lane C | Dashboard export example and public field allowlist now exist; next step is endpoint/static JSON hosting path. |
| BLK-004 | Real Drive folder IDs not confirmed | Medium | Lane B | Config templates created; replace placeholders only after operator confirms folder IDs and permissions. |
| BLK-005 | Mint-pack generation is scaffold only | Medium | Lane C / Lane B | Mint-pack schema/example now exist; keep testnet/live mint blocked until metadata, file manifest and review are complete. |
| BLK-006 | Legal/tax treatment not reviewed | High | Lane A | Preserve conservative wording; do not imply investment product, guaranteed return or dividend entitlement. |
| BLK-007 | Public/private dashboard boundary not technically enforced yet | High | Lane C | Public dashboard field allowlist created; automation must enforce deny-by-default exports. |
| BLK-008 | Automation scripts and dashboard widgets still need root parity check | Medium | Lane B / Lane C | Promote or supersede scripts/widgets from staging wrapper in next pass. |

## Resolved blockers

| ID | Resolution |
|---|---|
| RES-001 | Repository transferred and accessible as `NCNBOUWER/Platform.CCC`. |
| RES-002 | Failed `Platform.CCC.zip` upload removed from root. |
| RES-003 | Root README expanded. |
| RES-004 | Root validation workflow added. |
| RES-005 | Co-runner assignment interpreted and recorded. |
| RES-006 | Contract, contribution, allocation, mint-pack and dashboard export schemas added. |
| RES-007 | Public dashboard field allowlist added. |
| RES-008 | Drive folder config and Drive manifest templates added. |
| RES-009 | Root parity checklist added. |

## Escalation rules

Escalate before proceeding if a task requires:

- live wallet interaction
- private key handling
- publication of financial claims
- live member data exposure
- irreversible deletion of source files
- public launch of unreviewed pages

## Next blocker burn-down

1. Promote or supersede automation scripts from `Platform.CCC_upload_root/`.
2. Promote or supersede dashboard widgets from `Platform.CCC_upload_root/`.
3. Promote or supersede registry CSV snapshots.
4. Add a dashboard export script that enforces the public field allowlist.
5. Add or update launch/deployment staging files if missing.
6. Decide whether to delete or archive `Platform.CCC_upload_root/` after parity check.
