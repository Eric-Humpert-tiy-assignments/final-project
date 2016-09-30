var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

var favoritesList = [];

app.get('/api/favorites', function(req, res) {
  res.send(favoritesList)
});

app.post('api/favorites', function(req, res) {
  favoritesList.push({
    id: req.body.id,
    name: req.body.name
  });

  res.sendStatus(204);
});

app.listen(port, function() {
  console.log('App is running on port ' + port);
})
