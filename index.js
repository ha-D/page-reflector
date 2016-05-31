var express = require('express');
var request = require('request');
var app = express();

var pageUrl = process.env.URL;
var cheerio = require('cheerio');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  if (!pageUrl) {
    return res.send("No Page Set");
  }
  request(pageUrl, function (error, proxyRes, body) {
    if (proxyRes.statusCode != 200) {
      res.status(proxyRes.statusCode);
    }

    var $ = cheerio.load(body);
    $('body').append("<div style='position: fixed; top: 0; width: 100%; height: 20px; font-size: 16px; padding: 5px; z-index: 1000; background-color:yellow'> If the page is not loading correctly, click the shield next to the address bar<div>")
    res.send($.html());
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
