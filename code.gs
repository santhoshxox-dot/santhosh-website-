const sheetName = "Contact Form Submissions";
const emailTo = "santhanabharathim2001@gmail.com";

function doPost(e) {
  try {
    // Log the incoming parameters
    Logger.log("Received parameters: " + JSON.stringify(e.parameter));

    // Check if parameters exist, default to "N/A" if undefined
    const fullName = e.parameter["Full Name"] || "N/A";
    const email = e.parameter["Email"] || "N/A";
    const mobile = e.parameter["Mobile Number"] || "N/A";
    const subject = e.parameter["Email Subject"] || "N/A";
    const message = e.parameter["Message"] || "N/A";
    
    // Log parameter values
    Logger.log(`fullName: ${fullName}, email: ${email}, mobile: ${mobile}, subject: ${subject}, message: ${message}`);

    // Get the spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    Logger.log("Spreadsheet accessed: " + spreadsheet.getName());
    const sheet = spreadsheet.getSheetByName(sheetName);
    
    if (!sheet) {
      Logger.log("Error: Sheet '" + sheetName + "' not found");
      throw new Error("Sheet '" + sheetName + "' not found");
    }

    // Append row to sheet
    sheet.appendRow([fullName, email, mobile, subject, message, new Date()]);
    Logger.log("Row appended to sheet");

    // Send email
    MailApp.sendEmail({
      to: emailTo,
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      htmlBody: `
        <h3>You received a new message from your website!</h3>
        <b>Name:</b> ${fullName}<br>
        <b>Email:</b> ${email}<br>
        <b>Mobile:</b> ${mobile}<br>
        <b>Subject:</b> ${subject}<br>
        <b>Message:</b><br>${message}
      `
    });
    Logger.log("Email sent to: " + emailTo);

    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    Logger.log("Error in doPost: " + error.message);
    return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
  }
}