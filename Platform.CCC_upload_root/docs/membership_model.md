# Membership Model

## Member as node

A member is not just a login. A member is a node.

```text
member
+ profile
+ wallet address
+ Drive folder
+ optional personal repo
+ contribution ledger
+ royalty destination
+ permissions
+ linked assets
+ linked projects
```

## Member fields

- member_id
- display_name
- legal_name_optional
- email
- wallet_address
- platform_coin
- collective_coin
- primary_collective_coin
- sub_collective_coin
- status
- drive_folder
- repo_url
- notes

## Membership levels

### CCC platform participant

A member or contributor in the broad Create Your Collective platform.

### DAYCC open/community participant

Open or non-primary member/group under Day A Week.

### DAWC founding collective participant

Founding group or founding member/profile under Day-A-Week-Collective.

### DAW.G / DAW.B sibling member

A member profile in one sibling sub-collective.

Rule:

```text
DAW.G and DAW.B are mutually exclusive.
Both inherit upward into DAWC.
DAWC inherits upward into DAYCC.
DAYCC inherits upward into CCC.
```
