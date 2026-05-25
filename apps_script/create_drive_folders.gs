/**
 * Platform.CCC Drive folder creation scaffold.
 * Confirm parent folder IDs and permissions before enabling.
 */

function createMemberFolder(parentFolderId, memberId, displayName) {
  if (!parentFolderId || parentFolderId.indexOf("REPLACE") === 0) {
    throw new Error("Parent folder ID not configured");
  }

  const parent = DriveApp.getFolderById(parentFolderId);
  const safeName = String(displayName || "member").replace(/[\\/:*?\"<>|]/g, "_");
  const folder = parent.createFolder(memberId + "_" + safeName);

  [
    "00_profile",
    "01_uploaded_assets",
    "02_project_contributions",
    "03_contracts",
    "04_metadata",
    "05_mint_packs",
    "06_allocation_records",
    "99_archive"
  ].forEach(function(name) {
    folder.createFolder(name);
  });

  return folder.getId();
}
