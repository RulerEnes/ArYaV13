var http = require('http');

http.createServer(function (req, res){
  res.write("Syntax Support");
  res.end();
}).listen(8080);