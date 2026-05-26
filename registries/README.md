# Registry Snapshots

These CSV files are portable snapshots for Platform.CCC.

## Authority rule

Google Sheets remains the live registry system.

The CSV files in this folder are:

- portable references
- repo-readable snapshots
- dashboard export inputs for local testing
- fallback continuity files

They are not the live database.

## Current snapshots

```text
collectives.csv
sub_collectives.csv
members.csv
assets.csv
projects.csv
mint_queue.csv
```

## Privacy rule

Do not add sensitive fields to public-safe registry snapshots.

Avoid committing:

- legal names unless approved
- private emails
- phone numbers
- wallet private keys
- seed phrases
- identity documents
- raw private Drive links
- unreviewed contract text

## Export rule

Public/member-facing exports must be generated through:

```text
scripts/export_dashboard_json.py
```

or equivalent allowlist-filtered Apps Script.

Never point a public dashboard directly at private Google Sheets or raw private Drive folders.
