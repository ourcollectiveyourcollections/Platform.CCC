# Unresolved Blockers Register

## Purpose

Track Platform.CCC blockers in a form that supports coordinator review, rollback-safe execution and future Codex continuation.

## Active blockers

| ID | Blocker | Severity | Owner lane | Current action |
|---|---|---:|---|---|
| BLK-001 | Nested scaffold files remain under `Platform.CCC_upload_root/` | Medium | Lane B | Promote required root files and retire wrapper after parity check. |
| BLK-002 | Google Sheets live export previously hit API read quota | Low | Lane B | Use CSV snapshots until quota resets or direct export succeeds. |
| BLK-003 | Squarespace dashboard endpoint not yet connected | Medium | Lane C | Define dashboard JSON path and embed widget contracts. |
| BLK-004 | Drive parent folder IDs not locked into Apps Script config | Medium | Lane B | Add config placeholders and confirm IDs before enabling automation. |
| BLK-005 | Mint-pack generation is scaffold only | Medium | Lane C / Lane B | Keep testnet/live mint blocked until metadata, file manifest and legal review are complete. |
| BLK-006 | Legal/tax treatment not reviewed | High | Lane A | Preserve conservative wording; do not imply investment product, guaranteed return or dividend entitlement. |
| BLK-007 | Public/private dashboard boundary not technically enforced yet | High | Lane C | Public dashboards must consume redacted/exported JSON only. |

## Resolved blockers

| ID | Resolution |
|---|---|
| RES-001 | Repository transferred and accessible as `NCNBOUWER/Platform.CCC`. |
| RES-002 | Failed `Platform.CCC.zip` upload removed from root. |
| RES-003 | Root README expanded. |
| RES-004 | Root validation workflow added. |
| RES-005 | Co-runner assignment interpreted and recorded. |

## Escalation rules

Escalate before proceeding if a task requires:

- live wallet interaction
- private key handling
- publication of financial claims
- live member data exposure
- irreversible deletion of source files
- public launch of unreviewed pages

## Next blocker burn-down

1. Create remaining root schemas and templates.
2. Add dashboard/interface docs.
3. Add Codex handoff file.
4. Add deployment staging map.
5. Add rollback/snapshot strategy.
6. Decide whether to delete or archive `Platform.CCC_upload_root/` after parity check.
