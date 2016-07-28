var path = require('path');
var express = require('express');
var logger = require('morgan');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs'); // moteur template
app.set('views', path.join(__dirname, '/views')); //dossier pages
app.use(logger('dev'));
app.use(methodOverride());

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/api/measures', function (req, res) {
  res.json({
  "measures": {
    "temperature": 25.4,
    "light": 900
  }
});
});

app.listen(port, function () {
  console.log('Example app listening on port!' + port);
});