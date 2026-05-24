# Squarespace Interface Plan

## Role

Squarespace is the Web2 front-end and membership access layer.

It should not be treated as the database, minting layer, or private file vault.

## Core pages

```text
/
├── Home
├── About Create Your Collective
├── How It Works
├── Create a Collective
├── Member Login
├── Member Dashboard
├── Collective Dashboard
├── Library Explorer
├── Submit Asset
├── Submit Project
├── Terms
└── Contact
```

## Member Dashboard sections

- Profile
- My Collectives
- My Assets
- My Projects
- My Contributions
- My Royalty Records
- My Mint Packs
- Tasks / Open Requests

## Collective Dashboard sections

- Collective overview
- Members
- Sub-collectives
- Assets
- Projects
- Contracts
- Mint queue
- Permissions
- Build log

## Embed model

The dashboard widgets in `/dashboard_widgets/` are static HTML/JS placeholders designed to be embedded into Squarespace code blocks.

Recommended flow:

```text
Google Sheets
→ exported JSON
→ hosted public/private JSON endpoint
→ Squarespace widget fetches JSON
→ dashboard displays read-only records
```

## Form model

Use Squarespace forms or Google Forms for:

- member onboarding
- asset submission
- project submission
- permissions requests
- mint-pack review requests

Automation should append form results into Google Sheets, then Drive/GitHub processes can generate records.
