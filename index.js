const http = require('http');

const port = 7000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Updated this file just now prashant\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
