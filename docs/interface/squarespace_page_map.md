# Squarespace Page Map

## Purpose

Define the Web2 front-end page hierarchy for Create Your Collective / CCC.

Squarespace is the public/member-facing interface. It is not the canonical database, raw file store, or minting engine.

## Core public pages

```text
/
├── Home
├── About
├── How It Works
├── Create a Collective
├── Day A Week Case Study
├── Library Explorer
├── Terms
└── Contact
```

## Member-gated pages

```text
/member
├── Login
├── Member Dashboard
├── My Profile
├── My Assets
├── My Projects
├── My Contributions
├── My Royalty Records
├── My Mint Packs
└── Support / Requests
```

## Collective-gated pages

```text
/collective
├── Collective Dashboard
├── Members
├── Sub-Collectives
├── Assets
├── Projects
├── Contracts
├── Mint Queue
├── Permissions
└── Build Log
```

## Admin-gated pages

```text
/admin
├── Registry Overview
├── Intake Queue
├── Review Queue
├── Export Dashboard JSON
├── Audit Log
├── Blockers
└── Publish Gate
```

## Suggested slugs

| Page | Suggested slug | Access |
|---|---|---|
| Home | `/` | public |
| About | `/about` | public |
| How It Works | `/how-it-works` | public |
| Create a Collective | `/create` | public/form |
| Day A Week | `/day-a-week` | public/case study |
| Library Explorer | `/library` | public filtered only |
| Login | `/member/login` | member |
| Member Dashboard | `/member/dashboard` | member |
| Collective Dashboard | `/collective/dashboard` | collective/admin |
| Admin Review | `/admin/review` | admin |
| Terms | `/terms` | public |

## Data access rule

Squarespace pages should consume approved exports only.

```text
Google Sheets private/live rows
→ reviewed export JSON
→ dashboard widget
→ Squarespace page
```

Squarespace should not directly expose private Drive folders or private Sheets.

## Dashboard widget placement

| Widget | Page |
|---|---|
| `member_dashboard.html` | `/member/dashboard` |
| `collective_dashboard.html` | `/collective/dashboard` |
| `library_explorer.html` | `/library` and `/collective/assets` |

## Copy rule

All public copy must avoid:

- guaranteed returns
- dividend claims
- investment language
- securities framing
- unreviewed royalty promises

Preferred public framing:

```text
Create structured, permission-aware, Web3-ready creator and collective libraries.
```

## Current status

The page map is ready for Squarespace build planning. Live endpoint and dashboard JSON export remain pending.
