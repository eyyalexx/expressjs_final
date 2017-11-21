var express = require('express');
var router = express.Router();
var apiKey = 'a3d2848b016e5b1f376098a55f215b55';
//var city = 'Toronto';
var request = require('request');

router.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  
    request(url, function (err, response, body) {
      if(err){
        //res.render('index', {weather: null, error: 'Error, please try again'});
        console.log('Error!');
      } else {
        let weather = JSON.parse(body)
        if(weather.main == undefined){
          //res.render('index', {weather: null, error: 'Error, please try again'});
          console.log('Main Error!');
        } else {
          let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
          res.json(weather);
          //console.log(weather.main.temp);
          //var css = 'result';
          //res.render('result', {temp: weather.main.temp, css: css});
         
          //res.render('index', {weather: weatherText, error: null});
        }
      }
    });
  })



module.exports = router;
