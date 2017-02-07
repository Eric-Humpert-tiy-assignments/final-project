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
  var serverId = favoritesList.length+1
  favoritesList.push({
    id: serverId,
    characterId: req.body.characterId,
    name: req.body.name,
    characterImage: req.body.characterImage,
    description: req.body.description
  });

  res.send({id: serverId});
});

app.delete('/api/favorites/:id', function(req, res) {

  var id = req.params.id;
  console.log("delete called ", id);
  for (var i = 0; i < favoritesList.length; i++) {
    if (favoritesList[i].id == id) {
      favoritesList.splice(i, 1);
      break;
    }
  }

  res.send('delete called');
})

app.listen(port, function() {
  console.log('App is running on port ' + port);
})
