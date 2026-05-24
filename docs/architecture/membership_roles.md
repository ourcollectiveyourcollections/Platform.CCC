# Membership Roles

Repository: `NCNBOUWER/Platform.CCC`  
Status: canonical membership scaffold

## Purpose

Define member, contributor and admin role types for Platform.CCC.

The membership model must support individual sovereignty, shared libraries, collective access and public/private boundaries.

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
+ royalty accounting route
+ dashboard visibility setting
```

## Role classes

### Platform participant — CCC

A person or group that participates at the Create Your Collective platform layer.

May include:

- contributors
- platform users
- future collective creators
- template creators
- advisors
- system maintainers

Default access:

- platform onboarding docs
- own profile record
- own Drive/member node if approved
- public/shared examples

### Launch community participant — DAYCC

A person or group under the Day A Week launch collective but outside the primary founding collective.

May include:

- open members
- non-primary members
- external groups
- collaborators
- future community participants

Default access:

- DAYCC community dashboard
- relevant public/shared community libraries
- own contribution records

### Primary founding member — DAWC

A founding member or founding group inside Day-A-Week-Collective.

May include:

- founding profiles
- founding branches
- shared founding projects
- initial collective governance participants

Default access:

- DAWC dashboard
- founding collective libraries
- branch assignment
- contribution and project records

### Sibling sub-collective member — DAW.G / DAW.B

A member profile belonging to one sibling branch under DAWC.

Rules:

```text
member ∈ DAW.G OR member ∈ DAW.B
member cannot be in both by default
member inherits upward into DAWC, DAYCC and CCC
```

Default access:

- own branch dashboard
- own member folder
- branch-shared libraries
- approved DAWC libraries

### Contributor

A contributor can provide value without being a full member of a specific branch.

Contributor types:

- visual artist
- musician / DJ
- writer
- legal support
- builder / physical deployment support
- hair / beauty / styling contributor
- hospitality / event contributor
- technical contributor
- admin / operations contributor

Default access:

- project-specific folders
- project-specific contribution records
- limited dashboard visibility

### Collective admin

A collective admin manages one defined scope.

Admin types:

- platform admin
- launch collective admin
- primary collective admin
- sub-collective admin
- project admin
- registry admin
- interface admin

Admin restrictions:

- cannot publish unreviewed public claims
- cannot expose private Drive records
- cannot approve live minting alone
- cannot alter hierarchy without coordinator review

## Permission dimensions

Membership is not one-dimensional. Access should be calculated from:

```text
platform_scope
collective_scope
branch_scope
project_scope
asset_scope
privacy_status
review_status
```

## Folder ownership principle

Each individual should eventually hold their own Drive node and optional minimum personal repo.

The platform should link to these nodes but not seize control of the member's entire working library.

## Dashboard visibility

Suggested visibility states:

- private
- member-only
- collective-only
- branch-only
- public-safe
- archived

## Registry fields

Required member registry fields:

- member_id
- display_name
- email
- wallet_address
- platform_coin
- collective_coin
- primary_collective_coin
- sub_collective_coin
- role_status
- drive_folder
- repo_url
- permission_status
- public_visibility
- notes

## Compliance boundary

Membership and contribution records must not be represented as guaranteed profit, employment status, securities ownership or tax advice.

Use the language of:

- membership record
- contributor record
- profile record
- permission scope
- royalty accounting record
- review status
