# Unresolved Blockers Register

## Purpose

Track Platform.CCC blockers in a form that supports coordinator review, rollback-safe execution and future Codex continuation.

## Active blockers

| ID | Blocker | Severity | Owner lane | Current action |
|---|---|---:|---|---|
| BLK-001 | Non-doc duplicate files may remain under `Platform.CCC_upload_root/` | Medium | Lane B | Documentation duplicates removed; continue verified cleanup of schema/template/script/widget/example/registry duplicates or complete manual directory review. |
| BLK-002 | Google Sheets live export previously hit API read quota | Low | Lane B | Use CSV snapshots until quota resets or direct export succeeds. |
| BLK-003 | Squarespace dashboard endpoint not yet connected | Medium | Lane C | Dashboard export example and public field allowlist now exist; next step is endpoint/static JSON hosting path. |
| BLK-004 | Real Drive folder IDs not confirmed | Medium | Lane B | Config templates created; replace placeholders only after operator confirms folder IDs and permissions. |
| BLK-005 | Mint-pack generation is scaffold only | Medium | Lane C / Lane B | Mint-pack schema/example now exist; keep testnet/live mint blocked until metadata, file manifest and review are complete. |
| BLK-006 | Legal/tax treatment not reviewed | High | Lane A | Preserve conservative wording; do not imply investment product, guaranteed return or dividend entitlement. |
| BLK-007 | Public/private dashboard boundary not technically enforced in production yet | High | Lane C | Public dashboard field allowlist and deny-by-default Apps Script export exist; production endpoint must use these controls. |
| BLK-008 | Wrapper directory cannot be enumerated through available connector | Low | Lane B | Continue direct verified fetch/delete or perform manual GitHub web review for remaining wrapper contents. |

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
| RES-010 | Automation scripts and dashboard widgets represented at root. |
| RES-011 | Registry CSV snapshots represented at root. |
| RES-012 | Contract templates verified at root. |
| RES-013 | Wrapper documentation duplicates removed with verified SHAs. |
| RES-014 | Apps Script dashboard export updated to deny-by-default safe-field filtering. |

## Escalation rules

Escalate before proceeding if a task requires:

- live wallet interaction
- private key handling
- publication of financial claims
- live member data exposure
- irreversible deletion of source files
- public launch of unreviewed pages

## Next blocker burn-down

1. Continue verified wrapper cleanup for schemas/templates/scripts/widgets/examples/registries.
2. Confirm whether any unique required file remains only under `Platform.CCC_upload_root/`.
3. Add static dashboard export hosting path decision.
4. Confirm real Drive folder IDs externally before replacing config placeholders.
5. Keep mint/testnet path blocked until review gates are cleared.
