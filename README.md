# Platform.CCC

**Create Your Collective** is the platform layer for structured creator, contributor, project, contract, royalty, and collection libraries.

This repository is the code-facing scaffold for:

- platform hierarchy
- member/profile schemas
- asset/project schemas
- Google Drive + Sheets automation
- Squarespace dashboard widgets
- Ethereum-ready mint-pack exports
- legal/compliance guardrails
- the first launch case: **Day A Week**

## Correct hierarchy

```text
Create Your Collective
Coin: CCC — Creatives' Coin Collections
Asset class: members + contributors; 7dp+ royalty precision
Mint / wallet target: Ethereum

└── Day A Week
    Coin: DAYCC — Day-A-Week Community Coin
    Asset class: open / non-primary members and groups; 5–6dp royalty precision

    └── Day-A-Week-Collective
        Coin: DAWC — Day-A-Week Collective
        Asset class: founding groups, founding members, profiles; 6dp royalty precision

        ├── Day-A-Week Girls
        │   Coin: DAW.G — Da.Gorls
        │   Asset class: member profiles; 5dp royalty precision
        │
        └── Day-A-Week Boys
            Coin: DAW.B — Da.Boiis
            Asset class: member profiles; 5dp royalty precision
```

## Operating model

The platform is **Web2-first / Web3-ready**.

- **Google Drive** holds files, folders, source assets, contracts, mint-pack files, and personal/member libraries.
- **Google Sheets** holds live registries, contribution ledgers, permissions, and mint queues.
- **GitHub** holds canonical schemas, templates, scripts, dashboard widgets, and automation code.
- **Squarespace** provides the Web2 front-end, membership login, dashboard pages, forms, and embedded widgets.
- **Canva** supports collaborative art and layer creation.
- **Ollama** supports local AI drafting, metadata generation, and workflow guidance.
- **Ethereum** is the later wallet/mint/provenance target after review.

## Security rule

Do not commit:

- private keys
- seed phrases
- wallet recovery information
- passwords
- personal identity documents
- live legal agreements containing signatures
- unreviewed financial promises

## Build status

The failed ZIP upload has been removed. The next build pass promotes the scaffold currently under `Platform.CCC_upload_root/` into the repository root and finalises the automation-ready folder layout.

## Primary folders

```text
docs/
schemas/
templates/
scripts/
apps_script/
dashboard_widgets/
examples/
registries/
config/
.github/workflows/
```

## Implementation rule

Drive holds files. Sheets hold live records. GitHub holds schemas and automation. Squarespace displays controlled outputs. Ethereum is only used once metadata, permissions, and legal framing are reviewed.
