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
			//var obj = JSON.parse(data);
			//console.log(obj.Days[0])
			//console.log(data)
		});
});

