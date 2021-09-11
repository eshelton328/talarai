const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static('../dist/'));
app.use(express.json());

// redirects all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.listen(process.env.PORT || 3000);