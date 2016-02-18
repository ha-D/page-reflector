var express = require('express');
var request = require('request');
var app = express();

var pageUrl = process.env.URL;

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  request(pageUrl, function (error, proxyRes, body) {
    if (proxyRes.statusCode != 200) {
      res.status(proxyRes.statusCode);
    }
    res.send(body);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
