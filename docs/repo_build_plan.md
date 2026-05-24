# Repository Build Plan

## Current build objective

Convert `NCNBOUWER/Platform.CCC` into the canonical code-facing home for **Create Your Collective / CCC**.

The repo transfer is complete and write access is now active.

## Completed

- Repository transferred under `NCNBOUWER/Platform.CCC`.
- Failed `Platform.CCC.zip` upload removed.
- Root `README.md` expanded and promoted.
- Current scaffold source exists under `Platform.CCC_upload_root/`.

## Immediate actions

1. Promote the contents of `Platform.CCC_upload_root/` to repository root.
2. Keep root-level README and folders only.
3. Remove the nested `Platform.CCC_upload_root/` wrapper after its contents are promoted.
4. Keep schemas and templates stable as the source of truth for automation.
5. Use `registries/*.csv` as portable snapshots of the Google Sheets registry.

## Build lanes

### Lane A — Registry and metadata

- Stabilise CSV and JSON field names.
- Confirm Google Sheets tabs map one-to-one with registry CSVs.
- Add validation before mint-pack generation.

### Lane B — Drive automation

- Confirm parent folder IDs for platform, CCC, library, and archive folders.
- Wire Apps Script member folder creation.
- Add audit logging for every automated folder/file operation.

### Lane C — Squarespace interface

- Embed dashboard widgets in protected pages.
- Connect widgets to generated dashboard JSON.
- Keep raw Drive files private unless intentionally published.

### Lane D — Mint pack and Ethereum readiness

- Generate mint packs locally first.
- Use testnet only after permissions and metadata pass review.
- Do not commit private keys, seed phrases, or live wallet secrets.

## Completion criteria for Stage 0

- Root repo renders correctly.
- GitHub Actions validation passes.
- Failed ZIP is absent.
- No nested upload wrapper remains.
- README, docs, schemas, templates, scripts and registries are all visible at root.
