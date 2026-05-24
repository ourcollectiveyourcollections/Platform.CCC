# Frontend / Backend Contracts

## Purpose

Define the contract between Squarespace/front-end displays and the backend source systems for Platform.CCC.

## Contract principle

The frontend must not read raw private systems directly.

```text
private source systems
→ reviewed export
→ frontend widget
→ public/member display
```

## Backend source systems

| Backend | Canonical responsibility |
|---|---|
| Google Drive | raw assets, member folders, contract drafts, mint-pack files |
| Google Sheets | live registry rows and status tracking |
| GitHub | schemas, templates, scripts, widgets, docs, safe examples |
| Apps Script | Drive/Sheets automation and dashboard export generation |
| Python scripts | local validation and mint-pack generation |
| Ethereum/testnet | optional downstream proof layer |

## Frontend systems

| Frontend | Responsibility |
|---|---|
| Squarespace | public pages, member login pages, gated dashboards |
| Dashboard widgets | rendered read-only views from approved JSON |
| Public Library Explorer | approved records only |
| Member Dashboard | member-filtered approved/private records |
| Admin Dashboard | review and export control, not public |

## Data contract: dashboard export

Recommended top-level JSON:

```json
{
  "exported_at": "ISO-8601 timestamp",
  "platform": {},
  "collectives": [],
  "sub_collectives": [],
  "members": [],
  "assets": [],
  "projects": [],
  "contracts": [],
  "mint_queue": [],
  "notices": []
}
```

## Public-safe export fields

Public exports may include:

- public display name
- approved creator category
- approved collective name
- approved asset title
- approved project title
- public status
- public description
- public media URL if intentionally published

Public exports must exclude:

- emails
- legal names unless explicitly approved
- raw Drive folder IDs
- private contract drafts
- wallet secrets
- seed phrases
- identity documents
- unreviewed royalty allocations
- unreviewed financial wording

## Member-filtered exports

Member dashboards may include more data, but only after authentication and approval.

Member dashboard data may include:

- own profile status
- own submitted assets
- own contribution rows
- own project links
- own mint-pack candidates
- own review requests

## Admin exports

Admin dashboards may include:

- blocker register
- audit log
- registry validation status
- private review queues
- export previews

Admin exports must remain gated.

## Endpoint placeholder

Until a secure hosted endpoint exists, the widget source should remain configurable:

```js
loadMemberDashboard('/dashboard_export.json')
```

Future options:

- GitHub Pages static JSON export
- Google Apps Script web app endpoint
- Cloudflare Worker proxy
- Supabase/Firebase endpoint
- Squarespace code block with embedded JSON

## Failure behaviour

Widgets must fail closed.

If the endpoint is unavailable, display:

```text
Dashboard data unavailable.
```

Do not display raw errors, private endpoint URLs or authentication details.

## Current status

This contract is architectural. Authentication and endpoint hardening are not implemented yet.
