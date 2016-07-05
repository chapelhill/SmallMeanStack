// Dependencies
// -----------------------------------------------------
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('user', ['user']);
var bodyParser = require('body-parser');
var port= 3000;
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.listen(port);
console.log('App listening on port ' + port);

