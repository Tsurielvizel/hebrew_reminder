// Initialize Google API
function start() {
    gapi.client.init({
        apiKey: 'YOUR_API_KEY',  // Your API key for Google Calendar API
        clientId: 'YOUR_CLIENT_ID', // Your client ID
        scope: 'https://www.googleapis.com/auth/calendar.events',
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    }).then(function () {
        console.log("Google API Initialized");
    });
}

// Load the API
function loadClient() {
    gapi.load('client:auth2', start);
}

// Authenticate with Google Account
function authenticate() {
    return gapi.auth2.getAuthInstance().signIn({
        scope: 'https://www.googleapis.com/auth/calendar.events'
    });
}

// Add a reminder to Google Calendar
function addEventToGoogleCalendar(date, reminderText) {
    const event = {
        'summary': reminderText,
        'start': {
            'dateTime': date,
            'timeZone': 'Asia/Jerusalem'
        },
        'end': {
            'dateTime': date,
            'timeZone': 'Asia/Jerusalem'
        }
    };

    const request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
    });

    request.execute(function(event) {
        console.log('Event added: ' + event.htmlLink);
    });
}

// Form submission logic
document.getElementById('reminder-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page refresh on form submission

    const hebrewDate = document.getElementById('hebrew-date').value;
    const reminderText = document.getElementById('reminder-text').value;

    // Convert Hebrew date to Gregorian date
    const gregorianDate = convertHebrewToGregorian(hebrewDate); // Function to convert Hebrew date to Gregorian

    // Authenticate with Google Account
    authenticate().then(function() {
        // Add the reminder to Google Calendar
        addEventToGoogleCalendar(gregorianDate, reminderText);
    });

    // Display success message to the user in Hebrew
    document.getElementById('message').textContent = `התזכורת "${reminderText}" בתאריך "${hebrewDate}" נוספה בהצלחה!`;
    document.getElementById('reminder-form').reset(); // Clear the form
});

// Function to convert Hebrew date to Gregorian date
function convertHebrewToGregorian(hebrewDate) {
    // Add logic to convert the Hebrew date to Gregorian here
    // Example: Return a placeholder ISO date for now
    return '2024-12-05T09:00:00';
}
