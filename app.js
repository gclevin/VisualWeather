const express = require('express')
const request = require('request');
const path = require('path');
const app = express()

app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, './public')));

app.listen(app.get('port'), function() {
  console.log('Express started press Ctrl-C to terminate');
});

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
  res.render('index', {title: 'Visual Weather', message: 'gabe'});
});

app.post('/', function (req, res) {
  console.log('POST');
  res.render('visual', {title: 'Visual Weather', message: 'POST'});
});
