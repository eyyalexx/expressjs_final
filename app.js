var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = 8000;

var routes = require('./routes/index.js');
var weather = require('./routes/weather.js');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//adding public folder for css and pictures
app.use(express.static(path.join(__dirname,'public')));

app.use('/', routes);
app.use('/weather', weather);

//start server
app.listen(port, function(){
	console.log('Server started on Port ' + port);
});

module.exports = app;