var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();

var app = express();
var port = 80;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//adding public folder for css and pictures
app.use(express.static(path.join(__dirname,'public')));


//when user request website
app.get('/', function(request, response){
	var css = 'install';
	response.render('index', {css: css});//send index.ejs to client 
});

app.get('/install', function(request, response){
	var css = 'install';
	response.render('install', {css: css});
});

app.get('/how', function(request, response){
	var css = 'how';
	response.render('how', {css: css});
});

app.get('/result', function(request, response){
	var css = 'result';
	response.render('result', {css: css});
});

app.get('/rating', function(request, response){
	var css = 'rating';
	response.render('rating', {css: css});
});

app.get('/credits', function(request, response){
	var css = 'credits';
	var contributors = [
        	{ name: 'Alex Grigorev', picture: 'pictures/Alex.jpg' },
        	{ name: 'Taranpreet Saini', picture: 'pictures/Taranpreet.jpg' },
        	{ name: 'Kevin Nguyen', picture: 'pictures/Kevin.jpg' },
			{ name: 'Dawson Brown', picture: 'pictures/Dawson.jpg'}
    	];
		response.render('credits', {contributors: contributors, css: css});
});

//start server
app.listen(port, function(){
	console.log('Server started on Port ' + port);
});
