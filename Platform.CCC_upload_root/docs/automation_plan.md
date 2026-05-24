# Automation Plan

## Automation A — Member onboarding

Trigger:

- Squarespace form
- Google Form
- manual admin entry

Actions:

1. Create `member_id`.
2. Append row to `Members`.
3. Create Drive member folder.
4. Generate `member_profile.json`.
5. Add permission record.
6. Notify admin/member.
7. Set status to `scaffold` or `active`.

## Automation B — Asset submission

Trigger:

- asset upload and submission form

Actions:

1. Append row to `Assets`.
2. Validate asset category.
3. Link Drive file/folder.
4. Generate asset metadata JSON.
5. Add audit log row.
6. Set status to `submitted`.

## Automation C — Project submission

Trigger:

- project form submission

Actions:

1. Append row to `Projects`.
2. Link assets, contracts and contributors.
3. Generate project JSON.
4. Set review status.
5. Notify collective admin.

## Automation D — Mint-pack build

Trigger:

- asset/project status changes to `approved`

Actions:

1. Validate metadata.
2. Build file manifest.
3. Build royalty split JSON.
4. Build NFT metadata JSON.
5. Output to mint pack folder.
6. Add row to `Mint Queue`.

## Automation E — Dashboard export

Trigger:

- manual admin run or scheduled run

Actions:

1. Read approved rows from Sheets.
2. Generate filtered JSON files.
3. Publish to safe endpoint or GitHub Pages/static path.
4. Squarespace widgets fetch the exported JSON.
