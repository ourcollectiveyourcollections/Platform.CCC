/**
 * Dashboard export scaffold.
 * Converts selected Sheets data into JSON text.
 */

function exportDashboardJson() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const output = {
    exported_at: new Date().toISOString(),
    platform: { name: "Create Your Collective", coin: "CCC" },
    collectives: getSheetObjects_("Collectives"),
    sub_collectives: getSheetObjects_("Sub_Collectives"),
    members: getSheetObjects_("Members"),
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
  return values.slice(1).filter(row => row.join("") !== "").map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });
}
