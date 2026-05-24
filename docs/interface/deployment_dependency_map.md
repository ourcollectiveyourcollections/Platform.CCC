# Deployment Dependency Map

Repository: `NCNBOUWER/Platform.CCC`  
Scope: Create Your Collective / CCC  
Status: pre-launch scaffold

## Purpose

Map dependencies between GitHub, Google Drive, Google Sheets, Squarespace and future Ethereum/testnet pathways.

## Dependency graph

```text
GitHub schemas/templates/scripts
        ↓
Google Sheets registry rows
        ↓
Dashboard export JSON
        ↓
Squarespace widgets/pages
        ↓
Member/public interface

Google Drive source assets
        ↓
Asset registry references
        ↓
Mint-pack manifests
        ↓
Ethereum testnet candidate
```

## System dependency table

| System | Depends on | Provides | Blockers |
|---|---|---|---|
| GitHub root repo | correct hierarchy, repo access | schemas, docs, scripts, widgets | nested staging wrapper, incomplete schemas |
| Google Sheets | tab structure, field alignment | live registry rows | API quota, permissions |
| Google Drive | folder IDs, permissions | source assets, member folders | folder IDs not config-locked |
| Squarespace | page map, dashboard JSON, widgets | front-end interface | endpoint not connected |
| Apps Script | folder IDs, sheet names | automation | cannot run safely until IDs confirmed |
| GitHub Actions | example JSON, validation script | CI validation | workflow triggers only on relevant changes |
| Ethereum testnet | metadata, manifest, wallet procedure | proof-layer test | legal/tax/security review blockers |

## Public deployment dependencies

Public deployment requires:

1. approved page copy
2. approved dashboard fields
3. approved dashboard JSON endpoint
4. no private Drive or Sheet exposure
5. compliance boundaries checked
6. fallback static page available

## Private beta dependencies

Private beta requires:

1. member login path
2. test dashboard data
3. member profile schema
4. asset registry schema
5. project registry schema
6. Drive member folder model
7. basic support/recovery workflow

## Testnet dependency chain

```text
asset record approved
→ project record approved
→ contributor/royalty split reviewed
→ file manifest generated
→ NFT metadata generated
→ validation passes
→ testnet wallet prepared externally
→ testnet mint executed manually or through reviewed script
```

## Rollback dependencies

Before any public/deployment change, preserve:

- current Git commit SHA
- registry CSV snapshot
- dashboard export copy
- Drive folder manifest
- page copy snapshot

## Current unresolved dependency

The largest dependency is root parity:

`Platform.CCC_upload_root/` still contains original scaffold files. The root repo must either promote or supersede those files before the wrapper is retired.
