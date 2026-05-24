/**
 * Asset submission scaffold.
 */

function onAssetFormSubmit(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Assets");
  const row = sheet.getLastRow();
  const assetId = "AST-" + String(row).padStart(6, "0");

  sheet.getRange(row, 1).setValue(assetId);
  sheet.getRange(row, 11).setValue("submitted");

  auditAsset_("Asset submitted", assetId);
}

function auditAsset_(event, ref) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Audit Log");
  if (!sheet) return;
  sheet.appendRow(["AUTO-" + new Date().getTime(), new Date(), event, "Apps Script", ref, "logged", ""]);
}
