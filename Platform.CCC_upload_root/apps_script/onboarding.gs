/**
 * Platform.CCC onboarding scaffold.
 * Intended for Google Sheets + Drive automation.
 * Do not store wallet secrets or passwords in Apps Script properties.
 */

function createMemberId_(rowNumber) {
  return "MEM-" + String(rowNumber).padStart(6, "0");
}

function onMemberFormSubmit(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Members");
  const row = sheet.getLastRow();
  const memberId = createMemberId_(row);

  // Expected columns should match registries/members.csv.
  sheet.getRange(row, 1).setValue(memberId);
  sheet.getRange(row, 6).setValue("CCC");
  sheet.getRange(row, 10).setValue("submitted");

  // Folder creation should be wired after confirming final parent folder IDs.
  // DriveApp.createFolder(memberId + "_member_folder");

  audit_("Member onboarding submitted", memberId);
}

function audit_(event, ref) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Audit Log");
  if (!sheet) return;
  sheet.appendRow(["AUTO-" + new Date().getTime(), new Date(), event, "Apps Script", ref, "logged", ""]);
}
