/**
 * Platform.CCC asset submission scaffold.
 * Keeps submissions review-gated.
 */

function createAssetId_(rowNumber) {
  return "AST-" + String(rowNumber).padStart(6, "0");
}

function onAssetFormSubmit(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Assets");
  if (!sheet) throw new Error("Assets sheet not found");

  const row = sheet.getLastRow();
  const assetId = createAssetId_(row);

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
