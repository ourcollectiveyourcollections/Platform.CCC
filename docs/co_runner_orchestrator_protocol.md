# Platform.CCC Co-Runner Orchestrator Protocol

Operator: Nathaniel Bouwer  
Repository: `NCNBOUWER/Platform.CCC`  
Project: Create Your Collective / CCC  
Status: active scaffold / orchestration layer

## Purpose

This protocol defines how Platform.CCC should coordinate the three co-runners now that an orchestrator/coordinator layer is in place.

The orchestrator is a routing, alignment and quality-control role. It does not replace the co-runners and does not bypass the private-to-public approval gate.

## Communication channel hierarchy

### Level 1 — NCNB / NCNBOUWER internal channel

Function:

- private founder-level architecture
- holistic hidden R&D
- repo ownership
- system design
- draft coordination
- internal review

Primary surfaces:

- `NCNBOUWER/Platform.CCC`
- relevant NCNBOUWER internal repositories
- local/private Drive and desktop staging

Rules:

- This is the canonical private/internal control layer.
- Sensitive or unreviewed materials stay here until approved.
- Do not publish directly from private working files.

### Level 2 — Achilles / operator BOH channel

Function:

- operator platform execution
- back-of-house automation
- database and registry handling
- task routing
- validation workflows
- dashboard exports

Primary surfaces:

- Achilles operator tooling
- `achillesromer-coder` where explicitly used
- Google Sheets / Drive automation
- Apps Script
- GitHub Actions

Rules:

- This layer prepares approved operational outputs.
- It can generate, validate, transform and package.
- It must not expose private raw data.
- It must not sign transactions or publish unreviewed legal/financial claims.

### Level 3 — Public / deployed interface channel

Function:

- website-facing outputs
- member dashboards
- public library explorer
- onboarding pages
- published explanatory language

Primary surfaces:

- Squarespace
- public dashboard widgets
- public/static JSON exports after review
- member login interface

Rules:

- Public surfaces consume approved exports only.
- Public pages do not read private sheets or private Drive folders directly.
- Public wording must avoid unreviewed investment, dividend, yield or financial-product language.

### Level 4 — Future Web 4.0 / Cognigrex backbench

Function:

- future agentic coordination
- pattern recognition
- cross-system learning
- persistent multi-agent operations

Rules:

- Future-facing only unless explicitly activated.
- Not part of the current MVP execution path.

## Private-to-public gate

Platform.CCC must maintain a hard disconnect between private work and public display.

```text
private/internal draft
→ registry validation
→ operator review
→ redaction / approval
→ public export
→ website/dashboard display
```

No public surface should directly consume private Drive files, private sheet rows, unreviewed contracts, wallet secrets, identity documents or unreviewed financial claims.

## Three co-runner model

```text
Coordinator / Orchestrator
├── Co-runner A — Registry and data integrity
├── Co-runner B — Interface and member experience
└── Co-runner C — Automation, repo and mint-pack readiness
```

### Co-runner A — Registry and data integrity

Owns:

- Google Sheets registry model
- CSV snapshots
- schema field alignment
- audit logs
- member/project/asset record integrity
- contribution ledger consistency

Primary outputs:

- registry snapshots
- field dictionaries
- audit logs
- data-quality checks
- validation exceptions

### Co-runner B — Interface and member experience

Owns:

- Squarespace pages
- dashboard widgets
- member dashboard UX
- collective dashboard UX
- public wording
- onboarding flow

Primary outputs:

- dashboard copy
- widget files
- page maps
- public/private wording checks
- onboarding route maps

### Co-runner C — Automation, repo and mint-pack readiness

Owns:

- GitHub workflows
- Python validation scripts
- Apps Script scaffolds
- metadata templates
- mint-pack generation
- testnet readiness

Primary outputs:

- validation scripts
- GitHub Actions
- Apps Script modules
- metadata bundles
- mint-pack folders
- release checklists

## Orchestrator duties

The orchestrator maintains:

- current task queue
- current build status
- repo branch/commit notes
- registry alignment log
- public/private boundary log
- next-release checklist
- unresolved blocker register

The orchestrator must not:

- sign transactions
- hold private keys
- publish unreviewed financial language
- expose private data to public dashboards
- bypass operator approval
- merge unrelated project claims into Platform.CCC without explicit bridge instruction

## Separation rule

Platform.CCC remains separate from other projects unless explicitly bridged.

Allowed shared patterns:

- registry-first architecture
- repository discipline
- dashboard/interface practices
- automation safety rules
- approval-gated publication

Not automatically imported:

- Römer Industries claims
- EMC² claims
- public sovereign-capability framing
- unrelated IP
- unrelated stakeholder claims

## Current execution posture

Current repo: `NCNBOUWER/Platform.CCC`  
Current branch: `main`  
Current status: Stage 0 scaffold and orchestration buildout  
Next build lane: root-level schema/template/script finalisation and nested scaffold retirement.
