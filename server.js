var express = require('express');
var path = require('path');

var app = express();

// middle ware
app.use(express.static('public'));

// get route
app.get('/', function(req, res) {
  console.log('in get route');
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(5000, function() {
  console.log('listening on port 5000');
});

// console.log('HEY CLASS!');
