const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // If url is '/'
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' }); // status -> 200, content-type -> html
      res.end(data); // Output data
    });
  }
  if (req.url === '/about') {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' }); // status -> 200, content-type -> html
      res.end(data); // Output data
    });
  }
  // If we want to fetch data(in this case hardcoded users arry) from '/api/users'
  if (req.url === '/api/users') {
    const users = [
      { name: 'Bob Bobson', age: 30 },
      { name: 'John Green', age: 44 }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' }); // status -> 200, content-type -> json
    res.end(JSON.stringify(users));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
