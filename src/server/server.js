const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Handle the root URL request
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Handle other routes
app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'search.html'));
});

app.get('/addABook', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'addABook.html'));
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
