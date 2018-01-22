const express = require('express')
const request = require('request');
const path = require('path');
const app = express()


const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, './public')));

app.listen(app.get('port'), function() {
  console.log('Express started press Ctrl-C to terminate');
});

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"];


app.get('/', function (req, res) {
  // request({
  //   url: 'http://api.weatherunlocked.com/api/forecast/34.03,-118.39?app_id=48cb6b4b&app_key=c71f24d16dfd40152137a56d55e767d2',
  //   json: true
  // }, function (error, response, body) {
  //   if (!error && response.statusCode === 200) {
  //     let myObj = body
  //     let forecast = myObj.Days[0].temp_max_f;
  //     console.log(body);
  //     res.render('index', {title: 'Visual Weather', message: forecast});
  //   }
  // });
  console.log('GET');
  res.render('index', {title: 'Visual Weather', message: 'Loading...'});
});

app.post('/', function (req, res) {
  console.log('POST');
  console.log(req.body.lat);
  console.log(req.body.lng);

  var currentDay = new Date().getDay();
  console.log(currentDay);

  //let test = "{ 'user': 'gabe' }"

  //let response = "{ Days:\n[ "

  //res.json(test);



  let link = 'http://api.weatherunlocked.com/api/forecast/' + req.body.lat + ',' + req.body.lng + '?app_id=48cb6b4b&app_key=c71f24d16dfd40152137a56d55e767d2'
  console.log(link);
  request({
    url: link,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      let myObj = body
      let forecast = myObj.Days[1].temp_max_f;
      console.log(forecast);
      let day = '';

      // for (let i = 0; i <= 3; i++) {
      //   day = days[currentDay%7];
      //   response += "{ day: " + day + ",\n high: " + myObj.Days[currentDay%7].temp_max_f + ",\n low: " + myObj.Days[currentDay%7].temp_min_f + " },\n ";
      //   currentDay++;
      // }

      // response += "{ day: " + day + ",\n high: " + myObj.Days[(currentDay+1)%7].temp_max_f + ",\n low: " + myObj.Days[(currentDay+1)%7].temp_min_f + " } ] } ";

      // console.log(response);
      //res.json(response);
      res.json({ "temp": "temp" });
      //res.render('index', {title: 'Visual Weather', message: forecast});
    }
  });



  //res.render('index', {title: 'Visual Weather', message: 'POST'});
});

