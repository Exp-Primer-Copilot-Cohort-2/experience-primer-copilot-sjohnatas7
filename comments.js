// Create web server
const express = require('express');
const app = express();

// Add body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Add comments
const comments = [];

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Post comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

