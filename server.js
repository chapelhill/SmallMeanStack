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

// Routes
// ------------------------------------------------------
<<<<<<< HEAD
   require('./app/routes.js')(app);
=======
app.get('/user', function (req, res) {
  console.log('I received a GET request');

  db.user.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/user', function (req, res) {
  console.log(req.body);
  db.user.insert(req.body, function(err, doc) {
>>>>>>> origin/master

    res.json(doc);
  });
});
// Listen
// -------------------------------------------------------
app.listen(port);
console.log('App listening on port ' + port);

