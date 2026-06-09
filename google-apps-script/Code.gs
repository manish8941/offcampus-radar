const SHEET_NAME = "Registrations";

function doPost(e) {
  const sheet = getOrCreateSheet();
  const params = e.parameter || {};

  sheet.appendRow([
    new Date(),
    params.fullName || "",
    params.email || "",
    params.whatsapp || "",
    params.batch || "",
    params.role || "",
    params.updateType || "",
    params.message || "",
    params.source || "",
    params.submittedAt || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Received At",
      "Full Name",
      "Email Address",
      "WhatsApp Number",
      "Graduation Year / Batch",
      "Interested Role",
      "Preferred Update Type",
      "Message / Goal",
      "Source",
      "Submitted At"
    ]);
  }

  return sheet;
}
