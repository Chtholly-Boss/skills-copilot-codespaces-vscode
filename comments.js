// Create web server
const express = require('express');
const app = express();
const port = 3000;

// create a route
app.get('/comments/:id', (req, res) => {
  res.send('You requested a comment whose id is ' + req.params.id);
});

// start server
app.listen(port, () => {
  console.log('Server started at http://localhost:' + port);
});