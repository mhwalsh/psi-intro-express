var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send(path.join(__dirname, 'public/index.html'));
});

app.listen(3001, function() {
  console.log('listening on port 3001');
});
