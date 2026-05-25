/**
 * Platform.CCC onboarding scaffold.
 * Intended for Google Sheets + Drive automation.
 * Do not store wallet secrets, passwords, private keys or seed phrases.
 */

function createMemberId_(rowNumber) {
  return "MEM-" + String(rowNumber).padStart(6, "0");
}

function onMemberFormSubmit(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Members");
  if (!sheet) throw new Error("Members sheet not found");

  const row = sheet.getLastRow();
  const memberId = createMemberId_(row);

  sheet.getRange(row, 1).setValue(memberId);
  sheet.getRange(row, 6).setValue("CCC");
  sheet.getRange(row, 10).setValue("submitted");

  audit_("Member onboarding submitted", memberId);
}

function audit_(event, ref) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Audit Log");
  if (!sheet) return;
  sheet.appendRow(["AUTO-" + new Date().getTime(), new Date(), event, "Apps Script", ref, "logged", ""]);
}
