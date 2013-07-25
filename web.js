var express = require('express');
var app = express();
var file = fs.readFileSync('index.html');


app.use(express.logger());

app.get('/', function(request, response) {
  response.send(file);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
