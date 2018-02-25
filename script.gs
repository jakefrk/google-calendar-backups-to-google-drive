// 1) Go https://script.google.com to create this new file


var calendarsToSave = 
    [
      
/* 2) add calendars you OWN or have FULL access to here. Go to Google Calendar> My calendar > Settings > copy the Secret URL
/* Comma seperated list, no comma after the last one */
      
 "https://calendar.google.com/calendar/ical/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/basic.ics",
 "https://calendar.google.com/calendar/ical/YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY/basic.ics"
 "https://calendar.google.com/calendar/ical/ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ/basic.ics"
    ]; 


// 3) Create  folder in gdrive and copy the sring  in the URL after /folder/....
var folder = '____________________';  


// 4) Final step - Add a trigger to auto run this. Click the magnifying glass icon above > Add New Trigger : Time-Driven | Every 12 Hours. Save project. 
// All of the output files will have the name basic.ics



// ------- Begin function ----------

function downloadFile(calendarURL) {

   var fileName = "";
   var fileSize = 0;
   var gfolder = DriveApp.getFolderById(folder);

  for (var i = 0; i < calendarsToSave.length; i++) { 

    var calendarURL = calendarsToSave[i];
 
    var response = UrlFetchApp.fetch(calendarURL, {muteHttpExceptions: true});
    var rc = response.getResponseCode();

    if (rc == 200) {
      var fileBlob = response.getBlob()

      var file = gfolder.createFile(fileBlob);
      fileName = file.getName();
      fileSize = file.getSize();

    }
    var fileInfo = { "rc":rc, "fileName":fileName, "fileSize":fileSize };
  } 
} //end

// this is a modification of https://ctrlq.org/code/19757-download-files-google-drive-google-script
