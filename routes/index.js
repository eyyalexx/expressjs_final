var express = require('express');
var router = express.Router();

//when user request website
router.get('/', function(request, response){
	var css = 'index';
	response.render('index', {css: css});//send index.ejs to client 
});

router.get('/install', function(request, response){
	var css = 'install';
	response.render('install', {css: css});
});

router.get('/how', function(request, response){
	var css = 'how';
	response.render('how', {css: css});
});

router.get('/result', function(request, response){
	var css = 'result';
	response.render('result', {css: css});
});

router.get('/rating', function(request, response){
	var css = 'rating';
	response.render('rating', {css: css});
});

router.get('/credits', function(request, response){
	var css = 'credits';
	var contributors = [
        	{ name: 'Alex Grigorev', picture: 'pictures/Alex.jpg' },
        	{ name: 'Taranpreet Saini', picture: 'pictures/Taranpreet.jpg' },
        	{ name: 'Kevin Nguyen', picture: 'pictures/Kevin.jpg' },
			{ name: 'Dawson Brown', picture: 'pictures/Dawson.jpg'}
    	];
		response.render('credits', {contributors: contributors, css: css});
});

module.exports = router;