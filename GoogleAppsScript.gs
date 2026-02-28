/**
 * Google Apps Script for HomeTogether Website
 *
 * HOW TO USE:
 * 1. Open the Google Sheet connected to your project.
 * 2. In the top menu, go to "Extensions" > "Apps Script".
 * 3. Delete all the old code in the script editor.
 * 4. Copy this entire code and paste it into the editor.
 * 5. IMPORTANT: Make sure you have a sheet tab (at the bottom) named exactly "UserData". The script will write data to this sheet.
 * 6. Click the "Save project" icon (floppy disk).
 * 7. Click the "Deploy" button > "Manage Deployments".
 * 8. In the pop-up, select your active deployment (there's likely only one) and click the "Edit" (pencil) icon.
 * 9. From the "Version" dropdown, select "New version".
 * 10. Click the "Deploy" button. You will use the same Web App URL. The changes are now live.
 */

function doPost(e) {
  // Log the entire request payload for debugging. You can view these logs in the "Executions" tab in Apps Script.
  Logger.log("Received POST request. Raw data: " + JSON.stringify(e));

  try {
    // Check if postData exists. This is a common failure point.
    if (!e.postData || !e.postData.contents) {
      throw new Error("No data received. The request body might be empty or malformed.");
    }
    
    const data = JSON.parse(e.postData.contents);
    Logger.log("Parsed JSON data: " + JSON.stringify(data));

    const sheetName = "UserData";
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

    // Check if the sheet named "UserData" actually exists.
    if (!sheet) {
      throw new Error("Sheet '" + sheetName + "' was not found. Please create it or check for typos.");
    }

    const role = data.role;
    const school = data.school || "-"; // Use a placeholder if school is not provided (e.g., for hosts)
    const phone = data.phone;

    // Validate that the essential fields were received from the frontend.
    if (!role || !phone) {
      throw new Error("Validation Error: 'role' and 'phone' are required fields, but one was missing.");
    }

    // Append the validated data as a new row in the "UserData" sheet.
    // The columns will be: Timestamp, Role, School, Phone
    sheet.appendRow([
      new Date(),
      role,
      school,
      phone
    ]);

    Logger.log("Successfully appended a new row to the sheet.");

    // Return a success response. Note: The frontend won't be able to read this due to 'no-cors'.
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", receivedData: data }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // Log the full error details for debugging.
    Logger.log("ERROR: " + err.toString() + " | Stack: " + err.stack);
    
    // Return an error response.
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: err.message
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  Logger.log("Received a GET request. The service is active.");
  return ContentService.createTextOutput("The HomeTogether API is running and ready to receive POST requests.");
}
