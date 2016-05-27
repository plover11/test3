var http = require('http');
var url = require('url');
var port = process.env.PORT || 8080;

var server = http.createServer(function(req, res){
    var a = {
        method: req.method,
        url: req.url
    }
    
    var b = url.parse(req.url, true);
    res.end(JSON.stringify(a));
});

server.listen(port);