document.getElementById('reminder-form').addEventListener('submit', function(event) {
    event.preventDefault(); // מונע את רענון הדף בעת שליחת הטופס

    const hebrewDate = document.getElementById('hebrew-date').value;
    const reminderText = document.getElementById('reminder-text').value;

    // כאן תוכל להוסיף לוגיקה להמרת תאריכים עבריים ללועזיים ולחבר את Google Calendar API

    document.getElementById('message').textContent = `התזכורת "${reminderText}" בתאריך "${hebrewDate}" נוספה בהצלחה!`;
    document.getElementById('reminder-form').reset(); // מנקה את הטופס
});
