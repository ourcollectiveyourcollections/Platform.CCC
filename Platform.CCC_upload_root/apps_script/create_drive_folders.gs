/**
 * Drive folder creation scaffold.
 * Confirm parent folder IDs before enabling.
 */

function createMemberFolder(parentFolderId, memberId, displayName) {
  const parent = DriveApp.getFolderById(parentFolderId);
  const safeName = String(displayName || "member").replace(/[\\/:*?"<>|]/g, "_");
  const folder = parent.createFolder(memberId + "_" + safeName);

  folder.createFolder("00_profile");
  folder.createFolder("01_uploaded_assets");
  folder.createFolder("02_project_contributions");
  folder.createFolder("03_contracts");
  folder.createFolder("04_nft_metadata");
  folder.createFolder("05_mint_packs");
  folder.createFolder("06_royalty_records");
  folder.createFolder("99_archive");

  return folder.getId();
}
