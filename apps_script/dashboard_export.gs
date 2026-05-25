/**
 * Platform.CCC dashboard export scaffold.
 * Produces redacted JSON-like output from approved sheets.
 * Public export must still be reviewed before deployment.
 */

const PUBLIC_SHEETS = [
  "Collectives",
  "Sub_Collectives",
  "Assets",
  "Projects",
  "Mint Queue"
];

function exportDashboardJson() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const output = {
    exported_at: new Date().toISOString(),
    platform: {
      name: "Create Your Collective",
      coin: "CCC",
      public_status: "alpha_scaffold"
    },
    public_scope: "redacted_review_required",
    redaction_status: "apps_script_scaffold",
    collectives: getSheetObjects_("Collectives"),
    sub_collectives: getSheetObjects_("Sub_Collectives"),
    assets: getSheetObjects_("Assets"),
    projects: getSheetObjects_("Projects"),
    mint_queue: getSheetObjects_("Mint Queue")
  };

  const json = JSON.stringify(output, null, 2);
  Logger.log(json);
  return json;
}

function getSheetObjects_(sheetName) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) return [];

  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];

  const headers = values[0];
  return values.slice(1).filter(function(row) {
    return row.join("") !== "";
  }).map(function(row) {
    const obj = {};
    headers.forEach(function(header, index) {
      obj[header] = row[index];
    });
    return obj;
  });
}
