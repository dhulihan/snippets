// fileHandler is a function to invoke as the final step to respond to HTTP request.
var finalhandler = require('finalhandler')
var http = require('http')
var serveIndex = require('serve-index')
var serveStatic = require('serve-static')

var index = serveIndex(__dirname, {'icons': true})
var serve = serveStatic(__dirname, {'index': ['index.html', 'index.htm']})

var server = http.createServer(function onRequest(req, res){
  var done = finalhandler(req, res)
  serve(req, res, function onNext(err) {
    if (err) return done(err)
    index(req, res, done)
  })
})

// Listen
var port = 4567;
console.log("Starting server on " + port);
server.listen(port);
