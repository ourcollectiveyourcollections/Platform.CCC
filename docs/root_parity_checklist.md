# Root Parity Checklist

Repository: `NCNBOUWER/Platform.CCC`  
Target wrapper: `Platform.CCC_upload_root/`  
Status: active parity check

## Purpose

Ensure all required files from the original manual upload scaffold are represented at repository root before the staging wrapper is retired.

## Rule

Do not delete `Platform.CCC_upload_root/` until every required file is either:

1. promoted to root,
2. superseded by a better root file,
3. intentionally archived, or
4. explicitly marked unnecessary.

## Root parity groups

### Documentation

- [x] `README.md`
- [x] `docs/handoff_summary.md` or superseded by Codex handoff/current state files
- [x] `docs/implementation_plan.md`
- [x] `docs/drive_mapping.md`
- [x] `docs/squarespace_interface.md` or superseded by interface docs
- [x] `docs/membership_model.md` or superseded by architecture membership roles
- [x] `docs/permissions_model.md` or superseded by repo/Drive sync + allowlist docs
- [x] `docs/legal_guardrails.md` or superseded by compliance boundaries
- [x] `docs/roadmap.md` or superseded by launch readiness/current state docs

### Architecture / Coordination

- [x] `config/platform_hierarchy.json`
- [x] `docs/co_runner_assignment_interpretation.md`
- [x] `docs/co_runner_orchestrator_protocol.md`
- [x] `docs/source_of_truth_register.md`
- [x] `docs/repo_drive_sync_rules.md`
- [x] `docs/unresolved_blockers.md`
- [x] `docs/codex_handoff_2026-05-27.md`

### Schemas

- [x] `schemas/collective.schema.json`
- [x] `schemas/member.schema.json`
- [x] `schemas/asset.schema.json`
- [x] `schemas/project.schema.json`
- [x] `schemas/contract_record.schema.json`
- [x] `schemas/contribution.schema.json`
- [x] `schemas/allocation_record.schema.json`
- [x] `schemas/mint_pack.schema.json`
- [x] `schemas/dashboard_export.schema.json`

### Templates

- [x] `templates/member.template.json`
- [x] `templates/asset.template.json`
- [x] `templates/project.template.json`
- [x] `templates/allocation_record.template.json`
- [x] `templates/nft_metadata.template.json`
- [ ] contract templates pending root review

### Scripts / Automation

- [x] `scripts/validate_metadata.py`
- [x] `scripts/build_mint_pack.py`
- [x] `scripts/export_dashboard_json.py`
- [x] `apps_script/onboarding.gs`
- [x] `apps_script/asset_submission.gs`
- [x] `apps_script/dashboard_export.gs`
- [x] `apps_script/create_drive_folders.gs`

### Interface

- [x] `docs/interface/launch_readiness_checklist.md`
- [x] `docs/interface/deployment_dependency_map.md`
- [x] `docs/interface/dashboard_structure.md`
- [x] `docs/interface/frontend_backend_contracts.md`
- [x] `docs/interface/squarespace_page_map.md`
- [x] `dashboard_widgets/dashboard_fetch.js`
- [x] `dashboard_widgets/member_dashboard.html`
- [x] `dashboard_widgets/collective_dashboard.html`
- [x] `dashboard_widgets/library_explorer.html`

### Registry / Config

- [x] `config/public_dashboard_field_allowlist.json`
- [x] `config/drive_folder_config.template.json`
- [x] `config/drive_manifest.template.json`
- [x] `examples/dashboard/dashboard_export.example.json`
- [ ] registry CSV root parity pending review

## Retirement criteria

The wrapper can be retired when:

- all pending items above are completed or marked unnecessary,
- the validation workflow passes or is confirmed configured,
- no unique non-duplicated required file remains inside `Platform.CCC_upload_root/`,
- unresolved blockers are updated,
- current state summary is updated.

## Current recommendation

Keep `Platform.CCC_upload_root/` for one more pass while registry CSVs and contract template parity are verified. Automation scripts and dashboard widgets are now represented at root.
