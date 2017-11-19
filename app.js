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
	response.render('index');//send index.ejs to client 
});
app.get('/index.html', function(request, response){
	response.render('index');//send index.ejs to client 
});

app.get('/install', function(request, response){
	response.render('install');
});

app.get('/how', function(request, response){
	response.render('how');
});

app.get('/result', function(request, response){
	response.render('result');
});

app.get('/rating', function(request, response){
	response.render('rating');
});

app.get('/credits', function(request, response){
	var contributors = [
        	{ name: 'Alex Grigorev', picture: 'pictures/Alex.jpg' },
        	{ name: 'Taranpreet Saini', picture: 'pictures/Taranpreet.jpg' },
        	{ name: 'Kevin Nguyen', picture: 'pictures/Kevin.jpg' },
			{ name: 'Dawson Brown', picture: 'pictures/Dawson.jpg'}
    	];
		response.render('credits', {contributors: contributors});
});

//start server
app.listen(port, function(){
	console.log('Server started on Port ' + port);
});
