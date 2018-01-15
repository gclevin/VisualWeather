navigator.geolocation.getCurrentPosition(function(position) {

        //console.log("HI");

        // Get the coordinates of the current position.
        //var lat = position.coords.latitude.toFixed(2);
        //var lng = position.coords.longitude.toFixed(2);

        //Grab coordinates, set them in appropriate field, then send form
        document.getElementById("lat").value = position.coords.latitude.toFixed(2);
        document.getElementById("lng").value = position.coords.longitude.toFixed(2);
        document.getElementById("cords").submit();


        //console.log(lat);
        //console.log(lng);
});

