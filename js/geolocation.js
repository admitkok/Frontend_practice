if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function successCallback(position) {
    // Extract latitude and longitude from the position object
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Create a message string with latitude and longitude
    const message = "Latitude: " + latitude + ", Longitude: " + longitude;

    // Get the container element
    const locationContainer = document.getElementById('locationContainer');

    // Update the text content of the container with the message
    locationContainer.textContent = message;

    // You can also use innerHTML if you want to add HTML content
    // locationContainer.innerHTML = message;

    // Optionally, you can style the container or perform additional actions here

    // Do something with the latitude and longitude data if needed
    // For example, you can send it to a server, display it on a map, etc.
}

function errorCallback(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}
