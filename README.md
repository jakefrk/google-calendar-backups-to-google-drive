# google-calendar-backups-to-google-drive
Google Apps Script that fetches specific calendars you own and periodically saves them as an .ics to your Google Drive folder


Go https://script.google.com to create  a file and insert script.gs into it

Add calendars you OWN or have FULL access to the script. Go to Google Calendar> My calendar > Settings > copy the Secret URL

Create folder in gdrive and copy the sring in the URL after /folder/....

Final step - Add a trigger to auto run this. Click the magnifying glass icon above > Add New Trigger : Time-Driven | Every 12 Hours. Save project.





// this is a modification of https://ctrlq.org/code/19757-download-files-google-drive-google-script
