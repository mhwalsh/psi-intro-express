var express = require('express');
// var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var songData = [
  {name: 'shake it off'},
  {name: 'river'}
];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', function(req, res) {
//   res.send(path.join(__dirname, 'public/index.html'));
// });

app.get('/song', function(req, res) {
  console.log('in song get');
  // res.status(200).send(JSON.stringify(songData));
  res.status(200).send(songData);
});

app.post('/song', function(req, res) {
  console.log('in song post', req.body);
  var song = req.body;

  songData.push({name: song.songName});
  res.sendStatus(201);
});

app.listen(3001, function() {
  console.log('listening on port 3001');
});
