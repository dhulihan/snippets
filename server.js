// fileHandler is a function to invoke as the final step to respond to HTTP request.
var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic(__dirname, {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
})

// Listen
var port = 4567;
console.log("Starting server on " + port);
server.listen(port);
