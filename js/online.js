// Function to handle online status change
function handleOnlineStatus() {
    if (navigator.onLine) {
        // Online
        console.log("You are now online.");
    } else {
        // Offline
        console.log("You are now offline.");
    }
}

// Check initial online status
handleOnlineStatus();

// Add event listeners for online and offline events
window.addEventListener('online', handleOnlineStatus);
window.addEventListener('offline', handleOnlineStatus);
