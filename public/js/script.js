const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"];

navigator.geolocation.getCurrentPosition(function(position) {


	fetch('/', { //Get client's latitude and longitude coordinates, then send them to the server
		method: 'POST',
		body: JSON.stringify({ "lat": position.coords.latitude.toFixed(2), "lng": position.coords.longitude.toFixed(2), }),
		headers: new Headers({ 'Content-Type': 'application/json' })
	}).then(res => {
		return res.json(); //Receive JSON object from server
	}).catch (err => {
		console.error('Error: ', error);
	}).then(data => {
		console.log(data);
		var currentDay = new Date().getDay() + 1;

		//Prepare Chartist.js graph data
		var chartData = {
	 		labels: ['Today', days[(currentDay++)%7], days[(currentDay++)%7], days[(currentDay++)%7], days[(currentDay++)%7]],
	 		series: [
	    		[data.Days[1].temp_max_f, data.Days[2].temp_max_f, data.Days[3].temp_max_f, data.Days[4].temp_max_f, data.Days[5].temp_max_f],
	    		[data.Days[1].temp_min_f, data.Days[2].temp_min_f, data.Days[3].temp_min_f, data.Days[4].temp_min_f, data.Days[5].temp_min_f]
	  		]
		};

		//Prepare Chartist.js graph settings
		var options = {
  			showPoint: true,
  			lineSmooth: false,
  			axisX: {
   				showGrid: true,
    			showLabel: true
 			},
  			axisY: {
    			offset: 60,
    			labelInterpolationFnc: function(value) {
      				return value + '°F';
    			}
  			}
		};			

		document.getElementsByTagName('p')[0].style.display = 'none';
		new Chartist.Line('.ct-chart', chartData, options); //Generate graph using Chartist.js
	});
});

