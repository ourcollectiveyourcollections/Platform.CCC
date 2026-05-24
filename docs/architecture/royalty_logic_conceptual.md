# Royalty Logic — Conceptual Model

Repository: `NCNBOUWER/Platform.CCC`  
Status: conceptual scaffold only

## Purpose

Define how Platform.CCC records creator, contributor, collective and platform-level royalty/accounting logic before any live token, legal or tax implementation.

This document is not legal advice, tax advice or a financial product design.

## Core principle

The early system records contribution and allocation logic as structured metadata.

```text
contribution
→ attribution
→ permission scope
→ accounting reference
→ review status
→ optional mint-pack field
```

## Precision layers

| Layer | Coin | Precision target | Scope |
|---|---|---:|---|
| Platform | CCC | 7dp+ | platform members and contributors |
| Launch collective | DAYCC | 5–6dp | open/community members and groups |
| Primary collective | DAWC | 6dp | founding groups and profiles |
| Sibling branch | DAW.G | 5dp | DAW.G member profiles and branch assets |
| Sibling branch | DAW.B | 5dp | DAW.B member profiles and branch assets |

## Accounting record model

A royalty/accounting record should include:

- royalty_split_id
- scope
- precision
- recipient_type
- recipient_id
- points
- percentage_display
- status
- notes
- review_required

## Recipient types

Suggested recipient types:

- creator
- contributor
- project_lead
- collective
- sub_collective
- platform
- reserve
- external_collaborator

## Example split

```text
creator: 50%
contributor A: 25%
collective/platform reserve: 25%
```

The percentage display is only an internal accounting view until reviewed.

## Propagation model

Royalty/accounting references may propagate upward by hierarchy:

```text
asset/project split
→ branch split if applicable
→ DAWC split if founding collective scope
→ DAYCC split if launch-community scope
→ CCC platform-level record
```

## No automatic entitlement

A registry row does not automatically create:

- legal ownership
- dividend rights
- security rights
- employment rights
- tax treatment
- guaranteed payment
- investment return

## Dashboard display language

Use:

- royalty accounting record
- contribution allocation
- review status
- split reference
- accounting points

Avoid:

- guaranteed royalties
- dividends
- passive income
- investor return
- ownership-backed yield

## Required review gates

Before any public/live implementation:

1. contributor permission review
2. contract/licence review
3. tax treatment review
4. financial-product/securities review
5. metadata validation
6. public wording review

## MVP rule

The MVP can show internal accounting records, but must mark them:

```text
status: draft_review_required
```

until reviewed.