var http = require('http');
var port = process.env.PORT || 8080;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var server = http.createServer(function(req, res){
    if (req.method == "GET"){
        var query = req.url;
        if (query.indexOf('\/') > 0){
            res.writeHead(404, { 'Content-Type': 'document' });
            res.end("Cannot GET "+query);
        }
        query = query.slice(1);
        query = query.replace(/%20/g, " ");
        var nd;
        if (isNaN(Number(query))){
            nd = new Date(query);
        } else {
            nd = new Date(Number(query)*1000);
        }
        
        var ut = Date.parse(nd)/1000;
        var datestr;
        if (isNaN(ut)){
            datestr = null;
        } else {
            datestr = months[nd.getMonth()] + " "
                        + nd.getDate() + " "
                        + nd.getFullYear();
        }
        
        var dateobj = {
            unix: ut,
            natural: datestr
        }
        
        res.writeHead(200, { 'Content-Type': 'document'});
        res.end(JSON.stringify(dateobj));
    }

});

server.listen(port);