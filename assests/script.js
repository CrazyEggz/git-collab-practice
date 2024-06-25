// Ken changes
// 1. Added a function to get the current date and time
// 2. Added a function to display the current date and time
// 3. Added a function to display the current date and time every second


// Get the current date and time
function getCurrentDateTime() {
    return new Date();
}

// Display the current date and time

function displayCurrentDateTime() { 
    const currentDateTime = getCurrentDateTime();
    const currentDateTimeString = currentDateTime.toLocaleString();
    const currentDateTimeElement = document.getElementById("current-date-time");
    currentDateTimeElement.innerHTML = currentDateTimeString;
} // ive change this to display the current date and time

// Display the current date and time every second
function displayCurrentDateTimeEverySecond() {
    setInterval(displayCurrentDateTime, 1000);
}

displayCurrentDateTimeEverySecond();

