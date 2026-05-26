# Platform.CCC Upload Wrapper Retirement Log

Repository: `NCNBOUWER/Platform.CCC`  
Wrapper: `Platform.CCC_upload_root/`  
Status: partial retirement in progress

## Purpose

Track the controlled retirement of the manual-upload wrapper folder after root-level parity was established.

## Why the wrapper exists

The first manual upload placed the scaffold under:

```text
Platform.CCC_upload_root/
```

instead of directly at repository root.

The root repo now contains the promoted/superseding scaffold. The wrapper is therefore a staging duplicate, not the canonical source.

## Retirement method

The connector cannot list directory contents directly through the available file-fetch API. Therefore, deletion is being performed only for confirmed duplicate paths with verified blob SHAs.

No guessed deletion should be committed.

## Removed confirmed duplicates

| Path | Action | Commit |
|---|---|---|
| `Platform.CCC_upload_root/README.md` | removed | `7cfe552b639e9c51ccbbca14edda3ccd85900245` |
| `Platform.CCC_upload_root/package_manifest.json` | removed | `40f877b1b8a04c24a3a81841a2b5c7a197eccbae` |
| `Platform.CCC_upload_root/docs/handoff_summary.md` | removed | `f8747e3ad3293672e23e96bcc7034e41e6f3a8ab` |
| `Platform.CCC_upload_root/docs/implementation_plan.md` | removed | `86a4cec9ce7aae5f58ecc889a76bd3bf21baf85d` |
| `Platform.CCC_upload_root/docs/drive_mapping.md` | removed | `d65e7b23d48449b586b50a388158a95814157265` |
| `Platform.CCC_upload_root/docs/squarespace_interface.md` | removed | `3e3d834de7a2a94cc429b9eb2a8fc3b50c50fac8` |
| `Platform.CCC_upload_root/docs/membership_model.md` | removed | `0e718f21cd3c932be9beda81b1ff471af286863a` |
| `Platform.CCC_upload_root/docs/permissions_model.md` | removed | `bdf05dab2cbf6ae128b68806efce6887b5a9302b` |
| `Platform.CCC_upload_root/docs/automation_plan.md` | removed | `1faea0663cd277125f17f5ee29bd716c141348e5` |
| `Platform.CCC_upload_root/docs/legal_guardrails.md` | removed | `5236c478698f7f7dff70d899d87a0226bdadfece` |
| `Platform.CCC_upload_root/docs/upload_instructions.md` | removed | `e58f3d449c710e90d9ba81d4d43ed2541afe22d5` |
| `Platform.CCC_upload_root/docs/roadmap.md` | removed | `86867b6180800cbe0484efedb37b755749c6912c` |

## Remaining retirement procedure

1. Identify a wrapper path.
2. Fetch the wrapper file directly.
3. Confirm it is duplicated or superseded at root.
4. Delete using the verified blob SHA.
5. Update this log.
6. Only mark wrapper fully retired after no known required duplicates remain.

## Do not delete blindly

Do not use guessed paths for final deletion unless the file has been fetched and verified.

## Current recommendation

Known wrapper documentation duplicates are removed. Continue with verified cleanup of schema/template/script/widget/example/registry duplicates, or perform a manual GitHub directory review and delete remaining wrapper contents from the web interface if faster.
