# Connect OffCampus Radar Form to Google Sheets

The website is static, so it cannot store all visitors' details by itself. Use this free Google Sheets + Apps Script setup to collect every registration in one spreadsheet.

## Steps

1. Create a new Google Sheet named `OffCampus Radar Registrations`.
2. In the sheet, go to `Extensions` > `Apps Script`.
3. Paste the code from `google-apps-script/Code.gs`.
4. Click `Deploy` > `New deployment`.
5. Choose type `Web app`.
6. Set `Execute as` to `Me`.
7. Set `Who has access` to `Anyone`.
8. Click `Deploy` and copy the Web app URL.
9. Open `src/App.jsx` and paste that URL into:

```js
const GOOGLE_SHEET_WEB_APP_URL = "PASTE_YOUR_WEB_APP_URL_HERE";
```

10. Commit and push the change. GitHub Pages will redeploy automatically.

After this, every `Save My Details` submission will be added to your Google Sheet.

## Important

Keep the Google Sheet private. It contains personal contact details from students and freshers.
