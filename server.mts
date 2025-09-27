// import http from 'http';
// import * as http from 'http';
import { createServer, IncomingMessage, ServerResponse } from 'http';
const port = 8000;

createServer((req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('info site');
  res.end();
}).listen(port);

console.log(`listening on http://localhost:${port}`);
