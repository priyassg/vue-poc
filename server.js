const express = require('express');
const fs = 
const server = express();

// setup server
server.get('*', (req, res) => {
  res.end('Hello World');
});

server.listen(8080);
