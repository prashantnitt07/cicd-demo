const http = require('http');

const port = 7000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // First line
  res.write('Updated this file just now prashant singh, age: 20 years\n');

  // Additional output
  res.write('This is the next code output line added to the response 3.2.1.\n');

  res.end(); // End the response
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
