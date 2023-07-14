const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "..", "client")));

// Handle the root URL request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

// Handle other routes
app.get("/search", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "search.html"));
});

app.get("/addABook", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "addABook.html"));
});

app.get("/books", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "books.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
