const express = require('express')
const request = require('request');
const path = require('path');
const app = express()
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, './public')));

app.listen(app.get('port'), function() {
  console.log('Express started press Ctrl-C to terminate');
});



app.get('/', function (req, res) {
  console.log('GET');
  res.render('index', {title: 'Visual Weather', message: 'Loading...'});
});

app.post('/', function (req, res) {
  console.log('POST');
  console.log(req.body.lat);
  console.log(req.body.lng);

  var currentDay = new Date().getDay();
  console.log(currentDay);

  let link = 'http://api.weatherunlocked.com/api/forecast/' + req.body.lat + ',' + req.body.lng + '?app_id=48cb6b4b&app_key=c71f24d16dfd40152137a56d55e767d2'
  console.log(link);
  request({
    url: link,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      let myObj = body
      res.json(myObj);
    }
  });
  //res.render('index', {title: 'Visual Weather', message: 'POST'});
});

