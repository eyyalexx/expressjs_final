var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function( req, res){
	res.render('index');
});

app.listen(port, function(){
	console.log('Server started on Port ' + port);
});