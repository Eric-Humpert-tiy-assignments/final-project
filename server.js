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

app.post('/api/favorites', function(req, res) {
  favoritesList.push({
    characterId: req.body.characterId,
    name: req.body.name,
    characterImage: req.body.characterImage,
    description: req.body.description
  });

  res.sendStatus(204);
});

app.listen(port, function() {
  console.log('App is running on port ' + port);
})
