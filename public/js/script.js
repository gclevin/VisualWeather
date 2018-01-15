navigator.geolocation.getCurrentPosition(function(position) {

        console.log("HI");

        // Get the coordinates of the current position.
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        console.log(lat);
        console.log(lng);
});
