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

app.post('/page', function(request, response){
	switch(request.body.menuitem){
		case 'title':
			response.render('index');
			break;
		case 'install':
			response.render('install');
			break;
		case 'how':
			response.render('how');
			break;
		case 'result':
			response.render('result');
			break;
		case 'rating':
			response.render('rating');
			break;
		case 'credits':
			var contributors = [
        			{ name: 'Alex Grigorev', picture: 'pictures/No_Picture.jpg' },
        			{ name: 'Taranpreet Saini', picture: 'pictures/No_Picture.jpg' },
        			{ name: 'Kevin Nguyen', picture: 'pictures/No_Picture.jpg' },
				{ name: 'Dawson Brown', picture: 'pictures/Dawson.jpg'}
    			];
			response.render('credits', {contributors: contributors});
			break;
	}
});

//start server
app.listen(port, function(){
	console.log('Server started on Port ' + port);
});
