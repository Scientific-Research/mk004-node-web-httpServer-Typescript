// import http from 'http';
// import * as http from 'http';
import { createServer } from 'http';
import { mainContent } from './content.mjs';
var port = 8000;
createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.write('info site');
    res.write(mainContent);
    res.end();
}).listen(port);
console.log("listening on http://localhost:".concat(port));
