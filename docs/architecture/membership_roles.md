# Membership Roles

## Purpose

Define member, contributor and admin role types for Platform.CCC.

## Member as node

A member is not just a login.

A member is a structured node containing:

```text
identity/profile
+ wallet reference
+ Drive folder
+ optional personal repo
+ contribution record
+ permission status
+ linked assets
+ linked projects
+ royalty accounting references
```

## Role classes

### Platform participant

Layer: CCC

A person or group with a profile under Create Your Collective.

May include:

- creator
- contributor
- admin
- observer
- external collaborator
- future customer collective admin

### Launch collective participant

Layer: DAYCC

A member or group sitting under the broad Day A Week launch community.

This includes open and non-primary members or groups.

### Primary collective participant

Layer: DAWC

A founding member or founding group profile under Day-A-Week-Collective.

### Sibling sub-collective member

Layer: DAW.G or DAW.B

Member profile in one founding sibling branch.

Rule:

```text
A member may be DAW.G or DAW.B, not both.
```

## Functional roles

| Role | Function | Example permissions |
|---|---|---|
| Platform Admin | System-level governance | repo/admin, master Drive, registry oversight |
| Collective Admin | Collective-level coordination | manage assigned collective records |
| Creator | Primary asset creator | submit assets, approve derived use where assigned |
| Contributor | Adds work to a project | submit contributions, receive attribution |
| Reviewer | Checks wording/metadata/permissions | mark review status |
| Public Viewer | Consumes published outputs | read-only public dashboard access |

## Contributor categories

Possible categories:

- visual artist
- tattoo artist
- musician / DJ
- legal contributor
- physical builder
- writer
- researcher
- barista / hospitality creator
- social media contributor
- events contributor
- business/project operator
- community support worker

These are not fixed castes. They are signals from contribution history.

## Profile record fields

Minimum fields:

- member_id
- display_name
- wallet_address_optional
- platform_coin
- collective_coin
- primary_collective_coin
- sub_collective_coin
- role_status
- Drive folder
- repo URL optional
- skills
- notes

## Public/private split

Public profiles may show:

- display name
- creator category
- public profile description
- approved collections
- approved public links

Private records may include:

- email
- legal name if needed
- wallet details
- contract drafts
- permission notes
- private Drive links

Private fields must not be exported into public dashboard JSON unless explicitly approved.
