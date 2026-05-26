/**
 * Platform.CCC dashboard export scaffold.
 * Produces review-gated public/member-safe JSON from approved sheets.
 * Unknown fields are denied by default.
 */

const SAFE_FIELDS = {
  "Collectives": ["collective_id", "name", "coin", "scope", "status", "public_description"],
  "Sub_Collectives": ["sub_collective_id", "name", "coin", "parent_collective_id", "status", "public_description"],
  "Assets": ["asset_id", "asset_title", "asset_type", "collective_scope", "status", "public_preview_uri"],
  "Projects": ["project_id", "project_title", "project_type", "collective_scope", "status", "public_summary"],
  "Mint Queue": ["mint_pack_id", "asset_id", "project_id", "network", "status", "review_required"]
};

const NEVER_EXPORT_HINTS = [
  "email",
  "phone",
  "legal_name",
  "private",
  "secret",
  "seed",
  "password",
  "key",
  "identity",
  "raw_drive",
  "private_drive",
  "unreviewed"
];

function exportDashboardJson() {
  const output = {
    exported_at: new Date().toISOString(),
    platform: {
      name: "Create Your Collective",
      coin: "CCC",
      public_status: "alpha_scaffold"
    },
    public_scope: "redacted_review_required",
    redaction_status: "allowlist_filtered_apps_script_scaffold",
    collectives: getSafeSheetObjects_("Collectives"),
    sub_collectives: getSafeSheetObjects_("Sub_Collectives"),
    assets: getSafeSheetObjects_("Assets"),
    projects: getSafeSheetObjects_("Projects"),
    mint_queue: getSafeSheetObjects_("Mint Queue")
  };

  const json = JSON.stringify(output, null, 2);
  Logger.log(json);
  return json;
}

function getSafeSheetObjects_(sheetName) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) return [];

  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];

  const headers = values[0];
  const allowed = SAFE_FIELDS[sheetName] || [];

  return values.slice(1).filter(function(row) {
    return row.join("") !== "";
  }).map(function(row) {
    const obj = {};
    headers.forEach(function(header, index) {
      if (isAllowedPublicField_(header, allowed)) {
        obj[header] = row[index];
      }
    });
    return obj;
  });
}

function isAllowedPublicField_(fieldName, allowedFields) {
  if (allowedFields.indexOf(fieldName) === -1) return false;
  const lowered = String(fieldName).toLowerCase();
  return NEVER_EXPORT_HINTS.every(function(hint) {
    return lowered.indexOf(hint) === -1;
  });
}
