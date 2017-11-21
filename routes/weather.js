var express = require('express');
var router = express.Router();
var apiKey = 'a3d2848b016e5b1f376098a55f215b55';
//var city = 'Toronto';
var request = require('request');

router.post('/', function (req, res) {
    var city = req.body.city;
    console.log(city);
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  
    request(url, function (err, response, body) {
      if(err){

        res.json({error: 'Error!'});
      } else {
        var weather = JSON.parse(body)
        if(weather.main == undefined){

          res.json({error: 'Main Error!'});
        } else {
          res.json(weather);
        }
      }
    });
  })



module.exports = router;
