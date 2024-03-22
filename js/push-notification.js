function displayPushNotification() {
    const pushNotification = document.getElementById('pushNotification');
    pushNotification.textContent = "Friday specials until 14:00";

    // Show the push notification
    pushNotification.style.display = 'block';

    // Hide the push notification after 5 seconds
    setTimeout(() => {
        pushNotification.style.display = 'none';
    }, 5000); // Adjust duration as needed (5 seconds in this example)
}

// Call the displayPushNotification function after 15 seconds
setTimeout(displayPushNotification, 15000); // 15 seconds

// Check if the browser supports notifications
if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
} else if (Notification.permission === "granted") {
    // If notification permission is already granted
    displayPushNotification();
} else if (Notification.permission !== "denied") {
    // Request permission from the user to show notifications
    Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
            displayPushNotification();
        }
    });
}