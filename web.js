var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());
var k = fs.readFileSync('./index.html','utf8');

app.get('/', function(req, res) {
 var k = fs.readFileSync('./index.html','utf8');
 res.send('test');
});

app.listen(5000);
console.log('Listening on port 5000');
