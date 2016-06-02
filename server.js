var path = require('path');
var express = require('express');
var logger = require('morgan');
var app = express();

app.set('view engine', 'ejs'); // moteur template
app.set('views', path.join(__dirname, '/views')); //dossier pages
app.use(logger('dev'));

app.get('/', function (req, res) {
  res.render('index');
}); 

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});