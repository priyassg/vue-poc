const express = require('express');
const fs = require('fs');
const path = require('path');

const server = express();
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.html', 'utf-8'),
});

const bundle = require('./dist/server.bundle.js');

server.use('/dist', express.static(path.join(__dirname, './dist')));

// start server
server.get('*', (req, res) => {
  bundle.default().then((app) => {
    const context = {
      title: 'Server Side Rendering',
    };
    renderer.renderToString(app, context, (err, html) => {
      if (err) {
        res.end('Error');
      } else {
        res.end(html);
      }
    });
  }).catch((err) => {
    console.log(err);
    res.end(err);
  });
});

server.listen(8080);
