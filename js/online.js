// Function to handle online status change
function handleOnlineStatus() {
    // Get the container element
    const onlineStatusContainer = document.getElementById('onlineStatusContainer');

    if (navigator.onLine) {
        // Online
        onlineStatusContainer.textContent = "You are now online.";
    } else {
        // Offline
        onlineStatusContainer.textContent = "You are now offline.";
    }
}

// Check initial online status
handleOnlineStatus();

// Add event listeners for online and offline events
window.addEventListener('online', handleOnlineStatus);
window.addEventListener('offline', handleOnlineStatus);

