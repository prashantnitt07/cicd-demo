const http = require('http');

const port = 7000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Updated this file just now prashant singh, age: 20 years\n');
  res.end('He is monitoring and obs engineer , fb version 3.2.1\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
