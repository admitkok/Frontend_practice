if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Latitude: " + latitude + ", Longitude: " + longitude);
    // Do something with the latitude and longitude data
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
