var express = require('express');
var port = process.env.PORT || 8080;
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '/../dist')));
app.get('/*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(port, function() {
  console.log('server listening on ', port);
});