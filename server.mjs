// import http from 'http';
import * as http from 'http';
var port = 8000;
http
    .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('info site');
    res.end();
})
    .listen(port);
console.log("listening on http://localhost:".concat(port));
