var http = require('http');
let dt = require('./modules/datetime');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello Pakistan Youngest Developer ' + dt.dateTime());
}).listen(8080);