const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

navigator.geolocation.getCurrentPosition(function(position) {

        fetch('/', {
  			method: 'POST',
 			body: JSON.stringify({ "lat": position.coords.latitude.toFixed(2), "lng": position.coords.longitude.toFixed(2), }),
 			headers: new Headers({ 'Content-Type': 'application/json' })
		}).then(res => {
			return res.json();
		}).catch (err => {
			console.error('Error: ', error);
		}).then(data => {
			console.log(data);
			console.log(data.Days[1].temp_max_f);

			let xCord = 10;

			// ctx.fillStyle = "#c1666b";
			// ctx.fillRect(10, 10, 100, data.Days[1].temp_max_f);
			
			// ctx.fillStyle = "#6290c3";
			// ctx.fillRect(10, 10, 100, data.Days[1].temp_min_f);

			var currentDay = new Date().getDay();
			ctx.setTransform(1,0,0,-1,0,canvas.height);
			document.querySelector("h1").innerHTML = "Five Day Forecast";

			for (i = 1; i <= 5; i++) {

				ctx.fillStyle = "#fadf63";
				ctx.fillRect(xCord, 10, 100, data.Days[i].temp_max_f * 6);
			
				ctx.fillStyle = "#035bbf";
				ctx.fillRect(xCord, 10, 100, data.Days[i].temp_min_f * 6);

				console.log("On " + days[currentDay%7] + " the high will be " + data.Days[i].temp_max_f + " and the low will be " + data.Days[i].temp_min_f + ".");
				currentDay++;
				xCord += 102;
			}
		});
});

