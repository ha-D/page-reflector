var express = require('express');
var http = require('http');
var app = express();

var pageUrl = process.env.URL;

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {  
  http.get(pageUrl, function(resp) {
    resp.on('data', function(chunk) {
      response.write(chunk);
    });

    resp.on('end', function() {
      response.end();
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
