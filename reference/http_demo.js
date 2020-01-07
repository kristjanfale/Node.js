// HTTP MODULE
const http = require('http');

// Create server object
http
  .createServer((req, res) => {
    // When we get request we want to WRITE RESPONSE
    res.write('Hello World'); // .write -> outputs to the browser
    res.end();
  })
  .listen(5000, () => console.log('Server running...')); // Listen on port 5000
