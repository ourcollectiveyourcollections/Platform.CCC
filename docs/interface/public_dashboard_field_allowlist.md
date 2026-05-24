# Public Dashboard Field Allowlist

Repository: `NCNBOUWER/Platform.CCC`  
Scope: Create Your Collective / CCC dashboard exports  
Status: canonical public/private control scaffold

## Purpose

Define which fields may be exported from private registries into public or member-facing dashboard JSON.

Default rule:

```text
private unless explicitly allowlisted
```

## Public-safe platform fields

Allowed:

- platform.name
- platform.coin
- platform.public_status
- platform.description_public

Not allowed:

- internal owner notes
- private admin emails
- raw Drive IDs if private
- internal API or automation references

## Public-safe collective fields

Allowed:

- collective_id
- name
- coin
- coin_full_name
- scope
- asset_class
- public_status
- public_description
- display_order

Not allowed:

- private notes
- admin-only notes
- raw private Drive folder IDs
- unreviewed revenue/allocation assumptions

## Public-safe sub-collective fields

Allowed:

- sub_collective_id
- name
- coin
- coin_full_name
- parent_collective_id
- asset_class
- public_status
- public_description
- display_order

Not allowed:

- member private data
- internal branch notes
- raw private Drive paths

## Public-safe member/profile fields

Allowed only after member approval:

- member_id or public_profile_id
- display_name
- public_alias
- approved_bio
- approved_skills
- approved_collective_scope
- approved_profile_image_url
- public_wallet_address only if explicitly approved

Not allowed:

- legal name unless explicitly approved for publication
- private email
- phone number
- home/location data
- private wallet notes
- identity documents
- private folder IDs
- private repo URLs
- unreviewed allocation details

## Public-safe asset fields

Allowed:

- asset_id
- asset_title
- asset_type
- creator_display_name if approved
- contributor_display_names if approved
- collective_scope
- public_status
- approved_description
- approved_preview_url
- licence_summary_public
- review_required flag

Not allowed:

- raw private file links
- unreviewed source folders
- private contract paths
- unreviewed allocation records
- internal notes

## Public-safe project fields

Allowed:

- project_id
- project_title
- project_type
- collective_scope
- approved_summary
- public_status
- linked_public_assets
- review_required flag

Not allowed:

- private project notes
- private member data
- internal contract paths
- unreviewed financial/tax/legal language

## Mint queue fields

Public view may show only:

- mint_pack_id
- asset_id
- project_id
- token_standard_target
- network
- public_status
- review_required

Do not expose:

- private metadata paths
- raw file manifests
- wallet credentials
- signing information
- contract deployment details

## Export rule

Any export script must apply this allowlist before producing public/member-facing JSON.

If a field is not listed here, it is excluded by default.

## Review rule

Public export requires:

1. schema validation
2. allowlist filtering
3. operator review
4. dashboard preview check
5. no private Drive/Sheet exposure
