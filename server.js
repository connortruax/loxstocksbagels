var express = require('express');
var app = express();

app.use('/assets', express.static('assets'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/menu', function(req, res){
    res.render('menu');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.listen('8080', function(){
    console.log('Server is listening...');
});