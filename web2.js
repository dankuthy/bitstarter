var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());
var k = fs.readFileSync('./index.html','utf8');

app.get('/', function(request, response) {
 var k = fs.readFileSync('./index.html','utf8');
 response.send( k );
});

console.log(k);
